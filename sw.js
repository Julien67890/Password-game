// Service Worker pour Mot de Passe v4.0
// Permet le fonctionnement 100% offline

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
    })
  );
});

// Stratégie: Cache First (offline-first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retourner depuis le cache si disponible
        if (response) {
          return response;
        }
        // Sinon fetch depuis le réseau
        return fetch(event.request);
      })
  );
});
