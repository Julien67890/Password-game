/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v3 — Groq AI + 15 thèmes × 50 mots
   ═══════════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════════════════
// 0. CONFIG GROQ
// ══════════════════════════════════════════════════════════════════
const GROQ_KEY   = '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';
const GROQ_MODEL = 'llama3-8b-8192';
const GROQ_URL   = 'https://api.groq.com/openai/v1/chat/completions';

async function groqAsk(system, user, maxTokens = 30) {
  try {
    const r = await fetch(GROQ_URL, {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 'Authorization':`Bearer ${GROQ_KEY}` },
      body: JSON.stringify({
        model: GROQ_MODEL, max_tokens: maxTokens, temperature: 0.2,
        messages: [{ role:'system', content: system }, { role:'user', content: user }]
      })
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.choices?.[0]?.message?.content?.trim() || null;
  } catch { return null; }
}

// ══════════════════════════════════════════════════════════════════
// 1. DICTIONNAIRE — 15 thèmes × 50 mots
// ══════════════════════════════════════════════════════════════════

const THEME_WORDS = {
  '🦁 Animaux': [
    'LION','DAUPHIN','GIRAFE','AIGLE','SERPENT','TIGRE','ÉLÉPHANT','PIEUVRE','KOALA','RENARD',
    'BALEINE','FLAMANT','GORILLE','PINGOUIN','HÉRISSON','ARAIGNÉE','RHINOCÉROS','CROCODILE','PAON','CHAT',
    'CHIEN','CHEVAL','VACHE','COCHON','COQ','PERROQUET','PANDA','ZÈBRE','LOUP','OURS',
    'CERF','CANARD','ABEILLE','PAPILLON','TORTUE','LAPIN','HIBOU','REQUIN','MÉDUSE','CHIMPANZÉ',
    'GAZELLE','LÉOPARD','LOUTRE','BISON','CIGOGNE','PÉLICAN','ÉCUREUIL','RATON-LAVEUR','MOUFETTE','FENNEC'
  ],
  '🍕 Nourriture': [
    'PIZZA','SUSHI','CRÊPE','BURGER','CHOCOLAT','FROMAGE','AVOCAT','CROISSANT','ESCARGOT','MACARON',
    'TARTARE','BRIOCHE','CURRY','CITRON','MIEL','PIMENT','GLACE','CAFÉ','VIN','BIÈRE',
    'FONDUE','SOUPE','TARTE','BAGUETTE','SAUCISSE','OMELETTE','GRATIN','RISOTTO','PAELLA','RACLETTE',
    'TIRAMISU','BAGEL','NACHOS','RAMEN','CHURROS','BROWNIE','SORBET','SMOOTHIE','GRANOLA','TARTINE',
    'FONDANT','CROQUE-MONSIEUR','QUICHE','RATATOUILLE','BOUILLABAISSE','CASSOULET','COUSCOUS','TAJINE','MOUSSAKA','GUACAMOLE'
  ],
  '🎬 Cinéma & Culture': [
    'VAMPIRE','ROBOT','ZOMBIE','PIRATE','SUPERHÉROS','DÉTECTIVE','ACTEUR','RÉALISATEUR','COMÉDIE','THRILLER',
    'MUSICAL','CINÉMA','ROMAN','PEINTURE','MUSIQUE','THÉÂTRE','SCULPTURE','DANSE','PHOTOGRAPHIE','SÉRIE',
    'DOCUMENTAIRE','ANIMATION','WESTERN','FANTÔME','ESPION','SORCIÈRE','NINJA','COWBOY','SAMURAI','VIKING',
    'GLADIATEUR','MAGICIEN','CLOWN','JONGLEUR','MIME','CONTEUR','TROUBADOUR','BARDE','ACROBATE','ILLUSIONNISTE',
    'MARIONNETTE','VENTRILOQUE','CHANTEUR','COMÉDIEN','DRAMATURGE','CHORÉGRAPHE','SCÉNARISTE','MONTEUR','CADREUR','PRODUCTEUR'
  ],
  '🏠 Maison & Objets': [
    'PARAPLUIE','MIROIR','RÉVEIL','LAMPE','CISEAUX','SABLIER','BOUGIE','TIROIR','CADENAS','COUSSIN',
    'POUBELLE','SAVON','COUVERTURE','SONNETTE','FOUR','RÉFRIGÉRATEUR','ASPIRATEUR','ARROSOIR','ENCEINTE','ORDINATEUR',
    'TÉLÉPHONE','TÉLÉVISION','MONTRE','BALAI','CASSEROLE','FOURCHETTE','COUTEAU','ASSIETTE','VERRE','FENÊTRE',
    'RIDEAU','TABLEAU','ESCALIER','CHEMINÉE','BAIGNOIRE','ROBINET','ÉTAGÈRE','ARMOIRE','BUFFET','RADIATEUR',
    'CAFETIÈRE','GRILLE-PAIN','MIXEUR','VENTILATEUR','MACHINE-À-LAVER','SÈCHE-LINGE','TONDEUSE','PERCEUSE','MARTEAU','TOURNEVIS'
  ],
  '💼 Métiers': [
    'CHIRURGIEN','POMPIER','ARCHITECTE','CUISINIER','ASTRONAUTE','AVOCAT','JOURNALISTE','BOULANGER','PHARMACIEN','PILOTE',
    'INSTITUTEUR','DÉVELOPPEUR','INFIRMIER','DENTISTE','VÉTÉRINAIRE','COMPTABLE','PLOMBIER','ÉLECTRICIEN','MAÇON','COIFFEUR',
    'PSYCHOLOGUE','MILITAIRE','POLICIER','JUGE','MUSICIEN','PHOTOGRAPHE','SCULPTEUR','POÈTE','ROMANCIER','INGÉNIEUR',
    'BIOLOGISTE','CHIMISTE','PHYSICIEN','MATHÉMATICIEN','ARCHÉOLOGUE','ANTHROPOLOGUE','ÉCONOMISTE','PHILOSOPHE','HISTORIEN','DIPLOMATE',
    'AMBASSADEUR','MINISTRE','MAIRE','CONSUL','NOTAIRE','HUISSIER','GREFFIER','PROCUREUR','PRÉFET','SÉNATEUR'
  ],
  '⚽ Sport': [
    'MARATHON','SURF','GYMNASTE','ARBITRE','CHAMPION','GARDIEN','CYCLISTE','BOXEUR','PENALTY','PATINAGE',
    'TENNIS','RUGBY','BASKETBALL','ESCALADE','ÉQUITATION','KARATÉ','JUDO','VOILE','SKI','SNOWBOARD',
    'GOLF','PÉTANQUE','NATATION','AVIRON','PLONGÉE','ESCRIME','TRIATHLON','BIATHLON','BOBSLEIGH','CURLING',
    'BADMINTON','SQUASH','PING-PONG','VOLLEY','HANDBALL','WATERPOLO','HOCKEY','LACROSSE','PADEL','CRICKET',
    'BASEBALL','POLO','FLÉCHETTES','LUGE','SKELETON','TIR-À-L-ARC','HALTÉROPHILIE','LUTTE','PENTATHLON','TRAMPOLINE'
  ],
  '🌍 Géographie': [
    'PARIS','ROME','TOKYO','NEW-YORK','LONDRES','BRÉSIL','ÉGYPTE','INDE','CHINE','MEXIQUE',
    'RUSSIE','AUSTRALIE','CANADA','ESPAGNE','GRÈCE','PORTUGAL','MAROC','SÉNÉGAL','KENYA','JAPON',
    'CORÉE','THAÏLANDE','VIETNAM','PÉROU','CHILI','COLOMBIE','CUBA','ISLANDE','FINLANDE','SUÈDE',
    'NORVÈGE','DANEMARK','POLOGNE','AUTRICHE','SUISSE','BELGIQUE','PAYS-BAS','IRLANDE','SARDAIGNE','SICILE',
    'CORSE','MADAGASCAR','TAÏWAN','IRAN','IRAK','SYRIE','LIBAN','JORDANIE','ISRAËL','ARABIE'
  ],
  '🔬 Science & Nature': [
    'TROU-NOIR','FOUDRE','VOLCAN','CERVEAU','ADN','GRAVITÉ','MOLÉCULE','PLANÈTE','LUNE','ÉTOILE',
    'COMÈTE','RELATIVITÉ','CELLULE','ÉVOLUTION','ÉLECTRICITÉ','MAGNÉTISME','LUMIÈRE','VIRUS','CHIMIE','ALGORITHME',
    'PHOTOSYNTHÈSE','RADIOACTIVITÉ','FUSION','FISSION','PLASMA','NEUTRON','PROTON','ÉLECTRON','QUARK','BOSON',
    'SUPERNOVA','PULSAR','NÉBULEUSE','GALAXIE','THERMODYNAMIQUE','HYDRAULIQUE','AÉRODYNAMIQUE','ACOUSTIQUE','OPTIQUE','SPECTROSCOPIE',
    'OSMOSE','CATALYSE','POLYMÈRE','CRISTAL','ENZYME','HORMONE','NEURONE','SYNAPSE','CHROMOSOME','MITOSE'
  ],
  '🏰 Histoire': [
    'PHARAON','VIKING','CROISADE','RENAISSANCE','RÉVOLUTION','NAPOLÉON','DÉMOCRATIE','IMPRIMERIE','MENHIR','COLONISATION',
    'SUFFRAGETTE','CATHÉDRALE','INQUISITION','FÉODALISME','ARISTOCRATIE','MONARCHIE','EMPIRE','RÉPUBLIQUE','DICTATURE','TOTALITARISME',
    'COMMUNISME','FASCISME','LIBÉRALISME','SOCIALISME','NATIONALISME','COLONIALISME','IMPÉRIALISME','CAPITALISME','RÉSISTANCE','DÉBARQUEMENT',
    'ARMISTICE','TRAITÉ','SIÈGE','CONQUÊTE','BATAILLE','CROISÉ','TEMPLIER','INQUISITEUR','HÉRÉTIQUE','BÛCHER',
    'GUILLOTINE','BASTILLE','VERSAILLES','SÉNAT','CONSUL','LÉGION','GLADIATEUR','AMPHITHÉÂTRE','AQUEDU','FORUM'
  ],
  '🎲 Émotions & Vie': [
    'AMOUR','AMITIÉ','FAMILLE','RÊVE','PEUR','HUMOUR','MARIAGE','VOYAGE','CADEAU','SECRET',
    'MÉMOIRE','IMAGINATION','HASARD','TRADITION','JOIE','TRISTESSE','COLÈRE','DÉGOÛT','SURPRISE','HONTE',
    'FIERTÉ','JALOUSIE','NOSTALGIE','MÉLANCOLIE','ENTHOUSIASME','ESPOIR','DÉSESPOIR','COURAGE','GÉNÉROSITÉ','PATIENCE',
    'CONFIANCE','MÉFIANCE','EMPATHIE','CURIOSITÉ','ENNUI','EXCITATION','ANXIÉTÉ','SÉRÉNITÉ','PASSION','OBSESSION',
    'LIBERTÉ','SOLITUDE','COMPLICITÉ','INTIMITÉ','DEUIL','DÉPRESSION','EUPHORIE','EXTASE','TERREUR','INDIFFÉRENCE'
  ],
  '🎵 Musique': [
    'GUITARE','PIANO','VIOLON','BATTERIE','TROMPETTE','SAXOPHONE','FLÛTE','VIOLONCELLE','CONTREBASSE','HARPE',
    'ACCORDÉON','BANJO','MANDOLINE','UKULÉLÉ','BASSE','SYNTHÉTISEUR','ORGUE','CLAVECIN','LUTH','VIOLE',
    'JAZZ','ROCK','POP','CLASSIQUE','HIP-HOP','REGGAE','BLUES','SOUL','FUNK','ÉLECTRO',
    'MÉTAL','PUNK','FOLK','COUNTRY','SALSA','FLAMENCO','OPÉRA','CHORALE','ORCHESTRE','SYMPHONIE',
    'SONATE','CONCERTO','FUGUE','CANTATE','BALLADE','SÉRÉNADE','NOCTURNE','RHAPSODIE','ÉTUDE','IMPROVISATION'
  ],
  '🌿 Nature & Paysages': [
    'FORÊT','OCÉAN','MONTAGNE','DÉSERT','PRAIRIE','MARAIS','TOUNDRA','SAVANE','JUNGLE','MANGROVE',
    'GLACIER','VOLCAN','CASCADE','RIVIÈRE','LAC','FALAISE','GROTTE','CANYON','DELTA','RÉCIF',
    'ATOLL','ARCHIPEL','PÉNINSULE','PLATEAU','VALLÉE','GORGE','DUNE','OASIS','AURORE','TORNADE',
    'TSUNAMI','BLIZZARD','MOUSSON','BRUME','GRÊLE','VERGLAS','GIVRE','ROSÉE','BROUILLARD','MIRAGE',
    'ARC-EN-CIEL','TONNERRE','ÉCLAIR','TREMBLEMENT','ÉRUPTION','SÉCHERESSE','INONDATION','AVALANCHE','GLISSEMENT','CYCLONE'
  ],
  '🍿 Loisirs & Jeux': [
    'CINÉMA','THÉÂTRE','CONCERT','EXPOSITION','FESTIVAL','CARNAVAL','PIQUE-NIQUE','RANDONNÉE','CAMPING','BOWLING',
    'KARTING','PAINTBALL','LASER-GAME','ESCAPE-ROOM','KARAOKÉ','BILLARD','POKER','ÉCHECS','SCRABBLE','MONOPOLY',
    'TRIVIAL','PICTIONARY','CHARADES','LEGO','PUZZLE','ORIGAMI','BRODERIE','TRICOT','JARDINAGE','BRICOLAGE',
    'PEINTURE','SCULPTURE','POTERIE','MOSAÏQUE','CALLIGRAPHIE','MACRAMÉ','JONGLAGE','MAGIE','CIRQUE','THÉÂTRE-D-OMBRES',
    'PHOTOGRAPHIE','CUISINE','PÂTISSERIE','COUTURE','COLLECTION','PHILATÉLIE','NUMISMATIQUE','GÉNÉALOGIE','ASTRONOMIE-AMATEUR','APICULTURE'
  ],
  '💻 Technologie': [
    'INTERNET','ROBOT','INTELLIGENCE-ARTIFICIELLE','BLOCKCHAIN','RÉALITÉ-VIRTUELLE','CLOUD','BIG-DATA','ALGORITHME','MACHINE-LEARNING','CYBERSÉCURITÉ',
    'HACKER','VIRUS','CRYPTOGRAPHIE','OPEN-SOURCE','LINUX','ANDROID','JAVASCRIPT','PYTHON','JAVA','SQL',
    'API','GPS','WIFI','BLUETOOTH','USB','SSD','RAM','CPU','GPU','DRONE',
    'SATELLITE','NANOTECHNOLOGIE','BIOTECHNOLOGIE','GÉNOMIQUE','ROBOTIQUE','IMPRESSION-3D','IOT','METAVERSE','NFT','SMARTPHONE',
    'TABLETTE','SERVEUR','RÉSEAU','FIREWALL','VPN','DATA-CENTER','STREAMING','PODCAST','APPLICATION','LOGICIEL'
  ],
  '🏗️ Architecture & Lieux': [
    'CATHÉDRALE','PYRAMIDE','CHÂTEAU','TOUR','PALAIS','TEMPLE','MOSQUÉE','SYNAGOGUE','PAGODE','IGLOO',
    'BUNKER','PHARE','PONT','VIADUC','AQUEDUC','ARÈNE','AMPHITHÉÂTRE','COLISÉE','BASILIQUE','ABBAYE',
    'MONASTÈRE','MANOIR','MOULIN','FORGE','ENTREPÔT','HANGAR','SILO','GRENIER','CAVE','CLOÎTRE',
    'CRYPTE','DONJON','REMPART','FOSSÉ','PORTAIL','PORTIQUE','COLONNADE','ARCADE','VOÛTE','COUPOLE',
    'MINARET','BEFFROI','CLOCHER','CAMPANILE','OBÉLISQUE','ARC-DE-TRIOMPHE','STATUE','FONTAINE','LABYRINTHE','GROTTE-ARTIFICIELLE'
  ],
};

const ALL_THEME_KEYS = Object.keys(THEME_WORDS);

// ══════════════════════════════════════════════════════════════════
// 2. IA GROQ
// ══════════════════════════════════════════════════════════════════

// Mode HINTER : l'IA devine à partir des indices cumulés
async function groqGuessWord(hints, secretWord, themeKey, previousGuesses) {
  const candidates = THEME_WORDS[themeKey]
    .filter(w => !previousGuesses.includes(normalize(w)))
    .slice(0, 35).join(', ');

  const sys = `Tu joues au jeu "Mot de Passe". Le joueur donne des indices un par un et tu dois deviner le mot secret.
Thème : ${themeKey}.
Réponds UNIQUEMENT avec le mot exact (majuscules, sans explication, sans ponctuation).`;

  const usr = `Indices reçus : ${hints.join(', ')}.
Mots possibles dans ce thème : ${candidates}.
Quel est le mot secret ?`;

  const ans = await groqAsk(sys, usr, 20);
  if (!ans) return null;
  return ans.toUpperCase().trim().split(/[\s,\.!?]+/)[0];
}

// Mode GUESSER : l'IA génère un indice pour faire deviner
async function groqGiveClue(secretWord, themeKey, givenClues, wrongGuesses) {
  const sys = `Tu joues au jeu "Mot de Passe". Tu dois faire deviner un mot en donnant UN seul mot-indice.
Règles STRICTES :
- Réponds avec UN SEUL MOT en minuscules
- Interdit : le mot secret lui-même, un mot de la même famille, un synonyme direct
- Chaque indice doit être différent des précédents
- Si le joueur s'est trompé, donne un indice qui écarte ses erreurs`;

  const wrong = wrongGuesses.length ? `Le joueur a proposé à tort : ${wrongGuesses.slice(-3).join(', ')}.` : '';
  const prev  = givenClues.length   ? `Indices déjà donnés : ${givenClues.join(', ')}.` : '';

  const usr = `Mot secret : "${secretWord}" (thème : ${themeKey}).
${prev}
${wrong}
Donne un nouveau mot-indice :`;

  const ans = await groqAsk(sys, usr, 15);
  if (!ans) return null;
  return ans.toLowerCase().trim().split(/[\s,\.!?]+/)[0];
}

// ══════════════════════════════════════════════════════════════════
// 3. UTILS
// ══════════════════════════════════════════════════════════════════

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]/g,'');
}

