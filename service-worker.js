/* XoriguerAPPplans · funcionar sense cobertura.
 * Desa tota l'app (també Python i el nucli de Xoriguer) la primera vegada. Quan es publica una versió nova,
 * cal canviar VERSIO: el mòbil baixa la nova i esborra la vella. Les dades de l'usuari NO són aquí (són a
 * l'IndexedDB) i no es toquen mai. */
const VERSIO = "xap-1.0.2";
const FITXERS = [
  "./", "index.html", "marca/marca.css", "marca/Montserrat-ExtraBold.ttf", "app.js", "nucli.js", "nucli.zip", "manifest.json", "LLICENCIA.txt",
  "icones/icona-192.png", "icones/icona-512.png", "icones/maskable-512.png", "icones/apple-180.png",
  "fonts/Montserrat-SemiBold.ttf", "fonts/Montserrat-ExtraBold.ttf",
  "pyodide/pyodide.js", "pyodide/pyodide.asm.js", "pyodide/pyodide.asm.wasm", "pyodide/python_stdlib.zip",
  "pyodide/pyodide-lock.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSIO).then((c) => c.addAll(FITXERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((claus) => Promise.all(claus.filter((k) => k.startsWith("xap-") && k !== VERSIO).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;   // Google Maps, etc.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((desat) => desat || fetch(req).catch(() =>
      req.mode === "navigate" ? caches.match("index.html") : Response.error()))
  );
});
