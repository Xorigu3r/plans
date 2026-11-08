/* XoriguerAPPplans · l'app (pantalles). El càlcul el fa el nucli de Xoriguer, al motor (nucli.js). */
"use strict";

const VERSIO_APP = "1.0.1";

// ── Textos de l'app (els del pla venen ja traduïts del nucli) ─────────────────
const TEXTOS = {
  es: {
    "Avui": "Hoy", "Setmana": "Semana", "Perfil": "Perfil", "Més": "Más",
    "Preparant el motor de Xoriguer…": "Preparando el motor de Xoriguer…",
    "La primera vegada triga una mica: després funciona sense cobertura.": "La primera vez tarda un poco: después funciona sin cobertura.",
    "Generant el pla…": "Generando el plan…", "Motor a punt": "Motor listo", "Error": "Error", "Carregant": "Cargando",
    "Avui no toca res: descans.": "Hoy no toca nada: descanso.", "Propera sessió": "Próxima sesión",
    "Com t'has llevat?": "¿Cómo te has levantado?", "Control matinal": "Control matinal",
    "Encara no l'has fet. Són 20 segons i el pla s'ajusta a com et trobes.": "Aún no lo has hecho. Son 20 segundos y el plan se ajusta a cómo te encuentras.",
    "Fer el control matinal": "Hacer el control matinal", "Tornar-lo a fer": "Volver a hacerlo",
    "Pulsacions en repòs (opcional)": "Pulsaciones en reposo (opcional)", "Son": "Sueño", "Cames": "Piernas",
    "molt malament": "muy mal", "molt bé": "muy bien", "molt carregades": "muy cargadas", "molt fresques": "muy frescas",
    "Ajustar la sessió d'avui segons el resultat": "Ajustar la sesión de hoy según el resultado",
    "Desar": "Guardar", "Cancel·lar": "Cancelar", "Esborrar el registre": "Borrar el registro",
    "Ja l'he feta": "Ya la he hecho", "Editar el registre": "Editar el registro", "Feta": "Hecha",
    "Minuts": "Minutos", "Esforç (1-10)": "Esfuerzo (1-10)", "Notes": "Notas", "suau": "suave", "a tope": "a tope",
    "Què fer": "Qué hacer", "Ruta": "Ruta", "Nutrició": "Nutrición", "Nota de la ruta": "Nota de la ruta",
    "Obrir a Google Maps": "Abrir en Google Maps", "Ajustada a la teva forma": "Ajustada a tu forma",
    "Ajustada pel control matinal": "Ajustada por el control matinal",
    "Forma": "Forma", "Forma (CTL)": "Forma (CTL)", "Fatiga (ATL)": "Fatiga (ATL)", "Frescor (TSB)": "Frescura (TSB)",
    "Setmana {0} de {1}": "Semana {0} de {1}", "descans": "descanso",
    "Llegenda": "Leyenda", "feta": "hecha", "pendent": "pendiente", "no feta": "no hecha", "ajustada": "ajustada",
    "Encara no tens pla. Omple el perfil i prem «Desar i fer el pla».": "Aún no tienes plan. Rellena el perfil y pulsa «Guardar y hacer el plan».",
    "Benvingut! Omple el perfil i tindràs el teu pla.": "¡Bienvenido! Rellena el perfil y tendrás tu plan.",
    "Nom": "Nombre", "Edat": "Edad", "Pes (kg)": "Peso (kg)", "Alçada (cm)": "Altura (cm)", "Sexe": "Sexo",
    "Esport": "Deporte", "Bici": "Bici", "Córrer": "Correr", "Bici + córrer": "Bici + correr",
    "Objectiu": "Objetivo", "Modalitat": "Modalidad", "Hores d'esport per setmana (ara)": "Horas de deporte por semana (ahora)",
    "Dies per entrenar": "Días para entrenar", "Dades opcionals": "Datos opcionales", "FTP (W)": "FTP (W)",
    "FC màxima": "FC máxima", "FC en repòs": "FC en reposo", "Cursa de referència": "Carrera de referencia",
    "Temps (mm:ss o h:mm:ss)": "Tiempo (mm:ss o h:mm:ss)", "cap": "ninguna", "Desnivell de la cursa (m+)": "Desnivel de la carrera (m+)",
    "Distància de la marxa o cursa (km)": "Distancia de la marcha o carrera (km)",
    "El pla": "El plan", "Setmanes": "Semanas", "Inici (dd/mm/aaaa)": "Inicio (dd/mm/aaaa)", "el proper dilluns": "el próximo lunes",
    "Data objectiu (dd/mm/aaaa)": "Fecha objetivo (dd/mm/aaaa)", "Km de la sortida llarga": "Km de la salida larga",
    "Surto de": "Salgo de", "Rutes": "Rutas", "Comarques": "Comarcas", "Afegir força i mobilitat a casa": "Añadir fuerza y movilidad en casa",
    "Desar i fer el pla": "Guardar y hacer el plan", "Revisa el formulari:": "Revisa el formulario:",
    "Pla fet!": "¡Plan hecho!", "Desat.": "Guardado.", "Esborrat.": "Borrado.",
    "Les teves dades": "Tus datos",
    "Tot es desa en aquest mòbil, dins l'app. Fes una còpia de tant en tant: és el mateix fitxer que fa el programa Xoriguer de l'ordinador, i s'hi pot restaurar.":
      "Todo se guarda en este móvil, dentro de la app. Haz una copia de vez en cuando: es el mismo archivo que hace el programa Xoriguer del ordenador, y se puede restaurar allí.",
    "Desar una còpia de seguretat": "Guardar una copia de seguridad", "Idioma": "Idioma",
    "Canviar l'idioma reinicia l'app.": "Cambiar el idioma reinicia la app.", "Sobre l'app": "Sobre la app",
    "Versió de l'app": "Versión de la app", "Nucli de Xoriguer": "Núcleo de Xoriguer", "Mode": "Modo",
    "Independent (sense el programa de l'ordinador)": "Independiente (sin el programa del ordenador)",
    "Sobre els plans": "Sobre los planes", "Còpia desada.": "Copia guardada.",
    "No s'ha pogut fer: ": "No se ha podido hacer: ", "Avui": "Hoy",
    "Generant… (uns segons)": "Generando… (unos segundos)", "Sessió": "Sesión", "Tancar": "Cerrar",
    "Tots els drets reservats.": "Todos los derechos reservados.", "Llicència": "Licencia",
    "Sessions": "Sesiones", "Hores": "Horas", "Aquesta sessió encara no ha arribat.": "Esta sesión aún no ha llegado.",
  },
};
const DIES = { ca: ["dl", "dt", "dc", "dj", "dv", "ds", "dg"], es: ["lu", "ma", "mi", "ju", "vi", "sá", "do"] };
const DIES_LLARGS = { ca: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"],
                      es: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"] };
const MESOS = { ca: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
                es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"] };

const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sense espai o bloquejat */ } },
};
const IDIOMA = ls.get("xap.idioma", (navigator.language || "ca").startsWith("es") ? "es" : "ca");
function t(text, ...args) {
  let s = (IDIOMA === "es" && TEXTOS.es[text]) || text;
  args.forEach((a, i) => { s = s.replace(`{${i}}`, a); });
  return s;
}
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (sel) => document.querySelector(sel);