function levenshtein(a, b) {
  const dp=Array.from({length:a.length+1},(_,i)=>Array.from({length:b.length+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++)
    dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[a.length][b.length];
}

function isClueInvalid(clue, secret) {
  const c=normalize(clue), s=normalize(secret);
  if(c===s) return true;
  if(c.length>=4&&s.startsWith(c)) return true;
  if(s.length>=4&&c.startsWith(s)) return true;
  const r=Math.min(5,c.length,s.length);
  if(r>=4&&c.slice(0,r)===s.slice(0,r)) return true;
  if(levenshtein(c,s)<=1) return true;
  return false;
}

function computeTemperature(hint, secret) {
  const h=normalize(hint), s=normalize(secret);
  if(h===s) return 'GAGNE';
  const lev=levenshtein(h,s);
  if(lev<=1) return 'BRULANT';
  if(lev<=3) return 'CHAUD';
  const sh=[...new Set(h)].filter(c=>[...new Set(s)].includes(c)).length;
  const ratio=sh/Math.max(new Set(h).size,new Set(s).size);
  if(ratio>=0.6) return 'CHAUD';
  if(ratio>=0.4) return 'TIEDE';
  if(ratio>=0.2) return 'FROID';
  return 'GLACIAL';
}

const MSG = {
  BRULANT:['🔥 BRÛLANT !','🌋 Tout chaud !','🔥 En feu !'],
  CHAUD:  ['♨️ Chaud !','☀️ Ça chauffe !','🌡️ Chaud...'],
  TIEDE:  ['🫖 Tiède...','😐 Pas mal...','🤔 Tiède...'],
  FROID:  ['🧊 Froid.','🌬️ Mauvaise piste.','❄️ Froid…'],
  GLACIAL:['🥶 GLACIAL !','🧊 Sibérie...','🥶 Polaire !'],
  GAGNE:  ['✅ Trouvé !','🏆 Bravo !','🎉 Cracké !'],
  WRONG:  ['❌ Non...','😅 Raté !','🙈 Continue !'],
  FOUND:  ['🎉 Trouvé !','✨ Bravo !','🏆 +1 !'],
  PASSED: ['⏭ Passé !','⏭ Skip !','⏭ Suivant !'],
  TIME:   ['⏰ Temps écoulé !','⏰ Manche terminée !','⏰ Chrono !'],
  THINK:  ['🧠 Groq réfléchit…','💭 L\'IA analyse…','🤔 Calcul en cours…'],
};
const rand = k => MSG[k][Math.floor(Math.random()*MSG[k].length)];

const shuffle = arr => {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
};

// ══════════════════════════════════════════════════════════════════
// 4. ÉTAT
// ══════════════════════════════════════════════════════════════════

const STATE = {
  role:'guesser', themeKey:'🎲 Aléatoire', resolvedTheme:'',
  wordsPerManche:5, voiceEnabled:false, autoListen:false, mancheDuration:30,
  mancheNum:0, mancheQueue:[], passedQueue:[], mancheResults:[],
  currentWordName:'', clueIndex:0, wordClueCount:0,
  iaGuesses:[], hinterHints:[], guesserWrongGuesses:[], givenClues:[],
  score:0, streak:0, bestScore:0, totalGames:0,
  timerInterval:null, timerLeft:30,
  gameOver:false, mancheOver:false, wordPool:[], iaThinking:false,
};

// ══════════════════════════════════════════════════════════════════
// 5. DOM
// ══════════════════════════════════════════════════════════════════

const $=id=>document.getElementById(id);
const btnGuesserEl=$('btn-guesser'), btnHinterEl=$('btn-hinter');
const themeGridEl=$('theme-grid');
const wordCountBtns=document.querySelectorAll('.timer-btn[data-words]');
const voiceToggle=$('voice-toggle'), voiceBadge=$('voice-support-badge');
const btnStartEl=$('btn-start'), bestScoreEl=$('best-score'), totalGamesEl=$('total-games');
const headerThemeEl=$('header-theme'), liveScoreEl=$('live-score');
const mancheLabelEl=$('manche-label'), streakBadgeEl=$('streak-badge');
const wordProgressEl=$('word-progress'), timerBarEl=$('timer-bar');
const timerTextEl=$('timer-text'), timerWrap=$('timer-bar-wrap');
const secretWordEl=$('secret-word'), secretMetaEl=$('secret-meta');
const historyEl=$('history'), queueBarEl=$('queue-bar');
const zoneGuesserEl=$('zone-guesser');
const iaClueThemeEl=$('ia-clue-theme'), iaClueTextEl=$('ia-clue-text');
const inputGuessEl=$('input-guess'), btnGuessEl=$('btn-guess');
const btnMicGuessEl=$('btn-mic-guess'), btnNextClueEl=$('btn-next-clue');
const btnPassGuesserEl=$('btn-pass-guesser');
const zoneHinterEl=$('zone-hinter');
const iaGuessWordEl=$('ia-guess-word'), iaGuessTempEl=$('ia-guess-temp');
const inputHintEl=$('input-hint'), btnHintEl=$('btn-hint');
const btnMicHintEl=$('btn-mic-hint'), btnPassHinterEl=$('btn-pass-hinter');
const resultEmojiEl=$('result-emoji'), resultTitleEl=$('result-title');
const resultSubtitleEl=$('result-subtitle'), resultWordsEl=$('result-words');
const resScoreEl=$('res-score'), resFoundEl=$('res-found'), resStreakEl=$('res-streak');
const btnNextMancheEl=$('btn-next-manche'), btnHomeResultEl=$('btn-home-result');
const btnHomeEl=$('btn-home'), btnSwapEl=$('btn-swap'), toastEl=$('toast');
const SCREENS={home:$('screen-home'),game:$('screen-game'),result:$('screen-result')};

// ══════════════════════════════════════════════════════════════════
// 6. VOCAL
// ══════════════════════════════════════════════════════════════════

let recognition=null, voiceRunning=false, voiceCallback=null;
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;

function initVoice(){
  if(!SR){voiceBadge.textContent='(non supporté)';voiceToggle.disabled=true;return;}
  voiceBadge.textContent='✓ supporté';
}

function listenOnce(cb){
  if(!SR||!STATE.voiceEnabled) return;
  if(voiceRunning){try{recognition.stop();}catch(_){}}
  recognition=new SR(); recognition.lang='fr-FR';
  recognition.continuous=false; recognition.interimResults=true; recognition.maxAlternatives=1;
  voiceCallback=cb; voiceRunning=true;
  recognition.onresult=e=>{
    let f='',t='';
    for(const r of e.results){if(r.isFinal)f+=r[0].transcript;else t+=r[0].transcript;}
    const cur=(f||t).trim().split(/\s+/)[0];
    const inp=STATE.role==='guesser'?inputGuessEl:inputHintEl;
    if(inp) inp.value=cur;
    if(f){voiceRunning=false;setMicUI(false);const w=f.trim().split(/\s+/)[0];if(w&&voiceCallback){voiceCallback=null;cb(w);}}
  };
  recognition.onerror=e=>{voiceRunning=false;setMicUI(false);if(e.error!=='no-speech'&&e.error!=='aborted')showToast('🎙️ '+e.error,2000);};
  recognition.onend=()=>{voiceRunning=false;setMicUI(false);};
  try{recognition.start();setMicUI(true);}catch(e){voiceRunning=false;setMicUI(false);}
}

function stopListening(){voiceRunning=false;voiceCallback=null;setMicUI(false);try{recognition&&recognition.stop();}catch(_){}}

function setMicUI(on){
  const btn=STATE.role==='guesser'?btnMicGuessEl:btnMicHintEl;
  if(!btn)return;
  btn.textContent=on?'🔴':'🎙️';
  btn.classList.toggle('mic-on',on);
  btn.title=on?'Écoute… (tap pour annuler)':'Parler';
}

function speak(txt){
  if(!STATE.voiceEnabled||!window.speechSynthesis)return;
  const u=new SpeechSynthesisUtterance(txt);u.lang='fr-FR';u.rate=0.9;
  speechSynthesis.cancel();speechSynthesis.speak(u);
}

// ══════════════════════════════════════════════════════════════════
// 7. INIT
// ══════════════════════════════════════════════════════════════════

function init(){loadPersistent();buildThemeGrid();bindEvents();initVoice();showScreen('home');}

function loadPersistent(){
  STATE.bestScore=parseInt(localStorage.getItem('mdp3_best')||'0');
  STATE.totalGames=parseInt(localStorage.getItem('mdp3_total')||'0');
  bestScoreEl.textContent=STATE.bestScore;totalGamesEl.textContent=STATE.totalGames;
}

function savePersistent(){
  if(STATE.score>STATE.bestScore){STATE.bestScore=STATE.score;localStorage.setItem('mdp3_best',STATE.bestScore);}
  STATE.totalGames++;localStorage.setItem('mdp3_total',STATE.totalGames);
}

function buildThemeGrid(){
  themeGridEl.innerHTML='';
  const make=(txt,key,active)=>{
    const b=document.createElement('button');
    b.className='theme-btn'+(active?' active':'');
    b.textContent=txt; b.dataset.theme=key;
    b.addEventListener('click',()=>selectTheme(key,b));
    themeGridEl.appendChild(b);
  };
  make('🎲 Aléatoire','🎲 Aléatoire',true);
  ALL_THEME_KEYS.forEach(k=>make(k,k,false));
  STATE.themeKey='🎲 Aléatoire';
}

function selectTheme(key,btn){
  themeGridEl.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');STATE.themeKey=key;
}

// ══════════════════════════════════════════════════════════════════
// 8. ÉVÉNEMENTS
// ══════════════════════════════════════════════════════════════════

function bindEvents(){
  btnGuesserEl.addEventListener('click',()=>selectRole('guesser'));
  btnHinterEl.addEventListener('click',()=>selectRole('hinter'));
  wordCountBtns.forEach(b=>b.addEventListener('click',()=>{
    wordCountBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');
    STATE.wordsPerManche=parseInt(b.dataset.words);
  }));
  document.querySelectorAll('.timer-btn[data-duration]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.timer-btn[data-duration]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');STATE.mancheDuration=parseInt(b.dataset.duration);
  }));
  voiceToggle.addEventListener('change',()=>{
    STATE.voiceEnabled=voiceToggle.checked;STATE.autoListen=voiceToggle.checked;
    btnMicGuessEl.style.display=STATE.voiceEnabled?'flex':'none';
    btnMicHintEl.style.display=STATE.voiceEnabled?'flex':'none';
    if(!STATE.voiceEnabled)stopListening();
  });
  btnStartEl.addEventListener('click',startGame);
  btnHomeEl.addEventListener('click',()=>{stopListening();stopTimer();showScreen('home');});
  btnSwapEl.addEventListener('click',swapRoles);
  btnHomeResultEl.addEventListener('click',()=>{showScreen('home');loadPersistent();});
  btnNextMancheEl.addEventListener('click',startNewManche);
  btnGuessEl.addEventListener('click',handleGuess);
  inputGuessEl.addEventListener('keydown',e=>e.key==='Enter'&&handleGuess());
  btnNextClueEl.addEventListener('click',()=>giveNextClue());
  btnPassGuesserEl.addEventListener('click',passWord);
  btnMicGuessEl.addEventListener('click',()=>{if(voiceRunning){stopListening();return;}listenOnce(w=>handleGuessWord(w));});
  btnHintEl.addEventListener('click',handleHint);
  inputHintEl.addEventListener('keydown',e=>e.key==='Enter'&&handleHint());
  btnPassHinterEl.addEventListener('click',passWord);
  btnMicHintEl.addEventListener('click',()=>{if(voiceRunning){stopListening();return;}listenOnce(w=>handleHintWord(w));});
}

