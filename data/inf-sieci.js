window.KURSY = window.KURSY || {};

window.KURSY["INF.07"] = {
  podstawowy: [
    {
      tytul: "Okablowanie strukturalne",
      tresc: `
<h4>Elementy systemu okablowania (PN-EN 50173)</h4>
<ul>
<li><b>Główny punkt dystrybucyjny</b> (MDF) i <b>pośrednie punkty dystrybucyjne</b> (IDF) - szafy rack 19″ z panelami krosowymi, przełącznikami, organizerami.</li>
<li><b>Okablowanie poziome</b> - od panelu w szafie do gniazda abonenckiego; kanał maks. <b>100 m</b> (90 m kabla stałego + 10 m kabli krosowych).</li>
<li><b>Okablowanie pionowe</b> (szkieletowe) - między szafami, często światłowodowe.</li>
<li>Wysokość urządzeń rack podaje się w jednostkach <b>U</b> (1U = 44,45 mm).</li>
</ul>
<h4>Media transmisyjne</h4>
<div class="tw"><table><tr><th>Medium</th><th>Cechy</th></tr>
<tr><td>skrętka kat. 5e / 6 / 6A</td><td>1 Gb/s / 1 Gb/s (10 Gb/s do 55 m) / 10 Gb/s do 100 m; złącze RJ-45</td></tr>
<tr><td>światłowód wielomodowy OM3/OM4</td><td>źródło: VCSEL/LED, rdzeń 50 µm, do kilkuset metrów przy 10 Gb/s</td></tr>
<tr><td>światłowód jednomodowy OS2</td><td>laser, rdzeń ok. 9 µm, kilometry i dziesiątki kilometrów</td></tr>
<tr><td>kabel koncentryczny</td><td>telewizja, starsze sieci 10Base2/10Base5</td></tr></table></div>
<h4>Instalacja</h4>
<ul><li>Promień gięcia skrętki nie mniejszy niż ok. 4-8 średnic kabla; nie zgniatać opaskami.</li>
<li>Kable sieciowe prowadzi się z odstępem od przewodów zasilających lub w osobnych korytach (przegroda).</li>
<li>Rozplecenie par przy zakańczaniu - maks. ok. 13 mm.</li>
<li>Każde gniazdo i port panelu jest jednoznacznie <b>oznaczony</b>, a całość opisana w dokumentacji powykonawczej.</li></ul>`
    },
    {
      tytul: "Pomiary i certyfikacja okablowania",
      tresc: `
<ul>
<li><b>Mapa połączeń</b> (wire map) - wykrywa przerwy, zwarcia, pary odwrócone, skrzyżowane i rozdzielone (split pair).</li>
<li><b>Długość</b> - mierzona reflektometrycznie (TDR).</li>
<li><b>Tłumienie</b> (insertion loss) - spadek mocy sygnału w dB.</li>
<li><b>NEXT</b> - przesłuch zbliżny między parami na tym samym końcu; <b>FEXT</b> - zdalny; <b>Return Loss</b> - straty odbiciowe.</li>
<li>Światłowód: miernik mocy i źródło światła (tłumienie toru), <b>reflektometr OTDR</b> - lokalizacja spawów, złączy i uszkodzeń.</li>
<li>Spawanie światłowodów: spawarka łukowa, typowe tłumienie spawu poniżej 0,1 dB; przed spawaniem - zdjęcie pokryć, czyszczenie alkoholem izopropylowym, cięcie łamarką (cleaver).</li>
</ul>
<div class="tip">Rozdzielona para (split pair) przechodzi zwykły tester ciągłości, ale nie przejdzie pomiaru NEXT - dlatego instalację certyfikuje się miernikiem, a nie prostym testerem.</div>`
    },
    {
      tytul: "Przełączniki i sieci VLAN",
      tresc: `
<h4>Konfiguracja przełącznika (składnia Cisco IOS)</h4>
<pre>enable
configure terminal
hostname SW1
vlan 10
 name KSIEGOWOSC
interface fastEthernet 0/1
 switchport mode access
 switchport access vlan 10
interface gigabitEthernet 0/1
 switchport mode trunk
interface vlan 1
 ip address 192.168.1.2 255.255.255.0
ip default-gateway 192.168.1.1
end
copy running-config startup-config</pre>
<ul>
<li><b>running-config</b> - konfiguracja w RAM, <b>startup-config</b> - w NVRAM (po restarcie).</li>
<li>Tryby: użytkownika (<code>&gt;</code>), uprzywilejowany (<code>#</code>), konfiguracji globalnej (<code>(config)#</code>).</li>
<li><code>show vlan brief</code>, <code>show interfaces trunk</code>, <code>show mac address-table</code>.</li>
<li>Zabezpieczenia portów: <b>port-security</b> (ograniczenie liczby adresów MAC), wyłączanie nieużywanych portów (<code>shutdown</code>), <b>802.1X</b> - uwierzytelnianie urządzeń przez serwer RADIUS.</li>
<li>Routing między VLAN-ami: router z podinterfejsami („router on a stick”, enkapsulacja dot1Q) albo przełącznik warstwy 3 z interfejsami SVI.</li>
</ul>`
    },
    {
      tytul: "Adresacja i usługi w sieci lokalnej",
      tresc: `
<h4>Podział sieci na podsieci (VLSM)</h4>
<p>Zaczyna się od największej podsieci. Przykład: sieć <code>192.168.20.0/24</code>, potrzeby: 100, 50, 20 hostów.</p>
<pre>100 hostów → /25 (126) → 192.168.20.0/25   (hosty .1-.126, broadcast .127)
 50 hostów → /26 (62)  → 192.168.20.128/26 (hosty .129-.190, broadcast .191)
 20 hostów → /27 (30)  → 192.168.20.192/27 (hosty .193-.222, broadcast .223)</pre>
<h4>Bezprzewodowe sieci lokalne</h4>
<ul><li>Pasmo 2,4 GHz - kanały nienakładające się: <b>1, 6, 11</b>; 5 GHz - więcej kanałów, mniejszy zasięg.</li>
<li>Tryby: infrastruktura (z AP), ad hoc; roaming między AP o tym samym SSID.</li>
<li>Uwierzytelnianie: WPA2/WPA3-Personal (hasło), WPA2/WPA3-Enterprise (802.1X, RADIUS).</li></ul>
<h4>Diagnostyka</h4><p><code>ping</code>, <code>tracert</code>/<code>traceroute</code>, <code>arp -a</code>, <code>show ip interface brief</code>, analiza ruchu programem <b>Wireshark</b>.</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Redundancja i wydajność w LAN",
      tresc: `
<ul>
<li><b>STP/RSTP</b> - blokuje pętle; wybór <b>mostu głównego</b> (root bridge) wg najniższego Bridge ID (priorytet + MAC). RSTP (802.1w) szybciej przechodzi do stanu forwarding.</li>
<li><b>EtherChannel / LACP</b> - kilka łączy fizycznych jako jedno logiczne, wyższa przepustowość i odporność.</li>
<li><b>QoS</b> - priorytetyzacja ruchu (np. VoIP przed pobieraniem plików).</li>
<li><b>PoE</b>: 802.3af (do 15,4 W na porcie), 802.3at PoE+ (do 30 W), 802.3bt (do 60/90 W).</li>
<li><b>HSRP/VRRP</b> - zapasowa brama domyślna.</li>
</ul>`
    },
    {
      tytul: "Zadanie praktyczne INF.07: przebieg",
      tresc: `
<ol><li>Montaż: zakończ kabel w panelu krosowym i gnieździe (LSA, T568B), wykonaj kabel krosowy.</li>
<li>Pomiary testerem, zapis wyników.</li>
<li>Konfiguracja przełącznika: VLAN-y, porty access i trunk, adres zarządzający, zapis konfiguracji.</li>
<li>Konfiguracja routera i hostów zgodnie z planem adresacji, testy łączności.</li></ol>
<div class="tip">Po każdej zmianie konfiguracji wykonaj <code>copy running-config startup-config</code> - po restarcie urządzenia niezapisana konfiguracja znika.</div>`
    }
  ],
  pytania: [
    { p: "Maksymalna długość kanału transmisyjnego w okablowaniu poziomym (skrętka) wynosi", o: ["100 m", "90 m", "185 m", "50 m"], k: 0, w: "90 m kabla stałego + do 10 m kabli krosowych." },
    { p: "Wysokość urządzenia 2U w szafie rack 19″ to około", o: ["89 mm", "44 mm", "19 mm", "200 mm"], k: 0, w: "1U = 44,45 mm." },
    { p: "Światłowód jednomodowy ma średnicę rdzenia około", o: ["9 µm", "50 µm", "62,5 µm", "125 µm"], k: 0, w: "125 µm to średnica płaszcza." },
    { p: "Urządzenie do lokalizacji uszkodzeń i spawów w torze światłowodowym to", o: ["reflektometr OTDR", "tester mapy połączeń", "multimetr", "miernik rezystancji izolacji"], k: 0, w: "OTDR mierzy odbicia światła wzdłuż włókna." },
    { p: "Przesłuch zbliżny między parami skrętki oznacza się skrótem", o: ["NEXT", "FEXT", "RL", "IL"], k: 0, w: "Near-End Crosstalk." },
    { p: "Błąd, którego nie wykryje prosty tester ciągłości, a wykaże pomiar przesłuchu, to", o: ["rozdzielona para (split pair)", "przerwa żyły", "zwarcie dwóch żył", "brak wtyku"], k: 0, w: "Ciągłość jest poprawna, ale żyły nie są skręcone w parach." },
    { p: "Narzędzie do przycinania włókna przed spawaniem to", o: ["łamarka (cleaver)", "zaciskarka RJ-45", "narzędzie LSA", "ściągacz izolacji kabli zasilających"], k: 0, w: "Daje prostopadłą, gładką powierzchnię czoła włókna." },
    { p: "Polecenie Cisco IOS zapisujące konfigurację tak, aby była dostępna po restarcie, to", o: ["copy running-config startup-config", "show running-config", "erase startup-config", "reload"], k: 0, w: "startup-config jest przechowywany w NVRAM." },
    { p: "Port przełącznika przenoszący ruch wielu VLAN-ów to port w trybie", o: ["trunk", "access", "shutdown", "monitor"], k: 0, w: "Ramki są oznaczane znacznikiem 802.1Q." },
    { p: "Polecenie wyświetlające skrótową listę VLAN-ów i przypisanych portów to", o: ["show vlan brief", "show ip route", "show version", "show clock"], k: 0, w: "Pokazuje numery, nazwy i porty VLAN-ów." },
    { p: "Znak zachęty `Switch(config)#` oznacza tryb", o: ["konfiguracji globalnej", "użytkownika", "uprzywilejowany", "konfiguracji interfejsu"], k: 0, w: "Do trybu przechodzi się poleceniem configure terminal." },
    { p: "Mechanizm ograniczający liczbę adresów MAC na porcie przełącznika to", o: ["port-security", "STP", "NAT", "DHCP relay"], k: 0, w: "Po przekroczeniu limitu port może zostać wyłączony." },
    { p: "Standard uwierzytelniania urządzeń podłączanych do portu przełącznika z użyciem serwera RADIUS to", o: ["IEEE 802.1X", "IEEE 802.1Q", "IEEE 802.3af", "IEEE 802.11g"], k: 0, w: "Stosowany też w WPA2-Enterprise." },
    { p: "Komunikacja między VLAN-ami wymaga", o: ["routera lub przełącznika warstwy 3", "koncentratora", "dodatkowego kabla skrosowanego", "wyłączenia STP"], k: 0, w: "VLAN-y to osobne domeny rozgłoszeniowe i sieci IP." },
    { p: "Podsieć dla 50 hostów wymaga maski co najmniej", o: ["/26", "/27", "/28", "/25"], k: 0, w: "/26 daje 62 adresy hostów; /27 tylko 30." },
    { p: "Adres rozgłoszeniowy podsieci 192.168.20.128/26 to", o: ["192.168.20.191", "192.168.20.255", "192.168.20.127", "192.168.20.159"], k: 0, w: "Blok 64 adresów: .128-.191." },
    { p: "Nienakładające się kanały Wi-Fi w paśmie 2,4 GHz to", o: ["1, 6, 11", "1, 2, 3", "3, 7, 12", "5, 10, 13"], k: 0, w: "Kanały oddalone o 5 numerów nie zachodzą na siebie." },
    { p: "Protokół szybkiego drzewa rozpinającego to", o: ["RSTP (802.1w)", "RIP", "OSPF", "VTP"], k: 0, w: "RSTP skraca czas zbieżności względem klasycznego STP." },
    { p: "Mostem głównym w STP zostaje przełącznik o", o: ["najniższym identyfikatorze mostu (Bridge ID)", "najwyższym adresie IP", "największej liczbie portów", "najnowszym oprogramowaniu"], k: 0, w: "Bridge ID = priorytet + adres MAC." },
    { p: "Standard PoE+ (802.3at) dostarcza na port maksymalnie około", o: ["30 W", "15,4 W", "90 W", "5 W"], k: 0, w: "802.3af - 15,4 W, 802.3bt - do 90 W." },
    { p: "Łączenie kilku portów w jedno łącze logiczne za pomocą protokołu LACP to", o: ["agregacja łączy (EtherChannel)", "mirroring portów", "VLAN", "routing statyczny"], k: 0, w: "Zwiększa przepustowość i zapewnia redundancję." },
    { p: "Maksymalne rozplecenie par skrętki przy zakańczaniu powinno wynosić około", o: ["13 mm", "5 cm", "1 m", "nie ma znaczenia"], k: 0, w: "Większe rozplecenie pogarsza parametry przesłuchowe." },
    { p: "Kategoria skrętki zapewniająca 10 Gb/s na odległość 100 m to", o: ["6A", "5e", "5", "3"], k: 0, w: "Kat. 6 osiąga 10 Gb/s tylko do ok. 55 m." },
    { p: "Protokół zapewniający zapasową bramę domyślną w sieci LAN to", o: ["VRRP", "ARP", "ICMP", "SNMP"], k: 0, w: "Podobnie działa HSRP (Cisco)." },
    { p: "Program do przechwytywania i analizy pakietów w sieci to", o: ["Wireshark", "PuTTY", "Notepad++", "FileZilla"], k: 0, w: "Pozwala analizować protokoły na poszczególnych warstwach." }
  ],
  praktyka: {
    tytul: "Okablowanie i konfiguracja VLAN w małej firmie",
    model: "w", czas: 150,
    opis: `
<p>Masz szafę rack z panelem krosowym kat. 6, przełącznik zarządzalny, router, dwa komputery i gniazdo abonenckie.</p>
<ol><li>Zakończ odcinek skrętki w porcie 5 panelu i w gnieździe abonenckim (T568B), wykonaj kabel krosowy 1 m. Sprawdź tor testerem.</li>
<li>Na przełączniku utwórz VLAN 10 <code>BIURO</code> i VLAN 20 <code>MAGAZYN</code>. Porty 1-4 - VLAN 10, porty 5-8 - VLAN 20 (access), port 24 - trunk do routera.</li>
<li>Router: podinterfejsy <code>.10</code> i <code>.20</code> z enkapsulacją dot1Q, adresy <code>192.168.10.1/24</code> i <code>192.168.20.1/24</code>.</li>
<li>PC1 (VLAN 10): <code>192.168.10.10/24</code>, PC2 (VLAN 20): <code>192.168.20.10/24</code>, bramy = adresy routera. Sprawdź <code>ping</code> PC1 → PC2.</li>
<li>Wyłącz nieużywane porty 9-23 i zapisz konfigurację.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Okablowanie", pozycje: ["Żyły zakończone w panelu i gnieździe wg T568B, rozplecenie par minimalne", "Kabel krosowy poprawny", "Test toru: wszystkie żyły poprawnie połączone, wynik zapisany"] },
      { grupa: "Rezultat 2: Przełącznik", pozycje: ["VLAN 10 BIURO i VLAN 20 MAGAZYN utworzone z nazwami", "Porty 1-4 access VLAN 10, porty 5-8 access VLAN 20", "Port 24 w trybie trunk", "Porty 9-23 wyłączone (shutdown)", "Konfiguracja zapisana do startup-config"] },
      { grupa: "Rezultat 3: Router i hosty", pozycje: ["Podinterfejsy z encapsulation dot1Q 10 i 20 i poprawnymi adresami", "Interfejs fizyczny routera włączony (no shutdown)", "Adresy i bramy PC1 i PC2 zgodne z treścią", "ping z PC1 do PC2 kończy się powodzeniem"] },
      { grupa: "Przebieg", pozycje: ["Porządek w szafie, kable krosowe ułożone w organizerach", "Ścinki przewodów zebrane"] }
    ],
    rozwiazanie: `
<pre>! przełącznik
vlan 10
 name BIURO
vlan 20
 name MAGAZYN
interface range fa0/1 - 4
 switchport mode access
 switchport access vlan 10
interface range fa0/5 - 8
 switchport mode access
 switchport access vlan 20
interface range fa0/9 - 23
 shutdown
interface fa0/24
 switchport mode trunk
end
copy running-config startup-config

! router
interface gi0/0
 no shutdown
interface gi0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
interface gi0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0</pre>
<div class="tip">Najczęstszy błąd: podinterfejsy skonfigurowane, ale interfejs fizyczny routera został w stanie shutdown - wtedy nic nie działa.</div>`
  }
};

window.KURSY["INF.08"] = {
  podstawowy: [
    {
      tytul: "Sieci rozległe i technologie dostępowe",
      tresc: `
<ul>
<li><b>WAN</b> łączy sieci lokalne na dużych odległościach, zwykle przez infrastrukturę operatora.</li>
<li>Technologie dostępowe: <b>xDSL</b> (ADSL, VDSL - po parze miedzianej), <b>FTTH/GPON</b> (światłowód do domu, rozdział optyczny pasywnymi splitterami), sieci kablowe <b>HFC/DOCSIS</b>, sieci komórkowe <b>LTE/5G</b>, łącza radiowe i satelitarne.</li>
<li>Usługi operatorskie: łącza dzierżawione, <b>MPLS</b> (przełączanie etykiet, VPN operatorskie), Metro Ethernet.</li>
<li>W ADSL prędkość pobierania jest większa niż wysyłania (asymetria).</li>
</ul>
<h4>Urządzenia brzegowe</h4><p>Router brzegowy, modem/ONT (zakończenie sieci optycznej po stronie abonenta), OLT (po stronie operatora), firewall, koncentrator VPN.</p>`
    },
    {
      tytul: "Routing statyczny i dynamiczny",
      tresc: `
<h4>Routing statyczny (Cisco IOS)</h4>
<pre>ip route 192.168.30.0 255.255.255.0 10.0.0.2
ip route 0.0.0.0 0.0.0.0 203.0.113.1   ! trasa domyślna</pre>
<h4>Protokoły dynamiczne</h4>
<div class="tw"><table><tr><th>Protokół</th><th>Typ</th><th>Metryka</th><th>Odległość administracyjna</th></tr>
<tr><td>RIPv2</td><td>wektora odległości</td><td>liczba skoków (maks. 15)</td><td>120</td></tr>
<tr><td>OSPF</td><td>stanu łącza</td><td>koszt (zależny od przepustowości)</td><td>110</td></tr>
<tr><td>EIGRP</td><td>zaawansowany wektora odległości (Cisco)</td><td>przepustowość i opóźnienie</td><td>90</td></tr>
<tr><td>BGP</td><td>wektora ścieżki, między systemami autonomicznymi</td><td>atrybuty ścieżki</td><td>20 (eBGP)</td></tr></table></div>
<p>Trasa bezpośrednio podłączona ma odległość administracyjną <b>0</b>, statyczna - <b>1</b>. Router wybiera trasę z najniższą odległością administracyjną, a przy tym samym źródle - z najniższą metryką i najdłuższym dopasowaniem prefiksu.</p>
<pre>router ospf 1
 network 10.0.0.0 0.0.0.3 area 0
 network 192.168.10.0 0.0.0.255 area 0</pre>
<p>W OSPF podaje się maskę odwrotną (wildcard): dla /24 to <code>0.0.0.255</code>, dla /30 - <code>0.0.0.3</code>.</p>`
    },
    {
      tytul: "NAT, ACL i usługi brzegowe",
      tresc: `
<h4>NAT</h4>
<ul><li><b>statyczny</b> - jeden adres prywatny ↔ jeden publiczny (np. serwer);</li><li><b>dynamiczny</b> - pula adresów publicznych;</li><li><b>PAT (overload)</b> - wiele hostów przez jeden adres publiczny, rozróżnianych numerem portu.</li></ul>
<pre>access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 interface gi0/1 overload
interface gi0/0
 ip nat inside
interface gi0/1
 ip nat outside</pre>
<h4>Listy kontroli dostępu</h4>
<ul><li><b>standardowe</b> (1-99) filtrują tylko po adresie źródłowym - umieszcza się je blisko celu;</li><li><b>rozszerzone</b> (100-199) - źródło, cel, protokół, port - blisko źródła;</li><li>na końcu każdej listy jest niejawne <b>deny any</b>.</li></ul>
<pre>access-list 110 permit tcp 192.168.10.0 0.0.0.255 any eq 443
interface gi0/0
 ip access-group 110 in</pre>`
    },
    {
      tytul: "VPN, IPv6 i monitorowanie WAN",
      tresc: `
<ul>
<li><b>VPN site-to-site</b> (IPsec) łączy oddziały firmy; <b>VPN zdalnego dostępu</b> - pracowników (SSL/TLS, IPsec, WireGuard).</li>
<li>IPsec: AH (integralność, uwierzytelnienie), <b>ESP</b> (także szyfrowanie); IKE - wymiana kluczy.</li>
<li><b>IPv6</b>: adres globalny (2000::/3), link-local (fe80::/10), autokonfiguracja SLAAC, brak rozgłoszeń (multicast), mechanizmy przejściowe: dual stack, tunelowanie, NAT64.</li>
<li><b>SNMP</b> - monitorowanie urządzeń (agent, menedżer, MIB, pułapki trap); <b>Syslog</b> - zbieranie logów; <b>NTP</b> - synchronizacja czasu.</li>
<li>Parametry jakości: przepustowość, opóźnienie, <b>jitter</b> (zmienność opóźnienia), utrata pakietów - ważne dla VoIP.</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Telefonia IP i redundancja łączy WAN",
      tresc: `
<ul><li><b>VoIP</b>: protokół sygnalizacyjny <b>SIP</b> (port 5060), transport głosu <b>RTP</b>; kodeki G.711 (64 kb/s), G.729 (8 kb/s); centrala IP-PBX (np. Asterisk).</li>
<li>Dla ruchu głosowego stosuje się osobny VLAN i QoS.</li>
<li>Redundancja WAN: dwa łącza różnych operatorów, trasa zapasowa ze zwiększoną odległością administracyjną (<i>floating static route</i>), SD-WAN.</li></ul>
<pre>ip route 0.0.0.0 0.0.0.0 203.0.113.1
ip route 0.0.0.0 0.0.0.0 198.51.100.1 200   ! trasa zapasowa</pre>`
    },
    {
      tytul: "Zadanie praktyczne INF.08: przebieg",
      tresc: `
<ol><li>Odczytaj schemat: adresy interfejsów WAN (/30) i LAN.</li><li>Skonfiguruj interfejsy, sprawdź <code>show ip interface brief</code> (status up/up).</li><li>Routing (statyczny lub OSPF), trasa domyślna.</li><li>NAT/PAT i ewentualne ACL.</li><li>Testy: <code>ping</code>, <code>traceroute</code>, <code>show ip route</code>, <code>show ip nat translations</code>.</li></ol>`
    }
  ],
  pytania: [
    { p: "Technologia dostępowa, w której światłowód doprowadzony jest do mieszkania abonenta, to", o: ["FTTH", "ADSL", "HFC", "ISDN"], k: 0, w: "Fiber To The Home, np. w technologii GPON." },
    { p: "Urządzenie zakańczające sieć GPON po stronie abonenta to", o: ["ONT", "OLT", "DSLAM", "CMTS"], k: 0, w: "OLT znajduje się po stronie operatora." },
    { p: "Odległość administracyjna trasy statycznej wynosi domyślnie", o: ["1", "0", "110", "120"], k: 0, w: "0 - sieć bezpośrednio podłączona." },
    { p: "Protokół routingu stanu łącza to", o: ["OSPF", "RIP", "BGP jako wektor odległości", "ARP"], k: 0, w: "OSPF buduje mapę topologii (LSDB) i liczy najkrótsze ścieżki." },
    { p: "Maksymalna liczba skoków w RIP, przy której trasa jest jeszcze osiągalna, to", o: ["15", "16", "255", "30"], k: 0, w: "16 oznacza sieć nieosiągalną." },
    { p: "Polecenie ustawiające trasę domyślną przez 10.0.0.1 to", o: ["ip route 0.0.0.0 0.0.0.0 10.0.0.1", "ip default 10.0.0.1 any", "route add default all", "ip route 255.255.255.255 0.0.0.0 10.0.0.1"], k: 0, w: "Sieć 0.0.0.0/0 pasuje do każdego adresu." },
    { p: "Maska odwrotna (wildcard) dla sieci /30 to", o: ["0.0.0.3", "255.255.255.252", "0.0.0.252", "0.0.0.255"], k: 0, w: "255.255.255.255 − 255.255.255.252 = 0.0.0.3." },
    { p: "Protokół routingu stosowany między systemami autonomicznymi w internecie to", o: ["BGP", "OSPF", "RIPv2", "EIGRP"], k: 0, w: "Border Gateway Protocol." },
    { p: "Translacja wielu adresów prywatnych na jeden adres publiczny z rozróżnieniem po portach to", o: ["PAT (NAT overload)", "NAT statyczny", "DHCP", "VLAN"], k: 0, w: "Najpopularniejsza forma NAT w małych firmach." },
    { p: "Standardowa lista ACL filtruje pakiety na podstawie", o: ["adresu źródłowego", "portu docelowego", "protokołu i adresu celu", "adresu MAC"], k: 0, w: "Rozszerzone ACL biorą pod uwagę też cel, protokół i porty." },
    { p: "Na końcu każdej listy ACL występuje niejawnie reguła", o: ["deny any", "permit any", "log all", "redirect"], k: 0, w: "Dlatego lista z samymi deny zablokuje cały ruch." },
    { p: "Rozszerzone ACL zaleca się umieszczać", o: ["jak najbliżej źródła ruchu", "jak najbliżej celu", "tylko na interfejsie WAN", "na przełączniku dostępowym"], k: 0, w: "Standardowe - blisko celu." },
    { p: "Protokół IPsec zapewniający szyfrowanie przesyłanych danych to", o: ["ESP", "AH", "IKE jako jedyny", "GRE"], k: 0, w: "AH zapewnia tylko integralność i uwierzytelnienie." },
    { p: "Adres IPv6 lokalny łącza zaczyna się od", o: ["fe80::", "2001::", "ff02::", "::1"], k: 0, w: "Prefiks fe80::/10." },
    { p: "Mechanizm automatycznej konfiguracji adresu IPv6 bez serwera DHCP to", o: ["SLAAC", "APIPA", "NAT64", "ARP"], k: 0, w: "Host tworzy adres z prefiksu ogłaszanego przez router." },
    { p: "Protokół do monitorowania i zarządzania urządzeniami sieciowymi to", o: ["SNMP", "SMTP", "SIP", "TFTP"], k: 0, w: "Agent udostępnia dane z bazy MIB." },
    { p: "Zmienność opóźnienia pakietów, szczególnie szkodliwa dla VoIP, to", o: ["jitter", "throughput", "TTL", "MTU"], k: 0, w: "Kompensuje ją bufor dejittera." },
    { p: "Protokół sygnalizacyjny używany w telefonii IP to", o: ["SIP", "RTP", "SNMP", "FTP"], k: 0, w: "RTP przenosi sam głos." },
    { p: "Trasa zapasowa ze zwiększoną odległością administracyjną to", o: ["floating static route", "trasa domyślna", "trasa bezpośrednio podłączona", "trasa hosta"], k: 0, w: "Wchodzi do tablicy, gdy trasa główna zniknie." },
    { p: "Polecenie pokazujące tablicę routingu w Cisco IOS to", o: ["show ip route", "show vlan", "show mac address-table", "show cdp"], k: 0, w: "Litery C, S, O, R oznaczają źródło trasy." },
    { p: "Prefiks /30 stosuje się typowo na łączach", o: ["punkt-punkt między routerami", "LAN dla 200 hostów", "Wi-Fi dla gości", "w sieci VLAN serwerów"], k: 0, w: "Daje dokładnie 2 adresy hostów." },
    { p: "Kodek G.711 wymaga przepustowości (bez narzutów) równej", o: ["64 kb/s", "8 kb/s", "1 Mb/s", "16 kb/s"], k: 0, w: "G.729 - 8 kb/s." },
    { p: "Technologia operatorska przekazująca pakiety na podstawie etykiet to", o: ["MPLS", "PPPoE", "VLAN", "STP"], k: 0, w: "Multiprotocol Label Switching." },
    { p: "Polecenie pokazujące aktualne translacje NAT to", o: ["show ip nat translations", "show nat table all", "show ip arp", "debug ip route"], k: 0, w: "Pokazuje adresy inside local/global." },
    { p: "Protokół do synchronizacji czasu urządzeń sieciowych to", o: ["NTP", "SNMP", "Syslog", "DNS"], k: 0, w: "Poprawny czas jest potrzebny m.in. do analizy logów." }
  ],
  praktyka: {
    tytul: "Połączenie oddziału z centralą i dostęp do internetu",
    model: "w", czas: 150,
    opis: `
<p>Router R1 (centrala) i R2 (oddział) połączone łączem szeregowym lub Ethernet. Adresacja:</p>
<div class="tw"><table><tr><th>Urządzenie</th><th>Interfejs</th><th>Adres</th></tr>
<tr><td>R1</td><td>LAN</td><td>192.168.1.1/24</td></tr><tr><td>R1</td><td>WAN do R2</td><td>10.0.0.1/30</td></tr><tr><td>R1</td><td>do ISP</td><td>203.0.113.2/30 (brama ISP .1)</td></tr>
<tr><td>R2</td><td>LAN</td><td>192.168.2.1/24</td></tr><tr><td>R2</td><td>WAN do R1</td><td>10.0.0.2/30</td></tr></table></div>
<ol><li>Skonfiguruj interfejsy i nazwy routerów.</li><li>Skonfiguruj OSPF (proces 1, obszar 0) dla sieci LAN i łącza 10.0.0.0/30.</li><li>Na R1 trasa domyślna do ISP i rozgłoszenie jej w OSPF (<code>default-information originate</code>).</li><li>Na R1 PAT dla sieci 192.168.1.0/24 i 192.168.2.0/24 na interfejsie do ISP.</li><li>ACL na R2: blokada ruchu Telnet (TCP 23) z sieci 192.168.2.0/24 do centrali, reszta dozwolona.</li><li>Testy i zapis konfiguracji.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Interfejsy", pozycje: ["Adresy wszystkich interfejsów zgodne z tabelą", "Interfejsy w stanie up/up (no shutdown)", "Nazwy R1 i R2 ustawione"] },
      { grupa: "Rezultat 2: Routing", pozycje: ["OSPF na obu routerach z poprawnymi maskami wildcard i area 0", "Sąsiedztwo OSPF nawiązane", "Trasa domyślna na R1 i default-information originate", "R2 ma w tablicy trasę O*E2 0.0.0.0/0"] },
      { grupa: "Rezultat 3: NAT i ACL", pozycje: ["ACL obejmująca obie sieci LAN dla NAT", "ip nat inside/outside na właściwych interfejsach, overload", "ACL rozszerzona blokująca TCP 23 i permit ip any any na końcu", "ACL przypisana do interfejsu LAN R2 w kierunku in"] },
      { grupa: "Rezultat 4: Testy", pozycje: ["ping z hosta oddziału do hosta centrali i do adresu ISP działa", "Konfiguracje zapisane na obu routerach"] }
    ],
    rozwiazanie: `
<pre>! R1
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0
 network 10.0.0.0 0.0.0.3 area 0
 default-information originate
ip route 0.0.0.0 0.0.0.0 203.0.113.1
access-list 1 permit 192.168.1.0 0.0.0.255
access-list 1 permit 192.168.2.0 0.0.0.255
ip nat inside source list 1 interface gi0/2 overload
! LAN i WAN do R2: ip nat inside; do ISP: ip nat outside

! R2
router ospf 1
 network 192.168.2.0 0.0.0.255 area 0
 network 10.0.0.0 0.0.0.3 area 0
access-list 120 deny tcp 192.168.2.0 0.0.0.255 192.168.1.0 0.0.0.255 eq 23
access-list 120 permit ip any any
interface gi0/0
 ip access-group 120 in</pre>
<div class="tip">Interfejs łączący R1 z R2 też musi mieć <code>ip nat inside</code> - inaczej ruch z oddziału nie zostanie przetłumaczony.</div>`
  }
};
