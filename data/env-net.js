/* Symulator sieci: Cisco IOS (router, przełącznik), komputery, Windows Server, router domowy.
   Model: domeny rozgłoszeniowe (VLAN, trunk 802.1Q), routing (bezpośredni, statyczny, OSPF), NAT/PAT, DHCP. */
(function () {
  "use strict";
  var ENV = window.ZDAM_ENV; if (!ENV) return;
  var U = ENV.util, esc = U.esc;

  /* ---------- adresy IP ---------- */
  function ip2n(s) { var p = String(s || "").trim().split("."); if (p.length !== 4) return null; var n = 0; for (var i = 0; i < 4; i++) { if (!/^\d{1,3}$/.test(p[i]) || +p[i] > 255) return null; n = n * 256 + +p[i]; } return n >>> 0; }
  function n2ip(n) { return [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join("."); }
  function isMask(m) { var n = ip2n(m); if (n === null) return false; var inv = (~n) >>> 0; return ((inv + 1) & inv) === 0; }
  function prefix(m) { var n = ip2n(m), c = 0; while (n & 0x80000000) { c++; n = (n << 1) >>> 0; } return c; }
  function maskFromPrefix(p) { return p === 0 ? 0 : (0xFFFFFFFF << (32 - p)) >>> 0; }
  function netOf(ip, mask) { return (ip2n(ip) & ip2n(mask)) >>> 0; }
  function sameNet(a, b, mask) { return ip2n(a) !== null && ip2n(b) !== null && netOf(a, mask) === netOf(b, mask); }
  ENV.ip = { ip2n: ip2n, n2ip: n2ip, isMask: isMask, prefix: prefix, netOf: netOf, sameNet: sameNet };

  /* ---------- nazwy interfejsów ---------- */
  var IFT = [[/^(fa|f|fas|fast|fastethernet)$/i, "FastEthernet"], [/^(gi|g|gig|giga|gigabitethernet)$/i, "GigabitEthernet"], [/^(s|se|ser|serial)$/i, "Serial"], [/^(vl|vlan)$/i, "Vlan"], [/^(eth|ethernet)$/i, "Ethernet"]];
  function normIf(s) {
    var m = /^([a-z]+)\s*([\d/]+)(\.\d+)?$/i.exec(String(s).trim()); if (!m) return null;
    for (var i = 0; i < IFT.length; i++) if (IFT[i][0].test(m[1])) return IFT[i][1] + m[2] + (m[3] || "");
    return null;
  }
  function shortIf(n) { return n.replace("FastEthernet", "Fa").replace("GigabitEthernet", "Gi").replace("Serial", "Se"); }

  /* ---------- tworzenie sieci ---------- */
  function newIf(type) { return { ip: null, mask: null, shut: type === "router", mode: "access", vlan: 1, encap: null, natIn: false, natOut: false, aclIn: null, aclOut: null, desc: "", allowed: null }; }
  function makeDevice(d) {
    var D = JSON.parse(JSON.stringify(d));
    D.hist = D.hist || [];
    if (d.type === "router" || d.type === "switch" || d.type === "isp") {
      D.cfg = D.cfg || { hostname: d.hostname || (d.type === "switch" ? "Switch" : d.type === "isp" ? "ISP" : "Router"), ifs: {}, vlans: { 1: "default" }, routes: [], ospf: null, acls: {}, nat: null, defGw: null, secret: null };
      (d.ifs || []).forEach(function (n) { if (!D.cfg.ifs[n]) D.cfg.ifs[n] = newIf(d.type === "isp" ? "router" : d.type); });
      if (d.type === "switch" && !D.cfg.ifs.Vlan1) { D.cfg.ifs.Vlan1 = newIf("router"); }
      if (d.preset) { Object.keys(d.preset).forEach(function (k) { Object.assign(D.cfg.ifs[k], d.preset[k]); }); }
      D.saved = D.saved === undefined ? null : D.saved;
      D.mode = "user"; D.ctx = null;
    }
    if (d.type === "pc" || d.type === "server") {
      D.nic = D.nic || { mode: d.dhcp ? "dhcp" : "static", ip: d.ip || "", mask: d.mask || "", gw: d.gw || "", dns: d.dns || "", lease: null };
    }
    if (d.type === "server") D.srv = D.srv || { dhcp: { installed: false, scope: null }, users: [], groups: [], shares: [] };
    if (d.type === "homerouter") D.hr = D.hr || { lanIp: "192.168.0.1", lanMask: "255.255.255.0", dhcp: true, ssid: "TP-Router", sec: "WPA2-PSK", enc: "TKIP", key: "admin1234", wifi: true };
    return D;
  }
  ENV.net = {
    create: function (cfg, dump) {
      var N = { cfg: cfg, dev: {}, links: cfg.links };
      cfg.devices.forEach(function (d) { N.dev[d.name] = makeDevice(d); });
      if (dump) Object.keys(dump).forEach(function (k) { if (N.dev[k]) { var keep = { x: N.dev[k].x, y: N.dev[k].y }; N.dev[k] = Object.assign(N.dev[k], dump[k], keep); N.dev[k].mode = N.dev[k].mode || "user"; } });
      N.dump = function () { var o = {}; Object.keys(N.dev).forEach(function (k) { var d = N.dev[k]; o[k] = { cfg: d.cfg, saved: d.saved, nic: d.nic, srv: d.srv, hr: d.hr, hist: (d.hist || []).slice(-200), mode: d.mode, ctx: d.ctx }; }); return o; };
      N.ping = function (from, ip) { return ping(N, from, ip); };
      N.cli = function (dev, line) { return cli(N, N.dev[dev], line); };
      N.pcCmd = function (dev, line) { return pcCmd(N, N.dev[dev], line); };
      N.hostIp = function (d) { return hostIp(N, d); };
      return N;
    }
  };

  /* ---------- warstwa 2: domeny rozgłoszeniowe ---------- */
  function linkOf(N, dev, ifn) { for (var i = 0; i < N.links.length; i++) { var l = N.links[i]; if (l[0] === dev && l[1] === ifn) return { dev: l[2], ifn: l[3] }; if (l[2] === dev && l[3] === ifn) return { dev: l[0], ifn: l[1] }; } return null; }
  function attachments(N, dname, ifn) {
    var D = N.dev[dname];
    if (D.type === "switch") {
      var st = D.cfg.ifs[ifn]; if (!st || st.shut) return [];
      if (st.mode === "trunk") {
        var r = [{ tag: null, key: dname + ":v1" }];
        Object.keys(D.cfg.vlans).forEach(function (v) { v = +v; if (v !== 1 && (!st.allowed || st.allowed.indexOf(v) >= 0)) r.push({ tag: v, key: dname + ":v" + v }); });
        return r;
      }
      return [{ tag: null, key: dname + ":v" + st.vlan }];
    }
    if (D.type === "hub") return [{ tag: null, key: dname + ":hub" }];
    if (D.type === "router" || D.type === "isp") {
      var p = D.cfg.ifs[ifn]; if (!p || p.shut) return [];
      var res = [{ tag: null, key: dname + ":" + ifn }];
      Object.keys(D.cfg.ifs).forEach(function (n) { if (n.indexOf(ifn + ".") === 0) { var s = D.cfg.ifs[n]; if (!s.shut && s.encap) res.push({ tag: s.encap, key: dname + ":" + n }); } });
      return res;
    }
    return [{ tag: null, key: dname + ":" + ifn }];
  }
  function domains(N) {
    var parent = {};
    function f(x) { if (parent[x] === undefined) parent[x] = x; while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    function u(a, b) { parent[f(a)] = f(b); }
    N.links.forEach(function (l) {
      var A = attachments(N, l[0], l[1]), B = attachments(N, l[2], l[3]);
      A.forEach(function (a) { B.forEach(function (b) { if (a.tag === b.tag) u(a.key, b.key); }); });
    });
    // wszystkie VLAN-y w przełączniku oraz port huba to osobne węzły
    return f;
  }

  /* ---------- warstwa 3: interfejsy ---------- */
  function hostIp(N, d) {
    if (d.type === "homerouter") return { ip: d.hr.lanIp, mask: d.hr.lanMask, gw: null };
    var n = d.nic; if (!n) return null;
    if (n.mode === "dhcp") return n.lease ? { ip: n.lease.ip, mask: n.lease.mask, gw: n.lease.gw, dns: n.lease.dns } : null;
    return ip2n(n.ip) !== null && isMask(n.mask) ? { ip: n.ip, mask: n.mask, gw: n.gw, dns: n.dns } : null;
  }
  function l3ifs(N, f) {
    var out = [];
    Object.keys(N.dev).forEach(function (k) {
      var D = N.dev[k];
      if (D.type === "router" || D.type === "isp") {
        Object.keys(D.cfg.ifs).forEach(function (n) {
          var s = D.cfg.ifs[n]; if (!s.ip || s.shut) return;
          var phys = n.split(".")[0], ps = D.cfg.ifs[phys]; if (ps.shut) return;
          if (n.indexOf(".") > 0 && !s.encap) return;
          if (!linkOf(N, k, phys)) return;
          out.push({ dev: k, ifn: n, ip: s.ip, mask: s.mask, dom: f(k + ":" + n) });
        });
      } else if (D.type === "switch") {
        Object.keys(D.cfg.ifs).forEach(function (n) {
          var m = /^Vlan(\d+)$/.exec(n); if (!m) return; var s = D.cfg.ifs[n]; if (!s.ip || s.shut) return;
          out.push({ dev: k, ifn: n, ip: s.ip, mask: s.mask, dom: f(k + ":v" + m[1]), gw: D.cfg.defGw });
        });
      } else if (D.type === "pc" || D.type === "server" || D.type === "homerouter") {
        var h = hostIp(N, D); if (!h) return;
        var port = D.type === "homerouter" ? "lan" : "eth0"; if (!linkOf(N, k, port)) return;
        out.push({ dev: k, ifn: port, ip: h.ip, mask: h.mask, dom: f(k + ":" + port), gw: h.gw, host: true });
      }
    });
    return out;
  }

  /* ---------- routing ---------- */
  function wildMatch(ip, net, wild) { var w = ip2n(wild), a = ip2n(ip), b = ip2n(net); return a !== null && b !== null && w !== null && ((a & ~w) >>> 0) === ((b & ~w) >>> 0); }
  function routerTables(N, f, L3) {
    var T = {};
    Object.keys(N.dev).forEach(function (k) {
      var D = N.dev[k]; if (D.type !== "router" && D.type !== "isp") return;
      var rt = [];
      L3.filter(function (x) { return x.dev === k; }).forEach(function (x) { rt.push({ t: "C", net: netOf(x.ip, x.mask), p: prefix(x.mask), ifn: x.ifn, ad: 0 }); });
      (D.cfg.routes || []).forEach(function (r) {
        var nh = r.nh, ok = rt.some(function (c) { return c.t === "C" && sameNet(nh, n2ip(c.net), n2ip(maskFromPrefix(c.p))); });
        if (ok) rt.push({ t: "S", net: netOf(r.net, r.mask), p: prefix(r.mask), nh: nh, ad: r.ad || 1 });
      });
      T[k] = rt;
    });
    // OSPF
    var routers = Object.keys(N.dev).filter(function (k) { return N.dev[k].type === "router" && N.dev[k].cfg.ospf; });
    var en = {};
    routers.forEach(function (k) {
      var o = N.dev[k].cfg.ospf;
      en[k] = L3.filter(function (x) { return x.dev === k && o.nets.some(function (n) { return wildMatch(x.ip, n.net, n.wild); }); });
    });
    var nb = {};
    routers.forEach(function (a) {
      nb[a] = [];
      routers.forEach(function (b) {
        if (a === b) return;
        en[a].forEach(function (x) { en[b].forEach(function (y) { if (x.dom === y.dom && sameNet(x.ip, y.ip, x.mask) && x.mask === y.mask) nb[a].push({ r: b, nh: y.ip, ifn: x.ifn }); }); });
      });
    });
    N.ospfNb = nb;
    routers.forEach(function (a) {
      var dist = {}, first = {}, q = [a]; dist[a] = 0;
      while (q.length) { var c = q.shift(); nb[c].forEach(function (e) { if (dist[e.r] === undefined) { dist[e.r] = dist[c] + 1; first[e.r] = c === a ? e : first[c]; q.push(e.r); } }); }
      Object.keys(dist).forEach(function (s) {
        if (s === a) return;
        var adv = en[s].map(function (x) { return { net: netOf(x.ip, x.mask), p: prefix(x.mask) }; });
        var o = N.dev[s].cfg.ospf;
        if (o.dio && T[s].some(function (r) { return r.t === "S" && r.p === 0; })) adv.push({ net: 0, p: 0, e2: true });
        adv.forEach(function (pfx) {
          if (T[a].some(function (r) { return r.t === "C" && r.net === pfx.net && r.p === pfx.p; })) return;
          var ex = T[a].filter(function (r) { return r.t === "O" && r.net === pfx.net && r.p === pfx.p; })[0];
          if (ex && ex.cost <= dist[s]) return;
          if (ex) T[a].splice(T[a].indexOf(ex), 1);
          T[a].push({ t: "O", net: pfx.net, p: pfx.p, nh: first[s].nh, ad: 110, cost: dist[s], e2: pfx.e2 });
        });
      });
    });
    return T;
  }
  function lookup(rt, ip) {
    var n = ip2n(ip), best = null;
    rt.forEach(function (r) {
      if (((n & maskFromPrefix(r.p)) >>> 0) !== r.net) return;
      if (!best || r.p > best.p || (r.p === best.p && r.ad < best.ad)) best = r;
    });
    return best;
  }
  function natMatch(N, D, ip) {
    var nat = D.cfg.nat; if (!nat || !nat.list) return false;
    var acl = D.cfg.acls[nat.list]; if (!acl) return false;
    for (var i = 0; i < acl.length; i++) {
      var r = acl[i], m = /^(permit|deny)\s+(?:ip\s+)?(any|host\s+\S+|\S+(?:\s+\S+)?)/i.exec(r); if (!m) continue;
      var src = m[2].trim(), hit;
      if (/^any$/i.test(src)) hit = true;
      else if (/^host\s+/i.test(src)) hit = src.split(/\s+/)[1] === ip;
      else { var p = src.split(/\s+/); hit = p.length > 1 ? wildMatch(ip, p[0], p[1]) : p[0] === ip; }
      if (hit) return /^permit/i.test(m[1]);
    }
    return false;
  }

  function send(N, ctx, fromDev, srcIp, dstIp) {
    var f = ctx.f, L3 = ctx.L3, T = ctx.T, cur = fromDev, ingress = null, hops = [], nat = null;
    for (var ttl = 0; ttl < 16; ttl++) {
      var mine = L3.filter(function (x) { return x.dev === cur; });
      if (mine.some(function (x) { return x.ip === dstIp; })) return { ok: true, hops: hops, nat: nat, src: srcIp };
      var D = N.dev[cur], egress = null, nextIp = null;
      if (D.type === "router" || D.type === "isp") {
        var r = lookup(T[cur] || [], dstIp);
        if (!r) return { ok: false, why: cur + ": brak trasy do sieci docelowej " + dstIp, hops: hops };
        if (r.t === "C") { egress = mine.filter(function (x) { return x.ifn === r.ifn; })[0]; nextIp = dstIp; }
        else { nextIp = r.nh; egress = mine.filter(function (x) { return sameNet(x.ip, r.nh, x.mask); })[0]; }
        if (!egress) return { ok: false, why: cur + ": interfejs wyjściowy niedostępny", hops: hops };
        if (ingress && D.cfg.ifs[ingress.ifn] && D.cfg.ifs[ingress.ifn].natIn && D.cfg.ifs[egress.ifn].natOut && natMatch(N, D, srcIp)) {
          nat = { dev: cur, inside: srcIp, outside: egress.ip }; srcIp = egress.ip;
        }
      } else {
        egress = mine[0];
        if (!egress) return { ok: false, why: cur + ": brak skonfigurowanego adresu IP", hops: hops };
        if (sameNet(egress.ip, dstIp, egress.mask)) nextIp = dstIp;
        else {
          if (!egress.gw || ip2n(egress.gw) === null) return { ok: false, why: cur + ": brak bramy domyślnej (adres poza siecią lokalną)", hops: hops };
          if (!sameNet(egress.ip, egress.gw, egress.mask)) return { ok: false, why: cur + ": brama domyślna spoza podsieci", hops: hops };
          nextIp = egress.gw;
        }
      }
      var tgt = L3.filter(function (x) { return x.ip === nextIp && x.dom === egress.dom; })[0];
      if (!tgt) return { ok: false, why: cur + ": brak odpowiedzi ARP od " + nextIp + " (inny segment / VLAN, wyłączony port lub zły adres)", hops: hops };
      hops.push(nextIp); ingress = tgt; cur = tgt.dev;
    }
    return { ok: false, why: "Przekroczono TTL - pętla routingu", hops: hops };
  }
  function context(N) { var f = domains(N), L3 = l3ifs(N, f); return { f: f, L3: L3, T: routerTables(N, f, L3) }; }
  function ping(N, fromDev, dstIp) {
    var ctx = context(N), me = ctx.L3.filter(function (x) { return x.dev === fromDev; })[0];
    if (ip2n(dstIp) === null) return { ok: false, why: "Nieprawidłowy adres" };
    if (!me) return { ok: false, why: fromDev + ": brak adresu IP lub urządzenie niepodłączone" };
    var there = send(N, ctx, fromDev, me.ip, dstIp);
    if (!there.ok) return there;
    var dstDev = ctx.L3.filter(function (x) { return x.ip === dstIp; })[0].dev;
    if (there.nat) {
      var b1 = send(N, ctx, dstDev, dstIp, there.nat.outside); if (!b1.ok) return { ok: false, why: "Brak odpowiedzi: " + b1.why };
      var b2 = send(N, ctx, there.nat.dev, there.nat.outside, there.nat.inside); if (!b2.ok) return { ok: false, why: "Brak odpowiedzi: " + b2.why };
      N.natTx = N.natTx || []; N.natTx.push(there.nat);
      return { ok: true, hops: there.hops, nat: there.nat };
    }
    var back = send(N, ctx, dstDev, dstIp, there.src);
    if (!back.ok) return { ok: false, why: "Brak odpowiedzi zwrotnej: " + back.why };
    return { ok: true, hops: there.hops };
  }

  /* ---------- DHCP ---------- */
  function dhcpRequest(N, D) {
    var ctx = context(N), f = ctx.f, myDom = f(D.name + ":eth0");
    var offer = null;
    Object.keys(N.dev).forEach(function (k) {
      if (offer) return; var S = N.dev[k];
      if (S.type === "homerouter" && S.hr.dhcp && linkOf(N, k, "lan") && f(k + ":lan") === myDom) {
        var base = netOf(S.hr.lanIp, S.hr.lanMask);
        offer = { ip: n2ip(base + 100), mask: S.hr.lanMask, gw: S.hr.lanIp, dns: S.hr.lanIp, from: "router " + k };
      }
    });
    if (!offer) Object.keys(N.dev).forEach(function (k) {
      if (offer) return; var S = N.dev[k];
      if (S.type !== "server" || !S.srv.dhcp.installed || !S.srv.dhcp.scope || !S.srv.dhcp.scope.active) return;
      var sIp = hostIp(N, S); if (!sIp || f(k + ":eth0") !== myDom) return;
      var sc = S.srv.dhcp.scope;
      if (!sameNet(sc.start, sIp.ip, sc.mask)) return;
      var mac = D.mac.replace(/[^0-9a-f]/gi, "").toLowerCase();
      var res = (sc.res || []).filter(function (r) { return r.mac.replace(/[^0-9a-f]/gi, "").toLowerCase() === mac; })[0];
      var ip = res ? res.ip : sc.start;
      offer = { ip: ip, mask: sc.mask, gw: sc.opt003 || "", dns: sc.opt006 || "", from: "serwer " + k };
    });
    D.nic.lease = offer || { ip: "169.254." + (D.mac.charCodeAt(D.mac.length - 1) % 200 + 20) + ".17", mask: "255.255.0.0", gw: "", dns: "", from: "APIPA (brak odpowiedzi serwera DHCP)" };
    return D.nic.lease;
  }
  ENV.net.dhcpRequest = dhcpRequest;

  /* ---------- wiersz poleceń komputera ---------- */
  function pcCmd(N, D, line) {
    var t = line.trim(), lo = t.toLowerCase(), h;
    if (!t) return "";
    if (/^ipconfig\s*(\/all)?$/i.test(t)) {
      h = hostIp(N, D); var all = /\/all/i.test(t);
      var s = "Karta Ethernet Ethernet0:\n\n";
      if (all) s += "   Opis . . . . . . . . . . . . . . : Intel(R) Ethernet Connection\n   Adres fizyczny. . . . . . . . . . : " + D.mac.toUpperCase().replace(/:/g, "-") + "\n   DHCP włączone . . . . . . . . . . : " + (D.nic.mode === "dhcp" ? "Tak" : "Nie") + "\n";
      if (!h || !linkOf(N, D.name, "eth0")) return s + "   Stan nośnika . . . . . . . . . . : Nośnik odłączony lub brak adresu\n";
      s += "   Adres IPv4. . . . . . . . . . . . : " + h.ip + "\n   Maska podsieci. . . . . . . . . . : " + h.mask + "\n   Brama domyślna. . . . . . . . . . : " + (h.gw || "") + "\n";
      if (all) { s += "   Serwery DNS . . . . . . . . . . . : " + (h.dns || "") + "\n"; if (D.nic.mode === "dhcp" && D.nic.lease) s += "   Serwer DHCP . . . . . . . . . . . : " + D.nic.lease.from + "\n"; }
      return s;
    }
    if (/^ipconfig\s+\/renew$/i.test(t)) { if (D.nic.mode !== "dhcp") return "Karta ma statyczny adres IP - odnowienie dzierżawy DHCP nie dotyczy tej karty."; var l = dhcpRequest(N, D); return "Odnowiono dzierżawę.\n   Adres IPv4 . . . : " + l.ip + "\n   Źródło . . . . . : " + l.from; }
    if (/^ipconfig\s+\/release$/i.test(t)) { if (D.nic.mode === "dhcp") D.nic.lease = null; return "Zwolniono dzierżawę adresu."; }
    var m;
    if ((m = /^ping\s+(?:-t\s+)?(\S+)$/i.exec(t))) {
      var r = N.ping(D.name, m[1]);
      if (r.ok) return "Badanie " + m[1] + " z 32 bajtami danych:\n" + [1, 2, 3, 4].map(function () { return "Odpowiedź z " + m[1] + ": bajtów=32 czas<1ms TTL=" + (128 - r.hops.length + 1); }).join("\n") + "\n\nStatystyka badania ping: Wysłane = 4, Odebrane = 4, Utracone = 0 (0% straty)";
      return "Badanie " + m[1] + " z 32 bajtami danych:\nUpłynął limit czasu żądania.\nUpłynął limit czasu żądania.\nUpłynął limit czasu żądania.\nUpłynął limit czasu żądania.\n\nStatystyka badania ping: Wysłane = 4, Odebrane = 0, Utracone = 4 (100% straty)\n[symulator] przyczyna: " + r.why;
    }
    if ((m = /^tracert\s+(\S+)$/i.exec(t))) {
      var r2 = N.ping(D.name, m[1]);
      return "Śledzenie trasy do " + m[1] + ":\n" + (r2.hops || []).map(function (x, i) { return "  " + (i + 1) + "    <1 ms    <1 ms    <1 ms  " + x; }).join("\n") + (r2.ok ? "\n\nŚledzenie zakończone." : "\n  *        *        *     Upłynął limit czasu żądania.\n[symulator] " + r2.why);
    }
    if (/^(cls|clear)$/i.test(t)) return "\f";
    if (/^(help|\?)$/i.test(t)) return "Dostępne polecenia: ipconfig, ipconfig /all, ipconfig /renew, ipconfig /release, ping <adres>, tracert <adres>, cls";
    return "'" + t.split(" ")[0] + "' nie jest rozpoznawane jako polecenie wewnętrzne lub zewnętrzne.";
  }

  /* ---------- Cisco IOS ---------- */
  function prompt(D) {
    var h = D.cfg.hostname;
    if (D.mode === "if") return h + (D.ctx && D.ctx.length > 1 ? "(config-if-range)#" : D.ctx && String(D.ctx[0]).indexOf(".") > 0 ? "(config-subif)#" : "(config-if)#");
    return { user: h + ">", priv: h + "#", config: h + "(config)#", vlan: h + "(config-vlan)#", router: h + "(config-router)#" }[D.mode];
  }
  ENV.net.prompt = prompt;
  function pm(tok, word) { return tok && word.toLowerCase().indexOf(tok.toLowerCase()) === 0; }
  // dopasowanie wzorca: słowa kluczowe (prefiksy), <x> - parametr, ... - reszta
  function match(toks, pat) {
    var out = [];
    for (var i = 0; i < pat.length; i++) {
      var p = pat[i];
      if (p === "...") { out.push(toks.slice(i).join(" ")); return out; }
      var t = toks[i];
      if (t === undefined) return null;
      if (!Array.isArray(p) && p.charAt(0) === "<") { out.push(t); continue; }
      if (Array.isArray(p)) { var hit = p.filter(function (w) { return pm(t, w); }); if (hit.length !== 1) return null; out.push(hit[0]); continue; }
      if (!pm(t, p)) return null;
    }
    return toks.length === pat.length ? out : null;
  }
  function expandRange(D, s) {
    // np. "fa0/1 - 4", "fa0/1-4", "fa0/1 - 4 , fa0/6"
    var parts = s.split(","), out = [];
    for (var i = 0; i < parts.length; i++) {
      var m = /^\s*([a-z]+)\s*(\d+\/)(\d+)\s*(?:-\s*(\d+))?\s*$/i.exec(parts[i]); if (!m) return null;
      var a = +m[3], b = m[4] ? +m[4] : a;
      for (var k = a; k <= b; k++) { var n = normIf(m[1] + m[2] + k); if (!n || !D.cfg.ifs[n]) return null; out.push(n); }
    }
    return out;
  }
  function vlanList(s) { var o = []; s.split(",").forEach(function (p) { var m = /^(\d+)(?:-(\d+))?$/.exec(p.trim()); if (m) for (var v = +m[1]; v <= +(m[2] || m[1]); v++) o.push(v); }); return o; }

  function runningConfig(D) {
    var c = D.cfg, s = "Building configuration...\n\nCurrent configuration:\n!\nhostname " + c.hostname + "\n!\n";
    if (c.secret) s += "enable secret 5 $1$mERr$hx5rVt7rPNoS4wqbXKX7m0\n!\n";
    if (D.type === "switch") Object.keys(c.vlans).forEach(function (v) { if (+v !== 1) s += "vlan " + v + "\n name " + c.vlans[v] + "\n!\n"; });
    Object.keys(c.ifs).forEach(function (n) {
      var i = c.ifs[n]; s += "interface " + n + "\n";
      if (i.desc) s += " description " + i.desc + "\n";
      if (i.encap) s += " encapsulation dot1Q " + i.encap + "\n";
      if (D.type === "switch" && n.indexOf("Vlan") !== 0) {
        if (i.mode === "trunk") s += " switchport mode trunk\n" + (i.allowed ? " switchport trunk allowed vlan " + i.allowed.join(",") + "\n" : "");
        else { if (i.vlan !== 1) s += " switchport access vlan " + i.vlan + "\n"; if (i.modeSet) s += " switchport mode access\n"; }
      }
      s += i.ip ? " ip address " + i.ip + " " + i.mask + "\n" : (D.type === "router" || n.indexOf("Vlan") === 0 ? " no ip address\n" : "");
      if (i.natIn) s += " ip nat inside\n"; if (i.natOut) s += " ip nat outside\n";
      if (i.aclIn) s += " ip access-group " + i.aclIn + " in\n"; if (i.aclOut) s += " ip access-group " + i.aclOut + " out\n";
      if (i.shut) s += " shutdown\n";
      s += "!\n";
    });
    if (c.ospf) { s += "router ospf " + c.ospf.pid + "\n"; c.ospf.nets.forEach(function (n) { s += " network " + n.net + " " + n.wild + " area " + n.area + "\n"; }); if (c.ospf.dio) s += " default-information originate\n"; s += "!\n"; }
    if (c.defGw) s += "ip default-gateway " + c.defGw + "\n";
    if (c.nat && c.nat.list) s += "ip nat inside source list " + c.nat.list + " interface " + c.nat.ifn + (c.nat.overload ? " overload" : "") + "\n";
    c.routes.forEach(function (r) { s += "ip route " + r.net + " " + r.mask + " " + r.nh + (r.ad && r.ad !== 1 ? " " + r.ad : "") + "\n"; });
    Object.keys(c.acls).forEach(function (n) { c.acls[n].forEach(function (r) { s += "access-list " + n + " " + r + "\n"; }); });
    return s + "!\nend";
  }
  function ifStatus(N, D, n) {
    var i = D.cfg.ifs[n], phys = n.split(".")[0];
    if (i.shut || D.cfg.ifs[phys].shut) return ["administratively down", "down"];
    if (/^Vlan/.test(n)) return ["up", "up"];
    var l = linkOf(N, D.name, phys); if (!l) return ["down", "down"];
    var o = N.dev[l.dev];
    if ((o.type === "switch" || o.type === "router") && o.cfg.ifs[l.ifn] && o.cfg.ifs[l.ifn].shut) return ["down", "down"];
    return ["up", "up"];
  }
  function show(N, D, rest) {
    var t = rest.trim().split(/\s+/), m;
    if (match(t, ["running-config"])) return runningConfig(D);
    if (match(t, ["startup-config"])) return D.saved ? runningConfig({ cfg: D.saved, type: D.type }).replace("Current configuration", "Startup configuration") : "startup-config is not present";
    if (match(t, ["ip", "interface", "brief"])) {
      var s = pad("Interface", 24) + pad("IP-Address", 16) + "OK? Method " + pad("Status", 22) + "Protocol\n";
      Object.keys(D.cfg.ifs).forEach(function (n) { var i = D.cfg.ifs[n], st = ifStatus(N, D, n); s += pad(n, 24) + pad(i.ip || "unassigned", 16) + "YES " + pad(i.ip ? "manual" : "unset", 7) + pad(st[0], 22) + st[1] + "\n"; });
      return s;
    }
    if (D.type === "switch" && (match(t, ["vlan", "brief"]) || match(t, ["vlan"]))) {
      var s2 = pad("VLAN", 5) + pad("Name", 33) + pad("Status", 10) + "Ports\n" + "---- -------------------------------- --------- -------------------------------\n";
      Object.keys(D.cfg.vlans).forEach(function (v) {
        var ports = Object.keys(D.cfg.ifs).filter(function (n) { var i = D.cfg.ifs[n]; return n.indexOf("Vlan") !== 0 && i.mode !== "trunk" && i.vlan === +v; }).map(shortIf);
        var lines = []; for (var k = 0; k < ports.length; k += 4) lines.push(ports.slice(k, k + 4).join(", "));
        s2 += pad(v, 5) + pad(D.cfg.vlans[v], 33) + pad("active", 10) + (lines[0] || "") + "\n";
        lines.slice(1).forEach(function (l) { s2 += pad("", 48) + l + "\n"; });
      });
      return s2;
    }
    if (D.type === "switch" && match(t, ["interfaces", "trunk"])) {
      var tr = Object.keys(D.cfg.ifs).filter(function (n) { return D.cfg.ifs[n].mode === "trunk"; });
      if (!tr.length) return "";
      return pad("Port", 12) + pad("Mode", 12) + pad("Encapsulation", 15) + pad("Status", 12) + "Native vlan\n" + tr.map(function (n) { return pad(shortIf(n), 12) + pad("on", 12) + pad("802.1q", 15) + pad(ifStatus(N, D, n)[0] === "up" ? "trunking" : "not-trunking", 12) + "1"; }).join("\n") +
        "\n\nPort        Vlans allowed on trunk\n" + tr.map(function (n) { return pad(shortIf(n), 12) + (D.cfg.ifs[n].allowed ? D.cfg.ifs[n].allowed.join(",") : "1-4094"); }).join("\n");
    }
    if (D.type !== "switch" && match(t, ["ip", "route"])) {
      var ctx = context(N), rt = ctx.T[D.name] || [];
      var s3 = "Codes: C - connected, S - static, O - OSPF, E2 - OSPF external type 2, * - candidate default\n\nGateway of last resort is " + ((lookup(rt, "0.0.0.0") || {}).p === 0 ? (lookup(rt, "0.0.0.0").nh || "") + " to network 0.0.0.0" : "not set") + "\n\n";
      rt.slice().sort(function (a, b) { return a.net - b.net || a.p - b.p; }).forEach(function (r) {
        var code = r.t === "O" && r.e2 ? "O*E2" : r.t === "S" && r.p === 0 ? "S*" : r.t;
        s3 += pad(code, 6) + n2ip(r.net) + "/" + r.p + (r.t === "C" ? " is directly connected, " + r.ifn : " [" + r.ad + "/" + (r.cost || 0) + "] via " + r.nh) + "\n";
      });
      return s3;
    }
    if (match(t, ["ip", "ospf", "neighbor"])) {
      context(N); var nb = (N.ospfNb || {})[D.name] || [];
      return "Neighbor ID     Pri   State           Dead Time   Address         Interface\n" + nb.map(function (e) { return pad(e.nh, 16) + pad("1", 6) + pad("FULL/DR", 16) + pad("00:00:36", 12) + pad(e.nh, 16) + e.ifn; }).join("\n");
    }
    if (match(t, ["access-lists"])) return Object.keys(D.cfg.acls).map(function (n) { return (+n >= 100 ? "Extended" : "Standard") + " IP access list " + n + "\n" + D.cfg.acls[n].map(function (r, i) { return "    " + ((i + 1) * 10) + " " + r; }).join("\n"); }).join("\n");
    if (match(t, ["ip", "nat", "translations"])) {
      var tx = (N.natTx || []).filter(function (x) { return x.dev === D.name; });
      return "Pro Inside global      Inside local       Outside local      Outside global\n" + tx.map(function (x, i) { return "icmp " + pad(x.outside + ":" + (i + 1), 19) + pad(x.inside + ":" + (i + 1), 19); }).join("\n");
    }
    if (match(t, ["version"])) return "Cisco IOS Software, Version 15.x (symulator Zdam Zawodowy)\n" + D.cfg.hostname + " uptime is 1 hour";
    if (match(t, ["mac", "address-table"]) && D.type === "switch") return "          Mac Address Table\n-------------------------------------------\nVlan    Mac Address       Type        Ports\n(tablica uzupełnia się po wymianie ruchu - użyj ping z komputerów)";
    return "% Invalid input detected at '^' marker.";
  }
  function pad(s, n) { s = String(s); while (s.length < n) s += " "; return s + (s.length > n ? " " : ""); }

  var HELP = {
    user: "enable, ping <adres>, show ..., exit",
    priv: "configure terminal, show running-config, show ip interface brief, show vlan brief, show ip route, show interfaces trunk, show ip ospf neighbor, show access-lists, show ip nat translations, copy running-config startup-config, write memory, ping <adres>, reload, disable, exit",
    config: "hostname <nazwa>, interface <nazwa>, interface range <zakres>, vlan <nr>, ip route <sieć> <maska> <next-hop>, ip default-gateway <adres>, router ospf <proces>, access-list <nr> ..., ip nat inside source list <nr> interface <nazwa> overload, enable secret <hasło>, no ..., do <polecenie>, end, exit",
    if: "ip address <adres> <maska>, no ip address, shutdown, no shutdown, switchport mode access|trunk, switchport access vlan <nr>, switchport trunk allowed vlan <lista>, encapsulation dot1Q <nr>, ip nat inside|outside, ip access-group <nr> in|out, description <tekst>, exit, end",
    vlan: "name <nazwa>, exit, end",
    router: "network <adres> <maska-wildcard> area <obszar>, default-information originate, exit, end"
  };

  function cli(N, D, line) {
    var raw = line.trim(); if (!raw) return "";
    if (raw === "?" || /\s\?$/.test(raw)) return "Dostępne polecenia w tym trybie: " + HELP[D.mode];
    var toks = raw.split(/\s+/), c = D.cfg, p;
    if (D.mode !== "user" && D.mode !== "priv" && pm(toks[0], "do") && toks.length > 1) { var sv = D.mode, sc = D.ctx; D.mode = "priv"; var r0 = cli(N, D, toks.slice(1).join(" ")); D.mode = sv; D.ctx = sc; return r0; }
    if (D.mode === "user") {
      if (match(toks, ["enable"])) { D.mode = "priv"; return ""; }
      if ((p = match(toks, ["show", "..."]))) return show(N, D, p[0]);
      if ((p = match(toks, ["ping", "<ip>"]))) return iosPing(N, D, p[0]);
      if (match(toks, [["exit", "logout"]])) return "";
      return bad(raw);
    }
    if (D.mode === "priv") {
      if (match(toks, ["configure", "terminal"]) || match(toks, ["configure"])) { D.mode = "config"; return "Enter configuration commands, one per line.  End with CNTL/Z."; }
      if ((p = match(toks, ["show", "..."]))) return show(N, D, p[0]);
      if (match(toks, ["copy", "running-config", "startup-config"]) || match(toks, ["write", "memory"]) || match(toks, ["write"])) { D.saved = JSON.parse(JSON.stringify(c)); return "Destination filename [startup-config]?\nBuilding configuration...\n[OK]"; }
      if (match(toks, ["erase", "startup-config"])) { D.saved = null; return "[OK]\nErase of nvram: complete"; }
      if (match(toks, ["reload"])) { if (D.saved) D.cfg = JSON.parse(JSON.stringify(D.saved)); else { var fresh = makeDevice(N.cfg.devices.filter(function (x) { return x.name === D.name; })[0]); D.cfg = fresh.cfg; } D.mode = "user"; return "Proceed with reload? [confirm]\n\n*** System restarted - wczytano startup-config ***"; }
      if ((p = match(toks, ["ping", "<ip>"]))) return iosPing(N, D, p[0]);
      if (match(toks, ["disable"])) { D.mode = "user"; return ""; }
      if (match(toks, [["exit", "logout"]])) { D.mode = "user"; return ""; }
      return bad(raw);
    }
    if (match(toks, ["end"])) { D.mode = "priv"; D.ctx = null; return ""; }
    if (match(toks, ["exit"])) { if (D.mode === "config") { D.mode = "priv"; return ""; } D.mode = "config"; D.ctx = null; return ""; }
    var neg = pm(toks[0], "no") && toks[0].length >= 2 ? true : false, tt = neg ? toks.slice(1) : toks;
    // polecenia trybu konfiguracji globalnej dostępne też z podtrybów (jak w IOS)
    if ((p = match(tt, ["interface", "range", "..."]))) {
      var list = expandRange(D, p[0]); if (!list) return "% Invalid interface range";
      D.mode = "if"; D.ctx = list; return "";
    }
    if ((p = match(tt, ["interface", "..."]))) {
      var n = normIf(p[0]);
      if (!n) return "% Invalid input detected at '^' marker.";
      var phys = n.split(".")[0];
      if (!c.ifs[phys] && !/^Vlan\d+$/.test(n)) return "% Invalid interface " + n;
      if (/^Vlan\d+$/.test(n) && D.type !== "switch") return "% Invalid interface " + n;
      if (n.indexOf(".") > 0 && D.type !== "router") return "% Subinterfaces are not supported";
      if (!c.ifs[n]) c.ifs[n] = newIf(n.indexOf(".") > 0 ? "switch" : "router");
      if (n.indexOf(".") > 0) c.ifs[n].shut = false;
      D.mode = "if"; D.ctx = [n]; return "";
    }
    if (D.mode === "config" || D.mode === "vlan" || D.mode === "router") {
      if ((p = match(tt, ["hostname", "<n>"]))) { c.hostname = p[0]; D.mode = "config"; return ""; }
      if (D.type === "switch" && (p = match(tt, ["vlan", "<n>"]))) {
        var vl = vlanList(p[0]); if (!vl.length) return "% Bad VLAN list";
        if (neg) { vl.forEach(function (v) { if (v !== 1) delete c.vlans[v]; }); return ""; }
        vl.forEach(function (v) { if (!c.vlans[v]) c.vlans[v] = "VLAN" + ("000" + v).slice(-4); }); D.mode = "vlan"; D.ctx = vl; return "";
      }
      if ((p = match(tt, ["ip", "route", "<n>", "<m>", "<h>", "..."])) || (p = match(tt, ["ip", "route", "<n>", "<m>", "<h>"]))) {
        if (ip2n(p[0]) === null || !isMask(p[1])) return "% Inconsistent address and mask";
        var nh = p[2], ad = p[3] ? +p[3] : 1;
        if (ip2n(nh) === null) { var exI = normIf(nh); if (!exI) return "% Invalid next hop"; }
        if (neg) { c.routes = c.routes.filter(function (r) { return !(r.net === p[0] && r.mask === p[1]); }); return ""; }
        c.routes.push({ net: n2ip(netOf(p[0], p[1])), mask: p[1], nh: nh, ad: ad }); D.mode = "config"; return "";
      }
      if ((p = match(tt, ["ip", "default-gateway", "<ip>"]))) { c.defGw = neg ? null : p[0]; D.mode = "config"; return ""; }
      if (D.type === "router" && (p = match(tt, ["router", "ospf", "<n>"]))) {
        if (neg) { c.ospf = null; return ""; }
        if (!c.ospf) c.ospf = { pid: +p[0], nets: [], dio: false }; D.mode = "router"; return "";
      }
      if (D.type === "router" && (p = match(tt, ["access-list", "<n>", "..."]))) {
        if (neg) { delete c.acls[p[0]]; return ""; }
        var body = p[1]; if (!/^(permit|deny)\b/i.test(body)) return "% Invalid input detected at '^' marker.";
        var nr = +p[0]; if (!(nr >= 1 && nr <= 199)) return "% Invalid access list number";
        if (nr < 100 && /^(permit|deny)\s+(tcp|udp|icmp|ip)\b/i.test(body)) return "% Standardowa lista (1-99) filtruje tylko adres źródłowy";
        (c.acls[p[0]] = c.acls[p[0]] || []).push(body.replace(/\s+/g, " ").toLowerCase()); D.mode = "config"; return "";
      }
      if (D.type === "router" && (p = match(tt, ["ip", "nat", "inside", "source", "list", "<n>", "interface", "<i>", "overload"])) || D.type === "router" && (p = match(tt, ["ip", "nat", "inside", "source", "list", "<n>", "interface", "<i>"]))) {
        if (neg) { c.nat = null; return ""; }
        var ni = normIf(p[1]); if (!ni || !c.ifs[ni]) return "% Invalid interface";
        c.nat = { list: p[0], ifn: ni, overload: /overload/i.test(raw) }; D.mode = "config"; return "";
      }
      if ((p = match(tt, ["enable", "secret", "<s>"])) || (p = match(tt, ["enable", "password", "<s>"]))) { c.secret = neg ? null : p[0]; return ""; }
      if (match(tt, ["service", "..."]) || match(tt, ["banner", "..."]) || match(tt, ["line", "..."]) || match(tt, ["no", "ip", "domain-lookup"]) || match(tt, ["ip", "domain-lookup"])) return "";
    }
    if (D.mode === "vlan") {
      if ((p = match(tt, ["name", "<n>"]))) { D.ctx.forEach(function (v) { c.vlans[v] = p[0]; }); return ""; }
      return bad(raw);
    }
    if (D.mode === "router") {
      if ((p = match(tt, ["network", "<n>", "<w>", "area", "<a>"]))) {
        if (ip2n(p[0]) === null || ip2n(p[1]) === null) return "% Invalid input detected at '^' marker.";
        if (isMask(p[1]) && p[1] !== "0.0.0.0" && p[1].indexOf("255") === 0) return "% Podano maskę zamiast maski odwrotnej (wildcard) - np. 0.0.0.255";
        if (neg) { c.ospf.nets = c.ospf.nets.filter(function (x) { return !(x.net === p[0] && x.wild === p[1]); }); return ""; }
        c.ospf.nets.push({ net: p[0], wild: p[1], area: p[2] }); return "";
      }
      if (match(tt, ["default-information", "originate"])) { c.ospf.dio = !neg; return ""; }
      if (match(tt, ["router-id", "<ip>"]) || match(tt, ["passive-interface", "..."])) return "";
      return bad(raw);
    }
    if (D.mode === "if") {
      var I = D.ctx.map(function (n) { return c.ifs[n]; }), sw = D.type === "switch";
      if (match(tt, ["shutdown"])) { I.forEach(function (i) { i.shut = !neg; }); return neg ? D.ctx.map(function (n) { return "%LINK-5-CHANGED: Interface " + n + ", changed state to up"; }).join("\n") : ""; }
      if ((p = match(tt, ["ip", "address", "<ip>", "<m>"]))) {
        if (sw && D.ctx[0].indexOf("Vlan") !== 0) return "% IP addresses may not be configured on L2 links.";
        if (ip2n(p[0]) === null || !isMask(p[1])) return "% Invalid input detected at '^' marker.";
        var nn = netOf(p[0], p[1]), bc = (nn | (~ip2n(p[1]) >>> 0)) >>> 0;
        if ((ip2n(p[0]) === nn || ip2n(p[0]) === bc) && prefix(p[1]) < 31) return "% Bad mask /" + prefix(p[1]) + " for address " + p[0];
        I.forEach(function (i) { i.ip = p[0]; i.mask = p[1]; }); return "";
      }
      if (neg && match(tt, ["ip", "address"])) { I.forEach(function (i) { i.ip = null; i.mask = null; }); return ""; }
      if (sw && (p = match(tt, ["switchport", "mode", ["access", "trunk"]]))) { I.forEach(function (i) { i.mode = p[0]; i.modeSet = p[0] === "access"; }); return ""; }
      if (sw && (p = match(tt, ["switchport", "access", "vlan", "<v>"]))) {
        var v = +p[0]; if (!(v >= 1 && v <= 4094)) return "% Bad VLAN"; var msg = "";
        if (!c.vlans[v]) { c.vlans[v] = "VLAN" + ("000" + v).slice(-4); msg = "% Access VLAN does not exist. Creating vlan " + v; }
        I.forEach(function (i) { i.vlan = neg ? 1 : v; }); return msg;
      }
      if (sw && (p = match(tt, ["switchport", "trunk", "allowed", "vlan", "<l>"]))) { I.forEach(function (i) { i.allowed = vlanList(p[0].replace(/^add\s*/, "")); }); return ""; }
      if (sw && match(tt, ["switchport", "trunk", "native", "vlan", "<v>"])) return "";
      if (sw && match(tt, ["switchport", "trunk", "encapsulation", "dot1q"])) return "";
      if (sw && match(tt, ["switchport", "nonegotiate"])) return "";
      if (sw && match(tt, ["switchport", "port-security", "..."])) { I.forEach(function (i) { i.portSec = true; }); return ""; }
      if ((p = match(tt, ["encapsulation", "dot1q", "<v>"])) || (p = match(tt, ["encapsulation", "dot1Q", "<v>"]))) {
        if (D.ctx[0].indexOf(".") < 0) return "% Configuring IEEE 802.1Q encapsulation on the main interface is not allowed";
        I.forEach(function (i) { i.encap = +p[0]; }); return "";
      }
      if ((p = match(tt, ["ip", "nat", ["inside", "outside"]]))) { I.forEach(function (i) { if (p[0] === "inside") i.natIn = !neg; else i.natOut = !neg; }); return ""; }
      if ((p = match(tt, ["ip", "access-group", "<n>", ["in", "out"]]))) { I.forEach(function (i) { if (p[1] === "in") i.aclIn = neg ? null : p[0]; else i.aclOut = neg ? null : p[0]; }); return ""; }
      if ((p = match(tt, ["description", "..."]))) { I.forEach(function (i) { i.desc = neg ? "" : p[0]; }); return ""; }
      if (match(tt, ["speed", "..."]) || match(tt, ["duplex", "..."]) || match(tt, ["clock", "rate", "<r>"]) || match(tt, ["no", "cdp", "enable"])) return "";
      return globalFallback(N, D, raw);
    }
    return bad(raw);
  }
  // jak w IOS: polecenie konfiguracji globalnej wpisane w podtrybie przenosi do trybu (config)
  function globalFallback(N, D, raw) {
    var m = D.mode, x = D.ctx;
    D.mode = "config"; D.ctx = null;
    var r = cli(N, D, raw);
    if (/^% Invalid input/.test(r) && D.mode === "config") { D.mode = m; D.ctx = x; }
    return r;
  }
  function bad(raw) { return "% Invalid input detected at '^' marker.\n  (" + raw + ")  - wpisz ? aby zobaczyć polecenia dostępne w tym trybie"; }
  function iosPing(N, D, ip) {
    var r = N.ping(D.name, ip);
    return "Type escape sequence to abort.\nSending 5, 100-byte ICMP Echos to " + ip + ", timeout is 2 seconds:\n" + (r.ok ? "!!!!!\nSuccess rate is 100 percent (5/5)" : ".....\nSuccess rate is 0 percent (0/5)\n[symulator] " + r.why);
  }

  /* ---------- interfejs aplikacji ---------- */
  var ICON = { router: "R", switch: "SW", pc: "PC", server: "SRV", homerouter: "AP", isp: "ISP", hub: "HUB" };
  ENV.apps.net = {
    title: "Sieć - urządzenia", icon: "NET",
    mount: function (E, box) {
      var N = E.net, sel = E.netSel || Object.keys(N.dev)[0];
      box.innerHTML = '<div class="netg"><div class="eside"><div class="h">Schemat sieci</div><div id="ntopo" style="padding:6px"></div><div id="ndev"></div></div><div id="npanel" style="min-height:0;min-width:0;display:grid"></div></div>';
      function topo() {
        var W = 280, H = 210, devs = Object.keys(N.dev);
        var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:100%;height:auto">';
        N.links.forEach(function (l) { var a = N.dev[l[0]], b = N.dev[l[2]]; s += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" stroke="var(--muted)" stroke-width="1.5"/>'; });
        devs.forEach(function (k) {
          var d = N.dev[k], on = k === sel;
          s += '<g data-d="' + esc(k) + '" style="cursor:pointer"><rect x="' + (d.x - 24) + '" y="' + (d.y - 13) + '" width="48" height="26" rx="5" fill="' + (on ? "var(--pen)" : "var(--card)") + '" stroke="var(--pen)" stroke-width="1.5"/><text x="' + d.x + '" y="' + (d.y + 4) + '" text-anchor="middle" font-size="10" font-family="var(--f-mono)" fill="' + (on ? "#fff" : "var(--chrome-ink)") + '">' + esc(k) + '</text></g>';
        });
        box.querySelector("#ntopo").innerHTML = s + "</svg>";
        box.querySelectorAll("#ntopo g").forEach(function (g) { g.onclick = function () { sel = g.dataset.d; E.netSel = sel; topo(); list(); panel(); }; });
      }
      function list() {
        box.querySelector("#ndev").innerHTML = '<div class="h">Urządzenia</div>' + Object.keys(N.dev).map(function (k) { var d = N.dev[k]; return '<button data-d="' + esc(k) + '" class="' + (k === sel ? "on" : "") + '">[' + ICON[d.type] + '] ' + esc(k) + (d.label ? " - " + esc(d.label) : "") + '</button>'; }).join("") +
          '<div class="h">Połączenia</div><div style="padding:0 10px 10px;font:12px var(--f-mono);color:var(--muted)">' + N.links.map(function (l) { return esc(l[0] + " " + shortIf(l[1]) + " ↔ " + l[2] + " " + shortIf(l[3])); }).join("<br>") + '</div>';
        box.querySelectorAll("#ndev [data-d]").forEach(function (b) { b.onclick = function () { sel = b.dataset.d; E.netSel = sel; topo(); list(); panel(); }; });
      }
      function panel() {
        var D = N.dev[sel], P = box.querySelector("#npanel");
        if (D.type === "router" || D.type === "switch") return term(P, D, function (line) { return N.cli(D.name, line); }, function () { return prompt(D); }, "Konsola " + D.name + " (Cisco IOS) - połączenie przez kabel konsolowy");
        if (D.type === "isp") { P.innerHTML = '<div style="padding:16px">Urządzenie operatora (ISP). Adres: <code>' + esc(Object.keys(D.cfg.ifs).map(function (n) { return D.cfg.ifs[n].ip; }).join(", ")) + '</code>. Nie masz do niego dostępu - operator nie zna Twoich sieci prywatnych.</div>'; return; }
        if (D.type === "hub") { P.innerHTML = '<div style="padding:16px">Przełącznik niezarządzalny - nie wymaga konfiguracji.</div>'; return; }
        if (D.type === "homerouter") return hrPanel(P, D);
        hostPanel(P, D);
      }
      function term(P, D, run, pr, title) {
        P.innerHTML = '<div style="display:grid;grid-template-rows:auto minmax(0,1fr) auto;min-height:0"><div class="tool"><span style="font-size:.82rem">' + esc(title) + '</span><span style="flex:1"></span><button class="tb" id="tclr">Wyczyść ekran</button></div><div class="con" id="tout"></div><div style="display:flex;background:#111522;padding:4px 10px 8px;gap:6px;align-items:center"><span class="mono" id="tpr" style="color:#8fb0ff;font-size:13px;white-space:nowrap"></span><input id="tin" class="mono" autocomplete="off" autocapitalize="off" spellcheck="false" style="flex:1;min-width:0;background:transparent;border:0;outline:0;color:#e6ebff;font:13px var(--f-mono)"></div></div>';
        var out = P.querySelector("#tout"), inp = P.querySelector("#tin"), prE = P.querySelector("#tpr"), hi = D.hist, hp = -1;
        function draw() { out.textContent = hi.join("\n") || ""; out.scrollTop = out.scrollHeight; prE.textContent = pr(); }
        if (!hi.length) hi.push(D.type === "pc" || D.type === "server" ? "Microsoft Windows [Version 10.0]\n(c) Microsoft Corporation." : "Press RETURN to get started.");
        draw();
        inp.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            var line = inp.value, p0 = pr(); inp.value = ""; var r = run(line);
            if (r === "\f") hi.length = 0; else { hi.push(p0 + " " + line); if (r) hi.push(r); }
            if (hi.length > 400) hi.splice(0, hi.length - 400);
            D.cmds = D.cmds || []; if (line.trim()) D.cmds.push(line.trim()); hp = -1; draw();
          } else if (e.key === "ArrowUp") { e.preventDefault(); var c = D.cmds || []; if (!c.length) return; hp = hp < 0 ? c.length - 1 : Math.max(0, hp - 1); inp.value = c[hp]; }
          else if (e.key === "ArrowDown") { e.preventDefault(); var c2 = D.cmds || []; if (hp < 0) return; hp++; if (hp >= c2.length) { hp = -1; inp.value = ""; } else inp.value = c2[hp]; }
        });
        P.querySelector("#tclr").onclick = function () { hi.length = 0; draw(); };
        inp.focus();
      }
      function field(id, label, val, ph) { return '<label style="display:grid;gap:3px;font-size:.84rem">' + label + '<input class="tb mono" id="' + id + '" value="' + esc(val || "") + '" placeholder="' + esc(ph || "") + '" style="padding:6px 8px"></label>'; }
      function hostPanel(P, D) {
        var tabs = [["net", "Ustawienia karty sieciowej"], ["cmd", "Wiersz poleceń"]];
        if (D.type === "server") tabs.splice(1, 0, ["dhcp", "Serwer DHCP"], ["users", "Użytkownicy i grupy"], ["share", "Udostępnianie"]);
        var tab = D.tab || "net";
        P.innerHTML = '<div style="display:grid;grid-template-rows:auto minmax(0,1fr);min-height:0"><div class="tool">' + tabs.map(function (t) { return '<button class="tb ' + (t[0] === tab ? "on" : "") + '" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join("") + '</div><div id="hp" style="min-height:0;overflow:auto;display:grid"></div></div>';
        P.querySelectorAll("[data-t]").forEach(function (b) { b.onclick = function () { D.tab = b.dataset.t; hostPanel(P, D); }; });
        var hp = P.querySelector("#hp");
        if (tab === "cmd") return term(hp, D, function (l) { return N.pcCmd(D.name, l); }, function () { return "C:\\Users\\" + (D.type === "server" ? "Administrator" : "uczen") + ">"; }, "Wiersz poleceń - " + D.name);
        if (tab === "net") {
          var n = D.nic;
          hp.innerHTML = '<div style="padding:16px;display:grid;gap:12px;max-width:440px;align-content:start"><div class="muted" style="font-size:.84rem">' + esc(D.name) + ' · adres MAC: <code>' + esc(D.mac) + '</code></div>' +
            '<label style="font-size:.88rem"><input type="radio" name="nm" value="dhcp" ' + (n.mode === "dhcp" ? "checked" : "") + '> Uzyskaj adres IP automatycznie (DHCP)</label><label style="font-size:.88rem"><input type="radio" name="nm" value="static" ' + (n.mode === "static" ? "checked" : "") + '> Użyj następującego adresu IP:</label>' +
            field("nip", "Adres IP", n.ip, "np. 192.168.1.10") + field("nmask", "Maska podsieci", n.mask, "np. 255.255.255.0") + field("ngw", "Brama domyślna", n.gw) + field("ndns", "Preferowany serwer DNS", n.dns) +
            '<div><button class="tb go" id="nsave">Zapisz (OK)</button></div><div id="nmsg"></div></div>';
          hp.querySelector("#nsave").onclick = function () {
            var mode = hp.querySelector("[name=nm]:checked").value, ip = hp.querySelector("#nip").value.trim(), mk = hp.querySelector("#nmask").value.trim(), msg = hp.querySelector("#nmsg");
            if (mode === "static" && (ip2n(ip) === null || !isMask(mk))) { msg.innerHTML = '<div class="msg err">Nieprawidłowy adres IP lub maska.</div>'; return; }
            n.mode = mode; n.ip = ip; n.mask = mk; n.gw = hp.querySelector("#ngw").value.trim(); n.dns = hp.querySelector("#ndns").value.trim();
            if (mode === "dhcp") { var l = dhcpRequest(N, D); msg.innerHTML = '<div class="msg ok">Karta pobrała adres ' + esc(l.ip) + ' (' + esc(l.from) + ').</div>'; }
            else { n.lease = null; msg.innerHTML = '<div class="msg ok">Zapisano ustawienia.</div>'; }
          };
          return;
        }
        if (tab === "dhcp") return dhcpPanel(hp, D);
        if (tab === "users") return usersPanel(hp, D);
        if (tab === "share") return sharePanel(hp, D);
      }
      function dhcpPanel(hp, D) {
        var d = D.srv.dhcp;
        if (!d.installed) { hp.innerHTML = '<div style="padding:16px;display:grid;gap:10px;align-content:start;max-width:480px"><div>Rola <b>Serwer DHCP</b> nie jest zainstalowana.</div><div><button class="tb go" id="dinst">Dodaj role i funkcje → Serwer DHCP</button></div></div>'; hp.querySelector("#dinst").onclick = function () { d.installed = true; dhcpPanel(hp, D); }; return; }
        var sc = d.scope || { name: "", start: "", end: "", mask: "", opt003: "", opt006: "", active: false, res: [], excl: [] };
        hp.innerHTML = '<div style="padding:16px;display:grid;gap:10px;align-content:start;max-width:560px"><b>Zakres IPv4</b>' + field("sname", "Nazwa zakresu", sc.name) +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' + field("sst", "Adres początkowy", sc.start) + field("sen", "Adres końcowy", sc.end) + '</div>' + field("smk", "Maska podsieci", sc.mask) +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' + field("s3", "Opcja 003 - Router (brama)", sc.opt003) + field("s6", "Opcja 006 - Serwery DNS", sc.opt006) + '</div>' +
          '<label style="font-size:.88rem"><input type="checkbox" id="sact" ' + (sc.active ? "checked" : "") + '> Aktywuj zakres</label><div><button class="tb go" id="ssave">Zapisz zakres</button></div><div id="smsg"></div>' +
          '<b>Rezerwacje</b><div id="rlist" style="font:13px var(--f-mono)"></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:6px;align-items:end">' + field("rn", "Nazwa", "") + field("rm", "Adres MAC", "", "00-1A-...") + field("ri", "Adres IP", "") + '<button class="tb" id="radd">Dodaj</button></div></div>';
        function rl() { hp.querySelector("#rlist").innerHTML = (sc.res || []).map(function (r, i) { return esc(r.name + " · " + r.mac + " → " + r.ip) + ' <button class="tb" data-ri="' + i + '">Usuń</button>'; }).join("<br>") || '<span class="muted">brak rezerwacji</span>'; hp.querySelectorAll("[data-ri]").forEach(function (b) { b.onclick = function () { sc.res.splice(+b.dataset.ri, 1); rl(); }; }); }
        rl();
        hp.querySelector("#ssave").onclick = function () {
          var v = function (id) { return hp.querySelector(id).value.trim(); }, msg = hp.querySelector("#smsg");
          if (ip2n(v("#sst")) === null || ip2n(v("#sen")) === null || !isMask(v("#smk"))) { msg.innerHTML = '<div class="msg err">Uzupełnij poprawnie adresy i maskę.</div>'; return; }
          if (ip2n(v("#sst")) > ip2n(v("#sen"))) { msg.innerHTML = '<div class="msg err">Adres początkowy musi być mniejszy niż końcowy.</div>'; return; }
          sc.name = v("#sname"); sc.start = v("#sst"); sc.end = v("#sen"); sc.mask = v("#smk"); sc.opt003 = v("#s3"); sc.opt006 = v("#s6"); sc.active = hp.querySelector("#sact").checked; d.scope = sc;
          msg.innerHTML = '<div class="msg ok">Zapisano zakres' + (sc.active ? " (aktywny)." : " - zakres jest nieaktywny.") + '</div>';
        };
        hp.querySelector("#radd").onclick = function () {
          var nm = hp.querySelector("#rn").value.trim(), mac = hp.querySelector("#rm").value.trim(), ip = hp.querySelector("#ri").value.trim();
          if (!mac || ip2n(ip) === null) return; sc.res = sc.res || []; sc.res.push({ name: nm, mac: mac, ip: ip }); d.scope = sc; rl();
        };
      }
      function usersPanel(hp, D) {
        var s = D.srv;
        hp.innerHTML = '<div style="padding:16px;display:grid;gap:12px;align-content:start;max-width:600px"><b>Użytkownicy</b><div id="ul" style="font:13px var(--f-mono)"></div><div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end">' + field("ulog", "Nazwa logowania", "", "np. j.kowalski") + field("uname", "Imię i nazwisko", "") + '<button class="tb" id="uadd">Utwórz użytkownika</button></div>' +
          '<b>Grupy</b><div id="gl" style="font:13px var(--f-mono)"></div><div style="display:grid;grid-template-columns:1fr auto;gap:6px;align-items:end">' + field("gname", "Nazwa grupy", "") + '<button class="tb" id="gadd">Utwórz grupę</button></div>' +
          '<b>Członkostwo</b><div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end"><label style="display:grid;gap:3px;font-size:.84rem">Użytkownik<select class="tb" id="mu"></select></label><label style="display:grid;gap:3px;font-size:.84rem">Grupa<select class="tb" id="mg"></select></label><button class="tb" id="madd">Dodaj do grupy</button></div></div>';
        function r() {
          hp.querySelector("#ul").innerHTML = s.users.map(function (u) { return esc(u.login + " (" + u.name + ")"); }).join("<br>") || '<span class="muted">brak</span>';
          hp.querySelector("#gl").innerHTML = s.groups.map(function (g) { return esc(g.name + ": " + (g.members.join(", ") || "-")); }).join("<br>") || '<span class="muted">brak</span>';
          hp.querySelector("#mu").innerHTML = s.users.map(function (u) { return '<option>' + esc(u.login) + '</option>'; }).join("");
          hp.querySelector("#mg").innerHTML = s.groups.map(function (g) { return '<option>' + esc(g.name) + '</option>'; }).join("");
        }
        r();
        hp.querySelector("#uadd").onclick = function () { var l = hp.querySelector("#ulog").value.trim(); if (!l || s.users.some(function (u) { return u.login === l; })) return; s.users.push({ login: l, name: hp.querySelector("#uname").value.trim() }); r(); };
        hp.querySelector("#gadd").onclick = function () { var g = hp.querySelector("#gname").value.trim(); if (!g || s.groups.some(function (x) { return x.name === g; })) return; s.groups.push({ name: g, members: [] }); r(); };
        hp.querySelector("#madd").onclick = function () { var u = hp.querySelector("#mu").value, g = s.groups.filter(function (x) { return x.name === hp.querySelector("#mg").value; })[0]; if (!u || !g || g.members.indexOf(u) >= 0) return; g.members.push(u); r(); };
      }
      function sharePanel(hp, D) {
        var s = D.srv;
        hp.innerHTML = '<div style="padding:16px;display:grid;gap:12px;align-content:start;max-width:640px"><b>Udostępnione foldery</b><div id="sl" style="font:13px var(--f-mono)"></div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end">' + field("sp", "Ścieżka folderu", "", "C:\\Dane") + field("sn", "Nazwa udziału", "") + '<button class="tb" id="sadd">Udostępnij</button></div>' +
          '<b>Uprawnienia</b><div class="muted" style="font-size:.82rem">Nowy udział ma domyślnie uprawnienie „Wszyscy - Odczyt”. Ustaw uprawnienia udziału i NTFS dla wybranego podmiotu albo usuń podmiot.</div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr auto;gap:6px;align-items:end"><label style="display:grid;gap:3px;font-size:.84rem">Udział<select class="tb" id="ps"></select></label>' + field("pp", "Podmiot (grupa/użytkownik)", "", "np. Wszyscy") +
          '<label style="display:grid;gap:3px;font-size:.84rem">Udział<select class="tb" id="pshare"><option value="">-</option><option>Odczyt</option><option>Zmiana</option><option>Pełna kontrola</option></select></label>' +
          '<label style="display:grid;gap:3px;font-size:.84rem">NTFS<select class="tb" id="pntfs"><option value="">-</option><option>Odczyt</option><option>Modyfikacja</option><option>Pełna kontrola</option></select></label><button class="tb" id="padd">Ustaw</button></div><div><button class="tb" id="pdel">Usuń podmiot z udziału</button></div></div>';
        function r() {
          hp.querySelector("#sl").innerHTML = s.shares.map(function (x) { return '<b>\\\\' + esc(D.name + "\\" + x.name) + '</b> (' + esc(x.path) + ')<br>' + Object.keys(x.perms).map(function (p) { return "&nbsp;&nbsp;" + esc(p + ": udział - " + (x.perms[p].share || "brak") + ", NTFS - " + (x.perms[p].ntfs || "brak")); }).join("<br>"); }).join("<br>") || '<span class="muted">brak udziałów</span>';
          hp.querySelector("#ps").innerHTML = s.shares.map(function (x) { return '<option>' + esc(x.name) + '</option>'; }).join("");
        }
        r();
        function cur() { var n = hp.querySelector("#ps").value; return s.shares.filter(function (x) { return x.name === n; })[0]; }
        hp.querySelector("#sadd").onclick = function () { var p = hp.querySelector("#sp").value.trim(), n = hp.querySelector("#sn").value.trim(); if (!p || !n) return; s.shares.push({ path: p, name: n, perms: { "Wszyscy": { share: "Odczyt", ntfs: "Odczyt" } } }); r(); };
        hp.querySelector("#padd").onclick = function () { var x = cur(), who = hp.querySelector("#pp").value.trim(); if (!x || !who) return; x.perms[who] = { share: hp.querySelector("#pshare").value, ntfs: hp.querySelector("#pntfs").value }; r(); };
        hp.querySelector("#pdel").onclick = function () { var x = cur(), who = hp.querySelector("#pp").value.trim(); if (!x || !who) return; delete x.perms[who]; r(); };
      }
      function hrPanel(P, D) {
        var c = D.hr;
        P.innerHTML = '<div style="overflow:auto"><div style="padding:16px;display:grid;gap:10px;max-width:520px"><div style="background:#0e5a8a;color:#fff;padding:8px 12px;border-radius:6px;font-weight:600">Panel administracyjny routera - http://' + esc(c.lanIp) + '</div>' +
          '<b>Sieć LAN</b><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' + field("hip", "Adres IP routera", c.lanIp) + field("hmk", "Maska", c.lanMask) + '</div>' +
          '<label style="font-size:.88rem"><input type="checkbox" id="hdh" ' + (c.dhcp ? "checked" : "") + '> Serwer DHCP włączony</label>' +
          '<b>Sieć bezprzewodowa</b><label style="font-size:.88rem"><input type="checkbox" id="hwf" ' + (c.wifi ? "checked" : "") + '> Włącz Wi-Fi</label>' + field("hss", "Nazwa sieci (SSID)", c.ssid) +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><label style="display:grid;gap:3px;font-size:.84rem">Zabezpieczenia<select class="tb" id="hsec">' + ["Brak", "WEP", "WPA-PSK", "WPA2-PSK", "WPA3-SAE"].map(function (o) { return '<option ' + (o === c.sec ? "selected" : "") + '>' + o + '</option>'; }).join("") + '</select></label>' +
          '<label style="display:grid;gap:3px;font-size:.84rem">Szyfrowanie<select class="tb" id="henc">' + ["TKIP", "AES", "TKIP+AES"].map(function (o) { return '<option ' + (o === c.enc ? "selected" : "") + '>' + o + '</option>'; }).join("") + '</select></label></div>' + field("hkey", "Klucz (hasło) sieci", c.key) +
          '<div><button class="tb go" id="hsave">Zapisz i uruchom ponownie</button></div><div id="hmsg"></div></div></div>';
        P.querySelector("#hsave").onclick = function () {
          var ip = P.querySelector("#hip").value.trim(), mk = P.querySelector("#hmk").value.trim(), msg = P.querySelector("#hmsg");
          if (ip2n(ip) === null || !isMask(mk)) { msg.innerHTML = '<div class="msg err">Nieprawidłowy adres lub maska.</div>'; return; }
          c.lanIp = ip; c.lanMask = mk; c.dhcp = P.querySelector("#hdh").checked; c.wifi = P.querySelector("#hwf").checked; c.ssid = P.querySelector("#hss").value; c.sec = P.querySelector("#hsec").value; c.enc = P.querySelector("#henc").value; c.key = P.querySelector("#hkey").value;
          msg.innerHTML = '<div class="msg ok">Zapisano. Router działa pod adresem ' + esc(ip) + '.</div>';
        };
      }
      topo(); list(); panel();
    }
  };
})();
