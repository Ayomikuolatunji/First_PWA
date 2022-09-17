self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches
      .open("static")
      .then(function (cache) {
        console.log("[Cache all static assests]");
        cache.add("./src/js/app.js");
      })
      .catch((error) => {
        console.log(error);
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
      .catch((error) => {})
  );
});
