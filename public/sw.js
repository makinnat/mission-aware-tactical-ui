// Service Worker for caching optimization
const CACHE_NAME = 'aware-defense-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Cache critical images
const criticalImages = [
  '/lovable-uploads/2bf4d720-4753-487d-ba23-f8007156d857.png',
  '/lovable-uploads/bed92e28-b372-401f-b191-c06f75d54160.png',
  '/lovable-uploads/1106a9b7-e1eb-4c18-b7c0-653862ff02dd.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([...urlsToCache, ...criticalImages]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});