function selectRole(r){
  STATE.role=r;
  btnGuesserEl.classList.toggle('active',r==='guesser');
  btnHinterEl.classList.toggle('active',r==='hinter');
}

// ══════════════════════════════════════════════════════════════════
// 9. DÉMARRAGE
// ══════════════════════════════════════════════════════════════════

function startGame(){
  STATE.score=0;STATE.streak=0;STATE.mancheNum=0;
  resolveTheme();
  STATE.wordPool=shuffle([...THEME_WORDS[STATE.resolvedTheme]]);
  showScreen('game');headerThemeEl.textContent=STATE.resolvedTheme;
  updateScoreUI();startNewManche();
}

function resolveTheme(){
  STATE.resolvedTheme=STATE.themeKey==='🎲 Aléatoire'
    ?ALL_THEME_KEYS[Math.floor(Math.random()*ALL_THEME_KEYS.length)]
    :STATE.themeKey;
}

function startNewManche(){
  STATE.mancheNum++;STATE.mancheOver=false;STATE.mancheResults=[];STATE.passedQueue=[];
  if(STATE.themeKey==='🎲 Aléatoire'){
    STATE.resolvedTheme=ALL_THEME_KEYS[Math.floor(Math.random()*ALL_THEME_KEYS.length)];
    STATE.wordPool=shuffle([...THEME_WORDS[STATE.resolvedTheme]]);
    headerThemeEl.textContent=STATE.resolvedTheme;
  }
  if(STATE.wordPool.length<STATE.wordsPerManche)
    STATE.wordPool=shuffle([...THEME_WORDS[STATE.resolvedTheme]]);
  STATE.mancheQueue=STATE.wordPool.splice(0,STATE.wordsPerManche);
  mancheLabelEl.textContent=`Manche ${STATE.mancheNum}`;
  showScreen('game');buildWordProgress();loadCurrentWord();startTimer();
}

