/* Podkursy: MOT.02, MOT.05, MOT.06, ELE.02, ELE.05 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("MOT.02", [
    {
      id: "pomiary", tytul: "Pomiary w instalacji pojazdu", opis: "Wykonasz poprawnie pomiary napięcia, prądu, spadków napięć i prądu spoczynkowego oraz odczytasz przebiegi oscyloskopem.",
      lekcje: [
        { tytul: "Prawo Ohma w praktyce warsztatowej", tresc: `<h4>Podstawowe wzory</h4>
<ul>
<li><b>U = I × R</b>, <b>P = U × I = I² × R = U² / R</b>.</li>
<li>Rezystancja przewodu: <b>R = ρ × l / S</b>, dla miedzi ρ ≈ 0,0175 Ω·mm²/m.</li>
<li>Połączenie szeregowe: R = R1 + R2; równoległe: 1/R = 1/R1 + 1/R2 (dla dwóch: R = R1 × R2 / (R1 + R2)).</li>
</ul>
<h4>Przykłady</h4>
<ul>
<li>Żarówka 12 V / 55 W pobiera I = P / U = 55 / 12 ≈ <b>4,6 A</b>, jej rezystancja w stanie gorącym R = U² / P ≈ 2,6 Ω (na zimno jest kilka razy mniejsza).</li>
<li>Dwie żarówki 21 W na 12 V połączone równolegle: prąd 2 × 1,75 = 3,5 A, dobierasz bezpiecznik np. 7,5 A lub 10 A.</li>
<li>Przewód miedziany 2 m, 1 mm²: R = 0,0175 × 2 / 1 = 0,035 Ω; przy 10 A spadek napięcia 0,35 V.</li>
</ul>
<h4>Dobór bezpiecznika i przewodu</h4>
<p>Bezpiecznik chroni <b>przewód</b>, więc jego prąd znamionowy musi być większy od prądu odbiornika i mniejszy od obciążalności przewodu. Kolory bezpieczników płaskich: 5 A jasnobrązowy, 7,5 A brązowy, 10 A czerwony, 15 A niebieski, 20 A żółty, 25 A biały/przezroczysty, 30 A zielony.</p>
<div class="tw"><table><tr><th>Przekrój przewodu</th><th>Orientacyjne obciążenie ciągłe</th></tr>
<tr><td>0,5 mm²</td><td>do ok. 5-8 A</td></tr>
<tr><td>1,0 mm²</td><td>do ok. 10-15 A</td></tr>
<tr><td>2,5 mm²</td><td>do ok. 20-25 A</td></tr>
<tr><td>16-35 mm²</td><td>przewody rozrusznika i masy, setki A krótkotrwale</td></tr></table></div>
<h4>Oznaczenia kolorów przewodów (DIN)</h4>
<p>Przewody w pojazdach opisuje się skrótami: sw (czarny), rt (czerwony), br (brązowy, często masa), ws (biały), gn (zielony), bl (niebieski), ge (żółty), gr (szary). Na schematach zapis „1,5 rt/ws” oznacza przewód 1,5 mm² czerwony z białym paskiem.</p>
<div class="tip">Nigdy nie zastępuj przepalonego bezpiecznika większym ani drutem. Najpierw znajdź przyczynę (zwarcie do masy, uszkodzony odbiornik), potem wstaw bezpiecznik o wartości z dokumentacji.</div>` },
        { tytul: "Spadki napięć i prąd spoczynkowy", tresc: `<h4>Dlaczego rezystancja nie wystarcza</h4>
<p>Omomierz mierzy przewód małym prądem. Złącze ze śladową korozją lub jedna żyła przewodu może pokazać prawie 0 Ω, a pod prądem kilku amperów da duży spadek napięcia. Dlatego obwody ocenia się <b>pomiarem spadku napięcia pod obciążeniem</b>.</p>
<h4>Jak mierzyć</h4>
<ol>
<li>Włącz odbiornik (obwód musi płynąć prąd).</li>
<li>Woltomierz podłącz <b>równolegle do odcinka</b>, który badasz: np. plus akumulatora i zacisk 30 rozrusznika, albo minus akumulatora i obudowa silnika.</li>
<li>Odczyt to strata napięcia na tym odcinku.</li>
</ol>
<div class="tw"><table><tr><th>Odcinek</th><th>Orientacyjny dopuszczalny spadek</th></tr>
<tr><td>połączenie, złącze, wyłącznik</td><td>ok. 0,1 V</td></tr>
<tr><td>przewód zasilający odbiornik</td><td>ok. 0,2-0,3 V</td></tr>
<tr><td>obwód główny rozrusznika (plus lub masa) przy rozruchu</td><td>ok. 0,5 V</td></tr>
<tr><td>obwód ładowania (B+ alternatora do + akumulatora)</td><td>ok. 0,2-0,4 V</td></tr></table></div>
<h4>Prąd spoczynkowy (upływ)</h4>
<ul>
<li>Objaw: akumulator rozładowuje się na postoju. Mierzy się prąd pobierany przy wyłączonym zapłonie, zamkniętym i zablokowanym pojeździe.</li>
<li>Amperomierz łączy się <b>szeregowo</b> między klemę ujemną a biegun akumulatora (lub cęgi do małych prądów). Używaj zakresu 10 A na początku, potem mniejszego.</li>
<li>Trzeba odczekać, aż sterowniki przejdą w <b>tryb uśpienia</b> (od kilku do ponad 30 minut). Wartość prawidłowa w nowoczesnym aucie zwykle do ok. <b>20-50 mA</b>.</li>
<li>Szukanie odbiornika: wyjmuj kolejno bezpieczniki i obserwuj spadek prądu, albo mierz miliwoltomierzem spadek napięcia na bezpiecznikach (prąd płynie tam, gdzie jest spadek).</li>
</ul>
<h4>Zasady pracy z multimetrem</h4>
<ul>
<li>Napięcie: równolegle; prąd: szeregowo (lub cęgi); rezystancja: obwód <b>bez zasilania</b>.</li>
<li>Gniazdo 10 A tylko do prądu: pomiar napięcia w tym gnieździe to zwarcie.</li>
<li>Prądu rozrusznika nie mierzy się multimetrem szeregowo, tylko cęgami prądowymi.</li>
</ul>
<div class="tip">Przy pomiarze prądu spoczynkowego nie otwieraj drzwi i nie włączaj zapłonu po podłączeniu amperomierza: wybudzisz sterowniki i prąd skoczy, a przy zakresie mA przepali się bezpiecznik miernika.</div>` },
        { tytul: "Oscyloskop i sygnały czujników", tresc: `<h4>Ustawienia oscyloskopu</h4>
<ul>
<li><b>Podstawa czasu</b> (oś X, ms/działkę) i <b>czułość</b> (oś Y, V/działkę). Sygnał powinien zajmować większość ekranu.</li>
<li><b>Wyzwalanie</b> (trigger): poziom i zbocze, od którego zaczyna się rysowanie, stabilizuje obraz.</li>
<li>Sprzężenie DC pokazuje pełne napięcie, AC odcina składową stałą (przydatne do tętnień alternatora).</li>
</ul>
<h4>Typowe przebiegi</h4>
<div class="tw"><table><tr><th>Element</th><th>Przebieg prawidłowy</th></tr>
<tr><td>czujnik indukcyjny (wał korbowy, ABS)</td><td>sinusoida, amplituda i częstotliwość rosną z prędkością; luka po brakujących zębach to znacznik GMP</td></tr>
<tr><td>czujnik Halla</td><td>prostokąt 0 V / 5 V (lub 12 V), amplituda stała</td></tr>
<tr><td>wtryskiwacz elektromagnetyczny</td><td>spadek do ok. 0 V w czasie otwarcia, potem szpilka indukcyjna (kilkadziesiąt V) przy zamknięciu</td></tr>
<tr><td>tętnienia alternatora (AC)</td><td>równe „garby”; brak co trzeciego lub nierówne oznacza uszkodzoną diodę</td></tr>
<tr><td>sonda lambda dwustanowa</td><td>przełączanie 0,1-0,9 V, kilka razy na sekundę</td></tr></table></div>
<h4>Sygnały PWM</h4>
<p>Wiele elementów wykonawczych (zawór regulacji ciśnienia, nastawnik turbo, wentylator) sterowanych jest sygnałem <b>PWM</b>. Liczy się <b>współczynnik wypełnienia</b>: czas włączenia / okres × 100%. Przykład: okres 10 ms, czas włączenia 3 ms, wypełnienie 30%. Częstotliwość f = 1 / T = 100 Hz.</p>
<h4>Odczyt danych bieżących</h4>
<p>Tester diagnostyczny pokazuje wartości rzeczywiste (np. temperatura, ciśnienie, kąt przepustnicy). Porównanie z oscyloskopem pozwala odróżnić usterkę czujnika od usterki przewodu: jeśli na złączu czujnika sygnał jest dobry, a sterownik widzi błąd, szukaj przerwy lub rezystancji w wiązce.</p>
<div class="tip">Do pomiaru na złączach używaj sond igłowych lub przejściówek, a nie przebijania izolacji ostrym grotem. Przebita izolacja przepuszcza wilgoć i po kilku miesiącach przewód koroduje.</div>` }
      ],
      pytania: [
        Q("Prąd pobierany przez żarówkę 12 V o mocy 60 W wynosi", "5 A", "0,2 A", "720 A", "12 A", "I = P / U = 60 / 12."),
        Q("Jakość połączeń w obwodzie rozrusznika najlepiej ocenić", "pomiarem spadku napięcia podczas rozruchu", "pomiarem rezystancji omomierzem", "oględzinami izolacji", "pomiarem gęstości elektrolitu", "Omomierz mierzy małym prądem i nie wykryje słabego połączenia."),
        Q("Amperomierz do pomiaru prądu spoczynkowego włącza się", "szeregowo między klemę a biegun akumulatora", "równolegle do zacisków akumulatora", "między B+ alternatora a masę", "w miejsce bezpiecznika głównego bez zasilania", "Równoległe podłączenie amperomierza do akumulatora to zwarcie."),
        Q("Prawidłowy prąd spoczynkowy nowoczesnego samochodu po uśpieniu sterowników wynosi zwykle", "do ok. 50 mA", "1-2 A", "około 10 A", "0 mA dokładnie", "Większy prąd rozładuje akumulator w ciągu kilku dni lub tygodni."),
        Q("Bezpiecznik płaski koloru czerwonego ma prąd znamionowy", "10 A", "15 A", "20 A", "5 A", "15 A niebieski, 20 A żółty."),
        Q("Czujnik Halla daje sygnał w postaci", "prostokątnej o stałej amplitudzie", "sinusoidy o rosnącej amplitudzie", "stałego napięcia 12 V", "szpilek wysokiego napięcia", "Sinusoidę o rosnącej amplitudzie daje czujnik indukcyjny."),
        Q("Sygnał PWM ma okres 20 ms i czas włączenia 5 ms. Współczynnik wypełnienia wynosi", "25%", "4%", "75%", "50%", "5 / 20 × 100% = 25%."),
        Q("Pomiar rezystancji elementu instalacji wykonuje się", "przy odłączonym zasilaniu obwodu", "przy włączonym odbiorniku", "przy pracującym silniku", "w gnieździe 10 A miernika", "Napięcie w obwodzie fałszuje pomiar i może uszkodzić miernik.")
      ]
    },
    {
      id: "rozruch-ladowanie", tytul: "Akumulator, rozruch i ładowanie", opis: "Zbadasz akumulator, rozrusznik i alternator oraz obsłużysz układy start-stop.",
      lekcje: [
        { tytul: "Akumulatory i ich badanie", tresc: `<h4>Rodzaje akumulatorów</h4>
<div class="tw"><table><tr><th>Typ</th><th>Cechy</th></tr>
<tr><td>kwasowo-ołowiowy klasyczny (SLI)</td><td>ciekły elektrolit, tańszy, do aut bez start-stop</td></tr>
<tr><td><b>EFB</b></td><td>wzmocnione płyty, prosty start-stop</td></tr>
<tr><td><b>AGM</b></td><td>elektrolit w macie szklanej, odporny na głębokie cykle, start-stop z rekuperacją; wymaga ładowania do ok. 14,4-14,7 V, nie lubi przegrzania</td></tr>
<tr><td>litowo-jonowy</td><td>akumulatory trakcyjne HV, czasem także 12 V</td></tr></table></div>
<h4>Oznaczenia</h4>
<p>Np. <b>12 V 70 Ah 680 A (EN)</b>: pojemność 70 Ah (przy rozładowaniu 20-godzinnym), prąd rozruchowy 680 A wg normy EN (prąd przy -18°C, przez 10 s, z napięciem nie niższym niż 7,5 V).</p>
<h4>Stopień naładowania</h4>
<div class="tw"><table><tr><th>Napięcie spoczynkowe</th><th>Gęstość elektrolitu</th><th>Naładowanie</th></tr>
<tr><td>12,6-12,8 V</td><td>1,28 g/cm³</td><td>100%</td></tr>
<tr><td>ok. 12,4 V</td><td>ok. 1,24 g/cm³</td><td>ok. 75%</td></tr>
<tr><td>ok. 12,2 V</td><td>ok. 1,20 g/cm³</td><td>ok. 50%</td></tr>
<tr><td>11,9 V i mniej</td><td>ok. 1,12 g/cm³</td><td>rozładowany</td></tr></table></div>
<p>Napięcie spoczynkowe mierzy się po kilku godzinach bez obciążenia i ładowania. Gęstość mierzy się <b>areometrem</b> lub refraktometrem w każdej celi; różnica między celami większa niż ok. 0,03-0,05 g/cm³ oznacza uszkodzoną celę.</p>
<h4>Testy</h4>
<ul>
<li><b>Tester konduktancyjny</b> (elektroniczny): wpisujesz prąd EN i typ, wynik: dobry, doładować, wymienić. Nie obciąża akumulatora.</li>
<li><b>Próba obciążeniowa</b>: obciążenie ok. połową prądu rozruchowego przez 10-15 s, napięcie nie może spaść poniżej ok. 9,6 V.</li>
</ul>
<h4>Ładowanie</h4>
<ul>
<li>Prąd ładowania prostownikiem klasycznym ok. <b>1/10 pojemności</b> (70 Ah: 7 A).</li>
<li>Podczas ładowania wydziela się <b>wodór</b> (mieszanina wybuchowa): wentylacja, brak iskier, ładowarkę włączaj po podłączeniu klem.</li>
<li>W pojazdach z czujnikiem akumulatora (IBS, na klemie ujemnej) nowy akumulator <b>rejestruje się</b> testerem, podając typ i pojemność. Bez tego sterownik źle ładuje nowy akumulator.</li>
</ul>
<div class="tip">Elektrolit to kwas siarkowy: okulary i rękawice. Rozcieńczając kwas, wlewa się kwas do wody, nigdy odwrotnie.</div>` },
        { tytul: "Rozrusznik", tresc: `<h4>Budowa i zasada</h4>
<ul>
<li>Silnik prądu stałego (zwykle z magnesami trwałymi i przekładnią planetarną), <b>włącznik elektromagnetyczny</b> (dwa uzwojenia: wciągające i trzymające), mechanizm sprzęgający (<b>bendiks</b>) ze sprzęgłem jednokierunkowym, szczotki i komutator.</li>
<li>Zacisk 30: stały plus z akumulatora (gruby przewód). Zacisk 50: sterowanie ze stacyjki lub przekaźnika. Zacisk 45 (lub M): wyjście z włącznika do silnika.</li>
<li>Po zasileniu zacisku 50 włącznik wciąga dźwignię, zębnik wchodzi w wieniec koła zamachowego, a styki mostkowe zwierają 30 z silnikiem.</li>
</ul>
<h4>Diagnoza objawów</h4>
<div class="tw"><table><tr><th>Objaw</th><th>Przyczyna</th></tr>
<tr><td>tylko klik, silnik się nie obraca</td><td>słaby akumulator, duży spadek napięcia na przewodach, wypalone styki włącznika, szczotki</td></tr>
<tr><td>brak kliknięcia</td><td>brak napięcia na zacisku 50 (stacyjka, przekaźnik, immobilizer, wyłącznik położenia sprzęgła lub dźwigni P/N)</td></tr>
<tr><td>rozrusznik się kręci, silnik nie</td><td>uszkodzone sprzęgło jednokierunkowe bendiksa</td></tr>
<tr><td>zgrzyt przy rozruchu</td><td>zużyte zęby zębnika lub wieńca</td></tr>
<tr><td>wolne obroty rozruchu</td><td>rozładowany akumulator, zużyte łożyska, zwarcie w wirniku, zła masa</td></tr></table></div>
<h4>Pomiary</h4>
<ul>
<li>Pobór prądu cęgami przy rozruchu: zwykle ok. <b>100-250 A</b> (benzyna), więcej w dieslu (do ok. 400 A i więcej). Wartość znacznie większa: przeciążenie mechaniczne lub zwarcie.</li>
<li>Napięcie na akumulatorze podczas rozruchu nie powinno spaść poniżej ok. <b>9,6-10 V</b>.</li>
<li>Spadek napięcia na plusie (akumulator - zacisk 30) i masie (akumulator - obudowa) do ok. 0,5 V każdy.</li>
<li>Na stole probierczym: próba bez obciążenia (prąd i obroty) i próba zahamowania.</li>
</ul>
<h4>Bezpieczeństwo</h4>
<p>Przed demontażem rozrusznika odłącz klemę <b>ujemną</b>. Zacisk 30 jest pod napięciem stale, a zwarcie kluczem do masy daje prąd setek amperów.</p>
<div class="tip">Objaw „klik i nic”: zanim wymienisz rozrusznik, zmierz napięcie na zacisku 30 i 50 podczas próby rozruchu. Brak spadku napięcia na akumulatorze i obecność 12 V na 30 oraz 50 wskazują na rozrusznik.</div>` },
        { tytul: "Alternator i układ ładowania", tresc: `<h4>Budowa</h4>
<ul>
<li><b>Stojan</b> z trójfazowym uzwojeniem (gwiazda lub trójkąt), <b>wirnik</b> z uzwojeniem wzbudzenia zasilanym przez szczotki i pierścienie ślizgowe, <b>mostek prostowniczy</b> (zwykle 6 diod mocy plus diody wzbudzenia), <b>regulator napięcia</b> (zwykle zintegrowany ze szczotkotrzymaczem).</li>
<li>Napięcie regulowane jest przez zmianę prądu wzbudzenia wirnika.</li>
<li>Zaciski: <b>B+</b> wyjście na akumulator, <b>D+</b> lampka kontrolna i wzbudzenie wstępne, <b>DFM</b> sygnał obciążenia, w nowszych <b>LIN</b> lub <b>COM</b> (sterowanie napięciem przez sterownik silnika).</li>
<li>Sprzęgło jednokierunkowe na kole pasowym (OAP) lub tłumik (OAD) zmniejsza drgania paska.</li>
</ul>
<h4>Diagnoza</h4>
<ol>
<li>Napięcie na akumulatorze przy 2000 obr/min bez odbiorników: <b>13,8-14,4 V</b> (w systemach inteligentnego ładowania zmienne, nawet 12,5-15 V, odczyt w testerze).</li>
<li>Z obciążeniem (światła, nawiew, ogrzewanie szyby): napięcie nie powinno spaść poniżej ok. 13,2-13,5 V.</li>
<li>Prąd ładowania cęgami na B+, przy obciążeniu porównany z prądem znamionowym alternatora (np. 90 A, 140 A).</li>
<li><b>Tętnienia</b> AC na B+: do ok. 0,5 V; większe przy uszkodzonej diodzie lub uzwojeniu.</li>
<li>Spadek napięcia B+ do plusa akumulatora i masa alternatora do minusa.</li>
</ol>
<div class="tw"><table><tr><th>Objaw</th><th>Możliwa przyczyna</th></tr>
<tr><td>napięcie powyżej 14,8 V</td><td>uszkodzony regulator: grozi przeładowaniem akumulatora i przepaleniem żarówek</td></tr>
<tr><td>napięcie ok. 12,5 V przy pracy silnika</td><td>brak ładowania: szczotki, regulator, przerwa w wzbudzeniu, pasek</td></tr>
<tr><td>lampka ładowania żarzy się słabo</td><td>uszkodzona dioda, zła masa</td></tr>
<tr><td>gwizd przy zimnym starcie</td><td>ślizgający się pasek, napinacz, sprzęgło koła pasowego</td></tr></table></div>
<h4>Start-stop</h4>
<p>Silnik gaśnie na postoju, jeśli spełnione są warunki: stan naładowania akumulatora (czujnik IBS), temperatura silnika, zapięty pas, zamknięte drzwi, odpowiednie zapotrzebowanie klimatyzacji. Najczęstsza przyczyna niedziałania: słaby lub niezarejestrowany akumulator.</p>
<div class="tip">Przy spawaniu na pojeździe odłącz akumulator i sterowniki według instrukcji producenta. Nie odłączaj akumulatora przy pracującym silniku: skok napięcia może uszkodzić diody alternatora i elektronikę.</div>` }
      ],
      pytania: [
        Q("Napięcie spoczynkowe w pełni naładowanego akumulatora 12 V wynosi około", "12,6-12,8 V", "11,8 V", "13,8-14,4 V", "10,5 V", "13,8-14,4 V to napięcie ładowania przez alternator."),
        Q("Gęstość elektrolitu w pełni naładowanym akumulatorze wynosi około", "1,28 g/cm³", "1,00 g/cm³", "1,12 g/cm³", "1,84 g/cm³", "1,12 g/cm³ oznacza akumulator rozładowany."),
        Q("Zalecany prąd ładowania akumulatora 60 Ah prostownikiem klasycznym wynosi", "6 A", "60 A", "0,6 A", "30 A", "Ok. 1/10 pojemności."),
        Q("Po wymianie akumulatora w pojeździe z czujnikiem IBS należy", "zarejestrować akumulator testerem", "wymienić alternator na mocniejszy", "odłączyć czujnik IBS od klemy", "naładować go prądem 1/2 pojemności", "Sterownik dopasowuje strategię ładowania do typu i wieku akumulatora."),
        Q("Rozrusznik obraca się, ale nie obraca wału silnika. Najbardziej prawdopodobną przyczyną jest", "uszkodzone sprzęgło jednokierunkowe", "rozładowany akumulator rozruchowy", "brak napięcia na zacisku 50", "uszkodzony regulator napięcia", "Ślizga się sprzęgło jednokierunkowe bendiksa. Przy braku napięcia na 50 rozrusznik w ogóle nie ruszy."),
        Q("Zacisk 50 rozrusznika służy do", "sterowania elektromagnesem ze stacyjki", "doprowadzenia stałego plusa z akumulatora", "połączenia obudowy z masą pojazdu", "zasilania lampki kontrolnej ładowania", "Stały plus z akumulatora to zacisk 30."),
        Q("Napięcie ładowania wynosi 15,3 V przy 2000 obr/min. Przyczyną jest najczęściej", "uszkodzony regulator napięcia", "zużyte szczotki", "ślizgający się pasek", "rozładowany akumulator", "Zużyte szczotki i pasek dają raczej za niskie napięcie."),
        Q("Duże tętnienia napięcia na zacisku B+ alternatora wskazują na", "uszkodzenie diody prostownika", "zbyt mały prąd spoczynkowy", "dobry stan regulatora", "zbyt wysoką gęstość elektrolitu", "Tętnienia mierzy się oscyloskopem lub miernikiem w trybie AC.")
      ]
    },
    {
      id: "sterowanie-silnika", tytul: "Czujniki i sterowanie silnika", opis: "Sprawdzisz czujniki i elementy wykonawcze układu sterowania silnika oraz zapłonu.",
      lekcje: [
        { tytul: "Czujniki rezystancyjne i potencjometryczne", tresc: `<h4>Zasilanie czujników</h4>
<p>Sterownik zasila większość czujników napięciem odniesienia <b>5 V</b> i własną masą czujnikową. Brak 5 V na jednym czujniku często oznacza zwarcie w innym czujniku na tym samym zasilaniu (kilka kodów naraz).</p>
<h4>Czujnik temperatury NTC</h4>
<ul>
<li>Termistor <b>NTC</b>: rezystancja <b>maleje</b> ze wzrostem temperatury (PTC rośnie).</li>
<li>Orientacyjnie: 20°C ok. 2-3 kΩ, 80-90°C ok. 200-300 Ω (wartości z dokumentacji).</li>
<li>Sygnał w dzielniku napięcia: zimny silnik ok. 3-4 V, ciepły ok. 0,5-1 V.</li>
<li>Przerwa w obwodzie: sterownik widzi ok. -40°C (wzbogaca mieszankę, włącza wentylator awaryjnie). Zwarcie do masy: bardzo wysoka temperatura.</li>
</ul>
<h4>Potencjometr przepustnicy i pedału</h4>
<ul>
<li>Trzy przewody: 5 V, masa, sygnał. Sygnał zmienia się płynnie, np. 0,5 V (zamknięta) do 4,5 V (pełne otwarcie), bez „dziur” na wykresie.</li>
<li>Elektroniczna przepustnica i pedał mają <b>dwa potencjometry</b> (sygnały rosnące razem lub przeciwnie) do kontroli wiarygodności.</li>
<li>Po czyszczeniu lub wymianie przepustnicy wykonuje się <b>adaptację</b> testerem.</li>
</ul>
<h4>Czujniki ciśnienia i przepływu</h4>
<div class="tw"><table><tr><th>Czujnik</th><th>Zasada</th><th>Sygnał</th></tr>
<tr><td>MAP (ciśnienie w kolektorze)</td><td>piezorezystancyjny</td><td>ok. 1 V jałowy (podciśnienie), ok. 4 V przy pełnym obciążeniu lub doładowaniu</td></tr>
<tr><td>MAF (masowy przepływomierz)</td><td>termoanemometr: grzany element chłodzony strumieniem powietrza</td><td>napięcie lub częstotliwość rosnące z przepływem</td></tr>
<tr><td>ciśnienie paliwa w szynie</td><td>membrana z tensometrem</td><td>0,5-4,5 V</td></tr></table></div>
<p>MAF sprawdza się porównując odczyt masy powietrza (kg/h lub g/s) z wartością zadaną w testerze. Zanieczyszczony MAF zaniża odczyt: spadek mocy, dym w dieslu.</p>
<h4>Czujnik spalania stukowego</h4>
<p>Piezoelektryczny, przykręcony do bloku. Wytwarza napięcie przemienne przy drganiach. Kluczowy jest <b>moment dokręcenia</b> (zbyt luźny czujnik nie wykrywa stuków, sterownik opóźnia zapłon i spada moc).</p>
<div class="tip">Kod „sygnał za wysoki” przy czujniku 5 V oznacza zwykle przerwę w masie lub zwarcie sygnału do 5 V; „sygnał za niski” to przerwa w zasilaniu lub zwarcie sygnału do masy.</div>` },
        { tytul: "Czujniki położenia i prędkości", tresc: `<h4>Czujnik położenia wału korbowego (CKP)</h4>
<ul>
<li>Odczytuje zęby koła impulsowego, np. <b>60-2</b> (60 zębów, 2 brakujące jako znacznik położenia). Bez jego sygnału silnik <b>nie uruchomi się</b>.</li>
<li><b>Indukcyjny</b>: dwa przewody, rezystancja ok. 0,5-1,5 kΩ, napięcie przemienne przy rozruchu kilka V. Ważna szczelina między czujnikiem a kołem (ok. 0,5-1,5 mm).</li>
<li><b>Hallotronowy</b> lub magnetorezystancyjny: trzy przewody (zasilanie, masa, sygnał), prostokąt.</li>
</ul>
<h4>Czujnik położenia wałka rozrządu (CMP)</h4>
<p>Rozpoznaje, który cylinder jest w suwie sprężania (dla wtrysku sekwencyjnego i zapłonu). Porównanie sygnałów CKP i CMP na oscyloskopie dwukanałowym pozwala wykryć <b>przeskoczony pasek lub rozciągnięty łańcuch rozrządu</b> (kod korelacji).</p>
<h4>Czujniki prędkości kół i pojazdu</h4>
<p>Czujniki ABS (patrz układ hamulcowy) dostarczają też sygnał prędkości do licznika, ESP, TPMS pośredniego i skrzyni biegów.</p>
<h4>Elementy wykonawcze</h4>
<div class="tw"><table><tr><th>Element</th><th>Kontrola</th></tr>
<tr><td>wtryskiwacz benzynowy wysokooporowy</td><td>rezystancja ok. 12-16 Ω; sterowanie masą przez sterownik, plus z przekaźnika</td></tr>
<tr><td>cewka zapłonowa (indywidualna)</td><td>uzwojenie pierwotne ułamek oma do ok. 1 Ω, wtórne kilka kΩ (jeśli dostępne); test na zamianę cylindrów</td></tr>
<tr><td>zawór regulacji ciśnienia, nastawniki</td><td>rezystancja, sygnał PWM, test elementów wykonawczych w testerze</td></tr>
<tr><td>silnik krokowy biegu jałowego</td><td>rezystancja uzwojeń, test w testerze</td></tr></table></div>
<h4>Zapłon</h4>
<ul>
<li>Napięcie zapłonu ok. 10-30 kV, czas palenia iskry ok. 1-2 ms.</li>
<li><b>Kąt wyprzedzenia zapłonu</b> rośnie z obrotami i maleje przy obciążeniu i stukach.</li>
<li>Diagnoza wypadania zapłonów (P0301 to cylinder 1): zamień cewkę z innym cylindrem. Jeśli błąd przeniósł się na inny cylinder, winna jest cewka; jeśli został, sprawdź świecę i wtryskiwacz.</li>
<li>Świece: przerwa między elektrodami ok. 0,7-1,1 mm (wg producenta), moment dokręcenia wg dokumentacji, kolor izolatora: jasnobrązowy prawidłowy, czarny nagar (za bogata mieszanka), biały (przegrzanie).</li>
</ul>
<div class="tip">Wyjmując cewkę lub przewód przy pracującym silniku, możesz dostać porażenie i uszkodzić katalizator niespalonym paliwem. Test „odłączania cylindrów” wykonuj testerem, nie ręcznie.</div>` },
        { tytul: "Diagnostyka OBD i procedura naprawy", tresc: `<h4>EOBD w praktyce</h4>
<ul>
<li>Gniazdo 16-pinowe: pin 16 plus akumulatora, piny 4 i 5 masa, piny 6 i 14 CAN-High i CAN-Low, pin 7 linia K.</li>
<li>Struktura kodu: litera (P, B, C, U), druga cyfra 0 = kod ogólny SAE, 1 = kod producenta. Np. <b>P0420</b> sprawność katalizatora poniżej progu, <b>P0335</b> czujnik położenia wału, <b>P0101</b> wiarygodność MAF.</li>
<li>Kod może być <b>aktywny</b> (statyczny) lub <b>sporadyczny</b>; zapisywane są <b>dane zamrożone</b> (freeze frame): obroty, temperatura, prędkość w chwili wystąpienia.</li>
<li><b>Monitory gotowości</b> (readiness): po skasowaniu kodów muszą się ponownie wykonać podczas jazdy. Na SKP i w diagnostyce sprawdza się, czy nie skasowano błędów tuż przed badaniem.</li>
</ul>
<h4>Procedura diagnozy (metodyka)</h4>
<ol>
<li>Wywiad z klientem: kiedy występuje usterka, w jakich warunkach.</li>
<li>Potwierdzenie objawu (jazda próbna).</li>
<li>Odczyt kodów i danych zamrożonych, zapis przed skasowaniem.</li>
<li>Sprawdzenie zasilania i masy sterownika oraz czujnika (najczęstsze przyczyny).</li>
<li>Pomiary według schematu: zasilanie, masa, sygnał, przewody (ciągłość i zwarcia).</li>
<li>Naprawa, skasowanie kodów, jazda próbna, ponowny odczyt.</li>
</ol>
<h4>Przykład: P0117 (czujnik temperatury, sygnał za niski)</h4>
<ul>
<li>Odczyt w testerze: 140°C na zimnym silniku. Sterownik widzi bardzo niskie napięcie.</li>
<li>Odłączasz wtyczkę czujnika: odczyt spada do -40°C, czyli przewody i sterownik są dobre, a czujnik ma zwarcie wewnętrzne. Gdyby odczyt się nie zmienił, przewód sygnałowy ma zwarcie do masy.</li>
</ul>
<h4>Kodowanie i adaptacje</h4>
<p>Po wymianie sterownika, kluczyka, czujnika lub elementu wykonawczego często wymagane jest <b>kodowanie</b> (wariant wyposażenia), <b>adaptacja</b> (przepustnica, sprzęgło, skrzynia) lub <b>programowanie</b> (aktualizacja oprogramowania). Podczas programowania stosuje się zasilacz stabilizowany, aby napięcie nie spadło.</p>
<div class="tip">Nie wymieniaj części tylko na podstawie kodu. Kod P0171 (mieszanka uboga) rzadko oznacza uszkodzoną sondę lambda: częściej lewe powietrze, MAF lub słabą pompę paliwa.</div>` }
      ],
      pytania: [
        Q("Rezystancja czujnika temperatury typu NTC wraz ze wzrostem temperatury", "maleje", "rośnie", "nie zmienia się", "spada do zera przy 0°C", "Czujnik PTC zachowuje się odwrotnie."),
        Q("Większość czujników sterownika silnika zasilana jest napięciem odniesienia", "5 V", "12 V", "24 V", "230 V", "Stabilne 5 V pozwala dokładnie przeliczyć sygnał."),
        Q("Bez sygnału z czujnika położenia wału korbowego silnik", "nie uruchomi się", "pracuje normalnie", "pracuje tylko na wolnych obrotach", "przechodzi na zasilanie gazem", "Sterownik nie wie, kiedy wtrysnąć paliwo i wywołać iskrę."),
        Q("Koło impulsowe 60-2 oznacza", "60 podziałek, z których 2 zęby usunięto", "60 zębów i 2 czujniki położenia wału", "60 obrotów wału na 2 sekundy pracy", "2 cylindry przesunięte co 60 stopni", "Luka po dwóch zębach wyznacza położenie odniesienia wału."),
        Q("Kod P0302 przenosi się na cylinder 3 po zamianie cewek cylindrów 2 i 3. Uszkodzona jest", "cewka zapłonowa", "świeca zapłonowa cylindra 2", "wtryskiwacz cylindra 2", "czujnik spalania stukowego", "Usterka podąża za przełożonym elementem."),
        Q("Linie magistrali CAN w gnieździe OBD znajdują się na pinach", "6 i 14", "4 i 5", "7 i 15", "1 i 16", "Pin 16 to plus, piny 4 i 5 to masa."),
        Q("Typowa rezystancja wysokooporowego wtryskiwacza benzynowego wynosi", "ok. 12-16 Ω", "ok. 0,1 Ω", "ok. 2 kΩ", "ok. 1 MΩ", "Wtryskiwacze niskooporowe mają ok. 2-3 Ω."),
        Q("Po odłączeniu wtyczki czujnika temperatury tester zamiast 140°C pokazuje -40°C. Oznacza to", "uszkodzenie czujnika (zwarcie wewnętrzne)", "zwarcie przewodu sygnałowego do masy", "uszkodzenie sterownika", "brak zasilania 5 V", "Przewody i sterownik zareagowały prawidłowo na przerwę.")
      ]
    },
    {
      id: "oswietlenie-komfort", tytul: "Oświetlenie i wyposażenie dodatkowe", opis: "Naprawisz i ustawisz oświetlenie oraz zdiagnozujesz układy komfortu i klimatyzację.",
      lekcje: [
        { tytul: "Źródła światła i obwody oświetlenia", tresc: `<h4>Żarówki i oznaczenia</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zastosowanie</th><th>Moc (12 V)</th></tr>
<tr><td>H1, H7</td><td>jednowłóknowe: mijania lub drogowe</td><td>55 W</td></tr>
<tr><td>H4</td><td>dwuwłóknowa: mijania i drogowe</td><td>55/60 W</td></tr>
<tr><td>P21W</td><td>kierunkowskaz, światło cofania, stop</td><td>21 W</td></tr>
<tr><td>P21/5W</td><td>dwuwłóknowa: stop i pozycyjne tylne</td><td>21/5 W</td></tr>
<tr><td>W5W</td><td>pozycyjne, tablica rejestracyjna</td><td>5 W</td></tr>
<tr><td>D1S, D2S, D3S</td><td>ksenonowe (wyładowcze)</td><td>ok. 35 W</td></tr></table></div>
<ul>
<li>Bańki halogenowej nie dotyka się palcami (tłuszcz przegrzewa szkło).</li>
<li>Ksenon: przetwornica podaje zapłon rzędu <b>20-25 kV</b>, pracę ok. 85 V AC. Odłącz zasilanie przed pracą. Reflektory ksenonowe o strumieniu powyżej 2000 lm wymagają <b>automatycznego poziomowania</b> i <b>spryskiwaczy</b>.</li>
<li>LED: często z modułem sterującym; uszkodzony moduł zwykle wymienia się w całości.</li>
</ul>
<h4>Sterowanie</h4>
<ul>
<li>W nowszych pojazdach światła sterowane są przez <b>moduł nadwozia (BCM)</b>, który kontroluje prąd żarówek i zgłasza przepaloną żarówkę. Zamiana żarówki na LED bez homologacji daje błąd i jest niezgodna z przepisami.</li>
<li>Kierunkowskazy: częstotliwość ok. <b>90 ± 30 błysków na minutę</b> (1,5 Hz). Szybsze miganie oznacza przepaloną żarówkę w obwodzie.</li>
<li>Światła stop sterowane włącznikiem przy pedale hamulca, często podwójnym (sygnał też dla sterownika silnika i tempomatu).</li>
</ul>
<h4>Diagnoza obwodu żarówki</h4>
<ol>
<li>Sprawdź żarówkę (ciągłość włókna) i bezpiecznik.</li>
<li>Zmierz napięcie na oprawce przy włączonym świetle: powinno być bliskie napięciu akumulatora.</li>
<li>Zmierz spadek napięcia na masie oprawki: skorodowana masa daje słabe świecenie lub „podświetlanie” innych lamp (prąd szuka drogi przez inne żarówki).</li>
</ol>
<h4>Typowe pułapki egzaminacyjne</h4>
<ul>
<li>Reflektory ustawia się na pojeździe nieobciążonym (kierowca lub obciążnik 75 kg), przy prawidłowym ciśnieniu w oponach i korektorze w pozycji 0. Pochylenie granicy światła mijania podaje się w procentach, typowo 1-1,5%, a wartość jest podana na obudowie reflektora.</li>
<li>Tylne światło przeciwmgłowe można włączyć tylko przy włączonych światłach mijania, drogowych lub przeciwmgłowych przednich. Jego lampka kontrolna jest żółta (pomarańczowa).</li>
<li>Przekaźnik świateł: zacisk 30 to stały plus, 85 i 86 to cewka, 87 to wyjście do odbiornika.</li>
<li>Żarówka na zimno ma rezystancję kilka razy mniejszą niż w pracy, dlatego z pomiaru omomierzem nie oblicza się jej mocy.</li>
</ul>
<div class="tip">Gdy po włączeniu stopu słabo zapala się kierunkowskaz lub pozycja, prawie zawsze winna jest masa lampy tylnej.</div>` },
        { tytul: "Ustawienie świateł", tresc: `<h4>Wymagania</h4>
<ul>
<li>Światła mijania mają asymetryczną granicę światła i cienia: poziomy odcinek po lewej i wznoszący się (ok. 15°) po prawej, aby oświetlić pobocze i nie oślepiać jadących z naprzeciwka.</li>
<li>Pochylenie granicy wyrażone w procentach: <b>1% = 10 cm na 10 m</b>. Typowa wartość dla samochodu osobowego to ok. <b>1-1,5%</b> (podana przy reflektorze, np. „1,2%”).</li>
</ul>
<h4>Warunki przed pomiarem</h4>
<ol>
<li>Pojazd na płaskim, poziomym stanowisku.</li>
<li>Prawidłowe ciśnienie w oponach.</li>
<li>Obciążenie: zwykle kierowca lub 75 kg na fotelu kierowcy (wg wymagań).</li>
<li>Regulator korektora zasięgu w położeniu „0”.</li>
<li>Kilkukrotne ugięcie zawieszenia, aby się ułożyło.</li>
<li>Pojazd z zawieszeniem pneumatycznym lub dynamicznym poziomowaniem: tryb serwisowy lub kalibracja testerem.</li>
</ol>
<h4>Pomiar regloskopem</h4>
<ul>
<li>Urządzenie (<b>regloskop</b>) ustawia się przed reflektorem w odległości wg instrukcji (np. 30-50 cm), na wysokości środka reflektora, i ustawia równolegle do osi pojazdu (lusterko lub laser na dwa punkty nadwozia).</li>
<li>Na ekranie ustawia się wartość pochylenia (np. 1,2%). Granica światła i cienia musi leżeć na linii poziomej, a punkt załamania na znaczniku.</li>
<li>Regulacja śrubami reflektora: pion i poziom. Jeśli śruba lub uchwyt są zerwane, reflektor nadaje się do naprawy lub wymiany.</li>
</ul>
<h4>Przykład obliczeniowy</h4>
<p>Środek reflektora na wysokości 65 cm, pochylenie 1%. Na ścianie w odległości 10 m granica powinna być na wysokości 65 - 10 = <b>55 cm</b>. Przy 5 m: 65 - 5 = 60 cm.</p>
<h4>Inne światła</h4>
<p>Przeciwmgłowe przednie: granica pozioma, włączane przy pozycyjnych. Przeciwmgłowe tylne: jedno (po lewej lub na osi) lub dwa, włączane tylko ze światłami mijania, drogowymi lub przeciwmgłowymi przednimi, z kontrolką. Światła do jazdy dziennej (DRL) gasną lub ściemniają się po włączeniu mijania.</p>
<div class="tip">Na egzaminie pamiętaj o korektorze zasięgu w pozycji 0 i równoległym ustawieniu regloskopu. Pominięcie tych warunków unieważnia pomiar.</div>` },
        { tytul: "Układy komfortu i klimatyzacja", tresc: `<h4>Układy komfortu</h4>
<ul>
<li><b>Centralny zamek</b>: siłowniki w zamkach (silniczki), moduł komfortu lub BCM, pilot radiowy (433 MHz lub 868 MHz). Brak reakcji jednych drzwi: siłownik lub przewody w harmonijce drzwi (przetarte przy zawiasach).</li>
<li><b>Szyby elektryczne</b>: silnik prądu stałego, kierunek zmienia się przez zmianę biegunowości (przekaźniki lub mostek H). Funkcja antyprzytrzaskowa wymaga <b>normalizacji</b> (przytrzymanie przycisku w górnym położeniu) po odłączeniu akumulatora.</li>
<li>Podgrzewana szyba tylna: ścieżki grzejne, przerwę wykrywa się mierząc napięcie wzdłuż ścieżki (napięcie skacze w miejscu przerwy). Naprawa lakierem przewodzącym.</li>
<li><b>Immobilizer</b>: transponder w kluczyku, antena wokół stacyjki. Nowe kluczyki dopisuje się testerem z kodem PIN.</li>
</ul>
<h4>Klimatyzacja: obieg</h4>
<ol>
<li><b>Sprężarka</b> spręża gazowy czynnik (wysokie ciśnienie i temperatura).</li>
<li><b>Skraplacz</b> (przed chłodnicą) oddaje ciepło, czynnik się skrapla.</li>
<li><b>Osuszacz</b> (filtr) pochłania wilgoć.</li>
<li><b>Zawór rozprężny</b> (lub dysza dławiąca) obniża ciśnienie.</li>
<li><b>Parownik</b> w nagrzewnicy pobiera ciepło z powietrza w kabinie, czynnik paruje.</li>
</ol>
<h4>Czynniki i obsługa</h4>
<ul>
<li>Czynnik <b>R134a</b> (starsze pojazdy) i <b>R1234yf</b> (nowe pojazdy w UE, niski współczynnik GWP). Złącza serwisowe różnią się, czynników nie wolno mieszać.</li>
<li>Orientacyjne ciśnienia przy pracy (temp. ok. 25°C): strona niskiego ciśnienia ok. 1,5-3 bar, wysokiego ok. 12-18 bar.</li>
<li>Obsługa stacją: odzysk czynnika, <b>próżnia</b> (ok. 20-30 min, kontrola szczelności), napełnienie ilością z tabliczki (w gramach), dodanie oleju (PAG, POE do sprężarek elektrycznych).</li>
<li>Szczelność: barwnik UV, detektor elektroniczny, azot z wodorem pod ciśnieniem.</li>
<li>Prace z czynnikiem wymagają <b>certyfikatu F-gazowego</b> dla personelu. Nie wolno wypuszczać czynnika do atmosfery.</li>
</ul>
<div class="tip">W pojazdach elektrycznych i hybrydowych sprężarka klimatyzacji jest zasilana z instalacji HV i wymaga oleju izolacyjnego POE. Olej PAG w takim układzie może obniżyć rezystancję izolacji.</div>` }
      ],
      pytania: [
        Q("Żarówka H4 stosowana w reflektorach jest żarówką", "dwuwłóknową świateł mijania i drogowych", "jednowłóknową świateł pozycyjnych", "ksenonową", "do kierunkowskazów", "Moce włókien wynoszą 55/60 W."),
        Q("Pochylenie granicy światła mijania 1% oznacza obniżenie o", "10 cm na odległości 10 m", "1 cm na odległości 10 m", "1 m na odległości 10 m", "10 cm na odległości 1 m", "1% z 10 m to 0,1 m."),
        Q("Przed ustawieniem świateł regloskopem regulator korektora zasięgu należy ustawić w położeniu", "0", "maksymalnym", "środkowym", "dowolnym", "Położenie 0 odpowiada pojazdowi nieobciążonemu."),
        Q("Zbyt szybkie miganie kierunkowskazów po jednej stronie oznacza najczęściej", "przepaloną żarówkę kierunkowskazu", "uszkodzony alternator", "za wysokie napięcie akumulatora", "uszkodzony włącznik świateł stop", "Moduł lub przerywacz wykrywa mniejszy prąd obwodu."),
        Q("Gdy po wciśnięciu hamulca słabo zapala się tylne światło pozycyjne i kierunkowskaz, przyczyną jest zwykle", "uszkodzona masa lampy tylnej", "przepalony bezpiecznik świateł stop", "uszkodzony włącznik świateł", "za mała moc żarówki", "Prąd szuka drogi do masy przez inne włókna."),
        Q("Element klimatyzacji, w którym czynnik oddaje ciepło i skrapla się, to", "skraplacz", "parownik", "osuszacz", "zawór rozprężny", "Parownik pobiera ciepło z kabiny."),
        Q("Czynnik chłodniczy stosowany w nowych samochodach osobowych w UE to", "R1234yf", "R12", "R22", "R404A", "R134a stosowano w starszych pojazdach."),
        Q("Przed napełnieniem układu klimatyzacji czynnikiem stacja wykonuje", "próżnię (osuszenie i test szczelności)", "przepłukanie układu wodą destylowaną", "podgrzanie skraplacza do 80°C", "pomiar ciśnienia oleju silnikowego", "Wilgoć w układzie zamarza w zaworze i tworzy kwasy.")
      ]
    },
    {
      id: "sieci-bezpieczenstwo", tytul: "Sieci pokładowe i systemy bezpieczeństwa", opis: "Zdiagnozujesz magistrale CAN i LIN oraz bezpiecznie obsłużysz poduszki powietrzne i instalację HV.",
      lekcje: [
        { tytul: "Magistrala CAN i LIN", tresc: `<h4>CAN</h4>
<ul>
<li>Dwa skręcone przewody: <b>CAN-High</b> i <b>CAN-Low</b>, transmisja różnicowa (odporna na zakłócenia).</li>
<li>Stan spoczynkowy (recesywny): obie linie ok. <b>2,5 V</b>. Stan dominujący: CAN-H ok. 3,5 V, CAN-L ok. 1,5 V (High Speed CAN).</li>
<li>Prędkości: CAN napędowy do <b>500 kbit/s</b>, CAN komfortu ok. 100-125 kbit/s (Low Speed, odporny na przerwę jednej linii), CAN FD do kilku Mbit/s.</li>
<li>Na końcach magistrali High Speed są <b>rezystory terminujące 120 Ω</b>. Połączone równolegle dają <b>60 Ω</b> mierzone między CAN-H a CAN-L (przy wyłączonym zasilaniu).</li>
</ul>
<h4>Pomiary rezystancji CAN</h4>
<div class="tw"><table><tr><th>Wynik między CAN-H a CAN-L</th><th>Interpretacja</th></tr>
<tr><td>ok. 60 Ω</td><td>prawidłowo</td></tr>
<tr><td>ok. 120 Ω</td><td>przerwa w magistrali lub brak jednego rezystora (odłączony sterownik końcowy)</td></tr>
<tr><td>bliska 0 Ω</td><td>zwarcie między liniami</td></tr>
<tr><td>bardzo duża</td><td>przerwa przy gnieździe pomiarowym</td></tr></table></div>
<p>Na oscyloskopie dwukanałowym CAN-H i CAN-L powinny być lustrzanym odbiciem względem 2,5 V. Zwarcie linii do plusa lub masy unieruchamia magistralę High Speed (kody U, brak komunikacji).</p>
<h4>Szukanie usterki</h4>
<p>Odłączaj kolejno sterowniki (lub ich złącza): gdy komunikacja wraca, winny jest odłączony moduł albo jego wiązka. Uszkodzony sterownik może „zawieszać” całą sieć (ciągła transmisja).</p>
<h4>LIN, MOST, FlexRay</h4>
<ul>
<li><b>LIN</b>: jeden przewód, ok. 12 V w spoczynku, do <b>20 kbit/s</b>, jeden sterownik nadrzędny (master) i podrzędne (slave): wycieraczki, czujnik deszczu, lusterka, alternator.</li>
<li><b>MOST</b>: światłowód, multimedia. Uszkodzony moduł przerywa pierścień: brak dźwięku i ekranu. Światłowodu nie wolno ostro zginać.</li>
<li><b>FlexRay</b>: szybka (10 Mbit/s), deterministyczna, dla układów podwozia.</li>
<li><b>Gateway</b> (bramka) łączy sieci o różnych prędkościach i udostępnia je w gnieździe diagnostycznym.</li>
</ul>
<div class="tip">Rezystancję CAN mierzy się przy odłączonym akumulatorze, zwykle w gnieździe OBD na pinach 6 i 14. Pomiar pod napięciem daje bezsensowne wyniki.</div>` },
        { tytul: "Poduszki powietrzne i napinacze (SRS)", tresc: `<h4>Elementy</h4>
<ul>
<li>Sterownik SRS z czujnikiem przyspieszenia, czujniki satelitarne (przód, boki, drzwi), poduszki (kierowca, pasażer, boczne, kurtynowe, kolanowe), <b>napinacze pasów</b> pirotechniczne, ograniczniki siły napięcia pasa.</li>
<li><b>Taśma zwijana</b> (clock spring) pod kierownicą łączy poduszkę z wiązką przy obrocie kierownicy. Uszkodzona: kod rezystancji poduszki kierowcy, brak klaksonu lub przycisków.</li>
<li>Wyłącznik poduszki pasażera (kluczyk) przy montażu fotelika tyłem do kierunku jazdy.</li>
</ul>
<h4>Zasady bezpiecznej pracy</h4>
<ol>
<li>Wyłącz zapłon, odłącz klemę ujemną akumulatora i zabezpiecz ją przed przypadkowym kontaktem.</li>
<li>Odczekaj czas z instrukcji (zwykle ok. 1-10 minut, aby rozładowały się kondensatory rezerwowe sterownika).</li>
<li>Przed odłączeniem wtyczki poduszki rozładuj ładunki elektrostatyczne (dotknij masy).</li>
<li>Wymontowaną poduszkę kładź <b>stroną wybuchową do góry</b>, z dala od źródeł ciepła i elektryczności.</li>
<li>Nie mierz zapłonnika omomierzem ani nie podłączaj do niego napięcia. Rezystancję obwodu (ok. 2-4 Ω) mierzy sterownik; w warsztacie używa się <b>symulatora</b> (rezystora zastępczego) do sprawdzenia przewodów.</li>
<li>Po montażu podłącz akumulator przy wyłączonym zapłonie, nikt nie przebywa w kabinie, potem włącz zapłon: kontrolka powinna zgasnąć po kilku sekundach.</li>
</ol>
<h4>Po zderzeniu</h4>
<ul>
<li>Wymienia się wystrzelone poduszki i napinacze, a często także sterownik (zapisany <b>crash data</b>) i czujniki w strefie zgniotu, zgodnie z instrukcją.</li>
<li>Niewystrzelone poduszki z pojazdów do kasacji neutralizuje się w przewidziany sposób (stacja demontażu), nie wyrzuca do odpadów.</li>
</ul>
<h4>Systemy wspomagania kierowcy (ADAS)</h4>
<p>Kamera przednia (asystent pasa, rozpoznawanie znaków), radar (tempomat aktywny, hamowanie awaryjne), czujniki parkowania ultradźwiękowe. Po wymianie szyby czołowej, zderzaka lub regulacji geometrii wymagana jest <b>kalibracja</b> statyczna (tablice wzorcowe) lub dynamiczna (jazda próbna).</p>
<div class="tip">Kontrolka SRS świecąca stale oznacza wyłączony system: w razie wypadku poduszki mogą nie zadziałać. To usterka, której nie wolno zbagatelizować przy wydaniu auta.</div>` },
        { tytul: "Instalacje HV i nowe układy napędu", tresc: `<h4>Elementy pojazdu elektrycznego i hybrydowego</h4>
<ul>
<li><b>Akumulator trakcyjny</b> (Li-ion, NiMH w starszych hybrydach) o napięciu ok. 200-800 V DC, z systemem zarządzania (<b>BMS</b>) i chłodzeniem.</li>
<li><b>Falownik</b> zamienia napięcie stałe na przemienne trójfazowe dla silnika (synchroniczny z magnesami trwałymi lub asynchroniczny); przy hamowaniu pracuje odwrotnie (<b>rekuperacja</b>).</li>
<li><b>Przetwornica DC/DC</b> ładuje akumulator 12 V z instalacji HV (zastępuje alternator).</li>
<li><b>Ładowarka pokładowa</b> (AC), złącze Typ 2 (AC) i CCS Combo 2 (DC, szybkie ładowanie).</li>
<li>Przewody HV <b>pomarańczowe</b>, obwód pilotowy (interlock) wyłącza HV, gdy otwarto złącze lub pokrywę.</li>
</ul>
<h4>Odłączenie instalacji HV (zasada ogólna)</h4>
<ol>
<li>Wyłącz układ (READY OFF), wyjmij kluczyk i trzymaj z dala od pojazdu (min. kilka metrów przy kluczyku zbliżeniowym).</li>
<li>Odłącz akumulator 12 V.</li>
<li>Wyjmij <b>złącze serwisowe</b> (service disconnect) w rękawicach dielektrycznych.</li>
<li>Odczekaj czas rozładowania kondensatorów (np. 5-10 minut).</li>
<li>Sprawdź <b>brak napięcia</b> miernikiem kategorii CAT III 1000 V (sprawdzając miernik przed i po pomiarze na znanym źródle).</li>
<li>Zabezpiecz przed ponownym włączeniem i oznacz pojazd tablicą ostrzegawczą.</li>
</ol>
<h4>Środki ochrony</h4>
<ul>
<li>Rękawice dielektryczne klasy 0 (do 1000 V AC) sprawdzane przed użyciem (próba szczelności powietrzem), okulary lub osłona twarzy, narzędzia izolowane 1000 V, mata izolacyjna.</li>
<li>Prace przy HV wolno wykonywać osobom przeszkolonym i z uprawnieniami (w Polsce świadectwo kwalifikacyjne SEP oraz szkolenie producenta).</li>
</ul>
<h4>Pomiar rezystancji izolacji</h4>
<p>Miernikiem izolacji (np. napięciem 500 V lub 1000 V wg producenta) między przewodem HV a masą nadwozia. Wymaganie ogólne: co najmniej <b>100 Ω na wolt</b> dla obwodów DC i 500 Ω/V dla AC (przy 400 V: min. 40 kΩ DC); producenci zwykle podają wartości w MΩ. Sterownik stale kontroluje izolację i zgłasza błąd przy jej spadku.</p>
<div class="tip">Uszkodzony mechanicznie akumulator trakcyjny może zapalić się nawet po kilku dniach (ucieczka termiczna). Takie pojazdy odstawia się na wydzielony plac, z dala od budynków.</div>` }
      ],
      pytania: [
        Q("Rezystancja zmierzona między przewodami CAN-H i CAN-L sprawnej magistrali High Speed wynosi około", "60 Ω", "120 Ω", "0 Ω", "1 MΩ", "Dwa rezystory 120 Ω połączone równolegle dają 60 Ω."),
        Q("W stanie recesywnym napięcie na liniach CAN-H i CAN-L wynosi około", "2,5 V na obu liniach", "12 V na obu liniach", "5 V na CAN-H i 0 V na CAN-L", "0 V na obu liniach", "W stanie dominującym CAN-H rośnie do ok. 3,5 V, CAN-L spada do ok. 1,5 V."),
        Q("Pomiar 120 Ω między CAN-H a CAN-L oznacza najczęściej", "przerwę lub brak jednego terminatora", "prawidłowy stan magistrali CAN", "zwarcie jednej linii do masy", "zwarcie między liniami CAN-H i CAN-L", "Prawidłowy wynik to ok. 60 Ω."),
        Q("Magistrala LIN wykorzystuje", "jeden przewód sygnałowy", "dwa skręcone przewody", "światłowód", "przewód koncentryczny", "Światłowód stosuje magistrala MOST."),
        Q("Zapłonnika poduszki powietrznej nie wolno sprawdzać omomierzem, ponieważ", "prąd pomiarowy może spowodować jej odpalenie", "pomiar zawsze wskazuje 0 Ω", "zapłonnik ma rezystancję kilku MΩ", "omomierz uszkodzi sterownik ABS", "Do sprawdzania wiązki używa się symulatora."),
        Q("Wymontowaną poduszkę powietrzną należy odłożyć", "stroną wybuchową do góry", "stroną wybuchową do dołu", "na grzejniku, aby wyschła", "w dowolnej pozycji na stole", "Przy przypadkowym odpaleniu poduszka nie wystrzeli jak pocisk."),
        Q("Element pojazdu elektrycznego, który ładuje akumulator 12 V, to", "przetwornica DC/DC", "falownik trakcyjny", "ładowarka pokładowa AC", "alternator", "Pojazd elektryczny nie ma alternatora."),
        Q("Przed rozpoczęciem pracy przy instalacji HV, po wyjęciu złącza serwisowego i odczekaniu, należy", "potwierdzić brak napięcia miernikiem", "od razu odkręcić przewody HV", "podłączyć ładowarkę do gniazda", "włączyć tryb READY na chwilę", "Brak napięcia potwierdza się pomiarem, nie zakłada.")
      ]
    }
  ]);

  pod("MOT.05", [
    {
      id: "silnik", tytul: "Diagnostyka i naprawa silnika", opis: "Zmierzysz zużycie części silnika, ustawisz rozrząd i ocenisz szczelność cylindrów.",
      lekcje: [
        { tytul: "Pomiary części silnika", tresc: `<h4>Po co mierzymy</h4>
<p>Decyzję o naprawie (honowanie, szlif, wymiana) podejmuje się po porównaniu wyniku pomiaru z <b>wartością nominalną i graniczną</b> z dokumentacji producenta. Na egzaminie zawsze szukaj w zadaniu tabeli z tymi wartościami.</p>
<h4>Cylinder</h4>
<ul>
<li>Średnicę mierzy się <b>średnicówką czujnikową</b> (czujnik zegarowy na przedłużce), wyzerowaną na mikrometrze, w <b>trzech wysokościach</b> (góra, środek, dół) i w <b>dwóch płaszczyznach</b> prostopadłych (wzdłuż i w poprzek osi wału).</li>
<li><b>Owalizacja</b> = różnica średnic w dwóch płaszczyznach na tej samej wysokości.</li>
<li><b>Stożkowatość</b> = różnica średnic w tej samej płaszczyźnie na różnych wysokościach.</li>
<li>Największe zużycie jest zwykle w górnej części gładzi, na wysokości pierwszego pierścienia w GMP.</li>
</ul>
<h4>Tłok, pierścienie, wał</h4>
<ul>
<li>Tłok mierzy się <b>mikrometrem</b> prostopadle do osi sworznia, na wysokości podanej przez producenta. <b>Luz tłoka</b> = średnica cylindra minus średnica tłoka.</li>
<li><b>Luz w zamku pierścienia</b>: pierścień wsuwa się denkiem tłoka prostopadle do gładzi i mierzy szczelinę <b>szczelinomierzem</b> (typowo 0,2-0,5 mm). Luz osiowy pierścienia w rowku też szczelinomierzem.</li>
<li>Czopy wału korbowego: mikrometr (owalizacja i stożkowatość jak wyżej). <b>Bicie</b> wału: wał w pryzmach, czujnik zegarowy na środkowym czopie, odczyt to różnica max i min.</li>
<li>Luz w łożyskach ślizgowych: <b>Plastigage</b> (plastyczny pasek zgnieciony między czopem a panewką, szerokość odczytuje się ze skali).</li>
<li>Płaskość głowicy: liniał krawędziowy i szczelinomierz, wzdłuż, w poprzek i po przekątnych (typowa granica ok. 0,05 mm).</li>
</ul>
<h4>Przykład</h4>
<div class="tw"><table><tr><th>Wysokość</th><th>Płaszczyzna A</th><th>Płaszczyzna B</th></tr>
<tr><td>góra</td><td>76,54 mm</td><td>76,50 mm</td></tr>
<tr><td>dół</td><td>76,51 mm</td><td>76,50 mm</td></tr></table></div>
<p>Owalizacja na górze: 76,54 - 76,50 = <b>0,04 mm</b>. Stożkowatość w płaszczyźnie A: 76,54 - 76,51 = <b>0,03 mm</b>. Jeśli tłok ma 76,48 mm, luz tłoka liczony od największej średnicy = 0,06 mm.</p>
<div class="tip">Pułapka: owalizację liczy się na jednej wysokości, stożkowatość w jednej płaszczyźnie. Nie myl tych dwóch różnic.</div>` },
        { tytul: "Rozrząd i luz zaworowy", tresc: `<h4>Fazy rozrządu</h4>
<p>Zawory nie otwierają się dokładnie w GMP i DMP. Zawór dolotowy otwiera się <b>przed GMP</b>, zamyka <b>po DMP</b>; wylotowy otwiera się przed DMP, zamyka po GMP. Okres, w którym oba zawory są jednocześnie lekko otwarte w okolicy GMP, to <b>przekrycie zaworów</b> (poprawia płukanie cylindra).</p>
<h4>Kolejność zapłonu</h4>
<div class="tw"><table><tr><th>Silnik</th><th>Typowa kolejność</th><th>Odstęp zapłonów</th></tr>
<tr><td>R4</td><td>1-3-4-2</td><td>180° obrotu wału</td></tr>
<tr><td>R6</td><td>1-5-3-6-2-4</td><td>120°</td></tr>
<tr><td>R3</td><td>1-2-3</td><td>240°</td></tr></table></div>
<p>Odstęp = 720° podzielone przez liczbę cylindrów.</p>
<h4>Wymiana paska rozrządu</h4>
<ol>
<li>Ustaw tłok 1. cylindra w GMP suwu sprężania (znaki na kole wału i kole wałka).</li>
<li>Załóż <b>blokady</b> wałka rozrządu i wału korbowego (zestaw dla danego silnika).</li>
<li>Poluzuj napinacz, zdejmij pasek. Wymień komplet: pasek, napinacz, rolki prowadzące, zwykle także pompę cieczy, gdy jest napędzana paskiem rozrządu.</li>
<li>Załóż pasek zgodnie z kierunkiem obrotów, ustaw napięcie wg wskaźnika napinacza, dokręć kluczem dynamometrycznym.</li>
<li>Zdejmij blokady i obróć wał ręcznie o <b>dwa pełne obroty</b>, sprawdź ponownie znaki. Dopiero potem uruchom silnik.</li>
</ol>
<h4>Luz zaworowy</h4>
<ul>
<li>Sprawdza się na <b>zimnym</b> silniku (chyba że producent podaje inaczej), szczelinomierzem między krzywką a popychaczem lub dźwigienką a trzonkiem zaworu. Krzywka musi być odwrócona od popychacza (zawór zamknięty).</li>
<li>Typowe wartości: dolotowe ok. 0,15-0,25 mm, wylotowe ok. 0,25-0,35 mm (wylotowe są gorętsze, więc mają większy luz).</li>
<li>Metoda <b>zaworów w przekryciu</b> (R4, kolejność 1-3-4-2): gdy zawory 4. cylindra są w przekryciu, reguluje się 1. cylinder; pary: 1-4, 3-2, 4-1, 2-3.</li>
<li>Popychacze hydrauliczne kasują luz samoczynnie; stukają po rozruchu przy zbyt niskim ciśnieniu oleju lub zużyciu.</li>
</ul>
<div class="tip">Za mały luz: zawór nie domyka się, spada ciśnienie sprężania, przylgnia się wypala. Za duży luz: stuki, mniejsze otwarcie zaworu.</div>` },
        { tytul: "Szczelność cylindrów, smarowanie, chłodzenie", tresc: `<h4>Pomiar ciśnienia sprężania</h4>
<ul>
<li>Warunki: silnik nagrzany, wykręcone wszystkie świece (zapłonowe lub żarowe/wtryskiwacze w ZS), wyłączony wtrysk i zapłon, <b>przepustnica w pełni otwarta</b>, sprawny akumulator.</li>
<li>Orientacyjne wartości: ZI ok. 1,0-1,4 MPa (10-14 bar), ZS ok. 2,5-3,5 MPa. Ważniejsza od wartości bezwzględnej jest <b>różnica między cylindrami</b> (zwykle nie więcej niż ok. 10%).</li>
<li>Próba olejowa: po wlaniu kilku ml oleju ciśnienie rośnie, więc nieszczelne są pierścienie. Gdy nie rośnie: zawory lub uszczelka głowicy.</li>
<li>Niskie ciśnienie w dwóch <b>sąsiednich</b> cylindrach: przepalona uszczelka między nimi.</li>
</ul>
<h4>Test szczelności (spadku ciśnienia)</h4>
<p>Tłok w GMP sprężania, do cylindra wprowadza się sprężone powietrze, tester pokazuje ubytek w %. Do ok. 10% stan dobry, powyżej ok. 25% zły. Miejsce ucieczki powietrza wskazuje usterkę:</p>
<div class="tw"><table><tr><th>Słychać syk / widać</th><th>Usterka</th></tr>
<tr><td>w kolektorze dolotowym, przepustnicy</td><td>nieszczelny zawór dolotowy</td></tr>
<tr><td>w rurze wydechowej</td><td>nieszczelny zawór wylotowy</td></tr>
<tr><td>we wlewie oleju, odmie</td><td>pierścienie, gładź</td></tr>
<tr><td>bąbelki w zbiorniczku płynu</td><td>uszczelka głowicy, pęknięta głowica</td></tr></table></div>
<p>Dodatkowo na uszczelkę głowicy: <b>tester CO₂</b> w płynie chłodzącym (płyn indykatorowy zmienia kolor), wzrost ciśnienia w układzie chłodzenia, emulsja pod korkiem oleju.</p>
<h4>Smarowanie</h4>
<ul>
<li>Ciśnienie oleju mierzy się manometrem w miejscu czujnika: na biegu jałowym na ciepłym silniku zwykle min. ok. 0,5-1 bar, przy 2000 obr/min ok. 2-4 bar.</li>
<li>Przyczyny niskiego ciśnienia: zużyte panewki, pompa, zapchany smok, za rzadki lub rozcieńczony paliwem olej, za niski poziom.</li>
<li>Poziom oleju sprawdza się na płaskim podłożu, kilka minut po wyłączeniu, między znakami MIN i MAX. Nadmiar oleju też szkodzi (pienienie, uszczelniacze, DPF).</li>
</ul>
<h4>Chłodzenie</h4>
<ul>
<li>Odporność płynu na zamarzanie mierzy się <b>refraktometrem</b> lub areometrem. Mieszanka 50/50 glikolu i wody chroni do ok. -35°C.</li>
<li>Test termostatu: w naczyniu z wodą i termometrem, sprawdza się temperaturę początku otwarcia i skok.</li>
<li>Szczelność układu: pompka z manometrem na wlewie (ciśnienie z korka, ok. 1,0-1,5 bar), ciśnienie nie może spadać.</li>
</ul>` }
      ],
      pytania: [
        Q("Owalizacja cylindra to różnica średnic zmierzonych", "w dwóch prostopadłych płaszczyznach na tej samej wysokości", "w jednej płaszczyźnie na różnych wysokościach", "dwóch sąsiednich cylindrów", "cylindra i tłoka", "Różnica na różnych wysokościach to stożkowatość."),
        Q("Do pomiaru średnicy cylindra stosuje się", "średnicówkę czujnikową", "szczelinomierz", "liniał krawędziowy", "areometr", "Średnicówkę zeruje się na mikrometrze ustawionym na wymiar nominalny."),
        Q("Luz w zamku pierścienia tłokowego mierzy się", "szczelinomierzem w cylindrze", "mikrometrem na zdjętym tłoku", "suwmiarką na wyjętym pierścieniu", "paskiem Plastigage w rowku", "Pierścień ustawia się prostopadle do gładzi, wpychając go denkiem tłoka."),
        Q("Typowa kolejność zapłonu w silniku rzędowym czterocylindrowym to", "1-3-4-2", "1-2-3-4", "1-4-2-3", "1-2-4-3", "Odstęp między zapłonami wynosi 180° obrotu wału."),
        Q("Po założeniu nowego paska rozrządu i zdjęciu blokad należy przede wszystkim", "obrócić wał ręcznie o dwa obroty i sprawdzić znaki", "od razu uruchomić silnik na wysokich obrotach", "wymienić olej silnikowy", "zmierzyć ciśnienie sprężania", "Kontrola znaków po dwóch obrotach wyklucza przeskoczenie zęba."),
        Q("Wzrost ciśnienia sprężania po wlaniu oleju do cylindra świadczy o", "zużyciu pierścieni tłokowych", "nieszczelności zaworu wylotowego", "pękniętej głowicy", "zbyt dużym luzie zaworowym", "Olej chwilowo uszczelnia pierścienie; zawory nie reagują na olej."),
        Q("Podczas testu szczelności cylindra słychać syk w rurze wydechowej. Oznacza to nieszczelność", "zaworu wylotowego", "zaworu dolotowego", "pierścieni tłokowych", "uszczelki pokrywy zaworów", "Zawór dolotowy objawia się syczeniem w kolektorze dolotowym."),
        Q("Odporność płynu chłodzącego na zamarzanie sprawdza się", "refraktometrem", "manometrem", "multimetrem", "stroboskopem", "Refraktometr wskazuje temperaturę krzepnięcia na podstawie współczynnika załamania światła.")
      ]
    },
    {
      id: "zasilanie", tytul: "Zasilanie i układ wylotowy", opis: "Zdiagnozujesz układy wtryskowe, doładowanie i systemy oczyszczania spalin.",
      lekcje: [
        { tytul: "Wtrysk benzyny i lambda", tresc: `<h4>Rodzaje wtrysku benzyny</h4>
<div class="tw"><table><tr><th>System</th><th>Miejsce wtrysku</th><th>Ciśnienie paliwa</th></tr>
<tr><td>jednopunktowy (SPI)</td><td>nad przepustnicą</td><td>ok. 1 bar</td></tr>
<tr><td>wielopunktowy (MPI)</td><td>kolektor przed zaworem dolotowym</td><td>ok. 3-4 bar</td></tr>
<tr><td>bezpośredni (GDI, FSI, TSI)</td><td>komora spalania</td><td>ok. 50-350 bar</td></tr></table></div>
<p>W MPI pompa w zbiorniku i regulator ciśnienia; pomiar manometrem na listwie. Spadek ciśnienia po wyłączeniu silnika szybciej niż podaje producent: nieszczelny wtryskiwacz, zawór zwrotny pompy lub regulator.</p>
<h4>Sterowanie mieszanką</h4>
<ul>
<li>Sterownik liczy dawkę z masy powietrza (<b>przepływomierz MAF</b>) lub z ciśnienia w kolektorze (<b>MAP</b>) i obrotów.</li>
<li><b>Korekty paliwowe</b>: krótkoterminowa (STFT) i długoterminowa (LTFT). Dodatnia korekta (np. +20%) oznacza, że sterownik dodaje paliwo, bo mieszanka jest za uboga (lewe powietrze, słaba pompa, brudny MAF). Ujemna: za bogata.</li>
<li><b>Sonda lambda dwustanowa</b> (cyrkonowa): napięcie przełącza się między ok. 0,1 V (mieszanka uboga) a ok. 0,9 V (bogata), kilka razy na sekundę. Sonda leniwa przełącza się wolno.</li>
<li><b>Sonda szerokopasmowa</b> mierzy lambda w szerokim zakresie (sygnał prądowy), stosowana przed katalizatorem w nowszych silnikach i w dieslach.</li>
<li>Sonda <b>za katalizatorem</b> kontroluje sprawność katalizatora: przy sprawnym katalizatorze jej napięcie jest prawie stałe.</li>
</ul>
<h4>Analiza spalin ZI</h4>
<ul>
<li>Pomiar na biegu jałowym i podwyższonych obrotach (ok. 2500 obr/min), silnik nagrzany.</li>
<li>Dla silnika z katalizatorem i lambda: CO zwykle poniżej 0,3% (jałowe) i 0,2% (podwyższone), lambda 0,97-1,03.</li>
<li>Wysokie HC: wypadanie zapłonów (świeca, cewka, przewód). Wysokie CO: za bogata mieszanka. Wysokie O₂ i niskie CO₂: nieszczelny układ wydechowy lub uboga mieszanka.</li>
</ul>
<div class="tip">Wysoka dodatnia korekta tylko na biegu jałowym, która maleje na wyższych obrotach, to typowy objaw zasysania lewego powietrza (nieszczelny wąż podciśnienia).</div>` },
        { tytul: "Diesel: Common Rail i pompowtryskiwacze", tresc: `<h4>Common Rail</h4>
<ul>
<li>Pompa niskiego ciśnienia (lub zasysająca) podaje paliwo przez filtr do <b>pompy wysokiego ciśnienia</b>, ta tłoczy je do <b>szyny (rail)</b>. Ciśnienie ok. 250 bar na jałowym do <b>1600-2500 bar</b> przy pełnym obciążeniu.</li>
<li>Ciśnienie mierzy czujnik ciśnienia w szynie, reguluje zawór regulacyjny ciśnienia (DRV) i/lub zawór dozujący na pompie.</li>
<li>Wtryskiwacze <b>elektromagnetyczne</b> lub <b>piezoelektryczne</b> (szybsze, kilka wtrysków na cykl: pilotowy, główny, dodatkowy).</li>
</ul>
<h4>Diagnoza wtryskiwaczy</h4>
<ul>
<li><b>Test przelewów</b>: na przelewy wtryskiwaczy zakłada się menzurki, silnik pracuje określony czas; wtryskiwacz z dużo większym przelewem od pozostałych jest nieszczelny.</li>
<li>Odczyt <b>korekt dawki</b> wtryskiwaczy w testerze (odchyłki zwykle do ok. ±2-3 mm³ na wtrysk).</li>
<li>Po wymianie wtryskiwacza wprowadza się do sterownika jego <b>kod kalibracyjny</b> (IMA, QR).</li>
<li>Nie wolno rozkręcać instalacji wysokiego ciśnienia przy pracującym silniku. Strumień paliwa pod takim ciśnieniem przebija skórę.</li>
<li>Rozkręcone przewody i otwory zabezpiecza się zaślepkami, przewody wysokiego ciśnienia zwykle wymienia się na nowe.</li>
</ul>
<h4>Rozruch i świece żarowe</h4>
<p>Rezystancja świecy żarowej jest mała (ułamek oma do ok. 1-2 Ω). Sprawdza się ją omomierzem lub pomiarem prądu (kilka do kilkunastu A na świecę). Przerwa w świecy: trudny rozruch na zimno, biały dym.</p>
<h4>Pompowtryskiwacze i pompa rotacyjna</h4>
<p>Starsze rozwiązania: pompa rotacyjna (VP) z wtryskiwaczami mechanicznymi (ciśnienie otwarcia sprawdza się na próbniku), oraz pompowtryskiwacze PD (pompa przy każdym cylindrze napędzana krzywką wałka rozrządu, ok. 2000 bar).</p>
<div class="tip">Objaw: trudny rozruch ciepłego silnika i spadek mocy. Najpierw sprawdź filtr paliwa i zapowietrzenie, potem ciśnienie w szynie (zadane i rzeczywiste w testerze), a dopiero potem przelewy.</div>` },
        { tytul: "Doładowanie i oczyszczanie spalin", tresc: `<h4>Turbosprężarka</h4>
<ul>
<li>Turbina napędzana spalinami obraca wirnik sprężarki (do ponad 100 000 obr/min). Ciśnienie doładowania reguluje <b>zawór upustowy (wastegate)</b> lub <b>zmienna geometria łopatek (VTG/VNT)</b>.</li>
<li><b>Intercooler</b> chłodzi sprężone powietrze, zwiększa jego gęstość.</li>
<li>Typowe usterki: luz wałka (wirnik ociera o obudowę), wycieki oleju (niebieski dym), zapieczona kierownica spalin VTG (tryb awaryjny, kod przekroczenia lub niedoboru doładowania), nieszczelny wąż doładowania (gwizd, spadek mocy).</li>
<li>Przyczyna większości awarii: <b>smarowanie</b> (zły olej, zaniedbane wymiany, gaszenie silnika od razu po ostrej jeździe).</li>
</ul>
<h4>EGR</h4>
<p>Zawór recyrkulacji spalin wprowadza część spalin do dolotu, obniża temperaturę spalania i emisję <b>NOx</b>. Zawór zawieszony w pozycji otwartej: dymienie, nierówna praca na jałowym; zamknięty: wyższe NOx, czasem stuki spalania.</p>
<h4>DPF / FAP</h4>
<ul>
<li>Filtr cząstek stałych zatrzymuje sadzę. <b>Regeneracja pasywna</b>: podczas jazdy przy wysokiej temperaturze spalin. <b>Aktywna</b>: sterownik podnosi temperaturę dodatkowym wtryskiem (ok. 600°C). <b>Serwisowa</b>: wymuszona testerem.</li>
<li>Stopień zapchania ocenia czujnik <b>różnicy ciśnień</b> przed i za filtrem. Krótkie trasy uniemożliwiają regenerację.</li>
<li>FAP (PSA) używa dodatku do paliwa (ceryna), uzupełnianego ze zbiorniczka.</li>
</ul>
<h4>SCR i katalizator</h4>
<ul>
<li><b>SCR</b> redukuje NOx za pomocą roztworu mocznika <b>AdBlue</b> (32,5%), wtryskiwanego przed katalizator SCR. AdBlue krystalizuje i zamarza ok. -11°C, dlatego układ ma podgrzewanie.</li>
<li><b>Katalizator trójfunkcyjny</b> (ZI) utlenia CO i HC, redukuje NOx. Działa dobrze tylko przy lambda bliskim 1 i temperaturze roboczej. Niszczy go wypadanie zapłonów (niespalone paliwo przegrzewa wkład).</li>
<li>Diesel ma katalizator utleniający (DOC) przed DPF.</li>
</ul>
<h4>Pomiar zadymienia ZS</h4>
<p>Dymomierz mierzy współczynnik pochłaniania światła <b>k</b> [m⁻¹] przy kilku przyspieszeniach swobodnych. Wynik porównuje się z wartością z tabliczki producenta lub z limitem przepisów.</p>
<div class="tip">Przed wymianą turbosprężarki zawsze ustal przyczynę: wymień olej i filtr, sprawdź przewód doprowadzający olej i odmę. Inaczej nowa turbina szybko się zniszczy.</div>` }
      ],
      pytania: [
        Q("Dodatnia długoterminowa korekta paliwowa +25% na biegu jałowym wskazuje najczęściej na", "zasysanie lewego powietrza", "zbyt bogatą mieszankę", "zbyt wysokie ciśnienie paliwa", "sprawny układ", "Sterownik dodaje paliwa, bo sonda widzi mieszankę ubogą."),
        Q("Napięcie sondy lambda dwustanowej przy mieszance bogatej wynosi około", "0,9 V", "0,1 V", "5 V", "12 V", "Uboga mieszanka daje ok. 0,1 V."),
        Q("Ciśnienie paliwa w szynie układu Common Rail przy pełnym obciążeniu osiąga", "1600-2500 bar", "3-4 bar", "50-80 bar", "10-15 bar", "Ciśnienie 3-4 bar to wtrysk wielopunktowy benzyny."),
        Q("Test przelewów w silniku Common Rail służy do oceny", "szczelności wtryskiwaczy", "ciśnienia doładowania", "sprawności katalizatora", "stanu świec żarowych", "Wtryskiwacz z dużo większym przelewem jest nieszczelny."),
        Q("Po wymianie wtryskiwacza w silniku Common Rail należy", "wpisać kod korekcyjny (IMA) do sterownika", "wymienić pompę wysokiego ciśnienia", "zresetować adaptacje skrzyni biegów", "wymienić filtr paliwa i sondę lambda", "Kod (IMA/QR) koryguje dawkę dla indywidualnych cech wtryskiwacza."),
        Q("Zawór EGR ma za zadanie przede wszystkim ograniczyć emisję", "tlenków azotu", "tlenku węgla", "sadzy", "dwutlenku węgla", "Spaliny obniżają temperaturę spalania, przez co powstaje mniej NOx."),
        Q("Stopień zapełnienia filtra DPF sterownik ocenia na podstawie sygnału", "czujnika różnicy ciśnień", "sondy lambda za katalizatorem", "czujnika spalania stukowego", "przepływomierza", "Rosnąca różnica ciśnień przed i za filtrem oznacza zapełnienie sadzą."),
        Q("Płyn AdBlue stosowany w układzie SCR to wodny roztwór", "mocznika", "glikolu", "metanolu", "amoniaku 100%", "Stężenie mocznika wynosi 32,5%.")
      ]
    },
    {
      id: "naped", tytul: "Układ przeniesienia napędu", opis: "Zdiagnozujesz sprzęgło, skrzynię biegów, przekładnię główną i półosie.",
      lekcje: [
        { tytul: "Sprzęgło i koło dwumasowe", tresc: `<h4>Budowa sprzęgła ciernego</h4>
<p>Koło zamachowe, <b>tarcza sprzęgłowa</b> z okładzinami i tłumikiem drgań skrętnych, <b>docisk</b> ze sprężyną talerzową, <b>łożysko wyciskowe</b>, mechanizm sterowania: linka lub hydraulika (pompa i wysprzęglik, płyn hamulcowy z tego samego zbiorniczka).</p>
<h4>Objawy i przyczyny</h4>
<div class="tw"><table><tr><th>Objaw</th><th>Przyczyna</th></tr>
<tr><td>ślizganie (obroty rosną, prędkość nie), zapach spalenizny</td><td>zużyte lub zaolejone okładziny, słaby docisk, brak luzu pedału</td></tr>
<tr><td>nie rozłącza (zgrzyt przy wrzucaniu biegu)</td><td>zapowietrzona hydraulika, za duży luz linki, zablokowana tarcza na wielowypuście</td></tr>
<tr><td>szarpanie przy ruszaniu</td><td>zaolejona tarcza, uszkodzone sprężyny tłumika, poduszki silnika</td></tr>
<tr><td>szum przy wciśniętym pedale</td><td>łożysko wyciskowe</td></tr></table></div>
<p><b>Test ślizgania</b>: na 3. lub 4. biegu przy małej prędkości gwałtownie dodaj gazu. Jeśli obroty rosną bez przyspieszenia, sprzęgło się ślizga.</p>
<h4>Koło dwumasowe</h4>
<ul>
<li>Dwie masy połączone sprężynami łukowymi, tłumią drgania skrętne silnika (szczególnie diesla).</li>
<li>Objawy zużycia: stuki przy gaszeniu i uruchamianiu, drgania na niskich obrotach.</li>
<li>Kontrola: <b>luz obwodowy</b> (kąt swobodnego obrotu masy wtórnej względem pierwotnej) i <b>luz osiowy</b> (wychylenie), porównane z wartościami producenta.</li>
</ul>
<h4>Wymiana sprzęgła, zasady</h4>
<ol>
<li>Zabezpiecz silnik podporą, wymontuj skrzynię.</li>
<li>Odkręcaj docisk po przekątnej, stopniowo.</li>
<li>Sprawdź koło zamachowe (pęknięcia, przegrzanie, bicie). Koło jednomasowe można planować, dwumasowe wymienia się.</li>
<li>Tarczę centruje się <b>trzpieniem centrującym</b>, napisy na tarczy zwykle w stronę skrzyni (wg oznaczenia producenta).</li>
<li>Docisk dokręca się po przekątnej momentem z dokumentacji, wielowypust lekko smaruje się smarem do sprzęgieł.</li>
</ol>
<div class="tip">Zaolejona tarcza oznacza wyciek: uszczelniacz wału korbowego (od strony koła) lub wałka sprzęgłowego skrzyni. Usuń przyczynę, inaczej nowa tarcza też się zaolei.</div>` },
        { tytul: "Skrzynie biegów i przełożenia", tresc: `<h4>Przełożenie</h4>
<p><b>i = z2 / z1</b> (liczba zębów koła napędzanego przez liczbę zębów koła napędzającego) = n1 / n2. Moment rośnie proporcjonalnie do przełożenia (pomijając straty), prędkość obrotowa maleje.</p>
<p>Przykład: z1 = 15, z2 = 45, i = 3. Wałek wejściowy 3000 obr/min, wyjściowy 1000 obr/min. Przełożenie całkowite = przełożenie biegu × przełożenie przekładni głównej, np. 3,5 × 4 = 14.</p>
<p>Bieg z przełożeniem i &gt; 1 to reduktor, i = 1 to bieg bezpośredni, i &lt; 1 to nadbieg.</p>
<h4>Skrzynia manualna</h4>
<ul>
<li>Koła stale zazębione, bieg włącza się przesuwając tuleję <b>synchronizatora</b>, który wyrównuje prędkości. Zgrzyt przy zmianie jednego biegu: zużyty pierścień synchronizatora tego biegu.</li>
<li>Bieg wsteczny: dodatkowe koło pośrednie zmienia kierunek obrotów.</li>
<li>Wyskakiwanie biegu: zużyte zęby sprzęgające, zatrzaski, łożyska, poduszki silnika.</li>
</ul>
<h4>Skrzynie automatyczne</h4>
<div class="tw"><table><tr><th>Typ</th><th>Cechy</th></tr>
<tr><td>hydrokinetyczna (AT)</td><td>przekładnia hydrokinetyczna (sprzęgło wiskotyczne, moment rośnie przy ruszaniu), przekładnie planetarne, olej ATF</td></tr>
<tr><td>dwusprzęgłowa (DSG, DCT)</td><td>dwa sprzęgła: jedno dla biegów parzystych, drugie dla nieparzystych; sucha lub mokra</td></tr>
<tr><td>bezstopniowa (CVT)</td><td>pas lub łańcuch na dwóch kołach o zmiennej średnicy</td></tr>
<tr><td>zautomatyzowana (AMT)</td><td>manualna z siłownikami sprzęgła i zmiany biegów</td></tr></table></div>
<p>Poziom oleju w AT sprawdza się zwykle na pracującym, nagrzanym silniku, w określonej temperaturze oleju (odczyt w testerze). Po wymianie oleju w skrzyni DSG lub AT często wykonuje się adaptację.</p>
<h4>Oleje przekładniowe</h4>
<ul>
<li>Klasy jakości API: <b>GL-4</b> (manualne skrzynie z synchronizatorami), <b>GL-5</b> (przekładnie hipoidalne, mosty napędowe). GL-5 może uszkadzać synchronizatory z mosiądzu.</li>
<li>Lepkość SAE, np. 75W-90.</li>
<li>ATF, oleje do DSG i CVT tylko wg specyfikacji producenta, nie są zamienne.</li>
</ul>
<div class="tip">W zadaniach obliczeniowych pamiętaj: przy przełożeniu większym od 1 obroty wyjściowe są mniejsze od wejściowych, a moment większy.</div>` },
        { tytul: "Przekładnia główna, różnicowy, półosie", tresc: `<h4>Przekładnia główna</h4>
<ul>
<li>Zwiększa moment i zmienia (w napędzie tylnym) kierunek osi obrotu o 90°. Typowe przełożenie ok. 3-4,5.</li>
<li>Przekładnia <b>hipoidalna</b>: oś zębnika przesunięta względem osi koła talerzowego, cicha praca, wymaga oleju GL-5.</li>
<li>Regulacja: luz międzyzębny (czujnik zegarowy) i ślad współpracy zębów (farba na zębach); napięcie wstępne łożysk.</li>
<li>Wycie zmieniające się przy przyspieszaniu i hamowaniu silnikiem: zły ślad zazębienia lub zużyte łożyska.</li>
</ul>
<h4>Mechanizm różnicowy</h4>
<ul>
<li>Satelity i koła koronowe pozwalają kołom obracać się z różną prędkością na zakręcie. <b>Suma prędkości</b> kół jest stała: gdy jedno koło stoi, drugie obraca się dwa razy szybciej od obudowy.</li>
<li>Wada: moment jest dzielony po równo, więc koło na lodzie ogranicza napęd. Rozwiązania: blokada mechanizmu, mechanizm o ograniczonym poślizgu (LSD, Torsen), elektroniczna blokada (przyhamowanie koła przez ASR).</li>
<li>Napęd 4x4: dodatkowo mechanizm centralny lub sprzęgło wielopłytkowe (Haldex), skrzynia rozdzielcza z reduktorem w terenówkach.</li>
</ul>
<h4>Półosie i przeguby</h4>
<ul>
<li>Napęd przedni: przegub <b>homokinetyczny zewnętrzny</b> (kulkowy, duży kąt skrętu) i <b>wewnętrzny</b> (często trójpodporowy, pozwala na zmianę długości).</li>
<li>Uszkodzony przegub zewnętrzny: <b>trzaski przy skręconych kołach</b> podczas ruszania. Wewnętrzny: drgania przy przyspieszaniu.</li>
<li>Najczęstsza przyczyna: pęknięta <b>osłona gumowa</b>, z której wycieka smar i dostaje się piasek. Przy wymianie osłony wymienia się opaski i smar (specjalny, z zestawu).</li>
<li>Wał napędowy (napęd tylny): przeguby krzyżakowe, łożysko podporowe, wyważenie. Krzyżaki muszą być ustawione w tej samej płaszczyźnie, inaczej powstają drgania.</li>
</ul>
<h4>Przykład obliczeniowy</h4>
<p>Silnik 2000 obr/min, bieg 1,0, przekładnia główna 4,0: obudowa mechanizmu różnicowego obraca się z prędkością 500 obr/min. Na prostej oba koła mają 500 obr/min; jeśli lewe stoi, prawe ma 1000 obr/min.</p>
<div class="tip">Wymieniając łożysko piasty lub półoś, nakrętkę piasty dokręcaj momentem producenta i zwykle na kołach stojących na ziemi lub zablokowanych. Nakrętki samokontrującej nie używa się ponownie.</div>` }
      ],
      pytania: [
        Q("Obroty silnika rosną po gwałtownym dodaniu gazu, a prędkość samochodu nie. Przyczyną jest", "ślizganie się sprzęgła", "zużyty synchronizator", "uszkodzony przegub homokinetyczny", "za duży luz zaworowy", "Typowe przyczyny: zużyte lub zaolejone okładziny, słaby docisk."),
        Q("Szum pojawiający się tylko przy wciśniętym pedale sprzęgła wskazuje na zużycie", "łożyska wyciskowego", "tarczy sprzęgłowej", "synchronizatora", "przekładni głównej", "Łożysko wyciskowe pracuje pod obciążeniem tylko przy wciśniętym pedale."),
        Q("Koło zębate napędzające ma 15 zębów, napędzane 45 zębów. Przełożenie wynosi", "3", "0,33", "30", "60", "i = z2/z1 = 45/15 = 3."),
        Q("Zgrzyt przy włączaniu tylko jednego biegu w skrzyni manualnej świadczy o zużyciu", "synchronizatora tego biegu", "sprzęgła", "łożyska wyciskowego", "mechanizmu różnicowego", "Sprzęgło nierozłączające powoduje zgrzyt na wszystkich biegach."),
        Q("Olej przekładniowy klasy API GL-5 przeznaczony jest przede wszystkim do", "przekładni hipoidalnych", "silników ZI", "układów wspomagania", "skrzyń DSG", "GL-4 stosuje się w skrzyniach manualnych z synchronizatorami."),
        Q("Trzaski przy ruszaniu na skręconych kołach w samochodzie z napędem przednim świadczą o uszkodzeniu", "przegubu zewnętrznego półosi", "przekładni kierowniczej", "łożyska wyciskowego", "amortyzatora", "Przegub wewnętrzny daje raczej drgania przy przyspieszaniu."),
        Q("Gdy jedno koło napędowe stoi, a obudowa mechanizmu różnicowego obraca się z prędkością 400 obr/min, drugie koło obraca się z prędkością", "800 obr/min", "400 obr/min", "200 obr/min", "0 obr/min", "Suma prędkości kół jest równa podwojonej prędkości obudowy."),
        Q("W skrzyni dwusprzęgłowej DSG jedno sprzęgło obsługuje biegi", "nieparzyste, a drugie parzyste", "do przodu, a drugie wsteczny", "niskie, a drugie wysokie", "tylko w trybie sportowym", "Kolejny bieg jest wstępnie załączony na drugim wałku.")
      ]
    },
    {
      id: "podwozie", tytul: "Zawieszenie, kierowanie i koła", opis: "Zmierzysz geometrię kół, ocenisz amortyzatory i luzy oraz obsłużysz koła i opony.",
      lekcje: [
        { tytul: "Geometria kół", tresc: `<h4>Kąty ustawienia kół</h4>
<div class="tw"><table><tr><th>Parametr</th><th>Definicja</th><th>Skutek błędu</th></tr>
<tr><td><b>zbieżność</b></td><td>różnica odległości między obręczami z tyłu i z przodu osi (mm) lub kąt (°)</td><td>ząbkowanie bieżnika, ścieranie krawędzi, ściąganie</td></tr>
<tr><td><b>kąt pochylenia koła</b> (camber)</td><td>pochylenie koła w płaszczyźnie poprzecznej; ujemny, gdy góra koła pochylona do środka</td><td>jednostronne zużycie barku opony</td></tr>
<tr><td><b>kąt wyprzedzenia sworznia</b> (caster)</td><td>pochylenie osi skrętu w płaszczyźnie wzdłużnej</td><td>słaby powrót kierownicy, ściąganie przy różnicy stron</td></tr>
<tr><td><b>kąt pochylenia sworznia</b> (KPI)</td><td>pochylenie osi skrętu w płaszczyźnie poprzecznej</td><td>ciężka praca kierownicy</td></tr></table></div>
<p><b>Zbieżność dodatnia</b> (zbieżność): koła z przodu bliżej siebie niż z tyłu. <b>Ujemna</b> (rozbieżność): odwrotnie. Napęd tylny ma zwykle niewielką zbieżność dodatnią, przedni bliską zeru, bo siła napędowa „ściąga” koła do przodu.</p>
<h4>Procedura pomiaru</h4>
<ol>
<li>Sprawdź ciśnienie w oponach, luzy w zawieszeniu i układzie kierowniczym, obciążenie pojazdu wg producenta (np. pełny zbiornik paliwa).</li>
<li>Załóż głowice pomiarowe, wykonaj <b>kompensację bicia</b> obręczy.</li>
<li>Ustaw koła na wprost, kierownicę zablokuj w położeniu środkowym, wciśnij hamulec blokadą pedału (do pomiaru caster).</li>
<li>Odczytaj wartości, porównaj z danymi. Kolejność regulacji: tył, potem pochylenie i wyprzedzenie przodu, na końcu zbieżność przodu.</li>
<li>Zbieżność reguluje się wkręcając <b>końcówki drążków kierowniczych</b>, po równo z obu stron, aby kierownica została prosto.</li>
</ol>
<h4>Promień zataczania i geometria Ackermanna</h4>
<p>Przy skręcie koło wewnętrzne skręca o większy kąt niż zewnętrzne (<b>rozbieżność na skręcie</b>), dzięki trapezowi kierowniczemu. Wygięta zwrotnica lub drążek zmienia tę różnicę: piszczenie opon na zakrętach.</p>
<div class="tip">Ściąganie w jedną stronę przy dobrej zbieżności: sprawdź różnicę ciśnień w oponach, różnicę camber i caster między stronami, zacierający się zacisk hamulca.</div>` },
        { tytul: "Zawieszenie i amortyzatory", tresc: `<h4>Kontrola luzów</h4>
<ul>
<li>Na <b>szarpakach</b> (płyty poruszane hydraulicznie na stanowisku diagnostycznym) lub łomem, przy obciążonych kołach, z latarką: sworznie wahaczy, tuleje metalowo-gumowe, końcówki i drążki kierownicze, łączniki stabilizatora, łożyska piast.</li>
<li>Luz łożyska piasty: koło uniesione, chwyt na godzinie 12 i 6. Luz końcówki drążka: chwyt na 3 i 9.</li>
<li>Stuki na nierównościach: łączniki stabilizatora, tuleje, poduszki kolumny; skrzypienie: tuleje, sprężyny.</li>
</ul>
<h4>Amortyzatory</h4>
<ul>
<li>Rodzaje: <b>hydrauliczne</b> dwururowe, <b>gazowe</b> (olej i azot), jednorurowe i dwururowe.</li>
<li>Badanie na stanowisku metodą <b>EUSAMA</b>: płyta wymusza drgania, mierzy się siłę nacisku koła na płytę. Wynik w %: ok. 60% i więcej bardzo dobry, poniżej ok. 40% amortyzator zużyty. Ważna też <b>różnica między stronami osi</b> (zwykle do ok. 20-30%).</li>
<li>Objawy zużycia: kołysanie po przejechaniu nierówności, wydłużona droga hamowania, „klepanie” kół, miseczkowate zużycie opon, wyciek oleju.</li>
<li>Amortyzatory wymienia się <b>parami na osi</b>, razem z odbojami i osłonami, ewentualnie łożyskiem kolumny.</li>
</ul>
<h4>Wymiana sprężyny kolumny McPhersona</h4>
<ol>
<li>Wymontuj kolumnę (odkręć łącznik stabilizatora, śruby zwrotnicy, mocowanie górne).</li>
<li>Ściśnij sprężynę <b>ściągaczem do sprężyn</b>, najlepiej dwuramiennym lub stacjonarnym, ramiona po przeciwnych stronach.</li>
<li>Dopiero przy ściśniętej sprężynie odkręć nakrętkę tłoczyska.</li>
<li>Złóż z nowymi elementami, dokręć nakrętkę tłoczyska momentem.</li>
<li>Śruby tulei metalowo-gumowych dokręcaj ostatecznie przy kole obciążonym (w pozycji roboczej), żeby tuleja nie była skręcona.</li>
<li>Po wymianie kolumny lub elementów zawieszenia: <b>kontrola geometrii</b>.</li>
</ol>
<h4>Układ kierowniczy</h4>
<p>Luz na kole kierownicy zbyt duży, gdy przekracza wartość dopuszczalną (orientacyjnie ok. 15-20° w zależności od pojazdu). Wspomaganie hydrauliczne: kontrola poziomu i stanu płynu, paska, szczelności; elektryczne (EPS): po wymianie przekładni lub czujnika kąta skrętu kalibracja testerem.</p>
<div class="tip">Nigdy nie odkręcaj nakrętki tłoczyska przy nieściśniętej sprężynie. Energia sprężyny może spowodować ciężki wypadek, a to punkt BHP oceniany na egzaminie.</div>` },
        { tytul: "Koła, opony i TPMS", tresc: `<h4>Opony: dobór</h4>
<ul>
<li>Indeks nośności i prędkości nie mogą być niższe niż w dokumentach pojazdu (wyjątek: opony zimowe z niższym indeksem prędkości, z naklejką ograniczenia w polu widzenia kierowcy).</li>
<li>Na jednej osi: opony tego samego rozmiaru, konstrukcji i typu bieżnika.</li>
<li>Opony <b>kierunkowe</b> (strzałka ROTATION) montuje się zgodnie z kierunkiem obrotu, <b>asymetryczne</b> napisem OUTSIDE na zewnątrz.</li>
<li>Oznaczenia: M+S (błoto i śnieg), symbol <b>3PMSF</b> (płatek śniegu na górze, potwierdzone właściwości zimowe), RunFlat (RSC, ROF).</li>
<li>Etykieta UE: opór toczenia, przyczepność na mokrej nawierzchni (A-E), hałas zewnętrzny w dB.</li>
</ul>
<h4>Montaż i wyważanie</h4>
<ol>
<li>Spuść powietrze, zbij stopkę opony z obręczy, na montażownicy zdejmij oponę (smarując stopkę pastą montażową).</li>
<li>Przy czujniku TPMS w zaworze: ustaw głowicę montażownicy z dala od zaworu.</li>
<li>Załóż nowy zawór, oponę zgodnie z oznaczeniami, napompuj do osadzenia stopki (nie przekraczaj ciśnienia osadzania, zwykle ok. 3-3,5 bar), potem do ciśnienia nominalnego.</li>
<li><b>Wyważanie</b> dynamiczne na wyważarce: wprowadź wymiary (odległość, szerokość, średnicę), odczytaj niewyważenie w gramach dla wewnętrznej i zewnętrznej płaszczyzny. Ciężarki naklejane na felgi aluminiowe, nabijane na stalowe.</li>
<li>Niewyważenie statyczne powoduje podskakiwanie koła, dynamiczne bicie boczne i drgania kierownicy.</li>
</ol>
<h4>Dokręcanie kół</h4>
<p>Śruby lub nakrętki dokręca się <b>na krzyż</b> kluczem dynamometrycznym (osobowe zwykle ok. 90-140 Nm, wg producenta). Kluczem pneumatycznym wolno tylko wstępnie. Po przejechaniu ok. 50-100 km zaleca się kontrolę dokręcenia.</p>
<h4>TPMS</h4>
<ul>
<li><b>Bezpośredni</b>: czujniki w kołach (zwykle w zaworze) mierzą ciśnienie i temperaturę, nadają radiowo. Baterie żyją ok. 5-10 lat. Po wymianie czujnika lub zmianie kół: aktywacja i przyuczenie testerem TPMS.</li>
<li><b>Pośredni</b>: korzysta z czujników ABS, wykrywa spadek ciśnienia po zmianie prędkości obrotowej koła (mniejszy promień toczenia). Po regulacji ciśnienia trzeba go skalibrować przyciskiem lub w menu.</li>
<li>Od 1 listopada 2014 r. TPMS obowiązkowy w nowo rejestrowanych samochodach osobowych w UE.</li>
</ul>
<div class="tip">Zawory gumowe wymienia się przy każdej wymianie opony. W zaworze czujnika TPMS wymienia się uszczelki i wkład zaworu (zestaw serwisowy).</div>` }
      ],
      pytania: [
        Q("Ząbkowanie bieżnika i ścieranie jednej krawędzi opon przednich świadczy najczęściej o nieprawidłowej", "zbieżności kół", "ciśnieniu w zbiorniku paliwa", "kolejności zapłonu", "wysokości świateł", "Zbieżność wpływa najsilniej na zużycie opon."),
        Q("Zbieżność kół przednich reguluje się zwykle przez", "zmianę długości drążków kierowniczych", "zmianę pochylenia kolumny kierownicy", "zmianę ciśnienia w oponach przednich", "przestawienie mocowania amortyzatora", "Regulację wykonuje się po równo z obu stron, aby kierownica pozostała prosto."),
        Q("Kąt pochylenia koła jest ujemny, gdy", "górna część koła pochylona jest do środka pojazdu", "górna część koła pochylona jest na zewnątrz", "koła są bliżej siebie z przodu", "oś skrętu jest pochylona do tyłu", "Ujemny camber poprawia trzymanie się drogi na zakrętach."),
        Q("Wynik badania amortyzatora metodą EUSAMA wynoszący 30% oznacza", "amortyzator zużyty", "amortyzator bardzo dobry", "zbyt duże ciśnienie w oponie", "prawidłowy luz łożyska", "Poniżej ok. 40% amortyzator kwalifikuje się do wymiany."),
        Q("Amortyzatory należy wymieniać", "parami na jednej osi", "pojedynczo, tylko uszkodzony", "zawsze wszystkie cztery", "tylko na osi napędowej", "Różnica tłumienia na osi pogarsza stabilność."),
        Q("Śruby tulei metalowo-gumowych wahacza ostatecznie dokręca się", "przy kole obciążonym (pozycja robocza)", "przy kole wiszącym w powietrzu", "przed zamontowaniem wahacza w aucie", "kluczem udarowym bez kontroli momentu", "Inaczej tuleja pracuje skręcona i szybko się niszczy."),
        Q("Napis OUTSIDE na oponie asymetrycznej oznacza, że ta strona opony", "musi znajdować się na zewnątrz pojazdu", "musi być od strony zawieszenia", "jest przeznaczona do jazdy terenowej", "wskazuje kierunek obrotu", "Kierunek obrotu wskazuje strzałka ROTATION na oponach kierunkowych."),
        Q("W pośrednim systemie TPMS spadek ciśnienia wykrywany jest na podstawie", "prędkości obrotowej kół z czujników ABS", "sygnału z czujnika w zaworze koła", "pomiaru temperatury bieżnika opony", "sygnału z czujników poziomu nadwozia", "Opona z niższym ciśnieniem ma mniejszy promień toczenia i obraca się szybciej.")
      ]
    },
    {
      id: "hamulce", tytul: "Hamulce i badania stanowiskowe", opis: "Obsłużysz i zdiagnozujesz układ hamulcowy oraz ocenisz wyniki badania na stanowisku rolkowym.",
      lekcje: [
        { tytul: "Hamulce tarczowe i bębnowe: obsługa", tresc: `<h4>Kontrola elementów</h4>
<ul>
<li><b>Tarcza</b>: grubość mikrometrem w kilku punktach (minimalna grubość MIN TH wybita na tarczy), <b>bicie boczne</b> czujnikiem zegarowym na podstawie magnetycznej (typowo dopuszczalne ok. 0,05-0,1 mm), pęknięcia, rowki, przegrzanie (niebieskie przebarwienia).</li>
<li><b>Klocki</b>: grubość okładziny (zwykle wymiana przy ok. 2-3 mm), czujnik zużycia, równomierność zużycia wewnętrznego i zewnętrznego klocka.</li>
<li><b>Bęben</b>: średnica wewnętrzna (maksymalna wybita na bębnie), owalizacja. <b>Szczęki</b>: grubość okładziny, sprężyny, samoregulator.</li>
</ul>
<h4>Wymiana klocków i tarcz</h4>
<ol>
<li>Zabezpiecz pojazd, zdejmij koło, odkręć zacisk (nie zostawiaj go wiszącego na przewodzie elastycznym).</li>
<li>Wciśnij tłoczek <b>praską</b>. W tylnych zaciskach z mechanizmem hamulca postojowego tłoczek się <b>wkręca</b> (klucz do tłoczków), a przy EPB najpierw włącza się tryb serwisowy testerem.</li>
<li>Oczyść jarzmo i prowadnice, nasmaruj prowadnice smarem do hamulców (nie smarem zwykłym, który pęcznieje gumę).</li>
<li>Tarcze i klocki wymienia się <b>na obu kołach osi</b>.</li>
<li>Dokręć jarzmo i śruby prowadnic momentem, napompuj tłoczki pedałem przed jazdą, sprawdź poziom płynu.</li>
<li>Nowe klocki wymagają <b>docierania</b> (ok. 200 km łagodnego hamowania).</li>
</ol>
<h4>Objawy usterek</h4>
<div class="tw"><table><tr><th>Objaw</th><th>Przyczyna</th></tr>
<tr><td>pulsowanie pedału i drgania kierownicy przy hamowaniu</td><td>bicie lub nierówna grubość tarczy</td></tr>
<tr><td>miękki, „gąbczasty” pedał</td><td>powietrze w układzie, stary płyn (pęcherze pary)</td></tr>
<tr><td>pedał powoli opada przy stałym nacisku</td><td>nieszczelność pompy hamulcowej (wewnętrzna) lub układu</td></tr>
<tr><td>twardy pedał, słabe hamowanie</td><td>uszkodzone serwo lub brak podciśnienia</td></tr>
<tr><td>ściąganie przy hamowaniu</td><td>zapieczony zacisk lub tłoczek po jednej stronie, zaolejone okładziny</td></tr></table></div>
<p><b>Test serwa</b>: przy wyłączonym silniku naciśnij pedał kilka razy, przytrzymaj i uruchom silnik. Sprawne serwo: pedał lekko opada.</p>
<div class="tip">Pył z okładzin może być szkodliwy: nie przedmuchuj hamulców sprężonym powietrzem, czyść je zmywaczem do hamulców.</div>` },
        { tytul: "Płyn hamulcowy i odpowietrzanie", tresc: `<h4>Płyny hamulcowe</h4>
<div class="tw"><table><tr><th>Klasa</th><th>Baza</th><th>Temp. wrzenia „suchy” (min.)</th><th>„mokry” (min.)</th></tr>
<tr><td>DOT 3</td><td>glikol</td><td>205°C</td><td>140°C</td></tr>
<tr><td>DOT 4</td><td>glikol</td><td>230°C</td><td>155°C</td></tr>
<tr><td>DOT 5.1</td><td>glikol</td><td>260°C</td><td>180°C</td></tr>
<tr><td>DOT 5</td><td>silikon</td><td>260°C</td><td>180°C</td></tr></table></div>
<p>Temperatura „mokra” to wartość po wchłonięciu ok. 3,7% wody. Płyny glikolowe można ze sobą mieszać (lepiej nie), DOT 5 silikonowego <b>nie wolno</b> mieszać z glikolowymi.</p>
<h4>Ocena płynu</h4>
<ul>
<li><b>Tester temperatury wrzenia</b> (podgrzewa próbkę płynu) jest dokładniejszy niż długopisowy tester zawartości wody (pomiar przewodności).</li>
<li>Typowo płyn wymienia się, gdy zawartość wody przekracza ok. 2-3% lub co 2 lata.</li>
<li>Płyn jest toksyczny i niszczy lakier, zużyty jest <b>odpadem niebezpiecznym</b>.</li>
</ul>
<h4>Odpowietrzanie</h4>
<ul>
<li><b>Metoda ciśnieniowa</b> (urządzenie do wymiany płynu podłączone do zbiorniczka, ok. 1-2 bar): najszybsza i zalecana, jedna osoba.</li>
<li><b>Metoda „na pedał”</b>: dwie osoby, pedał naciśnięty, odkręcenie odpowietrznika, zakręcenie, puszczenie pedału.</li>
<li>Kolejność: zwykle od koła najdalej od pompy (np. PT, LT, PP, LP), chyba że producent podaje inną (układy z ABS/ESP często mają własną procedurę, z uruchamianiem pompy ABS testerem).</li>
<li>Na odpowietrznik zakłada się przezroczysty wąż do naczynia z płynem; odpowietrza się aż do wypływu płynu bez pęcherzyków.</li>
<li>Poziom w zbiorniczku nie może spaść poniżej MIN w trakcie, inaczej zapowietrzy się pompa.</li>
</ul>
<h4>Przewody</h4>
<p>Przewody sztywne (stalowe, miedziano-niklowe) kontroluje się na korozję, elastyczne na pęknięcia i pęcznienie (pęcznienie przy hamowaniu daje miękki pedał). Przewody sztywne roztłacza się roztłaczarką (kielich pojedynczy lub podwójny, typu DIN lub SAE).</p>
<div class="tip">Hamulec postojowy elektryczny (EPB) przed wymianą klocków tylnych przestawia się w tryb serwisowy testerem, aby silniczki cofnęły tłoczki. Wciskanie ich na siłę niszczy mechanizm.</div>` },
        { tytul: "Badanie na stanowisku rolkowym", tresc: `<h4>Przebieg badania</h4>
<ol>
<li>Pojazd wjeżdża osią na rolki prosto, z prawidłowym ciśnieniem w oponach.</li>
<li>Pomiar <b>oporów toczenia</b> każdego koła (bez hamowania). Duży opór: zacierający się zacisk, hamulec postojowy nie zwalnia.</li>
<li>Pomiar <b>owalizacji</b> (zmiany siły przy stałym nacisku na pedał): wskazuje bicie tarczy lub owalność bębna.</li>
<li>Stopniowe zwiększanie nacisku do zablokowania koła lub maksymalnej siły; stanowisko zatrzymuje rolki przy poślizgu.</li>
<li>Taki sam pomiar dla drugiej osi i <b>hamulca postojowego</b>.</li>
</ol>
<h4>Ocena wyników</h4>
<ul>
<li><b>Różnica sił hamowania</b> kół jednej osi: (Fmax - Fmin) / Fmax × 100%. Dopuszczalnie do <b>30%</b> (powyżej ok. 20% warto szukać przyczyny).</li>
<li><b>Wskaźnik skuteczności hamowania</b> (WSH) = suma sił hamowania wszystkich kół / (masa pojazdu × g) × 100%.</li>
<li>Wymagane minimum dla hamulca roboczego samochodu osobowego to <b>50%</b> (dla nowszych pojazdów kategorii M1, rejestrowanych po 2012 r., 58%), dla hamulca postojowego <b>16%</b>.</li>
</ul>
<h4>Przykład</h4>
<div class="tw"><table><tr><th>Koło</th><th>Siła hamowania</th></tr>
<tr><td>LP</td><td>3,2 kN</td></tr><tr><td>PP</td><td>2,4 kN</td></tr>
<tr><td>LT</td><td>1,5 kN</td></tr><tr><td>PT</td><td>1,4 kN</td></tr></table></div>
<p>Różnica na osi przedniej: (3,2 - 2,4) / 3,2 = 0,25, czyli <b>25%</b> (mieści się w normie, ale jest blisko granicy). Oś tylna: (1,5 - 1,4) / 1,5 = <b>6,7%</b>.</p>
<p>Suma sił: 8,5 kN. Masa pojazdu 1300 kg, ciężar 1300 × 9,81 = 12,75 kN. WSH = 8,5 / 12,75 = <b>66,7%</b>, więc hamulec roboczy spełnia wymaganie.</p>
<h4>Systemy elektroniczne</h4>
<ul>
<li>Czujniki ABS: <b>indukcyjne</b> (dwa przewody, napięcie przemienne rosnące z prędkością, rezystancja ok. 1-2 kΩ) i <b>aktywne</b> (Halla lub magnetorezystancyjne, zasilane, sygnał prostokątny, nie mierzy się ich omomierzem).</li>
<li>Kontrolka ABS po uruchomieniu powinna zgasnąć po kilku sekundach. Pierścień impulsowy (zębatka) zanieczyszczony lub pęknięty daje błąd wiarygodności sygnału.</li>
</ul>
<div class="tip">W obliczeniach WSH zamień masę na ciężar (× 9,81) i ujednolić jednostki (N lub kN). To najczęstszy błąd w zadaniu.</div>` }
      ],
      pytania: [
        Q("Pulsowanie pedału hamulca i drgania kierownicy podczas hamowania są typowym objawem", "bicia tarcz hamulcowych", "zapowietrzenia układu", "zużytych amortyzatorów tylnych", "uszkodzonego serwa", "Bicie tarczy mierzy się czujnikiem zegarowym."),
        Q("Bicie boczne tarczy hamulcowej mierzy się", "czujnikiem zegarowym na statywie", "mikrometrem zewnętrznym do tarcz", "suwmiarką w kilku punktach tarczy", "szczelinomierzem przy jarzmie zacisku", "Mikrometrem mierzy się grubość tarczy."),
        Q("Miękki, gąbczasty pedał hamulca świadczy najczęściej o", "obecności powietrza w układzie hamulcowym", "zużytych tarczach", "uszkodzonym czujniku ABS", "zbyt dużym ciśnieniu w oponach", "Powietrze i para wodna są ściśliwe w przeciwieństwie do płynu."),
        Q("Płynu hamulcowego DOT 5 nie wolno mieszać z płynem DOT 4, ponieważ", "DOT 5 jest silikonowy, a DOT 4 glikolowy", "DOT 5 ma niższą temperaturę wrzenia", "DOT 4 jest na bazie oleju mineralnego", "DOT 5 jest silnie higroskopijny", "DOT 5.1 jest glikolowy i można go mieszać z DOT 4."),
        Q("Siły hamowania kół osi przedniej wynoszą 4,0 kN i 3,0 kN. Różnica sił wynosi", "25%", "33%", "10%", "75%", "(4,0 - 3,0) / 4,0 = 0,25."),
        Q("Maksymalna dopuszczalna różnica sił hamowania kół jednej osi wynosi", "30%", "5%", "50%", "70%", "Większa różnica powoduje ściąganie pojazdu podczas hamowania."),
        Q("Minimalny wskaźnik skuteczności hamulca postojowego samochodu osobowego wynosi", "16%", "50%", "30%", "5%", "Dla hamulca roboczego minimum to 50% (nowsze M1: 58%)."),
        Q("Czujnika ABS typu aktywnego nie sprawdza się omomierzem, ponieważ", "jest czujnikiem zasilanym, z sygnałem cyfrowym", "ma zbyt dużą rezystancję uzwojenia cewki", "ma rezystancję równą zeru w każdym stanie", "działa dopiero powyżej prędkości 100 km/h", "Sprawdza się napięcie zasilania i sygnał oscyloskopem lub testerem.")
      ]
    }
  ]);

  pod("MOT.06", [
    {
      id: "przyjecie", tytul: "Przyjęcie pojazdu do serwisu", opis: "Przyjmiesz pojazd zgodnie z procedurą, zidentyfikujesz go po numerze VIN i sporządzisz zlecenie.",
      lekcje: [
        { tytul: "Identyfikacja pojazdu: VIN i dokumenty", tresc: `<h4>Numer VIN</h4>
<p><b>VIN</b> (Vehicle Identification Number) ma <b>17 znaków</b> (cyfry i litery, bez liter <b>I, O, Q</b>, aby nie myliły się z 1 i 0).</p>
<div class="tw"><table><tr><th>Pozycje</th><th>Część</th><th>Znaczenie</th></tr>
<tr><td>1-3</td><td><b>WMI</b></td><td>światowy kod producenta (pierwszy znak: region, np. W Niemcy, V Francja/Hiszpania, S Wielka Brytania, Z Włochy, SU-SZ Polska)</td></tr>
<tr><td>4-9</td><td><b>VDS</b></td><td>opis pojazdu: model, nadwozie, silnik; 9. znak bywa cyfrą kontrolną</td></tr>
<tr><td>10-17</td><td><b>VIS</b></td><td>wyróżnik: <b>10. znak rok modelowy</b>, 11. zakład produkcyjny, 12-17 numer seryjny</td></tr></table></div>
<p>Rok modelowy: litery i cyfry w cyklu 30 lat, np. A = 2010, B = 2011, ... L = 2020, M = 2021, N = 2022, P = 2023, R = 2024, S = 2025, T = 2026 (pominięte są I, O, Q, U, Z oraz 0).</p>
<h4>Gdzie szukać VIN</h4>
<p>Wybity na nadwoziu (np. pod fotelem pasażera, w komorze silnika na przegrodzie), na <b>tabliczce znamionowej</b> (słupek drzwi), za szybą czołową, w dowodzie rejestracyjnym (pole <b>E</b>). Niezgodność numerów przy przyjęciu to sygnał do wstrzymania prac i wyjaśnienia (pojazd może pochodzić z przestępstwa).</p>
<h4>Dowód rejestracyjny: ważne pola</h4>
<ul>
<li><b>A</b> numer rejestracyjny, <b>B</b> data pierwszej rejestracji, <b>D.1</b> marka, <b>D.3</b> model, <b>E</b> VIN.</li>
<li><b>F.1</b> dopuszczalna masa całkowita, <b>G</b> masa własna, <b>J</b> kategoria pojazdu (np. M1).</li>
<li><b>P.1</b> pojemność silnika, <b>P.2</b> moc netto w kW, <b>P.3</b> rodzaj paliwa.</li>
<li>Termin badania technicznego: w dowodzie (od 2018 r. w <b>CEPiK</b>, sprawdzany przez Internet).</li>
</ul>
<h4>Tabliczka znamionowa</h4>
<p>Zawiera m.in.: producenta, numer homologacji, VIN, dopuszczalną masę całkowitą, dopuszczalną masę zespołu pojazdów, dopuszczalne naciski na osie (przednią i tylną). Często obok jest naklejka z <b>kodem lakieru</b> i wyposażenia (PR-kody).</p>
<h4>Dobór części po VIN</h4>
<p>Katalogi elektroniczne (np. ETKA, TecDoc) po wpisaniu VIN pokazują wersję pojazdu, silnik i wyposażenie. Pozwala to uniknąć zamówienia złej części (np. tarcz innej średnicy dla tej samej wersji modelu).</p>
<div class="tip">Na egzaminie z VIN najczęściej pada pytanie o 10. znak (rok modelowy) i trzy pierwsze znaki (WMI, producent). Zapamiętaj: WMI 3, VDS 6, VIS 8 znaków.</div>` },
        { tytul: "Procedura przyjęcia i zlecenie naprawy", tresc: `<h4>Przebieg przyjęcia</h4>
<ol>
<li><b>Umówienie wizyty</b>: termin, zakres prac, wstępny koszt, informacja o potrzebnych dokumentach i kluczyku z kodem.</li>
<li><b>Powitanie i wywiad</b>: objawy usterki (kiedy, w jakich warunkach), historia serwisowa, oczekiwania klienta.</li>
<li><b>Oględziny przy kliencie</b> (obchód pojazdu): uszkodzenia lakieru, szyb, felg, stan opon, poziom paliwa, przebieg, kontrolki na tablicy, rzeczy wartościowe w kabinie.</li>
<li>Założenie <b>ochraniaczy</b>: pokrowiec na fotel, kierownicę, dywanik, dźwignię zmiany biegów.</li>
<li>Sporządzenie <b>zlecenia naprawy</b> i podpisanie przez klienta.</li>
<li>Przekazanie kluczyków, oznaczenie ich numerem zlecenia, ustalenie terminu odbioru i sposobu kontaktu.</li>
</ol>
<h4>Zawartość zlecenia</h4>
<ul>
<li>Dane klienta i pojazdu (marka, model, VIN, numer rejestracyjny, przebieg, poziom paliwa).</li>
<li>Opis usterki słowami klienta i zakres prac.</li>
<li>Wstępny kosztorys lub limit kwoty, po którego przekroczeniu serwis musi uzyskać zgodę klienta.</li>
<li>Termin realizacji, decyzja o częściach wymienionych (zwrot klientowi czy utylizacja).</li>
<li>Protokół stanu pojazdu (szkic nadwozia z zaznaczonymi uszkodzeniami), zgoda na jazdę próbną.</li>
<li>Klauzula informacyjna <b>RODO</b> (administrator danych, cel przetwarzania).</li>
</ul>
<h4>Dokumenty w toku naprawy</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Cel</th></tr>
<tr><td>karta pracy (zlecenie wewnętrzne)</td><td>przydział mechanika, czas pracy, wykonane czynności</td></tr>
<tr><td>dowód wydania części z magazynu (RW)</td><td>rozliczenie części na zlecenie</td></tr>
<tr><td>protokół diagnostyczny, wydruki pomiarów</td><td>uzasadnienie naprawy</td></tr>
<tr><td>faktura VAT lub paragon</td><td>rozliczenie z klientem</td></tr>
<tr><td>wpis w książce serwisowej (papierowej lub cyfrowej)</td><td>historia przeglądów, warunek gwarancji</td></tr></table></div>
<h4>Wydanie pojazdu</h4>
<p>Kontrola jakości (jazda próbna, sprawdzenie wykonania wszystkich pozycji), mycie, zdjęcie ochraniaczy, omówienie z klientem faktury i wykonanych prac, zaleceń na przyszłość (np. „klocki tylne 30%, wymiana przy następnym przeglądzie”), zwrot wymienionych części.</p>
<div class="tip">Dodatkowe usterki znalezione w trakcie naprawy wolno usunąć dopiero po zgodzie klienta (najlepiej potwierdzonej pisemnie, e-mailem lub SMS-em). To typowy punkt w zadaniu praktycznym.</div>` },
        { tytul: "Rodzaje obsług i przeglądy", tresc: `<h4>Strategie obsługi</h4>
<ul>
<li><b>Obsługa okresowa</b> (planowa, prewencyjna): wg przebiegu lub czasu, np. co 15 000 km lub co rok, w zależności co nastąpi pierwsze.</li>
<li><b>Obsługa według stanu</b>: wymiana, gdy pomiar wykaże zużycie (np. klocki hamulcowe, opony).</li>
<li><b>Obsługa zmienna (LongLife)</b>: komputer liczy termin z warunków eksploatacji (temperatura oleju, obroty, krótkie trasy), do ok. 30 000 km lub 2 lat.</li>
<li>Obsługa <b>codzienna</b> (OC) wykonywana przez kierowcę: oświetlenie, opony, płyny; w transporcie zawodowym przed wyjazdem.</li>
</ul>
<h4>Typowy plan przeglądu</h4>
<div class="tw"><table><tr><th>Czynność</th><th>Częstotliwość orientacyjna</th></tr>
<tr><td>olej silnikowy i filtr oleju</td><td>co 15 000-30 000 km lub co rok</td></tr>
<tr><td>filtr kabinowy</td><td>co rok</td></tr>
<tr><td>filtr powietrza</td><td>co 30 000-60 000 km</td></tr>
<tr><td>filtr paliwa (diesel)</td><td>co 30 000-60 000 km</td></tr>
<tr><td>płyn hamulcowy</td><td>co 2 lata</td></tr>
<tr><td>świece zapłonowe</td><td>co 30 000-90 000 km</td></tr>
<tr><td>pasek rozrządu</td><td>wg producenta, np. 90 000-240 000 km lub 5-10 lat</td></tr></table></div>
<h4>Badania techniczne (SKP)</h4>
<ul>
<li>Samochód osobowy: <b>pierwsze</b> badanie przed upływem <b>3 lat</b> od pierwszej rejestracji, <b>drugie</b> przed upływem <b>5 lat</b>, potem <b>co rok</b>.</li>
<li>Co rok od początku: pojazdy z instalacją gazową (LPG/CNG), taksówki, pojazdy nauki jazdy, pojazdy uprzywilejowane.</li>
<li>Dodatkowe badanie m.in. po wypadku z uszkodzeniem elementów nośnych, po zmianach konstrukcyjnych, po zatrzymaniu dowodu przez policję.</li>
<li>Ocena wyniku: usterki drobne (wynik pozytywny), istotne (negatywny, ponowne badanie do 14 dni) i niebezpieczne.</li>
</ul>
<h4>Przegląd przed zakupem i po zakupie</h4>
<p>Klient często zamawia pakiet: weryfikacja VIN i historii w CEPiK, pomiar grubości lakieru, diagnostyka komputerowa, test sprężania, ocena zawieszenia. Po zakupie zaleca się wymianę oleju, filtrów, płynu hamulcowego i (gdy brak dokumentów) rozrządu.</p>
<div class="tip">Przy obsłudze wg przebiegu i czasu decyduje ten próg, który nastąpi pierwszy. Auto z przebiegiem 6000 km rocznie i tak wymaga wymiany oleju co rok.</div>` }
      ],
      pytania: [
        Q("Numer identyfikacyjny pojazdu VIN składa się z", "17 znaków", "10 znaków", "12 znaków", "21 znaków", "WMI ma 3 znaki, VDS 6, VIS 8."),
        Q("W numerze VIN rok modelowy oznacza znak na pozycji", "10.", "1.", "4.", "17.", "11. znak to zakład produkcyjny."),
        Q("W numerze VIN nie stosuje się liter", "I, O, Q", "A, B, C", "X, Y, Z", "E, F, G", "Mogłyby być mylone z cyframi 1 i 0."),
        Q("Pole E w dowodzie rejestracyjnym zawiera", "numer VIN", "numer rejestracyjny", "moc silnika", "dopuszczalną masę całkowitą", "Numer rejestracyjny to pole A, moc P.2, DMC F.1."),
        Q("Pierwsze okresowe badanie techniczne nowego samochodu osobowego bez instalacji gazowej wykonuje się", "przed upływem 3 lat od rejestracji", "po roku od pierwszej rejestracji", "po 5 latach od pierwszej rejestracji", "co roku od dnia rejestracji", "Drugie badanie przed upływem 5 lat, potem co rok."),
        Q("Samochód osobowy z instalacją LPG podlega badaniu technicznemu", "co rok", "co 2 lata", "co 3 lata", "tylko przy rejestracji", "Instalacja gazowa wymaga corocznej kontroli."),
        Q("Podczas naprawy mechanik wykrył dodatkową usterkę. Serwis powinien", "uzyskać zgodę klienta przed naprawą", "naprawić ją i doliczyć do faktury", "pominąć ją i nie informować klienta", "przerwać całą naprawę i oddać auto", "Zakres prac i koszt wykraczający poza zlecenie wymaga akceptacji klienta."),
        Q("Ochraniacze na fotel, kierownicę i dywanik zakłada się", "podczas przyjęcia pojazdu, przed pracami", "dopiero przy wydaniu pojazdu", "tylko w pojazdach nowych", "tylko na życzenie klienta", "Chronią wnętrze przed zabrudzeniem w czasie obsługi.")
      ]
    },
    {
      id: "kosztorys", tytul: "Kosztorysowanie i rozliczenia", opis: "Obliczysz koszt naprawy z robocizną, częściami, rabatem i VAT oraz sporządzisz kosztorys.",
      lekcje: [
        { tytul: "Elementy kosztu naprawy", tresc: `<h4>Składniki</h4>
<ul>
<li><b>Robocizna</b> = norma czasowa (roboczogodziny, rbh) × stawka za rbh. Normy czasowe pochodzą z katalogów producenta lub systemów kosztorysowych.</li>
<li><b>Części i materiały</b> = ilość × cena jednostkowa (np. olej w litrach, części w sztukach). Materiały drobne (smary, środki czyszczące) czasem doliczane jako ryczałt lub % robocizny.</li>
<li><b>Usługi obce</b> (np. regeneracja, toczenie tarcz, geometria w innym warsztacie).</li>
<li>Rabaty, a na końcu <b>podatek VAT</b> (w Polsce stawka podstawowa <b>23%</b>).</li>
</ul>
<h4>Netto, VAT, brutto</h4>
<ul>
<li>brutto = netto × 1,23; VAT = netto × 0,23.</li>
<li>netto = brutto / 1,23 (a nie brutto × 0,77!).</li>
<li>Przykład: brutto 615 zł, netto = 615 / 1,23 = <b>500 zł</b>, VAT = 115 zł.</li>
</ul>
<h4>Marża i narzut</h4>
<p>Serwis kupuje część za cenę zakupu i sprzedaje z <b>narzutem</b> (procent od ceny zakupu). Przykład: zakup 200 zł netto, narzut 25%: cena sprzedaży 250 zł netto. <b>Marża</b> liczona od ceny sprzedaży: 50 / 250 = 20%. Na egzaminie sprawdź, czy podano narzut, czy marżę.</p>
<h4>Przykład pełnego kosztorysu</h4>
<div class="tw"><table><tr><th>Pozycja</th><th>Obliczenie</th><th>Netto [zł]</th></tr>
<tr><td>wymiana klocków przód</td><td>0,8 rbh × 150 zł</td><td>120,00</td></tr>
<tr><td>wymiana tarcz przód</td><td>0,6 rbh × 150 zł</td><td>90,00</td></tr>
<tr><td>klocki</td><td>1 kpl × 180 zł</td><td>180,00</td></tr>
<tr><td>tarcze</td><td>2 szt × 210 zł</td><td>420,00</td></tr>
<tr><td><b>razem netto</b></td><td></td><td>810,00</td></tr>
<tr><td>rabat na części 10%</td><td>0,10 × 600</td><td>-60,00</td></tr>
<tr><td><b>netto po rabacie</b></td><td></td><td>750,00</td></tr>
<tr><td>VAT 23%</td><td>750 × 0,23</td><td>172,50</td></tr>
<tr><td><b>brutto</b></td><td></td><td>922,50</td></tr></table></div>
<h4>Czas pracy a norma</h4>
<p>Klient płaci za <b>normę</b>, nie za czas rzeczywisty. Jeśli mechanik wykona pracę 1,5 rbh w 1,2 h, serwis zyskuje (wydajność 125%). Czynności nakładające się (np. wymiana pompy cieczy przy rozrządzie) mają w katalogach skrócone normy, bo demontaż wykonuje się raz.</p>
<div class="tip">Kolejność w zadaniu: najpierw sumy netto, potem rabat (od tej części, której dotyczy), na końcu VAT od kwoty po rabacie. Zaokrąglaj do groszy dopiero na końcu.</div>` },
        { tytul: "Kosztorysy szkód komunikacyjnych", tresc: `<h4>Systemy kosztorysowe</h4>
<p>Kosztorysy szkód sporządza się w systemach eksperckich (np. <b>Audatex</b>, <b>DAT</b>, <b>Eurotax/InfoEkspert</b>). Zawierają one katalog części z cenami producenta, normy czasowe napraw i lakierowania oraz wyceny wartości rynkowej pojazdów.</p>
<h4>Elementy kosztorysu powypadkowego</h4>
<ul>
<li>Części do wymiany (ceny oryginalne lub zamienniki, ewentualnie potrącenie amortyzacji w AC wg OWU).</li>
<li>Prace blacharskie: wymiana, naprawa (stopień uszkodzenia, np. 1-3 jednostki czasowe za element), prace na ramie lub płycie podłogowej (stół naprawczy).</li>
<li><b>Lakierowanie</b>: robocizna lakiernika, <b>materiał lakierniczy</b> (zależny od rodzaju lakieru: akryl, metalik, perła), przygotowanie, cieniowanie sąsiednich elementów.</li>
<li>Prace dodatkowe: demontaż i montaż przyległych elementów, kalibracja kamer ADAS, geometria, napełnienie klimatyzacji.</li>
</ul>
<h4>Szkoda całkowita</h4>
<ul>
<li>Z OC sprawcy: gdy koszt naprawy <b>przekracza wartość pojazdu przed szkodą</b> (lub naprawa jest technicznie niemożliwa). Odszkodowanie = wartość przed szkodą minus wartość pozostałości (wraku).</li>
<li>W AC próg określają ogólne warunki ubezpieczenia (OWU), często 70% wartości pojazdu.</li>
<li>Przykład: wartość przed szkodą 40 000 zł, kosztorys naprawy 43 000 zł, wrak 12 000 zł. Szkoda całkowita z OC: odszkodowanie 40 000 - 12 000 = <b>28 000 zł</b>.</li>
</ul>
<h4>Wartość pojazdu</h4>
<p>Ustala się ją na podstawie notowań (wiek, przebieg, wyposażenie, stan, pochodzenie, historia). Korekty: przebieg nadmierny obniża, dodatkowe wyposażenie podnosi, pojazd sprowadzony bywa korygowany w dół.</p>
<h4>Rozliczenie: serwisowe i kosztorysowe</h4>
<div class="tw"><table><tr><th>Wariant</th><th>Na czym polega</th></tr>
<tr><td>bezgotówkowe (serwisowe)</td><td>serwis naprawia i rozlicza się z ubezpieczycielem na podstawie faktury; klient podpisuje cesję lub upoważnienie</td></tr>
<tr><td>kosztorysowe</td><td>ubezpieczyciel wypłaca kwotę z kosztorysu, klient sam decyduje o naprawie</td></tr></table></div>
<p>Przy naprawie bezgotówkowej serwis uzgadnia z ubezpieczycielem kosztorys przed naprawą (oględziny, zdjęcia, ewentualnie dodatkowe oględziny po demontażu, gdy wyjdą ukryte uszkodzenia).</p>
<div class="tip">Przy szkodzie z OC sprawcy poszkodowany ma prawo do części oryginalnych i do pojazdu zastępczego na czas naprawy, jeśli jest mu potrzebny. Ubezpieczyciel nie może narzucić tańszego zamiennika bez uzasadnienia.</div>` },
        { tytul: "Wskaźniki ekonomiczne serwisu", tresc: `<h4>Wykorzystanie czasu pracy</h4>
<ul>
<li><b>Czas obecności</b>: czas, przez który mechanik jest w pracy (np. 8 h).</li>
<li><b>Czas przepracowany</b> (zalogowany na zlecenia): rzeczywisty czas pracy przy pojazdach.</li>
<li><b>Czas sprzedany</b>: suma norm zafakturowanych klientom.</li>
</ul>
<div class="tw"><table><tr><th>Wskaźnik</th><th>Wzór</th></tr>
<tr><td>wykorzystanie (utilization)</td><td>czas przepracowany / czas obecności × 100%</td></tr>
<tr><td>efektywność (efficiency)</td><td>czas sprzedany / czas przepracowany × 100%</td></tr>
<tr><td>produktywność</td><td>czas sprzedany / czas obecności × 100%</td></tr></table></div>
<p>Przykład: obecność 160 h w miesiącu, przepracowane 136 h, sprzedane 150 h. Wykorzystanie 85%, efektywność 110%, produktywność 93,75% (= 0,85 × 1,10 ≈ 0,94).</p>
<h4>Stawka roboczogodziny</h4>
<p>Stawka musi pokryć koszty stałe (czynsz, energia, amortyzacja urządzeń, płace pracowników niewydajnych: kierownik, doradca) i zmienne oraz dać zysk. Uproszczenie: <b>stawka = (koszty miesięczne + zysk) / liczba godzin sprzedanych</b>. Przykład: koszty 60 000 zł, zysk planowany 12 000 zł, sprzedawane 480 rbh: stawka 150 zł netto.</p>
<h4>Próg rentowności</h4>
<p>Liczba sprzedanych rbh, przy której przychód pokrywa koszty: koszty stałe / (stawka - koszt zmienny na rbh). Przykład: koszty stałe 40 000 zł, stawka 150 zł, koszt zmienny 50 zł: próg 400 rbh w miesiącu.</p>
<h4>Gospodarka magazynowa</h4>
<ul>
<li><b>Zapas minimalny</b> (bezpieczeństwa): poziom, poniżej którego składa się zamówienie. <b>Zapas maksymalny</b>: górna granica zamrożenia pieniędzy.</li>
<li>Metody wydawania: <b>FIFO</b> (pierwsze przyszło, pierwsze wyszło), ważne dla towarów z datą (płyny, opony, akumulatory).</li>
<li><b>Rotacja</b> zapasu w dniach = średni zapas / sprzedaż dzienna. Analiza <b>ABC</b>: A to niewiele pozycji dających ok. 80% obrotu.</li>
<li>Dokumenty: PZ (przyjęcie zewnętrzne), WZ (wydanie zewnętrzne), RW (rozchód wewnętrzny na zlecenie), MM (przesunięcie), inwentaryzacja (remanent).</li>
</ul>
<div class="tip">Rozróżnij: efektywność może przekroczyć 100% (mechanik szybszy niż norma), wykorzystanie nie przekroczy 100%, bo nie można pracować dłużej niż czas obecności.</div>` }
      ],
      pytania: [
        Q("Kwota netto usługi wynosi 400 zł. Przy stawce VAT 23% kwota brutto wynosi", "492 zł", "423 zł", "308 zł", "523 zł", "400 × 1,23 = 492 zł."),
        Q("Kwota brutto na fakturze wynosi 246 zł (VAT 23%). Kwota netto to", "200 zł", "189,42 zł", "223 zł", "302,58 zł", "Netto = brutto / 1,23."),
        Q("Norma czasowa wymiany sprzęgła wynosi 3,5 rbh, a stawka 160 zł/rbh netto. Koszt robocizny netto wynosi", "560 zł", "480 zł", "640 zł", "163,50 zł", "3,5 × 160 = 560."),
        Q("Część kupiona za 120 zł netto sprzedawana jest z narzutem 30%. Cena sprzedaży netto wynosi", "156 zł", "150 zł", "171,43 zł", "36 zł", "120 × 1,30 = 156."),
        Q("Wartość pojazdu przed szkodą wynosi 30 000 zł, wartość wraku 8000 zł, koszt naprawy 34 000 zł. Odszkodowanie z OC przy szkodzie całkowitej wynosi", "22 000 zł", "30 000 zł", "34 000 zł", "26 000 zł", "Wartość przed szkodą minus wartość pozostałości."),
        Q("Mechanik był obecny w pracy 160 h, a przepracował na zleceniach 120 h. Wskaźnik wykorzystania wynosi", "75%", "133%", "25%", "120%", "120 / 160 × 100%."),
        Q("Wskaźnik efektywności mechanika to stosunek", "czasu sprzedanego do czasu przepracowanego", "czasu obecności do czasu sprzedanego", "kosztów do przychodów", "liczby zleceń do liczby mechaników", "Wartość powyżej 100% oznacza pracę szybszą niż norma."),
        Q("Metoda wydawania części z magazynu, w której najpierw wydaje się towar przyjęty najwcześniej, to", "FIFO", "LIFO", "ABC", "JIT", "Ważna dla towarów z datą przydatności.")
      ]
    },
    {
      id: "prawo-ubezpieczenia", tytul: "Prawo, gwarancja i ubezpieczenia", opis: "Rozróżnisz gwarancję i rękojmię, rodzaje ubezpieczeń oraz obowiązki serwisu w zakresie odpadów i danych.",
      lekcje: [
        { tytul: "Gwarancja, rękojmia i reklamacje", tresc: `<h4>Rękojmia a gwarancja</h4>
<div class="tw"><table><tr><th>Cecha</th><th>Rękojmia (niezgodność towaru z umową)</th><th>Gwarancja</th></tr>
<tr><td>podstawa</td><td>ustawa (Kodeks cywilny, dla konsumentów ustawa o prawach konsumenta)</td><td>dobrowolne oświadczenie gwaranta (karta gwarancyjna)</td></tr>
<tr><td>kto odpowiada</td><td>sprzedawca</td><td>gwarant (zwykle producent lub importer)</td></tr>
<tr><td>czas</td><td>2 lata od wydania (towar używany: można skrócić do 1 roku)</td><td>wg warunków, np. 2-7 lat lub limit przebiegu</td></tr>
<tr><td>warunki</td><td>nie wymaga przeglądów w ASO</td><td>może wymagać przeglądów wg planu producenta</td></tr></table></div>
<p>Konsument wybiera, z której ścieżki korzysta. Wady ujawnione w ciągu 2 lat (dla konsumenta) domniemywa się, że istniały w chwili wydania.</p>
<h4>Przeglądy poza ASO</h4>
<p>Prawo konkurencji UE (rozporządzenie wyłączeniowe GVBER) pozwala wykonywać przeglądy w niezależnym warsztacie bez utraty gwarancji, jeśli zachowano zakres i terminy producenta i użyto części o porównywalnej jakości oraz udokumentowano obsługę. Naprawy gwarancyjne (na koszt producenta) wykonuje ASO.</p>
<h4>Reklamacja naprawy w serwisie</h4>
<ul>
<li>Usługa (naprawa) to umowa o dzieło lub świadczenie usługi: serwis odpowiada za wady wykonania i za części, które zamontował.</li>
<li>Serwis powinien odpowiedzieć na reklamację konsumenta w ciągu <b>14 dni</b>, inaczej uważa się ją za uznaną.</li>
<li>Procedura: przyjęcie zgłoszenia (data, opis), oględziny, diagnoza, decyzja (naprawa ponowna, wymiana części, zwrot kosztów lub odmowa z uzasadnieniem), dokumentacja.</li>
<li>Reklamację części u dostawcy składa się z kopią faktury, opisem usterki i pomiarami (np. bicie tarczy po 3000 km, wydruk z testera).</li>
</ul>
<h4>Akcje serwisowe (przywoławcze)</h4>
<p>Producent wzywa właścicieli do bezpłatnej naprawy wady seryjnej (np. wymiana poduszek, aktualizacja oprogramowania). Doradca sprawdza po VIN, czy pojazd ma otwartą akcję, i informuje klienta przy przyjęciu.</p>
<div class="tip">Rękojmia to obowiązek sprzedawcy z ustawy, gwarancja jest dobrowolna. Na pytania „kto udziela” i „czy można ograniczyć” to klucz do odpowiedzi.</div>` },
        { tytul: "Ubezpieczenia komunikacyjne", tresc: `<h4>Rodzaje</h4>
<div class="tw"><table><tr><th>Ubezpieczenie</th><th>Charakter</th><th>Co obejmuje</th></tr>
<tr><td><b>OC</b> posiadaczy pojazdów</td><td>obowiązkowe</td><td>szkody wyrządzone osobom trzecim ruchem pojazdu</td></tr>
<tr><td><b>AC</b> (autocasco)</td><td>dobrowolne</td><td>uszkodzenie, zniszczenie lub kradzież własnego pojazdu</td></tr>
<tr><td><b>NNW</b></td><td>dobrowolne</td><td>następstwa nieszczęśliwych wypadków kierowcy i pasażerów</td></tr>
<tr><td><b>Assistance</b></td><td>dobrowolne</td><td>pomoc drogowa, holowanie, auto zastępcze</td></tr>
<tr><td>Zielona Karta</td><td>wymagana w części krajów spoza UE</td><td>potwierdzenie OC za granicą</td></tr></table></div>
<h4>OC: ważne zasady</h4>
<ul>
<li>Minimalne sumy gwarancyjne ustawowo określone, osobno dla szkód osobowych i majątkowych (wartości są waloryzowane, rzędu kilku mln euro).</li>
<li>Brak OC: kara z <b>Ubezpieczeniowego Funduszu Gwarancyjnego (UFG)</b>. UFG wypłaca też odszkodowania za szkody od nieznanych lub nieubezpieczonych sprawców.</li>
<li>Umowa OC przedłuża się automatycznie na kolejne 12 miesięcy, jeśli nie została wypowiedziana.</li>
<li>Przy sprzedaży pojazdu OC przechodzi na nabywcę (może je wypowiedzieć).</li>
</ul>
<h4>Likwidacja szkody</h4>
<ol>
<li>Zgłoszenie szkody (numer polisy sprawcy, oświadczenie sprawcy lub notatka policji, dane uczestników).</li>
<li>Oględziny pojazdu przez rzeczoznawcę (w terminie kilku dni) i kosztorys.</li>
<li>Wybór rozliczenia: bezgotówkowe w serwisie lub kosztorysowe.</li>
<li>Wypłata odszkodowania w ciągu <b>30 dni</b> od zgłoszenia (wyjątkowo dłużej, gdy wyjaśnienie okoliczności tego wymaga).</li>
</ol>
<h4>Bezpośrednia likwidacja szkód (BLS)</h4>
<p>Poszkodowany zgłasza szkodę do <b>swojego</b> ubezpieczyciela OC, który rozlicza się później z ubezpieczycielem sprawcy. Wymaga spełnienia warunków (zwykle kolizja dwóch pojazdów zarejestrowanych w Polsce, bez rannych).</p>
<h4>Rola serwisu</h4>
<ul>
<li>Pomoc w zgłoszeniu szkody, dokumentacja zdjęciowa, kontakt z rzeczoznawcą.</li>
<li>Uzgodnienie kosztorysu, zgłoszenie <b>szkody ukrytej</b> (uszkodzenia ujawnione po demontażu) przed jej naprawą.</li>
<li>Rozliczenie na podstawie cesji wierzytelności lub upoważnienia od klienta.</li>
</ul>
<div class="tip">OC chroni sprawcę przed roszczeniami innych, a nie jego własny pojazd. Na naprawę własnego auta po własnej winie potrzebne jest AC.</div>` },
        { tytul: "Odpady, ochrona środowiska i RODO", tresc: `<h4>Odpady w serwisie</h4>
<ul>
<li>Serwis jest wytwórcą odpadów i musi być wpisany do rejestru <b>BDO</b> (Baza danych o produktach i opakowaniach oraz o gospodarce odpadami).</li>
<li>Odpady przekazuje się wyłącznie firmom posiadającym zezwolenia, na podstawie <b>karty przekazania odpadu (KPO)</b> w BDO. Prowadzi się <b>ewidencję</b> (karty ewidencji odpadu) i składa roczne sprawozdanie.</li>
</ul>
<div class="tw"><table><tr><th>Odpad</th><th>Uwagi</th></tr>
<tr><td>zużyte oleje silnikowe i przekładniowe</td><td>niebezpieczny, kod z grupy 13 02, nie mieszać z innymi płynami</td></tr>
<tr><td>filtry olejowe, czyściwo zaolejone</td><td>niebezpieczne</td></tr>
<tr><td>płyn hamulcowy, płyn chłodniczy</td><td>niebezpieczne, osobne pojemniki</td></tr>
<tr><td>akumulatory ołowiowe</td><td>niebezpieczne, punkt zbiórki, sprzedawca nowego akumulatora przyjmuje zużyty</td></tr>
<tr><td>opony</td><td>do recyklingu, nie wolno spalać</td></tr>
<tr><td>klocki i tarcze hamulcowe</td><td>złom metali i odpady z okładzin</td></tr></table></div>
<h4>Wymagania techniczne</h4>
<ul>
<li>Nieprzepuszczalna posadzka, <b>separator</b> substancji ropopochodnych na odpływie wód z myjni i placu.</li>
<li>Sorbenty do zbierania wycieków, wanny wychwytowe pod pojemnikami z płynami.</li>
<li>Czynniki klimatyzacji odzyskuje się stacją, a prace wykonuje osoba z certyfikatem F-gazowym.</li>
</ul>
<h4>Pojazdy wycofane z eksploatacji</h4>
<p>Pojazd do kasacji przyjmuje <b>stacja demontażu</b> lub punkt zbierania, wydaje <b>zaświadczenie o demontażu</b>, na podstawie którego wyrejestrowuje się pojazd. Wymagany poziom odzysku 95% masy pojazdu (recykling 85%).</p>
<h4>RODO w serwisie</h4>
<ul>
<li>Dane klienta (imię, nazwisko, telefon, adres, numer rejestracyjny w powiązaniu z osobą) są danymi osobowymi.</li>
<li>Serwis jako <b>administrator</b> informuje o celu i podstawie przetwarzania, okresie przechowywania i prawach klienta (dostęp, sprostowanie, usunięcie, sprzeciw).</li>
<li>Zgoda jest potrzebna np. na marketing (SMS z ofertą), ale nie na wykonanie umowy naprawy.</li>
<li>Dokumenty z danymi przechowuje się zabezpieczone, dostęp mają tylko upoważnieni pracownicy. Dane z nawigacji i telefonów sparowanych z autem także są danymi osobowymi.</li>
</ul>
<div class="tip">Nie wolno mieszać zużytego oleju z płynem hamulcowym lub rozpuszczalnikiem: mieszanina utrudnia regenerację oleju i firma odbierająca może jej nie przyjąć.</div>` }
      ],
      pytania: [
        Q("Rękojmia za wady towaru sprzedanego konsumentowi trwa", "2 lata od wydania towaru", "6 miesięcy", "zawsze 5 lat", "tyle, ile wskazuje karta gwarancyjna", "Dla rzeczy używanych można ją skrócić do 1 roku."),
        Q("Gwarancji udziela", "gwarant w dobrowolnym oświadczeniu", "zawsze sprzedawca z mocy ustawy", "ubezpieczyciel w ramach polisy OC", "stacja kontroli pojazdów po badaniu", "Odpowiedzialność ustawowa sprzedawcy to rękojmia."),
        Q("Serwis powinien odpowiedzieć na reklamację konsumenta w terminie", "14 dni", "3 dni", "30 dni", "6 miesięcy", "Brak odpowiedzi w tym terminie oznacza uznanie reklamacji."),
        Q("Obowiązkowym ubezpieczeniem komunikacyjnym w Polsce jest", "OC posiadaczy pojazdów", "AC (autocasco)", "NNW kierowcy i pasażerów", "assistance drogowe", "Pozostałe ubezpieczenia są dobrowolne."),
        Q("Kary za brak obowiązkowego OC nakłada", "Ubezpieczeniowy Fundusz Gwarancyjny", "Stacja Kontroli Pojazdów", "Inspekcja Pracy", "Urząd Skarbowy", "UFG wypłaca także odszkodowania za nieubezpieczonych sprawców."),
        Q("Ubezpieczyciel powinien wypłacić odszkodowanie co do zasady w terminie", "30 dni od zgłoszenia szkody", "7 dni od zgłoszenia", "90 dni od zgłoszenia", "roku od zgłoszenia", "Dłużej tylko, gdy wyjaśnienie okoliczności nie jest możliwe w tym czasie."),
        Q("Przekazanie zużytego oleju firmie odbierającej odpady dokumentuje się", "kartą przekazania odpadu w BDO", "fakturą proforma od odbiorcy", "zleceniem naprawy pojazdu", "protokołem odbioru pojazdu", "Prowadzi się także ewidencję odpadów."),
        Q("Na odpływie wód z myjni i placu warsztatu stosuje się", "separator substancji ropopochodnych", "osadnik gnilny", "filtr węglowy w kabinie", "odmę silnika", "Separator zatrzymuje oleje i paliwa przed kanalizacją.")
      ]
    },
    {
      id: "organizacja", tytul: "Organizacja stacji obsługi", opis: "Zaplanujesz stanowiska, przepływ zleceń, zaopatrzenie i BHP w stacji obsługi pojazdów.",
      lekcje: [
        { tytul: "Stanowiska i wyposażenie", tresc: `<h4>Strefy stacji obsługi</h4>
<ul>
<li><b>Strefa przyjęć</b> (recepcja serwisowa, stanowisko przyjęcia z oświetleniem do oględzin), poczekalnia klienta.</li>
<li><b>Hala napraw mechanicznych</b>: stanowiska z podnośnikami, kanał przejazdowy lub nieprzejazdowy.</li>
<li><b>Stanowisko diagnostyczne</b>: linia diagnostyczna (rolki hamulcowe, płyta najazdowa, tester amortyzatorów, szarpaki), stanowisko geometrii.</li>
<li><b>Blacharnia i lakiernia</b>: kabina lakiernicza z wentylacją i filtrami, mieszalnia lakieru, strefa przygotowania.</li>
<li><b>Magazyn części</b>, magazyn opon, miejsce składowania odpadów.</li>
<li>Pomieszczenia socjalne: szatnie, umywalnie, jadalnia.</li>
</ul>
<h4>Podnośniki</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zastosowanie</th></tr>
<tr><td>dwukolumnowy</td><td>uniwersalny, swobodny dostęp do kół i zawieszenia</td></tr>
<tr><td>czterokolumnowy, nożycowy najazdowy</td><td>geometria kół, prace na podwoziu bez obciążenia ramion</td></tr>
<tr><td>nożycowy niski (diagnostyczny)</td><td>obsługa opon, hamulców</td></tr>
<tr><td>kolumny przejezdne</td><td>pojazdy ciężarowe i autobusy</td></tr></table></div>
<p>Podnośniki podlegają <b>Urzędowi Dozoru Technicznego (UDT)</b>: rejestracja, badania okresowe, konserwator, obsługa przez przeszkolonych pracowników z zaświadczeniem kwalifikacyjnym (dla niektórych typów).</p>
<h4>Planowanie liczby stanowisk</h4>
<p>Liczba stanowisk = roczna pracochłonność [rbh] / (roczny fundusz czasu stanowiska [h] × współczynnik wykorzystania × liczba zmian). Przykład: 12 000 rbh rocznie, fundusz 2000 h, wykorzystanie 0,8, jedna zmiana: 12 000 / 1600 = 7,5, czyli <b>8 stanowisk</b> (zawsze zaokrąglamy w górę).</p>
<h4>Wyposażenie typowego stanowiska</h4>
<p>Wózek narzędziowy z kompletem kluczy, klucz dynamometryczny, instalacja sprężonego powietrza, odciąg spalin, lampa, pojemnik na zużyty olej, tester diagnostyczny. W strefie hybryd i EV: wydzielone stanowisko oznakowane, mata izolacyjna, narzędzia 1000 V, hak ratunkowy, tablice ostrzegawcze.</p>
<h4>Wymagania BHP dla stanowisk</h4>
<div class="tw"><table><tr><th>Element</th><th>Wymaganie</th></tr>
<tr><td>Kanał naprawczy</td><td>krawężniki prowadzące, przykrycie gdy nieużywany, wyjście awaryjne, oświetlenie niskonapięciowe</td></tr>
<tr><td>Odciąg spalin</td><td>obowiązkowy przy pracy silnika w zamkniętej hali (tlenek węgla)</td></tr>
<tr><td>Lampy przenośne</td><td>zasilane bardzo niskim napięciem bezpiecznym (np. 12 V lub 24 V)</td></tr>
<tr><td>Gaśnice</td><td>proszkowe ABC przy stanowiskach, oznakowane i łatwo dostępne</td></tr></table></div>
<p>Typowy błąd w zadaniach: wybór podnośnika dwukolumnowego do pomiaru geometrii. Geometrię mierzy się na podnośniku najazdowym lub stanowisku z płytami obrotowymi, bo koła muszą stać obciążone.</p>
<div class="tip">W zadaniach o liczbie stanowisk wynik zawsze zaokrąglaj w górę: ułamek stanowiska oznacza, że cała praca nie zmieści się w istniejącej liczbie.</div>` },
        { tytul: "Przepływ zleceń i harmonogram", tresc: `<h4>Rola osób w serwisie</h4>
<ul>
<li><b>Doradca serwisowy</b>: kontakt z klientem, przyjęcie, zlecenie, kosztorys, wydanie.</li>
<li><b>Kierownik warsztatu</b> (brygadzista): przydział zleceń, nadzór, kontrola jakości.</li>
<li><b>Mechanicy, diagnosta, elektromechanik, blacharz, lakiernik</b>.</li>
<li><b>Magazynier</b> (części), pracownik administracji.</li>
</ul>
<h4>Planowanie pracy</h4>
<ul>
<li><b>Tablica planowania</b> (elektroniczny system DMS) pokazuje stanowiska i mechaników na osi czasu. Pozostawia się rezerwę (ok. 15-20% czasu) na nagłe wizyty i dodatkowe prace.</li>
<li>Rozkładanie przyjęć w czasie (np. co 15 minut), aby uniknąć kolejki rano.</li>
<li>Zamawianie części <b>przed</b> wizytą (na podstawie VIN i zakresu), by nie blokować stanowiska.</li>
</ul>
<h4>Wykres Gantta: przykład</h4>
<div class="tw"><table><tr><th>Zadanie</th><th>Czas</th><th>Poprzednik</th></tr>
<tr><td>A przyjęcie i diagnoza</td><td>0,5 h</td><td>-</td></tr>
<tr><td>B wymiana rozrządu</td><td>3,0 h</td><td>A</td></tr>
<tr><td>C wymiana oleju</td><td>0,5 h</td><td>A</td></tr>
<tr><td>D jazda próbna i kontrola</td><td>0,5 h</td><td>B, C</td></tr></table></div>
<p>Jeśli B i C wykonują dwie osoby równolegle, czas całkowity = 0,5 + 3,0 + 0,5 = <b>4 h</b> (ścieżka krytyczna A-B-D). Jedna osoba: 4,5 h.</p>
<h4>Obsługa ekspresowa</h4>
<p>Dla krótkich zleceń (olej, filtry, żarówki, wycieraczki) wydziela się stanowisko szybkiej obsługi bez wcześniejszego umawiania. Zwiększa to przepustowość i zadowolenie klienta.</p>
<h4>Komunikacja z klientem</h4>
<ul>
<li>Informacja o stanie naprawy (SMS, telefon), szczególnie o opóźnieniach i dodatkowych pracach.</li>
<li><b>Kontakt po wizycie</b> (follow-up) po 1-3 dniach: zadowolenie, problemy. Wyniki zbiera się jako wskaźnik <b>CSI</b> (zadowolenia klienta).</li>
<li>Przypomnienia o przeglądach i badaniu technicznym (za zgodą klienta).</li>
</ul>
<h4>Dokumenty w przepływie zlecenia</h4>
<div class="tw"><table><tr><th>Etap</th><th>Dokument</th></tr>
<tr><td>przyjęcie</td><td>zlecenie naprawy z podpisem klienta, protokół przyjęcia (przebieg, paliwo, uszkodzenia)</td></tr>
<tr><td>naprawa</td><td>karta pracy mechanika, dokument pobrania części z magazynu (RW)</td></tr>
<tr><td>prace dodatkowe</td><td>notatka o zgodzie klienta (telefon, SMS, e-mail)</td></tr>
<tr><td>wydanie</td><td>faktura, protokół wydania, wpis do książki serwisowej</td></tr></table></div>
<p>Czas pracy rozlicza się w normogodzinach z katalogu producenta, a nie w czasie rzeczywistym. Mechanik, który wykonuje naprawę szybciej niż norma, podnosi swój wskaźnik wydajności.</p>
<div class="tip">Ścieżka krytyczna to najdłuższy ciąg zadań zależnych. Skrócić całkowity czas naprawy można tylko skracając zadania na tej ścieżce.</div>` },
        { tytul: "BHP i ochrona przeciwpożarowa", tresc: `<h4>Zagrożenia w serwisie</h4>
<div class="tw"><table><tr><th>Zagrożenie</th><th>Środek ochrony</th></tr>
<tr><td>spaliny (CO, NOx)</td><td>odciąg spalin na stanowisku, wentylacja mechaniczna</td></tr>
<tr><td>upadek pojazdu z podnośnika</td><td>prawidłowe punkty podparcia, blokady, nieprzekraczanie udźwigu</td></tr>
<tr><td>wpadnięcie do kanału</td><td>osłony, barierki, oznakowanie, oświetlenie kanału napięciem bezpiecznym</td></tr>
<tr><td>porażenie (HV, ksenony, 230 V)</td><td>wyłączenie, narzędzia izolowane, uprawnienia</td></tr>
<tr><td>substancje chemiczne</td><td>karty charakterystyki, rękawice nitrylowe, okulary, wentylacja</td></tr>
<tr><td>hałas, pył lakierniczy</td><td>ochronniki słuchu, maski z filtrem, kombinezon</td></tr></table></div>
<h4>Kanał przeglądowy</h4>
<p>Oświetlenie i elektronarzędzia w kanale zasilane <b>napięciem bezpiecznym</b> (np. 24 V lub z transformatora separacyjnego). W kanale gromadzą się cięższe od powietrza opary paliwa i gazu: wentylacja, zakaz palenia, a pojazdy z LPG nie mogą stać nad kanałem z nieszczelną instalacją.</p>
<h4>Ochrona przeciwpożarowa</h4>
<ul>
<li>Gaśnice: <b>proszkowe ABC</b> (ciała stałe, ciecze, gazy), <b>śniegowe CO₂</b> (urządzenia elektryczne, nie zostawia osadu), gaśnice do metali (D) i tłuszczów (F).</li>
<li>Grupy pożarów: A ciała stałe, B ciecze, C gazy, D metale, F tłuszcze i oleje w urządzeniach kuchennych.</li>
<li>Zużyte czyściwo w metalowych, zamykanych pojemnikach; ograniczona ilość łatwopalnych cieczy na stanowisku.</li>
<li>Drogi ewakuacyjne oznakowane, niezastawione; instrukcja bezpieczeństwa pożarowego.</li>
<li>Pożar akumulatora trakcyjnego gasi się dużą ilością wody (chłodzenie), a pojazd po pożarze odstawia na wydzielone miejsce.</li>
</ul>
<h4>Obowiązki pracodawcy</h4>
<ul>
<li>Szkolenia BHP (wstępne: ogólne i stanowiskowe; okresowe), badania lekarskie, <b>ocena ryzyka zawodowego</b> dla każdego stanowiska.</li>
<li>Środki ochrony indywidualnej (obuwie z podnoskiem, rękawice, okulary, odzież robocza) bezpłatnie.</li>
<li>Instrukcje stanowiskowe przy maszynach i urządzeniach, apteczka, osoba przeszkolona w pierwszej pomocy.</li>
<li>Rejestr wypadków przy pracy, ustalenie okoliczności przez zespół powypadkowy, protokół.</li>
</ul>
<h4>Pierwsza pomoc</h4>
<p>Przy porażeniu: najpierw uwolnij poszkodowanego spod napięcia (wyłącz zasilanie), potem oceń oddech i wezwij pomoc (112). Brak oddechu: RKO 30 uciśnięć i 2 oddechy, użyj AED, jeśli jest dostępny.</p>
<div class="tip">Do gaszenia urządzeń elektrycznych pod napięciem nie używaj wody ani gaśnicy pianowej. Wybierz gaśnicę śniegową CO₂ lub proszkową.</div>` }
      ],
      pytania: [
        Q("Podnośniki samochodowe w stacji obsługi podlegają nadzorowi", "Urzędu Dozoru Technicznego", "Państwowej Inspekcji Sanitarnej", "Inspekcji Transportu Drogowego", "Urzędu Komunikacji Elektronicznej", "UDT prowadzi rejestrację i badania okresowe."),
        Q("Roczna pracochłonność wynosi 9000 rbh, fundusz czasu stanowiska 2000 h, współczynnik wykorzystania 0,75. Potrzebna liczba stanowisk (jedna zmiana) to", "6", "5", "4,5", "4", "9000 / (2000 × 0,75) = 6."),
        Q("Ścieżka krytyczna w harmonogramie naprawy to", "najdłuższy ciąg zadań zależnych od siebie", "najkrótsze zadanie w zleceniu", "zadania wykonywane przez doradcę", "lista części do zamówienia", "Opóźnienie na tej ścieżce opóźnia całą naprawę."),
        Q("Do gaszenia urządzeń elektrycznych pod napięciem należy użyć gaśnicy", "śniegowej CO₂", "pianowej", "wodnej", "dowolnej", "Woda i piana przewodzą prąd."),
        Q("Pożary cieczy palnych, np. benzyny, należą do grupy", "B", "A", "C", "D", "A to ciała stałe, C gazy, D metale."),
        Q("Oświetlenie przenośne w kanale przeglądowym zasila się", "napięciem bezpiecznym", "napięciem 400 V", "bezpośrednio z akumulatora pojazdu przewodem bez izolacji", "napięciem 230 V bez zabezpieczeń", "W kanale łatwo o kontakt z metalem i wilgoć."),
        Q("Wskaźnik CSI w serwisie określa", "zadowolenie klientów", "wykorzystanie stanowisk", "liczbę reklamacji części", "zużycie energii", "Customer Satisfaction Index."),
        Q("Pracownik doznał porażenia prądem. Pierwszą czynnością ratownika jest", "uwolnienie spod działania prądu", "rozpoczęcie oddechów ratowniczych", "podanie poszkodowanemu płynów", "przeniesienie go w bezpieczne miejsce", "Najpierw wyłącza się zasilanie, bez tego ratownik sam może zostać porażony.")
      ]
    },
    {
      id: "jakosc", tytul: "Zarządzanie jakością w serwisie", opis: "Zastosujesz narzędzia jakości i ocenisz pracę serwisu na podstawie wskaźników.",
      lekcje: [
        { tytul: "Systemy i zasady jakości", tresc: `<h4>ISO 9001</h4>
<p>Norma <b>ISO 9001</b> określa wymagania dla systemu zarządzania jakością: podejście procesowe, nastawienie na klienta, ocena ryzyka, udokumentowane procedury, audyty wewnętrzne, przegląd zarządzania, ciągłe doskonalenie. Certyfikat wydaje niezależna jednostka certyfikująca po audycie.</p>
<p>Inne normy: <b>ISO 14001</b> (zarządzanie środowiskowe), <b>ISO 45001</b> (BHP), <b>IATF 16949</b> (jakość w przemyśle motoryzacyjnym, dostawcy części).</p>
<h4>Cykl PDCA (Deminga)</h4>
<ol>
<li><b>Plan</b>: zaplanuj zmianę (np. skrócenie czasu przyjęcia).</li>
<li><b>Do</b>: wdroż ją na próbę.</li>
<li><b>Check</b>: zmierz efekt (wskaźniki).</li>
<li><b>Act</b>: utrwal lub popraw i zacznij nowy cykl.</li>
</ol>
<h4>5S na stanowisku</h4>
<div class="tw"><table><tr><th>Krok</th><th>Znaczenie</th><th>Przykład w warsztacie</th></tr>
<tr><td>Sortowanie</td><td>usuń niepotrzebne</td><td>uszkodzone narzędzia, stare części</td></tr>
<tr><td>Systematyka</td><td>miejsce dla wszystkiego</td><td>tablica cieni na narzędzia</td></tr>
<tr><td>Sprzątanie</td><td>czystość jako kontrola</td><td>czysta posadzka pokazuje wycieki</td></tr>
<tr><td>Standaryzacja</td><td>jednolite zasady</td><td>instrukcje i listy kontrolne</td></tr>
<tr><td>Samodyscyplina</td><td>utrzymanie nawyku</td><td>audyty 5S</td></tr></table></div>
<h4>Kaizen i inne pojęcia</h4>
<ul>
<li><b>Kaizen</b>: ciągłe, drobne usprawnienia zgłaszane przez pracowników.</li>
<li><b>Poka-yoke</b>: rozwiązanie zapobiegające błędom (np. złącza, które można połączyć tylko w jeden sposób; lista kontrolna momentów dokręcenia kół).</li>
<li><b>Lean</b>: eliminowanie marnotrawstwa (czekanie na części, zbędne przejścia, poprawki).</li>
</ul>
<h4>Kontrola jakości naprawy</h4>
<ul>
<li>Lista kontrolna przed wydaniem: momenty dokręcenia, poziomy płynów, brak kodów błędów, jazda próbna, czystość wnętrza.</li>
<li>Zasada „czterech oczu”: kluczowe prace (hamulce, układ kierowniczy) sprawdza druga osoba.</li>
<li>Rejestrowanie <b>napraw powtórnych</b> (powrót klienta z tą samą usterką).</li>
</ul>
<h4>Narzędzia analizy problemów</h4>
<ul>
<li><b>Diagram Ishikawy</b> (rybiej ości): przyczyny w kategoriach 5M, czyli człowiek, maszyna, metoda, materiał, zarządzanie (często dodaje się też środowisko i pomiar).</li>
<li><b>Metoda 5 x Dlaczego</b>: pytanie „dlaczego?” powtarza się aż do znalezienia przyczyny źródłowej.</li>
<li><b>Wykres Pareto</b>: ok. 20% przyczyn daje ok. 80% skutków, więc najpierw usuwa się przyczyny najczęstsze.</li>
<li>Wskaźniki serwisu: <b>CSI</b> (zadowolenie klienta), <b>FTFR</b> (naprawy skuteczne za pierwszym razem), odsetek napraw powtórnych.</li>
</ul>
<div class="tip">PDCA to kolejność: planuj, wykonaj, sprawdź, działaj. W pytaniach często podaje się etap opisowo, np. „pomiar efektów wprowadzonej zmiany” to Check.</div>` },
        { tytul: "Narzędzia analizy problemów", tresc: `<h4>Diagram Ishikawy (przyczynowo-skutkowy, „rybia ość”)</h4>
<p>Skutek (problem) zapisuje się na „głowie ryby”, a przyczyny grupuje w kategoriach <b>5M</b>: Man (człowiek), Machine (maszyna, urządzenie), Method (metoda), Material (materiał, części), Measurement (pomiar). Czasem dodaje się Management i Milieu (środowisko).</p>
<p>Przykład problemu: „powroty klientów po wymianie klocków (piszczenie)”. Przyczyny: człowiek (brak smaru na prowadnicach), metoda (brak docierania), materiał (zamiennik niskiej jakości), maszyna (zużyty klucz dynamometryczny).</p>
<h4>Analiza Pareto (80/20)</h4>
<ol>
<li>Zbierz dane: liczba reklamacji wg przyczyn.</li>
<li>Uporządkuj malejąco, policz udział procentowy i skumulowany.</li>
<li>Narysuj wykres słupkowy z krzywą skumulowaną.</li>
<li>Zajmij się najpierw kilkoma przyczynami dającymi ok. 80% problemów.</li>
</ol>
<div class="tw"><table><tr><th>Przyczyna reklamacji</th><th>Liczba</th><th>Udział</th><th>Skumulowany</th></tr>
<tr><td>termin wydania przekroczony</td><td>40</td><td>40%</td><td>40%</td></tr>
<tr><td>usterka nieusunięta</td><td>30</td><td>30%</td><td>70%</td></tr>
<tr><td>brud w kabinie</td><td>15</td><td>15%</td><td>85%</td></tr>
<tr><td>błąd na fakturze</td><td>10</td><td>10%</td><td>95%</td></tr>
<tr><td>inne</td><td>5</td><td>5%</td><td>100%</td></tr></table></div>
<h4>5 x Dlaczego</h4>
<p>Pytanie „dlaczego?” zadaje się kolejno aż do przyczyny źródłowej. Przykład: koło odpadło. Dlaczego? Śruby się poluzowały. Dlaczego? Nie dokręcono ich momentem. Dlaczego? Klucz dynamometryczny był w naprawie. Dlaczego nie było zastępczego? Brak procedury. Rozwiązanie: drugi klucz i lista kontrolna.</p>
<h4>Inne narzędzia</h4>
<ul>
<li><b>Karta kontrolna</b>: wykres wartości w czasie z granicami, wykrywa rozregulowanie procesu.</li>
<li><b>Histogram</b>: rozkład wyników (np. czas obsługi).</li>
<li><b>Arkusz kontrolny</b>: proste zliczanie zdarzeń (kreski).</li>
<li><b>FMEA</b>: analiza przyczyn i skutków wad, liczba priorytetowa ryzyka RPN = znaczenie × występowanie × wykrywalność.</li>
<li><b>Burza mózgów</b>: zbieranie pomysłów bez krytyki.</li>
</ul>
<div class="tip">Zapamiętaj kategorie 5M dla Ishikawy i zasadę 80/20 dla Pareto. To najczęstsze pytania z narzędzi jakości na egzaminie MOT.06.</div>` },
        { tytul: "Wskaźniki jakości i obsługa klienta", tresc: `<h4>Kluczowe wskaźniki (KPI)</h4>
<div class="tw"><table><tr><th>Wskaźnik</th><th>Jak liczony</th><th>Interpretacja</th></tr>
<tr><td><b>FTFR</b> (naprawa za pierwszym razem)</td><td>naprawy bez powrotu / wszystkie naprawy × 100%</td><td>im wyżej, tym lepiej (cel np. 95%)</td></tr>
<tr><td>wskaźnik napraw powtórnych</td><td>powroty z tą samą usterką / wszystkie naprawy</td><td>im niżej, tym lepiej</td></tr>
<tr><td><b>CSI</b></td><td>ankiety zadowolenia (skala)</td><td>satysfakcja klienta</td></tr>
<tr><td>terminowość</td><td>pojazdy wydane w terminie / wszystkie</td><td>rzetelność planowania</td></tr>
<tr><td><b>NPS</b></td><td>% polecających (9-10) minus % krytyków (0-6)</td><td>lojalność</td></tr>
<tr><td>średnia wartość zlecenia</td><td>przychód / liczba zleceń</td><td>sprzedaż dodatkowa</td></tr></table></div>
<p>Przykład NPS: 100 ankiet, 60 osób ocenia 9-10, 25 osób 7-8, 15 osób 0-6. NPS = 60% - 15% = <b>45</b>.</p>
<h4>Obsługa reklamacji klienta</h4>
<ol>
<li>Wysłuchaj klienta, nie przerywaj, zanotuj fakty.</li>
<li>Okaż zrozumienie, przeproś za niedogodność (nie jest to przyznanie winy).</li>
<li>Ustal termin oględzin i osobę odpowiedzialną.</li>
<li>Zbadaj sprawę, przedstaw rozwiązanie, potwierdź na piśmie.</li>
<li>Skontaktuj się po rozwiązaniu, zapisz przypadek do analizy (Pareto, Ishikawa).</li>
</ol>
<h4>Komunikacja i sprzedaż</h4>
<ul>
<li>Doradca przedstawia zakres prac językiem korzyści dla klienta, z podziałem na prace pilne (bezpieczeństwo), zalecane i do obserwacji (metoda „świateł”: czerwone, żółte, zielone).</li>
<li>Dokumentacja zdjęciowa lub wideo z usterką zwiększa zaufanie klienta.</li>
<li>Program lojalnościowy, pakiety serwisowe, przypomnienia o wymianie opon sezonowych.</li>
</ul>
<h4>Marketing serwisu</h4>
<p>Narzędzia marketingu mix <b>4P</b>: produkt (usługa), cena, dystrybucja (miejsce, dostępność), promocja. Analiza <b>SWOT</b>: mocne i słabe strony (wewnętrzne), szanse i zagrożenia (zewnętrzne, np. wzrost liczby aut elektrycznych, nowa konkurencja).</p>
<div class="tip">W SWOT pamiętaj podział: S i W dotyczą samego serwisu (np. doświadczeni mechanicy, brak stanowiska EV), O i T otoczenia (np. nowe osiedle obok, sieć konkurencyjna).</div>` }
      ],
      pytania: [
        Q("Norma określająca wymagania dla systemu zarządzania jakością to", "ISO 9001", "ISO 14001", "ISO 45001", "PN-EN 60204", "ISO 14001 dotyczy środowiska, ISO 45001 BHP."),
        Q("Etap cyklu PDCA polegający na pomiarze efektów wdrożonej zmiany to", "Check", "Plan", "Do", "Act", "Act to utrwalenie lub korekta zmiany."),
        Q("Diagram Ishikawy służy do", "analizy przyczyn problemu (np. 5M)", "planowania urlopów pracowników", "obliczania kosztów naprawy pojazdu", "harmonogramowania pracy stanowisk", "Nazywany jest diagramem rybiej ości."),
        Q("Zasada Pareto mówi, że", "ok. 20% przyczyn powoduje ok. 80% problemów", "wszystkie przyczyny są tak samo ważne", "80% klientów jest niezadowolonych", "20% zleceń trwa 80% dłużej", "Należy najpierw zająć się kilkoma najważniejszymi przyczynami."),
        Q("Krok metody 5S polegający na wyznaczeniu stałego miejsca dla każdego narzędzia to", "systematyka", "sortowanie", "sprzątanie", "samodyscyplina", "Przykładem jest tablica cieni na ścianie warsztatu."),
        Q("Rozwiązanie zapobiegające popełnieniu błędu, np. złącze możliwe do połączenia tylko w jeden sposób, to", "poka-yoke", "kaizen", "kanban", "benchmarking", "Kaizen to ciągłe drobne usprawnienia."),
        Q("Na 200 ankiet 110 osób oceniło serwis na 9-10, a 30 osób na 0-6. Wskaźnik NPS wynosi", "40", "55", "70", "15", "55% - 15% = 40."),
        Q("Wskaźnik FTFR w serwisie oznacza odsetek", "napraw skutecznych za pierwszym razem", "pojazdów przyjętych bez umówienia", "części zamówionych przed wizytą", "klientów powracających w ciągu roku", "First Time Fix Rate.")
      ]
    }
  ]);

  pod("ELE.02", [
    {
      id: "obliczenia", tytul: "Obliczenia obwodów elektrycznych", opis: "Obliczysz prądy, napięcia, moce i spadki napięć w obwodach jedno- i trójfazowych.",
      lekcje: [
        { tytul: "Obwody prądu stałego", tresc: `<h4>Prawa podstawowe</h4>
<ul>
<li><b>Prawo Ohma</b>: U = I × R.</li>
<li><b>I prawo Kirchhoffa</b>: suma prądów wpływających do węzła = suma prądów wypływających.</li>
<li><b>II prawo Kirchhoffa</b>: w zamkniętym oczku suma napięć źródłowych = suma spadków napięć.</li>
<li>Moc: P = U × I = I² × R = U² / R. Energia: W = P × t (1 kWh = 3,6 MJ).</li>
</ul>
<h4>Łączenie rezystorów</h4>
<div class="tw"><table><tr><th>Połączenie</th><th>Rezystancja zastępcza</th><th>Cecha</th></tr>
<tr><td>szeregowe</td><td>R = R1 + R2 + ...</td><td>ten sam prąd, napięcia dzielą się proporcjonalnie do R</td></tr>
<tr><td>równoległe</td><td>1/R = 1/R1 + 1/R2 + ...</td><td>to samo napięcie, prądy odwrotnie proporcjonalne do R</td></tr>
<tr><td>n jednakowych równolegle</td><td>R / n</td><td>R zastępcza mniejsza od najmniejszej</td></tr></table></div>
<h4>Przykład</h4>
<p>R1 = 10 Ω szeregowo z równoległym połączeniem R2 = 30 Ω i R3 = 60 Ω, zasilanie 24 V.</p>
<ol>
<li>R23 = 30 × 60 / (30 + 60) = 20 Ω.</li>
<li>R = 10 + 20 = 30 Ω, I = 24 / 30 = 0,8 A.</li>
<li>U1 = 0,8 × 10 = 8 V, U23 = 16 V.</li>
<li>I2 = 16 / 30 = 0,533 A, I3 = 16 / 60 = 0,267 A (suma 0,8 A, zgodnie z I prawem Kirchhoffa).</li>
</ol>
<h4>Dzielnik napięcia</h4>
<p>U2 = U × R2 / (R1 + R2). Dzielnik z rezystorami 1 kΩ i 4 kΩ na 10 V: na rezystorze 4 kΩ jest 8 V. Po dołączeniu obciążenia napięcie spada (obciążenie łączy się równolegle z R2).</p>
<h4>Rezystancja przewodu i temperatura</h4>
<ul>
<li>R = ρ × l / S = l / (γ × S). Konduktywność: miedź γ ≈ 56-58 m/(Ω·mm²), aluminium γ ≈ 33-35 m/(Ω·mm²).</li>
<li>Rezystancja metali rośnie z temperaturą: R = R20 × (1 + α × Δt), dla miedzi α ≈ 0,004 1/K. Przy wzroście o 50 K rezystancja rośnie o ok. 20%.</li>
<li>Przewód miedziany 2 × 50 m, 2,5 mm²: R = 100 / (56 × 2,5) ≈ 0,71 Ω.</li>
</ul>
<h4>Źródła rzeczywiste</h4>
<p>Akumulator ma rezystancję wewnętrzną Rw: U = E - I × Rw. Ogniwa połączone szeregowo sumują napięcia, równolegle sumują pojemności (prąd).</p>
<div class="tip">W obliczeniach z prawem Kirchhoffa zawsze sprawdź wynik: suma prądów gałęzi równoległych musi dać prąd całkowity, a suma spadków napięcia napięcie zasilania.</div>` },
        { tytul: "Prąd przemienny i układy trójfazowe", tresc: `<h4>Wielkości sinusoidalne</h4>
<ul>
<li>Napięcie w sieci: wartość skuteczna 230 V, maksymalna 230 × √2 ≈ 325 V, częstotliwość 50 Hz (okres 20 ms).</li>
<li>Reaktancja cewki XL = 2πfL rośnie z częstotliwością, kondensatora XC = 1 / (2πfC) maleje.</li>
<li>Impedancja szeregowego RL: Z = √(R² + XL²), cos φ = R / Z.</li>
</ul>
<h4>Moce</h4>
<div class="tw"><table><tr><th>Moc</th><th>1-fazowa</th><th>3-fazowa (symetryczna)</th><th>Jednostka</th></tr>
<tr><td>czynna P</td><td>U × I × cos φ</td><td>√3 × U × I × cos φ</td><td>W</td></tr>
<tr><td>bierna Q</td><td>U × I × sin φ</td><td>√3 × U × I × sin φ</td><td>var</td></tr>
<tr><td>pozorna S</td><td>U × I</td><td>√3 × U × I</td><td>VA</td></tr></table></div>
<p>S² = P² + Q². W układzie trójfazowym U to napięcie <b>międzyprzewodowe</b> (400 V), I prąd przewodowy.</p>
<h4>Gwiazda i trójkąt</h4>
<ul>
<li><b>Gwiazda (Y)</b>: napięcie na odbiorniku (fazowe) Uf = U / √3 = 230 V; prąd fazowy = prąd przewodowy.</li>
<li><b>Trójkąt (Δ)</b>: odbiornik dostaje pełne 400 V; prąd przewodowy = √3 × prąd fazowy.</li>
<li>Ten sam odbiornik (trzy grzałki) przełączony z gwiazdy w trójkąt pobiera <b>3 razy</b> większą moc.</li>
</ul>
<h4>Przykład: prąd silnika</h4>
<p>Silnik 7,5 kW (moc na wale), 400 V, sprawność η = 0,88, cos φ = 0,85.</p>
<p>I = P / (√3 × U × η × cos φ) = 7500 / (1,732 × 400 × 0,88 × 0,85) ≈ 7500 / 518 ≈ <b>14,5 A</b>.</p>
<p>Moc pobrana z sieci P1 = 7500 / 0,88 ≈ 8,52 kW.</p>
<h4>Przykład: grzejnik trójfazowy</h4>
<p>Trzy grzałki po 52,9 Ω w gwieździe na 400 V: każda ma 230 V, I = 230 / 52,9 ≈ 4,35 A, moc jednej 1000 W, razem 3 kW. W trójkącie: każda ma 400 V, moc jednej ≈ 3025 W, razem ok. 9 kW.</p>
<h4>Przewód neutralny</h4>
<p>Przy obciążeniu symetrycznym prąd w N jest równy zero. Przy niesymetrycznym płynie prąd wyrównawczy. Przerwa w N przy niesymetrycznym obciążeniu powoduje <b>przesunięcie punktu neutralnego</b>: na jednych odbiornikach napięcie rośnie (nawet do 400 V), na innych maleje. Dlatego w N nie instaluje się bezpieczników.</p>
<div class="tip">Najczęstszy błąd w zadaniach: mnożenie przez √3 w obwodzie jednofazowym albo pomijanie sprawności silnika. Moc na tabliczce silnika to moc mechaniczna na wale.</div>` },
        { tytul: "Spadek napięcia i energia", tresc: `<h4>Wzory na spadek napięcia (procentowy)</h4>
<ul>
<li>Jednofazowy: <b>ΔU% = 200 × P × l / (γ × S × U²)</b>, U = 230 V.</li>
<li>Trójfazowy: <b>ΔU% = 100 × P × l / (γ × S × U²)</b>, U = 400 V.</li>
<li>P w W, l w m (długość linii, nie przewodu), S w mm², γ w m/(Ω·mm²). Wzory pomijają reaktancję (wystarczające dla małych przekrojów).</li>
</ul>
<h4>Dopuszczalne wartości</h4>
<ul>
<li>Wg PN-HD 60364-5-52 (zalecenie) od złącza do odbiornika: <b>3%</b> dla oświetlenia i <b>5%</b> dla innych odbiorów (dla instalacji zasilanych z sieci publicznej niskiego napięcia).</li>
<li>Wg Warunków Technicznych dla budynków: od licznika do odbiornika <b>3%</b>.</li>
<li>Przy rozruchu silników dopuszcza się większe spadki chwilowe.</li>
</ul>
<h4>Przykład 1-fazowy</h4>
<p>Odbiornik 3 kW, linia 20 m, przewód Cu 2,5 mm²:</p>
<p>ΔU% = 200 × 3000 × 20 / (56 × 2,5 × 230²) = 12 000 000 / 7 406 000 ≈ <b>1,62%</b>. Warunek 3% spełniony.</p>
<h4>Przykład 3-fazowy</h4>
<p>Silnik pobiera 15 kW, linia 60 m, Cu 4 mm²: ΔU% = 100 × 15 000 × 60 / (56 × 4 × 400²) = 90 000 000 / 35 840 000 ≈ <b>2,51%</b>.</p>
<p>Jeśli wynik przekracza dopuszczalny, zwiększa się przekrój (spadek maleje proporcjonalnie: dwa razy większy przekrój, dwa razy mniejszy spadek).</p>
<h4>Energia i koszty</h4>
<ul>
<li>Energia: W = P × t. Czajnik 2 kW przez 6 minut: 2 × 0,1 h = 0,2 kWh.</li>
<li>Koszt: W × cena. 0,2 kWh × 1,10 zł/kWh = 0,22 zł.</li>
<li>Straty w przewodzie: ΔP = I² × R. Przy 16 A i 0,71 Ω: ok. 182 W, czyli przewód się grzeje, a energia jest tracona.</li>
</ul>
<h4>Pomiar mocy i energii</h4>
<p>Watomierz: cewka prądowa szeregowo, napięciowa równolegle. Moc 3-fazową w układzie symetrycznym mierzy się jednym watomierzem (wynik × 3), w niesymetrycznym trzema, w układzie trójprzewodowym metodą <b>dwóch watomierzy (Arona)</b>. Licznik energii zlicza kWh; stała licznika, np. 1000 imp/kWh, pozwala obliczyć moc z liczby impulsów w czasie.</p>
<p>Przykład: 50 impulsów w 60 s przy 1000 imp/kWh: 0,05 kWh w 1/60 h, P = 3 kW.</p>
<div class="tip">We wzorze na spadek napięcia l to długość trasy linii (odległość). Mnożnik 200 w obwodzie jednofazowym już uwzględnia przewód fazowy i neutralny.</div>` }
      ],
      pytania: [
        Q("Rezystancja zastępcza dwóch rezystorów 20 Ω połączonych równolegle wynosi", "10 Ω", "40 Ω", "20 Ω", "400 Ω", "Dla n jednakowych rezystorów równolegle R/n."),
        Q("Wartość maksymalna napięcia sieci o wartości skutecznej 230 V wynosi około", "325 V", "230 V", "400 V", "163 V", "Umax = U × √2."),
        Q("W układzie gwiazdy napięcie na każdym odbiorniku zasilanym z sieci 400 V wynosi", "230 V", "400 V", "690 V", "133 V", "Uf = U / √3."),
        Q("Trzy jednakowe grzałki przełączono z gwiazdy w trójkąt. Moc całkowita", "wzrośnie 3 razy", "zmaleje 3 razy", "nie zmieni się", "wzrośnie √3 razy", "Napięcie na każdej grzałce rośnie √3 razy, a moc z kwadratem napięcia."),
        Q("Moc czynną odbiornika trójfazowego oblicza się ze wzoru", "P = √3 × U × I × cos φ", "P = U × I", "P = 3 × U × I × sin φ", "P = U² × R", "U to napięcie międzyprzewodowe, I prąd przewodowy."),
        Q("Przerwa w przewodzie neutralnym przy niesymetrycznym obciążeniu sieci trójfazowej powoduje", "wzrost napięcia na części odbiorników", "wyłączenie wszystkich odbiorników w sieci", "spadek napięcia na wszystkich fazach", "zmianę częstotliwości napięcia sieci", "Następuje przesunięcie punktu neutralnego, napięcie może przekroczyć 230 V."),
        Q("Czajnik o mocy 2 kW pracujący 15 minut zużywa energię", "0,5 kWh", "30 kWh", "2 kWh", "0,15 kWh", "2 kW × 0,25 h."),
        Q("Podwojenie przekroju przewodu przy tej samej mocy i długości linii powoduje, że spadek napięcia", "zmaleje dwukrotnie", "wzrośnie dwukrotnie", "nie zmieni się", "zmaleje czterokrotnie", "Spadek napięcia jest odwrotnie proporcjonalny do przekroju.")
      ]
    },
    {
      id: "dobor", tytul: "Dobór przewodów i zabezpieczeń", opis: "Dobierzesz przewód i zabezpieczenie nadprądowe do obwodu oraz zapewnisz wybiórczość.",
      lekcje: [
        { tytul: "Przewody i kable: oznaczenia", tresc: `<h4>Oznaczenia krajowe</h4>
<div class="tw"><table><tr><th>Litera</th><th>Znaczenie</th></tr>
<tr><td>Y (na początku)</td><td>izolacja z PVC</td></tr>
<tr><td>D</td><td>żyła jednodrutowa (drut)</td></tr>
<tr><td>L</td><td>żyła wielodrutowa (linka); Lg giętka</td></tr>
<tr><td>A</td><td>żyła aluminiowa (brak litery: miedź)</td></tr>
<tr><td>Y (po literze żyły)</td><td>powłoka z PVC</td></tr>
<tr><td>p</td><td>przewód płaski</td></tr>
<tr><td>K (na początku)</td><td>kabel; KX izolacja z polietylenu usieciowanego (XLPE)</td></tr></table></div>
<p>Przykłady: <b>YDY 3×2,5 mm² 450/750 V</b>: miedziany, jednodrutowy, izolacja i powłoka PVC, trzy żyły. <b>YDYp</b>: to samo, płaski (pod tynk). <b>OWY</b> (H05VV-F): przewód oponowy warsztatowy, giętki, do odbiorników ruchomych. <b>YKY</b>: kabel miedziany w izolacji PVC. <b>YAKY</b>: kabel aluminiowy.</p>
<h4>Oznaczenia zharmonizowane</h4>
<p><b>H07V-U</b>: H (norma zharmonizowana), 07 (450/750 V), V (izolacja PVC), U (żyła jednodrutowa), R (wielodrutowa), K (giętka do instalacji stałych), F (giętka do odbiorników ruchomych). H07V-K to linka (dawniej LgY).</p>
<h4>Kolory żył</h4>
<ul>
<li><b>PE</b>: zielono-żółty (zastrzeżony wyłącznie dla przewodu ochronnego).</li>
<li><b>N</b>: niebieski (jasnoniebieski).</li>
<li><b>Fazy L1, L2, L3</b>: brązowy, czarny, szary.</li>
<li><b>PEN</b>: zielono-żółty z niebieskimi oznaczeniami na końcach (lub niebieski z zielono-żółtymi).</li>
</ul>
<h4>Przekroje minimalne (Cu, instalacje stałe)</h4>
<ul>
<li>Obwody siłowe i oświetleniowe: <b>1,5 mm² Cu</b> (przewody aluminiowe: co najmniej 16 mm²).</li>
<li>Obwody sygnalizacyjne i sterownicze: 0,5 mm².</li>
<li>Przewód PEN w instalacji stałej: co najmniej <b>10 mm² Cu</b> lub 16 mm² Al.</li>
<li>Przewód PE: do 16 mm² taki jak fazowy; 16-35 mm²: 16 mm²; powyżej 35 mm²: połowa przekroju fazowego. PE prowadzony osobno, bez osłony: min. 4 mm² Cu.</li>
<li>Typowe obwody w mieszkaniu: oświetlenie 1,5 mm² (B10), gniazda 2,5 mm² (B16), kuchnia elektryczna 3-fazowa 5×2,5 mm² lub 5×4 mm² (B16-B20).</li>
</ul>
<div class="tip">Kolor zielono-żółty może mieć tylko przewód PE lub PEN. Użycie go jako fazy jest poważnym błędem bezpieczeństwa, ocenianym na egzaminie praktycznym.</div>` },
        { tytul: "Zabezpieczenia nadprądowe i warunki doboru", tresc: `<h4>Rodzaje zabezpieczeń</h4>
<ul>
<li><b>Wyłączniki nadprądowe</b> (instalacyjne, S): człon termiczny (przeciążenia) i elektromagnetyczny (zwarcia).</li>
<li><b>Bezpieczniki topikowe</b>: wkładki <b>gG</b> (ogólnego przeznaczenia, chronią przewody), <b>aM</b> (tylko zwarciowe, do silników, z dodatkowym zabezpieczeniem przeciążeniowym), gR/aR (półprzewodniki).</li>
</ul>
<div class="tw"><table><tr><th>Charakterystyka wyłącznika</th><th>Wyzwalanie natychmiastowe</th><th>Zastosowanie</th></tr>
<tr><td>B</td><td>3-5 × In</td><td>oświetlenie, gniazda, odbiorniki rezystancyjne</td></tr>
<tr><td>C</td><td>5-10 × In</td><td>silniki, odbiorniki z prądem rozruchu, świetlówki w dużych grupach</td></tr>
<tr><td>D</td><td>10-20 × In</td><td>duże prądy rozruchowe (transformatory, spawarki)</td></tr></table></div>
<h4>Warunki ochrony przed przeciążeniem</h4>
<p><b>IB ≤ In ≤ Iz</b> oraz <b>I2 ≤ 1,45 × Iz</b>, gdzie IB prąd obliczeniowy obwodu, In prąd znamionowy zabezpieczenia, Iz obciążalność długotrwała przewodu, I2 prąd zadziałania zabezpieczenia.</p>
<p>Dla wyłączników nadprądowych I2 = 1,45 × In, więc drugi warunek jest spełniony automatycznie, gdy In ≤ Iz. Dla wkładek gG I2 = 1,9 × In (od 4 do poniżej 16 A) lub 1,6 × In (od 16 A), więc trzeba to sprawdzać.</p>
<h4>Warunek ochrony przy zwarciu (samoczynne wyłączenie)</h4>
<p><b>Zs × Ia ≤ U0</b>, gdzie Zs impedancja pętli zwarcia, Ia prąd zapewniający wyłączenie w wymaganym czasie (dla wyłącznika: górna granica wyzwalania natychmiastowego), U0 = 230 V.</p>
<p>Przykład B16: Ia = 5 × 16 = 80 A, Zs max = 230 / 80 = <b>2,875 Ω</b>. C16: Ia = 160 A, Zs max = 1,44 Ω. Przy długiej linii i małym przekroju warunek dla charakterystyki C może nie być spełniony.</p>
<h4>Przykład doboru</h4>
<p>Obwód 1-fazowy, bojler 3 kW, cos φ = 1: IB = 3000 / 230 ≈ 13 A. Przewód YDYp 3×2,5 mm² pod tynkiem, Iz ≈ 24 A (wg tabel dla danego sposobu ułożenia). Dobór: wyłącznik <b>B16</b>: 13 ≤ 16 ≤ 24, warunek spełniony.</p>
<h4>Współczynniki korekcyjne</h4>
<p>Obciążalność z tabel (PN-HD 60364-5-52) dotyczy temperatury otoczenia 30°C i jednego obwodu. Wyższa temperatura otoczenia lub wiele obwodów ułożonych razem (wiązka, korytko) zmniejsza Iz przez współczynniki (np. 0,7 dla kilku obwodów w wiązce). Przewody w izolacji cieplnej (wełna) mają dużo mniejszą obciążalność.</p>
<div class="tip">Zabezpieczenie chroni przede wszystkim przewód, nie odbiornik. Nie wolno zwiększyć wyłącznika do B20, bo „wybija”, jeśli przewód ma Iz = 18 A.</div>` },
        { tytul: "Wybiórczość i rozdzielnica", tresc: `<h4>Wybiórczość (selektywność)</h4>
<p>Przy zwarciu lub przeciążeniu powinno zadziałać <b>tylko zabezpieczenie najbliższe miejsca uszkodzenia</b>, a zabezpieczenia wyżej w układzie (przedlicznikowe, główne) mają pozostać załączone.</p>
<ul>
<li>Bezpieczniki gG: wybiórczość zachowana, gdy prądy znamionowe kolejnych wkładek różnią się co najmniej w stosunku <b>1,6 : 1</b> (np. 40 A i 25 A).</li>
<li>Wyłącznik nadprądowy za bezpiecznikiem: wybiórczość sprawdza się z tabel producenta (często tylko do określonego prądu zwarciowego).</li>
<li>Wyłączniki różnicowoprądowe: wybiórczy typ <b>S</b> (zwłoczny) wyżej, zwykły 30 mA niżej; prądy różnicowe w stosunku co najmniej 3 : 1 (np. 100 mA S i 30 mA).</li>
</ul>
<h4>Zdolność zwarciowa</h4>
<p>Każde zabezpieczenie musi wyłączyć największy spodziewany prąd zwarcia w miejscu montażu. Wyłączniki instalacyjne mają zwykle Icn = <b>6 kA</b> lub 10 kA. Jeśli prąd zwarcia jest większy, stosuje się bezpiecznik przed wyłącznikiem (ochrona rezerwowa).</p>
<h4>Rozdzielnica mieszkaniowa</h4>
<ol>
<li>Wyłącznik główny (rozłącznik izolacyjny) lub wyłącznik nadprądowy główny.</li>
<li><b>Ogranicznik przepięć</b> (SPD typu 2, przy złączu typu 1 lub 1+2).</li>
<li>Wyłączniki różnicowoprądowe (np. 40 A / 30 mA), najlepiej kilka, aby zadziałanie jednego nie wyłączało całego mieszkania.</li>
<li>Wyłączniki nadprądowe obwodów, opisane (np. „gniazda kuchnia”, „oświetlenie salon”).</li>
<li>Szyny: <b>N</b> (niebieska, izolowana) i <b>PE</b> (zielono-żółta, połączona z obudową).</li>
</ol>
<h4>Zasady montażu rozdzielnicy</h4>
<ul>
<li>Dokręcanie zacisków <b>momentem</b> podanym przez producenta aparatu (np. 2-2,5 Nm), żyły linkowe zakończone tulejkami.</li>
<li>Faza na górny zacisk wyłącznika (zasilanie), odpływ na dolny, chyba że producent dopuszcza zasilanie dowolne.</li>
<li>Przewody N obwodów za RCD muszą wracać przez <b>ten sam</b> RCD, przez który przechodzi faza. Połączenie N za RCD z inną szyną N powoduje zadziałania lub brak ochrony.</li>
<li>Zapas miejsca ok. 20% na rozbudowę, schemat i opis obwodów w drzwiach rozdzielnicy.</li>
<li>Stopień ochrony obudowy dobrany do pomieszczenia (np. IP30 mieszkanie, IP65 na zewnątrz).</li>
</ul>
<div class="tip">Typowe zadanie praktyczne: zmontuj rozdzielnicę wg schematu i wykonaj pomiary. Najczęstsze błędy: pomieszane N za różnymi RCD, brak tulejek na linkach, niedokręcone zaciski.</div>` }
      ],
      pytania: [
        Q("Oznaczenie przewodu YDYp oznacza przewód", "miedziany jednodrutowy w izolacji i powłoce PVC, płaski", "aluminiowy jednodrutowy w izolacji i powłoce PVC, okrągły", "miedziany wielodrutowy (linka) w izolacji gumowej, płaski", "miedziany jednodrutowy w izolacji PVC, bez powłoki, okrągły", "Litera A oznaczałaby aluminium, L linkę."),
        Q("Kolor izolacji zastrzeżony wyłącznie dla przewodu ochronnego PE to", "zielono-żółty", "niebieski", "brązowy", "czarny", "Niebieski oznacza przewód neutralny N."),
        Q("Wyłącznik nadprądowy o charakterystyce B wyzwala natychmiastowo przy prądzie", "3-5 × In", "5-10 × In", "10-20 × In", "1,13 × In", "Charakterystyka C: 5-10 × In, D: 10-20 × In."),
        Q("Warunek ochrony przewodu przed przeciążeniem ma postać", "IB ≤ In ≤ Iz", "Iz ≤ In ≤ IB", "In ≥ 1,45 × Iz", "IB = Iz = In", "Prąd obciążenia mniejszy od prądu zabezpieczenia, a ten od obciążalności przewodu."),
        Q("Maksymalna impedancja pętli zwarcia dla obwodu z wyłącznikiem B10 przy U0 = 230 V wynosi", "4,6 Ω", "23 Ω", "2,3 Ω", "0,46 Ω", "Ia = 5 × 10 = 50 A, Zs = 230 / 50."),
        Q("Wybiórczość działania bezpieczników gG jest zachowana, gdy prądy znamionowe kolejnych wkładek mają stosunek co najmniej", "1,6 : 1", "1,1 : 1", "1 : 1", "10 : 1", "Np. 25 A za 40 A."),
        Q("Minimalny przekrój przewodu PEN z miedzi w instalacji ułożonej na stałe wynosi", "10 mm²", "1,5 mm²", "2,5 mm²", "4 mm²", "Dla aluminium 16 mm²."),
        Q("Przewody neutralne obwodów zabezpieczonych wyłącznikiem różnicowoprądowym należy podłączyć", "do zacisku N tego samego wyłącznika RCD", "do szyny PE wspólnej dla rozdzielnicy", "do dowolnej szyny N w rozdzielnicy", "do zacisku N sąsiedniego wyłącznika RCD", "Inaczej RCD wykrywa nierównowagę prądów i wyłącza.")
      ]
    },
    {
      id: "ochrona", tytul: "Ochrona przeciwporażeniowa i pomiary", opis: "Dobierzesz środki ochrony przeciwporażeniowej i wykonasz pomiary odbiorcze instalacji.",
      lekcje: [
        { tytul: "Układy sieci i środki ochrony", tresc: `<h4>Oznaczenia układów sieci</h4>
<ul>
<li>Pierwsza litera: <b>T</b> punkt neutralny źródła uziemiony bezpośrednio, <b>I</b> izolowany lub uziemiony przez impedancję.</li>
<li>Druga litera: <b>N</b> części przewodzące dostępne połączone z uziemionym punktem neutralnym, <b>T</b> uziemione własnym uziomem.</li>
<li>Dalej: <b>C</b> funkcje N i PE w jednym przewodzie (PEN), <b>S</b> osobne przewody N i PE.</li>
</ul>
<div class="tw"><table><tr><th>Układ</th><th>Cechy</th></tr>
<tr><td>TN-C</td><td>przewód PEN w całej instalacji; nie stosuje się w nowych instalacjach w budynkach; RCD nie działa</td></tr>
<tr><td>TN-S</td><td>osobne N i PE od źródła</td></tr>
<tr><td>TN-C-S</td><td>PEN do złącza lub rozdzielnicy głównej, potem rozdział na N i PE (najczęstszy w Polsce); po rozdzieleniu nie wolno łączyć N i PE ponownie</td></tr>
<tr><td>TT</td><td>uziemienia odbiorców niezależne od źródła; wymagane RCD</td></tr>
<tr><td>IT</td><td>pierwsze zwarcie z ziemią nie wyłącza zasilania (szpitale, kopalnie); kontrola stanu izolacji</td></tr></table></div>
<h4>Środki ochrony</h4>
<ul>
<li><b>Ochrona podstawowa</b> (przed dotykiem bezpośrednim): izolacja, obudowy i osłony, przeszkody, umieszczenie poza zasięgiem ręki.</li>
<li><b>Ochrona przy uszkodzeniu</b> (dotyk pośredni): samoczynne wyłączenie zasilania, izolacja podwójna lub wzmocniona, separacja elektryczna, połączenia wyrównawcze.</li>
<li><b>Ochrona uzupełniająca</b>: wyłączniki różnicowoprądowe o IΔn ≤ 30 mA, połączenia wyrównawcze miejscowe.</li>
<li>Bardzo niskie napięcie: <b>SELV</b> (bez uziemienia, do 50 V AC / 120 V DC), <b>PELV</b> (z uziemieniem).</li>
</ul>
<h4>Czasy samoczynnego wyłączenia (U0 = 230 V)</h4>
<div class="tw"><table><tr><th>Obwód</th><th>TN</th><th>TT</th></tr>
<tr><td>obwody odbiorcze do 32 A</td><td>0,4 s</td><td>0,2 s</td></tr>
<tr><td>obwody rozdzielcze i powyżej 32 A</td><td>5 s</td><td>1 s</td></tr></table></div>
<h4>Klasy ochronności urządzeń</h4>
<ul>
<li><b>Klasa 0</b>: tylko izolacja podstawowa (niedopuszczalna w Polsce w nowych instalacjach).</li>
<li><b>Klasa I</b>: zacisk ochronny, obudowa łączona z PE (pralka, kuchenka).</li>
<li><b>Klasa II</b>: izolacja podwójna lub wzmocniona, symbol podwójnego kwadratu, bez PE (wiertarka, suszarka).</li>
<li><b>Klasa III</b>: zasilanie napięciem SELV (lampka 12 V z transformatora bezpieczeństwa).</li>
</ul>
<div class="tip">W układzie TN-C-S po rozdzieleniu przewodu PEN na N i PE nigdy nie łącz ich ponownie dalej w instalacji. Takie połączenie powoduje stałe zadziałania RCD i prąd w przewodzie ochronnym.</div>` },
        { tytul: "Wyłączniki różnicowoprądowe", tresc: `<h4>Zasada działania</h4>
<p>Przekładnik sumujący mierzy sumę prądów w przewodach czynnych (L i N). Gdy część prądu płynie do ziemi (przez człowieka lub uszkodzoną izolację), powstaje <b>prąd różnicowy</b> i wyłącznik wyzwala.</p>
<p>RCD wyzwala przy prądzie różnicowym od <b>0,5 do 1 × IΔn</b> (dla AC). Nie reaguje na przeciążenie ani zwarcie L-N, więc zawsze potrzebuje zabezpieczenia nadprądowego (lub stosuje się wyłącznik dwufunkcyjny RCBO).</p>
<h4>Typy RCD</h4>
<div class="tw"><table><tr><th>Typ</th><th>Wykrywa prądy</th><th>Zastosowanie</th></tr>
<tr><td>AC</td><td>sinusoidalne przemienne</td><td>proste odbiorniki (coraz rzadziej stosowany)</td></tr>
<tr><td>A</td><td>AC i pulsujące jednokierunkowe</td><td>typowy w mieszkaniach (urządzenia z elektroniką)</td></tr>
<tr><td>F</td><td>jak A plus prądy o mieszanych częstotliwościach</td><td>pralki, pompy ciepła z falownikiem jednofazowym</td></tr>
<tr><td>B</td><td>również prądy stałe gładkie</td><td>falowniki trójfazowe, ładowarki EV, fotowoltaika (gdy wymaga producent)</td></tr></table></div>
<h4>Gdzie wymagany RCD 30 mA</h4>
<ul>
<li>Obwody gniazd wtyczkowych o prądzie znamionowym do <b>32 A</b> użytkowane przez osoby niewykwalifikowane.</li>
<li>Obwody urządzeń przenośnych używanych na zewnątrz do 32 A.</li>
<li>Wszystkie obwody w łazienkach, obwody oświetleniowe w mieszkaniach.</li>
</ul>
<h4>Wartości prądów różnicowych</h4>
<ul>
<li>10 mA i 30 mA: ochrona uzupełniająca (przed dotykiem bezpośrednim).</li>
<li>100 mA, 300 mA, 500 mA: ochrona przy uszkodzeniu i <b>przeciwpożarowa</b> (300 mA, często typ S selektywny).</li>
</ul>
<h4>Sprawdzanie</h4>
<ul>
<li><b>Przycisk TEST</b> sprawdza mechanizm, nie mierzy parametrów. Użytkownik naciska go okresowo (zwykle raz w miesiącu lub wg producenta).</li>
<li>Pomiar miernikiem: <b>prąd zadziałania</b> IΔ (w zakresie 0,5-1 × IΔn) i <b>czas zadziałania</b>: przy IΔn dla RCD ogólnego najwyżej <b>300 ms</b> (typ S: 130-500 ms), przy 5 × IΔn najwyżej <b>40 ms</b>.</li>
<li>Napięcie dotykowe UB przy prądzie różnicowym nie może przekroczyć 50 V.</li>
<li>W układzie TT warunek: <b>RA × IΔn ≤ 50 V</b>. Dla 30 mA: RA ≤ 1667 Ω.</li>
</ul>
<div class="tip">Wyłącznik różnicowoprądowy nie chroni przed porażeniem, gdy człowiek dotknie jednocześnie L i N (prąd płynie przez ciało, ale suma prądów w L i N się zgadza).</div>` },
        { tytul: "Pomiary odbiorcze instalacji", tresc: `<h4>Kolejność sprawdzeń (PN-HD 60364-6)</h4>
<ol>
<li><b>Oględziny</b> (przed włączeniem): dobór i oznaczenie przewodów i zabezpieczeń, stan osprzętu, schematy, stopnie IP, ochrona podstawowa.</li>
<li><b>Ciągłość przewodów</b> ochronnych i połączeń wyrównawczych (prąd pomiarowy min. 200 mA, napięcie 4-24 V).</li>
<li><b>Rezystancja izolacji</b>.</li>
<li>Ochrona przez SELV, PELV, separację (jeśli występuje).</li>
<li>Rezystancja izolacji podłóg i ścian (jeśli dotyczy).</li>
<li><b>Samoczynne wyłączenie zasilania</b>: impedancja pętli zwarcia, rezystancja uziemienia, badanie RCD.</li>
<li>Kolejność faz, próby działania (funkcjonalne), spadek napięcia.</li>
</ol>
<h4>Rezystancja izolacji</h4>
<div class="tw"><table><tr><th>Napięcie znamionowe obwodu</th><th>Napięcie probiercze DC</th><th>Minimalna rezystancja</th></tr>
<tr><td>SELV, PELV</td><td>250 V</td><td>0,5 MΩ</td></tr>
<tr><td>do 500 V (w tym 230/400 V)</td><td>500 V</td><td>1,0 MΩ</td></tr>
<tr><td>powyżej 500 V</td><td>1000 V</td><td>1,0 MΩ</td></tr></table></div>
<p>Przed pomiarem: wyłącz zasilanie, odłącz odbiorniki i urządzenia wrażliwe (ograniczniki przepięć, elektronika, ściemniacze, RCD w niektórych miernikach), mierz między przewodami czynnymi i między każdym czynnym a PE. Po pomiarze rozładuj pojemność przewodu.</p>
<h4>Impedancja pętli zwarcia</h4>
<p>Mierzy się w najdalszym punkcie obwodu (gniazdo) między L a PE. Wynik porównuje się z dopuszczalnym Zs = U0 / Ia. Przykład: zmierzone 1,2 Ω, obwód B16 (Zs max 2,875 Ω): ochrona skuteczna. W praktyce stosuje się często współczynnik bezpieczeństwa (np. 2/3 wartości dopuszczalnej), bo w czasie zwarcia przewody się nagrzewają.</p>
<h4>Rezystancja uziemienia</h4>
<p>Metoda <b>techniczna</b> (trzy- lub czteroprzewodowa) z sondami pomocniczymi: sonda prądowa ok. 40 m, napięciowa ok. 20 m od uziomu, w linii. Przed pomiarem rozłącza się zacisk kontrolny. Metoda cęgowa (dwucęgowa) dla uziemień wielokrotnych bez rozłączania.</p>
<h4>Protokół</h4>
<p>Zawiera: dane obiektu i zleceniodawcy, datę, warunki (temperatura, wilgotność), układ sieci, przyrządy (typ, numer, data wzorcowania), wyniki w tabeli dla każdego obwodu, wartości wymagane, ocenę („pozytywna”), dane i podpis osoby z uprawnieniami (świadectwo kwalifikacyjne <b>E</b> z zakresem pomiarów).</p>
<div class="tip">Kolejność ma znaczenie: najpierw ciągłość PE, potem izolacja, a dopiero na końcu pomiary pod napięciem. Pomiar pętli bez sprawdzonej ciągłości PE może wywołać napięcie na obudowach.</div>` }
      ],
      pytania: [
        Q("W układzie sieci TN-C-S przewód PEN", "rozdziela się na N i PE w złączu", "występuje w całej instalacji odbiorczej", "jest celowo izolowany od ziemi", "zastępuje przewód fazowy L1", "Rozdzielenie następuje w złączu lub rozdzielnicy głównej. Po rozdzieleniu N i PE nie wolno ponownie łączyć."),
        Q("Maksymalny czas samoczynnego wyłączenia w układzie TN 230 V dla obwodu gniazd 16 A wynosi", "0,4 s", "5 s", "0,2 s", "1 s", "5 s dotyczy obwodów rozdzielczych i powyżej 32 A."),
        Q("Urządzenie z izolacją podwójną, oznaczone symbolem podwójnego kwadratu, ma klasę ochronności", "II", "0", "I", "III", "Nie ma zacisku ochronnego PE."),
        Q("Wyłącznik różnicowoprądowy typu A wykrywa prądy różnicowe", "przemienne i pulsujące jednokierunkowe", "wyłącznie przemienne sinusoidalne", "wyłącznie stałe gładkie i wygładzone", "tylko zwarciowe między L a N", "Prądy stałe gładkie wykrywa typ B."),
        Q("Czas zadziałania wyłącznika różnicowoprądowego ogólnego typu przy prądzie 5 × IΔn nie może przekroczyć", "40 ms", "300 ms", "0,4 s", "5 s", "Przy IΔn dopuszczalne jest 300 ms."),
        Q("Pomiar rezystancji izolacji obwodu 230 V wykonuje się napięciem probierczym", "500 V DC, a wynik musi wynosić co najmniej 1 MΩ", "250 V DC, a wynik co najmniej 0,25 MΩ", "1000 V AC, a wynik co najmniej 10 MΩ", "230 V AC, a wynik co najmniej 0,5 MΩ", "Wg PN-HD 60364-6."),
        Q("Pomiar ciągłości przewodów ochronnych wykonuje się prądem o wartości co najmniej", "200 mA", "10 mA", "30 mA", "10 A", "Napięcie źródła 4-24 V."),
        Q("Pierwszą czynnością w odbiorczym sprawdzeniu instalacji elektrycznej są", "oględziny", "pomiary impedancji pętli zwarcia", "badania wyłączników różnicowoprądowych", "pomiar rezystancji uziemienia", "Oględziny wykonuje się przed włączeniem zasilania.")
      ]
    },
    {
      id: "maszyny", tytul: "Montaż i uruchamianie maszyn", opis: "Podłączysz i uruchomisz silnik indukcyjny w układzie stycznikowym oraz sprawdzisz transformator.",
      lekcje: [
        { tytul: "Silnik indukcyjny: tabliczka i połączenia", tresc: `<h4>Prędkość i poślizg</h4>
<ul>
<li>Prędkość synchroniczna <b>ns = 60 × f / p</b> (p liczba par biegunów). Przy 50 Hz: p = 1: 3000, p = 2: 1500, p = 3: 1000, p = 4: 750 obr/min.</li>
<li>Poślizg <b>s = (ns - n) / ns</b>. Silnik 1440 obr/min (ns = 1500): s = 60 / 1500 = 4%. Typowo 2-6% przy obciążeniu znamionowym.</li>
<li>Prędkość na tabliczce jest zawsze nieco mniejsza od synchronicznej: z niej odczytasz liczbę biegunów (1450 obr/min to silnik 4-biegunowy).</li>
</ul>
<h4>Tabliczka znamionowa</h4>
<pre>3~ Mot.  Typ Sg 112M-4
5,5 kW  Δ/Y 400/690 V  11,0/6,4 A
cos φ 0,84   1450 1/min   50 Hz
IP55   Iz.Kl. F   S1</pre>
<ul>
<li>5,5 kW: moc mechaniczna na wale. Napięcia i prądy dla połączenia w trójkąt (400 V) i gwiazdę (690 V).</li>
<li>IP55: stopień ochrony. Kl. F: klasa izolacji (155°C). <b>S1</b>: praca ciągła.</li>
</ul>
<h4>Gwiazda czy trójkąt</h4>
<p>Uzwojenie musi dostać napięcie, na które jest zaprojektowane. Zasada: napięcie sieci (400 V) porównaj z napięciami na tabliczce.</p>
<div class="tw"><table><tr><th>Tabliczka</th><th>Sieć 3×400 V</th></tr>
<tr><td>Δ/Y 230/400 V</td><td>połączenie w <b>gwiazdę</b> (Y), rozruch Y/Δ niemożliwy</td></tr>
<tr><td>Δ/Y 400/690 V</td><td>połączenie w <b>trójkąt</b> (Δ), możliwy rozruch Y/Δ</td></tr></table></div>
<p>Na tabliczce zaciskowej: U1, V1, W1 (początki) i U2, V2, W2 (końce), ułożone z przesunięciem (W2, U2, V2 pod U1, V1, W1). <b>Gwiazda</b>: zwarte U2-V2-W2 (dwie poziome zworki na dolnym rzędzie), <b>trójkąt</b>: trzy pionowe zworki U1-W2, V1-U2, W1-V2.</p>
<h4>Kierunek obrotów</h4>
<p>Zmianę kierunku uzyskuje się <b>zamianą dwóch dowolnych faz</b> zasilania. Przed sprzęgnięciem z maszyną sprawdź kierunek krótkim załączeniem lub miernikiem kolejności faz.</p>
<h4>Rozruch</h4>
<ul>
<li>Bezpośredni: prąd rozruchowy ok. <b>5-8 × In</b>.</li>
<li><b>Gwiazda-trójkąt</b>: w gwieździe prąd i moment rozruchowy maleją <b>3 razy</b>. Stosowany przy rozruchu lekkim (wentylator, pompa).</li>
<li>Softstart (łagodny rozruch, sterowanie napięciem tyrystorami) i przemiennik częstotliwości (płynna regulacja prędkości).</li>
</ul>
<div class="tip">Silnik 230/400 V podłączony w trójkąt do sieci 400 V spali się w kilka minut (uzwojenie dostaje √3 razy za wysokie napięcie). Zawsze czytaj tabliczkę przed założeniem zworek.</div>` },
        { tytul: "Układy sterowania stycznikowego", tresc: `<h4>Oznaczenia zacisków</h4>
<div class="tw"><table><tr><th>Element</th><th>Zaciski</th></tr>
<tr><td>cewka stycznika</td><td>A1, A2</td></tr>
<tr><td>tory główne</td><td>1-2, 3-4, 5-6 (L1-T1, L2-T2, L3-T3)</td></tr>
<tr><td>styk pomocniczy zwierny (NO)</td><td>13-14, 43-44 (druga cyfra 3-4)</td></tr>
<tr><td>styk pomocniczy rozwierny (NC)</td><td>21-22, 31-32 (druga cyfra 1-2)</td></tr>
<tr><td>przekaźnik termiczny</td><td>95-96 (NC, w obwód sterowania), 97-98 (NO, sygnalizacja)</td></tr></table></div>
<h4>Układ z samopodtrzymaniem</h4>
<pre>L ─ F (zab. sterowania) ─ 95-96 (termik) ─ S0 STOP (NC) ─┬─ S1 START (NO) ─┬─ A1 K1 A2 ─ N
                                                       └─ K1 13-14 ───────┘</pre>
<ul>
<li>Naciśnięcie START zasila cewkę, stycznik zamyka styk 13-14 równolegle do przycisku START, dzięki czemu po puszczeniu przycisku cewka nadal jest zasilona (<b>samopodtrzymanie</b>).</li>
<li>STOP (NC) i styk termika (95-96) są <b>szeregowo</b>, więc każde z nich przerywa obwód.</li>
<li>Zanik napięcia powoduje odpadnięcie stycznika; po powrocie napięcia silnik nie ruszy sam (ochrona przed samorozruchem).</li>
</ul>
<h4>Nawrót (zmiana kierunku)</h4>
<p>Dwa styczniki K1 (prawo) i K2 (lewo), K2 zamienia dwie fazy. Obowiązkowa <b>blokada wzajemna</b>: styk NC K1 w obwodzie cewki K2 i NC K2 w obwodzie K1 (często dodatkowo blokada mechaniczna). Bez niej równoczesne załączenie to zwarcie międzyfazowe.</p>
<h4>Rozruch gwiazda-trójkąt</h4>
<p>Trzy styczniki: sieciowy K1, gwiazdy KY i trójkąta KΔ, przekaźnik czasowy (zwykle 5-10 s). KY i KΔ blokowane wzajemnie. Przekaźnik termiczny w obwodzie uzwojeń nastawia się na <b>In / √3</b> (ok. 0,58 In), jeśli jest w gałęzi fazowej za stycznikiem sieciowym.</p>
<h4>Nastawa zabezpieczenia silnika</h4>
<ul>
<li>Przekaźnik termiczny (lub wyłącznik silnikowy) nastawia się na prąd znamionowy silnika z tabliczki (np. 11 A).</li>
<li>Zabezpieczenie zwarciowe: bezpieczniki aM lub gG o większym prądzie (aby przetrwać rozruch) albo wyłącznik silnikowy z członem zwarciowym.</li>
</ul>
<h4>Oznaczenia na schematach</h4>
<p>Q (łączniki mocy), K (styczniki, przekaźniki), F (zabezpieczenia), S (przyciski), H (lampki sygnalizacyjne), M (silniki), T (transformatory). Przycisk STOP jest czerwony, START zielony lub czarny, zatrzymanie awaryjne czerwone grzybkowe na żółtym tle.</p>
<div class="tip">Na egzaminie praktycznym najczęściej trzeba zmontować i uruchomić układ z samopodtrzymaniem lub nawrotny. Zanim podasz napięcie, sprawdź obwód omomierzem: na A1-A2 po naciśnięciu START powinna być rezystancja cewki.</div>` },
        { tytul: "Transformatory i uruchomienie maszyn", tresc: `<h4>Transformator: zależności</h4>
<ul>
<li>Przekładnia: <b>ϑ = U1 / U2 = N1 / N2 = I2 / I1</b> (w przybliżeniu, dla transformatora idealnego).</li>
<li>Przykład: 230 V / 24 V, moc 100 VA. I2 = 100 / 24 ≈ 4,17 A, I1 = 100 / 230 ≈ 0,43 A.</li>
<li>Uzwojenie o wyższym napięciu ma więcej zwojów i cieńszy drut.</li>
</ul>
<h4>Rodzaje transformatorów w instalacjach</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Zastosowanie</th></tr>
<tr><td>bezpieczeństwa</td><td>zasilanie SELV (np. 12 V, 24 V), uzwojenia oddzielone izolacją wzmocnioną</td></tr>
<tr><td>separacyjny</td><td>separacja elektryczna jednego odbiornika (np. 230/230 V)</td></tr>
<tr><td>sterowniczy</td><td>zasilanie obwodów sterowania (np. 400/230 V lub 230/24 V)</td></tr>
<tr><td>autotransformator</td><td>brak separacji uzwojeń, nie nadaje się do SELV</td></tr></table></div>
<h4>Pomiary przed uruchomieniem silnika</h4>
<ol>
<li>Oględziny: tabliczka, zworki, dokręcenie zacisków, mocowanie, osłony sprzęgła, swoboda obrotu wału ręką.</li>
<li><b>Rezystancja uzwojeń</b> omomierzem (mostkiem): trzy wartości powinny być jednakowe (różnica do ok. 2-5%). Przerwa lub duża różnica oznacza uszkodzenie.</li>
<li><b>Rezystancja izolacji</b> uzwojeń względem obudowy i między uzwojeniami (zworki zdjęte), miernikiem 500 V lub 1000 V. Dla silników niskiego napięcia orientacyjnie co najmniej ok. 1 MΩ, nowe silniki mają zwykle setki MΩ.</li>
<li>Ciągłość przewodu ochronnego do obudowy silnika.</li>
<li>Kolejność faz i kierunek obrotów.</li>
<li>Próbny rozruch bez obciążenia: prąd jałowy (ok. 30-50% In dla małych silników), symetria prądów cęgami, drgania, hałas łożysk, nagrzewanie.</li>
<li>Rozruch pod obciążeniem: prąd nie przekracza znamionowego.</li>
</ol>
<h4>Silniki jednofazowe</h4>
<p>Silnik z kondensatorem pracy (i ewentualnie rozruchowym): uzwojenie główne i pomocnicze przesunięte o 90°, kondensator wytwarza przesunięcie prądów. Zmiana kierunku przez zamianę końców uzwojenia pomocniczego. Silnik trójfazowy w sieci jednofazowej (układ Steinmetza) daje ok. 50-70% mocy.</p>
<h4>Bezpieczeństwo</h4>
<ul>
<li>Przy pracach na maszynie: wyłączenie, zabezpieczenie przed ponownym załączeniem (kłódka na rozłączniku, tabliczka „Nie załączać”), sprawdzenie braku napięcia.</li>
<li>Osłony części wirujących przed próbą rozruchu.</li>
</ul>
<div class="tip">Po pomiarze rezystancji izolacji uzwojeń rozładuj uzwojenia (zewrzyj do obudowy). Uzwojenie silnika działa jak kondensator i może razić.</div>` }
      ],
      pytania: [
        Q("Prędkość synchroniczna silnika czterobiegunowego (p = 2) zasilanego z sieci 50 Hz wynosi", "1500 obr/min", "3000 obr/min", "1000 obr/min", "750 obr/min", "ns = 60 × 50 / 2."),
        Q("Silnik ma prędkość znamionową 960 obr/min przy 50 Hz. Jego poślizg wynosi", "4%", "96%", "40%", "0,4%", "ns = 1000 obr/min, s = 40 / 1000."),
        Q("Silnik z tabliczką Δ/Y 230/400 V należy podłączyć do sieci 3×400 V w układzie", "gwiazdy", "trójkąta", "gwiazda-trójkąt", "zygzak", "Każde uzwojenie jest przewidziane na 230 V."),
        Q("Kierunek obrotów silnika trójfazowego zmienia się przez", "zamianę dwóch faz zasilania", "zamianę przewodu N z PE", "zmianę połączenia z gwiazdy w trójkąt", "zamianę wszystkich trzech faz cyklicznie", "Cykliczna zamiana trzech faz nie zmienia kolejności."),
        Q("Przy rozruchu gwiazda-trójkąt prąd rozruchowy w porównaniu z rozruchem bezpośrednim w trójkącie jest mniejszy", "3 razy", "√3 razy", "2 razy", "9 razy", "Moment rozruchowy też maleje 3 razy."),
        Q("Zaciski cewki stycznika oznacza się", "A1 i A2", "13 i 14", "95 i 96", "L1 i T1", "13-14 to styk pomocniczy NO, 95-96 styk NC przekaźnika termicznego."),
        Q("W układzie samopodtrzymania styk pomocniczy zwierny stycznika łączy się", "równolegle z przyciskiem START", "szeregowo z przyciskiem STOP", "równolegle z przyciskiem STOP", "szeregowo z cewką innego stycznika", "Po puszczeniu START cewka zasilana jest przez ten styk."),
        Q("Transformator 230/12 V zasila odbiornik pobierający 5 A. Prąd w uzwojeniu pierwotnym wynosi w przybliżeniu", "0,26 A", "5 A", "95,8 A", "2,6 A", "I1 = I2 × U2 / U1 = 5 × 12 / 230.")
      ]
    },
    {
      id: "instalacje", tytul: "Montaż instalacji w budynkach", opis: "Zmontujesz obwody oświetleniowe i gniazdowe oraz instalacje w pomieszczeniach specjalnych.",
      lekcje: [
        { tytul: "Łączniki i obwody oświetleniowe", tresc: `<h4>Rodzaje łączników</h4>
<div class="tw"><table><tr><th>Łącznik</th><th>Funkcja</th><th>Przewody do lampy</th></tr>
<tr><td>jednobiegunowy (pojedynczy)</td><td>jedno źródło z jednego miejsca</td><td>faza łączeniowa, N, PE</td></tr>
<tr><td>świecznikowy (podwójny)</td><td>dwie grupy żarówek z jednego miejsca</td><td>dwie fazy łączeniowe, N, PE</td></tr>
<tr><td>schodowy (dwa łączniki)</td><td>jedno źródło z dwóch miejsc</td><td>między łącznikami dwa przewody korespondencyjne</td></tr>
<tr><td>krzyżowy</td><td>trzecie i kolejne miejsce, wstawiany między dwa schodowe</td><td>cztery przewody (dwa wejściowe, dwa wyjściowe)</td></tr>
<tr><td>przekaźnik bistabilny (impulsowy)</td><td>wiele miejsc, przyciski zwierne równolegle</td><td>przewody sterujące do przycisków</td></tr></table></div>
<h4>Zasady łączenia</h4>
<ul>
<li>Łącznik zawsze przerywa <b>przewód fazowy</b> (nigdy N). Przy przerwanym N oprawa po wyłączeniu nadal jest pod napięciem.</li>
<li>W oprawce gwintowej E27 faza do <b>styku środkowego</b>, N do gwintu.</li>
<li>Oprawa klasy I: obowiązkowo podłączony PE do zacisku ochronnego.</li>
</ul>
<h4>Układ schodowy krok po kroku</h4>
<ol>
<li>Faza (L) do zacisku wspólnego (P, często oznaczony L) łącznika S1.</li>
<li>Dwa zaciski przełączne S1 łączą się z dwoma zaciskami przełącznymi S2 (przewody korespondencyjne).</li>
<li>Zacisk wspólny S2 łączy się z lampą (faza łączeniowa).</li>
<li>N i PE bezpośrednio z puszki do lampy.</li>
</ol>
<p>Układ dla trzech miejsc: S1 schodowy, S2 krzyżowy, S3 schodowy. Dla czterech: dwa krzyżowe pośrodku.</p>
<h4>Ściemniacze i źródła LED</h4>
<ul>
<li>Ściemniacz musi być dobrany do obciążenia (R, L, C) i ściemnialności źródeł LED. Nieściemnialne LED na ściemniaczu migoczą lub się uszkadzają.</li>
<li>Minimalne obciążenie ściemniacza: przy małej mocy LED lampa może słabo świecić po wyłączeniu (prąd upływu przez ściemniacz).</li>
<li>Czujnik ruchu, zmierzchowy, automat schodowy (wyłącza po nastawionym czasie): elementy dwuprzewodowe lub trójprzewodowe (z N).</li>
</ul>
<h4>Oznaczenia na schematach ideowych i montażowych</h4>
<p>Na planach instalacji kreski na przewodzie oznaczają liczbę żył (np. trzy kreski: trzy żyły). Symbole: łącznik jednobiegunowy (kółko z jedną kreską), świecznikowy (dwie kreski), schodowy (dwie kreski w przeciwnych kierunkach), gniazdo z PE (półkole z kreską).</p>
<div class="tip">Przy diagnozie: lampa świeci tylko przy jednym ustawieniu łączników schodowych? Najczęściej zamieniono przewód wspólny z korespondencyjnym w jednym z łączników.</div>` },
        { tytul: "Łazienki i pomieszczenia specjalne", tresc: `<h4>Strefy w łazience (PN-HD 60364-7-701)</h4>
<div class="tw"><table><tr><th>Strefa</th><th>Zasięg</th><th>Wymagany IP (min.)</th><th>Co wolno</th></tr>
<tr><td>0</td><td>wnętrze wanny lub brodzika</td><td>IPX7</td><td>tylko urządzenia SELV do 12 V AC, przeznaczone do tej strefy</td></tr>
<tr><td>1</td><td>nad wanną lub brodzikiem do wysokości 2,25 m</td><td>IPX4 (IPX5 przy strumieniach wody)</td><td>urządzenia stałe przeznaczone do tej strefy (podgrzewacz, wentylator, natrysk elektryczny), SELV do 25 V AC</td></tr>
<tr><td>2</td><td>pas 0,6 m od granicy strefy 1, do wysokości 2,25 m</td><td>IPX4</td><td>oprawy, wentylatory, grzejniki klasy I lub II; gniazdo golarki z transformatorem separacyjnym</td></tr></table></div>
<ul>
<li>Gniazd wtyczkowych 230 V nie instaluje się w strefach 0, 1 i 2 (poza wyjątkami jak gniazdo golarki z transformatorem separacyjnym lub zasilanie SELV).</li>
<li><b>Wszystkie obwody</b> w pomieszczeniu z wanną lub prysznicem chroni się wyłącznikiem różnicowoprądowym o IΔn ≤ 30 mA.</li>
<li>Łączniki i puszki rozgałęźne poza strefami 0 i 1 (łącznik na pociągany sznurek dopuszczalny).</li>
<li><b>Połączenia wyrównawcze miejscowe</b>: łączą części przewodzące obce (metalowe rury wody, kanalizacji, gazu, grzewcze, metalowe wanny) z przewodami PE, przewodem min. 4 mm² Cu (bez osłony mechanicznej) lub 2,5 mm² (z osłoną).</li>
</ul>
<h4>Inne pomieszczenia specjalne</h4>
<ul>
<li><b>Sauny</b>: strefy wg temperatury, przewody o izolacji odpornej na 170°C, urządzenia IPX4 (IPX5 przy czyszczeniu wodą).</li>
<li><b>Place budowy</b>: rozdzielnice budowlane (RB) IP44+, RCD 30 mA dla gniazd do 32 A, przewody oponowe ciężkie (OnPd, H07RN-F).</li>
<li><b>Gospodarstwa rolne</b>: RCD przeciwpożarowy ≤ 300 mA, wyrównanie potencjałów w budynkach inwentarskich (siatka w posadzce).</li>
<li><b>Baseny i fontanny</b>: strefy 0, 1, 2, w strefie 0 i 1 tylko SELV 12 V AC lub 30 V DC.</li>
<li>Pomieszczenia zagrożone wybuchem (strefy Ex): urządzenia w wykonaniu przeciwwybuchowym z oznaczeniem Ex.</li>
</ul>
<h4>Stopnie ochrony IP</h4>
<p>Pierwsza cyfra (0-6) to ochrona przed ciałami stałymi i dotykiem (4: obiekty powyżej 1 mm, 5: pyłoszczelne częściowo, 6: pyłoszczelne). Druga (0-9) to ochrona przed wodą (4: bryzgi z każdej strony, 5: strumień, 7: zanurzenie krótkotrwałe, 8: ciągłe). Litera X zamiast cyfry oznacza „nie badano”.</p>
<div class="tip">Granicę strefy 1 wyznacza pionowa płaszczyzna na krawędzi wanny, a nie odległość od baterii. Strefa 2 to pas 60 cm od tej płaszczyzny.</div>` },
        { tytul: "Technika montażu instalacji", tresc: `<h4>Sposoby układania</h4>
<div class="tw"><table><tr><th>Sposób</th><th>Przewody</th><th>Uwagi</th></tr>
<tr><td>pod tynkiem</td><td>YDYp, YDY</td><td>bezpośrednio na ścianie, mocowane klejem lub uchwytami, w strefach instalacyjnych</td></tr>
<tr><td>w rurkach (peszel, karbowane)</td><td>H07V-U, YDY</td><td>możliwość wymiany przewodów, ściany z płyt g-k, posadzki</td></tr>
<tr><td>natynkowo</td><td>YDY w uchwytach, listwach</td><td>pomieszczenia gospodarcze, garaże</td></tr>
<tr><td>korytka, drabinki kablowe</td><td>YDY, kable YKY, N2XH</td><td>obiekty przemysłowe, piony</td></tr>
<tr><td>w ziemi</td><td>kable YKY, YAKY</td><td>głębokość min. 0,7 m (pod drogą 0,8-1 m), na podsypce z piasku, folia ostrzegawcza ok. 25 cm nad kablem, przepusty pod drogami</td></tr></table></div>
<h4>Strefy instalacyjne (wg DIN 18015-3, stosowane w praktyce)</h4>
<ul>
<li>Przewody prowadzi się <b>tylko pionowo i poziomo</b>, nigdy ukośnie, aby było wiadomo, gdzie ich szukać przy wierceniu.</li>
<li>Poziome: pas ok. 15-45 cm pod sufitem i 15-45 cm nad podłogą (oraz nad blatem kuchennym).</li>
<li>Pionowe: pas ok. 10-30 cm od krawędzi drzwi, okien i narożników.</li>
</ul>
<h4>Puszki i połączenia</h4>
<ul>
<li>Puszki <b>głębokie</b> (np. 60 mm) z miejscem na połączenia, w ścianach g-k puszki z łapkami do płyt.</li>
<li>Połączenia tylko w puszkach i osprzęcie, nigdy w tynku: złączki sprężynowe (np. dźwigienkowe), zaciski śrubowe. Skręcanie przewodów z taśmą izolacyjną jest niedopuszczalne.</li>
<li>Długość żył w puszce ok. 10-15 cm zapasu. Izolację ściąga się na długość zacisku (ok. 8-11 mm, wg oznaczenia na złączce), bez nacinania żyły.</li>
<li>Żył aluminiowych i miedzianych nie łączy się bezpośrednio (korozja elektrochemiczna): złączki Al-Cu z pastą.</li>
</ul>
<h4>Przejścia i ochrona przeciwpożarowa</h4>
<p>Przejścia przewodów przez ściany i stropy oddzielenia pożarowego uszczelnia się masami lub kołnierzami o odporności ogniowej takiej jak przegroda. W drogach ewakuacyjnych stosuje się przewody bezhalogenowe lub w osłonach niepalnych.</p>
<h4>Kolejność prac w nowym budynku</h4>
<ol>
<li>Trasowanie (zaznaczenie puszek, tras, rozdzielnicy) wg projektu.</li>
<li>Wykucie bruzd lub wiercenie otworów na puszki.</li>
<li>Osadzenie puszek, ułożenie przewodów, oznaczenie końców.</li>
<li>Sprawdzenie ciągłości i izolacji przed tynkowaniem.</li>
<li>Tynkowanie (przez inną ekipę), potem biały montaż: łączniki, gniazda, oprawy.</li>
<li>Montaż rozdzielnicy, pomiary odbiorcze, dokumentacja powykonawcza.</li>
</ol>
<h4>Gniazda wtyczkowe</h4>
<p>W gnieździe ze stykiem ochronnym (bolec) przewód PE do bolca, faza do lewego otworu (patrząc od przodu, przy bolcu u góry, wg zasad przyjętych w Polsce). Jeden obwód gniazd ogólnych zwykle obejmuje do ok. 8-10 gniazd w kilku pomieszczeniach. Pralka, zmywarka, piekarnik, bojler: osobne obwody.</p>
<div class="tip">Pomiar rezystancji izolacji przed tynkowaniem to tania kontrola: uszkodzenie przewodu gwoździem lub wiertłem wykryte po tynkowaniu oznacza kucie ściany.</div>` }
      ],
      pytania: [
        Q("Do sterowania jednym źródłem światła z trzech miejsc stosuje się", "dwa łączniki schodowe i jeden krzyżowy", "trzy łączniki schodowe", "trzy łączniki jednobiegunowe", "łącznik świecznikowy i dwa schodowe", "Łącznik krzyżowy wstawia się między dwa schodowe."),
        Q("Łącznik oświetleniowy powinien przerywać przewód", "fazowy", "neutralny", "ochronny", "dowolny", "Przerwanie N pozostawia oprawę pod napięciem."),
        Q("W oprawce gwintowej E27 przewód fazowy należy podłączyć do", "styku środkowego", "gwintu", "zacisku PE", "obudowy oprawy", "Gwint jest łatwo dostępny przy wymianie żarówki."),
        Q("Strefa 1 w łazience obejmuje przestrzeń nad wanną do wysokości", "2,25 m", "1,5 m", "3 m", "0,6 m", "Strefa 2 to pas 0,6 m od granicy strefy 1."),
        Q("Minimalny stopień ochrony urządzeń w strefie 0 łazienki to", "IPX7", "IPX4", "IP20", "IPX1", "Strefa 0 to wnętrze wanny lub brodzika."),
        Q("Wszystkie obwody w łazience z wanną lub prysznicem należy chronić wyłącznikiem różnicowoprądowym o prądzie", "nie większym niż 30 mA", "300 mA", "500 mA", "100 mA typu S", "To ochrona uzupełniająca."),
        Q("Kabel w ziemi poza drogami układa się na głębokości co najmniej", "0,7 m", "0,2 m", "1,5 m", "0,3 m", "Nad kablem kładzie się folię ostrzegawczą."),
        Q("Przewody w instalacji podtynkowej prowadzi się", "pionowo i poziomo w strefach instalacyjnych", "najkrótszą drogą, także ukośnie", "tylko w podłodze", "dowolnie, bez zasad", "Ułatwia to późniejszą lokalizację przewodów.")
      ]
    }
  ]);

  pod("ELE.05", [
    {
      id: "organizacja-prac", tytul: "Organizacja i bezpieczeństwo prac", opis: "Zorganizujesz prace eksploatacyjne zgodnie z uprawnieniami, poleceniem na pracę i zasadami bezpieczeństwa.",
      lekcje: [
        { tytul: "Uprawnienia i dokumentacja eksploatacji", tresc: `<h4>Świadectwa kwalifikacyjne</h4>
<ul>
<li>Prace eksploatacyjne przy urządzeniach elektroenergetycznych wymagają <b>świadectwa kwalifikacyjnego</b> grupy <b>G1</b> (elektroenergetyczne). G2 to urządzenia cieplne, G3 gazowe.</li>
<li>Rodzaje: <b>E</b> (eksploatacja: obsługa, konserwacja, naprawy, montaż, kontrolno-pomiarowe) oraz <b>D</b> (dozór: kierowanie czynnościami osób eksploatujących).</li>
<li>Świadectwo jest ważne <b>5 lat</b>; wydaje je komisja kwalifikacyjna po egzaminie. W świadectwie określony jest zakres urządzeń (np. do 1 kV) i rodzaj prac.</li>
<li>Pomiary odbiorcze i okresowe wykonuje osoba z zakresem <b>prac kontrolno-pomiarowych</b>.</li>
</ul>
<h4>Dokumentacja eksploatacyjna</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Zawartość</th></tr>
<tr><td><b>Instrukcja eksploatacji</b> (sieci, urządzenia)</td><td>charakterystyka, warunki uruchomienia i zatrzymania, czynności w czasie pracy, terminy przeglądów, wymagania BHP i ppoż.</td></tr>
<tr><td><b>Dokumentacja techniczno-ruchowa (DTR)</b></td><td>dane producenta, schematy, smarowanie, części zamienne</td></tr>
<tr><td><b>Dokumentacja powykonawcza</b></td><td>projekt z naniesionymi zmianami, protokoły odbiorów</td></tr>
<tr><td><b>Dziennik operacyjny</b></td><td>przełączenia, awarie, polecenia, przekazania zmian</td></tr>
<tr><td><b>Karta lub książka urządzenia</b></td><td>historia przeglądów, napraw, pomiarów</td></tr>
<tr><td><b>Protokoły pomiarów</b></td><td>wyniki badań okresowych i po naprawach</td></tr></table></div>
<h4>Rodzaje prac eksploatacyjnych</h4>
<ul>
<li><b>Oględziny</b>: bez demontażu, przy pracującym urządzeniu (stan obudów, osłon, oznaczeń, dźwięk, zapach, temperatura).</li>
<li><b>Przegląd</b>: z wyłączeniem, częściowy demontaż, czyszczenie, dokręcanie, pomiary.</li>
<li><b>Konserwacja</b>: czynności utrzymujące sprawność (smarowanie, czyszczenie, wymiana materiałów eksploatacyjnych).</li>
<li><b>Remont</b>: przywrócenie wymaganego stanu technicznego, zwykle z wymianą części (bieżący, średni, kapitalny).</li>
<li><b>Naprawa awaryjna</b>: usunięcie uszkodzenia, które spowodowało wyłączenie.</li>
</ul>
<h4>Przyjęcie urządzenia do eksploatacji</h4>
<p>Po montażu: sprawdzenie zgodności z projektem i dokumentacją, pomiary odbiorcze, próby funkcjonalne, przekazanie dokumentacji i instrukcji, przeszkolenie obsługi, protokół odbioru. Od tej chwili urządzenie objęte jest planem przeglądów.</p>
<div class="tip">Rozróżniaj oględziny (bez wyłączania) i przegląd (z wyłączeniem i pomiarami). Pytania egzaminacyjne często sprawdzają tę różnicę.</div>` },
        { tytul: "Polecenie na pracę i role osób", tresc: `<h4>Kiedy potrzebne polecenie</h4>
<p>Prace w warunkach <b>szczególnego zagrożenia</b> dla zdrowia lub życia wykonuje się na <b>polecenie</b>: pisemne (formularz) lub ustne (zapis w dzienniku). Przykłady: prace przy urządzeniach wyłączonych spod napięcia, ale z możliwością pojawienia się napięcia; prace w pobliżu nieosłoniętych części pod napięciem; prace pod napięciem; prace w zbiornikach, kanałach, na wysokości.</p>
<p>Prace w warunkach szczególnego zagrożenia wykonują <b>co najmniej dwie osoby</b> (z wyjątkami w instrukcji). Bez polecenia, na podstawie instrukcji, wykonuje się prace eksploatacyjne rutynowe (np. obsługa, wymiana bezpieczników w określonych warunkach).</p>
<h4>Role (organizacja pracy)</h4>
<div class="tw"><table><tr><th>Osoba</th><th>Zadania</th></tr>
<tr><td><b>poleceniodawca</b></td><td>wydaje polecenie, określa zakres, środki bezpieczeństwa, skład zespołu (osoba z uprawnieniami D)</td></tr>
<tr><td><b>koordynujący</b></td><td>uzgadnia prace wielu zespołów, wyłączenia</td></tr>
<tr><td><b>dopuszczający</b></td><td>przygotowuje miejsce pracy (wyłączenia, uziemienia, ogrodzenia) i dopuszcza zespół do pracy</td></tr>
<tr><td><b>kierujący zespołem</b></td><td>kieruje pracą, sprawdza przygotowanie miejsca, odpowiada za bezpieczeństwo zespołu</td></tr>
<tr><td><b>nadzorujący</b></td><td>nadzoruje zespół, w którym są osoby bez kwalifikacji (np. ekipa budowlana)</td></tr>
<tr><td><b>członek zespołu</b></td><td>wykonuje prace zgodnie z poleceniem</td></tr></table></div>
<h4>Przebieg</h4>
<ol>
<li>Wydanie polecenia (numer, zakres, miejsce, czas, środki bezpieczeństwa).</li>
<li>Przygotowanie miejsca pracy przez dopuszczającego.</li>
<li><b>Dopuszczenie</b> do pracy: sprawdzenie przygotowania, omówienie zagrożeń, wskazanie granic miejsca pracy i części pod napięciem, potwierdzenie podpisami.</li>
<li>Wykonywanie pracy pod kierunkiem kierującego. Przerwy, zmiany składu zespołu dokumentuje się.</li>
<li><b>Zakończenie</b>: usunięcie ludzi, narzędzi, uziemień zespołowych, zgłoszenie zakończenia, zamknięcie polecenia.</li>
<li>Dopiero po zakończeniu wszystkich prac i likwidacji miejsca pracy można podać napięcie.</li>
</ol>
<h4>Strefy pracy</h4>
<ul>
<li><b>Praca pod napięciem</b>: wejście w strefę pracy pod napięciem (kontakt z częściami czynnymi lub zbliżenie na odległość mniejszą od DL), specjalne szkolenia i sprzęt.</li>
<li><b>Praca w pobliżu napięcia</b>: w strefie pomiędzy DL a DV, osłony, przegrody, nadzór.</li>
<li><b>Praca przy urządzeniu wyłączonym</b>: poza tymi strefami, po wykonaniu zasad bezpieczeństwa.</li>
</ul>
<div class="tip">Dopuszczający i kierujący zespołem razem sprawdzają przygotowanie miejsca pracy. Kierujący nie może przyjąć miejsca, którego przygotowanie budzi wątpliwości.</div>` },
        { tytul: "Pięć zasad bezpieczeństwa i sprzęt ochronny", tresc: `<h4>Przygotowanie miejsca pracy przy urządzeniu wyłączonym</h4>
<ol>
<li><b>Wyłączyć</b> napięcie i uzyskać widoczną przerwę izolacyjną (odłącznik, wyjęte wkładki bezpiecznikowe, rozłącznik).</li>
<li><b>Zabezpieczyć przed ponownym załączeniem</b>: blokada napędu, kłódka, wyjęcie wkładek, tablica „Nie załączać, pracują ludzie”.</li>
<li><b>Sprawdzić brak napięcia</b> na wszystkich biegunach wskaźnikiem napięcia odpowiednim dla danego napięcia; wskaźnik sprawdza się przed i po pomiarze.</li>
<li><b>Uziemić i zewrzeć</b> (w urządzeniach powyżej 1 kV obowiązkowo, w niskim napięciu gdy istnieje ryzyko pojawienia się napięcia, np. linie napowietrzne). Najpierw łączy się uziemiacz z uziomem, potem z przewodami.</li>
<li><b>Osłonić lub wygrodzić</b> sąsiednie części znajdujące się pod napięciem, oznaczyć miejsce pracy.</li>
</ol>
<p>Zdejmowanie uziemiaczy odbywa się w odwrotnej kolejności: najpierw od przewodów, na końcu od uziomu.</p>
<h4>Sprzęt ochronny</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Przykłady</th></tr>
<tr><td>izolacyjny podstawowy</td><td>drążki izolacyjne, kleszcze do bezpieczników, wskaźniki napięcia, narzędzia izolowane 1000 V</td></tr>
<tr><td>izolacyjny dodatkowy</td><td>rękawice dielektryczne, półbuty i kalosze dielektryczne, dywaniki i chodniki izolacyjne</td></tr>
<tr><td>chroniący przed łukiem i urazami</td><td>hełm z osłoną twarzy, okulary, odzież trudnopalna</td></tr>
<tr><td>do zabezpieczenia miejsca pracy</td><td>uziemiacze przenośne, przegrody, tablice ostrzegawcze, taśmy</td></tr></table></div>
<ul>
<li>Sprzęt przed każdym użyciem podlega <b>oględzinom</b> (uszkodzenia, termin badania). Rękawice dielektryczne sprawdza się też na szczelność (zwinięcie od mankietu).</li>
<li>Sprzęt izolacyjny podlega <b>badaniom okresowym</b> w terminach z instrukcji (np. rękawice dielektryczne co 6 miesięcy, wskaźniki napięcia i drążki zwykle co rok). Sprzęt bez aktualnego badania nie może być używany.</li>
</ul>
<h4>Zachowanie po wypadku porażenia</h4>
<ul>
<li>Uwolnij poszkodowanego spod napięcia: wyłącz zasilanie lub odciągnij go przedmiotem nieprzewodzącym, stojąc na izolacji.</li>
<li>Oceń przytomność i oddech, wezwij pomoc (112), w razie braku oddechu RKO (30:2) i AED.</li>
<li>Każdy porażony, nawet bez objawów, powinien być zbadany przez lekarza (zaburzenia rytmu serca mogą wystąpić później).</li>
</ul>
<div class="tip">Brak napięcia sprawdza się zawsze, nawet jeśli wyłączyłeś obwód sam. Wskaźnik sprawdza się na znanym źródle przed i po pomiarze, aby wykluczyć jego uszkodzenie.</div>` }
      ],
      pytania: [
        Q("Świadectwo kwalifikacyjne uprawniające do kierowania czynnościami osób wykonujących prace eksploatacyjne to świadectwo", "D (dozór)", "E (eksploatacja)", "G2", "SEP-C", "Świadectwo E uprawnia do wykonywania prac."),
        Q("Świadectwo kwalifikacyjne grupy G1 jest ważne", "5 lat", "1 rok", "10 lat", "bezterminowo", "Po tym czasie trzeba ponownie zdać egzamin."),
        Q("Prace w warunkach szczególnego zagrożenia wykonuje się", "na polecenie, w zespole min. dwuosobowym", "jednoosobowo, bez wydanego polecenia", "tylko w porze nocnej, przy małym ruchu", "wyłącznie przez samego poleceniodawcę", "Polecenie może być pisemne lub ustne."),
        Q("Osoba przygotowująca miejsce pracy i dopuszczająca zespół do pracy to", "dopuszczający", "poleceniodawca", "nadzorujący", "członek zespołu", "Poleceniodawca wydaje polecenie, a nie przygotowuje miejsca."),
        Q("Po wyłączeniu napięcia i zabezpieczeniu przed ponownym załączeniem należy", "sprawdzić brak napięcia", "od razu rozpocząć pracę", "zdjąć tablice ostrzegawcze", "załączyć urządzenie na próbę", "To trzecia z pięciu zasad bezpieczeństwa."),
        Q("Zakładając uziemiacz przenośny, jego zacisk w pierwszej kolejności łączy się z", "uziomem (przewodem uziemiającym)", "przewodem fazowym", "dowolnym przewodem", "obudową wskaźnika napięcia", "Zdejmuje się go w odwrotnej kolejności."),
        Q("Rękawice dielektryczne należą do sprzętu", "izolacyjnego dodatkowego", "izolacyjnego podstawowego przy każdym napięciu", "do zabezpieczenia miejsca pracy", "pomiarowego", "Do podstawowego należą m.in. drążki i wskaźniki napięcia."),
        Q("Oględziny urządzenia elektrycznego to czynność wykonywana", "bez demontażu, zwykle w czasie pracy", "zawsze po wyłączeniu i demontażu", "wyłącznie przez serwis producenta", "tylko po wystąpieniu awarii", "Przegląd wymaga wyłączenia i pomiarów.")
      ]
    },
    {
      id: "pomiary-okresowe", tytul: "Badania i pomiary eksploatacyjne", opis: "Zaplanujesz i wykonasz pomiary okresowe instalacji i maszyn oraz ocenisz ich wyniki.",
      lekcje: [
        { tytul: "Terminy badań okresowych", tresc: `<h4>Prawo budowlane (art. 62)</h4>
<ul>
<li>Co najmniej <b>raz w roku</b>: kontrola okresowa stanu technicznego elementów budynku narażonych na wpływy atmosferyczne, instalacji gazowych i przewodów kominowych.</li>
<li>Co najmniej <b>raz na 5 lat</b>: kontrola stanu technicznego budynku oraz <b>badanie instalacji elektrycznej i piorunochronnej</b> w zakresie stanu sprawności połączeń, osprzętu, zabezpieczeń i środków ochrony od porażeń, rezystancji izolacji przewodów i uziemień.</li>
<li>Budynki o dużej powierzchni (powierzchnia zabudowy powyżej 2000 m² lub dachu powyżej 1000 m²): kontrola co najmniej <b>dwa razy w roku</b> (do 31 maja i do 30 listopada).</li>
<li>Kontrole wykonują osoby z uprawnieniami budowlanymi; pomiary elektryczne osoby ze świadectwem kwalifikacyjnym z zakresem pomiarów.</li>
</ul>
<h4>Terminy zalecane dla pomiarów ochrony (praktyka i zalecenia SEP)</h4>
<div class="tw"><table><tr><th>Rodzaj pomieszczenia</th><th>Ochrona przeciwporażeniowa</th><th>Rezystancja izolacji</th></tr>
<tr><td>o wyziewach żrących</td><td>co 1 rok</td><td>co 1 rok</td></tr>
<tr><td>zagrożone wybuchem</td><td>co 1 rok</td><td>co 1 rok</td></tr>
<tr><td>bardzo wilgotne (ok. 100%), gorące (powyżej 35°C)</td><td>co 1 rok</td><td>co 1 rok</td></tr>
<tr><td>na otwartym powietrzu, pod zadaszeniem</td><td>co 1 rok</td><td>co 5 lat</td></tr>
<tr><td>zagrożone pożarem</td><td>co 5 lat</td><td>co 1 rok</td></tr>
<tr><td>zapylone, pozostałe (mieszkania, biura)</td><td>co 5 lat</td><td>co 5 lat</td></tr></table></div>
<h4>Inne terminy</h4>
<ul>
<li>Badanie wyłączników różnicowoprądowych: przyciskiem TEST przez użytkownika okresowo, pomiar parametrów przy pomiarach okresowych instalacji.</li>
<li>Urządzenia piorunochronne: wg PN-EN 62305-3, zwykle oględziny co rok i pełne badanie co 2-4 lata, zależnie od poziomu ochrony.</li>
<li>Maszyny i urządzenia: wg DTR i instrukcji eksploatacji, po każdej naprawie i dłuższym postoju.</li>
<li>Elektronarzędzia: oględziny przed użyciem, badania okresowe w zależności od intensywności użytkowania (np. co pół roku na budowie).</li>
</ul>
<h4>Plan badań</h4>
<p>Zakład prowadzi <b>harmonogram</b> (wykaz urządzeń z terminami badań i osobami odpowiedzialnymi). Termin liczy się od daty ostatniego badania. Przekroczenie terminu to nieprawidłowość wykazywana przez PIP i ubezpieczycieli przy szkodach.</p>
<div class="tip">Pamiętaj trzy liczby z Prawa budowlanego: raz w roku (elementy narażone, gaz, kominy), raz na 5 lat (instalacja elektryczna i piorunochronna), dwa razy w roku (budynki wielkopowierzchniowe).</div>` },
        { tytul: "Izolacja maszyn i kabli", tresc: `<h4>Rezystancja izolacji: wpływ warunków</h4>
<ul>
<li>Rezystancja izolacji <b>maleje ze wzrostem temperatury</b> (orientacyjnie spada o połowę co ok. 10°C). Wyniki porównuje się po przeliczeniu do temperatury odniesienia (np. 20°C lub 40°C).</li>
<li>Wilgoć i zabrudzenie obniżają rezystancję; po suszeniu maszyny rezystancja rośnie.</li>
<li>Do porównań ważniejszy jest <b>trend</b> (spadek z roku na rok) niż jedna wartość.</li>
</ul>
<h4>Współczynniki oceny zawilgocenia</h4>
<div class="tw"><table><tr><th>Współczynnik</th><th>Wzór</th><th>Ocena</th></tr>
<tr><td><b>absorpcji</b> (DAR)</td><td>R60 / R15 (po 60 s i 15 s)</td><td>≥ 1,3 izolacja sucha; poniżej ok. 1,3 zawilgocona</td></tr>
<tr><td><b>polaryzacji</b> (PI)</td><td>R600 / R60 (po 10 min i 1 min)</td><td>≥ 2 dobra; 1-2 wątpliwa; poniżej 1 zła</td></tr></table></div>
<p>Przykład: R15 = 200 MΩ, R60 = 300 MΩ: DAR = 1,5, izolacja sucha. Gdy po minucie rezystancja prawie nie rośnie (DAR ok. 1,0), izolacja jest zawilgocona lub zabrudzona: prąd upływu dominuje nad prądem absorpcji.</p>
<h4>Napięcia probiercze i minimalne wartości</h4>
<ul>
<li>Instalacje do 500 V: 500 V DC, min. 1 MΩ (PN-HD 60364-6).</li>
<li>Silniki niskiego napięcia: miernik 500 V lub 1000 V. Często przyjmowane kryterium eksploatacyjne to <b>1 kΩ na 1 V</b> napięcia znamionowego (ok. 0,4 MΩ dla 400 V) dla uzwojeń w temperaturze pracy; dla nowych i po remoncie wymagania są dużo wyższe.</li>
<li>Kable niskiego napięcia: miernik 1000 V lub 2500 V, wynik przeliczany na 1 km długości (rezystancja izolacji kabla maleje z długością).</li>
</ul>
<h4>Procedura pomiaru silnika</h4>
<ol>
<li>Wyłącz, zabezpiecz, sprawdź brak napięcia, odłącz przewody zasilające od tabliczki zaciskowej.</li>
<li>Zdejmij zworki, aby zmierzyć każde uzwojenie osobno względem obudowy i między uzwojeniami.</li>
<li>Zanotuj temperaturę uzwojeń i wilgotność.</li>
<li>Odczytaj R15 i R60 (i ewentualnie R600).</li>
<li>Rozładuj uzwojenia, przywróć połączenia, zapisz w protokole i karcie maszyny.</li>
</ol>
<h4>Termowizja</h4>
<p>Kamera termowizyjna wykrywa przegrzane złącza, zaciski, bezpieczniki, nierówne obciążenie faz, przegrzane łożyska. Pomiar przy obciążeniu (min. ok. 40% znamionowego). Wynik ocenia się przez porównanie z podobnym elementem: różnica kilkunastu i więcej stopni wymaga pilnej interwencji.</p>
<div class="tip">Wynik izolacji silnika mierzonego zaraz po pracy (gorącego) jest niższy niż na zimno. Nie wyciągaj wniosku o uszkodzeniu bez przeliczenia temperatury i porównania z poprzednimi pomiarami.</div>` },
        { tytul: "Uziemienia, piorunochrony i jakość energii", tresc: `<h4>Pomiar rezystancji uziemienia</h4>
<ul>
<li><b>Metoda techniczna</b> (3P lub 4P): prąd przepływa przez uziom badany i sondę prądową; napięcie mierzy się sondą napięciową. Sondy w linii prostej: prądowa w odległości ok. 5 × długość uziomu (np. 40 m), napięciowa w ok. 62% tej odległości (np. 25 m) lub w połowie.</li>
<li>Kontrola: przesunięcie sondy napięciowej o kilka metrów nie powinno zmieniać wyniku o więcej niż kilka procent.</li>
<li><b>Metoda dwucęgowa</b>: dla uziemień wielokrotnych (np. słupy z linką odgromową), bez rozłączania i bez sond.</li>
<li>Rezystywność gruntu zależy od wilgotności i temperatury. Pomiar najlepiej w okresie najmniej korzystnym (sucho latem lub zamarznięty grunt) albo z <b>współczynnikiem poprawkowym</b> (ok. 1,2-2).</li>
</ul>
<h4>Wymagania typowe</h4>
<div class="tw"><table><tr><th>Uziemienie</th><th>Wymaganie</th></tr>
<tr><td>ochronne w układzie TT</td><td>RA × Ia ≤ 50 V (z RCD: RA ≤ 50 V / IΔn)</td></tr>
<tr><td>uziom instalacji piorunochronnej</td><td>zalecane poniżej 10 Ω (PN-EN 62305-3)</td></tr>
<tr><td>uziemienie przewodu PEN u odbiorcy (powtórne)</td><td>wg wymagań operatora sieci</td></tr></table></div>
<h4>Instalacja piorunochronna (LPS)</h4>
<ul>
<li>Zwody (pionowe, poziome, siatki na dachu), przewody odprowadzające (co ok. 10-20 m obwodu, wg klasy LPS), <b>złącza kontrolne</b> na wysokości ok. 0,3-1,8 m nad ziemią, uziomy (fundamentowe, otokowe).</li>
<li>Badanie: oględziny (ciągłość, korozja, mocowania), pomiar ciągłości przewodów, pomiar rezystancji każdego uziomu przy rozłączonym złączu kontrolnym.</li>
<li>Ograniczniki przepięć: typ 1 (prąd piorunowy, przy złączu), typ 2 (rozdzielnice), typ 3 (przy urządzeniach wrażliwych). Kontrola wskaźnika stanu wkładek.</li>
</ul>
<h4>Jakość energii</h4>
<ul>
<li>Odchylenia napięcia: dopuszczalnie <b>±10%</b> napięcia znamionowego (207-253 V) przez 95% czasu w tygodniu.</li>
<li>Częstotliwość: 50 Hz ± 1% przez 99,5% roku (sieć połączona).</li>
<li>Odkształcenie: współczynnik <b>THD</b> napięcia nie więcej niż <b>8%</b>. Źródła: zasilacze impulsowe, falowniki, LED, prostowniki. Skutki: przegrzewanie przewodów N (harmoniczne 3. rzędu sumują się w N), transformatorów, zadziałania zabezpieczeń.</li>
<li>Wahania napięcia powodują migotanie światła (<b>flicker</b>), wskaźniki Pst i Plt.</li>
<li>Pomiary analizatorem jakości energii przez co najmniej tydzień.</li>
</ul>
<div class="tip">Przed pomiarem rezystancji uziomu piorunochronnego rozłącz złącze kontrolne. Inaczej zmierzysz wypadkową rezystancję wszystkich uziomów połączonych instalacją, a nie badanego uziomu.</div>` }
      ],
      pytania: [
        Q("Zgodnie z Prawem budowlanym instalację elektryczną i piorunochronną w budynku bada się co najmniej", "raz na 5 lat", "raz na 10 lat", "raz na 2 lata", "tylko przy odbiorze budynku", "W budynkach wielkopowierzchniowych kontrola odbywa się dwa razy w roku."),
        Q("Budynek o powierzchni zabudowy powyżej 2000 m² podlega kontroli stanu technicznego", "dwa razy w roku", "raz na 5 lat", "raz na 3 lata", "raz w miesiącu", "Terminy: do 31 maja i do 30 listopada."),
        Q("Współczynnik absorpcji izolacji oblicza się jako stosunek rezystancji zmierzonych po", "60 s i 15 s", "10 min i 1 min", "1 s i 60 s", "15 s i 5 s", "R600/R60 to współczynnik polaryzacji."),
        Q("Wartość współczynnika absorpcji R60/R15 = 1,0 świadczy o", "zawilgoceniu lub zabrudzeniu izolacji", "bardzo dobrym stanie izolacji", "przerwie w uzwojeniu", "zwarciu międzyzwojowym", "Sucha izolacja ma DAR co najmniej ok. 1,3."),
        Q("Ze wzrostem temperatury rezystancja izolacji uzwojeń", "maleje", "rośnie", "nie zmienia się", "rośnie liniowo dwukrotnie co 1°C", "Dlatego wyniki przelicza się do temperatury odniesienia."),
        Q("Przed pomiarem rezystancji uziomu instalacji piorunochronnej należy", "rozłączyć złącze kontrolne", "zewrzeć wszystkie uziomy", "podłączyć zasilanie 230 V", "polać grunt wodą", "Pozwala to zmierzyć rezystancję pojedynczego uziomu."),
        Q("Dopuszczalne odchylenie napięcia w sieci niskiego napięcia od wartości znamionowej wynosi", "±10%", "±1%", "±25%", "±50%", "Dla 230 V: 207-253 V."),
        Q("Harmoniczne trzeciego rzędu w sieci trójfazowej z odbiornikami nieliniowymi powodują przede wszystkim", "przeciążenie przewodu neutralnego", "spadek częstotliwości sieci", "zwiększenie rezystancji uziemienia", "zmianę kolejności faz", "Harmoniczne 3. rzędu z trzech faz sumują się w przewodzie N.")
      ]
    },
    {
      id: "maszyny", tytul: "Eksploatacja maszyn elektrycznych", opis: "Ocenisz stan maszyn na podstawie temperatury, drgań i pomiarów oraz zlokalizujesz typowe uszkodzenia.",
      lekcje: [
        { tytul: "Parametry eksploatacyjne silników", tresc: `<h4>Klasy izolacji (ciepłoodporności)</h4>
<div class="tw"><table><tr><th>Klasa</th><th>Dopuszczalna temperatura</th></tr>
<tr><td>A</td><td>105°C</td></tr><tr><td>E</td><td>120°C</td></tr><tr><td>B</td><td>130°C</td></tr>
<tr><td>F</td><td>155°C</td></tr><tr><td>H</td><td>180°C</td></tr></table></div>
<p>Przekroczenie temperatury o ok. <b>10 K</b> skraca trwałość izolacji mniej więcej <b>o połowę</b> (reguła Montsingera). Silniki z izolacją F często pracują z przyrostem temperatury klasy B, co daje zapas trwałości.</p>
<h4>Rodzaje pracy (S)</h4>
<ul>
<li><b>S1</b>: praca ciągła ze stałym obciążeniem (pompy, wentylatory).</li>
<li><b>S2</b>: praca dorywcza (np. S2 30 min), potem postój do ostygnięcia.</li>
<li><b>S3</b>: praca przerywana okresowa, określona względnym czasem pracy, np. S3 40% (dźwignice).</li>
<li>S4-S10: praca z rozruchami, hamowaniem, zmienną prędkością.</li>
</ul>
<p>Silnik S2 lub S3 obciążony w pracy ciągłej przegrzeje się, nawet jeśli prąd nie przekracza znamionowego dla jego rodzaju pracy.</p>
<h4>Oznaczenia IP, IC, IM</h4>
<ul>
<li><b>IP55</b>: pyłoszczelność częściowa, odporność na strumień wody.</li>
<li><b>IC411</b>: chłodzenie powierzchniowe własnym wentylatorem na wale (zamknięty, użebrowany). Przy pracy z falownikiem na niskich obrotach wentylator słabo chłodzi: potrzebny wentylator obcy (IC416).</li>
<li><b>IM B3</b>: mocowanie na łapach, <b>IM B5</b>: kołnierzowe, <b>IM B35</b>: łapy i kołnierz.</li>
</ul>
<h4>Asymetria i zasilanie</h4>
<ul>
<li>Asymetria napięć zasilania 1% może spowodować asymetrię prądów rzędu kilku do kilkunastu procent i dodatkowe nagrzewanie.</li>
<li><b>Zanik jednej fazy</b> (praca dwufazowa): silnik obciążony pracuje dalej z dużo większym prądem w pozostałych fazach, buczy, grzeje się; nieruchomy silnik nie ruszy. Ochrona: przekaźnik termiczny z czułością na zanik fazy, przekaźnik kontroli faz.</li>
<li>Napięcie obniżone o 10% zmniejsza moment o ok. <b>19%</b> (moment proporcjonalny do kwadratu napięcia: 0,9² = 0,81), prąd przy tym samym obciążeniu rośnie.</li>
</ul>
<h4>Bilans mocy</h4>
<p>Moc pobrana P1 = √3 × U × I × cos φ, moc oddana P2 (na wale), sprawność η = P2 / P1. Straty: w uzwojeniach (I²R), w żelazie, mechaniczne (łożyska, wentylator), dodatkowe. Silniki klasy sprawności IE3 lub IE4 wymagane są dla większości nowych silników w UE.</p>
<div class="tip">Zapamiętaj klasy izolacji z temperaturami: A 105, E 120, B 130, F 155, H 180. Pytania o nie pojawiają się w ELE.05 regularnie.</div>` },
        { tytul: "Diagnostyka drgań, łożysk i temperatury", tresc: `<h4>Drgania</h4>
<ul>
<li>Mierzy się <b>prędkość drgań</b> (RMS w mm/s) na obudowach łożysk w trzech kierunkach: poziomym, pionowym, osiowym.</li>
<li>Ocena wg PN-ISO 10816 (ISO 20816): strefy A (nowe maszyny), B (praca długotrwała), C (praca ograniczona czasowo), D (drgania mogą uszkodzić maszynę).</li>
<li>Dla małych maszyn (do 15 kW) granica B/C wynosi ok. 1,8 mm/s, C/D ok. 4,5 mm/s (wartości orientacyjne dla danej klasy maszyn).</li>
</ul>
<div class="tw"><table><tr><th>Częstotliwość dominująca</th><th>Prawdopodobna przyczyna</th></tr>
<tr><td>1 × prędkość obrotowa, kierunek promieniowy</td><td>niewyważenie wirnika</td></tr>
<tr><td>1 × i 2 × obroty, duże osiowo</td><td>niewspółosiowość sprzęgła</td></tr>
<tr><td>wiele harmonicznych obrotów</td><td>luzy mechaniczne, poluzowane mocowanie</td></tr>
<tr><td>wysokie częstotliwości, szum, stuki</td><td>uszkodzone łożysko toczne</td></tr>
<tr><td>2 × częstotliwość sieci (100 Hz)</td><td>przyczyny elektryczne: nierówna szczelina, zwarcie w uzwojeniu stojana</td></tr></table></div>
<h4>Łożyska</h4>
<ul>
<li>Objawy: wzrost temperatury łożyska, hałas, drgania wysokoczęstotliwościowe, ślady smaru wyciekającego.</li>
<li>Smarowanie: smar zgodny z DTR, ilość wg zaleceń. <b>Nadmiar smaru</b> powoduje przegrzewanie (mieszanie smaru) tak samo jak jego brak.</li>
<li>Przy zasilaniu z falownika mogą płynąć <b>prądy łożyskowe</b> (wyładowania przez film smarny, karbowanie bieżni). Ochrona: łożysko izolowane, szczotka uziemiająca wał, filtry du/dt.</li>
<li>Wymiana: ściągaczem, nowe łożysko nagrzewa się nagrzewnicą indukcyjną (ok. 80-110°C) i nasuwa, nie wbija młotkiem przez bieżnię.</li>
</ul>
<h4>Temperatura</h4>
<ul>
<li>Pomiar temperatury uzwojeń <b>metodą rezystancyjną</b>: R2 = R1 × (235 + t2) / (235 + t1) dla miedzi, stąd przyrost temperatury z wzrostu rezystancji.</li>
<li>Przykład: na zimno 2,00 Ω przy 20°C, po pracy 2,40 Ω. t2 = (2,40 / 2,00) × (235 + 20) - 235 = 306 - 235 = <b>71°C</b>.</li>
<li>Czujniki wbudowane: termistory <b>PTC</b> w uzwojeniu (przekaźnik termistorowy wyłącza przy temperaturze progowej), czujniki Pt100 w dużych maszynach (pomiar ciągły).</li>
</ul>
<h4>Osiowanie</h4>
<p>Niewspółosiowość wałów silnika i maszyny roboczej to częsta przyczyna awarii łożysk i sprzęgieł. Osiowanie wykonuje się czujnikami zegarowymi lub laserowo, korygując położenie podkładkami pod łapami silnika. Sprawdza się też „miękką łapę” (nierówne oparcie łap).</p>
<div class="tip">Termistor PTC w silniku nie zastępuje zabezpieczenia zwarciowego. Chroni uzwojenie przed przegrzaniem także wtedy, gdy przyczyną nie jest prąd (np. zapchany wentylator, wysoka temperatura otoczenia).</div>` },
        { tytul: "Lokalizacja uszkodzeń uzwojeń", tresc: `<h4>Typowe uszkodzenia silnika indukcyjnego</h4>
<div class="tw"><table><tr><th>Uszkodzenie</th><th>Objawy</th><th>Pomiar</th></tr>
<tr><td>przerwa w uzwojeniu fazy</td><td>buczenie, brak rozruchu (praca dwufazowa)</td><td>rezystancja jednej fazy nieskończona</td></tr>
<tr><td>zwarcie międzyzwojowe</td><td>wzrost prądu w jednej fazie, lokalne przegrzanie, zapach izolacji</td><td>rezystancja fazy mniejsza od pozostałych, asymetria prądów; tester udarowy</td></tr>
<tr><td>zwarcie międzyfazowe</td><td>zadziałanie zabezpieczeń</td><td>rezystancja izolacji między fazami bliska zeru</td></tr>
<tr><td>zwarcie z obudową (doziemienie)</td><td>zadziałanie RCD lub zabezpieczenia, napięcie na obudowie</td><td>niska rezystancja izolacji fazy względem obudowy</td></tr>
<tr><td>pęknięte pręty klatki wirnika</td><td>spadek momentu, pulsowanie prądu (z częstotliwością poślizgu), dłuższy rozruch</td><td>analiza widma prądu, próba z obniżonym napięciem</td></tr>
<tr><td>uszkodzone łożyska</td><td>hałas, drgania, przegrzanie</td><td>drgania, temperatura</td></tr></table></div>
<h4>Ocena rezystancji uzwojeń</h4>
<p>Pomiar mostkiem technicznym lub mikroomomierzem (metoda techniczna dla małych rezystancji). Wyniki trzech faz porównuje się między sobą: różnica powyżej ok. <b>2-5%</b> wymaga wyjaśnienia (zwarcie zwojowe, złe połączenie).</p>
<p>Przykład: U 1,52 Ω, V 1,51 Ω, W 1,32 Ω. Faza W ma o ok. 13% mniejszą rezystancję: podejrzenie zwarcia międzyzwojowego.</p>
<h4>Maszyny prądu stałego</h4>
<ul>
<li>Komutator: iskrzenie szczotek (zużyte szczotki, zła strefa neutralna, owalny komutator, zły nacisk sprężyn).</li>
<li>Szczotki wymienia się na ten sam gatunek, dociera papierem ściernym założonym na komutator (nie płótnem szmerglowym przewodzącym).</li>
<li>Silnik szeregowy bez obciążenia „rozbiega się”: nie wolno go uruchamiać bez obciążenia (np. z przekładnią pasową, która może spaść).</li>
</ul>
<h4>Postępowanie przy awarii</h4>
<ol>
<li>Zabezpiecz miejsce, ustal okoliczności (co działało, kiedy, które zabezpieczenie zadziałało).</li>
<li>Oględziny: zapach, ślady przegrzania, uszkodzenia mechaniczne.</li>
<li>Pomiary izolacji, rezystancji uzwojeń, sprawdzenie zabezpieczeń i zasilania (czy były trzy fazy, właściwe napięcie).</li>
<li>Usuń przyczynę (np. przeciążenie maszyny roboczej, zablokowane łożysko), nie tylko skutek.</li>
<li>Naprawa lub przezwojenie w specjalistycznym zakładzie, po naprawie pomiary i próba, wpis w karcie maszyny.</li>
</ol>
<div class="tip">Przy ponownym zadziałaniu zabezpieczenia nie załączaj silnika „na próbę” kilka razy. Każdy rozruch z uszkodzeniem uzwojenia pogłębia szkody i grozi pożarem.</div>` }
      ],
      pytania: [
        Q("Dopuszczalna temperatura dla izolacji klasy F wynosi", "155°C", "105°C", "130°C", "180°C", "A 105, E 120, B 130, F 155, H 180."),
        Q("Wzrost temperatury pracy izolacji o ok. 10 K powoduje skrócenie jej trwałości mniej więcej", "o połowę", "o 10%", "dziesięciokrotnie", "nie wpływa na trwałość", "Reguła Montsingera."),
        Q("Oznaczenie S1 na tabliczce silnika oznacza", "pracę ciągłą przy stałym obciążeniu", "pracę dorywczą o ograniczonym czasie", "pracę przerywaną okresową 40%", "stopień ochrony obudowy silnika", "S2 to praca dorywcza, S3 przerywana okresowa."),
        Q("Napięcie zasilania silnika indukcyjnego obniżyło się o 10%. Moment silnika zmaleje w przybliżeniu o", "19%", "10%", "5%", "50%", "Moment jest proporcjonalny do kwadratu napięcia: 0,9² = 0,81."),
        Q("Dominujące drgania o częstotliwości równej prędkości obrotowej w kierunku promieniowym wskazują na", "niewyważenie wirnika", "zwarcie w uzwojeniu stojana", "zawilgocenie izolacji", "zbyt duży poślizg", "Niewspółosiowość daje duże drgania osiowe 1x i 2x."),
        Q("Rezystancja uzwojenia miedzianego wynosiła 4,00 Ω przy 20°C, po pracy 4,80 Ω. Temperatura uzwojenia wynosi w przybliżeniu", "71°C", "24°C", "96°C", "51°C", "t2 = 1,2 × 255 - 235 = 71°C."),
        Q("Rezystancje uzwojeń faz silnika wynoszą 2,10 Ω, 2,11 Ω i 1,80 Ω. Najbardziej prawdopodobne jest", "zwarcie międzyzwojowe w fazie 3", "przerwa w uzwojeniu fazy 3", "prawidłowy stan wszystkich uzwojeń", "uszkodzenie łożysk silnika", "Przerwa dałaby rezystancję nieskończoną."),
        Q("Nadmierna ilość smaru w łożysku tocznym silnika powoduje", "przegrzewanie łożyska", "spadek rezystancji izolacji uzwojeń", "zmniejszenie poślizgu", "wzrost napięcia zasilania", "Smar jest mieszany przez elementy toczne i nagrzewa się.")
      ]
    },
    {
      id: "transformatory", tytul: "Eksploatacja transformatorów i stacji", opis: "Obsłużysz transformator i stację SN/nn, ocenisz wyniki prób oraz warunki pracy równoległej.",
      lekcje: [
        { tytul: "Parametry i próby transformatora", tresc: `<h4>Dane znamionowe</h4>
<pre>Transformator olejowy 3-fazowy
Sn = 630 kVA   15 000 / 420 V   Dyn11
uk = 6%   ΔP0 = 0,6 kW   ΔPk = 6,5 kW
regulacja ±2 × 2,5%   ONAN</pre>
<ul>
<li><b>Sn</b>: moc pozorna znamionowa. Prąd znamionowy strony nn: I = Sn / (√3 × U) = 630 000 / (1,732 × 400) ≈ <b>909 A</b> (przy 420 V ok. 866 A).</li>
<li><b>Dyn11</b>: górne napięcie w trójkąt (D), dolne w gwiazdę z wyprowadzonym punktem neutralnym (yn), przesunięcie 11 × 30° = 330°. Yzn5 i Yyn0 stosowane w mniejszych transformatorach.</li>
<li><b>ONAN</b>: chłodzenie olejem naturalnym obiegiem i powietrzem naturalnym.</li>
<li><b>Regulacja ±2 × 2,5%</b>: przełącznik zaczepów (w stanie beznapięciowym) zmienia przekładnię w krokach 2,5%.</li>
</ul>
<h4>Próba stanu jałowego</h4>
<p>Uzwojenie dolne zasila się napięciem znamionowym, górne otwarte. Mierzy się <b>prąd jałowy</b> (ok. 0,5-3% In) i <b>straty jałowe ΔP0</b>, czyli straty w żelazie (praktycznie niezależne od obciążenia). Wzrost strat jałowych: uszkodzenie izolacji blach rdzenia, zwarcie zwojowe.</p>
<h4>Próba zwarcia</h4>
<p>Jedno uzwojenie zwarte, drugie zasila się napięciem obniżonym tak, aby płynął prąd znamionowy. To napięcie wyrażone w procentach to <b>napięcie zwarcia uk</b> (typowo 4-6% dla transformatorów rozdzielczych). Mierzone straty to <b>straty obciążeniowe ΔPk</b> (w miedzi), zależne od kwadratu obciążenia.</p>
<h4>Prąd zwarciowy</h4>
<p>Przy zwarciu na zaciskach nn (pomijając sieć zasilającą): Ik ≈ In / uk. Dla 909 A i uk = 6%: Ik ≈ 909 / 0,06 ≈ <b>15 kA</b>. Aparaty w rozdzielnicy nn muszą mieć wystarczającą zdolność zwarciową.</p>
<h4>Straty i sprawność</h4>
<p>Straty przy obciążeniu względnym β = S / Sn: ΔP = ΔP0 + β² × ΔPk. Przykład: β = 0,5: ΔP = 0,6 + 0,25 × 6,5 = 2,23 kW. Sprawność maksymalna występuje, gdy straty obciążeniowe równają się jałowym: β = √(ΔP0 / ΔPk) = √(0,6 / 6,5) ≈ 0,3.</p>
<h4>Inne pomiary eksploatacyjne</h4>
<ul>
<li>Rezystancja izolacji uzwojeń (2500 V lub 5000 V) z R60/R15.</li>
<li>Przekładnia na wszystkich zaczepach (różnica od wartości z tabliczki do ok. 0,5%).</li>
<li>Rezystancja uzwojeń prądem stałym na każdym zaczepie.</li>
</ul>
<div class="tip">Przełącznik zaczepów w transformatorach rozdzielczych przestawia się tylko po wyłączeniu transformatora spod napięcia z obu stron. Podniesienie zaczepu na stronie SN obniża napięcie po stronie nn.</div>` },
        { tytul: "Olej, zabezpieczenia i oględziny", tresc: `<h4>Olej transformatorowy</h4>
<ul>
<li>Pełni funkcję izolacyjną i chłodzącą. Wilgoć i zanieczyszczenia obniżają <b>wytrzymałość elektryczną</b> (napięcie przebicia w kV na 2,5 mm).</li>
<li>Badania: napięcie przebicia, zawartość wody (ppm), liczba kwasowa, współczynnik strat dielektrycznych tg δ, <b>analiza gazów rozpuszczonych (DGA)</b>.</li>
<li>DGA wskazuje rodzaj defektu: wodór (wyładowania niezupełne), acetylen (łuk), etylen (przegrzanie oleju), CO i CO₂ (przegrzanie izolacji papierowej).</li>
<li>Konserwator (zbiornik wyrównawczy) z odwilżaczem: <b>sylikażel</b> zmienia kolor po nasyceniu wilgocią (np. z pomarańczowego na zielony lub z niebieskiego na różowy) i wymaga wymiany.</li>
</ul>
<h4>Zabezpieczenia transformatora</h4>
<div class="tw"><table><tr><th>Zabezpieczenie</th><th>Reaguje na</th></tr>
<tr><td><b>przekaźnik gazowo-przepływowy (Buchholza)</b></td><td>gazy z rozkładu oleju (sygnalizacja) i gwałtowny przepływ oleju przy zwarciu wewnętrznym (wyłączenie)</td></tr>
<tr><td>termometr, czujnik temperatury oleju i uzwojeń</td><td>przegrzanie (sygnał, potem wyłączenie)</td></tr>
<tr><td>bezpieczniki SN lub zabezpieczenie nadprądowe</td><td>zwarcia, przeciążenia</td></tr>
<tr><td>zabezpieczenie różnicowe (duże jednostki)</td><td>zwarcia wewnętrzne</td></tr>
<tr><td>ograniczniki przepięć SN</td><td>przepięcia atmosferyczne i łączeniowe</td></tr></table></div>
<p>W transformatorach hermetycznych (bez konserwatora) stosuje się zabezpieczenie <b>DGPT2</b> (gaz, ciśnienie, temperatura, poziom oleju).</p>
<h4>Oględziny stacji transformatorowej</h4>
<ul>
<li>Stan obudowy, drzwi, zamknięć, tablic ostrzegawczych i schematu.</li>
<li>Poziom oleju na wskaźniku, wycieki, kolor sylikażelu.</li>
<li>Temperatura oleju (wskazanie termometru, w tym wskazówka maksymalna), hałas (nietypowe brzęczenie, trzaski: wyładowania).</li>
<li>Stan izolatorów (pęknięcia, zabrudzenia, ślady przeskoków), połączeń szynowych (przebarwienia, termowizja).</li>
<li>Wskazania mierników prądu i napięcia, stan baterii i oświetlenia, wentylacji, sprzętu ochronnego i gaśnic w stacji.</li>
<li>Wynik zapisuje się w dzienniku lub karcie oględzin.</li>
</ul>
<h4>Przeciążalność</h4>
<p>Transformator olejowy może być krótkotrwale przeciążony (np. 1,3 × Sn przez określony czas zależny od wcześniejszego obciążenia i temperatury otoczenia, wg norm i instrukcji producenta). Długotrwałe przeciążenie przyspiesza starzenie izolacji papierowej.</p>
<div class="tip">Zadziałanie członu wyłączającego przekaźnika Buchholza oznacza poważne uszkodzenie wewnętrzne. Transformatora nie wolno ponownie załączyć przed zbadaniem gazu i wykonaniem pomiarów.</div>` },
        { tytul: "Praca równoległa i przełączenia", tresc: `<h4>Warunki pracy równoległej transformatorów</h4>
<ol>
<li>Jednakowe <b>napięcia znamionowe i przekładnie</b> (różnica przekładni do ok. 0,5%). Inaczej płynie prąd wyrównawczy nawet bez obciążenia.</li>
<li>Jednakowe <b>grupy połączeń</b> (np. obie Dyn11). Różne grupy oznaczają przesunięte fazy napięć wtórnych, czyli zwarcie.</li>
<li>Zbliżone <b>napięcia zwarcia</b> uk (różnica do ok. 10%). Transformator o mniejszym uk przejmuje większą część obciążenia.</li>
<li>Stosunek mocy znamionowych nie większy niż ok. <b>3 : 1</b>.</li>
<li>Zgodna kolejność faz.</li>
</ol>
<h4>Podział obciążenia</h4>
<p>Przy jednakowych uk obciążenie dzieli się proporcjonalnie do mocy znamionowych. Przykład: 400 kVA i 630 kVA o tym samym uk, obciążenie 800 kVA: pierwszy 800 × 400 / 1030 ≈ 311 kVA, drugi ≈ 489 kVA.</p>
<p>Przy różnych uk transformator o niższym uk szybciej osiąga moc znamionową, a całkowita moc możliwa do wykorzystania jest mniejsza od sumy mocy.</p>
<h4>Łączniki w stacji SN</h4>
<div class="tw"><table><tr><th>Łącznik</th><th>Może łączyć</th></tr>
<tr><td><b>odłącznik</b></td><td>tylko w stanie bezprądowym (lub prądy pomijalne), daje widoczną przerwę izolacyjną</td></tr>
<tr><td><b>rozłącznik</b></td><td>prądy robocze, nie wyłącza prądów zwarciowych (z bezpiecznikami: rozłącznik bezpiecznikowy)</td></tr>
<tr><td><b>wyłącznik</b></td><td>prądy robocze i zwarciowe, współpracuje z zabezpieczeniami</td></tr>
<tr><td>uziemnik</td><td>uziemia odłączony obwód, blokowany z odłącznikiem</td></tr></table></div>
<h4>Kolejność przełączeń</h4>
<ul>
<li><b>Wyłączanie</b>: najpierw wyłącznik (przerywa prąd), potem odłączniki (zwykle najpierw od strony odbioru, potem od strony zasilania), następnie uziemnik.</li>
<li><b>Załączanie</b>: odwrotnie: otwarcie uziemnika, zamknięcie odłączników (od strony zasilania), na końcu wyłącznik.</li>
<li><b>Nie wolno</b> otwierać odłącznika pod obciążeniem: powstaje łuk elektryczny niebezpieczny dla obsługi. Przed tym chronią blokady.</li>
<li>Przełączenia wykonuje się wg <b>programu łączeń</b> lub polecenia dyspozytora, w sprzęcie ochronnym, z zapisem w dzienniku operacyjnym.</li>
</ul>
<h4>Załączenie transformatora po przeglądzie</h4>
<p>Usuń uziemienia i narzędzia, sprawdź poziom oleju i położenie przełącznika zaczepów, zamknij odłączniki, załącz po stronie SN (transformator nieobciążony), sprawdź napięcia po stronie nn i kolejność faz, dopiero potem załącz odpływy nn.</p>
<div class="tip">Prąd włączania transformatora (udar magnesowania) może chwilowo przekraczać kilkukrotnie prąd znamionowy. Zabezpieczenia i bezpieczniki SN dobiera się tak, aby nie działały przy tym udarze.</div>` }
      ],
      pytania: [
        Q("Oznaczenie grupy połączeń Dyn11 oznacza, że uzwojenie dolnego napięcia jest połączone w", "gwiazdę z wyprowadzonym punktem neutralnym", "trójkąt", "zygzak", "gwiazdę bez punktu neutralnego", "Duża litera D dotyczy strony górnego napięcia."),
        Q("Straty mierzone w próbie stanu jałowego transformatora to głównie straty", "w żelazie (rdzeniu)", "w miedzi uzwojeń", "mechaniczne", "dielektryczne w oleju", "Straty w miedzi mierzy się w próbie zwarcia."),
        Q("Napięcie zwarcia uk transformatora wyznacza się w próbie", "zwarcia przy prądzie znamionowym", "stanu jałowego", "rezystancji izolacji", "przekładni", "Wyraża się je w procentach napięcia znamionowego."),
        Q("Prąd znamionowy transformatora 630 kVA wynosi 909 A, a uk = 6%. Prąd zwarcia na zaciskach nn wynosi w przybliżeniu", "15 kA", "909 A", "55 A", "150 kA", "Ik ≈ In / uk = 909 / 0,06."),
        Q("Przekaźnik Buchholza w transformatorze olejowym reaguje na", "gazy z oleju i gwałtowny przepływ oleju", "przepięcia atmosferyczne w sieci", "asymetrię napięć po stronie wtórnej", "spadek częstotliwości napięcia sieci", "Montuje się go między kadzią a konserwatorem."),
        Q("Do pracy równoległej transformatorów konieczne są m.in.", "jednakowe grupy połączeń i przekładnie", "jednakowe masy kadzi i ilości oleju", "możliwie różne napięcia zwarcia", "różne kolejności faz po obu stronach", "Różne grupy połączeń powodują zwarcie."),
        Q("Łącznik zapewniający widoczną przerwę izolacyjną, ale nieprzeznaczony do przerywania prądu obciążenia, to", "odłącznik", "wyłącznik", "rozłącznik", "stycznik", "Otwarcie odłącznika pod obciążeniem wywołuje łuk."),
        Q("Podczas wyłączania obwodu w stacji SN w pierwszej kolejności należy otworzyć", "wyłącznik", "odłącznik szynowy", "uziemnik", "odłącznik liniowy", "Odłączniki otwiera się dopiero w stanie bezprądowym.")
      ]
    },
    {
      id: "napedy", tytul: "Napędy, falowniki i kompensacja", opis: "Uruchomisz i skonfigurujesz napęd z przemiennikiem częstotliwości oraz obliczysz baterię kompensacyjną.",
      lekcje: [
        { tytul: "Przemiennik częstotliwości", tresc: `<h4>Budowa</h4>
<ol>
<li><b>Prostownik</b> (mostek diodowy 6-pulsowy) zamienia napięcie sieci na stałe.</li>
<li><b>Obwód pośredni DC</b> z kondensatorami (napięcie ok. 1,35 × 400 V ≈ <b>540-565 V DC</b>), czasem z dławikiem.</li>
<li><b>Falownik</b> z tranzystorami <b>IGBT</b> wytwarza napięcie o regulowanej częstotliwości i wartości metodą modulacji szerokości impulsów (PWM, częstotliwość nośna kilka kHz).</li>
<li>Układ sterowania, panel, wejścia i wyjścia cyfrowe i analogowe (0-10 V, 4-20 mA), komunikacja (Modbus, Profinet).</li>
</ol>
<h4>Metody sterowania</h4>
<ul>
<li><b>Skalarna U/f = const</b>: napięcie rośnie proporcjonalnie do częstotliwości (400 V / 50 Hz = 8 V/Hz), stały strumień i moment. Przy niskich częstotliwościach stosuje się <b>podbicie napięcia</b> (boost) dla utrzymania momentu.</li>
<li>Charakterystyka kwadratowa U/f² dla pomp i wentylatorów (oszczędność energii).</li>
<li><b>Wektorowa</b> (bezczujnikowa lub z enkoderem): sterowanie momentem i strumieniem osobno, duży moment przy niskich obrotach.</li>
<li>Powyżej 50 Hz napięcie nie może już rosnąć: <b>osłabienie pola</b>, moment maleje.</li>
</ul>
<h4>Parametry do wprowadzenia przy uruchomieniu</h4>
<ul>
<li>Dane z tabliczki silnika: moc, napięcie, prąd, częstotliwość, prędkość, cos φ (do <b>autotuningu</b>, czyli identyfikacji parametrów silnika).</li>
<li>Częstotliwość minimalna i maksymalna, <b>czas rozpędzania i hamowania</b> (rampy), źródło zadawania prędkości i sterowania (panel, zaciski, sieć).</li>
<li>Ograniczenie prądu, zabezpieczenie termiczne silnika (model I²t), reakcje na błędy.</li>
</ul>
<h4>Hamowanie</h4>
<p>Przy szybkim hamowaniu silnik pracuje jak prądnica i ładuje kondensatory DC. Zbyt krótka rampa wywołuje błąd <b>przepięcia w obwodzie DC</b>. Rozwiązania: dłuższa rampa, <b>rezystor hamujący</b> z czoperem, układ z oddawaniem energii do sieci (AFE).</p>
<h4>Instalacja i EMC</h4>
<ul>
<li>Przewód silnikowy <b>ekranowany</b>, ekran podłączony obustronnie, obwodowo (dławnice EMC). Filtr EMC na wejściu, dławik sieciowy ogranicza harmoniczne.</li>
<li>Długie przewody silnikowe: filtr du/dt lub sinusoidalny (przepięcia na zaciskach silnika).</li>
<li>Prądy upływu falownika są duże: RCD typu <b>B</b> (dla trójfazowych) lub typ F (jednofazowe), czasem 300 mA.</li>
<li>Po wyłączeniu zasilania kondensatory DC są naładowane przez kilka minut (czas na obudowie, np. 5 min). Przed pracą zmierz napięcie DC.</li>
</ul>
<div class="tip">Silnik z wentylatorem na wale pracujący długo na niskiej częstotliwości przegrzewa się mimo prądu poniżej znamionowego. Rozwiązanie: wentylator obcy lub ograniczenie minimalnej częstotliwości.</div>` },
        { tytul: "Softstart i dobór napędu", tresc: `<h4>Porównanie metod rozruchu</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Prąd rozruchowy</th><th>Moment</th><th>Regulacja prędkości</th></tr>
<tr><td>bezpośredni</td><td>5-8 × In</td><td>pełny</td><td>nie</td></tr>
<tr><td>gwiazda-trójkąt</td><td>ok. 1/3 bezpośredniego</td><td>1/3</td><td>nie</td></tr>
<tr><td><b>softstart</b></td><td>regulowany, np. 2-4 × In</td><td>zmniejszony (zależny od kwadratu napięcia)</td><td>nie</td></tr>
<tr><td><b>przemiennik częstotliwości</b></td><td>do ok. 1,5 × In</td><td>do pełnego od zera</td><td>tak, płynna</td></tr></table></div>
<h4>Softstart</h4>
<ul>
<li>Tyrystory (pary antyrównoległe) w fazach obniżają napięcie przy rozruchu i stopniowo je zwiększają (rampa napięcia). Po rozruchu często <b>stycznik obejściowy</b> (bypass) zwiera tyrystory, aby nie grzały się w pracy.</li>
<li>Zalety: łagodny rozruch bez uderzeń mechanicznych (pasy, przekładnie, uderzenia hydrauliczne w pompach), tańszy od falownika.</li>
<li>Ograniczenia: nie zmienia częstotliwości, więc nie reguluje prędkości. Moment przy obniżonym napięciu jest mały, nie nadaje się do rozruchu ciężkiego pod pełnym obciążeniem.</li>
</ul>
<h4>Dobór silnika do maszyny</h4>
<ul>
<li>Moc: P = M × ω = M × 2π × n / 60. Przykład: moment 50 Nm przy 1450 obr/min: P = 50 × 2π × 1450 / 60 ≈ <b>7,6 kW</b>, dobierasz silnik 7,5 kW lub 11 kW z zapasem wg charakterystyki obciążenia.</li>
<li>Pompy i wentylatory: moment rośnie z kwadratem prędkości, moc z <b>sześcianem</b>. Zmniejszenie prędkości o 20% (do 0,8) zmniejsza moc do 0,8³ ≈ 0,51, czyli prawie o połowę. Dlatego regulacja falownikiem zamiast dławienia przepustnicą daje duże oszczędności.</li>
<li>Dźwignice, przenośniki: stały moment, duży moment rozruchowy, praca S3.</li>
</ul>
<h4>Napędy serwo i krokowe</h4>
<p>Serwonapęd: silnik synchroniczny z magnesami trwałymi i enkoderem, regulator położenia, prędkości i prądu; dokładne pozycjonowanie. Silnik krokowy: obrót o stały kąt na impuls (np. 1,8°, czyli 200 kroków na obrót), praca w otwartej pętli, możliwa utrata kroków przy przeciążeniu.</p>
<h4>Eksploatacja napędów</h4>
<ul>
<li>Czyszczenie radiatorów i filtrów wentylatorów falowników (przegrzanie to częsta przyczyna awarii).</li>
<li>Kontrola kondensatorów obwodu DC (starzenie po kilku latach, zwłaszcza po długim przechowywaniu: <b>formowanie</b> kondensatorów).</li>
<li>Archiwizacja parametrów (kopia na panelu lub w komputerze) przed wymianą urządzenia.</li>
<li>Odczyt historii błędów (przetężenie, przepięcie DC, zbyt niskie napięcie, przegrzanie, zwarcie doziemne na wyjściu).</li>
</ul>
<div class="tip">Prawo sześcianu dla pomp i wentylatorów to częste zadanie obliczeniowe: moc ~ n³, ciśnienie ~ n², przepływ ~ n.</div>` },
        { tytul: "Kompensacja mocy biernej w praktyce", tresc: `<h4>Po co kompensować</h4>
<p>Odbiorniki indukcyjne (silniki, transformatory, dławiki) pobierają moc bierną. Przy niskim cos φ rośnie prąd, a więc straty w przewodach i transformatorach. Dostawca energii nalicza opłaty za energię bierną, gdy <b>tg φ &gt; 0,4</b> (odpowiada to <b>cos φ ≈ 0,93</b>).</p>
<h4>Obliczanie mocy baterii</h4>
<p><b>Qc = P × (tg φ1 - tg φ2)</b>, gdzie φ1 przed kompensacją, φ2 docelowe.</p>
<p>Przykład: P = 100 kW, cos φ1 = 0,7 (tg φ1 ≈ 1,02), cel tg φ2 = 0,4. Qc = 100 × (1,02 - 0,40) = <b>62 kvar</b>.</p>
<div class="tw"><table><tr><th>cos φ</th><th>tg φ</th></tr>
<tr><td>0,6</td><td>1,33</td></tr><tr><td>0,7</td><td>1,02</td></tr><tr><td>0,8</td><td>0,75</td></tr>
<tr><td>0,9</td><td>0,48</td></tr><tr><td>0,93</td><td>0,40</td></tr><tr><td>0,95</td><td>0,33</td></tr></table></div>
<h4>Pojemność kondensatorów</h4>
<ul>
<li>Moc kondensatora: Q = U² × 2πf × C.</li>
<li>Bateria trójfazowa w <b>trójkącie</b> wymaga trzy razy mniejszej pojemności niż w gwieździe dla tej samej mocy (każdy kondensator ma 400 V zamiast 230 V).</li>
<li>Przykład: Qc = 30 kvar w trójkącie, na fazę 10 kvar przy 400 V: C = 10 000 / (400² × 314) ≈ 199 μF.</li>
</ul>
<h4>Rodzaje kompensacji</h4>
<ul>
<li><b>Indywidualna</b>: kondensator przy silniku, załączany razem z nim. Uwaga: moc kondensatora nie większa niż ok. 90% mocy biernej biegu jałowego silnika (ryzyko samowzbudzenia po wyłączeniu).</li>
<li><b>Grupowa</b>: dla grupy odbiorników.</li>
<li><b>Centralna automatyczna</b>: bateria w rozdzielnicy głównej z <b>regulatorem mocy biernej</b>, który załącza stopnie kondensatorów stycznikami (z rezystorami tłumiącymi udar) zależnie od cos φ.</li>
<li>Transformator na biegu jałowym: kompensacja stała (mały kondensator przy transformatorze).</li>
</ul>
<h4>Problemy i eksploatacja</h4>
<ul>
<li><b>Przekompensowanie</b> (charakter pojemnościowy) też jest rozliczane przez dostawcę i podnosi napięcie.</li>
<li>Harmoniczne mogą wywołać <b>rezonans</b> baterii z indukcyjnością sieci, przegrzanie i zniszczenie kondensatorów. Stosuje się baterie z <b>dławikami filtrującymi</b> (np. 7% dla 189 Hz).</li>
<li>Kondensatory mają <b>rezystory rozładowcze</b>; przed dotknięciem odczekaj czas rozładowania (np. do 50 V w ciągu 1 min) i zewrzyj zaciski do ziemi.</li>
<li>Kontrola okresowa: pojemność stopni (spadek pojemności, wybrzuszenie obudowy), styczniki, bezpieczniki, temperatura w szafie.</li>
<li>Duże odbiory energoelektroniczne i fotowoltaika wymagają czasem kompensacji indukcyjnej (dławiki) lub kompensatorów aktywnych (SVG).</li>
</ul>
<div class="tip">W zadaniu najpierw zamień cos φ na tg φ (z tabeli lub kalkulatora), dopiero potem licz Qc. Wynik zaokrąglij w górę do najbliższej dostępnej mocy baterii (np. 62 kvar: 65 lub 70 kvar).</div>` }
      ],
      pytania: [
        Q("Napięcie w obwodzie pośrednim DC przemiennika częstotliwości zasilanego z sieci 3×400 V wynosi około", "540-565 V", "230 V", "400 V", "1000 V", "To ok. 1,35 × napięcie międzyprzewodowe."),
        Q("W sterowaniu skalarnym U/f = const przy zasilaniu silnika częstotliwością 25 Hz napięcie wynosi około (silnik 400 V / 50 Hz)", "200 V", "400 V", "100 V", "50 V", "Stosunek 8 V/Hz."),
        Q("Błąd przepięcia w obwodzie DC przy zatrzymywaniu napędu występuje najczęściej z powodu", "zbyt krótkiego czasu hamowania (rampy)", "zbyt długiej rampy rozpędzania", "zbyt niskiego napięcia sieci", "przerwy w czujniku temperatury", "Energię hamowania można odprowadzić rezystorem hamującym."),
        Q("Softstart z tyrystorami ogranicza prąd rozruchowy przez", "obniżenie napięcia podczas rozruchu", "zmianę częstotliwości zasilania", "przełączenie uzwojeń w gwiazdę", "zmianę liczby par biegunów", "Nie umożliwia regulacji prędkości."),
        Q("Prędkość wentylatora zmniejszono do 50% znamionowej. Moc pobierana zmaleje w przybliżeniu do", "12,5% wartości znamionowej", "50% wartości znamionowej", "25% wartości znamionowej", "75% wartości znamionowej", "Moc jest proporcjonalna do sześcianu prędkości: 0,5³ = 0,125."),
        Q("Opłaty za pobór energii biernej indukcyjnej naliczane są zwykle, gdy współczynnik tg φ przekracza", "0,4", "1,0", "0,1", "0,93", "tg φ = 0,4 odpowiada cos φ ≈ 0,93."),
        Q("Moc czynna odbioru wynosi 200 kW, tg φ1 = 0,75, wymagane tg φ2 = 0,4. Moc baterii kondensatorów wynosi", "70 kvar", "150 kvar", "80 kvar", "35 kvar", "Qc = 200 × (0,75 - 0,40)."),
        Q("W bateriach kondensatorów pracujących w sieci z wyższymi harmonicznymi stosuje się", "dławiki filtrujące przeciw rezonansowi", "rezystory szeregowe o wartości 1 kΩ", "bezpieczniki zwłoczne o czasie 10 s", "uzwojenia pomocnicze w kondensatorach", "Rezonans z indukcyjnością sieci może zniszczyć kondensatory.")
      ]
    }
  ]);
})(window.KURSY);
