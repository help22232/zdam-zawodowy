window.KURSY = window.KURSY || {};

window.KURSY["MOT.05"] = {
  podstawowy: [
    {
      tytul: "Silnik spalinowy: budowa i działanie",
      tresc: `
<h4>Cykl czterosuwowy</h4>
<ol><li><b>ssanie</b> - tłok w dół, zawór dolotowy otwarty;</li><li><b>sprężanie</b> - tłok w górę, zawory zamknięte;</li><li><b>praca</b> (rozprężanie) - zapłon mieszanki, tłok w dół;</li><li><b>wydech</b> - tłok w górę, zawór wylotowy otwarty.</li></ol>
<p>Jeden cykl to <b>dwa obroty wału korbowego</b> (720°). Wałek rozrządu obraca się dwa razy wolniej niż wał korbowy.</p>
<h4>ZI a ZS</h4>
<div class="tw"><table><tr><th></th><th>Silnik ZI (benzyna, LPG)</th><th>Silnik ZS (diesel)</th></tr>
<tr><td>zapłon</td><td>iskra ze świecy zapłonowej</td><td>samoczynny - od sprężonego, gorącego powietrza</td></tr>
<tr><td>stopień sprężania</td><td>ok. 9-13</td><td>ok. 15-22</td></tr>
<tr><td>rozruch na zimno</td><td>-</td><td>świece żarowe</td></tr></table></div>
<h4>Elementy</h4>
<ul>
<li><b>Kadłub</b> (blok), <b>głowica</b> z uszczelką, tłok z pierścieniami (uszczelniające i zgarniający olej), korbowód, wał korbowy, koło zamachowe.</li>
<li><b>Rozrząd</b>: wałek rozrządu napędzany paskiem, łańcuchem lub kołami zębatymi; luz zaworowy (zbyt mały - zawory nie domykają się i się wypalają). Zerwanie paska rozrządu w silniku kolizyjnym niszczy zawory i tłoki.</li>
<li><b>Smarowanie</b>: pompa oleju, filtr, czujnik ciśnienia. Oznaczenie <b>SAE 5W-30</b>: 5W - klasa lepkości zimowej (im mniejsza, tym lepszy rozruch na mrozie), 30 - lepkość w temperaturze roboczej.</li>
<li><b>Chłodzenie</b>: pompa cieczy, <b>termostat</b> (otwiera duży obieg przy ok. 85-90°C), chłodnica, wentylator, zbiorniczek wyrównawczy. Płyn chłodniczy na bazie glikolu.</li>
<li><b>Zasilanie</b>: wtrysk pośredni lub bezpośredni (benzyna), Common Rail (diesel), turbosprężarka z intercoolerem; filtr powietrza, filtr paliwa, katalizator, sonda lambda, filtr cząstek stałych DPF (diesel).</li>
</ul>`
    },
    {
      tytul: "Układ napędowy, jezdny i kierowniczy",
      tresc: `
<h4>Układ napędowy</h4>
<p>Silnik → <b>sprzęgło</b> (cierne, jednotarczowe suche; dwumasowe koło zamachowe tłumi drgania) → <b>skrzynia biegów</b> (manualna, automatyczna hydrokinetyczna, dwusprzęgłowa DSG, bezstopniowa CVT) → wał napędowy (napęd tylny) → <b>przekładnia główna</b> i <b>mechanizm różnicowy</b> (pozwala kołom obracać się z różną prędkością na zakręcie) → półosie z <b>przegubami</b> (homokinetyczne w napędzie przednim) → koła.</p>
<h4>Zawieszenie</h4>
<ul><li>Niezależne (kolumna McPhersona, wahacze) i zależne (oś sztywna).</li><li>Elementy sprężyste: sprężyny śrubowe, resory, drążki skrętne, pneumatyczne; <b>amortyzatory</b> tłumią drgania nadwozia.</li><li>Stabilizator ogranicza przechyły na zakrętach.</li></ul>
<h4>Układ kierowniczy</h4>
<p>Przekładnia zębatkowa, drążki i końcówki drążków kierowniczych, wspomaganie hydrauliczne lub elektryczne. Geometria kół: <b>zbieżność</b>, kąt pochylenia koła, kąt wyprzedzenia sworznia zwrotnicy. Nieprawidłowa zbieżność powoduje nierównomierne zużycie opon (ząbkowanie, ścieranie krawędzi).</p>
<h4>Opony</h4>
<pre>205/55 R16 91V
205 - szerokość w mm   55 - profil (wysokość = 55% szerokości)
R - budowa radialna    16 - średnica felgi w calach
91 - indeks nośności (615 kg)   V - indeks prędkości (240 km/h)
DOT 2324 - wyprodukowana w 23. tygodniu 2024 r.</pre>
<p>Minimalna głębokość bieżnika w Polsce - <b>1,6 mm</b> (wskaźnik TWI). Wyważanie kół usuwa bicie i drgania kierownicy.</p>`
    },
    {
      tytul: "Układ hamulcowy",
      tresc: `
<ul>
<li>Hamulec zasadniczy - <b>hydrauliczny</b>: pompa hamulcowa (z serwem podciśnieniowym), przewody, zaciski i tarcze (hamulce tarczowe) lub cylinderki i bębny ze szczękami (bębnowe).</li>
<li>Układ jest dwuobwodowy (np. po przekątnej) - awaria jednego obwodu nie odbiera całkowicie hamowania.</li>
<li><b>Płyn hamulcowy</b> (DOT 3, DOT 4, DOT 5.1 - glikolowe) jest <b>higroskopijny</b>: wchłania wodę, przez co obniża się temperatura wrzenia. Wymiana co ok. 2 lata. Płynu DOT 5 (silikonowego) nie miesza się z glikolowymi.</li>
<li>Odpowietrzanie zaczyna się zwykle od koła <b>najdalej od pompy hamulcowej</b> (np. prawe tylne).</li>
<li>Hamulec postojowy - mechaniczny (linka) lub elektryczny (EPB).</li>
<li>Systemy: <b>ABS</b> - zapobiega blokowaniu kół; <b>ASR</b> - zapobiega poślizgowi kół przy ruszaniu; <b>ESP</b> - stabilizuje tor jazdy; EBD - rozdział siły hamowania.</li>
<li>Kontrola: grubość klocków i tarcz (minimalna grubość tarczy jest wybita na tarczy), bicie tarcz, siła hamowania na rolkach - różnica między kołami jednej osi nie powinna przekraczać 30%.</li>
</ul>`
    },
    {
      tytul: "Instalacja elektryczna i diagnostyka",
      tresc: `
<h4>Instalacja</h4>
<ul>
<li>Akumulator kwasowo-ołowiowy 12 V (6 ogniw po ok. 2,1 V). Parametry: pojemność (Ah), prąd rozruchowy (A, EN). Napięcie w pełni naładowanego akumulatora w spoczynku - ok. <b>12,6-12,8 V</b>.</li>
<li><b>Alternator</b> z regulatorem napięcia ładuje akumulator napięciem ok. <b>13,8-14,4 V</b>.</li>
<li>Rozrusznik - silnik prądu stałego z włącznikiem elektromagnetycznym (bendiks wprowadza zębnik w wieniec koła zamachowego).</li>
<li>Odłączając akumulator, najpierw zdejmuje się klemę <b>ujemną (−)</b>, a podłączając - najpierw dodatnią (+).</li>
<li>Bezpieczniki topikowe, przekaźniki, magistrala CAN łączy sterowniki.</li>
</ul>
<h4>Diagnostyka</h4>
<ul>
<li><b>OBD II / EOBD</b> - gniazdo diagnostyczne 16-pinowe; kody usterek, np. P0300 - wypadanie zapłonów, P0171 - mieszanka zbyt uboga. Litera P - układ napędowy, B - nadwozie, C - podwozie, U - sieć komunikacyjna.</li>
<li><b>Pomiar ciśnienia sprężania</b> - ocena szczelności cylindrów (pierścienie, zawory, uszczelka głowicy); dolanie oleju do cylindra i wzrost ciśnienia wskazuje na zużyte pierścienie.</li>
<li><b>Analiza spalin</b> (ZI): CO, HC, CO₂, O₂, współczynnik lambda (λ = 1 - mieszanka stechiometryczna). <b>Dymomierz</b> - zadymienie spalin ZS.</li>
<li>Kolor spalin: niebieski - spalanie oleju; czarny - za bogata mieszanka (diesel: wtryskiwacze, turbo); biały gęsty i słodki zapach - spalanie płynu chłodniczego (uszczelka głowicy).</li>
<li>Okresowe badanie techniczne w Stacji Kontroli Pojazdów: nowy samochód osobowy - przed upływem 3 lat od pierwszej rejestracji, potem po 2 latach, następnie co rok.</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Zadanie praktyczne MOT.05",
      tresc: `
<p>Zadanie (model „w”, 120-150 minut) polega zwykle na diagnozie i naprawie podzespołu: wymianie klocków i tarcz, oleju i filtrów, paska rozrządu, amortyzatora, sprawdzeniu luzów zaworowych, pomiarze ciśnienia sprężania lub diagnostyce komputerowej.</p>
<ol><li>Zapoznaj się z dokumentacją serwisową - momenty dokręcania, wartości nominalne i graniczne.</li><li>Przygotuj stanowisko: zabezpiecz pojazd (podnośnik, kliny, podpory), pokrowce na fotele i błotniki.</li><li>Wykonaj pomiary narzędziami pomiarowymi: suwmiarka, mikrometr, czujnik zegarowy, szczelinomierz.</li><li>Porównaj wyniki z danymi producenta i sformułuj wniosek (nadaje się / wymienić).</li><li>Wypełnij kartę zlecenia lub protokół: wykonane czynności, części, czas.</li><li>Odpady (olej, filtry, płyny) do oznakowanych pojemników.</li></ol>
<div class="tip">Śruby kół i elementów zawieszenia dokręcaj kluczem dynamometrycznym na momentu z dokumentacji - za to są punkty.</div>`
    },
    {
      tytul: "Pojazdy hybrydowe i elektryczne: bezpieczeństwo",
      tresc: `
<ul>
<li>Instalacja wysokonapięciowa (HV) - przewody w kolorze <b>pomarańczowym</b>, napięcie zwykle 200-800 V DC.</li>
<li>Przed pracą: wyłączenie zapłonu, odłączenie akumulatora 12 V, usunięcie wtyczki serwisowej (service plug), odczekanie wskazanego czasu na rozładowanie kondensatorów i sprawdzenie braku napięcia.</li>
<li>Prace przy układach HV wykonują tylko osoby z odpowiednimi uprawnieniami, w rękawicach dielektrycznych.</li>
<li>Hamowanie rekuperacyjne odzyskuje energię do akumulatora trakcyjnego.</li>
<li>Rodzaje hybryd: mild hybrid (MHEV), pełna hybryda (HEV), plug-in (PHEV).</li>
</ul>`
    }
  ],
  pytania: [
    { p: "W silniku czterosuwowym jeden cykl pracy odbywa się w czasie", o: ["dwóch obrotów wału korbowego", "jednego obrotu wału korbowego", "czterech obrotów wału korbowego", "pół obrotu wału korbowego"], k: 0, w: "Cztery suwy tłoka = 720° obrotu wału korbowego." },
    { p: "W silniku o zapłonie samoczynnym (ZS) do ułatwienia rozruchu zimnego silnika stosuje się", o: ["świece żarowe", "świece zapłonowe", "cewkę zapłonową", "aparat zapłonowy"], k: 0, w: "Świece żarowe podgrzewają komorę spalania." },
    { p: "Oznaczenie oleju SAE 5W-30 - liczba 5W określa", o: ["lepkość w niskiej temperaturze (właściwości zimowe)", "lepkość w temperaturze roboczej", "zawartość dodatków", "przebieg do wymiany w tys. km"], k: 0, w: "Im mniejsza liczba przed W, tym łatwiejszy rozruch na mrozie." },
    { p: "Element układu chłodzenia otwierający duży obieg cieczy po osiągnięciu temperatury roboczej to", o: ["termostat", "pompa cieczy", "zbiorniczek wyrównawczy", "korek wlewu"], k: 0, w: "Do tego czasu ciecz krąży w małym obiegu i silnik szybciej się nagrzewa." },
    { p: "Zbyt mały luz zaworowy powoduje", o: ["niedomykanie się zaworów i ich wypalanie", "głośną pracę popychaczy", "spadek ciśnienia oleju", "przegrzanie skrzyni biegów"], k: 0, w: "Za duży luz objawia się stukami zaworów." },
    { p: "Mechanizm różnicowy umożliwia", o: ["obracanie się kół napędowych z różnymi prędkościami na zakręcie", "zmianę przełożenia skrzyni biegów", "rozłączenie silnika od skrzyni", "blokowanie kół przy hamowaniu"], k: 0, w: "Koło zewnętrzne na zakręcie pokonuje dłuższą drogę." },
    { p: "W oznaczeniu opony 205/55 R16 liczba 55 oznacza", o: ["stosunek wysokości do szerokości opony w %", "szerokość opony w mm", "średnicę felgi w calach", "indeks nośności"], k: 0, w: "Profil 55: wysokość ściany to 55% szerokości." },
    { p: "Oznaczenie DOT 1823 na oponie informuje, że opona została wyprodukowana", o: ["w 18. tygodniu 2023 r.", "18 stycznia 2023 r.", "w 2018 r. w 23. tygodniu", "w 1823 r."], k: 0, w: "Dwie pierwsze cyfry - tydzień, dwie ostatnie - rok." },
    { p: "Minimalna dopuszczalna głębokość bieżnika opon samochodu osobowego w Polsce wynosi", o: ["1,6 mm", "3 mm", "0,8 mm", "4 mm"], k: 0, w: "Wskazują ją wskaźniki TWI w rowkach bieżnika." },
    { p: "Nierównomierne zużycie opony po wewnętrznej lub zewnętrznej krawędzi świadczy najczęściej o", o: ["nieprawidłowej geometrii kół (zbieżności)", "zbyt wysokim ciśnieniu", "niewyważeniu koła", "zużytym sprzęgle"], k: 0, w: "Za wysokie ciśnienie ściera środek bieżnika." },
    { p: "Płyn hamulcowy wymienia się okresowo, ponieważ", o: ["jest higroskopijny i wchłania wodę", "zmienia kolor", "odparowuje w czasie postoju", "zamarza w temperaturze 0°C"], k: 0, w: "Woda w płynie obniża jego temperaturę wrzenia." },
    { p: "Układ zapobiegający blokowaniu kół podczas hamowania to", o: ["ABS", "ASR", "ESP", "EGR"], k: 0, w: "ASR - kontrola trakcji przy ruszaniu, ESP - stabilizacja toru jazdy." },
    { p: "Odpowietrzanie układu hamulcowego zaczyna się zwykle od koła", o: ["najdalej położonego od pompy hamulcowej", "najbliższego pompie", "przedniego lewego zawsze", "dowolnego"], k: 0, w: "Zwykle prawe tylne, chyba że producent podaje inaczej." },
    { p: "Napięcie ładowania akumulatora przez sprawny alternator wynosi około", o: ["13,8-14,4 V", "12,0 V", "16-18 V", "9-11 V"], k: 0, w: "Reguluje je regulator napięcia alternatora." },
    { p: "Odłączając akumulator od instalacji pojazdu, w pierwszej kolejności należy zdjąć", o: ["klemę ujemną (−)", "klemę dodatnią (+)", "obie klemy jednocześnie", "bezpiecznik główny"], k: 0, w: "Zapobiega to zwarciu kluczem do masy nadwozia." },
    { p: "Kod usterki zaczynający się od litery P dotyczy", o: ["układu napędowego (silnik, skrzynia)", "nadwozia", "podwozia", "sieci komunikacyjnej"], k: 0, w: "B - body, C - chassis, U - network." },
    { p: "Niebieski dym z rury wydechowej świadczy o", o: ["spalaniu oleju silnikowego", "zbyt bogatej mieszance", "spalaniu płynu chłodniczego", "prawidłowej pracy silnika"], k: 0, w: "Przyczyny: zużyte pierścienie, uszczelniacze zaworowe, turbosprężarka." },
    { p: "Wzrost ciśnienia sprężania po wlaniu niewielkiej ilości oleju do cylindra wskazuje na", o: ["zużyte pierścienie tłokowe", "nieszczelne zawory", "uszkodzoną uszczelkę głowicy między cylindrami", "uszkodzony wtryskiwacz"], k: 0, w: "Olej chwilowo uszczelnia pierścienie." },
    { p: "Współczynnik lambda równy 1 oznacza mieszankę", o: ["stechiometryczną", "bogatą", "ubogą", "bez paliwa"], k: 0, w: "λ < 1 - bogata, λ > 1 - uboga." },
    { p: "Narzędzie do dokręcania śrub z określonym momentem to", o: ["klucz dynamometryczny", "klucz udarowy pneumatyczny", "klucz płaski", "szczelinomierz"], k: 0, w: "Klucz udarowy nie pozwala kontrolować momentu." },
    { p: "Narzędzie pomiarowe do sprawdzenia luzu zaworowego to", o: ["szczelinomierz", "mikrometr", "areometr", "manometr"], k: 0, w: "Szczelinomierz to zestaw płytek o znanej grubości." },
    { p: "Przewody wysokiego napięcia w pojazdach hybrydowych i elektrycznych mają kolor", o: ["pomarańczowy", "czerwony", "niebieski", "zielono-żółty"], k: 0, w: "To ostrzeżenie przed napięciem rzędu setek woltów." },
    { p: "Zużyty olej silnikowy z warsztatu należy", o: ["przekazać firmie uprawnionej do odbioru odpadów", "wylać do kanalizacji", "spalić w piecu", "wyrzucić do odpadów komunalnych"], k: 0, w: "Olej to odpad niebezpieczny; ewidencja w BDO." }
  ]
};

window.KURSY["ELE.02"] = {
  podstawowy: [
    {
      tytul: "Podstawy elektrotechniki",
      tresc: `
<h4>Prawa i wzory</h4>
<pre>prawo Ohma:            U = I × R
moc:                   P = U × I = I² × R = U² ÷ R
energia:               W = P × t   (kWh)
szeregowo:             R = R1 + R2 + …          (prąd ten sam)
równolegle:            1/R = 1/R1 + 1/R2 + …    (napięcie to samo)
dwa równolegle:        R = (R1 × R2) ÷ (R1 + R2)
rezystancja przewodu:  R = ρ × l ÷ S</pre>
<p><b>I prawo Kirchhoffa</b> - suma prądów wpływających do węzła równa się sumie prądów wypływających. <b>II prawo</b> - suma napięć w oczku równa się zeru.</p>
<h4>Prąd przemienny</h4>
<ul>
<li>Sieć w Polsce: <b>230 V</b> (fazowe) / <b>400 V</b> (międzyfazowe), <b>50 Hz</b>. U<sub>przewodowe</sub> = √3 × U<sub>fazowe</sub>.</li>
<li>Moc czynna jednofazowa: P = U × I × cos φ; trójfazowa: P = √3 × U × I × cos φ. Moc pozorna S [VA], bierna Q [var].</li>
<li>Kondensator: pojemność C [F]; cewka: indukcyjność L [H].</li>
</ul>
<h4>Przykład</h4><p>Grzejnik 2 kW na 230 V pobiera prąd I = P ÷ U = 2000 ÷ 230 ≈ 8,7 A. Praca przez 3 h zużywa 6 kWh.</p>
<h4>Mierniki</h4><p><b>Woltomierz</b> łączy się <b>równolegle</b>, <b>amperomierz</b> - <b>szeregowo</b>. Watomierz mierzy moc, omomierz - rezystancję (w obwodzie bez napięcia), megaomomierz - rezystancję izolacji, miernik cęgowy - prąd bez przerywania obwodu.</p>`
    },
    {
      tytul: "Instalacje elektryczne: przewody i osprzęt",
      tresc: `
<h4>Barwy żył</h4>
<div class="tw"><table><tr><th>Przewód</th><th>Barwa</th></tr>
<tr><td>ochronny PE</td><td>zielono-żółta</td></tr><tr><td>neutralny N</td><td>niebieska (jasnoniebieska)</td></tr><tr><td>fazowe L1, L2, L3</td><td>brązowa, czarna, szara</td></tr><tr><td>ochronno-neutralny PEN</td><td>zielono-żółta z niebieskimi oznaczeniami na końcach</td></tr></table></div>
<h4>Oznaczenia przewodów</h4>
<ul>
<li><b>YDY 3×2,5</b> - izolacja żył z PVC (Y), żyła jednodrutowa (D), powłoka z PVC (Y); 3 żyły o przekroju 2,5 mm².</li>
<li><b>YDYp</b> - płaski; <b>LgY</b> - linka giętka w izolacji PVC; <b>OMY</b> - przewód oponowy mieszkaniowy; <b>H07V-U</b>, <b>H05VV-F</b> - oznaczenia zharmonizowane.</li>
<li>Typowo: obwody oświetleniowe - 1,5 mm² (zabezpieczenie B10), gniazda - 2,5 mm² (B16).</li>
</ul>
<h4>Układy sieci</h4>
<p>Pierwsza litera - połączenie punktu neutralnego źródła z ziemią (T - uziemiony, I - izolowany), druga - sposób ochrony odbiornika (N - połączenie z przewodem neutralnym sieci, T - własny uziom). <b>TN-C</b> (wspólny PEN), <b>TN-S</b> (osobne N i PE), <b>TN-C-S</b> (rozdzielenie PEN w złączu), <b>TT</b>, <b>IT</b>.</p>
<h4>Stopień ochrony IP</h4><p>Pierwsza cyfra - ochrona przed ciałami stałymi (0-6), druga - przed wodą (0-8). <b>IP44</b> - od ciał > 1 mm i bryzgów wody (np. łazienka poza strefą 0 i 1); IP67 - pyłoszczelne i chwilowe zanurzenie.</p>
<h4>Łączniki</h4><p>Jednobiegunowy, świecznikowy (dwa obwody - żyrandol), schodowy (dwa łączniki sterują jednym punktem), krzyżowy (z dwoma schodowymi - sterowanie z trzech miejsc), przekaźnik bistabilny (wiele przycisków).</p>`
    },
    {
      tytul: "Zabezpieczenia i ochrona przeciwporażeniowa",
      tresc: `
<h4>Wyłączniki nadprądowe</h4>
<p>Chronią przewody przed przeciążeniem i zwarciem. Oznaczenie <b>B16</b>: charakterystyka B, prąd znamionowy 16 A.</p>
<div class="tw"><table><tr><th>Charakterystyka</th><th>Zadziałanie członu zwarciowego</th><th>Zastosowanie</th></tr>
<tr><td>B</td><td>3-5 × In</td><td>instalacje mieszkaniowe, oświetlenie, gniazda</td></tr>
<tr><td>C</td><td>5-10 × In</td><td>silniki, odbiorniki z dużymi prądami rozruchu</td></tr>
<tr><td>D</td><td>10-20 × In</td><td>transformatory, duże silniki</td></tr></table></div>
<h4>Wyłącznik różnicowoprądowy (RCD)</h4>
<p>Porównuje prąd w przewodach fazowych i neutralnym; wyłącza przy upływie (np. przez ciało człowieka). Prąd różnicowy <b>30 mA</b> - ochrona uzupełniająca dla gniazd do 32 A i łazienek. Sprawdza się go przyciskiem <b>TEST</b>. RCD nie chroni przed przeciążeniem - stosuje się go razem z wyłącznikiem nadprądowym (lub wyłącznik RCBO łączący obie funkcje).</p>
<h4>Ochrona przeciwporażeniowa</h4>
<ul>
<li><b>podstawowa</b> (przed dotykiem bezpośrednim): izolacja części czynnych, obudowy, przegrody, umieszczenie poza zasięgiem;</li>
<li><b>przy uszkodzeniu</b> (przed dotykiem pośrednim): samoczynne wyłączenie zasilania, połączenia wyrównawcze, separacja elektryczna, izolacja podwójna;</li>
<li><b>uzupełniająca</b>: RCD 30 mA, połączenia wyrównawcze miejscowe.</li>
</ul>
<p><b>Klasy ochronności</b>: I - zacisk PE (obudowa uziemiona), II - izolacja podwójna lub wzmocniona (symbol podwójnego kwadratu), III - zasilanie bardzo niskim napięciem SELV/PELV.</p>
<p>Napięcie dotykowe dopuszczalne długotrwale w warunkach normalnych: <b>50 V AC</b> i <b>120 V DC</b>.</p>`
    },
    {
      tytul: "Maszyny elektryczne",
      tresc: `
<ul>
<li><b>Silnik indukcyjny klatkowy</b> - najczęściej stosowany silnik trójfazowy. Prędkość synchroniczna n = 60 × f ÷ p (p - liczba par biegunów): 3000, 1500, 1000 obr/min; wirnik obraca się nieco wolniej (poślizg).</li>
<li>Zmiana kierunku obrotów silnika trójfazowego - <b>zamiana miejscami dwóch przewodów fazowych</b>.</li>
<li>Rozruch: bezpośredni (małe silniki), <b>gwiazda-trójkąt</b> (zmniejsza prąd rozruchowy około 3 razy), softstart, przemiennik częstotliwości (falownik) - także płynna regulacja prędkości.</li>
<li>Silnik jednofazowy - z kondensatorem pracy lub rozruchowym.</li>
<li><b>Transformator</b>: przekładnia ϑ = U₁ ÷ U₂ = N₁ ÷ N₂. Straty: w miedzi (uzwojenia) i w żelazie (rdzeń).</li>
<li>Tabliczka znamionowa: moc znamionowa (na wale), napięcie, prąd, cos φ, prędkość, sposób połączenia (Δ/Y), stopień ochrony IP.</li>
<li>Zabezpieczenie silnika przed przeciążeniem - <b>przekaźnik termobimetalowy</b> współpracujący ze stycznikiem lub wyłącznik silnikowy.</li>
</ul>
<h4>Układy sterowania</h4><p>Stycznik z obwodem podtrzymania: przycisk <b>START</b> (zwierny, NO) zasila cewkę, styk pomocniczy stycznika podtrzymuje zasilanie, przycisk <b>STOP</b> (rozwierny, NC) przerywa obwód. Sterowanie z kilku miejsc: przyciski START łączy się równolegle, STOP - szeregowo.</p>`
    },
    {
      tytul: "Bezpieczna praca i pomiary odbiorcze",
      tresc: `
<h4>Pięć zasad przed pracą przy urządzeniach elektrycznych</h4>
<ol><li>wyłącz napięcie - odłącz od zasilania;</li><li>zabezpiecz przed ponownym załączeniem (kłódka, tabliczka „Nie załączać”);</li><li><b>sprawdź brak napięcia</b> wskaźnikiem;</li><li>uziem i zewrzyj (w sieciach wyższego napięcia);</li><li>osłoń sąsiednie części pod napięciem.</li></ol>
<p>Do eksploatacji urządzeń elektrycznych potrzebne jest <b>świadectwo kwalifikacyjne</b> (dawniej „uprawnienia SEP”): <b>E</b> - eksploatacja, <b>D</b> - dozór.</p>
<h4>Pomiary w instalacji (sprawdzenie odbiorcze i okresowe)</h4>
<div class="tw"><table><tr><th>Pomiar</th><th>Przyrząd i wymaganie</th></tr>
<tr><td>ciągłość przewodów ochronnych i wyrównawczych</td><td>omomierz niskonapięciowy</td></tr>
<tr><td>rezystancja izolacji</td><td>megaomomierz; w obwodach do 500 V napięcie probiercze 500 V DC, wymagana rezystancja ≥ 1 MΩ</td></tr>
<tr><td>impedancja pętli zwarcia</td><td>miernik pętli; Z<sub>s</sub> × I<sub>a</sub> ≤ U<sub>0</sub> - sprawdza skuteczność samoczynnego wyłączenia</td></tr>
<tr><td>wyłączniki RCD</td><td>miernik RCD: prąd i czas zadziałania</td></tr>
<tr><td>rezystancja uziemienia</td><td>miernik uziemień (metoda techniczna)</td></tr></table></div>
<pre>Przykład: obwód B16, U0 = 230 V, Ia = 5 × 16 = 80 A
Zs dopuszczalne = 230 ÷ 80 ≈ 2,88 Ω</pre>
<p>Pomiary okresowe instalacji wykonuje się co najmniej co 5 lat (w pomieszczeniach wilgotnych, z wyziewami żrącymi itp. - co rok, zgodnie z Prawem budowlanym).</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Zadanie praktyczne ELE.02",
      tresc: `
<p>Zadanie (model „w”, 150-180 minut) to najczęściej montaż fragmentu instalacji lub układu sterowania na tablicy montażowej według schematu, a następnie sprawdzenie działania.</p>
<ol><li>Przeanalizuj schemat ideowy i montażowy, dobierz aparaturę i przewody (przekrój, barwy).</li><li>Zamontuj aparaty na szynie TH35, poprowadź przewody estetycznie, z zachowaniem barw; końcówki linek zaciśnij tulejkami.</li><li>Przed załączeniem: oględziny, pomiar ciągłości i rezystancji izolacji.</li><li>Uruchomienie pod nadzorem egzaminatora, sprawdzenie zgodności działania z opisem.</li><li>Wypełnij protokół z pomiarów i wnioski.</li></ol>
<div class="tip">Najczęstsze błędy: zła barwa przewodu ochronnego, niedokręcone zaciski, zamiana N i PE za wyłącznikiem RCD (powoduje jego zadziałanie), brak tulejek na linkach.</div>`
    },
    {
      tytul: "Instalacje w budynkach: strefy, odgromówki, fotowoltaika",
      tresc: `
<ul>
<li><b>Łazienka - strefy</b>: 0 (wnętrze wanny), 1 (nad wanną do 2,25 m), 2 (0,6 m od strefy 1). W strefach 0-2 nie instaluje się gniazd; wymagany odpowiedni IP (strefa 0 - IPX7, 1 i 2 - co najmniej IPX4).</li>
<li><b>Połączenia wyrównawcze główne</b> - w złączu budynku łączą PE, rury metalowe, konstrukcje, uziom; miejscowe - np. w łazience.</li>
<li><b>Ochrona odgromowa</b>: zwody, przewody odprowadzające, uziomy; ochrona przepięciowa - ograniczniki SPD typu 1, 2, 3.</li>
<li><b>Fotowoltaika</b>: panele (DC) → falownik (inwerter) → sieć AC; zabezpieczenia po stronie DC i AC, licznik dwukierunkowy.</li>
<li>Ładowanie pojazdów elektrycznych: obwód wydzielony z RCD typu A z detekcją prądu DC lub typu B.</li>
</ul>`
    }
  ],
  pytania: [
    { p: "Przez rezystor 50 Ω płynie prąd 2 A. Napięcie na rezystorze wynosi", o: ["100 V", "25 V", "52 V", "200 V"], k: 0, w: "U = I × R = 2 × 50 = 100 V." },
    { p: "Odbiornik o mocy 2,3 kW zasilany napięciem 230 V pobiera prąd", o: ["10 A", "1 A", "100 A", "23 A"], k: 0, w: "I = P ÷ U = 2300 ÷ 230 = 10 A." },
    { p: "Rezystancja zastępcza dwóch rezystorów 6 Ω połączonych równolegle wynosi", o: ["3 Ω", "12 Ω", "6 Ω", "36 Ω"], k: 0, w: "Dwa jednakowe rezystory równolegle: R/2." },
    { p: "Rezystancja zastępcza rezystorów 10 Ω, 20 Ω i 30 Ω połączonych szeregowo wynosi", o: ["60 Ω", "5,45 Ω", "20 Ω", "6000 Ω"], k: 0, w: "Szeregowo rezystancje się sumuje." },
    { p: "Grzejnik o mocy 1,5 kW pracował 4 godziny. Zużył energii", o: ["6 kWh", "0,375 kWh", "5,5 kWh", "1,5 kWh"], k: 0, w: "W = P × t = 1,5 × 4 = 6 kWh." },
    { p: "Amperomierz włącza się do obwodu", o: ["szeregowo z odbiornikiem", "równolegle do odbiornika", "między przewód PE a N", "tylko w obwodzie bez napięcia"], k: 0, w: "Woltomierz - równolegle." },
    { p: "Przyrząd do pomiaru rezystancji izolacji to", o: ["megaomomierz", "amperomierz", "watomierz", "częstościomierz"], k: 0, w: "Megaomomierz mierzy przy podwyższonym napięciu probierczym (np. 500 V DC)." },
    { p: "Napięcie międzyfazowe w sieci niskiego napięcia w Polsce wynosi", o: ["400 V", "230 V", "110 V", "690 V"], k: 0, w: "Napięcie fazowe 230 V × √3 ≈ 400 V." },
    { p: "Przewód ochronny PE ma izolację w kolorze", o: ["zielono-żółtym", "niebieskim", "brązowym", "czarnym"], k: 0, w: "Barwa zielono-żółta zarezerwowana jest dla przewodów ochronnych." },
    { p: "Przewód neutralny N oznacza się kolorem", o: ["niebieskim", "zielono-żółtym", "brązowym", "szarym"], k: 0, w: "Brązowy, czarny i szary to przewody fazowe." },
    { p: "Oznaczenie przewodu YDY 3×2,5 informuje, że przewód ma", o: ["trzy żyły jednodrutowe o przekroju 2,5 mm² w izolacji i powłoce PVC", "trzy linki o średnicy 2,5 mm", "2,5 żyły o przekroju 3 mm²", "izolację gumową i żyły aluminiowe"], k: 0, w: "Y - PVC, D - drut, Y - powłoka PVC." },
    { p: "Układ sieci, w którym przewody neutralny i ochronny są rozdzielone na całej długości, to", o: ["TN-S", "TN-C", "TT", "IT"], k: 0, w: "TN-C ma wspólny przewód PEN." },
    { p: "Stopień ochrony IP44 oznacza ochronę przed", o: ["ciałami stałymi większymi niż 1 mm i bryzgami wody", "pyłem i zanurzeniem", "tylko przed dotykiem palcem", "strumieniem wody pod ciśnieniem"], k: 0, w: "Pierwsza cyfra - ciała stałe, druga - woda." },
    { p: "Wyłącznik nadprądowy B16 to wyłącznik o", o: ["charakterystyce B i prądzie znamionowym 16 A", "prądzie różnicowym 16 mA", "mocy 16 kW", "16 biegunach"], k: 0, w: "Charakterystyka B zadziała zwarciowo przy 3-5 × In." },
    { p: "Do zabezpieczenia obwodu zasilającego silnik z dużym prądem rozruchowym stosuje się wyłącznik o charakterystyce", o: ["C lub D", "B", "A", "tylko gG"], k: 0, w: "Charakterystyka B mogłaby zadziałać podczas rozruchu." },
    { p: "Wyłącznik różnicowoprądowy o prądzie 30 mA stosuje się jako ochronę", o: ["uzupełniającą przed porażeniem", "przed przeciążeniem przewodów", "przed przepięciami atmosferycznymi", "przed spadkiem napięcia"], k: 0, w: "RCD nie zastępuje wyłącznika nadprądowego." },
    { p: "Odbiornik II klasy ochronności ma", o: ["izolację podwójną lub wzmocnioną", "zacisk przewodu ochronnego PE", "zasilanie napięciem SELV", "metalową obudowę uziemioną"], k: 0, w: "Klasa II - symbol dwóch kwadratów, bez przewodu PE." },
    { p: "Aby zmienić kierunek obrotów silnika trójfazowego, należy", o: ["zamienić miejscami dwa przewody fazowe", "zamienić przewód N z PE", "zmienić połączenie z gwiazdy w trójkąt", "odłączyć jedną fazę"], k: 0, w: "Zamiana dwóch faz odwraca kierunek wirowania pola." },
    { p: "Rozruch silnika metodą gwiazda-trójkąt stosuje się w celu", o: ["zmniejszenia prądu rozruchowego", "zwiększenia prędkości obrotowej", "zmiany kierunku obrotów", "hamowania silnika"], k: 0, w: "W połączeniu w gwiazdę prąd rozruchu jest około 3 razy mniejszy." },
    { p: "Prędkość synchroniczna silnika czterobiegunowego (2 pary biegunów) zasilanego z sieci 50 Hz wynosi", o: ["1500 obr/min", "3000 obr/min", "1000 obr/min", "750 obr/min"], k: 0, w: "n = 60 × 50 ÷ 2 = 1500 obr/min." },
    { p: "W układzie sterowania stycznikiem z kilku miejsc przyciski STOP łączy się", o: ["szeregowo", "równolegle", "w trójkąt", "z przewodem PE"], k: 0, w: "Każdy STOP musi przerwać obwód; START łączy się równolegle." },
    { p: "Trzecią z pięciu zasad bezpiecznej pracy przy urządzeniach elektrycznych jest", o: ["sprawdzenie braku napięcia", "osłonięcie części sąsiednich", "uziemienie i zwarcie", "wyłączenie napięcia"], k: 0, w: "Kolejność: wyłączyć, zabezpieczyć, sprawdzić brak napięcia, uziemić i zewrzeć, osłonić." },
    { p: "Dopuszczalna długotrwale wartość napięcia dotykowego przemiennego w warunkach normalnych wynosi", o: ["50 V", "25 V", "120 V", "230 V"], k: 0, w: "Dla prądu stałego - 120 V." },
    { p: "Dla obwodu zabezpieczonego wyłącznikiem B16 (Ia = 80 A) przy U0 = 230 V maksymalna impedancja pętli zwarcia wynosi około", o: ["2,88 Ω", "14,4 Ω", "0,29 Ω", "8 Ω"], k: 0, w: "Zs ≤ U0 ÷ Ia = 230 ÷ 80 ≈ 2,88 Ω." },
    { p: "Łącznik umożliwiający sterowanie jednym punktem świetlnym z dwóch miejsc to łącznik", o: ["schodowy", "świecznikowy", "jednobiegunowy", "krzyżowy jako jedyny"], k: 0, w: "Do sterowania z trzech i więcej miejsc dodaje się łączniki krzyżowe." }
  ]
};