function isoLocal(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function dataDe(iso) { const [a, m, d] = iso.split("-").map(Number); return new Date(a, m - 1, d); }
function diaSetmana(iso) { return (dataDe(iso).getDay() + 6) % 7; }            // 0 = dilluns
function sumarDies(iso, n) { const d = dataDe(iso); d.setDate(d.getDate() + n); return isoLocal(d); }
function dataLlarga(iso) {
  const d = dataDe(iso);
  return IDIOMA === "es" ? `${DIES_LLARGS.es[diaSetmana(iso)]}, ${d.getDate()} de ${MESOS.es[d.getMonth()]}`
                         : `${DIES_LLARGS.ca[diaSetmana(iso)]}, ${d.getDate()} ${/^[aeiouà]/.test(MESOS.ca[d.getMonth()]) ? "d'" : "de "}${MESOS.ca[d.getMonth()]}`;
}
function avui() { return isoLocal(); }

// ── El motor ─────────────────────────────────────────────────────────────────
const motor = {
  w: null, n: 0, pendents: new Map(), llest: false,
  iniciar() {
    this.w = new Worker("nucli.js");
    this.w.onmessage = (e) => {
      const { id, ok, r, error } = e.data;
      const p = this.pendents.get(id);
      if (!p) return;
      this.pendents.delete(id);
      ok ? p.ok(r) : p.ko(new Error(error));
    };
    this.w.onerror = (e) => estat("error", t("Error") + ": " + (e.message || ""));
  },
  crida(f, ...args) {
    const id = ++this.n;
    return new Promise((ok, ko) => { this.pendents.set(id, { ok, ko }); this.w.postMessage({ id, f, args }); });
  },
  async json(f, ...args) { return JSON.parse(await this.crida(f, ...args)); },
};

// ── Estat de l'app ───────────────────────────────────────────────────────────
const E = {
  info: ls.get("xap.info", null),
  pla: ls.get("xap.pla", null),           // l'últim pla, per ensenyar-lo de seguida mentre arrenca el motor
  perfil: null,
  pantalla: "avui",
  setmana: null,
};

function estat(classe, text) {
  const el = $("#estat");
  el.className = classe;
  $("#estat-text").textContent = text;
}
function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("visible");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("visible"), 3200);
}
function anar(p) {
  E.pantalla = p;
  document.querySelectorAll(".pantalla").forEach((s) => s.classList.toggle("activa", s.id === "p-" + p));
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("activa", b.dataset.p === p));
  pintar();
  window.scrollTo(0, 0);
}
function pintar() {
  $("#carrega").style.display = "none";
  if (E.pantalla === "avui") pintarAvui();
  else if (E.pantalla === "setmana") pintarSetmana();
  else if (E.pantalla === "perfil") pintarPerfil();
  else pintarMes();
}
function carregant(text, sub = "") {
  document.querySelectorAll(".pantalla").forEach((s) => s.classList.remove("activa"));
  $("#carrega").style.display = "block";
  $("#carrega-text").innerHTML = `<b>${esc(text)}</b>${sub ? `<div class="suau" style="margin-top:6px">${esc(sub)}</div>` : ""}`;
}

