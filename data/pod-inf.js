/* Podkursy: INF.02, INF.04, INF.07, INF.08 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("INF.02", [
    {
      id: "sprzet", tytul: "Podzespoły i montaż komputera", opis: "Dobierzesz zgodne podzespoły, zmontujesz zestaw i zdiagnozujesz problemy startowe.",
      lekcje: [
        { tytul: "Procesor, gniazdo i płyta główna", tresc: `<h4>Zgodność procesora z płytą</h4>
<p>Procesor musi pasować do <b>gniazda</b> (socketu) i do <b>chipsetu</b>. Intel stosuje gniazda typu <b>LGA</b> (styki w gnieździe, np. LGA1700), AMD w nowych platformach również LGA (AM5), a w starszych <b>PGA</b> (piny na procesorze, AM4). Sama zgodność gniazda nie wystarcza: płyta może wymagać aktualizacji BIOS dla nowszej generacji CPU.</p>
<h4>Parametry procesora</h4>
<ul>
<li><b>Liczba rdzeni i wątków</b>: technologia Hyper-Threading (Intel) lub SMT (AMD) daje 2 wątki na rdzeń.</li>
<li><b>Taktowanie</b>: bazowe i Turbo/Boost, w GHz.</li>
<li><b>Pamięć podręczna</b>: L1 (najmniejsza, najszybsza), L2, L3 (współdzielona przez rdzenie).</li>
<li><b>TDP</b> w watach: informuje, jakie chłodzenie dobrać.</li>
<li><b>Zintegrowany układ graficzny</b>: w Intelu procesory z literą F go nie mają (np. i5-12400F), więc wymagają karty graficznej.</li>
</ul>
<h4>Formaty płyt głównych</h4>
<div class="tw"><table><tr><th>Format</th><th>Wymiary</th><th>Uwagi</th></tr>
<tr><td>ATX</td><td>305 x 244 mm</td><td>standard w obudowach midi tower</td></tr>
<tr><td>micro-ATX</td><td>244 x 244 mm</td><td>mniej slotów PCIe</td></tr>
<tr><td>mini-ITX</td><td>170 x 170 mm</td><td>zwykle 1 slot PCIe, 2 sloty RAM</td></tr></table></div>
<h4>Złącza na płycie</h4>
<p>Karta graficzna trafia do slotu <b>PCIe x16</b>. Przepustowość linii PCIe w przybliżeniu: 3.0 około 1 GB/s, 4.0 około 2 GB/s, 5.0 około 4 GB/s na linię i kierunek. Dysk NVMe w złączu <b>M.2 (klucz M)</b> korzysta zwykle z 4 linii PCIe. Złącze <b>SATA III</b> ma przepustowość 6 Gb/s (około 600 MB/s).</p>
<div class="tip">Pułapka egzaminacyjna: złącze M.2 nie oznacza automatycznie NVMe. Dysk M.2 może pracować w trybie SATA i wtedy jest tak samo wolny jak dysk 2,5 cala SATA.</div>
<h4>Montaż</h4>
<ol><li>Pracuj na macie antystatycznej z opaską ESD połączoną z uziemieniem.</li><li>Procesor montuj według oznaczenia (złoty trójkąt), bez nacisku.</li><li>Pastę termoprzewodzącą nakładaj cienko, tylko gdy chłodzenie jej nie ma fabrycznie.</li><li>Najpierw płyta z CPU i RAM, potem zasilacz, dyski, karta graficzna, na końcu przewody panelu przedniego (F_PANEL).</li></ol>` },
        { tytul: "Pamięci RAM i dyski", tresc: `<h4>Pamięć operacyjna</h4>
<div class="tw"><table><tr><th>Typ</th><th>Styki DIMM</th><th>Napięcie</th><th>Przykład</th></tr>
<tr><td>DDR3</td><td>240</td><td>1,5 V (DDR3L 1,35 V)</td><td>PC3-12800 = DDR3-1600</td></tr>
<tr><td>DDR4</td><td>288</td><td>1,2 V</td><td>PC4-25600 = DDR4-3200</td></tr>
<tr><td>DDR5</td><td>288 (inne wycięcie)</td><td>1,1 V</td><td>PC5-44800 = DDR5-5600</td></tr></table></div>
<p>Oznaczenie PC podaje przepustowość w MB/s: liczba MT/s razy 8 bajtów, np. 3200 x 8 = 25600. W laptopach stosuje się moduły <b>SO-DIMM</b> (DDR4: 260 styków). Każda generacja ma wycięcie w innym miejscu, więc DDR4 nie wejdzie w slot DDR5.</p>
<ul>
<li><b>Dual Channel</b>: dwa identyczne moduły w slotach tego samego koloru (zgodnie z instrukcją płyty, zwykle A2 i B2) podwajają szerokość magistrali.</li>
<li><b>Opóźnienie CL</b>: im niższe przy tym samym taktowaniu, tym lepiej.</li>
<li><b>ECC</b>: korekcja błędów, typowa dla serwerów; <b>Registered (RDIMM)</b> wymaga obsługi przez płytę serwerową.</li>
<li><b>XMP / EXPO</b>: profil w BIOS ustawiający zadeklarowane taktowanie pamięci.</li></ul>
<h4>Pamięci masowe</h4>
<div class="tw"><table><tr><th>Nośnik</th><th>Interfejs</th><th>Transfer orientacyjny</th></tr>
<tr><td>HDD 7200 obr./min</td><td>SATA III</td><td>150-250 MB/s</td></tr>
<tr><td>SSD 2,5 cala</td><td>SATA III</td><td>do około 550 MB/s</td></tr>
<tr><td>SSD NVMe PCIe 3.0 x4</td><td>M.2</td><td>do około 3500 MB/s</td></tr>
<tr><td>SSD NVMe PCIe 4.0 x4</td><td>M.2</td><td>do około 7000 MB/s</td></tr></table></div>
<p>Dysku SSD <b>nie defragmentuje się</b>: system wysyła polecenie <b>TRIM</b>, które informuje kontroler o zwolnionych blokach. Defragmentacja dotyczy HDD. Stan dysku sprawdza się atrybutami <b>S.M.A.R.T.</b> (np. liczba relokowanych sektorów).</p>
<h4>Partycje</h4>
<p><b>MBR</b>: maksymalnie 4 partycje podstawowe (lub 3 podstawowe i 1 rozszerzona z dyskami logicznymi), obsługa dysków do 2 TiB. <b>GPT</b>: w Windows do 128 partycji, dyski większe niż 2 TiB, wymagany przy rozruchu w trybie UEFI.</p>
<div class="tip">Pojemność producenta podaje się w GB dziesiętnych (10^9 B). Dysk 1 TB w systemie pokazuje około 931 GiB. To nie usterka.</div>` },
        { tytul: "Zasilanie, UEFI i diagnostyka startu", tresc: `<h4>Zasilacz ATX</h4>
<p>Napięcia wyjściowe: <b>+3,3 V, +5 V, +12 V</b> (oraz -12 V i +5 VSB, czyli zasilanie czuwania). Wtyczki: <b>24-pin</b> do płyty, <b>EPS 8-pin (4+4)</b> do zasilania procesora, <b>PCIe 6+2 pin</b> lub 12VHPWR do kart graficznych, SATA do dysków. Certyfikat <b>80 PLUS</b> (Bronze, Silver, Gold, Platinum, Titanium) określa sprawność; Gold to około 90% przy 50% obciążenia.</p>
<p>Dobór mocy: zsumuj pobór CPU (TDP) i karty graficznej, dodaj około 100 W na resztę i zostaw zapas 20-30%. Przykład: CPU 125 W + GPU 220 W + 100 W = 445 W, z zapasem zasilacz 550-650 W.</p>
<h4>BIOS i UEFI</h4>
<ul><li><b>UEFI</b>: interfejs graficzny, obsługa myszy, rozruch z dysków GPT, <b>Secure Boot</b> (uruchamia tylko podpisane programy rozruchowe).</li>
<li><b>CSM / Legacy</b>: tryb zgodności ze starym BIOS i dyskami MBR.</li>
<li>Ustawienia przechowuje pamięć CMOS podtrzymywana baterią <b>CR2032</b>. Rozładowana bateria objawia się resetem daty i godziny przy każdym starcie.</li>
<li>Reset ustawień: zworka CLR_CMOS lub wyjęcie baterii na kilka minut przy odłączonym zasilaniu.</li></ul>
<h4>POST i sygnały dźwiękowe</h4>
<p>POST (Power-On Self-Test) sprawdza podzespoły przed załadowaniem systemu. Błędy sygnalizują <b>sygnały dźwiękowe</b> (znaczenie zależy od producenta BIOS, zawsze sprawdzaj w dokumentacji), diody <b>Q-LED</b> (CPU, DRAM, VGA, BOOT) lub dwucyfrowe kody POST. W Award BIOS 1 długi i 2 krótkie sygnały oznaczają błąd karty graficznej.</p>
<div class="tw"><table><tr><th>Objaw</th><th>Prawdopodobna przyczyna</th></tr>
<tr><td>Brak reakcji, wentylatory stoją</td><td>zasilacz, przełącznik zasilacza, przewód F_PANEL</td></tr>
<tr><td>Wentylatory kręcą się, brak obrazu</td><td>RAM, karta graficzna, monitor podłączony do złącza płyty przy karcie dedykowanej</td></tr>
<tr><td>Losowe restarty pod obciążeniem</td><td>przegrzanie, za słaby zasilacz</td></tr>
<tr><td>„No bootable device”</td><td>zła kolejność rozruchu, tryb UEFI/Legacy niezgodny z partycjonowaniem</td></tr></table></div>
<div class="tip">Przy diagnostyce zmieniaj jeden element naraz i zaczynaj od konfiguracji minimalnej: płyta, CPU z chłodzeniem, jeden moduł RAM, zasilacz.</div>` }
      ],
      pytania: [
        Q("Moduł pamięci oznaczony PC4-25600 to pamięć", "DDR4-3200", "DDR4-2560", "DDR3-3200", "DDR5-25600", "25600 MB/s / 8 B = 3200 MT/s, PC4 oznacza DDR4."),
        Q("Ile partycji podstawowych można utworzyć na dysku z tablicą MBR?", "4", "2", "128", "16", "MBR: 4 podstawowe albo 3 podstawowe i rozszerzona."),
        Q("Dysk SSD w systemie Windows należy optymalizować za pomocą", "polecenia TRIM", "defragmentacji", "formatowania niskopoziomowego", "skanowania powierzchni chkdsk /r co tydzień", "SSD się nie defragmentuje, TRIM informuje kontroler o wolnych blokach."),
        Q("Procesor Intel z sufiksem F w nazwie (np. i5-12400F)", "nie ma zintegrowanego układu graficznego", "ma odblokowany mnożnik", "jest przeznaczony do laptopów", "ma obniżone TDP", "F: brak iGPU, potrzebna karta graficzna."),
        Q("Wtyczka EPS 8-pin (4+4) z zasilacza zasila", "procesor", "kartę graficzną", "dyski SATA", "wentylatory obudowy", "EPS 12 V doprowadza zasilanie do sekcji CPU."),
        Q("Data i godzina w komputerze resetują się po każdym odłączeniu zasilania. Należy", "wymienić baterię CR2032", "wymienić zasilacz", "zaktualizować sterowniki chipsetu", "wymienić moduł RAM", "Bateria podtrzymuje pamięć CMOS i zegar."),
        Q("Aby uzyskać tryb Dual Channel, dwa moduły RAM należy", "zamontować w slotach wskazanych w instrukcji płyty", "zamontować zawsze w dwóch sąsiednich slotach", "połączyć dodatkowym mostkiem SLI lub CrossFire", "zamontować i włączyć w UEFI opcję Secure Boot", "Rozmieszczenie podaje dokumentacja płyty, najczęściej A2 i B2."),
        Q("Rozruch systemu z dysku z tablicą GPT wymaga trybu", "UEFI", "Legacy BIOS", "CSM z MBR", "PXE", "GPT jest standardowo uruchamiany przez UEFI.")
      ]
    },
    {
      id: "peryferia", tytul: "Urządzenia peryferyjne", opis: "Rozpoznasz zasadę działania drukarek, skanerów i monitorów oraz dobierzesz interfejs i zasilanie awaryjne.",
      lekcje: [
        { tytul: "Drukarki i ich eksploatacja", tresc: `<h4>Drukarka laserowa: etapy druku</h4>
<ol><li><b>Ładowanie</b>: wałek ładujący (lub koronotron) nadaje bębnowi jednolity ładunek ujemny.</li>
<li><b>Naświetlanie</b>: laser rozładowuje miejsca, które mają przyjąć toner.</li>
<li><b>Wywoływanie</b>: toner przylega do naświetlonych miejsc bębna.</li>
<li><b>Przenoszenie</b>: wałek transferowy przyciąga toner na papier.</li>
<li><b>Utrwalanie</b>: zespół grzewczy (<b>fuser</b>, około 180-200 °C) wtapia toner w papier.</li>
<li><b>Czyszczenie</b>: listwa zbiera resztki tonera z bębna.</li></ol>
<p>Toner ścierający się palcem z wydruku oznacza uszkodzony <b>utrwalacz</b>. Powtarzająca się plama w regularnych odstępach wskazuje uszkodzony wałek lub bęben: odstęp równa się obwodowi tego wałka. Pionowe jasne pasy: kończący się lub źle rozprowadzony toner.</p>
<h4>Inne technologie</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zasada</th><th>Zastosowanie</th></tr>
<tr><td>atramentowa termiczna</td><td>grzałka tworzy pęcherzyk wypychający kroplę (HP, Canon)</td><td>dom, zdjęcia</td></tr>
<tr><td>atramentowa piezoelektryczna</td><td>kryształ odkształca się pod napięciem (Epson)</td><td>dokładne kropki, druk fotograficzny</td></tr>
<tr><td>igłowa</td><td>igły uderzają w taśmę barwiącą</td><td>kopie przez kalkę, druki wielowarstwowe</td></tr>
<tr><td>termiczna</td><td>papier termoczuły ciemnieje pod wpływem ciepła</td><td>paragony, etykiety</td></tr>
<tr><td>termosublimacyjna</td><td>barwnik z folii przechodzi w gaz</td><td>zdjęcia, karty plastikowe</td></tr>
<tr><td>3D FDM</td><td>topienie filamentu (PLA, ABS) warstwa po warstwie</td><td>prototypy</td></tr></table></div>
<p>Ploter tnący lub drukujący obsługuje duże formaty (A1, A0). Rozdzielczość drukarki podaje się w <b>dpi</b> (punkty na cal), szybkość w <b>ppm</b> (strony na minutę).</p>
<div class="tip">Koszt wydruku strony = cena materiału / wydajność. Toner 300 zł na 3000 stron daje 0,10 zł za stronę. Wydajność podaje się według normy ISO/IEC 19752 przy 5% pokryciu.</div>
<h4>Instalacja drukarki sieciowej</h4>
<p>Drukarce nadaje się stały adres IP (statycznie lub rezerwacją DHCP), w systemie dodaje się port TCP/IP i sterownik. Drukarkę można udostępnić z serwera wydruku, co pozwala centralnie zarządzać kolejką i uprawnieniami.</p>` },
        { tytul: "Monitory, skanery i interfejsy", tresc: `<h4>Matryce LCD</h4>
<div class="tw"><table><tr><th>Matryca</th><th>Zalety</th><th>Wady</th></tr>
<tr><td>TN</td><td>najkrótszy czas reakcji, tania</td><td>wąskie kąty widzenia, słabe kolory</td></tr>
<tr><td>IPS</td><td>wierne kolory, szerokie kąty (178°)</td><td>niższy kontrast, efekt IPS glow</td></tr>
<tr><td>VA</td><td>wysoki kontrast, głęboka czerń</td><td>smużenie w ciemnych scenach</td></tr>
<tr><td>OLED</td><td>idealna czerń, każdy piksel świeci sam</td><td>ryzyko wypalenia</td></tr></table></div>
<p>Parametry: rozdzielczość (Full HD 1920x1080, QHD 2560x1440, 4K UHD 3840x2160), odświeżanie w Hz, czas reakcji w ms, jasność w cd/m², kontrast, wielkość plamki. Martwy piksel to stale czarny punkt, zablokowany (stuck) świeci jednym kolorem.</p>
<h4>Skanery</h4>
<p>Rodzaje: płaski (flatbed), z podajnikiem ADF, bębnowy (najwyższa jakość), ręczny, 3D. Liczy się <b>rozdzielczość optyczna</b> (rzeczywista matryca CCD lub CIS), a nie interpolowana. Skanery CCD dają większą głębię ostrości niż CIS. Program <b>OCR</b> zamienia obraz tekstu na tekst edytowalny. Dla zdjęć do druku 300 dpi, do ekranu 72-96 dpi.</p>
<h4>Interfejsy</h4>
<div class="tw"><table><tr><th>Interfejs</th><th>Przepustowość</th></tr>
<tr><td>USB 2.0</td><td>480 Mb/s</td></tr>
<tr><td>USB 3.2 Gen 1 (dawniej 3.0)</td><td>5 Gb/s</td></tr>
<tr><td>USB 3.2 Gen 2</td><td>10 Gb/s</td></tr>
<tr><td>USB 3.2 Gen 2x2</td><td>20 Gb/s (tylko USB-C)</td></tr>
<tr><td>USB4 / Thunderbolt 4</td><td>40 Gb/s</td></tr></table></div>
<p>Złącza obrazu: <b>VGA (D-Sub)</b> jest analogowe (15 pinów w trzech rzędach), <b>DVI-D</b> cyfrowe, <b>DVI-I</b> łączy oba sygnały, <b>HDMI</b> i <b>DisplayPort</b> przesyłają obraz i dźwięk cyfrowo. Połączenie DVI-D z VGA wymaga aktywnego konwertera, a nie pasywnej przejściówki.</p>
<div class="tip">Na egzaminie często pada pytanie, które złącze przesyła sygnał analogowy: odpowiedź to VGA (D-Sub) lub DVI-A, nigdy HDMI.</div>
<p>Inne: <b>RJ-45</b> (Ethernet), <b>RJ-11</b> (telefon, modem), <b>PS/2</b> (fioletowe klawiatura, zielone mysz), audio mini-jack 3,5 mm: zielony wyjście, różowy mikrofon, niebieski wejście liniowe.</p>` },
        { tytul: "Zasilanie awaryjne i konserwacja", tresc: `<h4>Rodzaje UPS</h4>
<div class="tw"><table><tr><th>Typ</th><th>Działanie</th><th>Czas przełączenia</th></tr>
<tr><td>offline (standby)</td><td>odbiorniki zasilane z sieci, przy zaniku przełączenie na baterię</td><td>kilka ms</td></tr>
<tr><td>line-interactive</td><td>jak offline, ale z autotransformatorem (AVR) korygującym napięcie</td><td>2-4 ms</td></tr>
<tr><td>online (podwójna konwersja)</td><td>prąd zawsze przechodzi przez prostownik i falownik</td><td>0 ms</td></tr></table></div>
<p>Do serwerów i urządzeń krytycznych wybiera się UPS <b>online</b>. Moc UPS podaje się w VA (moc pozorna) i W (moc czynna): <b>P [W] = S [VA] x cos φ</b>. UPS 1000 VA o współczynniku 0,6 obsłuży obciążenie 600 W. Dobierz UPS z zapasem około 25% ponad sumę mocy odbiorników.</p>
<p>Do UPS podłącza się komputer, monitor i przełącznik. Nie podłącza się <b>drukarki laserowej</b>: jej grzałka pobiera chwilowo bardzo duży prąd i może przeciążyć UPS. Połączenie USB lub sieciowe z oprogramowaniem pozwala na automatyczne zamknięcie systemu przed wyczerpaniem baterii.</p>
<h4>Ochrona i listwy</h4>
<p>Listwa przeciwprzepięciowa chroni przed krótkimi skokami napięcia, ale nie podtrzymuje zasilania. Agregat prądotwórczy zapewnia długotrwałe zasilanie, UPS mostkuje czas jego uruchomienia.</p>
<h4>Konserwacja sprzętu</h4>
<ul><li>Kurz z wnętrza usuwa się sprężonym powietrzem lub odkurzaczem serwisowym, przytrzymując łopatki wentylatora.</li>
<li>Pastę termoprzewodzącą wymienia się przy wzroście temperatur, wcześniej czyszcząc powierzchnie alkoholem izopropylowym.</li>
<li>Ekrany LCD czyści się suchą ściereczką z mikrofibry lub płynem przeznaczonym do ekranów, nigdy acetonem.</li>
<li>Drukarkę atramentową, rzadko używaną, regularnie uruchamia się, aby nie zasychały dysze; dostępna jest funkcja czyszczenia głowicy.</li></ul>
<h4>Utylizacja i BHP</h4>
<p>Zużyty sprzęt elektroniczny (znak przekreślonego kosza) oddaje się do punktu zbiórki zgodnie z ustawą o zużytym sprzęcie elektrycznym i elektronicznym. Tonery i baterie trafiają do wyspecjalizowanych firm. Przy pracy z tonerem unika się wdychania pyłu: toner zbiera się odkurzaczem z filtrem, a nie zwykłym odkurzaczem.</p>
<div class="tip">Przed otwarciem obudowy komputer odłącz od sieci. Kondensatorów zasilacza nie otwiera się: utrzymują niebezpieczne napięcie nawet po odłączeniu.</div>` }
      ],
      pytania: [
        Q("Toner ściera się z wydruku po dotknięciu palcem. Uszkodzony jest", "zespół utrwalający (fuser)", "bęben światłoczuły", "laser", "podajnik papieru", "Fuser wtapia toner w papier za pomocą ciepła i nacisku."),
        Q("Do drukowania paragonów stosuje się drukarki", "termiczne", "igłowe 24-igłowe", "laserowe kolorowe", "termosublimacyjne", "Papier termoczuły ciemnieje pod wpływem ciepła głowicy."),
        Q("Który interfejs przesyła sygnał analogowy?", "VGA (D-Sub)", "HDMI", "DisplayPort", "DVI-D", "VGA przesyła składowe RGB analogowo."),
        Q("Matryca zapewniająca najwierniejsze kolory i najszersze kąty widzenia spośród LCD to", "IPS", "TN", "VA", "STN", "IPS: 178°, dobre odwzorowanie barw."),
        Q("UPS o mocy 1500 VA i współczynniku mocy 0,6 może zasilić odbiorniki o mocy czynnej do", "900 W", "1500 W", "2500 W", "600 W", "P = S x cos φ = 1500 x 0,6 = 900 W."),
        Q("UPS, w którym odbiorniki są stale zasilane przez falownik (zerowy czas przełączenia), to", "online", "offline", "line-interactive", "standby", "Podwójna konwersja: AC-DC-AC."),
        Q("Maksymalna przepustowość USB 3.2 Gen 1 wynosi", "5 Gb/s", "480 Mb/s", "10 Gb/s", "20 Gb/s", "USB 3.2 Gen 1 to dawne USB 3.0."),
        Q("Program przekształcający zeskanowany obraz tekstu na tekst edytowalny to", "OCR", "OEM", "CMYK", "DPI", "Optical Character Recognition.")
      ]
    },
    {
      id: "windows", tytul: "Administracja Windows", opis: "Zarządzisz kontami, uprawnieniami i usługami Windows oraz Windows Server z wiersza poleceń i konsol MMC.",
      lekcje: [
        { tytul: "Narzędzia i polecenia systemowe", tresc: `<h4>Konsole MMC i narzędzia</h4>
<div class="tw"><table><tr><th>Polecenie</th><th>Narzędzie</th></tr>
<tr><td><code>devmgmt.msc</code></td><td>Menedżer urządzeń (sterowniki)</td></tr>
<tr><td><code>diskmgmt.msc</code></td><td>Zarządzanie dyskami (partycje, litery)</td></tr>
<tr><td><code>services.msc</code></td><td>Usługi (typ uruchomienia)</td></tr>
<tr><td><code>eventvwr.msc</code></td><td>Podgląd zdarzeń (dzienniki System, Aplikacja, Zabezpieczenia)</td></tr>
<tr><td><code>lusrmgr.msc</code></td><td>Lokalni użytkownicy i grupy</td></tr>
<tr><td><code>gpedit.msc</code></td><td>Edytor lokalnych zasad grupy</td></tr>
<tr><td><code>compmgmt.msc</code></td><td>Zarządzanie komputerem (zbiorczo)</td></tr>
<tr><td><code>msconfig</code>, <code>msinfo32</code>, <code>dxdiag</code></td><td>konfiguracja rozruchu, informacje o systemie, diagnostyka DirectX</td></tr>
<tr><td><code>regedit</code></td><td>Edytor rejestru</td></tr></table></div>
<h4>Wiersz poleceń</h4>
<ul><li><code>ipconfig /all</code> (pełna konfiguracja, adres MAC), <code>/release</code>, <code>/renew</code>, <code>/flushdns</code> (czyści pamięć podręczną DNS).</li>
<li><code>ping</code>, <code>tracert</code>, <code>pathping</code>, <code>nslookup</code>, <code>netstat -an</code>, <code>arp -a</code>, <code>route print</code>.</li>
<li><code>sfc /scannow</code>: sprawdza i naprawia pliki systemowe; <code>DISM /Online /Cleanup-Image /RestoreHealth</code> naprawia magazyn składników.</li>
<li><code>chkdsk C: /f</code> naprawia błędy systemu plików, <code>/r</code> dodatkowo szuka uszkodzonych sektorów.</li>
<li><code>diskpart</code>: tekstowe zarządzanie dyskami (list disk, select disk 1, clean, convert gpt, create partition primary).</li>
<li><code>gpupdate /force</code> wymusza odświeżenie zasad grupy, <code>gpresult /r</code> pokazuje zastosowane zasady.</li>
<li><code>net user jan Haslo123 /add</code>, <code>net localgroup Administratorzy jan /add</code>, <code>net share</code>, <code>net use Z: \\\\serwer\\dane</code>.</li></ul>
<h4>Rejestr</h4>
<p>Główne klucze: <b>HKEY_LOCAL_MACHINE</b> (ustawienia komputera), <b>HKEY_CURRENT_USER</b> (zalogowany użytkownik), <b>HKEY_USERS</b>, <b>HKEY_CLASSES_ROOT</b> (skojarzenia plików), <b>HKEY_CURRENT_CONFIG</b>. Przed zmianą rejestru wykonaj jego eksport lub punkt przywracania.</p>
<div class="tip">W PowerShell odpowiedniki: <code>Get-NetIPConfiguration</code>, <code>Test-Connection</code>, <code>Get-Service</code>, <code>New-LocalUser</code>. Na egzaminie wystarczy znajomość podstawowych poleceń cmd, ale PowerShell też się pojawia.</div>
<h4>Typowe zadania egzaminacyjne</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Właściwe narzędzie</th></tr>
<tr><td>urządzenie z żółtym wykrzyknikiem</td><td>Menedżer urządzeń, aktualizacja lub wycofanie sterownika</td></tr>
<tr><td>nowy dysk niewidoczny w Eksploratorze</td><td>Zarządzanie dyskami: inicjalizacja (MBR lub GPT), nowy wolumin, litera</td></tr>
<tr><td>system wolno startuje</td><td>Menedżer zadań, karta Uruchamianie (w nowych Windows już nie msconfig)</td></tr>
<tr><td>niebieski ekran po aktualizacji</td><td>Podgląd zdarzeń, dziennik System, następnie tryb awaryjny</td></tr>
<tr><td>strony WWW nie otwierają się po zmianie DNS</td><td><code>ipconfig /flushdns</code>, potem <code>nslookup</code></td></tr></table></div>
<p>Kolejność naprawy uszkodzonych plików systemowych: najpierw <code>DISM /Online /Cleanup-Image /RestoreHealth</code>, potem <code>sfc /scannow</code>. Polecenie <code>chkdsk</code> na dysku systemowym wymaga ponownego uruchomienia, bo wolumin jest w użyciu.</p>
<div class="tip">Pułapka: <code>ipconfig /release</code> zwalnia adres tylko przy DHCP. Przy adresie statycznym nic nie zmienia. Konsole z rozszerzeniem .msc i polecenia net user wymagają zwykle uruchomienia jako administrator.</div>` },
        { tytul: "Uprawnienia NTFS i udostępnianie", tresc: `<h4>Uprawnienia NTFS</h4>
<p>Uprawnienia standardowe: <b>Pełna kontrola</b>, <b>Modyfikacja</b>, <b>Odczyt i wykonanie</b>, <b>Wyświetlanie zawartości folderu</b>, <b>Odczyt</b>, <b>Zapis</b>. Modyfikacja pozwala usuwać pliki, ale nie zmieniać uprawnień ani przejmować własności (to daje Pełna kontrola).</p>
<ul><li>Uprawnienia są <b>dziedziczone</b> z folderu nadrzędnego; dziedziczenie można wyłączyć, kopiując lub usuwając odziedziczone wpisy.</li>
<li>Uprawnienia użytkownika i jego grup <b>sumują się</b>.</li>
<li><b>Odmowa ma pierwszeństwo</b> przed zezwoleniem (jawna odmowa wygrywa z jawnym zezwoleniem).</li>
<li>Właściciel pliku zawsze może zmienić jego uprawnienia.</li></ul>
<h4>Uprawnienia udziału</h4>
<p>Udział sieciowy ma osobne uprawnienia: <b>Odczyt</b>, <b>Zmiana</b>, <b>Pełna kontrola</b>. Przy dostępie przez sieć obowiązuje <b>bardziej restrykcyjne</b> z dwóch zestawów (udział i NTFS). Lokalnie obowiązują tylko uprawnienia NTFS.</p>
<div class="tw"><table><tr><th>Udział</th><th>NTFS</th><th>Efekt przez sieć</th></tr>
<tr><td>Pełna kontrola</td><td>Odczyt</td><td>Odczyt</td></tr>
<tr><td>Odczyt</td><td>Modyfikacja</td><td>Odczyt</td></tr>
<tr><td>Zmiana</td><td>Pełna kontrola</td><td>Zmiana</td></tr></table></div>
<p>Udział ukryty ma nazwę zakończoną znakiem <b>$</b> (np. <code>dane$</code>). Udziały administracyjne: <code>C$</code>, <code>ADMIN$</code>, <code>IPC$</code>.</p>
<h4>Kopiowanie i przenoszenie</h4>
<ul><li>Przeniesienie w obrębie <b>tego samego woluminu NTFS</b>: plik zachowuje swoje uprawnienia.</li>
<li>Kopiowanie albo przeniesienie na <b>inny wolumin</b>: plik dziedziczy uprawnienia folderu docelowego.</li>
<li>Kopiowanie na FAT32 lub exFAT: uprawnienia znikają, bo te systemy plików ich nie obsługują.</li></ul>
<h4>Systemy plików</h4>
<p>FAT32: maksymalny plik 4 GiB, brak uprawnień. exFAT: duże pliki, pendrive'y, brak uprawnień i dziennika. NTFS: uprawnienia, dziennik, szyfrowanie EFS, kompresja, przydziały (limity) dysku. ReFS: odporny na uszkodzenia, dla serwerów.</p>
<div class="tip">Zadanie typu: „użytkownik ma Modyfikację w NTFS i Odczyt w udziale, co może zrobić przez sieć?” Odpowiedź: tylko czytać. Szukaj mniejszego z dwóch uprawnień.</div>` },
        { tytul: "Windows Server: AD, GPO, DHCP i DNS", tresc: `<h4>Active Directory</h4>
<p><b>AD DS</b> przechowuje obiekty (użytkownicy, komputery, grupy) w domenie. Serwer z AD DS to <b>kontroler domeny</b>. Struktura: <b>las</b> zawiera drzewa, drzewo zawiera domeny, domena zawiera <b>jednostki organizacyjne (OU)</b>. Na OU deleguje się uprawnienia administracyjne i podpina zasady grupy. Kontroler domeny musi mieć statyczny adres IP i działający DNS.</p>
<h4>Grupy</h4>
<div class="tw"><table><tr><th>Zakres</th><th>Członkowie</th><th>Zastosowanie</th></tr>
<tr><td>lokalna domenowa</td><td>z dowolnej domeny lasu</td><td>nadawanie uprawnień do zasobów</td></tr>
<tr><td>globalna</td><td>z tej samej domeny</td><td>grupowanie użytkowników według roli</td></tr>
<tr><td>uniwersalna</td><td>z całego lasu</td><td>w lasach wielodomenowych</td></tr></table></div>
<p>Typy: grupa <b>zabezpieczeń</b> (uprawnienia) i <b>dystrybucyjna</b> (tylko listy e-mail). Zasada AGDLP: konta do grup globalnych, te do lokalnych domenowych, uprawnienia dla grup lokalnych domenowych.</p>
<h4>Zasady grupy (GPO)</h4>
<p>Kolejność stosowania <b>LSDOU</b>: lokalne, lokacja (site), domena, OU. Ostatnia zastosowana wygrywa, więc GPO na OU nadpisuje GPO domeny (chyba że ustawiono Wymuszone lub Zablokuj dziedziczenie). Przykłady: przekierowanie folderów, mapowanie dysków, zasady haseł (zasady haseł domeny ustawia się w Default Domain Policy), instalacja oprogramowania.</p>
<h4>Profile użytkownika</h4>
<p><b>Lokalny</b> (na jednym komputerze), <b>mobilny</b> (przechowywany na serwerze, ścieżka w AD), <b>obowiązkowy</b> (plik NTUSER.MAN zamiast NTUSER.DAT: zmiany nie są zapisywane po wylogowaniu).</p>
<h4>DHCP</h4>
<p>Konfiguracja: <b>zakres</b> (pula adresów), <b>wykluczenia</b> (adresy statyczne serwerów, drukarek), <b>rezerwacje</b> (stały adres dla adresu MAC), czas dzierżawy, opcje: <b>003</b> router (brama), <b>006</b> serwery DNS, <b>015</b> nazwa domeny. Serwer DHCP w domenie musi być <b>autoryzowany</b> w AD. Klient bez odpowiedzi DHCP przyjmuje adres APIPA z sieci 169.254.0.0/16.</p>
<h4>DNS</h4>
<p>Strefa wyszukiwania <b>do przodu</b> (nazwa na adres) i <b>wstecznego</b> (adres na nazwę, rekord PTR). Rekordy: <b>A</b> (IPv4), <b>AAAA</b> (IPv6), <b>CNAME</b> (alias), <b>MX</b> (serwer poczty), <b>NS</b>, <b>SOA</b>, <b>SRV</b> (usługi, np. lokalizacja kontrolera domeny). Strefa zintegrowana z AD replikuje się razem z katalogiem.</p>
<div class="tip">Inne role serwera: WDS (instalacja systemów przez sieć PXE), WSUS (aktualizacje), IIS (serwer WWW), Usługi pulpitu zdalnego, Serwer plików z FSRM (przydziały i filtry plików), Hyper-V.</div>` }
      ],
      pytania: [
        Q("Użytkownik ma uprawnienie NTFS „Modyfikacja” i uprawnienie udziału „Odczyt”. Przez sieć może", "tylko odczytywać pliki", "modyfikować pliki", "zmieniać uprawnienia", "usuwać pliki", "Przez sieć obowiązuje bardziej restrykcyjne uprawnienie."),
        Q("Plik przeniesiony w obrębie tego samego woluminu NTFS", "zachowuje swoje uprawnienia", "dziedziczy uprawnienia folderu docelowego", "traci wszystkie uprawnienia", "otrzymuje Pełną kontrolę dla Wszystkich", "Przeniesienie w obrębie woluminu nie zmienia ACL."),
        Q("Opcja DHCP 006 przekazuje klientom", "adresy serwerów DNS", "adres bramy domyślnej", "nazwę domeny", "czas dzierżawy", "003 brama, 006 DNS, 015 nazwa domeny."),
        Q("Kolejność stosowania zasad grupy w domenie to", "lokalne, lokacja, domena, OU", "OU, domena, lokacja, lokalne", "domena, OU, lokalne, lokacja", "lokacja, lokalne, OU, domena", "LSDOU, ostatnia zastosowana wygrywa."),
        Q("Profil obowiązkowy uzyskuje się, zmieniając nazwę pliku NTUSER.DAT na", "NTUSER.MAN", "NTUSER.OBL", "NTUSER.SYS", "NTUSER.BAK", "Zmiany w profilu obowiązkowym nie są zapisywane."),
        Q("Polecenie, które sprawdza integralność plików systemowych Windows i naprawia je, to", "sfc /scannow", "chkdsk /f", "gpupdate /force", "ipconfig /renew", "System File Checker."),
        Q("Rekord DNS wskazujący serwer poczty dla domeny to", "MX", "PTR", "CNAME", "SOA", "Mail Exchanger."),
        Q("Nazwa udziału ukrytego w Windows kończy się znakiem", "$", "#", "%", "!", "Np. dane$ nie jest widoczny w przeglądaniu sieci.")
      ]
    },
    {
      id: "linux", tytul: "Administracja Linux", opis: "Obsłużysz system Linux z konsoli: pliki, uprawnienia, użytkowników, pakiety, sieć i usługi.",
      lekcje: [
        { tytul: "Pliki, katalogi i uprawnienia", tresc: `<h4>Struktura katalogów</h4>
<p><code>/etc</code> pliki konfiguracyjne, <code>/home</code> katalogi użytkowników, <code>/root</code> katalog administratora, <code>/var/log</code> dzienniki, <code>/dev</code> pliki urządzeń (np. <code>/dev/sda1</code>), <code>/bin</code> i <code>/usr/bin</code> programy, <code>/tmp</code> pliki tymczasowe, <code>/mnt</code> i <code>/media</code> punkty montowania.</p>
<h4>Podstawowe polecenia</h4>
<p><code>ls -la</code> (lista z ukrytymi), <code>cd</code>, <code>pwd</code>, <code>mkdir -p a/b/c</code>, <code>cp -r</code>, <code>mv</code> (przenosi i zmienia nazwę), <code>rm -r</code>, <code>touch</code>, <code>cat</code>, <code>less</code>, <code>head -n 5</code>, <code>tail -f /var/log/syslog</code> (śledzenie na bieżąco), <code>find / -name "*.conf"</code>, <code>grep -i blad plik</code>, <code>ln -s cel dowiazanie</code>, <code>tar -czvf kopia.tar.gz katalog</code>, <code>tar -xzvf kopia.tar.gz</code>.</p>
<h4>Uprawnienia</h4>
<p>Wynik <code>ls -l</code>: <code>-rwxr-xr--</code>. Pierwszy znak to typ (<b>-</b> plik, <b>d</b> katalog, <b>l</b> dowiązanie), dalej trzy trójki: <b>właściciel, grupa, pozostali</b>. Wartości: r = 4, w = 2, x = 1.</p>
<div class="tw"><table><tr><th>Ósemkowo</th><th>Symbolicznie</th><th>Znaczenie typowe</th></tr>
<tr><td>755</td><td>rwxr-xr-x</td><td>katalogi, skrypty</td></tr>
<tr><td>644</td><td>rw-r--r--</td><td>zwykłe pliki</td></tr>
<tr><td>700</td><td>rwx------</td><td>tylko właściciel</td></tr>
<tr><td>754</td><td>rwxr-xr--</td><td>pozostali tylko czytają</td></tr></table></div>
<p>Zmiana: <code>chmod 750 plik</code>, <code>chmod u+x,g-w,o= plik</code>. Właściciel: <code>chown jan:ksiegowosc plik</code>, grupa: <code>chgrp</code>. Dla katalogu <b>x</b> oznacza prawo wejścia, a <b>w</b> prawo tworzenia i usuwania plików w nim.</p>
<h4>Bity specjalne i umask</h4>
<ul><li><b>SUID</b> (4): program działa z prawami właściciela, np. <code>passwd</code>; w ls widać <code>s</code> zamiast x właściciela.</li>
<li><b>SGID</b> (2): na katalogu nowe pliki dziedziczą grupę katalogu.</li>
<li><b>sticky bit</b> (1): w katalogu pliki usuwa tylko ich właściciel, np. <code>chmod 1777 /tmp</code> (w ls litera <code>t</code>).</li>
<li><b>umask 022</b>: nowe pliki 666-022 = 644, nowe katalogi 777-022 = 755.</li></ul>
<div class="tip">Pułapka: umask się „odejmuje” od 666 dla plików, nie od 777. Dlatego nowy plik nigdy nie dostaje automatycznie prawa wykonania.</div>` },
        { tytul: "Użytkownicy, pakiety i usługi", tresc: `<h4>Konta i grupy</h4>
<ul><li><code>useradd -m -s /bin/bash jan</code> tworzy konto z katalogiem domowym (w Debianie wygodniejsze jest interaktywne <code>adduser jan</code>).</li>
<li><code>passwd jan</code> ustawia hasło, <code>usermod -aG sudo jan</code> dopisuje do grupy (bez <b>-a</b> użytkownik zostałby usunięty z innych grup dodatkowych).</li>
<li><code>userdel -r jan</code> usuwa konto razem z katalogiem domowym, <code>groupadd</code>, <code>groupdel</code>, <code>id jan</code>, <code>groups</code>.</li></ul>
<p>Pliki: <code>/etc/passwd</code> (login:x:UID:GID:opis:katalog:powłoka), <code>/etc/shadow</code> (skróty haseł, dostęp tylko dla roota), <code>/etc/group</code>. Root ma <b>UID 0</b>, konta zwykłych użytkowników zaczynają się zwykle od UID 1000. Polecenia administracyjne wykonuje się przez <code>sudo</code>, a zmiana użytkownika to <code>su - jan</code>.</p>
<h4>Pakiety (Debian, Ubuntu)</h4>
<p><code>apt update</code> (odświeża listę pakietów), <code>apt upgrade</code> (aktualizuje zainstalowane), <code>apt install apache2</code>, <code>apt remove</code>, <code>apt purge</code> (z plikami konfiguracyjnymi), <code>apt search</code>, <code>dpkg -i plik.deb</code>, <code>dpkg -l</code>. W rodzinie Red Hat: <code>dnf</code> (dawniej <code>yum</code>) i <code>rpm</code>.</p>
<h4>Usługi systemd</h4>
<p><code>systemctl start|stop|restart|status ssh</code>, <code>systemctl enable ssh</code> (start przy rozruchu), <code>systemctl disable</code>, dziennik: <code>journalctl -u ssh</code>.</p>
<h4>Procesy i zasoby</h4>
<p><code>ps aux</code>, <code>top</code> lub <code>htop</code>, <code>kill PID</code> (sygnał 15, łagodne zakończenie), <code>kill -9 PID</code> (wymuszone), <code>df -h</code> (miejsce na dyskach), <code>du -sh katalog</code> (rozmiar katalogu), <code>free -h</code> (pamięć), <code>uname -a</code>, <code>lsblk</code>, <code>lsusb</code>, <code>lspci</code>.</p>
<h4>Dyski i montowanie</h4>
<p><code>fdisk /dev/sdb</code> lub <code>parted</code> (partycje), <code>mkfs.ext4 /dev/sdb1</code> (formatowanie), <code>mount /dev/sdb1 /mnt/dane</code>. Stałe montowanie zapisuje się w <code>/etc/fstab</code>, najlepiej z identyfikatorem UUID (polecenie <code>blkid</code>).</p>
<div class="tip">Zadanie praktyczne często wymaga utworzenia użytkownika, dodania go do grupy i nadania uprawnień katalogowi. Zapisz sobie kolejność: groupadd, useradd -m -G, passwd, mkdir, chown, chmod.</div>` },
        { tytul: "Sieć i serwery w Linuksie", tresc: `<h4>Diagnostyka sieci</h4>
<p><code>ip a</code> (adresy interfejsów), <code>ip link set enp0s3 up</code>, <code>ip route</code> (tablica routingu i brama), <code>ping -c 4 8.8.8.8</code> (4 pakiety, w Linuksie ping bez -c działa w nieskończoność), <code>traceroute</code>, <code>ss -tulpn</code> (nasłuchujące porty, następca <code>netstat</code>), <code>dig</code> lub <code>nslookup</code>, <code>hostname</code>. Starsze polecenia: <code>ifconfig</code>, <code>route -n</code>.</p>
<h4>Konfiguracja stała</h4>
<p><b>Debian</b>: plik <code>/etc/network/interfaces</code>.</p>
<pre>auto enp0s3
iface enp0s3 inet static
    address 192.168.1.10/24
    gateway 192.168.1.1
    dns-nameservers 192.168.1.1</pre>
<p>Następnie <code>systemctl restart networking</code>. <b>Ubuntu</b> używa Netplan: plik YAML w <code>/etc/netplan/</code>, zatwierdzany poleceniem <code>netplan apply</code>.</p>
<pre>network:
  version: 2
  ethernets:
    enp0s3:
      addresses: [192.168.1.10/24]
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8]</pre>
<p>W YAML liczą się wcięcia spacjami, tabulator powoduje błąd. Serwery DNS klienta są w <code>/etc/resolv.conf</code>, lokalne nazwy w <code>/etc/hosts</code>, nazwa komputera w <code>/etc/hostname</code>.</p>
<h4>Usługi serwerowe</h4>
<div class="tw"><table><tr><th>Usługa</th><th>Pakiet</th><th>Konfiguracja</th></tr>
<tr><td>udostępnianie dla Windows</td><td>samba</td><td><code>/etc/samba/smb.conf</code>, użytkownik: <code>smbpasswd -a jan</code></td></tr>
<tr><td>NFS</td><td>nfs-kernel-server</td><td><code>/etc/exports</code></td></tr>
<tr><td>SSH</td><td>openssh-server</td><td><code>/etc/ssh/sshd_config</code> (PermitRootLogin no)</td></tr>
<tr><td>DHCP</td><td>isc-dhcp-server</td><td><code>/etc/dhcp/dhcpd.conf</code></td></tr>
<tr><td>WWW</td><td>apache2</td><td><code>/etc/apache2/</code>, pliki w <code>/var/www/html</code></td></tr>
<tr><td>zapora</td><td>ufw / iptables / nftables</td><td><code>ufw allow 22/tcp</code>, <code>ufw enable</code></td></tr></table></div>
<p>Przykładowy udział Samby:</p>
<pre>[dane]
   path = /srv/dane
   read only = no
   valid users = @ksiegowosc</pre>
<div class="tip">Po każdej zmianie pliku konfiguracyjnego usługi zrestartuj ją (systemctl restart smbd) i sprawdź status. Składnię smb.conf sprawdza polecenie testparm.</div>
<h4>Zarządzanie usługami i pułapki</h4>
<ul><li><code>systemctl status ssh</code> pokazuje stan, <code>systemctl enable ssh</code> włącza autostart, <code>systemctl start</code> uruchamia tylko teraz. Samo enable nie startuje usługi od razu (chyba że dodasz <code>--now</code>).</li>
<li>Dzienniki usług: <code>journalctl -u smbd</code>, pliki w <code>/var/log/</code> (np. auth.log z próbami logowania SSH).</li>
<li>Zmiana portu SSH w <code>sshd_config</code> (Port 2222) wymaga otwarcia tego portu w zaporze, inaczej utracisz zdalny dostęp.</li>
<li>Instalacja pakietów: <code>apt update</code> odświeża listę, <code>apt install samba</code> instaluje, <code>apt upgrade</code> aktualizuje.</li></ul>
<div class="tw"><table><tr><th>Port</th><th>Usługa</th></tr>
<tr><td>22</td><td>SSH</td></tr><tr><td>67/68 UDP</td><td>DHCP</td></tr><tr><td>80 / 443</td><td>HTTP / HTTPS</td></tr><tr><td>139, 445</td><td>Samba (SMB)</td></tr><tr><td>2049</td><td>NFS</td></tr></table></div>
<p>Na egzaminie częsty błąd to restart złej usługi: Samba to <code>smbd</code>, Apache to <code>apache2</code>, a serwer DHCP to <code>isc-dhcp-server</code>.</p>` }
      ],
      pytania: [
        Q("Uprawnienia rwxr-xr-- zapisane ósemkowo to", "754", "755", "744", "654", "rwx=7, r-x=5, r--=4."),
        Q("Przy umask 022 nowo tworzony plik otrzyma uprawnienia", "644", "755", "622", "777", "666 - 022 = 644."),
        Q("Który plik zawiera skróty haseł użytkowników w Linuksie?", "/etc/shadow", "/etc/passwd", "/etc/group", "/etc/login.defs", "/etc/shadow jest dostępny tylko dla roota."),
        Q("Polecenie dopisujące użytkownika jan do grupy biuro bez usuwania go z innych grup to", "usermod -aG biuro jan", "usermod -G biuro jan", "useradd -g biuro jan", "groupadd biuro jan", "Bez -a lista grup dodatkowych zostałaby zastąpiona."),
        Q("Sticky bit ustawiony na katalogu /tmp powoduje, że", "plik może usunąć tylko jego właściciel lub root", "nowe pliki dziedziczą grupę właściciela katalogu", "programy uruchamiają się z prawami właściciela", "katalog staje się dostępny tylko do odczytu", "Sticky bit: litera t w uprawnieniach."),
        Q("Aby usługa ssh uruchamiała się automatycznie przy starcie systemu, należy wydać polecenie", "systemctl enable ssh", "systemctl start ssh", "service ssh status", "apt install --boot ssh", "enable dodaje usługę do rozruchu."),
        Q("Plik konfiguracyjny serwera Samba to", "/etc/samba/smb.conf", "/etc/exports", "/etc/fstab", "/etc/samba/nfs.conf", "/etc/exports dotyczy NFS."),
        Q("Polecenie wyświetlające nasłuchujące porty TCP i UDP z nazwą procesu to", "ss -tulpn", "ip route", "df -h", "lsblk", "ss zastępuje netstat.")
      ]
    },
    {
      id: "sieci-lan", tytul: "Sieci lokalne i adresacja", opis: "Wykonasz okablowanie, policzysz podsieci IPv4 i skonfigurujesz przełącznik, router oraz punkt dostępowy.",
      lekcje: [
        { tytul: "Podział na podsieci IPv4 krok po kroku", tresc: `<h4>Maska i liczba hostów</h4>
<p>Liczba hostów w podsieci = <b>2^(32 - prefiks) - 2</b> (odejmujemy adres sieci i rozgłoszeniowy).</p>
<div class="tw"><table><tr><th>Prefiks</th><th>Maska</th><th>Hosty</th><th>Rozmiar bloku</th></tr>
<tr><td>/24</td><td>255.255.255.0</td><td>254</td><td>256</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>126</td><td>128</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>62</td><td>64</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>30</td><td>32</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>14</td><td>16</td></tr>
<tr><td>/29</td><td>255.255.255.248</td><td>6</td><td>8</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>4</td></tr></table></div>
<h4>Przykład</h4>
<p>Host <b>192.168.10.100/26</b>. Rozmiar bloku to 256 - 192 = 64, więc sieci zaczynają się od 0, 64, 128, 192. Liczba 100 leży w bloku od 64:</p>
<ul><li>adres sieci: <b>192.168.10.64</b></li><li>pierwszy host: 192.168.10.65</li><li>ostatni host: 192.168.10.126</li><li>rozgłoszeniowy: <b>192.168.10.127</b></li></ul>
<p>Drugi przykład: <b>172.16.45.200/20</b>. Maska 255.255.240.0, blok w trzecim oktecie 16: sieci 0, 16, 32, 48. Wartość 45 leży w bloku od 32, więc sieć to 172.16.32.0, broadcast 172.16.47.255, hosty od 172.16.32.1 do 172.16.47.254 (4094 hosty).</p>
<h4>Klasy i adresy specjalne</h4>
<p>Klasy (historycznie): A 1-126, B 128-191, C 192-223, D 224-239 (multicast), E 240-255. Adresy prywatne: <b>10.0.0.0/8</b>, <b>172.16.0.0/12</b> (172.16-172.31), <b>192.168.0.0/16</b>. Pętla zwrotna 127.0.0.0/8, APIPA 169.254.0.0/16.</p>
<h4>IPv6 w skrócie</h4>
<p>Adres ma 128 bitów, zapis w 8 grupach szesnastkowych. Skracanie: pomija się zera wiodące w grupie, jeden ciąg grup zerowych zastępuje się <code>::</code> (tylko raz w adresie). 2001:0db8:0000:0000:0000:0000:0000:0001 = <b>2001:db8::1</b>. Link-local zaczyna się od fe80::/10, adresy globalne od 2000::/3.</p>
<div class="tip">Dwa hosty widzą się bez routera tylko wtedy, gdy po nałożeniu maski dają ten sam adres sieci. To najczęstsze zadanie z adresacji na INF.02.</div>
<h4>Podział sieci na równe podsieci</h4>
<p>Zadanie: sieć 192.168.1.0/24 podziel na 4 równe podsieci. Potrzebne są 2 dodatkowe bity (2^2 = 4), więc nowy prefiks to <b>/26</b>, blok 64 adresy, 62 hosty w każdej podsieci.</p>
<div class="tw"><table><tr><th>Podsieć</th><th>Adres sieci</th><th>Zakres hostów</th><th>Broadcast</th></tr>
<tr><td>1</td><td>192.168.1.0</td><td>.1 - .62</td><td>192.168.1.63</td></tr>
<tr><td>2</td><td>192.168.1.64</td><td>.65 - .126</td><td>192.168.1.127</td></tr>
<tr><td>3</td><td>192.168.1.128</td><td>.129 - .190</td><td>192.168.1.191</td></tr>
<tr><td>4</td><td>192.168.1.192</td><td>.193 - .254</td><td>192.168.1.255</td></tr></table></div>
<p>Gdy zadanie podaje liczbę hostów, szukaj najmniejszego bloku, który je pomieści: 50 hostów wymaga bloku 64 (/26), bo /27 daje tylko 30. Pamiętaj o adresie dla bramy, który też zajmuje adres hosta.</p>
<div class="tip">Pułapka: adres 192.168.1.64/26 to adres sieci, a 192.168.1.127/26 to broadcast, więc żadnego z nich nie można przypisać komputerowi.</div>` },
        { tytul: "Okablowanie i urządzenia sieciowe", tresc: `<h4>Sekwencje T568A i T568B</h4>
<div class="tw"><table><tr><th>Pin</th><th>T568B</th><th>T568A</th></tr>
<tr><td>1</td><td>biało-pomarańczowy</td><td>biało-zielony</td></tr>
<tr><td>2</td><td>pomarańczowy</td><td>zielony</td></tr>
<tr><td>3</td><td>biało-zielony</td><td>biało-pomarańczowy</td></tr>
<tr><td>4</td><td>niebieski</td><td>niebieski</td></tr>
<tr><td>5</td><td>biało-niebieski</td><td>biało-niebieski</td></tr>
<tr><td>6</td><td>zielony</td><td>pomarańczowy</td></tr>
<tr><td>7</td><td>biało-brązowy</td><td>biało-brązowy</td></tr>
<tr><td>8</td><td>brązowy</td><td>brązowy</td></tr></table></div>
<p>Kabel prosty: ta sama sekwencja na obu końcach. Kabel <b>skrosowany</b>: A na jednym końcu, B na drugim (zamienione pary 2 i 3). Nowoczesne karty mają <b>Auto MDI-X</b>, więc kabel krosowy jest rzadko potrzebny. 100BASE-TX używa pinów 1, 2, 3, 6; 1000BASE-T wszystkich czterech par.</p>
<h4>Kategorie skrętki</h4>
<div class="tw"><table><tr><th>Kategoria</th><th>Pasmo</th><th>Ethernet</th></tr>
<tr><td>5e</td><td>100 MHz</td><td>1 Gb/s</td></tr>
<tr><td>6</td><td>250 MHz</td><td>1 Gb/s, 10 Gb/s do 55 m</td></tr>
<tr><td>6A</td><td>500 MHz</td><td>10 Gb/s do 100 m</td></tr>
<tr><td>7 / 7A</td><td>600 / 1000 MHz</td><td>10 Gb/s</td></tr>
<tr><td>8</td><td>2000 MHz</td><td>25/40 Gb/s do 30 m</td></tr></table></div>
<p>Maksymalna długość kanału skrętki: <b>100 m</b> (90 m kabla stałego i 10 m przewodów krosowych).</p>
<h4>Urządzenia</h4>
<ul><li><b>Koncentrator (hub)</b>: warstwa 1, wszystko do wszystkich, jedna domena kolizyjna.</li>
<li><b>Przełącznik (switch)</b>: warstwa 2, przełącza na podstawie tablicy adresów MAC, każdy port to osobna domena kolizyjna, ale jedna domena rozgłoszeniowa (chyba że są VLAN-y).</li>
<li><b>Router</b>: warstwa 3, łączy sieci, dzieli domeny rozgłoszeniowe.</li>
<li><b>Punkt dostępowy</b>: łączy klientów Wi-Fi z siecią przewodową.</li>
<li><b>Most</b>: warstwa 2, łączy dwa segmenty.</li></ul>
<h4>Model ISO/OSI</h4>
<p>7 aplikacji, 6 prezentacji, 5 sesji, 4 transportowa (TCP, UDP, segmenty), 3 sieciowa (IP, pakiety), 2 łącza danych (MAC, ramki), 1 fizyczna (bity). W modelu TCP/IP warstwy: dostępu do sieci, internetowa, transportowa, aplikacji.</p>
<div class="tip">TCP jest połączeniowy (three-way handshake: SYN, SYN-ACK, ACK) i gwarantuje dostarczenie; UDP jest bezpołączeniowy i szybszy (DNS, DHCP, VoIP, streaming).</div>` },
        { tytul: "Konfiguracja przełącznika, routera i Wi-Fi", tresc: `<h4>Podstawy Cisco IOS</h4>
<pre>Switch&gt; enable
Switch# configure terminal
Switch(config)# hostname S1
S1(config)# enable secret Tajne123
S1(config)# line console 0
S1(config-line)# password Konsola1
S1(config-line)# login
S1(config-line)# exit
S1(config)# interface vlan 1
S1(config-if)# ip address 192.168.1.2 255.255.255.0
S1(config-if)# no shutdown
S1(config-if)# exit
S1(config)# ip default-gateway 192.168.1.1
S1(config)# end
S1# copy running-config startup-config</pre>
<p>Tryby: <b>&gt;</b> użytkownika, <b>#</b> uprzywilejowany, <b>(config)#</b> konfiguracji globalnej. <code>enable secret</code> jest szyfrowane (skrót), <code>enable password</code> zapisane jawnie. <code>service password-encryption</code> szyfruje słabo pozostałe hasła. Zmiany w running-config znikają po restarcie, jeśli nie zapiszesz ich do startup-config.</p>
<h4>VLAN na przełączniku</h4>
<pre>S1(config)# vlan 10
S1(config-vlan)# name Biuro
S1(config)# interface fa0/5
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 10</pre>
<p>Podgląd: <code>show vlan brief</code>, <code>show ip interface brief</code>, <code>show mac address-table</code>.</p>
<h4>Router SOHO (przez przeglądarkę)</h4>
<ol><li>Zmień domyślne hasło administratora.</li><li>WAN: DHCP od dostawcy, statyczny adres lub PPPoE (login i hasło od ISP).</li><li>LAN: adres routera (brama), serwer DHCP z pulą, wykluczenia, rezerwacje.</li><li>Przekierowanie portów (port forwarding) do serwera w LAN, opcjonalnie DMZ.</li><li>Wyłącz WPS i zdalne zarządzanie z WAN.</li></ol>
<h4>Wi-Fi</h4>
<div class="tw"><table><tr><th>Standard</th><th>Pasmo</th><th>Maks. teoretycznie</th></tr>
<tr><td>802.11g</td><td>2,4 GHz</td><td>54 Mb/s</td></tr>
<tr><td>802.11n (Wi-Fi 4)</td><td>2,4 i 5 GHz</td><td>600 Mb/s</td></tr>
<tr><td>802.11ac (Wi-Fi 5)</td><td>5 GHz</td><td>około 6,9 Gb/s</td></tr>
<tr><td>802.11ax (Wi-Fi 6/6E)</td><td>2,4, 5 (i 6) GHz</td><td>około 9,6 Gb/s</td></tr></table></div>
<p>Zabezpieczenie: <b>WPA2-AES</b> lub <b>WPA3</b> (SAE). WEP i WPA-TKIP są złamane. Ukrycie SSID i filtrowanie MAC nie są skutecznym zabezpieczeniem. W 2,4 GHz kanały niezachodzące to <b>1, 6, 11</b>.</p>
<div class="tip">Na egzaminie praktycznym zawsze zapisuj konfigurację (copy run start) i sprawdzaj łączność poleceniem ping z każdego komputera.</div>` }
      ],
      pytania: [
        Q("Adres rozgłoszeniowy sieci, do której należy host 192.168.10.100/26, to", "192.168.10.127", "192.168.10.255", "192.168.10.63", "192.168.10.191", "Blok 64: sieć .64, broadcast .127."),
        Q("Ile adresów hostów można przydzielić w podsieci /28?", "14", "16", "30", "6", "2^4 - 2 = 14."),
        Q("Kabel skrosowany ma na jednym końcu sekwencję T568A, a na drugim", "T568B", "T568A", "odwróconą T568A", "dowolną", "Zamienione pary pomarańczowa i zielona."),
        Q("Na pinach 1 i 2 według T568B znajduje się para", "pomarańczowa", "zielona", "niebieska", "brązowa", "Biało-pomarańczowy i pomarańczowy."),
        Q("Który adres jest adresem prywatnym?", "172.20.5.1", "172.32.5.1", "192.169.1.1", "11.0.0.1", "Zakres prywatny 172.16.0.0-172.31.255.255."),
        Q("Polecenie zapisujące bieżącą konfigurację przełącznika Cisco w pamięci NVRAM to", "copy running-config startup-config", "copy startup-config running-config", "erase startup-config", "copy running-config flash:vlan.dat", "Bez zapisu konfiguracja zniknie po restarcie."),
        Q("Skrócony zapis adresu 2001:0db8:0000:0000:0000:0000:0000:0001 to", "2001:db8::1", "2001:db8:0:1", "2001:db8::0::1", "21:db8::1", "Zera wiodące i jeden ciąg zerowych grup można pominąć."),
        Q("Które urządzenie dzieli domenę rozgłoszeniową?", "router", "koncentrator", "przełącznik bez VLAN", "wzmacniak", "Router nie przekazuje rozgłoszeń warstwy 2.")
      ]
    },
    {
      id: "bezpieczenstwo", tytul: "Bezpieczeństwo i kopie zapasowe", opis: "Zabezpieczysz system przed szkodliwym oprogramowaniem, zaplanujesz kopie zapasowe i dobierzesz macierz RAID oraz licencję.",
      lekcje: [
        { tytul: "Zagrożenia i ochrona systemu", tresc: `<h4>Rodzaje szkodliwego oprogramowania</h4>
<div class="tw"><table><tr><th>Nazwa</th><th>Cecha</th></tr>
<tr><td>wirus</td><td>dołącza się do pliku i uruchamia razem z nim</td></tr>
<tr><td>robak</td><td>rozprzestrzenia się samodzielnie przez sieć, wykorzystując luki</td></tr>
<tr><td>koń trojański</td><td>udaje użyteczny program, otwiera dostęp do komputera</td></tr>
<tr><td>ransomware</td><td>szyfruje dane i żąda okupu</td></tr>
<tr><td>spyware, keylogger</td><td>szpieguje, rejestruje naciśnięcia klawiszy</td></tr>
<tr><td>rootkit</td><td>ukrywa obecność intruza w systemie</td></tr>
<tr><td>backdoor</td><td>tylne wejście omijające uwierzytelnianie</td></tr>
<tr><td>adware</td><td>wyświetla niechciane reklamy</td></tr>
<tr><td>botnet</td><td>sieć przejętych komputerów, np. do ataku DDoS</td></tr></table></div>
<h4>Ataki</h4>
<p><b>Phishing</b>: fałszywa wiadomość lub strona wyłudzająca dane. <b>Spoofing</b>: podszywanie się (IP, MAC, e-mail). <b>Man in the middle</b>: przechwytywanie komunikacji. <b>DoS/DDoS</b>: przeciążenie usługi. <b>Brute force</b> i słownikowy: zgadywanie haseł. <b>Socjotechnika</b>: manipulacja człowiekiem.</p>
<h4>Środki ochrony</h4>
<ul><li>Aktualizacje systemu i aplikacji (Windows Update, WSUS w firmie).</li>
<li>Program antywirusowy z ochroną w czasie rzeczywistym i aktualnymi sygnaturami, skanowanie heurystyczne.</li>
<li>Zapora sieciowa (firewall): reguły ruchu przychodzącego i wychodzącego dla programów i portów.</li>
<li>Konta z najmniejszymi potrzebnymi uprawnieniami, UAC, oddzielne konto administratora.</li>
<li>Silne hasła: minimum 8-12 znaków, wielkie i małe litery, cyfry, znaki specjalne, uwierzytelnianie dwuskładnikowe.</li>
<li>Szyfrowanie dysku: <b>BitLocker</b> (Windows, najlepiej z modułem TPM), szyfrowanie plików EFS, w Linuksie LUKS.</li></ul>
<h4>Zasady haseł w Windows</h4>
<p>W zasadach zabezpieczeń (secpol.msc lub GPO): maksymalny i minimalny okres ważności hasła, minimalna długość, wymaganie złożoności, historia haseł, próg blokady konta po nieudanych logowaniach.</p>
<div class="tip">Najpierw odłącz zainfekowany komputer od sieci, potem skanuj z nośnika ratunkowego. Przy ransomware nie płać okupu: przywróć dane z kopii offline.</div>
<h4>Kopie zapasowe</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Co kopiuje</th><th>Odtworzenie</th></tr>
<tr><td>pełna</td><td>wszystkie wybrane dane</td><td>tylko ta kopia</td></tr>
<tr><td>przyrostowa</td><td>zmiany od ostatniej kopii dowolnego typu</td><td>pełna i wszystkie kolejne przyrostowe</td></tr>
<tr><td>różnicowa</td><td>zmiany od ostatniej kopii pełnej</td><td>pełna i ostatnia różnicowa</td></tr></table></div>
<p>Zasada <b>3-2-1</b>: trzy kopie danych, na dwóch różnych nośnikach, jedna poza siedzibą firmy. Macierz RAID 1 nie jest kopią zapasową, bo usunięcie lub zaszyfrowanie pliku od razu trafia na oba dyski.</p>
<p>W Windows kopie wykonuje Historia plików, a punkt przywracania systemu chroni ustawienia i sterowniki, ale nie dokumenty użytkownika.</p>
<div class="tip">Pułapka: przyrostowa kopia jest najszybsza w tworzeniu, ale najwolniejsza w odtwarzaniu. Różnicowa rośnie każdego dnia aż do kolejnej kopii pełnej.</div>` },
        { tytul: "Kopie zapasowe i macierze RAID", tresc: `<h4>Rodzaje kopii</h4>
<div class="tw"><table><tr><th>Kopia</th><th>Co zawiera</th><th>Atrybut archiwalny</th><th>Odtworzenie</th></tr>
<tr><td>pełna</td><td>wszystkie wybrane pliki</td><td>czyści</td><td>tylko ta kopia</td></tr>
<tr><td>przyrostowa</td><td>zmiany od ostatniej kopii dowolnego typu</td><td>czyści</td><td>pełna + wszystkie kolejne przyrostowe</td></tr>
<tr><td>różnicowa</td><td>zmiany od ostatniej kopii pełnej</td><td>nie czyści</td><td>pełna + ostatnia różnicowa</td></tr></table></div>
<p>Przykład: pełna w niedzielę, różnicowe pn-sb. Awaria w piątek: odtwarzamy pełną z niedzieli i różnicową z czwartku. Przy kopiach przyrostowych potrzebne byłyby pełna i kopie z pn, wt, śr, czw. Kopie przyrostowe są najmniejsze i najszybsze do wykonania, ale odtwarzanie trwa najdłużej.</p>
<h4>Zasada 3-2-1</h4>
<p>3 kopie danych, na 2 różnych nośnikach, z czego 1 poza siedzibą (lub w chmurze). Kopie należy regularnie testować przez próbne odtworzenie. Narzędzia: Historia plików i Kopia zapasowa w Windows, Windows Server Backup, w Linuksie <code>rsync</code>, <code>tar</code>, harmonogram <code>cron</code>.</p>
<h4>Macierze RAID</h4>
<div class="tw"><table><tr><th>Poziom</th><th>Min. dysków</th><th>Pojemność użytkowa</th><th>Odporność</th></tr>
<tr><td>RAID 0 (striping)</td><td>2</td><td>suma dysków</td><td>brak, awaria jednego niszczy dane</td></tr>
<tr><td>RAID 1 (mirroring)</td><td>2</td><td>1 dysk</td><td>awaria jednego dysku</td></tr>
<tr><td>RAID 5</td><td>3</td><td>(n - 1) dysków</td><td>awaria jednego dysku</td></tr>
<tr><td>RAID 6</td><td>4</td><td>(n - 2) dysków</td><td>awaria dwóch dysków</td></tr>
<tr><td>RAID 10 (1+0)</td><td>4</td><td>połowa</td><td>po jednym dysku z każdego lustra</td></tr></table></div>
<p>Przykład: 4 dyski po 2 TB w RAID 5 dają 6 TB, w RAID 6 4 TB, w RAID 10 4 TB, w RAID 0 8 TB. RAID 5 rozprasza sumy kontrolne <b>parzystości</b> po wszystkich dyskach. RAID programowy tworzy system (w Windows: woluminy lustrzane i RAID-5 w Zarządzaniu dyskami), sprzętowy realizuje kontroler.</p>
<div class="tip">RAID to nie kopia zapasowa. Chroni przed awarią dysku, ale nie przed usunięciem pliku, wirusem ani pożarem.</div>` },
        { tytul: "Licencje i prawo w informatyce", tresc: `<h4>Rodzaje licencji</h4>
<div class="tw"><table><tr><th>Licencja</th><th>Cechy</th></tr>
<tr><td>OEM</td><td>dołączana do nowego komputera, przypisana do niego, nie można jej przenieść na inny sprzęt</td></tr>
<tr><td>BOX (Retail)</td><td>pudełkowa, można ją przenieść na inny komputer (po usunięciu z poprzedniego)</td></tr>
<tr><td>zbiorowa (Volume, MOLP)</td><td>dla firm, wiele stanowisk jednym kluczem lub serwerem KMS</td></tr>
<tr><td>GNU GPL</td><td>wolne oprogramowanie z kodem źródłowym; zmiany trzeba rozpowszechniać na tej samej licencji (copyleft)</td></tr>
<tr><td>BSD, MIT, Apache</td><td>liberalne, kod można włączyć do programu zamkniętego</td></tr>
<tr><td>freeware</td><td>darmowy, ale bez kodu źródłowego i bez prawa modyfikacji</td></tr>
<tr><td>shareware, trial</td><td>do wypróbowania przez określony czas lub z ograniczeniami</td></tr>
<tr><td>adware</td><td>darmowy w zamian za reklamy</td></tr>
<tr><td>public domain</td><td>bez ograniczeń praw majątkowych</td></tr>
<tr><td>Creative Commons</td><td>dla utworów (tekst, grafika); oznaczenia BY, SA, NC, ND</td></tr></table></div>
<p>Licencja CAL (Client Access License) jest wymagana dla każdego użytkownika lub urządzenia łączącego się z Windows Server. Licencja dostępowa nie zastępuje licencji serwera.</p>
<h4>Prawo</h4>
<ul><li><b>Ustawa o prawie autorskim i prawach pokrewnych</b>: program komputerowy jest utworem. Użytkownik może wykonać kopię zapasową legalnego programu, jeśli jest niezbędna do korzystania z niego.</li>
<li><b>RODO</b>: dane osobowe przetwarza się zgodnie z celem, minimalizuje ich zakres i zabezpiecza; naruszenie zgłasza się do PUODO w ciągu 72 godzin.</li>
<li><b>Kodeks karny</b>: nieuprawniony dostęp do systemu (hacking) i niszczenie danych są przestępstwami.</li></ul>
<h4>Dokumentacja i BHP stanowiska</h4>
<p>Administrator prowadzi dokumentację: schemat sieci, adresację, hasła w bezpiecznym miejscu, rejestr licencji, procedury kopii. Stanowisko komputerowe: górna krawędź monitora na wysokości oczu lub nieco niżej, odległość od ekranu 40-75 cm, przerwa co najmniej 5 minut po każdej godzinie pracy przy monitorze (wliczana do czasu pracy).</p>
<div class="tip">Zapamiętaj różnicę: freeware jest darmowy, ale zamknięty; open source (GPL) daje dostęp do kodu i prawo jego zmiany. Darmowy nie znaczy wolny.</div>` }
      ],
      pytania: [
        Q("Kopia, która obejmuje pliki zmienione od ostatniej kopii pełnej i nie czyści atrybutu archiwalnego, to kopia", "różnicowa", "przyrostowa", "pełna", "lustrzana", "Do odtworzenia wystarczy pełna i ostatnia różnicowa."),
        Q("Ile wynosi pojemność użytkowa macierzy RAID 5 z czterech dysków po 2 TB?", "6 TB", "8 TB", "4 TB", "2 TB", "(n - 1) x 2 TB = 6 TB."),
        Q("Macierz RAID 0", "nie zapewnia odporności na awarię dysku", "wymaga minimum 3 dysków", "jest kopią lustrzaną", "przechowuje sumy parzystości", "RAID 0 tylko przeplata dane."),
        Q("Szkodliwy program rozprzestrzeniający się samodzielnie przez sieć to", "robak", "wirus", "adware", "rootkit", "Wirus potrzebuje pliku nosiciela."),
        Q("Licencja przypisana na stałe do komputera, z którym ją sprzedano, to", "OEM", "BOX", "GNU GPL", "Volume", "Licencji OEM nie można przenieść na inny sprzęt."),
        Q("Licencja wymagająca udostępniania zmodyfikowanego kodu na tych samych warunkach to", "GNU GPL", "MIT", "freeware", "shareware", "Copyleft."),
        Q("Szyfrowanie całych woluminów w systemie Windows zapewnia", "BitLocker", "EFS", "Defender SmartScreen", "UAC", "EFS szyfruje pojedyncze pliki i foldery."),
        Q("Zasada 3-2-1 dotyczy", "kopii zapasowych", "haseł", "macierzy RAID", "aktualizacji systemu", "3 kopie, 2 nośniki, 1 poza siedzibą.")
      ]
    }
  ]);

  pod("INF.04", [
    {
      id: "cpp", tytul: "Język C++", opis: "Napiszesz poprawny program konsolowy w C++ z tablicami, wektorami, funkcjami, wskaźnikami i klasami.",
      lekcje: [
        { tytul: "Typy, wejście/wyjście i pułapki arytmetyki", tresc: `<h4>Szkielet programu</h4>
<pre>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    int n;
    cout &lt;&lt; "Podaj liczbe: ";
    cin &gt;&gt; n;
    cout &lt;&lt; "Kwadrat: " &lt;&lt; n * n &lt;&lt; endl;
    return 0;
}</pre>
<h4>Typy i ich rozmiary (typowe, 64-bit)</h4>
<div class="tw"><table><tr><th>Typ</th><th>Bajty</th><th>Zakres / uwagi</th></tr>
<tr><td><code>char</code></td><td>1</td><td>znak, kod ASCII</td></tr>
<tr><td><code>bool</code></td><td>1</td><td>true / false</td></tr>
<tr><td><code>int</code></td><td>4</td><td>około -2,1 mld do 2,1 mld</td></tr>
<tr><td><code>long long</code></td><td>8</td><td>około 9,2 x 10^18</td></tr>
<tr><td><code>float</code></td><td>4</td><td>około 7 cyfr znaczących</td></tr>
<tr><td><code>double</code></td><td>8</td><td>około 15-16 cyfr znaczących</td></tr></table></div>
<h4>Pułapki</h4>
<ul><li><code>7 / 2</code> daje <b>3</b> (dzielenie całkowite). Aby otrzymać 3.5: <code>7.0 / 2</code> lub <code>(double)a / b</code>.</li>
<li><code>-7 % 3</code> daje <b>-1</b>: znak reszty jest taki jak znak dzielnej.</li>
<li>Przepełnienie: <code>int x = 2147483647; x + 1</code> daje wynik niezdefiniowany (w praktyce liczbę ujemną). Silnię 20! liczymy w <code>long long</code>.</li>
<li><code>if (a = 5)</code> to przypisanie, warunek zawsze prawdziwy. Porównanie to <code>==</code>.</li>
<li>W <code>switch</code> brak <code>break</code> powoduje przejście do kolejnego przypadku.</li>
<li>Porównywanie liczb <code>double</code> przez <code>==</code> jest ryzykowne: 0.1 + 0.2 nie jest dokładnie 0.3. Stosuje się <code>fabs(a - b) &lt; 1e-9</code>.</li></ul>
<h4>Napisy</h4>
<p><code>string s = "Ala";</code>, <code>s.length()</code> lub <code>s.size()</code>, <code>s[0]</code>, <code>s.substr(1, 2)</code> (od indeksu 1, 2 znaki), <code>s.find("la")</code> (zwraca <code>string::npos</code>, gdy brak), <code>s += "!"</code>. Wczytanie całej linii ze spacjami: <code>getline(cin, s)</code>; po <code>cin &gt;&gt; n</code> trzeba wywołać <code>cin.ignore()</code>, aby usunąć znak nowej linii.</p>
<p>Konwersje: <code>stoi("42")</code>, <code>stod("3.5")</code>, <code>to_string(42)</code>. Znak na cyfrę: <code>c - '0'</code>. Wielka litera: <code>toupper(c)</code> z <code>&lt;cctype&gt;</code>.</p>
<div class="tip">Liczby losowe: <code>srand(time(0));</code> raz na początku, potem <code>rand() % 100 + 1</code> daje zakres 1-100. Nowocześniej: <code>mt19937 gen(random_device{}()); uniform_int_distribution&lt;int&gt; d(1, 100);</code></div>` },
        { tytul: "Tablice, wektory, funkcje i referencje", tresc: `<h4>Tablice i vector</h4>
<pre>int t[5] = {4, 2, 9, 1, 7};      // indeksy 0..4
#include &lt;vector&gt;
vector&lt;int&gt; v;                   // pusta
v.push_back(3);                  // dodaj na koniec
v.pop_back();                    // usun ostatni
for (int i = 0; i &lt; v.size(); i++) cout &lt;&lt; v[i];
for (int x : v) cout &lt;&lt; x;      // petla zakresowa
sort(v.begin(), v.end());        // z &lt;algorithm&gt;</pre>
<p>Odwołanie poza zakres tablicy (<code>t[5]</code> przy rozmiarze 5) nie zgłasza błędu kompilacji: to zachowanie niezdefiniowane. <code>v.at(i)</code> sprawdza zakres i rzuca wyjątek <code>out_of_range</code>. Tablica dwuwymiarowa: <code>int m[3][4];</code>, dostęp <code>m[wiersz][kolumna]</code>.</p>
<h4>Przekazywanie argumentów</h4>
<div class="tw"><table><tr><th>Sposób</th><th>Zapis</th><th>Skutek</th></tr>
<tr><td>przez wartość</td><td><code>void f(int x)</code></td><td>funkcja działa na kopii</td></tr>
<tr><td>przez referencję</td><td><code>void f(int &amp;x)</code></td><td>zmiany widoczne w wywołującym</td></tr>
<tr><td>przez stałą referencję</td><td><code>void f(const string &amp;s)</code></td><td>bez kopiowania, bez możliwości zmiany</td></tr>
<tr><td>przez wskaźnik</td><td><code>void f(int *p)</code></td><td>zmiana przez <code>*p = ...</code></td></tr></table></div>
<p>Tablica przekazywana do funkcji jest zawsze przekazywana jako wskaźnik do pierwszego elementu, dlatego trzeba osobno podać jej rozmiar: <code>int suma(int t[], int n)</code>.</p>
<h4>Wskaźniki</h4>
<pre>int a = 10;
int *p = &amp;a;     // p przechowuje adres a
*p = 20;         // teraz a == 20
int *dyn = new int[n];   // tablica dynamiczna
delete[] dyn;            // zwolnienie pamieci</pre>
<p>Brak <code>delete</code> to <b>wyciek pamięci</b>. Wskaźnik pusty to <code>nullptr</code>. Referencja musi być zainicjowana przy deklaracji i nie można jej później „przepiąć”.</p>
<h4>Przeciążanie funkcji i wartości domyślne</h4>
<p>Kilka funkcji o tej samej nazwie może różnić się listą parametrów: <code>int pole(int a)</code> i <code>double pole(double a, double b)</code>. Sam typ zwracany nie wystarcza do przeciążenia. Parametry domyślne podaje się od prawej: <code>void druk(string s, int ile = 1)</code>.</p>
<div class="tip">Na egzaminie wymaga się funkcji z parametrami zamiast jednego długiego main. Każdą funkcję opisz komentarzem: nazwa, opis, parametry, zwracana wartość.</div>` },
        { tytul: "Klasy i obiekty w C++", tresc: `<h4>Definicja klasy</h4>
<pre>class Prostokat {
private:
    double a, b;
public:
    Prostokat() : a(1), b(1) {}                      // konstruktor domyslny
    Prostokat(double x, double y) : a(x), b(y) {}    // z parametrami
    ~Prostokat() {}                                  // destruktor
    double pole() const { return a * b; }
    void setA(double x) { if (x &gt; 0) a = x; }
    double getA() const { return a; }
};

Prostokat p(3, 4);
cout &lt;&lt; p.pole();          // 12
Prostokat *w = new Prostokat(2, 5);
cout &lt;&lt; w-&gt;pole();         // 10, dostep przez wskaznik
delete w;</pre>
<ul><li>W <code>class</code> składowe są domyślnie <b>private</b>, w <code>struct</code> domyślnie <b>public</b>.</li>
<li>Konstruktor ma nazwę klasy i nie ma typu zwracanego. Destruktor ma znak <code>~</code>, nie przyjmuje argumentów i jest jeden.</li>
<li>Lista inicjalizacyjna (<code>: a(x), b(y)</code>) inicjuje pola przed wejściem do ciała konstruktora.</li>
<li>Metoda <code>const</code> nie może modyfikować pól obiektu.</li>
<li><code>this</code> to wskaźnik na bieżący obiekt: <code>this-&gt;a = a;</code>.</li>
<li>Pole <code>static</code> jest wspólne dla wszystkich obiektów klasy (np. licznik utworzonych obiektów).</li></ul>
<h4>Dziedziczenie i polimorfizm w C++</h4>
<pre>class Figura {
public:
    virtual double pole() const = 0;   // metoda czysto wirtualna
    virtual ~Figura() {}
};
class Kolo : public Figura {
    double r;
public:
    Kolo(double r) : r(r) {}
    double pole() const override { return 3.14159 * r * r; }
};</pre>
<p>Klasa z co najmniej jedną metodą czysto wirtualną (<code>= 0</code>) jest <b>abstrakcyjna</b>: nie można tworzyć jej obiektów. Bez słowa <code>virtual</code> wywołanie przez wskaźnik klasy bazowej użyje metody bazowej (wiązanie statyczne). C++ pozwala na <b>wielodziedziczenie</b>, czego nie ma w C# i Javie dla klas.</p>
<h4>Przeciążanie operatorów</h4>
<p><code>bool operator&lt;(const Prostokat &amp;o) const { return pole() &lt; o.pole(); }</code> pozwala porównywać obiekty i sortować je funkcją <code>sort</code>.</p>
<div class="tip">Typowy błąd: wywołanie <code>Prostokat p();</code> nie tworzy obiektu, tylko deklaruje funkcję. Obiekt z konstruktorem domyślnym to <code>Prostokat p;</code>.</div>` }
      ],
      pytania: [
        Q("Jaki wynik da wyrażenie 7 / 2 w C++, gdy oba argumenty są typu int?", "3", "3.5", "4", "błąd kompilacji", "Dzielenie całkowite odcina część ułamkową."),
        Q("W klasie C++ zadeklarowanej słowem class składowe bez modyfikatora są domyślnie", "prywatne", "publiczne", "chronione", "statyczne", "W struct domyślnie publiczne."),
        Q("Funkcja void f(int &x) otrzymuje argument", "przez referencję", "przez wartość", "przez stałą", "przez kopię wskaźnika", "Zmiany x będą widoczne w wywołującym."),
        Q("Wyrażenie rand() % 6 + 1 zwraca liczby z zakresu", "1-6", "0-6", "0-5", "1-7", "rand() % 6 daje 0-5, plus 1."),
        Q("Metoda zadeklarowana jako virtual double pole() const = 0; jest", "czysto wirtualna, klasa jest abstrakcyjna", "statyczna, wywoływana bez tworzenia obiektu", "wirtualna z domyślną implementacją równą 0", "stała, zwracająca zawsze wartość 0", "= 0 oznacza brak implementacji w klasie bazowej."),
        Q("Pamięć zaalokowaną instrukcją new int[n] zwalnia się instrukcją", "delete[]", "delete", "free()", "nie trzeba jej zwalniać", "Dla tablic używa się delete[]."),
        Q("Metoda substr(1, 3) wywołana na napisie „Komputer” zwraca", "„omp”", "„Kom”", "„ompu”", "„mpu”", "Od indeksu 1, 3 znaki."),
        Q("Destruktor klasy Punkt ma postać", "~Punkt()", "Punkt()", "void ~Punkt(int)", "delete Punkt()", "Destruktor nie ma parametrów ani typu zwracanego.")
      ]
    },
    {
      id: "csharp", tytul: "Język C#", opis: "Napiszesz aplikację konsolową w C# z kolekcjami, właściwościami, wyjątkami i podstawami LINQ.",
      lekcje: [
        { tytul: "Typy, konwersje i wejście z konsoli", tresc: `<h4>Program konsolowy</h4>
<pre>using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Podaj wiek: ");
        string tekst = Console.ReadLine();
        if (int.TryParse(tekst, out int wiek))
            Console.WriteLine($"Za rok: {wiek + 1}");
        else
            Console.WriteLine("To nie jest liczba");
    }
}</pre>
<p>W nowszych wersjach .NET (6+) można pisać z instrukcjami najwyższego poziomu, bez klasy i metody Main. Na egzaminie oba zapisy są poprawne.</p>
<h4>Typy wartościowe i referencyjne</h4>
<div class="tw"><table><tr><th>Wartościowe (stos, kopia)</th><th>Referencyjne (sterta, adres)</th></tr>
<tr><td><code>int</code>, <code>long</code>, <code>double</code>, <code>decimal</code>, <code>bool</code>, <code>char</code>, <code>struct</code>, <code>enum</code></td><td><code>class</code>, <code>string</code>, tablice, <code>List&lt;T&gt;</code>, interfejsy, delegaty</td></tr></table></div>
<p>Przypisanie obiektu klasy kopiuje <b>referencję</b>: obie zmienne wskazują ten sam obiekt. <code>string</code> jest referencyjny, ale <b>niezmienny</b> (immutable): każda modyfikacja tworzy nowy napis, dlatego przy wielu doklejeniach używa się <code>StringBuilder</code>. Do pieniędzy stosuje się <code>decimal</code> (literal <code>12.50m</code>).</p>
<h4>Konwersje</h4>
<ul><li><code>int.Parse("12")</code>: rzuca <code>FormatException</code> przy błędnym tekście.</li>
<li><code>int.TryParse(s, out int x)</code>: zwraca <code>bool</code>, nie rzuca wyjątku. Najlepsze do walidacji danych od użytkownika.</li>
<li><code>Convert.ToInt32(s)</code>, rzutowanie <code>(int)3.9</code> daje 3 (obcięcie), <code>Math.Round(3.5)</code> daje 4 (domyślnie zaokrąglanie bankierskie: <code>Math.Round(2.5)</code> daje 2).</li></ul>
<h4>Napisy i formatowanie</h4>
<p>Interpolacja: <code>$"Suma: {s:F2}"</code> (2 miejsca po przecinku). Metody: <code>Length</code>, <code>ToUpper()</code>, <code>Substring(start, dlugosc)</code>, <code>Contains()</code>, <code>Split(' ')</code>, <code>Trim()</code>, <code>Replace()</code>, <code>IndexOf()</code>. Porównanie napisów przez <code>==</code> porównuje zawartość.</p>
<h4>Losowanie</h4>
<p><code>Random rnd = new Random(); int x = rnd.Next(1, 101);</code> zwraca liczby od 1 do <b>100</b>: górna granica jest wyłączona. Obiekt Random twórz raz, nie w każdej iteracji pętli.</p>
<div class="tip">Klasyczna pułapka: <code>rnd.Next(1, 6)</code> nie wylosuje szóstki. Rzut kostką to <code>rnd.Next(1, 7)</code>.</div>` },
        { tytul: "Kolekcje, pętle i LINQ", tresc: `<h4>Tablice i listy</h4>
<pre>int[] t = new int[5];               // zera
int[] u = { 3, 1, 4 };
int[,] m = new int[3, 4];           // dwuwymiarowa
List&lt;string&gt; imiona = new List&lt;string&gt;();
imiona.Add("Ola");
imiona.Remove("Ola");
imiona.Insert(0, "Jan");
int ile = imiona.Count;             // List: Count, tablica: Length
Dictionary&lt;string, int&gt; oceny = new Dictionary&lt;string, int&gt;();
oceny["Jan"] = 5;
if (oceny.ContainsKey("Jan")) { }
foreach (var para in oceny)
    Console.WriteLine(para.Key + " " + para.Value);</pre>
<p>Inne kolekcje: <code>Stack&lt;T&gt;</code> (Push, Pop, Peek), <code>Queue&lt;T&gt;</code> (Enqueue, Dequeue), <code>HashSet&lt;T&gt;</code> (unikalne elementy). Wewnątrz <code>foreach</code> nie wolno modyfikować kolekcji (wyjątek <code>InvalidOperationException</code>).</p>
<h4>Pętle</h4>
<p><code>for</code> (znana liczba powtórzeń), <code>while</code> (sprawdza warunek przed), <code>do...while</code> (wykona się co najmniej raz, dobra do menu i walidacji), <code>foreach</code>. <code>break</code> kończy pętlę, <code>continue</code> przechodzi do następnej iteracji.</p>
<h4>LINQ</h4>
<pre>using System.Linq;
var parzyste = u.Where(x =&gt; x % 2 == 0).ToList();
var kwadraty = u.Select(x =&gt; x * x);
var posort = imiona.OrderBy(s =&gt; s.Length);
int suma = u.Sum();
double sr = u.Average();
int max = u.Max();
int ileDuzych = u.Count(x =&gt; x &gt; 2);</pre>
<p>Wyrażenie <code>x =&gt; x * x</code> to <b>lambda</b>. Zapytania LINQ są leniwe: wykonują się dopiero przy wyliczeniu (np. <code>ToList()</code>, <code>foreach</code>).</p>
<h4>Metody i parametry</h4>
<ul><li><code>static int Suma(int a, int b) { return a + b; }</code></li>
<li><code>ref</code>: zmienna musi być zainicjowana przed wywołaniem, metoda może ją zmienić.</li>
<li><code>out</code>: metoda musi przypisać wartość, np. TryParse.</li>
<li><code>params int[] liczby</code>: dowolna liczba argumentów.</li>
<li>Parametry opcjonalne: <code>void Druk(string s, int ile = 1)</code>.</li></ul>
<div class="tip">Na egzaminie warto użyć <code>do...while</code> z <code>TryParse</code>, aby powtarzać pytanie do skutku. Komisja docenia walidację danych.</div>` },
        { tytul: "Klasy, właściwości i wyjątki w C#", tresc: `<h4>Klasa z właściwościami</h4>
<pre>public class Konto
{
    private decimal saldo;                  // pole prywatne
    public string Wlasciciel { get; set; }  // auto-wlasciwosc
    public decimal Saldo                    // wlasciwosc tylko do odczytu
    {
        get { return saldo; }
    }
    public static int Liczba { get; private set; }

    public Konto(string wlasciciel)
    {
        Wlasciciel = wlasciciel;
        Liczba++;
    }

    public void Wplac(decimal kwota)
    {
        if (kwota &lt;= 0)
            throw new ArgumentException("Kwota musi byc dodatnia");
        saldo += kwota;
    }
}</pre>
<p>Właściwość (<code>get</code>/<code>set</code>) to kontrolowany dostęp do pola: hermetyzacja. Konwencja: pola prywatne camelCase, właściwości i metody <b>PascalCase</b>. Modyfikatory dostępu: <code>public</code>, <code>private</code> (domyślny dla składowych klasy), <code>protected</code>, <code>internal</code> (domyślny dla klas, w obrębie zestawu).</p>
<h4>Dziedziczenie</h4>
<pre>public class KontoOszczednosciowe : Konto
{
    public KontoOszczednosciowe(string w) : base(w) { }
    public override string ToString() =&gt; "Oszczednosciowe: " + Wlasciciel;
}</pre>
<p>Metodę w klasie bazowej, którą można nadpisać, oznacza się <code>virtual</code>, w pochodnej <code>override</code>. <code>sealed</code> blokuje dalsze dziedziczenie. Klasa dziedziczy po jednej klasie, ale może implementować wiele interfejsów. Wszystkie klasy dziedziczą po <code>object</code> (metody ToString, Equals, GetHashCode).</p>
<h4>Wyjątki</h4>
<pre>try
{
    int a = int.Parse(Console.ReadLine());
    Console.WriteLine(100 / a);
}
catch (FormatException) { Console.WriteLine("Zly format"); }
catch (DivideByZeroException) { Console.WriteLine("Dzielenie przez zero"); }
catch (Exception ex) { Console.WriteLine(ex.Message); }
finally { Console.WriteLine("Zawsze"); }</pre>
<p>Bloki <code>catch</code> układa się od najbardziej szczegółowego do ogólnego <code>Exception</code>. Blok <code>finally</code> wykona się zawsze. Dzielenie liczb <code>double</code> przez zero nie rzuca wyjątku, tylko daje nieskończoność.</p>
<div class="tip">Struktura (<code>struct</code>) jest typem wartościowym i nie może dziedziczyć po innej strukturze ani klasie. Do małych danych (punkt, kolor) bywa szybsza od klasy.</div>` }
      ],
      pytania: [
        Q("Wywołanie rnd.Next(1, 10) w C# zwraca liczbę z zakresu", "1-9", "1-10", "0-10", "0-9", "Górna granica jest wyłączona."),
        Q("Metoda int.TryParse w przypadku niepoprawnego tekstu", "zwraca false i nie rzuca wyjątku", "rzuca FormatException", "zwraca -1", "zamyka program", "Wynik konwersji trafia do parametru out."),
        Q("Który typ w C# jest typem wartościowym?", "struct", "string", "class", "List<int>", "struct, typy liczbowe, bool, char, enum są wartościowe."),
        Q("Liczbę elementów listy List<int> odczytuje się właściwością", "Count", "Length", "Size", "Capacity", "Length dotyczy tablic i napisów."),
        Q("Aby metodę klasy bazowej można było nadpisać w klasie pochodnej, oznacza się ją w C# słowem", "virtual", "sealed", "static", "readonly", "W klasie pochodnej używa się override."),
        Q("Blok finally w instrukcji try-catch", "wykonuje się zawsze", "wykonuje się tylko po wyjątku", "wykonuje się tylko bez wyjątku", "zastępuje catch", "Służy np. do zamykania plików."),
        Q("Wyrażenie u.Where(x => x > 3) w LINQ", "filtruje elementy większe od 3", "sortuje elementy", "sumuje elementy", "zwraca jedną wartość logiczną", "Where to filtrowanie, Select to przekształcenie."),
        Q("Do przechowywania kwot pieniężnych w C# najlepiej użyć typu", "decimal", "float", "double", "int", "decimal ma dokładną reprezentację dziesiętną.")
      ]
    },
    {
      id: "python", tytul: "Język Python", opis: "Napiszesz czytelny program w Pythonie z listami, słownikami, funkcjami, klasami i obsługą wyjątków.",
      lekcje: [
        { tytul: "Typy, operatory i sterowanie", tresc: `<h4>Podstawy</h4>
<pre>imie = input("Imie: ")          # input zawsze zwraca str
wiek = int(input("Wiek: "))     # konwersja na int
print(f"{imie} za rok ma {wiek + 1} lat")
print("a", "b", sep="-", end="!")</pre>
<p>Python ma <b>typowanie dynamiczne</b> (typ ma wartość, nie zmienna) i silne (nie doda <code>"2" + 3</code>, rzuci <code>TypeError</code>). Typ <code>int</code> ma nieograniczoną precyzję, więc 50! liczy się bez przepełnienia. Bloki wyznaczają <b>wcięcia</b> (standard: 4 spacje), a nie nawiasy klamrowe.</p>
<h4>Operatory</h4>
<div class="tw"><table><tr><th>Wyrażenie</th><th>Wynik</th><th>Uwagi</th></tr>
<tr><td><code>7 / 2</code></td><td>3.5</td><td>zawsze float</td></tr>
<tr><td><code>7 // 2</code></td><td>3</td><td>dzielenie całkowite (w dół)</td></tr>
<tr><td><code>-7 // 2</code></td><td>-4</td><td>zaokrągla w dół, nie w stronę zera</td></tr>
<tr><td><code>7 % 3</code></td><td>1</td><td>reszta</td></tr>
<tr><td><code>-7 % 3</code></td><td>2</td><td>znak jak dzielnik (inaczej niż w C++)</td></tr>
<tr><td><code>2 ** 10</code></td><td>1024</td><td>potęga</td></tr></table></div>
<p>Logiczne: <code>and</code>, <code>or</code>, <code>not</code>. Porównania można łączyć: <code>0 &lt; x &lt; 10</code>. <code>==</code> porównuje wartości, <code>is</code> tożsamość obiektów (używaj <code>is</code> tylko z <code>None</code>).</p>
<h4>Instrukcje sterujące</h4>
<pre>if x &gt; 0:
    print("dodatnia")
elif x == 0:
    print("zero")
else:
    print("ujemna")

for i in range(1, 11):      # 1..10, gorna granica wylaczona
    print(i)
for i in range(10, 0, -2):  # 10, 8, 6, 4, 2
    print(i)
while n &gt; 0:
    n -= 1                  # brak operatora n--</pre>
<p>Pętle mają opcjonalny <code>else</code>, wykonywany, gdy pętla nie została przerwana przez <code>break</code>. Instrukcja <code>pass</code> to pusty blok. Od Pythona 3.10 istnieje <code>match</code>/<code>case</code>.</p>
<h4>Napisy</h4>
<p>Napisy są niezmienne. <code>s[0]</code>, <code>s[-1]</code> (ostatni znak), <code>s[1:4]</code> (znaki 1, 2, 3), <code>s[::-1]</code> (odwrócony), <code>len(s)</code>, <code>s.upper()</code>, <code>s.split()</code>, <code>" ".join(lista)</code>, <code>s.strip()</code>, <code>s.count("a")</code>, <code>"ala" in s</code>.</p>
<div class="tip">Losowanie: <code>import random</code>, <code>random.randint(1, 6)</code> zwraca 1-6 <b>włącznie z 6</b>, w odróżnieniu od <code>randrange(1, 6)</code> i C# <code>Next(1, 6)</code>.</div>` },
        { tytul: "Listy, słowniki i funkcje", tresc: `<h4>Kolekcje</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zapis</th><th>Cechy</th></tr>
<tr><td>lista</td><td><code>[1, 2, 3]</code></td><td>zmienna, uporządkowana</td></tr>
<tr><td>krotka</td><td><code>(1, 2, 3)</code></td><td>niezmienna</td></tr>
<tr><td>słownik</td><td><code>{"Jan": 5}</code></td><td>pary klucz: wartość</td></tr>
<tr><td>zbiór</td><td><code>{1, 2, 3}</code></td><td>unikalne elementy, bez kolejności</td></tr></table></div>
<pre>t = [5, 3, 8]
t.append(1)         # [5, 3, 8, 1]
t.insert(0, 9)      # [9, 5, 3, 8, 1]
t.remove(3)         # usuwa pierwsza wartosc 3
x = t.pop()         # usuwa i zwraca ostatni
t.sort()            # sortuje w miejscu, zwraca None
n = sorted(t, reverse=True)   # nowa lista
kw = [i * i for i in range(5) if i % 2 == 0]   # [0, 4, 16]

oceny = {"Jan": 4}
oceny["Ola"] = 5
print(oceny.get("Ewa", 0))    # 0 zamiast KeyError
for k, v in oceny.items():
    print(k, v)</pre>
<p>Pułapka: <code>t = t.sort()</code> zapisze w <code>t</code> wartość <code>None</code>. Przypisanie <code>b = a</code> dla listy nie kopiuje jej: obie nazwy wskazują tę samą listę. Kopia: <code>b = a.copy()</code> lub <code>a[:]</code>.</p>
<h4>Funkcje</h4>
<pre>def pole_prostokata(a, b=1):
    """Zwraca pole prostokata o bokach a i b."""
    return a * b

def statystyka(*liczby):
    return min(liczby), max(liczby)   # zwraca krotke

mn, mx = statystyka(4, 9, 2)          # rozpakowanie</pre>
<ul><li>Funkcja bez <code>return</code> zwraca <code>None</code>.</li>
<li>Argumenty nazwane: <code>pole_prostokata(b=3, a=2)</code>.</li>
<li><code>*args</code> zbiera argumenty pozycyjne w krotkę, <code>**kwargs</code> nazwane w słownik.</li>
<li>Zmienna globalna modyfikowana w funkcji wymaga deklaracji <code>global</code>.</li>
<li>Pułapka: domyślny argument zmienny <code>def f(t=[])</code> jest tworzony raz i współdzielony między wywołaniami. Stosuj <code>t=None</code>.</li>
<li>Lambda: <code>sorted(osoby, key=lambda o: o[1])</code>.</li></ul>
<div class="tip">Docstring (potrójny cudzysłów pod nagłówkiem funkcji) to standardowa dokumentacja w Pythonie. Nazwy zmiennych i funkcji zapisuje się w stylu snake_case (PEP 8), klasy w PascalCase.</div>` },
        { tytul: "Klasy, wyjątki i pliki w Pythonie", tresc: `<h4>Klasy</h4>
<pre>class Zwierze:
    licznik = 0                       # atrybut klasy (wspolny)

    def __init__(self, imie):         # konstruktor
        self.imie = imie              # atrybut obiektu
        self._wiek = 0                # "chroniony" umownie
        Zwierze.licznik += 1

    def daj_glos(self):
        return "..."

    def __str__(self):
        return f"Zwierze: {self.imie}"

class Pies(Zwierze):                  # dziedziczenie
    def __init__(self, imie, rasa):
        super().__init__(imie)
        self.rasa = rasa

    def daj_glos(self):               # nadpisanie
        return "Hau"

p = Pies("Burek", "kundel")
print(p.daj_glos(), isinstance(p, Zwierze))   # Hau True</pre>
<ul><li>Każda metoda instancji przyjmuje jako pierwszy parametr <code>self</code>.</li>
<li>Python nie ma słów private/public. Konwencja: <code>_nazwa</code> oznacza użytek wewnętrzny, <code>__nazwa</code> powoduje zniekształcenie nazwy (name mangling).</li>
<li>Właściwości tworzy dekorator <code>@property</code> oraz <code>@nazwa.setter</code>.</li>
<li><code>@staticmethod</code> nie dostaje self, <code>@classmethod</code> dostaje klasę <code>cls</code>.</li>
<li>Python obsługuje wielodziedziczenie: <code>class C(A, B)</code>.</li>
<li>Klasy abstrakcyjne: moduł <code>abc</code>, klasa <code>ABC</code> i dekorator <code>@abstractmethod</code>.</li></ul>
<h4>Wyjątki</h4>
<pre>try:
    x = int(input("Liczba: "))
    print(10 / x)
except ValueError:
    print("To nie liczba")
except ZeroDivisionError:
    print("Nie dziel przez zero")
else:
    print("Bez bledow")       # gdy nie bylo wyjatku
finally:
    print("Koniec")           # zawsze

raise ValueError("Ujemny wiek")   # zgloszenie wyjatku</pre>
<h4>Pliki</h4>
<pre>with open("dane.txt", "r", encoding="utf-8") as f:
    for linia in f:
        print(linia.strip())
with open("wynik.txt", "w", encoding="utf-8") as f:
    f.write("Suma: 10")</pre>
<p>Tryby: <code>"r"</code> odczyt, <code>"w"</code> zapis (kasuje zawartość), <code>"a"</code> dopisywanie. Konstrukcja <code>with</code> sama zamyka plik.</p>
<div class="tip">Na egzaminie częsty błąd: zapomniany <code>self</code> w definicji metody lub przy odwołaniu do atrybutu. Wtedy pojawia się TypeError lub NameError.</div>
<h4>Typowe pułapki</h4>
<ul><li>Bez <code>encoding="utf-8"</code> polskie znaki w pliku mogą się wczytać błędnie na Windows.</li>
<li>Otwarcie nieistniejącego pliku w trybie <code>"r"</code> zgłasza <code>FileNotFoundError</code>, a tryb <code>"w"</code> tworzy nowy plik.</li>
<li>Metoda <code>readlines()</code> zwraca listę wierszy razem ze znakiem <code>\\n</code>, dlatego stosuje się <code>strip()</code>.</li>
<li>Kolejność bloków except ma znaczenie: ogólny <code>except Exception</code> umieszczony na początku przechwyci wszystkie błędy.</li></ul>
<div class="tw"><table><tr><th>Wyjątek</th><th>Przyczyna</th></tr>
<tr><td>ValueError</td><td>niepoprawna wartość, np. int("abc")</td></tr>
<tr><td>ZeroDivisionError</td><td>dzielenie przez zero</td></tr>
<tr><td>IndexError</td><td>indeks spoza listy</td></tr>
<tr><td>KeyError</td><td>brak klucza w słowniku</td></tr>
<tr><td>AttributeError</td><td>brak atrybutu lub metody obiektu</td></tr></table></div>` }
      ],
      pytania: [
        Q("Wynik wyrażenia 17 // 5 w Pythonie to", "3", "3.4", "2", "4", "// to dzielenie całkowite."),
        Q("Pętla for i in range(2, 8, 2) wypisze kolejno", "2, 4, 6", "2, 4, 6, 8", "2, 3, 4, 5, 6, 7", "4, 6, 8", "Górna granica 8 jest wyłączona."),
        Q("Funkcja random.randint(1, 6) zwraca liczby", "od 1 do 6 włącznie", "od 1 do 5", "od 0 do 6", "od 0 do 5", "randint obejmuje obie granice."),
        Q("Wyrażenie \"Python\"[::-1] daje", "„nohtyP”", "„Python”", "„P”", "błąd", "Krok -1 odwraca napis."),
        Q("Konstruktor klasy w Pythonie to metoda", "__init__", "__new_object__", "constructor", "__main__", "Pierwszy parametr to self."),
        Q("Po wykonaniu t = [3, 1, 2]; t = t.sort() zmienna t ma wartość", "None", "[1, 2, 3]", "[3, 1, 2]", "błąd składni", "sort() sortuje w miejscu i zwraca None."),
        Q("Wyjątek zgłaszany przez int(\"abc\") to", "ValueError", "TypeError", "KeyError", "IndexError", "Niepoprawna wartość tekstowa."),
        Q("Który typ w Pythonie jest niezmienny (immutable)?", "krotka (tuple)", "lista", "słownik", "zbiór set", "Krotki nie można zmieniać po utworzeniu.")
      ]
    },
    {
      id: "oop", tytul: "Programowanie obiektowe", opis: "Zaprojektujesz klasy zgodnie z zasadami OOP i odczytasz diagram klas UML, z przykładami w Javie.",
      lekcje: [
        { tytul: "Cztery filary OOP na przykładzie Javy", tresc: `<h4>Hermetyzacja</h4>
<p>Ukrywanie stanu obiektu: pola są <code>private</code>, dostęp przez metody (gettery, settery) z walidacją.</p>
<pre>public class Osoba {
    private String imie;
    private int wiek;
    public Osoba(String imie, int wiek) {
        this.imie = imie;
        setWiek(wiek);
    }
    public int getWiek() { return wiek; }
    public void setWiek(int wiek) {
        if (wiek &gt;= 0) this.wiek = wiek;
    }
}</pre>
<h4>Dziedziczenie</h4>
<pre>public class Pracownik extends Osoba {
    private double pensja;
    public Pracownik(String imie, int wiek, double pensja) {
        super(imie, wiek);      // musi byc pierwsza instrukcja
        this.pensja = pensja;
    }
}</pre>
<p>Java i C# pozwalają dziedziczyć po <b>jednej</b> klasie, ale implementować wiele interfejsów. Klasa <code>final</code> (Java) lub <code>sealed</code> (C#) nie może mieć potomków. Wszystkie klasy w Javie dziedziczą po <code>Object</code>.</p>
<h4>Polimorfizm</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Mechanizm</th><th>Kiedy rozstrzygany</th></tr>
<tr><td>przeciążanie (overloading)</td><td>ta sama nazwa, różne parametry, w jednej klasie</td><td>podczas kompilacji</td></tr>
<tr><td>nadpisywanie (overriding)</td><td>ta sama sygnatura w klasie pochodnej</td><td>podczas wykonania</td></tr></table></div>
<pre>Osoba o = new Pracownik("Ala", 30, 5000);
System.out.println(o.toString());   // wywola wersje z Pracownik, jesli nadpisana</pre>
<p>W Javie metody są domyślnie wirtualne (adnotacja <code>@Override</code> pomaga wykryć błąd w nazwie). W C# i C++ metodę trzeba oznaczyć <code>virtual</code>.</p>
<h4>Abstrakcja</h4>
<p>Wyodrębnienie istotnych cech, pominięcie szczegółów. Realizują ją klasy abstrakcyjne i interfejsy.</p>
<pre>public abstract class Figura {
    public abstract double pole();
    public String opis() { return "Pole: " + pole(); }
}
public interface Rysowalny { void rysuj(); }
public class Kwadrat extends Figura implements Rysowalny {
    private double a;
    public Kwadrat(double a) { this.a = a; }
    public double pole() { return a * a; }
    public void rysuj() { System.out.println("[]"); }
}</pre>
<div class="tip">Klasa abstrakcyjna może mieć pola, konstruktor i metody z kodem; interfejs opisuje kontrakt (od Javy 8 i C# 8 może mieć metody domyślne). Obiektu żadnego z nich nie utworzysz operatorem new.</div>` },
        { tytul: "Konstruktory, składowe statyczne i modyfikatory", tresc: `<h4>Konstruktory</h4>
<ul><li>Jeśli nie zdefiniujesz żadnego konstruktora, kompilator dodaje bezparametrowy konstruktor domyślny. Gdy zdefiniujesz konstruktor z parametrami, domyślny <b>znika</b>.</li>
<li>Kolejność tworzenia obiektu pochodnego: najpierw konstruktor klasy bazowej, potem pochodnej. Destruktory (C++) w odwrotnej kolejności.</li>
<li>Konstruktor kopiujący (C++): <code>Punkt(const Punkt &amp;p)</code>.</li>
<li>Wywołanie innego konstruktora tej samej klasy: Java <code>this(...)</code>, C# <code>: this(...)</code>.</li></ul>
<h4>Modyfikatory dostępu</h4>
<div class="tw"><table><tr><th>Modyfikator</th><th>Ta klasa</th><th>Pochodne</th><th>Wszyscy</th><th>UML</th></tr>
<tr><td>public</td><td>tak</td><td>tak</td><td>tak</td><td>+</td></tr>
<tr><td>protected</td><td>tak</td><td>tak</td><td>nie*</td><td>#</td></tr>
<tr><td>private</td><td>tak</td><td>nie</td><td>nie</td><td>-</td></tr>
<tr><td>pakietowy (Java, brak słowa)</td><td>tak</td><td>w pakiecie</td><td>w pakiecie</td><td>~</td></tr></table></div>
<p>* W Javie <code>protected</code> daje też dostęp w obrębie pakietu.</p>
<h4>Składowe statyczne</h4>
<p>Pole <code>static</code> należy do klasy, nie do obiektu: jest jedno, wspólne. Metoda statyczna wywoływana jest przez nazwę klasy (<code>Math.sqrt(9)</code>) i <b>nie ma dostępu do this</b> ani do pól instancji. Przykład: licznik obiektów, metody pomocnicze, stałe (<code>static final</code> w Javie, <code>const</code> w C#).</p>
<h4>Relacje między klasami (UML)</h4>
<div class="tw"><table><tr><th>Relacja</th><th>Symbol</th><th>Przykład</th></tr>
<tr><td>dziedziczenie (generalizacja)</td><td>linia z pustym trójkątem przy klasie bazowej</td><td>Pies jest Zwierzęciem</td></tr>
<tr><td>realizacja interfejsu</td><td>linia przerywana z pustym trójkątem</td><td>Kwadrat realizuje Rysowalny</td></tr>
<tr><td>asocjacja</td><td>zwykła linia</td><td>Klient i Zamówienie</td></tr>
<tr><td>agregacja</td><td>pusty romb przy całości</td><td>Drużyna i Zawodnik (zawodnik istnieje sam)</td></tr>
<tr><td>kompozycja</td><td>pełny romb przy całości</td><td>Dom i Pokój (pokój ginie z domem)</td></tr></table></div>
<p>Krotność: <code>1</code>, <code>0..1</code>, <code>*</code> (0..*), <code>1..*</code>. Prostokąt klasy ma trzy części: nazwa, atrybuty, metody, np. <code>- saldo: double</code>, <code>+ wplac(kwota: double): void</code>. Nazwa klasy abstrakcyjnej pisana jest kursywą.</p>
<div class="tip">Zasada: preferuj kompozycję nad dziedziczeniem. Dziedziczenie stosuj, gdy zachodzi relacja „jest” (is-a), kompozycję przy „ma” (has-a).</div>` },
        { tytul: "Zasady projektowania i wzorce", tresc: `<h4>SOLID</h4>
<ul><li><b>S</b>: zasada jednej odpowiedzialności, klasa ma jeden powód do zmiany.</li>
<li><b>O</b>: otwarta na rozszerzenia, zamknięta na modyfikacje.</li>
<li><b>L</b>: podstawienie Liskov, obiekt klasy pochodnej może zastąpić bazowy bez psucia programu.</li>
<li><b>I</b>: segregacja interfejsów, wiele małych interfejsów zamiast jednego dużego.</li>
<li><b>D</b>: odwrócenie zależności, zależność od abstrakcji, a nie od konkretnych klas.</li></ul>
<p>Inne zasady: <b>DRY</b> (nie powtarzaj się), <b>KISS</b> (prostota), <b>YAGNI</b> (nie pisz na zapas).</p>
<h4>Wzorce projektowe</h4>
<div class="tw"><table><tr><th>Wzorzec</th><th>Grupa</th><th>Idea</th></tr>
<tr><td>Singleton</td><td>kreacyjny</td><td>jedna instancja klasy, prywatny konstruktor i statyczna metoda dostępu</td></tr>
<tr><td>Fabryka (Factory Method)</td><td>kreacyjny</td><td>metoda tworząca obiekty bez wskazywania konkretnej klasy</td></tr>
<tr><td>Budowniczy (Builder)</td><td>kreacyjny</td><td>tworzenie złożonego obiektu krok po kroku</td></tr>
<tr><td>Adapter</td><td>strukturalny</td><td>dopasowanie niezgodnego interfejsu</td></tr>
<tr><td>Dekorator</td><td>strukturalny</td><td>dynamiczne dodawanie zachowań</td></tr>
<tr><td>Obserwator</td><td>czynnościowy</td><td>powiadamianie subskrybentów o zmianie stanu (zdarzenia)</td></tr>
<tr><td>Strategia</td><td>czynnościowy</td><td>wymienne algorytmy za wspólnym interfejsem</td></tr></table></div>
<pre>public class Ustawienia {
    private static Ustawienia instancja;
    private Ustawienia() { }
    public static Ustawienia get() {
        if (instancja == null) instancja = new Ustawienia();
        return instancja;
    }
}</pre>
<h4>Architektura aplikacji</h4>
<p><b>MVC</b>: Model (dane i logika), Widok (prezentacja), Kontroler (obsługa żądań). <b>MVVM</b>: Model, Widok, ViewModel z wiązaniem danych (WPF, .NET MAUI). Rozdzielenie warstw ułatwia testowanie logiki bez interfejsu.</p>
<h4>Typy generyczne</h4>
<p>Klasa parametryzowana typem: Java <code>List&lt;Integer&gt;</code> (typy proste trzeba opakować: int w Integer), C# <code>List&lt;int&gt;</code>, C++ szablony <code>template &lt;typename T&gt;</code>. Pozwalają pisać jeden kod dla wielu typów z kontrolą typów w czasie kompilacji.</p>
<div class="tip">Częste pytanie: „metoda o tej samej nazwie i innych parametrach w tej samej klasie” to przeciążanie; „ta sama sygnatura w klasie potomnej” to nadpisywanie.</div>` }
      ],
      pytania: [
        Q("Ukrywanie pól klasy i udostępnianie ich przez metody to", "hermetyzacja", "dziedziczenie", "polimorfizm", "rekurencja", "Enkapsulacja chroni stan obiektu."),
        Q("Dwie metody o tej samej nazwie i różnych listach parametrów w jednej klasie to przykład", "przeciążania", "nadpisywania", "dziedziczenia wielobazowego", "hermetyzacji", "Overloading rozstrzyga kompilator."),
        Q("W diagramie UML symbol # przed atrybutem oznacza dostęp", "protected", "private", "public", "pakietowy", "+ public, - private, # protected, ~ pakietowy."),
        Q("Relację kompozycji na diagramie klas UML oznacza", "pełny romb przy klasie całości", "pusty romb przy klasie całości", "pusty trójkąt przy klasie bazowej", "przerywana linia zakończona strzałką", "Pusty romb to agregacja."),
        Q("W Javie klasa może dziedziczyć bezpośrednio po", "jednej klasie i implementować wiele interfejsów", "wielu klasach", "jednym interfejsie", "dowolnej liczbie klas abstrakcyjnych", "Wielodziedziczenie klas jest w C++."),
        Q("Metoda statyczna", "nie ma dostępu do this ani pól instancji", "może być wywołana tylko na obiekcie", "musi być abstrakcyjna", "jest zawsze prywatna", "Należy do klasy, nie do obiektu."),
        Q("Wzorzec gwarantujący istnienie tylko jednej instancji klasy to", "Singleton", "Obserwator", "Adapter", "Fabryka", "Prywatny konstruktor i statyczna metoda dostępu."),
        Q("Po zdefiniowaniu w klasie konstruktora z parametrami konstruktor domyślny bezparametrowy", "nie jest już generowany automatycznie", "jest nadal generowany przez kompilator", "staje się automatycznie prywatny", "staje się statyczny dla całej klasy", "Trzeba go zdefiniować samodzielnie, jeśli jest potrzebny.")
      ]
    },
    {
      id: "algorytmy", tytul: "Algorytmy i struktury danych", opis: "Zaimplementujesz klasyczne algorytmy egzaminacyjne, ocenisz ich złożoność i dobierzesz strukturę danych.",
      lekcje: [
        { tytul: "Sortowanie krok po kroku", tresc: `<h4>Sortowanie przez wybór</h4>
<p>W każdym przebiegu szukamy minimum w nieposortowanej części i zamieniamy je z pierwszym elementem tej części. Dla [5, 3, 8, 1]: przebieg 1: [1, 3, 8, 5], przebieg 2: [1, 3, 8, 5], przebieg 3: [1, 3, 5, 8]. Liczba porównań zawsze n(n-1)/2, zamian najwyżej n-1.</p>
<h4>Sortowanie przez wstawianie</h4>
<p>Kolejny element wstawiamy na właściwe miejsce w posortowanej części, przesuwając większe w prawo. Dla danych prawie posortowanych działa prawie liniowo (O(n) w najlepszym przypadku).</p>
<pre>for (int i = 1; i &lt; n; i++) {
    int x = t[i], j = i - 1;
    while (j &gt;= 0 &amp;&amp; t[j] &gt; x) { t[j + 1] = t[j]; j--; }
    t[j + 1] = x;
}</pre>
<h4>Sortowanie bąbelkowe z optymalizacją</h4>
<p>Porównuje sąsiadów i zamienia, gdy są w złej kolejności. Po k-tym przebiegu k największych elementów jest na końcu. Optymalizacja: jeśli w przebiegu nie było zamiany, tablica jest posortowana i można przerwać.</p>
<h4>Szybkie i przez scalanie</h4>
<ul><li><b>Quicksort</b>: wybór elementu osiowego (pivot), podział na mniejsze i większe, rekurencja. Średnio O(n log n), pesymistycznie O(n²) (np. zły pivot przy posortowanych danych).</li>
<li><b>Merge sort</b>: dzielenie na połowy, sortowanie rekurencyjne i scalanie. Zawsze O(n log n), wymaga dodatkowej pamięci O(n). Jest stabilny.</li>
<li><b>Sortowanie przez zliczanie</b>: O(n + k) dla liczb całkowitych z małego zakresu k.</li></ul>
<div class="tw"><table><tr><th>Algorytm</th><th>Najlepszy</th><th>Średni</th><th>Najgorszy</th><th>Stabilny</th></tr>
<tr><td>bąbelkowe</td><td>O(n)*</td><td>O(n²)</td><td>O(n²)</td><td>tak</td></tr>
<tr><td>przez wybór</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>nie</td></tr>
<tr><td>przez wstawianie</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>tak</td></tr>
<tr><td>szybkie</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>nie</td></tr>
<tr><td>przez scalanie</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>tak</td></tr></table></div>
<p>* z flagą przerwania. Stabilność oznacza, że równe elementy zachowują wzajemną kolejność.</p>
<div class="tip">Na egzaminie praktycznym często każą napisać sortowanie samodzielnie, bez funkcji bibliotecznej sort. Przeczytaj polecenie dokładnie: kierunek (rosnąco/malejąco) i która metoda.</div>` },
        { tytul: "Algorytmy liczbowe i tekstowe", tresc: `<h4>NWD i NWW</h4>
<p>Algorytm Euklidesa z resztą: NWD(48, 18): 48 mod 18 = 12, 18 mod 12 = 6, 12 mod 6 = 0, wynik <b>6</b>. NWW(a, b) = a / NWD(a, b) x b, czyli NWW(48, 18) = 48 / 6 x 18 = 144. Dzielenie przed mnożeniem chroni przed przepełnieniem.</p>
<pre>int nwd(int a, int b) {
    while (b != 0) { int r = a % b; a = b; b = r; }
    return a;
}</pre>
<h4>Liczby pierwsze</h4>
<p>Sprawdzenie: dzielniki od 2 do √n (warunek <code>i * i &lt;= n</code>), liczby mniejsze od 2 nie są pierwsze. <b>Sito Eratostenesa</b>: tablica logiczna, dla każdej liczby pierwszej p wykreślamy wielokrotności od p², złożoność O(n log log n).</p>
<h4>Wyszukiwanie binarne</h4>
<pre>int szukaj(int t[], int n, int x) {
    int l = 0, p = n - 1;
    while (l &lt;= p) {
        int s = (l + p) / 2;
        if (t[s] == x) return s;
        if (t[s] &lt; x) l = s + 1; else p = s - 1;
    }
    return -1;
}</pre>
<p>Działa tylko na <b>posortowanej</b> tablicy. Dla 1 000 000 elementów wystarczy około 20 porównań (2^20 ≈ 10^6).</p>
<h4>Systemy liczbowe</h4>
<p>Dziesiętny na dwójkowy: dzielimy przez 2 i zapisujemy reszty od końca. 13: 13/2 = 6 r1, 6/2 = 3 r0, 3/2 = 1 r1, 1/2 = 0 r1, wynik <b>1101</b>. Odwrotnie: <b>schemat Hornera</b>, w = w x 2 + cyfra.</p>
<h4>Napisy</h4>
<ul><li><b>Palindrom</b>: porównujemy s[i] z s[n-1-i] dla i &lt; n/2.</li>
<li><b>Anagram</b>: posortowane litery obu słów są równe lub tablica zliczeń 26 liter jest identyczna.</li>
<li><b>Szyfr Cezara</b>: (kod - 'A' + k) mod 26 + 'A'.</li>
<li>Zliczanie samogłosek, wyszukiwanie wzorca naiwnie O(n x m).</li></ul>
<h4>Rekurencja</h4>
<p>Funkcja wywołuje samą siebie i musi mieć <b>warunek zakończenia</b>, inaczej nastąpi przepełnienie stosu. Fibonacci rekurencyjny ma złożoność wykładniczą O(2^n), iteracyjny O(n), z zapamiętywaniem wyników (memoizacja) też O(n).</p>
<div class="tip">Wyszukiwanie min/max: zainicjuj zmienną pierwszym elementem tablicy, a nie zerem, bo przy samych liczbach ujemnych maksimum 0 byłoby błędne.</div>` },
        { tytul: "Struktury danych i zapis algorytmów", tresc: `<h4>Podstawowe struktury</h4>
<div class="tw"><table><tr><th>Struktura</th><th>Zasada</th><th>Operacje</th><th>Zastosowanie</th></tr>
<tr><td>stos</td><td>LIFO</td><td>push, pop, top/peek</td><td>cofanie (undo), wywołania funkcji, nawiasy, ONP</td></tr>
<tr><td>kolejka</td><td>FIFO</td><td>enqueue, dequeue</td><td>kolejka wydruku, BFS</td></tr>
<tr><td>kolejka priorytetowa</td><td>najwyższy priorytet pierwszy</td><td>insert, extract</td><td>algorytm Dijkstry, planowanie zadań</td></tr>
<tr><td>lista jednokierunkowa</td><td>węzeł: wartość + wskaźnik na następny</td><td>wstawianie O(1) przy znanym węźle</td><td>dynamiczne zbiory</td></tr>
<tr><td>tablica mieszająca</td><td>funkcja skrótu klucza</td><td>średnio O(1)</td><td>słowniki</td></tr>
<tr><td>drzewo BST</td><td>lewy mniejszy, prawy większy</td><td>O(log n) gdy zrównoważone</td><td>wyszukiwanie, sortowanie</td></tr></table></div>
<h4>Porównanie dostępu</h4>
<p>Tablica: dostęp do i-tego elementu O(1), wstawienie w środek O(n). Lista wiązana: dostęp do i-tego elementu O(n). Przejście drzewa: <b>preorder</b> (korzeń, lewe, prawe), <b>inorder</b> (lewe, korzeń, prawe, dla BST daje kolejność rosnącą), <b>postorder</b> (lewe, prawe, korzeń).</p>
<h4>Grafy</h4>
<p>Reprezentacja: macierz sąsiedztwa (n x n) lub listy sąsiedztwa. <b>BFS</b> (wszerz) używa kolejki i znajduje najkrótszą ścieżkę w grafie bez wag. <b>DFS</b> (w głąb) używa stosu lub rekurencji.</p>
<h4>Schematy blokowe</h4>
<div class="tw"><table><tr><th>Blok</th><th>Kształt</th></tr>
<tr><td>start / stop</td><td>owal (zaokrąglony prostokąt)</td></tr>
<tr><td>operacja, przypisanie</td><td>prostokąt</td></tr>
<tr><td>decyzja (warunek)</td><td>romb, dwa wyjścia TAK/NIE</td></tr>
<tr><td>wejście / wyjście</td><td>równoległobok</td></tr>
<tr><td>podprogram</td><td>prostokąt z podwójnymi bokami</td></tr>
<tr><td>łącznik</td><td>małe koło</td></tr></table></div>
<p>Pętla w schemacie to powrót strzałki do bloku decyzyjnego. Pseudokod zapisuje algorytm słowami (jeżeli, dopóki, dla), bez szczegółów składni.</p>
<h4>Notacja O</h4>
<p>Od najszybszych: O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2^n) &lt; O(n!). Dwie zagnieżdżone pętle po n to O(n²), pętla dzieląca zakres na pół to O(log n).</p>
<div class="tip">Odwrotna Notacja Polska: wyrażenie 3 4 + 2 * oblicza się stosem: 3 i 4 na stos, + daje 7, 2 na stos, * daje 14.</div>` }
      ],
      pytania: [
        Q("Wyszukiwanie binarne wymaga, aby tablica była", "posortowana", "nieposortowana", "dwuwymiarowa", "o parzystej długości", "Algorytm odrzuca połowę zakresu na podstawie porządku."),
        Q("Złożoność obliczeniowa sortowania przez scalanie w najgorszym przypadku wynosi", "O(n log n)", "O(n²)", "O(n)", "O(log n)", "Merge sort zawsze dzieli na połowy."),
        Q("NWD(48, 18) wynosi", "6", "3", "9", "144", "48 mod 18 = 12, 18 mod 12 = 6, 12 mod 6 = 0."),
        Q("Struktura danych działająca według zasady LIFO to", "stos", "kolejka", "kolejka priorytetowa", "tablica mieszająca", "Last In, First Out."),
        Q("W schemacie blokowym warunek oznacza się", "rombem", "prostokątem", "równoległobokiem", "owalem", "Romb ma wyjścia TAK i NIE."),
        Q("Liczba 13 zapisana w systemie dwójkowym to", "1101", "1011", "1110", "1001", "8 + 4 + 1 = 13."),
        Q("Przechodzenie drzewa BST metodą inorder daje elementy", "w kolejności rosnącej", "w kolejności malejącej", "w kolejności poziomów", "w kolejności losowej", "Lewe poddrzewo, korzeń, prawe poddrzewo."),
        Q("Przeszukiwanie grafu wszerz (BFS) wykorzystuje", "kolejkę", "stos", "drzewo BST", "sortowanie", "DFS wykorzystuje stos lub rekurencję.")
      ]
    },
    {
      id: "testy", tytul: "Testowanie i dokumentacja", opis: "Zaplanujesz i napiszesz testy jednostkowe, zdebugujesz program i przygotujesz dokumentację wymaganą na egzaminie.",
      lekcje: [
        { tytul: "Rodzaje i techniki testów", tresc: `<h4>Poziomy testowania</h4>
<ol><li><b>Jednostkowe</b>: pojedyncza funkcja lub klasa w izolacji, pisane przez programistę.</li>
<li><b>Integracyjne</b>: współpraca modułów (np. aplikacja z bazą danych).</li>
<li><b>Systemowe</b>: cały system względem specyfikacji.</li>
<li><b>Akceptacyjne (UAT)</b>: klient sprawdza, czy system spełnia jego wymagania.</li></ol>
<h4>Typy testów</h4>
<ul><li><b>Funkcjonalne</b>: co system robi; <b>niefunkcjonalne</b>: jak (wydajność, bezpieczeństwo, użyteczność, dostępność).</li>
<li><b>Regresyjne</b>: czy zmiana nie zepsuła działających funkcji.</li>
<li><b>Wydajnościowe</b>: obciążeniowe (oczekiwana liczba użytkowników), przeciążeniowe (stress, ponad normę), testy wytrzymałościowe (długi czas).</li>
<li><b>Dymne (smoke)</b>: szybkie sprawdzenie, czy podstawowe funkcje w ogóle działają.</li>
<li><b>Alfa</b> (wewnętrzne, u producenta) i <b>beta</b> (u wybranych użytkowników).</li></ul>
<h4>Czarna i biała skrzynka</h4>
<div class="tw"><table><tr><th>Technika</th><th>Wiedza o kodzie</th><th>Metody</th></tr>
<tr><td>czarnej skrzynki</td><td>nie, tylko specyfikacja</td><td>klasy równoważności, wartości brzegowe, tablica decyzyjna</td></tr>
<tr><td>białej skrzynki</td><td>tak, struktura kodu</td><td>pokrycie instrukcji, gałęzi (decyzji), ścieżek</td></tr></table></div>
<h4>Przykład: wartości brzegowe</h4>
<p>Funkcja przyjmuje wiek od 18 do 65 włącznie. Klasy równoważności: poniżej 18 (niepoprawne), 18-65 (poprawne), powyżej 65 (niepoprawne). Wartości brzegowe do testów: <b>17, 18, 65, 66</b> (często też 19 i 64). Dodatkowo dane nieliczbowe i puste pole.</p>
<h4>Pojęcia ISTQB</h4>
<p><b>Błąd</b> (pomyłka człowieka) prowadzi do <b>defektu</b> w kodzie, który może wywołać <b>awarię</b> podczas działania. Testowanie pokazuje obecność defektów, a nie dowodzi ich braku. Testowanie wyczerpujące (wszystkich kombinacji) jest niemożliwe.</p>
<div class="tip">Przypadek testowy zawiera: identyfikator, warunki wstępne, kroki, dane wejściowe, oczekiwany wynik, wynik rzeczywisty i status. Raport błędu dodatkowo: środowisko, priorytet i ważność.</div>
<h4>Testy jednostkowe w praktyce</h4>
<p>Test jednostkowy ma zwykle trzy części: <b>Arrange</b> (przygotowanie danych), <b>Act</b> (wywołanie testowanej metody), <b>Assert</b> (sprawdzenie wyniku). W C# używa się MSTest, NUnit lub xUnit, w Javie JUnit, w Pythonie unittest lub pytest.</p>
<div class="tw"><table><tr><th>Asercja</th><th>Sprawdza</th></tr>
<tr><td>Assert.AreEqual(4, wynik)</td><td>równość wartości oczekiwanej i rzeczywistej</td></tr>
<tr><td>Assert.IsTrue(warunek)</td><td>prawdziwość warunku</td></tr>
<tr><td>Assert.ThrowsException</td><td>czy metoda zgłasza wyjątek</td></tr></table></div>
<p>Zależności zewnętrzne (baza, sieć) zastępuje się obiektami zastępczymi: <b>mock</b> lub <b>stub</b>, aby test był szybki i powtarzalny.</p>
<div class="tip">Pułapka: test regresyjny to nie nowy rodzaj poziomu, tylko powtórzenie wcześniejszych testów po zmianie. Debugowanie to szukanie przyczyny defektu, a testowanie to jego wykrywanie.</div>` },
        { tytul: "Testy jednostkowe i debugowanie", tresc: `<h4>Wzorzec AAA</h4>
<p>Każdy test ma trzy części: <b>Arrange</b> (przygotuj dane), <b>Act</b> (wywołaj testowaną metodę), <b>Assert</b> (sprawdź wynik).</p>
<h4>C# (MSTest, NUnit, xUnit)</h4>
<pre>[TestClass]
public class KalkulatorTesty
{
    [TestMethod]
    public void Dodaj_DwieLiczby_ZwracaSume()
    {
        var k = new Kalkulator();          // Arrange
        int wynik = k.Dodaj(2, 3);         // Act
        Assert.AreEqual(5, wynik);         // Assert (oczekiwany, rzeczywisty)
    }
}</pre>
<p>NUnit: atrybuty <code>[TestFixture]</code>, <code>[Test]</code>, <code>[TestCase(2, 3, 5)]</code>; xUnit: <code>[Fact]</code>, <code>[Theory]</code> z <code>[InlineData]</code>, asercja <code>Assert.Equal</code>. Wyjątek: <code>Assert.ThrowsException&lt;ArgumentException&gt;(...)</code> (MSTest).</p>
<h4>Java (JUnit 5) i Python</h4>
<pre>@Test
void dodawanie() {
    assertEquals(5, new Kalkulator().dodaj(2, 3));
}

import unittest
class TestKalk(unittest.TestCase):
    def test_dodaj(self):
        self.assertEqual(dodaj(2, 3), 5)
    def test_blad(self):
        with self.assertRaises(ValueError):
            pierwiastek(-1)</pre>
<p>W pytest wystarczy funkcja <code>test_...</code> i zwykłe <code>assert dodaj(2, 3) == 5</code>. W C++ popularny jest Google Test (<code>EXPECT_EQ</code>, <code>ASSERT_EQ</code>). Liczby zmiennoprzecinkowe porównuje się z tolerancją (<code>assertAlmostEqual</code>, <code>Assert.AreEqual(a, b, 0.001)</code>).</p>
<h4>TDD</h4>
<p>Test Driven Development: <b>czerwony</b> (napisz test, który nie przechodzi), <b>zielony</b> (napisz minimalny kod, aby przeszedł), <b>refaktoryzacja</b>. Obiekty zastępcze (mock, stub) symulują bazę danych lub usługi w testach jednostkowych.</p>
<h4>Debugowanie w Visual Studio</h4>
<div class="tw"><table><tr><th>Klawisz</th><th>Działanie</th></tr>
<tr><td>F9</td><td>punkt przerwania (breakpoint)</td></tr>
<tr><td>F5</td><td>uruchom z debugowaniem / kontynuuj</td></tr>
<tr><td>F10</td><td>krok z przejściem nad funkcją (step over)</td></tr>
<tr><td>F11</td><td>krok z wejściem do funkcji (step into)</td></tr>
<tr><td>Shift+F11</td><td>wyjście z funkcji (step out)</td></tr></table></div>
<p>Okna Watch, Locals i Call Stack pokazują wartości zmiennych i stos wywołań. Warunkowy breakpoint zatrzyma program np. dopiero przy <code>i == 50</code>.</p>
<div class="tip">Na egzaminie praktycznym często trzeba wykonać zrzut ekranu testu lub działania aplikacji i zapisać go pod podaną nazwą. Sprawdź nazwę pliku i katalog z polecenia.</div>` },
        { tytul: "Dokumentacja, konwencje i cykl życia", tresc: `<h4>Komentarz dokumentujący funkcję</h4>
<p>Arkusze INF.04 wymagają zwykle komentarza przy funkcji z informacjami: <b>nazwa, opis, parametry, wartość zwracana, autor</b>.</p>
<pre>/**********************************************
nazwa funkcji: czyPierwsza
opis funkcji: sprawdza, czy liczba jest pierwsza
parametry: n - liczba calkowita do sprawdzenia
zwracany typ i opis: bool - true, gdy n jest pierwsza
autor: 00000000000
***********************************************/</pre>
<p>Standardy języków: C# <code>/// &lt;summary&gt;...&lt;/summary&gt;</code>, <code>&lt;param name="n"&gt;</code>, <code>&lt;returns&gt;</code>; Java Javadoc <code>/** @param n ... @return ... */</code>; Python docstring <code>"""..."""</code>. Narzędzia generujące dokumentację: Doxygen, Javadoc, Sphinx.</p>
<h4>Konwencje nazewnicze</h4>
<div class="tw"><table><tr><th>Styl</th><th>Przykład</th><th>Gdzie</th></tr>
<tr><td>camelCase</td><td><code>liczbaOsob</code></td><td>zmienne (C#, Java, JS), metody w Javie</td></tr>
<tr><td>PascalCase</td><td><code>LiczbaOsob</code></td><td>klasy, metody i właściwości w C#</td></tr>
<tr><td>snake_case</td><td><code>liczba_osob</code></td><td>Python (zmienne, funkcje)</td></tr>
<tr><td>UPPER_CASE</td><td><code>MAX_ROZMIAR</code></td><td>stałe</td></tr></table></div>
<p>Nazwy mają być znaczące (<code>sumaOcen</code>, nie <code>x1</code>). Kod formatuje się spójnymi wcięciami.</p>
<h4>Modele cyklu życia oprogramowania</h4>
<ul><li><b>Kaskadowy (waterfall)</b>: etapy po kolei (wymagania, projekt, implementacja, testy, wdrożenie, utrzymanie), trudny powrót.</li>
<li><b>Model V</b>: każdemu etapowi projektu odpowiada poziom testów.</li>
<li><b>Spiralny</b>: iteracje z analizą ryzyka.</li>
<li><b>Przyrostowy i iteracyjny</b>: system budowany w częściach.</li>
<li><b>Scrum (Agile)</b>: sprint 1-4 tygodni, role: Product Owner (backlog i priorytety), Scrum Master (proces), zespół deweloperski; wydarzenia: planowanie sprintu, daily scrum (15 minut), przegląd, retrospektywa.</li></ul>
<h4>Kontrola wersji Git</h4>
<p><code>git init</code>, <code>git clone url</code>, <code>git status</code>, <code>git add .</code>, <code>git commit -m "opis"</code>, <code>git push</code>, <code>git pull</code>, <code>git branch nowa</code>, <code>git checkout nowa</code> (lub <code>git switch</code>), <code>git merge nowa</code>, <code>git log</code>. Plik <code>.gitignore</code> wyklucza pliki z repozytorium (np. katalogi bin i obj).</p>
<div class="tip">Wymagania funkcjonalne opisują funkcje („system pozwala dodać klienta”), niefunkcjonalne cechy jakości („strona ładuje się w mniej niż 2 s”). To częste pytanie teoretyczne.</div>` }
      ],
      pytania: [
        Q("Test sprawdzający, czy po wprowadzeniu zmian dotychczasowe funkcje nadal działają, to test", "regresyjny", "akceptacyjny", "dymny", "obciążeniowy", "Regresja to cofnięcie się jakości po zmianie."),
        Q("Technika testowania oparta na znajomości kodu źródłowego to", "testowanie białej skrzynki", "testowanie czarnej skrzynki", "test akceptacyjny", "test beta", "Np. pokrycie gałęzi."),
        Q("Funkcja przyjmuje wartości od 1 do 100. Zestaw wartości brzegowych do testu to", "0, 1, 100, 101", "1, 50, 100", "-100, 0, 100", "2, 99", "Wartości na granicy i tuż za nią."),
        Q("W metodyce TDD najpierw", "pisze się test, który nie przechodzi", "pisze się cały kod aplikacji", "wykonuje się refaktoryzację", "wykonuje się testy akceptacyjne", "Cykl: czerwony, zielony, refaktoryzacja."),
        Q("W Visual Studio klawisz F11 podczas debugowania", "wchodzi do wnętrza wywoływanej funkcji", "przechodzi nad wywołaniem funkcji", "ustawia punkt przerwania w linii", "wznawia działanie do kolejnej pułapki", "F10 to step over, F11 step into, F9 punkt przerwania, F5 kontynuacja."),
        Q("Atrybut oznaczający metodę testową w MSTest to", "[TestMethod]", "[Fact]", "@Test", "[TestFixture]", "[Fact] to xUnit, @Test to JUnit."),
        Q("Osoba odpowiedzialna w Scrumie za priorytety w backlogu produktu to", "Product Owner", "Scrum Master", "tester", "klient końcowy", "Scrum Master dba o proces."),
        Q("Polecenie git zapisujące przygotowane zmiany w lokalnym repozytorium to", "git commit", "git push", "git clone", "git pull", "push wysyła commity na serwer.")
      ]
    },
    {
      id: "gui", tytul: "Aplikacje desktopowe i mobilne", opis: "Zbudujesz aplikację z interfejsem graficznym w WPF lub .NET MAUI oraz w Android Studio, z obsługą zdarzeń i walidacją.",
      lekcje: [
        { tytul: "Aplikacja desktopowa WPF i Windows Forms", tresc: `<h4>WPF: widok w XAML</h4>
<pre>&lt;Grid Margin="10"&gt;
  &lt;StackPanel&gt;
    &lt;Label Content="Imię:"/&gt;
    &lt;TextBox x:Name="txtImie" Width="200"/&gt;
    &lt;CheckBox x:Name="chkZgoda" Content="Akceptuję regulamin"/&gt;
    &lt;ComboBox x:Name="cmbKurs"&gt;
      &lt;ComboBoxItem Content="Java"/&gt;
      &lt;ComboBoxItem Content="C#"/&gt;
    &lt;/ComboBox&gt;
    &lt;Button Content="Zatwierdź" Click="BtnZatwierdz_Click"/&gt;
    &lt;TextBlock x:Name="txtWynik"/&gt;
  &lt;/StackPanel&gt;
&lt;/Grid&gt;</pre>
<p>Kod obsługi w pliku <code>MainWindow.xaml.cs</code>:</p>
<pre>private void BtnZatwierdz_Click(object sender, RoutedEventArgs e)
{
    if (string.IsNullOrWhiteSpace(txtImie.Text) || chkZgoda.IsChecked != true)
    {
        MessageBox.Show("Uzupełnij dane i zaznacz zgodę");
        return;
    }
    txtWynik.Text = "Witaj, " + txtImie.Text;
}</pre>
<h4>Kontrolki i ich właściwości</h4>
<div class="tw"><table><tr><th>Kontrolka</th><th>Kluczowa właściwość / zdarzenie</th></tr>
<tr><td>TextBox</td><td>Text, TextChanged</td></tr>
<tr><td>CheckBox, RadioButton</td><td>IsChecked (bool?, czyli true/false/null), GroupName dla radio</td></tr>
<tr><td>ComboBox, ListBox</td><td>SelectedItem, SelectedIndex (-1 gdy brak), Items.Add()</td></tr>
<tr><td>Slider</td><td>Value, Minimum, Maximum, ValueChanged</td></tr>
<tr><td>Image</td><td>Source</td></tr>
<tr><td>Button</td><td>Click, IsEnabled</td></tr></table></div>
<p>Układy: <b>Grid</b> (wiersze i kolumny: RowDefinitions, Grid.Row), <b>StackPanel</b> (jeden pod drugim lub obok, Orientation), <b>WrapPanel</b>, <b>DockPanel</b>. Rozmiary: <code>Auto</code>, <code>*</code> (proporcjonalnie), wartości stałe.</p>
<h4>Windows Forms</h4>
<p>Starsza technologia: projektant generuje kod w <code>Form1.Designer.cs</code>, kontrolki mają właściwości <code>Text</code>, <code>Checked</code>, zdarzenie <code>Click</code>. Komunikat: <code>MessageBox.Show("...")</code>. W WinForms TextBox zwraca <code>Text</code>, CheckBox <code>Checked</code> (bool), w WPF <code>IsChecked</code>.</p>
<h4>Wiązanie danych (MVVM)</h4>
<p><code>&lt;TextBox Text="{Binding Imie}"/&gt;</code> wiąże pole z właściwością ViewModelu ustawionego jako <code>DataContext</code>. Powiadamianie widoku o zmianie wymaga interfejsu <code>INotifyPropertyChanged</code>.</p>
<div class="tip">Na egzaminie nazwy kontrolek, kolory i napisy muszą być dokładnie jak w poleceniu. Zwróć uwagę na wielkość liter i polskie znaki w etykietach.</div>
<h4>Typowe pułapki na egzaminie</h4>
<ul><li><code>IsChecked</code> w WPF ma typ <code>bool?</code>, dlatego porównuje się go z <code>true</code>, a nie wstawia bezpośrednio do if.</li>
<li>Liczbę z pola tekstowego zamieniaj bezpiecznie: <code>int.TryParse(txtWiek.Text, out int wiek)</code> zamiast <code>int.Parse</code>, który przy pustym polu zgłasza wyjątek.</li>
<li>Kolor tła ustawia się w XAML atrybutem <code>Background="LightBlue"</code>, w kodzie <code>Brushes.LightBlue</code>. W WinForms właściwość nazywa się <code>BackColor</code>.</li>
<li>Obrazek dodany do projektu musi mieć ustawioną akcję kompilacji Resource lub kopiowanie do katalogu wyjściowego, inaczej się nie wyświetli.</li></ul>
<div class="tw"><table><tr><th>Element</th><th>WPF</th><th>Windows Forms</th></tr>
<tr><td>zaznaczenie pola wyboru</td><td>IsChecked</td><td>Checked</td></tr>
<tr><td>tekst etykiety</td><td>Content (Label), Text (TextBlock)</td><td>Text</td></tr>
<tr><td>widoczność</td><td>Visibility</td><td>Visible</td></tr></table></div>` },
        { tytul: "Android Studio: aktywności i widoki", tresc: `<h4>Struktura projektu</h4>
<ul><li><code>AndroidManifest.xml</code>: nazwa aplikacji, aktywności, uprawnienia (np. <code>android.permission.INTERNET</code>), ikona.</li>
<li><code>res/layout/activity_main.xml</code>: układ widoku.</li>
<li><code>res/values/strings.xml</code>, <code>colors.xml</code>: zasoby tekstowe i kolory.</li>
<li><code>MainActivity.java</code> lub <code>.kt</code>: logika aktywności.</li>
<li><code>build.gradle</code>: zależności, minSdk, targetSdk.</li></ul>
<h4>Układ XML</h4>
<pre>&lt;LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"&gt;
  &lt;EditText android:id="@+id/etImie"
      android:layout_width="match_parent"
      android:layout_height="wrap_content"
      android:hint="Imię"/&gt;
  &lt;Button android:id="@+id/btnOk"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:text="OK"/&gt;
  &lt;TextView android:id="@+id/tvWynik"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:textSize="18sp"/&gt;
&lt;/LinearLayout&gt;</pre>
<p><code>match_parent</code> wypełnia rodzica, <code>wrap_content</code> dopasowuje się do zawartości. Jednostki: <b>dp</b> dla wymiarów (niezależne od gęstości ekranu), <b>sp</b> dla tekstu (uwzględnia ustawienia rozmiaru czcionki). Inne układy: <b>ConstraintLayout</b> (domyślny, ograniczenia względem innych widoków), RelativeLayout, FrameLayout.</p>
<h4>Kod aktywności (Java)</h4>
<pre>public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        EditText etImie = findViewById(R.id.etImie);
        TextView tvWynik = findViewById(R.id.tvWynik);
        Button btnOk = findViewById(R.id.btnOk);
        btnOk.setOnClickListener(v -&gt; {
            String imie = etImie.getText().toString().trim();
            if (imie.isEmpty()) {
                Toast.makeText(this, "Podaj imię", Toast.LENGTH_SHORT).show();
            } else {
                tvWynik.setText("Witaj, " + imie);
            }
        });
    }
}</pre>
<p>Pułapka: zapomniane <code>.show()</code> przy Toast powoduje, że komunikat się nie pojawi. Liczbę z EditText odczytuje się przez <code>Integer.parseInt(et.getText().toString())</code>, co przy pustym polu rzuca <code>NumberFormatException</code>.</p>
<div class="tip">W Kotlinie zamiast findViewById stosuje się View Binding, a nowoczesny interfejs buduje się w Jetpack Compose. Na egzaminie wybór technologii jest zwykle dowolny, liczy się wynik zgodny z poleceniem.</div>
<h4>Cykl życia aktywności</h4>
<p>Metody wywoływane kolejno: <code>onCreate</code> (utworzenie, ustawienie widoku), <code>onStart</code>, <code>onResume</code> (aktywność na pierwszym planie), przy wyjściu <code>onPause</code>, <code>onStop</code>, <code>onDestroy</code>. Obrót ekranu domyślnie niszczy i tworzy aktywność od nowa, więc dane w polach bez zapisu stanu mogą zniknąć.</p>
<div class="tw"><table><tr><th>Widok</th><th>Ważna metoda lub atrybut</th></tr>
<tr><td>EditText</td><td>getText(), android:inputType="number"</td></tr>
<tr><td>CheckBox, Switch</td><td>isChecked()</td></tr>
<tr><td>ImageView</td><td>setImageResource(R.drawable.kot)</td></tr>
<tr><td>Spinner</td><td>getSelectedItem()</td></tr>
<tr><td>SeekBar</td><td>getProgress(), setOnSeekBarChangeListener</td></tr></table></div>
<p>Przejście do innej aktywności: <code>startActivity(new Intent(this, DrugaActivity.class))</code>. Nowa aktywność musi być zadeklarowana w AndroidManifest.xml, inaczej aplikacja się zamknie z błędem.</p>` },
        { tytul: "Cykl życia, wieloplatformowość i UX", tresc: `<h4>Cykl życia aktywności Android</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Kiedy</th></tr>
