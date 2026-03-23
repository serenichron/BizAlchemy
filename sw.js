const CACHE='bizalchemy-v10';
const PRECACHE=[
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  // For CDN resources: cache-first
  // For own resources: network-first with cache fallback
  if(req.url.startsWith(self.location.origin)){
    e.respondWith(
      fetch(req).then(res=>{
        const clone=res.clone();
        caches.open(CACHE).then(c=>c.put(req,clone));
        return res;
      }).catch(()=>caches.match(req))
    );
  }else{
    e.respondWith(
      caches.match(req).then(cached=>cached||
        fetch(req).then(res=>{
          const clone=res.clone();
          caches.open(CACHE).then(c=>c.put(req,clone));
          return res;
        })
      )
    );
  }
});