function loadCurrentWord(){
  if(!STATE.mancheQueue.length&&!STATE.passedQueue.length){endManche();return;}
  const w=STATE.mancheQueue.length?STATE.mancheQueue[0]:STATE.passedQueue.shift();
  STATE.currentWordName=w;
  STATE.clueIndex=0;STATE.wordClueCount=0;
  STATE.iaGuesses=[];STATE.hinterHints=[];STATE.guesserWrongGuesses=[];STATE.givenClues=[];
  STATE.gameOver=false;STATE.iaThinking=false;
  historyEl.innerHTML='';
  if(iaClueThemeEl) iaClueThemeEl.textContent=STATE.resolvedTheme;
  iaClueTextEl.textContent='L\'IA prépare un indice…';
  iaGuessWordEl.textContent='—';iaGuessWordEl.classList.remove('found');iaGuessTempEl.textContent='';
  inputGuessEl.value='';inputHintEl.value='';
  const lettres=w.replace(/-/g,'').length;
  if(STATE.role==='guesser'){
    secretWordEl.textContent='???';secretWordEl.classList.add('blurred');
    secretMetaEl.textContent=`${lettres} lettre${lettres>1?'s':''}`;
    zoneGuesserEl.classList.remove('hidden');zoneHinterEl.classList.add('hidden');
    giveNextClue();
  } else {
    secretWordEl.textContent=w;secretWordEl.classList.remove('blurred');
    secretMetaEl.textContent='Fais deviner ce mot !';
    zoneGuesserEl.classList.add('hidden');zoneHinterEl.classList.remove('hidden');
    speak(`Le mot est : ${w}`);
  }
  updateQueueBar();updateWordProgress();
}