<tr><td>onCreate()</td><td>tworzenie aktywności, ustawienie widoku</td></tr>
<tr><td>onStart()</td><td>aktywność staje się widoczna</td></tr>
<tr><td>onResume()</td><td>aktywność na pierwszym planie, użytkownik może działać</td></tr>
<tr><td>onPause()</td><td>częściowo zasłonięta, np. okno dialogowe innej aplikacji</td></tr>
<tr><td>onStop()</td><td>niewidoczna</td></tr>
<tr><td>onDestroy()</td><td>niszczenie (np. finish() lub obrót ekranu)</td></tr></table></div>
<p>Obrót ekranu domyślnie niszczy i tworzy aktywność ponownie, więc stan zapisuje się w <code>onSaveInstanceState</code> lub w ViewModelu. Przejście do innej aktywności: <code>startActivity(new Intent(this, DrugaActivity.class))</code>, dane przekazuje się przez <code>putExtra</code>.</p>
<h4>Technologie wieloplatformowe</h4>
<div class="tw"><table><tr><th>Technologia</th><th>Język</th><th>Platformy</th></tr>
<tr><td>.NET MAUI (następca Xamarin.Forms)</td><td>C# + XAML</td><td>Android, iOS, Windows, macOS</td></tr>
<tr><td>React Native</td><td>JavaScript / TypeScript</td><td>Android, iOS</td></tr>
<tr><td>Flutter</td><td>Dart</td><td>mobilne, web, desktop</td></tr>
<tr><td>Electron</td><td>HTML, CSS, JS</td><td>desktop</td></tr></table></div>
<p>W .NET MAUI kontrolki nazywają się inaczej niż w WPF: <code>Entry</code> (pole tekstowe), <code>Label</code>, <code>Button</code> (Clicked), <code>Switch</code>, <code>Picker</code>, <code>Slider</code>, układy <code>VerticalStackLayout</code>, <code>Grid</code>. W React Native: <code>View</code>, <code>Text</code>, <code>TextInput</code>, <code>Button</code>, stan przez <code>useState</code>.</p>
<pre>const [imie, setImie] = useState('');
&lt;TextInput value={imie} onChangeText={setImie} /&gt;
&lt;Button title="OK" onPress={() =&gt; alert('Witaj ' + imie)} /&gt;</pre>
<h4>Zasady projektowania interfejsu</h4>
<ul><li>Spójność: te same kolory, czcionki i położenie przycisków na wszystkich ekranach.</li>
<li>Kontrast tekstu do tła co najmniej <b>4,5:1</b> (WCAG AA), elementy dotykowe co najmniej około 48 x 48 dp.</li>
<li>Informacja zwrotna: komunikat po akcji, blokowanie przycisku podczas operacji.</li>
<li>Walidacja danych i czytelne komunikaty błędów przy polu.</li>
<li>Responsywność: układ dopasowuje się do rozmiaru i orientacji ekranu.</li></ul>
<div class="tip">Aplikacja natywna działa najszybciej i ma pełny dostęp do API systemu; webowa (PWA) działa w przeglądarce bez instalacji ze sklepu; hybrydowa łączy WebView z kodem natywnym.</div>` }
      ],
      pytania: [
        Q("W WPF stan zaznaczenia kontrolki CheckBox odczytuje się właściwością", "IsChecked", "Checked", "Selected", "Value", "W WinForms jest to Checked."),
        Q("Jednostka zalecana w Androidzie do określania rozmiaru tekstu to", "sp", "dp", "px", "pt", "sp uwzględnia preferencje rozmiaru czcionki użytkownika."),
        Q("Metoda wywoływana jako pierwsza przy tworzeniu aktywności Android to", "onCreate()", "onStart()", "onResume()", "onInit()", "Ustawia się w niej widok setContentView."),
        Q("Plik, w którym deklaruje się uprawnienia aplikacji Android (np. INTERNET), to", "AndroidManifest.xml", "strings.xml", "build.gradle", "activity_main.xml", "Manifest opisuje aplikację i jej komponenty."),
        Q("Wartość match_parent atrybutu layout_width oznacza, że widok", "wypełnia szerokość rodzica", "dopasowuje się do zawartości", "ma szerokość 0", "ma szerokość ekranu w pikselach", "wrap_content dopasowuje do zawartości."),
        Q("Krótki komunikat w Androidzie wyświetli się po wywołaniu", "Toast.makeText(this, \"Tekst\", Toast.LENGTH_SHORT).show()", "Toast.makeText(this, \"Tekst\", Toast.LENGTH_SHORT)", "MessageBox.Show(\"Tekst\")", "alert(\"Tekst\") w Javie", "Bez show() Toast nie pojawi się."),
        Q("Wieloplatformowy następca Xamarin.Forms, w którym pisze się w C# i XAML, to", ".NET MAUI", "React Native", "Flutter", "Electron", "MAUI: Multi-platform App UI."),
        Q("Minimalny kontrast tekstu do tła według WCAG na poziomie AA dla zwykłego tekstu wynosi", "4,5:1", "2:1", "3:2", "10:1", "Dla dużego tekstu wystarcza 3:1.")
      ]
    }
  ]);

  pod("INF.07", [
    {
      id: "okablowanie", tytul: "Okablowanie miedziane", opis: "Zaprojektujesz i wykonasz okablowanie strukturalne ze skrętki zgodnie z normami, od szafy po gniazdo abonenckie.",
      lekcje: [
        { tytul: "Normy i struktura okablowania", tresc: `<h4>Normy</h4>
