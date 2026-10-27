/* Konfiguracja stanowisk egzaminacyjnych dla zadań praktycznych + automatyczne sprawdzanie */
(function () {
  "use strict";
  var ENV = window.ZDAM_ENV; if (!ENV) return;
  var Z = window.ENV_ZADANIA = {};
  var U = ENV.util, C = ENV.check;
  function dev(E, n) { return E.net.dev[n]; }
  function ifc(E, d, n) { return E.net.dev[d].cfg.ifs[n] || {}; }
  function eqIp(i, ip, mask) { return i && i.ip === ip && i.mask === mask; }
  function txt(E) { return U.normText(ENV.docText(E)); }
  function has(E, list) { var t = txt(E); return list.every(function (x) { return (Array.isArray(x) ? x : [x]).some(function (y) { return t.indexOf(U.normText(y)) >= 0; }); }); }
  function saved(D) { return !!D.saved && JSON.stringify(D.saved) === JSON.stringify(D.cfg); }
  function range(prefix, a, b) { var o = []; for (var i = a; i <= b; i++) o.push(prefix + i); return o; }

  /* ---------------- INF.02 ---------------- */
  var PC_MAC = "00-1A-2B-3C-4D-5E";
  Z["INF.02"] = {
    apps: ["crimp", "net", "doc"],
    intro: '<div class="msg ok" style="margin:10px 0">Na tym stanowisku: <b>Okablowanie</b> - zaciśnij kabel; <b>Sieć</b> - kliknij urządzenie: router (panel www), serwer (karta sieciowa, DHCP, użytkownicy, udziały, wiersz poleceń), komputer PC1 (karta sieciowa, wiersz poleceń).</div>',
    net: {
      devices: [
        { name: "Router", type: "homerouter", x: 140, y: 30, label: "router Wi-Fi" },
        { name: "SW", type: "hub", x: 140, y: 100, label: "przełącznik" },
        { name: "Serwer", type: "server", x: 55, y: 175, mac: "00-15-5D-01-02-03", ip: "192.168.0.200", mask: "255.255.255.0" },
        { name: "PC1", type: "pc", x: 225, y: 175, mac: PC_MAC }
      ],
      links: [["Router", "lan", "SW", "p1"], ["Serwer", "eth0", "SW", "p2"], ["PC1", "eth0", "SW", "p3"]]
    },
    zastap: ["Rezultat 1: Kabel", "Rezultat 2: Router", "Rezultat 3: Serwer", "Rezultat 4: Stacja robocza"],
    checks: [
      { g: "Kabel", l: "Oba końce kabla w sekwencji T568B (kabel prosty)", f: function (E) { return (E.crimp.a || []).join() === ENV.T568B.join() && (E.crimp.b || []).join() === ENV.T568B.join(); } },
      { g: "Router", l: "Adres LAN routera 192.168.10.1 / 255.255.255.0", f: function (E) { var c = dev(E, "Router").hr; return c.lanIp === "192.168.10.1" && c.lanMask === "255.255.255.0"; } },
      { g: "Router", l: "Serwer DHCP routera wyłączony", f: function (E) { return !dev(E, "Router").hr.dhcp; } },
      { g: "Router", l: "SSID Biuro_10", f: function (E) { return dev(E, "Router").hr.ssid === "Biuro_10"; } },
      { g: "Router", l: "WPA2-PSK z szyfrowaniem AES i kluczem Egzamin!2026", f: function (E) { var c = dev(E, "Router").hr; return c.sec === "WPA2-PSK" && c.enc === "AES" && c.key === "Egzamin!2026"; } },
      { g: "Serwer", l: "Serwer: adres statyczny 192.168.10.2/24, brama 192.168.10.1, DNS 127.0.0.1", f: function (E) { var n = dev(E, "Serwer").nic; return n.mode === "static" && n.ip === "192.168.10.2" && n.mask === "255.255.255.0" && n.gw === "192.168.10.1" && n.dns === "127.0.0.1"; } },
      { g: "Serwer", l: "Zakres DHCP 192.168.10.100-192.168.10.150 /24 jest aktywny", f: function (E) { var d = dev(E, "Serwer").srv.dhcp, s = d.scope; return d.installed && s && s.active && s.start === "192.168.10.100" && s.end === "192.168.10.150" && s.mask === "255.255.255.0"; } },
      { g: "Serwer", l: "Opcje zakresu: 003 = 192.168.10.1, 006 = 192.168.10.2", f: function (E) { var s = dev(E, "Serwer").srv.dhcp.scope; return !!s && s.opt003 === "192.168.10.1" && s.opt006 === "192.168.10.2"; } },
      { g: "Serwer", l: "Rezerwacja 192.168.10.120 dla adresu MAC komputera PC1", f: function (E) { var s = dev(E, "Serwer").srv.dhcp.scope, m = PC_MAC.replace(/\W/g, "").toLowerCase(); return !!s && (s.res || []).some(function (r) { return r.ip === "192.168.10.120" && r.mac.replace(/\W/g, "").toLowerCase() === m; }); } },
      { g: "Serwer", l: "Grupa Ksiegowosc z członkiem a.nowak", f: function (E) { var s = dev(E, "Serwer").srv; return s.users.some(function (u) { return u.login === "a.nowak"; }) && s.groups.some(function (g) { return g.name === "Ksiegowosc" && g.members.indexOf("a.nowak") >= 0; }); } },
      { g: "Serwer", l: "Udział Dane (C:\\Dane): tylko Ksiegowosc z prawem zapisu (udział Zmiana/Pełna, NTFS Modyfikacja/Pełna), bez „Wszyscy”", f: function (E) {
        var sh = dev(E, "Serwer").srv.shares.filter(function (x) { return x.name === "Dane"; })[0]; if (!sh) return { ok: false, info: "Brak udziału o nazwie Dane" };
        var p = sh.perms, k = p.Ksiegowosc;
        var ok = /c:\\dane/i.test(sh.path) && !p.Wszyscy && !p.Everyone && !!k && /Zmiana|Pełna/.test(k.share) && /Modyfikacja|Pełna/.test(k.ntfs) && Object.keys(p).length === 1;
        return { ok: ok, info: "Uprawnienia: " + Object.keys(p).map(function (x) { return x + " (" + p[x].share + "/" + p[x].ntfs + ")"; }).join(", ") };
      } },
      { g: "Stacja", l: "PC1 pobiera adres automatycznie i otrzymuje 192.168.10.120 z serwera", f: function (E) { var D = dev(E, "PC1"); if (D.nic.mode !== "dhcp") return { ok: false, info: "PC1 ma ustawiony adres statyczny" }; var l = ENV.net.dhcpRequest(E.net, D); return { ok: l.ip === "192.168.10.120" && /serwer/.test(l.from), info: "Otrzymany adres: " + l.ip + " (" + l.from + ")" }; } },
      { g: "Stacja", l: "ping z PC1 do serwera i do routera kończy się powodzeniem", f: function (E) { var a = E.net.ping("PC1", "192.168.10.2"), b = E.net.ping("PC1", "192.168.10.1"); return { ok: a.ok && b.ok, info: (a.ok ? "serwer OK" : "serwer: " + a.why) + " · " + (b.ok ? "router OK" : "router: " + b.why) }; } }
    ]
  };

  /* ---------------- INF.03 ---------------- */
  var LIB_DB = [
    "CREATE TABLE autorzy (id INT PRIMARY KEY AUTO_INCREMENT, imie VARCHAR(30), nazwisko VARCHAR(40))",
    "CREATE TABLE ksiazki (id INT PRIMARY KEY AUTO_INCREMENT, tytul VARCHAR(100), autor_id INT, rok INT, cena DECIMAL(6,2))",
    "INSERT INTO autorzy (imie, nazwisko) VALUES ('Adam','Mickiewicz'),('Henryk','Sienkiewicz'),('Wisława','Szymborska'),('Andrzej','Sapkowski'),('Stanisław','Lem')",
    "INSERT INTO ksiazki (tytul, autor_id, rok, cena) VALUES ('Ballady i romanse',1,1822,24.90),('Pan Tadeusz',1,1834,32.50),('Ogniem i mieczem',2,1884,45.00),('Quo Vadis',2,1896,39.90),('Krzyżacy',2,1900,42.00),('Solaris',5,1961,36.00),('Cyberiada',5,1965,34.50),('Sezon burz',4,2013,49.90),('Wiersze wybrane',3,2016,29.90),('Dzieła zebrane',3,2019,89.00),('Rozdroże kruków',4,2024,54.90)"
  ];
  Z["INF.03"] = {
    apps: ["sql", "code"],
    dbName: "biblioteka", db: LIB_DB,
    files: { "biblioteka.php": "", "styl.css": "", "kwerendy.txt": "" },
    intro: '<div class="msg ok" style="margin:10px 0">Baza <b>biblioteka</b> jest już zaimportowana (aplikacja <b>Baza danych</b>). Każde zapytanie zapisz w pliku <code>kwerendy.txt</code> w kolejności 1-4, zakończone średnikiem (przycisk „Dopisz do kwerendy.txt”). Stronę wykonaj w pliku <code>biblioteka.php</code> (HTML + PHP), style w <code>styl.css</code>. Zamiast zrzutów ekranu sprawdzamy same zapytania.</div>',
    zastap: ["Rezultat 1: Zapytania", "Rezultat 2: HTML", "Rezultat 3: CSS", "Rezultat 4: Skrypt"],
    checks: [
      { g: "Zapytania", l: "Zapytanie 1: tytuły i rok wydania po 2015 r., malejąco wg roku", f: function (E) { return C.select(E, 0, "SELECT tytul, rok FROM ksiazki WHERE rok > 2015 ORDER BY rok DESC", true); } },
      { g: "Zapytania", l: "Zapytanie 2: nazwisko autora i liczba jego książek (JOIN + GROUP BY)", f: function (E) { return C.select(E, 1, "SELECT a.nazwisko, COUNT(k.id) FROM autorzy a JOIN ksiazki k ON a.id = k.autor_id GROUP BY a.nazwisko", false); } },
      { g: "Zapytania", l: "Zapytanie 3: dodanie autora Olgi Tokarczuk", f: function (E) { return C.modify(E, 2, "INSERT INTO autorzy (imie, nazwisko) VALUES ('Olga','Tokarczuk')", "SELECT imie, nazwisko FROM autorzy"); } },
      { g: "Zapytania", l: "Zapytanie 4: cena książek sprzed 2000 r. większa o 10%", f: function (E) { return C.modify(E, 3, "UPDATE ksiazki SET cena = cena * 1.1 WHERE rok < 2000", "SELECT id, cena FROM ksiazki"); } },
      { g: "HTML", l: "Szkielet HTML5: doctype, lang=\"pl\", kodowanie UTF-8, tytuł", f: function (E) { var s = E.files["biblioteka.php"] || ""; return /<!doctype html>/i.test(s) && /<html[^>]*lang=["']pl["']/i.test(s) && /<meta[^>]*charset=["']?utf-8/i.test(s) && /<title>\s*\S[\s\S]*<\/title>/i.test(s); } },
      { g: "HTML", l: "Arkusz styl.css dołączony znacznikiem <link>", f: function (E) { return /<link[^>]*href=["']styl\.css["']/i.test(E.files["biblioteka.php"] || ""); } },
      { g: "HTML", l: "Baner z nagłówkiem h1 „Nasza biblioteka”, lista numerowana z 3 elementami, stopka z tekstem „Stronę wykonał”", f: function (E) {
        var d = new DOMParser().parseFromString(ENV.buildPreview(E.files, "biblioteka.php"), "text/html");
        var h1 = [].some.call(d.querySelectorAll("h1"), function (x) { return /nasza biblioteka/i.test(x.textContent); });
        var ol = [].some.call(d.querySelectorAll("ol"), function (x) { return x.querySelectorAll("li").length === 3; });
        var ft = /stronę wykonał/i.test(d.body.textContent);
        return { ok: h1 && ol && ft, info: "h1: " + (h1 ? "tak" : "nie") + ", lista 3 el.: " + (ol ? "tak" : "nie") + ", stopka: " + (ft ? "tak" : "nie") };
      } },
      { g: "CSS", l: "Czcionka Verdana; baner: tło #2F4F4F, wysokość 100 px, biały tekst", f: function (E) {
        return C.renderDoc(ENV.buildPreview(E.files, "biblioteka.php"), function (doc, win) {
          var h1 = [].filter.call(doc.querySelectorAll("h1"), function (x) { return /nasza biblioteka/i.test(x.textContent); })[0]; if (!h1) return { ok: false, info: "Brak h1 z tekstem „Nasza biblioteka”" };
          var ban = h1.parentElement === doc.body ? h1 : h1.parentElement, cs = win.getComputedStyle(ban), hc = win.getComputedStyle(h1);
          var font = /verdana/i.test(win.getComputedStyle(doc.body).fontFamily) || /verdana/i.test(hc.fontFamily);
          var ok = font && cs.backgroundColor === "rgb(47, 79, 79)" && Math.round(parseFloat(cs.height)) === 100 && hc.color === "rgb(255, 255, 255)";
          return { ok: ok, info: "czcionka: " + (font ? "Verdana" : "inna") + ", tło: " + cs.backgroundColor + ", wysokość: " + cs.height + ", kolor tekstu: " + hc.color };
        });
      } },
      { g: "CSS", l: "Panele obok siebie: lewy 30% z tłem #D3D3D3 i paddingiem 10 px, prawy 70%", f: function (E) {
        return C.renderDoc(ENV.buildPreview(E.files, "biblioteka.php"), function (doc, win) {
          var ol = doc.querySelector("ol"); if (!ol) return { ok: false, info: "Brak listy numerowanej w panelu lewym" };
          var left = ol.parentElement; while (left.parentElement && left.parentElement !== doc.body && left.parentElement.tagName !== "MAIN") left = left.parentElement;
          var right = left.nextElementSibling; if (!right) return { ok: false, info: "Brak panelu prawego obok lewego" };
          var cl = win.getComputedStyle(left), lr = left.getBoundingClientRect(), rr = right.getBoundingClientRect(), W = (left.parentElement === doc.body ? doc.body : left.parentElement).getBoundingClientRect().width;
          var wl = lr.width / W, wr = rr.width / W, side = Math.abs(lr.top - rr.top) < 5 && rr.left >= lr.right - 2;
          var ok = Math.abs(wl - 0.3) < 0.03 && Math.abs(wr - 0.7) < 0.03 && side && cl.backgroundColor === "rgb(211, 211, 211)" && cl.paddingLeft === "10px";
          return { ok: ok, info: "lewy " + Math.round(wl * 100) + "%, prawy " + Math.round(wr * 100) + "%, obok siebie: " + (side ? "tak" : "nie") + ", tło lewego: " + cl.backgroundColor + ", padding: " + cl.paddingLeft };
        });
      } },
      { g: "Skrypt PHP", l: "mysqli_connect z bazą biblioteka", f: function (E) { return /mysqli_connect\s*\([^)]*["']biblioteka["']\s*\)/i.test(E.files["biblioteka.php"] || ""); } },
      { g: "Skrypt PHP", l: "mysqli_query z zapytaniem 1 i pętla po wynikach (mysqli_fetch_*)", f: function (E) { var s = E.files["biblioteka.php"] || ""; return /mysqli_query\s*\(/i.test(s) && /rok\s*>\s*2015/i.test(s) && /while\s*\(\s*\$\w+\s*=\s*mysqli_fetch_(row|array|assoc)\s*\(/i.test(s); } },
      { g: "Skrypt PHP", l: "Wypisanie w akapitach „tytuł (rok)”", f: function (E) { return /echo[^;]*<p>[^;]*\([^;]*\)[^;]*<\/p>/i.test(E.files["biblioteka.php"] || ""); } },
      { g: "Skrypt PHP", l: "mysqli_close na końcu skryptu", f: function (E) { return /mysqli_close\s*\(/i.test(E.files["biblioteka.php"] || ""); } }
    ]
  };

  /* ---------------- INF.04 ---------------- */
  var INF04_TEST = 'var __R={};try{__R.cls=typeof Produkt==="function";var __p=new Produkt("a",2.5,4);__R.wart=Math.abs(__p.Wartosc()-10)<1e-9;__R.priv=Object.keys(__p).length===0;}catch(e){__R.e1=String(e)}' +
    'try{__R.fn=typeof sortujMalejaco==="function";var __t=[3,1,4,1,5,9,2,6].map(function(v,i){return new Produkt("p"+i,v,1)});sortujMalejaco(__t);var __ok=true;for(var __i=0;__i<__t.length-1;__i++)if(__t[__i].Wartosc()<__t[__i+1].Wartosc())__ok=false;__R.sort=__ok&&__t.length===8;__R.src=String(sortujMalejaco);}catch(e){__R.e2=String(e)}' +
    'postMessage({t:"res",r:__R});';
  function inf04(E) {
    if (E._inf04) return E._inf04;
    E._inf04 = ENV.runWorker(E.js.code, E.js.input, INF04_TEST, 4000).then(function (r) {
      var logs = r.out.filter(function (o) { return o.t === "log"; }).length, res = (r.out.filter(function (o) { return o.t === "res"; })[0] || {}).r || {};
      setTimeout(function () { E._inf04 = null; }, 100);
      return { logs: logs, run: r, R: res };
    });
    return E._inf04;
  }
  Z["INF.04"] = {
    apps: ["js", "code"],
    files: { "sklep.html": "" },
    jsCode: "// Część 1 - aplikacja konsolowa w JavaScript\n// class Produkt { #nazwa; #cena; #ilosc; ... }\n",
    intro: '<div class="msg ok" style="margin:10px 0">W tym środowisku obie części piszesz w <b>JavaScript</b> (na egzaminie możesz wybrać C++, C#, Java lub Python - zasady są te same).<br><b>Część 1</b> (aplikacja <b>Programowanie</b>): klasa <code>Produkt</code> z prywatnymi polami <code>#nazwa</code>, <code>#cena</code>, <code>#ilosc</code>, metody <code>Wartosc()</code> i <code>Wypisz()</code>; funkcja <code>sortujMalejaco(tablica)</code> - sortowanie bąbelkowe bez <code>.sort()</code>, z komentarzem dokumentującym; program wypisuje 5 produktów przed i po sortowaniu.<br><b>Część 2</b> (Edytor kodu, plik <code>sklep.html</code>): pola o id <code>nazwa</code>, <code>cena</code>, <code>ilosc</code>, przycisk <code>dodaj</code>, lista <code>lista</code> (np. &lt;ul&gt;), element <code>suma</code> z łączną wartością (2 miejsca po przecinku) i element <code>komunikat</code> na błędy walidacji. Nie używaj alert().</div>',
    zastap: ["Rezultat 1: Klasa", "Rezultat 2: Program konsolowy", "Rezultat 3: Interfejs", "Rezultat 4: Testy"],
    checks: [
      { g: "Klasa", l: "Klasa Produkt z metodą Wartosc() zwracającą cena × ilosc", f: function (E) { return inf04(E).then(function (x) { return { ok: !!(x.R.cls && x.R.wart), info: x.R.e1 || "" }; }); } },
      { g: "Klasa", l: "Pola klasy prywatne (brak publicznych pól obiektu)", f: function (E) { return inf04(E).then(function (x) { return { ok: !!(x.R.cls && x.R.priv) }; }); } },
      { g: "Klasa", l: "Metoda Wypisz() zdefiniowana w klasie", f: function (E) { return /Wypisz\s*\(\s*\)\s*\{/.test(E.js.code); } },
      { g: "Program", l: "Funkcja sortujMalejaco sortuje malejąco według wartości", f: function (E) { return inf04(E).then(function (x) { return { ok: !!(x.R.fn && x.R.sort), info: x.R.e2 || "" }; }); } },
      { g: "Program", l: "Własna implementacja sortowania (bez .sort())", f: function (E) { return inf04(E).then(function (x) { return { ok: !!x.R.src && !/\.sort\s*\(/.test(x.R.src) && /for|while/.test(x.R.src) }; }); } },
      { g: "Program", l: "Komentarz dokumentujący funkcję: nazwa, opis, parametry, zwracany typ, autor", f: function (E) { var m = /\/\*[\s\S]*?\*\/\s*(function\s+sortujMalejaco|const\s+sortujMalejaco|let\s+sortujMalejaco)/.exec(E.js.code); return !!m && ["nazwa funkcji", "opis", "parametr", "zwracany", "autor"].every(function (w) { return m[0].toLowerCase().indexOf(w) >= 0; }); } },
      { g: "Program", l: "Program uruchamia się bez błędów i wypisuje produkty przed i po sortowaniu (min. 10 linii)", f: function (E) { return inf04(E).then(function (x) { return { ok: x.run.status === "ok" && x.logs >= 10, info: "Status: " + x.run.status + ", linii wyjścia: " + x.logs }; }); } },
      { g: "Interfejs", l: "Formularz: pola nazwa, cena, ilosc, przycisk dodaj, lista, suma, komunikat", f: function (E) { var d = new DOMParser().parseFromString(E.files["sklep.html"] || "", "text/html"); var miss = ["nazwa", "cena", "ilosc", "dodaj", "lista", "suma", "komunikat"].filter(function (id) { return !d.getElementById(id); }); return { ok: !miss.length, info: miss.length ? "Brak elementów: " + miss.join(", ") : "" }; } },
      { g: "Interfejs", l: "Dodanie poprawnego produktu: pozycja na liście i suma z 2 miejscami po przecinku", f: function (E) {
        return C.renderDoc(ENV.buildPreview(E.files, "sklep.html"), function (doc) {
          var g = function (id) { return doc.getElementById(id); }; if (!g("dodaj")) return { ok: false, info: "Brak przycisku dodaj" };
          g("nazwa").value = "Czajnik"; g("cena").value = "3"; g("ilosc").value = "4"; g("dodaj").click();
          var lt = (g("lista") || {}).textContent || "", st = (g("suma") || {}).textContent || "";
          var ok = /czajnik/i.test(lt) && /12[.,]00/.test(st);
          return { ok: ok, info: "lista: „" + lt.trim().slice(0, 60) + "”, suma: „" + st.trim() + "”" };
        });
      } },
      { g: "Interfejs", l: "Walidacja: cena ≤ 0 lub puste pola - brak dodania i komunikat", f: function (E) {
        return C.renderDoc(ENV.buildPreview(E.files, "sklep.html"), function (doc) {
          var g = function (id) { return doc.getElementById(id); }; if (!g("dodaj") || !g("lista")) return { ok: false, info: "Brak elementów formularza" };
          var before = g("lista").textContent;
          g("nazwa").value = "Test"; g("cena").value = "-1"; g("ilosc").value = "2"; g("dodaj").click();
          var after = g("lista").textContent, kom = ((g("komunikat") || {}).textContent || "").trim();
          return { ok: before === after && kom.length > 0, info: "lista bez zmian: " + (before === after ? "tak" : "nie") + ", komunikat: „" + kom.slice(0, 60) + "”" };
        });
      } }
    ]
  };

  /* ---------------- INF.07 ---------------- */
  var SWIF = range("FastEthernet0/", 1, 24).concat(["GigabitEthernet0/1", "GigabitEthernet0/2"]);
  Z["INF.07"] = {
    apps: ["crimp", "net"],
    crimpLabels: ["Port 5 panelu krosowego (LSA)", "Gniazdo abonenckie (keystone)"],
    intro: '<div class="msg ok" style="margin:10px 0">W aplikacji <b>Sieć</b> kliknij SW1 lub R1, aby otworzyć konsolę Cisco IOS (zacznij od <code>enable</code>). Komputery konfigurujesz w zakładce „Ustawienia karty sieciowej”. Wpisz <code>?</code>, aby zobaczyć polecenia.</div>',
    net: {
      devices: [
        { name: "R1", type: "router", x: 140, y: 30, ifs: ["GigabitEthernet0/0", "GigabitEthernet0/1"] },
        { name: "SW1", type: "switch", x: 140, y: 105, ifs: SWIF },
        { name: "PC1", type: "pc", x: 60, y: 180, mac: "00-50-79-66-68-01" },
        { name: "PC2", type: "pc", x: 220, y: 180, mac: "00-50-79-66-68-02" }
      ],
      links: [["PC1", "eth0", "SW1", "FastEthernet0/1"], ["PC2", "eth0", "SW1", "FastEthernet0/5"], ["SW1", "FastEthernet0/24", "R1", "GigabitEthernet0/0"]]
    },
    zastap: ["Rezultat 1: Okablowanie", "Rezultat 2: Przełącznik", "Rezultat 3: Router i hosty"],
    checks: [
      { g: "Okablowanie", l: "Panel i gniazdo zakończone w sekwencji T568B", f: function (E) { return (E.crimp.a || []).join() === ENV.T568B.join() && (E.crimp.b || []).join() === ENV.T568B.join(); } },
      { g: "Przełącznik", l: "VLAN 10 o nazwie BIURO i VLAN 20 o nazwie MAGAZYN", f: function (E) { var v = dev(E, "SW1").cfg.vlans; return v[10] === "BIURO" && v[20] === "MAGAZYN"; } },
      { g: "Przełącznik", l: "Porty Fa0/1-4 w trybie access, VLAN 10", f: function (E) { return range("FastEthernet0/", 1, 4).every(function (n) { var i = ifc(E, "SW1", n); return i.mode === "access" && i.vlan === 10; }); } },
      { g: "Przełącznik", l: "Porty Fa0/5-8 w trybie access, VLAN 20", f: function (E) { return range("FastEthernet0/", 5, 8).every(function (n) { var i = ifc(E, "SW1", n); return i.mode === "access" && i.vlan === 20; }); } },
      { g: "Przełącznik", l: "Port Fa0/24 w trybie trunk", f: function (E) { return ifc(E, "SW1", "FastEthernet0/24").mode === "trunk"; } },
      { g: "Przełącznik", l: "Porty Fa0/9-23 wyłączone (shutdown)", f: function (E) { return range("FastEthernet0/", 9, 23).every(function (n) { return ifc(E, "SW1", n).shut; }); } },
      { g: "Przełącznik", l: "Konfiguracja przełącznika zapisana (startup-config = running-config)", f: function (E) { return saved(dev(E, "SW1")); } },
      { g: "Router", l: "Podinterfejsy Gi0/0.10 i Gi0/0.20 z dot1Q i adresami 192.168.10.1/24, 192.168.20.1/24", f: function (E) { var a = ifc(E, "R1", "GigabitEthernet0/0.10"), b = ifc(E, "R1", "GigabitEthernet0/0.20"); return a.encap === 10 && eqIp(a, "192.168.10.1", "255.255.255.0") && b.encap === 20 && eqIp(b, "192.168.20.1", "255.255.255.0"); } },
      { g: "Router", l: "Interfejs fizyczny Gi0/0 routera włączony", f: function (E) { return !ifc(E, "R1", "GigabitEthernet0/0").shut; } },
      { g: "Hosty", l: "PC1 192.168.10.10/24 brama .1, PC2 192.168.20.10/24 brama .1", f: function (E) { var a = dev(E, "PC1").nic, b = dev(E, "PC2").nic; return a.mode === "static" && a.ip === "192.168.10.10" && a.mask === "255.255.255.0" && a.gw === "192.168.10.1" && b.mode === "static" && b.ip === "192.168.20.10" && b.mask === "255.255.255.0" && b.gw === "192.168.20.1"; } },
      { g: "Hosty", l: "ping z PC1 do PC2 kończy się powodzeniem", f: function (E) { var r = E.net.ping("PC1", "192.168.20.10"); return { ok: r.ok, info: r.ok ? "Odpowiedź otrzymana" : r.why }; } }
    ]
  };

  /* ---------------- INF.08 ---------------- */
  Z["INF.08"] = {
    apps: ["net"],
    intro: '<div class="msg ok" style="margin:10px 0">Komputery PC1 (192.168.1.10) i PC2 (192.168.2.10) są już skonfigurowane. Routery mają domyślną nazwę „Router” - nadaj nazwy R1 i R2 poleceniem <code>hostname</code>. ISP ma adres 203.0.113.1/30 i nie zna Twoich sieci prywatnych.</div>',
    net: {
      devices: [
        { name: "R1", type: "router", x: 90, y: 70, ifs: ["GigabitEthernet0/0", "GigabitEthernet0/1", "GigabitEthernet0/2"] },
        { name: "R2", type: "router", x: 200, y: 70, ifs: ["GigabitEthernet0/0", "GigabitEthernet0/1"] },
        { name: "ISP", type: "isp", x: 90, y: 15, ifs: ["GigabitEthernet0/0"], preset: { "GigabitEthernet0/0": { ip: "203.0.113.1", mask: "255.255.255.252", shut: false } } },
        { name: "PC1", type: "pc", x: 60, y: 175, mac: "00-50-79-66-68-11", ip: "192.168.1.10", mask: "255.255.255.0", gw: "192.168.1.1" },
        { name: "PC2", type: "pc", x: 220, y: 175, mac: "00-50-79-66-68-12", ip: "192.168.2.10", mask: "255.255.255.0", gw: "192.168.2.1" }
      ],
      links: [["PC1", "eth0", "R1", "GigabitEthernet0/0"], ["R1", "GigabitEthernet0/1", "R2", "GigabitEthernet0/1"], ["R1", "GigabitEthernet0/2", "ISP", "GigabitEthernet0/0"], ["PC2", "eth0", "R2", "GigabitEthernet0/0"]]
    },
    zastap: ["Rezultat 1: Interfejsy", "Rezultat 2: Routing", "Rezultat 3: NAT i ACL", "Rezultat 4: Testy"],
    checks: [
      { g: "Interfejsy", l: "Nazwy urządzeń R1 i R2", f: function (E) { return dev(E, "R1").cfg.hostname === "R1" && dev(E, "R2").cfg.hostname === "R2"; } },
      { g: "Interfejsy", l: "Adresy interfejsów R1 i R2 zgodne z tabelą i interfejsy włączone", f: function (E) {
        var t = [["R1", "GigabitEthernet0/0", "192.168.1.1", "255.255.255.0"], ["R1", "GigabitEthernet0/1", "10.0.0.1", "255.255.255.252"], ["R1", "GigabitEthernet0/2", "203.0.113.2", "255.255.255.252"], ["R2", "GigabitEthernet0/0", "192.168.2.1", "255.255.255.0"], ["R2", "GigabitEthernet0/1", "10.0.0.2", "255.255.255.252"]];
        var bad = t.filter(function (x) { var i = ifc(E, x[0], x[1]); return !eqIp(i, x[2], x[3]) || i.shut; }).map(function (x) { return x[0] + " " + x[1]; });
        return { ok: !bad.length, info: bad.length ? "Do poprawy: " + bad.join(", ") : "" };
      } },
      { g: "Routing", l: "Sąsiedztwo OSPF R1-R2 i trasa R2 do sieci 192.168.1.0/24 z OSPF", f: function (E) { var r = E.net.ping("PC2", "192.168.1.10"); var o = E.net.dev.R2.cfg.ospf && E.net.dev.R1.cfg.ospf; return { ok: !!o && r.ok, info: r.ok ? "" : r.why }; } },
      { g: "Routing", l: "Trasa domyślna na R1 rozgłaszana w OSPF (default-information originate)", f: function (E) { var c = dev(E, "R1").cfg; return !!c.ospf && c.ospf.dio && c.routes.some(function (r) { return r.net === "0.0.0.0" && r.mask === "0.0.0.0" && r.nh === "203.0.113.1"; }); } },
      { g: "NAT", l: "PAT na R1: lista obejmuje obie sieci LAN, overload na Gi0/2, inside/outside na interfejsach", f: function (E) {
        var c = dev(E, "R1").cfg, ok = !!c.nat && c.nat.overload && c.nat.ifn === "GigabitEthernet0/2" && ifc(E, "R1", "GigabitEthernet0/2").natOut && ifc(E, "R1", "GigabitEthernet0/0").natIn && ifc(E, "R1", "GigabitEthernet0/1").natIn;
        return { ok: ok };
      } },
      { g: "ACL", l: "ACL 120 na R2: deny tcp 192.168.2.0 0.0.0.255 do 192.168.1.0 0.0.0.255 eq 23, permit ip any any, na Gi0/0 in", f: function (E) {
        var c = dev(E, "R2").cfg, a = c.acls["120"] || [];
        var d = a.some(function (r) { return /^deny tcp 192\.168\.2\.0 0\.0\.0\.255 192\.168\.1\.0 0\.0\.0\.255 eq (23|telnet)$/.test(r); }), p = a.length && /^permit ip any any$/.test(a[a.length - 1]);
        return { ok: d && !!p && ifc(E, "R2", "GigabitEthernet0/0").aclIn === "120", info: "Reguły: " + (a.join(" | ") || "brak") };
      } },
      { g: "Testy", l: "ping z PC2 do PC1 i do ISP (203.0.113.1) kończy się powodzeniem", f: function (E) { var a = E.net.ping("PC2", "192.168.1.10"), b = E.net.ping("PC2", "203.0.113.1"); return { ok: a.ok && b.ok, info: (a.ok ? "PC1 OK" : "PC1: " + a.why) + " · " + (b.ok ? "ISP OK" : "ISP: " + b.why) }; } },
      { g: "Testy", l: "Konfiguracje R1 i R2 zapisane", f: function (E) { return saved(dev(E, "R1")) && saved(dev(E, "R2")); } }
    ]
  };

  /* ---------------- zadania z dokumentacją i obliczeniami ---------------- */
  var DOC = ["doc", "sheet"];
  function d(spec) { spec.apps = spec.apps || DOC; return spec; }
  Z["EKA.01"] = d({ docTpl: "Pismo",
    odpowiedzi: [{ l: "Znak sprawy", t: ["OS.3112.14.2026"] }, { l: "Termin usunięcia braków (data)", t: ["15.06.2026", "15 czerwca 2026"] }, { l: "Termin na odwołanie od decyzji (dni)", v: 14, tol: 0 }],
    checks: [
      { g: "Wezwanie i decyzja", l: "Dokument zawiera znak sprawy, podstawę art. 64 § 2 KPA i termin 7 dni", f: function (E) { return has(E, ["OS.3112.14.2026", "64", "7 dni"]); } },
      { g: "Wezwanie i decyzja", l: "Pouczenie o pozostawieniu wniosku bez rozpoznania", f: function (E) { return has(E, ["bez rozpoznania"]); } },
      { g: "Wezwanie i decyzja", l: "Decyzja: kwota 210,40 zł i okres 01.07.2026-31.12.2026", f: function (E) { return has(E, [["210,40", "210.40"], ["01.07.2026", "1 lipca 2026", "1.07.2026"], ["31.12.2026", "31 grudnia 2026"]]); } },
      { g: "Wezwanie i decyzja", l: "Pouczenie: odwołanie do Samorządowego Kolegium Odwoławczego za pośrednictwem wójta w 14 dni", f: function (E) { return has(E, [["samorządowego kolegium odwoławczego", "sko"], ["za pośrednictwem"], ["14 dni"]]); } }
    ] });
  Z["EKA.04"] = d({ odpowiedzi: [{ l: "Wartość PZ (netto, zł)", v: 4050 }, { l: "Wartość rozchodu 180 ryz metodą FIFO (zł)", v: 3140 }, { l: "Wartość stanu końcowego papieru (zł)", v: 2160 }, { l: "Miesięczny odpis amortyzacyjny (zł)", v: 300 }, { l: "Umorzenie na 31.12.2026 (zł)", v: 2700 }, { l: "Wartość netto drukarki na 31.12.2026 (zł)", v: 9300 }],
    zastap: ["Rezultat 3: Kartoteka FIFO", "Rezultat 4: Amortyzacja"],
    checks: [{ g: "Zamówienie i PZ", l: "Zamówienie zawiera dane dostawcy Biuro-Max, ilości 200 i 50 oraz termin 10.03.2026", f: function (E) { return has(E, ["biuro-max", "200", "50", ["10.03.2026", "10 marca 2026"]]); } }] });
  Z["EKA.05"] = d({ odpowiedzi: [
    { l: "A. Wiśniewska - składki społeczne pracownika (zł)", v: 754.05 }, { l: "A. Wiśniewska - składka zdrowotna (zł)", v: 427.14 }, { l: "A. Wiśniewska - zaliczka PIT (zł)", v: 240, tol: 0 }, { l: "A. Wiśniewska - wynagrodzenie netto (zł)", v: 4078.81 },
    { l: "P. Zieliński - wynagrodzenie chorobowe (zł)", v: 560 }, { l: "P. Zieliński - składki społeczne pracownika (zł)", v: 479.85 }, { l: "P. Zieliński - składka zdrowotna (zł)", v: 322.21 }, { l: "P. Zieliński - zaliczka PIT (zł)", v: 100, tol: 0 }, { l: "P. Zieliński - wynagrodzenie netto (zł)", v: 3157.94 },
    { l: "Składki finansowane przez pracodawcę - razem za oboje (zł)", v: 1843.20 },
    { l: "Termin wypłaty wynagrodzeń (dzień następnego miesiąca)", v: 10, tol: 0 }, { l: "Termin opłacenia składek ZUS (dzień)", v: 15, tol: 0 }, { l: "Termin przekazania zaliczek PIT (dzień)", v: 20, tol: 0 }],
    zastap: ["Rezultat 1: Anna Wiśniewska", "Rezultat 2: Piotr Zieliński", "Rezultat 3: Pracodawca i terminy"] });
  Z["EKA.07"] = d({ odpowiedzi: [{ l: "Suma bilansu otwarcia (zł)", v: 120000 }, { l: "Kwota na koncie 200 (operacja 3, zł)", v: 29520 }, { l: "Suma obrotów kwietnia bez sald początkowych (zł)", v: 70320 }, { l: "Saldo końcowe konta 130 Rachunek bankowy (zł)", v: 6000 }, { l: "Saldo końcowe konta 330 Towary (zł)", v: 15000 }, { l: "Saldo końcowe konta 201 (Ma, zł)", v: 20300 }, { l: "Wynik finansowy za kwiecień - zysk (zł)", v: 8000 }],
    zastap: ["Rezultat 1: Otwarcie", "Rezultat 3: Zestawienie i wynik"] });
  Z["SPL.01"] = d({ odpowiedzi: [{ l: "Liczba kartonów pełnowartościowych", v: 1426, tol: 0 }, { l: "Wartość PZ (zł)", v: 26381 }, { l: "Kartonów w jednej warstwie", v: 8, tol: 0 }, { l: "Liczba warstw", v: 4, tol: 0 }, { l: "Kartonów na palecie", v: 32, tol: 0 }, { l: "Masa PJŁ (kg)", v: 345 }, { l: "Liczba palet", v: 45, tol: 0 }, { l: "Punkt ponownego zamówienia (kartony)", v: 720, tol: 0 }],
    zastap: ["Rezultat 3: Obliczenia PJŁ"], docTpl: "Protokół",
    checks: [{ g: "Protokół", l: "Protokół wskazuje brak 10 kartonów i 4 kartony uszkodzone", f: function (E) { return has(E, ["10", "4", ["uszkodz", "przecieka"]]); } }] });
  Z["SPL.04"] = d({ odpowiedzi: [{ l: "Wykorzystanie ładowności (%)", v: 75, tol: 0.5 }, { l: "Wykorzystanie przestrzeni ładunkowej (%)", v: 90.9, tol: 0.2 }, { l: "Łączny czas jazdy (h)", v: 20.7, tol: 0.1 }, { l: "Koszt przewozu (€)", v: 1775 }, { l: "Cena dla klienta z marżą 15% (€)", v: 2041.25 }],
    zastap: ["Rezultat 3: Koszt"] });
  Z["HAN.01"] = d({ odpowiedzi: [{ l: "Jogurt - cena brutto (zł)", v: 3.28 }, { l: "Kawa - cena brutto (zł)", v: 35.18 }, { l: "Jogurt - cena jednostkowa (zł/kg)", v: 8.20 }, { l: "Kawa - cena jednostkowa (zł/kg)", v: 70.36 }],
    zastap: ["Rezultat 2: Ceny"], docTpl: "Protokół" });
  Z["HAN.02"] = d({ odpowiedzi: [{ l: "Koszt całkowity - oferta A (zł)", v: 15400 }, { l: "Koszt całkowity - oferta B (zł)", v: 15288 }, { l: "Koszt całkowity - oferta C (zł)", v: 15110 }, { l: "Wybrana oferta (A, B lub C)", t: ["C"] }, { l: "Koszt jednostkowy zakupu (zł)", v: 75.55 }, { l: "Cena sprzedaży netto (zł)", v: 98.22 }, { l: "Cena sprzedaży brutto (zł)", v: 120.81 }],
    zastap: ["Rezultat 1: Porównanie ofert", "Rezultat 3: Kalkulacja ceny"] });
  Z["HGT.06"] = d({ odpowiedzi: [{ l: "Należność za noclegi (zł)", v: 1140 }, { l: "Opłata miejscowa (zł)", v: 18 }, { l: "Suma rachunku (zł)", v: 1368 }, { l: "Obłożenie 12.08 (%)", v: 75, tol: 0.1 }, { l: "ADR (zł)", v: 350 }, { l: "RevPAR (zł)", v: 262.5 }],
    zastap: ["Rezultat 3: Rachunek", "Rezultat 4: Wskaźniki"] });
  Z["HGT.07"] = d({ odpowiedzi: [{ l: "Koszty stałe (zł)", v: 8700 }, { l: "Koszty zmienne na osobę (zł)", v: 617 }, { l: "Koszty zmienne całkowite (zł)", v: 27148 }, { l: "Koszt całkowity z marżą (zł)", v: 40149.76 }, { l: "Cena dla ucznia (zł)", v: 1003.74, tol: 0.3 }],
    zastap: ["Rezultat 2: Kalkulacja"] });
  Z["BUD.14"] = d({ odpowiedzi: [{ l: "Powierzchnia muru netto (m²)", v: 27 }, { l: "R - robocizna (zł)", v: 1296 }, { l: "M - materiały (zł)", v: 2862 }, { l: "S - sprzęt (zł)", v: 148.5 }, { l: "Kp - koszty pośrednie (zł)", v: 938.93 }, { l: "Z - zysk (zł)", v: 286.01 }, { l: "Wartość netto (zł)", v: 5531.44 }, { l: "Wartość brutto (zł)", v: 6803.67 }, { l: "Czas wykonania (dni robocze)", v: 2, tol: 0 }],
    zastap: ["Rezultat 1: Przedmiar", "Rezultat 2: Kosztorys"] });
  Z["MEC.09"] = d({ odpowiedzi: [{ l: "Czas jednostkowy toczenia (min)", v: 4 }, { l: "Czas toczenia partii (min)", v: 525 }, { l: "Czas wiercenia partii (min)", v: 200 }, { l: "Czas kontroli partii (min)", v: 60 }, { l: "Wąskie gardło (operacja)", t: ["toczenie"] }, { l: "Liczba zmian na wąskim gardle", v: 2, tol: 0 }],
    zastap: ["Rezultat 2: Obliczenia", "Rezultat 3: Planowanie"], docTpl: "Karta pracy" });
  Z["MOT.06"] = d({ odpowiedzi: [{ l: "Robocizna (zł netto)", v: 340 }, { l: "Części (zł netto)", v: 551 }, { l: "Wartość netto naprawy (zł)", v: 921 }, { l: "Wartość brutto (zł)", v: 1132.83 }], zastap: ["Rezultat 2: Kosztorys"], docTpl: "Protokół" });
  Z["ROL.04"] = d({ odpowiedzi: [{ l: "Wartość użytkowa ziarna (%)", v: 90.16 }, { l: "Norma wysiewu (kg/ha)", v: 219.6, tol: 0.6 }, { l: "Materiał siewny na 8 ha (kg)", v: 1757, tol: 4 }, { l: "Saletra amonowa na pole (kg)", v: 3294, tol: 4 }, { l: "Superfosfat potrójny na pole (kg)", v: 1043, tol: 3 }, { l: "Sól potasowa na pole (kg)", v: 1067, tol: 3 }],
    zastap: ["Rezultat 2: Wysiew"] });
  Z["ROL.10"] = d({ odpowiedzi: [{ l: "Nadwyżka bezpośrednia pszenica (zł/ha)", v: 3550 }, { l: "Nadwyżka bezpośrednia rzepak (zł/ha)", v: 3750 }, { l: "Nadwyżka bezpośrednia kukurydza (zł/ha)", v: 2900 }, { l: "Suma nadwyżek gospodarstwa (zł)", v: 139200 }, { l: "Dochód rolniczy (zł)", v: 111200 }, { l: "Wydajność kombajnu (ha/h)", v: 2.52 }, { l: "Czas zbioru pszenicy (h)", v: 7.9, tol: 0.1 }],
    zastap: ["Rezultat 1: Nadwyżki", "Rezultat 2: Dochód", "Rezultat 4: Żniwa"] });

  /* ---------------- zadania wykonywane fizycznie: dokumentacja + obliczenia ---------------- */
  var PHYS_NOTE = "To zadanie na egzaminie wykonuje się fizycznie (na stanowisku, przy kliencie lub materiale). Na tym komputerze przygotujesz dokumentację (kartę, protokół, obliczenia w arkuszu) i wpiszesz wyniki obliczeń do karty odpowiedzi - sprawdzimy je automatycznie. Wykonanie praktyczne oceniasz sam według kryteriów.";
  function phys(spec) { spec = spec || {}; spec.note = PHYS_NOTE; spec.docTpl = spec.docTpl || "Karta pracy"; return d(spec); }
  Z["SPC.01"] = phys({ odpowiedzi: [{ l: "Masa ciasta drożdżowego przed pieczeniem (g)", v: 955, tol: 2 }] });
  Z["BUD.11"] = phys({ odpowiedzi: [{ l: "Liczba płytek 30×30 cm z zapasem (szt.)", v: 9, tol: 0 }], zastap: ["Rezultat 1: Obliczenia"] });
  Z["BUD.12"] = phys({ odpowiedzi: [{ l: "Liczba cegieł (szt.)", v: 62, tol: 2 }, { l: "Ilość zaprawy (m³)", v: 0.037, tol: 0.002 }], zastap: ["Rezultat 1: Obliczenia"] });
  Z["MEC.05"] = phys({ odpowiedzi: [{ l: "Prędkość obrotowa dla Ø36 (obr/min)", v: 1592, tol: 3 }, { l: "Prędkość obrotowa dla Ø30 (obr/min)", v: 1910, tol: 3 }] });
  Z["MEC.08"] = phys({ odpowiedzi: [{ l: "Średnica wiertła pod gwint M8 (mm)", v: 6.8, tol: 0 }, { l: "Średnica wiertła przed rozwiercaniem Ø10 H9 (mm)", v: 9.8, tol: 0.05 }] });
  Z["MEC.03"] = phys({ odpowiedzi: [{ l: "Wymiar górny czopa Ø25 k6 (mm)", v: 25.015, tol: 0.0005 }, { l: "Wymiar dolny czopa Ø25 k6 (mm)", v: 25.002, tol: 0.0005 }], docTpl: "Protokół" });
  Z["ELM.02"] = phys({ odpowiedzi: [{ l: "Napięcie szczytowe uzwojenia wtórnego (V)", v: 12.7, tol: 0.1 }, { l: "Prąd obciążenia 47 Ω przy 5 V (A)", v: 0.106, tol: 0.002 }, { l: "Rezystor dla LED 2 V / 10 mA (Ω)", v: 300, tol: 0 }], zastap: ["Rezultat 3: Obliczenia"], docTpl: "Protokół" });
  ["HGT.01", "HGT.02", "HGT.03", "HGT.12", "MOT.02", "MOT.05", "ELE.02", "ELE.05", "ELM.03", "ELM.06", "FRK.01", "FRK.03", "FRK.04"].forEach(function (k) { Z[k] = phys({ docTpl: /ELE|ELM|MOT/.test(k) ? "Protokół" : "Karta pracy" }); });
  Z["HGT.12"].note = "Na tym komputerze przygotujesz jadłospis, zapotrzebowanie surowcowe i kalkulację kosztu porcji w arkuszu. Przygotowanie potraw wykonuje się fizycznie - ocenisz je sam według kryteriów.";
  Z["ELM.06"].apps = ["js", "doc"];
  Z["ELM.06"].note = "Program PLC na egzaminie piszesz w środowisku producenta sterownika. Tutaj możesz przećwiczyć logikę w JavaScript (zmienne logiczne, licznik, timer jako licznik cykli) i przygotować tablicę symboli w edytorze. Działanie programu ocenisz według kryteriów.";
})();
