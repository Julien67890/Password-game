# Déploiement de l'IA (Mistral via proxy Cloudflare Worker)

Deux comptes gratuits à créer, une seule fois. Ensuite le proxy tourne sans maintenance.

## 1. Clé API Mistral

1. Va sur https://console.mistral.ai/ et crée un compte (vérif téléphone, pas de CB).
2. Dans **API Keys**, crée une clé et copie-la (elle ne sera plus affichée après).

## 2. Compte Cloudflare (gratuit)

1. Va sur https://dash.cloudflare.com/sign-up et crée un compte.
2. Rien d'autre à faire dans le dashboard — tout se fait en ligne de commande à l'étape suivante.

## 3. Déployer le Worker

Depuis le dossier du repo (là où se trouvent `worker.js` et `wrangler.toml`) :

```bash
npx wrangler login          # ouvre le navigateur, autorise l'accès à ton compte Cloudflare
npx wrangler deploy         # déploie le proxy
npx wrangler secret put MISTRAL_API_KEY   # colle ta clé Mistral quand demandé (jamais dans un fichier)
```

`wrangler deploy` affiche une URL du style :

```
https://mot-de-passe-ia-proxy.<ton-compte>.workers.dev
```

Copie-la.

## 4. Brancher le jeu sur le proxy

Dans `script_llama.js`, ligne ~24, remplace :

```js
const AI_WORKER_URL = 'https://mot-de-passe-ia-proxy.TON-COMPTE.workers.dev';
```

par ta vraie URL, puis pousse (`git add`, `commit`, `push`) — GitHub Pages se redéploie automatiquement.

## 5. Si tu changes de domaine ou testes en local

`worker.js` limite les origines autorisées (`ALLOWED_ORIGINS`) à `https://julien67890.github.io` et `http://localhost:8000` / `http://127.0.0.1:8000`. Si tu renommes le repo, changes de domaine, ou testes avec un autre port local, ajoute l'origine correspondante dans cette liste avant de redéployer (`npx wrangler deploy`).

## 6. Vérifier que ça marche

Ouvre le jeu, coche le toggle "🧠 IA" — ça doit passer sur "✓ Actif" en moins d'une seconde (plus de téléchargement). Si erreur, ouvre la console (F12) : le message donne la cause exacte (URL pas configurée, origine refusée, clé invalide, etc.).

## Pourquoi un proxy et pas la clé directement dans le jeu ?

Le jeu est un site statique public (GitHub Pages) — tout fichier `.js` du repo est visible par n'importe qui. Une clé API mise directement dedans serait aspirée en quelques heures par des bots qui scannent GitHub à la recherche de clés exposées, et utilisée à ta place (épuisement de ton quota gratuit, voire suspension du compte Mistral pour usage anormal). Le Worker Cloudflare tourne côté serveur : la clé reste dans ses "secrets", jamais visible dans le code envoyé au navigateur.

Le Worker limite aussi, côté serveur : le modèle utilisable (fixé à `ministral-8b-latest`, pas modifiable depuis le jeu), la taille des réponses (`max_tokens` plafonné à 60) et le nombre de messages par requête — pour éviter qu'un usage détourné transforme ce proxy en accès IA gratuit générique.