<p>Okablowanie strukturalne opisują: <b>PN-EN 50173-1</b> (wymagania ogólne, klasy i kategorie), <b>PN-EN 50173-2</b> (budynki biurowe), <b>PN-EN 50174</b> (planowanie i wykonanie instalacji), <b>PN-EN 50346</b> (badanie okablowania), międzynarodowo <b>ISO/IEC 11801</b>, w USA <b>TIA/EIA-568</b> i TIA-606 (oznaczanie).</p>
<h4>Hierarchia</h4>
<div class="tw"><table><tr><th>Element</th><th>Skrót PN-EN</th><th>Opis</th></tr>
<tr><td>Punkt dystrybucyjny kampusu</td><td>CD</td><td>główny punkt (GPD) dla kilku budynków</td></tr>
<tr><td>Punkt dystrybucyjny budynku</td><td>BD</td><td>szafa główna budynku</td></tr>
<tr><td>Punkt dystrybucyjny piętra</td><td>FD</td><td>szafa piętrowa (PPD)</td></tr>
<tr><td>Gniazdo telekomunikacyjne</td><td>TO</td><td>punkt abonencki (PEL)</td></tr></table></div>
<p>Podsystemy: <b>okablowanie szkieletowe kampusu</b> (CD-BD), <b>szkieletowe budynku</b> (BD-FD), <b>poziome</b> (FD-TO). Szkielet wykonuje się najczęściej światłowodem, okablowanie poziome skrętką.</p>
<h4>Długości w okablowaniu poziomym</h4>
<ul><li>Kabel stały (instalacyjny, łącze stałe, permanent link): maksymalnie <b>90 m</b>.</li>
<li>Kanał (channel) z przewodami krosowymi i przyłączeniowymi: maksymalnie <b>100 m</b>, więc na kable krosowe zostaje łącznie 10 m.</li>
<li>Kanał szkieletowy łącznie do 2000 m: szkielet budynku do 500 m, szkielet kampusu do 1500 m (rzeczywisty zasięg zależy od medium i aplikacji).</li></ul>
<h4>Planowanie punktów</h4>
<p>Zalecenie: co najmniej <b>jeden punkt dystrybucyjny na piętro</b>, a przy powierzchni ponad 1000 m² kolejny. Na każde około <b>10 m²</b> powierzchni biurowej przewiduje się jedno stanowisko pracy z co najmniej dwoma gniazdami (np. dane i telefon). Gniazda montuje się zwykle 30-40 cm nad podłogą lub w kanałach naściennych.</p>
<h4>Klasy i kategorie</h4>
<div class="tw"><table><tr><th>Klasa (kanał)</th><th>Kategoria (elementy)</th><th>Pasmo</th></tr>
<tr><td>D</td><td>5e</td><td>100 MHz</td></tr>
<tr><td>E</td><td>6</td><td>250 MHz</td></tr>
<tr><td>EA</td><td>6A</td><td>500 MHz</td></tr>
<tr><td>F</td><td>7</td><td>600 MHz</td></tr>
<tr><td>FA</td><td>7A</td><td>1000 MHz</td></tr>
<tr><td>I / II</td><td>8.1 / 8.2</td><td>2000 MHz</td></tr></table></div>
<div class="tip">Klasa dotyczy całego kanału, kategoria pojedynczych komponentów. Kanał klasy E osiągniesz tylko wtedy, gdy wszystkie elementy (kabel, gniazda, panel, kable krosowe) mają kategorię 6 lub wyższą.</div>` },
        { tytul: "Kable, ekranowanie i szafa rack", tresc: `<h4>Oznaczenia ekranowania (ISO/IEC 11801)</h4>