// ══════════════════════════════════════════════════════════════════
// 10. MODE GUESSER — Groq donne les indices
// ══════════════════════════════════════════════════════════════════

async function giveNextClue(){
  if(STATE.gameOver||STATE.mancheOver||STATE.iaThinking) return;
  STATE.iaThinking=true;
  btnNextClueEl.disabled=true;
  iaClueTextEl.innerHTML=`<em style="color:var(--muted)">${rand('THINK')}</em>`;

  const clue=await groqGiveClue(
    STATE.currentWordName, STATE.resolvedTheme,
    STATE.givenClues, STATE.guesserWrongGuesses
  );
  STATE.iaThinking=false;btnNextClueEl.disabled=false;

  const finalClue=(!clue||isClueInvalid(clue,STATE.currentWordName))
    ?['nature','forme','usage','couleur','taille','matière'][STATE.clueIndex%6]
    :clue;

  STATE.clueIndex++;STATE.wordClueCount++;STATE.givenClues.push(finalClue);
  iaClueTextEl.innerHTML=`<span class="ia-clue-theme">${STATE.resolvedTheme}</span>Indice n°${STATE.clueIndex} : <span class="ia-clue-word">${finalClue.toUpperCase()}</span>`;
  addHistory('IA',finalClue.toUpperCase(),'',`Indice ${STATE.clueIndex}`);

  if(STATE.voiceEnabled&&STATE.autoListen)
    setTimeout(()=>listenOnce(w=>handleGuessWord(w)),600);
}

