/* ==========================================================================
   1. CONFIGURATION
   ========================================================================== */
const CACHE_NAME = 'ecoshop-v1';

const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'style.css', // Update to 'styles.css' if you renamed your stylesheet
  'script.js',
  'products.js',
  'manifest.webmanifest',
  'icon-192.png'
];

/* ==========================================================================
   2. INSTALL: Pre-cache core app files
   ========================================================================== */
self.addEventListener('install', (event) => {
  const preCacheAssets = async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(ASSETS_TO_CACHE);
    await self.skipWaiting();
  };

  event.waitUntil(preCacheAssets());
});

/* ==========================================================================
   3. ACTIVATE: Remove outdated caches
   ========================================================================== */
self.addEventListener('activate', (event) => {
  const clearOldCaches = async () => {
    const cacheKeys = await caches.keys();
    const oldCaches = cacheKeys.filter((key) => key !== CACHE_NAME);

    await Promise.all(oldCaches.map((key) => caches.delete(key)));
    await self.clients.claim();
  };

  event.waitUntil(clearOldCaches());
});

/* ==========================================================================
   4. FETCH: Network-first with offline cache fallback
   ========================================================================== */
self.addEventListener('fetch', (event) => {
  // Only cache standard GET requests
  if (event.request.method !== 'GET') return;

  const networkFirstStrategy = async () => {
    try {
      const networkResponse = await fetch(event.request);

      // Save valid responses to the cache for future offline use
      if (networkResponse.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResponse.clone()).catch(() => {});
      }

      return networkResponse;
    } catch {
      // Offline fallback: return cached file or default to index.html
      const cachedResponse = await caches.match(event.request);
      return cachedResponse || caches.match('index.html');
    }
  };

  event.respondWith(networkFirstStrategy());
});
