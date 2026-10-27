/* Stanowisko egzaminacyjne - wirtualny komputer w przeglądarce
   Aplikacje: edytor kodu z podglądem, baza danych SQL, arkusz kalkulacyjny,
   edytor tekstu, programowanie (JavaScript), zaciskanie kabla, sieć (env-net.js). */
(function () {
  "use strict";
  var ENV = window.ZDAM_ENV = { apps: {} };

  /* ---------- style ---------- */
  var CSS = `
#env { position: fixed; inset: 0; z-index: 60; display: grid; grid-template-rows: auto minmax(0,1fr) auto; background: var(--desk); color: var(--ink); font-family: var(--f-body); padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }
:root { --desk: #2a3352; --desk-2: #222a45; --chrome: #f7f8fb; --chrome-ink: #1d2438; --sel: #cfdcff; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --chrome: #1b2030; --chrome-ink: #e3e7f2; --sel: #2c3a6b; } }
:root[data-theme="dark"] { --chrome: #1b2030; --chrome-ink: #e3e7f2; --sel: #2c3a6b; }
#env .et { display: flex; align-items: center; gap: 10px; padding: 8px max(12px, env(safe-area-inset-right, 0px)) 8px max(12px, env(safe-area-inset-left, 0px)); background: var(--desk-2); color: #eef1fa; flex-wrap: wrap; }
#env .et b { font-family: var(--f-display); font-weight: 700; }
#env .et .sp { flex: 1; }
#env .et .tm { font-family: var(--f-mono); font-size: 1.05rem; font-variant-numeric: tabular-nums; background: rgba(255,255,255,.08); padding: 3px 10px; border-radius: 6px; }
#env .et .tm.low { color: #ff9b94; }
#env .eb { font: inherit; font-size: .9rem; border: 1px solid rgba(255,255,255,.25); background: transparent; color: #eef1fa; padding: 6px 12px; border-radius: 7px; cursor: pointer; }
#env .eb:hover { background: rgba(255,255,255,.1); }
#env .eb.pri { background: #6f8cff; border-color: #6f8cff; color: #0d1430; font-weight: 600; }
#env .em { display: grid; grid-template-columns: minmax(260px, 340px) minmax(0, 1fr); min-height: 0; }
#env.notask .em { grid-template-columns: minmax(0, 1fr); }
#env.notask .etask { display: none; }
#env .etask { background: var(--card); color: var(--ink); overflow: auto; padding: 16px; border-right: 1px solid var(--line); font-size: .92rem; line-height: 1.5; }
#env .etask h3 { font-family: var(--f-display); font-size: 1.05rem; margin: 0 0 8px; }
#env .etask h4 { margin: 14px 0 6px; font-size: .95rem; }
#env .etask ol, #env .etask ul { padding-left: 20px; margin: 6px 0; }
#env .etask code { font-family: var(--f-mono); font-size: .86em; background: var(--soft); padding: 1px 4px; border-radius: 4px; }
#env .etask table { border-collapse: collapse; font-size: .85rem; margin: 6px 0; }
#env .etask td, #env .etask th { border: 1px solid var(--line); padding: 3px 6px; }
#env .ans { display: grid; gap: 8px; margin-top: 8px; }
#env .ans label { display: grid; gap: 3px; font-size: .86rem; }
#env .ans input { font: inherit; padding: 6px 8px; border: 1px solid var(--line); border-radius: 6px; background: var(--paper); color: var(--ink); font-family: var(--f-mono); }
#env .edesk { min-height: 0; min-width: 0; padding: 10px; display: grid; }
#env .ewin { background: var(--chrome); color: var(--chrome-ink); border-radius: 8px; overflow: hidden; display: grid; grid-template-rows: auto minmax(0,1fr); min-height: 0; min-width: 0; box-shadow: 0 10px 30px rgba(0,0,0,.35); }
#env .ewt { display: flex; align-items: center; gap: 8px; padding: 6px 10px; background: var(--soft); border-bottom: 1px solid var(--line); font-size: .85rem; font-weight: 600; }
#env .ewt .dots { display: flex; gap: 5px; } #env .ewt .dots i { width: 10px; height: 10px; border-radius: 50%; background: var(--line); }
#env .ewb { min-height: 0; min-width: 0; overflow: auto; position: relative; }
#env .ebar { display: flex; gap: 6px; padding: 6px max(10px, env(safe-area-inset-right, 0px)) 6px max(10px, env(safe-area-inset-left, 0px)); background: var(--desk-2); overflow-x: auto; }
#env .ebar button { font: inherit; font-size: .82rem; display: flex; align-items: center; gap: 7px; padding: 6px 12px; border-radius: 7px; border: 1px solid transparent; background: rgba(255,255,255,.06); color: #dfe5f7; cursor: pointer; white-space: nowrap; }
#env .ebar button.on { background: rgba(111,140,255,.3); border-color: #6f8cff; color: #fff; }
#env .ebar .ic { font-family: var(--f-mono); font-size: .72rem; font-weight: 600; background: rgba(255,255,255,.14); border-radius: 4px; padding: 1px 5px; }
#env .tool { display: flex; gap: 6px; padding: 6px 8px; border-bottom: 1px solid var(--line); flex-wrap: wrap; align-items: center; background: var(--chrome); }
#env .tb { font: inherit; font-size: .82rem; padding: 4px 10px; border: 1px solid var(--line); border-radius: 5px; background: var(--card); color: var(--chrome-ink); cursor: pointer; }
#env .tb:hover { border-color: var(--pen); }
#env .tb.on { background: var(--sel); border-color: var(--pen); }
#env .tb.go { background: var(--pen); border-color: var(--pen); color: #fff; }
#env select.tb { padding: 4px 6px; }
#env .mono { font-family: var(--f-mono); }
#env .split { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); min-height: 0; height: 100%; }
#env .col { display: grid; grid-template-rows: auto minmax(0,1fr); min-height: 0; min-width: 0; }
#env .ed { display: grid; grid-template-columns: auto minmax(0,1fr); min-height: 0; height: 100%; font-family: var(--f-mono); font-size: 13px; line-height: 1.5; background: var(--card); }
#env .ed .gut { padding: 8px 6px; text-align: right; color: var(--muted); background: var(--soft); user-select: none; overflow: hidden; white-space: pre; }
#env .ed textarea { border: 0; outline: 0; resize: none; padding: 8px; font: inherit; line-height: inherit; background: transparent; color: var(--chrome-ink); white-space: pre; overflow: auto; tab-size: 2; min-height: 0; }
#env iframe.pv { border: 0; width: 100%; height: 100%; background: #fff; }
#env .grid-res { border-collapse: collapse; font-size: .82rem; font-family: var(--f-mono); }
#env .grid-res th, #env .grid-res td { border: 1px solid var(--line); padding: 3px 8px; text-align: left; white-space: nowrap; }
#env .grid-res th { background: var(--soft); }
#env .msg { padding: 8px 10px; font-size: .85rem; border-radius: 6px; margin: 8px; }
#env .msg.ok { background: var(--ok-soft); color: var(--ok); } #env .msg.err { background: var(--red-soft); color: var(--red); white-space: pre-wrap; font-family: var(--f-mono); font-size: .8rem; }
#env .eside { border-right: 1px solid var(--line); overflow: auto; font-size: .85rem; background: var(--chrome); }
#env .eside button { display: block; width: 100%; text-align: left; font: inherit; padding: 5px 10px; border: 0; background: none; color: var(--chrome-ink); cursor: pointer; font-family: var(--f-mono); font-size: .82rem; }
#env .eside button:hover, #env .eside button.on { background: var(--sel); }
#env .eside .h { padding: 8px 10px 4px; font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); font-weight: 600; }
/* arkusz */
#env .sh { border-collapse: collapse; font-size: 13px; font-family: var(--f-body); table-layout: fixed; }
#env .sh th { background: var(--soft); color: var(--muted); font-weight: 500; font-size: 12px; border: 1px solid var(--line); position: sticky; top: 0; z-index: 1; }
#env .sh th.rh { position: sticky; left: 0; z-index: 2; width: 38px; }
#env .sh td { border: 1px solid var(--line); height: 24px; padding: 0 5px; white-space: nowrap; overflow: hidden; background: var(--card); cursor: cell; font-variant-numeric: tabular-nums; }
#env .sh td.num { text-align: right; }
#env .sh td.sel { outline: 2px solid var(--pen); outline-offset: -2px; }
#env .sh td.rng { background: var(--sel); }
#env .sh td.b { font-weight: 700; }
#env .sh td.er { color: var(--red); }
#env .fbar { display: grid; grid-template-columns: 60px minmax(0,1fr); gap: 6px; padding: 6px 8px; border-bottom: 1px solid var(--line); }
#env .fbar input { font: inherit; font-family: var(--f-mono); font-size: 13px; padding: 4px 8px; border: 1px solid var(--line); border-radius: 4px; background: var(--card); color: var(--chrome-ink); min-width: 0; }
/* dokument */
#env .docwrap { background: var(--soft); padding: 18px; min-height: 100%; }
#env .page { background: #fff; color: #111; max-width: 794px; min-height: 1000px; margin: 0 auto; padding: 60px 70px; box-shadow: 0 2px 10px rgba(0,0,0,.15); font-family: "Times New Roman", Georgia, serif; font-size: 15px; line-height: 1.5; outline: none; }
#env .page table { border-collapse: collapse; width: 100%; }
#env .page td, #env .page th { border: 1px solid #555; padding: 4px 6px; min-width: 40px; }
/* konsola */
#env .con { background: #111522; color: #d6dcf0; font-family: var(--f-mono); font-size: 13px; padding: 10px; white-space: pre-wrap; overflow: auto; min-height: 0; }
#env .con .e { color: #ff8f86; } #env .con .i { color: #8fb0ff; }
/* kabel */
#env .crimp { padding: 16px; display: grid; gap: 16px; }
#env .plug { display: grid; grid-template-columns: repeat(8, 34px); gap: 4px; }
#env .slot { width: 34px; height: 70px; border: 2px dashed var(--line); border-radius: 4px; cursor: pointer; position: relative; }
#env .slot.cur { border-color: var(--pen); border-style: solid; }
#env .slot span { position: absolute; bottom: -18px; left: 0; right: 0; text-align: center; font-size: 11px; font-family: var(--f-mono); color: var(--muted); }
#env .wires { display: flex; gap: 6px; flex-wrap: wrap; }
#env .wire { width: 70px; height: 26px; border-radius: 13px; border: 1px solid rgba(0,0,0,.25); cursor: pointer; font-size: 10px; display: grid; place-items: center; color: #111; text-shadow: 0 0 2px #fff; }
#env .tester { display: grid; grid-template-columns: repeat(8, 30px); gap: 4px; font-family: var(--f-mono); font-size: 12px; }
#env .tester div { height: 26px; display: grid; place-items: center; border-radius: 4px; background: var(--soft); }
#env .tester .ok { background: var(--ok-soft); color: var(--ok); } #env .tester .bad { background: var(--red-soft); color: var(--red); }
/* ocena */
#env .ov { position: absolute; inset: 0; background: rgba(10,14,30,.6); display: grid; place-items: center; z-index: 5; padding: 16px; }
#env .ovb { background: var(--card); color: var(--ink); border-radius: 10px; padding: 20px; max-width: 760px; width: 100%; max-height: 100%; overflow: auto; display: grid; gap: 12px; }
#env .ovb h3 { font-family: var(--f-display); margin: 0; }
#env .chk { display: grid; gap: 6px; }
#env .chk .it { display: grid; grid-template-columns: 22px minmax(0,1fr); gap: 8px; align-items: start; font-size: .9rem; padding: 6px 8px; border-radius: 6px; background: var(--soft); }
#env .chk .it.ok { background: var(--ok-soft); } #env .chk .it.bad { background: var(--red-soft); }
#env .chk .it small { display: block; color: var(--muted); }
#env .chk .g { font-weight: 600; margin-top: 8px; font-size: .85rem; }
#env .ovbtns { display: flex; gap: 8px; flex-wrap: wrap; }
#env .ovbtns .eb { color: var(--ink); border-color: var(--line); }
#env .ovbtns .eb.pri { color: #0d1430; }
#env .sqlg { display: grid; grid-template-columns: 180px minmax(0,1fr); height: 100%; }
#env .netg { display: grid; grid-template-columns: minmax(220px,300px) minmax(0,1fr); height: 100%; }
@media (max-width: 820px) {
  #env .sqlg, #env .netg { grid-template-columns: minmax(0,1fr); grid-template-rows: auto minmax(0,1fr); }
  #env .sqlg > .eside, #env .netg > .eside { max-height: 150px; border-right: 0; border-bottom: 1px solid var(--line); }
  #env .em { grid-template-columns: minmax(0,1fr); }
  #env .etask { position: absolute; z-index: 4; inset: 52px 0 46px 0; border-right: 0; }
  #env .split { grid-template-columns: minmax(0,1fr); grid-template-rows: minmax(0,1fr) minmax(0,1fr); }
  #env .edesk { padding: 4px; }
}`;

  function injectCSS() {
    if (document.getElementById("env-css")) return;
    var s = document.createElement("style"); s.id = "env-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  /* ---------- pomocnicze ---------- */
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function h(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function num(v) {
    if (typeof v === "number") return v;
    var s = String(v).trim().replace(/\s/g, "").replace(/zł|%|€|kg|h|szt\.?|m²|m2|min/gi, "").replace(",", ".");
    return s === "" || isNaN(+s) ? NaN : +s;
  }
  function fmtNum(v, dec) {
    if (typeof v !== "number" || !isFinite(v)) return String(v);
    if (dec != null) return v.toFixed(dec).replace(".", ",");
    var r = Math.round(v * 1e9) / 1e9;
    return String(r).replace(".", ",");
  }
  function normText(t) { return String(t).toLowerCase().replace(/\s+/g, " ").trim(); }
  ENV.util = { esc: esc, h: h, num: num, fmtNum: fmtNum, normText: normText };

  /* ---------- zapis szkicu ---------- */
  function draftKey(kod) { return "zdam-env-" + kod; }
  function loadDraft(kod) { try { var r = localStorage.getItem(draftKey(kod)); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
  function saveDraft(E) {
    try {
      var d = { files: E.files, sqlLog: E.sqlLog, sheet: E.sheet, doc: E.doc, js: E.js, crimp: E.crimp, answers: E.answers, net: E.net ? E.net.dump() : null, start: E.start };
      localStorage.setItem(draftKey(E.kod), JSON.stringify(d));
    } catch (e) {}
  }
  function clearDraft(kod) { try { localStorage.removeItem(draftKey(kod)); } catch (e) {} }

  /* ---------- otwarcie stanowiska ---------- */
  var E = null, root = null, tmr = null;
  ENV.open = function (kod, spec, praktyka, onDone, fresh) {
    injectCSS();
    if (fresh) clearDraft(kod);
    var d = loadDraft(kod);
    E = {
      kod: kod, spec: spec, P: praktyka, onDone: onDone,
      files: (d && d.files) || JSON.parse(JSON.stringify(spec.files || {})),
      sqlLog: (d && d.sqlLog) || [],
      sheet: (d && d.sheet) || { cells: JSON.parse(JSON.stringify(spec.sheet || {})), fmt: {} },
      doc: (d && d.doc) || spec.doc || "",
      js: (d && d.js) || { code: spec.jsCode || "", input: spec.jsInput || "" },
      crimp: (d && d.crimp) || { a: [], b: [] },
      answers: (d && d.answers) || {},
      start: (d && d.start) || Date.now(),
      netDump: d && d.net,
      app: spec.apps[0]
    };
    if (spec.apps.indexOf("sql") >= 0) initDB();
    if (spec.apps.indexOf("net") >= 0 && ENV.net) E.net = ENV.net.create(spec.net, E.netDump);
    build();
  };

  function build() {
    if (root) root.remove();
    root = h('<div id="env" role="dialog" aria-label="Stanowisko egzaminacyjne"></div>');
    var P = E.P, spec = E.spec;
    root.innerHTML =
      '<div class="et"><b>Stanowisko egzaminacyjne · ' + esc(E.kod) + '</b><span class="tm" id="etm">--:--</span><span class="sp"></span>' +
      '<button class="eb" id="etask">Treść zadania</button><button class="eb" id="ereset">Zacznij od nowa</button><button class="eb pri" id="efin">Zakończ i sprawdź</button><button class="eb" id="eclose">Zamknij</button></div>' +
      '<div class="em"><aside class="etask" id="etaskp"></aside><div class="edesk" id="edesk"></div></div>' +
      '<div class="ebar" id="ebar"></div>';
    document.body.appendChild(root);
    document.body.style.overflow = "hidden";
    if (window.innerWidth < 820) root.classList.add("notask");
    renderTask();
    renderBar();
    showApp(E.app);
    root.querySelector("#etask").onclick = function () { root.classList.toggle("notask"); };
    root.querySelector("#eclose").onclick = function () { confirmBox("Zamknąć stanowisko? Twoja praca zostanie zapisana w tej przeglądarce i możesz do niej wrócić.", "Zamknij", function () { saveDraft(E); close(); }); };
    root.querySelector("#ereset").onclick = function () { confirmBox("Wyczyścić całą pracę i zacząć zadanie od nowa?", "Zacznij od nowa", function () { var a = [E.kod, E.spec, E.P, E.onDone]; close(); ENV.open(a[0], a[1], a[2], a[3], true); }); };
    root.querySelector("#efin").onclick = function () { saveDraft(E); grade(); };
    clearInterval(tmr); tmr = setInterval(tick, 1000); tick();
  }
  function close() { clearInterval(tmr); if (root) root.remove(); root = null; document.body.style.overflow = ""; }
  function tick() {
    var el = document.getElementById("etm"); if (!el) return;
    var left = E.P.czas * 60000 - (Date.now() - E.start), neg = left < 0; left = Math.abs(left);
    var m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000);
    el.textContent = (neg ? "+" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    el.classList.toggle("low", !neg && left < 15 * 60000 || neg);
    if (Date.now() % 15000 < 1000) saveDraft(E);
  }
  function confirmBox(text, okLabel, fn) {
    var ov = h('<div class="ov"><div class="ovb" style="max-width:440px"><div>' + esc(text) + '</div><div class="ovbtns"><button class="eb pri">' + esc(okLabel) + '</button><button class="eb">Anuluj</button></div></div></div>');
    root.querySelector(".em").style.position = "relative";
    root.appendChild(ov);
    var b = ov.querySelectorAll("button");
    b[0].onclick = function () { ov.remove(); fn(); };
    b[1].onclick = function () { ov.remove(); };
  }

  function renderTask() {
    var spec = E.spec, P = E.P, t = root.querySelector("#etaskp");
    var html = '<h3>' + esc(P.tytul) + '</h3><div class="muted" style="font-size:.82rem">Czas: ' + P.czas + ' min · model „' + esc(P.model) + '”</div>' + (spec.intro || "") + P.opis;
    if (spec.note) html += '<div class="msg ok" style="margin:10px 0">' + spec.note + '</div>';
    if (spec.odpowiedzi && spec.odpowiedzi.length) {
      html += '<h4>Karta odpowiedzi</h4><div class="muted" style="font-size:.82rem">Wpisz wyniki obliczeń (przecinek lub kropka). Obliczenia wykonaj w arkuszu lub na kartce.</div><div class="ans">' +
        spec.odpowiedzi.map(function (a, i) {
          return '<label>' + esc(a.l) + '<input id="ans' + i + '" data-i="' + i + '" value="' + esc(E.answers[i] || "") + '" placeholder="' + esc(a.unit || "") + '" autocomplete="off"></label>';
        }).join("") + '</div>';
    }
    t.innerHTML = html;
    t.querySelectorAll(".ans input").forEach(function (inp) { inp.oninput = function () { E.answers[inp.dataset.i] = inp.value; }; });
  }
  function renderBar() {
    var bar = root.querySelector("#ebar");
    bar.innerHTML = E.spec.apps.map(function (a) {
      var A = ENV.apps[a]; if (!A) return "";
      return '<button data-a="' + a + '" class="' + (a === E.app ? "on" : "") + '"><span class="ic">' + esc(A.icon) + '</span>' + esc(A.title) + '</button>';
    }).join("");
    bar.querySelectorAll("button").forEach(function (b) { b.onclick = function () { showApp(b.dataset.a); }; });
  }
  function showApp(a) {
    if (E.unmount) { try { E.unmount(); } catch (e) {} E.unmount = null; }
    E.app = a; renderBar();
    var A = ENV.apps[a], desk = root.querySelector("#edesk");
    desk.innerHTML = '<div class="ewin"><div class="ewt"><span class="dots"><i></i><i></i><i></i></span>' + esc(A.title) + '</div><div class="ewb" id="ewb"></div></div>';
    E.unmount = A.mount(E, desk.querySelector("#ewb")) || null;
  }
  ENV.state = function () { return E; };

  /* ---------- ocena ---------- */
  function grade() {
    var spec = E.spec, P = E.P, items = [];
    function run(fn) { try { return fn(); } catch (e) { return { ok: false, info: "Błąd sprawdzania: " + e.message }; } }
    var pending = [];
    (spec.checks || []).forEach(function (c) {
      var r = run(function () { return c.f(E, ENV); });
      if (r && typeof r.then === "function") pending.push(r.then(function (v) { return { c: c, r: v }; }, function (e) { return { c: c, r: { ok: false, info: String(e) } }; }));
      else pending.push(Promise.resolve({ c: c, r: r }));
    });
    var ov = h('<div class="ov"><div class="ovb"><h3>Sprawdzanie…</h3><div class="muted">Uruchamiam testy Twojej pracy.</div></div></div>');
    root.appendChild(ov);
    Promise.all(pending).then(function (res) {
      res.forEach(function (x) {
        var r = typeof x.r === "boolean" ? { ok: x.r } : (x.r || { ok: false });
        items.push({ auto: true, g: x.c.g || "Sprawdzane automatycznie", l: x.c.l, ok: !!r.ok, info: r.info || "" });
      });
      (spec.odpowiedzi || []).forEach(function (a, i) {
        var v = E.answers[i] || "", ok;
        if (a.t) ok = a.t.some(function (x) { return normText(v).indexOf(normText(x)) >= 0; }) && normText(v) !== "";
        else { var n = num(v); ok = isFinite(n) && Math.abs(n - a.v) <= (a.tol != null ? a.tol : 0.01); }
        items.push({ auto: true, g: "Karta odpowiedzi", l: a.l, ok: ok, info: "Twoja odpowiedź: " + (v || "-") + " · poprawna: " + (a.t ? a.t[0] : fmtNum(a.v)) + (a.unit ? " " + a.unit : "") });
      });
      var zast = spec.zastap || [];
      (P.kryteria || []).forEach(function (g) {
        if (zast.indexOf(g.grupa) >= 0) return;
        g.pozycje.forEach(function (p) { items.push({ auto: false, g: g.grupa, l: p, ok: false }); });
      });
      (spec.manual || []).forEach(function (p) { items.push({ auto: false, g: "Do samooceny", l: p, ok: false }); });
      showGrade(ov, items);
    });
  }
  function showGrade(ov, items) {
    var F = window.ZDAM_FMT || esc;
    var autoN = items.filter(function (x) { return x.auto; }).length;
    var lastG = null;
    var html = '<h3>Ocena pracy</h3><div class="muted">Elementy sprawdzone automatycznie mają już wynik. ' +
      (autoN < items.length ? 'Pozostałe kryteria (wykonanie fizyczne, dokumenty opisowe) oceń uczciwie sam - zaznacz tylko to, co jest wykonane w pełni.' : '') + '</div><div class="chk">';
    items.forEach(function (x, i) {
      if (x.g !== lastG) { html += '<div class="g">' + esc(x.g) + '</div>'; lastG = x.g; }
      if (x.auto) html += '<div class="it ' + (x.ok ? "ok" : "bad") + '"><span>' + (x.ok ? "✓" : "✗") + '</span><span>' + F(x.l) + (x.info ? '<small>' + esc(x.info) + '</small>' : '') + '</span></div>';
      else html += '<label class="it"><input type="checkbox" data-m="' + i + '"><span>' + F(x.l) + '</span></label>';
    });
    html += '</div><div class="ovbtns"><button class="eb pri" id="gsave">Zapisz wynik</button><button class="eb" id="gback">Wróć do pracy</button></div>';
    ov.querySelector(".ovb").innerHTML = html;
    ov.querySelectorAll("[data-m]").forEach(function (cb) { cb.onchange = function () { items[cb.dataset.m].ok = cb.checked; }; });
    ov.querySelector("#gback").onclick = function () { ov.remove(); };
    ov.querySelector("#gsave").onclick = function () {
      var ok = items.filter(function (x) { return x.ok; }).length;
      var res = { ok: ok, total: items.length, pct: Math.round(ok / items.length * 100), todo: items.filter(function (x) { return !x.ok; }).map(function (x) { return x.l + " (" + x.g + ")"; }) };
      saveDraft(E); close(); E.onDone(res);
    };
  }

  /* =====================================================================
     APLIKACJA: EDYTOR KODU
     ===================================================================== */
  function editor(box, text, onChange) {
    box.innerHTML = '<div class="ed"><div class="gut"></div><textarea spellcheck="false" autocapitalize="off" autocomplete="off"></textarea></div>';
    var ta = box.querySelector("textarea"), gut = box.querySelector(".gut");
    ta.value = text;
    function lines() { var n = ta.value.split("\n").length, s = ""; for (var i = 1; i <= n; i++) s += i + "\n"; gut.textContent = s; }
    lines();
    ta.addEventListener("input", function () { lines(); onChange(ta.value); });
    ta.addEventListener("scroll", function () { gut.scrollTop = ta.scrollTop; });
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Tab") { e.preventDefault(); var s = ta.selectionStart; ta.setRangeText("  ", s, ta.selectionEnd, "end"); lines(); onChange(ta.value); }
    });
    return ta;
  }
  ENV.editor = editor;

  function buildPreview(files, name) {
    var src = files[name] || "";
    src = src.replace(/<link[^>]*href=["']([^"']+\.css)["'][^>]*>/gi, function (m, f) { return files[f] != null ? "<style>\n" + files[f] + "\n</style>" : m; });
    src = src.replace(/<script([^>]*)src=["']([^"']+\.js)["'][^>]*>\s*<\/script>/gi, function (m, a, f) { return files[f] != null ? "<script>\n" + files[f] + "\n<\/script>" : m; });
    src = src.replace(/<\?php[\s\S]*?(\?>|$)/g, '<div style="border:2px dashed #999;padding:8px;margin:6px 0;font:13px monospace;color:#555;background:#f4f4f4">[ tu pojawi się wynik skryptu PHP - PHP działa na serwerze, w tym środowisku sprawdzamy jego kod ]</div>');
    return src;
  }
  ENV.buildPreview = buildPreview;

  ENV.apps.code = {
    title: "Edytor kodu", icon: "</>",
    mount: function (E, box) {
      var cur = E.codeFile || Object.keys(E.files)[0];
      box.innerHTML = '<div style="display:grid;grid-template-rows:auto minmax(0,1fr);height:100%"><div class="tool" id="cft"></div><div class="split"><div class="col" style="border-right:1px solid var(--line)"><div class="tool mono" id="cfn" style="font-size:.8rem"></div><div id="ced" style="min-height:0"></div></div><div class="col"><div class="tool"><span style="font-size:.82rem">Podgląd w przeglądarce</span><select class="tb" id="cpf"></select><button class="tb" id="cref">Odśwież</button></div><iframe class="pv" sandbox="allow-scripts allow-forms" title="Podgląd strony"></iframe></div></div></div>';
      var ft = box.querySelector("#cft"), fr = box.querySelector("iframe"), sel = box.querySelector("#cpf");
      function tabs() {
        ft.innerHTML = Object.keys(E.files).map(function (f) { return '<button class="tb ' + (f === cur ? "on" : "") + '" data-f="' + esc(f) + '">' + esc(f) + '</button>'; }).join("") + '<button class="tb" id="cnew">+ Nowy plik</button><span id="cnewbox"></span>';
        ft.querySelectorAll("[data-f]").forEach(function (b) { b.onclick = function () { cur = b.dataset.f; E.codeFile = cur; tabs(); open(); }; });
        ft.querySelector("#cnew").onclick = function () {
          var nb = ft.querySelector("#cnewbox");
          nb.innerHTML = '<input class="tb" id="cnn" placeholder="nazwa.html" style="width:130px"> <button class="tb go" id="cnok">Utwórz</button>';
          var inp = nb.querySelector("#cnn"); inp.focus();
          nb.querySelector("#cnok").onclick = function () { var n = inp.value.trim(); if (!n || E.files[n] != null) return; E.files[n] = ""; cur = n; tabs(); open(); };
        };
        var htmls = Object.keys(E.files).filter(function (f) { return /\.(html?|php)$/i.test(f); });
        sel.innerHTML = htmls.map(function (f) { return '<option>' + esc(f) + '</option>'; }).join("");
        if (E.pvFile && htmls.indexOf(E.pvFile) >= 0) sel.value = E.pvFile;
      }
      var timer = null;
      function refresh() { if (!sel.value) { fr.srcdoc = '<p style="font:14px sans-serif;color:#666;padding:20px">Brak pliku HTML do podglądu.</p>'; return; } E.pvFile = sel.value; fr.srcdoc = buildPreview(E.files, sel.value); }
      function open() {
        box.querySelector("#cfn").textContent = cur + (/\.txt$/.test(cur) ? " - plik tekstowy" : "");
        editor(box.querySelector("#ced"), E.files[cur], function (v) { E.files[cur] = v; clearTimeout(timer); timer = setTimeout(refresh, 600); });
      }
      sel.onchange = refresh; box.querySelector("#cref").onclick = refresh;
      tabs(); open(); refresh();
    }
  };

  /* =====================================================================
     APLIKACJA: BAZA DANYCH (SQL)
     ===================================================================== */
  var dbSeq = 0;
  function newDB(initSql) {
    var db = new window.alasql.Database("zdam" + (++dbSeq) + "_" + Date.now());
    db.users = {}; db.grants = [];
    (initSql || []).forEach(function (s) { db.exec(s); });
    return db;
  }
  function prepSql(s) {
    return s.replace(/^\s*ALTER\s+TABLE\s+(\S+)\s+ADD\s+(?!COLUMN)/i, "ALTER TABLE $1 ADD COLUMN ")
      .replace(/\bENGINE\s*=\s*\w+/gi, "").replace(/\bDEFAULT\s+CHARSET\s*=\s*\w+/gi, "")
      .replace(/\s+UNSIGNED\b/gi, "");
  }
  // obsługa poleceń, których silnik nie zna (użytkownicy i uprawnienia MySQL)
  function execOne(db, s) {
    var t = s.trim(); if (!t) return undefined;
    var m;
    if ((m = t.match(/^CREATE\s+USER\s+'?([\w.-]+)'?\s*@\s*'?([\w.%-]+)'?(\s+IDENTIFIED\s+BY\s+'([^']*)')?/i))) { db.users[m[1] + "@" + m[2]] = { pass: m[4] || "" }; return "Utworzono użytkownika " + m[1] + "@" + m[2]; }
    if ((m = t.match(/^GRANT\s+(.+?)\s+ON\s+(\S+)\s+TO\s+'?([\w.-]+)'?\s*@\s*'?([\w.%-]+)'?/i))) {
      var u = m[3] + "@" + m[4]; if (!db.users[u]) throw new Error("Użytkownik " + u + " nie istnieje");
      m[1].split(",").forEach(function (p) { db.grants.push({ user: u, priv: p.trim().toUpperCase(), on: m[2].toLowerCase() }); });
      return "Nadano uprawnienia";
    }
    if ((m = t.match(/^REVOKE\s+(.+?)\s+ON\s+(\S+)\s+FROM\s+'?([\w.-]+)'?\s*@\s*'?([\w.%-]+)'?/i))) {
      var u2 = m[3] + "@" + m[4], pr = m[1].split(",").map(function (p) { return p.trim().toUpperCase(); });
      db.grants = db.grants.filter(function (g) { return !(g.user === u2 && pr.indexOf(g.priv) >= 0 && g.on === m[2].toLowerCase()); });
      return "Odebrano uprawnienia";
    }
    if (/^(USE|SET|START\s+TRANSACTION|COMMIT|ROLLBACK)\b/i.test(t)) return "OK";
    if ((m = t.match(/^(DESC|DESCRIBE)\s+`?(\w+)`?/i))) {
      var tb = db.tables[m[2]]; if (!tb) throw new Error("Tabela " + m[2] + " nie istnieje");
      return tb.columns.map(function (c) { return { Field: c.columnid, Type: (c.dbtypeid || "") + (c.dbsize ? "(" + c.dbsize + (c.dbprecision ? "," + c.dbprecision : "") + ")" : "") }; });
    }
    return db.exec(prepSql(t));
  }
  function splitSql(text) {
    var out = [], cur = "", q = null;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (!q && c === "-" && text[i + 1] === "-") { while (i < text.length && text[i] !== "\n") i++; cur += "\n"; continue; }
      if (!q && c === "#") { while (i < text.length && text[i] !== "\n") i++; cur += "\n"; continue; }
      if (!q && c === "/" && text[i + 1] === "*") { var e = text.indexOf("*/", i + 2); i = e < 0 ? text.length : e + 1; continue; }
      if (q) { cur += c; if (c === q && text[i - 1] !== "\\") q = null; continue; }
      if (c === "'" || c === '"' || c === "`") { q = c; cur += c; continue; }
      if (c === ";") { if (cur.trim()) out.push(cur.trim()); cur = ""; continue; }
      cur += c;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }
  ENV.sql = { newDB: newDB, execOne: execOne, splitSql: splitSql };
  function initDB() {
    E.db = newDB(E.spec.db);
    E.sqlLog.forEach(function (s) { try { execOne(E.db, s); } catch (e) {} });
  }
  function resTable(r) {
    if (!Array.isArray(r)) return '<div class="msg ok">' + esc(typeof r === "number" ? "Zapytanie wykonane. Liczba zmienionych wierszy: " + r : (r == null ? "Zapytanie wykonane." : r)) + '</div>';
    if (!r.length) return '<div class="msg ok">Zapytanie zwróciło pusty wynik (0 wierszy).</div>';
    var cols = Object.keys(r[0]);
    return '<div class="muted" style="padding:6px 10px;font-size:.8rem">Liczba wierszy: ' + r.length + '</div><div style="overflow:auto;padding:0 10px 10px"><table class="grid-res"><tr>' + cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join("") + '</tr>' +
      r.slice(0, 500).map(function (row) { return '<tr>' + cols.map(function (c) { var v = row[c]; return '<td>' + (v == null ? '<i class="muted">NULL</i>' : esc(typeof v === "number" ? Math.round(v * 1e6) / 1e6 : v)) + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>';
  }
  ENV.apps.sql = {
    title: "Baza danych (phpMyAdmin)", icon: "SQL",
    mount: function (E, box) {
      box.innerHTML = '<div class="sqlg"><div class="eside" id="qtabs"></div><div style="display:grid;grid-template-rows:auto auto minmax(0,1fr);min-height:0;min-width:0">' +
        '<div class="tool"><b style="font-size:.85rem">Baza: ' + esc(E.spec.dbName || "baza") + '</b><span style="flex:1"></span><button class="tb go" id="qrun">Wykonaj (Ctrl+Enter)</button><button class="tb" id="qsave">Dopisz do kwerendy.txt</button><button class="tb" id="qreset">Przywróć bazę</button></div>' +
        '<textarea id="qtxt" class="mono" spellcheck="false" style="height:130px;border:0;border-bottom:1px solid var(--line);padding:8px;font:13px var(--f-mono);resize:vertical;background:var(--card);color:var(--chrome-ink)" placeholder="Wpisz zapytanie SQL, np. SELECT * FROM tabela;"></textarea>' +
        '<div id="qres" style="overflow:auto;min-height:0"></div></div></div>';
      var ta = box.querySelector("#qtxt"), res = box.querySelector("#qres");
      ta.value = E.sqlDraft || "";
      ta.oninput = function () { E.sqlDraft = ta.value; };
      function tables() {
        var names = Object.keys(E.db.tables);
        box.querySelector("#qtabs").innerHTML = '<div class="h">Tabele</div>' + names.map(function (n) { return '<button data-t="' + esc(n) + '">' + esc(n) + '</button>'; }).join("") +
          (Object.keys(E.db.users).length ? '<div class="h">Użytkownicy</div>' + Object.keys(E.db.users).map(function (u) { return '<button disabled>' + esc(u) + '</button>'; }).join("") : "");
        box.querySelectorAll("[data-t]").forEach(function (b) {
          b.onclick = function () { var s = "SELECT * FROM " + b.dataset.t + ";"; res.innerHTML = '<div class="muted mono" style="padding:6px 10px;font-size:.8rem">' + esc(s) + '</div>' + resTable(E.db.exec("SELECT * FROM " + b.dataset.t)) + '<div class="muted mono" style="padding:6px 10px;font-size:.8rem">Struktura</div>' + resTable(execOne(E.db, "DESC " + b.dataset.t)); };
        });
      }
      function run() {
        var list = splitSql(ta.value), html = "";
        if (!list.length) return;
        list.forEach(function (s) {
          try {
            var r = execOne(E.db, s);
            if (!/^\s*(SELECT|SHOW|DESC|DESCRIBE)\b/i.test(s)) E.sqlLog.push(s);
            html += '<div class="muted mono" style="padding:6px 10px;font-size:.8rem">' + esc(s.length > 140 ? s.slice(0, 140) + "…" : s) + '</div>' + resTable(r);
          } catch (e) { html += '<div class="msg err">#BŁĄD w zapytaniu:\n' + esc(s) + '\n\n' + esc(e.message) + '</div>'; }
        });
        res.innerHTML = html; tables(); saveDraft(E);
      }
      box.querySelector("#qrun").onclick = run;
      ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run(); } });
      box.querySelector("#qsave").onclick = function () {
        var f = E.spec.kwerendyFile || "kwerendy.txt";
        if (E.files[f] == null) E.files[f] = "";
        var t = ta.value.trim(); if (!t) return;
        E.files[f] = (E.files[f].trim() ? E.files[f].replace(/\s*$/, "\n") : "") + t + (/;\s*$/.test(t) ? "" : ";") + "\n";
        res.insertAdjacentHTML("afterbegin", '<div class="msg ok">Dopisano do pliku ' + esc(f) + '. Plik możesz poprawić w Edytorze kodu.</div>');
      };
      box.querySelector("#qreset").onclick = function () { E.sqlLog = []; initDB(); tables(); res.innerHTML = '<div class="msg ok">Przywrócono bazę do stanu początkowego (import pliku .sql).</div>'; };
      tables();
      res.innerHTML = '<div class="msg ok">Baza zaimportowana. Kliknij nazwę tabeli, aby zobaczyć dane i strukturę.</div>';
    }
  };

  /* =====================================================================
     APLIKACJA: ARKUSZ KALKULACYJNY
     ===================================================================== */
  var COLS = 15, ROWS = 50;
  function colName(i) { return String.fromCharCode(65 + i); }
  function parseRef(r) { var m = /^\$?([A-Z]+)\$?(\d+)$/.exec(r.toUpperCase()); if (!m) return null; return { c: m[1].charCodeAt(0) - 65, r: +m[2] - 1 }; }
  function refName(c, r) { return colName(c) + (r + 1); }

  function tokenize(s) {
    var t = [], i = 0, m;
    while (i < s.length) {
      var c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      var rest = s.slice(i);
      if ((m = /^"([^"]*)"/.exec(rest))) { t.push({ k: "str", v: m[1] }); i += m[0].length; continue; }
      if ((m = /^(\$?[A-Za-z]{1,2}\$?\d+)(?::(\$?[A-Za-z]{1,2}\$?\d+))?/.exec(rest)) && !/[A-Za-z0-9.(]/.test(rest[m[0].length] || "")) {
        t.push(m[2] ? { k: "rng", a: m[1].toUpperCase(), b: m[2].toUpperCase() } : { k: "ref", v: m[1].toUpperCase() }); i += m[0].length; continue;
      }
      if ((m = /^\d+([.,]\d+)?/.exec(rest))) { t.push({ k: "num", v: parseFloat(m[0].replace(",", ".")) }); i += m[0].length; continue; }
      if ((m = /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż][A-Za-z0-9ĄĆĘŁŃÓŚŹŻąćęłńóśźż.]*/.exec(rest))) { t.push({ k: "id", v: m[0].toUpperCase() }); i += m[0].length; continue; }
      if ((m = /^(<=|>=|<>|[-+*/^&=<>();,%])/.exec(rest))) { t.push({ k: "op", v: m[0] }); i += m[0].length; continue; }
      throw new Error("#ARG!");
    }
    return t;
  }
  var FN = {
    SUM: function (a) { return flat(a).reduce(function (s, x) { return s + (typeof x === "number" ? x : 0); }, 0); },
    AVERAGE: function (a) { var n = flat(a).filter(function (x) { return typeof x === "number"; }); if (!n.length) throw new Error("#DZIEL/0!"); return n.reduce(function (s, x) { return s + x; }, 0) / n.length; },
    MIN: function (a) { var n = flat(a).filter(function (x) { return typeof x === "number"; }); return n.length ? Math.min.apply(null, n) : 0; },
    MAX: function (a) { var n = flat(a).filter(function (x) { return typeof x === "number"; }); return n.length ? Math.max.apply(null, n) : 0; },
    COUNT: function (a) { return flat(a).filter(function (x) { return typeof x === "number"; }).length; },
    ROUND: function (a) { var p = Math.pow(10, a[1] || 0); return Math.round((+a[0] + (a[0] >= 0 ? 1e-9 : -1e-9)) * p) / p; },
    ROUNDUP: function (a) { var p = Math.pow(10, a[1] || 0); return Math.ceil(+a[0] * p - 1e-9) / p; },
    ROUNDDOWN: function (a) { var p = Math.pow(10, a[1] || 0); return Math.floor(+a[0] * p + 1e-9) / p; },
    IF: function (a) { return a[0] ? (a.length > 1 ? a[1] : true) : (a.length > 2 ? a[2] : false); },
    SQRT: function (a) { return Math.sqrt(a[0]); }, POWER: function (a) { return Math.pow(a[0], a[1]); },
    ABS: function (a) { return Math.abs(a[0]); }, PI: function () { return Math.PI; },
    AND: function (a) { return flat(a).every(Boolean); }, OR: function (a) { return flat(a).some(Boolean); }
  };
  var ALIAS = { "SUMA": "SUM", "ŚREDNIA": "AVERAGE", "SREDNIA": "AVERAGE", "ZAOKR": "ROUND", "ZAOKR.GÓRA": "ROUNDUP", "ZAOKR.GORA": "ROUNDUP", "ZAOKR.DÓŁ": "ROUNDDOWN", "ZAOKR.DOL": "ROUNDDOWN", "JEŻELI": "IF", "JEZELI": "IF", "ILE.LICZB": "COUNT", "PIERWIASTEK": "SQRT", "POTĘGA": "POWER", "POTEGA": "POWER", "ORAZ": "AND", "LUB": "OR" };
  function flat(a) { var o = []; a.forEach(function (x) { if (Array.isArray(x)) o = o.concat(flat(x)); else o.push(x); }); return o; }

  function Sheet(cells) { this.cells = cells; this.cache = {}; this.stack = {}; }
  Sheet.prototype.raw = function (ref) { return this.cells[ref] == null ? "" : this.cells[ref]; };
  Sheet.prototype.val = function (ref) {
    if (ref in this.cache) return this.cache[ref];
    if (this.stack[ref]) throw new Error("#ODWOŁANIE CYKLICZNE");
    this.stack[ref] = true;
    var v;
    try { v = this.calc(this.raw(ref)); } catch (e) { v = { err: e.message.charAt(0) === "#" ? e.message : "#ARG!" }; }
    delete this.stack[ref];
    this.cache[ref] = v; return v;
  };
  Sheet.prototype.calc = function (raw) {
    raw = String(raw);
    if (raw === "") return "";
    if (raw.charAt(0) !== "=") { var n = num(raw); return isFinite(n) && /^[\s\d,.\-+%zł€]*$/i.test(raw) ? (/%\s*$/.test(raw) ? n / 100 : n) : raw; }
    var toks = tokenize(raw.slice(1)), p = 0, self = this;
    function peek() { return toks[p]; } function eat(v) { var t = toks[p]; if (!t || (v && t.v !== v)) throw new Error("#ARG!"); p++; return t; }
    function cell(ref) { var v = self.val(ref.replace(/\$/g, "")); if (v && v.err) throw new Error(v.err); return v === "" ? 0 : v; }
    function range(a, b) {
      var A = parseRef(a), B = parseRef(b), out = [];
      for (var r = Math.min(A.r, B.r); r <= Math.max(A.r, B.r); r++) for (var c = Math.min(A.c, B.c); c <= Math.max(A.c, B.c); c++) { var v = self.val(refName(c, r)); if (v && v.err) throw new Error(v.err); out.push(v); }
      return out;
    }
    function N(x) { if (typeof x === "number") return x; if (typeof x === "boolean") return x ? 1 : 0; if (x === "") return 0; var n = num(x); if (!isFinite(n)) throw new Error("#ARG!"); return n; }
    function cmp() {
      var a = cat();
      while (peek() && /^(=|<>|<|>|<=|>=)$/.test(peek().v) && peek().k === "op") {
        var o = eat().v, b = cat();
        a = o === "=" ? a == b : o === "<>" ? a != b : o === "<" ? a < b : o === ">" ? a > b : o === "<=" ? a <= b : a >= b;
      }
      return a;
    }
    function cat() { var a = add(); while (peek() && peek().v === "&") { eat(); a = String(a) + String(add()); } return a; }
    function add() { var a = mul(); while (peek() && (peek().v === "+" || peek().v === "-") && peek().k === "op") { var o = eat().v, b = mul(); a = o === "+" ? N(a) + N(b) : N(a) - N(b); } return a; }
    function mul() { var a = pw(); while (peek() && (peek().v === "*" || peek().v === "/") && peek().k === "op") { var o = eat().v, b = pw(); if (o === "/" && N(b) === 0) throw new Error("#DZIEL/0!"); a = o === "*" ? N(a) * N(b) : N(a) / N(b); } return a; }
    function pw() { var a = un(); while (peek() && peek().v === "^") { eat(); a = Math.pow(N(a), N(un())); } return a; }
    function un() { if (peek() && peek().v === "-" && peek().k === "op") { eat(); return -N(un()); } if (peek() && peek().v === "+" && peek().k === "op") { eat(); return N(un()); } var v = prim(); if (peek() && peek().v === "%") { eat(); v = N(v) / 100; } return v; }
    function prim() {
      var t = eat();
      if (t.k === "num") return t.v; if (t.k === "str") return t.v;
      if (t.k === "ref") return cell(t.v);
      if (t.k === "rng") return range(t.a, t.b);
      if (t.k === "op" && t.v === "(") { var v = cmp(); eat(")"); return v; }
      if (t.k === "id") {
        if (t.v === "PRAWDA" || t.v === "TRUE") return true; if (t.v === "FAŁSZ" || t.v === "FALSE") return false;
        var name = ALIAS[t.v] || t.v, f = FN[name]; if (!f) throw new Error("#NAZWA?");
        eat("("); var args = [];
        if (peek() && peek().v !== ")") { args.push(cmp()); while (peek() && (peek().v === ";" || peek().v === ",")) { eat(); args.push(cmp()); } }
        eat(")");
        if (["SUM", "AVERAGE", "MIN", "MAX", "COUNT", "AND", "OR", "IF"].indexOf(name) < 0) args = args.map(N);
        return f(args);
      }
      throw new Error("#ARG!");
    }
    var r = cmp(); if (p < toks.length) throw new Error("#ARG!");
    if (Array.isArray(r)) throw new Error("#ARG!");
    return r;
  };
  function shiftFormula(raw, dr, dc) {
    if (String(raw).charAt(0) !== "=") return raw;
    return raw.replace(/("[^"]*")|(\$?)([A-Z]{1,2})(\$?)(\d+)(?![\d(A-Za-z])/g, function (m, str, ac, col, ar, row) {
      if (str) return str;
      var c = ac ? col : String.fromCharCode(col.charCodeAt(0) + dc), r = ar ? row : String(+row + dr);
      if (c < "A" || +r < 1) return "#ADR!";
      return ac + c + ar + r;
    });
  }
  ENV.sheetEval = function (cells, ref) { var s = new Sheet(cells); return s.val(ref); };
  ENV.Sheet = Sheet;

  ENV.apps.sheet = {
    title: "Arkusz kalkulacyjny", icon: "XLS",
    mount: function (E, box) {
      var S = E.sheet, sel = E.sheetSel || { c: 0, r: 0 }, anchor = null;
      box.innerHTML = '<div style="display:grid;grid-template-rows:auto auto minmax(0,1fr);height:100%"><div class="tool">' +
        '<button class="tb" id="sb" title="Pogrubienie"><b>B</b></button><button class="tb" id="s2" title="Format liczbowy 0,00">0,00</button><button class="tb" id="sfill" title="Kopiuje formułę z pierwszej komórki zaznaczenia w dół (Shift+klik zaznacza zakres)">Wypełnij w dół</button><button class="tb" id="sdel">Wyczyść</button>' +
        '<span class="muted" style="font-size:.78rem">Funkcje: SUMA, ŚREDNIA, MIN, MAX, ZAOKR, ZAOKR.GÓRA, ZAOKR.DÓŁ, JEŻELI, ILE.LICZB, PIERWIASTEK, POTĘGA · argumenty oddzielaj średnikiem · $A$1 - adres bezwzględny</span></div>' +
        '<div class="fbar"><input id="sref" readonly><input id="sf" placeholder="Wpisz wartość lub formułę, np. =ZAOKR(B2*1,23;2)"></div><div id="sg" style="overflow:auto;min-height:0" tabindex="0"></div></div>';
      var grid = box.querySelector("#sg"), fb = box.querySelector("#sf"), rb = box.querySelector("#sref");
      var html = '<table class="sh"><colgroup><col style="width:38px">' + Array(COLS + 1).join('<col style="width:96px">') + '</colgroup><tr><th class="rh"></th>';
      for (var c = 0; c < COLS; c++) html += '<th>' + colName(c) + '</th>';
      html += '</tr>';
      for (var r = 0; r < ROWS; r++) { html += '<tr><th class="rh">' + (r + 1) + '</th>'; for (c = 0; c < COLS; c++) html += '<td data-c="' + c + '" data-r="' + r + '"></td>'; html += '</tr>'; }
      grid.innerHTML = html + '</table>';
      var tds = {}; grid.querySelectorAll("td").forEach(function (td) { tds[refName(+td.dataset.c, +td.dataset.r)] = td; });
      function paint() {
        var sh = new Sheet(S.cells);
        Object.keys(tds).forEach(function (ref) {
          var td = tds[ref], raw = S.cells[ref];
          if (raw == null || raw === "") { td.textContent = ""; td.className = ""; return; }
          var v = sh.val(ref), f = S.fmt[ref] || {}, cls = [];
          if (v && v.err) { td.textContent = v.err; cls.push("er"); }
          else if (typeof v === "number") { td.textContent = fmtNum(v, f.d2 ? 2 : null); cls.push("num"); }
          else if (typeof v === "boolean") { td.textContent = v ? "PRAWDA" : "FAŁSZ"; }
          else td.textContent = v;
          if (f.b) cls.push("b");
          td.className = cls.join(" ");
        });
        hl();
      }
      function rng() { if (!anchor) return null; return { c1: Math.min(anchor.c, sel.c), c2: Math.max(anchor.c, sel.c), r1: Math.min(anchor.r, sel.r), r2: Math.max(anchor.r, sel.r) }; }
      function hl() {
        var R = rng();
        Object.keys(tds).forEach(function (ref) {
          var td = tds[ref], c = +td.dataset.c, r = +td.dataset.r;
          td.classList.toggle("sel", c === sel.c && r === sel.r);
          td.classList.toggle("rng", !!R && c >= R.c1 && c <= R.c2 && r >= R.r1 && r <= R.r2);
        });
        rb.value = refName(sel.c, sel.r); fb.value = S.cells[refName(sel.c, sel.r)] || "";
        E.sheetSel = sel;
      }
      function commit() { var ref = refName(sel.c, sel.r), v = fb.value; if (v === "") delete S.cells[ref]; else S.cells[ref] = v; paint(); }
      function move(dc, dr) { sel = { c: Math.max(0, Math.min(COLS - 1, sel.c + dc)), r: Math.max(0, Math.min(ROWS - 1, sel.r + dr)) }; anchor = null; hl(); var td = tds[refName(sel.c, sel.r)]; td.scrollIntoView({ block: "nearest", inline: "nearest" }); }
      grid.addEventListener("mousedown", function (e) {
        var td = e.target.closest("td"); if (!td) return;
        if (document.activeElement === fb && fb.value.charAt(0) === "=" && fb.dataset.editing === "1") { e.preventDefault(); var pos = fb.selectionStart; fb.setRangeText(refName(+td.dataset.c, +td.dataset.r), pos, fb.selectionEnd, "end"); fb.focus(); return; }
        if (e.shiftKey) { anchor = anchor || { c: sel.c, r: sel.r }; sel = { c: +td.dataset.c, r: +td.dataset.r }; hl(); return; }
        sel = { c: +td.dataset.c, r: +td.dataset.r }; anchor = null; hl(); grid.focus();
      });
      grid.addEventListener("dblclick", function () { fb.focus(); fb.dataset.editing = "1"; });
      grid.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); move(0, 1); } else if (e.key === "ArrowUp") { e.preventDefault(); move(0, -1); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); move(-1, 0); } else if (e.key === "ArrowRight" || e.key === "Tab") { e.preventDefault(); move(1, 0); }
        else if (e.key === "Enter" || e.key === "F2") { e.preventDefault(); fb.focus(); fb.dataset.editing = "1"; }
        else if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); fb.value = ""; commit(); }
        else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) { e.preventDefault(); fb.value = e.key; fb.focus(); fb.dataset.editing = "1"; }
      });
      fb.addEventListener("focus", function () { fb.dataset.editing = "1"; });
      fb.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); commit(); fb.dataset.editing = "0"; grid.focus(); move(0, 1); }
        else if (e.key === "Tab") { e.preventDefault(); commit(); fb.dataset.editing = "0"; grid.focus(); move(1, 0); }
        else if (e.key === "Escape") { fb.dataset.editing = "0"; hl(); grid.focus(); }
      });
      fb.addEventListener("blur", function () { if (fb.dataset.editing === "1") { commit(); fb.dataset.editing = "0"; } });
      box.querySelector("#sb").onclick = function () { eachSel(function (ref) { var f = S.fmt[ref] = S.fmt[ref] || {}; f.b = !f.b; }); paint(); };
      box.querySelector("#s2").onclick = function () { eachSel(function (ref) { var f = S.fmt[ref] = S.fmt[ref] || {}; f.d2 = !f.d2; }); paint(); };
      box.querySelector("#sdel").onclick = function () { eachSel(function (ref) { delete S.cells[ref]; }); paint(); };
      box.querySelector("#sfill").onclick = function () {
        var R = rng(); if (!R || R.r2 === R.r1) { flash("Zaznacz zakres: kliknij komórkę z formułą, potem Shift+klik na ostatnią komórkę w dół."); return; }
        for (var c = R.c1; c <= R.c2; c++) { var src = S.cells[refName(c, R.r1)]; if (src == null) continue; for (var r = R.r1 + 1; r <= R.r2; r++) S.cells[refName(c, r)] = shiftFormula(src, r - R.r1, 0); }
        paint();
      };
      function eachSel(fn) { var R = rng() || { c1: sel.c, c2: sel.c, r1: sel.r, r2: sel.r }; for (var c = R.c1; c <= R.c2; c++) for (var r = R.r1; r <= R.r2; r++) fn(refName(c, r)); }
      function flash(t) { var m = h('<div class="msg ok" style="position:absolute;right:10px;top:50px;z-index:3;max-width:320px">' + esc(t) + '</div>'); box.appendChild(m); setTimeout(function () { m.remove(); }, 3500); }
      paint(); grid.focus();
    }
  };

  /* =====================================================================
     APLIKACJA: EDYTOR TEKSTU
     ===================================================================== */
  var TPL = {
    "Pismo": '<p style="text-align:left">[Pieczęć / nazwa i adres nadawcy]</p><p style="text-align:right">[Miejscowość], [data]</p><p>Znak sprawy: [...]</p><p style="margin-left:55%">[Adresat]<br>[ulica]<br>[kod, miejscowość]</p><p><b>Dotyczy: [...]</b></p><p>[Treść pisma]</p><p style="margin-left:55%">[podpis]</p><p>Załączniki:<br>1. [...]</p>',
    "Protokół": '<h2 style="text-align:center">PROTOKÓŁ [nazwa]</h2><p>Sporządzony dnia [...] w [...]</p><p>Obecni: [...]</p><table><tr><th>Lp.</th><th>Opis</th><th>Wynik / ustalenia</th></tr><tr><td>1</td><td></td><td></td></tr><tr><td>2</td><td></td><td></td></tr></table><p>Wnioski: [...]</p><p>Podpisy: [...]</p>',
    "Karta pracy": '<h2 style="text-align:center">KARTA [technologiczna / zabiegu / zlecenia]</h2><table><tr><th>Lp.</th><th>Czynność / etap</th><th>Narzędzia, materiały</th><th>Czas, parametry</th></tr><tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr></table>',
    "Pusty": "<p></p>"
  };
  ENV.apps.doc = {
    title: "Edytor tekstu", icon: "DOC",
    mount: function (E, box) {
      box.innerHTML = '<div style="display:grid;grid-template-rows:auto minmax(0,1fr);height:100%"><div class="tool">' +
        '<select class="tb" id="dfs"><option value="">Styl</option><option value="p">Akapit</option><option value="h2">Nagłówek 1</option><option value="h3">Nagłówek 2</option></select>' +
        '<button class="tb" data-c="bold"><b>B</b></button><button class="tb" data-c="italic"><i>I</i></button><button class="tb" data-c="underline"><u>U</u></button>' +
        '<button class="tb" data-c="justifyLeft">Do lewej</button><button class="tb" data-c="justifyCenter">Środek</button><button class="tb" data-c="justifyRight">Do prawej</button><button class="tb" data-c="justifyFull">Wyjustuj</button>' +
        '<button class="tb" data-c="insertUnorderedList">• Lista</button><button class="tb" data-c="insertOrderedList">1. Lista</button><button class="tb" id="dtab">Wstaw tabelę</button>' +
        '<select class="tb" id="dtpl"><option value="">Szablon…</option>' + Object.keys(TPL).map(function (k) { return '<option>' + k + '</option>'; }).join("") + '</select>' +
        '<span class="muted" id="dcnt" style="font-size:.78rem"></span></div><div class="docwrap" style="overflow:auto;min-height:0"><div class="page" contenteditable="true" spellcheck="true" lang="pl"></div></div></div>';
      var pg = box.querySelector(".page"), cnt = box.querySelector("#dcnt");
      pg.innerHTML = E.doc || TPL[E.spec.docTpl || "Pusty"];
      function upd() { E.doc = pg.innerHTML; var w = (pg.innerText.match(/\S+/g) || []).length; cnt.textContent = "Słowa: " + w; }
      pg.addEventListener("input", upd); upd();
      box.querySelectorAll("[data-c]").forEach(function (b) { b.onmousedown = function (e) { e.preventDefault(); document.execCommand(b.dataset.c, false, null); upd(); }; });
      box.querySelector("#dfs").onchange = function (e) { if (e.target.value) { pg.focus(); document.execCommand("formatBlock", false, e.target.value); e.target.value = ""; upd(); } };
      box.querySelector("#dtab").onmousedown = function (e) {
        e.preventDefault(); pg.focus();
        document.execCommand("insertHTML", false, '<table><tr><th>Lp.</th><th>Kolumna</th><th>Kolumna</th><th>Kolumna</th></tr><tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr></table><p></p>'); upd();
      };
      box.querySelector("#dtpl").onchange = function (e) { var k = e.target.value; e.target.value = ""; if (!k) return; pg.focus(); document.execCommand("insertHTML", false, TPL[k]); upd(); };
    }
  };
  ENV.docText = function (E) { var d = document.createElement("div"); d.innerHTML = E.doc || ""; return d.innerText || d.textContent || ""; };

  /* =====================================================================
     APLIKACJA: PROGRAMOWANIE (JavaScript)
     ===================================================================== */
  function runWorker(code, input, extra, ms) {
    return new Promise(function (resolve) {
      var pre = 'var __o=[];function __f(x){try{return typeof x==="string"?x:(x instanceof Error?String(x):JSON.stringify(x))}catch(e){return String(x)}}' +
        'var console={log:function(){postMessage({t:"log",m:Array.prototype.map.call(arguments,__f).join(" ")})},error:function(){postMessage({t:"err",m:Array.prototype.map.call(arguments,__f).join(" ")})}};console.warn=console.log;console.info=console.log;' +
        'var __in=' + JSON.stringify(String(input || "").split("\n")) + ';function prompt(){return __in.length?__in.shift():null}var wczytaj=prompt;function alert(m){console.log(m)}\n';
      var body = pre + "try{\n" + code + "\n;" + (extra || "") + "\npostMessage({t:'done'})}catch(e){postMessage({t:'exc',m:String(e&&e.stack?e.message:e)})}";
      var url = URL.createObjectURL(new Blob([body], { type: "text/javascript" }));
      var w = new Worker(url), out = [], done = false;
      function fin(st) { if (done) return; done = true; clearTimeout(to); w.terminate(); URL.revokeObjectURL(url); resolve({ status: st, out: out }); }
      var to = setTimeout(function () { out.push({ t: "err", m: "Przekroczono czas wykonania (" + (ms / 1000) + " s) - sprawdź, czy pętla się kończy." }); fin("timeout"); }, ms || 4000);
      w.onmessage = function (e) { var d = e.data; if (d.t === "done") fin("ok"); else if (d.t === "exc") { out.push({ t: "err", m: "Błąd: " + d.m }); fin("exc"); } else out.push(d); };
      w.onerror = function (e) { e.preventDefault(); out.push({ t: "err", m: "Błąd składni: " + e.message + (e.lineno ? " (linia " + (e.lineno - 2) + ")" : "") }); fin("syntax"); };
    });
  }
  ENV.runWorker = runWorker;
  ENV.apps.js = {
    title: "Programowanie (JavaScript)", icon: "JS",
    mount: function (E, box) {
      box.innerHTML = '<div class="split"><div class="col" style="border-right:1px solid var(--line)"><div class="tool"><button class="tb go" id="jrun">▶ Uruchom</button><span class="muted" style="font-size:.78rem">Wyjście: <code>console.log()</code> · dane wejściowe: <code>prompt()</code></span></div><div id="jed" style="min-height:0"></div></div>' +
        '<div class="col" style="grid-template-rows:auto auto minmax(0,1fr)"><div class="tool"><span style="font-size:.82rem">Dane wejściowe (jedna wartość w wierszu)</span></div><textarea id="jin" class="mono" style="height:70px;border:0;border-bottom:1px solid var(--line);padding:6px 8px;font:13px var(--f-mono);background:var(--card);color:var(--chrome-ink);resize:vertical"></textarea><div class="con" id="jout">Konsola - kliknij „Uruchom”.</div></div></div>';
      editor(box.querySelector("#jed"), E.js.code, function (v) { E.js.code = v; });
      var jin = box.querySelector("#jin"), out = box.querySelector("#jout");
      jin.value = E.js.input; jin.oninput = function () { E.js.input = jin.value; };
      box.querySelector("#jrun").onclick = function () {
        out.innerHTML = '<span class="i">Uruchamianie…</span>';
        runWorker(E.js.code, E.js.input, "", 4000).then(function (r) {
          out.innerHTML = r.out.map(function (o) { return '<div class="' + (o.t === "err" ? "e" : "") + '">' + esc(o.m) + '</div>'; }).join("") + '<div class="i">- zakończono (' + (r.status === "ok" ? "bez błędów" : r.status) + ') -</div>';
        });
      };
    }
  };

  /* =====================================================================
     APLIKACJA: ZACISKANIE KABLA / ZAKAŃCZANIE W GNIEŹDZIE
     ===================================================================== */
  var WIRES = [
    { k: "bp", n: "biało-pomarańczowy", bg: "repeating-linear-gradient(90deg,#fff 0 8px,#f08a24 8px 14px)" },
    { k: "p", n: "pomarańczowy", bg: "#f08a24" },
    { k: "bz", n: "biało-zielony", bg: "repeating-linear-gradient(90deg,#fff 0 8px,#2ea44f 8px 14px)" },
    { k: "n", n: "niebieski", bg: "#2f6fe0" },
    { k: "bn", n: "biało-niebieski", bg: "repeating-linear-gradient(90deg,#fff 0 8px,#2f6fe0 8px 14px)" },
    { k: "z", n: "zielony", bg: "#2ea44f" },
    { k: "bb", n: "biało-brązowy", bg: "repeating-linear-gradient(90deg,#fff 0 8px,#8a5a2b 8px 14px)" },
    { k: "b", n: "brązowy", bg: "#8a5a2b" }
  ];
  var T568B = ["bp", "p", "bz", "n", "bn", "z", "bb", "b"], T568A = ["bz", "z", "bp", "n", "bn", "p", "bb", "b"];
  ENV.T568B = T568B; ENV.T568A = T568A;
  function wireBy(k) { for (var i = 0; i < WIRES.length; i++) if (WIRES[i].k === k) return WIRES[i]; return null; }
  ENV.apps.crimp = {
    title: "Okablowanie (RJ-45)", icon: "RJ",
    mount: function (E, box) {
      var C = E.crimp, side = "a", labels = E.spec.crimpLabels || ["Koniec A (wtyk RJ-45)", "Koniec B (wtyk RJ-45)"];
      function slotHTML(s) {
        var arr = C[s] || [];
        return '<div class="plug">' + [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) {
          var w = wireBy(arr[i]);
          return '<div class="slot ' + (side === s && firstEmpty(arr) === i ? "cur" : "") + '" data-s="' + s + '" data-i="' + i + '" style="' + (w ? "background:" + w.bg + ";border-style:solid" : "") + '" title="' + (w ? w.n : "pusty") + '"><span>' + (i + 1) + '</span></div>';
        }).join("") + '</div>';
      }
      function firstEmpty(a) { for (var i = 0; i < 8; i++) if (!a[i]) return i; return -1; }
      function render(test) {
        box.innerHTML = '<div class="crimp"><div class="muted" style="font-size:.85rem">Kliknij koniec kabla, a potem kolejne żyły w kolejności od pinu 1. Kliknięcie zajętego pinu usuwa żyłę. Widok wtyku od strony styków, zatrzask na dole.</div>' +
          '<div style="display:flex;gap:28px;flex-wrap:wrap">' + ["a", "b"].map(function (s, j) {
            return '<div style="display:grid;gap:10px"><button class="tb ' + (side === s ? "on" : "") + '" data-side="' + s + '">' + esc(labels[j]) + '</button>' + slotHTML(s) + '</div>';
          }).join("") + '</div><div style="margin-top:14px" class="wires">' + WIRES.map(function (w) { return '<div class="wire" data-w="' + w.k + '" style="background:' + w.bg + '" title="' + w.n + '">' + w.n.replace("biało-", "b-") + '</div>'; }).join("") + '</div>' +
          '<div class="tool" style="border:0;padding:0"><button class="tb go" id="ctest">Zaciśnij i zbadaj testerem</button><button class="tb" id="cclr">Wyczyść oba końce</button></div><div id="cres">' + (test || "") + '</div></div>';
        box.querySelectorAll("[data-side]").forEach(function (b) { b.onclick = function () { side = b.dataset.side; render(); }; });
        box.querySelectorAll(".slot").forEach(function (sl) { sl.onclick = function () { var s = sl.dataset.s, i = +sl.dataset.i; side = s; C[s] = C[s] || []; if (C[s][i]) C[s][i] = null; render(); }; });
        box.querySelectorAll(".wire").forEach(function (w) { w.onclick = function () { var a = C[side] = C[side] || [], i = firstEmpty(a); if (i < 0) return; a[i] = w.dataset.w; render(); }; });
        box.querySelector("#cclr").onclick = function () { C.a = []; C.b = []; render(); };
        box.querySelector("#ctest").onclick = function () { render(tester()); };
      }
      function tester() {
        var a = C.a || [], b = C.b || [];
        if (firstEmpty(a) >= 0 || firstEmpty(b) >= 0) return '<div class="msg err">Oba końce muszą mieć wszystkie 8 żył.</div>';
        var row = "", ok = true;
        for (var i = 0; i < 8; i++) { var j = b.indexOf(a[i]); row += '<div class="' + (j === i ? "ok" : "bad") + '">' + (i + 1) + '→' + (j + 1) + '</div>'; if (j !== i) ok = false; }
        var eq = function (x, y) { return x.join() === y.join(); };
        var verdict = eq(a, T568B) && eq(b, T568B) ? "Kabel prosty, sekwencja T568B na obu końcach." :
          eq(a, T568A) && eq(b, T568A) ? "Kabel prosty w sekwencji T568A." :
          (eq(a, T568A) && eq(b, T568B)) || (eq(a, T568B) && eq(b, T568A)) ? "Kabel skrosowany (T568A ↔ T568B)." :
          ok ? "Ciągłość jest poprawna, ale sekwencja kolorów nie odpowiada normie - pary są rozdzielone (split pair). Kabel nie przejdzie pomiaru przesłuchu." : "Błędne połączenie - żyły są zamienione.";
        return '<div class="muted" style="font-size:.85rem;margin-bottom:6px">Tester: pin końca A → pin końca B</div><div class="tester">' + row + '</div><div class="msg ' + (/prosty, sekwencja T568B|prosty w sekwencji|skrosowany/.test(verdict) ? "ok" : "err") + '" style="margin:10px 0 0">' + verdict + '</div>';
      }
      render();
    }
  };

  /* ---------- funkcje pomocnicze dla sprawdzarek ---------- */
  // porównanie wyniku zapytania użytkownika z wzorcem
  ENV.check = {
    userQueries: function (E) { return splitSql(E.files[E.spec.kwerendyFile || "kwerendy.txt"] || ""); },
    rowsEqual: function (a, b, ordered) {
      if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
      function key(r) { return Object.keys(r).map(function (k) { var v = r[k]; return typeof v === "number" ? (Math.round(v * 100) / 100).toString() : String(v); }).join("|"); }
      var A = a.map(key), B = b.map(key);
      if (!ordered) { A.sort(); B.sort(); }
      return A.join("\n") === B.join("\n");
    },
    select: function (E, idx, ref, ordered) {
      var q = ENV.check.userQueries(E)[idx];
      if (!q) return { ok: false, info: "Brak zapytania nr " + (idx + 1) + " w pliku kwerendy.txt" };
      var db1 = newDB(E.spec.db), db2 = newDB(E.spec.db), r1, r2;
      try { r1 = execOne(db1, q); } catch (e) { return { ok: false, info: "Zapytanie " + (idx + 1) + " zwraca błąd: " + e.message }; }
      r2 = db2.exec(ref);
      var ok = ENV.check.rowsEqual(r1, r2, ordered);
      return { ok: ok, info: ok ? "Wynik zgodny ze wzorcem (" + r2.length + " wierszy)" : "Wynik różni się od oczekiwanego (Twój: " + (Array.isArray(r1) ? r1.length : "-") + " wierszy, wzorzec: " + r2.length + ")" };
    },
    modify: function (E, idx, refStmt, probe) {
      var q = ENV.check.userQueries(E)[idx];
      if (!q) return { ok: false, info: "Brak zapytania nr " + (idx + 1) + " w pliku kwerendy.txt" };
      var db1 = newDB(E.spec.db), db2 = newDB(E.spec.db);
      try { execOne(db1, q); } catch (e) { return { ok: false, info: "Zapytanie " + (idx + 1) + " zwraca błąd: " + e.message }; }
      db2.exec(refStmt);
      var ok = ENV.check.rowsEqual(db1.exec(probe), db2.exec(probe), false);
      return { ok: ok, info: ok ? "Zmiana w bazie zgodna ze wzorcem" : "Stan tabeli po wykonaniu zapytania różni się od oczekiwanego" };
    },
    // wyrenderowanie strony w ukrytej ramce i zwrócenie dokumentu do analizy stylów
    renderDoc: function (html, cb) {
      return new Promise(function (resolve) {
        var f = document.createElement("iframe");
        f.setAttribute("sandbox", "allow-same-origin allow-scripts allow-forms");
        f.style.cssText = "position:fixed;left:-3000px;top:0;width:1200px;height:900px;border:0;visibility:hidden";
        document.body.appendChild(f);
        f.onload = function () { setTimeout(function () { var r; try { r = cb(f.contentDocument, f.contentWindow); } catch (e) { r = Promise.resolve({ ok: false, info: e.message }); } Promise.resolve(r).then(function (v) { f.remove(); resolve(v); }); }, 150); };
        f.srcdoc = html;
      });
    }
  };
})();