async function refrescarPla(forcar = false) {
  const r = await motor.json("pla", avui(), forcar);
  E.pla = r.pla;
  ls.set("xap.pla", E.pla);
}

// ── Peces comunes ────────────────────────────────────────────────────────────
function etiquetesSessio(s) {
  let h = `<span class="etiqueta t">${esc(s.durada)}</span>`;
  if (s.zona) h += `<span class="etiqueta">${esc(s.zona)}</span>`;
  if (s.tss) h += `<span class="etiqueta">TSS ${Math.round(s.tss)}</span>`;
  if (s.adaptada) h += `<span class="etiqueta b">${t("Ajustada a la teva forma")}</span>`;
  if (s.matinal) h += `<span class="etiqueta g">${t("Ajustada pel control matinal")}</span>`;
  if (s.feta) h += `<span class="etiqueta v">✔ ${t("Feta")} · ${esc(s.feta.durada)}</span>`;
  return h;
}
function blocText(titol, text) {
  return text ? `<div class="bloc"><h4>${esc(titol)}</h4><p>${esc(text)}</p></div>` : "";
}
function targetaSessio(s, destacada = false) {
  const r = s.ruta;
  const idx = E.pla.sessions.indexOf(s);
  let ruta = "";
  if (r) {
    ruta = `<div class="bloc"><h4>${t("Ruta")}</h4><p><b>${esc(r.nom)}</b></p>
      <p class="suau">${r.km ? esc(r.km) + " km" : ""}${r.desnivell ? " · " + esc(r.desnivell) + " m+" : ""}${r.perfil ? " · " + esc(r.perfil) : ""}</p>
      ${r.port ? `<p class="suau">⛰ ${esc(r.port)}</p>` : ""}${r.notes ? `<p class="suau">${esc(r.notes)}</p>` : ""}
      ${r.maps ? `<div class="botons"><a class="boto" href="${esc(r.maps)}" target="_blank" rel="noopener">🗺 ${t("Obrir a Google Maps")}</a></div>` : ""}</div>`;
  }
  const potRegistrar = s.data <= avui();
  return `<div class="targeta${destacada ? " destacada" : ""}">
    <h2>${esc(s.nom)}</h2>
    <div style="margin-top:6px">${etiquetesSessio(s)}</div>
    ${s.feta && s.feta.compliment ? `<p class="suau">${esc(s.feta.compliment)}</p>` : ""}
    ${blocText(t("Què fer"), s.treball || s.descripcio)}
    ${ruta}
    ${blocText(t("Nota de la ruta"), s.nota_ruta)}
    ${blocText(t("Nutrició"), s.nutricio)}
    <div class="botons">${potRegistrar
      ? `<button class="boto ${s.feta ? "" : "principal"} ample" data-registrar="${idx}">${s.feta ? "✎ " + t("Editar el registre") : "✔ " + t("Ja l'he feta")}</button>`
      : `<span class="suau">${t("Aquesta sessió encara no ha arribat.")}</span>`}</div>
  </div>`;
}
function lligarBotonsSessio(arrel) {
  arrel.querySelectorAll("[data-registrar]").forEach((b) =>
    b.addEventListener("click", () => obrirRegistre(E.pla.sessions[Number(b.dataset.registrar)])));
}
function avisPla() {
  return E.info ? `<p class="avis-pla">${esc(E.info.avis_pla)}</p>` : "";
}

