/* XoriguerAPPplans · el motor (Web Worker).
 *
 * Carrega Python (Pyodide, desat dins l'app a /pyodide) i el nucli de Xoriguer (nucli.zip, compilat: els mateixos
 * mòduls que el programa de l'ordinador), i respon les crides de l'app: {id, f, args} → {id, ok, r | error}.
 *
 * Les dades viuen a /dades, que és una carpeta desada a l'IndexedDB del navegador: hi ha exactament els
 * mateixos fitxers que a Documents\Xoriguer de l'ordinador (config.json, usuaris/<usuari>/perfil.json…).
 */
importScripts("pyodide/pyodide.js");

let py = null;
let pont = null;
// Funcions del pont que escriuen fitxers: després cal desar /dades a l'IndexedDB.
const ESCRIUEN = new Set(["desar_perfil", "registrar", "esborrar_registre", "matinal", "pla"]);

function sincronitzar(llegir) {
  return new Promise((ok, ko) => py.FS.syncfs(llegir, (e) => (e ? ko(e) : ok())));
}

async function arrencar(idioma) {
  py = await loadPyodide({ indexURL: new URL("pyodide/", self.location).href });
  py.FS.mkdirTree("/dades");
  py.FS.mount(py.FS.filesystems.IDBFS, {}, "/dades");
  await sincronitzar(true);                                  // IndexedDB → /dades
  // El nucli i el pont arriben compilats (.pyc): el codi font no es publica.
  const zip = await fetch("nucli.zip").then((r) => { if (!r.ok) throw new Error("nucli.zip " + r.status); return r.arrayBuffer(); });
  py.FS.mkdirTree("/nucli");
  py.unpackArchive(zip, "zip", { extractDir: "/nucli" });
  py.runPython("import sys; sys.dont_write_bytecode = True; sys.path.insert(0, '/nucli')");
  pont = py.pyimport("pont");
  const info = pont.iniciar(idioma);
  await sincronitzar(false);                                 // /dades → IndexedDB (config.json nou, si cal)
  return info;
}

self.onmessage = async (e) => {
  const { id, f, args = [] } = e.data;
  try {
    let r;
    if (f === "arrencar") {
      r = await arrencar(...args);
    } else if (f === "llegir_fitxer") {
      r = py.FS.readFile(args[0]);                           // Uint8Array
    } else {
      if (!pont) throw new Error("El motor encara no està a punt.");
      r = pont[f](...args);
      if (ESCRIUEN.has(f)) await sincronitzar(false);
    }
    self.postMessage({ id, ok: true, r }, r instanceof Uint8Array ? [r.buffer] : []);
  } catch (err) {
    self.postMessage({ id, ok: false, error: String((err && err.message) || err) });
  }
};
