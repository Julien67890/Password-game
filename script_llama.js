/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v6 — IA CLOUD (Mistral, via proxy Cloudflare Worker)

   Historique : la v5 utilisait Llama 3.2 1B en local via WebLLM
   (100% offline). Testé en conditions réelles sur de nombreux mots,
   ce modèle s'est montré trop limité pour donner des indices
   d'association d'idées cohérents (surtout sur les mots proches —
   ex. plusieurs sports de balle — et pour s'adapter aux erreurs du
   joueur). On est donc passés à un vrai modèle (Mistral Small),
   appelé via un petit proxy Cloudflare Worker qui cache la clé API
   (indispensable : le jeu est un site statique public sur GitHub
   Pages, la clé ne peut jamais être dans ce fichier).

   Conséquence : l'IA nécessite désormais une connexion internet
   (elle n'est plus "100% offline"). Le moteur heuristique (indices
   curés à la main, script.js) reste lui 100% local et sert de repli
   automatique si l'IA est désactivée, indisponible, ou en erreur.

   Ce fichier reste appelé exactement comme avant depuis script.js :
   - giveNextClue() → getLlamaClue()  (mode "je devine")
   - handleHint()   → getLlamaGuess() (mode "je fais deviner")
   ═══════════════════════════════════════════════════════════════ */

// URL du proxy Cloudflare Worker (voir DEPLOIEMENT_IA.md).
// La clé API Mistral n'est PAS ici : elle est stockée en secret côté
// Worker, donc invisible depuis ce fichier public.
const AI_WORKER_URL = 'https://mot-de-passe-ia-proxy.guioniejulien.workers.dev';

let AI_LOADING    = false;
let AI_READY      = false;
let AI_ENABLED    = false;
let AI_LAST_ERROR = '';

// ── Mode "JE DEVINE" : l'IA génère la LISTE des indices ──────────
//
// ⚠️ Changement important par rapport aux versions précédentes.
// Avant, le jeu faisait un appel PAR INDICE, et ajoutait au fil de
// l'eau des lignes "Indices déjà donnés : … / NE RÉPÈTE PAS" puis
// "Le joueur s'est trompé sur : … / Oriente ton indice différemment".
// Problème : les exemples few-shot ne montraient jamais ces lignes,
// donc dès le 2e indice le modèle n'avait plus de motif à imiter et
// partait complètement ailleurs (BASEBALL → "champignon", testé en
// direct). Et en ne demandant qu'un mot à la fois, le modèle ne
// voyait jamais la progression d'ensemble qu'il était censé
// construire.
//
// Maintenant : UN SEUL appel au début de chaque mot, qui demande les
// 3 indices d'un coup, du plus général au plus précis. Le modèle voit
// la suite complète et reste cohérent (BASEBALL → "sport, bâton,
// États-Unis"). Bonus : 1 appel par mot au lieu de 10, bien plus
// confortable pour le quota gratuit.
const CLUE_CONTEXT = `Tu es l'IA du jeu "Mot de Passe" en français. Pour un mot secret, tu produis EXACTEMENT 3 indices d'association d'idées, du plus général au plus précis, qui permettent de deviner le mot. Le 1er indice donne la catégorie (sport, pays, ville, compositeur, animal...). Tu ne dis jamais le mot secret ni un mot de la même famille. Réponds uniquement par les 3 indices séparés par des virgules, en minuscules, sans numéro ni phrase.`;

// Exemples déjà résolus, injectés comme historique de conversation.
// Ils reprennent volontairement le format défini à la main dans
// script.js (catégorie d'abord : "sport, main, but" pour HANDBALL,
// "ville, maroc, blanc" pour CASABLANCA) pour que les indices générés
// soient homogènes avec les associations curées.
const CLUE_FEWSHOT = [
  { role: 'user', content: 'Mot secret : HANDBALL\nThème : Sports & Loisirs\nIndices :' },
  { role: 'assistant', content: 'sport, main, but' },
  { role: 'user', content: 'Mot secret : CASABLANCA\nThème : Géographie\nIndices :' },
  { role: 'assistant', content: 'ville, maroc, blanc' },
  { role: 'user', content: 'Mot secret : MOZART\nThème : Arts & Littérature\nIndices :' },
  { role: 'assistant', content: 'compositeur, autrichien, requiem' },
];

// Nombre d'indices fournis par l'IA au début de chaque mot. Au-delà,
// on enchaîne sur les associations curées de script.js (qui sont de
// toute façon de qualité humaine).
const AI_CLUES_PER_WORD = 3;

// Listes déjà générées, par mot : évite de régénérer quand un mot
// passé revient plus tard dans la manche, et garantit que les indices
// restent les mêmes d'un passage à l'autre.
const AI_CLUE_LISTS = {};
// Générations en cours, par mot : si le joueur clique vite sur
// "Indice suivant", on attend la même requête au lieu d'en lancer
// deux en parallèle.
const AI_CLUE_PENDING = {};