// ── Pantalla Avui ────────────────────────────────────────────────────────────
function pintarAvui() {
  const el = $("#p-avui");
  if (!E.pla) {
    el.innerHTML = `<div class="targeta"><p>${t("Encara no tens pla. Omple el perfil i prem «Desar i fer el pla».")}</p>
      <div class="botons"><button class="boto principal ample" id="anar-perfil">👤 ${t("Perfil")}</button></div></div>${avisPla()}`;
    $("#anar-perfil").onclick = () => anar("perfil");
    return;
  }
  const a = avui();
  const deAvui = E.pla.sessions.filter((s) => s.data === a);
  const m = E.pla.avui === a ? E.pla.matinal : null;
  const colors = { verd: "var(--verd)", groc: "var(--groc)", vermell: "var(--vermell)" };
  let h = `<div class="titol"><h1>${esc(dataLlarga(a))}</h1></div>`;
  h += `<div class="targeta"${m ? ` style="border-color:${colors[m.nivell]}"` : ""}>
    <h3>☀ ${t("Control matinal")}</h3>
    ${m ? `<p style="margin:6px 0 0">${esc(m.titol)}</p>${m.motius.length ? `<p class="suau">${esc(m.motius.join("; "))}</p>` : ""}`
        : `<p class="suau" style="margin:6px 0 0">${t("Encara no l'has fet. Són 20 segons i el pla s'ajusta a com et trobes.")}</p>`}
    <div class="botons"><button class="boto${m ? "" : " principal"} ample" id="bt-matinal">${m ? t("Tornar-lo a fer") : t("Fer el control matinal")}</button></div>
  </div>`;
  const principals = deAvui.filter((s) => !s.complementaria);
  if (deAvui.length) {
    deAvui.forEach((s) => { h += targetaSessio(s, !s.complementaria); });
  } else {
    h += `<div class="targeta"><p>😌 ${t("Avui no toca res: descans.")}</p></div>`;
  }
  if (!principals.length) {
    const seg = E.pla.sessions.find((s) => s.data > a && !s.complementaria);
    if (seg) h += `<div class="titol"><h2>${t("Propera sessió")}</h2><small>${esc(dataLlarga(seg.data))}</small></div>` + targetaSessio(seg);
  }
  const f = E.pla.forma;
  if (f) {
    h += `<div class="targeta"><h3>📈 ${t("Forma")}: ${esc(f.titol)}</h3>
      <div class="xifres"><div><b>${f.ctl}</b><span>${t("Forma (CTL)")}</span></div><div><b>${f.atl}</b><span>${t("Fatiga (ATL)")}</span></div>
      <div><b>${f.tsb > 0 ? "+" : ""}${f.tsb}</b><span>${t("Frescor (TSB)")}</span></div></div><p class="suau">${esc(f.text)}</p></div>`;
  }
  el.innerHTML = h + avisPla();
  $("#bt-matinal").onclick = obrirMatinal;
  lligarBotonsSessio(el);
}

// ── Pantalla Setmana ─────────────────────────────────────────────────────────
function setmanaDe(iso) {
  if (!E.pla) return 1;
  const dies = Math.floor((dataDe(iso) - dataDe(E.pla.inici)) / 86400000);
  return Math.max(1, Math.min(E.pla.setmanes, Math.floor(dies / 7) + 1));
}
function classeSemafor(s) {
  if (s.feta) return "feta";
  if (s.data === avui()) return "avui";
  if (s.data < avui()) return "passada";
  if (s.adaptada || s.matinal) return "adaptada";
  return "";
}
function pintarSetmana() {
  const el = $("#p-setmana");
  if (!E.pla) { pintarAvui(); el.innerHTML = $("#p-avui").innerHTML; const b = el.querySelector("#anar-perfil"); if (b) b.onclick = () => anar("perfil"); return; }
  if (E.setmana === null) E.setmana = setmanaDe(avui());
  const n = E.setmana;
  const r = E.pla.resum.find((x) => x.setmana === n) || {};
  const inici = sumarDies(E.pla.inici, (n - 1) * 7);
  let h = `<div class="navset"><button class="boto" id="s-ant" ${n <= 1 ? "disabled" : ""}>‹</button>
    <div class="info"><h2>${t("Setmana {0} de {1}", n, E.pla.setmanes)}</h2>
    <div class="suau">${esc(r.fase || "")} · ${esc(r.durada || "")} · TSS ${esc(r.tss ?? "")}</div></div>
    <button class="boto" id="s-seg" ${n >= E.pla.setmanes ? "disabled" : ""}>›</button></div>`;
  if (r.nota) h += `<div class="targeta" style="border-color:var(--blau)"><p class="suau" style="margin:0">📈 ${esc(r.nota)}</p></div>`;
  for (let i = 0; i < 7; i++) {
    const d = sumarDies(inici, i);
    const ss = E.pla.sessions.filter((s) => s.data === d);
    const dd = dataDe(d);
    h += `<div class="dia${d === avui() ? " avui" : ""}" data-dia="${d}">
      <div class="data"><span>${DIES[IDIOMA][i]}</span><b>${dd.getDate()}</b></div><div class="ses">`;
    h += ss.length ? ss.map((s) => `<div><span class="semafor ${classeSemafor(s)}"></span><span class="nom">${esc(s.nom)}</span>
      <span class="suau">${esc(s.durada)}</span></div>`).join("") : `<div class="descans">${t("descans")}</div>`;
    h += `</div></div>`;
  }
  h += `<p class="suau">${t("Llegenda")}: <span class="semafor feta" style="display:inline-block"></span> ${t("feta")} ·
    <span class="semafor passada" style="display:inline-block"></span> ${t("no feta")} ·
    <span class="semafor avui" style="display:inline-block"></span> ${t("Avui").toLowerCase()} ·
    <span class="semafor adaptada" style="display:inline-block"></span> ${t("ajustada")} ·
    <span class="semafor" style="display:inline-block"></span> ${t("pendent")}</p>`;
  el.innerHTML = h + avisPla();
  $("#s-ant").onclick = () => { E.setmana--; pintarSetmana(); };
  $("#s-seg").onclick = () => { E.setmana++; pintarSetmana(); };
  el.querySelectorAll("[data-dia]").forEach((d) => d.addEventListener("click", () => {
    const ss = E.pla.sessions.filter((s) => s.data === d.dataset.dia);
    if (ss.length) obrirDia(d.dataset.dia, ss);
  }));
}
function obrirDia(dia, ss) {
  modal(`<button class="tancar" data-tancar>×</button><div class="titol"><h2>${esc(dataLlarga(dia))}</h2></div>
    ${ss.map((s) => targetaSessio(s)).join("")}`);
  lligarBotonsSessio($("#modal-cos"));
}