<p>Format <b>X/YTP</b>: X to ekran całego kabla, Y ekran każdej pary. U = brak, F = folia, S = oplot.</p>
<div class="tw"><table><tr><th>Oznaczenie</th><th>Ekran ogólny</th><th>Ekran par</th></tr>
<tr><td>U/UTP</td><td>brak</td><td>brak</td></tr>
<tr><td>F/UTP</td><td>folia</td><td>brak</td></tr>
<tr><td>U/FTP</td><td>brak</td><td>folia na każdej parze</td></tr>
<tr><td>S/FTP</td><td>oplot</td><td>folia na każdej parze</td></tr>
<tr><td>SF/UTP</td><td>oplot i folia</td><td>brak</td></tr></table></div>
<p>Kabel ekranowany wymaga ekranowanych gniazd, panelu i <b>uziemienia</b> ekranu w szafie; niepodłączony ekran działa jak antena. Kategoria 7 i wyższe są zawsze ekranowane parami.</p>
<h4>Budowa i rodzaje kabli</h4>
<ul><li>Drut (linka jednodrutowa): kabel instalacyjny w ścianach, zarabiany na gniazdach i panelach złączem IDC.</li>
<li>Linka (wielodrutowa): kable krosowe, elastyczne, zarabiane wtykami RJ-45.</li>
<li>Średnica żył: AWG 24 (kat. 5e), AWG 23 (kat. 6/6A), AWG 22 (kat. 7).</li>
<li>Powłoka <b>LSOH/LSZH</b> (bezhalogenowa, mało dymu) w budynkach użyteczności publicznej, PVC tańsza, PE do kabli zewnętrznych.</li></ul>
<h4>Zasady instalacji</h4>
<ul><li>Promień gięcia: dla skrętki nieekranowanej minimum <b>4 x średnica</b> kabla (ekranowanej 8 x), podczas instalacji większy.</li>
<li>Rozplot par przy złączu najwyżej <b>13 mm</b> (kategoria 5e i 6).</li>
<li>Siła ciągnięcia do około 110 N (dla kabla 4-parowego).</li>
<li>Odstęp od przewodów zasilających: według PN-EN 50174-2, zwykle oddzielne koryta lub przegroda; kable krzyżuje się z instalacją elektryczną pod kątem 90°.</li>
<li>Nie zgniatać kabli opaskami zaciskowymi, używać rzepów.</li></ul>
<h4>Szafa rack 19 cali</h4>
<p>Jednostka wysokości <b>1U = 44,45 mm</b> (1,75 cala). Szafa 42U ma około 2 m wysokości. Typowy układ: panel krosowy, organizer (wieszak kabli), przełącznik, kolejny panel. U dołu cięższe urządzenia: UPS, serwery. Szafę wiszącą (do około 20U) stosuje się w małych punktach dystrybucyjnych, stojącą w serwerowni. Elementy: listwa zasilająca PDU, panel wentylacyjny, półka, szyna uziemiająca.</p>
<div class="tip">Kolejność montażu w szafie: najpierw szyny i uziemienie, potem urządzenia ciężkie od dołu, na końcu panele i organizery. Kable krosowe dobieraj długością, bez nadmiernych zapasów.</div>` },
        { tytul: "Zarabianie złączy i dokumentacja", tresc: `<h4>Narzędzia</h4>