// Mode "JE FAIS DEVINER" (le joueur donne des indices, l'IA devine).
const GUESS_CONTEXT = `Tu es l'IA du jeu "Mot de Passe" en français, en mode "je fais deviner" : le joueur te donne des indices, tu dois deviner le mot secret.

RÈGLE ABSOLUE : CHOISIS UNIQUEMENT DANS LA LISTE FOURNIE !

- Analyse TOUS les indices donnés par le joueur, y compris les plus récents
- Identifie le TYPE recherché (ville ? pays ? monument ? personne ?)
- Choisis UNIQUEMENT parmi la liste fournie
- Réponds avec le NUMÉRO suivi du MOT

EXEMPLES CRITIQUES (différenciation pays/villes) :

Exemple 1 - Capitale actuelle
Indices : "capitale, turquie"
Liste : [ISTANBUL, ANKARA, TURQUIE]
Analyse : La capitale actuelle de la Turquie est ANKARA (depuis 1923)
✅ Réponse : "2. ANKARA"
❌ FAUX : ISTANBUL (ancienne capitale) / TURQUIE (pays, pas ville)

Exemple 2 - Pays d'Amérique du Nord
Indices : "pays, amérique nord, froid"
Liste : [CANADA, GROENLAND, TORONTO, QUÉBEC, ALASKA]
Analyse : Seul CANADA est un pays indépendant
✅ Réponse : "1. CANADA"

Exemple 3 - Ville sur le Bosphore
Indices : "ville, turquie, bosphore"
Liste : [ISTANBUL, ANKARA, TURQUIE, IZMIR]
Analyse : Seule ISTANBUL est sur le Bosphore
✅ Réponse : "1. ISTANBUL"

PROCESSUS DE RÉFLEXION :
1. Lis TOUS les indices
2. Identifie le TYPE dans les indices (pays/ville/monument/personne/etc.)
3. Élimine les candidats du mauvais type
4. Parmi ceux qui restent, choisis le plus cohérent
5. Réponds UNIQUEMENT avec "NUMÉRO. MOT"`;

// ── Appel bas niveau au proxy (remplace AI_ENGINE.chat.completions) ──
// Le Worker a exactement la même forme de réponse que WebLLM/OpenAI
// (response.choices[0].message.content), donc le reste du fichier
// n'a presque pas changé par rapport à la v5.
async function callMistral(messages, temperature, max_tokens) {
  const response = await fetch(AI_WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, temperature, max_tokens }),
  });

  if (!response.ok) {
    const detail = await response.json().catch(() => ({}));
    throw new Error(detail.error || `Erreur proxy IA (${response.status})`);
  }

  return response.json();
}

// ── Initialisation (juste un test de connectivité, plus de download) ─
async function initLlamaAI() {
  if (AI_READY) return true;
  if (AI_LOADING) {
    while (AI_LOADING) await new Promise(r => setTimeout(r, 100));
    return AI_READY;
  }

  if (AI_WORKER_URL.includes('TON-COMPTE')) {
    AI_LAST_ERROR = "L'IA n'est pas configurée : l'URL du proxy (AI_WORKER_URL dans script_llama.js) n'a pas été renseignée après le déploiement du Worker Cloudflare.";
    console.error('❌', AI_LAST_ERROR);
    return false;
  }

  AI_LOADING = true;

  try {
    console.log('🧠 Connexion à l\'IA (Mistral)...');

    const response = await callMistral(
      [
        { role: 'system', content: CLUE_CONTEXT },
        { role: 'user', content: 'Mot secret : TEST\nThème : Test\nIndices :' },
      ],
      0.1,
      10
    );

    if (!response.choices || !response.choices[0]) {
      throw new Error('Réponse du proxy IA invalide');
    }

    AI_READY = true;
    AI_ENABLED = true;
    AI_LAST_ERROR = '';
    console.log('✅ IA prête !');
    return true;
  } catch (error) {
    AI_LAST_ERROR = (error && error.message) ? error.message
      : "Impossible de contacter l'IA. Vérifie ta connexion internet.";
    console.error('❌ Erreur IA:', error);
    AI_READY = false;
    AI_ENABLED = false;
    return false;
  } finally {
    AI_LOADING = false;
  }
}

