const CACHE='bizalchemy-v13';
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

// Push notification handler
self.addEventListener('push',e=>{
  if(!e.data)return;
  const data=e.data.json();
  e.waitUntil(self.registration.showNotification(data.title,{
    body:data.body,
    icon:'./icons/icon-192.png',
    badge:'./icons/icon-192.png',
    tag:'bizalchemy-daily',
    renotify:true,
    data:{url:'./'}
  }));
});

// Notification click — focus existing window or open new one
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const url=e.notification.data&&e.notification.data.url?e.notification.data.url:'./';
  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(windowClients=>{
      for(const client of windowClients){
        if(client.url.includes(self.location.origin)&&'focus' in client)return client.focus();
      }
      return clients.openWindow(url);
    })
  );
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  // Skip caching for API requests (Supabase, etc.)
  if(req.url.includes('supabase.co'))return;
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
