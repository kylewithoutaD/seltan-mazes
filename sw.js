self.addEventListener('install', e => e.waitUntil(caches.open('seltan-v1').then(c => c.addAll(['/seltan-mazes/']))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