// ── Nettoyage de la liste renvoyée par l'IA ──────────────────────
// Le modèle répond "sport, bâton, États-Unis", parfois avec une
// parenthèse explicative ("eau (à cause de Sainte-Hélène)") ou un
// retour à la ligne. On découpe, on nettoie, on valide chaque indice.
function parseClueList(raw, word) {
  const items = raw
    .replace(/\([^)]*\)/g, ' ')          // commentaires entre parenthèses
    .replace(/\n/g, ',')
    .split(',')
    .map(s => s
      .replace(/^#?\s*\d+\s*[.):-]\s*/, '')
      .replace(/^(Indices?|Voici|Réponse)[\s:]+/i, '')
      .replace(/["'#]/g, '')
      .replace(/[.!?;:]+$/, '')
      .trim()
      .toLowerCase())
    .filter(Boolean);

  const seen = new Set();
  const clues = [];

  for (const clue of items) {
    if (clue.length > 25 || clue.length < 2 || /\d/.test(clue)) continue;
    if (seen.has(clue)) continue;

    // Anti-leak : le mot secret ne doit jamais transparaître dans un
    // indice. isClueInvalid() (script.js) attrape en plus les racines
    // communes et les mots trop proches (Levenshtein).
    const nClue = normalize(clue);
    const nWord = normalize(word);
    const leaks = nClue.includes(nWord) || nWord.includes(nClue)
      || (typeof isClueInvalid === 'function' && isClueInvalid(clue, word));
    if (leaks) {
      console.warn(`⚠️ ANTI-LEAK sur "${clue}" (mot : ${word}) → ignoré`);
      continue;
    }

    seen.add(clue);
    clues.push(clue);
  }

  return clues;
}

// ── Génération de la liste d'indices d'un mot (1 seul appel) ─────
async function generateClueList(word, theme) {
  if (AI_CLUE_LISTS[word]) return AI_CLUE_LISTS[word];
  if (AI_CLUE_PENDING[word]) return AI_CLUE_PENDING[word];

  AI_CLUE_PENDING[word] = (async () => {
    try {
      const response = await callMistral(
        [
          { role: 'system', content: CLUE_CONTEXT },
          ...CLUE_FEWSHOT,
          { role: 'user', content: `Mot secret : ${word}\nThème : ${theme}\nIndices :` }
        ],
        0.4,
        40
      );

      const raw = response.choices[0].message.content.trim();
      const clues = parseClueList(raw, word).slice(0, AI_CLUES_PER_WORD);
      AI_CLUE_LISTS[word] = clues;
      console.log(`✅ IA indices pour ${word} :`, clues.join(', ') || '(aucun valide)');
      return clues;
    } catch (error) {
      console.error('❌ Erreur generateClueList:', error);
      AI_CLUE_LISTS[word] = [];   // on ne réessaie pas en boucle
      return [];
    } finally {
      delete AI_CLUE_PENDING[word];
    }
  })();

  return AI_CLUE_PENDING[word];
}

// ── Repli sur les associations curées de script.js ───────────────
// On saute celles déjà données (l'IA a pu proposer "sport" alors que
// c'est aussi la 1re association curée) pour ne jamais répéter.
function pickCuratedClue(wordData, clueNumber, previousClues) {
  if (!wordData || !wordData.assocs) return null;
  const already = new Set((previousClues || []).map(c => normalize(c)));
  for (const assoc of wordData.assocs) {
    if (!already.has(normalize(assoc))) return assoc;
  }
  return wordData.assocs[clueNumber - 1] || null;
}

// ── DONNER UN INDICE (mode "je devine") ──────────────────────────
// Les AI_CLUES_PER_WORD premiers indices viennent de la liste générée
// en un seul appel au début du mot ; ensuite on enchaîne sur les
// associations écrites à la main. Signature inchangée : script.js
// appelle cette fonction exactement comme avant.
async function getLlamaClue(word, clueNumber, theme, previousClues = [], wrongGuesses = []) {
  const wordData = (typeof getWordData === 'function') ? getWordData(STATE.resolvedTheme, word) : null;

  if (!AI_READY || !AI_ENABLED || clueNumber > AI_CLUES_PER_WORD) {
    return pickCuratedClue(wordData, clueNumber, previousClues);
  }

  try {
    const clues = await generateClueList(word, theme);
    const clue = clues[clueNumber - 1];

    if (!clue) {
      // Liste trop courte (indices rejetés par l'anti-leak, ou appel
      // en erreur) : on complète avec les associations curées.
      return pickCuratedClue(wordData, clueNumber, previousClues);
    }

    console.log(`✅ IA indice #${clueNumber}: "${clue}"`);
    return clue;
  } catch (error) {
    console.error('❌ Erreur getLlamaClue:', error);
    return pickCuratedClue(wordData, clueNumber, previousClues);
  }
}

// ── DEVINER LE MOT (mode "je fais deviner") ──────────────────────
async function getLlamaGuess(hints, theme, candidateWords, previousGuesses = []) {
  if (!AI_READY || !AI_ENABLED || !candidateWords || candidateWords.length === 0) {
    return null;
  }

  try {
    const topWords = candidateWords.slice(0, 8);

    const prompt = `Thème : ${theme}

Indices donnés par le joueur (du plus ancien au plus récent) :
${hints.map((h, i) => `${i + 1}. "${h}"`).join('\n')}

Mots possibles (choisis UNIQUEMENT parmi eux) :
${topWords.map((w, i) => `${i + 1}. ${w}`).join('\n')}
${previousGuesses.length > 0 ? `\n❌ Déjà proposés (NE PAS répéter) : ${previousGuesses.join(', ')}` : ''}

Analyse :
1. Identifie le TYPE recherché (pays/ville/monument/personne/etc.)
2. Élimine les mauvais types
3. Choisis le plus cohérent avec TOUS les indices

Réponds UNIQUEMENT avec "NUMÉRO. MOT" (exemple : "3. PARIS") :`;

    const response = await callMistral(
      [
        { role: 'system', content: GUESS_CONTEXT },
        { role: 'user', content: prompt }
      ],
      0.2,
      10
    );

    let answer = response.choices[0].message.content.trim();
    console.log('🤖 IA devine:', answer);

    let match = answer.match(/(\d+)\.\s*([A-ZÀ-Ÿ-]+)/i);

    if (match) {
      const num = parseInt(match[1], 10) - 1;
      const word = match[2].toUpperCase();

      if (num >= 0 && num < topWords.length) {
        return { guess: topWords[num] };
      }
      const validWord = topWords.find(w => normalize(w) === normalize(word));
      if (validWord) return { guess: validWord };
    }

    let guess = answer.replace(/^\d+\.\s*/, '').toUpperCase();
    guess = guess.split('\n')[0].split(' ')[0];
    guess = guess.replace(/[^A-ZÀ-Ÿ-]/g, '');
    const validGuess = topWords.find(w => normalize(w) === normalize(guess));
    if (validGuess) return { guess: validGuess };

    console.warn(`⚠️ Réponse IA non exploitable: "${answer}" → repli heuristique`);
    return null;
  } catch (error) {
    console.error('❌ Erreur getLlamaGuess:', error);
    return null;
  }
}

// ── Toggle IA (branché sur #ai-toggle / #ai-status dans index.html) ─
// Plus de téléchargement ni de barre de progression : la connexion
// au proxy est quasi instantanée, donc plus besoin de modale.
function initAIToggle() {
  const aiToggle = document.getElementById('ai-toggle');
  const aiStatus = document.getElementById('ai-status');

  if (!aiToggle || !aiStatus) {
    console.warn('⚠️ Toggle IA non trouvé dans le HTML');
    return;
  }

  aiToggle.addEventListener('change', async () => {
    if (aiToggle.checked) {
      // Décoché immédiatement (reste gris) tant que l'IA n'est pas
      // RÉELLEMENT confirmée active — le vert n'apparaît qu'ensuite.
      aiToggle.checked = false;
      aiStatus.textContent = 'Connexion...';
      aiStatus.style.color = '';

      const success = await initLlamaAI();

      if (success) {
        aiToggle.checked = true;
        aiStatus.textContent = '✓ Actif';
        aiStatus.style.color = 'var(--success)';
        if (typeof showToast === 'function') showToast('🧠 IA activée !', 2000);
      } else {
        aiToggle.checked = false;
        aiStatus.textContent = '✗ Erreur';
        aiStatus.style.color = 'var(--pass)';
        aiStatus.title = AI_LAST_ERROR || "Erreur d'initialisation inconnue.";
        const detail = AI_LAST_ERROR || "Erreur d'initialisation IA (voir la console F12 pour le détail).";
        if (typeof showToast === 'function') showToast('❌ ' + detail, 4500);
        console.error('❌ IA désactivée :', detail);
      }
    } else {
      AI_ENABLED = false;
      aiStatus.textContent = 'Désactivé';
      aiStatus.style.color = '';
      if (typeof showToast === 'function') showToast('Mode heuristique (sans IA générative)', 2000);
    }
  });
}

console.log('✅ Script IA v6 chargé (Mistral via proxy — branché sur giveNextClue / handleHint)');

// ── Auto-init du toggle IA ───────────────────────────────────────
// script.js appelle déjà `initAIToggle()` depuis sa fonction init(),
// mais cet appel arrive AVANT que ce fichier (chargé juste après
// script.js dans index.html) soit exécuté : à ce moment-là,
// `initAIToggle` n'existe pas encore, donc l'appel échoue
// silencieusement et le listener du switch IA n'est jamais attaché.
// On s'auto-initialise ici, une fois ce script chargé (DOM déjà prêt,
// les deux <script> sont en bas du <body>).
if (typeof initAIToggle === 'function') initAIToggle();