<ul><li><b>Ściągacz izolacji</b> (obieraczka) i nożyce do kabli.</li>
<li><b>Narzędzie uderzeniowe</b> LSA (Krone) lub 110 do wciskania żył w złącza IDC gniazd i paneli; jednocześnie obcina nadmiar żyły.</li>
<li><b>Zaciskarka</b> do wtyków RJ-45 (8P8C) i RJ-11 (6P4C lub 6P2C).</li>
<li>Tester okablowania (ciągłość, kolejność żył), certyfikator dla pomiarów parametrów.</li></ul>
<h4>Wykonanie kabla krosowego</h4>
<ol><li>Zdejmij około 2-3 cm płaszcza, uważając, by nie naciąć żył.</li>
<li>Rozplecz pary i ułóż żyły w sekwencji T568B (lub A) płasko.</li>
<li>Przytnij równo, zostawiając około 12-13 mm żył.</li>
<li>Wsuń do wtyku do oporu, tak aby płaszcz wszedł pod zacisk odciążający.</li>
<li>Zaciśnij zaciskarką i sprawdź testerem.</li></ol>
<p>Wtyk RJ-45 do linki ma noże dwuzębne lub trójzębne. Do drutu stosuje się wtyki przystosowane do żył jednodrutowych. Kategoria 6A wymaga zwykle wtyków z prowadnicą (load bar).</p>
<h4>Gniazdo i panel</h4>
<p>Na gniazdach i panelach są kolorowe oznaczenia A i B. W całej instalacji stosuje się <b>jedną</b> sekwencję. Pary układa się w złączu IDC bez rozplatania dalej niż to konieczne. Ekran kabla ekranowanego łączy się z obudową gniazda na całym obwodzie (360°).</p>
<h4>Oznaczanie i dokumentacja</h4>
<p>Każdy kabel, port panelu i gniazdo ma unikalną etykietę, np. <b>1.03.12</b> (piętro, pomieszczenie, numer gniazda) lub <b>A-24</b> (panel A, port 24), zgodnie z TIA-606. Dokumentacja powykonawcza zawiera:</p>
<ul><li>plan budynku z rozmieszczeniem gniazd i tras kablowych,</li>
<li>schemat szaf i paneli (elewacja szafy),</li>
<li>tablice połączeń (krosowania),</li>
<li>raporty z pomiarów każdego toru,</li>
<li>kosztorys i specyfikację zastosowanych materiałów.</li></ul>
<h4>Kosztorys</h4>
<p>Na egzaminie zdarza się zadanie: oblicz ilość kabla. Długość trasy razy liczba gniazd plus zapas (zwykle 10% i po około 0,5-1 m zapasu w gnieździe i w szafie). Przykład: 12 gniazd po średnio 25 m: 12 x 25 = 300 m, plus 10% = 330 m. To więcej niż jedna szpula 305 m, więc trzeba kupić 2 szpule.</p>
<div class="tip">Na egzaminie praktycznym oceniane są: sekwencja żył, rozplot do 13 mm, płaszcz pod zaciskiem, brak uszkodzeń izolacji oraz wynik testu. Zrób testerem zdjęcie lub zapisz wynik, jeśli polecenie tego wymaga.</div>` }
      ],
      pytania: [
        Q("Maksymalna długość kabla stałego (łącza stałego) w okablowaniu poziomym wynosi", "90 m", "100 m", "50 m", "185 m", "Kanał z kablami krosowymi to 100 m."),
        Q("Kanał klasy EA według PN-EN 50173 buduje się z komponentów kategorii", "6A", "5e", "6", "7A", "Klasa EA, 500 MHz."),
        Q("Oznaczenie S/FTP oznacza kabel z", "oplotem ogólnym i folią na każdej parze", "folią ogólną bez ekranów par", "bez żadnych ekranów", "oplotem na każdej parze", "Pierwsza litera to ekran ogólny, druga ekran par."),
        Q("Wysokość jednostki 1U w szafie rack wynosi", "44,45 mm", "19 mm", "48,26 mm", "25,4 mm", "1,75 cala."),
        Q("Do zarabiania żył w złączach IDC gniazd i paneli krosowych służy", "narzędzie uderzeniowe LSA", "zaciskarka RJ-45", "spawarka", "lutownica", "Zaciskarka służy do wtyków."),
        Q("Maksymalny rozplot par przy zarabianiu złącza kategorii 6 wynosi", "13 mm", "30 mm", "5 cm", "1 mm", "Większy rozplot pogarsza przesłuchy NEXT."),
        Q("Punkt dystrybucyjny piętra w normie PN-EN 50173 oznacza się skrótem", "FD", "BD", "CD", "TO", "Floor Distributor."),
        Q("Powłoka kabla LSOH charakteryzuje się", "niską emisją dymu i brakiem halogenów", "odpornością na promieniowanie UV", "ekranowaniem par", "żelowym wypełnieniem", "Low Smoke Zero Halogen.")
      ]
    },
    {
      id: "swiatlowody", tytul: "Okablowanie światłowodowe", opis: "Dobierzesz rodzaj światłowodu i złącza, wykonasz spaw i obliczysz budżet tłumienia łącza.",
      lekcje: [
        { tytul: "Rodzaje włókien i standardy", tresc: `<h4>Budowa włókna</h4>
<p>Włókno składa się z <b>rdzenia</b> (prowadzi światło), <b>płaszcza</b> o niższym współczynniku załamania (całkowite wewnętrzne odbicie) oraz pokrycia ochronnego. Średnica płaszcza to zawsze <b>125 µm</b>.</p>
<div class="tw"><table><tr><th>Typ</th><th>Rdzeń/płaszcz</th><th>Okna</th><th>Kolor powłoki</th></tr>
<tr><td>wielomodowy OM1</td><td>62,5/125</td><td>850, 1300 nm</td><td>pomarańczowy</td></tr>
<tr><td>wielomodowy OM2</td><td>50/125</td><td>850, 1300 nm</td><td>pomarańczowy</td></tr>
<tr><td>wielomodowy OM3, OM4</td><td>50/125 (optymalizowany dla laserów VCSEL)</td><td>850 nm</td><td>turkusowy (aqua), OM4 też fioletowy</td></tr>
<tr><td>wielomodowy OM5</td><td>50/125</td><td>850-950 nm (SWDM)</td><td>limonkowy</td></tr>
<tr><td>jednomodowy OS1, OS2</td><td>9/125</td><td>1310, 1550 nm</td><td>żółty</td></tr></table></div>
<p>Światłowód <b>jednomodowy</b> (SM) ma mały rdzeń, brak dyspersji międzymodowej i zasięg dziesiątek kilometrów. <b>Wielomodowy</b> (MM) jest stosowany na krótkich odcinkach w budynkach i serwerowniach, z tańszymi nadajnikami (LED, VCSEL).</p>
<h4>Standardy Ethernet</h4>
<div class="tw"><table><tr><th>Standard</th><th>Włókno</th><th>Długość fali</th><th>Zasięg orientacyjny</th></tr>
<tr><td>1000BASE-SX</td><td>MM</td><td>850 nm</td><td>do 550 m (OM2)</td></tr>
<tr><td>1000BASE-LX</td><td>SM (też MM)</td><td>1310 nm</td><td>do 5 km (SM)</td></tr>
<tr><td>10GBASE-SR</td><td>MM</td><td>850 nm</td><td>300 m (OM3), 400 m (OM4)</td></tr>
<tr><td>10GBASE-LR</td><td>SM</td><td>1310 nm</td><td>10 km</td></tr>
<tr><td>10GBASE-ER</td><td>SM</td><td>1550 nm</td><td>40 km</td></tr></table></div>
<p>Moduły nadawczo-odbiorcze to wkładki <b>SFP</b> (1 Gb/s), <b>SFP+</b> (10 Gb/s), <b>QSFP+</b> (40 Gb/s), <b>QSFP28</b> (100 Gb/s). Wkładka musi pasować do typu włókna i długości fali po obu stronach. Moduły <b>BiDi</b> przesyłają dane w obu kierunkach po jednym włóknie na dwóch długościach fali.</p>
<h4>Kable</h4>
<p>Kable z luźną tubą (włókna w żelu, na zewnątrz, w kanalizacji) i z ścisłą tubą (900 µm, wewnątrz budynków). Liczbę włókien podaje się w opisie, np. 12J (12 włókien jednomodowych). Kolory włókien w tubie według normy: niebieski, pomarańczowy, zielony, brązowy, szary, biały, czerwony, czarny, żółty, fioletowy, różowy, turkusowy.</p>
<div class="tip">Zalety światłowodu: odporność na zakłócenia elektromagnetyczne, separacja galwaniczna (brak problemu różnicy potencjałów między budynkami), duże odległości i przepustowość. Dlatego szkielet między budynkami wykonuje się światłowodem.</div>` },
        { tytul: "Złącza, spawanie i elementy pasywne", tresc: `<h4>Złącza</h4>
<div class="tw"><table><tr><th>Złącze</th><th>Cechy</th></tr>
<tr><td>LC</td><td>małe (ferrula 1,25 mm), zatrzask, najczęściej we wkładkach SFP</td></tr>
<tr><td>SC</td><td>kwadratowe, zatrzask push-pull, ferrula 2,5 mm</td></tr>
<tr><td>ST</td><td>bagnetowe, okrągłe, starsze instalacje MM</td></tr>
<tr><td>FC</td><td>gwintowane, telekomunikacja, pomiary</td></tr>
<tr><td>MTP/MPO</td><td>wielowłóknowe (12 lub 24 włókna), centra danych 40/100G</td></tr></table></div>
<p>Szlif ferruli: <b>PC/UPC</b> (prosty, wypukły, złącza zwykle <b>niebieskie</b> dla SM, beżowe dla MM) i <b>APC</b> (skośny 8°, złącza <b>zielone</b>, mniejsze odbicie wsteczne, stosowany np. w sieciach PON i telewizji). Złącza UPC i APC nie wolno łączyć ze sobą: grozi to dużym tłumieniem i uszkodzeniem czoła.</p>
<h4>Spawanie</h4>
<ol><li>Zdjęcie powłok i oczyszczenie włókna alkoholem izopropylowym.</li>
<li>Założenie osłonki termokurczliwej na jedno z włókien.</li>
<li>Precyzyjne ucięcie <b>łamaczem (cleaverem)</b>, czoło pod kątem prostym.</li>
<li>Spawanie łukiem elektrycznym w spawarce, która wyrównuje włókna (rdzeniami lub płaszczami) i szacuje tłumienie.</li>
<li>Nasunięcie i obkurczenie osłonki w piecyku spawarki, ułożenie w kasecie spawów.</li></ol>
<p>Tłumienie dobrego spawu: około <b>0,02-0,1 dB</b>. Alternatywą jest <b>złączka mechaniczna</b> (żel imersyjny, około 0,1-0,5 dB) lub złącza szybkiego montażu.</p>
<h4>Elementy pasywne</h4>
<ul><li><b>Pigtail</b>: krótki odcinek włókna z jednym złączem, przyspawany do kabla w przełącznicy.</li>
<li><b>Patchcord</b>: kabel z dwoma złączami do krosowania (simplex lub duplex).</li>
<li><b>Przełącznica (ODF)</b>: panel z adapterami i kasetami spawów montowany w szafie.</li>
<li><b>Adapter</b>: łączy dwa złącza, np. LC-LC duplex.</li>
<li><b>Splitter</b>: dzieli sygnał (np. 1:32 w GPON).</li></ul>
<h4>Bezpieczeństwo</h4>
<p>Nigdy nie patrz w czoło złącza ani wkładki, nawet gdy nie widać światła: lasery 1310 i 1550 nm są niewidoczne i mogą uszkodzić siatkówkę. Odpady szkła zbiera się do oznaczonego pojemnika, a pracuje w okularach ochronnych.</p>
<div class="tip">Czoło złącza czyści się przed każdym połączeniem (pen lub ściereczka bezpyłowa) i ogląda mikroskopem lub sondą. Zabrudzone złącze to najczęstsza przyczyna dużego tłumienia.</div>` },
        { tytul: "Budżet mocy łącza światłowodowego", tresc: `<h4>Elementy budżetu tłumienia</h4>
<p>Całkowite tłumienie toru = tłumienie włókna + tłumienie złączy + tłumienie spawów (+ zapas).</p>
<div class="tw"><table><tr><th>Element</th><th>Wartość typowa do obliczeń</th></tr>
<tr><td>włókno MM przy 850 nm</td><td>3,5 dB/km</td></tr>
<tr><td>włókno MM przy 1300 nm</td><td>1,5 dB/km</td></tr>
<tr><td>włókno SM przy 1310 nm</td><td>0,35-0,4 dB/km (zewnętrzne), do 1,0 dB/km według norm dla wewnętrznych</td></tr>
<tr><td>włókno SM przy 1550 nm</td><td>0,22-0,3 dB/km</td></tr>
<tr><td>para złączy</td><td>0,75 dB (maksimum według TIA), w praktyce 0,3-0,5 dB</td></tr>
<tr><td>spaw</td><td>0,3 dB (maksimum), w praktyce około 0,1 dB</td></tr></table></div>
<h4>Przykład 1: wielomodowy</h4>
<p>Łącze MM 500 m przy 850 nm, 2 pary złączy, 2 spawy:</p>
<ul><li>włókno: 0,5 km x 3,5 dB/km = 1,75 dB</li>
<li>złącza: 2 x 0,75 dB = 1,5 dB</li>
<li>spawy: 2 x 0,3 dB = 0,6 dB</li>
<li>razem: <b>3,85 dB</b></li></ul>
<h4>Przykład 2: czy łącze zadziała?</h4>
<p>Nadajnik ma moc -3 dBm, czułość odbiornika wynosi -20 dBm. Dostępny budżet mocy: -3 - (-20) = <b>17 dB</b>. Tor SM 20 km przy 1310 nm (0,35 dB/km) z 2 złączami (0,5 dB) i 4 spawami (0,1 dB): 7 + 1 + 0,4 = 8,4 dB. Zapas 17 - 8,4 = 8,6 dB, więc łącze zadziała. Zaleca się zapas co najmniej 3 dB na starzenie i naprawy.</p>
<h4>Decybele</h4>
<p>dB to stosunek mocy (10 log P2/P1), dBm to moc odniesiona do 1 mW: 0 dBm = 1 mW, -3 dBm ≈ 0,5 mW, -10 dBm = 0,1 mW, -20 dBm = 0,01 mW. Spadek o 3 dB to połowa mocy, o 10 dB dziesięć razy mniej.</p>
<h4>Za mała odległość</h4>
<p>Moc zbyt wysoka też szkodzi: przy krótkim łączu z wkładką dalekiego zasięgu (np. 80 km) odbiornik może się przesterować. Stosuje się wtedy <b>tłumik optyczny</b>.</p>
<div class="tip">Na egzaminie zwracaj uwagę na jednostki: tłumienie kilometrowe w dB/km, długość w metrach. 300 m to 0,3 km. Licz liczbę par złączy, a nie pojedynczych wtyków.</div>` }
      ],
      pytania: [
        Q("Światłowód jednomodowy OS2 ma średnicę rdzenia około", "9 µm", "50 µm", "62,5 µm", "125 µm", "125 µm to średnica płaszcza."),
        Q("Złącze światłowodowe o szlifie APC ma zwykle kolor", "zielony", "niebieski", "beżowy", "czarny", "APC ma czoło ścięte pod kątem 8°."),
        Q("Standard 10GBASE-LR wykorzystuje", "światłowód jednomodowy i falę 1310 nm", "światłowód wielomodowy i falę 850 nm", "skrętkę kategorii 6A", "światłowód OM1 i falę 1550 nm", "LR: Long Reach, do 10 km."),
        Q("Do precyzyjnego przycięcia włókna przed spawaniem służy", "łamacz (cleaver)", "zaciskarka", "narzędzie LSA", "nóż do kabli koncentrycznych", "Czoło musi być prostopadłe i gładkie."),
        Q("Tłumienie 300 m światłowodu wielomodowego przy 850 nm (3,5 dB/km) wynosi", "1,05 dB", "10,5 dB", "3,5 dB", "0,35 dB", "0,3 km x 3,5 dB/km."),
        Q("Nadajnik ma moc -5 dBm, a czułość odbiornika wynosi -25 dBm. Dostępny budżet mocy to", "20 dB", "30 dB", "-30 dB", "5 dB", "-5 - (-25) = 20 dB."),
        Q("Krótki odcinek włókna z jednym złączem, spawany do kabla w przełącznicy, to", "pigtail", "patchcord", "adapter", "splitter", "Patchcord ma dwa złącza."),
        Q("Wkładka SFP+ obsługuje przepływność", "10 Gb/s", "1 Gb/s", "40 Gb/s", "100 Gb/s", "QSFP+ to 40 Gb/s.")
      ]
    },
    {
      id: "pomiary", tytul: "Pomiary okablowania", opis: "Wykonasz i zinterpretujesz pomiary torów miedzianych i światłowodowych oraz rozpoznasz typowe błędy instalacji.",
      lekcje: [
        { tytul: "Mapa połączeń i błędy montażu", tresc: `<h4>Test mapy połączeń (wiremap)</h4>
<p>Podstawowy tester sprawdza ciągłość i kolejność ośmiu żył między końcami toru. Typowe błędy:</p>
<div class="tw"><table><tr><th>Błąd</th><th>Opis</th><th>Przyczyna</th></tr>
<tr><td>przerwa (open)</td><td>brak ciągłości żyły</td><td>niedociśnięta żyła, uszkodzony kabel</td></tr>
<tr><td>zwarcie (short)</td><td>dwie żyły połączone</td><td>uszkodzona izolacja, źle zaciśnięty wtyk</td></tr>
<tr><td>odwrócona para (reversed)</td><td>w parze zamienione żyły, np. 1-2 na 2-1</td><td>pomylenie koloru z biało-kolorowym</td></tr>
<tr><td>skrzyżowane pary (crossed)</td><td>para trafia na piny innej pary, np. 1-2 na 3-6</td><td>A na jednym końcu, B na drugim</td></tr>
<tr><td>rozdzielona para (split pair)</td><td>ciągłość pin-pin poprawna, ale żyły z różnych par</td><td>złe ułożenie kolorów na obu końcach identycznie</td></tr></table></div>
<p><b>Split pair</b> jest podstępny: prosty tester ciągłości pokaże kabel jako dobry, bo pin 1 łączy się z pinem 1 itd. Wykryje go dopiero pomiar <b>przesłuchu NEXT</b>, bo żyły transmitujące jeden sygnał nie są skręcone razem.</p>
<h4>Lokalizacja uszkodzenia</h4>
<p>Certyfikator lub tester z funkcją <b>TDR</b> (reflektometr w dziedzinie czasu) wysyła impuls i mierzy czas powrotu odbicia, wskazując odległość do przerwy lub zwarcia. Przykład: przerwa na 37 m od testera oznacza uszkodzenie w ścianie, a nie w kablu krosowym.</p>
<h4>Długość i opóźnienie</h4>
<p>Długość wylicza się z czasu propagacji i współczynnika NVP (prędkość w kablu względem prędkości światła, dla skrętki około 0,65-0,72). Błędnie ustawione NVP w testerze daje błędny pomiar długości. Każda para ma inną długość z powodu różnego skrętu, dlatego mierzy się też <b>różnicę opóźnień (delay skew)</b>.</p>
<h4>Modele pomiarowe</h4>
<ul><li><b>Łącze stałe (permanent link)</b>: od panelu do gniazda, bez kabli krosowych; specjalne adaptery testowe. Ten pomiar wykonuje instalator przy odbiorze.</li>
<li><b>Kanał (channel)</b>: cały tor z kablami krosowymi i przyłączeniowymi, tak jak używa go użytkownik.</li></ul>
<div class="tip">Tester ciągłości (zdalna jednostka z diodami) nie wystarczy do odbioru instalacji. Do certyfikacji potrzebny jest miernik mierzący parametry transmisyjne w całym paśmie kategorii, np. do 250 MHz dla kategorii 6.</div>` },
        { tytul: "Parametry transmisyjne skrętki", tresc: `<h4>Najważniejsze parametry</h4>
<div class="tw"><table><tr><th>Parametr</th><th>Znaczenie</th><th>Lepszy wynik</th></tr>
<tr><td>tłumienie (insertion loss)</td><td>spadek mocy sygnału na długości toru</td><td>mniejszy</td></tr>
<tr><td>NEXT (przesłuch zbliżny)</td><td>sygnał z jednej pary indukowany w sąsiedniej, mierzony na tym samym końcu</td><td>większy (w dB)</td></tr>
<tr><td>PS NEXT</td><td>suma przesłuchów od trzech pozostałych par</td><td>większy</td></tr>
<tr><td>FEXT / ACR-F</td><td>przesłuch zdalny, mierzony na przeciwnym końcu</td><td>większy</td></tr>
<tr><td>ACR-N</td><td>różnica NEXT i tłumienia (odstęp sygnału od przesłuchu)</td><td>większy</td></tr>
<tr><td>Return Loss (RL)</td><td>tłumienność odbicia, wynik niedopasowania impedancji (100 Ω)</td><td>większy</td></tr>
<tr><td>opóźnienie propagacji</td><td>czas przejścia sygnału</td><td>mniejsze (kanał do 555 ns)</td></tr>
<tr><td>delay skew</td><td>różnica opóźnień par</td><td>mniejszy (kanał do 50 ns)</td></tr></table></div>
<p>Wartości przesłuchu podaje się jako tłumienie przesłuchu: im więcej dB, tym słabszy sygnał zakłócający, czyli lepiej. Tłumienie rośnie z częstotliwością i długością, dlatego najtrudniej spełnić wymagania przy górnej granicy pasma.</p>
<h4>Przyczyny złych wyników</h4>
<ul><li>NEXT: za duży rozplot par przy złączu, złączki niższej kategorii, split pair.</li>
<li>Return Loss: zgniecenie kabla, za ciasne zagięcia, opaski zaciśnięte zbyt mocno, mieszanie kabli o różnej impedancji.</li>
<li>Tłumienie: zbyt długi tor, cienki kabel krosowy, wysoka temperatura (tłumienie rośnie z temperaturą).</li>
<li>Opóźnienie i długość: tor dłuższy niż 90/100 m.</li></ul>
<h4>Wynik pomiaru</h4>
<p>Certyfikator porównuje każdy parametr z limitem wybranej normy (np. ISO11801 PL Class E) i pokazuje <b>PASS</b> lub <b>FAIL</b>. Gwiazdka (PASS* lub FAIL*) oznacza wynik w granicy dokładności przyrządu. Zapas (margin) to różnica między wynikiem a limitem w najgorszym punkcie. Przed pomiarem wybiera się normę, typ kabla i wartość NVP, a adaptery kalibruje się zgodnie z instrukcją.</p>
<div class="tip">Raport certyfikacyjny zawiera: identyfikator toru, datę, normę, typ kabla, wyniki dla każdej pary, zapas i nazwę urządzenia z numerem seryjnym. Raporty dołącza się do dokumentacji powykonawczej.</div>` },
        { tytul: "Pomiary światłowodów", tresc: `<h4>Metoda źródło-miernik (OLTS)</h4>