// ── Modals: registrar i control matinal ──────────────────────────────────────
function modal(html) {
  $("#modal-cos").innerHTML = html;
  $("#modal").classList.add("obert");
  $("#modal-cos").querySelectorAll("[data-tancar]").forEach((b) => (b.onclick = tancarModal));
}
function tancarModal() { $("#modal").classList.remove("obert"); }
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") tancarModal(); });

function obrirRegistre(s) {
  const f = s.feta;
  const minuts = f ? Math.round(f.minuts) : Math.round(s.hores * 60);
  const rpe = f && f.rpe ? f.rpe : Math.max(2, Math.min(9, Math.round(((s.tss / Math.max(s.hores, 0.1) / 100) ** 0.5 - 0.45) / 0.055)));
  modal(`<button class="tancar" data-tancar>×</button><h2>${esc(s.nom)}</h2><p class="suau">${esc(dataLlarga(s.data))} · ${esc(s.durada)}</p>
    <form id="f-reg">
      <label>${t("Minuts")}</label><input name="minuts" type="number" inputmode="numeric" min="1" max="1440" value="${minuts}" required>
      <label>${t("Esforç (1-10)")}: <b id="rpe-v">${rpe}</b></label>
      <input name="rpe" type="range" min="1" max="10" value="${rpe}">
      <div class="extrems"><span>1 · ${t("suau")}</span><span>10 · ${t("a tope")}</span></div>
      <label>${t("Notes")}</label><textarea name="notes">${esc(f ? f.notes : "")}</textarea>
      <div class="botons"><button class="boto principal" type="submit">${t("Desar")}</button>
      ${f ? `<button class="boto perill" type="button" id="bt-esborrar">${t("Esborrar el registre")}</button>` : ""}</div>
    </form>`);
  const form = $("#f-reg");
  form.rpe.oninput = () => ($("#rpe-v").textContent = form.rpe.value);
  form.onsubmit = async (e) => {
    e.preventDefault();
    const r = await motor.json("registrar", JSON.stringify({ data: s.data, codi: s.codi, minuts: form.minuts.value,
      rpe: form.rpe.value, notes: form.notes.value }), avui());
    if (r.error) { toast(r.error); return; }
    tancarModal();
    await refrescarPla();
    toast(t("Desat.") + ` TSS ${Math.round(r.tss)}`);
    pintar();
  };
  if (f) $("#bt-esborrar").onclick = async () => {
    await motor.json("esborrar_registre", f.id);
    tancarModal();
    await refrescarPla();
    toast(t("Esborrat."));
    pintar();
  };
}

