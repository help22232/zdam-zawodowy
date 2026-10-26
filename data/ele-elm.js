window.KURSY = window.KURSY || {};

window.KURSY["ELE.05"] = {
  podstawowy: [
    {
      tytul: "Zasady eksploatacji urządzeń elektrycznych",
      tresc: `
<ul>
<li>Eksploatacja obejmuje: przyjęcie do eksploatacji, uruchamianie, obsługę, <b>konserwację</b>, remonty, naprawy, <b>pomiary i badania</b>, wycofanie z eksploatacji.</li>
<li>Dla urządzeń prowadzi się <b>instrukcję eksploatacji</b>, dokumentację techniczno-ruchową (DTR), dziennik operacyjny / książkę obiektu, protokoły pomiarów.</li>
<li>Prace przy urządzeniach elektrycznych wykonuje się na <b>polecenie pisemne lub ustne</b>; prace w warunkach szczególnego zagrożenia (np. pod napięciem, w pobliżu napięcia) — zespołowo, co najmniej dwie osoby.</li>
<li>Role: poleceniodawca, koordynujący, dopuszczający, nadzorujący, kierujący zespołem, członek zespołu.</li>
<li>Kwalifikacje: świadectwo <b>E</b> (eksploatacja) i <b>D</b> (dozór), ważne 5 lat.</li>
<li>Okresowe pomiary instalacji: co najmniej co <b>5 lat</b>; w warunkach szczególnych (wilgoć, wyziewy żrące, zagrożenie wybuchem) — co rok.</li>
</ul>`
    },
    {
      tytul: "Diagnostyka maszyn elektrycznych",
      tresc: `
<ul>
<li><b>Rezystancja izolacji uzwojeń</b> — megaomomierzem (np. 500 V lub 1 000 V DC); porównuje się z wymaganiami producenta i wcześniejszymi pomiarami. Wskaźnik absorpcji R60/R15 &gt; 1,3 świadczy o suchej izolacji.</li>
<li><b>Rezystancja uzwojeń</b> mostkiem lub metodą techniczną — wartości faz silnika trójfazowego powinny być zbliżone (asymetria wskazuje zwarcie zwojowe).</li>
<li><b>Termowizja</b> — wykrywa przegrzane połączenia, łożyska, styki.</li>
<li><b>Analiza drgań</b> — niewyważenie, zużycie łożysk, niewspółosiowość.</li>
<li>Pomiar prądu jałowego i obciążenia, temperatury obudowy, poziomu hałasu.</li>
<li>Łożyska smaruje się zgodnie z DTR (rodzaj i ilość smaru, interwał).</li>
<li>Przyczyny przegrzewania silnika: przeciążenie, praca na dwóch fazach (zanik fazy), zanieczyszczone kanały chłodzące, zbyt częste rozruchy, niewłaściwe napięcie.</li>
</ul>`
    },
    {
      tytul: "Kompensacja mocy biernej i efektywność energetyczna",
      tresc: `
<ul>
<li>Odbiorniki indukcyjne (silniki, transformatory, dławiki) pobierają <b>moc bierną indukcyjną</b>. Operator naliczy opłaty, gdy <b>tg φ &gt; 0,4</b> (cos φ &lt; ok. 0,93).</li>
<li>Kompensacja — <b>baterie kondensatorów</b> (indywidualna przy silniku, grupowa, centralna z regulatorem mocy biernej).</li>
<li>Przekompensowanie (moc bierna pojemnościowa) także bywa rozliczane — regulator dobiera stopnie baterii.</li>
<li>Efektywność: silniki wysokiej sprawności (klasy IE3, IE4), falowniki zamiast dławienia przepływu (pompy, wentylatory), oświetlenie LED ze sterowaniem, eliminacja pracy jałowej.</li>
<li>Taryfy: <b>G11</b> (gospodarstwa domowe, jednostrefowa), <b>G12</b> (dwustrefowa dzień/noc), C — odbiorcy biznesowi niskiego napięcia, B — średniego napięcia.</li>
</ul>
<pre>Moc bierna do skompensowania: Qc = P × (tg φ1 − tg φ2)
np. P = 50 kW, cos φ1 = 0,7 (tg ≈ 1,02), cel tg φ2 = 0,4
Qc = 50 × (1,02 − 0,4) ≈ 31 kvar</pre>`
    },
    {
      tytul: "Transformatory, napędy i oświetlenie",
      tresc: `
<ul>
<li>Transformator: przekładnia, straty jałowe (w rdzeniu) i obciążeniowe (w uzwojeniach); grupa połączeń, np. <b>Dyn11</b> (uzwojenie górne w trójkąt, dolne w gwiazdę z wyprowadzonym punktem neutralnym, przesunięcie 330°).</li>
<li>Olej transformatorowy chłodzi i izoluje; badanie wytrzymałości elektrycznej oleju.</li>
<li>Napędy z przemiennikami częstotliwości: parametry silnika z tabliczki, czas rozruchu i hamowania, ochrona termiczna; filtry EMC; dławiki.</li>
<li>Oświetlenie: natężenie oświetlenia [lx] mierzy się luksomierzem; strumień świetlny [lm]; skuteczność świetlna [lm/W]; oświetlenie awaryjne i ewakuacyjne — test co miesiąc (funkcjonalny) i co rok (pełny czas pracy).</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Planowanie konserwacji i dokumentacja pomiarów",
      tresc: `
<ul><li>Konserwacja <b>zapobiegawcza</b> (wg harmonogramu), <b>predykcyjna</b> (wg stanu, np. drgania, termowizja), <b>korekcyjna</b> (po awarii).</li>
<li>Protokół z pomiarów: obiekt, data, warunki, przyrządy (z numerami i datą wzorcowania), wyniki, wartości dopuszczalne, ocena, wnioski, podpis osoby z uprawnieniami.</li>
<li>Wskaźniki niezawodności: MTBF (średni czas między awariami), MTTR (średni czas naprawy).</li></ul>`
    }
  ],
  pytania: [
    { p: "Świadectwo kwalifikacyjne uprawniające do zajmowania się eksploatacją urządzeń na stanowisku dozoru oznacza się literą", o: ["D", "E", "G", "W"], k: 0, w: "E — eksploatacja." },
    { p: "Świadectwa kwalifikacyjne w grupie elektrycznej są ważne", o: ["5 lat", "1 rok", "10 lat", "bezterminowo"], k: 0, w: "Po tym czasie trzeba zdać egzamin ponownie." },
    { p: "Okresowe pomiary instalacji w pomieszczeniach o normalnych warunkach wykonuje się co najmniej co", o: ["5 lat", "rok", "10 lat", "6 miesięcy"], k: 0, w: "W warunkach szczególnych — co rok." },
    { p: "Prace w warunkach szczególnego zagrożenia wykonuje się", o: ["co najmniej w dwie osoby, na polecenie", "jednoosobowo bez polecenia", "tylko w nocy", "bez wyłączenia napięcia zawsze"], k: 0, w: "Zespołowo, z nadzorem i odpowiednimi środkami ochronnymi." },
    { p: "Wyraźnie różne rezystancje trzech uzwojeń silnika trójfazowego wskazują na", o: ["zwarcie zwojowe lub uszkodzenie uzwojenia", "dobry stan silnika", "zbyt niską temperaturę", "niewyważenie wirnika"], k: 0, w: "Uzwojenia faz powinny mieć zbliżone rezystancje." },
    { p: "Wskaźnik absorpcji R60/R15 większy niż 1,3 świadczy o", o: ["suchej, dobrej izolacji", "zawilgoceniu izolacji", "zwarciu uzwojeń", "uszkodzeniu łożysk"], k: 0, w: "Zawilgocona izolacja ma wskaźnik bliski 1." },
    { p: "Metoda wykrywania przegrzanych połączeń bez dotykania urządzeń to", o: ["termowizja", "pomiar rezystancji izolacji", "pomiar pętli zwarcia", "próba napięciowa"], k: 0, w: "Kamera termowizyjna pokazuje rozkład temperatur." },
    { p: "Typowa przyczyna przegrzewania silnika trójfazowego to", o: ["praca przy zaniku jednej fazy", "zbyt niskie obciążenie", "czyste kanały wentylacyjne", "zasilanie napięciem znamionowym"], k: 0, w: "Prąd w pozostałych fazach rośnie." },
    { p: "Moc bierną indukcyjną w zakładzie kompensuje się", o: ["bateriami kondensatorów", "dławikami", "rezystorami", "bezpiecznikami"], k: 0, w: "Kondensatory pobierają moc bierną pojemnościową." },
    { p: "Opłaty za ponadumowny pobór mocy biernej nalicza się, gdy tg φ przekracza zwykle", o: ["0,4", "1,0", "0,1", "2,0"], k: 0, w: "Odpowiada to cos φ ok. 0,93." },
    { p: "Taryfa dwustrefowa dla gospodarstw domowych to", o: ["G12", "G11", "C21", "B23"], k: 0, w: "Tańsza energia w określonych godzinach (np. noc)." },
    { p: "Silniki o najwyższej klasie sprawności wśród wymienionych to", o: ["IE4", "IE1", "IE2", "IE3"], k: 0, w: "Klasy wg normy IEC 60034-30-1." },
    { p: "Grupa połączeń transformatora Dyn11 oznacza m.in., że uzwojenie dolnego napięcia połączone jest w", o: ["gwiazdę z wyprowadzonym punktem neutralnym", "trójkąt", "zygzak", "gwiazdę bez punktu neutralnego"], k: 0, w: "D — górne w trójkąt, yn — dolne w gwiazdę z N." },
    { p: "Przyrząd do pomiaru natężenia oświetlenia to", o: ["luksomierz", "megaomomierz", "watomierz", "tachometr"], k: 0, w: "Wynik w luksach (lx)." },
    { p: "Oświetlenie awaryjne poddaje się próbie funkcjonalnej", o: ["co miesiąc", "co 5 lat", "tylko przy odbiorze", "nigdy"], k: 0, w: "Pełna próba czasu pracy — raz w roku." },
    { p: "Średni czas między awariami urządzenia oznacza się skrótem", o: ["MTBF", "MTTR", "OEE", "RCD"], k: 0, w: "MTTR — średni czas naprawy." },
    { p: "Konserwacja planowana na podstawie bieżącej oceny stanu urządzenia (np. drgań) to konserwacja", o: ["predykcyjna", "korekcyjna", "awaryjna", "bezplanowa"], k: 0, w: "Pozwala wymienić element przed awarią." },
    { p: "Protokół z pomiarów powinien zawierać m.in.", o: ["dane przyrządów pomiarowych, wyniki, wartości wymagane i ocenę", "tylko podpis wykonawcy", "wyłącznie datę", "cennik usług"], k: 0, w: "Podpisuje go osoba z uprawnieniami." },
    { p: "Olej w transformatorze pełni funkcję", o: ["chłodzącą i izolacyjną", "smarującą łożyska", "przewodzącą prąd", "dekoracyjną"], k: 0, w: "Bada się jego wytrzymałość elektryczną." },
    { p: "Zastosowanie przemiennika częstotliwości w napędzie pompy pozwala", o: ["regulować wydajność i oszczędzać energię", "zwiększyć napięcie sieci", "wyeliminować przewód PE", "pracować bez zabezpieczeń"], k: 0, w: "Zamiast dławienia zaworem zmienia się prędkość." }
  ],
  praktyka: {
    tytul: "Przegląd i pomiary silnika oraz obwodu zasilającego",
    model: "w", czas: 150,
    opis: `
<p>Wykonaj przegląd okresowy napędu: silnik indukcyjny trójfazowy 4 kW, 400 V, zasilany przez wyłącznik silnikowy i stycznik.</p>
<ol><li>Przygotuj stanowisko zgodnie z zasadami bezpiecznej pracy (wyłączenie, zabezpieczenie, sprawdzenie braku napięcia).</li>
<li>Wykonaj oględziny (obudowa, wentylator, tabliczka zaciskowa, przewody, łożyska).</li>
<li>Zmierz rezystancję uzwojeń, rezystancję izolacji uzwojeń względem obudowy i między fazami (1 000 V DC), ciągłość przewodu ochronnego.</li>
<li>Po załączeniu zmierz prądy fazowe na biegu jałowym.</li>
<li>Sporządź protokół z oceną i zaleceniami.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Bezpieczeństwo", pozycje: ["Wyłączenie napięcia i zabezpieczenie przed załączeniem (kłódka, tabliczka)", "Sprawdzenie braku napięcia wskaźnikiem"] },
      { grupa: "Rezultat 2: Pomiary", pozycje: ["Rezystancje trzech uzwojeń zmierzone i porównane (symetria)", "Rezystancja izolacji faza–obudowa i faza–faza zmierzona megaomomierzem 1 000 V", "Ciągłość PE potwierdzona", "Prądy fazowe na biegu jałowym zmierzone miernikiem cęgowym, porównane między fazami"] },
      { grupa: "Rezultat 3: Protokół", pozycje: ["Dane obiektu, przyrządy, warunki pomiarów", "Wyniki z wartościami dopuszczalnymi i oceną (pozytywna/negatywna)", "Zalecenia (np. smarowanie łożysk, czyszczenie wentylatora)"] },
      { grupa: "Przebieg", pozycje: ["Właściwe zakresy przyrządów, rozładowanie uzwojeń po pomiarze izolacji", "Porządek na stanowisku"] }
    ],
    rozwiazanie: `
<div class="tip">Po pomiarze rezystancji izolacji uzwojenia mogą być naładowane — rozładuj je (zwierając do PE przez przyrząd lub przewód), zanim ich dotkniesz. Rozłącz mostki na tabliczce zaciskowej, żeby mierzyć izolację między fazami.</div>`
  }
};