<p>Źródło światła o znanej mocy na jednym końcu, <b>miernik mocy optycznej</b> na drugim. Wynik to całkowite tłumienie toru w dB, porównywane z obliczonym budżetem. Przed pomiarem wykonuje się <b>referencję</b> (zerowanie) z kablami pomiarowymi. Mierzy się na dwóch długościach fali (MM: 850 i 1300 nm, SM: 1310 i 1550 nm) i najlepiej w obu kierunkach.</p>
<h4>Reflektometr OTDR</h4>
<p>OTDR wysyła impulsy i analizuje światło rozproszone wstecznie (rozpraszanie Rayleigha) i odbite. Daje <b>reflektogram</b>: wykres mocy w funkcji odległości.</p>
<div class="tw"><table><tr><th>Zdarzenie na reflektogramie</th><th>Wygląd</th></tr>
<tr><td>włókno</td><td>linia łagodnie opadająca (nachylenie = dB/km)</td></tr>
<tr><td>spaw</td><td>niewielki uskok w dół bez piku (zdarzenie nieodbiciowe)</td></tr>
<tr><td>złącze</td><td>pik odbicia i uskok (zdarzenie odbiciowe)</td></tr>
<tr><td>zgięcie makro</td><td>uskok, większy przy 1550 nm niż przy 1310 nm</td></tr>
<tr><td>koniec włókna lub przerwa</td><td>duży pik, potem szum</td></tr></table></div>
<p><b>Strefa martwa</b> to odcinek tuż za zdarzeniem, w którym OTDR nie rozróżnia kolejnych zdarzeń. Dlatego stosuje się <b>światłowód rozbiegowy</b> (launch cable, kilkaset metrów) na początku i odbiegowy na końcu, aby ocenić pierwsze i ostatnie złącze. Pomiar w obu kierunkach i uśrednienie wyników daje dokładną wartość tłumienia spawów (pomiar z jednej strony może pokazać nawet pozorny „zysk”).</p>
<h4>Inne przyrządy</h4>
<ul><li><b>Wizualny lokalizator uszkodzeń (VFL)</b>: czerwony laser 650 nm, świeci w miejscu złamania lub ostrego zgięcia, zasięg kilka kilometrów; służy też do identyfikacji włókien.</li>
<li><b>Mikroskop</b> lub sonda inspekcyjna do oceny czystości czoła złącza.</li>
<li><b>Identyfikator włókien aktywnych</b>: wykrywa ruch w kablu bez przerywania transmisji.</li></ul>
<div class="tip">Zgięcie wykrywa się, porównując pomiary na dwóch długościach fali: dłuższa fala (1550 nm) jest bardziej wrażliwa na zginanie. Spaw daje podobny uskok na obu długościach fali.</div>` }
      ],
      pytania: [
        Q("Błąd, którego nie wykryje prosty tester ciągłości, a ujawni pomiar NEXT, to", "rozdzielona para (split pair)", "przerwa jednej z żył (open)", "zwarcie dwóch żył (short)", "skrzyżowane pary (crossed pair)", "Kolejność pinów jest poprawna, ale pary są rozdzielone."),
        Q("Zamiana miejscami żył w obrębie jednej pary (np. pin 1 z 2) to", "odwrócona para (reversed pair)", "rozdzielona para (split pair)", "skrzyżowane pary (crossed pair)", "zwarcie żył w parze (short)", "Pary pozostają te same, zmienia się polaryzacja."),
        Q("Pomiar wykonywany od panelu krosowego do gniazda, bez kabli krosowych, to model", "łącza stałego (permanent link)", "kanału (channel)", "szkieletu", "łącza abonenckiego", "Kanał obejmuje kable krosowe."),
        Q("Dla parametru NEXT lepszy wynik to wartość", "większa w dB", "mniejsza w dB", "równa zeru", "ujemna", "Większe tłumienie przesłuchu oznacza słabsze zakłócenie."),
        Q("Parametr Return Loss opisuje", "odbicia sygnału przez niedopasowanie impedancji", "różnicę opóźnień propagacji między parami", "przesłuch mierzony na końcu odległym (FEXT)", "rezystancję pętli stałoprądowej pary żył", "Przyczyną bywa zgniecenie kabla."),
        Q("Do lokalizacji spawów i złączy na długości światłowodu służy", "reflektometr OTDR", "miernik mocy optycznej", "tester wiremap", "multimetr", "OTDR rysuje reflektogram w funkcji odległości."),
        Q("Światłowód rozbiegowy (launch cable) w pomiarach OTDR stosuje się, aby", "ominąć strefę martwą i ocenić pierwsze złącze", "zwiększyć moc impulsu wysyłanego przez OTDR", "przełączyć pomiar na inną długość fali", "zastąpić ustawienie referencji miernika mocy", "Strefa martwa zasłania zdarzenia tuż przy przyrządzie."),
        Q("Czerwony laser 650 nm wskazujący miejsce złamania włókna to", "wizualny lokalizator uszkodzeń (VFL)", "OTDR", "spawarka", "identyfikator włókien aktywnych", "Światło wydostaje się w miejscu uszkodzenia.")
      ]
    },
    {
      id: "przelaczniki", tytul: "Przełączniki zarządzalne", opis: "Skonfigurujesz przełącznik Cisco: zabezpieczenia, VLAN-y, trunki, STP i agregację łączy.",
      lekcje: [
        { tytul: "Konfiguracja podstawowa i zdalny dostęp", tresc: `<h4>Pierwsze kroki</h4>
<p>Pierwszą konfigurację wykonuje się przez <b>port konsoli</b> (kabel konsolowy RJ-45 do RS-232/USB, terminal np. PuTTY, 9600 b/s, 8N1). Później przełącznikiem zarządza się zdalnie przez SSH.</p>
<pre>Switch&gt; enable
Switch# configure terminal
Switch(config)# hostname SW1
SW1(config)# enable secret Cisco123
SW1(config)# service password-encryption
SW1(config)# banner motd #Dostep tylko dla upowaznionych#
SW1(config)# no ip domain-lookup
SW1(config)# line console 0
SW1(config-line)# password Konsola
SW1(config-line)# login
SW1(config-line)# logging synchronous</pre>
<h4>Adres zarządzający i SSH</h4>
<pre>SW1(config)# interface vlan 99
SW1(config-if)# ip address 192.168.99.2 255.255.255.0
SW1(config-if)# no shutdown
SW1(config)# ip default-gateway 192.168.99.1
SW1(config)# ip domain-name firma.local
SW1(config)# crypto key generate rsa modulus 2048
SW1(config)# ip ssh version 2
SW1(config)# username admin secret Haslo123
SW1(config)# line vty 0 15
SW1(config-line)# login local
SW1(config-line)# transport input ssh</pre>
<p>Przełącznik warstwy 2 ma adres IP tylko na interfejsie <b>SVI</b> (interface vlan), wyłącznie do zarządzania. Generowanie kluczy RSA wymaga wcześniejszego ustawienia hostname i domeny. <code>transport input ssh</code> blokuje niezaszyfrowany Telnet.</p>
<h4>Interfejsy</h4>
<ul><li><code>interface range fa0/1 - 24</code>: konfiguracja wielu portów naraz.</li>
<li><code>speed 100</code>, <code>duplex full</code>: ręczne ustawienie (niezgodność duplex po obu stronach daje kolizje i spadek wydajności).</li>
<li><code>description Biuro-PC12</code>: opis portu.</li>
<li><code>shutdown</code>: wyłączenie nieużywanych portów to dobra praktyka bezpieczeństwa.</li></ul>
<h4>Polecenia diagnostyczne</h4>
<p><code>show running-config</code>, <code>show startup-config</code>, <code>show version</code>, <code>show ip interface brief</code>, <code>show interfaces status</code>, <code>show mac address-table</code>, <code>show ssh</code>. W trybie konfiguracji poprzedza się je słowem <code>do</code>, np. <code>do show vlan brief</code>. Przywrócenie ustawień fabrycznych: <code>erase startup-config</code>, <code>delete vlan.dat</code>, <code>reload</code>.</p>
<div class="tip">Tablica MAC przełącznika uczy się adresów źródłowych ramek. Ramkę do nieznanego adresu docelowego przełącznik zalewa (flooding) na wszystkie porty w tym VLAN, oprócz portu wejściowego.</div>` },
        { tytul: "VLAN, trunk i routing między VLAN", tresc: `<h4>Tworzenie VLAN i portów dostępowych</h4>
<pre>SW1(config)# vlan 10
SW1(config-vlan)# name Ksiegowosc
SW1(config)# vlan 20
SW1(config-vlan)# name Handel
SW1(config)# interface range fa0/1 - 10
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10</pre>
<h4>Trunk 802.1Q</h4>
<pre>SW1(config)# interface g0/1
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 99
SW1(config-if)# switchport trunk allowed vlan 10,20,99</pre>
<ul><li>Znacznik 802.1Q ma <b>4 bajty</b> i wstawiany jest do ramki Ethernet; pole VLAN ID ma <b>12 bitów</b>, czyli VLAN 1-4094 (zakres normalny 1-1005, rozszerzony 1006-4094).</li>
<li>Ramki <b>VLAN natywnego</b> przechodzą przez trunk bez znacznika. VLAN natywny musi być taki sam po obu stronach łącza, inaczej pojawia się komunikat o niezgodności i ruch miesza się między VLAN-ami.</li>
<li>Domyślnie wszystkie porty są w VLAN 1, który jest też domyślnym natywnym. Dobra praktyka: przenieść zarządzanie i natywny VLAN z VLAN 1.</li>
<li><b>DTP</b> negocjuje trunk automatycznie (dynamic auto, dynamic desirable); dla bezpieczeństwa wyłącza się go poleceniem <code>switchport nonegotiate</code>.</li></ul>
<p>Weryfikacja: <code>show vlan brief</code> (porty dostępowe w VLAN-ach, porty trunk nie są tu pokazywane), <code>show interfaces trunk</code>.</p>
<h4>Routing między VLAN: router-on-a-stick</h4>
<pre>R1(config)# interface g0/0.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config)# interface g0/0.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config)# interface g0/0
R1(config-if)# no shutdown</pre>
<p>Port przełącznika w stronę routera musi być trunkiem. Każda podsieć VLAN ma bramę na podinterfejsie routera.</p>
<h4>Przełącznik warstwy 3</h4>
<pre>SW3(config)# ip routing
SW3(config)# interface vlan 10
SW3(config-if)# ip address 192.168.10.1 255.255.255.0</pre>
<div class="tip">VLAN dzieli przełącznik na osobne domeny rozgłoszeniowe. Komputery z różnych VLAN-ów nie skomunikują się bez routera lub przełącznika warstwy 3, nawet jeśli są wpięte w ten sam przełącznik.</div>` },
        { tytul: "STP, EtherChannel i port security", tresc: `<h4>Spanning Tree Protocol (802.1D)</h4>
<p>STP zapobiega <b>pętlom</b> w sieci z redundantnymi łączami (pętla daje burzę rozgłoszeniową i niestabilną tablicę MAC). Przełączniki wymieniają ramki <b>BPDU</b>.</p>
<ol><li>Wybór <b>mostu głównego (root bridge)</b>: najniższy Bridge ID = priorytet (domyślnie <b>32768</b>, zmiana co 4096) + adres MAC. Przy równym priorytecie wygrywa niższy MAC.</li>
<li>Na każdym innym przełączniku wybór <b>portu głównego</b> (root port) o najniższym koszcie ścieżki do mostu głównego. Koszt: 10 Mb/s = 100, 100 Mb/s = 19, 1 Gb/s = 4, 10 Gb/s = 2.</li>
<li>Na każdym segmencie jeden <b>port desygnowany</b>, pozostałe porty są <b>blokowane</b>.</li></ol>
<p>Stany portu w 802.1D: blocking (do 20 s, max age), listening (15 s), learning (15 s), forwarding. Zbieżność trwa 30-50 s. <b>RSTP (802.1w)</b> ma stany discarding, learning, forwarding i zbiega się w kilka sekund. Cisco domyślnie używa PVST+ (osobne drzewo dla każdego VLAN).</p>
<pre>SW1(config)# spanning-tree mode rapid-pvst
SW1(config)# spanning-tree vlan 10 priority 4096
SW1(config)# interface fa0/5
SW1(config-if)# spanning-tree portfast
SW1(config-if)# spanning-tree bpduguard enable</pre>
<p><b>PortFast</b> na portach dostępowych przełącza port od razu w forwarding (komputer szybko dostaje adres z DHCP), a <b>BPDU Guard</b> wyłącza port, gdy pojawi się na nim BPDU (ktoś podłączył przełącznik).</p>
<h4>EtherChannel</h4>
<p>Łączy do <b>8</b> fizycznych łączy w jedno logiczne: większa przepustowość i redundancja bez blokowania przez STP. Protokoły: <b>LACP</b> (IEEE 802.3ad, tryby active/passive) i <b>PAgP</b> (Cisco, desirable/auto). Porty muszą mieć te same parametry (prędkość, duplex, tryb, VLAN-y).</p>
<pre>SW1(config)# interface range g0/1 - 2
SW1(config-if-range)# channel-group 1 mode active
SW1(config)# interface port-channel 1
SW1(config-if)# switchport mode trunk</pre>
<p>Para passive-passive (LACP) lub auto-auto (PAgP) nie utworzy kanału.</p>
<h4>Port security</h4>
<pre>SW1(config-if)# switchport mode access
SW1(config-if)# switchport port-security
SW1(config-if)# switchport port-security maximum 2
SW1(config-if)# switchport port-security mac-address sticky
SW1(config-if)# switchport port-security violation shutdown</pre>
<p>Tryby naruszenia: <b>shutdown</b> (domyślny, port w stanie err-disabled), <b>restrict</b> (odrzuca ramki i loguje), <b>protect</b> (odrzuca bez logowania). Port err-disabled przywraca się poleceniami <code>shutdown</code> i <code>no shutdown</code>.</p>
<div class="tip">Aby wskazać most główny, ustaw na wybranym przełączniku najniższy priorytet, np. 4096 lub użyj polecenia spanning-tree vlan 10 root primary. Nie zostawiaj wyboru przypadkowi najniższego adresu MAC.</div>` }
      ],
      pytania: [
        Q("Pole VLAN ID w znaczniku 802.1Q ma długość", "12 bitów", "8 bitów", "16 bitów", "4 bajtów", "Cały znacznik ma 4 bajty, VLAN ID 12 bitów."),
        Q("Ramki VLAN natywnego są przesyłane przez trunk 802.1Q", "bez znacznika", "z podwójnym znacznikiem", "w VLAN 4095", "tylko przez porty dostępowe", "Natywny VLAN jest nieznakowany."),
        Q("Polecenie przypisujące port dostępowy do VLAN 20 to", "switchport access vlan 20", "switchport trunk vlan 20", "vlan 20 access", "encapsulation dot1Q 20", "Wcześniej ustawia się switchport mode access."),
        Q("Most główny w STP to przełącznik o", "najniższym Bridge ID", "najwyższym priorytecie liczbowym", "największej liczbie portów", "najwyższym adresie MAC", "BID = priorytet + MAC, wygrywa najniższy."),
        Q("Domyślny priorytet mostu w STP wynosi", "32768", "4096", "0", "65535", "Priorytet zmienia się w krokach co 4096."),
        Q("Funkcja przełączająca port dostępowy od razu w stan przekazywania to", "PortFast", "BPDU Guard", "Root Guard", "DTP", "Stosowana tylko na portach do urządzeń końcowych."),
        Q("Protokół agregacji łączy zgodny ze standardem IEEE 802.3ad to", "LACP", "PAgP", "DTP", "VTP", "PAgP jest protokołem Cisco."),
        Q("Domyślny tryb reakcji port security na naruszenie to", "shutdown", "restrict", "protect", "sticky", "Port przechodzi w stan err-disabled.")
      ]
    },
    {
      id: "adresacja", tytul: "Adresacja i usługi LAN", opis: "Rozplanujesz adresację VLSM i IPv6 dla sieci firmowej oraz skonfigurujesz DHCP i usługi na routerze.",
      lekcje: [
        { tytul: "Planowanie adresacji VLSM", tresc: `<h4>Zasada VLSM</h4>
<p>Podsieci o zmiennej długości maski przydziela się od <b>największej</b> do najmniejszej, aby uniknąć nakładania się i marnowania adresów. Dla każdej potrzeby dobierz najmniejszy blok, w którym zmieszczą się hosty plus adres sieci i broadcast (oraz brama, jeśli jest liczona osobno).</p>
<h4>Przykład</h4>
<p>Sieć 192.168.1.0/24, potrzeby: Handel 100 hostów, Biuro 50, Magazyn 20, łącze między routerami 2.</p>
<div class="tw"><table><tr><th>Dział</th><th>Hosty</th><th>Prefiks</th><th>Sieć</th><th>Zakres hostów</th><th>Broadcast</th></tr>
<tr><td>Handel</td><td>100</td><td>/25 (126)</td><td>192.168.1.0</td><td>.1-.126</td><td>.127</td></tr>
<tr><td>Biuro</td><td>50</td><td>/26 (62)</td><td>192.168.1.128</td><td>.129-.190</td><td>.191</td></tr>
<tr><td>Magazyn</td><td>20</td><td>/27 (30)</td><td>192.168.1.192</td><td>.193-.222</td><td>.223</td></tr>
<tr><td>R1-R2</td><td>2</td><td>/30 (2)</td><td>192.168.1.224</td><td>.225-.226</td><td>.227</td></tr></table></div>
<p>Wolna przestrzeń zaczyna się od 192.168.1.228. Brama to zwykle pierwszy (lub ostatni) adres hosta podsieci, zgodnie z poleceniem w arkuszu.</p>
<h4>Dobór prefiksu</h4>
<p>Potrzeba 60 hostów: /26 daje 62, wystarczy. Potrzeba 62 hostów i brama: nadal /26 (brama jest jednym z 62). Potrzeba 63: trzeba /25. Na łącza punkt-punkt stosuje się /30, a na nowszych urządzeniach także /31 (RFC 3021, bez adresu sieci i broadcast).</p>
<h4>Sumaryzacja</h4>
<p>Sieci 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24, 172.16.3.0/24 można opisać jedną trasą <b>172.16.0.0/22</b>: wspólne są pierwsze 22 bity (trzeci oktet 000000xx). Sumaryzacja zmniejsza tablice routingu.</p>
<h4>Sprawdzanie przynależności</h4>
<p>Adres należy do sieci, jeśli iloczyn logiczny AND adresu i maski daje adres sieci. Przykład: 10.10.37.200/21, maska 255.255.248.0, blok 8 w trzecim oktecie: 37 leży w bloku 32-39, więc sieć 10.10.32.0, broadcast 10.10.39.255.</p>
<div class="tip">Zawsze zapisz tabelę adresacji przed konfiguracją. Na egzaminie praktycznym błąd w jednej masce psuje łączność całego segmentu, a komisja sprawdza ping między wskazanymi hostami.</div>` },
        { tytul: "DHCP, DNS i usługi na routerze", tresc: `<h4>Proces DHCP (DORA)</h4>
