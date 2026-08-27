/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v5.1 — LLAMA 3.2 (IA locale, gratuite, optionnelle)

   Contrairement à une intégration "décorative", ce fichier est
   réellement appelé depuis script.js :
   - giveNextClue() → getLlamaClue()  (mode "je devine")
   - handleHint()   → getLlamaGuess() (mode "je fais deviner")

   Si Llama n'est pas activée (ou échoue), le jeu retombe
   automatiquement sur le moteur heuristique de script.js.
   ═══════════════════════════════════════════════════════════════ */

let AI_ENGINE     = null;
let AI_LOADING    = false;
let AI_READY      = false;
let AI_ENABLED    = false;
let AI_LAST_ERROR = '';

// ── Deux system prompts SÉPARÉS ──────────────────────────────────
// Avant : un seul GAME_CONTEXT mélangeait les règles des deux modes
// dans le même message système. Avec un modèle aussi petit (1B), ça
// causait un mélange des formats : le mode "indice" se mettait à
// répondre "1. FOOT" ou "#1: NATURE" en imitant le format numéroté
// des exemples du mode "devine", pourtant hors sujet ici. Séparer les
// deux system prompts évite cette confusion.

// Mode "JE DEVINE" (l'IA donne des indices) — le joueur doit deviner.
//
// ⚠️ Un system prompt qui DÉCRIT les règles en prose ne suffit pas pour
// un modèle aussi petit (1B) : testé en conditions réelles, il produit
// souvent des mots hors-sujet ou carrément inventés ("gathe",
// "mousquaine"...). Un vrai historique de conversation avec des
// exemples DÉJÀ RÉSOLUS (few-shot) donne des résultats nettement
// meilleurs et plus rapides : le modèle complète un motif qu'il vient
// de voir plutôt que d'interpréter une consigne abstraite.
const CLUE_CONTEXT = `Tu es l'IA du jeu "Mot de Passe" en français. Tu donnes des indices par association d'idées pour faire deviner un mot secret à un joueur, sans jamais le dire. Réponds toujours par UN SEUL mot ou une expression très courte (1 à 3 mots), sans numéro, sans ponctuation, sans phrase.`;

// Exemples déjà résolus, injectés comme historique de conversation
// avant la vraie question (voir buildClueMessages ci-dessous).
const CLUE_FEWSHOT = [
  { role: 'user', content: 'Mot secret : PARIS\nThème : Géographie\nIndice :' },
  { role: 'assistant', content: 'capitale' },
  { role: 'user', content: 'Mot secret : GUITARE\nThème : Arts & Littérature\nIndice :' },
  { role: 'assistant', content: 'instrument' },
  { role: 'user', content: 'Mot secret : NAPOLÉON\nThème : Histoire\nIndice :' },
  { role: 'assistant', content: 'empereur' },
  { role: 'user', content: 'Mot secret : HANDBALL\nThème : Sports & Loisirs\nIndice :' },
  { role: 'assistant', content: 'collectif' },
];

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