window.KURSY["ELM.02"] = {
  podstawowy: [
    {
      tytul: "Elementy elektroniczne",
      tresc: `
<ul>
<li><b>Rezystor</b> — oznaczenie paskowe: dwa (trzy) paski cyfr, mnożnik, tolerancja. Kolory: czarny 0, brązowy 1, czerwony 2, pomarańczowy 3, żółty 4, zielony 5, niebieski 6, fioletowy 7, szary 8, biały 9; złoty jako tolerancja — ±5%. Przykład: brązowy-czarny-czerwony = 10 × 10² = 1 kΩ.</li>
<li><b>Kondensator</b> — elektrolityczny ma <b>biegunowość</b> (minus oznaczony paskiem); ceramiczny — bez biegunowości; oznaczenie 104 = 10 × 10⁴ pF = 100 nF.</li>
<li><b>Dioda prostownicza</b> — przewodzi od anody do katody (pasek na katodzie), spadek ok. 0,7 V (krzemowa). <b>Dioda Zenera</b> — stabilizuje napięcie w kierunku zaporowym. <b>LED</b> — wymaga rezystora ograniczającego prąd.</li>
<li><b>Tranzystor bipolarny</b> NPN/PNP — wyprowadzenia: baza, emiter, kolektor; wzmocnienie prądowe β = I<sub>C</sub> ÷ I<sub>B</sub>. <b>MOSFET</b> — bramka, dren, źródło, sterowany napięciem.</li>
<li>Układy scalone: stabilizatory <b>78xx</b> (np. 7805 — +5 V), wzmacniacze operacyjne, mikrokontrolery.</li>
</ul>
<pre>Rezystor do LED: R = (U zasilania − U diody) ÷ I
np. (12 V − 2 V) ÷ 0,02 A = 500 Ω → wybieramy 510 Ω</pre>`
    },
    {
      tytul: "Układy analogowe i zasilacze",
      tresc: `
<ul>
<li>Prostowniki: jednopołówkowy (jedna dioda), dwupołówkowy, <b>mostek Graetza</b> (4 diody); po prostowniku — kondensator filtrujący, potem stabilizator.</li>
<li>Wartość szczytowa napięcia sinusoidalnego U<sub>m</sub> = U<sub>sk</sub> × √2 (230 V skuteczne ≈ 325 V szczytowo).</li>
<li>Wzmacniacz operacyjny: <b>odwracający</b> k = −R2 ÷ R1, <b>nieodwracający</b> k = 1 + R2 ÷ R1, wtórnik napięciowy k = 1.</li>
<li>Wzmocnienie w decybelach: k[dB] = 20 log (U<sub>wy</sub> ÷ U<sub>we</sub>); ×10 = 20 dB, ×100 = 40 dB.</li>
<li>Filtry: dolnoprzepustowy, górnoprzepustowy, pasmowoprzepustowy; częstotliwość graniczna filtru RC f = 1 ÷ (2πRC).</li>
</ul>`
    },
    {
      tytul: "Technika cyfrowa",
      tresc: `
<div class="tw"><table><tr><th>Bramka</th><th>Wyjście = 1, gdy</th></tr>
<tr><td>AND</td><td>wszystkie wejścia = 1</td></tr><tr><td>OR</td><td>co najmniej jedno wejście = 1</td></tr><tr><td>NOT</td><td>wejście = 0</td></tr>
<tr><td>NAND</td><td>nie wszystkie wejścia = 1</td></tr><tr><td>NOR</td><td>wszystkie wejścia = 0</td></tr><tr><td>XOR</td><td>wejścia są różne</td></tr></table></div>
<ul><li>Przerzutniki (RS, D, JK, T), liczniki, rejestry, multipleksery, dekodery.</li>
<li>Rodziny logiczne: TTL (zasilanie 5 V), CMOS (szeroki zakres napięć, mały pobór prądu).</li>
<li>Przetworniki A/C i C/A — rozdzielczość w bitach (8 bitów = 256 poziomów).</li></ul>`
    },
    {
      tytul: "Montaż, lutowanie i instalacje",
      tresc: `
<ul>
<li><b>THT</b> — elementy przewlekane; <b>SMD</b> — montaż powierzchniowy (lutowanie gorącym powietrzem, piecem rozpływowym).</li>
<li>Lutowanie: grot czysty i pobielony, temperatura grota zwykle 320–380°C, spoiwo bezołowiowe (stop SAC, topnienie ok. 217–220°C), topnik. Prawidłowy lut — gładki, błyszczący, wklęsły, obejmuje wyprowadzenie i pole lutownicze. <b>Zimny lut</b> — matowy, ziarnisty, słabe połączenie.</li>
<li>Ochrona ESD: opaska i mata antystatyczna, uziemione stanowisko.</li>
<li>Instalacje: antenowe RTV (kabel koncentryczny 75 Ω, złącza F, multiswitch dla satelity), domofonowe i wideodomofonowe, systemy alarmowe (centrala, czujki PIR, sygnalizatory), CCTV (kamery IP, rejestrator NVR, PoE), instalacje inteligentnego domu.</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Pomiary i uruchamianie układów",
      tresc: `
<ul><li>Multimetr: napięcie (równolegle), prąd (szeregowo), test diody (spadek ok. 0,6–0,7 V w kierunku przewodzenia).</li>
<li>Oscyloskop: amplituda (V/dz), okres (s/dz), częstotliwość f = 1 ÷ T; sonda ×10.</li>
<li>Uruchamianie: oględziny, sprawdzenie zwarć zasilania omomierzem, zasilanie z zasilacza laboratoryjnego z ograniczeniem prądu, pomiary napięć w punktach kontrolnych.</li></ul>`
    }
  ],
  pytania: [
    { p: "Rezystor z paskami brązowy, czarny, czerwony ma rezystancję", o: ["1 kΩ", "102 Ω", "10 kΩ", "100 Ω"], k: 0, w: "1, 0, mnożnik 10² → 1 000 Ω." },
    { p: "Rezystor z paskami żółty, fioletowy, pomarańczowy ma rezystancję", o: ["47 kΩ", "4,7 kΩ", "473 Ω", "470 kΩ"], k: 0, w: "4, 7, mnożnik 10³." },
    { p: "Kondensator ceramiczny oznaczony 104 ma pojemność", o: ["100 nF", "104 pF", "10 nF", "1 µF"], k: 0, w: "10 × 10⁴ pF = 100 000 pF = 100 nF." },
    { p: "Element, którego nieprawidłowe (odwrotne) podłączenie grozi jego uszkodzeniem lub wybuchem, to", o: ["kondensator elektrolityczny", "rezystor", "kondensator ceramiczny", "cewka powietrzna"], k: 0, w: "Ma biegunowość." },
    { p: "Spadek napięcia na przewodzącej diodzie krzemowej wynosi około", o: ["0,7 V", "0,1 V", "2 V", "5 V"], k: 0, w: "Dla diody germanowej ok. 0,3 V." },
    { p: "Dioda pracująca w kierunku zaporowym do stabilizacji napięcia to dioda", o: ["Zenera", "LED", "Schottky’ego jako prostownicza", "pojemnościowa"], k: 0, w: "Stosowana w prostych stabilizatorach." },
    { p: "Rezystor szeregowy dla diody LED (2 V, 20 mA) przy zasilaniu 5 V powinien mieć około", o: ["150 Ω", "250 Ω", "50 Ω", "1 kΩ"], k: 0, w: "(5 − 2) ÷ 0,02 = 150 Ω." },
    { p: "Stabilizator 7805 dostarcza napięcia", o: ["+5 V", "−5 V", "+7,8 V", "+12 V"], k: 0, w: "Seria 79xx daje napięcia ujemne." },
    { p: "Mostek Graetza to prostownik", o: ["dwupołówkowy z czterema diodami", "jednopołówkowy", "z jedną diodą Zenera", "trójfazowy z dwunastoma diodami"], k: 0, w: "Prostuje obie połówki sinusoidy." },
    { p: "Wartość szczytowa napięcia sieci 230 V (skuteczne) wynosi około", o: ["325 V", "230 V", "400 V", "163 V"], k: 0, w: "230 × √2." },
    { p: "Wzmocnienie wzmacniacza nieodwracającego z R1 = 1 kΩ, R2 = 9 kΩ wynosi", o: ["10", "9", "−9", "0,1"], k: 0, w: "k = 1 + 9/1 = 10." },
    { p: "Wzmocnienie napięciowe 100 razy to w decybelach", o: ["40 dB", "20 dB", "100 dB", "10 dB"], k: 0, w: "20 × log 100 = 40 dB." },
    { p: "Bramka, której wyjście ma stan 1 tylko wtedy, gdy wejścia są różne, to", o: ["XOR", "AND", "NOR", "NAND"], k: 0, w: "Exclusive OR." },
    { p: "Bramka NAND przy obu wejściach równych 1 daje na wyjściu", o: ["0", "1", "stan wysokiej impedancji", "stan nieokreślony"], k: 0, w: "NAND = zanegowane AND." },
    { p: "Przetwornik A/C o rozdzielczości 10 bitów ma liczbę poziomów kwantyzacji", o: ["1 024", "100", "512", "10"], k: 0, w: "2¹⁰ = 1 024." },
    { p: "Prawidłowe połączenie lutowane powinno być", o: ["gładkie, błyszczące i wklęsłe", "matowe i ziarniste", "kuliste i odstające", "pokryte czarnym nalotem"], k: 0, w: "Matowy, ziarnisty lut to zimny lut." },
    { p: "Montaż elementów bezpośrednio na powierzchni płytki to technologia", o: ["SMD", "THT", "wire-wrap", "DIP"], k: 0, w: "THT — elementy przewlekane." },
    { p: "Impedancja falowa kabla koncentrycznego w instalacjach RTV wynosi", o: ["75 Ω", "50 Ω", "100 Ω", "300 Ω"], k: 0, w: "50 Ω stosuje się w radiokomunikacji i sieciach starszego typu." },
    { p: "Czujka ruchu reagująca na zmiany promieniowania podczerwonego to czujka", o: ["PIR", "kontaktronowa", "dymu", "zalania"], k: 0, w: "Passive Infrared." },
    { p: "Sygnał na oscyloskopie ma okres 4 działki przy podstawie czasu 0,5 ms/dz. Częstotliwość wynosi", o: ["500 Hz", "2 kHz", "250 Hz", "50 Hz"], k: 0, w: "T = 2 ms, f = 1 ÷ 0,002 = 500 Hz." },
    { p: "Elementy wrażliwe na ładunki elektrostatyczne montuje się", o: ["na stanowisku ESD z opaską uziemiającą", "w rękawicach wełnianych", "na wykładzinie dywanowej", "bez zabezpieczeń"], k: 0, w: "Ładunki mogą uszkodzić struktury półprzewodnikowe." }
  ],
  praktyka: {
    tytul: "Montaż i uruchomienie zasilacza stabilizowanego 5 V",
    model: "w", czas: 150,
    opis: `
<p>Zmontuj na płytce drukowanej zasilacz według schematu: transformator 230/9 V (dostarczony jako moduł), mostek prostowniczy, kondensator filtrujący 1 000 µF/25 V, stabilizator 7805 z kondensatorami 100 nF na wejściu i wyjściu, dioda LED sygnalizacyjna z rezystorem.</p>
<ol><li>Sprawdź elementy (rezystancja, biegunowość, test diod).</li><li>Zmontuj i przylutuj elementy, zachowując biegunowość.</li><li>Sprawdź płytkę omomierzem pod kątem zwarć.</li><li>Uruchom układ i zmierz: napięcie przemienne na uzwojeniu wtórnym, napięcie po prostowniku i filtrze, napięcie wyjściowe bez obciążenia i z obciążeniem 47 Ω; obejrzyj tętnienia oscyloskopem.</li><li>Oblicz rezystor dla LED (2 V, 10 mA) przy wyjściu 5 V i porównaj z zamontowanym.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Montaż", pozycje: ["Wszystkie elementy na właściwych miejscach", "Kondensator elektrolityczny, mostek i LED z zachowaną biegunowością", "Luty gładkie, błyszczące, bez zwarć i zimnych lutów", "Nadmiar wyprowadzeń obcięty"] },
      { grupa: "Rezultat 2: Pomiary", pozycje: ["Napięcie wtórne ok. 9 V AC zmierzone na zakresie AC", "Napięcie po filtrze ok. 11–12 V DC", "Wyjście 5 V ±5% bez obciążenia i z obciążeniem", "Prąd obciążenia 47 Ω obliczony (ok. 106 mA)", "Przebieg tętnień obserwowany i opisany"] },
      { grupa: "Rezultat 3: Obliczenia", pozycje: ["R = (5 − 2) ÷ 0,01 = 300 Ω (najbliższa wartość szeregu, np. 300 lub 330 Ω)"] },
      { grupa: "Przebieg", pozycje: ["Stanowisko ESD, okulary przy cięciu wyprowadzeń", "Lutownica odkładana na podstawkę, porządek"] }
    ],
    rozwiazanie: `
<pre>U wtórne 9 V sk. → szczytowe 9 × 1,41 ≈ 12,7 V
po mostku (2 × 0,7 V spadku) ≈ 11,3 V na kondensatorze
7805 wymaga na wejściu min. ok. 7 V → zapas wystarczający
I obciążenia = 5 ÷ 47 ≈ 0,106 A</pre>`
  }
};