<ol><li><b>Discover</b>: klient rozgłasza zapytanie (z 0.0.0.0 na 255.255.255.255).</li>
<li><b>Offer</b>: serwer proponuje adres.</li>
<li><b>Request</b>: klient prosi o wybrany adres (rozgłoszeniowo, by inne serwery wiedziały).</li>
<li><b>Acknowledge</b>: serwer potwierdza dzierżawę.</li></ol>
<p>Porty: serwer <b>UDP 67</b>, klient <b>UDP 68</b>. Klient odnawia dzierżawę po upływie 50% czasu (T1), a po 87,5% (T2) próbuje u dowolnego serwera.</p>
<h4>Serwer DHCP na routerze Cisco</h4>
<pre>R1(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10
R1(config)# ip dhcp pool VLAN10
R1(dhcp-config)# network 192.168.10.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.10.1
R1(dhcp-config)# dns-server 192.168.10.5
R1(dhcp-config)# domain-name firma.local
R1(dhcp-config)# lease 7</pre>
<p>Weryfikacja: <code>show ip dhcp binding</code>, <code>show ip dhcp pool</code>. Wykluczenia definiuje się w trybie globalnym, a nie w puli.</p>
<h4>DHCP Relay</h4>
<p>Rozgłoszenia nie przechodzą przez router, więc gdy serwer DHCP jest w innej podsieci, na interfejsie bramy klientów ustawia się przekaźnik:</p>
<pre>R1(config)# interface g0/0.20
R1(config-subif)# ip helper-address 192.168.10.5</pre>
<h4>DNS</h4>
<p>DNS używa portu <b>53</b> (UDP dla zapytań, TCP dla transferu stref i dużych odpowiedzi). Zapytanie rekurencyjne (klient do resolvera, który zwraca pełną odpowiedź) i iteracyjne (resolver pyta kolejno serwery główne, TLD i autorytatywne). Rekordy: A, AAAA, CNAME, MX, PTR, NS, SOA, SRV, TXT. Czas przechowywania w pamięci podręcznej określa TTL.</p>
<h4>Porty usług</h4>
<div class="tw"><table><tr><th>Usługa</th><th>Port</th><th>Usługa</th><th>Port</th></tr>
<tr><td>FTP</td><td>TCP 20, 21</td><td>POP3</td><td>TCP 110</td></tr>
<tr><td>SSH</td><td>TCP 22</td><td>NTP</td><td>UDP 123</td></tr>
<tr><td>Telnet</td><td>TCP 23</td><td>IMAP</td><td>TCP 143</td></tr>
<tr><td>SMTP</td><td>TCP 25 (587)</td><td>SNMP</td><td>UDP 161, 162</td></tr>
<tr><td>HTTP</td><td>TCP 80</td><td>HTTPS</td><td>TCP 443</td></tr>
<tr><td>TFTP</td><td>UDP 69</td><td>RDP</td><td>TCP 3389</td></tr></table></div>
<div class="tip">Jeśli klient ma adres 169.254.x.x, nie dostał odpowiedzi DHCP: sprawdź, czy port przełącznika jest w dobrym VLAN-ie, czy pula nie jest wyczerpana i czy skonfigurowano ip helper-address.</div>` },
        { tytul: "IPv6 w sieci lokalnej", tresc: `<h4>Rodzaje adresów IPv6</h4>
<div class="tw"><table><tr><th>Typ</th><th>Prefiks</th><th>Opis</th></tr>
<tr><td>globalny unicast</td><td>2000::/3</td><td>routowalny w internecie</td></tr>
<tr><td>link-local</td><td>fe80::/10</td><td>tylko w obrębie łącza, każdy interfejs IPv6 ma go zawsze</td></tr>
<tr><td>unikalny lokalny (ULA)</td><td>fc00::/7 (w praktyce fd00::/8)</td><td>odpowiednik adresów prywatnych</td></tr>
<tr><td>multicast</td><td>ff00::/8</td><td>ff02::1 wszystkie węzły, ff02::2 wszystkie routery</td></tr>
<tr><td>pętla zwrotna</td><td>::1/128</td><td>odpowiednik 127.0.0.1</td></tr>
<tr><td>nieokreślony</td><td>::/128</td><td>brak adresu</td></tr></table></div>
<p>IPv6 <b>nie ma broadcastu</b>, zastępuje go multicast. Rolę ARP pełni protokół <b>NDP</b> (komunikaty ICMPv6: Neighbor Solicitation i Neighbor Advertisement).</p>
<h4>Struktura adresu globalnego</h4>
<p>Typowo: <b>/48</b> prefiks od dostawcy dla firmy, 16 bitów na identyfikator podsieci, <b>/64</b> dla każdej sieci LAN, 64 bity identyfikatora interfejsu. Z /48 można więc utworzyć 65 536 podsieci /64. Przykład: firma ma 2001:db8:acad::/48, VLAN 10 dostaje 2001:db8:acad:10::/64, VLAN 20 2001:db8:acad:20::/64.</p>
<h4>Skracanie adresów</h4>
<p>2001:0db8:0000:0010:0000:0000:0000:0001 = <b>2001:db8:0:10::1</b>. Zasady: usuń zera wiodące w grupach, najdłuższy ciąg grup zerowych zastąp <code>::</code>, i tylko raz. Zapis <code>2001:db8::10::1</code> jest błędny, bo zawiera dwa <code>::</code>.</p>
<h4>Autokonfiguracja</h4>
<ul><li><b>SLAAC</b>: router wysyła komunikaty Router Advertisement z prefiksem, host sam tworzy identyfikator interfejsu (losowo lub metodą EUI-64).</li>
<li><b>Bezstanowy DHCPv6</b>: adres z SLAAC, a dodatkowe informacje (DNS) z serwera.</li>
<li><b>Stanowy DHCPv6</b>: adres i parametry przydziela serwer.</li></ul>
<h4>EUI-64</h4>
<p>MAC 00-1A-2B-3C-4D-5E: dzielimy na połowy, wstawiamy FFFE: 001A:2BFF:FE3C:4D5E, odwracamy siódmy bit pierwszego bajtu (00 staje się 02): identyfikator <b>021A:2BFF:FE3C:4D5E</b>.</p>
<pre>R1(config)# ipv6 unicast-routing
R1(config)# interface g0/0
R1(config-if)# ipv6 address 2001:db8:acad:10::1/64
R1(config-if)# ipv6 address fe80::1 link-local</pre>
<div class="tip">Bez polecenia ipv6 unicast-routing router Cisco nie przekazuje pakietów IPv6 i nie wysyła komunikatów RA, więc hosty nie skonfigurują się przez SLAAC.</div>` }
      ],
      pytania: [
        Q("Dla podsieci potrzebującej 50 adresów hostów najmniejszy odpowiedni prefiks to", "/26", "/27", "/25", "/28", "/26 daje 62 hosty, /27 tylko 30."),
        Q("Sieci 172.16.0.0/24 do 172.16.3.0/24 można zsumaryzować do", "172.16.0.0/22", "172.16.0.0/23", "172.16.0.0/16", "172.16.0.0/21", "Cztery kolejne sieci /24 to jedna /22."),
        Q("Komunikat DHCP wysyłany przez klienta jako pierwszy to", "DHCPDISCOVER", "DHCPOFFER", "DHCPREQUEST", "DHCPACK", "Kolejność DORA."),
        Q("Polecenie routera przekazujące zapytania DHCP do serwera w innej sieci to", "ip helper-address", "ip dhcp pool", "ip dhcp excluded-address", "ip forward-protocol dns", "Konfiguruje się je na interfejsie bramy klientów."),
        Q("Adresy IPv6 link-local zaczynają się od", "fe80::/10", "2000::/3", "ff00::/8", "fd00::/8", "fd00::/8 to adresy unikalne lokalne."),
        Q("Które stwierdzenie o IPv6 jest prawdziwe?", "nie ma adresów rozgłoszeniowych", "używa ARP do odwzorowania adresów", "adres ma 64 bity", "nie obsługuje multicastu", "Broadcast zastąpiono multicastem, ARP protokołem NDP."),
        Q("Identyfikator interfejsu EUI-64 dla MAC 00-1A-2B-3C-4D-5E to", "021A:2BFF:FE3C:4D5E", "001A:2BFF:FE3C:4D5E", "021A:2BFE:FF3C:4D5E", "FFFE:001A:2B3C:4D5E", "Wstawienie FFFE i odwrócenie 7. bitu."),
        Q("Serwer DHCP nasłuchuje na porcie", "UDP 67", "UDP 68", "TCP 67", "UDP 53", "Klient używa portu 68.")
      ]
    },
    {
      id: "wlan", tytul: "Sieci bezprzewodowe i PoE", opis: "Zaplanujesz i zabezpieczysz sieć Wi-Fi w firmie oraz dobierzesz zasilanie PoE dla punktów dostępowych.",
      lekcje: [
        { tytul: "Standardy, kanały i anteny", tresc: `<h4>Standardy IEEE 802.11</h4>
<div class="tw"><table><tr><th>Standard</th><th>Nazwa</th><th>Pasma</th><th>Maks. teoretycznie</th></tr>
<tr><td>802.11b</td><td>-</td><td>2,4 GHz</td><td>11 Mb/s</td></tr>
<tr><td>802.11a</td><td>-</td><td>5 GHz</td><td>54 Mb/s</td></tr>
<tr><td>802.11g</td><td>-</td><td>2,4 GHz</td><td>54 Mb/s</td></tr>
<tr><td>802.11n</td><td>Wi-Fi 4</td><td>2,4 i 5 GHz</td><td>600 Mb/s (MIMO 4x4)</td></tr>
<tr><td>802.11ac</td><td>Wi-Fi 5</td><td>5 GHz</td><td>około 6,9 Gb/s</td></tr>
<tr><td>802.11ax</td><td>Wi-Fi 6 / 6E</td><td>2,4, 5 / 6 GHz</td><td>około 9,6 Gb/s (OFDMA)</td></tr>
<tr><td>802.11be</td><td>Wi-Fi 7</td><td>2,4, 5, 6 GHz</td><td>ponad 40 Gb/s (kanały 320 MHz)</td></tr></table></div>
<h4>Kanały</h4>
<p>W paśmie <b>2,4 GHz</b> w Europie dostępne są kanały 1-13 co 5 MHz, a kanał ma szerokość 20-22 MHz, więc kanały niezachodzące to <b>1, 6, 11</b> (w Europie także 1, 5, 9, 13 przy 20 MHz). Sąsiednie punkty dostępowe ustawia się na różnych kanałach niezachodzących. Pasmo <b>5 GHz</b> ma znacznie więcej kanałów niezachodzących, krótszy zasięg i słabiej przenika przez ściany; część kanałów wymaga mechanizmu <b>DFS</b> (unikanie radarów). Szersze kanały (40, 80, 160 MHz) zwiększają przepustowość kosztem liczby wolnych kanałów.</p>
<p>Źródła zakłóceń w 2,4 GHz: kuchenki mikrofalowe, Bluetooth, nianie elektroniczne, sąsiednie sieci. Dostęp do medium: <b>CSMA/CA</b> (unikanie kolizji, potwierdzenia ACK), w Ethernet przewodowym historycznie CSMA/CD.</p>
<h4>Anteny i moc</h4>
<ul><li><b>Dookólna</b>: promieniuje w poziomie we wszystkich kierunkach, do pomieszczeń.</li>
<li><b>Kierunkowa</b> (panelowa, Yagi, paraboliczna): duży zysk w jednym kierunku, do połączeń punkt-punkt między budynkami.</li>
<li>Zysk anteny podaje się w <b>dBi</b>, moc nadajnika w <b>dBm</b>. Sumaryczna moc EIRP w 2,4 GHz w Polsce nie może przekraczać <b>20 dBm (100 mW)</b>.</li>
<li>Poziom sygnału po stronie klienta: -30 dBm doskonały, -67 dBm minimum dla VoIP i wideo, -80 dBm bardzo słaby.</li></ul>
<h4>Tryby pracy</h4>
<p>Infrastrukturalny (z punktem dostępowym, zbiór usług BSS/ESS) i ad-hoc (IBSS, bez AP). Urządzenia: punkt dostępowy, most bezprzewodowy (WDS), wzmacniak (repeater, zmniejsza przepustowość o około połowę przy jednym radiu), system mesh, kontroler WLAN z lekkimi punktami dostępowymi.</p>
<div class="tip">Ta sama nazwa SSID i to samo zabezpieczenie na wielu AP z różnymi kanałami tworzy sieć ESS, w której klient przechodzi między punktami (roaming) bez zmiany adresu IP.</div>` },
        { tytul: "Zabezpieczenia sieci bezprzewodowej", tresc: `<h4>Metody szyfrowania</h4>
<div class="tw"><table><tr><th>Mechanizm</th><th>Szyfrowanie</th><th>Ocena</th></tr>
<tr><td>WEP</td><td>RC4</td><td>złamany, nie stosować</td></tr>
<tr><td>WPA</td><td>TKIP</td><td>przestarzały</td></tr>
<tr><td>WPA2</td><td>AES-CCMP</td><td>standard minimalny</td></tr>
<tr><td>WPA3</td><td>AES (GCMP-256 w Enterprise), uwierzytelnianie SAE</td><td>zalecany, odporny na ataki słownikowe offline</td></tr></table></div>
<h4>Personal i Enterprise</h4>
<ul><li><b>Personal (PSK)</b>: jedno hasło dla wszystkich (8-63 znaki). Prosty, ale po odejściu pracownika trzeba zmieniać hasło na wszystkich urządzeniach.</li>
<li><b>Enterprise (802.1X)</b>: każdy użytkownik ma własne poświadczenia; punkt dostępowy (uwierzytelniający) przekazuje je do serwera <b>RADIUS</b> (porty UDP 1812 uwierzytelnianie, 1813 rozliczanie). Metody EAP: PEAP (login i hasło w tunelu TLS), EAP-TLS (certyfikaty po obu stronach, najbezpieczniejsza).</li></ul>
<h4>Dobre praktyki</h4>
<ol><li>Zmiana domyślnego loginu i hasła administratora AP.</li>
<li>WPA2-AES lub WPA3, nigdy WEP ani TKIP.</li>
<li>Wyłączenie <b>WPS</b> (metoda PIN jest podatna na ataki brute force).</li>
<li>Osobna sieć dla gości (SSID gościnny w osobnym VLAN-ie, izolacja klientów, dostęp tylko do internetu).</li>
<li>Aktualizacja oprogramowania (firmware) punktu dostępowego.</li>
<li>Zarządzanie AP tylko z sieci przewodowej i przez HTTPS lub SSH.</li>
<li>Ograniczenie mocy nadawania, aby sygnał nie wychodził daleko poza budynek.</li></ol>
<p><b>Ukrycie SSID</b> i <b>filtrowanie MAC</b> nie są skutecznym zabezpieczeniem: SSID widać w ramkach klientów, a adres MAC łatwo podsłuchać i podrobić. Mogą być jedynie dodatkiem.</p>
<h4>Zagrożenia</h4>
<p><b>Rogue AP</b>: nieautoryzowany punkt dostępowy podłączony do sieci firmowej. <b>Evil twin</b>: fałszywy AP z tą samą nazwą SSID, wyłudzający dane. <b>Deauthentication</b>: wymuszanie rozłączenia klientów. Ochronę dają systemy WIPS w kontrolerach oraz WPA3 z chronionymi ramkami zarządzania (802.11w, PMF).</p>
<div class="tip">Na egzaminie konfigurujesz zwykle AP przez przeglądarkę: SSID, kanał, tryb (np. 802.11n/ac), WPA2-PSK AES, hasło z arkusza, adres IP zarządzania. Wykonaj zrzut ekranu każdej zapisanej sekcji, jeśli polecenie tego wymaga.</div>` },
        { tytul: "Zasilanie PoE i projekt sieci Wi-Fi", tresc: `<h4>Power over Ethernet</h4>
<div class="tw"><table><tr><th>Standard</th><th>Nazwa</th><th>Moc na porcie PSE</th><th>Moc dla urządzenia PD</th><th>Pary</th></tr>
<tr><td>802.3af</td><td>PoE (Type 1)</td><td>15,4 W</td><td>12,95 W</td><td>2</td></tr>
<tr><td>802.3at</td><td>PoE+ (Type 2)</td><td>30 W</td><td>25,5 W</td><td>2</td></tr>
<tr><td>802.3bt Type 3</td><td>PoE++</td><td>60 W</td><td>51 W</td><td>4</td></tr>
<tr><td>802.3bt Type 4</td><td>PoE++</td><td>90-100 W</td><td>71,3 W</td><td>4</td></tr></table></div>
<p><b>PSE</b> (Power Sourcing Equipment) to źródło zasilania: przełącznik PoE lub <b>injector</b> (zasilacz wpięty między przełącznik bez PoE a urządzenie). <b>PD</b> (Powered Device) to odbiornik: punkt dostępowy, telefon IP, kamera. Napięcie nominalne około 48 V (44-57 V). Przełącznik przed podaniem napięcia wykrywa urządzenie i jego klasę, więc PoE zgodne ze standardem nie uszkodzi zwykłej karty sieciowej. Zasięg jak dla Ethernetu: <b>100 m</b>.</p>
<h4>Budżet mocy przełącznika</h4>
<p>Przełącznik ma ograniczoną łączną moc PoE. Przykład: przełącznik 24 porty z budżetem 370 W, do zasilenia 8 AP po 25,5 W (204 W) i 12 kamer po 12,95 W (155,4 W). Razem 359,4 W, mieści się w budżecie z niewielkim zapasem. Przy liczeniu ostrożnym (moc PSE) byłoby 8 x 30 + 12 x 15,4 = 424,8 W, czyli za dużo.</p>
<h4>Projekt sieci Wi-Fi</h4>
<ol><li><b>Analiza wymagań</b>: liczba użytkowników, aplikacje (VoIP, wideo), obszar pokrycia.</li>
<li><b>Site survey</b>: pomiar w terenie, mapa cieplna (heatmap) siły sygnału, wykrycie zakłóceń. Narzędzia: analizatory widma, aplikacje typu Ekahau, NetSpot, inSSIDer.</li>
<li><b>Rozmieszczenie AP</b>: zakładka komórek około 15-20% dla płynnego roamingu, montaż na suficie, z dala od metalowych przeszkód.</li>
<li><b>Plan kanałów</b>: sąsiednie AP na kanałach niezachodzących, w 5 GHz kanały 20 lub 40 MHz przy dużej gęstości.</li>
<li><b>Pojemność</b>: zwykle 25-50 aktywnych klientów na radio AP; w salach konferencyjnych więcej AP o mniejszej mocy.</li></ol>
<p>Tłumienie przeszkód (orientacyjnie, 2,4 GHz): ściana z płyt gipsowych około 3 dB, ceglana 6-8 dB, betonowa 10-15 dB, szyba niskoemisyjna i metal bardzo dużo.</p>
<div class="tip">Wybierając przełącznik do zasilania punktów dostępowych Wi-Fi 6, sprawdź, czy porty obsługują PoE+ (802.3at). Wiele AP wymaga ponad 15,4 W i na zwykłym PoE pracuje z ograniczoną funkcjonalnością.</div>` }
      ],
      pytania: [
        Q("Niezachodzące kanały w paśmie 2,4 GHz (przy kanałach 20-22 MHz) to", "1, 6, 11", "1, 2, 3", "3, 7, 12", "2, 8, 14", "Odstęp co najmniej 5 kanałów."),
        Q("Standard 802.11ac (Wi-Fi 5) działa w paśmie", "5 GHz", "2,4 GHz", "2,4 i 5 GHz", "6 GHz", "Wi-Fi 5 działa tylko w 5 GHz."),
        Q("Metoda dostępu do medium w sieciach Wi-Fi to", "CSMA/CA", "CSMA/CD", "Token Ring", "TDMA", "Unikanie kolizji z potwierdzeniami."),
        Q("Najbezpieczniejsze z wymienionych zabezpieczeń sieci Wi-Fi to", "WPA3", "WPA2-TKIP", "WEP", "ukrycie SSID", "WPA3 używa SAE."),
        Q("W trybie WPA2-Enterprise punkt dostępowy przekazuje dane uwierzytelniające do serwera", "RADIUS", "DHCP", "DNS", "NTP", "802.1X z serwerem RADIUS."),
        Q("Standard 802.3at (PoE+) zapewnia na porcie przełącznika moc do", "30 W", "15,4 W", "60 W", "100 W", "Urządzenie otrzymuje 25,5 W."),
        Q("Urządzenie zasilające PoE wpięte między przełącznik bez PoE a punkt dostępowy to", "injector (wstrzykiwacz) PoE", "splitter optyczny", "konwerter mediów", "repeater", "Injector pełni funkcję PSE."),
        Q("Mapa cieplna (heatmap) w projektowaniu sieci Wi-Fi powstaje w wyniku", "pomiaru site survey", "testu wiremap", "pomiaru OTDR", "audytu licencji", "Pokazuje siłę sygnału na planie budynku.")
      ]
    }
  ]);

  pod("INF.08", [
    {
      id: "routing-statyczny", tytul: "Routing statyczny", opis: "Odczytasz tablicę routingu i skonfigurujesz trasy statyczne, domyślne i zapasowe dla IPv4 i IPv6.",
      lekcje: [
        { tytul: "Tablica routingu i wybór trasy", tresc: `<h4>Jak router wybiera trasę</h4>
<ol><li><b>Najdłuższe dopasowanie prefiksu</b>: wygrywa trasa o najdłuższej masce pasującej do adresu docelowego, niezależnie od źródła trasy.</li>
<li>Przy tym samym prefiksie z różnych źródeł decyduje <b>odległość administracyjna (AD)</b>: niższa jest bardziej wiarygodna.</li>
<li>Przy tym samym źródle decyduje <b>metryka</b> protokołu (liczba skoków, koszt).</li></ol>
<p>Przykład: w tablicy są trasy 10.0.0.0/8, 10.1.0.0/16 i 10.1.1.0/24. Pakiet do 10.1.1.5 pójdzie trasą /24, pakiet do 10.1.2.5 trasą /16, do 10.200.0.1 trasą /8.</p>
<h4>Odległości administracyjne (Cisco)</h4>
<div class="tw"><table><tr><th>Źródło trasy</th><th>AD</th></tr>
<tr><td>sieć bezpośrednio podłączona</td><td>0</td></tr>
<tr><td>trasa statyczna</td><td>1</td></tr>
<tr><td>eBGP</td><td>20</td></tr>
<tr><td>EIGRP (wewnętrzny)</td><td>90</td></tr>
<tr><td>OSPF</td><td>110</td></tr>
<tr><td>IS-IS</td><td>115</td></tr>
<tr><td>RIP</td><td>120</td></tr>
<tr><td>iBGP</td><td>200</td></tr></table></div>
<h4>Kody w show ip route</h4>
<p><b>C</b> sieć podłączona, <b>L</b> adres lokalny interfejsu (/32), <b>S</b> statyczna, <b>S*</b> statyczna domyślna (kandydat na trasę domyślną), <b>O</b> OSPF, <b>O IA</b> OSPF między obszarami, <b>R</b> RIP, <b>D</b> EIGRP, <b>B</b> BGP. Wpis typu <code>O 192.168.3.0/24 [110/2] via 10.0.0.2, 00:05:12, Serial0/0/0</code> oznacza: AD 110, metryka 2, następny skok 10.0.0.2, interfejs wyjściowy S0/0/0.</p>
<h4>Gateway of last resort</h4>
<p>Linia „Gateway of last resort is not set” oznacza brak trasy domyślnej: pakiety do sieci spoza tablicy są odrzucane i router odsyła ICMP „destination unreachable”. Po skonfigurowaniu trasy 0.0.0.0/0 linia wskazuje następny skok.</p>
<h4>Sieć podłączona</h4>
<p>Trasa C pojawia się dopiero wtedy, gdy interfejs ma adres IP i jest w stanie <b>up/up</b>. Stan administratively down oznacza brak <code>no shutdown</code>; stan up/down na łączu szeregowym to zwykle brak clock rate po stronie DCE lub niezgodna enkapsulacja.</p>
<div class="tip">Najdłuższe dopasowanie ma pierwszeństwo przed AD. Trasa RIP /24 (AD 120) wygra z trasą statyczną /16 (AD 1), jeśli adres docelowy pasuje do obu, bo prefiks /24 jest dłuższy.</div>` },
        { tytul: "Konfiguracja tras statycznych", tresc: `<h4>Składnia IPv4</h4>
<pre>ip route sieć_docelowa maska {następny_skok | interfejs_wyjściowy} [AD]</pre>
<ul><li><b>Z następnym skokiem</b>: <code>ip route 192.168.2.0 255.255.255.0 10.0.0.2</code>. Router musi wyszukać trasę do 10.0.0.2 (wyszukiwanie rekurencyjne).</li>
<li><b>Z interfejsem wyjściowym</b>: <code>ip route 192.168.2.0 255.255.255.0 s0/0/0</code>. Zalecana na łączach punkt-punkt; na Ethernet daje dużo zapytań ARP.</li>
<li><b>W pełni określona</b>: <code>ip route 192.168.2.0 255.255.255.0 g0/1 10.0.0.2</code>, zalecana dla interfejsów wielodostępowych (Ethernet).</li></ul>
<h4>Przykład topologii</h4>
<p>LAN1 192.168.1.0/24 za R1, LAN2 192.168.2.0/24 za R2, łącze R1-R2 10.0.0.0/30 (R1 .1, R2 .2).</p>
<pre>R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
R2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1</pre>
<p>Trasa musi istnieć w <b>obu kierunkach</b>, inaczej pakiet dotrze, ale odpowiedź nie wróci (ping nie przejdzie).</p>
<h4>Trasa domyślna</h4>
<pre>R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1</pre>
<p>Stosowana na routerze brzegowym w stronę dostawcy internetu i w sieciach typu stub (z jednym wyjściem).</p>
<h4>Trasa pływająca (zapasowa)</h4>
<pre>R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
R1(config)# ip route 0.0.0.0 0.0.0.0 198.51.100.1 5</pre>
<p>Druga trasa ma AD 5, więc trafia do tablicy dopiero wtedy, gdy główna zniknie (np. interfejs przejdzie w stan down). Zapasowa trasa statyczna dla OSPF musi mieć AD większe niż 110, np. 130.</p>
<h4>IPv6</h4>
<pre>R1(config)# ipv6 unicast-routing
R1(config)# ipv6 route 2001:db8:acad:2::/64 2001:db8:acad:f::2
R1(config)# ipv6 route ::/0 2001:db8:acad:f::2
R1(config)# ipv6 route 2001:db8:acad:2::/64 g0/1 fe80::2</pre>
<p>Gdy następnym skokiem jest adres link-local, trzeba też podać interfejs wyjściowy.</p>
<h4>Weryfikacja</h4>
<p><code>show ip route static</code>, <code>show ipv6 route</code>, <code>ping</code>, <code>traceroute</code>. Usunięcie trasy: to samo polecenie poprzedzone <code>no</code>.</p>
<div class="tip">Na egzaminie praktycznym typowym błędem jest pomylenie maski lub wskazanie jako następnego skoku własnego adresu routera. Następny skok to zawsze adres sąsiada na wspólnym łączu.</div>` },
        { tytul: "Sumaryzacja i diagnostyka routingu", tresc: `<h4>Sumaryzacja tras statycznych</h4>
<p>Za R2 znajdują się sieci 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24 i 172.16.3.0/24. Zamiast czterech tras wystarczy jedna:</p>
<pre>R1(config)# ip route 172.16.0.0 255.255.252.0 10.0.0.2</pre>
<p>Metoda: zapisz zmieniający się oktet binarnie (0 = 00000000, 3 = 00000011), policz wspólne bity od lewej (6 bitów w trzecim oktecie), dodaj do 16 bitów z pierwszych oktetów: <b>/22</b>. Sumaryzacja musi obejmować tylko sieci osiągalne tą drogą, inaczej powstaje <b>czarna dziura</b> lub pętla.</p>
<h4>Pętle routingu i trasa do Null0</h4>
<p>Jeżeli R1 ma trasę domyślną do ISP, a ISP ma trasę sumaryczną do R1, pakiety do nieistniejącej podsieci z zakresu sumarycznego krążyłyby między nimi do wyczerpania <b>TTL</b>. Rozwiązaniem jest trasa do interfejsu Null0 dla całego zakresu: <code>ip route 172.16.0.0 255.255.0.0 null0</code>. Dłuższe prefiksy nadal są wybierane, a nieistniejące podsieci odrzucane.</p>
<h4>Narzędzia diagnostyczne</h4>
<ul><li><code>ping</code>: znak <b>!</b> odpowiedź, <b>.</b> przekroczony czas, <b>U</b> cel nieosiągalny (odpowiedź ICMP od routera). Rozszerzony ping (samo <code>ping</code> w trybie uprzywilejowanym) pozwala wybrać adres źródłowy.</li>
<li><code>traceroute</code> (Windows: <code>tracert</code>): pokazuje kolejne routery, wykorzystując rosnące TTL i komunikaty ICMP Time Exceeded.</li>
<li><code>show ip interface brief</code>: adresy i stany interfejsów.</li>
<li><code>show interfaces s0/0/0</code>: enkapsulacja, błędy, przepustowość.</li>
<li><code>show controllers s0/0/0</code>: czy kabel jest DCE czy DTE i czy ustawiono clock rate.</li>
<li><code>show cdp neighbors</code>: sąsiednie urządzenia Cisco (protokół CDP; standardowy odpowiednik to LLDP).</li></ul>
<h4>Metodyka szukania błędu</h4>
<ol><li>Warstwa 1: kable, stan interfejsów, clock rate.</li>
<li>Warstwa 2: enkapsulacja (HDLC/PPP), VLAN.</li>
<li>Warstwa 3: adresy i maski na obu końcach, trasy w obu kierunkach, ACL.</li>
<li>Test od najbliższego punktu: brama, łącze między routerami, sieć zdalna.</li></ol>
<div class="tip">Ping z routera domyślnie ma źródło w adresie interfejsu wyjściowego, a nie w LAN. Ping może przejść z routera, a z komputera w LAN nie, gdy sąsiad nie ma trasy powrotnej do LAN.</div>` }
      ],
      pytania: [
        Q("Odległość administracyjna trasy statycznej w routerach Cisco wynosi domyślnie", "1", "0", "110", "120", "0 ma sieć bezpośrednio podłączona."),
        Q("Pakiet do 10.1.1.5 przy trasach 10.0.0.0/8, 10.1.0.0/16 i 10.1.1.0/24 zostanie wysłany trasą", "10.1.1.0/24", "10.0.0.0/8", "10.1.0.0/16", "domyślną", "Wygrywa najdłuższe dopasowanie prefiksu."),
        Q("Polecenie konfigurujące trasę domyślną przez 203.0.113.1 to", "ip route 0.0.0.0 0.0.0.0 203.0.113.1", "ip route 255.255.255.255 0.0.0.0 203.0.113.1", "ip default-network 203.0.113.1 0.0.0.0", "route add default 203.0.113.1", "Sieć 0.0.0.0 z maską 0.0.0.0."),
        Q("Trasa statyczna z odległością administracyjną ustawioną ręcznie na 5, używana dopiero po awarii trasy głównej, to trasa", "pływająca", "sumaryczna", "domyślna", "bezpośrednia", "Floating static route."),
        Q("Kod L w tablicy routingu oznacza", "adres lokalny interfejsu routera", "sieć bezpośrednio podłączoną do routera", "trasę poznaną z protokołu RIP", "trasę zapasową z większym dystansem", "Wpis /32 dla adresu interfejsu. Sieć podłączona ma kod C, RIP kod R."),
        Q("Aby zapasowa trasa statyczna nie wypierała trasy OSPF, jej AD powinna wynosić np.", "130", "1", "90", "100", "Musi być większa niż 110."),
        Q("Sieci 192.168.4.0/24 do 192.168.7.0/24 sumaryzuje trasa", "192.168.4.0/22", "192.168.0.0/22", "192.168.4.0/23", "192.168.4.0/21", "4 = 00000100, 7 = 00000111, wspólne 6 bitów."),
        Q("Symbol U w wyniku polecenia ping na routerze Cisco oznacza", "cel nieosiągalny", "poprawną odpowiedź", "przekroczony czas oczekiwania", "nieznany pakiet", "Router odesłał ICMP unreachable.")
      ]
    },
    {
      id: "routing-dynamiczny", tytul: "Routing dynamiczny OSPF i RIP", opis: "Skonfigurujesz OSPF i RIPv2, zrozumiesz wybór tras, metryki i sąsiedztwa oraz rozpoznasz typowe usterki.",
      lekcje: [
        { tytul: "Rodzaje protokołów routingu", tresc: `<h4>Podział</h4>
<div class="tw"><table><tr><th>Cecha</th><th>Wektora odległości</th><th>Stanu łącza</th></tr>
<tr><td>Przykłady</td><td>RIP, (EIGRP: zaawansowany wektor odległości)</td><td>OSPF, IS-IS</td></tr>
<tr><td>Wiedza routera</td><td>tylko od sąsiadów („plotki”)</td><td>pełna mapa topologii obszaru</td></tr>
<tr><td>Algorytm</td><td>Bellman-Ford (RIP), DUAL (EIGRP)</td><td>Dijkstra SPF</td></tr>
<tr><td>Zbieżność</td><td>wolniejsza</td><td>szybka</td></tr>
<tr><td>Zasoby</td><td>niskie</td><td>więcej pamięci i CPU</td></tr></table></div>
<p>Protokoły <b>IGP</b> działają wewnątrz systemu autonomicznego (RIP, OSPF, EIGRP, IS-IS), a <b>EGP</b> między systemami autonomicznymi: jedynym używanym jest <b>BGP</b> (wektor ścieżki, TCP 179). Protokoły <b>bezklasowe</b> (RIPv2, OSPF, EIGRP) przesyłają maskę i obsługują VLSM; RIPv1 jest klasowy.</p>
<h4>RIPv2</h4>
<ul><li>Metryka: <b>liczba skoków</b>, maksymalnie <b>15</b>; 16 oznacza sieć nieosiągalną.</li>
<li>Aktualizacje całej tablicy co <b>30 s</b> na adres multicast <b>224.0.0.9</b> (RIPv1 rozgłoszeniowo), port UDP 520.</li>
<li>Mechanizmy zapobiegania pętlom: split horizon, route poisoning, hold-down timers.</li>
<li>Nie uwzględnia przepustowości: wybierze trasę przez 2 wolne łącza zamiast 3 szybkich.</li></ul>
<pre>R1(config)# router rip
R1(config-router)# version 2
R1(config-router)# no auto-summary
R1(config-router)# network 192.168.1.0
R1(config-router)# network 10.0.0.0
R1(config-router)# passive-interface g0/0
R1(config-router)# default-information originate</pre>
<p>Polecenie <code>network</code> w RIP podaje się w postaci klasowej. <code>no auto-summary</code> wyłącza automatyczną sumaryzację do granic klas (inaczej sieci nieciągłe przestaną działać). <code>passive-interface</code> blokuje wysyłanie aktualizacji w stronę LAN, a <code>default-information originate</code> rozgłasza trasę domyślną.</p>
<h4>EIGRP w skrócie</h4>
<p>Protokół Cisco (od 2013 r. częściowo otwarty), AD 90, metryka złożona (domyślnie przepustowość i opóźnienie), trasy zapasowe (feasible successor), zbieżność bardzo szybka. Konfiguracja: <code>router eigrp 100</code>, <code>network 10.0.0.0 0.0.0.3</code>. Sąsiedzi muszą mieć ten sam numer AS.</p>
<div class="tip">Pytanie typu „który protokół ma maksymalnie 15 skoków” dotyczy RIP. Gdy sieć ma ponad 15 routerów na ścieżce, RIP jej nie obsłuży.</div>` },
        { tytul: "OSPF: konfiguracja jednoobszarowa", tresc: `<h4>Podstawy OSPF</h4>
<ul><li>Otwarty standard stanu łącza, AD <b>110</b>, metryka <b>koszt</b>.</li>
<li>Koszt = przepustowość referencyjna / przepustowość interfejsu; domyślnie referencja 100 Mb/s, więc FastEthernet i GigabitEthernet mają ten sam koszt 1, Ethernet 10 Mb/s koszt 10, łącze 1,544 Mb/s koszt 64.</li>
<li>Zmiana referencji na wszystkich routerach: <code>auto-cost reference-bandwidth 10000</code> (w Mb/s); wtedy 1 Gb/s ma koszt 10, 10 Gb/s koszt 1.</li>
<li>Obszar szkieletowy to <b>area 0</b>; wszystkie inne obszary muszą się z nim łączyć.</li>
<li>Adresy multicast: <b>224.0.0.5</b> (wszystkie routery OSPF), <b>224.0.0.6</b> (DR i BDR). OSPF działa bezpośrednio na IP (protokół 89).</li></ul>
<h4>Konfiguracja</h4>
<pre>R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0
R1(config-router)# passive-interface g0/0
R1(config-router)# default-information originate</pre>
<p>Numer procesu (tu 1) ma znaczenie tylko lokalne i może różnić się między routerami. Polecenie <code>network</code> używa <b>maski odwrotnej (wildcard)</b>: 255.255.255.255 minus maska, np. /24 to 0.0.0.255, /30 to 0.0.0.3. Alternatywnie włącza się OSPF na interfejsie: <code>ip ospf 1 area 0</code>. Koszt interfejsu można nadpisać: <code>ip ospf cost 50</code>.</p>
<h4>Router ID</h4>
<p>Kolejność wyboru: 1) polecenie <code>router-id</code>, 2) najwyższy adres IP interfejsu loopback, 3) najwyższy adres IP aktywnego interfejsu fizycznego. Zmiana RID wymaga <code>clear ip ospf process</code>.</p>
<h4>DR i BDR</h4>
<p>W sieciach wielodostępowych (Ethernet) wybierany jest router desygnowany (DR) i zapasowy (BDR), aby ograniczyć liczbę wymian. Wygrywa najwyższy <b>priorytet</b> interfejsu (domyślnie 1, wartość 0 wyklucza z wyboru), przy remisie najwyższy Router ID. Wybór nie jest wywłaszczający: nowy router o wyższym priorytecie nie przejmie roli od razu. Na łączach punkt-punkt DR nie jest wybierany.</p>
<h4>Weryfikacja</h4>
<p><code>show ip ospf neighbor</code> (stan <b>FULL</b> oznacza pełne sąsiedztwo; z routerami DROTHER stan 2-WAY jest prawidłowy), <code>show ip protocols</code>, <code>show ip ospf interface brief</code>, <code>show ip route ospf</code>.</p>
<div class="tip">Na egzaminie łatwo pomylić maskę z wildcard. Jeśli wpiszesz network 10.0.0.0 255.255.255.252 area 0, IOS przyjmie polecenie, ale dopasuje zupełnie inne interfejsy.</div>` },
        { tytul: "Sąsiedztwo OSPF i rozwiązywanie problemów", tresc: `<h4>Pakiety OSPF</h4>
<div class="tw"><table><tr><th>Typ</th><th>Nazwa</th><th>Rola</th></tr>
<tr><td>1</td><td>Hello</td><td>wykrywanie i utrzymanie sąsiadów</td></tr>
<tr><td>2</td><td>DBD</td><td>opis bazy stanu łącza</td></tr>
<tr><td>3</td><td>LSR</td><td>żądanie brakujących wpisów</td></tr>
<tr><td>4</td><td>LSU</td><td>aktualizacja (zawiera LSA)</td></tr>
<tr><td>5</td><td>LSAck</td><td>potwierdzenie</td></tr></table></div>
<h4>Stany sąsiedztwa</h4>
<p>Down, Init (odebrano Hello), <b>2-Way</b> (router widzi swój RID w Hello sąsiada), ExStart (ustalenie, kto zaczyna wymianę), Exchange (wymiana DBD), Loading (pobieranie LSA), <b>Full</b> (bazy zsynchronizowane).</p>
<h4>Warunki nawiązania sąsiedztwa</h4>
<ul><li>Ta sama podsieć i maska na łączu.</li>
<li>Ten sam numer obszaru.</li>
<li>Te same timery <b>Hello</b> i <b>Dead</b> (na Ethernet domyślnie 10 s i 40 s, na łączach NBMA 30 s i 120 s).</li>
<li>To samo uwierzytelnianie (typ i hasło).</li>
<li>Ten sam MTU (inaczej sąsiedztwo zatrzymuje się na ExStart/Exchange).</li>
<li>Unikalne Router ID.</li>
<li>Interfejs nie może być pasywny.</li></ul>
<h4>OSPF wieloobszarowy</h4>
<p>Duże sieci dzieli się na obszary, aby ograniczyć rozmiar bazy i obliczenia SPF. Router na granicy obszarów to <b>ABR</b>, na granicy z innym protokołem lub internetem <b>ASBR</b>. Trasy z innych obszarów mają w tablicy kod <b>O IA</b>, trasy zewnętrzne <b>O E2</b> (domyślnie) lub O E1.</p>
<h4>OSPFv3 dla IPv6</h4>
<pre>R1(config)# ipv6 unicast-routing
R1(config)# ipv6 router ospf 10
R1(config-rtr)# router-id 1.1.1.1
R1(config)# interface g0/0
R1(config-if)# ipv6 ospf 10 area 0</pre>
<p>OSPFv3 konfiguruje się na interfejsach, sąsiedzi komunikują się adresami link-local, multicast ff02::5 i ff02::6. Router ID jest nadal 32-bitową liczbą w zapisie kropkowym: gdy router nie ma żadnego adresu IPv4, trzeba go ustawić ręcznie.</p>
<h4>Uwierzytelnianie</h4>
<pre>R1(config-if)# ip ospf authentication message-digest
R1(config-if)# ip ospf message-digest-key 1 md5 Tajne</pre>
<div class="tip">Sąsiedztwo zablokowane na stanie Init lub brak sąsiada: sprawdź kolejno podsieć, obszar, timery Hello/Dead (show ip ospf interface), uwierzytelnianie i passive-interface. Debugowanie: debug ip ospf adj.</div>` }
      ],
      pytania: [
        Q("Maksymalna liczba skoków dla osiągalnej sieci w protokole RIP wynosi", "15", "16", "255", "30", "16 oznacza sieć nieosiągalną."),
        Q("Odległość administracyjna OSPF wynosi", "110", "90", "120", "1", "EIGRP 90, RIP 120."),
        Q("Maska odwrotna (wildcard) dla podsieci /27 to", "0.0.0.31", "0.0.0.32", "255.255.255.224", "0.0.0.63", "255 - 224 = 31."),
        Q("Przy domyślnej przepustowości referencyjnej koszt OSPF interfejsu GigabitEthernet wynosi", "1", "10", "0", "100", "100 Mb/s / 1000 Mb/s < 1, zaokrąglane do 1."),
        Q("Router ID OSPF, gdy nie skonfigurowano go ręcznie, to w pierwszej kolejności", "najwyższy adres IP interfejsu loopback", "najniższy adres IP interfejsu fizycznego", "adres MAC routera", "numer procesu OSPF", "Potem najwyższy adres aktywnego interfejsu."),
        Q("Stan sąsiedztwa OSPF oznaczający pełną synchronizację baz to", "Full", "2-Way", "ExStart", "Init", "Full po wymianie LSA."),
        Q("Który warunek musi być spełniony, aby dwa routery OSPF zostały sąsiadami?", "zgodne timery Hello i Dead", "ten sam numer procesu OSPF", "ten sam Router ID", "ten sam priorytet", "Numer procesu ma znaczenie lokalne."),
        Q("Protokół routingu stosowany między systemami autonomicznymi w internecie to", "BGP", "OSPF", "RIPv2", "EIGRP", "BGP jest protokołem EGP.")
      ]
    },
    {
      id: "nat-acl", tytul: "NAT i listy ACL", opis: "Skonfigurujesz translację adresów NAT/PAT i listy kontroli dostępu chroniące sieć firmową.",
      lekcje: [
        { tytul: "Rodzaje NAT i konfiguracja", tresc: `<h4>Terminologia</h4>
<div class="tw"><table><tr><th>Termin</th><th>Znaczenie</th><th>Przykład</th></tr>
<tr><td>inside local</td><td>prywatny adres hosta w LAN</td><td>192.168.1.10</td></tr>
<tr><td>inside global</td><td>publiczny adres, pod którym host jest widoczny w internecie</td><td>203.0.113.5</td></tr>
<tr><td>outside global</td><td>rzeczywisty adres hosta zewnętrznego</td><td>8.8.8.8</td></tr>
<tr><td>outside local</td><td>adres hosta zewnętrznego widziany z LAN (zwykle równy outside global)</td><td>8.8.8.8</td></tr></table></div>
<h4>NAT statyczny</h4>
<p>Odwzorowanie jeden do jednego, stosowane dla serwerów dostępnych z internetu.</p>
<pre>R1(config)# ip nat inside source static 192.168.1.10 203.0.113.10
R1(config)# interface g0/0
R1(config-if)# ip nat inside
R1(config)# interface g0/1
R1(config-if)# ip nat outside</pre>
<h4>NAT dynamiczny z pulą</h4>
<pre>R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255
R1(config)# ip nat pool PULA 203.0.113.20 203.0.113.30 netmask 255.255.255.0
R1(config)# ip nat inside source list 1 pool PULA</pre>
<p>Gdy wszystkie adresy z puli są zajęte, kolejny host nie uzyska dostępu do internetu.</p>
<h4>PAT (NAT z przeciążeniem)</h4>
<p>Wiele hostów korzysta z jednego adresu publicznego, rozróżnianych <b>numerami portów</b>. Tak działa każdy domowy router.</p>
<pre>R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255
R1(config)# ip nat inside source list 1 interface g0/1 overload</pre>
<h4>Przekierowanie portów</h4>
<pre>R1(config)# ip nat inside source static tcp 192.168.1.20 80 203.0.113.5 80</pre>
<p>Połączenia z internetu na 203.0.113.5:80 trafią do serwera WWW 192.168.1.20.</p>
<h4>Weryfikacja</h4>
<p><code>show ip nat translations</code> (tablica tłumaczeń), <code>show ip nat statistics</code>, <code>clear ip nat translation *</code> (czyszczenie wpisów dynamicznych), <code>debug ip nat</code>.</p>
<h4>Zalety i wady NAT</h4>
<p>Zalety: oszczędność adresów IPv4, ukrycie struktury sieci wewnętrznej. Wady: utrudnia działanie protokołów osadzających adresy w danych (np. niektóre VoIP, IPsec bez NAT-T), łamie łączność końcową, dodaje opóźnienie. W IPv6 NAT zasadniczo nie jest potrzebny.</p>
<div class="tip">Najczęstszy błąd: brak <code>ip nat inside</code> lub <code>ip nat outside</code> na interfejsach albo zamienione strony. Bez tego reguły NAT są poprawne, ale nic się nie tłumaczy.</div>` },
        { tytul: "Listy ACL standardowe i rozszerzone", tresc: `<h4>Zasady działania</h4>
<ul><li>Wpisy sprawdzane są <b>od góry do dołu</b>, działa pierwsze dopasowanie.</li>
<li>Na końcu każdej listy jest niewidoczne <b>deny any</b> (niejawna odmowa). Lista z samymi deny blokuje wszystko.</li>
<li>Na interfejsie może być jedna lista na protokół i na kierunek (in, out).</li>
<li>ACL wychodzące nie filtrują ruchu wygenerowanego przez sam router.</li></ul>
<h4>Rodzaje</h4>
<div class="tw"><table><tr><th>Typ</th><th>Numery</th><th>Filtruje</th><th>Umieszczenie</th></tr>
<tr><td>standardowa</td><td>1-99, 1300-1999</td><td>tylko adres źródłowy</td><td>jak najbliżej celu</td></tr>
<tr><td>rozszerzona</td><td>100-199, 2000-2699</td><td>protokół, źródło, cel, porty</td><td>jak najbliżej źródła</td></tr></table></div>
<h4>Maska odwrotna</h4>
<p>0 oznacza „bit musi się zgadzać”, 1 „dowolny”. <code>host 192.168.1.10</code> = 192.168.1.10 0.0.0.0, <code>any</code> = 0.0.0.0 255.255.255.255. Podsieć /26 192.168.1.64: <code>192.168.1.64 0.0.0.63</code>.</p>
<h4>Przykład: lista standardowa</h4>
<pre>R1(config)# access-list 10 deny 192.168.2.0 0.0.0.255
R1(config)# access-list 10 permit any
R1(config)# interface g0/0
R1(config-if)# ip access-group 10 out</pre>
<p>Blokuje dostęp sieci 192.168.2.0/24 do LAN za g0/0, pozostałe sieci mają dostęp.</p>
<h4>Przykład: lista rozszerzona</h4>
<p>Sieć 192.168.1.0/24 może przeglądać strony WWW na serwerze 10.0.0.5, ale nie może się z nim łączyć przez Telnet. Pozostały ruch dozwolony.</p>
<pre>R1(config)# access-list 110 permit tcp 192.168.1.0 0.0.0.255 host 10.0.0.5 eq 80
R1(config)# access-list 110 permit tcp 192.168.1.0 0.0.0.255 host 10.0.0.5 eq 443
R1(config)# access-list 110 deny tcp 192.168.1.0 0.0.0.255 host 10.0.0.5 eq 23
R1(config)# access-list 110 permit ip any any
R1(config)# interface g0/1
R1(config-if)# ip access-group 110 in</pre>
<p>Operatory portów: <code>eq</code> (równy), <code>gt</code>, <code>lt</code>, <code>neq</code>, <code>range 20 21</code>. Słowo <code>established</code> przepuszcza tylko odpowiedzi na połączenia TCP zainicjowane z wewnątrz.</p>
<h4>Listy nazwane</h4>
<pre>R1(config)# ip access-list extended BLOKADA
R1(config-ext-nacl)# 15 deny icmp any host 10.0.0.5
R1(config-ext-nacl)# permit ip any any</pre>
<p>Numery sekwencji (domyślnie 10, 20, 30) pozwalają wstawiać i usuwać pojedyncze wpisy.</p>
<div class="tip">Kolejność ma znaczenie: wpis ogólny (permit ip any any) przed szczegółowym deny sprawi, że deny nigdy nie zadziała. Od szczegółu do ogółu.</div>` },
        { tytul: "Zabezpieczanie urządzeń i dostęp zdalny", tresc: `<h4>Ograniczenie dostępu do linii VTY</h4>
<pre>R1(config)# access-list 5 permit host 192.168.1.100
R1(config)# line vty 0 4
R1(config-line)# access-class 5 in</pre>
<p>Na liniach VTY używa się polecenia <code>access-class</code>, a nie <code>ip access-group</code>. Tylko stacja administratora 192.168.1.100 może się połączyć przez SSH.</p>
<h4>Zabezpieczenie routera</h4>
<ul><li><code>enable secret</code> zamiast <code>enable password</code>, <code>service password-encryption</code>.</li>
<li><code>security passwords min-length 10</code>: minimalna długość haseł.</li>
<li><code>login block-for 120 attempts 3 within 60</code>: blokada logowania na 120 s po 3 nieudanych próbach w ciągu 60 s.</li>
<li><code>exec-timeout 5 0</code> na liniach: wylogowanie po 5 minutach bezczynności.</li>
<li>SSH w wersji 2, wyłączony Telnet i HTTP (<code>no ip http server</code>), wyłączone nieużywane usługi (CDP na interfejsach zewnętrznych: <code>no cdp enable</code>).</li>
<li>Kopia konfiguracji: <code>copy running-config tftp</code>, aktualizacja IOS z serwera TFTP.</li></ul>
<h4>AAA</h4>
<p><b>Authentication</b> (kim jesteś), <b>Authorization</b> (co możesz), <b>Accounting</b> (co zrobiłeś). Serwery:</p>
<div class="tw"><table><tr><th>Cecha</th><th>RADIUS</th><th>TACACS+</th></tr>
<tr><td>Transport</td><td>UDP 1812/1813</td><td>TCP 49</td></tr>
<tr><td>Szyfrowanie</td><td>tylko hasło</td><td>cały pakiet</td></tr>
<tr><td>Rozdzielenie AAA</td><td>uwierzytelnianie i autoryzacja razem</td><td>oddzielnie</td></tr>
<tr><td>Standard</td><td>otwarty</td><td>Cisco</td></tr></table></div>
<pre>R1(config)# aaa new-model
R1(config)# radius server SRV1
R1(config-radius-server)# address ipv4 192.168.1.50
R1(config-radius-server)# key Klucz123
R1(config)# aaa authentication login default group radius local</pre>
<p>Słowo <code>local</code> na końcu to metoda zapasowa: lokalne konta, gdy serwer jest niedostępny.</p>
<h4>Zapory i DMZ</h4>
<p>Zapora <b>bezstanowa</b> (ACL) ocenia każdy pakiet osobno. <b>Stanowa</b> śledzi połączenia i automatycznie przepuszcza odpowiedzi. Zapora nowej generacji (NGFW) rozpoznaje aplikacje, ma IPS i filtrowanie treści. <b>DMZ</b> to strefa dla serwerów publicznych (WWW, poczta), oddzielona od LAN: z internetu wolno wejść do DMZ, ale nie do LAN.</p>
<div class="tip">Przy pracy zdalnej z ACL na VTY zawsze najpierw dodaj wpis dla swojej stacji. Błędna lista może odciąć cię od routera i wymagać dostępu przez konsolę.</div>` }
      ],
      pytania: [
        Q("Listę ACL standardową należy umieścić", "jak najbliżej celu", "jak najbliżej źródła", "zawsze na interfejsie WAN", "zawsze w kierunku in", "Filtruje tylko źródło, więc blisko źródła zablokowałaby za dużo."),
        Q("Numery list ACL rozszerzonych IPv4 to", "100-199", "1-99", "200-299", "600-699", "Oraz zakres 2000-2699."),
        Q("Na końcu każdej listy ACL znajduje się niejawny wpis", "deny any", "permit any", "deny tcp any any eq 80", "log", "Niejawna odmowa."),
        Q("Słowo overload w poleceniu ip nat inside source list 1 interface g0/1 overload oznacza", "PAT, czyli translację z użyciem numerów portów", "NAT statyczny jeden do jednego dla hosta", "NAT dynamiczny z pulą adresów bez portów", "przekierowanie portu do serwera wewnętrznego", "NAT z przeciążeniem."),
        Q("Prywatny adres hosta w sieci wewnętrznej w terminologii NAT to", "inside local", "inside global", "outside global", "outside local", "Inside global to adres publiczny hosta."),
        Q("Do ograniczenia dostępu do linii VTY za pomocą ACL służy polecenie", "access-class", "ip access-group", "ip nat inside", "transport input", "access-class w trybie line vty."),
        Q("Wpis access-list 110 deny tcp any host 10.0.0.5 eq 23 blokuje", "Telnet do hosta 10.0.0.5", "SSH do 10.0.0.5", "cały ruch z 10.0.0.5", "WWW do 10.0.0.5", "Port 23 to Telnet."),
        Q("Protokół AAA szyfrujący cały pakiet i działający na TCP 49 to", "TACACS+", "RADIUS", "LDAP", "Kerberos", "RADIUS szyfruje tylko hasło.")
      ]
    },
    {
      id: "wan", tytul: "Technologie WAN i dostępowe", opis: "Dobierzesz technologię dostępu do internetu i skonfigurujesz łącza szeregowe, PPP i PPPoE.",
      lekcje: [
        { tytul: "Technologie dostępowe", tresc: `<h4>xDSL</h4>