// ── Initialisation du moteur Llama 3.2 (1B, quantifié) ──────────────
async function initLlamaAI(onProgress) {
  if (AI_READY) return true;
  if (AI_LOADING) {
    while (AI_LOADING) await new Promise(r => setTimeout(r, 100));
    return AI_READY;
  }

  // Les modules ES (import de la librairie WebLLM) sont bloqués par les
  // navigateurs quand la page est ouverte en double-clic (protocole
  // file://) : c'est une restriction du navigateur, pas un bug du jeu.
  // → il faut servir le dossier via un petit serveur local (http://…)
  if (location.protocol === 'file:') {
    AI_LAST_ERROR = "Llama nécessite d'ouvrir le jeu via un serveur local (http://…) — le double-clic (file://) bloque le chargement du module WebLLM.";
    console.error('❌', AI_LAST_ERROR);
    return false;
  }

  if (typeof window.CreateMLCEngine !== 'function') {
    AI_LAST_ERROR = "Le module WebLLM n'a pas pu être chargé (connexion internet indisponible, ou script bloqué). Vérifie ta connexion et recharge la page.";
    console.error('❌', AI_LAST_ERROR);
    return false;
  }

  if (!navigator.gpu) {
    AI_LAST_ERROR = 'WebGPU indisponible sur ce navigateur. Utilise Chrome ou Edge 113+.';
    console.error('❌', AI_LAST_ERROR);
    return false;
  }

  AI_LOADING = true;

  try {
    console.log('🧠 Initialisation de Llama 3.2 1B...');

    AI_ENGINE = await window.CreateMLCEngine('Llama-3.2-1B-Instruct-q4f16_1-MLC', {
      initProgressCallback: (progress) => {
        const percent = Math.floor(progress.progress * 100);
        console.log(`📥 Llama: ${percent}% - ${progress.text || ''}`);
        if (onProgress) onProgress(percent, progress.text);
      }
    });

    // Test rapide avec le contexte système
    // ⚠️ WebLLM exige que le dernier message soit `user` (ou `tool`) —
    // un message `system` seul déclenche une MessageOrderError et fait
    // échouer l'initialisation même si le modèle a bien été chargé.
    await AI_ENGINE.chat.completions.create({
      messages: [
        { role: 'system', content: CLUE_CONTEXT },
        { role: 'user', content: 'Test' }
      ],
      temperature: 0.1,
      max_tokens: 5,
    });

    AI_READY = true;
    AI_ENABLED = true;
    AI_LAST_ERROR = '';
    console.log('✅ Llama 3.2 prêt !');
    return true;
  } catch (error) {
    AI_LAST_ERROR = (error && error.message) ? error.message : String(error);
    console.error('❌ Erreur Llama:', error);
    AI_READY = false;
    AI_ENABLED = false;
    return false;
  } finally {
    AI_LOADING = false;
  }
}