function segment(nom, valor) {
  return `<div class="segment" data-seg="${nom}">${[1, 2, 3, 4, 5].map((v) =>
    `<button type="button" data-v="${v}" class="${v === valor ? "sel" : ""}">${v}</button>`).join("")}</div>`;
}
function obrirMatinal() {
  const reg = (E.pla && E.pla.matinal && E.pla.matinal.registre) || {};
  const v = { fc: reg.fc || "", son: reg.son || 3, cames: reg.cames || 3 };
  modal(`<button class="tancar" data-tancar>×</button><h2>☀ ${t("Com t'has llevat?")}</h2>
    <form id="f-mat">
      <label>${t("Pulsacions en repòs (opcional)")}</label><input name="fc" type="number" inputmode="numeric" min="30" max="120" value="${esc(v.fc)}">
      <label>${t("Son")}</label>${segment("son", v.son)}<div class="extrems"><span>${t("molt malament")}</span><span>${t("molt bé")}</span></div>
      <label>${t("Cames")}</label>${segment("cames", v.cames)}<div class="extrems"><span>${t("molt carregades")}</span><span>${t("molt fresques")}</span></div>
      <label class="check"><input type="checkbox" name="aplicat" ${reg.aplicat === false ? "" : "checked"}> ${t("Ajustar la sessió d'avui segons el resultat")}</label>
      <div class="valoracio" id="valoracio"></div>
      <div class="botons"><button class="boto principal ample" type="submit">${t("Desar")}</button></div>
    </form>`);
  const form = $("#f-mat");
  const dades = () => JSON.stringify({ fc: form.fc.value, son: v.son, cames: v.cames, aplicat: form.aplicat.checked });
  const valorar = async () => {
    const r = await motor.json("valorar_matinal", dades(), avui());
    $("#valoracio").innerHTML = `<b>${esc(r.titol)}</b>${r.motius.length ? `<div class="suau">${esc(r.motius.join("; "))}</div>` : ""}`;
  };
  form.querySelectorAll("[data-seg]").forEach((g) => g.querySelectorAll("button").forEach((b) => (b.onclick = () => {
    v[g.dataset.seg] = Number(b.dataset.v);
    g.querySelectorAll("button").forEach((x) => x.classList.toggle("sel", x === b));
    valorar();
  })));
  form.fc.oninput = valorar;
  form.onsubmit = async (e) => {
    e.preventDefault();
    const r = await motor.json("matinal", dades(), avui());
    tancarModal();
    await refrescarPla();
    toast(r.titol);
    pintar();
  };
  valorar();
}