<p>Transmisja po miedzianej parze telefonicznej. <b>ADSL</b> jest asymetryczny (ADSL2+ do 24 Mb/s pobieranie, około 1 Mb/s wysyłanie), <b>VDSL2</b> daje do około 100 Mb/s (z wektoryzacją więcej) na krótkich odległościach, do kilkuset metrów od szafki. Prędkość silnie maleje z odległością. <b>Splitter</b> lub <b>mikrofiltr</b> rozdziela pasmo telefoniczne (POTS) od DSL. Po stronie operatora sygnały zbiera <b>DSLAM</b>.</p>
<h4>Sieci kablowe (HFC)</h4>
<p>Światłowód do węzła i koncentryk do budynku. Standard <b>DOCSIS</b> (3.0, 3.1, 4.0), modem kablowy, po stronie operatora <b>CMTS</b>. Pasmo jest współdzielone przez użytkowników w węźle.</p>
<h4>FTTH i GPON</h4>
<div class="tw"><table><tr><th>Element</th><th>Opis</th></tr>
<tr><td>OLT</td><td>urządzenie operatora w centrali</td></tr>
<tr><td>splitter</td><td>pasywny dzielnik optyczny 1:32 lub 1:64</td></tr>
<tr><td>ONT / ONU</td><td>terminal u abonenta</td></tr></table></div>
<p><b>GPON</b> (ITU-T G.984): 2,488 Gb/s do abonenta, 1,244 Gb/s od abonenta, współdzielone przez wszystkich za splitterem, zasięg do 20 km. Długości fal: <b>1490 nm</b> w dół, <b>1310 nm</b> w górę, 1550 nm dla telewizji. <b>XGS-PON</b>: około 10 Gb/s symetrycznie. Sieć jest pasywna: między OLT i ONT nie ma zasilanych urządzeń. FTTB doprowadza światłowód do budynku, dalej skrętka; FTTC do szafki ulicznej, dalej VDSL.</p>
<h4>Sieci komórkowe i satelitarne</h4>
<ul><li><b>LTE (4G)</b>: kilkadziesiąt do kilkuset Mb/s, LTE-Advanced z agregacją pasm.</li>
<li><b>5G</b>: wysokie przepływności, niskie opóźnienia (kilka ms), pasma poniżej 6 GHz i fale milimetrowe.</li>
<li><b>Satelita geostacjonarny</b> (36 000 km): opóźnienie w obie strony około 500-600 ms, niekorzystne dla VoIP i gier. Konstelacje <b>LEO</b> (np. kilkaset km nad Ziemią) dają opóźnienia rzędu 20-50 ms.</li></ul>
<h4>Łącza dla firm</h4>
<p><b>Łącze dzierżawione</b> (dedykowane, gwarantowana przepustowość, wysoki koszt), <b>Metro Ethernet</b> (usługi Ethernet w sieci miejskiej operatora), <b>MPLS</b> (sieć operatora przełączająca na podstawie etykiet, VPN warstwy 2 i 3, klasy jakości), <b>SD-WAN</b> (programowe zarządzanie wieloma łączami, w tym internetowymi). Starsze: ISDN, Frame Relay, ATM (komórki 53 bajty), E1 2,048 Mb/s (w Europie, 32 kanały po 64 kb/s), T1 1,544 Mb/s.</p>
<div class="tip">SLA (Service Level Agreement) to umowa z operatorem gwarantująca dostępność (np. 99,9%, czyli około 8,76 godziny przerwy w roku), czas naprawy i parametry łącza.</div>` },
        { tytul: "Łącza szeregowe, HDLC i PPP", tresc: `<h4>DTE i DCE</h4>
<p>W łączu szeregowym urządzenie <b>DCE</b> (modem, CSU/DSU, w laboratorium jedna strona kabla) dostarcza sygnał zegarowy, a <b>DTE</b> (router) z niego korzysta. Na routerze po stronie kabla DCE trzeba ustawić zegar:</p>
<pre>R1(config)# interface s0/0/0
R1(config-if)# ip address 10.0.0.1 255.255.255.252
R1(config-if)# clock rate 64000
R1(config-if)# no shutdown</pre>
<p>Stronę kabla sprawdza się poleceniem <code>show controllers s0/0/0</code>. Brak clock rate po stronie DCE to stan <b>up/down</b> (protokół łącza nie wstaje). Polecenie <code>bandwidth 64</code> (w kb/s) nie zmienia prędkości, tylko informuje protokoły routingu przy liczeniu metryki.</p>
<h4>HDLC</h4>
<p>Protokół warstwy 2 dla łączy szeregowych. Cisco HDLC jest <b>domyślny</b> na interfejsach szeregowych routerów Cisco, ale ma pole typu protokołu własne Cisco, więc nie współpracuje z urządzeniami innych producentów. W łączach wielu producentów stosuje się PPP.</p>
<h4>PPP</h4>
<ul><li>Otwarty standard, składa się z <b>LCP</b> (zestawienie, testowanie i negocjacja łącza, uwierzytelnianie, kompresja) i <b>NCP</b> (konfiguracja protokołów warstwy 3: IPCP dla IPv4, IPv6CP).</li>
<li>Fazy: zestawienie łącza (LCP), opcjonalne uwierzytelnianie, konfiguracja warstwy sieci (NCP).</li>
<li>Obsługuje Multilink PPP (łączenie kilku łączy).</li></ul>
<h4>Uwierzytelnianie PAP i CHAP</h4>
<div class="tw"><table><tr><th>Cecha</th><th>PAP</th><th>CHAP</th></tr>
<tr><td>Wymiana</td><td>dwuetapowa</td><td>trzyetapowa (wyzwanie, odpowiedź, potwierdzenie)</td></tr>
<tr><td>Hasło</td><td>przesyłane jawnym tekstem</td><td>nie jest przesyłane, tylko skrót MD5</td></tr>
<tr><td>Kontrola</td><td>raz, przy zestawieniu</td><td>okresowo w czasie trwania łącza</td></tr></table></div>
<pre>R1(config)# username R2 password Wspolne
R1(config)# interface s0/0/0
R1(config-if)# encapsulation ppp
R1(config-if)# ppp authentication chap

R2(config)# username R1 password Wspolne
R2(config)# interface s0/0/0
R2(config-if)# encapsulation ppp
R2(config-if)# ppp authentication chap</pre>
<p>Nazwa użytkownika to <b>hostname sąsiedniego routera</b>, a hasło musi być identyczne po obu stronach (wielkość liter ma znaczenie). Enkapsulacja musi być taka sama na obu końcach.</p>
<div class="tip">Diagnostyka PPP: show interfaces s0/0/0 (Encapsulation PPP, LCP Open), debug ppp authentication. Komunikat o nieudanym uwierzytelnianiu oznacza zwykle błąd w nazwie lub haśle.</div>` },
        { tytul: "PPPoE i topologie WAN", tresc: `<h4>PPPoE</h4>
<p>PPP over Ethernet przenosi sesję PPP w ramkach Ethernet. Stosowane w DSL i części sieci światłowodowych: abonent loguje się nazwą i hasłem od operatora, który na tej podstawie przydziela adres i rozlicza usługę. Nagłówek PPPoE (8 bajtów) zmniejsza <b>MTU</b> do <b>1492</b> bajtów, co trzeba uwzględnić (ip mtu, ip tcp adjust-mss 1452).</p>
<pre>R1(config)# interface dialer 1
R1(config-if)# encapsulation ppp
R1(config-if)# ip address negotiated
R1(config-if)# mtu 1492
R1(config-if)# dialer pool 1
R1(config-if)# ppp chap hostname klient@isp.pl
R1(config-if)# ppp chap password Haslo
R1(config)# interface g0/1
R1(config-if)# pppoe enable
R1(config-if)# pppoe-client dial-pool-number 1
R1(config-if)# no shutdown</pre>
<p>Na routerach SOHO wybiera się w panelu WWW typ połączenia WAN: <b>PPPoE</b> (login, hasło), <b>DHCP</b> (dynamiczny adres) lub <b>statyczny IP</b> (adres, maska, brama, DNS od operatora). Często operator wymaga też tagowania ruchu WAN określonym VLAN-em (np. VLAN 35).</p>
<h4>Topologie WAN</h4>
<div class="tw"><table><tr><th>Topologia</th><th>Cechy</th></tr>
<tr><td>punkt-punkt</td><td>jedno łącze między dwiema lokalizacjami</td></tr>
<tr><td>gwiazda (hub-and-spoke)</td><td>oddziały łączą się z centralą; awaria centrali odcina oddziały od siebie</td></tr>
<tr><td>pełna siatka (full mesh)</td><td>każdy z każdym, n(n-1)/2 łączy, wysoka niezawodność i koszt</td></tr>
<tr><td>częściowa siatka</td><td>kompromis: łącza tylko między ważnymi lokalizacjami</td></tr>
<tr><td>dual-homed</td><td>lokalizacja połączona z dwoma operatorami lub dwoma routerami</td></tr></table></div>
<p>Przykład: pełna siatka dla 5 oddziałów wymaga 5 x 4 / 2 = 10 łączy, gwiazda tylko 4.</p>
<h4>Komutacja</h4>
<p><b>Komutacja łączy</b> rezerwuje kanał na czas połączenia (tradycyjna telefonia, ISDN). <b>Komutacja pakietów</b> dzieli dane na pakiety przesyłane przez współdzieloną sieć (IP, MPLS): wydajniejsza, ale bez gwarancji opóźnienia bez mechanizmów QoS.</p>
<h4>Urządzenia brzegowe</h4>
<p>Router brzegowy (CPE) u klienta, modem (DSL, kablowy), ONT, konwerter mediów (światłowód-skrętka), router LTE z kartą SIM jako łącze zapasowe. W dokumentacji zapisuje się parametry łącza: technologię, przepływność, adresy publiczne, dane PPPoE i numer umowy.</p>
<div class="tip">MTU 1500 bajtów to standard Ethernet. Przy PPPoE spadek do 1492 bajtów objawia się tym, że małe strony się ładują, a duże zawieszają: wtedy sprawdź MTU i MSS.</div>` }
      ],
      pytania: [
        Q("Na interfejsie szeregowym routera po stronie kabla DCE należy skonfigurować", "clock rate", "bandwidth", "encapsulation dot1Q", "duplex full", "DCE dostarcza sygnał zegarowy."),
        Q("Domyślną enkapsulacją interfejsów szeregowych routerów Cisco jest", "HDLC", "PPP", "Frame Relay", "PPPoE", "Cisco HDLC."),
        Q("Uwierzytelnianie PPP, w którym hasło nie jest przesyłane, a weryfikacja odbywa się metodą wyzwanie-odpowiedź, to", "CHAP", "PAP", "LCP", "IPCP", "CHAP używa skrótu MD5."),
        Q("W konfiguracji CHAP na routerze R1 polecenie username podaje", "nazwę hosta sąsiedniego routera", "własną nazwę hosta routera R1", "nazwę domeny używaną przez PPP", "nazwę interfejsu szeregowego", "Hasło musi być takie samo po obu stronach."),
        Q("Typowe MTU dla połączenia PPPoE wynosi", "1492 bajty", "1500 bajtów", "576 bajtów", "9000 bajtów", "Nagłówek PPPoE zajmuje 8 bajtów."),
        Q("W sieci GPON sygnał do abonenta przesyłany jest na fali", "1490 nm", "1310 nm", "850 nm", "1625 nm", "1310 nm to kierunek od abonenta."),
        Q("Ile łączy wymaga pełna siatka łącząca 6 lokalizacji?", "15", "6", "30", "12", "6 x 5 / 2 = 15."),
        Q("Urządzenie po stronie operatora zbierające łącza ADSL abonentów to", "DSLAM", "OLT", "CMTS", "ONT", "OLT działa w GPON, CMTS w sieciach kablowych.")
      ]
    },
    {
      id: "ipv6-vpn", tytul: "IPv6 i sieci VPN", opis: "Wdrożysz IPv6 w sieci rozległej i połączysz oddziały bezpiecznym tunelem VPN.",
      lekcje: [
        { tytul: "IPv6 na routerach", tresc: `<h4>Włączenie i adresacja</h4>
<pre>R1(config)# ipv6 unicast-routing
R1(config)# interface g0/0
R1(config-if)# ipv6 address 2001:db8:acad:1::1/64
R1(config-if)# ipv6 address fe80::1 link-local
R1(config-if)# no shutdown
R1(config)# interface s0/0/0
R1(config-if)# ipv6 address 2001:db8:acad:f::1/64
R1(config)# interface g0/1
R1(config-if)# ipv6 address 2001:db8:acad:2::/64 eui-64</pre>
<p>Ręczne ustawienie link-local (fe80::1) ułatwia rozpoznanie routera i jest zalecane, bo bramą domyślną hostów IPv6 jest zwykle adres link-local routera. Weryfikacja: <code>show ipv6 interface brief</code>, <code>show ipv6 route</code>, <code>show ipv6 neighbors</code> (odpowiednik tablicy ARP).</p>
<h4>ICMPv6 i NDP</h4>
<div class="tw"><table><tr><th>Typ</th><th>Komunikat</th><th>Rola</th></tr>
<tr><td>133</td><td>Router Solicitation (RS)</td><td>host prosi o informacje od routera</td></tr>
<tr><td>134</td><td>Router Advertisement (RA)</td><td>router ogłasza prefiks, bramę, flagi M i O</td></tr>
<tr><td>135</td><td>Neighbor Solicitation (NS)</td><td>zapytanie o adres MAC, wykrywanie duplikatów (DAD)</td></tr>
<tr><td>136</td><td>Neighbor Advertisement (NA)</td><td>odpowiedź z adresem MAC</td></tr></table></div>
<p>Flagi RA: <b>M=0, O=0</b> tylko SLAAC; <b>M=0, O=1</b> SLAAC i bezstanowy DHCPv6 (np. DNS); <b>M=1</b> stanowy DHCPv6. Zmiana na interfejsie routera: <code>ipv6 nd other-config-flag</code> lub <code>ipv6 nd managed-config-flag</code>.</p>
<h4>Bezstanowy serwer DHCPv6 na routerze</h4>
<pre>R1(config)# ipv6 dhcp pool BEZSTANOWY
R1(config-dhcpv6)# dns-server 2001:db8:acad:1::53
R1(config-dhcpv6)# domain-name firma.local
R1(config)# interface g0/0
R1(config-if)# ipv6 dhcp server BEZSTANOWY
R1(config-if)# ipv6 nd other-config-flag</pre>
<h4>Przejście z IPv4 na IPv6</h4>
<ul><li><b>Dual stack</b>: urządzenia mają jednocześnie IPv4 i IPv6, metoda zalecana.</li>
<li><b>Tunelowanie</b>: pakiety IPv6 w pakietach IPv4 (6to4, ISATAP, tunele ręczne, GRE), gdy po drodze jest tylko IPv4.</li>
<li><b>Translacja NAT64</b> z DNS64: hosty tylko z IPv6 komunikują się z serwerami IPv4.</li></ul>
<h4>Nagłówek IPv6</h4>
<p>Stała długość 40 bajtów, pole <b>Hop Limit</b> (odpowiednik TTL), Flow Label, brak sumy kontrolnej nagłówka, fragmentacja tylko po stronie nadawcy (nagłówek rozszerzeń). Routery nie fragmentują, tylko odsyłają ICMPv6 Packet Too Big; minimalne MTU łącza to 1280 bajtów.</p>
<div class="tip">Brama domyślna hosta IPv6 w poleceniu ipconfig pokazuje zwykle adres fe80::..., a nie globalny. To prawidłowe, bo komunikacja z bramą odbywa się w obrębie łącza.</div>` },
        { tytul: "VPN i IPsec", tresc: `<h4>Rodzaje VPN</h4>
<ul><li><b>Site-to-site</b>: łączy całe sieci (centrala i oddział) przez internet; tunel zestawiają routery lub zapory, hosty o nim nie wiedzą.</li>
<li><b>Remote access</b>: pojedynczy użytkownik z klientem VPN (lub przez przeglądarkę, SSL VPN) łączy się z siecią firmy.</li>
<li><b>VPN operatorski</b>: MPLS L3VPN, VPLS, realizowane w sieci dostawcy.</li></ul>
<h4>IPsec</h4>
<div class="tw"><table><tr><th>Element</th><th>Funkcja</th></tr>
<tr><td>AH (protokół IP 51)</td><td>integralność i uwierzytelnianie, bez szyfrowania, nie działa przez NAT</td></tr>
<tr><td>ESP (protokół IP 50)</td><td>szyfrowanie, integralność, uwierzytelnianie</td></tr>
<tr><td>IKE (UDP 500)</td><td>negocjacja parametrów i wymiana kluczy (IKEv1, IKEv2)</td></tr>
<tr><td>NAT-T (UDP 4500)</td><td>przenoszenie ESP przez urządzenia NAT</td></tr></table></div>
<p>Tryb <b>tunelowy</b> szyfruje cały oryginalny pakiet i dodaje nowy nagłówek IP (site-to-site). Tryb <b>transportowy</b> chroni tylko dane, zachowując oryginalny nagłówek (host-host).</p>
<h4>Kryptografia w VPN</h4>
<ul><li>Szyfrowanie symetryczne danych: <b>AES</b> (128/256 bitów); DES i 3DES są przestarzałe.</li>
<li>Integralność: <b>SHA-256</b> i wyżej (HMAC); MD5 i SHA-1 uznaje się za słabe.</li>
<li>Wymiana kluczy: <b>Diffie-Hellman</b> (grupy 14 i wyższe, ECDH).</li>
<li>Uwierzytelnianie stron: klucz współdzielony (PSK) lub certyfikaty (RSA, ECDSA).</li></ul>
<p>Fazy IKE: faza 1 tworzy bezpieczny kanał zarządzający (IKE SA), faza 2 negocjuje IPsec SA dla danych. Po obu stronach muszą zgadzać się algorytmy, klucz, a także zakresy ruchu (lista ACL określająca „interesujący ruch” musi być lustrzana).</p>
<h4>Inne protokoły tunelowe</h4>
<div class="tw"><table><tr><th>Protokół</th><th>Uwagi</th></tr>
<tr><td>GRE (protokół 47)</td><td>tunel bez szyfrowania, przenosi multicast i routing dynamiczny; często GRE over IPsec</td></tr>
<tr><td>L2TP (UDP 1701)</td><td>sam nie szyfruje, stosowany z IPsec (L2TP/IPsec)</td></tr>
<tr><td>PPTP (TCP 1723)</td><td>przestarzały, niebezpieczny</td></tr>
<tr><td>OpenVPN (UDP/TCP 1194)</td><td>oparty na TLS, popularny</td></tr>
<tr><td>WireGuard (UDP 51820)</td><td>nowoczesny, prosty, szybki</td></tr>
<tr><td>SSL/TLS VPN (TCP 443)</td><td>przechodzi przez większość zapór</td></tr></table></div>
<div class="tip">AH nie szyfruje danych. Jeśli w pytaniu chodzi o poufność transmisji w IPsec, odpowiedzią jest ESP.</div>` },
        { tytul: "Tunel GRE i połączenie oddziału", tresc: `<h4>Konfiguracja tunelu GRE</h4>
<p>Centrala R1 ma publiczny adres 203.0.113.1, oddział R2 198.51.100.2. Sieć tunelu 172.16.0.0/30.</p>
<pre>R1(config)# interface tunnel 0
R1(config-if)# ip address 172.16.0.1 255.255.255.252
R1(config-if)# tunnel source 203.0.113.1
R1(config-if)# tunnel destination 198.51.100.2
R1(config-if)# tunnel mode gre ip

R2(config)# interface tunnel 0
R2(config-if)# ip address 172.16.0.2 255.255.255.252
R2(config-if)# tunnel source 198.51.100.2
R2(config-if)# tunnel destination 203.0.113.1</pre>
<p>Ruch do sieci oddziału kieruje się do tunelu trasą statyczną (<code>ip route 192.168.20.0 255.255.255.0 172.16.0.2</code>) lub routingiem dynamicznym (OSPF na interfejsie tunnel 0). Interfejs tunelu przechodzi w stan up, gdy router ma trasę do adresu tunnel destination. Nagłówki GRE i IP zajmują 24 bajty, więc MTU tunelu ustawia się zwykle na 1476 bajtów (a z IPsec mniej, np. 1400).</p>
<h4>Plan połączenia oddziału</h4>
<ol><li>Adresacja: osobne podsieci LAN dla centrali i oddziału, bez nakładania się (np. 192.168.10.0/24 i 192.168.20.0/24).</li>
<li>Dostęp do internetu w obu lokalizacjach: trasa domyślna do ISP, PAT dla LAN.</li>
<li>Tunel VPN (IPsec lub GRE over IPsec) między adresami publicznymi.</li>
<li>Ruch między LAN-ami <b>wyłączony z NAT</b> (w ACL dla NAT najpierw deny dla ruchu do sieci zdalnej), inaczej zostanie przetłumaczony i nie trafi do tunelu.</li>
<li>Zasady zapory: przepuszczenie UDP 500, UDP 4500 i ESP z adresu partnera.</li>
<li>Testy: ping między hostami obu LAN, traceroute (tunel widać jako jeden skok), show crypto isakmp sa, show crypto ipsec sa (liczniki zaszyfrowanych pakietów).</li></ol>
<pre>R1(config)# ip access-list extended NAT-LAN
R1(config-ext-nacl)# deny ip 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255
R1(config-ext-nacl)# permit ip 192.168.10.0 0.0.0.255 any
R1(config)# ip nat inside source list NAT-LAN interface g0/1 overload</pre>
<h4>Bezpieczny dostęp administracyjny</h4>
<pre>R1(config)# hostname R1
R1(config)# ip domain-name firma.local
R1(config)# crypto key generate rsa modulus 2048
R1(config)# ip ssh version 2
R1(config)# username admin privilege 15 secret Haslo123
R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input ssh</pre>
<div class="tip">Gdy tunel działa, a hosty się nie widzą, sprawdź kolejno: trasy do sieci zdalnej przez tunel, wyłączenie ruchu VPN z NAT, ACL na interfejsach i zaporę systemową na komputerach (Windows domyślnie blokuje ping z innych podsieci).</div>` }
      ],
      pytania: [
        Q("Komunikat ICMPv6, którym router ogłasza prefiks sieci dla SLAAC, to", "Router Advertisement (typ 134)", "Router Solicitation (typ 133)", "Neighbor Solicitation (typ 135)", "Echo Request (typ 128)", "RA zawiera prefiks i flagi M, O."),
        Q("Bez którego polecenia router Cisco nie będzie przekazywał pakietów IPv6?", "ipv6 unicast-routing", "ipv6 enable", "ip routing", "ipv6 nd ra", "Przekazywanie IPv6 jest domyślnie wyłączone."),
        Q("Protokół IPsec zapewniający szyfrowanie danych to", "ESP", "AH", "IKE", "GRE", "AH nie szyfruje."),
        Q("Negocjacja kluczy IKE w IPsec odbywa się na porcie", "UDP 500", "TCP 443", "UDP 1701", "TCP 1723", "UDP 4500 służy do NAT-T."),
        Q("Tunel GRE bez dodatkowych mechanizmów", "nie szyfruje przesyłanych danych", "szyfruje dane algorytmem AES", "działa tylko dla IPv6", "wymaga certyfikatów", "Dlatego łączy się go z IPsec."),
        Q("Metoda migracji, w której urządzenia mają jednocześnie adresy IPv4 i IPv6, to", "dual stack", "NAT64", "tunelowanie 6to4", "ISATAP", "Zalecana metoda przejściowa."),
        Q("VPN łączący dwie sieci firmowe przez internet za pomocą routerów to", "site-to-site", "remote access", "SSL VPN klienta", "VLAN trunk", "Hosty nie potrzebują klienta VPN."),
        Q("Pole nagłówka IPv6 odpowiadające polu TTL w IPv4 to", "Hop Limit", "Flow Label", "Traffic Class", "Next Header", "Zmniejszane o 1 przez każdy router.")
      ]
    },
    {
      id: "voip-monitoring", tytul: "VoIP, QoS i monitoring sieci", opis: "Skonfigurujesz telefonię IP z priorytetem ruchu głosowego, redundancję bramy i monitoring SNMP oraz syslog.",
      lekcje: [
        { tytul: "Telefonia IP i jakość głosu", tresc: `<h4>Protokoły VoIP</h4>
<div class="tw"><table><tr><th>Protokół</th><th>Rola</th><th>Port</th></tr>
<tr><td>SIP</td><td>sygnalizacja: zestawianie, modyfikacja i kończenie połączeń</td><td>UDP/TCP 5060, TLS 5061</td></tr>
<tr><td>RTP</td><td>przesyłanie strumienia głosu</td><td>UDP, porty dynamiczne (parzyste)</td></tr>
<tr><td>RTCP</td><td>statystyki jakości strumienia RTP</td><td>UDP, port RTP + 1</td></tr>
<tr><td>SRTP</td><td>szyfrowany RTP</td><td>UDP</td></tr>
<tr><td>H.323</td><td>starszy zestaw protokołów ITU-T</td><td>TCP 1720</td></tr>
<tr><td>SCCP (Skinny)</td><td>protokół Cisco dla telefonów</td><td>TCP 2000</td></tr></table></div>
<p>Komunikaty SIP: INVITE (zaproszenie), 100 Trying, 180 Ringing, 200 OK, ACK, BYE (zakończenie), REGISTER (rejestracja telefonu na serwerze). Centrala IP PBX (np. Asterisk, FreePBX) rejestruje telefony i obsługuje numery wewnętrzne. Bramka VoIP łączy sieć IP z siecią PSTN.</p>
<h4>Kodeki</h4>
<div class="tw"><table><tr><th>Kodek</th><th>Przepływność</th><th>Uwagi</th></tr>
<tr><td>G.711 (PCM, a-law/µ-law)</td><td>64 kb/s</td><td>bez kompresji, bardzo dobra jakość, MOS około 4,1</td></tr>
<tr><td>G.729</td><td>8 kb/s</td><td>silna kompresja, łącza o małej przepustowości</td></tr>
<tr><td>G.722</td><td>64 kb/s</td><td>szerokopasmowy (HD Voice)</td></tr>
<tr><td>Opus</td><td>6-510 kb/s</td><td>adaptacyjny, WebRTC</td></tr></table></div>
<p>Rzeczywiste pasmo jest większe od przepływności kodeka przez nagłówki IP, UDP, RTP i warstwy 2: G.711 przy pakietach co 20 ms zajmuje w sieci Ethernet około 87 kb/s w każdym kierunku.</p>
<h4>Parametry jakości</h4>
<ul><li><b>Opóźnienie</b> w jedną stronę: do <b>150 ms</b> zalecane (ITU-T G.114), powyżej 400 ms niedopuszczalne.</li>
<li><b>Jitter</b> (zmienność opóźnienia): poniżej 30 ms; kompensuje go bufor jitter w telefonie (kosztem opóźnienia).</li>
<li><b>Utrata pakietów</b>: poniżej 1%.</li>
<li><b>MOS</b> (Mean Opinion Score): ocena jakości w skali 1-5, powyżej 4 dobra.</li></ul>
<h4>Telefon IP w sieci LAN</h4>
<pre>SW1(config)# interface fa0/10
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 10
SW1(config-if)# switchport voice vlan 150
SW1(config-if)# mls qos trust cos</pre>
<p>Telefon z wbudowanym przełącznikiem przekazuje ruch komputera w VLAN danych (10), a własny ruch oznacza VLAN-em głosowym (150). Telefon zasilany jest przez PoE.</p>
<div class="tip">Echo i „robotyczny” głos to zwykle jitter i utrata pakietów, a nie zbyt mała przepustowość. Rozwiązaniem jest QoS i osobny VLAN głosowy, a nie zmiana kodeka na mocniej kompresujący.</div>` },
        { tytul: "QoS i redundancja bramy", tresc: `<h4>Model QoS</h4>
<ol><li><b>Klasyfikacja</b>: rozpoznanie ruchu (ACL, porty, NBAR).</li>
<li><b>Oznaczanie</b>: w warstwie 2 pole <b>CoS</b> (3 bity PCP w znaczniku 802.1Q, wartości 0-7, głos CoS 5), w warstwie 3 pole <b>DSCP</b> (6 bitów, 0-63).</li>
<li><b>Kolejkowanie</b>: <b>LLQ</b> (ścisły priorytet dla głosu i gwarantowane pasmo dla innych klas, CBWFQ), WFQ, FIFO.</li>
<li><b>Ograniczanie</b>: <b>policing</b> odrzuca lub przeznakowuje nadmiar, <b>shaping</b> buforuje i wygładza ruch.</li>
<li><b>Unikanie przeciążeń</b>: WRED losowo odrzuca pakiety TCP przed zapełnieniem kolejki.</li></ol>
<div class="tw"><table><tr><th>Klasa DSCP</th><th>Wartość</th><th>Ruch</th></tr>
<tr><td>EF (Expedited Forwarding)</td><td>46</td><td>głos</td></tr>
<tr><td>AF41</td><td>34</td><td>wideokonferencje</td></tr>
<tr><td>CS3 / AF31</td><td>24 / 26</td><td>sygnalizacja</td></tr>
<tr><td>AF21</td><td>18</td><td>aplikacje transakcyjne</td></tr>
<tr><td>BE (Best Effort)</td><td>0</td><td>pozostały ruch</td></tr></table></div>
<p>Modele: <b>Best Effort</b> (brak QoS), <b>IntServ</b> (rezerwacja zasobów protokołem RSVP dla każdego przepływu, słabo skalowalny), <b>DiffServ</b> (klasy ruchu oznaczane w pakietach, stosowany powszechnie). Granica zaufania (trust boundary) to miejsce, od którego sieć ufa oznaczeniom, np. port przełącznika z telefonem IP.</p>
<h4>Protokoły redundancji bramy (FHRP)</h4>
<p>Hosty mają jedną bramę domyślną. FHRP tworzy <b>wirtualny adres IP i MAC</b> obsługiwany przez kilka routerów, więc awaria jednego nie odcina sieci.</p>
<div class="tw"><table><tr><th>Protokół</th><th>Standard</th><th>Role</th><th>Uwagi</th></tr>
<tr><td>HSRP</td><td>Cisco</td><td>active / standby</td><td>priorytet domyślnie 100, MAC 0000.0c07.acXX (XX = grupa)</td></tr>
<tr><td>VRRP</td><td>IETF (otwarty)</td><td>master / backup</td><td>priorytet 100, wywłaszczanie domyślnie włączone</td></tr>
<tr><td>GLBP</td><td>Cisco</td><td>AVG / AVF</td><td>równoważenie obciążenia między routerami</td></tr></table></div>
<pre>R1(config)# interface g0/0
R1(config-if)# ip address 192.168.1.2 255.255.255.0
R1(config-if)# standby 1 ip 192.168.1.1
R1(config-if)# standby 1 priority 110
R1(config-if)# standby 1 preempt</pre>
<p>Na R2 ten sam numer grupy i wirtualny adres, priorytet domyślny 100. Hosty jako bramę mają adres <b>wirtualny</b> 192.168.1.1. <code>preempt</code> pozwala routerowi o wyższym priorytecie odzyskać rolę aktywnego po naprawie (w HSRP domyślnie wyłączone). Weryfikacja: <code>show standby brief</code>.</p>
<div class="tip">Śledzenie interfejsu WAN (standby 1 track g0/1 20) obniża priorytet routera aktywnego, gdy padnie jego łącze do internetu, więc rolę przejmuje router zapasowy.</div>` },
        { tytul: "SNMP, syslog i NTP", tresc: `<h4>SNMP</h4>
<p>Simple Network Management Protocol: <b>menedżer</b> (stacja zarządzania NMS, np. Zabbix, PRTG, LibreNMS) odpytuje <b>agentów</b> na urządzeniach. Dane opisuje baza <b>MIB</b>, a każdy obiekt ma identyfikator <b>OID</b> (np. 1.3.6.1.2.1.1.5 to nazwa urządzenia). Operacje: get, getnext, getbulk, set, a agent sam wysyła <b>trap</b> lub inform przy zdarzeniu.</p>
<div class="tw"><table><tr><th>Wersja</th><th>Bezpieczeństwo</th></tr>
<tr><td>SNMPv1, v2c</td><td>tylko nazwa społeczności (community) przesyłana jawnym tekstem</td></tr>
<tr><td>SNMPv3</td><td>użytkownicy, uwierzytelnianie (SHA) i szyfrowanie (AES); poziomy noAuthNoPriv, authNoPriv, authPriv</td></tr></table></div>
<p>Porty: agent <b>UDP 161</b>, odbiór pułapek przez menedżera <b>UDP 162</b>.</p>
<pre>R1(config)# snmp-server community Monitor RO 10
R1(config)# snmp-server location Serwerownia-1
R1(config)# snmp-server contact admin@firma.pl
R1(config)# snmp-server host 192.168.1.60 version 2c Monitor
R1(config)# snmp-server enable traps</pre>
<p>RO oznacza tylko odczyt, RW odczyt i zapis (unikać). Liczba 10 to numer ACL ograniczającej, kto może odpytywać.</p>
<h4>Syslog</h4>
<p>Komunikaty dziennika wysyłane do serwera na <b>UDP 514</b>. Poziomy ważności:</p>
<div class="tw"><table><tr><th>Poziom</th><th>Nazwa</th><th>Poziom</th><th>Nazwa</th></tr>
<tr><td>0</td><td>emergencies</td><td>4</td><td>warnings</td></tr>
<tr><td>1</td><td>alerts</td><td>5</td><td>notifications</td></tr>
<tr><td>2</td><td>critical</td><td>6</td><td>informational</td></tr>
<tr><td>3</td><td>errors</td><td>7</td><td>debugging</td></tr></table></div>
<p>Im niższa liczba, tym poważniejsze zdarzenie. Ustawienie poziomu wysyła ten poziom i wszystkie <b>poważniejsze</b>: <code>logging trap warnings</code> wysyła poziomy 0-4.</p>
<pre>R1(config)# logging host 192.168.1.61
R1(config)# logging trap informational
R1(config)# service timestamps log datetime msec</pre>
<p>Komunikat <code>%LINK-3-UPDOWN</code> ma poziom 3 (errors), a <code>%LINEPROTO-5-UPDOWN</code> poziom 5 (notifications).</p>
<h4>NTP</h4>
<p>Synchronizacja czasu na <b>UDP 123</b> jest niezbędna do porównywania dzienników, certyfikatów i uwierzytelniania. <b>Stratum</b> określa odległość od źródła wzorcowego: stratum 0 to zegar atomowy lub GPS, stratum 1 serwer do niego podłączony, każdy kolejny poziom o 1 więcej.</p>
<pre>R1(config)# ntp server 192.168.1.5
R1(config)# clock timezone CET 1</pre>
<h4>Inne narzędzia</h4>
<p><b>NetFlow/IPFIX</b> zbiera informacje o przepływach (kto, z kim, ile danych), przydatne do analizy obciążenia łączy WAN. <b>SPAN</b> (port mirroring) kopiuje ruch na port analizatora (Wireshark). <b>IP SLA</b> mierzy opóźnienie i jitter do wskazanego celu.</p>
<div class="tip">Zapamiętaj kolejność syslog zdaniem pomocniczym: „Every Awesome Cisco Engineer Will Need Ice cream Daily” (0-7: emergencies, alerts, critical, errors, warnings, notifications, informational, debugging).</div>` }
      ],
      pytania: [
        Q("Protokół służący do zestawiania i kończenia połączeń VoIP to", "SIP", "RTP", "RTCP", "SNMP", "RTP przenosi głos."),
        Q("Zalecane maksymalne opóźnienie w jedną stronę dla rozmów VoIP według ITU-T G.114 wynosi", "150 ms", "15 ms", "500 ms", "1 s", "Powyżej 400 ms jakość jest nieakceptowalna."),
        Q("Kodek G.711 ma przepływność", "64 kb/s", "8 kb/s", "16 kb/s", "128 kb/s", "PCM bez kompresji."),
        Q("Wartość DSCP zalecana dla ruchu głosowego (EF) to", "46", "0", "34", "26", "Expedited Forwarding."),
        Q("Otwarty standard redundancji bramy domyślnej z rolami master i backup to", "VRRP", "HSRP", "GLBP", "STP", "HSRP i GLBP są protokołami Cisco."),
        Q("Wersja SNMP zapewniająca uwierzytelnianie użytkowników i szyfrowanie to", "SNMPv3", "SNMPv1", "SNMPv2c", "SNMPv2 z community RW", "v1 i v2c przesyłają community jawnie."),
        Q("Agent SNMP odbiera zapytania na porcie", "UDP 161", "UDP 162", "UDP 514", "TCP 161", "Port 162 służy do odbioru pułapek."),
        Q("Poziom ważności 4 w syslog to", "warnings", "errors", "notifications", "critical", "0 emergencies, 3 errors, 4 warnings, 5 notifications.")
      ]
    }
  ]);
})(window.KURSY);