window.KURSY["ELM.03"] = {
  podstawowy: [
    {
      tytul: "Pneumatyka",
      tresc: `
<ul>
<li>Przygotowanie sprężonego powietrza: sprężarka, zbiornik, osuszacz, <b>zespół przygotowania powietrza</b> (filtr, reduktor z manometrem, ewentualnie smarownica). Typowe ciśnienie robocze ok. <b>6 bar</b> (0,6 MPa).</li>
<li><b>Zawory rozdzielające</b> oznacza się liczbą dróg / liczbą położeń: <b>3/2</b> (do siłownika jednostronnego działania), <b>5/2</b> i 5/3 (do siłownika dwustronnego działania). Sterowanie: ręczne, mechaniczne, pneumatyczne, elektryczne (elektrozawór, cewka 24 V DC).</li>
<li>Oznaczenia przyłączy: 1 — zasilanie, 2 i 4 — wyjścia robocze, 3 i 5 — odpowietrzenia, 12/14 — sterowanie.</li>
<li><b>Siłownik jednostronnego działania</b> — ruch powrotny sprężyną; <b>dwustronnego</b> — powietrze z obu stron tłoka.</li>
<li>Zawór dławiąco-zwrotny reguluje prędkość tłoczyska (najczęściej dławienie powietrza wylotowego).</li>
<li>Zawory logiczne: <b>„LUB”</b> (przełącznik obiegu), <b>„I”</b> (zawór podwójnego sygnału).</li>
<li>Siła siłownika: F = p × A (np. 6 bar = 0,6 MPa; tłok Ø 40 mm: A ≈ 1 257 mm² → F ≈ 754 N, bez strat).</li>
</ul>`
    },
    {
      tytul: "Hydraulika i elementy mechaniczne",
      tresc: `
<ul>
<li>Układ hydrauliczny: zbiornik, filtr, <b>pompa</b> (zębata, łopatkowa, tłoczkowa), <b>zawór przelewowy</b> (bezpieczeństwa — ogranicza maksymalne ciśnienie), rozdzielacz, siłownik lub silnik hydrauliczny, przewody. Ciśnienia rzędu kilkudziesięciu–kilkuset barów.</li>
<li>Olej hydrauliczny — właściwa lepkość, czystość; wymiana filtrów wg DTR.</li>
<li>Przekładnie: zębate (przełożenie i = z2 ÷ z1 = n1 ÷ n2), pasowe, łańcuchowe, ślimakowe (duże przełożenie, samohamowność).</li>
<li>Łożyska toczne (kulkowe, walcowe, stożkowe) i ślizgowe; montaż łożysk na wcisk — nacisk na pierścień osadzany na wcisk, nigdy przez elementy toczne.</li>
<li>Połączenia: rozłączne (gwintowe, wpustowe, wielowypustowe, kołkowe) i nierozłączne (spawane, nitowe, klejone, wciskowe).</li>
<li>Pomiary: suwmiarka (dokładność 0,1/0,05/0,02 mm), mikrometr (0,01 mm), czujnik zegarowy; tolerancje i pasowania (luźne, mieszane, ciasne).</li>
</ul>`
    },
    {
      tytul: "Czujniki i napędy elektryczne",
      tresc: `
<div class="tw"><table><tr><th>Czujnik</th><th>Wykrywa</th></tr>
<tr><td>indukcyjny</td><td>tylko metale, z niewielkiej odległości</td></tr>
<tr><td>pojemnościowy</td><td>metale i niemetale (tworzywa, ciecze, drewno)</td></tr>
<tr><td>optyczny (fotoelektryczny)</td><td>przerwanie lub odbicie wiązki światła</td></tr>
<tr><td>kontaktronowy</td><td>pole magnetyczne — np. magnes w tłoku siłownika (położenie krańcowe)</td></tr>
<tr><td>ultradźwiękowy</td><td>odległość, poziom</td></tr>
<tr><td>enkoder</td><td>położenie i prędkość obrotową</td></tr></table></div>
<ul><li>Wyjścia czujników: <b>PNP</b> (przełącza plus — typowe w Europie), <b>NPN</b> (przełącza masę); zwierne (NO) lub rozwierne (NC). Przewody czujników 3-przewodowych: brązowy +24 V, niebieski 0 V, czarny — sygnał.</li>
<li>Napędy: silnik indukcyjny, silnik prądu stałego, <b>silnik krokowy</b> (ruch o zadany kąt, sterowanie impulsami), <b>serwonapęd</b> (sprzężenie zwrotne z enkodera).</li></ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Schematy i dokumentacja układów mechatronicznych",
      tresc: `
<ul><li>Schematy pneumatyczne i hydrauliczne wg ISO 1219 (symbole zaworów: kwadraty = położenia, strzałki = przepływ).</li>
<li>Diagram ruchów (krok–droga) opisuje sekwencję, np. A+ B+ A− B− (wysunięcie A, wysunięcie B, wsunięcie A, wsunięcie B).</li>
<li>Schematy elektryczne, listy elementów, instrukcje montażu i DTR.</li>
<li>BHP: odcięcie zasilania sprężonym powietrzem i <b>odpowietrzenie układu</b> przed demontażem, okulary ochronne, ochrona przed zgnieceniem przez ruchome elementy.</li></ul>`
    }
  ],
  pytania: [
    { p: "Zawór 5/2 ma", o: ["5 dróg (przyłączy) i 2 położenia", "5 położeń i 2 drogi", "5 cewek i 2 przyłącza", "5 bar i 2 litry"], k: 0, w: "Stosowany do siłowników dwustronnego działania." },
    { p: "Do sterowania siłownikiem jednostronnego działania wystarcza zawór", o: ["3/2", "5/3", "4/3 hydrauliczny", "2/2 zawsze"], k: 0, w: "Powrót tłoka realizuje sprężyna." },
    { p: "Przyłącze oznaczone cyfrą 1 w zaworze pneumatycznym to", o: ["zasilanie sprężonym powietrzem", "odpowietrzenie", "wyjście robocze", "sterowanie"], k: 0, w: "2 i 4 — wyjścia, 3 i 5 — odpowietrzenia." },
    { p: "Zespół przygotowania powietrza składa się z", o: ["filtra, reduktora i (opcjonalnie) smarownicy", "sprężarki i siłownika", "zaworu 5/2 i tłumika", "pompy i zbiornika oleju"], k: 0, w: "Zapewnia czyste powietrze o stałym ciśnieniu." },
    { p: "Prędkość wysuwu tłoczyska siłownika reguluje się najczęściej", o: ["zaworem dławiąco-zwrotnym", "reduktorem ciśnienia", "zaworem 3/2", "manometrem"], k: 0, w: "Zwykle dławi się powietrze wylotowe." },
    { p: "Zawór pneumatyczny realizujący funkcję logiczną „LUB” to", o: ["przełącznik obiegu", "zawór podwójnego sygnału", "zawór zwrotny", "zawór szybkiego spustu"], k: 0, w: "Funkcję „I” realizuje zawór podwójnego sygnału." },
    { p: "Element ograniczający maksymalne ciśnienie w układzie hydraulicznym to", o: ["zawór przelewowy (bezpieczeństwa)", "rozdzielacz", "filtr", "siłownik"], k: 0, w: "Chroni pompę i przewody przed przeciążeniem." },
    { p: "Czujnik wykrywający wyłącznie przedmioty metalowe to czujnik", o: ["indukcyjny", "pojemnościowy", "optyczny", "ultradźwiękowy"], k: 0, w: "Pojemnościowy wykrywa też niemetale." },
    { p: "Położenie tłoka w siłowniku z magnesem wykrywa się czujnikiem", o: ["kontaktronowym", "indukcyjnym do metali kolorowych", "temperatury", "ciśnienia oleju"], k: 0, w: "Montuje się go na obudowie siłownika." },
    { p: "Czujnik PNP w stanie aktywnym podaje na wyjście", o: ["potencjał dodatni (+24 V)", "masę (0 V)", "napięcie przemienne", "sygnał analogowy 4–20 mA"], k: 0, w: "NPN przełącza masę." },
    { p: "W trzyprzewodowym czujniku przewód brązowy to zwykle", o: ["+24 V", "0 V", "sygnał wyjściowy", "PE"], k: 0, w: "Niebieski — 0 V, czarny — wyjście." },
    { p: "Silnik obracający wał o określony kąt w odpowiedzi na impuls to silnik", o: ["krokowy", "indukcyjny klatkowy", "uniwersalny", "synchroniczny bez sterownika"], k: 0, w: "Stosowany w drukarkach 3D, pozycjonerach." },
    { p: "Przełożenie przekładni zębatej z1 = 20, z2 = 60 wynosi", o: ["3", "0,33", "40", "80"], k: 0, w: "i = z2 ÷ z1 = 60 ÷ 20." },
    { p: "Przekładnią o dużym przełożeniu, często samohamowną, jest przekładnia", o: ["ślimakowa", "pasowa płaska", "łańcuchowa", "cierna"], k: 0, w: "Ślimak może napędzać ślimacznicę, ale nie odwrotnie." },
    { p: "Mikrometr pozwala mierzyć z dokładnością", o: ["0,01 mm", "0,1 mm", "1 mm", "0,5 mm"], k: 0, w: "Suwmiarka — zwykle 0,02–0,1 mm." },
    { p: "Montując łożysko na wałek na wcisk, siłę przykłada się do", o: ["pierścienia wewnętrznego", "pierścienia zewnętrznego", "kulek", "koszyka"], k: 0, w: "Siła nie może przechodzić przez elementy toczne." },
    { p: "Teoretyczna siła siłownika Ø 40 mm przy 6 bar wynosi około", o: ["754 N", "240 N", "7 540 N", "75 N"], k: 0, w: "F = 0,6 MPa × 1 257 mm²." },
    { p: "Przed demontażem elementów układu pneumatycznego należy", o: ["odciąć zasilanie i odpowietrzyć układ", "zwiększyć ciśnienie", "włączyć sprężarkę", "nasmarować przewody"], k: 0, w: "Sprężone powietrze może gwałtownie poruszyć elementy." },
    { p: "Zapis sekwencji A+ B+ A− B− oznacza", o: ["wysunięcie A, wysunięcie B, wsunięcie A, wsunięcie B", "dwa siłowniki pracujące jednocześnie", "dodawanie sygnałów", "kolejność montażu"], k: 0, w: "Plus — wysunięcie, minus — wsunięcie." },
    { p: "Napęd z silnikiem i enkoderem w pętli sprzężenia zwrotnego to", o: ["serwonapęd", "napęd krokowy bez sprzężenia", "przekładnia ślimakowa", "zawór proporcjonalny"], k: 0, w: "Pozwala dokładnie pozycjonować." },
    { p: "Połączenie wpustowe jest połączeniem", o: ["rozłącznym", "nierozłącznym", "spawanym", "klejonym"], k: 0, w: "Służy do przenoszenia momentu z wału na piastę." }
  ],
  praktyka: {
    tytul: "Montaż i uruchomienie elektropneumatycznego układu podajnika",
    model: "w", czas: 180,
    opis: `
<p>Podajnik: siłownik A (dwustronnego działania) wypycha detal z magazynu, siłownik B (jednostronnego) dociska go. Sekwencja: <b>A+ B+ B− A−</b> po naciśnięciu przycisku START.</p>
<ol><li>Na podstawie schematu zmontuj układ pneumatyczny: zespół przygotowania powietrza, elektrozawór 5/2 dla A, 3/2 dla B, zawory dławiąco-zwrotne, siłowniki, czujniki kontaktronowe A0, A1, B1.</li>
<li>Podłącz elektrozawory i czujniki do sterownika lub układu przekaźnikowego (24 V DC).</li>
<li>Ustaw ciśnienie 5 bar i prędkości siłowników.</li>
<li>Uruchom układ, sprawdź sekwencję i sporządź protokół.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Pneumatyka", pozycje: ["Elementy zamocowane na płycie zgodnie z rozmieszczeniem", "Przewody podłączone zgodnie ze schematem, bez załamań, przycięte prostopadle", "Ciśnienie 5 bar ustawione reduktorem", "Dławienie powietrza wylotowego, płynny ruch siłowników"] },
      { grupa: "Rezultat 2: Elektryka", pozycje: ["Czujniki kontaktronowe ustawione w położeniach krańcowych i zadziałanie sprawdzone diodą", "Przewody czujników: brązowy +24 V, niebieski 0 V, czarny sygnał", "Cewki elektrozaworów podłączone zgodnie ze schematem"] },
      { grupa: "Rezultat 3: Działanie", pozycje: ["Sekwencja A+ B+ B− A− realizowana po START", "Brak samoczynnego startu po załączeniu zasilania", "Protokół z ustawieniami i wynikiem testu"] },
      { grupa: "Przebieg", pozycje: ["Podłączanie przy odciętym powietrzu i zasilaniu", "Okulary ochronne, porządek na stanowisku"] }
    ],
    rozwiazanie: `
<div class="tip">Jeśli siłownik „szarpie” na początku ruchu, przestaw dławienie na powietrze wylotowe. Czujnik kontaktronowy przesuwaj wzdłuż siłownika przy wysuniętym tłoczysku, aż zaświeci dioda, i dokręć.</div>`
  }
};

