window.KURSY = window.KURSY || {};
window.KURSY["INF.02"] = {
  podstawowy: [
    {
      tytul: "Budowa komputera i podzespoły",
      tresc: `
<h4>Płyta główna i procesor</h4>
<ul>
<li><b>Gniazdo procesora</b> (socket) musi pasować do procesora: Intel - LGA (piny w gnieździe), AMD - AM4/AM5 (AM5 to też LGA).</li>
<li><b>Chipset</b> łączy procesor z resztą układów, decyduje o obsługiwanych funkcjach.</li>
<li><b>BIOS/UEFI</b> - oprogramowanie płyty głównej; uruchamia POST (test podzespołów) i system. UEFI obsługuje dyski GPT i Secure Boot.</li>
<li>Formaty płyt: ATX (305 × 244 mm), microATX, mini-ITX.</li>
</ul>
<h4>Pamięć</h4>
<ul>
<li><b>RAM</b> - pamięć operacyjna, ulotna. Typy: DDR3, DDR4, DDR5 - niezamienne, mają wycięcie w innym miejscu. <b>Dual channel</b> - dwa identyczne moduły w gniazdach tego samego koloru.</li>
<li><b>ROM / Flash</b> - pamięć nieulotna (np. układ z firmware UEFI).</li>
<li><b>Cache</b> (L1, L2, L3) - szybka pamięć podręczna w procesorze.</li>
</ul>
<h4>Pamięci masowe i złącza</h4>
<div class="tw"><table><tr><th>Interfejs</th><th>Zastosowanie</th><th>Przepustowość</th></tr>
<tr><td>SATA III</td><td>dyski HDD, SSD 2,5″</td><td>6 Gb/s</td></tr>
<tr><td>M.2 NVMe (PCIe)</td><td>szybkie dyski SSD</td><td>PCIe 3.0 x4 ≈ 4 GB/s, PCIe 4.0 x4 ≈ 8 GB/s</td></tr>
<tr><td>PCI Express x16</td><td>karta graficzna</td><td>-</td></tr>
<tr><td>USB 2.0 / 3.2 Gen 1 / 3.2 Gen 2</td><td>urządzenia zewnętrzne</td><td>480 Mb/s / 5 Gb/s / 10 Gb/s</td></tr></table></div>
<p>Wyjścia wideo: <b>VGA</b> (analogowe, D-Sub 15), <b>DVI</b>, <b>HDMI</b> i <b>DisplayPort</b> (cyfrowe, przesyłają też dźwięk).</p>
<h4>Zasilacz</h4>
<p>Zasilacz ATX dostarcza napięcia <b>+3,3 V, +5 V, +12 V</b> (i −12 V). Wtyczka płyty głównej ma 24 piny, procesora - 4+4 (EPS 8 pin), karty graficznej - 6+2 pin PCIe. Moc dobiera się do sumy poboru podzespołów z zapasem; certyfikat 80 PLUS świadczy o sprawności.</p>
<div class="tip">BHP przy montażu: odłącz zasilanie, używaj opaski antystatycznej (ESD) połączonej z uziemieniem, trzymaj moduły za krawędzie.</div>`
    },
    {
      tytul: "Systemy liczbowe i jednostki",
      tresc: `
<h4>Zamiana systemów</h4>
<ul>
<li>Dwójkowy (BIN) → dziesiętny (DEC): suma potęg dwójki, np. <code>1011₂ = 8 + 0 + 2 + 1 = 11</code>.</li>
<li>DEC → BIN: dzielenie przez 2 i zapis reszt od końca.</li>
<li>Szesnastkowy (HEX): cyfry 0-9 i A-F (A=10 … F=15). Każda cyfra HEX to 4 bity: <code>F = 1111</code>, <code>A3h = 1010 0011</code>.</li>
<li>Ósemkowy (OCT): każda cyfra to 3 bity - np. uprawnienia Linuksa <code>755</code>.</li>
</ul>
<h4>Jednostki</h4>
<div class="tw"><table><tr><th>Jednostka</th><th>Wartość</th></tr>
<tr><td>1 bajt (B)</td><td>8 bitów</td></tr><tr><td>1 KiB</td><td>1024 B</td></tr><tr><td>1 kB (SI)</td><td>1000 B</td></tr><tr><td>1 MiB</td><td>1024 KiB</td></tr><tr><td>1 GiB</td><td>1024 MiB</td></tr></table></div>
<p>Przepustowość łączy podaje się w bitach na sekundę (Mb/s), pojemność plików - w bajtach. 100 Mb/s to ok. 12,5 MB/s.</p>
<h4>Kody uzupełnień</h4>
<p>Liczby ujemne zapisuje się w kodzie <b>U2</b>: odwracamy bity i dodajemy 1. Na 8 bitach zakres U2 to −128…127.</p>`
    },
    {
      tytul: "Sieci komputerowe: model, adresacja IPv4",
      tresc: `
<h4>Model OSI i TCP/IP</h4>
<div class="tw"><table><tr><th>Warstwa OSI</th><th>Urządzenie / protokół</th></tr>
<tr><td>7 aplikacji, 6 prezentacji, 5 sesji</td><td>HTTP, HTTPS, FTP, DNS, DHCP, SMTP, POP3, IMAP, SSH, Telnet</td></tr>
<tr><td>4 transportowa</td><td>TCP (połączeniowy), UDP (bezpołączeniowy)</td></tr>
<tr><td>3 sieciowa</td><td>router, IP, ICMP (ping)</td></tr>
<tr><td>2 łącza danych</td><td>przełącznik (switch), mostek, adres MAC, ARP</td></tr>
<tr><td>1 fizyczna</td><td>koncentrator (hub), wzmacniak, kabel, karta sieciowa</td></tr></table></div>
<h4>Porty</h4>
<p>HTTP 80, HTTPS 443, FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, POP3 110, IMAP 143, RDP 3389.</p>
<h4>Adresacja IPv4</h4>
<ul>
<li>Adres ma 32 bity (4 oktety). Maska <code>/24 = 255.255.255.0</code>, <code>/25 = 255.255.255.128</code>, <code>/26 = .192</code>, <code>/27 = .224</code>, <code>/28 = .240</code>, <code>/30 = .252</code>.</li>
<li>Liczba hostów w podsieci = <b>2<sup>(32 − prefiks)</sup> − 2</b> (adres sieci i rozgłoszeniowy odpadają). /24 → 254, /26 → 62, /30 → 2.</li>
<li>Adresy prywatne: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, <code>192.168.0.0/16</code>. Pętla zwrotna: <code>127.0.0.1</code>. APIPA (brak DHCP): <code>169.254.x.x</code>.</li>
</ul>
<h4>Przykład</h4>
<p>Host <code>192.168.10.70/26</code>: blok ma 64 adresy, więc podsieci zaczynają się od .0, .64, .128, .192. Adres sieci: <code>192.168.10.64</code>, rozgłoszeniowy: <code>192.168.10.127</code>, hosty: .65-.126.</p>
<h4>IPv6</h4>
<p>128 bitów, zapis szesnastkowy w 8 grupach. Ciąg zer można skrócić <code>::</code> tylko raz. Adres lokalny łącza zaczyna się od <code>fe80::</code>, pętla zwrotna to <code>::1</code>.</p>`
    },
    {
      tytul: "Okablowanie i urządzenia sieciowe",
      tresc: `
<h4>Skrętka</h4>
<ul>
<li>Kategoria 5e - do 1 Gb/s, kategoria 6 - 1 Gb/s (10 Gb/s do 55 m), 6A - 10 Gb/s do 100 m. Maksymalna długość segmentu: <b>100 m</b>.</li>
<li>Oznaczenia ekranowania: U/UTP (bez ekranu), F/UTP (folia na całości), S/FTP (oplot ogólny i folia na każdej parze).</li>
<li>Złącze <b>RJ-45</b> (8P8C). Sekwencja <b>T568B</b>: biało-pomarańczowy, pomarańczowy, biało-zielony, niebieski, biało-niebieski, zielony, biało-brązowy, brązowy. T568A zamienia pary pomarańczową i zieloną.</li>
<li>Kabel prosty - oba końce tak samo; kabel skrosowany - T568A na jednym, T568B na drugim końcu.</li>
<li>Narzędzia: zaciskarka, narzędzie uderzeniowe (LSA) do gniazd i paneli, tester okablowania.</li>
</ul>
<h4>Światłowód</h4>
<p>Odporny na zakłócenia elektromagnetyczne. <b>Jednomodowy</b> (SM) - duże odległości, laser; <b>wielomodowy</b> (MM) - krótsze odcinki. Złącza: SC, LC, ST.</p>
<h4>Urządzenia</h4>
<ul>
<li><b>Przełącznik</b> (switch) - przekazuje ramki na podstawie adresów MAC; obsługuje VLAN-y (zarządzalny).</li>
<li><b>Router</b> - łączy różne sieci, wybiera trasę na podstawie adresów IP, często realizuje NAT.</li>
<li><b>Punkt dostępowy</b> (AP) - sieć bezprzewodowa. Standardy Wi-Fi: 802.11n (Wi-Fi 4), ac (Wi-Fi 5, 5 GHz), ax (Wi-Fi 6). Najbezpieczniejsze szyfrowanie: <b>WPA3</b>, potem WPA2-AES. WEP jest przestarzały.</li>
<li><b>Topologie</b>: gwiazda (najpopularniejsza w LAN), magistrala, pierścień, siatka.</li>
</ul>`
    },
    {
      tytul: "Systemy operacyjne Windows i Linux",
      tresc: `
<h4>Windows - polecenia</h4>
<div class="tw"><table><tr><th>Polecenie</th><th>Działanie</th></tr>
<tr><td><code>ipconfig /all</code></td><td>konfiguracja kart sieciowych; <code>/release</code>, <code>/renew</code> - DHCP; <code>/flushdns</code> - czyszczenie pamięci DNS</td></tr>
<tr><td><code>ping</code>, <code>tracert</code>, <code>pathping</code></td><td>test łączności, trasa pakietów</td></tr>
<tr><td><code>nslookup</code></td><td>zapytania do DNS</td></tr>
<tr><td><code>netstat -an</code></td><td>połączenia i otwarte porty</td></tr>
<tr><td><code>chkdsk</code>, <code>sfc /scannow</code></td><td>sprawdzanie dysku, naprawa plików systemowych</td></tr>
<tr><td><code>diskpart</code>, <code>format</code></td><td>partycjonowanie, formatowanie</td></tr>
<tr><td><code>gpupdate /force</code>, <code>gpresult</code></td><td>zasady grupy</td></tr></table></div>
<p>Przystawki MMC: <code>diskmgmt.msc</code> (zarządzanie dyskami), <code>devmgmt.msc</code> (menedżer urządzeń), <code>services.msc</code> (usługi), <code>eventvwr.msc</code> (dziennik zdarzeń), <code>gpedit.msc</code> (lokalne zasady grupy), <code>lusrmgr.msc</code> (lokalni użytkownicy). <code>regedit</code> - rejestr, gałąź <code>HKEY_CURRENT_USER</code> dotyczy zalogowanego użytkownika.</p>
<h4>Systemy plików</h4>
<p><b>NTFS</b> - uprawnienia, szyfrowanie EFS, kompresja, pliki powyżej 4 GB. <b>FAT32</b> - maks. plik 4 GB. <b>exFAT</b> - nośniki przenośne. Linux: <b>ext4</b>, swap.</p>
<h4>Linux - polecenia</h4>
<div class="tw"><table><tr><th>Polecenie</th><th>Działanie</th></tr>
<tr><td><code>ls -l</code>, <code>cd</code>, <code>pwd</code>, <code>mkdir</code>, <code>rm -r</code>, <code>cp</code>, <code>mv</code></td><td>praca z plikami</td></tr>
<tr><td><code>chmod 754 plik</code></td><td>uprawnienia: właściciel rwx (7), grupa r-x (5), inni r-- (4)</td></tr>
<tr><td><code>chown user:grupa plik</code></td><td>zmiana właściciela</td></tr>
<tr><td><code>useradd</code>, <code>passwd</code>, <code>usermod</code>, <code>groupadd</code></td><td>konta użytkowników</td></tr>
<tr><td><code>ip a</code> / <code>ifconfig</code>, <code>ip route</code></td><td>konfiguracja sieci</td></tr>
<tr><td><code>apt install</code>, <code>apt update</code></td><td>pakiety w Debianie/Ubuntu</td></tr>
<tr><td><code>ps</code>, <code>top</code>, <code>kill</code></td><td>procesy</td></tr>
<tr><td><code>df -h</code>, <code>du</code>, <code>mount</code>, <code>fdisk</code></td><td>dyski i partycje</td></tr></table></div>
<p>Ważne pliki: <code>/etc/passwd</code> (konta), <code>/etc/shadow</code> (hasła), <code>/etc/fstab</code> (montowanie), <code>/etc/hosts</code>.</p>`
    },
    {
      tytul: "Urządzenia peryferyjne i diagnostyka",
      tresc: `
<h4>Drukarki</h4>
<ul>
<li><b>Laserowa</b>: toner, bęben światłoczuły, <b>zespół utrwalający (grzałka, fuser)</b> topi toner. Kolejność: ładowanie, naświetlanie, wywoływanie, przenoszenie, utrwalanie, czyszczenie.</li>
<li><b>Atramentowa</b>: termiczna lub piezoelektryczna; zaschnięte dysze czyści się programowo.</li>
<li><b>Igłowa</b>: druk przez taśmę barwiącą, możliwość druku kopii przez kalkę.</li>
<li><b>Termiczna</b>: papier termoczuły (paragony, etykiety).</li>
<li>Drukarki 3D: FDM - filament topiony w głowicy.</li>
</ul>
<h4>Monitory i skanery</h4>
<p>Parametry monitora: rozdzielczość, przekątna, czas reakcji (ms), częstotliwość odświeżania (Hz), jasność (cd/m²), kontrast. Matryce: TN (szybkie), IPS (kolory, kąty widzenia), VA (kontrast). Rozdzielczość skanera i drukarki - w <b>dpi</b>.</p>
<h4>Sygnały POST i diagnostyka</h4>
<ul>
<li>Sygnały dźwiękowe BIOS-u oznaczają różne usterki (np. brak lub błąd pamięci RAM) - znaczenie podaje producent BIOS-u.</li>
<li>Program S.M.A.R.T. odczytuje stan dysku; <code>memtest86</code> testuje RAM.</li>
<li>Przegrzewanie: sprawdź pastę termoprzewodzącą, wentylatory, kurz.</li>
</ul>
<h4>Kopie zapasowe</h4>
<p><b>Pełna</b> - wszystkie dane; <b>przyrostowa</b> - zmiany od ostatniej dowolnej kopii; <b>różnicowa</b> - zmiany od ostatniej pełnej. Zasada <b>3-2-1</b>: 3 kopie, 2 różne nośniki, 1 poza siedzibą.</p>
<h4>RAID</h4>
<p>RAID 0 - paskowanie (szybkość, brak bezpieczeństwa, min. 2 dyski), RAID 1 - mirroring (kopia lustrzana, 2 dyski), RAID 5 - paskowanie z parzystością (min. 3 dyski, odporny na awarię jednego), RAID 10 - połączenie 1 i 0 (min. 4 dyski).</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Windows Server: Active Directory, DHCP, DNS",
      tresc: `
<h4>Role serwera</h4>
<ul>
<li><b>AD DS</b> (Active Directory Domain Services) - usługa katalogowa; serwer z tą rolą to <b>kontroler domeny</b>. Obiekty: użytkownicy, grupy, komputery, <b>jednostki organizacyjne (OU)</b>.</li>
<li><b>GPO</b> - obiekty zasad grupy; przypisuje się je do lokacji, domen i OU. Kolejność stosowania: lokalne → lokacja → domena → OU (LSDOU).</li>
<li><b>DHCP</b> - zakres (pula), wykluczenia, <b>rezerwacje</b> (stały adres dla adresu MAC), opcje: brama (003), DNS (006). Proces DORA: Discover, Offer, Request, Acknowledge.</li>
<li><b>DNS</b> - strefy wyszukiwania do przodu (nazwa → IP) i wstecznego (IP → nazwa). Rekordy: A (IPv4), AAAA (IPv6), CNAME (alias), MX (poczta), PTR (wsteczny), NS.</li>
<li>Inne role: serwer plików (udziały, uprawnienia NTFS i udziału - obowiązuje bardziej restrykcyjne), WDS (instalacja przez sieć), IIS (serwer WWW), usługi pulpitu zdalnego, Hyper-V.</li>
</ul>
<h4>Profile i grupy</h4>
<p>Profil <b>mobilny</b> przechowywany jest na serwerze i dostępny z każdego komputera domeny; <b>obowiązkowy</b> - plik <code>NTUSER.MAN</code>, zmiany nie są zapisywane. Zakresy grup: lokalna domeny, globalna, uniwersalna.</p>
<h4>Polecenia PowerShell</h4>
<pre>Get-ADUser -Filter *
New-ADUser -Name "Jan Kowalski" -SamAccountName jkowalski
Get-NetIPAddress
Test-Connection 192.168.1.1</pre>`
    },
    {
      tytul: "Konfiguracja przełączników i routerów",
      tresc: `
<h4>VLAN</h4>
<p>Wirtualne sieci LAN dzielą jeden przełącznik na odrębne domeny rozgłoszeniowe. Port <b>access</b> należy do jednego VLAN-u, port <b>trunk</b> przenosi wiele VLAN-ów ze znacznikiem <b>IEEE 802.1Q</b>. Komunikacja między VLAN-ami wymaga routera lub przełącznika warstwy 3.</p>
<h4>Inne mechanizmy</h4>
<ul>
<li><b>STP</b> (Spanning Tree) - zapobiega pętlom w sieci przełączników.</li>
<li><b>Agregacja łączy</b> (LACP, 802.3ad) - łączy porty w jedno logiczne łącze.</li>
<li><b>Port mirroring</b> - kopia ruchu do analizy (np. Wireshark).</li>
<li><b>PoE</b> (802.3af/at) - zasilanie urządzeń przez skrętkę (kamery, AP, telefony VoIP).</li>
<li><b>NAT/PAT</b> - wiele adresów prywatnych wychodzi do internetu przez jeden publiczny.</li>
<li><b>Przekierowanie portów</b> - udostępnienie usługi z sieci lokalnej (np. serwera WWW).</li>
<li>Routing statyczny a dynamiczny (RIP, OSPF). Brama domyślna to adres routera w sieci lokalnej.</li>
</ul>
<h4>Zadanie praktyczne - typowy przebieg</h4>
<ol><li>Wykonaj i podłącz kabel (T568B), sprawdź testerem.</li><li>Zaloguj się do routera/przełącznika (adres i hasło z treści zadania), ustaw adresację LAN, DHCP, SSID i szyfrowanie WPA2/WPA3.</li><li>Skonfiguruj interfejsy serwera i stacji, sprawdź łączność poleceniem <code>ping</code>.</li><li>Skonfiguruj rolę serwera (np. DHCP, użytkownicy, udział) zgodnie z poleceniem.</li></ol>`
    },
    {
      tytul: "Bezpieczeństwo systemów i sieci",
      tresc: `
<h4>Zagrożenia</h4>
<ul>
<li><b>Wirus</b> - dołącza się do plików; <b>robak</b> - rozprzestrzenia się samodzielnie przez sieć; <b>koń trojański</b> - udaje przydatny program; <b>ransomware</b> - szyfruje dane i żąda okupu; <b>spyware</b> / <b>keylogger</b> - szpieguje.</li>
<li><b>Phishing</b> - podszywanie się (np. fałszywy e-mail banku), <b>DoS/DDoS</b> - przeciążenie usługi, <b>man-in-the-middle</b> - przechwytywanie komunikacji, <b>spoofing</b> - fałszowanie adresów.</li>
</ul>
<h4>Ochrona</h4>
<ul>
<li>Aktualizacje systemu, program antywirusowy, zapora sieciowa (firewall), konto bez uprawnień administratora do codziennej pracy.</li>
<li>Silne hasła i uwierzytelnianie wieloskładnikowe.</li>
<li>Szyfrowanie dysku: <b>BitLocker</b> (Windows), LUKS (Linux).</li>
<li><b>Filtrowanie adresów MAC</b> i ukrycie SSID są słabymi zabezpieczeniami - podstawą jest szyfrowanie WPA2/WPA3 z silnym kluczem.</li>
<li>DMZ - strefa dla serwerów dostępnych z internetu, oddzielona od sieci wewnętrznej.</li>
<li>VPN - szyfrowany tunel przez sieć publiczną.</li>
</ul>
<h4>Licencje oprogramowania</h4>
<p><b>OEM</b> - przypisana do komputera; <b>BOX</b> - pudełkowa, przenośna; <b>GNU GPL</b> - wolne oprogramowanie, kod otwarty; <b>freeware</b> - darmowe użytkowanie; <b>shareware</b> - darmowe na próbę; <b>trial</b> - ograniczona czasowo.</p>`
    }
  ],
  pytania: [
    { p: "Który interfejs służy do podłączenia dysku SSD M.2 NVMe?", o: ["PCI Express", "SATA II", "IDE (PATA)", "USB 2.0"], k: 0, w: "Dyski NVMe działają na magistrali PCIe; dyski M.2 SATA korzystają z protokołu SATA." },
    { p: "Maksymalna przepustowość interfejsu SATA III wynosi", o: ["6 Gb/s", "3 Gb/s", "1,5 Gb/s", "10 Gb/s"], k: 0, w: "SATA I - 1,5 Gb/s, SATA II - 3 Gb/s, SATA III - 6 Gb/s." },
    { p: "Element drukarki laserowej odpowiedzialny za trwałe utrwalenie tonera na papierze to", o: ["zespół utrwalający (grzałka)", "bęben światłoczuły", "głowica drukująca", "taśma barwiąca"], k: 0, w: "Fuser topi toner w wysokiej temperaturze i dociska go do papieru." },
    { p: "Liczba 1011 0101₂ zapisana w systemie szesnastkowym to", o: ["B5", "A5", "B6", "5B"], k: 0, w: "1011 = B, 0101 = 5." },
    { p: "Liczba dziesiętna 25 w systemie dwójkowym to", o: ["11001", "10101", "11010", "10011"], k: 0, w: "16 + 8 + 1 = 25 → 11001." },
    { p: "Ile adresów hostów można zaadresować w podsieci o masce 255.255.255.192?", o: ["62", "64", "126", "30"], k: 0, w: "Maska /26 → 2^6 = 64 adresy, minus adres sieci i rozgłoszeniowy = 62." },
    { p: "Adres rozgłoszeniowy sieci, do której należy host 192.168.10.70/26, to", o: ["192.168.10.127", "192.168.10.63", "192.168.10.255", "192.168.10.128"], k: 0, w: "Podsieć /26 zawierająca .70 to .64-.127; ostatni adres jest rozgłoszeniowy." },
    { p: "Maska podsieci /27 zapisana dziesiętnie to", o: ["255.255.255.224", "255.255.255.240", "255.255.255.192", "255.255.255.248"], k: 0, w: "27 bitów: trzy pierwsze bity czwartego oktetu = 128 + 64 + 32 = 224." },
    { p: "Który adres IPv4 należy do puli adresów prywatnych?", o: ["172.20.5.1", "172.32.0.1", "11.0.0.1", "193.168.1.1"], k: 0, w: "Pula prywatna 172.16.0.0/12 obejmuje adresy 172.16.0.0-172.31.255.255." },
    { p: "Komputer otrzymał adres 169.254.12.5. Oznacza to, że", o: ["nie uzyskał adresu z serwera DHCP", "ma poprawnie przydzielony adres publiczny", "jest serwerem DNS", "używa adresu pętli zwrotnej"], k: 0, w: "Adresy 169.254.0.0/16 (APIPA) system przydziela sam, gdy DHCP nie odpowiada." },
    { p: "Urządzenie sieciowe działające w warstwie 2 modelu OSI, kierujące ramki na podstawie adresów MAC, to", o: ["przełącznik", "router", "koncentrator", "wzmacniak"], k: 0, w: "Switch uczy się adresów MAC na portach i przekazuje ramki tylko tam, gdzie trzeba." },
    { p: "Protokół działający w warstwie transportowej, zapewniający niezawodne połączenie, to", o: ["TCP", "UDP", "IP", "ARP"], k: 0, w: "TCP jest połączeniowy, potwierdza dostarczenie i kontroluje kolejność segmentów." },
    { p: "Protokół HTTPS domyślnie korzysta z portu", o: ["443", "80", "21", "8080"], k: 0, w: "HTTP - 80, HTTPS - 443." },
    { p: "Usługa zamieniająca nazwy domenowe na adresy IP to", o: ["DNS", "DHCP", "FTP", "SMTP"], k: 0, w: "DNS rozwiązuje nazwy na adresy (rekord A, AAAA)." },
    { p: "Protokół służący do automatycznego przydzielania adresów IP to", o: ["DHCP", "DNS", "ICMP", "SNMP"], k: 0, w: "DHCP przydziela adres, maskę, bramę i serwery DNS." },
    { p: "Maksymalna długość segmentu kabla skrętki kategorii 5e w sieci Ethernet wynosi", o: ["100 m", "50 m", "185 m", "500 m"], k: 0, w: "Dla skrętki w standardzie Ethernet segment ma maksymalnie 100 m." },
    { p: "W sekwencji T568B na pierwszym pinie złącza RJ-45 znajduje się przewód", o: ["biało-pomarańczowy", "biało-zielony", "niebieski", "brązowy"], k: 0, w: "T568B: b-pom, pom, b-ziel, nieb, b-nieb, ziel, b-brąz, brąz." },
    { p: "Kabel skrosowany ma na końcach zakończenia", o: ["T568A i T568B", "T568B i T568B", "T568A i T568A", "dowolne, byle te same"], k: 0, w: "Różne sekwencje na końcach zamieniają pary nadawcze i odbiorcze." },
    { p: "Narzędzie do zakańczania przewodów w gnieździe keystone lub panelu krosowym to", o: ["narzędzie uderzeniowe (LSA)", "zaciskarka RJ-45", "spawarka światłowodowa", "lutownica"], k: 0, w: "Punch-down tool wciska żyły w złącza IDC/LSA." },
    { p: "Najbezpieczniejszym z wymienionych sposobów zabezpieczenia sieci Wi-Fi jest", o: ["WPA3", "WEP", "filtrowanie adresów MAC", "ukrycie SSID"], k: 0, w: "WPA3 to najnowszy standard szyfrowania. Filtrowanie MAC i ukrywanie SSID łatwo obejść." },
    { p: "Polecenie systemu Windows wyświetlające pełną konfigurację kart sieciowych to", o: ["ipconfig /all", "netstat -r", "ping -t", "tracert"], k: 0, w: "ipconfig /all pokazuje m.in. adres MAC, DHCP, DNS, bramę." },
    { p: "Polecenie pozwalające sprawdzić trasę pakietów do hosta w Windows to", o: ["tracert", "nslookup", "arp -a", "ipconfig"], k: 0, w: "tracert pokazuje kolejne routery na trasie." },
    { p: "Które polecenie Linux nada plikowi uprawnienia: właściciel - odczyt, zapis, wykonanie; grupa - odczyt i wykonanie; inni - tylko odczyt?", o: ["chmod 754 plik", "chmod 745 plik", "chmod 644 plik", "chmod 777 plik"], k: 0, w: "rwx = 7, r-x = 5, r-- = 4." },
    { p: "Plik systemu Linux przechowujący zaszyfrowane hasła użytkowników to", o: ["/etc/shadow", "/etc/passwd", "/etc/fstab", "/etc/hosts"], k: 0, w: "W /etc/passwd są dane kont, a skróty haseł - w /etc/shadow." },
    { p: "System plików, który nie pozwala zapisać pliku większego niż 4 GB, to", o: ["FAT32", "NTFS", "exFAT", "ext4"], k: 0, w: "FAT32 ogranicza rozmiar pojedynczego pliku do 4 GB minus 1 bajt." },
    { p: "Przystawka Windows służąca do zarządzania partycjami dysków to", o: ["diskmgmt.msc", "services.msc", "devmgmt.msc", "eventvwr.msc"], k: 0, w: "diskmgmt.msc - Zarządzanie dyskami." },
    { p: "Kopia zapasowa obejmująca pliki zmienione od ostatniej kopii pełnej to kopia", o: ["różnicowa", "przyrostowa", "pełna", "lustrzana"], k: 0, w: "Różnicowa - od ostatniej pełnej; przyrostowa - od ostatniej dowolnej." },
    { p: "Macierz RAID 1 to", o: ["kopia lustrzana na dwóch dyskach", "paskowanie bez nadmiarowości", "paskowanie z parzystością", "połączenie RAID 5 i RAID 0"], k: 0, w: "RAID 1 (mirroring) zapisuje te same dane na dwóch dyskach." },
    { p: "Minimalna liczba dysków potrzebna do utworzenia RAID 5 to", o: ["3", "2", "4", "5"], k: 0, w: "RAID 5 potrzebuje co najmniej trzech dysków i znosi awarię jednego." },
    { p: "Serwer z zainstalowaną rolą AD DS pełni funkcję", o: ["kontrolera domeny", "serwera wydruku", "serwera WWW", "routera"], k: 0, w: "Active Directory Domain Services uruchamia kontroler domeny." },
    { p: "Rekord DNS, który wskazuje serwer poczty dla domeny, to", o: ["MX", "A", "CNAME", "PTR"], k: 0, w: "MX - Mail Exchanger. PTR służy do wyszukiwania wstecznego." },
    { p: "Aby komputer zawsze otrzymywał z serwera DHCP ten sam adres IP, należy utworzyć", o: ["rezerwację dla jego adresu MAC", "wykluczenie z zakresu", "nowy zakres", "strefę wyszukiwania wstecznego"], k: 0, w: "Rezerwacja wiąże adres IP z adresem MAC karty." },
    { p: "Profil użytkownika, którego zmiany nie są zapisywane po wylogowaniu, to profil", o: ["obowiązkowy", "mobilny", "lokalny", "tymczasowy domowy"], k: 0, w: "Profil obowiązkowy ma plik NTUSER.MAN." },
    { p: "Standard umożliwiający przesyłanie wielu VLAN-ów jednym łączem z oznaczaniem ramek to", o: ["IEEE 802.1Q", "IEEE 802.3af", "IEEE 802.11ac", "IEEE 802.1X"], k: 0, w: "802.1Q dodaje znacznik VLAN do ramki na łączu trunk." },
    { p: "Protokół zapobiegający powstawaniu pętli w sieci przełączników to", o: ["STP", "NAT", "ARP", "RIP"], k: 0, w: "Spanning Tree Protocol blokuje nadmiarowe ścieżki." },
    { p: "Program, który samodzielnie rozprzestrzenia się przez sieć, wykorzystując luki w systemach, to", o: ["robak", "koń trojański", "keylogger", "adware"], k: 0, w: "Robak nie potrzebuje pliku nosiciela." },
    { p: "Licencja oprogramowania przypisana na stałe do komputera, z którym została kupiona, to licencja", o: ["OEM", "BOX", "GNU GPL", "freeware"], k: 0, w: "OEM nie można przenieść na inny komputer." },
    { p: "Standard bezprzewodowy oznaczony jako Wi-Fi 6 to", o: ["IEEE 802.11ax", "IEEE 802.11n", "IEEE 802.11ac", "IEEE 802.11g"], k: 0, w: "802.11n - Wi-Fi 4, 802.11ac - Wi-Fi 5, 802.11ax - Wi-Fi 6." },
    { p: "Podczas montażu podzespołów komputera należy używać", o: ["opaski antystatycznej", "rękawic gumowych grubych", "magnetycznego śrubokręta przy płycie głównej", "suszarki do włosów"], k: 0, w: "Opaska ESD odprowadza ładunki elektrostatyczne, chroniąc układy przed uszkodzeniem." },
    { p: "Napięcia dostarczane przez zasilacz ATX do podzespołów komputera to", o: ["+3,3 V, +5 V, +12 V", "+1,5 V, +9 V, +24 V", "+5 V, +15 V, +230 V", "tylko +12 V"], k: 0, w: "Podstawowe linie zasilacza ATX: 3,3 V, 5 V i 12 V." }
  ]
};
