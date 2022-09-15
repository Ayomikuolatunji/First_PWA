// if("serviceWorker" in  navigator){
//     navigator.serviceWorker.register("../../sw.js")
//     .then(()=>{
//         console.log("serviceWorker registered")
//         self.addEventListener("install", function(){
//             console.log("installing service worker", e);
//             return self.clients.claim()
//         })
        
//         self.addEventListener("activate", function(){
//             console.log("activating service worker", e);
//             return self.clients.claim()
//         })
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }



self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
  });
  
  self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(fetch(event.request));
  });