function handleGuessWord(w){if(!w||STATE.gameOver||STATE.mancheOver)return;inputGuessEl.value=w;setTimeout(()=>handleGuess(),150);}

function handleGuess(){
  if(STATE.gameOver||STATE.mancheOver) return;
  const g=inputGuessEl.value.trim();if(!g)return;
  if(g.includes(' ')){showToast('❌ Un seul mot !',2000);return;}
  inputGuessEl.value='';
  if(normalize(g)===normalize(STATE.currentWordName)){wordFound();}
  else{
    const d=levenshtein(normalize(g),normalize(STATE.currentWordName));
    const fb=d<=2?'🤏 Presque ! Ortho ?':rand('WRONG');
    addHistory('TOI',g.toUpperCase(),'',fb);showToast(fb,1500);
    STATE.guesserWrongGuesses.push(g);
    setTimeout(()=>giveNextClue(),500);
  }
}

// ══════════════════════════════════════════════════════════════════
// 11. MODE HINTER — Groq devine
// ══════════════════════════════════════════════════════════════════

function handleHintWord(w){if(!w||STATE.gameOver||STATE.mancheOver)return;inputHintEl.value=w;setTimeout(()=>handleHint(),150);}

async function handleHint(){
  if(STATE.gameOver||STATE.mancheOver||STATE.iaThinking) return;
  const hint=inputHintEl.value.trim();if(!hint)return;
  if(hint.includes(' ')){showToast('❌ Un seul mot !',2000);return;}
  if(isClueInvalid(hint,STATE.currentWordName)){showToast('🚫 Même mot ou famille !',2200);inputHintEl.value='';return;}
  inputHintEl.value='';
  STATE.wordClueCount++;STATE.hinterHints.push(hint);STATE.iaThinking=true;

  const temp=computeTemperature(hint,STATE.currentWordName);
  addHistory('TOI',hint.toUpperCase(),temp,rand(temp));
  iaGuessWordEl.textContent='…';iaGuessTempEl.textContent='🧠 Groq analyse…';
  document.querySelector('.ia-guess-label').textContent=`🤖 L'IA propose (${STATE.resolvedTheme}) :`;

  const guess=await groqGuessWord(STATE.hinterHints,STATE.currentWordName,STATE.resolvedTheme,STATE.iaGuesses);
  STATE.iaThinking=false;
  const fg=(guess||'???').toUpperCase().split(/[\s,\.]+/)[0];
  STATE.iaGuesses.push(normalize(fg));

  if(normalize(fg)===normalize(STATE.currentWordName)){
    iaGuessWordEl.textContent=STATE.currentWordName;iaGuessWordEl.classList.add('found');
    iaGuessTempEl.textContent='✅ TROUVÉ !';
    addHistory('IA',STATE.currentWordName,'GAGNE',rand('GAGNE'));
    setTimeout(()=>wordFound(),700);
  } else {
    iaGuessWordEl.textContent=fg;iaGuessWordEl.classList.remove('found');
    iaGuessTempEl.textContent=`🌡️ ${temp} — ${rand(temp)}`;
    if(STATE.voiceEnabled&&STATE.autoListen)
      setTimeout(()=>listenOnce(w=>handleHintWord(w)),900);
  }
}

