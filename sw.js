// Este código obliga al celular a destruir TODA la memoria vieja y conectarse a internet.
self.addEventListener('install', function(e) {
  self.skipWaiting(); 
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      for (let name of names) caches.delete(name);
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Lo dejamos vacío intencionalmente para que NO use memoria y descargue el logo nuevo.
});