// ── DONNER UN INDICE (mode "je devine") ──────────────────────────
// S'adapte aux mauvaises réponses déjà données par le joueur.
async function getLlamaClue(word, clueNumber, theme, previousClues = [], wrongGuesses = []) {
  const wordData = (typeof getWordData === 'function') ? getWordData(STATE.resolvedTheme, word) : null;

  if (!AI_READY || !AI_ENABLED) {
    // Fallback : associations prédéfinies
    if (wordData && wordData.assocs && wordData.assocs[clueNumber - 1]) {
      return wordData.assocs[clueNumber - 1];
    }
    return null;
  }

  try {
    const prevContext = previousClues.length > 0
      ? `\nIndices déjà donnés : ${previousClues.join(', ')}\nNE RÉPÈTE PAS ces indices.`
      : '';

    const wrongContext = wrongGuesses.length > 0
      ? `\nLe joueur s'est trompé sur : ${wrongGuesses.join(', ')}\nOriente ton indice différemment de ces erreurs.`
      : '';

    // On rejoue les exemples résolus (CLUE_FEWSHOT) comme historique de
    // conversation, puis on pose la vraie question dans le même format
    // exact ("Mot secret : … / Thème : … / Indice :") — c'est ce motif
    // répété qui guide le modèle, bien plus qu'une consigne en prose.
    const response = await AI_ENGINE.chat.completions.create({
      messages: [
        { role: 'system', content: CLUE_CONTEXT },
        ...CLUE_FEWSHOT,
        { role: 'user', content: `Mot secret : ${word}\nThème : ${theme}${prevContext}${wrongContext}\nIndice :` }
      ],
      // Testé en direct : 0.6-0.7 donne des indices plus "créatifs" mais
      // aussi plus souvent hors-sujet pour un modèle aussi petit ; 0.3
      // colle davantage au motif des exemples et reste plus fiable en
      // moyenne (au prix d'un peu moins de variété).
      temperature: 0.3,
      max_tokens: 8,
    });

    let clue = response.choices[0].message.content.trim();
    // Retire un éventuel format numéroté ("1.", "#2:", "3)") que le
    // petit modèle imite parfois en confondant avec l'autre mode.
    clue = clue.replace(/^#?\s*\d+\s*[.):-]\s*/, '');
    clue = clue.replace(/^(Indice|L'indice|Voici|Réponse|Mot|Association)[\s:]+/i, '');
    clue = clue.replace(/[.!?;]$/g, '');
    clue = clue.split('\n')[0];
    clue = clue.replace(/^["']|["']$/g, '');
    clue = clue.replace(/#/g, '').trim();
    clue = clue.toLowerCase().trim();

    // Anti-leak : le mot secret ne doit pas apparaître dans l'indice.
    // On réutilise aussi isClueInvalid() (déjà utilisé pour valider les
    // indices tapés par un humain en mode "je fais deviner") : elle
    // détecte en plus les préfixes/racines communes et les mots trop
    // proches (Levenshtein), ce qu'un simple "includes" ne voit pas —
    // ex. Llama qui invente une variante du mot secret (déjà observé).
    const normalizedClue = normalize(clue);
    const normalizedWord = normalize(word);
    const leaks = normalizedClue.includes(normalizedWord) || normalizedWord.includes(normalizedClue)
      || (typeof isClueInvalid === 'function' && isClueInvalid(clue, word));
    if (!clue || leaks) {
      console.warn(`⚠️ ANTI-LEAK ou indice vide: "${clue}" → fallback`);
      return (wordData && wordData.assocs[clueNumber - 1]) || null;
    }

    if (clue.length > 25 || clue.length < 2 || /\d/.test(clue)) {
      console.warn(`⚠️ Indice hors gabarit: "${clue}" → fallback`);
      return (wordData && wordData.assocs[clueNumber - 1]) || null;
    }

    console.log(`✅ Llama indice #${clueNumber}: "${clue}"`);
    return clue;
  } catch (error) {
    console.error('❌ Erreur getLlamaClue:', error);
    return (wordData && wordData.assocs[clueNumber - 1]) || null;
  }
}

// ── DEVINER LE MOT (mode "je fais deviner") ──────────────────────
// candidateWords : liste déjà pré-triée par le moteur heuristique
// (les meilleurs candidats selon le score cumulé des indices).
// Llama affine le choix final parmi ces candidats (désambiguïsation
// sémantique, ex. pays vs. ville) plutôt que de chercher dans les
// ~100+ mots du thème — plus rapide et plus fiable.
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

    const response = await AI_ENGINE.chat.completions.create({
      messages: [
        { role: 'system', content: GUESS_CONTEXT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 10,
    });

    let answer = response.choices[0].message.content.trim();
    console.log('🤖 Llama devine:', answer);

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

    // Essayer d'extraire juste le mot si le format numéro n'a pas matché
    let guess = answer.replace(/^\d+\.\s*/, '').toUpperCase();
    guess = guess.split('\n')[0].split(' ')[0];
    guess = guess.replace(/[^A-ZÀ-Ÿ-]/g, '');
    const validGuess = topWords.find(w => normalize(w) === normalize(guess));
    if (validGuess) return { guess: validGuess };

    console.warn(`⚠️ Réponse Llama non exploitable: "${answer}" → repli heuristique`);
    return null;
  } catch (error) {
    console.error('❌ Erreur getLlamaGuess:', error);
    return null;
  }
}

// ── Modale de chargement (téléchargement ~1,2 Go la 1ère fois) ──────
function showAILoadingModal() {
  const modal = document.createElement('div');
  modal.id = 'ai-loading-modal';
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.95); display: flex; flex-direction: column;
    align-items: center; justify-content: center; z-index: 10000; padding: 20px;
  `;

  modal.innerHTML = `
    <div style="text-align: center; max-width: 400px;">
      <h2 style="color: #fff; margin-bottom: 10px; font-size: 28px;">🧠 Llama 3.2</h2>
      <p style="color: #aaa; margin-bottom: 30px;">Téléchargement du modèle IA<br>~1,2 Go · Une seule fois, mis en cache ensuite</p>
      <div style="background: #222; border-radius: 10px; padding: 4px; margin-bottom: 15px;">
        <div id="ai-progress-bar" style="height: 30px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 8px; width: 0%; transition: width 0.3s;"></div>
      </div>
      <p id="ai-progress-text" style="color: #667eea; font-size: 24px; font-weight: bold; margin-bottom: 10px;">0%</p>
      <p id="ai-progress-status" style="color: #888; font-size: 13px;"></p>
    </div>
  `;

  document.body.appendChild(modal);

  return {
    update: (percent, text) => {
      const bar = document.getElementById('ai-progress-bar');
      const percentText = document.getElementById('ai-progress-text');
      const statusText = document.getElementById('ai-progress-status');
      if (bar) bar.style.width = percent + '%';
      if (percentText) percentText.textContent = percent + '%';
      if (statusText && text) statusText.textContent = text;
    },
    close: () => {
      if (modal.parentNode) modal.parentNode.removeChild(modal);
    }
  };
}

// ── Toggle IA (branché sur #ai-toggle / #ai-status dans index.html) ─
function initAIToggle() {
  const aiToggle = document.getElementById('ai-toggle');
  const aiStatus = document.getElementById('ai-status');

  if (!aiToggle || !aiStatus) {
    console.warn('⚠️ Toggle IA non trouvé dans le HTML');
    return;
  }

  aiToggle.addEventListener('change', async () => {
    if (aiToggle.checked) {
      // Important : on décoche IMMÉDIATEMENT le switch (donc il reste
      // gris, pas vert) tant que Llama n'est pas RÉELLEMENT prête.
      // Le vert (état "checked") ne doit apparaître que quand l'IA
      // fonctionne vraiment — jamais juste parce qu'on a cliqué.
      aiToggle.checked = false;
      aiStatus.textContent = 'Initialisation...';
      aiStatus.style.color = '';
      const modal = showAILoadingModal();

      const success = await initLlamaAI((percent, text) => {
        modal.update(percent, text);
      });

      if (success) {
        setTimeout(() => {
          modal.close();
          aiToggle.checked = true; // ← ne devient vert qu'ici, IA confirmée active
          aiStatus.textContent = '✓ Actif';
          aiStatus.style.color = 'var(--success)';
          if (typeof showToast === 'function') showToast('🧠 Llama 3.2 activé !', 2000);
        }, 400);
      } else {
        modal.close();
        aiToggle.checked = false; // reste gris/éteint : l'IA ne fonctionne pas
        aiStatus.textContent = '✗ Erreur';
        aiStatus.style.color = 'var(--pass)';
        aiStatus.title = AI_LAST_ERROR || "Erreur d'initialisation inconnue.";
        const detail = AI_LAST_ERROR || "Erreur d'initialisation Llama (voir la console F12 pour le détail).";
        if (typeof showToast === 'function') showToast('❌ ' + detail, 4500);
        console.error('❌ Llama désactivée :', detail);
      }
    } else {
      AI_ENABLED = false;
      aiStatus.textContent = 'Désactivé';
      aiStatus.style.color = '';
      if (typeof showToast === 'function') showToast('Mode heuristique (sans IA générative)', 2000);
    }
  });

  if (location.protocol === 'file:') {
    // Ouvert en double-clic : les modules ES (donc WebLLM) ne peuvent
    // pas se charger. On le signale tout de suite, avant même d'essayer.
    aiToggle.disabled = true;
    aiStatus.textContent = '✗ Nécessite un serveur local';
    aiStatus.style.color = 'var(--muted)';
    aiStatus.title = "Ouvre le jeu via http://localhost (ex: python3 -m http.server) plutôt qu'en double-cliquant sur index.html — le double-clic bloque le chargement de l'IA.";
    console.warn('⚠️ Page ouverte en file:// — Llama indisponible (voir le title du badge IA)');
    return;
  }

  if (!navigator.gpu) {
    aiToggle.disabled = true;
    aiStatus.textContent = '✗ WebGPU requis';
    aiStatus.style.color = 'var(--muted)';
    aiStatus.title = 'Ton navigateur ne supporte pas WebGPU (requis pour Llama 3.2). Utilise Chrome/Edge 113+.';
    console.warn('⚠️ WebGPU non disponible - Llama désactivée');
  }
}

console.log('✅ Script Llama v5.2 chargé (branché sur giveNextClue / handleHint)');

// ── Auto-init du toggle IA ───────────────────────────────────────
// script.js appelle déjà `initAIToggle()` depuis sa fonction init(),
// mais cet appel arrive AVANT que ce fichier (chargé juste après
// script.js dans index.html) soit exécuté : à ce moment-là,
// `initAIToggle` n'existe pas encore, donc le `if (typeof
// initAIToggle === 'function')` échoue silencieusement et le listener
// du switch IA n'est JAMAIS attaché (le switch reste visuellement
// cliquable mais ne fait plus rien). On s'auto-initialise ici, une
// fois que ce script est chargé et que le DOM existe déjà (les deux
// <script> sont en bas du <body>).
if (typeof initAIToggle === 'function') initAIToggle();
