/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE — Proxy Cloudflare Worker vers l'API Mistral

   Rôle : cacher la clé API Mistral (jamais dans le code du jeu, qui
   est public sur GitHub Pages) et servir de garde-fou contre l'abus
   (n'importe qui pourrait sinon trouver l'URL et l'utiliser comme
   proxy IA gratuit générique à tes frais/quota).

   Déploiement : voir DEPLOIEMENT_IA.md à la racine du repo.
   ═══════════════════════════════════════════════════════════════ */

// Autorise uniquement les origines du jeu (GitHub Pages + tests en
// local). Un client non-navigateur (curl, script) peut mentir sur son
// Origin, donc ceci n'est PAS une sécurité absolue — c'est une
// première barrière contre l'usage accidentel/opportuniste depuis
// d'autres sites. Les vrais garde-fous sont les limites ci-dessous
// (modèle imposé, max_tokens plafonné, nombre de messages plafonné).
const ALLOWED_ORIGINS = new Set([
  'https://julien67890.github.io',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
]);

// Le modèle est IMPOSÉ côté serveur, jamais choisi par le client :
// ça empêche quelqu'un d'appeler ce proxy pour router des requêtes
// vers un modèle plus gros/plus cher que celui prévu pour ce jeu.
//
// ⚠️ ministral-8b et pas mistral-small : testé en direct sur le compte
// gratuit, mistral-small-latest renvoie systématiquement une erreur
// 429 "Rate limit exceeded" (code 1300) — le tier gratuit ne donne pas
// accès aux modèles de cette taille. ministral-8b-latest répond en 200.
// Si un jour le compte passe en payant, repasser sur
// 'mistral-small-latest' donnera des indices sensiblement meilleurs.
const MISTRAL_MODEL = 'ministral-8b-latest';

// Gabarit des indices/réponses du jeu : très court (voir
// script_llama.js). On plafonne large pour laisser de la marge sans
// permettre des requêtes énormes.
// 60 et plus 20 : le jeu demande désormais les 3 indices d'un mot en
// une seule réponse ("sport, bâton, États-Unis"), ce qui ne tient pas
// dans 20 tokens.
const MAX_TOKENS_CAP = 60;
const MAX_MESSAGES = 15;
// 2000 et plus 600 : relevé pour pouvoir tester l'envoi de la liste
// complète des mots d'un thème (jusqu'à 1200 caractères) à l'IA en
// mode "je fais deviner". L'essai n'a pas été retenu — l'heuristique
// fait mieux — mais le plafond reste large sans danger : il est de
// toute façon borné par MAX_MESSAGES et MAX_TOKENS_CAP.
const MAX_MESSAGE_LEN = 2000;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin);
  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    // Pré-vol CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Méthode non autorisée' }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response(JSON.stringify({ error: 'Origine non autorisée' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'JSON invalide' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const { messages, temperature, max_tokens } = body || {};

    if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
      return new Response(JSON.stringify({ error: 'messages invalide' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    for (const m of messages) {
      if (!m || typeof m.content !== 'string' || m.content.length > MAX_MESSAGE_LEN
          || !['system', 'user', 'assistant'].includes(m.role)) {
        return new Response(JSON.stringify({ error: 'message invalide' }), {
          status: 400,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }
    }

    const safeTemperature = (typeof temperature === 'number' && temperature >= 0 && temperature <= 1)
      ? temperature : 0.3;
    const safeMaxTokens = (typeof max_tokens === 'number' && max_tokens > 0 && max_tokens <= MAX_TOKENS_CAP)
      ? max_tokens : 8;

    try {
      const mistralResponse = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: MISTRAL_MODEL,
          messages,
          temperature: safeTemperature,
          max_tokens: safeMaxTokens,
        }),
      });

      const data = await mistralResponse.json();

      if (!mistralResponse.ok) {
        console.error('Erreur Mistral:', data);
        return new Response(JSON.stringify({ error: 'Erreur API Mistral', detail: data }), {
          status: mistralResponse.status,
          headers: { ...headers, 'Content-Type': 'application/json' },
        });
      }

      // On renvoie tel quel : la forme (response.choices[0].message.content)
      // est compatible OpenAI, exactement ce que script_llama.js attend déjà.
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Erreur proxy:', error);
      return new Response(JSON.stringify({ error: 'Erreur serveur proxy' }), {
        status: 502,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  },
};