window.KURSY["ELM.06"] = {
  podstawowy: [
    {
      tytul: "Sterowniki PLC — budowa i działanie",
      tresc: `
<ul>
<li>Budowa: zasilacz, jednostka centralna (CPU), pamięć programu i danych, moduły <b>wejść</b> i <b>wyjść</b> cyfrowych (np. 24 V DC; wyjścia przekaźnikowe lub tranzystorowe) i analogowych (0–10 V, 4–20 mA), moduły komunikacyjne.</li>
<li><b>Cykl pracy</b>: odczyt stanów wejść do obrazu procesu → wykonanie programu → zapis obrazu wyjść → komunikacja i diagnostyka. Czas cyklu — zwykle milisekundy.</li>
<li>Tryby: RUN, STOP; program wgrywa się z komputera w środowisku producenta (np. TIA Portal, GX Works, Codesys).</li>
<li>Sygnał analogowy 4–20 mA pozwala wykryć przerwę w obwodzie (0 mA = błąd).</li>
</ul>
<h4>Języki programowania (IEC 61131-3)</h4>
<ul><li><b>LD</b> — schemat drabinkowy (styki i cewki); <b>FBD</b> — bloki funkcyjne; <b>ST</b> — tekst strukturalny; <b>IL</b> — lista instrukcji (wycofywana); <b>SFC</b> — sekwencyjny schemat funkcjonalny (kroki i przejścia).</li></ul>`
    },
    {
      tytul: "Podstawowe funkcje programowe",
      tresc: `
<ul>
<li>Styk zwierny (NO) <code>--| |--</code> — przewodzi, gdy zmienna = 1; rozwierny (NC) <code>--|/|--</code> — gdy zmienna = 0; cewka <code>--( )--</code>.</li>
<li><b>Samopodtrzymanie</b>: START równolegle ze stykiem wyjścia, warunek STOP szeregowo. Fizyczny przycisk STOP jest rozwierny (NC), więc w spoczynku wejście ma stan 1 i w programie używa się styku zwiernego — naciśnięcie albo przerwa przewodu zatrzymuje silnik.</li>
<li>Instrukcje <b>SET/RESET</b> (S/R) — zapamiętanie stanu.</li>
<li><b>Timery</b>: <b>TON</b> — opóźnione załączenie, <b>TOF</b> — opóźnione wyłączenie, <b>TP</b> — impuls o stałym czasie.</li>
<li><b>Liczniki</b>: CTU (w górę), CTD (w dół), CTUD; wejście reset, wartość zadana PV, bieżąca CV.</li>
<li>Wykrywanie <b>zbocza</b> narastającego (P, R_TRIG) i opadającego (N, F_TRIG).</li>
<li>Operacje porównania, arytmetyczne, przesyłania danych, skalowanie sygnałów analogowych.</li>
</ul>
<pre>(* ST: samopodtrzymanie; STOP fizycznie NC, więc w spoczynku STOP = TRUE *)
Silnik := (START OR Silnik) AND STOP;

(* TON: lampka zapala się 5 s po uruchomieniu silnika *)
T1(IN := Silnik, PT := T#5s);
Lampka := T1.Q;</pre>`
    },
    {
      tytul: "Sieci przemysłowe, HMI i roboty",
      tresc: `
<ul>
<li>Sieci: <b>Profibus</b>, <b>Profinet</b> (Ethernet przemysłowy), <b>Modbus RTU</b> (RS-485) i <b>Modbus TCP</b>, EtherCAT, CANopen, IO-Link (komunikacja z czujnikami).</li>
<li><b>HMI</b> — panel operatorski: wizualizacja, alarmy, receptury, zmiana parametrów. <b>SCADA</b> — nadzór i akwizycja danych z wielu sterowników.</li>
<li><b>Roboty przemysłowe</b>: układy współrzędnych (bazowy, narzędzia TCP, użytkownika), tryby pracy (ręczny T1 z ograniczoną prędkością, automatyczny), programowanie z panelu uczącego (teach pendant) lub offline.</li>
<li>Bezpieczeństwo: obwód <b>zatrzymania awaryjnego</b> realizowany sprzętowo (przekaźniki bezpieczeństwa lub sterowniki bezpieczeństwa), wygrodzenia, kurtyny świetlne, wyłączniki drzwi, przycisk zezwolenia (enabling switch) na panelu robota.</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Eksploatacja i diagnostyka systemów mechatronicznych",
      tresc: `
<ul><li>Diagnostyka: diody stanu wejść/wyjść, bufor diagnostyczny sterownika, podgląd zmiennych online (monitoring), wymuszanie (force) — tylko przy zachowaniu zasad bezpieczeństwa.</li>
<li>Kopie zapasowe programu i konfiguracji przed zmianami; dokumentowanie zmian (wersje).</li>
<li>Konserwacja: czyszczenie czujników optycznych, kontrola przewodów i złączy, filtrów powietrza, smarowanie prowadnic, kontrola momentów dokręcenia.</li>
<li>Wskaźnik <b>OEE</b> = dostępność × wydajność × jakość.</li></ul>`
    }
  ],
  pytania: [
    { p: "Kolejność działań w cyklu pracy sterownika PLC to", o: ["odczyt wejść, wykonanie programu, zapis wyjść", "zapis wyjść, odczyt wejść, wykonanie programu", "wykonanie programu, odczyt wejść, zapis wyjść", "dowolna"], k: 0, w: "Program pracuje na obrazie procesu." },
    { p: "Język programowania PLC przypominający schemat stykowo-przekaźnikowy to", o: ["LD", "ST", "SFC", "IL"], k: 0, w: "Ladder Diagram." },
    { p: "Tekstowy język wysokiego poziomu z normy IEC 61131-3 to", o: ["ST", "LD", "FBD", "SFC"], k: 0, w: "Structured Text, podobny do Pascala." },
    { p: "Timer opóźniający załączenie wyjścia to", o: ["TON", "TOF", "TP", "CTU"], k: 0, w: "Wyjście Q = 1 po upływie czasu PT od pojawienia się IN." },
    { p: "Timer podtrzymujący wyjście przez zadany czas po zaniku sygnału wejściowego to", o: ["TOF", "TON", "CTD", "R_TRIG"], k: 0, w: "Opóźnione wyłączenie." },
    { p: "Licznik zliczający w górę oznacza się symbolem", o: ["CTU", "CTD", "TON", "MOV"], k: 0, w: "CTD — w dół." },
    { p: "Instrukcja wykrywająca zbocze narastające sygnału to", o: ["R_TRIG (P)", "F_TRIG (N)", "TOF", "RESET"], k: 0, w: "Daje impuls trwający jeden cykl programu." },
    { p: "Sygnał analogowy 4–20 mA pozwala łatwo wykryć", o: ["przerwę w obwodzie (prąd 0 mA)", "zmianę koloru przewodu", "zwarcie do PE w każdym przypadku", "temperaturę sterownika"], k: 0, w: "Wartość 0 mA jest poza zakresem sygnału." },
    { p: "Fizyczny przycisk STOP powinien być ze względów bezpieczeństwa", o: ["rozwierny (NC)", "zwierny (NO)", "bistabilny", "dotykowy"], k: 0, w: "Przerwa w przewodzie zadziała jak naciśnięcie STOP." },
    { p: "Obwód zatrzymania awaryjnego realizuje się", o: ["sprzętowo, np. przekaźnikiem lub sterownikiem bezpieczeństwa", "tylko programowo w zwykłym PLC", "przyciskiem na HMI", "wyłącznie przez wyłączenie komputera"], k: 0, w: "Musi działać niezależnie od błędów programu." },
    { p: "Panel operatorski do wizualizacji i obsługi maszyny to", o: ["HMI", "PLC", "VFD", "PID"], k: 0, w: "Human-Machine Interface." },
    { p: "Sieć przemysłowa oparta na Ethernecie, stosowana m.in. przez Siemensa, to", o: ["Profinet", "Profibus DP", "Modbus RTU", "CAN"], k: 0, w: "Profibus wykorzystuje RS-485." },
    { p: "Modbus RTU wykorzystuje warstwę fizyczną", o: ["RS-485", "Wi-Fi", "światłowód zawsze", "USB 3.0"], k: 0, w: "Modbus TCP działa w sieci Ethernet." },
    { p: "Tryb ręczny robota z ograniczoną prędkością, używany przy uczeniu punktów, to", o: ["T1", "AUTO", "EXT", "RUN"], k: 0, w: "Prędkość ograniczona zwykle do 250 mm/s." },
    { p: "Punkt środkowy narzędzia robota oznacza się skrótem", o: ["TCP", "PLC", "HMI", "OEE"], k: 0, w: "Tool Center Point." },
    { p: "Przycisk na panelu uczącym, który trzeba trzymać, by robot mógł się poruszać w trybie ręcznym, to", o: ["przycisk zezwolenia (enabling switch)", "przycisk START", "przycisk RESET", "przycisk MENU"], k: 0, w: "Zwykle trzypołożeniowy." },
    { p: "Wymuszanie stanu zmiennej w sterowniku (force) należy stosować", o: ["ostrożnie, z zachowaniem zasad bezpieczeństwa i zawsze je usuwać", "zawsze w trybie produkcji", "zamiast naprawy czujników na stałe", "bez informowania operatora"], k: 0, w: "Może uruchomić ruch maszyny." },
    { p: "Wskaźnik OEE oblicza się jako", o: ["dostępność × wydajność × jakość", "liczba robotów × czas", "prąd × napięcie", "liczba błędów ÷ czas"], k: 0, w: "Ogólna efektywność urządzeń." },
    { p: "Instrukcja ustawiająca zmienną na 1 i pozostawiająca ją w tym stanie do resetu to", o: ["SET (S)", "TON", "MOV", "NOT"], k: 0, w: "RESET (R) zeruje zmienną." },
    { p: "Język programowania z krokami i przejściami, dobry do opisu sekwencji, to", o: ["SFC", "LD", "ST", "FBD"], k: 0, w: "Sequential Function Chart." }
  ],
  praktyka: {
    tytul: "Program PLC sterujący taśmociągiem z licznikiem",
    model: "wk", czas: 150,
    opis: `
<p>Taśmociąg napędzany silnikiem M1 (wyjście Q0.0). Wejścia: START — I0.0 (NO), STOP — I0.1 (fizycznie NC), czujnik detalu B1 — I0.2, przycisk RESET licznika — I0.3. Lampka „partia gotowa” H1 — Q0.1.</p>
<ol><li>Napisz program (LD, FBD lub ST): START uruchamia taśmę (samopodtrzymanie), STOP ją zatrzymuje.</li>
<li>Czujnik B1 zlicza detale (zbocze narastające). Po 10 detalach taśma zatrzymuje się, a H1 świeci.</li>
<li>RESET zeruje licznik i gasi H1; ponowny START możliwy dopiero po RESET.</li>
<li>Po zatrzymaniu przyciskiem STOP taśma może ruszyć dopiero po 3 s (timer).</li>
<li>Przetestuj program w symulatorze lub na stanowisku, opisz zmienne (tablica symboli) i dodaj komentarze.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Struktura", pozycje: ["Tablica symboli z opisem wszystkich wejść i wyjść", "Komentarze w programie"] },
      { grupa: "Rezultat 2: Logika", pozycje: ["Samopodtrzymanie silnika ze STOP działającym na przerwę (NC)", "Licznik CTU zliczający zbocze narastające czujnika", "Zatrzymanie taśmy i zapalenie H1 po 10 detalach", "RESET zeruje licznik i gasi H1", "Blokada startu, dopóki licznik nie zostanie wyzerowany", "Timer (TOF lub TON) blokujący ponowny start przez 3 s po STOP"] },
      { grupa: "Rezultat 3: Test", pozycje: ["Wszystkie scenariusze sprawdzone w symulacji lub na stanowisku", "Program zapisany pod podaną nazwą"] }
    ],
    rozwiazanie: `
<pre>(* ST *)
R_B1(CLK := B1);
CTU_1(CU := R_B1.Q, RESET := RESET_BTN, PV := 10);
TOF_1(IN := NOT STOP_NC, PT := T#3s);   (* TRUE przez 3 s po zwolnieniu STOP *)
Blokada := CTU_1.Q OR TOF_1.Q;
IF START AND NOT Blokada THEN M1 := TRUE; END_IF;
IF NOT STOP_NC OR CTU_1.Q THEN M1 := FALSE; END_IF;
H1 := CTU_1.Q;</pre>
<div class="tip">Zbocze czujnika jest konieczne — bez niego jeden detal stojący przed czujnikiem zliczy się wiele razy (raz na cykl). Timer TOF utrzymuje blokadę jeszcze 3 s po zwolnieniu przycisku STOP.</div>`
  }
};
