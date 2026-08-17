// Service Worker pour Mot de Passe v6.1
// Permet le fonctionnement 100% offline, tout en se mettant à jour
// immédiatement dès qu'une nouvelle version est déployée.

const CACHE_NAME = 'motdepasse-v6-cache';
// Chemins relatifs (résolus par rapport à l'URL de sw.js) : fonctionne
// que le jeu soit servi depuis la racine d'un domaine ou un sous-dossier
// (ex. GitHub Pages, https://user.github.io/Password-game/).
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './script_llama.js',
  './icon-192.png',
  './icon-512.png',
  './manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      // ⚠️ skipWaiting() : sans ça, une nouvelle version poussée sur
      // GitHub reste "en attente" et ne prend jamais le relais tant que
      // TOUS les onglets du jeu ne sont pas complètement fermés (pas
      // juste rechargés) — ce qui donnait l'impression que rien ne se
      // mettait à jour après un déploiement.
      .then(() => self.skipWaiting())
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    // clients.claim() : prend le contrôle des onglets déjà ouverts tout
    // de suite, sans attendre un rechargement supplémentaire.
    }).then(() => self.clients.claim())
  );
});

// Stratégie : réseau en priorité, cache en secours (offline uniquement).
// Contrairement à "cache d'abord", ça garantit qu'on charge toujours la
// dernière version déployée quand une connexion est disponible — le
// cache ne sert que de filet de sécurité hors-ligne.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