// ── Pantalla Perfil ──────────────────────────────────────────────────────────
function opcionsSelect(dic, valor) {
  return Object.entries(dic).map(([k, v]) => `<option value="${esc(k)}" ${String(k) === String(valor) ? "selected" : ""}>${esc(v)}</option>`).join("");
}
function pintarPerfil() {
  const el = $("#p-perfil");
  if (!motor.llest || !E.perfil) { el.innerHTML = `<div class="targeta suau">${t("Preparant el motor de Xoriguer…")}</div>`; return; }
  const o = E.info.opcions;
  const p = E.perfil;
  const c = p.ciclista || {};
  const nou = !p.ciclista;
  const val = (x) => (x === null || x === undefined ? "" : esc(x));
  const comarques = c.comarques || o.comarques_defecte;
  const dref = c.cursa_km ? String(Object.keys(o.distancies_ref).find((k) => Math.abs(Number(k) - c.cursa_km) < 0.01) || "") : "";
  el.innerHTML = `${nou ? `<div class="targeta destacada"><p style="margin:0">👋 ${t("Benvingut! Omple el perfil i tindràs el teu pla.")}</p></div>` : ""}
  <form id="f-perfil" novalidate>
    <fieldset><legend>${t("Perfil")}</legend>
      <label>${t("Nom")}</label><input name="nom" value="${val(c.nom)}" autocomplete="name">
      <div class="fila3">
        <div><label>${t("Edat")}</label><input name="edat" type="number" inputmode="numeric" value="${val(c.edat)}"></div>
        <div><label>${t("Pes (kg)")}</label><input name="pes" type="number" inputmode="decimal" step="0.1" value="${val(c.pes)}"></div>
        <div><label>${t("Alçada (cm)")}</label><input name="alcada_cm" type="number" inputmode="numeric" value="${val(c.alcada_cm)}"></div>
      </div>
      <label>${t("Sexe")}</label><select name="sexe">${opcionsSelect(o.sexes, c.sexe || "H")}</select>
      <label>${t("Esport")}</label><select name="esport">${opcionsSelect({ bici: t("Bici"), cursa: t("Córrer"), multi: t("Bici + córrer") }, c.esport || "bici")}</select>
      <div data-mostra="bici multi"><label>${t("Modalitat")}</label><select name="modalitat">${opcionsSelect(o.modalitats, c.modalitat || "carretera")}</select>
        <label>${t("Objectiu")}</label><select name="objectiu"></select></div>
      <div data-mostra="cursa multi"><label>${t("Objectiu")} (${t("Córrer").toLowerCase()})</label><select name="obj_cursa">${opcionsSelect(o.objectius_cursa, c.obj_cursa || "10k")}</select></div>
      <div class="fila">
        <div><label>${t("Hores d'esport per setmana (ara)")}</label><input name="hores_setmana" type="number" inputmode="decimal" step="0.5" value="${val(c.hores_setmana)}"></div>
        <div><label>${t("Dies per entrenar")}</label><select name="dies">${opcionsSelect({ 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 }, c.dies || 3)}</select></div>
      </div>
      <label class="check"><input type="checkbox" name="forca" ${c.forca ? "checked" : ""}> ${t("Afegir força i mobilitat a casa")}</label>
    </fieldset>
    <fieldset><legend>${t("Dades opcionals")}</legend>
      <div class="fila3">
        <div data-mostra="bici multi"><label>${t("FTP (W)")}</label><input name="ftp" type="number" inputmode="numeric" value="${val(c.ftp)}"></div>
        <div><label>${t("FC màxima")}</label><input name="fc_max" type="number" inputmode="numeric" value="${val(c.fc_max)}"></div>
        <div><label>${t("FC en repòs")}</label><input name="fc_repos" type="number" inputmode="numeric" value="${val(c.fc_repos)}"></div>
      </div>
      <div data-mostra="cursa multi" class="fila">
        <div><label>${t("Cursa de referència")}</label><select name="cursa_km"><option value="">${t("cap")}</option>${opcionsSelect(o.distancies_ref, dref)}</select></div>
        <div><label>${t("Temps (mm:ss o h:mm:ss)")}</label><input name="cursa_temps" value="${val(c.cursa_temps)}" inputmode="numeric"></div>
      </div>
      <div class="fila">
        <div data-mostra="cursa multi"><label>${t("Desnivell de la cursa (m+)")}</label><input name="cursa_dplus" type="number" inputmode="numeric" value="${val(c.cursa_dplus)}"></div>
        <div><label>${t("Distància de la marxa o cursa (km)")}</label><input name="dist_objectiu" type="number" inputmode="decimal" value="${val(c.dist_objectiu)}"></div>
      </div>
    </fieldset>
    <fieldset><legend>${t("El pla")}</legend>
      <div class="fila">
        <div><label>${t("Setmanes")}</label><input name="setmanes" type="number" inputmode="numeric" min="4" max="24" value="${val(p.setmanes || 12)}"></div>
        <div><label>${t("Km de la sortida llarga")}</label><input name="km_llarga" type="number" inputmode="decimal" value="${val(p.km_llarga)}"></div>
      </div>
      <div class="fila">
        <div><label>${t("Inici (dd/mm/aaaa)")}</label><input name="inici" value="${val(nou ? "" : p.inici)}" placeholder="${t("el proper dilluns")}" inputmode="numeric"></div>
        <div><label>${t("Data objectiu (dd/mm/aaaa)")}</label><input name="data_objectiu" value="${val(p.data_objectiu)}" inputmode="numeric"></div>
      </div>
      <label>${t("Surto de")}</label><input name="origen" list="pobles" value="${val(p.origen || "Vallmoll")}"><datalist id="pobles"></datalist>
      <label>${t("Rutes")}</label><select name="mode_rutes">${opcionsSelect(o.modes_rutes, p.mode_rutes || "barreja")}</select>
      <details><summary>${t("Comarques")} (<span id="n-com">${comarques.length}</span>)</summary><div class="comarques">
        ${o.comarques.map((k) => `<label class="check"><input type="checkbox" name="comarca" value="${esc(k)}" ${comarques.includes(k) ? "checked" : ""}> ${esc(k)}</label>`).join("")}
      </div></details>
    </fieldset>
    <div id="errors-perfil"></div>
    <div class="botons"><button class="boto principal ample" type="submit">${t("Desar i fer el pla")}</button></div>
  </form>${avisPla()}`;
  const form = $("#f-perfil");
  const objectiusBici = () => {
    const sel = form.objectiu.value || c.objectiu || "salut";
    form.objectiu.innerHTML = opcionsSelect(o.objectius_bici[form.modalitat.value] || o.objectius_bici.carretera, sel);
  };
  const visibilitat = () => {
    form.querySelectorAll("[data-mostra]").forEach((d) => { d.style.display = d.dataset.mostra.split(" ").includes(form.esport.value) ? "" : "none"; });
  };
  const comarquesSel = () => [...form.querySelectorAll("[name=comarca]:checked")].map((x) => x.value);
  const pobles = async () => {
    const llista = await motor.json("pobles", JSON.stringify(comarquesSel()));
    $("#pobles").innerHTML = llista.map((x) => `<option value="${esc(x)}">`).join("");
  };
  objectiusBici();
  visibilitat();
  pobles();
  form.modalitat.onchange = objectiusBici;
  form.esport.onchange = visibilitat;
  form.querySelectorAll("[name=comarca]").forEach((x) => (x.onchange = () => { $("#n-com").textContent = comarquesSel().length; pobles(); }));
  form.onsubmit = async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form).entries());
    d.forca = form.forca.checked;
    d.comarques = comarquesSel();
    delete d.comarca;
    const r = await motor.json("desar_perfil", JSON.stringify(d), avui());
    if (r.errors.length) {
      $("#errors-perfil").innerHTML = `<div class="errors"><b>${t("Revisa el formulari:")}</b><ul>${r.errors.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
      $("#errors-perfil").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    carregant(t("Generant el pla…"), t("Generant… (uns segons)"));
    E.perfil = await motor.json("perfil");
    await refrescarPla(true);
    E.setmana = null;
    toast(t("Pla fet!"));
    anar("avui");
    if (r.avisos.length) modal(`<button class="tancar" data-tancar>×</button>${r.avisos.map((x) => `<p>⚠ ${esc(x)}</p>`).join("")}
      <div class="botons"><button class="boto principal ample" data-tancar>${t("Tancar")}</button></div>`);
  };
}

// ── Pantalla Més ─────────────────────────────────────────────────────────────
function pintarMes() {
  const el = $("#p-mes");
  const i = E.info || {};
  el.innerHTML = `
    <div class="targeta"><h3>💾 ${t("Les teves dades")}</h3>
      <p class="suau">${t("Tot es desa en aquest mòbil, dins l'app. Fes una còpia de tant en tant: és el mateix fitxer que fa el programa Xoriguer de l'ordinador, i s'hi pot restaurar.")}</p>
      <div class="botons"><button class="boto ample" id="bt-copia" ${motor.llest ? "" : "disabled"}>⬇ ${t("Desar una còpia de seguretat")}</button></div></div>
    <div class="targeta"><h3>🌐 ${t("Idioma")}</h3>
      <div class="segment" style="margin-top:10px"><button type="button" data-idioma="ca" class="${IDIOMA === "ca" ? "sel" : ""}">Català</button>
      <button type="button" data-idioma="es" class="${IDIOMA === "es" ? "sel" : ""}">Castellano</button></div>
      <p class="suau">${t("Canviar l'idioma reinicia l'app.")}</p></div>
    <div class="targeta"><h3>ℹ ${t("Sobre l'app")}</h3>
      <p class="suau">${t("Versió de l'app")}: ${VERSIO_APP}<br>${t("Nucli de Xoriguer")}: ${esc(i.versio_nucli || "–")}<br>
      ${t("Mode")}: ${t("Independent (sense el programa de l'ordinador)")}</p>
      <p class="suau">© 2026 Xorigu3r · ${t("Tots els drets reservats.")} <a href="LLICENCIA.txt" target="_blank" rel="noopener">${t("Llicència")}</a></p></div>
    <div class="targeta"><h3>${t("Sobre els plans")}</h3><p class="suau">${esc(i.avis_pla || "")}</p></div>`;
  $("#bt-copia").onclick = async () => {
    try {
      const c = await motor.json("copia");
      const bytes = await motor.crida("llegir_fitxer", c.fitxer);
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/zip" }));
      const a = Object.assign(document.createElement("a"), { href: url, download: c.nom });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      toast(t("Còpia desada."));
    } catch (e) { toast(t("No s'ha pogut fer: ") + e.message); }
  };
  el.querySelectorAll("[data-idioma]").forEach((b) => (b.onclick = () => {
    if (b.dataset.idioma === IDIOMA) return;
    ls.set("xap.idioma", b.dataset.idioma);
    localStorage.removeItem("xap.pla");                     // els textos del pla venen en l'idioma del nucli
    localStorage.removeItem("xap.info");
    location.reload();
  }));
}

// ── Arrencada ────────────────────────────────────────────────────────────────
async function arrencar() {
  document.documentElement.lang = IDIOMA;
  document.querySelectorAll("[data-t]").forEach((x) => (x.textContent = t(x.dataset.t)));
  document.querySelectorAll("nav button").forEach((b) => (b.onclick = () => anar(b.dataset.p)));
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js").catch(() => {});
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  estat("", t("Carregant"));
  if (E.pla) anar("avui");                                   // el pla d'abans, de seguida
  else carregant(t("Preparant el motor de Xoriguer…"), t("La primera vegada triga una mica: després funciona sense cobertura."));
  motor.iniciar();
  try {
    E.info = JSON.parse(await motor.crida("arrencar", IDIOMA));
    ls.set("xap.info", E.info);
    motor.llest = true;
    E.perfil = await motor.json("perfil");
    if (E.perfil.ciclista) {
      if (!E.pla) carregant(t("Generant el pla…"), t("Generant… (uns segons)"));
      await refrescarPla();
      estat("llest", t("Motor a punt"));
      anar(E.pantalla);
    } else {
      E.pla = null;
      localStorage.removeItem("xap.pla");
      estat("llest", t("Motor a punt"));
      anar("perfil");
    }
  } catch (e) {
    console.error(e);
    estat("error", t("Error"));
    $("#carrega").style.display = "block";
    $("#carrega-text").innerHTML = `<b>${t("Error")}</b><pre class="suau" style="white-space:pre-wrap;text-align:left">${esc(e.message)}</pre>`;
  }
}
arrencar();