// ══════════════════════════════════════════════════════════════════
// 12. PASSE / TROUVÉ / FIN
// ══════════════════════════════════════════════════════════════════

function wordFound(){
  STATE.gameOver=true;STATE.streak++;
  const pts=Math.max(1,7-STATE.wordClueCount);STATE.score+=pts;updateScoreUI();
  showToast(`${rand('FOUND')} +${pts} pt${pts>1?'s':''}`,2000);
  STATE.mancheResults.push({word:STATE.currentWordName,found:true,clues:STATE.wordClueCount});
  [STATE.mancheQueue,STATE.passedQueue].forEach(q=>{const i=q.indexOf(STATE.currentWordName);if(i!==-1)q.splice(i,1);});
  secretWordEl.textContent=STATE.currentWordName;secretWordEl.classList.remove('blurred');
  updateWordProgress();
  setTimeout(()=>{if(!STATE.mancheOver)loadCurrentWord();},1200);
}

function passWord(){
  if(STATE.gameOver||STATE.mancheOver)return;
  STATE.gameOver=true;stopListening();
  const w=STATE.currentWordName;showToast(rand('PASSED'),1500);
  const i=STATE.mancheQueue.indexOf(w);
  if(i!==-1){STATE.mancheQueue.splice(i,1);STATE.passedQueue.push(w);}
  updateWordProgress();updateQueueBar();
  setTimeout(()=>{if(!STATE.mancheOver)loadCurrentWord();},800);
}

function endManche(){
  if(STATE.mancheOver)return;
  STATE.mancheOver=true;stopTimer();stopListening();
  [...STATE.mancheQueue,...STATE.passedQueue].forEach(w=>{
    if(!STATE.mancheResults.find(r=>r.word===w))
      STATE.mancheResults.push({word:w,found:false,clues:0});
  });
  savePersistent();setTimeout(()=>showResultScreen(),600);
}

function showResultScreen(){
  const found=STATE.mancheResults.filter(r=>r.found).length;
  const total=STATE.mancheResults.length;
  resultEmojiEl.textContent=found===total?'🏆':found>=Math.ceil(total/2)?'🎉':'😅';
  resultTitleEl.textContent=found===total?'Parfait !':found>=Math.ceil(total/2)?'Bonne manche !':'Dur dur…';
  resultSubtitleEl.textContent=`${found} mot${found>1?'s':''} trouvé${found>1?'s':''} sur ${total} · Manche ${STATE.mancheNum}`;
  resultWordsEl.innerHTML=STATE.mancheResults.map(r=>`
    <div class="result-word-item ${r.found?'found':'passed'}">
      <span class="rw-name">${r.word}</span>
      <span class="rw-status">${r.found?`✅ ${r.clues} indice${r.clues>1?'s':''}`:'❌ Manqué'}</span>
    </div>`).join('');
  resScoreEl.textContent=STATE.score;resFoundEl.textContent=`${found}/${total}`;resStreakEl.textContent=STATE.streak;
  showScreen('result');
}

// ══════════════════════════════════════════════════════════════════
// 13. TIMER
// ══════════════════════════════════════════════════════════════════

function startTimer(){
  stopTimer();STATE.timerLeft=STATE.mancheDuration;
  timerWrap.style.display='flex';updateTimerUI();
  STATE.timerInterval=setInterval(()=>{
    STATE.timerLeft--;updateTimerUI();
    if(STATE.timerLeft<=0){stopTimer();if(!STATE.mancheOver){showToast(rand('TIME'),2000);endManche();}}
  },1000);
}
function stopTimer(){clearInterval(STATE.timerInterval);STATE.timerInterval=null;}
function updateTimerUI(){
  const p=(STATE.timerLeft/STATE.mancheDuration)*100;
  timerBarEl.style.width=p+'%';timerTextEl.textContent=STATE.timerLeft;
  const w=p<=25;timerBarEl.classList.toggle('warning',w);timerTextEl.classList.toggle('warning',w);
}

// ══════════════════════════════════════════════════════════════════
// 14. UI HELPERS
// ══════════════════════════════════════════════════════════════════

function swapRoles(){
  STATE.role=STATE.role==='guesser'?'hinter':'guesser';
  showToast(`Rôles inversés !`,2000);stopTimer();startNewManche();
}
function buildWordProgress(){
  wordProgressEl.innerHTML='';
  for(let i=0;i<STATE.wordsPerManche;i++){
    const d=document.createElement('div');
    d.className='word-dot';d.dataset.idx=i;d.textContent=i+1;
    wordProgressEl.appendChild(d);
  }
}
function updateWordProgress(){
  wordProgressEl.querySelectorAll('.word-dot').forEach((d,i)=>{
    d.className='word-dot';
    if(i<STATE.mancheResults.length){
      d.classList.add(STATE.mancheResults[i].found?'found':'passed');
      d.textContent=STATE.mancheResults[i].found?'✓':'↩';
    } else if(i===STATE.mancheResults.length&&!STATE.mancheOver) d.classList.add('active');
  });
}
function updateQueueBar(){
  queueBarEl.innerHTML='';
  STATE.passedQueue.forEach(w=>{
    const c=document.createElement('div');c.className='queue-chip';c.textContent=`↩ ${w}`;queueBarEl.appendChild(c);
  });
}
function addHistory(role,word,temp,msg){
  const it=document.createElement('div');it.className='history-item';
  it.innerHTML=`<span class="clue-tag">${role}</span><span class="clue-word">${word}</span>
    ${temp?`<span class="temp-badge temp-${temp}">${temp}</span>`:''}
    <span style="font-size:.7rem;color:var(--muted);flex:1;text-align:right">${msg}</span>`;
  historyEl.appendChild(it);historyEl.parentElement.scrollTop=historyEl.parentElement.scrollHeight;
}
function showScreen(n){Object.values(SCREENS).forEach(s=>s.classList.remove('active'));SCREENS[n].classList.add('active');}
function updateScoreUI(){liveScoreEl.textContent=STATE.score;streakBadgeEl.textContent=STATE.streak>=2?`🔥×${STATE.streak}`:'';}
function showToast(msg,dur=2500){toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toastEl._t);toastEl._t=setTimeout(()=>toastEl.classList.remove('show'),dur);}

init();
