/* Podkursy: ELM.02, ELM.03, ELM.06, MEC.03, MEC.05, MEC.08, MEC.09 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("ELM.02", [
    {
      id: "elementy", tytul: "Elementy bierne i półprzewodniki", opis: "Rozpoznasz, odczytasz i sprawdzisz rezystory, kondensatory, cewki, diody i tranzystory.",
      lekcje: [
        { tytul: "Rezystory: szeregi, kody i moc", tresc: `<h4>Szeregi wartości</h4>
<p>Rezystory produkuje się w znormalizowanych <b>szeregach E</b>. Liczba po literze oznacza ile wartości przypada na jedną dekadę: <b>E6</b> (tolerancja ±20%), <b>E12</b> (±10%), <b>E24</b> (±5%), <b>E96</b> (±1%). Szereg E12: 1,0 1,2 1,5 1,8 2,2 2,7 3,3 3,9 4,7 5,6 6,8 8,2. Jeśli z obliczeń wychodzi 500 Ω, wybierasz najbliższą wartość z szeregu (470 Ω lub 510 Ω z E24), a przy rezystorze ograniczającym prąd zawsze wartość <b>większą</b>.</p>
<h4>Kod paskowy i kod cyfrowy</h4>
<ul>
<li>4 paski: cyfra, cyfra, mnożnik, tolerancja. 5 pasków: trzy cyfry, mnożnik, tolerancja (rezystory precyzyjne).</li>
<li>Pasek tolerancji: brązowy ±1%, czerwony ±2%, złoty ±5%, srebrny ±10%. Złoty jako <b>mnożnik</b> oznacza ×0,1.</li>
<li>Oznaczenia literowe: <code>4K7</code> = 4,7 kΩ, <code>R47</code> = 0,47 Ω, <code>2M2</code> = 2,2 MΩ. Litera zastępuje przecinek.</li>
<li>Kod trzycyfrowy (SMD): <code>472</code> = 47 × 10² = 4,7 kΩ; <code>4R7</code> = 4,7 Ω; czterocyfrowy <code>1002</code> = 100 × 10² = 10 kΩ.</li>
</ul>
<h4>Moc i łączenie</h4>
<p>Moc tracona: <b>P = U·I = I²·R = U²/R</b>. Rezystor dobiera się z zapasem (ok. 2× mocy obliczonej). Typowe moce THT: 0,125 W, 0,25 W, 0,5 W, 1 W.</p>
<div class="tw"><table><tr><th>Połączenie</th><th>Wzór</th><th>Przykład</th></tr>
<tr><td>Szeregowe</td><td>R = R1 + R2</td><td>1 kΩ + 2,2 kΩ = 3,2 kΩ</td></tr>
<tr><td>Równoległe (2 rezystory)</td><td>R = R1·R2/(R1+R2)</td><td>1 kΩ || 1 kΩ = 500 Ω</td></tr>
<tr><td>n jednakowych równolegle</td><td>R = R1/n</td><td>3 × 3 kΩ = 1 kΩ</td></tr></table></div>
<p>Dzielnik napięcia: <b>U<sub>wy</sub> = U<sub>we</sub> · R2/(R1+R2)</b>. Przy 12 V, R1 = 10 kΩ, R2 = 2,2 kΩ: U<sub>wy</sub> ≈ 2,16 V. Obciążenie dzielnika obniża napięcie wyjściowe.</p>
<p>Elementy specjalne: <b>termistor NTC</b> (rezystancja maleje ze wzrostem temperatury), <b>PTC</b> (rośnie, stosowany jako bezpiecznik polimerowy), <b>warystor</b> (ochrona przepięciowa, rezystancja gwałtownie maleje po przekroczeniu napięcia), <b>fotorezystor</b> (maleje przy oświetleniu).</p>
<div class="tip">Pułapka: wynik równoległego połączenia jest zawsze <b>mniejszy</b> od najmniejszego rezystora. Jeśli wychodzi więcej, masz błąd w obliczeniach.</div>` },
        { tytul: "Kondensatory i cewki", tresc: `<h4>Kondensatory</h4>
<p>Pojemność wyrażamy w faradach: 1 µF = 1000 nF = 1 000 000 pF. Oznaczenie trzycyfrowe podaje wartość w <b>pF</b>: <code>104</code> = 10·10⁴ pF = 100 nF, <code>223</code> = 22 nF, <code>471</code> = 470 pF. Litery po kodzie to tolerancja: J ±5%, K ±10%, M ±20%.</p>
<ul>
<li><b>Elektrolityczne</b>: duże pojemności, biegunowe, mają ograniczone napięcie pracy (np. 25 V) i temperaturę (85°C lub 105°C). Odwrotne podłączenie grozi wybuchem.</li>
<li><b>Ceramiczne</b>: małe pojemności, niebiegunowe, filtracja zakłóceń (100 nF przy zasilaniu każdego układu scalonego).</li>
<li><b>Foliowe</b>: stabilne, do obwodów sieciowych (klasy X i Y).</li>
<li><b>Tantalowe</b>: biegunowe, małe wymiary, pasek oznacza <b>plus</b> (odwrotnie niż w elektrolitach aluminiowych).</li>
</ul>
<div class="tw"><table><tr><th>Wielkość</th><th>Kondensator C</th><th>Cewka L</th></tr>
<tr><td>Łączenie szeregowe</td><td>1/C = 1/C1 + 1/C2</td><td>L = L1 + L2</td></tr>
<tr><td>Łączenie równoległe</td><td>C = C1 + C2</td><td>1/L = 1/L1 + 1/L2</td></tr>
<tr><td>Reaktancja</td><td>X<sub>C</sub> = 1/(2πfC)</td><td>X<sub>L</sub> = 2πfL</td></tr>
<tr><td>Prąd stały</td><td>nie przewodzi</td><td>przewodzi (tylko R uzwojenia)</td></tr></table></div>
<h4>Stała czasowa</h4>
<p>W obwodzie RC <b>τ = R·C</b>. Po czasie τ kondensator ładuje się do ok. 63% napięcia, po <b>5τ</b> uważamy go za naładowany (99%). Przykład: R = 10 kΩ, C = 100 µF, τ = 1 s, pełne naładowanie ok. 5 s. Dla obwodu RL τ = L/R.</p>
<h4>Cewki i transformatory</h4>
<p>Cewka magazynuje energię w polu magnetycznym i przeciwdziała zmianom prądu (przy rozłączaniu indukuje przepięcie, dlatego cewkę przekaźnika bocznikuje się <b>diodą gaszącą</b> włączoną zaporowo). Transformator: <b>U1/U2 = z1/z2 = I2/I1</b>. Transformator 230 V / 12 V ma przekładnię ok. 19,2.</p>
<div class="tip">Na egzaminie częsta pułapka: kondensatory łączy się „odwrotnie” niż rezystory. Dwa kondensatory 10 µF szeregowo dają 5 µF, równolegle 20 µF. Przy szeregowym łączeniu napięcie dopuszczalne się sumuje.</div>` },
        { tytul: "Diody, tranzystory, tyrystory", tresc: `<h4>Diody</h4>
<ul>
<li><b>Prostownicza</b> (np. 1N4007: 1 A, 1000 V): spadek napięcia ok. 0,7 V (krzem), 0,3 V (german), 0,2-0,4 V (Schottky).</li>
<li><b>Zenera</b>: pracuje w kierunku <b>zaporowym</b>, stabilizuje napięcie U<sub>Z</sub>; wymaga rezystora szeregowego.</li>
<li><b>LED</b>: spadek zależy od koloru (czerwona ok. 1,8-2 V, niebieska i biała ok. 3 V), prąd typowo 10-20 mA; dłuższa nóżka to anoda.</li>
<li><b>Pojemnościowa (warikap)</b>: zmienia pojemność z napięciem zaporowym, strojenie obwodów.</li>
</ul>
<h4>Tranzystory</h4>
<p>Bipolarny NPN przewodzi, gdy baza jest ok. 0,6-0,7 V wyżej niż emiter. Zależności: <b>I<sub>E</sub> = I<sub>B</sub> + I<sub>C</sub></b>, <b>I<sub>C</sub> = β·I<sub>B</sub></b>. Stany pracy: odcięcie, aktywny (wzmacnianie), nasycenie (klucz, U<sub>CE</sub> ok. 0,2 V). Tranzystor polowy MOSFET jest sterowany <b>napięciem</b> U<sub>GS</sub>, bramka praktycznie nie pobiera prądu, jest wrażliwy na ładunki elektrostatyczne.</p>
<h4>Elementy przełączające mocy</h4>
<div class="tw"><table><tr><th>Element</th><th>Elektrody</th><th>Zastosowanie</th></tr>
<tr><td>Tyrystor (SCR)</td><td>anoda, katoda, bramka</td><td>prostowniki sterowane, przewodzi w jedną stronę, wyłącza się przy spadku prądu poniżej prądu podtrzymania</td></tr>
<tr><td>Triak</td><td>A1, A2, bramka</td><td>regulatory mocy AC (ściemniacze), przewodzi w obie strony</td></tr>
<tr><td>Diak</td><td>dwie elektrody</td><td>wyzwalanie triaka</td></tr>
<tr><td>IGBT</td><td>bramka, kolektor, emiter</td><td>falowniki, duże moce</td></tr>
<tr><td>Transoptor</td><td>LED + fototranzystor</td><td>separacja galwaniczna</td></tr></table></div>
<h4>Sprawdzanie multimetrem</h4>
<p>Funkcją testu diody: złącze w kierunku przewodzenia pokazuje 0,5-0,7 V, w zaporowym „OL”. Tranzystor NPN sprawdza się jak dwie diody z bazy (plus na bazie) do kolektora i do emitera. Między C i E w obu kierunkach musi być „OL”; wynik bliski 0 oznacza przebicie.</p>
<div class="tip">Pułapka: dioda Zenera w kierunku przewodzenia zachowuje się jak zwykła dioda (0,7 V). Stabilizuje tylko w kierunku zaporowym.</div>` }
      ],
      pytania: [
        Q("Rezystor oznaczony kodem 4K7 ma rezystancję", "4,7 kΩ", "47 kΩ", "470 Ω", "4,7 Ω", "Litera K zastępuje przecinek i oznacza kilo."),
        Q("Rezystancja zastępcza trzech rezystorów 3 kΩ połączonych równolegle wynosi", "1 kΩ", "3 kΩ", "9 kΩ", "0,33 kΩ", "n jednakowych rezystorów równolegle: R/n = 3/3 = 1 kΩ."),
        Q("Kondensator ceramiczny oznaczony 223 ma pojemność", "22 nF", "223 pF", "22 µF", "2,2 nF", "22·10³ pF = 22 000 pF = 22 nF."),
        Q("Stała czasowa obwodu R = 10 kΩ, C = 100 µF wynosi", "1 s", "0,1 s", "10 s", "1 ms", "τ = R·C = 10 000 · 0,0001 = 1 s."),
        Q("Dwa kondensatory 10 µF połączone szeregowo mają pojemność zastępczą", "5 µF", "20 µF", "10 µF", "100 µF", "Szeregowo pojemność maleje: 1/C = 1/10 + 1/10."),
        Q("Dioda Zenera stabilizuje napięcie, gdy jest spolaryzowana", "zaporowo", "w kierunku przewodzenia", "dowolnie", "tylko napięciem przemiennym", "Zakres stabilizacji leży w obszarze przebicia zaporowego."),
        Q("Element przewodzący prąd w obu kierunkach, stosowany w ściemniaczach AC, to", "triak", "tyrystor", "dioda Schottky'ego", "warystor", "Triak to dwukierunkowy odpowiednik tyrystora."),
        Q("Do ochrony tranzystora sterującego cewką przekaźnika stosuje się", "diodę włączoną zaporowo równolegle do cewki", "rezystor szeregowy z cewką", "kondensator elektrolityczny szeregowo", "diodę Zenera w szereg z bazą", "Dioda gasząca rozładowuje energię cewki przy wyłączeniu.")
      ]
    },
    {
      id: "analogowe", tytul: "Zasilacze i układy analogowe", opis: "Obliczysz i dobierzesz elementy zasilaczy, wzmacniaczy tranzystorowych i operacyjnych oraz filtrów.",
      lekcje: [
        { tytul: "Zasilacz: prostownik, filtr, stabilizator", tresc: `<h4>Tor zasilacza liniowego</h4>
<p>Transformator obniża napięcie, prostownik zamienia AC na pulsujące DC, kondensator filtruje tętnienia, stabilizator utrzymuje stałe napięcie.</p>
<div class="tw"><table><tr><th>Prostownik</th><th>Diody</th><th>Częstotliwość tętnień przy 50 Hz</th><th>Spadek na diodach</th></tr>
<tr><td>Jednopołówkowy</td><td>1</td><td>50 Hz</td><td>0,7 V</td></tr>
<tr><td>Dwupołówkowy z odczepem</td><td>2</td><td>100 Hz</td><td>0,7 V</td></tr>
<tr><td>Mostek Graetza</td><td>4</td><td>100 Hz</td><td>1,4 V (dwie diody)</td></tr></table></div>
<h4>Napięcie po filtrze</h4>
<p>Kondensator ładuje się do wartości szczytowej: <b>U<sub>DC</sub> ≈ U<sub>sk</sub>·√2 - spadki na diodach</b>. Z transformatora 12 V (skutecznie) przez mostek: 12·1,41 - 1,4 ≈ 15,6 V. Tętnienia przybliżamy wzorem <b>ΔU ≈ I/(f·C)</b>, gdzie f to częstotliwość tętnień. Przy 1 A, 100 Hz i 4700 µF: ΔU ≈ 2,1 V.</p>
<h4>Stabilizatory</h4>
<ul>
<li><b>78xx</b> dodatnie (7805 = +5 V, 7812 = +12 V), <b>79xx</b> ujemne. Wyprowadzenia 7805: wejście, masa, wyjście; dla 7905 kolejność jest inna (masa, wejście, wyjście).</li>
<li>Minimalna różnica napięć (dropout) dla 78xx ok. 2-2,5 V, czyli 7805 potrzebuje co najmniej ok. 7,5 V na wejściu. Stabilizatory LDO pracują już przy 0,3-0,5 V różnicy.</li>
<li>Moc tracona: <b>P = (U<sub>we</sub> - U<sub>wy</sub>)·I</b>. 7805 zasilany 12 V przy 0,5 A traci 3,5 W, potrzebuje radiatora.</li>
<li><b>LM317</b> regulowany: <b>U<sub>wy</sub> = 1,25 V·(1 + R2/R1)</b>; typowo R1 = 240 Ω. Dla R2 = 720 Ω: 1,25·4 = 5 V.</li>
<li>Kondensatory przy stabilizatorze: 330 nF na wejściu, 100 nF na wyjściu (zapobiegają wzbudzaniu).</li>
</ul>
<p>Zasilacze <b>impulsowe</b> (przetwornice step-down, step-up) mają sprawność 80-95%, mniejsze rozmiary, ale generują zakłócenia. Liniowe: sprawność ok. U<sub>wy</sub>/U<sub>we</sub>, małe szumy.</p>
<div class="tip">Typowe zadanie: „Ile wynosi napięcie na kondensatorze filtru bez obciążenia?”. Licz wartość szczytową (×√2) i odejmij spadki na diodach, nie podawaj wartości skutecznej.</div>` },
        { tytul: "Tranzystor jako klucz i wzmacniacz", tresc: `<h4>Tranzystor w roli klucza</h4>
<p>Mikrokontroler (wyjście 5 V, kilka mA) nie zasili przekaźnika (np. 12 V, 60 mA), dlatego stosuje się tranzystor NPN w układzie <b>wspólnego emitera</b> pracujący w nasyceniu. Obliczenie rezystora bazy:</p>
<pre>I_C = 60 mA, beta min = 100
I_B = I_C / beta = 0,6 mA, z zapasem (x2..x5) ok. 2 mA
R_B = (U_ster - U_BE) / I_B = (5 - 0,7) / 0,002 = 2150 Ω, wybieramy 2,2 kΩ</pre>
<p>Równolegle do cewki przekaźnika obowiązkowo dioda gasząca. Dla obciążeń o dużym prądzie lepszy jest MOSFET typu „logic level”, który w pełni załącza się już przy U<sub>GS</sub> = 4,5 V.</p>
<h4>Układy pracy tranzystora</h4>
<div class="tw"><table><tr><th>Układ</th><th>Wzmocnienie napięciowe</th><th>Wzmocnienie prądowe</th><th>Faza</th><th>Cecha</th></tr>
<tr><td>Wspólny emiter (OE)</td><td>duże</td><td>duże</td><td>odwraca o 180°</td><td>najczęściej stosowany</td></tr>
<tr><td>Wspólny kolektor (OC, wtórnik)</td><td>ok. 1</td><td>duże</td><td>zgodna</td><td>duża rezystancja wejściowa, mała wyjściowa</td></tr>
<tr><td>Wspólna baza (OB)</td><td>duże</td><td>ok. 1</td><td>zgodna</td><td>wielkie częstotliwości</td></tr></table></div>
<h4>Punkt pracy</h4>
<p>Wzmacniacz klasy A wymaga ustawienia punktu pracy w środku charakterystyki, zwykle U<sub>CE</sub> ≈ U<sub>CC</sub>/2. Polaryzację bazy realizuje dzielnik rezystorowy, a rezystor emiterowy stabilizuje termicznie punkt pracy (ujemne sprzężenie zwrotne). Kondensatory sprzęgające odcinają składową stałą między stopniami.</p>
<h4>Klasy wzmacniaczy mocy</h4>
<ul>
<li><b>A</b>: prąd płynie cały okres, małe zniekształcenia, sprawność do 25-50%.</li>
<li><b>B</b>: każdy tranzystor przewodzi pół okresu (przeciwsobny), sprawność do 78,5%, zniekształcenia skrośne.</li>
<li><b>AB</b>: kompromis, standard w audio.</li>
<li><b>D</b>: impulsowy (PWM), sprawność powyżej 90%.</li>
</ul>
<div class="tip">Pułapka: we wtórniku emiterowym napięcie na emiterze jest o ok. 0,7 V niższe niż na bazie. Wzmocnienie napięciowe jest mniejsze od 1, a nie równe 0.</div>` },
        { tytul: "Wzmacniacz operacyjny i filtry", tresc: `<h4>Idealny wzmacniacz operacyjny</h4>
<p>Założenia: nieskończone wzmocnienie w otwartej pętli, nieskończona rezystancja wejściowa (prąd wejść = 0), zerowa rezystancja wyjściowa. W układzie z ujemnym sprzężeniem zwrotnym napięcia na wejściach + i - są równe („zwarcie wirtualne”).</p>
<div class="tw"><table><tr><th>Układ</th><th>Wzmocnienie</th><th>Przykład R1 = 10 kΩ, R2 = 100 kΩ</th></tr>
<tr><td>Odwracający</td><td>k = -R2/R1</td><td>k = -10, U<sub>we</sub> = 0,2 V daje -2 V</td></tr>
<tr><td>Nieodwracający</td><td>k = 1 + R2/R1</td><td>k = 11</td></tr>
<tr><td>Wtórnik</td><td>k = 1</td><td>bufor, separacja źródła</td></tr>
<tr><td>Sumujący odwracający</td><td>U<sub>wy</sub> = -R2·(U1/R1 + U2/R1')</td><td>mikser sygnałów</td></tr>
<tr><td>Komparator</td><td>bez sprzężenia</td><td>wyjście w nasyceniu (+U lub -U)</td></tr></table></div>
<p>Wyjście nie przekroczy napięć zasilania. Przy zasilaniu ±12 V i k = -10 sygnał 2 V da nasycenie ok. -11 V, a nie -20 V. Komparator z dodatnim sprzężeniem zwrotnym to <b>przerzutnik Schmitta</b> (histereza, odporność na zakłócenia).</p>
<h4>Decybele</h4>
<p>k<sub>u</sub>[dB] = 20·log(U<sub>wy</sub>/U<sub>we</sub>), k<sub>p</sub>[dB] = 10·log(P<sub>wy</sub>/P<sub>we</sub>). Wartości do zapamiętania: ×2 napięcia = 6 dB, ×10 = 20 dB, ×100 = 40 dB, ×1000 = 60 dB, ×0,707 = -3 dB. Wzmocnienia stopni połączonych kaskadowo w dB się <b>dodaje</b>, a wyrażone liczbowo <b>mnoży</b>.</p>
<h4>Filtry</h4>
<ul>
<li>Częstotliwość graniczna RC: <b>f<sub>g</sub> = 1/(2πRC)</b>, przy niej sygnał spada o 3 dB (do 70,7%). R = 1,6 kΩ, C = 100 nF: f<sub>g</sub> ≈ 1 kHz.</li>
<li>Dolnoprzepustowy RC: R szeregowo, C do masy. Górnoprzepustowy: C szeregowo, R do masy.</li>
<li>Filtr I rzędu opada 20 dB/dekadę (6 dB/oktawę), II rzędu 40 dB/dekadę.</li>
<li>Obwód rezonansowy LC: <b>f<sub>0</sub> = 1/(2π√(LC))</b>. Szeregowy w rezonansie ma minimalną impedancję, równoległy maksymalną.</li>
</ul>
<div class="tip">Na egzaminie zwracaj uwagę na znak: wzmacniacz odwracający daje wynik ujemny. Jeśli odpowiedź podaje moduł bez minusa, a inna z minusem, poprawna jest ta z minusem.</div>` }
      ],
      pytania: [
        Q("Napięcie na kondensatorze filtru (bez obciążenia) za mostkiem Graetza zasilanym 12 V skutecznie wynosi około", "15,6 V", "12 V", "10,6 V", "24 V", "12·√2 = 17 V, minus 1,4 V na dwóch diodach mostka."),
        Q("Częstotliwość tętnień za mostkiem Graetza zasilanym z sieci 50 Hz wynosi", "100 Hz", "50 Hz", "25 Hz", "200 Hz", "Prostownik dwupołówkowy podwaja częstotliwość."),
        Q("Napięcie wyjściowe LM317 dla R1 = 240 Ω i R2 = 720 Ω wynosi", "5 V", "3,75 V", "1,25 V", "6,25 V", "1,25·(1 + 720/240) = 1,25·4 = 5 V."),
        Q("Moc tracona w stabilizatorze 7805 zasilanym 12 V przy prądzie 0,5 A wynosi", "3,5 W", "2,5 W", "6 W", "0,5 W", "(12 - 5)·0,5 = 3,5 W."),
        Q("Wzmocnienie wzmacniacza nieodwracającego z R1 = 10 kΩ i R2 = 100 kΩ wynosi", "11", "10", "-10", "0,1", "k = 1 + R2/R1 = 1 + 10."),
        Q("Wzmocnienie napięciowe 40 dB odpowiada wzmocnieniu", "100 razy", "40 razy", "10 razy", "1000 razy", "20·log(100) = 40 dB."),
        Q("Układ tranzystorowy o wzmocnieniu napięciowym bliskim 1 i dużej rezystancji wejściowej to", "układ wspólnego kolektora", "układ wspólnego emitera", "układ wspólnej bazy", "wzmacniacz różnicowy", "Wspólny kolektor to wtórnik emiterowy, służy jako bufor dopasowujący impedancje."),
        Q("Częstotliwość graniczna filtru RC to częstotliwość, przy której sygnał spada o", "3 dB", "6 dB", "10 dB", "20 dB", "Napięcie spada do 70,7% wartości w paśmie przepustowym.")
      ]
    },
    {
      id: "cyfrowe", tytul: "Technika cyfrowa", opis: "Przeliczysz systemy liczbowe, zminimalizujesz funkcje logiczne i opiszesz działanie przerzutników i liczników.",
      lekcje: [
        { tytul: "Systemy liczbowe i algebra Boole'a", tresc: `<h4>Przeliczanie systemów</h4>
<p>Liczbę dziesiętną zamieniamy na binarną dzieląc przez 2 i zapisując reszty od dołu. 45 = 101101<sub>2</sub>. Odwrotnie sumujemy wagi: 1011<sub>2</sub> = 8 + 2 + 1 = 11. System szesnastkowy grupuje po <b>4 bity</b>: 1010 1111<sub>2</sub> = AF<sub>16</sub> = 175. Kod <b>BCD</b> zapisuje każdą cyfrę dziesiętną osobno na 4 bitach: 59 = 0101 1001<sub>BCD</sub>.</p>
<div class="tw"><table><tr><th>DEC</th><th>BIN</th><th>HEX</th><th>Gray</th></tr>
<tr><td>5</td><td>0101</td><td>5</td><td>0111</td></tr>
<tr><td>10</td><td>1010</td><td>A</td><td>1111</td></tr>
<tr><td>15</td><td>1111</td><td>F</td><td>1000</td></tr></table></div>
<p>Kod <b>Graya</b>: sąsiednie wartości różnią się jednym bitem, stosowany w enkoderach absolutnych. Liczby ujemne zapisuje się w <b>kodzie U2</b> (uzupełnienie do dwóch): odwracamy bity i dodajemy 1; na 8 bitach -1 = 11111111, zakres od -128 do +127.</p>
<h4>Prawa algebry Boole'a</h4>
<ul>
<li>A + 0 = A, A·1 = A, A + 1 = 1, A·0 = 0</li>
<li>A + A = A, A·A = A, A + Ā = 1, A·Ā = 0</li>
<li>Pochłanianie: A + A·B = A, A·(A + B) = A</li>
<li>Prawa <b>De Morgana</b>: <code>NOT(A·B) = Ā + B̄</code>, <code>NOT(A + B) = Ā·B̄</code></li>
</ul>
<h4>Przykład minimalizacji</h4>
<pre>Y = A·B + A·B̄ + Ā·B
  = A·(B + B̄) + Ā·B = A + Ā·B = A + B</pre>
<p>Siatka <b>Karnaugha</b> dla 3 lub 4 zmiennych: kolumny i wiersze opisane kodem Graya (00, 01, 11, 10). Łączymy jedynki w prostokątne grupy po 1, 2, 4, 8 pól, także „przez krawędź”. Każda grupa daje iloczyn zmiennych, które się w niej nie zmieniają. Grupa 4 pól w siatce 4 zmiennych eliminuje 2 zmienne.</p>
<div class="tip">Pułapka: kolejność 00, 01, <b>11</b>, 10, a nie 00, 01, 10, 11. Przy złej kolejności grupy w siatce dają błędny wynik.</div>` },
        { tytul: "Bramki i układy kombinacyjne", tresc: `<h4>Bramki</h4>
<div class="tw"><table><tr><th>Bramka</th><th>Funkcja</th><th>Wyjście = 1, gdy</th><th>Przykład układu</th></tr>
<tr><td>AND</td><td>Y = A·B</td><td>wszystkie wejścia = 1</td><td>7408</td></tr>
<tr><td>OR</td><td>Y = A + B</td><td>choć jedno wejście = 1</td><td>7432</td></tr>
<tr><td>NOT</td><td>Y = Ā</td><td>wejście = 0</td><td>7404</td></tr>
<tr><td>NAND</td><td>Y = NOT(A·B)</td><td>choć jedno wejście = 0</td><td>7400</td></tr>
<tr><td>NOR</td><td>Y = NOT(A + B)</td><td>wszystkie wejścia = 0</td><td>7402</td></tr>
<tr><td>XOR</td><td>Y = A ⊕ B</td><td>wejścia różne</td><td>7486</td></tr>
<tr><td>XNOR</td><td>Y = NOT(A ⊕ B)</td><td>wejścia równe</td><td>-</td></tr></table></div>
<p>NAND i NOR to bramki <b>uniwersalne</b>: z samych NAND zbudujesz dowolną funkcję. NOT z NAND: zwieramy oba wejścia. Liczba kombinacji wejść dla n zmiennych to 2ⁿ (4 wejścia: 16 wierszy tablicy prawdy).</p>
<h4>Bloki kombinacyjne</h4>
<ul>
<li><b>Multiplekser</b> 2ⁿ:1, n wejść adresowych wybiera, które wejście danych trafia na wyjście (8:1 ma 3 linie adresowe).</li>
<li><b>Demultiplekser</b>: jedno wejście na jedno z wielu wyjść.</li>
<li><b>Dekoder</b> 3 na 8 (74138): aktywuje jedno z 8 wyjść; dekoder BCD na wskaźnik 7-segmentowy (7447 dla wspólnej anody, aktywne stany niskie).</li>
<li><b>Koder priorytetowy</b>: zamienia numer aktywnego wejścia na kod binarny.</li>
<li><b>Sumator</b>: półsumator S = A ⊕ B, C = A·B; sumator pełny uwzględnia przeniesienie.</li>
<li><b>Komparator</b> cyfrowy: wyjścia A&gt;B, A=B, A&lt;B.</li>
</ul>
<h4>Rodziny układów</h4>
<p><b>TTL</b> (seria 74): zasilanie 5 V ±5%, stan niski do 0,8 V na wejściu, wysoki od 2 V. Niepodłączone wejście TTL zachowuje się jak „1”. <b>CMOS</b> (4000, 74HC): zasilanie 3-15 V (4000) lub 2-6 V (HC), bardzo mały pobór prądu, niepodłączonych wejść nie wolno zostawiać (podłączyć do masy lub plusa), wrażliwe na ESD. Wyjście z <b>otwartym kolektorem</b> wymaga rezystora podciągającego (pull-up).</p>
<div class="tip">Wskaźnik ze wspólną katodą wymaga stanu wysokiego na segmencie, ze wspólną anodą stanu niskiego. To częste pytanie przy dekoderach 7447/7448.</div>` },
        { tytul: "Przerzutniki, liczniki, rejestry", tresc: `<h4>Przerzutniki</h4>
<div class="tw"><table><tr><th>Typ</th><th>Działanie</th><th>Stan zabroniony / uwagi</th></tr>
<tr><td>RS (na NOR)</td><td>S = 1 ustawia Q = 1, R = 1 zeruje</td><td>S = R = 1 zabronione</td></tr>
<tr><td>D</td><td>na zboczu zegara Q przyjmuje wartość D</td><td>pamięć 1 bitu, rejestry (7474)</td></tr>
<tr><td>JK</td><td>J = K = 0 pamięć, J = 1 K = 0 ustaw, J = 0 K = 1 zeruj, J = K = 1 zmiana stanu</td><td>brak stanu zabronionego</td></tr>
<tr><td>T</td><td>T = 1: zmiana stanu przy każdym impulsie</td><td>dzielnik częstotliwości przez 2</td></tr></table></div>
<p>Przerzutnik <b>asynchroniczny</b> reaguje od razu na wejścia, <b>synchroniczny</b> tylko przy zboczu lub poziomie zegara. Wejścia asynchroniczne PRESET i CLEAR (zwykle aktywne stanem niskim) działają niezależnie od zegara.</p>
<h4>Liczniki</h4>
<ul>
<li>Licznik n-bitowy liczy od 0 do <b>2ⁿ - 1</b> (4 bity: 0-15), czyli dzieli częstotliwość przez 2ⁿ.</li>
<li><b>Asynchroniczny</b> (szeregowy): wyjście jednego przerzutnika taktuje następny, prosty, ale opóźnienia się sumują (zakłócenia „szpilkowe”).</li>
<li><b>Synchroniczny</b>: wszystkie przerzutniki taktowane jednym zegarem, szybszy.</li>
<li>Licznik dziesiętny (mod 10, 7490, 4017) zeruje się po stanie 9. Licznik mod 6 można zrobić z 4-bitowego, zerując go przy stanie 0110.</li>
<li>Licznik rewersyjny liczy w górę i w dół (74193).</li>
</ul>
<h4>Rejestry i pamięci</h4>
<p>Rejestr równoległy przechowuje słowo, rejestr przesuwny (SIPO 74595, PISO 74165) zamienia dane szeregowe na równoległe i odwrotnie. Przesunięcie liczby binarnej o 1 bit w lewo to mnożenie przez 2. Pamięci: <b>RAM</b> (ulotna), <b>ROM, EPROM</b> (kasowana UV), <b>EEPROM</b> i <b>Flash</b> (kasowane elektrycznie). Pojemność: 2<sup>liczba linii adresowych</sup> × szerokość słowa; 16 linii adresowych = 65 536 komórek (64 KB przy słowie 8-bitowym).</p>
<h4>Przetworniki</h4>
<p>Rozdzielczość przetwornika A/C n-bitowego: <b>q = U<sub>ref</sub>/2ⁿ</b>. 10 bitów przy 5 V: 5/1024 ≈ 4,9 mV. Przetwornik 8-bitowy ma 256 poziomów.</p>
<div class="tip">Pułapka: licznik 4-bitowy ma 16 stanów, ale największa liczba to 15. Częstotliwość na ostatnim wyjściu licznika 4-bitowego to f<sub>zegara</sub>/16.</div>` }
      ],
      pytania: [
        Q("Liczba 1010 1111 zapisana binarnie to w systemie szesnastkowym", "AF", "FA", "A7", "175", "1010 = A, 1111 = F; 175 to wartość dziesiętna."),
        Q("Bramka, której wyjście ma stan 1 tylko gdy wejścia są różne, to", "XOR", "XNOR", "NAND", "OR", "XOR to suma modulo 2."),
        Q("Zgodnie z prawem De Morgana NOT(A·B) jest równe", "Ā + B̄", "Ā·B̄", "A + B", "NOT(A + B)", "Negacja iloczynu to suma negacji."),
        Q("Multiplekser 8:1 ma wejść adresowych", "3", "8", "4", "2", "2³ = 8 wejść danych."),
        Q("Stan zabroniony występuje w przerzutniku", "RS przy S = R = 1", "JK przy J = K = 1", "D przy D = 1", "T przy T = 1", "Dla JK stan J = K = 1 oznacza zmianę stanu, nie jest zabroniony."),
        Q("Licznik 4-bitowy liczy w zakresie", "0-15", "0-16", "1-16", "0-9", "2⁴ = 16 stanów, ostatni to 15."),
        Q("Rozdzielczość 10-bitowego przetwornika A/C przy napięciu odniesienia 5 V wynosi około", "4,9 mV", "0,5 V", "19,5 mV", "1 mV", "5 V / 1024 ≈ 4,9 mV."),
        Q("Niepodłączone wejście układu CMOS należy", "podłączyć do masy lub zasilania", "zostawić wolne", "podłączyć przez kondensator do wyjścia", "zawsze podłączyć do wyjścia sąsiedniej bramki", "Pływające wejście CMOS powoduje przypadkowe stany i wzrost poboru prądu.")
      ]
    },
    {
      id: "montaz", tytul: "Montaż THT i SMD", opis: "Wykonasz poprawne połączenia lutowane THT i SMD, odczytasz dokumentację i zachowasz zasady ESD oraz BHP.",
      lekcje: [
        { tytul: "Lutowanie: stopy, temperatury, wady", tresc: `<h4>Spoiwa i topniki</h4>
<ul>
<li>Stop ołowiowy <b>Sn60Pb40</b> lub eutektyczny <b>Sn63Pb37</b>: topnienie 183°C. Od 2006 r. w produkcji obowiązuje dyrektywa <b>RoHS</b> ograniczająca ołów.</li>
<li>Stopy bezołowiowe <b>SAC</b> (Sn96,5Ag3Cu0,5): topnienie ok. 217-220°C, gorzej zwilżają, lut jest matowy (to normalne).</li>
<li>Topnik usuwa tlenki i poprawia zwilżanie. Typy: kalafoniowy (R, RMA), „no clean” (nie wymaga mycia), aktywny wodnorozpuszczalny (trzeba zmyć, bo powoduje korozję).</li>
</ul>
<h4>Parametry lutowania ręcznego</h4>
<p>Temperatura grota: ok. <b>300-350°C</b> dla lutu ołowiowego, <b>350-380°C</b> dla bezołowiowego. Czas kontaktu z punktem lutowniczym 2-3 s, dłuższy grozi uszkodzeniem elementu lub odklejeniem ścieżki. Kolejność: przyłożyć grot jednocześnie do pola i wyprowadzenia, podać spoiwo w miejsce styku (nie na grot), odsunąć spoiwo, odsunąć grot. Nie poruszać elementem do zastygnięcia.</p>
<h4>Ocena połączenia (wg IPC-A-610)</h4>
<div class="tw"><table><tr><th>Wada</th><th>Wygląd</th><th>Przyczyna</th></tr>
<tr><td>Lut zimny</td><td>szary, ziarnisty, kulisty</td><td>za niska temperatura, poruszenie</td></tr>
<tr><td>Brak zwilżenia</td><td>spoiwo „kulką” nie rozpływa się</td><td>utlenione pole, brak topnika</td></tr>
<tr><td>Mostek</td><td>zwarcie sąsiednich pól</td><td>nadmiar spoiwa</td></tr>
<tr><td>Za mało spoiwa</td><td>niewypełniony otwór</td><td>krótki czas, mało cyny</td></tr>
<tr><td>Przegrzanie</td><td>odklejone pole, ciemny laminat</td><td>za długo lub za gorąco</td></tr></table></div>
<p>Poprawny lut THT ma kształt <b>wklęsłego stożka</b> (menisku), kąt zwilżania poniżej 90°, wypełnia otwór metalizowany, wyprowadzenie wystaje 0,5-1,5 mm (nadmiar się obcina).</p>
<h4>Kolejność montażu THT</h4>
<p>Od elementów najniższych do najwyższych: zwory, rezystory i diody, podstawki układów scalonych, kondensatory ceramiczne, tranzystory, elektrolity, złącza, elementy duże i na radiatorach. Elementy biegunowe ustawiamy zgodnie z nadrukiem (opisem) na płytce.</p>
<div class="tip">Do usuwania cyny służy odsysacz lub plecionka miedziana. Plecionkę przykłada się do lutu i grzeje przez nią, cyna wsiąka w oplot.</div>` },
        { tytul: "Technologia SMD i ochrona ESD", tresc: `<h4>Obudowy SMD</h4>
<div class="tw"><table><tr><th>Kod (calowy)</th><th>Wymiary metryczne</th><th>Uwagi</th></tr>
<tr><td>1206</td><td>3,2 × 1,6 mm</td><td>łatwy do lutowania ręcznego</td></tr>
<tr><td>0805</td><td>2,0 × 1,25 mm</td><td>typowy w zadaniach praktycznych</td></tr>
<tr><td>0603</td><td>1,6 × 0,8 mm</td><td>wymaga pęsety i lupy</td></tr>
<tr><td>0402</td><td>1,0 × 0,5 mm</td><td>montaż maszynowy</td></tr></table></div>
<p>Inne obudowy: <b>SOT-23</b> (tranzystory), <b>SOD-123</b>, <b>MELF</b> (diody, rezystory cylindryczne), <b>SOIC</b> (układy, raster 1,27 mm), <b>TQFP, QFN</b> (wyprowadzenia pod spodem), <b>BGA</b> (kulki, tylko lutowanie rozpływowe). W układach scalonych nóżka 1 oznaczona kropką lub ścięciem, numeracja <b>przeciwnie do ruchu wskazówek zegara</b> patrząc od góry.</p>
<h4>Oznaczenia rezystorów SMD</h4>
<p>Kod 3-cyfrowy (5%): <code>103</code> = 10 kΩ. Kod 4-cyfrowy (1%): <code>4701</code> = 4,7 kΩ. Kod <b>EIA-96</b>: dwie cyfry (numer wartości z tablicy) i litera mnożnika, np. <code>01C</code> = 100·100 = 10 kΩ. Rezystor <code>000</code> to zwora 0 Ω.</p>
<h4>Techniki montażu</h4>
<ul>
<li><b>Ręczny</b>: pobielenie jednego pola, przylutowanie jednego końca, wyrównanie, przylutowanie drugiego. Układy wielonóżkowe lutujemy przeciągając grot z topnikiem (technika „drag”).</li>
<li><b>Hot air</b> (gorące powietrze): ok. 300-350°C, do demontażu i montażu układów.</li>
<li><b>Rozpływowy</b> (reflow): pasta lutownicza nakładana przez szablon, piec z profilem temperatury: podgrzewanie, wygrzewanie, rozpływ (szczyt ok. 240-250°C dla SAC), chłodzenie.</li>
<li><b>Na fali</b>: montaż THT i elementów SMD przyklejonych od spodu.</li>
</ul>
<h4>ESD</h4>
<p>Wyładowanie elektrostatyczne rzędu kilkuset woltów (niewyczuwalne dla człowieka, próg ok. 3 kV) uszkadza MOSFET-y i układy CMOS. Stanowisko EPA: mata antystatyczna, <b>opaska na nadgarstek</b> połączona z uziemieniem przez rezystor ok. <b>1 MΩ</b> (ochrona przed porażeniem), obuwie i odzież ESD, opakowania ekranujące (srebrne torebki), lutownica z uziemionym grotem.</p>
<div class="tip">Rezystor 1 MΩ w opasce ESD ogranicza prąd w razie dotknięcia przewodu pod napięciem. Opaska bez rezystora jest niebezpieczna.</div>` },
        { tytul: "Dokumentacja, płytki PCB i BHP", tresc: `<h4>Dokumentacja montażowa</h4>
<ul>
<li><b>Schemat ideowy</b>: symbole elementów i połączenia elektryczne, oznaczenia R1, C3, D2, U1 (lub IC1), Q1 (lub T1), L1, K1 (przekaźnik), J1 (złącze).</li>
<li><b>Schemat montażowy</b> (rysunek rozmieszczenia): położenie elementów na płytce, widok od strony elementów.</li>
<li><b>Wykaz elementów (BOM)</b>: oznaczenie, wartość, obudowa, ilość.</li>
<li>Pliki produkcyjne PCB: <b>Gerber</b> (warstwy miedzi, maski, opisu) i plik wierceń (Excellon).</li>
</ul>
<h4>Płytki drukowane</h4>
<p>Laminat <b>FR-4</b> (szkło-epoksyd), grubość typowo 1,6 mm, miedź 35 µm (1 oz). Płytki jednostronne, dwustronne z metalizacją otworów, wielowarstwowe. Maska lutownicza (zwykle zielona) chroni ścieżki, opis (silkscreen) zawiera oznaczenia elementów. Szerokość ścieżki dobiera się do prądu: orientacyjnie 1 mm na ok. 2-3 A przy 35 µm.</p>
<h4>Narzędzia monterskie</h4>
<p>Szczypce boczne (obcinaczki) do obcinania wyprowadzeń, szczypce okrągłe i płaskie do formowania, pęseta antystatyczna, ściągacz izolacji, zaciskarka do końcówek (tulejkowych, konektorów), stacja lutownicza z regulacją temperatury, lupa lub mikroskop. Wyprowadzenia elementów THT formuje się w odległości co najmniej 1-2 mm od korpusu, aby nie uszkodzić elementu.</p>
<h4>BHP przy montażu</h4>
<ul>
<li>Opary topnika są szkodliwe: stosuj pochłaniacz dymu lub wyciąg.</li>
<li>Lutownicę odkładaj tylko na podstawkę, gąbkę zwilżaj wodą destylowaną lub używaj czyściwa mosiężnego.</li>
<li>Po pracy ze stopem ołowiowym myj ręce; na stanowisku nie je się.</li>
<li>Kondensatory w zasilaczach mogą być naładowane po wyłączeniu, rozładuj je przed dotknięciem.</li>
<li>Przy pracach przy urządzeniach zasilanych z sieci 230 V wymagane świadectwo kwalifikacyjne (SEP) i zasada: wyłącz, zabezpiecz przed załączeniem, sprawdź brak napięcia.</li>
</ul>
<h4>Klasy ochronności</h4>
<p>Klasa I: obudowa podłączona do przewodu ochronnego PE. Klasa II: izolacja podwójna lub wzmocniona (symbol podwójnego kwadratu). Klasa III: zasilanie bardzo niskim napięciem bezpiecznym SELV (do 50 V AC, 120 V DC).</p>
<div class="tip">Na schematach „U” lub „IC” oznacza układ scalony, „Q” lub „T” tranzystor, a „K” przekaźnik. Pytania często sprawdzają te oznaczenia literowe.</div>` }
      ],
      pytania: [
        Q("Temperatura topnienia stopu eutektycznego Sn63Pb37 wynosi", "183°C", "217°C", "232°C", "327°C", "232°C to cyna czysta, 327°C ołów, 217°C stopy SAC."),
        Q("Matowe, szare i ziarniste połączenie lutowane to najczęściej", "lut zimny", "poprawny lut bezołowiowy", "mostek", "przegrzanie laminatu", "Za niska temperatura lub poruszenie elementu w czasie krzepnięcia."),
        Q("Rezystor w obudowie 0805 ma wymiary około", "2,0 × 1,25 mm", "0,8 × 0,5 mm", "3,2 × 1,6 mm", "8 × 5 mm", "Kod 0805 to 0,08 × 0,05 cala."),
        Q("Rezystor SMD z oznaczeniem 4701 ma wartość", "4,7 kΩ", "470 Ω", "47 kΩ", "4,7 MΩ", "470 · 10¹ = 4700 Ω."),
        Q("Opaska antystatyczna jest połączona z uziemieniem przez rezystor o wartości około", "1 MΩ", "1 Ω", "1 kΩ", "100 MΩ", "Rezystor ogranicza prąd w razie dotknięcia potencjału sieci."),
        Q("Podczas montażu THT jako pierwsze lutuje się elementy", "najniższe, np. zwory i rezystory", "najwyższe, np. elektrolity", "złącza", "układy scalone bez podstawek", "Montaż od elementów najniższych ułatwia ułożenie płytki."),
        Q("Zestaw plików do produkcji płytki drukowanej to najczęściej pliki", "Gerber", "PDF", "STEP", "DXF z opisem", "Gerber opisuje warstwy, Excellon wiercenia."),
        Q("Urządzenie w II klasie ochronności posiada", "izolację podwójną lub wzmocnioną", "zacisk przewodu ochronnego PE", "zasilanie tylko SELV", "obudowę metalową uziemioną", "Klasa II nie wymaga przewodu ochronnego.")
      ]
    },
    {
      id: "pomiary", tytul: "Pomiary i uruchamianie", opis: "Wykonasz pomiary multimetrem i oscyloskopem, ocenisz ich dokładność i zlokalizujesz usterkę w układzie.",
      lekcje: [
        { tytul: "Multimetr: dokładność i bezpieczeństwo", tresc: `<h4>Podłączenie</h4>
<p><b>Woltomierz</b> łączymy <b>równolegle</b> z badanym elementem (ma dużą rezystancję wewnętrzną, typowo 10 MΩ). <b>Amperomierz</b> szeregowo, w przerwę obwodu (mała rezystancja). Rezystancję mierzymy wyłącznie w obwodzie <b>bez zasilania</b> i najlepiej z odlutowanym jednym końcem elementu (inaczej mierzymy rezystancję zastępczą). Pomiar prądu w gnieździe 10 A jest zwykle niezabezpieczony lub ograniczony czasowo.</p>
<h4>Błąd pomiaru</h4>
<p>Dla miernika cyfrowego dokładność podaje się jako <b>±(a% wartości mierzonej + n cyfr)</b>. Przykład: zakres 20 V, rozdzielczość 0,01 V, dokładność ±(0,5% + 2 cyfry), odczyt 12,00 V:</p>
<pre>błąd = 0,005 · 12,00 + 2 · 0,01 = 0,06 + 0,02 = 0,08 V
wynik: U = (12,00 ± 0,08) V, błąd względny ok. 0,67%</pre>
<p>Dla miernika analogowego <b>klasa</b> określa błąd jako procent <b>zakresu</b>: klasa 1,5 na zakresie 100 V oznacza ±1,5 V w całym zakresie. Dlatego zakres dobieramy tak, by wskazanie było w ostatniej 1/3 skali.</p>
<h4>Wartości skuteczne</h4>
<p>Tańsze mierniki mierzą wartość średnią i przeliczają ją na skuteczną przy założeniu sinusoidy. Dla przebiegów odkształconych (PWM, falowniki) potrzebny jest miernik <b>True RMS</b>. Dla sinusoidy: U<sub>sk</sub> = U<sub>m</sub>/√2 ≈ 0,707·U<sub>m</sub>, U<sub>śr</sub> (wyprostowane) = 0,637·U<sub>m</sub>, U<sub>pp</sub> = 2·U<sub>m</sub>.</p>
<h4>Kategorie pomiarowe</h4>
<div class="tw"><table><tr><th>Kategoria</th><th>Miejsce pomiaru</th></tr>
<tr><td>CAT I</td><td>obwody elektroniczne niepołączone bezpośrednio z siecią</td></tr>
<tr><td>CAT II</td><td>urządzenia zasilane z gniazdka</td></tr>
<tr><td>CAT III</td><td>instalacja budynku, rozdzielnice</td></tr>
<tr><td>CAT IV</td><td>przyłącze, licznik energii, linia napowietrzna</td></tr></table></div>
<div class="tip">Pułapka: przełączanie miernika na pomiar prądu i dotknięcie sondami źródła napięcia to zwarcie. Przed pomiarem napięcia zawsze sprawdź gniazdo przewodu i ustawioną funkcję.</div>` },
        { tytul: "Oscyloskop i generator", tresc: `<h4>Odczyt z ekranu</h4>
<p>Ekran podzielony jest na działki (div), zwykle 10 w poziomie i 8 w pionie. Wartość = liczba działek × nastawa.</p>
<pre>Nastawy: 2 V/div, 0,5 ms/div
Przebieg: od szczytu do szczytu 3 działki, okres 4 działki
U_pp = 3 · 2 V = 6 V, U_m = 3 V, U_sk = 3 / 1,41 = 2,12 V
T = 4 · 0,5 ms = 2 ms, f = 1 / T = 500 Hz</pre>
<h4>Ustawienia</h4>
<ul>
<li><b>Sprzężenie</b> DC pokazuje sygnał ze składową stałą, AC ją odcina (przydatne do oglądania tętnień na zasilaczu), GND ustala poziom zera.</li>
<li><b>Wyzwalanie</b> (trigger): źródło, zbocze narastające lub opadające, poziom. Niestabilny obraz oznacza złe wyzwalanie.</li>
<li>Tryby wyzwalania: AUTO (przebieg zawsze), NORMAL (tylko po spełnieniu warunku), SINGLE (pojedyncze zdarzenie).</li>
<li><b>Sonda 1:10</b> (x10): tłumi sygnał 10 razy, ma rezystancję wejściową 10 MΩ i małą pojemność. Jeśli oscyloskop nie wie o sondzie, odczyt trzeba pomnożyć przez 10. Sondę kompensuje się na sygnale prostokątnym z gniazda kalibracyjnego (trymerem, aż zbocza będą płaskie, bez przerzutów).</li>
<li>Pomiar przesunięcia fazowego: φ = (Δt/T)·360°.</li>
</ul>
<p>Masa sondy jest połączona z przewodem ochronnym PE. Podłączenie masy do punktu pod napięciem sieci powoduje zwarcie. Do pomiarów w obwodach sieciowych używa się <b>sondy różnicowej</b> lub transformatora separującego dla badanego urządzenia.</p>
<h4>Generator funkcyjny</h4>
<p>Wytwarza przebiegi sinusoidalne, prostokątne, trójkątne o regulowanej częstotliwości, amplitudzie, offsecie i współczynniku wypełnienia. <b>Współczynnik wypełnienia</b> D = t<sub>i</sub>/T·100%. Średnie napięcie przebiegu PWM 0/5 V przy D = 25% to 1,25 V. Rezystancja wyjściowa generatora wynosi zwykle 50 Ω.</p>
<p>Charakterystykę częstotliwościową wzmacniacza wyznacza się, zmieniając częstotliwość z generatora przy stałej amplitudzie i mierząc U<sub>wy</sub> oscyloskopem; pasmo kończy się, gdy wzmocnienie spadnie o 3 dB.</p>
<div class="tip">Na egzaminie zawsze licz okres w działkach poziomych, a nie wysokość. Amplituda U<sub>m</sub> to połowa wartości międzyszczytowej.</div>` },
        { tytul: "Uruchamianie i diagnostyka układów", tresc: `<h4>Procedura uruchomienia</h4>
<ol>
<li>Oględziny: zgodność elementów z wykazem, biegunowość elektrolitów i diod, orientacja układów scalonych, mostki i luty zimne.</li>
<li>Pomiar rezystancji między szyną zasilania a masą przy wyłączonym zasilaniu (wykluczenie zwarcia; wartość bliska 0 Ω oznacza błąd).</li>
<li>Pierwsze załączenie z zasilacza laboratoryjnego z <b>ograniczeniem prądowym</b> (np. 100 mA), obserwacja poboru prądu i nagrzewania.</li>
<li>Pomiar napięć w punktach kontrolnych i porównanie z dokumentacją (np. ±5%).</li>
<li>Sprawdzenie przebiegów oscyloskopem, regulacja potencjometrów montażowych.</li>
<li>Próba pod obciążeniem nominalnym, wpis do protokołu.</li>
</ol>
<h4>Typowe usterki zasilacza</h4>
<div class="tw"><table><tr><th>Objaw</th><th>Prawdopodobna przyczyna</th></tr>
<tr><td>Brak napięcia, bezpiecznik cały</td><td>przerwa uzwojenia transformatora, przerwa w torze</td></tr>
<tr><td>Bezpiecznik przepala się</td><td>przebita dioda mostka, zwarty kondensator</td></tr>
<tr><td>Duże tętnienia 50 Hz zamiast 100 Hz</td><td>uszkodzona jedna dioda mostka (praca jednopołówkowa)</td></tr>
<tr><td>Duże tętnienia, niższe napięcie pod obciążeniem</td><td>wyschnięty kondensator filtrujący (utrata pojemności)</td></tr>
<tr><td>Stabilizator mocno się grzeje i wyłącza</td><td>brak radiatora, za duża różnica napięć, przeciążenie</td></tr>
<tr><td>Napięcie wyjściowe równe wejściowemu</td><td>przebity stabilizator</td></tr></table></div>
<h4>Metody lokalizacji usterek</h4>
<ul>
<li><b>Śledzenie sygnału</b>: od wejścia do wyjścia, sprawdzając obecność sygnału w kolejnych stopniach.</li>
<li><b>Metoda połowienia</b>: pomiar w środku toru, określenie, w której połowie jest błąd.</li>
<li>Pomiar napięć stałych tranzystorów: U<sub>BE</sub> ok. 0,65 V dla przewodzącego NPN; U<sub>CE</sub> ≈ U<sub>CC</sub> oznacza odcięcie, ≈ 0,2 V nasycenie.</li>
<li>Termowizja lub dotyk (ostrożnie przy niskim napięciu) wskazuje przegrzane elementy.</li>
</ul>
<h4>Protokół z pomiarów</h4>
<p>Zawiera: nazwę badanego układu, schemat pomiarowy, wykaz przyrządów (typ, zakres, klasa), tabelę wyników z jednostkami, obliczenia, wnioski i datę. Na egzaminie praktycznym oceniane są: kompletność wpisów, jednostki, poprawny zakres przyrządów i zgodność wyników z dokumentacją.</p>
<div class="tip">Zasilacz laboratoryjny w trybie CC (stabilizacja prądu) świeci zwykle osobną diodą. Jeśli przy pierwszym włączeniu od razu przechodzi w CC, w układzie jest zwarcie lub błędnie wlutowany element.</div>` }
      ],
      pytania: [
        Q("Woltomierz włącza się w badany obwód", "równolegle do elementu", "szeregowo z elementem", "zawsze przez bocznik", "tylko po wyłączeniu zasilania", "Napięcie to różnica potencjałów na zaciskach elementu."),
        Q("Miernik o dokładności ±(0,5% + 2 cyfry) na zakresie z rozdzielczością 0,01 V wskazał 12,00 V. Błąd bezwzględny wynosi", "0,08 V", "0,06 V", "0,02 V", "0,5 V", "0,5% z 12 V = 0,06 V plus 2 · 0,01 V."),
        Q("Przy nastawie 0,5 ms/div okres przebiegu zajmuje 4 działki. Częstotliwość sygnału wynosi", "500 Hz", "2 kHz", "200 Hz", "50 Hz", "T = 2 ms, f = 1/T = 500 Hz."),
        Q("Przy nastawie 2 V/div przebieg sinusoidalny ma wysokość 3 działek od szczytu do szczytu. Amplituda wynosi", "3 V", "6 V", "2,12 V", "1,5 V", "U_pp = 6 V, amplituda to połowa."),
        Q("Do pomiaru wartości skutecznej przebiegu PWM należy użyć miernika", "True RMS", "z pomiarem wartości średniej", "analogowego elektrodynamicznego tylko na DC", "o kategorii CAT IV", "Mierniki uśredniające są poprawne tylko dla sinusoidy."),
        Q("Pomiary w rozdzielnicy budynku wymagają miernika co najmniej w kategorii", "CAT III", "CAT I", "CAT II", "CAT 0", "CAT IV dotyczy przyłącza i licznika."),
        Q("Tętnienia o częstotliwości 50 Hz na wyjściu zasilacza z mostkiem Graetza wskazują na", "uszkodzenie jednej diody mostka", "przebicie stabilizatora", "zbyt duży kondensator", "zwarcie uzwojenia wtórnego", "Mostek pracuje wtedy jak prostownik jednopołówkowy."),
        Q("Średnie napięcie przebiegu prostokątnego 0/5 V o wypełnieniu 25% wynosi", "1,25 V", "2,5 V", "3,75 V", "5 V", "U_śr = D · U = 0,25 · 5 V.")
      ]
    }
  ]);

  pod("ELM.03", [
    {
      id: "pneumatyka", tytul: "Pneumatyka i elektropneumatyka", opis: "Dobierzesz siłowniki i zawory, odczytasz schemat wg ISO 1219 i zmontujesz układ elektropneumatyczny.",
      lekcje: [
        { tytul: "Przygotowanie powietrza i siłowniki", tresc: `<h4>Zespół przygotowania powietrza</h4>
<p>Sprężone powietrze ze sprężarki trafia do zbiornika, osuszacza, a przed maszyną do zespołu <b>FRL</b>: filtr (z odwadniaczem), reduktor z manometrem, smarownica (dziś często pomijana, bo zawory i siłowniki są fabrycznie smarowane). Typowe ciśnienie robocze w automatyce: <b>0,6 MPa = 6 bar</b>. Przelicznik: 1 bar = 0,1 MPa = 100 kPa.</p>
<h4>Siła siłownika</h4>
<pre>F = p · A,  A = π · D² / 4
D = 50 mm, p = 0,6 MPa (= 0,6 N/mm²)
A = 3,14 · 2500 / 4 = 1963 mm²
F teoretyczna wysuwu = 0,6 · 1963 ≈ 1178 N
Przy wsuwie odejmujemy pole tłoczyska: A = π(D² - d²)/4</pre>
<p>Siła rzeczywista jest mniejsza o opory tarcia (ok. 10-15%). Siła wsuwania siłownika dwustronnego działania jest <b>mniejsza</b> niż siła wysuwu, bo tłoczysko zmniejsza powierzchnię czynną.</p>
<h4>Rodzaje siłowników</h4>
<div class="tw"><table><tr><th>Typ</th><th>Cechy</th></tr>
<tr><td>Jednostronnego działania</td><td>ruch roboczy powietrzem, powrót sprężyną, krótki skok, sterowany zaworem 3/2</td></tr>
<tr><td>Dwustronnego działania</td><td>ruch w obie strony powietrzem, sterowany zaworem 5/2 lub 5/3</td></tr>
<tr><td>Beztłoczyskowy</td><td>długie skoki przy małej zabudowie</td></tr>
<tr><td>Wahadłowy, obrotowy</td><td>ruch obrotowy o zadany kąt</td></tr>
<tr><td>Chwytak, przyssawka (próżnia)</td><td>manipulacja detalami; próżnię wytwarza eżektor</td></tr></table></div>
<p>Amortyzacja w położeniach krańcowych może być stała (zderzaki elastyczne) lub nastawna (pneumatyczna, śrubą dławiącą). Tłok z magnesem umożliwia odczyt położenia czujnikiem <b>kontaktronowym</b> lub magnetorezystancyjnym mocowanym na korpusie.</p>
<h4>Regulacja prędkości</h4>
<p>Prędkość ustawia się <b>zaworem dławiąco-zwrotnym</b>. Zalecane jest dławienie <b>powietrza wylotowego</b> (z komory, z której powietrze uchodzi), bo daje stabilny, płynny ruch nawet przy zmiennym obciążeniu. Dławienie powietrza dolotowego stosuje się w siłownikach jednostronnego działania. Szybkie wysunięcie zapewnia zawór szybkiego spustu.</p>
<div class="tip">Pułapka obliczeniowa: przy D w milimetrach i p w MPa (N/mm²) siła wychodzi od razu w niutonach. Jeśli podstawisz bary, pomnóż wynik przez 0,1.</div>` },
        { tytul: "Zawory i symbole ISO 1219", tresc: `<h4>Oznaczanie rozdzielaczy</h4>
<p>Zapis <b>5/2</b> oznacza 5 przyłączy i 2 położenia. Każde położenie to osobny kwadrat na symbolu. Numeracja przyłączy (ISO 5599): <b>1</b> zasilanie, <b>2 i 4</b> wyjścia robocze, <b>3 i 5</b> odpowietrzenia (wyloty), <b>12, 14</b> przyłącza sterujące (14 łączy 1 z 4, 12 łączy 1 z 2). Dawniej: P, A, B, R, S.</p>
<div class="tw"><table><tr><th>Zawór</th><th>Zastosowanie</th></tr>
<tr><td>2/2</td><td>odcinający, otwiera lub zamyka przepływ</td></tr>
<tr><td>3/2 NC (normalnie zamknięty)</td><td>siłownik jednostronnego działania, sygnały sterujące</td></tr>
<tr><td>3/2 NO (normalnie otwarty)</td><td>sygnał aktywny w spoczynku</td></tr>
<tr><td>5/2</td><td>siłownik dwustronnego działania</td></tr>
<tr><td>5/3 z zamkniętym środkiem</td><td>zatrzymanie siłownika w dowolnym położeniu</td></tr>
<tr><td>5/3 z odpowietrzonym środkiem</td><td>odciążenie siłownika (ruch ręczny tłoczyska)</td></tr></table></div>
<h4>Rodzaje sterowania</h4>
<ul>
<li><b>Monostabilny</b> (sprężyna powrotna): po zaniku sygnału wraca do położenia spoczynkowego.</li>
<li><b>Bistabilny</b> (dwie cewki lub dwa sygnały pneumatyczne): pamięta ostatnie położenie, krótki impuls wystarcza do przełączenia.</li>
<li>Sterowanie ręczne (przycisk, dźwignia), mechaniczne (rolka, popychacz), pneumatyczne, elektryczne (elektromagnes, symbol prostokąta z ukośną kreską).</li>
<li>Elektrozawór z sterowaniem wstępnym (pilotem) wymaga minimalnego ciśnienia zasilania.</li>
</ul>
<h4>Zawory funkcji logicznych</h4>
<p>Zawór <b>podwójnego sygnału</b> (dwuciśnieniowy) realizuje funkcję <b>AND</b>: wyjście 2 tylko przy sygnałach na obu wejściach. Zawór <b>przełączający</b> (wahadłowy) realizuje <b>OR</b>. Zawór zwrotny przepuszcza w jedną stronę. Zawór <b>czasowy</b> to zbiornik z dławikiem i zaworem 3/2 (opóźnienie). Zawór bezpieczeństwa i reduktor ograniczają ciśnienie.</p>
<h4>Odczyt schematu</h4>
<p>Na schemacie elementy rysuje się w <b>położeniu początkowym</b>, przy podanym zasilaniu. Elementy układa się warstwami od dołu: zasilanie, elementy sygnałowe, przetwarzające, sterujące (rozdzielacze), wykonawcze (siłowniki) na górze. Elementy oznacza się np. <b>1A1</b> (siłownik), <b>1V1</b> (zawór), <b>1S1</b> (czujnik, łącznik), <b>0Z1</b> (zespół przygotowania).</p>
<div class="tip">Pytanie typowe: „Który zawór zapewni zatrzymanie siłownika w dowolnym położeniu?”. Odpowiedź: rozdzielacz 5/3 z zamkniętym położeniem środkowym.</div>` },
        { tytul: "Sterowanie elektropneumatyczne i sekwencje", tresc: `<h4>Elementy elektryczne</h4>
<ul>
<li>Cewki elektrozaworów: najczęściej <b>24 V DC</b>, oznaczane Y1, Y2 lub 1M1.</li>
<li>Czujniki położenia: kontaktronowe (2-przewodowe), indukcyjne i magnetyczne PNP (3-przewodowe: BN +24 V, BU 0 V, BK sygnał), wyłączniki krańcowe mechaniczne.</li>
<li>Przekaźniki K1, K2 do realizacji pamięci i logiki, przyciski S1 (start, styk zwierny NO), S0 (stop, styk rozwierny NC).</li>
</ul>
<h4>Diagram drogowo-krokowy</h4>
<p>Opisuje ruchy siłowników w kolejnych krokach. Zapis <b>A+</b> oznacza wysunięcie siłownika A, <b>A-</b> wsunięcie. Sekwencja <b>A+ B+ A- B-</b> jest typowa dla podajnika: A wysuwa detal, B dociska lub wypycha, A wraca, B wraca.</p>
<pre>Krok  Ruch  Warunek przejścia (czujnik)
1     A+    START i B0 (B wsunięty)
2     B+    A1 (A wysunięty)
3     A-    B1 (B wysunięty)
4     B-    A0 (A wsunięty)</pre>
<h4>Kolizja sygnałów</h4>
<p>Przy zaworach bistabilnych sekwencja A+ B+ B- A- powoduje <b>kolizję sygnałów</b>: sygnał na jedną cewkę jest wciąż aktywny, gdy pojawia się sygnał na drugą. Rozwiązania: metoda kaskadowa, rejestr krokowy, zawory monostabilne z samopodtrzymaniem przekaźnikowym albo program w PLC. Sekwencja A+ B+ A- B- jest wolna od kolizji.</p>
<h4>Samopodtrzymanie z zaworem monostabilnym</h4>
<p>Cewka zaworu monostabilnego musi być zasilana przez cały czas ruchu. Przycisk START załącza przekaźnik K1, którego styk zwierny równolegle do przycisku podtrzymuje zasilanie. Czujnik krańcowy (styk NC w obwodzie K1) przerywa podtrzymanie i siłownik wraca.</p>
<h4>Montaż i uruchomienie</h4>
<ol>
<li>Zamontuj elementy na płycie profilowej zgodnie ze schematem.</li>
<li>Połącz przewody pneumatyczne (cięcie prostopadłe nożem do przewodów, wsunięcie do oporu w złączkę wtykową).</li>
<li>Połącz obwody elektryczne przy wyłączonym zasilaniu, sprawdź polaryzację czujników.</li>
<li>Ustaw ciśnienie na reduktorze (np. 4-6 bar), dławiki wstępnie przymknij.</li>
<li>Sprawdź ruchy ręcznym przełączeniem zaworów, ustaw czujniki w położeniach krańcowych, wyreguluj prędkość.</li>
</ol>
<div class="tip">Na egzaminie praktycznym ocenia się również szczelność: wycieki słychać, a do ich lokalizacji używa się wody z mydłem lub sprayu wykrywającego.</div>` }
      ],
      pytania: [
        Q("Siła teoretyczna wysuwu siłownika o średnicy tłoka 50 mm przy ciśnieniu 0,6 MPa wynosi około", "1178 N", "117,8 N", "11 780 N", "471 N", "A = 1963 mm², F = 0,6 N/mm² · 1963 mm²."),
        Q("W rozdzielaczu 5/2 cyfra 2 oznacza", "liczbę położeń", "liczbę przyłączy", "liczbę cewek", "przyłącze zasilania", "Pierwsza liczba to przyłącza, druga położenia."),
        Q("Zgodnie z ISO 5599 przyłącze zasilania rozdzielacza oznacza się cyfrą", "1", "2", "3", "4", "2 i 4 to wyjścia, 3 i 5 odpowietrzenia."),
        Q("Zatrzymanie siłownika w dowolnym położeniu umożliwia rozdzielacz", "5/3 z zamkniętym położeniem środkowym", "5/2 monostabilny", "3/2 NC", "5/3 z odpowietrzonym środkiem", "Zamknięty środek odcina obie komory siłownika."),
        Q("Funkcję logiczną AND w pneumatyce realizuje zawór", "dwuciśnieniowy", "przełączający", "zwrotny sterowany", "szybkiego spustu", "Zawór dwuciśnieniowy (podwójnego sygnału) daje wyjście przy obu sygnałach. Zawór przełączający realizuje OR."),
        Q("Zalecanym sposobem regulacji prędkości siłownika dwustronnego działania jest dławienie", "powietrza wylotowego", "powietrza dolotowego", "na reduktorze ciśnienia", "na zaworze bezpieczeństwa", "Daje płynny ruch niezależny od obciążenia."),
        Q("Zapis A- w diagramie drogowo-krokowym oznacza", "wsunięcie siłownika A", "wysunięcie siłownika A", "zatrzymanie siłownika A", "odcięcie zasilania siłownika A", "Plus oznacza wysunięcie, minus wsunięcie."),
        Q("Przewód czarny (BK) w trójprzewodowym czujniku PNP to", "wyjście sygnałowe", "zasilanie +24 V", "masa 0 V", "przewód ochronny", "BN to plus, BU masa.")
      ]
    },
    {
      id: "hydraulika", tytul: "Hydraulika siłowa", opis: "Obliczysz parametry układu hydraulicznego, dobierzesz elementy i przeprowadzisz jego obsługę.",
      lekcje: [
        { tytul: "Prawa i obliczenia hydrauliki", tresc: `<h4>Podstawy</h4>
<p>Prawo <b>Pascala</b>: ciśnienie w cieczy zamkniętej rozchodzi się jednakowo we wszystkich kierunkach. Ciecz jest praktycznie nieściśliwa, dlatego hydraulika daje sztywny, precyzyjny ruch i bardzo duże siły. Typowe ciśnienia: 10-35 MPa (100-350 bar), w pneumatyce ok. 0,6 MPa.</p>
<h4>Najważniejsze wzory</h4>
<div class="tw"><table><tr><th>Wielkość</th><th>Wzór</th><th>Jednostki</th></tr>
<tr><td>Siła siłownika</td><td>F = p·A</td><td>N = Pa·m²</td></tr>
<tr><td>Prędkość tłoka</td><td>v = Q/A</td><td>m/s = (m³/s)/m²</td></tr>
<tr><td>Wydajność pompy</td><td>Q = V·n·η<sub>v</sub></td><td>V w cm³/obr, n w obr/min</td></tr>
<tr><td>Moc hydrauliczna</td><td>P = p·Q</td><td>W = Pa·m³/s</td></tr>
<tr><td>Moc praktyczna</td><td>P[kW] = p[bar]·Q[l/min]/600</td><td>wzór warsztatowy</td></tr>
<tr><td>Równanie ciągłości</td><td>Q = v1·A1 = v2·A2</td><td>mniejszy przekrój = większa prędkość</td></tr></table></div>
<h4>Przykład</h4>
<pre>Pompa: V = 10 cm³/obr, n = 1450 obr/min, eta_v = 0,95
Q = 10 · 1450 · 0,95 = 13 775 cm³/min ≈ 13,8 l/min
Ciśnienie 100 bar:
P = 100 · 13,8 / 600 ≈ 2,3 kW (moc hydrauliczna)
Silnik napędowy przy sprawności całkowitej 0,85:
P_s = 2,3 / 0,85 ≈ 2,7 kW</pre>
<h4>Przekładnia hydrauliczna</h4>
<p>W prasie hydraulicznej F1/A1 = F2/A2. Jeśli tłok roboczy ma 100 razy większe pole niż pompujący, siła rośnie 100 razy, ale droga tłoka roboczego jest 100 razy mniejsza (zasada zachowania energii).</p>
<h4>Siłownik różnicowy</h4>
<p>W siłowniku dwustronnego działania z jednostronnym tłoczyskiem przy tym samym Q wsuwanie jest <b>szybsze</b> niż wysuwanie (mniejsze pole czynne po stronie tłoczyska), a siła przy wsuwaniu <b>mniejsza</b>. Przy wsuwaniu z komory tłokowej wypływa więcej oleju niż wpływa do pierścieniowej, co trzeba uwzględnić przy doborze przewodów powrotnych.</p>
<div class="tip">Pułapka jednostek: 1 l/min = 1/60 000 m³/s, 1 bar = 100 000 Pa. Wzór „p·Q/600” daje kW tylko dla p w barach i Q w l/min.</div>` },
        { tytul: "Elementy układu hydraulicznego", tresc: `<h4>Pompy</h4>
<ul>
<li><b>Zębate</b> (zewnętrzne, wewnętrzne): proste, tanie, stała wydajność, do ok. 250 bar.</li>
<li><b>Łopatkowe</b>: ciche, mogą mieć wydajność zmienną.</li>
<li><b>Tłoczkowe</b> (osiowe, promieniowe): najwyższe ciśnienia (do 400 bar i więcej), wydajność zmienna, regulacja mocy.</li>
</ul>
<p>Na symbolu pompa to okrąg z trójkątem skierowanym na zewnątrz (wypływ), silnik hydrauliczny z trójkątem do środka. Strzałka ukośna przez symbol oznacza nastawialność.</p>
<h4>Zawory ciśnieniowe</h4>
<div class="tw"><table><tr><th>Zawór</th><th>Funkcja</th><th>Położenie normalne</th></tr>
<tr><td>Maksymalny (przelewowy, bezpieczeństwa)</td><td>ogranicza ciśnienie w układzie, nadmiar oleju kieruje do zbiornika</td><td>zamknięty</td></tr>
<tr><td>Redukcyjny</td><td>utrzymuje niższe stałe ciśnienie w części układu</td><td>otwarty</td></tr>
<tr><td>Kolejności działania</td><td>otwiera przepływ dalej po osiągnięciu ciśnienia</td><td>zamknięty</td></tr>
<tr><td>Zwrotny sterowany</td><td>blokuje siłownik z zawieszonym ciężarem</td><td>-</td></tr></table></div>
<h4>Zawory natężenia przepływu</h4>
<p><b>Dławik</b> zmienia przekrój, ale przepływ zależy od różnicy ciśnień (od obciążenia). <b>Regulator przepływu</b> (dwudrogowy z wagą ciśnieniową) utrzymuje stałe Q niezależnie od obciążenia, gdy potrzebna jest stała prędkość posuwu.</p>
<h4>Rozdzielacze</h4>
<p>Oznaczenia jak w pneumatyce: 4/3, 4/2. Przyłącza: <b>P</b> (ciśnienie z pompy), <b>T</b> (zbiornik), <b>A, B</b> (robocze). Położenie środkowe rozdzielacza 4/3:</p>
<ul>
<li>zamknięte: wszystkie przyłącza zablokowane, siłownik zatrzymany, pompa tłoczy przez zawór maksymalny (grzanie oleju);</li>
<li><b>P-T otwarte (tandem)</b>: odciążenie pompy, olej wraca bez ciśnienia, siłownik zablokowany;</li>
<li>pływające A-B-T: siłownik swobodny.</li>
</ul>
<h4>Pozostałe elementy</h4>
<p>Zbiornik (objętość ok. 3-5-krotności wydajności minutowej pompy), filtry (ssawny, ciśnieniowy, spływowy), chłodnica, <b>akumulator hydrauliczny</b> (pęcherzowy, tłokowy; azot jako gaz), manometr, przewody sztywne i giętkie (węże wysokociśnieniowe).</p>
<h4>Ciecze i przykładowe obliczenie</h4>
<p>W układach stosuje się oleje hydrauliczne HL, HLP (z dodatkami przeciwzużyciowymi) i HV (do zmiennych temperatur), o klasie lepkości np. VG 32 lub VG 46. Temperatura pracy oleju powinna wynosić ok. 40-60°C.</p>
<p>Siła siłownika: <b>F = p × A</b>. Tłok o średnicy 50 mm ma pole A ≈ 19,6 cm², więc przy 100 bar (10 MPa) daje F ≈ 19,6 kN. Prędkość tłoka: <b>v = Q / A</b>, przy Q = 12 l/min wynosi ok. 0,1 m/s. Po stronie tłoczyska pole jest mniejsze, więc siła jest mniejsza, a prędkość większa.</p>
<div class="tip">Zawór maksymalny montuje się zaraz za pompą. Pytanie „który zawór chroni pompę przed przeciążeniem” ma właśnie tę odpowiedź.</div>` },
        { tytul: "Eksploatacja układów hydraulicznych", tresc: `<h4>Olej hydrauliczny</h4>
<p>Funkcje: przenoszenie energii, smarowanie, chłodzenie, ochrona przed korozją. Najważniejsza cecha to <b>lepkość</b>; klasy <b>ISO VG</b> (np. VG 32, 46, 68) podają lepkość kinematyczną w mm²/s w temperaturze 40°C. Oznaczenia rodzajów: HL (z dodatkami antykorozyjnymi), <b>HLP</b> (dodatkowo przeciwzużyciowe, najczęstsze), HV (wysoki wskaźnik lepkości, do zmiennych temperatur). Optymalna temperatura pracy 40-60°C; powyżej ok. 70°C olej szybko się starzeje.</p>
<h4>Czystość oleju</h4>
<p>Zanieczyszczenia odpowiadają za ok. 70-80% awarii. Czystość określa kod <b>ISO 4406</b> (np. 18/16/13: liczba cząstek większych niż 4, 6 i 14 µm). Wskaźnik zabrudzenia filtra (optyczny lub elektryczny) sygnalizuje konieczność wymiany wkładu. Przy uzupełnianiu stosuje się ten sam typ oleju i agregat filtrujący.</p>
<h4>Typowe usterki</h4>
<div class="tw"><table><tr><th>Objaw</th><th>Przyczyna</th></tr>
<tr><td>Hałas pompy, piana w zbiorniku</td><td>kawitacja: zatkany filtr ssawny, za niski poziom oleju, zasysanie powietrza</td></tr>
<tr><td>Brak ciśnienia</td><td>źle ustawiony lub otwarty zawór maksymalny, zużyta pompa, zły kierunek obrotów</td></tr>
<tr><td>Przegrzewanie oleju</td><td>praca przez zawór maksymalny, mała chłodnica, za mała lepkość</td></tr>
<tr><td>Nierówny ruch siłownika</td><td>powietrze w układzie, zużyte uszczelnienia</td></tr>
<tr><td>Opadanie siłownika pod obciążeniem</td><td>przecieki wewnętrzne, nieszczelny zawór zwrotny</td></tr></table></div>
<h4>Odpowietrzanie i uruchomienie</h4>
<ol>
<li>Napełnij zbiornik przez filtr, sprawdź kierunek obrotów silnika (krótkie załączenie).</li>
<li>Zawór maksymalny ustaw na minimum, uruchom pompę, stopniowo podnoś ciśnienie.</li>
<li>Kilkukrotnie wykonaj pełne ruchy siłowników przy niskim ciśnieniu, odpowietrz w najwyższych punktach.</li>
<li>Ustaw ciśnienie robocze, sprawdź szczelność i temperaturę.</li>
</ol>
<h4>BHP</h4>
<p>Przed pracami serwisowymi: wyłącz napęd, <b>rozładuj akumulator hydrauliczny</b>, opuść lub zablokuj zawieszone masy, dopiero potem rozkręcaj połączenia. Nie szukaj nieszczelności ręką: strumień oleju pod wysokim ciśnieniem przebija skórę (wstrzyknięcie wymaga natychmiastowej pomocy chirurgicznej). Zużyty olej to odpad niebezpieczny, przekazuje się go uprawnionemu odbiorcy.</p>
<div class="tip">Kawitacja to tworzenie się i zapadanie pęcherzyków par w strefie niskiego ciśnienia (ssanie). Jej typowa przyczyna na egzaminie: zbyt duże opory na ssaniu, np. zatkany filtr ssawny.</div>` }
      ],
      pytania: [
        Q("Pompa o objętości roboczej 10 cm³/obr przy 1450 obr/min i sprawności objętościowej 0,95 ma wydajność około", "13,8 l/min", "14,5 l/min", "1,38 l/min", "138 l/min", "Q = 10 · 1450 · 0,95 cm³/min."),
        Q("Moc hydrauliczna przy ciśnieniu 100 bar i przepływie 60 l/min wynosi", "10 kW", "6 kW", "100 kW", "1 kW", "P = p·Q/600 = 100·60/600."),
        Q("Zawór chroniący pompę i układ przed nadmiernym ciśnieniem to zawór", "maksymalny", "redukcyjny", "dławiący", "zwrotny", "Zawór maksymalny (przelewowy) kieruje nadmiar oleju do zbiornika."),
        Q("W siłowniku z jednostronnym tłoczyskiem przy stałym przepływie oleju", "wsuwanie jest szybsze niż wysuwanie", "wysuwanie jest szybsze niż wsuwanie", "prędkości są równe", "prędkość nie zależy od pola powierzchni", "v = Q/A, a pole pierścieniowe jest mniejsze."),
        Q("Liczba w oznaczeniu oleju ISO VG 46 oznacza", "lepkość kinematyczną w mm²/s w 40°C", "temperaturę zapłonu", "maksymalne ciśnienie w barach", "zawartość dodatków w %", "Klasy lepkości odnoszą się do 40°C."),
        Q("Hałas pompy i spienienie oleju najczęściej wskazują na", "kawitację lub zasysanie powietrza", "zbyt wysokie ustawienie zaworu maksymalnego", "zbyt duży zbiornik", "zbyt czysty olej", "Typowa przyczyna to zatkany filtr ssawny lub niski poziom oleju."),
        Q("Przed rozkręceniem przewodów w układzie z akumulatorem hydraulicznym należy", "rozładować akumulator", "podnieść ciśnienie", "dolać oleju", "zamknąć zawór maksymalny", "Akumulator utrzymuje ciśnienie po wyłączeniu pompy."),
        Q("Stałą prędkość siłownika niezależnie od obciążenia zapewnia", "regulator przepływu", "zawór dławiąco-zwrotny", "zawór zwrotny sterowany", "zawór redukcyjny", "Regulator przepływu ma wagę ciśnieniową. Dławik daje przepływ zależny od różnicy ciśnień.")
      ]
    },
    {
      id: "czujniki-napedy", tytul: "Czujniki i napędy elektryczne", opis: "Dobierzesz i podłączysz czujniki oraz silniki, a także skonfigurujesz falownik.",
      lekcje: [
        { tytul: "Czujniki zbliżeniowe i dwustanowe", tresc: `<h4>Rodzaje czujników</h4>
<div class="tw"><table><tr><th>Czujnik</th><th>Wykrywa</th><th>Uwagi</th></tr>
<tr><td>Indukcyjny</td><td>tylko metale</td><td>zasięg kilka mm; dla metali nieżelaznych (Al, Cu) zasięg maleje (współczynnik redukcji)</td></tr>
<tr><td>Pojemnościowy</td><td>prawie wszystko: metal, plastik, drewno, ciecze</td><td>regulacja czułości potencjometrem, wykrywanie poziomu przez ściankę zbiornika</td></tr>
<tr><td>Optyczny refleksyjny (dyfuzyjny)</td><td>obiekt odbija światło</td><td>nadajnik i odbiornik w jednej obudowie</td></tr>
<tr><td>Optyczny z odbłyśnikiem</td><td>przerwanie wiązki do lustra</td><td>polaryzacja filtruje błyszczące obiekty</td></tr>
<tr><td>Optyczny bariera (nadajnik-odbiornik)</td><td>przerwanie wiązki</td><td>największy zasięg</td></tr>
<tr><td>Ultradźwiękowy</td><td>dowolny materiał, także przezroczysty</td><td>pomiar odległości</td></tr>
<tr><td>Magnetyczny, kontaktron</td><td>pole magnesu</td><td>położenie tłoka siłownika</td></tr></table></div>
<h4>Wyjścia PNP i NPN</h4>
<p>Czujnik <b>PNP</b> (źródłowy, „sourcing”) w stanie aktywnym podaje na wyjście <b>+24 V</b>; obciążenie (wejście PLC) łączy się między wyjściem a 0 V. Czujnik <b>NPN</b> („sinking”) zwiera wyjście do 0 V; obciążenie łączy się między wyjściem a +24 V. W Europie standardem jest PNP. Kolory przewodów (IEC 60947-5-2): <b>BN</b> brązowy +24 V, <b>BU</b> niebieski 0 V, <b>BK</b> czarny wyjście (NO), <b>WH</b> biały drugie wyjście (NC).</p>
<p>Funkcja wyjścia: <b>NO</b> (zwierne, sygnał przy obecności obiektu) lub <b>NC</b> (rozwierne). Przy NC przerwa przewodu daje ten sam stan co obecność obiektu, co bywa wykorzystywane dla bezpieczeństwa.</p>
<h4>Zasięg i montaż</h4>
<ul>
<li>Zasięg nominalny S<sub>n</sub>; zasięg pewny (roboczy) to ok. 0,81·S<sub>n</sub>.</li>
<li>Czujnik <b>montowany na zrównanie</b> (ekranowany, flush) może być wpuszczony w metal, ma mniejszy zasięg. Nieekranowany (non-flush) wymaga wolnej strefy wokół czoła, zasięg większy.</li>
<li>Histereza zapobiega drganiu sygnału na granicy zasięgu.</li>
<li>Dioda LED na czujniku sygnalizuje stan wyjścia, co ułatwia ustawianie.</li>
</ul>
<div class="tip">Pułapka: czujnik indukcyjny nie wykryje plastikowego detalu. Do wykrywania butelek PET lub granulatu wybierz czujnik pojemnościowy lub optyczny.</div>` },
        { tytul: "Czujniki pomiarowe i sygnały analogowe", tresc: `<h4>Temperatura</h4>
<ul>
<li><b>Pt100</b>: rezystancja 100 Ω w 0°C, wzrasta ok. 0,385 Ω/°C (w 100°C ok. 138,5 Ω). Podłączenie 2-, 3- lub 4-przewodowe; 3- i 4-przewodowe kompensują rezystancję przewodów. Pt1000 ma 1000 Ω w 0°C.</li>
<li><b>Termopara</b>: generuje napięcie (kilkadziesiąt µV/°C) zależne od różnicy temperatur spoin. Typ <b>K</b> (NiCr-NiAl) do ok. 1200°C, typ J (Fe-CuNi). Wymaga przewodów kompensacyjnych i kompensacji zimnych końców.</li>
<li><b>Termistory</b> NTC i PTC: tanie, nieliniowe, zabezpieczenia uzwojeń silników (PTC w uzwojeniu).</li>
</ul>
<h4>Siła, ciśnienie, położenie</h4>
<p><b>Tensometr</b> zmienia rezystancję przy odkształceniu, łączy się go w <b>mostek Wheatstone'a</b>; stosowany w belkach tensometrycznych wag. Przetworniki ciśnienia piezorezystancyjne. Położenie liniowe: potencjometr liniowy, czujnik LVDT, liniał magnetostrykcyjny.</p>
<h4>Enkodery</h4>
<div class="tw"><table><tr><th>Typ</th><th>Działanie</th><th>Cechy</th></tr>
<tr><td>Inkrementalny</td><td>impulsy A i B przesunięte o 90°, znacznik zera Z</td><td>kierunek z kolejności A/B, po zaniku zasilania traci pozycję, wymaga bazowania</td></tr>
<tr><td>Absolutny</td><td>każde położenie ma unikalny kod (Graya)</td><td>pamięta pozycję po wyłączeniu, jedno- lub wieloobrotowy</td></tr></table></div>
<p>Rozdzielczość kątowa enkodera 1000 imp/obr: 360°/1000 = 0,36°. Przy zliczaniu wszystkich zboczy A i B (x4) rozdzielczość rośnie 4 razy.</p>
<h4>Sygnały znormalizowane</h4>
<p>Przetworniki przemysłowe dają sygnał <b>4-20 mA</b>, 0-20 mA, 0-10 V. Pętla prądowa 4-20 mA jest odporna na zakłócenia i spadki napięcia w długich przewodach, a prąd 0 mA oznacza przerwę (diagnostyka „live zero”). Przeliczenie liniowe:</p>
<pre>Czujnik 0-10 bar, 4-20 mA, zmierzono 12 mA
p = (12 - 4) / (20 - 4) · 10 bar = 8/16 · 10 = 5 bar</pre>
<div class="tip">Czujnik 2-przewodowy 4-20 mA jest zasilany z tej samej pętli, w której przesyła sygnał. Prąd poniżej 3,6 mA lub powyżej 21 mA zwykle oznacza błąd czujnika (NAMUR NE43).</div>` },
        { tytul: "Silniki, falowniki, serwonapędy", tresc: `<h4>Silnik indukcyjny klatkowy</h4>
<p>Prędkość synchroniczna <b>n<sub>s</sub> = 60·f/p</b> (p: liczba par biegunów). Przy 50 Hz: p = 1 → 3000 obr/min, p = 2 → 1500, p = 3 → 1000, p = 4 → 750. Wirnik obraca się nieco wolniej; <b>poślizg s = (n<sub>s</sub> - n)/n<sub>s</sub></b>, typowo 2-6%. Silnik z tabliczką 1440 obr/min ma 2 pary biegunów i poślizg 4%.</p>
<h4>Tabliczka znamionowa i połączenia</h4>
<p>Oznaczenie <b>230/400 V Δ/Y</b>: w sieci 3 × 400 V uzwojenia łączymy w <b>gwiazdę</b>, w sieci 3 × 230 V w trójkąt. Rozruch gwiazda-trójkąt wymaga silnika o napięciu 400 V w trójkącie (400/690 V); prąd i moment rozruchowy maleją 3 razy. Zmiana kierunku obrotów: zamiana dwóch faz. Moc na tabliczce to moc <b>mechaniczna na wale</b>. Moc pobierana: P = √3·U·I·cosφ.</p>
<pre>Moment znamionowy: M = 9550 · P[kW] / n[obr/min]
P = 4 kW, n = 1440 obr/min → M = 9550·4/1440 ≈ 26,5 N·m</pre>
<h4>Falownik</h4>
<p>Przemiennik częstotliwości: prostownik, obwód pośredni DC (kondensatory), falownik z tranzystorami IGBT (modulacja PWM). Reguluje prędkość przez zmianę częstotliwości, utrzymując stosunek <b>U/f = const</b> (400 V / 50 Hz). Podstawowe parametry do ustawienia: dane z tabliczki silnika (moc, napięcie, prąd, prędkość, cosφ), częstotliwość minimalna i maksymalna, czasy rozpędzania i hamowania, źródło sterowania (zaciski, panel, sieć), źródło zadawania (potencjometr 0-10 V, 4-20 mA). Zbyt krótki czas hamowania powoduje błąd przepięcia w obwodzie DC; rozwiązaniem jest dłuższa rampa lub rezystor hamujący.</p>
<h4>Inne napędy</h4>
<ul>
<li><b>Silnik krokowy</b>: obrót o stały kąt na impuls (typowo 1,8° = 200 kroków/obr), sterowanie w pętli otwartej, przy przeciążeniu gubi kroki. Mikrokrok zwiększa płynność.</li>
<li><b>Serwonapęd</b>: silnik synchroniczny z magnesami trwałymi i enkoderem, regulacja w zamkniętej pętli położenia, prędkości i prądu (momentu).</li>
<li>Silnik DC: prędkość reguluje się napięciem twornika, kierunek zmianą biegunowości (mostek H).</li>
</ul>
<div class="tip">Przed pracami przy falowniku odczekaj czas rozładowania kondensatorów obwodu DC podany na obudowie (zwykle 5-15 minut). Po wyłączeniu sieci napięcie DC ok. 560 V może się jeszcze utrzymywać.</div>` }
      ],
      pytania: [
        Q("Do wykrywania plastikowych detali należy zastosować czujnik", "pojemnościowy", "indukcyjny", "kontaktronowy", "magnetyczny Halla", "Czujnik indukcyjny reaguje tylko na metale."),
        Q("Czujnik PNP w stanie aktywnym podaje na wyjście", "potencjał +24 V", "potencjał 0 V", "napięcie przemienne", "prąd 4-20 mA", "PNP jest czujnikiem źródłowym."),
        Q("Rezystancja czujnika Pt100 w temperaturze 0°C wynosi", "100 Ω", "0 Ω", "138,5 Ω", "1000 Ω", "138,5 Ω odpowiada 100°C."),
        Q("Przetwornik 0-10 bar z wyjściem 4-20 mA podaje 12 mA. Ciśnienie wynosi", "5 bar", "6 bar", "4 bar", "7,5 bar", "(12-4)/16 · 10 bar."),
        Q("Prędkość synchroniczna silnika indukcyjnego o 2 parach biegunów przy 50 Hz wynosi", "1500 obr/min", "3000 obr/min", "1000 obr/min", "750 obr/min", "n = 60·50/2."),
        Q("Silnik o tabliczce 230/400 V Δ/Y zasilany z sieci 3 × 400 V należy połączyć w", "gwiazdę", "trójkąt", "gwiazdę-trójkąt z przełącznikiem", "układ szeregowo-równoległy", "W trójkąt łączy się go dla sieci 3 × 230 V."),
        Q("Enkoder, który po zaniku zasilania zachowuje informację o położeniu, to enkoder", "absolutny", "inkrementalny", "z wyjściem A/B", "tachometryczny", "Inkrementalny po włączeniu wymaga bazowania."),
        Q("Falownik przy zmianie prędkości silnika utrzymuje w podstawowym trybie stały stosunek", "napięcia do częstotliwości", "prądu do napięcia", "mocy do prądu", "poślizgu do częstotliwości", "Sterowanie skalarne U/f = const.")
      ]
    },
    {
      id: "instalacje", tytul: "Instalacje elektryczne i ochrona", opis: "Zmontujesz obwody stycznikowo-przekaźnikowe, dobierzesz zabezpieczenia i wykonasz pomiary ochronne.",
      lekcje: [
        { tytul: "Aparatura zabezpieczająca", tresc: `<h4>Wyłączniki nadprądowe (MCB)</h4>
<p>Oznaczenie np. <b>B16</b>: charakterystyka B, prąd znamionowy 16 A. Chronią przewody przed przeciążeniem (wyzwalacz termiczny, bimetal) i zwarciem (wyzwalacz elektromagnetyczny).</p>
<div class="tw"><table><tr><th>Charakterystyka</th><th>Wyzwolenie zwarciowe</th><th>Zastosowanie</th></tr>
<tr><td>B</td><td>3-5 × I<sub>n</sub></td><td>gniazda, oświetlenie, obwody mieszkaniowe</td></tr>
<tr><td>C</td><td>5-10 × I<sub>n</sub></td><td>silniki, odbiorniki z prądem rozruchowym</td></tr>
<tr><td>D</td><td>10-20 × I<sub>n</sub></td><td>transformatory, duże prądy rozruchowe</td></tr></table></div>
<h4>Wyłącznik różnicowoprądowy (RCD)</h4>
<p>Porównuje prąd fazowy i neutralny. Wyzwala, gdy różnica (prąd upływu) przekroczy <b>I<sub>Δn</sub></b>. Ochrona przed porażeniem (ochrona uzupełniająca): <b>30 mA</b>; ochrona przeciwpożarowa: 300 mA lub 500 mA. Typy: <b>AC</b> (prądy sinusoidalne), <b>A</b> (także pulsujące), <b>F</b>, <b>B</b> (także gładkie stałe, wymagany np. przy falownikach i ładowarkach). RCD nie chroni przed przeciążeniem, chyba że jest to wyłącznik RCBO (różnicowoprądowy z członem nadprądowym). Przycisk TEST naciska się okresowo (np. co miesiąc).</p>
<h4>Ochrona silnika</h4>
<ul>
<li><b>Przekaźnik termobimetalowy</b> współpracuje ze stycznikiem; nastawia się go na <b>prąd znamionowy silnika</b> z tabliczki. Jego styk rozwierny (95-96) włącza się szeregowo w obwód cewki stycznika.</li>
<li><b>Wyłącznik silnikowy</b> (np. z nastawą 6,3-10 A) łączy człon termiczny, zwarciowy i łącznik ręczny.</li>
<li>Zabezpieczenie zaniku fazy, termistorowe PTC w uzwojeniu.</li>
</ul>
<h4>Stycznik</h4>
<p>Łącznik elektromagnetyczny do częstych łączeń obwodów mocy. Zaciski: cewka <b>A1-A2</b>, styki główne 1-2, 3-4, 5-6 (L1-T1, L2-T2, L3-T3), styki pomocnicze: zwierne <b>13-14</b> (końcówka 3-4), rozwierne <b>21-22</b> (końcówka 1-2). Kategoria użytkowania <b>AC-3</b> dotyczy rozruchu i wyłączania silników klatkowych.</p>
<h4>Dobór przewodu</h4>
<p>Warunek: I<sub>B</sub> ≤ I<sub>n</sub> ≤ I<sub>z</sub> (prąd obciążenia ≤ prąd zabezpieczenia ≤ obciążalność przewodu). Orientacyjnie: przewód Cu 1,5 mm² z zabezpieczeniem B10 (oświetlenie), 2,5 mm² z B16 (gniazda). Kolory: <b>L</b> brązowy, czarny, szary; <b>N</b> niebieski; <b>PE</b> zielono-żółty.</p>
<div class="tip">Pytanie częste: „Jaki prąd ustawić na przekaźniku termicznym?”. Prąd znamionowy silnika z tabliczki, a nie prąd zabezpieczenia ani rozruchowy.</div>` },
        { tytul: "Układy stycznikowo-przekaźnikowe", tresc: `<h4>Symbole i oznaczenia</h4>
<p>Oznaczenia literowe wg PN-EN 81346: <b>Q</b> (łączniki obwodów mocy, styczniki, wyłączniki), <b>K</b> (przekaźniki), <b>S</b> (przyciski, łączniki sterownicze), <b>F</b> (zabezpieczenia), <b>M</b> (silniki), <b>P</b> (lampki sygnalizacyjne), <b>B</b> (czujniki). Na schemacie styki rysuje się w stanie bez zasilania (cewki nie zasilone, przyciski nie wciśnięte).</p>
<h4>Załączanie z samopodtrzymaniem</h4>
<pre>L ── F2 ── S0 (NC) ──┬── S1 (NO) ──┬── F1 (95-96) ── K1 (A1-A2) ── N
                     └── K1 (13-14)┘</pre>
<p>Naciśnięcie S1 zasila cewkę K1, stycznik zamyka styk pomocniczy 13-14 równoległy do S1 i podtrzymuje się. S0 (stop, rozwierny) przerywa obwód. Przycisk STOP zawsze ma styk rozwierny i jest szeregowo; przy przerwie przewodu maszyna zatrzymuje się (zasada bezpieczeństwa).</p>
<h4>Nawrót silnika</h4>
<p>Dwa styczniki K1 (prawo) i K2 (lewo) zamieniają dwie fazy. Wymagane <b>blokady</b>:</p>
<ul>
<li><b>elektryczna</b>: styk rozwierny K2 w obwodzie cewki K1 i odwrotnie (np. 21-22);</li>
<li><b>mechaniczna</b>: blokada montowana między stycznikami;</li>
<li>przyciskowa: styki rozwierne przycisków w obwodzie przeciwnego stycznika (umożliwia nawrót bez naciskania STOP).</li>
</ul>
<p>Brak blokady oznacza zwarcie międzyfazowe przy jednoczesnym załączeniu.</p>
<h4>Rozruch gwiazda-trójkąt</h4>
<p>Styczniki: sieciowy K1, gwiazdy K2, trójkąta K3 oraz przekaźnik czasowy. Po starcie K1 i K2 (gwiazda), po kilku sekundach przekaźnik czasowy wyłącza K2 i załącza K3. K2 i K3 muszą być wzajemnie zablokowane.</p>
<h4>Przekaźniki czasowe</h4>
<p>Opóźnione załączenie (TON, styki z symbolem „spadochronu”) i opóźnione wyłączenie (TOF). Przekaźniki programowalne (np. LOGO!, Easy, Zelio) zastępują układy stykowe programem.</p>
<h4>Kolejność montażu szafy</h4>
<ol>
<li>Montaż szyn TH35 i korytek, aparatów zgodnie z rozmieszczeniem.</li>
<li>Okablowanie mocy, potem sterowania, opisanie przewodów i listew zaciskowych (X1).</li>
<li>Sprawdzenie ciągłości i izolacji, próba bez obwodu mocy, próba z silnikiem.</li>
</ol>
<div class="tip">Na schemacie styk 13-14 to styk zwierny pomocniczy, 21-22 rozwierny. Pierwsza cyfra to numer kolejny styku, druga jego funkcja.</div>` },
        { tytul: "Ochrona przeciwporażeniowa i pomiary", tresc: `<h4>Układy sieci</h4>
<p>Oznaczenia: pierwsza litera to połączenie źródła z ziemią (T uziemione, I izolowane), druga to połączenie części przewodzących (T ziemia, N przewód sieci). <b>TN-S</b>: osobne N i PE w całej instalacji; <b>TN-C</b>: wspólny PEN; <b>TN-C-S</b>: rozdzielenie PEN na N i PE w złączu; <b>TT</b>: uziemienie odbiorników osobnym uziomem; <b>IT</b>: źródło izolowane (szpitale, kopalnie).</p>
<h4>Ochrona przy uszkodzeniu</h4>
<p>Samoczynne wyłączenie zasilania w układzie TN: czas wyłączenia dla obwodów do 32 A przy 230 V wynosi <b>0,4 s</b>. Warunek skuteczności:</p>
<pre>Z_s · I_a ≤ U_0
I_a dla B16 = 5 · 16 = 80 A
Z_s max = 230 / 80 = 2,87 Ω
Zmierzone Z_s = 1,2 Ω → ochrona skuteczna</pre>
<p>Dla charakterystyki C mnożnik 10 (C16: I<sub>a</sub> = 160 A, Z<sub>s</sub> ≤ 1,44 Ω).</p>
<h4>Pomiary odbiorcze i okresowe</h4>
<div class="tw"><table><tr><th>Pomiar</th><th>Przyrząd</th><th>Wymaganie</th></tr>
<tr><td>Ciągłość przewodów ochronnych</td><td>miernik niskich rezystancji (prąd min. 200 mA)</td><td>wartość mała, porównywalna z obliczoną</td></tr>
<tr><td>Rezystancja izolacji</td><td>induktor 500 V DC (dla obwodów do 500 V)</td><td>≥ 1 MΩ (dla SELV/PELV 250 V, ≥ 0,5 MΩ)</td></tr>
<tr><td>Impedancja pętli zwarcia</td><td>miernik pętli</td><td>Z<sub>s</sub> ≤ U<sub>0</sub>/I<sub>a</sub></td></tr>
<tr><td>Wyłączniki RCD</td><td>tester RCD</td><td>wyzwolenie przy prądzie 0,5-1 × I<sub>Δn</sub>, czas ≤ 300 ms (przy I<sub>Δn</sub>)</td></tr>
<tr><td>Rezystancja uziemienia</td><td>miernik uziemień (metoda techniczna, sondy)</td><td>zależna od układu</td></tr></table></div>
<p>Pomiar izolacji wykonuje się przy wyłączonym zasilaniu, odłączonych odbiornikach i elementach elektronicznych (napięcie probiercze może je uszkodzić).</p>
<h4>Stopnie ochrony IP</h4>
<p>Pierwsza cyfra (0-6) ochrona przed ciałami stałymi i dotykiem, druga (0-8, 9K) przed wodą. <b>IP44</b>: ciała powyżej 1 mm i bryzgi wody; <b>IP65</b>: pyłoszczelna, strumień wody; <b>IP67</b>: chwilowe zanurzenie.</p>
<h4>Bezpieczeństwo maszyn</h4>
<p>Wyłącznik bezpieczeństwa (grzybek, czerwony na żółtym tle) działa w kategorii zatrzymania 0 lub 1, styki z wymuszonym rozwarciem. Kurtyny świetlne, rygle drzwi, przekaźniki bezpieczeństwa z kontrolą obwodów. Prace przy urządzeniach wymagają świadectwa kwalifikacyjnego <b>E</b> (eksploatacja) lub <b>D</b> (dozór).</p>
<div class="tip">Kolejność czynności przed pracą: wyłączenie napięcia, zabezpieczenie przed ponownym załączeniem (kłódka, tabliczka), sprawdzenie braku napięcia, uziemienie i zwarcie (w sieciach powyżej 1 kV), ogrodzenie miejsca pracy.</div>` }
      ],
      pytania: [
        Q("Wyłącznik nadprądowy do zabezpieczenia obwodu silnika z dużym prądem rozruchowym powinien mieć charakterystykę", "C", "B", "A", "Z", "Charakterystyka C wyzwala zwarciowo przy 5-10 × In."),
        Q("Wyłącznik różnicowoprądowy realizujący ochronę uzupełniającą przed porażeniem ma prąd różnicowy", "30 mA", "300 mA", "10 A", "500 mA", "300 i 500 mA stosuje się jako ochronę przeciwpożarową."),
        Q("Przekaźnik termobimetalowy silnika nastawia się na", "prąd znamionowy silnika", "prąd rozruchowy silnika", "prąd wyzwalania wyłącznika nadprądowego", "dwukrotny prąd znamionowy", "Wartość odczytuje się z tabliczki znamionowej."),
        Q("Zaciski 13-14 na styczniku oznaczają", "pomocniczy styk zwierny", "pomocniczy styk rozwierny", "cewkę", "tor prądowy fazy L1", "Końcówka 3-4 to styk zwierny, 1-2 rozwierny."),
        Q("Maksymalna impedancja pętli zwarcia dla obwodu z wyłącznikiem B16 przy U0 = 230 V wynosi około", "2,87 Ω", "1,44 Ω", "14,4 Ω", "0,4 Ω", "Ia = 5 · 16 = 80 A, 230/80 = 2,87 Ω."),
        Q("Pomiar rezystancji izolacji w instalacji 230/400 V wykonuje się napięciem", "500 V DC", "230 V AC", "50 V AC", "2500 V DC", "Dla obwodów do 500 V stosuje się 500 V DC."),
        Q("W układzie nawrotnym silnika blokada elektryczna polega na włączeniu", "styku rozwiernego jednego stycznika w obwód cewki drugiego", "styku zwiernego jednego stycznika w obwód cewki drugiego", "dwóch styczników szeregowo", "bezpiecznika między stycznikami", "Zapobiega jednoczesnemu załączeniu i zwarciu faz."),
        Q("Stopień ochrony IP67 oznacza obudowę", "pyłoszczelną, odporną na chwilowe zanurzenie", "chronioną przed bryzgami wody", "bez ochrony przed wodą", "chronioną przed ciałami większymi niż 12 mm", "6: pyłoszczelna, 7: chwilowe zanurzenie.")
      ]
    }
  ]);

  pod("ELM.06", [
    {
      id: "plc-budowa", tytul: "Sterownik PLC od podstaw", opis: "Opiszesz budowę i cykl pracy PLC, zaadresujesz wejścia i wyjścia oraz podłączysz czujniki i sygnały analogowe.",
      lekcje: [
        { tytul: "Budowa i cykl pracy sterownika", tresc: `<h4>Elementy sterownika</h4>
<ul>
<li><b>Zasilacz</b> (zwykle 24 V DC lub 230 V AC), <b>CPU</b> z pamięcią programu i danych, moduły <b>wejść</b> i <b>wyjść</b> cyfrowych (DI/DO), analogowych (AI/AO), moduły komunikacyjne, liczniki szybkie (HSC), wyjścia impulsowe (PTO) do silników krokowych.</li>
<li>Sterowniki kompaktowe (np. S7-1200, FX5U, LOGO!) mają wbudowane I/O, modułowe (S7-1500) składają się z kaset i modułów.</li>
<li>Pamięć: program w pamięci nieulotnej (Flash, karta), dane z zaznaczeniem <b>remanencji</b> (zachowywane po zaniku zasilania).</li>
</ul>
<h4>Cykl pracy (skan)</h4>
<ol>
<li>Odczyt stanu wszystkich wejść do <b>obrazu procesu wejść</b> (PII).</li>
<li>Wykonanie programu od góry do dołu, operacje na obrazie wejść i wyjść.</li>
<li>Zapis obrazu procesu wyjść (PIQ) na fizyczne wyjścia.</li>
<li>Komunikacja i autodiagnostyka.</li>
</ol>
<p>Czas cyklu wynosi zwykle kilka milisekund. Sygnał krótszy niż czas cyklu może nie zostać odczytany, dlatego do szybkich impulsów (enkoder) używa się liczników szybkich lub przerwań. <b>Watchdog</b> zatrzymuje CPU przy przekroczeniu maksymalnego czasu cyklu (np. nieskończona pętla).</p>
<h4>Tryby pracy</h4>
<p><b>RUN</b>: wykonanie programu; <b>STOP</b>: wyjścia wyłączone (lub w stanie zastępczym), można wgrywać program; diody <b>ERROR / SF</b> sygnalizują błąd. Przy zmianie programu online (download w RUN) część sterowników pozwala na edycję bez zatrzymania.</p>
<h4>Norma IEC 61131-3</h4>
<div class="tw"><table><tr><th>Język</th><th>Rodzaj</th><th>Typowe zastosowanie</th></tr>
<tr><td>LD (LAD)</td><td>graficzny, drabinkowy</td><td>logika stykowa, łatwy dla elektryków</td></tr>
<tr><td>FBD</td><td>graficzny, bloki funkcyjne</td><td>logika, regulacja, przetwarzanie sygnałów</td></tr>
<tr><td>ST (SCL)</td><td>tekstowy, podobny do Pascala</td><td>obliczenia, algorytmy, pętle</td></tr>
<tr><td>IL (STL)</td><td>tekstowy, lista instrukcji</td><td>wycofywany z normy (wersja 3)</td></tr>
<tr><td>SFC</td><td>graficzny, sekwencyjny</td><td>procesy krokowe</td></tr></table></div>
<p>Jednostki organizacyjne programu: <b>PROGRAM</b>, <b>FUNCTION_BLOCK</b> (blok z pamięcią, wymaga instancji, np. timer), <b>FUNCTION</b> (bez pamięci, wynik zależy tylko od wejść). W Siemens: OB1 (cykliczny blok główny), FC, FB z blokiem danych instancji DB.</p>
<div class="tip">Pułapka: jeśli ta sama cewka (wyjście) jest wpisana w programie dwa razy, decyduje ostatni zapis w cyklu. To częsty błąd w zadaniach praktycznych.</div>` },
        { tytul: "Adresowanie i typy danych", tresc: `<h4>Adresy</h4>
<div class="tw"><table><tr><th>Obszar</th><th>Siemens</th><th>IEC 61131 (np. CODESYS)</th><th>Mitsubishi</th></tr>
<tr><td>Wejście bitowe</td><td>I0.0 (E0.0 w wersji niem.)</td><td>%IX0.0</td><td>X0</td></tr>
<tr><td>Wyjście bitowe</td><td>Q0.0 (A0.0)</td><td>%QX0.0</td><td>Y0</td></tr>
<tr><td>Merker (pamięć)</td><td>M10.3</td><td>%MX10.3</td><td>M0</td></tr>
<tr><td>Słowo wejścia analog.</td><td>IW64</td><td>%IW64</td><td>D (rejestr)</td></tr></table></div>
<p>Adres <b>I0.7</b>: bajt 0, bit 7. Bity numeruje się 0-7, więc po I0.7 następuje <b>I1.0</b>, a nie I0.8. Słowo MW10 składa się z bajtów MB10 i MB11, podwójne słowo MD10 z MB10-MB13. Dlatego MW10 i MW11 <b>nakładają się</b> (wspólny bajt MB11), a kolejne słowa adresuje się co 2: MW10, MW12.</p>
<h4>Typy danych</h4>
<div class="tw"><table><tr><th>Typ</th><th>Rozmiar</th><th>Zakres / przykład</th></tr>
<tr><td>BOOL</td><td>1 bit</td><td>TRUE / FALSE</td></tr>
<tr><td>BYTE</td><td>8 bitów</td><td>16#00..16#FF</td></tr>
<tr><td>WORD</td><td>16 bitów</td><td>ciąg bitów, bez znaku</td></tr>
<tr><td>INT</td><td>16 bitów</td><td>-32 768..32 767</td></tr>
<tr><td>DINT</td><td>32 bity</td><td>ok. ±2,1 mld</td></tr>
<tr><td>REAL</td><td>32 bity</td><td>zmiennoprzecinkowy, np. 12.5</td></tr>
<tr><td>TIME</td><td>32 bity</td><td>T#5s, T#1m30s, T#200ms</td></tr></table></div>
<p>Operacje matematyczne wymagają zgodnych typów; do łączenia INT i REAL trzeba konwersji (<code>INT_TO_REAL</code>, w nowszych środowiskach <code>CONVERT</code>). Dzielenie liczb całkowitych odrzuca część ułamkową (7 / 2 = 3).</p>
<h4>Zmienne symboliczne</h4>
<p>W nowoczesnych środowiskach (TIA Portal, CODESYS, GX Works3) programuje się na <b>zmiennych symbolicznych</b> z tablicy zmiennych (tag table), np. <code>Start_S1</code> = %I0.0, <code>Silnik_K1</code> = %Q0.0. Ułatwia to czytanie programu i dokumentację. Zmienne lokalne bloku: IN, OUT, IN_OUT, STATIC (pamiętana w instancji), TEMP (tymczasowa, ginie po wykonaniu bloku).</p>
<div class="tip">Na egzaminie często jest tabela przyporządkowania (symbol, adres, opis). Wypełnij ją przed pisaniem programu i trzymaj się jej, to część oceny.</div>` },
        { tytul: "Podłączenie wejść, wyjść i analogów", tresc: `<h4>Wejścia cyfrowe 24 V DC</h4>
<p>Wejścia typu <b>sink</b> (ujścia prądu) współpracują z czujnikami <b>PNP</b>: wspólny zacisk wejść (1M) łączy się z 0 V, czujnik podaje +24 V na wejście. Wejścia <b>source</b> z czujnikami NPN: wspólny zacisk na +24 V. Wiele sterowników umożliwia oba warianty zależnie od podłączenia zacisku wspólnego. Stan „1” to napięcie powyżej ok. 15 V, „0” poniżej ok. 5 V.</p>
<h4>Wyjścia cyfrowe</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zalety</th><th>Wady</th></tr>
<tr><td>Przekaźnikowe</td><td>AC i DC, różne napięcia, separacja, prąd do 2 A</td><td>wolne, ograniczona liczba łączeń, nie do PWM</td></tr>
<tr><td>Tranzystorowe</td><td>szybkie (PWM, impulsy), trwałe</td><td>tylko DC, mały prąd (0,5 A)</td></tr>
<tr><td>Triakowe</td><td>obciążenia AC, bezstykowe</td><td>prąd upływu w stanie wyłączenia</td></tr></table></div>
<p>Obciążenia indukcyjne (cewki styczników) na wyjściach tranzystorowych DC wymagają diody gaszącej, na AC warystora lub układu RC. Większe silniki załącza się zawsze przez stycznik, nigdy bezpośrednio z wyjścia.</p>
<h4>Sygnały analogowe i skalowanie</h4>
<p>Moduł AI zamienia napięcie lub prąd na liczbę. W Siemens S7 zakres nominalny to <b>0..27 648</b> (0-10 V lub 0-20 mA; dla 4-20 mA także 0..27 648). Skalowanie liniowe do jednostek fizycznych:</p>
<pre>Wartosc = (Raw - RawMin) / (RawMax - RawMin) * (Max - Min) + Min
Czujnik 0..150 °C, Raw = 13 824
T = 13824 / 27648 * 150 = 0,5 * 150 = 75 °C</pre>
<p>W TIA Portal służą do tego funkcje <code>NORM_X</code> (normalizacja do 0.0-1.0) i <code>SCALE_X</code> (przeliczenie na zakres), w starszych SCALE (FC105). Wyjście analogowe działa odwrotnie, np. zadawanie prędkości falownikowi napięciem 0-10 V.</p>
<h4>Ekranowanie i zakłócenia</h4>
<ul>
<li>Przewody sygnałów analogowych: ekranowane, skręcane, ekran uziemiony jednostronnie (zwykle przy szafie).</li>
<li>Prowadzenie osobno od przewodów mocy i falowników.</li>
<li>Nieużywane wejścia analogowe prądowe zwiera się lub wyłącza w konfiguracji, aby nie generowały błędu przerwy.</li>
</ul>
<div class="tip">Zadanie typowe: „Jaką wartość odczyta PLC przy 5 V na wejściu 0-10 V?”. Odpowiedź: połowa zakresu, czyli 13 824 dla S7. Dla innych producentów zakres może wynosić 0-4000 lub 0-32 000, sprawdź dokumentację w zadaniu.</div>` }
      ],
      pytania: [
        Q("W cyklu pracy PLC po odczycie wejść do obrazu procesu następuje", "wykonanie programu", "zapis wyjść", "autodiagnostyka zasilacza", "zerowanie merkerów", "Kolejność: wejścia, program, wyjścia, komunikacja."),
        Q("Po adresie wejścia I0.7 następny adres bitowy to", "I1.0", "I0.8", "I0.10", "I1.7", "Bity w bajcie numeruje się 0-7."),
        Q("Słowo MW10 składa się z bajtów", "MB10 i MB11", "MB10 i MB12", "MB9 i MB10", "MB10, MB11, MB12 i MB13", "MD10 to MB10-MB13."),
        Q("Typ danych INT zajmuje", "16 bitów", "8 bitów", "32 bity", "1 bit", "Zakres -32 768..32 767."),
        Q("Do sterowania wyjściem PWM należy wybrać sterownik z wyjściami", "tranzystorowymi", "przekaźnikowymi", "triakowymi", "analogowymi prądowymi", "Przekaźniki są za wolne i szybko się zużywają."),
        Q("Wejścia PLC typu sink współpracują z czujnikami", "PNP", "NPN", "tylko kontaktronowymi", "tylko analogowymi", "Czujnik PNP podaje +24 V na wejście."),
        Q("Czujnik temperatury 0-150°C podaje do S7 wartość 13 824 (zakres 0-27 648). Temperatura wynosi", "75°C", "50°C", "100°C", "13,8°C", "13 824 to połowa zakresu."),
        Q("Język IEC 61131-3 przypominający Pascal, stosowany do obliczeń i algorytmów, to", "ST", "LD", "FBD", "SFC", "W Siemens nazywany SCL.")
      ]
    },
    {
      id: "lad", tytul: "Programowanie w LAD", opis: "Napiszesz w języku drabinkowym programy z samopodtrzymaniem, zboczami, timerami i licznikami.",
      lekcje: [
        { tytul: "Styki, cewki i samopodtrzymanie", tresc: `<h4>Elementy podstawowe</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Nazwa</th><th>Działanie</th></tr>
<tr><td><code>--| |--</code></td><td>styk zwierny (NO)</td><td>przewodzi, gdy zmienna = 1</td></tr>
<tr><td><code>--|/|--</code></td><td>styk rozwierny (NC)</td><td>przewodzi, gdy zmienna = 0</td></tr>
<tr><td><code>--( )--</code></td><td>cewka</td><td>zmienna = wynik szczebla</td></tr>
<tr><td><code>--(S)--</code></td><td>ustawienie (set)</td><td>wpisuje 1 i pamięta</td></tr>
<tr><td><code>--(R)--</code></td><td>kasowanie (reset)</td><td>wpisuje 0</td></tr>
<tr><td><code>--|P|--</code>, <code>--|N|--</code></td><td>zbocze narastające / opadające</td><td>impuls przez 1 cykl</td></tr></table></div>
<p>Styki szeregowo to <b>AND</b>, równolegle to <b>OR</b>. Szczebel wykonywany jest od lewej szyny do prawej, szczeble od góry do dołu.</p>
<h4>Ważna zasada: styk NC czujnika fizycznego</h4>
<p>Przycisk STOP podłącza się fizycznie jako rozwierny (bezpieczeństwo przy przerwie przewodu). Wtedy w stanie spoczynku wejście I0.1 = 1. W programie używa się więc styku <b>zwiernego</b> <code>--| |--</code> dla I0.1: przewodzi, dopóki STOP nie jest wciśnięty. Użycie styku NC w programie dla fizycznego styku NC to klasyczny błąd: silnik nigdy się nie uruchomi.</p>
<h4>Samopodtrzymanie z priorytetem wyłączenia</h4>
<pre>      Start_I0.0     Stop_I0.1   Termik_I0.2      Silnik_Q0.0
 |----| |-------+-----| |-----------| |-------------( )----|
 |              |
 |  Silnik_Q0.0 |
 |----| |-------+</pre>
<p>Ten sam efekt dają instrukcje S/R lub blok <b>SR</b> (priorytet ustawienia) i <b>RS</b> (priorytet kasowania). Dla napędów stosuje się priorytet kasowania (STOP ma pierwszeństwo).</p>
<h4>Zbocza</h4>
<p>Zbocze narastające (P_TRIG, R_TRIG) daje impuls trwający jeden cykl, gdy sygnał zmienia się z 0 na 1. Stosowane do zliczania, przełączania „jednym przyciskiem” (flip-flop) i do uniknięcia wielokrotnego wykonania operacji. Przykład przełączania lampy jednym przyciskiem I0.0:</p>
<pre>Szczebel 1:  I0.0 --|P|-- (flaga M1.0)  → cewka M0.0 (impuls 1 cykl)
Szczebel 2:  M0.0 AND NOT Lampa → ( ) M0.1
             M0.0 AND Lampa     → (R) Lampa
Szczebel 3:  M0.1               → (S) Lampa</pre>
<p>Krócej: Lampa := Lampa XOR M0.0. Bez zbocza lampa przełączałaby się w każdym cyklu, dopóki przycisk jest wciśnięty.</p>
<div class="tip">Blokada wzajemna w nawrocie silnika w PLC: w szczeblu Q0.0 (prawo) dodaj styk NC Q0.1 (lewo) i odwrotnie. Blokadę sprzętową styków styczników i tak trzeba zachować w obwodzie cewek.</div>` },
        { tytul: "Timery: TON, TOF, TP", tresc: `<h4>Rodzaje timerów IEC</h4>
<div class="tw"><table><tr><th>Timer</th><th>Działanie wyjścia Q</th><th>Przykład</th></tr>
<tr><td><b>TON</b> (opóźnione załączenie)</td><td>Q = 1 po czasie PT od pojawienia się IN = 1; zanik IN zeruje timer natychmiast</td><td>start taśmy 5 s po sygnale ostrzegawczym</td></tr>
<tr><td><b>TOF</b> (opóźnione wyłączenie)</td><td>Q = 1 od razu przy IN = 1; po zaniku IN wyłącza się po czasie PT</td><td>wentylator pracuje 2 min po wyłączeniu</td></tr>
<tr><td><b>TP</b> (impuls)</td><td>przy zboczu IN daje impuls o długości PT, niezależnie od dalszego IN</td><td>impuls 0,5 s na zawór</td></tr>
<tr><td>TONR (z pamięcią)</td><td>sumuje czas przy przerwach IN, kasowany osobnym wejściem R</td><td>licznik czasu pracy</td></tr></table></div>
<p>Wejścia i wyjścia: <b>IN</b> start, <b>PT</b> czas zadany (T#5s), <b>Q</b> wyjście, <b>ET</b> czas, który upłynął. Każdy timer to blok funkcyjny i wymaga osobnej instancji (DB lub zmiennej typu TON).</p>
<h4>Przykład: generator impulsów (miganie lampki 1 Hz)</h4>
<pre>T1: TON  IN := NOT T2.Q   PT := T#500ms
T2: TON  IN := T1.Q       PT := T#500ms
Lampka := T1.Q</pre>
<p>T1 odlicza 0,5 s i załącza się; T2 po kolejnych 0,5 s przerywa T1, który się zeruje i cykl się powtarza. Wiele sterowników ma też gotowe bity zegarowe (w S7 bajt <b>Clock memory</b>, np. M0.5 = 1 Hz).</p>
<h4>Przykład: sygnalizacja przed startem</h4>
<pre>Start (I0.0) ustawia M0.0 (pamięć „żądanie startu”)
M0.0 → syrena Q0.1 i TON T1 (PT = T#3s)
T1.Q → ustaw Silnik Q0.0, kasuj M0.0
Stop (I0.1 = 0) → kasuj Q0.0 i M0.0</pre>
<h4>Typowe błędy</h4>
<ul>
<li>TON sterowany sygnałem impulsowym (przycisk) nie doliczy do końca: wejście IN musi trwać cały czas PT. Rozwiązanie: pamięć (S/R) przed timerem lub timer TP.</li>
<li>Użycie tej samej instancji timera w dwóch miejscach programu.</li>
<li>Pomylenie ET z PT: porównanie czasu wykonuje się na ET.</li>
<li>Czas w starych timerach S5 (S_ODT) zapisywany jako S5T#5S.</li>
</ul>
<div class="tip">Zapamiętaj: TON opóźnia początek, TOF opóźnia koniec, TP wydłuża lub skraca impuls do stałej długości.</div>` },
        { tytul: "Liczniki, porównania i operacje na liczbach", tresc: `<h4>Liczniki IEC</h4>
<div class="tw"><table><tr><th>Licznik</th><th>Wejścia</th><th>Wyjście</th></tr>
<tr><td><b>CTU</b> (w górę)</td><td>CU (zliczanie zboczy), R (kasowanie), PV (wartość zadana)</td><td>Q = 1, gdy CV ≥ PV</td></tr>
<tr><td><b>CTD</b> (w dół)</td><td>CD, LD (ładowanie PV do CV), PV</td><td>Q = 1, gdy CV ≤ 0</td></tr>
<tr><td><b>CTUD</b></td><td>CU, CD, R, LD, PV</td><td>QU (CV ≥ PV), QD (CV ≤ 0)</td></tr></table></div>
<p>Licznik reaguje na <b>zbocze narastające</b> wejścia CU, więc nie trzeba dodawać osobnego P_TRIG. Aktualna wartość jest w <b>CV</b>. Kasowanie R ma priorytet nad zliczaniem.</p>
<h4>Przykład: pakowanie po 10 sztuk</h4>
<pre>C1: CTU  CU := Czujnik_I0.3   R := Reset_I0.4 OR C1.Q_opozn
         PV := 10
C1.Q → zatrzymanie taśmy Q0.0 i start TON 3 s (wymiana kartonu)
po 3 s → kasowanie licznika i ponowny start taśmy</pre>
<h4>Porównania</h4>
<p>Bloki <code>==</code>, <code>&lt;&gt;</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code> działają w LAD jak styk: przewodzą, gdy warunek jest spełniony. Typy porównywanych zmiennych muszą być zgodne (INT z INT, REAL z REAL). Przykład: lampka „zbiornik pełny” świeci, gdy Poziom &gt;= 90.0. Z porównaniami buduje się histerezę:</p>
<pre>Temp &lt; 20.0  → ustaw Grzałka (S)
Temp &gt; 22.0  → kasuj Grzałka (R)
(regulacja dwustawna z histerezą 2 °C)</pre>
<h4>Operacje arytmetyczne i transfer</h4>
<ul>
<li><code>MOVE</code>: kopiuje wartość IN do OUT (np. wpisanie receptury, wyzerowanie zmiennej).</li>
<li><code>ADD, SUB, MUL, DIV, MOD</code>: działają po spełnieniu warunku na wejściu EN; wyjście ENO sygnalizuje poprawność (np. brak dzielenia przez 0).</li>
<li>Instrukcja wykonana warunkowo bez zbocza wykonuje się w <b>każdym cyklu</b>: <code>ADD 1</code> przy wciśniętym przycisku zwiększy wartość o kilkaset, nie o 1.</li>
<li>Przesunięcia <code>SHL, SHR</code>, rotacje <code>ROL, ROR</code>: rejestry przesuwne, śledzenie detali na taśmie.</li>
</ul>
<div class="tip">Pułapka egzaminacyjna: licznik CTU z PV = 5 ma Q = 1 przy CV = 5 i większych, a nie dopiero po szóstym impulsie. Zliczanie trwa dalej, dopóki nie skasujesz licznika.</div>` }
      ],
      pytania: [
        Q("Przycisk STOP podłączony fizycznie jako rozwierny w programie LAD należy użyć jako styk", "zwierny (NO)", "rozwierny (NC)", "zbocza opadającego", "cewki reset", "W spoczynku wejście ma stan 1, styk NO przewodzi do momentu wciśnięcia."),
        Q("Dwa styki połączone szeregowo w LAD realizują funkcję", "AND", "OR", "XOR", "NOT", "Szczebel przewodzi tylko, gdy oba styki przewodzą."),
        Q("Timer, którego wyjście załącza się dopiero po upływie czasu od podania sygnału na wejście, to", "TON", "TOF", "TP", "CTU", "TON to opóźnione załączenie."),
        Q("Wentylator ma pracować jeszcze 2 minuty po wyłączeniu urządzenia. Należy użyć timera", "TOF", "TON", "TP", "CTD", "TOF opóźnia wyłączenie."),
        Q("Licznik CTU z PV = 5 ustawi wyjście Q, gdy wartość CV", "osiągnie 5", "osiągnie 6", "spadnie do 0", "przekroczy 5", "Q = 1 dla CV ≥ PV."),
        Q("Instrukcja ADD 1 wykonywana warunkowo przy wciśniętym przycisku bez zbocza spowoduje", "zwiększanie wartości w każdym cyklu", "jednorazowe zwiększenie o 1", "błąd kompilacji programu", "zatrzymanie CPU w stanie STOP", "Należy użyć zbocza narastającego."),
        Q("Blok RS w odróżnieniu od SR ma priorytet", "kasowania", "ustawiania", "zbocza narastającego", "wejścia zegarowego", "W RS przy obu wejściach aktywnych wyjście = 0."),
        Q("Wejście PT bloku TON określa", "czas zadany", "czas, który upłynął", "wyjście timera", "wejście kasujące", "ET to czas bieżący.")
      ]
    },
    {
      id: "fbd-st", tytul: "Języki FBD, ST i SFC", opis: "Przełożysz logikę na bloki FBD, napiszesz kod w ST i zaprojektujesz sekwencję krokową SFC/GRAFCET.",
      lekcje: [
        { tytul: "Bloki funkcyjne FBD", tresc: `<h4>Zasada FBD</h4>
<p>Program składa się z bloków połączonych liniami sygnałowymi; sygnał płynie od wejść (lewa strona) do wyjść (prawa). Podstawowe bloki logiczne: <b>AND</b> (w Siemens oznaczany &amp;), <b>OR</b> (≥1), <b>XOR</b> (=1), <b>NOT</b> (kółko negacji na wejściu lub wyjściu bloku). Negację można postawić bezpośrednio przy wejściu bloku, co odpowiada stykowi NC w LAD.</p>
<h4>Przekład LAD na FBD</h4>
<pre>LAD:  (I0.0 OR Q0.0) AND I0.1 AND I0.2  → Q0.0

FBD:  I0.0 ─┐
            ≥1 ─┐
      Q0.0 ─┘   │
      I0.1 ─────&amp;──── = Q0.0
      I0.2 ─────┘</pre>
<p>Blok przypisania „=” odpowiada cewce. Bloki <b>S</b>, <b>R</b>, <b>SR</b>, <b>RS</b>, timery i liczniki rysuje się jako prostokąty z opisanymi wejściami.</p>
<h4>Przykład: kontrola dwuręczna</h4>
<p>Prasa ma ruszyć tylko, gdy oba przyciski wciśnięto w odstępie nie dłuższym niż 0,5 s.</p>
<pre>OR(S1, S2) → TP T1 (PT = T#500ms)   // okno czasowe od pierwszego przycisku
AND(S1, S2, T1.Q) → S Prasa
NOT S1 OR NOT S2 → R Prasa</pre>
<p>Uwaga: rzeczywiste układy dwuręczne w maszynach muszą spełniać normę PN-EN ISO 13851 i są realizowane przez przekaźnik lub sterownik bezpieczeństwa; program w zwykłym PLC to tylko ćwiczenie.</p>
<h4>FBD w regulacji</h4>
<p>FBD jest naturalny dla bloków przetwarzania sygnałów: skalowanie (NORM_X, SCALE_X), ograniczniki (LIMIT), wybór (SEL, MUX), regulator <b>PID</b> (np. PID_Compact). Wejścia regulatora: wartość zadana (Setpoint), wartość mierzona (Input), wyjście (Output) sterujące np. falownikiem.</p>
<h4>Właściwości bloków</h4>
<ul>
<li>EN (enable) i ENO (enable output): blok wykonuje się, gdy EN = 1; ENO = 0 przy błędzie (np. przepełnienie).</li>
<li>Kolejność wykonywania sieci: od góry do dołu, w obrębie sieci zgodnie z przepływem sygnału.</li>
<li>Wyjście bloku można podłączyć do kilku wejść (rozgałęzienie), ale dwa wyjścia nie mogą sterować jednym wejściem.</li>
</ul>
<div class="tip">Na egzaminie bramkę „≥1” czytaj jako OR, „&amp;” jako AND, „=1” jako XOR. Kółko przy wejściu to negacja tylko tego jednego sygnału.</div>` },
        { tytul: "Tekst strukturalny ST", tresc: `<h4>Składnia</h4>
<ul>
<li>Przypisanie <code>:=</code>, porównanie <code>=</code>, różne <code>&lt;&gt;</code>; każda instrukcja kończy się średnikiem.</li>
<li>Operatory logiczne: <code>AND</code> (lub &amp;), <code>OR</code>, <code>XOR</code>, <code>NOT</code>. Arytmetyczne: + - * / <code>MOD</code>, potęga <code>**</code>.</li>
<li>Komentarze: <code>// linia</code> lub <code>(* blok *)</code>.</li>
<li>Stałe: <code>T#2s</code>, <code>16#FF</code>, <code>2#1010</code>, <code>TRUE</code>.</li>
</ul>
<h4>Instrukcje sterujące</h4>
<pre>IF Temp &gt; 80.0 THEN
    Alarm := TRUE;
ELSIF Temp &gt; 60.0 THEN
    Wentylator := TRUE;
ELSE
    Wentylator := FALSE;
END_IF;

CASE Krok OF
    0: IF Start THEN Krok := 10; END_IF;
    10: Silownik_A := TRUE;
        IF A1 THEN Krok := 20; END_IF;
    20: Silownik_A := FALSE;
        IF A0 THEN Krok := 0; END_IF;
END_CASE;

FOR i := 1 TO 10 DO
    Suma := Suma + Tab[i];
END_FOR;</pre>
<p>Są też pętle <code>WHILE ... DO ... END_WHILE</code> i <code>REPEAT ... UNTIL ... END_REPEAT</code>. Pętle w PLC muszą się szybko kończyć: pętla czekająca na sygnał z wejścia zawiesi cykl i wyzwoli watchdog, bo wejścia odświeżają się dopiero po zakończeniu cyklu.</p>
<h4>Wywołanie timera i samopodtrzymanie w ST</h4>
<pre>Silnik := (Start OR Silnik) AND Stop AND NOT Awaria;

T_Opozn(IN := Silnik, PT := T#5s);
Wentylator := T_Opozn.Q;

R_Start(CLK := Przycisk);        // R_TRIG, zbocze
IF R_Start.Q THEN Licznik := Licznik + 1; END_IF;</pre>
<h4>Różnica w działaniu przypisań</h4>
<p><code>Lampa := Czujnik;</code> zachowuje się jak cewka (lampa gaśnie z czujnikiem). <code>IF Czujnik THEN Lampa := TRUE; END_IF;</code> działa jak <b>Set</b>: lampa zostaje zapalona, dopóki coś jej nie wyzeruje.</p>
<div class="tip">Częsty błąd: użycie „=” zamiast „:=” w przypisaniu. W ST „=” to porównanie i kompilator zgłosi błąd albo instrukcja nic nie zrobi.</div>` },
        { tytul: "Sekwencje: SFC i GRAFCET", tresc: `<h4>Elementy SFC</h4>
<ul>
<li><b>Krok</b> (prostokąt): stan procesu, z przypisanymi akcjami. Krok początkowy ma podwójną ramkę, jest aktywny po starcie.</li>
<li><b>Tranzycja</b> (pozioma kreska): warunek przejścia z kroku do kroku, np. czujnik A1, upływ czasu <code>Krok2.T &gt; T#3s</code>.</li>
<li><b>Akcje</b> z kwalifikatorami: <b>N</b> (aktywna, dopóki krok aktywny), <b>S</b> (ustaw, pamiętana), <b>R</b> (kasuj), <b>L</b> (ograniczona czasowo), <b>D</b> (opóźniona), <b>P</b> (impuls).</li>
<li>Rozgałęzienia: <b>alternatywne</b> (wybór jednej ścieżki, pojedyncza linia, warunki wzajemnie wykluczające się) i <b>równoległe</b> (podwójna linia, kilka ścieżek naraz, synchronizacja na końcu).</li>
</ul>
<h4>Przykład sekwencji podajnika A+ B+ A- B-</h4>
<pre>[[K0]]  oczekiwanie
  ── Start AND A0 AND B0
[K1]  N: Y1 (A+)
  ── A1
[K2]  S: Y3 (B+)
  ── B1
[K3]  R: Y1 → A-
  ── A0
[K4]  R: Y3 → B-
  ── B0 → powrót do K0</pre>
<h4>Realizacja sekwencji w LAD lub ST</h4>
<p>Jeśli sterownik nie obsługuje SFC, sekwencję programuje się metodą znaczników kroków (merkery M0.0..M0.4 ustawiane i kasowane S/R: krok n+1 ustawia się, gdy aktywny jest krok n i spełniony warunek, jednocześnie krok n jest kasowany) albo instrukcją <code>CASE</code> na zmiennej Krok (przykład w lekcji ST). Wyjścia przypisuje się w osobnej sekcji na podstawie aktywnych kroków, np. <code>Y1 := K1;</code>. Dzięki temu jedna cewka jest sterowana tylko w jednym miejscu.</p>
<h4>GRAFCET i tryby pracy</h4>
<p>GRAFCET (PN-EN 60848) to norma opisu sekwencji, zbliżona do SFC. W projekcie maszyny wyróżnia się tryby: <b>automatyczny</b> (cykl ciągły), <b>półautomatyczny</b> (jeden cykl po starcie), <b>ręczny</b> (ruchy pojedynczych osi do ustawiania), <b>bazowanie</b> (powrót do położenia początkowego). Po zatrzymaniu awaryjnym sekwencja jest resetowana, a ponowny start wymaga bazowania i świadomego potwierdzenia.</p>
<div class="tip">Kwalifikator S w SFC ustawia akcję trwale: wyjście pozostaje aktywne po opuszczeniu kroku, aż do akcji R w innym kroku. Z kwalifikatorem N wyjście gaśnie przy wyjściu z kroku.</div>` }
      ],
      pytania: [
        Q("Symbol „≥1” na bloku FBD oznacza funkcję", "OR", "AND", "XOR", "NOT", "Wyjście = 1, gdy co najmniej jedno wejście = 1."),
        Q("W języku ST operatorem przypisania jest", ":=", "=", "==", "=>", "Pojedynczy znak równości to porównanie."),
        Q("Instrukcja ST: IF Czujnik THEN Lampa := TRUE; END_IF; zachowuje się jak", "ustawienie (Set) lampy", "cewka zwykła", "kasowanie lampy", "timer TON", "Brak gałęzi ELSE, więc lampa nie zgaśnie sama."),
        Q("Pętla w ST oczekująca na zmianę sygnału wejściowego spowoduje", "przekroczenie czasu cyklu (watchdog)", "poprawne oczekiwanie na sygnał", "automatyczne odświeżenie wejść", "przejście sterownika w tryb ręczny", "Wejścia odświeżają się dopiero po zakończeniu cyklu."),
        Q("Krok początkowy w diagramie SFC oznacza się", "podwójną ramką", "linią przerywaną", "pogrubioną tranzycją", "kółkiem", "Jest aktywny po starcie sterownika."),
        Q("Rozgałęzienie równoległe w SFC oznacza", "jednoczesne wykonywanie kilku ścieżek", "wybór jednej z kilku ścieżek", "powrót do kroku początkowego", "zatrzymanie sekwencji", "Rysuje się je podwójną linią poziomą."),
        Q("Kwalifikator akcji N w SFC oznacza, że akcja jest", "aktywna tylko w czasie aktywności kroku", "ustawiona trwale", "opóźniona", "wykonywana jednorazowo impulsem", "S ustawia, D opóźnia, P daje impuls."),
        Q("Wywołanie timera w ST ma postać", "T1(IN := Start, PT := T#5s);", "T1 := TON(Start, 5);", "TON T1 = Start + 5s;", "CALL TIMER(5s);", "Blok funkcyjny wywołuje się przez instancję z parametrami.")
      ]
    },
    {
      id: "sieci-roboty", tytul: "Sieci, HMI i roboty", opis: "Skonfigurujesz komunikację przemysłową, zaprojektujesz ekran HMI i opiszesz programowanie robota.",
      lekcje: [
        { tytul: "Sieci przemysłowe", tresc: `<h4>Piramida automatyki</h4>
<p>Poziom czujników i elementów wykonawczych (AS-i, IO-Link), poziom sterowania (PROFIBUS, PROFINET, EtherCAT, Modbus), poziom nadrzędny (SCADA, MES) i zarządzania (ERP).</p>
<div class="tw"><table><tr><th>Sieć</th><th>Medium</th><th>Cechy</th></tr>
<tr><td><b>Modbus RTU</b></td><td>RS-485</td><td>master-slave, adresy 1-247, do 32 urządzeń na segment bez wzmacniaka, kontrola CRC</td></tr>
<tr><td><b>Modbus TCP</b></td><td>Ethernet</td><td>port 502, model klient-serwer</td></tr>
<tr><td><b>PROFIBUS DP</b></td><td>RS-485</td><td>do 12 Mbit/s, adresy 0-125, terminatory na końcach linii, kabel fioletowy</td></tr>
<tr><td><b>PROFINET</b></td><td>Ethernet</td><td>urządzenia identyfikowane nazwą (device name), czas rzeczywisty RT i IRT, kabel zielony</td></tr>
<tr><td><b>AS-i</b></td><td>kabel żółty płaski 2-żyłowy</td><td>zasilanie i dane jednym przewodem, do 62 slave'ów</td></tr>
<tr><td><b>IO-Link</b></td><td>3-żyłowy kabel czujnika</td><td>komunikacja punkt-punkt z czujnikiem, parametryzacja i diagnostyka</td></tr>
<tr><td>CAN, CANopen</td><td>para skręcana</td><td>motoryzacja, napędy</td></tr></table></div>
<h4>Rejestry Modbus</h4>
<p>Coils (bity wyjściowe, odczyt i zapis, funkcje 01, 05, 15), Discrete Inputs (bity tylko do odczytu, 02), Holding Registers (16-bitowe rejestry odczyt i zapis, funkcje 03, 06, 16), Input Registers (16-bitowe tylko odczyt, 04). Parametry transmisji RTU muszą być identyczne we wszystkich urządzeniach: prędkość (np. 9600 lub 19200 bit/s), bity danych, parzystość, bity stopu (np. 8E1).</p>
<h4>RS-485 i terminacja</h4>
<p>Topologia magistrali (linia), skrętka ekranowana, rezystory <b>terminujące ok. 120 Ω</b> tylko na obu końcach (w PROFIBUS włączane przełącznikiem na wtyku). Brak lub nadmiar terminatorów to częsta przyczyna błędów transmisji.</p>
<h4>Ethernet przemysłowy</h4>
<p>Adres IP i maska muszą być w tej samej podsieci: PLC 192.168.0.1/24, HMI 192.168.0.2/24, PC 192.168.0.10/24. Dwa urządzenia z tym samym adresem IP to konflikt. W PROFINET kontroler przypisuje urządzeniu IP na podstawie jego nazwy, dlatego po wymianie modułu należy nadać nowemu tę samą nazwę.</p>
<div class="tip">Pytanie typowe: „Ile wynosi maksymalna liczba urządzeń slave w Modbus RTU?”. Adresy 1-247 (0 to adres rozgłoszeniowy).</div>` },
        { tytul: "Panele HMI i systemy SCADA", tresc: `<h4>Rola HMI</h4>
<p>Panel operatorski (HMI) wizualizuje proces i umożliwia sterowanie: przyciski programowe, pola wejścia/wyjścia, wskaźniki, trendy, alarmy, receptury. <b>SCADA</b> to system nadrzędny na komputerze PC, zbiera dane z wielu sterowników, archiwizuje je i raportuje (np. WinCC, Wonderware, iFIX).</p>
<h4>Zmienne HMI</h4>
<ul>
<li>Zmienne <b>zewnętrzne</b> (połączone z adresami PLC przez sieć) i <b>wewnętrzne</b> (tylko w panelu).</li>
<li>Przycisk na panelu nie powinien sterować bezpośrednio wyjściem: ustawia bit w pamięci (np. M20.0 lub zmienną w DB), a program PLC decyduje o załączeniu, uwzględniając blokady.</li>
<li>Przycisk dotykowy zwykle realizuje funkcję <b>SetBit</b> przy naciśnięciu i <b>ResetBit</b> przy puszczeniu (przycisk chwilowy) albo InvertBit (przełącznik).</li>
<li>Czas odświeżania zmiennych (np. 100 ms, 1 s) wpływa na obciążenie sieci.</li>
</ul>
<h4>Projektowanie ekranów</h4>
<div class="tw"><table><tr><th>Zasada</th><th>Opis</th></tr>
<tr><td>Kolory zgodne z normą</td><td>czerwony: alarm, stop; żółty: ostrzeżenie; zielony: praca normalna; niebieski: wymagana czynność</td></tr>
<tr><td>Hierarchia ekranów</td><td>ekran główny, ekrany obszarów, szczegóły, alarmy, ustawienia</td></tr>
<tr><td>Poziomy dostępu</td><td>operator, technik, administrator (hasła, logowanie)</td></tr>
<tr><td>Ograniczenia wartości</td><td>min. i maks. w polu wejścia, np. prędkość 0-1500 obr/min</td></tr></table></div>
<h4>Alarmy</h4>
<p>Alarmy <b>bitowe</b> (dyskretne: bit = 1 oznacza zdarzenie) i <b>analogowe</b> (przekroczenie progu). Każdy alarm ma stany: pojawił się (come), zniknął (go), potwierdzony (acknowledge). Klasy alarmów: błędy wymagające potwierdzenia, ostrzeżenia, komunikaty systemowe. Historia alarmów pozwala analizować awarie.</p>
<h4>Trendy i archiwizacja</h4>
<p>Wykresy wartości w czasie (temperatura, ciśnienie), archiwa na karcie SD lub w bazie danych, eksport do CSV. Receptury zapisują zestawy parametrów (np. dla różnych produktów) i przesyłają je do PLC jednym poleceniem.</p>
<div class="tip">Przycisk awaryjnego zatrzymania nigdy nie może być realizowany tylko na ekranie HMI. Musi być fizyczny grzybek w obwodzie bezpieczeństwa.</div>` },
        { tytul: "Roboty przemysłowe", tresc: `<h4>Rodzaje robotów</h4>
<div class="tw"><table><tr><th>Typ</th><th>Osie</th><th>Zastosowanie</th></tr>
<tr><td>Przegubowy (antropomorficzny)</td><td>6 osi obrotowych</td><td>spawanie, malowanie, paletyzacja</td></tr>
<tr><td>SCARA</td><td>4 osie</td><td>szybki montaż w płaszczyźnie</td></tr>
<tr><td>Kartezjański (bramowy)</td><td>3 osie liniowe X, Y, Z</td><td>przenoszenie, CNC, druk 3D</td></tr>
<tr><td>Delta</td><td>3-4 osie, ramiona równoległe</td><td>bardzo szybkie pakowanie (pick and place)</td></tr>
<tr><td>Kolaboracyjny (cobot)</td><td>6-7 osi</td><td>praca obok człowieka z ograniczeniem siły</td></tr></table></div>
<p>Liczba <b>stopni swobody</b> określa możliwości ruchu; do dowolnego pozycjonowania i orientacji narzędzia w przestrzeni potrzeba 6.</p>
<h4>Układy współrzędnych</h4>
<ul>
<li><b>Osi (Joint)</b>: ruch każdej osi osobno.</li>
<li><b>Bazowy / światowy (World, Base)</b>: X, Y, Z względem podstawy robota lub celi.</li>
<li><b>Narzędzia (Tool, TCP)</b>: punkt środkowy narzędzia, np. końcówka chwytaka lub palnika; musi być skalibrowany.</li>
<li><b>Użytkownika / obiektu (User, Work object)</b>: związany z przedmiotem lub paletą, umożliwia przesunięcie całego programu.</li>
</ul>
<h4>Programowanie</h4>
<p>Metody: <b>uczenie</b> (teach-in) panelem ręcznym (teach pendant) z zapamiętywaniem punktów, programowanie <b>offline</b> w symulatorze (RobotStudio, RoboGuide), prowadzenie ręczne (coboty). Rodzaje ruchów:</p>
<pre>MoveJ p10, v1000, z50, tool1;   // ruch osiowy, najszybszy, tor nieliniowy
MoveL p20, v200, fine, tool1;   // ruch liniowy TCP, dokładne zatrzymanie
MoveC p30, p40, v100, z10, tool1; // ruch po okręgu
(przykład w składni ABB RAPID; KUKA: PTP, LIN, CIRC; Fanuc: J, L, C)</pre>
<p>Strefa (z50) pozwala płynnie „zaokrąglić” przejście przez punkt, <b>fine</b> wymusza dokładne osiągnięcie punktu (np. przy chwytaniu). Robot wymienia sygnały z PLC przez wejścia/wyjścia lub sieć (gotowość, start programu, numer programu, chwytak zamknięty).</p>
<h4>Bezpieczeństwo</h4>
<p>Cela robota musi być wygrodzona, drzwi z ryglem bezpieczeństwa, kurtyny świetlne lub skanery laserowe. W trybie ręcznym (T1) prędkość TCP jest ograniczona do <b>250 mm/s</b> i wymagany jest przycisk zezwolenia (enabling, trzypozycyjny). Tryb automatyczny tylko przy zamkniętej celi.</p>
<div class="tip">Ruch MoveJ (PTP) jest najszybszy, ale tor narzędzia jest nieprzewidywalny. Przy zbliżaniu się do detalu i w ciasnej przestrzeni stosuje się ruch liniowy.</div>` }
      ],
      pytania: [
        Q("Rezystory terminujące w magistrali RS-485 montuje się", "tylko na obu końcach linii", "przy każdym urządzeniu", "tylko przy urządzeniu master", "w środku magistrali", "Typowo ok. 120 Ω na każdym końcu."),
        Q("Protokół Modbus TCP wykorzystuje standardowo port", "502", "80", "102", "8080", "Port 102 jest używany przez S7 ISO-on-TCP."),
        Q("Urządzenia w sieci PROFINET kontroler rozpoznaje przede wszystkim po", "nazwie urządzenia (device name)", "adresie PROFIBUS", "numerze seryjnym CPU", "kolorze kabla", "Na podstawie nazwy przypisywany jest adres IP."),
        Q("Kolor czerwony na ekranie HMI zgodnie z zasadami oznacza", "alarm lub stan niebezpieczny", "pracę normalną", "wymaganą czynność operatora", "stan wyłączenia bez błędu", "Zielony to praca normalna, niebieski czynność obowiązkowa."),
        Q("Przycisk na panelu HMI powinien", "ustawiać bit w PLC, obsługiwany z blokadami", "sterować bezpośrednio wyjściem fizycznym", "zastępować wyłącznik bezpieczeństwa", "odłączać zasilanie jednostki CPU sterownika", "Program PLC uwzględnia warunki bezpieczeństwa."),
        Q("Robot o 4 osiach przeznaczony do szybkiego montażu w płaszczyźnie to robot", "SCARA", "przegubowy 6-osiowy", "kartezjański", "kolaboracyjny 7-osiowy", "Selective Compliance Assembly Robot Arm."),
        Q("Ruch robota, w którym punkt TCP porusza się po linii prostej, to ruch", "liniowy (MoveL, LIN)", "osiowy (MoveJ, PTP)", "kołowy (MoveC)", "bazowania", "MoveJ daje tor nieliniowy."),
        Q("Maksymalna prędkość TCP robota w trybie ręcznym T1 wynosi", "250 mm/s", "1000 mm/s", "50 mm/s", "2 m/s", "Wymagana jest też obsługa przycisku zezwolenia.")
      ]
    },
    {
      id: "eksploatacja", tytul: "Eksploatacja i diagnostyka", opis: "Zaplanujesz obsługę systemu mechatronicznego, zdiagnozujesz usterki PLC i dobierzesz nastawy regulatora.",
      lekcje: [
        { tytul: "Strategie utrzymania ruchu", tresc: `<h4>Rodzaje obsługi</h4>
<div class="tw"><table><tr><th>Strategia</th><th>Zasada</th><th>Przykład</th></tr>
<tr><td>Korekcyjna (awaryjna)</td><td>naprawa po awarii</td><td>tanie, niekrytyczne elementy</td></tr>
<tr><td>Prewencyjna (planowa)</td><td>wymiana według kalendarza lub motogodzin</td><td>wymiana filtra co 500 h</td></tr>
<tr><td>Predykcyjna (wg stanu)</td><td>wymiana, gdy pomiary wskazują zużycie</td><td>analiza drgań łożysk, termowizja</td></tr>
<tr><td>Proaktywna</td><td>usuwanie przyczyn awarii</td><td>poprawa osiowania, czystość oleju</td></tr></table></div>
<p><b>TPM</b> (Total Productive Maintenance) angażuje operatorów w codzienną obsługę: czyszczenie, smarowanie, inspekcję. Wskaźnik <b>OEE = dostępność × wydajność × jakość</b>; poziom światowy ok. 85%.</p>
<pre>Dostępność 0,90, wydajność 0,95, jakość 0,98
OEE = 0,90 · 0,95 · 0,98 ≈ 0,84 = 84%</pre>
<h4>Wskaźniki niezawodności</h4>
<ul>
<li><b>MTBF</b>: średni czas między awariami = czas pracy / liczba awarii.</li>
<li><b>MTTR</b>: średni czas naprawy.</li>
<li>Dostępność A = MTBF / (MTBF + MTTR). Przy MTBF = 190 h, MTTR = 10 h: A = 95%.</li>
<li>Krzywa „wannowa”: okres wczesnych awarii (docieranie), okres normalnej pracy (losowe), okres zużycia.</li>
</ul>
<h4>Dokumentacja eksploatacyjna</h4>
<p>Dokumentacja techniczno-ruchowa (DTR), instrukcja obsługi, harmonogram przeglądów, karta maszyny, rejestr napraw i awarii, deklaracja zgodności WE (oznakowanie CE wg dyrektywy maszynowej), schematy elektryczne i pneumatyczne, kopia zapasowa programu PLC i HMI (wersjonowanie, opis zmian).</p>
<h4>Czynności przeglądu systemu mechatronicznego</h4>
<ol>
<li>Kontrola wzrokowa: przewody, złącza, wycieki, luzy mechaniczne.</li>
<li>Pneumatyka: odwodnienie filtra, ciśnienie, szczelność, stan przewodów.</li>
<li>Elektryka: dokręcenie zacisków (termowizja wykazuje gorące połączenia), wentylatory i filtry szafy, test RCD i wyłącznika bezpieczeństwa.</li>
<li>Mechanika: smarowanie prowadnic, napięcie pasów, stan łożysk.</li>
<li>Sterowanie: bufor diagnostyczny, bateria podtrzymania, kopia programu.</li>
</ol>
<div class="tip">Na egzaminie pytanie o strategię „według stanu technicznego” dotyczy obsługi predykcyjnej, czyli diagnostyki (drgania, temperatura, analiza oleju), a nie sztywnego harmonogramu.</div>` },
        { tytul: "Diagnostyka sterownika i systemu", tresc: `<h4>Diagnostyka PLC</h4>
<ul>
<li><b>Diody</b> na CPU i modułach: RUN, STOP, ERROR/SF, MAINT, stan każdego wejścia i wyjścia. Świecąca dioda wejścia oznacza obecność napięcia na zacisku.</li>
<li><b>Bufor diagnostyczny</b>: lista zdarzeń z datą i godziną (przejścia STOP/RUN, błędy modułów, przekroczenie czasu cyklu, błąd adresowania).</li>
<li><b>Podgląd online</b> programu (monitorowanie stanów styków i wartości zmiennych w czasie rzeczywistym), tablice obserwacji (watch table).</li>
<li><b>Wymuszanie</b> (force): trwałe nadpisanie wejścia lub wyjścia niezależnie od programu. Bardzo niebezpieczne przy pracującej maszynie, aktywne wymuszenie sygnalizuje dioda FORCE. Po diagnostyce wymuszenia trzeba usunąć.</li>
<li>Modyfikacja (modify): jednorazowa zmiana wartości zmiennej, program może ją natychmiast nadpisać.</li>
</ul>
<h4>Metoda szukania usterki</h4>
<div class="tw"><table><tr><th>Objaw</th><th>Sprawdź</th><th>Wniosek</th></tr>
<tr><td>Dioda wejścia nie świeci po zadziałaniu czujnika</td><td>dioda na czujniku, napięcie zasilania czujnika, przewody</td><td>usterka czujnika lub okablowania, nie programu</td></tr>
<tr><td>Dioda wejścia świeci, program nie reaguje</td><td>adres w programie, podgląd online</td><td>błąd programu lub przypisania zmiennej</td></tr>
<tr><td>Dioda wyjścia świeci, siłownik nie działa</td><td>napięcie na cewce, bezpiecznik obwodu wyjść, cewka, ciśnienie powietrza</td><td>usterka po stronie wykonawczej</td></tr>
<tr><td>Wyjście nie załącza się, choć warunki spełnione</td><td>podwójne użycie cewki, blokada w programie</td><td>błąd logiki</td></tr>
<tr><td>CPU w STOP z błędem</td><td>bufor diagnostyczny</td><td>np. przekroczenie czasu cyklu, brak modułu</td></tr></table></div>
<h4>Diagnostyka napędów</h4>
<p>Falownik zapisuje kody błędów: przetężenie (zbyt krótka rampa rozruchu, zwarcie w silniku), przepięcie DC (zbyt szybkie hamowanie), przegrzanie, błąd fazy wyjściowej, błąd komunikacji. Silnik sprawdza się miernikiem izolacji (uzwojenie do obudowy) i pomiarem rezystancji uzwojeń (powinny być równe).</p>
<h4>Narzędzia</h4>
<p>Multimetr, miernik izolacji, oscyloskop, kamera termowizyjna, stetoskop i analizator drgań, manometr, analizator sieci przemysłowej (np. PROFINET), oprogramowanie inżynierskie z kopią projektu.</p>
<div class="tip">Zasada diagnozy PLC: zawsze zaczynaj od diod modułów I/O. Dzielą one system na część „przed sterownikiem” (czujniki), „w sterowniku” (program) i „za sterownikiem” (elementy wykonawcze).</div>` },
        { tytul: "Regulacja automatyczna i PID", tresc: `<h4>Układ regulacji</h4>
<p>Układ zamknięty: wartość zadana <b>w</b> (SP), wartość mierzona <b>y</b> (PV), uchyb <b>e = w - y</b>, sygnał sterujący <b>u</b> (CV) podawany na element wykonawczy (grzałka, zawór, falownik). Układ otwarty nie ma sprzężenia zwrotnego i nie koryguje zakłóceń.</p>
<h4>Regulatory</h4>
<div class="tw"><table><tr><th>Regulator</th><th>Działanie</th><th>Cechy</th></tr>
<tr><td>Dwustawny (on/off)</td><td>u = 0 lub 100% z histerezą</td><td>prosty, oscylacje wokół wartości zadanej (termostat)</td></tr>
<tr><td>P</td><td>u = K<sub>p</sub>·e</td><td>szybki, pozostawia uchyb ustalony</td></tr>
<tr><td>I</td><td>całkuje uchyb w czasie</td><td><b>likwiduje uchyb ustalony</b>, spowalnia, może powodować przeregulowanie</td></tr>
<tr><td>D</td><td>reaguje na szybkość zmian uchybu</td><td>tłumi oscylacje, wzmacnia szumy</td></tr>
<tr><td>PI</td><td>P + I</td><td>najczęstszy w praktyce (przepływ, ciśnienie)</td></tr>
<tr><td>PID</td><td>P + I + D</td><td>obiekty z dużą inercją (temperatura)</td></tr></table></div>
<p>Parametry: wzmocnienie <b>K<sub>p</sub></b> (lub zakres proporcjonalności X<sub>p</sub> = 100%/K<sub>p</sub>), czas zdwojenia <b>T<sub>i</sub></b>, czas wyprzedzenia <b>T<sub>d</sub></b>. Zwiększenie T<sub>i</sub> osłabia działanie całkujące.</p>
<h4>Ocena jakości regulacji</h4>
<ul>
<li>Przeregulowanie: o ile wartość przekracza zadaną (np. 10%).</li>
<li>Czas regulacji: po jakim czasie y mieści się w paśmie ±2% lub ±5%.</li>
<li>Uchyb ustalony: różnica po ustaleniu się przebiegu.</li>
</ul>
<h4>Dobór nastaw</h4>
<p>Metoda <b>Zieglera-Nicholsa</b> (wzbudzenia): przy wyłączonym I i D zwiększa się K<sub>p</sub> aż do stałych oscylacji (K<sub>kr</sub>, okres T<sub>osc</sub>). Nastawy PID: K<sub>p</sub> = 0,6·K<sub>kr</sub>, T<sub>i</sub> = 0,5·T<sub>osc</sub>, T<sub>d</sub> = 0,125·T<sub>osc</sub>; dla PI: K<sub>p</sub> = 0,45·K<sub>kr</sub>, T<sub>i</sub> = 0,85·T<sub>osc</sub>. Nowoczesne bloki (np. PID_Compact) mają <b>autotuning</b>: wstępną optymalizację i dokładną optymalizację w punkcie pracy.</p>
<h4>Praktyka w PLC</h4>
<p>Regulator wywołuje się w przerwaniu cyklicznym (stały czas próbkowania, np. 100 ms). Wyjście może być analogowe (0-10 V na zawór) lub impulsowe PWM (grzałka przez przekaźnik SSR). Funkcja anti-windup ogranicza narastanie członu I przy nasyceniu wyjścia.</p>
<div class="tip">Zapamiętaj: P daje szybką reakcję, ale zostawia uchyb; I usuwa uchyb ustalony; D przyspiesza reakcję na zmiany i tłumi oscylacje.</div>` }
      ],
      pytania: [
        Q("Obsługa polegająca na wymianie elementu na podstawie pomiarów jego stanu (np. drgań) to obsługa", "predykcyjna", "korekcyjna", "prewencyjna kalendarzowa", "awaryjna", "Opiera się na diagnostyce stanu technicznego."),
        Q("Wskaźnik OEE przy dostępności 0,9, wydajności 0,95 i jakości 0,98 wynosi około", "84%", "95%", "90%", "98%", "OEE to iloczyn trzech składników."),
        Q("Dostępność urządzenia przy MTBF = 190 h i MTTR = 10 h wynosi", "95%", "90%", "5%", "100%", "A = 190 / (190 + 10)."),
        Q("Dioda wejścia PLC świeci po zadziałaniu czujnika, ale program nie reaguje. Najbardziej prawdopodobna przyczyna to", "błąd w programie lub adresie zmiennej", "uszkodzony czujnik", "przerwany przewód czujnika", "brak zasilania czujnika", "Sygnał dociera do sterownika."),
        Q("Funkcja wymuszania (force) w PLC", "nadpisuje zmienną niezależnie od programu", "jednorazowo zmienia wartość zmiennej", "kasuje bufor diagnostyczny sterownika", "przełącza CPU w tryb STOP do restartu", "Wymuszenia sygnalizuje dioda FORCE i trzeba je usunąć."),
        Q("Człon regulatora likwidujący uchyb ustalony to człon", "całkujący I", "proporcjonalny P", "różniczkujący D", "dwustawny", "Całka sumuje uchyb aż do jego zniknięcia."),
        Q("Regulator dwustawny z histerezą powoduje", "oscylacje wokół wartości zadanej", "brak uchybu w każdej chwili", "płynne sterowanie mocą 0-100%", "pracę bez sprzężenia zwrotnego", "Typowy przykład to termostat."),
        Q("Kody błędu przepięcia w obwodzie DC falownika najczęściej wynikają ze", "zbyt krótkiego czasu hamowania", "zbyt długiego czasu rozruchu", "zbyt małego obciążenia przy rozruchu", "złego ustawienia języka panelu", "Energia hamowania podnosi napięcie DC; pomaga rezystor hamujący.")
      ]
    }
  ]);

  pod("MEC.03", [
    {
      id: "rysunek", tytul: "Rysunek techniczny maszynowy", opis: "Odczytasz rysunek wykonawczy i złożeniowy: rzuty, przekroje, tolerancje, pasowania i chropowatość.",
      lekcje: [
        { tytul: "Rzuty, przekroje i oznaczenia", tresc: `<h4>Rzutowanie europejskie (metoda E)</h4>
<p>W Polsce stosuje się metodę <b>E</b>: rzut z góry umieszcza się <b>pod</b> rzutem głównym (z przodu), rzut z lewej strony po <b>prawej</b> stronie rzutu głównego. Metoda amerykańska (A) ma układ odwrotny. Rzut główny wybiera się tak, by najlepiej pokazywał kształt przedmiotu i był położeniem roboczym lub obróbkowym.</p>
<h4>Linie rysunkowe</h4>
<div class="tw"><table><tr><th>Linia</th><th>Zastosowanie</th></tr>
<tr><td>Ciągła gruba</td><td>widoczne krawędzie i zarysy</td></tr>
<tr><td>Ciągła cienka</td><td>linie wymiarowe, pomocnicze, kreskowanie, zarys przekroju kładu</td></tr>
<tr><td>Kreskowa cienka</td><td>niewidoczne krawędzie</td></tr>
<tr><td>Punktowa cienka</td><td>osie symetrii, okręgi podziałowe kół zębatych</td></tr>
<tr><td>Punktowa gruba</td><td>powierzchnie podlegające dodatkowej obróbce (np. hartowaniu)</td></tr>
<tr><td>Falista lub zygzakowa cienka</td><td>urwanie i przerwanie widoku</td></tr></table></div>
<h4>Przekroje</h4>
<ul>
<li><b>Pełny</b>: płaszczyzna przechodzi przez cały przedmiot.</li>
<li><b>Półwidok-półprzekrój</b>: dla przedmiotów symetrycznych, granicą jest oś.</li>
<li><b>Cząstkowy</b>: fragment ograniczony linią falistą.</li>
<li><b>Łamany</b> i <b>stopniowy</b>: kilka płaszczyzn.</li>
<li><b>Kład</b>: przekrój obrócony o 90° i narysowany w widoku (kład miejscowy, linią cienką) lub obok (kład przesunięty).</li>
</ul>
<p>W przekroju podłużnym <b>nie kreskuje się</b> elementów pełnych: wałów, śrub, nitów, kołków, wpustów, żeber, ramion kół. Kreskowanie pod kątem 45°, różne elementy w złożeniu kreskuje się w przeciwnych kierunkach lub z inną gęstością.</p>
<h4>Gwinty i uproszczenia</h4>
<p>Gwint zewnętrzny: zarys średnicy zewnętrznej linią grubą, rdzenia cienką (na widoku czołowym 3/4 okręgu cienką). Oznaczenia: <b>M12</b> (metryczny zwykły, skok 1,75 mm), <b>M12×1,25</b> (drobnozwojowy), <b>Tr20×4</b> (trapezowy), <b>G1/2</b> (rurowy walcowy), <b>LH</b> (lewy). Pasowanie gwintu: 6H (nakrętka), 6g (śruba).</p>
<h4>Podziałki i formaty</h4>
<p>Podziałki zmniejszające: 1:2, 1:5, 1:10; zwiększające: 2:1, 5:1. Formaty: A4 (210 × 297 mm), A3 (297 × 420 mm), A0 ma 1 m². Wymiar wpisuje się zawsze <b>rzeczywisty</b>, niezależnie od podziałki.</p>
<div class="tip">Pułapka: na rysunku w podziałce 1:2 wałek o długości 100 mm jest narysowany jako 50 mm, ale wymiar wpisany to 100.</div>` },
        { tytul: "Tolerancje i pasowania", tresc: `<h4>Pojęcia podstawowe</h4>
<p><b>Wymiar nominalny</b> (N), odchyłka górna (ES dla otworu, es dla wałka), odchyłka dolna (EI, ei). <b>Tolerancja T = B - A</b> (wymiar górny minus dolny) = ES - EI. Przykład: Ø40<sup>+0,025</sup><sub>0</sub> → wymiary graniczne 40,000 i 40,025, tolerancja 0,025 mm.</p>
<h4>Układ ISO</h4>
<p>Zapis <b>Ø40H7</b>: litera określa położenie pola tolerancji (wielka dla otworu, mała dla wałka), cyfra klasę dokładności IT. Im mniejsza liczba, tym dokładniej (IT6, IT7 dla pasowań maszynowych, IT11-IT14 wymiary swobodne). Otwór <b>H</b> ma EI = 0, wałek <b>h</b> ma es = 0.</p>
<h4>Rodzaje pasowań</h4>
<div class="tw"><table><tr><th>Pasowanie</th><th>Warunek</th><th>Przykłady</th></tr>
<tr><td>Luźne</td><td>zawsze luz</td><td>H7/f7, H7/g6, H8/e8 (łożyska ślizgowe, części ruchome)</td></tr>
<tr><td>Mieszane</td><td>luz lub wcisk</td><td>H7/k6, H7/js6, H7/n6 (koła na wałach z wpustem, łożyska toczne)</td></tr>
<tr><td>Ciasne</td><td>zawsze wcisk</td><td>H7/p6, H7/s6, H7/u6 (tuleje wciskane, wieńce kół)</td></tr></table></div>
<p>Zasada <b>stałego otworu</b> (otwór H, zmienia się wałek) jest preferowana, bo wałek łatwiej obrabiać i mierzyć. Zasada <b>stałego wałka</b> (wałek h) stosowana np. przy wałkach ciągnionych i w złożeniach z kilkoma pasowaniami na jednym wałku.</p>
<h4>Obliczenie luzów</h4>
<pre>Otwór Ø30H7: ES = +0,021, EI = 0
Wałek Ø30g6: es = -0,007, ei = -0,020
Luz max = ES - ei = 0,021 - (-0,020) = 0,041 mm
Luz min = EI - es = 0 - (-0,007) = 0,007 mm
Oba dodatnie → pasowanie luźne</pre>
<p>Jeśli luz minimalny wychodzi ujemny, oznacza to wcisk; gdy luz max dodatni a min ujemny, pasowanie jest mieszane.</p>
<h4>Tolerancje geometryczne</h4>
<p>Ramka tolerancji: symbol, wartość, baza (litera). Kształtu: prostoliniowość, płaskość, okrągłość, walcowość. Kierunku: równoległość (//), prostopadłość, nachylenie. Położenia: pozycja, współosiowość, symetria. Bicia: bicie promieniowe i osiowe. Przykład: prostopadłość 0,02 względem bazy A.</p>
<div class="tip">Zapamiętaj kierunek alfabetu: dla wałków od a do h pasowania luźne, od js do n mieszane, od p do zc ciasne (przy otworze H).</div>` },
        { tytul: "Chropowatość, wymiarowanie, rysunek złożeniowy", tresc: `<h4>Chropowatość powierzchni</h4>
<p>Najczęściej podaje się parametr <b>Ra</b> (średnie arytmetyczne odchylenie profilu) w µm. Typowe wartości:</p>
<div class="tw"><table><tr><th>Ra [µm]</th><th>Obróbka</th></tr>
<tr><td>25-12,5</td><td>obróbka zgrubna, cięcie piłą</td></tr>
<tr><td>6,3-3,2</td><td>toczenie i frezowanie średnio dokładne</td></tr>
<tr><td>1,6-0,8</td><td>toczenie dokładne, szlifowanie</td></tr>
<tr><td>0,4-0,1</td><td>szlifowanie dokładne, docieranie, polerowanie</td></tr></table></div>
<p>Symbol podstawowy to „ptaszek”; z poziomą kreską oznacza obróbkę z usuwaniem materiału, z kółkiem bez usuwania. Oznaczenie zbiorcze w pobliżu tabliczki obejmuje powierzchnie bez osobnych oznaczeń. Rz to wysokość chropowatości (średnia z 5 największych wzniesień i wgłębień), zwykle Rz ≈ 4-7·Ra.</p>
<h4>Zasady wymiarowania</h4>
<ul>
<li>Wymiary podaje się w <b>milimetrach</b> bez jednostki. Każdy wymiar podaje się tylko raz.</li>
<li>Znaki: Ø średnica, R promień, □ kwadrat, SØ średnica kuli, × fazka (2×45°).</li>
<li>Łańcuch wymiarowy nie może być zamknięty: jeden wymiar zostawia się niewpisany lub jako pomocniczy w nawiasie.</li>
<li>Wymiarowanie od bazy (równoległe) ogranicza sumowanie się tolerancji; łańcuchowe sumuje odchyłki.</li>
<li>Tolerancje ogólne wymiarów swobodnych wg ISO 2768, np. ISO 2768-m (średnia klasa).</li>
</ul>
<h4>Rysunek złożeniowy</h4>
<p>Pokazuje zespół z oznaczonymi częściami (numery pozycji na liniach odniesienia zakończonych kropką), <b>tabelkę</b> (nazwa, nr rysunku, podziałka, materiał, autor) i <b>wykaz części</b> (pozycja, nazwa, ilość, materiał, norma dla części znormalizowanych). Wymiary na złożeniowym: gabarytowe, przyłączeniowe, montażowe i pasowania (np. Ø25H7/k6).</p>
<h4>Oznaczenia spoin</h4>
<p>Linia odniesienia ze strzałką do złącza, symbol spoiny: <b>pachwinowa</b> (trójkąt), czołowa I, V, X, otworowa. Liczba przed symbolem pachwinowej, np. <b>a5</b>, to grubość spoiny 5 mm. Flaga oznacza spoinę montażową wykonywaną na miejscu, okrąg spoinę obwodową.</p>
<div class="tip">Pytanie typowe: „Które oznaczenie chropowatości jest najdokładniejsze?”. Wybierz najmniejszą wartość Ra, np. Ra 0,4.</div>` }
      ],
      pytania: [
        Q("W metodzie rzutowania europejskiej rzut z góry umieszcza się", "pod rzutem głównym", "nad rzutem głównym", "po lewej stronie rzutu głównego", "po prawej stronie rzutu głównego", "Rzut z lewej leży po prawej stronie."),
        Q("Linią kreskową cienką rysuje się", "niewidoczne krawędzie", "osie symetrii", "widoczne krawędzie", "linie wymiarowe", "Osie rysuje się linią punktową cienką."),
        Q("W przekroju podłużnym zespołu nie kreskuje się", "wałów i śrub", "korpusów", "pokryw", "tulei", "Elementy pełne pokazuje się w widoku."),
        Q("Tolerancja wymiaru Ø40 z odchyłkami +0,025 i 0 wynosi", "0,025 mm", "0,050 mm", "40,025 mm", "0,0125 mm", "T = ES - EI."),
        Q("Pasowanie H7/g6 jest pasowaniem", "luźnym", "ciasnym", "mieszanym", "wciskowym na gorąco", "Wałek g leży poniżej linii zerowej."),
        Q("Dla otworu Ø30H7 (0; +0,021) i wałka Ø30g6 (-0,007; -0,020) luz maksymalny wynosi", "0,041 mm", "0,007 mm", "0,028 mm", "0,021 mm", "Lmax = ES - ei = 0,021 + 0,020."),
        Q("Najmniejszą chropowatość ma powierzchnia oznaczona", "Ra 0,4", "Ra 1,6", "Ra 6,3", "Ra 25", "Mniejsza wartość Ra to gładsza powierzchnia."),
        Q("Oznaczenie a5 przy symbolu spoiny pachwinowej oznacza", "grubość spoiny 5 mm", "długość spoiny 5 mm", "5 spoin", "kąt 5°", "a to grubość obliczeniowa spoiny pachwinowej.")
      ]
    },
    {
      id: "czesci", tytul: "Połączenia, łożyska i przekładnie", opis: "Dobierzesz połączenia, łożyska i przekładnie oraz obliczysz ich podstawowe parametry.",
      lekcje: [
        { tytul: "Połączenia rozłączne i nierozłączne", tresc: `<h4>Połączenia gwintowe</h4>
<p>Klasa własności mechanicznych śruby, np. <b>8.8</b>: pierwsza liczba × 100 = wytrzymałość na rozciąganie R<sub>m</sub> w MPa (800 MPa), iloczyn liczb × 10 = granica plastyczności R<sub>e</sub> (8 · 8 · 10 = 640 MPa). Klasy: 4.6, 5.6, 8.8, 10.9, 12.9. Nakrętka klasy 8 współpracuje ze śrubą 8.8.</p>
<p><b>Zabezpieczenia przed odkręceniem</b>: podkładka sprężysta, podkładka zębata, przeciwnakrętka, nakrętka z wkładką poliamidową, nakrętka koronowa z zawleczką, klej anaerobowy, podkładka odginana, drut. Śruby dokręca się <b>kluczem dynamometrycznym</b> z momentem z DTR, w kolejności „na krzyż” (od środka na zewnątrz dla pokryw).</p>
<h4>Połączenia kształtowe</h4>
<div class="tw"><table><tr><th>Połączenie</th><th>Cechy</th></tr>
<tr><td>Wpustowe</td><td>wpust pryzmatyczny A (zaokrąglony), B (prosty); przenosi moment, oznaczenie np. Wpust A 8×7×40</td></tr>
<tr><td>Klinowe</td><td>z napięciem wstępnym, przenosi też siły osiowe, powoduje mimośrodowość</td></tr>
<tr><td>Wielowypustowe</td><td>duże momenty, przesuwne koła w skrzyniach biegów</td></tr>
<tr><td>Kołkowe</td><td>ustalenie położenia (kołki ustalające walcowe, stożkowe 1:50)</td></tr>
<tr><td>Sworzniowe</td><td>połączenia przegubowe, zabezpieczone zawleczką lub pierścieniem osadczym</td></tr></table></div>
<h4>Połączenia nierozłączne</h4>
<ul>
<li><b>Spawane</b>: trwałe, szczelne, wymagają kwalifikacji spawacza; naprężenia i odkształcenia spawalnicze.</li>
<li><b>Nitowe</b>: konstrukcje lekkie, aluminium, materiały trudnospawalne; nity zrywalne (POP) przy dostępie z jednej strony.</li>
<li><b>Lutowane</b>: miękkie (do 450°C), twarde (powyżej 450°C, mosiądz, srebro).</li>
<li><b>Klejone</b>: łączenie różnych materiałów, równomierny rozkład naprężeń, wrażliwe na temperaturę i oddzieranie.</li>
<li><b>Wciskowe</b>: pasowanie ciasne; montaż na prasie, przez nagrzanie piasty (np. do 80-120°C indukcyjnie lub w oleju) lub ochłodzenie wałka (suchy lód, ciekły azot).</li>
</ul>
<div class="tip">Klasa śruby 10.9: Rm = 1000 MPa, Re = 900 MPa. Szybkie liczenie: druga liczba to stosunek Re/Rm × 10.</div>` },
        { tytul: "Łożyska toczne i ślizgowe", tresc: `<h4>Oznaczenia łożysk tocznych</h4>
<p>W oznaczeniu, np. <b>6205-2RS</b>: pierwsza cyfra typ (6 kulkowe zwykłe jednorzędowe), druga seria wymiarowa (2 lekka, 3 średnia), dwie ostatnie cyfry × 5 to <b>średnica otworu</b> d = 05 · 5 = 25 mm. Wyjątki: 00 = 10 mm, 01 = 12 mm, 02 = 15 mm, 03 = 17 mm. Przyrostki: <b>2RS</b> (uszczelnienia gumowe obustronne), <b>2Z</b> (blaszki ochronne), C3 (zwiększony luz promieniowy).</p>
<div class="tw"><table><tr><th>Cyfra typu</th><th>Łożysko</th><th>Obciążenie</th></tr>
<tr><td>6</td><td>kulkowe zwykłe</td><td>promieniowe i niewielkie osiowe</td></tr>
<tr><td>7</td><td>kulkowe skośne</td><td>promieniowe i osiowe w jednym kierunku, montaż parami</td></tr>
<tr><td>1, 2 (w starych oznaczeniach)</td><td>kulkowe wahliwe</td><td>kompensuje niewspółosiowość</td></tr>
<tr><td>N, NU</td><td>walcowe</td><td>duże promieniowe, brak osiowych (NU)</td></tr>
<tr><td>3</td><td>stożkowe</td><td>duże promieniowe i osiowe, regulacja luzu</td></tr>
<tr><td>5</td><td>wzdłużne kulkowe</td><td>tylko osiowe</td></tr>
<tr><td>NA</td><td>igiełkowe</td><td>mała przestrzeń promieniowa</td></tr></table></div>
<h4>Montaż łożysk</h4>
<ul>
<li>Pierścień obracający się względem obciążenia osadza się ciasno (zwykle wewnętrzny na wale, np. k5, m6), drugi luźniej (otwór obudowy H7).</li>
<li>Siłę wcisku przykłada się tylko do pierścienia, który jest wciskany. Uderzanie w pierścień zewnętrzny przy wciskaniu na wał przenosi siłę przez kulki i uszkadza bieżnie.</li>
<li>Duże łożyska nagrzewa się <b>nagrzewnicą indukcyjną</b> do ok. 80-100°C (maksymalnie 120°C), nigdy płomieniem.</li>
<li>Demontaż ściągaczem z siłą na ciasno osadzony pierścień.</li>
<li>Łożysko ustalające (przenosi siły osiowe) i swobodne (pozwala na wydłużenie cieplne wału).</li>
</ul>
<h4>Smarowanie i trwałość</h4>
<p>Smar plastyczny wypełnia 30-50% wolnej przestrzeni łożyska; nadmiar powoduje przegrzewanie. Trwałość nominalna <b>L<sub>10</sub> = (C/P)<sup>3</sup></b> mln obrotów dla łożysk kulkowych (wykładnik 10/3 dla wałeczkowych). Dwukrotny wzrost obciążenia skraca trwałość łożyska kulkowego 8 razy.</p>
<h4>Łożyska ślizgowe</h4>
<p>Panewki z brązu, stopów cyny (babbit), tworzyw, spieków porowatych nasyconych olejem. Pracują cicho, znoszą uderzenia, wymagają ciągłego smarowania; przy tarciu płynnym klin smarny oddziela czop od panewki.</p>
<div class="tip">Łożysko 6308 ma otwór 08 · 5 = 40 mm. Łożysko 6000 ma otwór 10 mm, nie 0 mm.</div>` },
        { tytul: "Przekładnie, sprzęgła, hamulce", tresc: `<h4>Przełożenie</h4>
<p><b>i = n<sub>1</sub>/n<sub>2</sub> = z<sub>2</sub>/z<sub>1</sub> = d<sub>2</sub>/d<sub>1</sub></b>. Przy i &gt; 1 przekładnia jest reduktorem (zwalnia, zwiększa moment). Dla przekładni wielostopniowej <b>i<sub>c</sub> = i<sub>1</sub>·i<sub>2</sub>·...</b>. Moment wyjściowy: M<sub>2</sub> = M<sub>1</sub>·i·η.</p>
<pre>Silnik 1440 obr/min, z1 = 20, z2 = 60 → i = 3
n2 = 1440 / 3 = 480 obr/min
M1 = 10 N·m, η = 0,97 → M2 = 10 · 3 · 0,97 = 29,1 N·m</pre>
<h4>Koła zębate</h4>
<ul>
<li><b>Moduł m</b> (mm): d = m·z (średnica podziałowa), d<sub>a</sub> = m·(z + 2) (wierzchołkowa), d<sub>f</sub> = m·(z - 2,5) (stóp), wysokość zęba h = 2,25·m.</li>
<li>Odległość osi: a = m·(z<sub>1</sub> + z<sub>2</sub>)/2. Współpracujące koła muszą mieć <b>ten sam moduł</b>.</li>
<li>Przykład: m = 2, z = 30: d = 60 mm, d<sub>a</sub> = 64 mm.</li>
<li>Rodzaje: walcowe proste i skośne (cichsze, siła osiowa), stożkowe (osie przecinające się), ślimakowe (duże przełożenia 10-100, często samohamowne, niska sprawność), planetarne.</li>
</ul>
<h4>Przekładnie cięgnowe</h4>
<p><b>Pasowe</b>: pasy klinowe (oznaczenia SPZ, SPA, A, B), wieloklinowe, zębate (synchroniczne, bez poślizgu). Napięcie pasa sprawdza się ugięciem pod znaną siłą (ok. 16 mm na 1 m rozstawu) lub miernikiem częstotliwości drgań. Koła muszą leżeć w jednej płaszczyźnie (liniał, laser). Przy wymianie wymienia się <b>cały komplet</b> pasów klinowych. <b>Łańcuchowe</b>: bez poślizgu, wymagają smarowania i napinacza; zwis luźnej strony ok. 2% rozstawu osi.</p>
<h4>Sprzęgła</h4>
<div class="tw"><table><tr><th>Sprzęgło</th><th>Funkcja</th></tr>
<tr><td>Sztywne (tulejowe, kołnierzowe)</td><td>wymaga idealnej współosiowości</td></tr>
<tr><td>Podatne (kłowe z wkładką, oponowe)</td><td>kompensuje niewielkie przesunięcia, tłumi drgania</td></tr>
<tr><td>Przegubowe (Cardana)</td><td>duże kąty między osiami</td></tr>
<tr><td>Cierne, elektromagnetyczne</td><td>włączanie i wyłączanie w ruchu</td></tr>
<tr><td>Bezpieczeństwa (przeciążeniowe)</td><td>rozłącza przy przekroczeniu momentu</td></tr>
<tr><td>Jednokierunkowe</td><td>przenosi moment w jedną stronę</td></tr></table></div>
<p>Hamulce: klockowe, szczękowe, tarczowe, taśmowe; w napędach dźwigów hamulce elektromagnetyczne działające przy zaniku zasilania (zasada bezpieczeństwa).</p>
<div class="tip">Moc w przekładni się nie zwiększa (traci się ją na sprawności). Reduktor zmniejsza prędkość i w tym samym stosunku zwiększa moment.</div>` }
      ],
      pytania: [
        Q("Granica plastyczności śruby klasy 8.8 wynosi", "640 MPa", "800 MPa", "880 MPa", "88 MPa", "Re = 8 · 8 · 10 MPa."),
        Q("Łożysko 6205 ma średnicę otworu", "25 mm", "5 mm", "20 mm", "205 mm", "05 · 5 = 25 mm."),
        Q("Przyrostek 2RS w oznaczeniu łożyska oznacza", "dwie uszczelki gumowe", "dwie blaszki ochronne", "zwiększony luz promieniowy", "dwa rzędy kulek", "2Z to blaszki ochronne."),
        Q("Przy montażu łożyska na wał siłę wcisku należy przykładać do", "pierścienia wewnętrznego", "pierścienia zewnętrznego", "koszyka", "uszczelnienia", "Siła nie może przechodzić przez elementy toczne."),
        Q("Przełożenie przekładni z kołami z1 = 20 i z2 = 60 wynosi", "3", "0,33", "40", "80", "i = z2/z1."),
        Q("Średnica podziałowa koła zębatego o module 2 mm i 30 zębach wynosi", "60 mm", "64 mm", "32 mm", "55 mm", "d = m·z."),
        Q("Przekładnia o dużym przełożeniu, często samohamowna, to przekładnia", "ślimakowa", "pasowa klinowa", "walcowa o zębach prostych", "łańcuchowa", "Ma niską sprawność, ale duże przełożenia w jednym stopniu."),
        Q("Sprzęgło kompensujące niewielkie przesunięcia osi i tłumiące drgania to sprzęgło", "podatne kłowe z wkładką", "sztywne tulejowe", "jednokierunkowe", "cierne tarczowe", "Wkładka elastyczna pozwala na małe niewspółosiowości.")
      ]
    },
    {
      id: "montaz", tytul: "Montaż i uruchamianie maszyn", opis: "Zaplanujesz montaż zespołu, wykonasz osiowanie i wyważanie oraz uruchomisz maszynę.",
      lekcje: [
        { tytul: "Metody i organizacja montażu", tresc: `<h4>Metody uzyskania dokładności</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th><th>Zastosowanie</th></tr>
<tr><td>Zamienności całkowitej</td><td>każda część pasuje do każdej bez doboru</td><td>produkcja masowa, części znormalizowane</td></tr>
<tr><td>Zamienności częściowej</td><td>dopuszczalny mały odsetek braków</td><td>produkcja wielkoseryjna</td></tr>
<tr><td>Selekcji</td><td>części sortuje się na grupy wymiarowe i łączy z odpowiednich grup</td><td>łożyska, tłoki i sworznie</td></tr>
<tr><td>Dopasowania (indywidualnego)</td><td>obróbka na miejscu (skrobanie, docieranie)</td><td>produkcja jednostkowa, remonty</td></tr>
<tr><td>Kompensacji (regulacji)</td><td>element kompensacyjny: podkładki, tuleje, śruby regulacyjne</td><td>regulacja luzu łożysk stożkowych</td></tr></table></div>
<h4>Formy organizacji</h4>
<p>Montaż <b>stacjonarny</b> (obiekt w miejscu, monterzy się przemieszczają: maszyny duże, jednostkowe) i <b>ruchowy</b> (taśmowy, przenośnikowy: produkcja seryjna i masowa, z taktem). Montaż dzieli się na podzespoły, zespoły i montaż ogólny. Kolejność montażu ustala się na podstawie <b>schematu montażowego</b> (drzewa montażowego) zaczynając od części bazowej (korpusu).</p>
<h4>Dokumentacja montażu</h4>
<ul>
<li>Rysunek złożeniowy z wykazem części.</li>
<li>Karta technologiczna montażu: kolejne operacje, narzędzia, przyrządy, momenty dokręcania.</li>
<li>Instrukcja montażu (DTR) i warunki techniczne odbioru (WTO).</li>
</ul>
<h4>Czynności przygotowawcze</h4>
<ol>
<li>Kompletowanie części i sprawdzenie zgodności z wykazem.</li>
<li>Mycie i odtłuszczanie, usunięcie zadziorów i konserwantów.</li>
<li>Kontrola wymiarów pasowanych (mikrometr, średnicówka, sprawdziany).</li>
<li>Przygotowanie narzędzi: klucze dynamometryczne, ściągacze, prasy, nagrzewnice, przyrządy montażowe.</li>
</ol>
<h4>Siły i metody łączenia wciskowego</h4>
<p>Montaż na zimno (prasa ręczna, hydrauliczna), na gorąco (nagrzanie elementu obejmującego), przez ochłodzenie elementu obejmowanego. Przed wciskaniem powierzchnie smaruje się olejem, a wałek powinien mieć fazkę wprowadzającą. Wciskanie prowadzi się osiowo, bez ukosowania.</p>
<h4>Łączenie skurczowe: przykład</h4>
<p>Wymagany przyrost temperatury piasty: Δt = (wcisk + luz montażowy) / (α × d), dla stali α ≈ 12 × 10<sup>-6</sup> 1/K. Piasta o średnicy 100 mm, wcisk 0,06 mm, luz montażowy 0,06 mm: Δt = 0,12 / (12 × 10<sup>-6</sup> × 100) = <b>100 K</b>. Łożyska nagrzewa się nagrzewnicą indukcyjną lub w oleju, maksymalnie do ok. 120°C, nigdy palnikiem.</p>
<h4>Kontrola po montażu</h4>
<ul>
<li>Sprawdzenie luzów, swobody obrotu i momentów dokręcenia śrub (dokręcanie na krzyż, w kilku etapach).</li>
<li>Próba ruchowa najpierw bez obciążenia, potem pod obciążeniem, z kontrolą temperatury łożysk i drgań.</li>
</ul>
<div class="tip">Na egzaminie „metoda selekcji” to sortowanie części na grupy wymiarowe. „Metoda kompensacji” zawsze ma w opisie podkładki regulacyjne lub inny element kompensujący.</div>` },
        { tytul: "Osiowanie, poziomowanie i wyważanie", tresc: `<h4>Ustawianie maszyny na fundamencie</h4>
<p>Maszynę ustawia się na fundamencie lub ramie, poziomuje <b>poziomnicą maszynową</b> (dokładność np. 0,02 mm/m) za pomocą podkładek lub śrub regulacyjnych, a następnie kotwi. Fundament izoluje drgania; pod maszyny precyzyjne stosuje się podkładki wibroizolacyjne. „Miękka stopa” (stopa nieprzylegająca do podłoża) powoduje odkształcenie korpusu: sprawdza się ją szczelinomierzem lub czujnikiem po poluzowaniu kolejnych śrub.</p>
<h4>Osiowanie wałów</h4>
<p>Niewspółosiowość może być <b>równoległa</b> (przesunięcie osi) i <b>kątowa</b> (osie nachylone), w płaszczyźnie pionowej i poziomej. Metody:</p>
<ul>
<li><b>Liniał i szczelinomierz</b>: zgrubnie, dla małych prędkości.</li>
<li><b>Czujniki zegarowe</b> (metoda promieniowo-osiowa lub odwróconych czujników): pomiary co 90°, odczyty 0°, 90°, 180°, 270°.</li>
<li><b>Laserowe</b> przyrządy do osiowania: najdokładniejsze, obliczają korekty podkładek pod łapy silnika.</li>
</ul>
<p>Koryguje się zawsze maszynę <b>napędzającą</b> (silnik), nie napędzaną. Korekta pionowa: podkładki kalibrowane pod łapy; pozioma: przesuwanie śrubami dociskowymi. Dopuszczalne odchyłki zależą od prędkości, np. przy 1500 obr/min przesunięcie ok. 0,05-0,08 mm.</p>
<h4>Wyważanie</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Kiedy stosowane</th></tr>
<tr><td>Statyczne</td><td>elementy krótkie, tarczowe (koła pasowe, tarcze szlifierskie); na pryzmach, ciężkie miejsce ustawia się na dole</td></tr>
<tr><td>Dynamiczne</td><td>elementy długie (wirniki, wały) w dwóch płaszczyznach korekcji na wyważarce</td></tr></table></div>
<p>Niewyważenie powoduje drgania o częstotliwości obrotowej (1× n), wzrastające z kwadratem prędkości. Korekta przez dodanie masy (ciężarki) lub usunięcie materiału (nawiercanie). Klasa jakości wyważenia G (np. <b>G6,3</b> dla wentylatorów i ogólnej budowy maszyn, G2,5 dla wrzecion obrabiarek).</p>
<h4>Objawy złego montażu</h4>
<p>Niewspółosiowość: drgania o częstotliwości 2× n i duże drgania osiowe, przegrzewanie łożysk i wkładek sprzęgła. Luz mechaniczny: wiele harmonicznych, stuki. Uszkodzone łożysko: wysokie częstotliwości, wzrost temperatury.</p>
<div class="tip">Kolejność: najpierw usunięcie „miękkiej stopy”, potem osiowanie w pionie (podkładki), na końcu w poziomie. Po dokręceniu śrub wykonuje się pomiar kontrolny.</div>` },
        { tytul: "Uruchamianie, docieranie i odbiór", tresc: `<h4>Przed pierwszym uruchomieniem</h4>
<ol>
<li>Sprawdzenie kompletności montażu, dokręcenia połączeń (momenty), zabezpieczeń śrub.</li>
<li>Napełnienie smarem i olejem według karty smarowania (poziom na wskaźniku).</li>
<li>Ręczne obrócenie wału: opory muszą być równomierne, bez zacięć.</li>
<li>Sprawdzenie osłon ruchomych elementów, wyłącznika awaryjnego, uziemienia.</li>
<li>Krótkie załączenie i sprawdzenie <b>kierunku obrotów</b> (pompy, wentylatory, przekładnie z jednokierunkowym smarowaniem).</li>
</ol>
<h4>Próby</h4>
<div class="tw"><table><tr><th>Próba</th><th>Cel</th></tr>
<tr><td>Bieg jałowy (bez obciążenia)</td><td>kontrola hałasu, drgań, temperatury łożysk, szczelności</td></tr>
<tr><td>Docieranie</td><td>stopniowe zwiększanie obciążenia i prędkości, wygładzanie powierzchni współpracujących</td></tr>
<tr><td>Próba pod obciążeniem</td><td>sprawdzenie parametrów nominalnych (moc, wydajność)</td></tr>
<tr><td>Próba przeciążeniowa</td><td>np. dźwignice (ponad udźwig nominalny, pod nadzorem UDT)</td></tr></table></div>
<p>Po docieraniu wymienia się olej (zawiera cząstki metalu) i sprawdza dokręcenie połączeń. Temperatura łożysk tocznych nie powinna przekraczać zwykle 70-80°C; wzrost temperatury po uruchomieniu powinien się ustabilizować.</p>
<h4>Odbiór techniczny</h4>
<p>Protokół odbioru zawiera wyniki prób, pomiary (drgania, hałas, temperatury, prądy silników), uwagi i podpisy. Maszyny wprowadzane do obrotu w UE muszą spełniać <b>dyrektywę maszynową</b> (deklaracja zgodności, oznakowanie CE, instrukcja w języku polskim). Urządzenia podlegające <b>dozorowi technicznemu</b> (UDT): dźwignice, wózki jezdniowe, zbiorniki ciśnieniowe, dźwigi; ich eksploatacja wymaga odbioru UDT i uprawnień operatora.</p>
<h4>BHP przy montażu</h4>
<ul>
<li>Transport ciężkich elementów: zawiesia z ważnym oznaczeniem udźwigu (WLL), kąt rozwarcia cięgien do 120°, nie przebywać pod ładunkiem.</li>
<li>Prace przy maszynie: odłączenie zasilania i blokada <b>LOTO</b> (kłódka i zawieszka).</li>
<li>Ręczne przenoszenie: dla mężczyzn do 30 kg przy pracy stałej (50 kg dorywczo), dla kobiet 12 kg (20 kg dorywczo).</li>
<li>Ochrona oczu przy pracach z prasami i młotkami, rękawice przy elementach nagrzanych.</li>
</ul>
<div class="tip">Typowa pułapka: przed pierwszym uruchomieniem przekładni nie wolno zapomnieć o napełnieniu olejem. Pytania o „pierwszą czynność” zwykle dotyczą sprawdzenia, smarowania lub kierunku obrotów.</div>` }
      ],
      pytania: [
        Q("Metoda montażu, w której części sortuje się na grupy wymiarowe i łączy z odpowiadających sobie grup, to metoda", "selekcji", "zamienności całkowitej", "dopasowania", "kompensacji", "Stosowana np. przy tłokach i sworzniach."),
        Q("Regulacja luzu łożysk stożkowych podkładkami to przykład metody", "kompensacji", "selekcji", "zamienności całkowitej", "dopasowania przez skrobanie", "Podkładki są elementem kompensacyjnym."),
        Q("Podczas osiowania wałów pompy i silnika korekty wykonuje się zwykle przy", "silniku (maszynie napędzającej)", "pompie (maszynie napędzanej)", "obu maszynach jednocześnie", "sprzęgle", "Maszyna napędzana jest zwykle połączona z rurociągami."),
        Q("Najdokładniejszą metodą osiowania wałów jest metoda", "laserowa", "liniału i szczelinomierza", "na oko", "z użyciem poziomnicy", "Przyrząd laserowy oblicza też korekty podkładek."),
        Q("Wyważanie dynamiczne stosuje się dla", "długich wirników i wałów", "cienkich tarcz szlifierskich", "kół pasowych o małej szerokości", "nakrętek", "Korekcję wykonuje się w dwóch płaszczyznach."),
        Q("Niewspółosiowość wałów objawia się najczęściej drganiami o częstotliwości", "2× częstotliwości obrotowej i dużymi drganiami osiowymi", "wyłącznie 1× częstotliwości obrotowej", "bardzo wysokich, jak przy uszkodzonym łożysku", "równych częstotliwości sieci", "Niewyważenie daje głównie 1× n."),
        Q("Po zakończeniu docierania przekładni należy", "wymienić olej", "zwiększyć prędkość ponad nominalną", "usunąć osłony", "poluzować śruby korpusu", "Olej po docieraniu zawiera cząstki metalu."),
        Q("Eksploatacja dźwignicy wymaga odbioru przez", "Urząd Dozoru Technicznego", "Państwową Inspekcję Sanitarną", "producenta smarów", "Urząd Miar wyłącznie", "Dźwignice podlegają dozorowi technicznemu.")
      ]
    },
    {
      id: "eksploatacja", tytul: "Smarowanie, zużycie i diagnostyka", opis: "Dobierzesz środki smarne, rozpoznasz rodzaje zużycia i zaplanujesz diagnostykę maszyn.",
      lekcje: [
        { tytul: "Środki smarne i systemy smarowania", tresc: `<h4>Oleje</h4>
<p>Lepkość według <b>ISO VG</b> (mm²/s w 40°C): VG 32-46 hydraulika, VG 68-100 łożyska ślizgowe i prowadnice, VG 220-460 przekładnie zębate zamknięte. Oleje silnikowe opisuje klasa <b>SAE</b> (np. 10W-40: W oznacza właściwości zimowe). Oleje przekładniowe klasyfikuje się też wg API GL-4, GL-5. Oleje syntetyczne mają szerszy zakres temperatur i dłuższą żywotność.</p>
<h4>Smary plastyczne</h4>
<p>Składają się z oleju bazowego, zagęszczacza (mydło litowe, kompleks litowy, wapniowe, bentonit) i dodatków. Konsystencja wg <b>NLGI</b> (000-6), najczęściej <b>NLGI 2</b> do łożysk tocznych. Smary litowe: uniwersalne, do ok. 120-130°C; wapniowe: odporne na wodę, niższe temperatury. Smarów o różnych zagęszczaczach <b>nie miesza się</b>. Dodatki: EP (wysokie naciski), MoS<sub>2</sub>, grafit.</p>
<h4>Systemy smarowania</h4>
<div class="tw"><table><tr><th>System</th><th>Opis</th></tr>
<tr><td>Ręczne</td><td>smarownice (kalamitki) i prasa smarowa, oliwiarki</td></tr>
<tr><td>Rozbryzgowe</td><td>koła zanurzone w kąpieli olejowej przekładni</td></tr>
<tr><td>Obiegowe</td><td>pompa, filtr, chłodnica, rozdział do punktów</td></tr>
<tr><td>Centralne</td><td>automatyczne dozowanie smaru do wielu punktów (np. prasy, linie)</td></tr>
<tr><td>Mgłą olejową</td><td>szybkie wrzeciona</td></tr>
<tr><td>Smarownice automatyczne</td><td>pojemniki z dozowaniem (gazowe, elektromechaniczne) na pojedynczy punkt</td></tr></table></div>
<h4>Karta smarowania</h4>
<p>Zawiera schemat maszyny z numerami punktów, rodzaj środka smarnego, ilość, częstotliwość (np. co 8 h, co 500 h) i metodę. Dla czytelności stosuje się kolorowe oznaczenia punktów smarowania i symbole (kropla oleju, smar).</p>
<h4>Zasady</h4>
<ul>
<li>Przed smarowaniem oczyść kalamitkę, aby nie wtłoczyć zanieczyszczeń.</li>
<li>Nadmiar smaru w łożysku powoduje wzrost temperatury i wypychanie uszczelnień.</li>
<li>Poziom oleju sprawdza się przy zatrzymanej maszynie (po odczekaniu na spłynięcie).</li>
<li>Zużyte oleje i czyściwo to odpady niebezpieczne, gromadzi się je w oznakowanych pojemnikach.</li>
</ul>
<div class="tip">Do łożysk tocznych w typowych warunkach wybierz smar litowy NLGI 2. Do przekładni zamkniętych olej o dużej lepkości (VG 220 lub wyżej), a nie olej hydrauliczny.</div>` },
        { tytul: "Zużycie i uszkodzenia elementów", tresc: `<h4>Krzywa zużycia</h4>
<p>Okres <b>docierania</b> (szybkie zużycie początkowe, wygładzanie nierówności), okres <b>normalnej eksploatacji</b> (małe, stałe zużycie), okres <b>zużycia awaryjnego</b> (gwałtowny wzrost, konieczna naprawa). Celem obsługi jest wykrycie końca okresu normalnej pracy.</p>
<h4>Rodzaje zużycia</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Mechanizm</th><th>Przykład</th></tr>
<tr><td>Ścierne</td><td>twarde cząstki rysują powierzchnię</td><td>prowadnice zanieczyszczone wiórami</td></tr>
<tr><td>Adhezyjne (zatarcie)</td><td>szczepianie się metali przy braku smaru</td><td>zatarcie tłoka, czopa</td></tr>
<tr><td>Zmęczeniowe (pitting)</td><td>wykruszenia od cyklicznych naprężeń kontaktowych</td><td>bieżnie łożysk, zęby kół</td></tr>
<tr><td>Korozyjne</td><td>reakcje chemiczne i elektrochemiczne</td><td>rdza, korozja cierna (frettage) w połączeniach wciskowych</td></tr>
<tr><td>Erozyjne i kawitacyjne</td><td>strumień cieczy, zapadanie pęcherzyków</td><td>wirniki pomp</td></tr>
<tr><td>Odkształcenia plastyczne</td><td>przeciążenie</td><td>wgniecenia bieżni (brinelling) po uderzeniach</td></tr></table></div>
<h4>Typowe uszkodzenia</h4>
<ul>
<li><b>Łożyska toczne</b>: łuszczenie bieżni (zmęczenie), wgniecenia (niewłaściwy montaż), przebarwienia (przegrzanie, brak smaru), korozja (wilgoć), przechodzenie prądu (rowki od prądów łożyskowych przy falownikach).</li>
<li><b>Koła zębate</b>: pitting, wyłamanie zęba (przeciążenie, zmęczenie), zatarcie, zużycie ścierne profilu.</li>
<li><b>Pasy</b>: pęknięcia, błyszczące boki (poślizg), nierównomierne wydłużenie.</li>
<li><b>Wały</b>: pęknięcia zmęczeniowe w miejscach karbów (rowki, odsadzenia), zużycie czopów, skrzywienie.</li>
<li><b>Uszczelnienia</b>: twardnienie, pęknięcia, wycieki.</li>
</ul>
<h4>Ocena stanu</h4>
<p>Weryfikacja części podczas remontu: części <b>dobre</b> (do dalszej pracy), <b>do naprawy</b> (regeneracja opłacalna), <b>do wymiany</b> (brakowane). Pomiary porównuje się z wymiarami nominalnymi i granicznymi z DTR (zużycie dopuszczalne).</p>
<h4>Metody diagnozowania zużycia</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Co wykrywa</th></tr>
<tr><td>pomiar drgań</td><td>niewyważenie, niewspółosiowość, uszkodzenia łożysk</td></tr>
<tr><td>termowizja</td><td>przegrzane łożyska, złącza, sprzęgła</td></tr>
<tr><td>analiza oleju</td><td>opiłki metalu, wodę, utlenienie oleju</td></tr>
<tr><td>badania penetracyjne i magnetyczne</td><td>pęknięcia powierzchniowe wałów i kół</td></tr></table></div>
<p>Pułapka: zużycie <b>adhezyjne</b> wynika z braku smaru i dużego nacisku, a <b>ścierne</b> z obecności twardych cząstek. Pitting to zmęczenie powierzchni, a nie korozja, choć wygląda jak drobne wżery. W warsztacie pomocny jest stetoskop do łożysk i czujnik zegarowy do pomiaru bicia.</p>
<div class="tip">Przełom zmęczeniowy wału ma dwie strefy: gładką (stopniowy rozwój pęknięcia, często z liniami spoczynkowymi) i chropowatą (nagłe dołamanie). Pytanie o przyczynę: cykliczne obciążenia i karb.</div>` },
        { tytul: "Diagnostyka techniczna maszyn", tresc: `<h4>Metody diagnostyczne</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Co wykrywa</th></tr>
<tr><td>Analiza drgań (wibrodiagnostyka)</td><td>niewyważenie, niewspółosiowość, luzy, uszkodzenia łożysk i kół</td></tr>
<tr><td>Termowizja</td><td>przegrzane łożyska, połączenia elektryczne, nieszczelności izolacji</td></tr>
<tr><td>Analiza oleju (ferrografia, spektrometria)</td><td>cząstki zużycia, woda, utlenienie oleju</td></tr>
<tr><td>Pomiar hałasu i ultradźwięki</td><td>wycieki sprężonego powietrza, początkowe uszkodzenia łożysk</td></tr>
<tr><td>Badania nieniszczące (NDT)</td><td>pęknięcia: penetracyjne (PT), magnetyczno-proszkowe (MT), ultradźwiękowe (UT), radiograficzne (RT), wizualne (VT)</td></tr>
<tr><td>Endoskopia</td><td>wnętrze przekładni i silników bez demontażu</td></tr></table></div>
<h4>Wibrodiagnostyka</h4>
<p>Mierzy się prędkość drgań <b>v<sub>RMS</sub></b> w mm/s (ocena ogólnego stanu według PN-ISO 10816 / 20816), przyspieszenie (wysokie częstotliwości, łożyska) i przemieszczenie (niskie prędkości). Przykładowa ocena dla średnich maszyn: do ok. 1,8 mm/s stan dobry, 1,8-4,5 dopuszczalny, 4,5-11 niezadowalający, powyżej ok. 11 niedopuszczalny (zależnie od grupy maszyn i posadowienia). Pomiary wykonuje się w trzech kierunkach (pionowy, poziomy, osiowy) na obudowach łożysk, zawsze w tych samych punktach, by porównywać trend.</p>
<h4>Częstotliwości charakterystyczne</h4>
<ul>
<li>1× n: niewyważenie.</li>
<li>2× n i silna składowa osiowa: niewspółosiowość.</li>
<li>Wiele harmonicznych: luzy mechaniczne.</li>
<li>Częstotliwość zazębienia = z · n: przekładnie.</li>
<li>Częstotliwości łożyskowe (BPFO, BPFI) i ich modulacje: uszkodzenia łożysk.</li>
</ul>
<h4>Przyrządy</h4>
<p>Wibrometr, analizator widma FFT, stetoskop mechaniczny, pirometr i kamera termowizyjna, stroboskop, obrotomierz, przyrządy laserowe do osiowania, endoskop. Systemy <b>monitoringu ciągłego</b> (czujniki drgań i temperatury online) stosuje się na maszynach krytycznych.</p>
<h4>Planowanie diagnostyki</h4>
<p>Ustala się listę maszyn krytycznych, punkty i częstotliwość pomiarów (np. co miesiąc), progi alarmowe, sposób zapisu trendów i reakcji. Diagnostyka jest podstawą obsługi <b>predykcyjnej</b>: naprawa wtedy, gdy trend pokazuje zbliżanie się do stanu granicznego.</p>
<div class="tip">Do wykrycia powierzchniowych pęknięć w elementach ferromagnetycznych stosuje się metodę magnetyczno-proszkową, a dla materiałów nieferromagnetycznych metodę penetracyjną.</div>` }
      ],
      pytania: [
        Q("Do smarowania łożysk tocznych w typowych warunkach stosuje się najczęściej smar", "litowy o konsystencji NLGI 2", "wapniowy NLGI 000", "grafitowy płynny", "olej ISO VG 10", "NLGI 2 to standard dla łożysk tocznych."),
        Q("Liczba w oznaczeniu ISO VG 220 określa", "lepkość kinematyczną oleju w 40°C", "temperaturę krzepnięcia", "maksymalną prędkość obrotową", "konsystencję smaru", "Konsystencję smaru opisuje klasa NLGI."),
        Q("Zużycie w postaci wykruszeń na bieżniach łożysk i zębach kół to zużycie", "zmęczeniowe (pitting)", "ścierne", "adhezyjne", "kawitacyjne", "Wynika z cyklicznych naprężeń kontaktowych."),
        Q("Zatarcie elementów współpracujących przy braku smaru to zużycie", "adhezyjne", "zmęczeniowe", "korozyjne", "erozyjne", "Metale szczepiają się ze sobą."),
        Q("W okresie normalnej eksploatacji zużycie elementów jest", "małe, prawie stałe", "gwałtownie rosnące", "praktycznie zerowe", "największe w cyklu", "Gwałtowne zużycie występuje w okresie docierania i awaryjnym."),
        Q("Drgania o częstotliwości równej częstotliwości obrotowej (1× n) wskazują głównie na", "niewyważenie", "uszkodzenie zęba koła", "przechodzenie prądu przez łożysko", "kawitację", "Niewspółosiowość daje głównie 2× n."),
        Q("Przegrzane połączenia elektryczne i łożyska najszybciej wykryje", "kamera termowizyjna", "suwmiarka", "badanie penetracyjne", "twardościomierz", "Termowizja pokazuje rozkład temperatur bez kontaktu."),
        Q("Powierzchniowe pęknięcia w stalowym elemencie ferromagnetycznym wykrywa się metodą", "magnetyczno-proszkową", "termowizyjną", "spektrometrii oleju", "pomiaru twardości", "Proszek gromadzi się w miejscu rozproszenia pola na pęknięciu.")
      ]
    }
  ]);

  pod("MEC.05", [
    {
      id: "skrawanie", tytul: "Parametry i warunki skrawania", opis: "Obliczysz prędkość skrawania, obroty, posuw i czas maszynowy oraz dobierzesz materiał narzędzia.",
      lekcje: [
        { tytul: "Prędkość, obroty, posuw, czas", tresc: `<h4>Podstawowe wzory</h4>
<pre>v_c = π · D · n / 1000      [m/min]  (D w mm, n w obr/min)
n   = 1000 · v_c / (π · D)  [obr/min]
v_f = f · n                 [mm/min] (toczenie, f w mm/obr)
v_f = f_z · z · n           [mm/min] (frezowanie, f_z posuw na ząb)
t_m = L / v_f               [min]    (L = droga narzędzia z dobiegiem i wybiegiem)</pre>
<h4>Przykład: toczenie</h4>
<pre>Wałek D = 50 mm, v_c = 157 m/min, f = 0,2 mm/obr, L = 120 mm
n  = 1000 · 157 / (3,14 · 50) = 1000 obr/min
v_f = 0,2 · 1000 = 200 mm/min
t_m = 120 / 200 = 0,6 min = 36 s</pre>
<h4>Przykład: frezowanie</h4>
<pre>Frez D = 20 mm, z = 4, v_c = 125,6 m/min, f_z = 0,05 mm/ząb
n  = 1000 · 125,6 / (3,14 · 20) = 2000 obr/min
v_f = 0,05 · 4 · 2000 = 400 mm/min</pre>
<h4>Głębokość skrawania</h4>
<p>Przy toczeniu wzdłużnym głębokość <b>a<sub>p</sub> = (D - d)/2</b>. Zmniejszenie średnicy z 50 do 46 mm w jednym przejściu to a<sub>p</sub> = 2 mm. Pułapka: na tokarkach CNC wymiary w osi X podaje się zwykle jako <b>średnice</b>, więc przesunięcie X o 4 mm zbiera 2 mm na promieniu.</p>
<h4>Dobór parametrów</h4>
<ul>
<li>Obróbka <b>zgrubna</b>: duża głębokość i posuw, umiarkowana prędkość (usuwanie naddatku).</li>
<li>Obróbka <b>wykańczająca</b>: mała głębokość (0,2-0,5 mm), mały posuw, większa prędkość (gładka powierzchnia).</li>
<li>Teoretyczna chropowatość przy toczeniu: <b>R<sub>t</sub> ≈ f²/(8·r<sub>ε</sub>)</b>; zmniejszenie posuwu o połowę zmniejsza chropowatość 4 razy, większy promień naroża wygładza powierzchnię.</li>
<li>Kolejność wpływu na trwałość ostrza: najbardziej <b>prędkość skrawania</b>, potem posuw, najmniej głębokość.</li>
</ul>
<h4>Moc skrawania</h4>
<p><b>P<sub>c</sub> = F<sub>c</sub>·v<sub>c</sub>/60 000</b> [kW], F<sub>c</sub> = k<sub>c</sub>·a<sub>p</sub>·f (k<sub>c</sub> opór właściwy, dla stali ok. 2000 N/mm²). Przy a<sub>p</sub> = 2 mm, f = 0,2 mm/obr: F<sub>c</sub> = 800 N; przy v<sub>c</sub> = 150 m/min P<sub>c</sub> = 2 kW. Moc silnika obrabiarki musi być większa o straty (sprawność).</p>
<div class="tip">Przy stałej prędkości skrawania mniejsza średnica wymaga większych obrotów. Dlatego przy toczeniu poprzecznym do osi obroty rosną aż do ograniczenia (G50 lub LIMS).</div>` },
        { tytul: "Materiały narzędziowe i geometria ostrza", tresc: `<h4>Materiały narzędziowe</h4>
<div class="tw"><table><tr><th>Materiał</th><th>Cechy</th><th>Zastosowanie</th></tr>
<tr><td>Stal szybkotnąca HSS (HS6-5-2)</td><td>ciągliwa, odporna do ok. 600°C</td><td>wiertła, gwintowniki, frezy, przeciągacze</td></tr>
<tr><td>Węgliki spiekane (płytki, często powlekane TiN, TiAlN, Al<sub>2</sub>O<sub>3</sub>)</td><td>twarde, do ok. 1000°C</td><td>większość obróbki CNC</td></tr>
<tr><td>Cermetale</td><td>wykańczanie stali, gładka powierzchnia</td><td>obróbka dokładna</td></tr>
<tr><td>Ceramika</td><td>bardzo wysokie prędkości, krucha</td><td>żeliwo, stopy żaroodporne</td></tr>
<tr><td>CBN (regularny azotek boru)</td><td>druga twardość po diamencie</td><td>stale hartowane powyżej 45 HRC</td></tr>
<tr><td>PCD (diament polikrystaliczny)</td><td>najtwardszy, nie do stali (reaguje z żelazem)</td><td>aluminium, kompozyty, miedź</td></tr></table></div>
<h4>Grupy obrabianych materiałów ISO</h4>
<p><b>P</b> (niebieski): stale; <b>M</b> (żółty): stale nierdzewne; <b>K</b> (czerwony): żeliwa; <b>N</b> (zielony): metale nieżelazne (Al, Cu); <b>S</b> (brązowy): stopy żaroodporne, tytan; <b>H</b> (szary): materiały hartowane.</p>
<h4>Oznaczenie płytki</h4>
<p>Np. <b>CNMG 120408</b>: C kształt rombowy 80°, N kąt przyłożenia 0°, M klasa tolerancji, G typ (otwór i łamacz wióra), 12 długość krawędzi (mm), 04 grubość (4,76 mm), <b>08 promień naroża 0,8 mm</b>. Inne kształty: D (romb 55°), V (romb 35°, kopiowanie), T (trójkąt), S (kwadrat), W (trygon), R (okrągła).</p>
<h4>Geometria ostrza</h4>
<ul>
<li>Kąt <b>natarcia γ</b>: dodatni ułatwia skrawanie (materiały miękkie), ujemny wzmacnia ostrze (obróbka zgrubna, twarde materiały).</li>
<li>Kąt <b>przyłożenia α</b>: zmniejsza tarcie powierzchni przyłożenia o materiał, zwykle 6-12°.</li>
<li>Kąt <b>ostrza β</b>: α + β + γ = 90°.</li>
<li>Kąt <b>przystawienia κ<sub>r</sub></b>: wpływa na kierunek sił i grubość wióra (90° do toczenia przy odsadzeniach).</li>
<li>Promień naroża r<sub>ε</sub>: większy wzmacnia ostrze i wygładza powierzchnię, ale zwiększa drgania.</li>
</ul>
<h4>Zużycie ostrza</h4>
<p>Starcie powierzchni przyłożenia VB (normalne, kryterium np. VB = 0,3 mm), krater na powierzchni natarcia (wysoka temperatura), narost (za mała prędkość, materiały miękkie), wykruszenia (drgania, przerywane skrawanie), odkształcenie plastyczne (zbyt wysoka temperatura).</p>
<div class="tip">Narost na ostrzu usuwa się zwiększając prędkość skrawania, stosując ostrą płytkę o dodatnim kącie natarcia i chłodzenie. Nie zmniejszaj prędkości: to go nasila.</div>` },
        { tytul: "Chłodzenie, wiór i skrawalność", tresc: `<h4>Ciecze obróbkowe</h4>
<p>Funkcje: <b>chłodzenie</b> (odbiór ciepła), <b>smarowanie</b> (mniejsze tarcie), usuwanie wiórów, ochrona antykorozyjna. Rodzaje:</p>
<ul>
<li><b>Emulsje</b> olejowo-wodne (stężenie 3-8%, kontrola refraktometrem): najczęstsze, dobre chłodzenie.</li>
<li><b>Oleje</b> obróbkowe: dobre smarowanie, gwintowanie, przeciąganie, obróbka kół zębatych.</li>
<li><b>Syntetyczne</b> roztwory: szlifowanie.</li>
<li><b>MQL</b> (minimalne smarowanie mgłą) i obróbka <b>na sucho</b> (żeliwo, ceramika, CBN; płytki węglikowe przy przerywanym skrawaniu nie lubią szoku termicznego).</li>
</ul>
<p>Emulsję kontroluje się regularnie (stężenie, pH ok. 8,5-9,5, zapach od bakterii). Zepsuta emulsja powoduje korozję i choroby skóry. Zużyte ciecze to odpad niebezpieczny.</p>
<h4>Rodzaje wiórów</h4>
<div class="tw"><table><tr><th>Wiór</th><th>Kiedy powstaje</th></tr>
<tr><td>Wstęgowy (ciągły)</td><td>materiały plastyczne (stal miękka, aluminium), duża prędkość; niebezpieczny, owija się wokół narzędzia</td></tr>
<tr><td>Schodkowy (elementowy)</td><td>stal średniotwarda, mniejsze prędkości</td></tr>
<tr><td>Odpryskowy (łamany)</td><td>materiały kruche (żeliwo, mosiądz)</td></tr></table></div>
<p>Łamacz wióra na płytce kształtuje wiór w krótkie spirale. Pożądany wiór: krótki, w kształcie przecinka lub spirali. Długi wiór zmienia się zwiększając posuw, zmieniając płytkę lub stosując cykle z przerywaniem posuwu.</p>
<h4>Skrawalność materiałów</h4>
<ul>
<li>Stale automatowe (z dodatkiem siarki, ołowiu): bardzo dobra skrawalność, krótki wiór.</li>
<li>Stale nierdzewne austenityczne: umacniają się w trakcie skrawania, wymagają ostrych narzędzi i stałego posuwu (nie „przecierać” powierzchni).</li>
<li>Żeliwo szare: krótki wiór, pył, obróbka często na sucho.</li>
<li>Aluminium: wysokie prędkości, skłonność do narostu, ostre płytki polerowane.</li>
<li>Tytan: niska przewodność cieplna, niskie prędkości, obfite chłodzenie.</li>
</ul>
<h4>Drgania (chatter)</h4>
<p>Objaw: charakterystyczny pisk i falista powierzchnia. Przyczyny: długi wysięg narzędzia (zasada: wysięg noża do ok. 1,5× wysokości trzonka, wytaczadła stalowego do ok. 4× średnicy), słabe zamocowanie, zbyt duży promień naroża, zła prędkość obrotowa. Środki zaradcze: skrócenie wysięgu, zmiana obrotów, kieł lub podtrzymka, wytaczadła z węglika lub tłumiące.</p>
<div class="tip">Do usuwania wiórów z obrabiarki zawsze używaj haczyka lub szczotki, nigdy ręki ani sprężonego powietrza kierowanego na siebie.</div>` }
      ],
      pytania: [
        Q("Prędkość obrotowa przy toczeniu wałka Ø50 mm z prędkością skrawania 157 m/min wynosi około", "1000 obr/min", "3140 obr/min", "500 obr/min", "100 obr/min", "n = 1000 · 157 / (3,14 · 50)."),
        Q("Prędkość posuwu przy toczeniu z f = 0,2 mm/obr i n = 1000 obr/min wynosi", "200 mm/min", "20 mm/min", "5000 mm/min", "0,2 mm/min", "vf = f · n."),
        Q("Prędkość posuwu frezu 4-ostrzowego przy fz = 0,05 mm i n = 2000 obr/min wynosi", "400 mm/min", "100 mm/min", "200 mm/min", "800 mm/min", "vf = fz · z · n."),
        Q("Na trwałość ostrza najsilniej wpływa", "prędkość skrawania", "głębokość skrawania", "rodzaj uchwytu", "długość przedmiotu", "Wzrost vc gwałtownie skraca trwałość."),
        Q("Płytki z CBN stosuje się przede wszystkim do obróbki", "stali hartowanych", "aluminium", "tworzyw sztucznych", "drewna", "PCD stosuje się do aluminium."),
        Q("Kolorem niebieskim i literą P w klasyfikacji ISO oznacza się grupę materiałów", "stale", "żeliwa", "metale nieżelazne", "stale nierdzewne", "K to żeliwa (czerwony), N nieżelazne (zielony)."),
        Q("W oznaczeniu płytki CNMG 120408 liczba 08 oznacza", "promień naroża 0,8 mm", "grubość 8 mm", "kąt przyłożenia 8°", "długość krawędzi 8 mm", "12 to długość krawędzi, 04 grubość."),
        Q("Aby zmniejszyć narost na ostrzu, należy", "zwiększyć prędkość skrawania", "zmniejszyć prędkość skrawania", "wyłączyć chłodzenie", "zastosować ujemny kąt natarcia", "Narost powstaje głównie przy małych prędkościach.")
      ]
    },
    {
      id: "obrabiarki", tytul: "Toczenie, frezowanie, szlifowanie", opis: "Dobierzesz obrabiarkę, mocowanie i narzędzie do zabiegu oraz wykonasz go konwencjonalnie.",
      lekcje: [
        { tytul: "Tokarki i mocowanie przedmiotów", tresc: `<h4>Budowa tokarki</h4>
<p>Łoże, wrzeciennik z wrzecionem, skrzynka posuwów, suport (wzdłużny, poprzeczny, narzędziowy), konik z kłem lub wiertłem, śruba pociągowa (gwintowanie) i wałek pociągowy (posuwy). Tokarka CNC ma głowicę rewolwerową (np. 8-12 narzędzi), napędy osi z serwosilnikami i śrubami tocznymi, często narzędzia napędzane i oś C.</p>
<h4>Mocowanie przedmiotu</h4>
<div class="tw"><table><tr><th>Sposób</th><th>Zastosowanie</th></tr>
<tr><td>Uchwyt trójszczękowy samocentrujący</td><td>przedmioty okrągłe i sześciokątne</td></tr>
<tr><td>Uchwyt czteroszczękowy (szczęki niezależne)</td><td>przedmioty niesymetryczne, mimośrodowe; ustawianie czujnikiem</td></tr>
<tr><td>Kły (z zabierakiem)</td><td>wałki długie, dokładna współosiowość przy obróbce z przemocowaniem</td></tr>
<tr><td>Uchwyt i kieł konika</td><td>wałki dłuższe niż ok. 3-4 średnice</td></tr>
<tr><td>Tuleje zaciskowe</td><td>pręty o małej średnicy, produkcja seryjna</td></tr>
<tr><td>Podtrzymka stała lub ruchoma</td><td>wałki smukłe (L/D powyżej ok. 10-12)</td></tr>
<tr><td>Tarcza tokarska</td><td>korpusy o nietypowym kształcie</td></tr></table></div>
<p>Szczęki <b>miękkie</b> (wytaczane na wymiar) chronią powierzchnie obrobione i zapewniają dokładne bicie. Wysunięcie przedmiotu z uchwytu bez podparcia nie powinno przekraczać ok. 3× średnicy.</p>
<h4>Zabiegi tokarskie</h4>
<ul>
<li>Toczenie wzdłużne, poprzeczne (planowanie czoła), stożków (przez skręcenie suportu narzędziowego, przesunięcie konika lub CNC), kształtowe, gwintów (nożem do gwintu), przecinanie, wytaczanie, wiercenie i rozwiercanie z konika, radełkowanie.</li>
<li>Nóż ustawia się <b>na wysokości osi</b> obrotu: za wysoko zmniejsza kąt przyłożenia (tarcie), za nisko zmniejsza kąt natarcia i zostawia „pępek” przy planowaniu.</li>
</ul>
<h4>Toczenie stożka</h4>
<p>Zbieżność <b>C = (D - d)/L</b>; kąt pochylenia tworzącej tg(α/2) = (D - d)/(2L). Stożek D = 30, d = 20, L = 50: C = 1:5, tg(α/2) = 0,1, α/2 ≈ 5,7°. Stożki narzędziowe Morse’a (MK1-MK6) mają zbieżność ok. 1:20.</p>
<div class="tip">BHP: klucz do uchwytu nigdy nie zostaje w uchwycie. Nie zakładaj rękawic przy pracy na obracających się elementach i zapinaj odzież przy nadgarstkach.</div>` },
        { tytul: "Frezowanie i wiercenie na frezarkach", tresc: `<h4>Frezarki</h4>
<p>Pionowe, poziome, uniwersalne (stół skrętny), bramowe; centra obróbkowe CNC z magazynem narzędzi i automatyczną wymianą (ATC). Osie: X (stół wzdłużnie), Y (poprzecznie), Z (oś wrzeciona); dodatkowo osie obrotowe A, B, C w obrabiarkach 4- i 5-osiowych.</p>
<h4>Frezowanie współbieżne i przeciwbieżne</h4>
<div class="tw"><table><tr><th>Cecha</th><th>Współbieżne</th><th>Przeciwbieżne</th></tr>
<tr><td>Kierunek</td><td>posuw zgodny z ruchem ostrza</td><td>posuw przeciwny</td></tr>
<tr><td>Grubość wióra</td><td>od maksymalnej do zera</td><td>od zera do maksymalnej (ślizganie ostrza)</td></tr>
<tr><td>Trwałość narzędzia, powierzchnia</td><td>lepsza</td><td>gorsza</td></tr>
<tr><td>Wymaganie</td><td>brak luzu w napędzie stołu (CNC, śruby toczne)</td><td>starsze frezarki z luzem, twarda naskórkowość</td></tr></table></div>
<p>Na obrabiarkach CNC zaleca się frezowanie <b>współbieżne</b>.</p>
<h4>Frezy</h4>
<ul>
<li><b>Głowica frezowa</b> (płytki wymienne): planowanie dużych powierzchni, średnica ok. 1,3-1,5 × szerokość frezowania.</li>
<li><b>Frez walcowo-czołowy</b> (palcowy): rowki, kieszenie, kontury. Frez z ostrzem przez środek może wgłębiać się osiowo.</li>
<li>Frez do rowków teowych, kątowy, kształtowy, tarczowy, kulisty (powierzchnie 3D).</li>
<li>Liczba ostrzy: mało ostrzy dla aluminium (miejsce na wiór), więcej dla stali i wykańczania.</li>
</ul>
<h4>Mocowanie</h4>
<p>Imadło maszynowe (przedmiot na podkładkach równoległych, dociśnięty młotkiem gumowym), docisk do stołu łapami i śrubami w rowkach teowych, uchwyty podziałowe, przyrządy specjalne, stoły magnetyczne i podciśnieniowe. Przed obróbką imadło ustawia się równolegle do osi X za pomocą czujnika zegarowego.</p>
<h4>Wiercenie i podzielnica</h4>
<p>Na centrach wykonuje się nawiercanie nawiertakiem, wiercenie, pogłębianie, rozwiercanie, gwintowanie, wytaczanie. Przy podzielnicy prostej o przełożeniu 40:1 liczba obrotów korbki <b>n = 40/z</b>: dla 8 podziałów 5 obrotów, dla 6 podziałów 6 i 2/3 obrotu (np. 16 otworów na tarczy 24-otworowej).</p>
<div class="tip">Pytanie typowe: „Które frezowanie zapewnia lepszą jakość i trwałość ostrza na CNC?”. Odpowiedź: współbieżne.</div>` },
        { tytul: "Szlifowanie i obróbka wykańczająca", tresc: `<h4>Rodzaje szlifowania</h4>
<ul>
<li><b>Wałków</b> (kłowe, bezkłowe), <b>otworów</b>, <b>płaszczyzn</b> (obwodem lub czołem ściernicy), gwintów, kół zębatych, profilowe.</li>
<li>Szlifowanie zapewnia klasy dokładności IT5-IT7 i chropowatość Ra 0,2-1,6 µm. Typowy naddatek na szlifowanie wałka: 0,2-0,5 mm na średnicy.</li>
<li>Prędkość obwodowa ściernicy zwykle <b>25-35 m/s</b> (konwencjonalne), do 50-80 m/s i więcej na specjalnych ściernicach. Nigdy nie przekraczać prędkości podanej na ściernicy.</li>
</ul>
<h4>Oznaczenie ściernicy</h4>
<p>Przykład <b>1-300×40×76,2-99A 60 K 5 V-35 m/s</b>: kształt 1 (płaska), wymiary, materiał ścierny 99A (elektrokorund szlachetny), ziarnistość 60, twardość K, struktura 5, spoiwo V (ceramiczne), prędkość maksymalna.</p>
<div class="tw"><table><tr><th>Element</th><th>Znaczenie</th></tr>
<tr><td>Materiał ścierny</td><td>A elektrokorund (stale), C węglik krzemu (żeliwo, metale nieżelazne, węgliki), CBN, diament (węgliki spiekane)</td></tr>
<tr><td>Ziarnistość</td><td>małe liczby (24-36) gruboziarniste: zgrubne; duże (100-220) drobne: wykańczające</td></tr>
<tr><td>Twardość</td><td>od A (bardzo miękka) do Z (bardzo twarda); do twardych materiałów ściernice <b>miękkie</b></td></tr>
<tr><td>Spoiwo</td><td>V ceramiczne, B żywiczne, R gumowe, M metalowe</td></tr></table></div>
<h4>Obciąganie i wyważanie</h4>
<p>Ściernicę <b>obciąga się</b> diamentem (obciągaczem) w celu przywrócenia kształtu i ostrości (usunięcie zalepionej warstwy). Nową ściernicę sprawdza się próbą dźwięku (czysty dźwięk przy lekkim opukaniu: brak pęknięć), mocuje między kołnierzami z przekładkami, wyważa statycznie, a pierwsze uruchomienie przez ok. 1 minutę odbywa się z osłoną, bez osób w płaszczyźnie ściernicy.</p>
<h4>Wady szlifowania</h4>
<p><b>Przypalenia</b> (przebarwienia, mikropęknięcia): zbyt twarda ściernica, za duży docisk, brak chłodzenia. Falistość i ślady drgań: niewyważenie ściernicy. Rysy: zanieczyszczone chłodziwo.</p>
<h4>Inne metody wykańczające</h4>
<p>Honowanie (otwory cylindrów, siatka rys), docieranie (pasty ścierne, płaskość i szczelność), dogładzanie oscylacyjne (superfinish), polerowanie, nagniatanie (umocnienie i wygładzenie powierzchni bez usuwania materiału).</p>
<div class="tip">Zasada odwrotności: im twardszy materiał obrabiany, tym bardziej miękka ściernica, aby zużyte ziarna wykruszały się i odsłaniały nowe ostre ziarna.</div>` }
      ],
      pytania: [
        Q("Do mocowania przedmiotu o nieregularnym kształcie z ustawieniem mimośrodowym stosuje się uchwyt", "czteroszczękowy z niezależnymi szczękami", "trójszczękowy samocentrujący", "tuleję zaciskową", "kły tokarskie", "Szczęki niezależne pozwalają ustawić przedmiot czujnikiem."),
        Q("Podtrzymkę stosuje się przy toczeniu", "wałków smukłych", "krótkich tulei", "tarcz o dużej średnicy", "gwintów wewnętrznych", "Zapobiega uginaniu się i drganiom wałka."),
        Q("Nóż tokarski ustawiony poniżej osi obrotu przy planowaniu czoła pozostawia", "występ (pępek) w środku", "idealną płaszczyznę", "rowek obwodowy", "gwint", "Nóż powinien być na wysokości osi."),
        Q("Zbieżność stożka o średnicach 30 i 20 mm i długości 50 mm wynosi", "1:5", "1:10", "1:20", "1:2,5", "C = (30 - 20)/50 = 0,2."),
        Q("Na frezarkach CNC zalecane jest frezowanie", "współbieżne", "przeciwbieżne", "zawsze naprzemienne", "wyłącznie czołowe", "Daje lepszą trwałość narzędzia i jakość powierzchni."),
        Q("Na podzielnicy o przełożeniu 40:1 dla 8 podziałów należy wykonać obrotów korbki", "5", "8", "40", "4", "n = 40/z = 40/8."),
        Q("Litera V w oznaczeniu ściernicy oznacza", "spoiwo ceramiczne", "twardość bardzo wysoką", "materiał ścierny węglik krzemu", "prędkość w m/s", "B to żywiczne, R gumowe."),
        Q("Do szlifowania materiałów bardzo twardych dobiera się ściernicę", "miękką", "bardzo twardą", "gruboziarnistą z twardym spoiwem", "bez spoiwa", "Zużyte ziarna muszą się wykruszać.")
      ]
    },
    {
      id: "cnc-kody", tytul: "CNC: układy i kody G/M", opis: "Opanujesz układy współrzędnych, punkty charakterystyczne i znaczenie kodów G i M w programach CNC.",
      lekcje: [
        { tytul: "Osie, punkty zerowe i korekcje", tresc: `<h4>Układ osi (ISO 841)</h4>
<p>Prawoskrętny układ kartezjański. Oś <b>Z</b> pokrywa się z osią wrzeciona, a jej kierunek dodatni to <b>oddalanie się narzędzia od przedmiotu</b>. Na tokarce X to średnica (prostopadle do osi wrzeciona), na frezarce pionowej X wzdłuż stołu, Y poprzecznie. Osie obrotowe: A wokół X, B wokół Y, C wokół Z.</p>
<h4>Punkty charakterystyczne</h4>
<div class="tw"><table><tr><th>Punkt</th><th>Opis</th></tr>
<tr><td><b>M</b> (zero maszyny)</td><td>ustalony przez producenta, początek układu maszyny</td></tr>
<tr><td><b>R</b> (punkt referencyjny)</td><td>najazd po włączeniu obrabiarki (bazowanie) synchronizuje układ pomiarowy</td></tr>
<tr><td><b>W</b> (zero przedmiotu)</td><td>wybiera programista, zwykle na czole przedmiotu w osi (tokarka) lub w narożu/środku przedmiotu (frezarka)</td></tr>
<tr><td><b>F</b> (punkt odniesienia narzędzia / sanek)</td><td>punkt na głowicy, od którego mierzy się korekcje narzędzi</td></tr>
<tr><td><b>P</b> (wierzchołek ostrza)</td><td>punkt prowadzony po konturze</td></tr></table></div>
<h4>Przesunięcia punktu zerowego</h4>
<p>Wartości przesunięcia z M do W wpisuje się w tabelę i aktywuje kodem <b>G54</b> (dalsze G55-G59). Na maszynie mierzy się je przez dotknięcie przedmiotu narzędziem (zarysowanie), sondą pomiarową lub wskaźnikiem krawędzi.</p>
<h4>Korekcje narzędzi</h4>
<ul>
<li>Korekcja <b>długości</b> (na tokarce długości w X i Z) dla każdego narzędzia w tabeli korektorów: wyznaczana na przyrządzie pomiarowym (presetting) lub na maszynie.</li>
<li>Korekcja <b>promienia</b> ostrza lub freza (R) i położenie ostrza (kod 1-9 na tokarce, np. 3 dla noża zewnętrznego prawego).</li>
<li>Zużycie (wear): małe poprawki, np. średnica wyszła o 0,04 mm za duża, wpisuje się -0,04 w korekcji zużycia X (na tokarce na średnicy).</li>
</ul>
<h4>Programowanie absolutne i przyrostowe</h4>
<p><b>G90</b>: współrzędne absolutne (od zera przedmiotu). <b>G91</b>: przyrostowe (od aktualnej pozycji). Na tokarkach Fanuc zamiast G91 stosuje się adresy <b>U</b> (przyrost X) i <b>W</b> (przyrost Z). Przykład: narzędzie w X40 Z0; G90 X50 przesuwa na średnicę 50, G91 X50 o +50 mm na średnicy.</p>
<h4>Programowanie średnicowe</h4>
<p>Na tokarce zwykle wartości X są średnicami: X30 oznacza średnicę 30 mm (promień 15 mm). W tym trybie zmiana X o 2 mm zbiera 1 mm materiału na promieniu.</p>
<div class="tip">Pułapka: kierunek +Z na tokarce prowadzi od uchwytu w stronę konika (odejście od przedmiotu). Zero W na czole przedmiotu oznacza, że materiał leży przy ujemnych Z.</div>` },
        { tytul: "Najważniejsze kody G", tresc: `<h4>Ruchy</h4>
<div class="tw"><table><tr><th>Kod</th><th>Funkcja</th><th>Uwagi</th></tr>
<tr><td>G00</td><td>ruch szybki (ustawczy)</td><td>bez skrawania, prędkość maksymalna maszyny, tor nie zawsze prosty</td></tr>
<tr><td>G01</td><td>interpolacja liniowa</td><td>skrawanie z posuwem F</td></tr>
<tr><td>G02</td><td>interpolacja kołowa zgodna z ruchem wskazówek zegara (CW)</td><td>R lub I, J, K (środek względem punktu początkowego)</td></tr>
<tr><td>G03</td><td>interpolacja kołowa przeciwna (CCW)</td><td>jak G02</td></tr>
<tr><td>G04</td><td>postój czasowy</td><td>np. G04 X2 (2 s) lub P2000 (ms)</td></tr></table></div>
<p>Kierunek G02/G03 określa się patrząc od strony dodatniej osi prostopadłej do płaszczyzny (dla XY od +Z). Na tokarce z narzędziem za osią (tylna głowica) i przed osią kierunki na rysunku wyglądają odwrotnie, ale kod zależy od rzeczywistego układu osi maszyny.</p>
<h4>Płaszczyzny i jednostki</h4>
<p><b>G17</b> płaszczyzna XY (frezowanie, domyślna), <b>G18</b> XZ (toczenie), <b>G19</b> YZ. <b>G20</b> cale, <b>G21</b> milimetry (Fanuc; w Sinumerik G70/G71).</p>
<h4>Posuw i prędkość</h4>
<div class="tw"><table><tr><th>Kod (Fanuc toczenie)</th><th>Znaczenie</th></tr>
<tr><td>G98 / G94</td><td>posuw w mm/min</td></tr>
<tr><td>G99 / G95</td><td>posuw w mm/obr (typowy na tokarce)</td></tr>
<tr><td>G96 S180</td><td>stała prędkość skrawania 180 m/min</td></tr>
<tr><td>G97 S1000</td><td>stałe obroty 1000 obr/min (wiercenie, gwintowanie)</td></tr>
<tr><td>G50 S3000</td><td>ograniczenie obrotów do 3000 (przy G96, w Sinumerik LIMS)</td></tr></table></div>
<h4>Korekcje i powroty</h4>
<ul>
<li><b>G40</b> odwołanie korekcji promienia, <b>G41</b> korekcja z lewej strony konturu (patrząc w kierunku ruchu narzędzia), <b>G42</b> z prawej.</li>
<li><b>G43</b> korekcja długości narzędzia (frezarka, z H), G49 odwołanie.</li>
<li><b>G28</b> powrót do punktu referencyjnego.</li>
<li><b>G54-G59</b> wybór przesunięcia punktu zerowego.</li>
<li>Cykle: <b>G81</b> wiercenie, <b>G83</b> wiercenie z wycofaniem (głębokie otwory), <b>G84</b> gwintowanie gwintownikiem, G80 odwołanie cyklu (frezarka); na tokarce G71 (toczenie zgrubne wzdłużne), G70 (wykańczanie), G76 (gwintowanie wielokrotne).</li>
</ul>
<p>Kody <b>modalne</b> działają do odwołania innym kodem z tej samej grupy (G00, G01, G90, G96...). Kody <b>niemodalne</b> działają tylko w swoim bloku (G04, G28).</p>
<div class="tip">Frezowanie współbieżne konturu zewnętrznego frezem obracającym się w prawo (M03) uzyskuje się z korekcją G41, czyli narzędzie po lewej stronie konturu.</div>` },
        { tytul: "Kody M, adresy i budowa programu", tresc: `<h4>Funkcje pomocnicze M</h4>
<div class="tw"><table><tr><th>Kod</th><th>Funkcja</th></tr>
<tr><td>M00</td><td>stop programowy bezwarunkowy (np. pomiar, odwrócenie przedmiotu)</td></tr>
<tr><td>M01</td><td>stop warunkowy (gdy włączony przełącznik na pulpicie)</td></tr>
<tr><td>M03</td><td>obroty wrzeciona w prawo (CW)</td></tr>
<tr><td>M04</td><td>obroty wrzeciona w lewo (CCW)</td></tr>
<tr><td>M05</td><td>zatrzymanie wrzeciona</td></tr>
<tr><td>M06</td><td>wymiana narzędzia (centra obróbkowe)</td></tr>
<tr><td>M08 / M09</td><td>włączenie / wyłączenie chłodziwa</td></tr>
<tr><td>M30</td><td>koniec programu z powrotem na początek</td></tr>
<tr><td>M02</td><td>koniec programu (starszy)</td></tr>
<tr><td>M98 / M99</td><td>wywołanie podprogramu / powrót z podprogramu</td></tr></table></div>
<h4>Adresy w bloku</h4>
<p><b>N</b> numer bloku, <b>G</b> funkcja przygotowawcza, <b>X, Y, Z</b> współrzędne, <b>I, J, K</b> parametry środka łuku, <b>R</b> promień, <b>F</b> posuw, <b>S</b> obroty lub prędkość skrawania, <b>T</b> narzędzie (na tokarce Fanuc T0101: narzędzie 1, korektor 1), <b>D</b> numer korektora promienia (frezarka), <b>H</b> korektor długości, <b>M</b> funkcja pomocnicza. Komentarze w nawiasach (Fanuc) lub po średniku (Sinumerik).</p>
<h4>Struktura programu</h4>
<pre>O0001 (TULEJA)            numer i nazwa programu
N10 G21 G40 G99           blok bezpieczeństwa: mm, bez korekcji, mm/obr
N20 G28 U0 W0             powrót do punktu referencyjnego
N30 T0101                 wybór narzędzia i korektora
N40 G96 S180 M03          stała prędkość skrawania, obroty w prawo
N50 G50 S3000             ograniczenie obrotów
N60 G00 X52 Z2 M08        dojazd szybki, chłodziwo
...                       obróbka
N200 G00 X100 Z100 M09    odjazd, wyłączenie chłodziwa
N210 M05                  stop wrzeciona
N220 M30                  koniec programu</pre>
<h4>Ustawianie i próby programu</h4>
<ol>
<li>Wprowadzenie programu i symulacja graficzna na sterowaniu.</li>
<li>Pomiar narzędzi, wpis korekcji, ustawienie zera przedmiotu G54.</li>
<li>Uruchomienie w trybie <b>pojedynczego bloku</b> (single block) z obniżonym posuwem (override) i ruchem szybkim, ewentualnie „dry run” (przebieg na sucho) nad przedmiotem.</li>
<li>Pomiar pierwszej sztuki i korekty zużycia.</li>
</ol>
<div class="tip">Na egzaminie łatwo pomylić M03/M04 z G02/G03. M dotyczy wrzeciona (obroty), G dotyczy ruchu narzędzia po łuku.</div>` }
      ],
      pytania: [
        Q("Dodatni kierunek osi Z w obrabiarce CNC to kierunek", "oddalania się narzędzia od przedmiotu", "zbliżania się narzędzia do przedmiotu", "zawsze w prawo", "zawsze pionowo w dół", "Oś Z pokrywa się z osią wrzeciona."),
        Q("Punkt zerowy przedmiotu W ustala", "programista lub operator", "producent obrabiarki na stałe", "punkt referencyjny R", "układ pomiarowy automatycznie po włączeniu", "Zero maszyny M ustala producent."),
        Q("Kod G00 oznacza", "ruch szybki ustawczy", "interpolację liniową z posuwem", "interpolację kołową", "postój czasowy", "Podczas G00 nie wolno skrawać."),
        Q("Interpolację kołową przeciwną do ruchu wskazówek zegara oznacza kod", "G03", "G02", "G01", "M03", "M03 to obroty wrzeciona w prawo."),
        Q("Stałą prędkość skrawania na tokarce CNC włącza kod", "G96", "G97", "G95", "G94", "G97 to stałe obroty."),
        Q("Kod G41 oznacza", "korekcję promienia, narzędzie z lewej", "korekcję długości narzędzia", "odwołanie korekcji promienia", "wybór płaszczyzny obróbki XY", "G42 to korekcja z prawej, G40 odwołanie."),
        Q("Wyłączenie chłodziwa w programie CNC realizuje funkcja", "M09", "M08", "M05", "M30", "M08 włącza chłodziwo."),
        Q("Zapis T0303 na tokarce Fanuc oznacza", "narzędzie nr 3 z korektorem nr 3", "trzy narzędzia po 3 mm", "czas 3,03 s", "trzecią płaszczyznę", "Pierwsze dwie cyfry to narzędzie, kolejne korektor.")
      ]
    },
    {
      id: "cnc-programy", tytul: "Programy CNC toczenia i frezowania", opis: "Napiszesz kompletny program toczenia i frezowania z korekcją promienia i cyklami.",
      lekcje: [
        { tytul: "Program toczenia wałka (Fanuc)", tresc: `<h4>Zadanie</h4>
<p>Wałek z pręta Ø40, długość obróbki 50 mm. Kontur: fazka 1×45° na czole, Ø30 na długości 20 mm, stożek do Ø36 na długości 15 mm, dalej Ø36 do Z-50. Zero W na czole w osi. Programowanie średnicowe.</p>
<h4>Program</h4>
<pre>O1001 (WALEK)
N10 G21 G40 G99
N20 G28 U0 W0
N30 T0101 (NOZ ZGRUBNY R0.8)
N40 G96 S200 M03
N50 G50 S2500
N60 G00 X42 Z2 M08
N70 G71 U2 R0.5              (glebokosc 2 mm na promien, odskok 0,5)
N80 G71 P90 Q140 U0.4 W0.1 F0.25
N90 G00 X28                  (poczatek konturu)
N100 G01 Z0 F0.1
N110 X30 Z-1                 (fazka 1x45)
N120 Z-20
N130 X36 Z-35                (stozek)
N140 Z-50                    (koniec konturu)
N150 G00 X100 Z100
N160 T0202 (NOZ WYKANCZAJACY R0.4)
N170 G96 S250 M03
N180 G00 G42 X42 Z2          (korekcja promienia z prawej)
N190 G70 P90 Q140            (wykanczanie po konturze)
N200 G00 G40 X100 Z100 M09
N210 M05
N220 M30</pre>
<h4>Objaśnienia</h4>
<ul>
<li><b>G71</b> (cykl toczenia zgrubnego wzdłużnego) zbiera materiał warstwami po U2 mm, zostawiając naddatek <b>U0.4</b> na średnicy (0,2 mm na promieniu) i <b>W0.1</b> w osi Z. P i Q to numery pierwszego i ostatniego bloku konturu.</li>
<li><b>G70</b> wykonuje przejście wykańczające po tym samym konturze z posuwem z bloków konturu (F0.1).</li>
<li>Dojazd na X42 (większy od pręta o 2 mm na średnicy) i Z2 (2 mm przed czołem) zapewnia bezpieczne podejście.</li>
<li>Korekcja <b>G42</b> przy toczeniu zewnętrznym od konika do uchwytu (narzędzie przed osią). Bez korekcji promienia naroża na stożkach i fazkach powstają błędy kształtu (na powierzchniach walcowych i czołowych nie).</li>
</ul>
<h4>Przecinanie i rowki</h4>
<pre>T0303 (PRZECINAK SZER. 3)
G97 S800 M03                 (stale obroty przy przecinaniu)
G00 X42 Z-53                 (lewa krawedz noza, szerokosc 3 mm)
G01 X0 F0.05
G00 X100</pre>
<p>Przy przecinaniu do osi przy G96 obroty rosłyby do ograniczenia, dlatego bezpieczniej użyć G97 lub niskiego limitu G50.</p>
<div class="tip">Pułapka: w G71 Fanuc pierwszy blok U oznacza głębokość na promieniu, a w drugim bloku U oznacza naddatek na średnicy. Na egzaminie liczy się poprawne odczytanie, nie pamięć składni każdego sterowania.</div>` },
        { tytul: "Program frezowania konturu i kieszeni", tresc: `<h4>Zadanie</h4>
<p>Płyta 100 × 80 × 20 mm, zero W w lewym dolnym narożu na górnej powierzchni. Frezowanie konturu zewnętrznego prostokąta 80 × 60 (od X10 Y10 do X90 Y70) z zaokrągleniem R10 w narożu prawym górnym, głębokość 5 mm, frez palcowy Ø10 (T1, korektor D1 = 5).</p>
<h4>Program</h4>
<pre>O2001 (KONTUR)
N10 G21 G17 G40 G49 G80 G90
N20 T1 M06                  (wymiana narzedzia)
N30 G54 G00 X-10 Y-10       (dojazd poza materialem)
N40 G43 H1 Z50 S3200 M03    (korekcja dlugosci, obroty)
N50 Z2 M08
N60 G01 Z-5 F150            (wglebienie poza konturem)
N70 G41 D1 X10 F400         (najazd z korekcja promienia)
N80 Y70
N90 X80
N100 G02 X90 Y60 R10        (luk w prawo, naroze R10)
N110 G01 Y10
N120 X0                     (wyjscie za kontur)
N130 G40 G00 X-10 Y-10      (odwolanie korekcji)
N140 Z50 M09
N150 M05
N160 G28 G91 Z0
N170 M30</pre>
<h4>Analiza</h4>
<ul>
<li>Obroty: v<sub>c</sub> = 100 m/min, D = 10 mm → n ≈ 3200 obr/min. Posuw: f<sub>z</sub> = 0,04 mm, z = 3 → v<sub>f</sub> = 0,04·3·3200 ≈ 384, przyjęto 400 mm/min.</li>
<li>Kontur obiegany zgodnie z ruchem wskazówek zegara dla krawędzi zewnętrznej z <b>G41</b> daje frezowanie współbieżne.</li>
<li>Korekcję promienia włącza się i wyłącza w ruchu liniowym <b>poza konturem</b>, aby nie podciąć przedmiotu.</li>
<li>Łuk G02 od X80 Y70 do X90 Y60 z R10: środek w X80 Y60. W zapisie I, J: <code>G02 X90 Y60 I0 J-10</code> (I, J to odległość środka od punktu początkowego).</li>
</ul>
<h4>Kieszeń i otwory</h4>
<pre>(otwory Ø8,5 pod gwint M10 w punktach X30 Y40 i X60 Y40)
T2 M06 (WIERTLO 8.5)
G54 G00 X30 Y40
G43 H2 Z50 S1100 M03
G99 G83 Z-25 R2 Q4 F110     (wiercenie z wycofaniem co 4 mm)
X60                         (cykl powtarzany w nowym punkcie)
G80 G00 Z50                 (odwolanie cyklu)</pre>
<p>Kieszenie wykonuje się frezem wgłębiającym się po rampie lub helisie (frez bez ostrza przez środek nie może wgłębiać się pionowo), warstwami, z naddatkiem na wykończenie ścian.</p>
<div class="tip">G99 w cyklach frezarskich Fanuc oznacza powrót na płaszczyznę R (szybsze przejścia między otworami), G98 powrót na poziom początkowy (omijanie przeszkód, np. docisków).</div>` },
        { tytul: "Programowanie gwintów i parametryczne", tresc: `<h4>Gwintowanie na tokarce</h4>
<p>Na tokarce gwint wykonuje się nożem w wielu przejściach przy stałych obrotach <b>G97</b> (posuw musi być zsynchronizowany z wrzecionem). Posuw równa się <b>skokowi gwintu</b>.</p>
<pre>(gwint M20x1,5 na dlugosci 25 mm)
T0404 (NOZ DO GWINTU 60 st.)
G97 S800 M03
G00 X22 Z5
G76 P010060 Q50 R0.05
G76 X18.16 Z-25 P920 Q300 F1.5
(X18.16: srednica rdzenia = 20 - 2 · 0,92
 P920: wysokosc gwintu 0,92 mm w mikronach
 Q300: glebokosc pierwszego przejscia 0,3 mm
 F1.5: skok)</pre>
<p>Wysokość gwintu metrycznego zewnętrznego ≈ <b>0,613·P</b> (dla P = 1,5: 0,92 mm). Dobieg na początku (Z5) pozwala osiągnąć pełną prędkość posuwu przed wejściem w materiał. Pojedyncze przejście gwintujące to <b>G32</b> (Fanuc) lub G33 (Sinumerik), a uproszczony cykl G92.</p>
<h4>Gwintowanie gwintownikiem na centrum</h4>
<pre>T3 M06 (GWINTOWNIK M10)
G54 G00 X30 Y40
G43 H3 Z50 S300 M03
G84 Z-20 R5 F450           (F = S · P = 300 · 1,5)
G80</pre>
<p>Gwintowanie sztywne (synchroniczne, M29) nie wymaga uchwytu kompensacyjnego. Posuw w mm/min = obroty × skok.</p>
<h4>Podprogramy i programowanie parametryczne</h4>
<ul>
<li>Powtarzalny fragment (np. rowek, kontur na kilku głębokościach) zapisuje się w <b>podprogramie</b>: wywołanie <code>M98 P1010</code> (Fanuc) lub nazwą (Sinumerik), powrót <code>M99</code>.</li>
<li>Programowanie <b>przyrostowe w podprogramie</b> (G91) pozwala wykonać tę samą operację w różnych miejscach.</li>
<li>Zmienne: Fanuc Custom Macro <code>#100 = 5</code>, Sinumerik <code>R1 = 5</code>; skoki warunkowe <code>IF [#100 LT 20] GOTO 50</code>.</li>
</ul>
<h4>Programowanie w Sinumerik (różnice)</h4>
<p>Program toczenia w Sinumerik używa cykli <b>CYCLE95</b> (skrawanie konturu), CYCLE97 (gwint), LIMS (ograniczenie obrotów), kodów G70/G71 do jednostek (cale/mm). Narzędzie wybiera się <code>T1 D1</code>. Programowanie dialogowe (ShopTurn, ShopMill) pozwala tworzyć programy w formularzach bez pisania kodu.</p>
<h4>Programowanie CAM</h4>
<p>Systemy CAD/CAM (np. Fusion, Mastercam, SolidCAM) generują ścieżki z modelu 3D. Postprocesor tłumaczy je na kod konkretnego sterowania. Program trzeba zweryfikować w symulacji (kolizje, przejazdy szybkie przez materiał).</p>
<div class="tip">Przy gwintowaniu gwintownikiem posuw w mm/min to iloczyn obrotów i skoku. Dla M10 (P = 1,5) przy 300 obr/min wynosi 450 mm/min. Inny posuw złamie gwintownik.</div>` }
      ],
      pytania: [
        Q("Cykl G71 na tokarce Fanuc służy do", "toczenia zgrubnego wzdłużnego", "wykańczania konturu po zgrubnym", "gwintowania wielokrotnego", "wiercenia z wycofaniem wiertła", "G70 to wykańczanie, G76 gwintowanie."),
        Q("Zapis U0.4 w drugim bloku cyklu G71 oznacza", "naddatek 0,4 mm na średnicy", "głębokość skrawania 0,4 mm", "posuw 0,4 mm na obrót", "odskok narzędzia 0,4 mm", "Naddatek na promieniu wynosi 0,2 mm."),
        Q("Korekcję promienia narzędzia należy włączać", "w ruchu liniowym przed konturem", "w ruchu po łuku na konturze", "w bloku G00 już na konturze", "po zakończeniu obróbki konturu", "Inaczej narzędzie podetnie przedmiot."),
        Q("Cykl G83 na frezarce oznacza", "wiercenie z okresowym wycofaniem wiertła", "gwintowanie gwintownikiem", "wiercenie zwykłe bez wycofania", "odwołanie cyklu", "Stosowany przy otworach głębokich."),
        Q("Posuw w mm/min przy gwintowaniu gwintownikiem M10 (skok 1,5 mm) przy 300 obr/min wynosi", "450 mm/min", "300 mm/min", "200 mm/min", "1,5 mm/min", "F = S · P."),
        Q("Gwintowanie nożem na tokarce wykonuje się przy", "stałych obrotach G97", "stałej prędkości skrawania G96", "posuwie w mm/min G98", "wyłączonym wrzecionie", "Posuw musi być zsynchronizowany z obrotami."),
        Q("Wywołanie podprogramu w sterowaniu Fanuc realizuje funkcja", "M98", "M99", "M30", "M06", "M99 to powrót z podprogramu."),
        Q("Łuk G02 od punktu X80 Y70 do X90 Y60 o środku w X80 Y60 można zapisać jako", "G02 X90 Y60 I0 J-10", "G02 X90 Y60 I10 J0", "G03 X90 Y60 R10", "G02 X90 Y60 I80 J60", "I, J to odległość środka od punktu początkowego.")
      ]
    },
    {
      id: "pomiary", tytul: "Pomiary warsztatowe i BHP", opis: "Zmierzysz wykonany przedmiot przyrządami suwmiarkowymi, mikrometrycznymi i sprawdzianami oraz zachowasz zasady BHP.",
      lekcje: [
        { tytul: "Suwmiarki i mikrometry", tresc: `<h4>Suwmiarka</h4>
<p>Dokładność odczytu zależy od noniusza: <b>0,1 mm</b> (noniusz 10 działek na 9 mm), <b>0,05 mm</b> (20 działek), <b>0,02 mm</b> (50 działek na 49 mm). Suwmiarki cyfrowe mają rozdzielczość 0,01 mm, ale ich dokładność to zwykle ±0,02-0,03 mm.</p>
<pre>Odczyt: zero noniusza za kreską 23 mm na prowadnicy,
z kreską prowadnicy pokrywa się 7. kreska noniusza 0,02
wymiar = 23 + 7 · 0,02 = 23,14 mm</pre>
<p>Suwmiarka uniwersalna mierzy wymiary zewnętrzne (szczęki), wewnętrzne (krawędzie pomiarowe górne) i głębokości (wysuwka). Inne: suwmiarka modułowa (grubość zęba), wysokościomierz (trasowanie i pomiar wysokości), głębokościomierz.</p>
<h4>Mikrometr</h4>
<p>Skok śruby mikrometrycznej <b>0,5 mm</b>, bęben podzielony na <b>50 działek</b> = 0,01 mm. Zakresy co 25 mm: 0-25, 25-50, 50-75. Mikrometr z noniuszem pozwala odczytać 0,001 mm.</p>
<pre>Na tulei widoczne: 12 mm + kreska połówkowa (0,5)
bęben: 28. działka → 0,28
wymiar = 12 + 0,5 + 0,28 = 12,78 mm</pre>
<h4>Zasady pomiaru</h4>
<ul>
<li>Sprawdzenie zera (dla 25-50 przy pomocy wzorca 25 mm), czyste powierzchnie pomiarowe.</li>
<li>Docisk mikrometru tylko <b>sprzęgiełkiem</b> (grzechotką), aby nacisk był stały.</li>
<li>Pomiar w temperaturze odniesienia <b>20°C</b>; przedmiot gorący po obróbce ma większy wymiar (stal: ok. 0,011 mm na 100 mm i 10°C).</li>
<li>Średnice mierzy się w dwóch kierunkach prostopadłych i kilku przekrojach: wykrywa owalność i stożkowość.</li>
<li>Błąd paralaksy: odczyt pod kątem prostym do skali.</li>
</ul>
<h4>Średnicówki i czujniki</h4>
<p>Średnicówka mikrometryczna, średnicówka czujnikowa (ustawiana na pierścieniu wzorcowym lub mikrometrem, mierzy odchyłkę od nastawy), czujnik zegarowy (działka 0,01 mm, pomiar bicia promieniowego i osiowego), czujnik dźwigniowy (0,01 lub 0,002 mm). Pomiar bicia: wałek w kłach, obrót o 360°, bicie = różnica wskazań max - min.</p>
<div class="tip">Narzędzie dobiera się tak, by jego dokładność była około 10 razy lepsza od tolerancji. Tolerancji 0,02 mm nie sprawdzisz poprawnie suwmiarką 0,05 mm, potrzebny jest mikrometr.</div>` },
        { tytul: "Sprawdziany, chropowatość, kontrola jakości", tresc: `<h4>Sprawdziany</h4>
<p>Służą do oceny, czy wymiar mieści się w tolerancji, bez odczytu wartości. Strona <b>przechodnia (P, „go”)</b> odpowiada wymiarowi zapewniającemu maksimum materiału, strona <b>nieprzechodnia (NP, „no go”)</b>, oznaczona kolorem czerwonym, odpowiada minimum materiału.</p>
<div class="tw"><table><tr><th>Sprawdzian</th><th>Do</th><th>Strona P</th><th>Strona NP</th></tr>
<tr><td>Trzpieniowy (tłoczkowy)</td><td>otworów</td><td>wymiar dolny A<sub>o</sub></td><td>wymiar górny B<sub>o</sub></td></tr>
<tr><td>Szczękowy</td><td>wałków</td><td>wymiar górny B<sub>w</sub></td><td>wymiar dolny A<sub>w</sub></td></tr></table></div>
<p>Przedmiot jest dobry, gdy strona P przechodzi, a NP nie przechodzi. Jeśli przechodzi NP przy otworze, otwór jest za duży (brak nienaprawialny); jeśli nie przechodzi P, otwór jest za mały (brak naprawialny, można dorobić). Inne: sprawdziany do gwintów (pierścienie i trzpienie), promieniowe, płytki wzorcowe (klasy 0, 1, 2), szczelinomierze, wzorniki do gwintów.</p>
<h4>Pomiar chropowatości</h4>
<p>Profilometr stykowy (igła prowadzona po powierzchni, wynik Ra, Rz) lub porównanie z <b>wzorcami chropowatości</b> (wzrokowo i dotykiem paznokcia). Długość pomiarowa zwykle 5 odcinków elementarnych (np. 5 × 0,8 mm). Pomiar prowadzi się prostopadle do śladów obróbki.</p>
<h4>Pomiary kątów i kształtu</h4>
<p>Kątomierz uniwersalny z noniuszem (5'), liniał sinusowy z płytkami wzorcowymi (dokładne kąty: h = L·sin α), kątowniki 90°, poziomnice, liniały krawędziowe (płaskość metodą szczeliny świetlnej), płyty pomiarowe. Współrzędnościowe maszyny pomiarowe (CMM) mierzą złożone kształty i tolerancje geometryczne.</p>
<h4>Kontrola w produkcji</h4>
<ul>
<li><b>Pierwsza sztuka</b>: pełny pomiar przed puszczeniem serii.</li>
<li>Kontrola międzyoperacyjna i końcowa, karta pomiarowa, statystyczna kontrola procesu (SPC).</li>
<li>Sondy pomiarowe w obrabiarce (pomiar w procesie, automatyczna korekta zużycia).</li>
<li>Przyrządy pomiarowe podlegają okresowemu <b>wzorcowaniu</b> (świadectwo, naklejka z datą).</li>
</ul>
<div class="tip">Zapamiętaj: przy sprawdzianie do otworu przejście strony nieprzechodniej oznacza brak nienaprawialny, bo materiału nie da się dodać.</div>` },
        { tytul: "BHP i eksploatacja obrabiarek", tresc: `<h4>Zagrożenia przy obrabiarkach</h4>
<ul>
<li>Pochwycenie przez wirujące elementy (wrzeciono, uchwyt, wiertło, wiór wstęgowy): zakaz rękawic przy obracających się elementach, odzież przylegająca, włosy pod nakryciem.</li>
<li>Wyrzucenie przedmiotu lub narzędzia: prawidłowe zamocowanie, osłony, zamknięte drzwi obrabiarki CNC (blokada uniemożliwia start przy otwartych drzwiach).</li>
<li>Wióry: okulary ochronne, haczyk lub szczotka do usuwania, nie dmuchać sprężonym powietrzem w kierunku ludzi.</li>
<li>Pękająca ściernica: osłona, sprawdzenie prędkości dopuszczalnej, próba dźwięku, szlifowanie z ekranem lub w okularach.</li>
<li>Hałas (ochronniki słuchu powyżej 85 dB), ciecze obróbkowe (rękawice przy pracach obsługowych, krem ochronny).</li>
</ul>
<h4>Zasady pracy</h4>
<ol>
<li>Przed pracą sprawdź stan obrabiarki, osłon, wyłącznika awaryjnego, poziom oleju i chłodziwa.</li>
<li>Zmianę narzędzia, mocowanie, pomiar przedmiotu i czyszczenie wykonuj przy <b>zatrzymanym wrzecionie</b>.</li>
<li>Nie pozostawiaj klucza w uchwycie i nie odchodź od pracującej obrabiarki konwencjonalnej.</li>
<li>Na CNC nowy program uruchamiaj w trybie pojedynczego bloku z obniżonym posuwem, ręką przy przycisku STOP lub regulatorze override.</li>
<li>Po pracy wyłącz obrabiarkę, oczyść ją z wiórów, nasmaruj prowadnice.</li>
</ol>
<h4>Obsługa codzienna i okresowa</h4>
<div class="tw"><table><tr><th>Czas</th><th>Czynności</th></tr>
<tr><td>Codziennie</td><td>poziom oleju smarującego prowadnice, chłodziwo (stężenie), czystość, ciśnienie powietrza, rozgrzanie wrzeciona na CNC</td></tr>
<tr><td>Co tydzień</td><td>czyszczenie filtrów, przenośnika wiórów, kontrola szczęk i uchwytów</td></tr>
<tr><td>Okresowo</td><td>wymiana oleju w przekładniach, kontrola luzów, geometrii obrabiarki (bicie wrzeciona, równoległość), kopia programów i parametrów</td></tr></table></div>
<h4>Ochrona środowiska</h4>
<p>Wióry segreguje się według materiału (stal, aluminium, mosiądz) i oddaje do skupu, oddzielając chłodziwo (wirówki, prasy brykietujące). Zużyte emulsje, oleje i czyściwo to <b>odpady niebezpieczne</b>, przekazywane firmom z zezwoleniem.</p>
<div class="tip">Typowe pytanie: „Kiedy wolno zmierzyć przedmiot na tokarce?”. Wyłącznie po zatrzymaniu wrzeciona i odsunięciu narzędzia.</div>` }
      ],
      pytania: [
        Q("Suwmiarka z noniuszem o 50 działkach ma dokładność odczytu", "0,02 mm", "0,05 mm", "0,1 mm", "0,01 mm", "1 mm / 50 = 0,02 mm."),
        Q("Na tulei mikrometru widać 12 mm i kreskę połówkową, a na bębnie 28 działkę. Wymiar wynosi", "12,78 mm", "12,28 mm", "40,5 mm", "12,528 mm", "12 + 0,5 + 0,28."),
        Q("Działka elementarna bębna mikrometru o skoku śruby 0,5 mm i 50 działkach wynosi", "0,01 mm", "0,05 mm", "0,001 mm", "0,1 mm", "0,5 / 50 = 0,01 mm."),
        Q("Docisk mikrometru do mierzonego przedmiotu zapewnia się za pomocą", "sprzęgiełka (grzechotki)", "zacisku blokady", "bębna z dużą siłą", "młotka gumowego", "Zapewnia stały nacisk pomiarowy."),
        Q("Strona przechodnia sprawdzianu trzpieniowego do otworu odpowiada wymiarowi", "dolnemu otworu", "górnemu otworu", "nominalnemu bez tolerancji", "średniemu", "Strona NP odpowiada wymiarowi górnemu."),
        Q("Jeśli strona nieprzechodnia sprawdzianu wchodzi w otwór, to otwór jest", "za duży (brak nienaprawialny)", "za mały (brak naprawialny)", "dobry", "owalny, ale dobry", "Materiału nie można dodać."),
        Q("Temperatura odniesienia dla pomiarów warsztatowych wynosi", "20°C", "0°C", "25°C", "15°C", "Normą przyjętą jest 20°C."),
        Q("Pomiar przedmiotu zamocowanego w tokarce wykonuje się", "po zatrzymaniu wrzeciona", "przy obrotach biegu jałowego", "w czasie skrawania wykańczającego", "przy włączonym posuwie", "Pomiar przy obracającym się przedmiocie grozi pochwyceniem.")
      ]
    }
  ]);

  pod("MEC.08", [
    {
      id: "obrobka-reczna", tytul: "Obróbka ręczna metali", opis: "Wykonasz trasowanie, cięcie, piłowanie i skrobanie z doborem narzędzi do materiału i dokładności.",
      lekcje: [
        { tytul: "Trasowanie", tresc: `<h4>Rodzaje trasowania</h4>
<p><b>Płaskie</b>: linie na jednej powierzchni (blachy, płaskowniki). <b>Przestrzenne</b>: linie na kilku płaszczyznach przedmiotu, wymaga płyty traserskiej, pryzm, kątowników i wysokościomierza.</p>
<h4>Narzędzia traserskie</h4>
<div class="tw"><table><tr><th>Narzędzie</th><th>Zastosowanie</th></tr>
<tr><td>Rysik</td><td>wykreślanie linii (stalowy hartowany, z węglikiem)</td></tr>
<tr><td>Punktak</td><td>punktowanie linii i środków otworów (kąt ostrza 60°, dla środków pod wiercenie 90°)</td></tr>
<tr><td>Cyrkiel traserski</td><td>okręgi i łuki, odkładanie odcinków</td></tr>
<tr><td>Znacznik (wysokościomierz traserski)</td><td>linie równoległe do płyty na stałej wysokości</td></tr>
<tr><td>Kątownik, kątomierz, środkownik</td><td>linie prostopadłe i pod kątem, wyznaczanie środka wałka</td></tr>
<tr><td>Płyta traserska</td><td>baza do trasowania przestrzennego (żeliwna, skrobana)</td></tr></table></div>
<h4>Przygotowanie powierzchni</h4>
<p>Powierzchnię oczyszcza się i pokrywa: kredą rozpuszczoną w wodzie (odlewy surowe), roztworem siarczanu miedzi (stal obrobiona: tworzy cienką warstwę miedzi), <b>lakierem traserskim</b> (szybkoschnący, kolor niebieski lub czerwony). Na aluminium nie stosuje się siarczanu miedzi.</p>
<h4>Kolejność trasowania</h4>
<ol>
<li>Zapoznanie z rysunkiem, wybór <b>bazy traserskiej</b> (powierzchnia lub linia, od której odmierza się wymiary; najlepiej zgodna z bazą wymiarową rysunku).</li>
<li>Sprawdzenie naddatków (czy z półfabrykatu da się wykonać przedmiot).</li>
<li>Wyznaczenie osi symetrii i linii bazowych, potem pozostałych linii.</li>
<li>Wykreślenie okręgów i łuków po napunktowaniu środków.</li>
<li>Napunktowanie linii (odstępy 5-10 mm na prostych, gęściej na łukach), aby były widoczne po obróbce.</li>
</ol>
<h4>Wyznaczanie środka wałka</h4>
<p>Środkownikiem (kątownik z liniałem dzielącym kąt na pół): wykreśla się dwie lub trzy linie pod różnymi kątami, przecięcie to środek. Można też użyć cyrkla traserskiego z czterech punktów na obwodzie albo pryzmy i znacznika (obrót o 90°).</p>
<h4>Dokładność</h4>
<p>Dokładność trasowania wynosi zwykle <b>0,2-0,5 mm</b>, dlatego do wymiarów tolerowanych dokładniej niż ok. 0,1 mm przedmiot dalej się mierzy przyrządami, a nie ocenia po linii. Linia trasowania powinna być cienka i wykreślona jednym pociągnięciem rysika.</p>
<div class="tip">Punktak do wstępnego zaznaczenia środka otworu ma ostrze 60°, a punktak do nakiełkowania pod wiertło szersze. Cięższe uderzenie młotkiem wykonuje się dopiero po sprawdzeniu położenia punktu.</div>` },
        { tytul: "Cięcie i przecinanie", tresc: `<h4>Piłka ręczna</h4>
<p>Brzeszczot zakłada się <b>zębami do przodu</b> (od rękojeści), praca podczas ruchu do przodu, powrót bez nacisku. Tempo ok. 40-60 ruchów na minutę, wykorzystując całą długość brzeszczotu. Podziałkę dobiera się do grubości materiału: <b>co najmniej 3 zęby</b> powinny jednocześnie pracować w materiale.</p>
<div class="tw"><table><tr><th>Liczba zębów na cal (TPI)</th><th>Materiał</th></tr>
<tr><td>14-18</td><td>miękkie metale, materiały grube, stal konstrukcyjna</td></tr>
<tr><td>24</td><td>rury, profile, stal średniej grubości</td></tr>
<tr><td>32</td><td>cienkie blachy i rurki cienkościenne</td></tr></table></div>
<p>Rozwiedzenie zębów (na przemian lub falisto) zapobiega zakleszczaniu brzeszczotu w rzazie. Po pęknięciu brzeszczotu w połowie rzazu nowy brzeszczot nie zmieści się w starym rzazie: zaczyna się z drugiej strony.</p>
<h4>Cięcie nożycami i maszynowe</h4>
<ul>
<li><b>Nożyce ręczne</b>: blachy stalowe do ok. 1 mm (prawe, lewe, proste), nożyce dźwigniowe do grubszych blach.</li>
<li><b>Gilotyna</b> (nożyce mechaniczne): cięcie prostoliniowe blach; szczelina między nożami ok. 5-10% grubości blachy.</li>
<li><b>Piły mechaniczne</b>: taśmowe (najpopularniejsze, cięcie prętów i profili), tarczowe, ramowe.</li>
<li>Cięcie <b>termiczne</b>: tlenowo-acetylenowe (stal węglowa), plazmowe (wszystkie metale przewodzące), laserowe (precyzyjne kształty), strumieniem wody (bez strefy wpływu ciepła).</li>
<li><b>Szlifierka kątowa</b> z tarczą do cięcia: sprawdź prędkość dopuszczalną tarczy, osłona, okulary, nie ciąć boczną powierzchnią tarczy.</li>
</ul>
<h4>Przecinanie przecinakiem</h4>
<p>Przecinak (kąt ostrza 60° dla stali, 70° dla żeliwa i brązu, 35-45° dla metali miękkich), wycinak (rowki), młotek ślusarski. Blachę przecina się na płycie lub w imadle wzdłuż linii szczęk. Okulary ochronne obowiązkowe, odpryski są ostre.</p>
<h4>Gięcie</h4>
<p>Minimalny promień gięcia zależy od grubości i plastyczności materiału (dla stali miękkiej ok. 1-2 grubości blachy). Długość rozwinięcia liczy się po <b>warstwie obojętnej</b> (przy małych promieniach przesuniętej w stronę wnętrza gięcia). Blachy gnie się na krawędziarce lub w imadle z nakładkami, rury z wypełnieniem piaskiem lub na giętarce.</p>
<div class="tip">Pytanie typowe: „Brzeszczot o jakiej podziałce do cięcia cienkiej blachy?”. Wybierz największą liczbę zębów (32 TPI), aby w materiale zawsze pracowały co najmniej 3 zęby.</div>` },
        { tytul: "Piłowanie, skrobanie i docieranie", tresc: `<h4>Pilniki</h4>
<p>Podział według <b>nacięcia</b> (liczby nacięć na 10 mm): zdzieraki (nr 0, zgrubnie), równiaki (nr 1-2), gładziki (nr 3-4), jedwabniki (nr 5-6, najdrobniejsze). Według przekroju: płaski, kwadratowy, trójkątny, okrągły, półokrągły, nożowy. Pilniki igiełkowe do drobnych prac. Do metali miękkich (aluminium, miedź) używa się pilników o nacięciu <b>pojedynczym</b> lub tarnikowym, które nie zapychają się szybko.</p>
<h4>Technika piłowania</h4>
<ul>
<li>Wysokość imadła: łokieć zgiętej ręki opartej o szczęki imadła (przy pięści pod brodą).</li>
<li>Ruch roboczy od siebie, z naciskiem; powrót bez nacisku. Nacisk rozłożony tak, by pilnik prowadzić poziomo (więcej lewą ręką na początku ruchu, prawą na końcu).</li>
<li>Piłowanie <b>na krzyż</b> (zmiana kierunku o ok. 45-90°) pozwala kontrolować płaskość.</li>
<li>Płaskość sprawdza się liniałem krawędziowym metodą szczeliny świetlnej, kąt prostym kątownikiem.</li>
<li>Pilnik czyści się szczotką drucianą; nie wolno dotykać powierzchni piłowanej palcami (tłuszcz powoduje ślizganie).</li>
<li>Pilnik musi mieć rękojeść osadzoną, bo ostry chwyt (trzpień) może skaleczyć dłoń.</li>
</ul>
<h4>Skrobanie</h4>
<p>Usuwanie cienkich warstw (0,005-0,01 mm na przejście) skrobakiem, aby uzyskać bardzo dokładną płaskość i powierzchnię nośną (prowadnice obrabiarek, panewki łożysk). Powierzchnię wzorcową (płytę) pokrywa się tuszem (farbą traserską), przykłada przedmiot i skrobie widoczne punkty styku. Ocena: <b>liczba punktów styku na kwadracie 25 × 25 mm</b>, np. 6-8 dla powierzchni zwykłych, 16-25 dla dokładnych prowadnic.</p>
<h4>Docieranie</h4>
<p>Wygładzanie i dopasowanie powierzchni za pomocą <b>past lub proszków ściernych</b> (elektrokorund, węglik krzemu, diament) na docieraku (żeliwny, miedziany). Stosowane do zaworów i gniazd (szczelność), płytek wzorcowych, sprawdzianów. Zapewnia Ra 0,05-0,2 µm. Po docieraniu dokładnie usuwa się resztki pasty, bo spowodowałyby zużycie ścierne.</p>
<h4>Gwintowanie ręczne i rozwiercanie (zapowiedź)</h4>
<p>Obróbka ręczna kończy się często wierceniem, rozwiercaniem i gwintowaniem otworów, co omawia kolejny podkurs.</p>
<div class="tip">Kolejność pilników przy piłowaniu na wymiar: zdzierak (zgrubnie), równiak, gładzik. Ostatnie 0,1-0,2 mm zbiera się gładzikiem, sprawdzając wymiar suwmiarką lub mikrometrem.</div>` }
      ],
      pytania: [
        Q("Bazą traserską nazywamy", "powierzchnię, od której odmierza się wymiary", "żeliwną płytę, na której leży przedmiot", "pierwszy punkt napunktowany na przedmiocie", "zawsze geometryczny środek przedmiotu", "Baza może być też linią. Najlepiej, gdy pokrywa się z bazą wymiarową rysunku."),
        Q("Do pokrywania obrobionej powierzchni stali przed trasowaniem stosuje się", "roztwór siarczanu miedzi", "smar grafitowy w paście", "olej maszynowy rozcieńczony", "kredę rozrobioną z olejem", "Stosuje się też lakier traserski. Kreda z wodą stosowana jest na odlewach surowych."),
        Q("Brzeszczot w piłce ręcznej zakłada się", "zębami skierowanymi do przodu, od rękojeści", "zębami skierowanymi do rękojeści", "dowolnie", "zębami w górę", "Piłka skrawa w ruchu od siebie."),
        Q("Do cięcia cienkiej blachy należy wybrać brzeszczot o liczbie zębów na cal", "32", "14", "18", "10", "Co najmniej 3 zęby muszą być w materiale."),
        Q("Pilnik o najdrobniejszym nacięciu to", "jedwabnik", "zdzierak", "równiak", "tarnik", "Kolejność: zdzierak, równiak, gładzik, jedwabnik."),
        Q("Płaskość piłowanej powierzchni sprawdza się", "liniałem krawędziowym pod światło", "suwmiarką w kilku miejscach", "mikrometrem zewnętrznym", "sprawdzianem szczękowym", "Prześwit pod liniałem pokazuje nierówności."),
        Q("Jakość skrobania ocenia się", "liczbą punktów styku na 25 × 25 mm", "pomiarem twardości powierzchni", "pomiarem średnicy otworu", "czasem trwania skrobania", "Dokładne prowadnice mają 16-25 punktów."),
        Q("Do uzyskania szczelności gniazda zaworu stosuje się", "docieranie pastą ścierną", "piłowanie zdzierakiem", "cięcie plazmowe", "trasowanie przestrzenne", "Docieranie daje bardzo gładką, dopasowaną powierzchnię.")
      ]
    },
    {
      id: "otwory-gwinty", tytul: "Wiercenie, rozwiercanie, gwintowanie", opis: "Wykonasz otwory i gwinty o wymaganej dokładności z prawidłowym doborem narzędzi i parametrów.",
      lekcje: [
        { tytul: "Wiercenie i parametry", tresc: `<h4>Wiertło kręte</h4>
<p>Część robocza (dwie krawędzie skrawające, ścin, łysinki prowadzące), chwyt walcowy lub stożkowy (Morse). Kąt wierzchołkowy standardowo <b>118°</b> (stal, żeliwo), 130-140° dla stali twardych i nierdzewnych, mniejszy (ok. 90-100°) dla tworzyw i metali miękkich. Kąt przyłożenia ok. 8-12°. Obie krawędzie muszą mieć <b>równą długość i kąt</b>, inaczej otwór wychodzi większy i owalny.</p>
<h4>Parametry</h4>
<pre>n = 1000 · v_c / (π · D)
Wiertło HSS Ø10 w stali konstrukcyjnej, v_c = 25 m/min
n = 1000 · 25 / (3,14 · 10) ≈ 800 obr/min
posuw f ≈ 0,15-0,2 mm/obr</pre>
<p>Im większe wiertło, tym mniejsze obroty. Typowe prędkości dla HSS: stal 20-30 m/min, aluminium 60-100 m/min, stal nierdzewna 10-15 m/min. Wiertła węglikowe pozwalają na 3-5 razy większe prędkości.</p>
<h4>Kolejność wykonania otworu</h4>
<ol>
<li>Trasowanie i napunktowanie środka.</li>
<li><b>Nawiercenie</b> nawiertakiem (kąt 90° lub 120°): zapobiega zejściu wiertła.</li>
<li>Wiercenie wstępne mniejszym wiertłem dla otworów powyżej ok. 12-15 mm (ścin większego wiertła pracuje bez obciążenia).</li>
<li>Wiercenie na wymiar lub pod rozwiercanie.</li>
<li>Pogłębianie lub fazowanie krawędzi (pogłębiacz stożkowy 90° pod łby wpuszczane, walcowy pod łby walcowe).</li>
</ol>
<h4>Głębokie otwory</h4>
<p>Przy głębokości powyżej ok. 3-5 × D wiertło okresowo się wycofuje dla usunięcia wiórów (wiercenie z wycofaniem). Stosuje się obfite chłodzenie lub wiertła z kanałami wewnętrznymi.</p>
<h4>Mocowanie przy wierceniu</h4>
<p>Przedmiot mocuje się w imadle maszynowym, na płycie z dociskami lub w przyrządzie wiertarskim z tulejami prowadzącymi (produkcja seryjna). <b>Nigdy nie trzymaj przedmiotu ręką</b>: zakleszczone wiertło obraca przedmiotem. Przy wierceniu na przelot podkłada się drewnianą lub stalową podkładkę i zmniejsza posuw przy wyjściu wiertła.</p>
<h4>Błędy wiercenia</h4>
<div class="tw"><table><tr><th>Błąd</th><th>Przyczyna</th></tr>
<tr><td>Otwór za duży, owalny</td><td>nierówne krawędzie, bicie wiertła</td></tr>
<tr><td>Zejście z osi</td><td>brak nawiercenia, nierówna powierzchnia, długi wysięg</td></tr>
<tr><td>Złamanie wiertła</td><td>zbyt duży posuw, zapchane rowki wiórowe, wyjście na przelot</td></tr>
<tr><td>Przegrzanie, niebieskie wiórki</td><td>za duże obroty, brak chłodzenia, tępe wiertło</td></tr></table></div>
<div class="tip">Wiercenie zapewnia dokładność ok. IT11-IT12 i Ra 6,3-12,5. Dokładniejsze otwory (np. H7) wymagają rozwiercania lub wytaczania.</div>` },
        { tytul: "Rozwiercanie i pogłębianie", tresc: `<h4>Rozwiertaki</h4>
<p>Rozwiercanie to obróbka wykańczająca otworu, zapewnia <b>IT7-IT8</b> i chropowatość <b>Ra 0,8-1,6</b>. Rodzaje: ręczne (długa część prowadząca, chwyt z kwadratem pod pokrętło), maszynowe (krótsze, chwyt walcowy lub stożkowy), nastawne, stożkowe (otwory pod kołki stożkowe 1:50), zdzieraki i wykańczaki.</p>
<h4>Naddatek na rozwiercanie</h4>
<div class="tw"><table><tr><th>Średnica otworu</th><th>Naddatek na średnicy</th></tr>
<tr><td>do 6 mm</td><td>ok. 0,1-0,15 mm</td></tr>
<tr><td>6-20 mm</td><td>ok. 0,2-0,3 mm</td></tr>
<tr><td>20-50 mm</td><td>ok. 0,3-0,5 mm</td></tr></table></div>
<p>Przykład: otwór Ø10H7: wiercenie wiertłem <b>Ø9,8</b>, potem rozwiercanie Ø10H7. Za mały naddatek: rozwiertak ślizga się i nie wygładza; za duży: przeciąża ostrza, otwór niedokładny.</p>
<h4>Zasady rozwiercania</h4>
<ul>
<li>Prędkość skrawania ok. <b>1/3-1/2 prędkości wiercenia</b>, posuw większy niż przy wierceniu (ok. 2-3 razy).</li>
<li>Obracać tylko w kierunku skrawania, także przy wyjmowaniu narzędzia z otworu. Obrót wsteczny tępi ostrza i rysuje otwór.</li>
<li>Smarowanie: olej, emulsja; żeliwo na sucho lub z naftą.</li>
<li>Rozwiertak ręczny prowadzi się prostopadle, z równomiernym naciskiem, pokrętłem dwuramiennym.</li>
<li>Rozwiertak maszynowy mocuje się w oprawce wahliwej, która kompensuje niewspółosiowość wrzeciona i otworu.</li>
</ul>
<h4>Pogłębianie i nakiełkowanie</h4>
<p><b>Pogłębiacze</b>: stożkowe 90° (pod łby wpuszczane śrub i nitów), 60° (nakiełki), walcowe z czopem prowadzącym (gniazda pod łby śrub walcowych z gniazdem sześciokątnym), czołowe (wyrównanie powierzchni pod nakrętki). Wymiary gniazd podają normy, np. dla śruby M8 z łbem walcowym gniazdo ok. Ø14 głębokości ok. 8,6 mm.</p>
<p><b>Nakiełki</b> (otwory środkowe z nakiełkiem 60°) wykonuje się nawiertakiem na czołach wałków przed toczeniem w kłach; typ A (bez fazki ochronnej), B (z fazką ochronną 120°).</p>
<h4>Kontrola otworu</h4>
<p>Sprawdzian trzpieniowy dwugraniczny (P i NP), średnicówka czujnikowa, średnicówka trzypunktowa. Głębokość otworu: głębokościomierz suwmiarkowy.</p>
<div class="tip">Najczęstsza pułapka: obrót rozwiertaka w lewo przy wyjmowaniu. Prawidłowo: wyjmować obracając cały czas w kierunku skrawania.</div>` },
        { tytul: "Gwintowanie ręczne i maszynowe", tresc: `<h4>Otwór pod gwint</h4>
<p>Średnica wiertła pod gwint metryczny zwykły: <b>D<sub>w</sub> ≈ d - P</b> (średnica nominalna minus skok).</p>
<div class="tw"><table><tr><th>Gwint</th><th>Skok P</th><th>Wiertło</th></tr>
<tr><td>M4</td><td>0,7</td><td>3,3</td></tr>
<tr><td>M5</td><td>0,8</td><td>4,2</td></tr>
<tr><td>M6</td><td>1,0</td><td>5,0</td></tr>
<tr><td>M8</td><td>1,25</td><td>6,8</td></tr>
<tr><td>M10</td><td>1,5</td><td>8,5</td></tr>
<tr><td>M12</td><td>1,75</td><td>10,2</td></tr>
<tr><td>M16</td><td>2,0</td><td>14,0</td></tr></table></div>
<p>Dla gwintu drobnozwojowego M10×1: wiertło 9,0. Otwór nieprzelotowy wierci się głębiej niż długość gwintu (o ok. 3-5 skoków), bo gwintownik ma część skrawającą (nakrój) bez pełnego zarysu.</p>
<h4>Gwintowniki</h4>
<ul>
<li><b>Komplet ręczny</b>: 3 sztuki (wstępny, pośredni, wykańczający, oznaczone 1, 2, 3 pierścieniami lub kreskami) lub 2 sztuki dla gwintów drobnych.</li>
<li>Gwintowniki <b>maszynowe</b>: jeden przelot; z rowkami prostymi (otwory przelotowe, materiały kruche), z rowkami <b>śrubowymi</b> (otwory nieprzelotowe: wiór wyprowadzany do góry), z nakrojem skośnym (przelotowe: wiór wypychany do przodu).</li>
<li>Wygniataki: gwint bez wióra (materiały plastyczne), otwór pod gwint większy niż dla gwintownika.</li>
</ul>
<h4>Technika ręczna</h4>
<ol>
<li>Sfazowanie otworu, zamocowanie przedmiotu.</li>
<li>Gwintownik w pokrętle, ustawiony <b>prostopadle</b> (sprawdzić kątownikiem po 2-3 obrotach).</li>
<li>Pół do jednego obrotu do przodu, ok. ćwierć obrotu wstecz (łamanie wióra).</li>
<li>Smarowanie olejem (stal), na sucho lub naftą (żeliwo, aluminium specjalne preparaty).</li>
<li>Kolejno gwintownik 1, 2, 3; sprawdzenie sprawdzianem trzpieniowym gwintowym lub śrubą.</li>
</ol>
<h4>Gwinty zewnętrzne</h4>
<p>Wykonuje się <b>narzynką</b> w oprawce (pokrętle). Średnica pręta nieco mniejsza od nominalnej: ok. <b>d - 0,1·P</b> (np. M10 na pręcie ok. Ø9,85), koniec pręta sfazowany. Narzynki mają regulację średnicy (rozcięte). Gwinty dokładne wykonuje się na tokarce lub walcuje.</p>
<h4>Usuwanie złamanego gwintownika</h4>
<p>Wykrętak do gwintowników (palce w rowkach), elektrodrążarka, rozkruszanie (gwintownik HSS jest kruchy). Profilaktyka: właściwa średnica otworu, prostopadłość, łamanie wióra, smarowanie.</p>
<div class="tip">Wzór „d - P” zapamiętaj na pamięć: M8 to wiertło 6,8, M10 to 8,5, M12 to 10,2. To jedno z najczęstszych pytań w kwalifikacji MEC.08.</div>` }
      ],
      pytania: [
        Q("Standardowy kąt wierzchołkowy wiertła krętego do stali wynosi", "118°", "90°", "60°", "140°", "Do stali twardych stosuje się 130-140°."),
        Q("Obroty wiertła HSS Ø10 przy prędkości skrawania 25 m/min wynoszą około", "800 obr/min", "250 obr/min", "2500 obr/min", "80 obr/min", "n = 1000 · 25 / (3,14 · 10)."),
        Q("Przed wierceniem otworu na wiertarce przedmiot należy", "zamocować w imadle lub przyrządzie", "trzymać mocno ręką", "trzymać w rękawicach", "położyć luźno na stole", "Zakleszczone wiertło obraca przedmiotem."),
        Q("Do wykonania otworu Ø10H7 przed rozwiercaniem należy użyć wiertła o średnicy około", "9,8 mm", "10 mm", "9 mm", "8,5 mm", "Naddatek na rozwiercanie ok. 0,2 mm."),
        Q("Podczas wyjmowania rozwiertaka z otworu należy go obracać", "w kierunku skrawania", "w kierunku przeciwnym", "wcale nie obracać", "na przemian w obie strony", "Obrót wsteczny tępi ostrza."),
        Q("Średnica wiertła pod gwint M8 wynosi", "6,8 mm", "8 mm", "7,2 mm", "6,5 mm", "d - P = 8 - 1,25."),
        Q("Do gwintowania otworów nieprzelotowych najlepiej nadaje się gwintownik maszynowy", "z rowkami śrubowymi", "z rowkami prostymi i nakrojem skośnym", "wstępny z kompletu ręcznego", "narzynka", "Rowki śrubowe wyprowadzają wiór w górę."),
        Q("Gwint zewnętrzny ręcznie wykonuje się", "narzynką", "gwintownikiem", "rozwiertakiem", "pogłębiaczem", "Gwintownik służy do gwintów wewnętrznych.")
      ]
    },
    {
      id: "materialy", tytul: "Materiały i obróbka cieplna", opis: "Rozpoznasz oznaczenia stali, żeliw i stopów, dobierzesz obróbkę cieplną i zmierzysz twardość.",
      lekcje: [
        { tytul: "Oznaczanie stali i żeliw", tresc: `<h4>Stale według PN-EN 10027</h4>
<div class="tw"><table><tr><th>Oznaczenie</th><th>Znaczenie</th><th>Przykład zastosowania</th></tr>
<tr><td><b>S235JR</b></td><td>stal konstrukcyjna, R<sub>e</sub> min. 235 MPa, udarność JR w 20°C</td><td>konstrukcje spawane, profile</td></tr>
<tr><td><b>E295</b></td><td>stal maszynowa, R<sub>e</sub> min. 295 MPa</td><td>wały, osie mało obciążone</td></tr>
<tr><td><b>C45</b></td><td>stal niestopowa do ulepszania, 0,45% C</td><td>wały, koła zębate, sworznie</td></tr>
<tr><td><b>42CrMo4</b></td><td>stal niskostopowa, 0,42% C, ok. 1% Cr (4/4), Mo</td><td>silnie obciążone wały, śruby 10.9</td></tr>
<tr><td><b>16MnCr5</b></td><td>stal do nawęglania, 0,16% C</td><td>koła zębate, sworznie tłokowe</td></tr>
<tr><td><b>X5CrNi18-10</b></td><td>stal wysokostopowa (X), 0,05% C, 18% Cr, 10% Ni</td><td>nierdzewna austenityczna (1.4301, „304”)</td></tr>
<tr><td><b>HS6-5-2-5</b></td><td>stal szybkotnąca: W 6%, Mo 5%, V 2%, Co 5%</td><td>wiertła, frezy</td></tr>
<tr><td><b>C80U</b></td><td>stal narzędziowa niestopowa, 0,8% C</td><td>przecinaki, punktaki</td></tr></table></div>
<p>W stalach niskostopowych zawartość pierwiastka dzieli się przez mnożnik: <b>4</b> dla Cr, Co, Mn, Ni, Si, W; <b>10</b> dla Al, Cu, Mo, Ti, V; <b>100</b> dla C, N, P, S. Stąd 42CrMo4: Cr = 4/4 = 1%. Oznaczenie liczbowe stali, np. 1.0503 (C45), 1.4301.</p>
<h4>Wpływ węgla</h4>
<p>Zwiększenie zawartości węgla podnosi twardość i wytrzymałość, obniża plastyczność i spawalność. Stal powyżej ok. <b>0,25% C</b> spawa się z podgrzewaniem; stale do 0,2% C są dobrze spawalne. Stale do hartowania mają co najmniej ok. 0,3-0,35% C.</p>
<h4>Żeliwa i stopy</h4>
<ul>
<li><b>EN-GJL-250</b>: żeliwo szare z grafitem płatkowym, R<sub>m</sub> 250 MPa; kruche, dobrze tłumi drgania, korpusy obrabiarek.</li>
<li><b>EN-GJS-400-15</b>: żeliwo sferoidalne, R<sub>m</sub> 400 MPa, wydłużenie 15%; wały korbowe, elementy obciążone.</li>
<li>Żeliwo ciągliwe (GJMB, GJMW).</li>
<li>Aluminium: EN AW-6060, EN AW-7075 (dural, najwyższa wytrzymałość). Miedź i stopy: mosiądz (Cu + Zn, CuZn39Pb3 automatowy), brąz (Cu + Sn lub Al, panewki).</li>
</ul>
<div class="tip">Szybki odczyt: litera S to stal konstrukcyjna z liczbą R<sub>e</sub>, litera C i liczba to stal niestopowa z zawartością węgla w setnych procenta, X oznacza stal wysokostopową z procentami podanymi wprost.</div>` },
        { tytul: "Obróbka cieplna i cieplno-chemiczna", tresc: `<h4>Rodzaje obróbki cieplnej</h4>
<div class="tw"><table><tr><th>Zabieg</th><th>Przebieg</th><th>Cel</th></tr>
<tr><td><b>Wyżarzanie normalizujące</b></td><td>nagrzanie ok. 30-50°C powyżej A<sub>c3</sub>, studzenie na powietrzu</td><td>ujednolicenie i rozdrobnienie struktury</td></tr>
<tr><td><b>Wyżarzanie zmiękczające</b></td><td>ok. 680-720°C, długie wygrzewanie, powolne studzenie</td><td>obniżenie twardości przed obróbką skrawaniem</td></tr>
<tr><td><b>Wyżarzanie odprężające</b></td><td>ok. 550-650°C, powolne studzenie</td><td>usunięcie naprężeń po spawaniu, obróbce</td></tr>
<tr><td><b>Hartowanie</b></td><td>nagrzanie do austenitu (C45 ok. 820-850°C), szybkie chłodzenie w wodzie, oleju lub polimerze</td><td>struktura <b>martenzytu</b>, wysoka twardość, kruchość</td></tr>
<tr><td><b>Odpuszczanie</b></td><td>po hartowaniu, nagrzanie poniżej A<sub>c1</sub></td><td>zmniejszenie kruchości i naprężeń</td></tr></table></div>
<h4>Odpuszczanie</h4>
<ul>
<li><b>Niskie</b> (150-250°C): zachowuje wysoką twardość, narzędzia, sprawdziany, łożyska.</li>
<li><b>Średnie</b> (250-500°C): sprężystość, sprężyny, resory.</li>
<li><b>Wysokie</b> (500-650°C): wysoka udarność i wytrzymałość, wały, koła; hartowanie + wysokie odpuszczanie = <b>ulepszanie cieplne</b>.</li>
</ul>
<p>Barwy nalotowe przy odpuszczaniu stali: słomkowa ok. 220°C, brązowa ok. 260°C, fioletowa ok. 280°C, niebieska ok. 300°C.</p>
<h4>Hartowanie powierzchniowe</h4>
<p>Nagrzewanie <b>indukcyjne</b> lub płomieniowe tylko warstwy wierzchniej i szybkie chłodzenie natryskiem. Rdzeń pozostaje ciągliwy, powierzchnia twarda i odporna na ścieranie (czopy wałów, prowadnice, zęby kół).</p>
<h4>Obróbka cieplno-chemiczna</h4>
<ul>
<li><b>Nawęglanie</b> (ok. 900-950°C, warstwa 0,5-2 mm) stali niskowęglowych (16MnCr5), potem hartowanie i niskie odpuszczanie; twarda powierzchnia (ok. 60 HRC), ciągliwy rdzeń.</li>
<li><b>Azotowanie</b> (ok. 500-570°C): bardzo twarda cienka warstwa, małe odkształcenia, bez hartowania.</li>
<li><b>Węgloazotowanie</b>, borowanie, chromowanie dyfuzyjne.</li>
</ul>
<h4>Wady obróbki cieplnej</h4>
<p>Pęknięcia hartownicze (zbyt intensywne chłodzenie, ostre karby), odkształcenia, odwęglenie powierzchni (atmosfera utleniająca), miękkie plamy (niejednolite chłodzenie), przegrzanie (rozrost ziarna).</p>
<div class="tip">Pytanie typowe: „Ulepszanie cieplne to...”. Odpowiedź: hartowanie i wysokie odpuszczanie. Hartowanie i niskie odpuszczanie stosuje się do narzędzi.</div>` },
        { tytul: "Pomiar twardości i badania materiałów", tresc: `<h4>Metody pomiaru twardości</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Wgłębnik</th><th>Zastosowanie</th></tr>
<tr><td><b>Brinella (HBW)</b></td><td>kulka z węglika spiekanego, np. Ø10 mm, siła 29,42 kN (3000 kG)</td><td>materiały miękkie i średnio twarde, żeliwo, metale nieżelazne; pomiar średnicy odcisku</td></tr>
<tr><td><b>Rockwella (HRC, HRB)</b></td><td>HRC: stożek diamentowy 120°; HRB: kulka 1/16 cala</td><td>HRC: stale hartowane (20-70 HRC); szybki odczyt z czujnika, mierzy głębokość odcisku</td></tr>
<tr><td><b>Vickersa (HV)</b></td><td>ostrosłup diamentowy o kącie 136°</td><td>wszystkie materiały, cienkie warstwy, mikrotwardość; pomiar przekątnych odcisku</td></tr>
<tr><td>Shore'a, Leeb (przenośne)</td><td>odbicie bijaka</td><td>pomiary na dużych elementach w terenie</td></tr></table></div>
<p>Zapis wyniku: <b>200 HBW 10/3000</b> (twardość 200, kulka 10 mm, obciążenie 3000 kG). Przybliżone przeliczenie dla stali: R<sub>m</sub> [MPa] ≈ 3,5 · HB (200 HB ≈ 700 MPa). Orientacyjnie: stal C45 w stanie normalizowanym ok. 200 HB, po hartowaniu ok. 55-58 HRC; pilnik ok. 64 HRC.</p>
<h4>Statyczna próba rozciągania</h4>
<p>Próbka rozciągana na maszynie wytrzymałościowej. Wyznacza się: <b>R<sub>e</sub></b> (granica plastyczności), <b>R<sub>m</sub></b> (wytrzymałość na rozciąganie), <b>A</b> (wydłużenie po zerwaniu, %), <b>Z</b> (przewężenie), moduł Younga E (dla stali ok. 210 GPa).</p>
<pre>R_m = F_max / S_0
Próbka Ø10 mm: S_0 = 3,14 · 100 / 4 = 78,5 mm²
F_max = 39 250 N → R_m = 500 MPa</pre>
<h4>Inne badania</h4>
<ul>
<li><b>Udarność</b> (młot Charpy'ego, próbka z karbem V lub U, wynik KV w J): odporność na obciążenia dynamiczne, zależna od temperatury.</li>
<li>Próby technologiczne: zginania, tłoczności (Erichsena), spęczania, nawijania drutu.</li>
<li>Badania nieniszczące: wizualne, penetracyjne, magnetyczno-proszkowe, ultradźwiękowe, radiograficzne.</li>
<li>Badania metalograficzne (mikroskop): struktura, wielkość ziarna, głębokość warstwy nawęglonej.</li>
</ul>
<h4>Rozpoznawanie materiałów w warsztacie</h4>
<p>Próba iskrowa na szlifierce: stal niskowęglowa daje długie, jasne iskry z małą liczbą rozgałęzień, stal wysokowęglowa krótkie, gęsto rozgałęzione „gwiazdki”, stal szybkotnąca ciemnoczerwone, przerywane iskry, żeliwo krótkie czerwone iskry. Magnes rozróżnia stale ferrytyczne od austenitycznych nierdzewnych (niemagnetycznych).</p>
<div class="tip">Do pomiaru twardości stali hartowanej wybierz metodę Rockwella w skali C. Brinell z kulką nie nadaje się do bardzo twardych materiałów, bo kulka się odkształca.</div>` }
      ],
      pytania: [
        Q("Oznaczenie S235JR dotyczy stali konstrukcyjnej o minimalnej granicy plastyczności", "235 MPa", "235 N/cm²", "23,5 MPa", "2350 MPa", "S oznacza stal konstrukcyjną, liczba to Re."),
        Q("Stal C45 zawiera około", "0,45% węgla", "45% węgla", "4,5% węgla", "0,045% węgla", "Liczba po C to zawartość węgla w setnych procenta."),
        Q("W oznaczeniu 42CrMo4 zawartość chromu wynosi około", "1%", "4%", "0,4%", "42%", "Dla Cr mnożnik wynosi 4."),
        Q("Ulepszanie cieplne to", "hartowanie i wysokie odpuszczanie", "hartowanie i niskie odpuszczanie", "wyżarzanie normalizujące", "nawęglanie i azotowanie", "Daje dobrą wytrzymałość i udarność."),
        Q("Celem wyżarzania zmiękczającego jest", "obniżenie twardości przed obróbką skrawaniem", "uzyskanie martenzytu", "zwiększenie twardości powierzchni", "nawęglenie warstwy wierzchniej", "Długie wygrzewanie ok. 700°C."),
        Q("Nawęglaniu poddaje się stale", "niskowęglowe, np. 16MnCr5", "wysokowęglowe narzędziowe", "żeliwa szare", "stopy aluminium", "Warstwa wzbogacona w węgiel jest potem hartowana."),
        Q("Do pomiaru twardości stali zahartowanej stosuje się metodę", "Rockwella HRC", "Brinella z kulką stalową", "Rockwella HRB", "próbę tłoczności", "Wgłębnikiem jest stożek diamentowy."),
        Q("Wytrzymałość na rozciąganie próbki o polu przekroju 78,5 mm² zerwanej siłą 39 250 N wynosi", "500 MPa", "50 MPa", "3080 MPa", "5000 MPa", "Rm = F/S0.")
      ]
    },
    {
      id: "laczenie-naprawa", tytul: "Łączenie i naprawa elementów", opis: "Dobierzesz metodę spawania lub lutowania i zaplanujesz naprawę oraz regenerację części maszyn.",
      lekcje: [
        { tytul: "Spawanie i cięcie termiczne", tresc: `<h4>Metody spawania (numery wg PN-EN ISO 4063)</h4>
<div class="tw"><table><tr><th>Nr</th><th>Metoda</th><th>Cechy</th></tr>
<tr><td>111</td><td>elektrodą otuloną (MMA)</td><td>prosty sprzęt, praca w terenie, otulina tworzy osłonę i żużel</td></tr>
<tr><td>131</td><td>MIG (gaz obojętny: argon)</td><td>aluminium, metale nieżelazne</td></tr>
<tr><td>135</td><td>MAG (gaz aktywny: CO<sub>2</sub> lub mieszanka Ar + CO<sub>2</sub>)</td><td>stale węglowe i niskostopowe, wydajna, najczęstsza w warsztatach</td></tr>
<tr><td>141</td><td>TIG (elektroda wolframowa nietopliwa, argon)</td><td>bardzo dobra jakość, cienkie blachy, stale nierdzewne, aluminium (prąd przemienny)</td></tr>
<tr><td>311</td><td>gazowe acetylenowo-tlenowe</td><td>cienkie blachy, rury, naprawy, także lutowanie i podgrzewanie</td></tr>
<tr><td>12</td><td>łukiem krytym (pod topnikiem)</td><td>automatyczne, grube blachy</td></tr>
<tr><td>2x</td><td>zgrzewanie rezystancyjne (punktowe 21)</td><td>blachy cienkie, karoserie</td></tr></table></div>
<h4>Przygotowanie złącza</h4>
<p>Blachy do ok. 3-4 mm spawa się zwykle bez ukosowania (złącze I), grubsze z ukosowaniem V (kąt rowka ok. 60°), X dla bardzo grubych (spawanie z dwóch stron). Powierzchnie oczyszcza się z rdzy, farby i tłuszczu na szerokości ok. 20 mm. Elementy łączy się wstępnie <b>spoinami sczepnymi</b>.</p>
<h4>Parametry MMA</h4>
<p>Natężenie prądu orientacyjnie <b>I ≈ (30-40)·d<sub>e</sub></b> [A], gdzie d<sub>e</sub> to średnica rdzenia elektrody w mm (elektroda 3,2 mm: ok. 100-130 A). Elektrody zasadowe (np. E 42 B) suszy się przed użyciem (ok. 300-350°C), bo wilgoć powoduje pęknięcia wodorowe. Elektrody rutylowe są łatwe w spawaniu.</p>
<h4>Wady spoin</h4>
<p>Pęcherze (porowatość: wilgoć, brak osłony gazowej), żużel w spoinie, brak przetopu, przyklejenia, podtopienia lica, pęknięcia (gorące i zimne), nadmierny nadlew. Kontrola: wizualna (VT), penetracyjna (PT), magnetyczna (MT), ultradźwiękowa (UT), radiograficzna (RT).</p>
<h4>BHP przy spawaniu</h4>
<ul>
<li>Przyłbica z filtrem (np. 9-13 DIN zależnie od prądu), odzież trudnopalna, rękawice spawalnicze.</li>
<li>Wentylacja i odciągi dymów spawalniczych.</li>
<li>Butle: przy acetylenie reduktor czerwony, tlen niebieski; butle zabezpieczone przed przewróceniem, nie smarować armatury tlenowej (ryzyko wybuchu).</li>
<li>Usunięcie materiałów palnych, sprzęt gaśniczy, pozwolenie na prace pożarowo niebezpieczne.</li>
<li>Uprawnienia: certyfikat spawacza (np. wg PN-EN ISO 9606-1).</li>
</ul>
<div class="tip">Zapamiętaj numerację: 111 elektroda otulona, 135 MAG, 131 MIG, 141 TIG, 311 gazowe. Na rysunku numer metody podaje się w rozwidleniu linii odniesienia.</div>` },
        { tytul: "Lutowanie, klejenie, nitowanie", tresc: `<h4>Lutowanie</h4>
<p>Łączenie za pomocą spoiwa (lutu) o temperaturze topnienia <b>niższej</b> niż materiały łączone; materiał podstawowy nie topi się.</p>
<div class="tw"><table><tr><th>Rodzaj</th><th>Temperatura</th><th>Spoiwa</th><th>Zastosowanie</th></tr>
<tr><td>Miękkie</td><td>poniżej 450°C</td><td>stopy cyny (Sn-Pb, Sn-Cu, Sn-Ag)</td><td>elektronika, instalacje wodne Cu, blachy ocynkowane, połączenia szczelne mało obciążone</td></tr>
<tr><td>Twarde</td><td>powyżej 450°C</td><td>mosiądz, stopy srebra, miedź-fosfor</td><td>połączenia wytrzymałe, płytki z węglików do noży, chłodnictwo</td></tr></table></div>
<p>Topnik (kalafonia, boraks, pasty) usuwa tlenki i chroni przed utlenianiem. Szczelina lutownicza w lutowaniu twardym ok. 0,05-0,2 mm (działanie kapilarne). Źródła ciepła: lutownica, palnik, nagrzewanie indukcyjne, piec.</p>
<h4>Klejenie</h4>
<ul>
<li>Kleje <b>epoksydowe</b> (dwuskładnikowe, wysoka wytrzymałość), <b>cyjanoakrylowe</b> (szybkie, małe elementy), <b>anaerobowe</b> (utwardzają się bez dostępu powietrza: zabezpieczanie gwintów, osadzanie łożysk i tulei), poliuretanowe, silikony (uszczelnianie).</li>
<li>Przygotowanie: odtłuszczenie, zszorstkowanie powierzchni, właściwa grubość spoiny (0,05-0,2 mm), docisk i czas utwardzania (ew. podgrzanie).</li>
<li>Złącza klejone projektuje się na <b>ścinanie</b> (zakładkowe), nie na oddzieranie.</li>
</ul>
<h4>Nitowanie</h4>
<p>Nity pełne (łeb kulisty, soczewkowy, płaski), drążone, zrywalne (POP). Średnica otworu pod nit ok. <b>d + (0,1-0,2) mm</b> (dla nitów do ok. 10 mm), długość trzonu do zakucia: grubość łączonych elementów + ok. <b>1,3-1,5·d</b> (zakuwka kulista). Nitowanie na zimno (nity stalowe do ok. 10 mm, aluminiowe, miedziane), na gorąco (duże nity stalowe). Narzędzia: zakuwnik, przypór, dociskacz, nitownica do nitów zrywalnych.</p>
<h4>Połączenia wciskowe i skurczowe</h4>
<p>Tuleję wciska się na prasie lub osadza przez nagrzanie (piasta) lub ochłodzenie (wałek). Różnica temperatur potrzebna do montażu skurczowego: <b>Δt = (wcisk + luz montażowy)/(α·d)</b>, gdzie α dla stali ≈ 12·10⁻⁶ 1/K. Dla d = 50 mm i wcisku 0,05 mm (z luzem montażowym ok. 0,03 mm) Δt ≈ 0,08/(0,000012·50) ≈ 133°C.</p>
<div class="tip">Kleje anaerobowe do gwintów mają kolory: niebieski średnia siła (rozłączne narzędziami), czerwony duża siła (wymaga podgrzania przy demontażu), zielony do połączeń penetrujących i osadzania.</div>` },
        { tytul: "Naprawa i regeneracja części", tresc: `<h4>Proces naprawy</h4>
<ol>
<li>Przyjęcie maszyny, oględziny, wywiad o objawach.</li>
<li>Demontaż z oznakowaniem części i ich wzajemnego położenia (zdjęcia, znaczniki), przechowywanie drobnych części w pojemnikach.</li>
<li>Mycie i czyszczenie (myjki, rozpuszczalniki, piaskowanie).</li>
<li><b>Weryfikacja</b>: pomiary i oględziny, podział na części dobre, do naprawy, do wymiany.</li>
<li>Naprawa lub wymiana, montaż, regulacja, próby i odbiór.</li>
</ol>
<h4>Metody regeneracji</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th><th>Przykład</th></tr>
<tr><td><b>Wymiarów naprawczych</b></td><td>obróbka zużytej części na nowy wymiar, wymiana części współpracującej na wymiar naprawczy</td><td>szlifowanie wału korbowego i panewki naprawcze, cylindry z tłokami nadwymiarowymi</td></tr>
<tr><td><b>Elementów dodatkowych</b></td><td>tulejowanie, wstawki, nakładki</td><td>tuleja w wybitym otworze łożyska korpusu</td></tr>
<tr><td><b>Napawanie</b></td><td>nałożenie warstwy spoiwa i obróbka na wymiar</td><td>czopy wałów, zęby, krawędzie łyżek koparek</td></tr>
<tr><td><b>Natryskiwanie cieplne</b> (metalizacja)</td><td>stopiony materiał natryskiwany na powierzchnię</td><td>czopy pod uszczelnienia, ochrona przed korozją</td></tr>
<tr><td><b>Powłoki galwaniczne</b></td><td>chromowanie, niklowanie</td><td>tłoczyska siłowników</td></tr>
<tr><td><b>Obróbka plastyczna</b></td><td>prostowanie, spęczanie, rozprężanie</td><td>prostowanie wałów, rozpęczanie tulei</td></tr>
<tr><td><b>Klejenie i kompozyty</b></td><td>masy metalowo-żywiczne</td><td>uszkodzone korpusy, pęknięcia żeliwa</td></tr></table></div>
<h4>Naprawa elementów typowych</h4>
<ul>
<li><b>Zerwany gwint</b> w korpusie: gwint naprawczy (większy wymiar) lub wkładka gwintowa (Helicoil): wiercenie, gwintowanie specjalnym gwintownikiem, wkręcenie wkładki, która przywraca gwint nominalny.</li>
<li><b>Pęknięte żeliwo</b>: spawanie na gorąco z podgrzaniem do ok. 600°C lub na zimno elektrodami niklowymi krótkimi odcinkami; nawiercenie końców pęknięcia zatrzymuje jego rozwój.</li>
<li><b>Skrzywiony wał</b>: prostowanie na prasie z kontrolą czujnikiem na pryzmach (bicie).</li>
<li><b>Zużyty rowek wpustowy</b>: poszerzenie na wymiar naprawczy (wpust stopniowy) lub nowy rowek przesunięty o 90-180°.</li>
</ul>
<h4>Ostrzenie narzędzi</h4>
<p>Wiertła ostrzy się na szlifierce lub ostrzarce z zachowaniem kąta 118° i symetrii krawędzi (sprawdzian kątowy). Przecinaki i punktaki ostrzy się z chłodzeniem w wodzie, aby nie odpuścić ostrza (przebarwienie oznacza utratę twardości). Noże tokarskie HSS ostrzy się ściernicą elektrokorundową, węglikowe ściernicą diamentową lub z węglika krzemu.</p>
<div class="tip">Metoda wymiarów naprawczych zawsze wymaga wymiany części współpracującej na odpowiednią „nadwymiarową” lub „podwymiarową”. To odróżnia ją od tulejowania.</div>` }
      ],
      pytania: [
        Q("Spawanie metodą MAG ma numer według PN-EN ISO 4063", "135", "111", "141", "311", "111 to elektroda otulona, 141 TIG, 311 gazowe."),
        Q("Metoda spawania elektrodą nietopliwą wolframową w osłonie argonu to", "TIG", "MAG", "MMA", "łukiem krytym", "Numer 141."),
        Q("Elektrody zasadowe przed spawaniem należy", "wysuszyć w piecu", "zwilżyć wodą", "naoliwić", "schłodzić", "Wilgoć powoduje pęknięcia wodorowe."),
        Q("Lutowanie twarde odbywa się w temperaturze", "powyżej 450°C", "poniżej 183°C", "poniżej 450°C", "powyżej 1500°C", "Poniżej 450°C to lutowanie miękkie."),
        Q("Kleje utwardzające się bez dostępu powietrza, stosowane do zabezpieczania gwintów, to kleje", "anaerobowe", "cyjanoakrylowe", "kontaktowe", "termotopliwe", "Utwardzają się w szczelinie między metalami."),
        Q("Szlifowanie czopów wału korbowego i zastosowanie panewek o zmienionym wymiarze to metoda", "wymiarów naprawczych", "tulejowania", "napawania", "metalizacji", "Część współpracująca ma wymiar naprawczy."),
        Q("Do naprawy zerwanego gwintu w korpusie z zachowaniem gwintu nominalnego stosuje się", "wkładkę gwintową", "rozwiertak maszynowy", "narzynkę okrągłą", "nit zrywalny", "Wkładka typu Helicoil przywraca pierwotny gwint."),
        Q("Aby zatrzymać rozwój pęknięcia w korpusie żeliwnym przed naprawą, należy", "nawiercić końce pęknięcia", "podgrzać tylko środek pęknięcia", "zahartować korpus", "rozwiercić pęknięcie", "Otwór usuwa ostry wierzchołek karbu.")
      ]
    }
  ]);

  pod("MEC.09", [
    {
      id: "proces", tytul: "Proces technologiczny", opis: "Rozpiszesz proces technologiczny na operacje i zabiegi, dobierzesz bazy i naddatki oraz wypełnisz dokumentację.",
      lekcje: [
        { tytul: "Struktura procesu technologicznego", tresc: `<h4>Pojęcia</h4>
<div class="tw"><table><tr><th>Element</th><th>Definicja</th><th>Przykład</th></tr>
<tr><td><b>Proces produkcyjny</b></td><td>wszystkie działania od surowca do wyrobu (także transport, kontrola, magazynowanie)</td><td>produkcja przekładni</td></tr>
<tr><td><b>Proces technologiczny</b></td><td>część procesu produkcyjnego zmieniająca kształt, wymiary, właściwości lub położenie części</td><td>obróbka wałka</td></tr>
<tr><td><b>Operacja</b></td><td>część procesu wykonywana na jednym stanowisku, przez jednego pracownika (zespół), na jednym przedmiocie, bez przerw na inną pracę</td><td>toczenie wałka na tokarce</td></tr>
<tr><td><b>Zamocowanie</b></td><td>część operacji przy jednym zamocowaniu przedmiotu</td><td>toczenie z jednej strony, przemocowanie, toczenie drugiej</td></tr>
<tr><td><b>Pozycja</b></td><td>każde położenie przedmiotu względem narzędzia w jednym zamocowaniu (stół obrotowy, podzielnica)</td><td>wiercenie otworów po obrocie o 90°</td></tr>
<tr><td><b>Zabieg</b></td><td>część operacji: jedna powierzchnia, jednym narzędziem, przy stałych parametrach</td><td>toczenie czoła, toczenie Ø30</td></tr>
<tr><td><b>Przejście</b></td><td>jednorazowe usunięcie warstwy materiału w zabiegu</td><td>dwa przejścia po 2 mm</td></tr>
<tr><td><b>Czynność</b></td><td>najmniejszy element pracy pracownika</td><td>włączenie posuwu, pomiar</td></tr></table></div>
<p>Zmiana stanowiska (obrabiarki) oznacza <b>nową operację</b>. Zmiana narzędzia lub obrabianej powierzchni oznacza <b>nowy zabieg</b>. Zabieg prosty: jedno narzędzie; złożony: kilka narzędzi jednocześnie (np. głowica wielonarzędziowa).</p>
<h4>Typowy proces wałka stopniowego</h4>
<ol>
<li>10. Cięcie pręta na pile taśmowej.</li>
<li>20. Planowanie czół i nakiełkowanie (nakiełczarka lub tokarka).</li>
<li>30. Toczenie zgrubne i kształtujące (tokarka CNC).</li>
<li>40. Frezowanie rowka wpustowego (frezarka pionowa).</li>
<li>50. Obróbka cieplna (hartowanie indukcyjne czopów, odpuszczanie).</li>
<li>60. Szlifowanie czopów (szlifierka do wałków, w kłach).</li>
<li>70. Kontrola końcowa.</li>
</ol>
<p>Operacje numeruje się co 10 (lub co 5), aby można było wstawić nową operację bez zmiany numeracji.</p>
<h4>Zasady kolejności</h4>
<ul>
<li>Najpierw obróbka powierzchni, które będą bazami dla kolejnych operacji.</li>
<li>Obróbka zgrubna przed wykańczającą (usunięcie naddatku i naprężeń).</li>
<li>Obróbka cieplna (hartowanie) przed szlifowaniem, a obróbka powierzchni, które mają być miękkie (rowki, gwinty), przed hartowaniem.</li>
<li>Powierzchnie najdokładniejsze i najłatwiej uszkadzane obrabia się na końcu.</li>
<li>Kontrola po operacjach kluczowych i przed kosztownymi operacjami.</li>
</ul>
<div class="tip">Pytanie typowe: „Toczenie dwóch średnic wałka tym samym nożem w jednym zamocowaniu to...”. Jedna operacja i dwa zabiegi (dwie różne powierzchnie).</div>` },
        { tytul: "Bazy i naddatki", tresc: `<h4>Rodzaje baz</h4>
<ul>
<li><b>Konstrukcyjna</b>: od niej konstruktor wymiarował (rysunek).</li>
<li><b>Obróbkowa (technologiczna)</b>: powierzchnia, którą przedmiot ustala się w obrabiarce lub przyrządzie.</li>
<li><b>Pomiarowa</b>: od niej mierzy się wymiar.</li>
<li><b>Montażowa</b>: ustala położenie części w zespole.</li>
</ul>
<p><b>Zasada pokrywania się baz</b>: jeśli baza obróbkowa = baza konstrukcyjna, nie powstają dodatkowe błędy ustalenia. <b>Zasada stałości baz</b>: w kolejnych operacjach używa się tych samych baz (np. nakiełki dla wałka w całym procesie). Bazą w pierwszej operacji jest powierzchnia surowa (baza zgrubna), którą używa się tylko raz.</p>
<h4>Ustalenie przedmiotu</h4>
<p>Ciało sztywne ma <b>6 stopni swobody</b> (3 przesunięcia, 3 obroty). Reguła 3-2-1: płaszczyzna główna (3 punkty) odbiera 3 stopnie, płaszczyzna prowadząca (2 punkty) 2, płaszczyzna oporowa (1 punkt) 1. Ustalenie wałka w kłach odbiera 5 stopni (obrót wokół osi zostaje, przenosi go zabierak). Pryzma długa odbiera 4 stopnie.</p>
<h4>Naddatki</h4>
<p><b>Naddatek całkowity</b>: warstwa materiału usuwana w całym procesie (różnica wymiaru półfabrykatu i gotowej części). <b>Naddatek operacyjny</b>: usuwany w danej operacji. Na naddatek wpływają: chropowatość i warstwa wadliwa z poprzedniej operacji, błędy kształtu, błędy ustalenia i tolerancja wymiaru z poprzedniej operacji.</p>
<pre>Wałek Ø40h6 z pręta walcowanego
Szlifowanie: naddatek 0,4 mm → przed szlifowaniem Ø40,4
Toczenie wykańczające: 1,0 mm → Ø41,4
Toczenie zgrubne: 3,6 mm → Ø45
Dobór pręta: Ø45 (znormalizowany, z tablicy)</pre>
<p>Wymiary operacyjne liczy się od operacji ostatniej do pierwszej, dodając naddatki. Wymiar pręta zaokrągla się do najbliższego <b>większego</b> wymiaru handlowego.</p>
<h4>Dobór półfabrykatu</h4>
<p>Pręty walcowane (produkcja jednostkowa, małe różnice średnic), odkuwki matrycowe (seria, lepsza struktura włókien, mniejszy odpad), odlewy (skomplikowane kształty, korpusy), wykroje z blach (płyty), rury. Wskaźnik wykorzystania materiału: <b>k = masa części / masa półfabrykatu</b>. Im większa seria, tym bardziej opłaca się półfabrykat bliższy kształtem do gotowej części.</p>
<div class="tip">Przy obliczaniu wymiaru półfabrykatu zawsze zaczynaj od wymiaru gotowej części i dodawaj naddatki „wstecz”. Wynik zaokrąglij w górę do wymiaru z katalogu prętów.</div>` },
        { tytul: "Dokumentacja technologiczna", tresc: `<h4>Rodzaje kart</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Zawartość</th><th>Rodzaj produkcji</th></tr>
<tr><td><b>Karta technologiczna</b></td><td>wykaz wszystkich operacji w kolejności: numer, nazwa, stanowisko (obrabiarka), oprzyrządowanie, czasy t<sub>pz</sub> i t<sub>j</sub></td><td>jednostkowa i małoseryjna (podstawowy dokument)</td></tr>
<tr><td><b>Karta instrukcyjna</b> (operacyjna)</td><td>szczegóły jednej operacji: szkic z bazami i zamocowaniem, zabiegi, narzędzia, parametry skrawania, przyrządy pomiarowe, czasy</td><td>seryjna i masowa</td></tr>
<tr><td>Karta kontroli (pomiarowa)</td><td>cechy do sprawdzenia, przyrządy, częstość kontroli</td><td>każda</td></tr>
<tr><td>Karta normowania</td><td>obliczenia składników czasu</td><td>seryjna</td></tr>
<tr><td>Program CNC i karta ustawienia</td><td>program, narzędzia w głowicy, punkty zerowe</td><td>obróbka CNC</td></tr></table></div>
<h4>Szkic operacyjny</h4>
<p>Pokazuje przedmiot w stanie <b>po danej operacji</b>, powierzchnie obrabiane pogrubione (lub w kolorze), wymiary i tolerancje uzyskiwane w tej operacji, chropowatość, symbole baz i zamocowania (punkty podparcia, docisk, kły, szczęki wg normy).</p>
<h4>Dokumenty produkcyjne</h4>
<ul>
<li><b>Zlecenie produkcyjne</b> (rozpoczęcie produkcji partii), karta przewodnia (towarzyszy partii między stanowiskami).</li>
<li>Pobranie materiału (RW: rozchód wewnętrzny), zwrot (ZW), przyjęcie wyrobów do magazynu (PW).</li>
<li>Karta pracy (rejestracja czasu i ilości).</li>
<li>Specyfikacja materiałowa (BOM, zestawienie części i materiałów do wyrobu).</li>
<li>Protokół braków, raport zmianowy.</li>
</ul>
<h4>Systemy komputerowe</h4>
<p><b>CAD</b> (projektowanie), <b>CAM</b> (ścieżki narzędzi, programy CNC), <b>CAPP</b> (komputerowe planowanie procesów), <b>PDM/PLM</b> (zarządzanie dokumentacją i cyklem życia wyrobu), <b>ERP</b> (planowanie zasobów przedsiębiorstwa), <b>MES</b> (nadzór nad realizacją produkcji na hali w czasie rzeczywistym).</p>
<h4>Zmiany dokumentacji</h4>
<p>Każda zmiana konstrukcyjna lub technologiczna wymaga notatki zmiany, zatwierdzenia i aktualizacji wersji (indeks zmiany na rysunku i karcie). Na stanowisku może być tylko aktualna wersja dokumentu.</p>
<div class="tip">Karta technologiczna to „spis operacji całego procesu”, karta instrukcyjna to „szczegóły jednej operacji”. To najczęściej sprawdzana różnica na egzaminie MEC.09.</div>` }
      ],
      pytania: [
        Q("Część procesu technologicznego wykonywana na jednym stanowisku przez jednego pracownika na jednym przedmiocie bez przerw na inną pracę to", "operacja", "zabieg", "przejście", "czynność", "Zmiana stanowiska oznacza nową operację."),
        Q("Toczenie dwóch różnych średnic wałka w jednym zamocowaniu na tej samej tokarce to", "jedna operacja i dwa zabiegi", "dwie operacje", "jeden zabieg i dwa przejścia", "dwie pozycje", "Zabieg dotyczy jednej powierzchni."),
        Q("Hartowanie czopów wałka powinno być wykonane", "przed szlifowaniem", "po szlifowaniu", "przed toczeniem zgrubnym", "po kontroli końcowej", "Szlifowanie usuwa odkształcenia po hartowaniu."),
        Q("Liczba stopni swobody ciała sztywnego wynosi", "6", "3", "5", "4", "3 przesunięcia i 3 obroty."),
        Q("Zasada stałości baz oznacza", "stosowanie tych samych baz w kolejnych operacjach", "stosowanie bazy surowej w każdej operacji", "zmianę bazy po każdej operacji", "pomiar zawsze od powierzchni surowej", "Zmniejsza błędy położenia powierzchni."),
        Q("Wymiar półfabrykatu ustala się, dodając naddatki operacyjne", "od operacji ostatniej do pierwszej", "od operacji pierwszej do ostatniej", "tylko dla operacji zgrubnych", "losowo", "Liczy się wstecz od wymiaru gotowej części."),
        Q("Dokument zawierający wykaz wszystkich operacji procesu w kolejności ich wykonywania to", "karta technologiczna", "karta instrukcyjna", "karta przewodnia", "dokument RW", "Karta instrukcyjna opisuje jedną operację."),
        Q("System informatyczny nadzorujący realizację produkcji na hali w czasie rzeczywistym to", "MES", "CAD", "CAM", "PDM", "ERP planuje zasoby całego przedsiębiorstwa.")
      ]
    },
    {
      id: "normowanie", tytul: "Normowanie czasu i wydajność", opis: "Obliczysz normę czasu, czas maszynowy, takt linii i zdolność produkcyjną stanowiska.",
      lekcje: [
        { tytul: "Struktura normy czasu", tresc: `<h4>Norma czasu na partię</h4>
<pre>T = t_pz + n · t_j
t_j = t_w + t_u
t_w = t_g + t_p        (czas wykonania = główny + pomocniczy)
t_u = t_ut + t_uo + t_ufp  (uzupełniający: techniczny, organizacyjny,
                            na potrzeby fizjologiczne)</pre>
<div class="tw"><table><tr><th>Składnik</th><th>Opis</th><th>Przykład</th></tr>
<tr><td><b>t<sub>pz</sub></b> (przygotowawczo-zakończeniowy)</td><td>raz na partię: zapoznanie z dokumentacją, ustawienie obrabiarki, pobranie i zwrot narzędzi, wykonanie pierwszej sztuki</td><td>30 min</td></tr>
<tr><td><b>t<sub>g</sub></b> (główny)</td><td>zmiana kształtu, wymiarów, właściwości (skrawanie)</td><td>t<sub>m</sub> = L/v<sub>f</sub></td></tr>
<tr><td><b>t<sub>p</sub></b> (pomocniczy)</td><td>czynności umożliwiające wykonanie pracy głównej: mocowanie, dojazdy, pomiary</td><td>zamocowanie w uchwycie</td></tr>
<tr><td><b>t<sub>ut</sub></b> (uzupełniający techniczny)</td><td>obsługa stanowiska: wymiana stępionego narzędzia, regulacja</td><td>% czasu głównego</td></tr>
<tr><td><b>t<sub>uo</sub></b> (organizacyjny)</td><td>przygotowanie i sprzątanie stanowiska w ciągu zmiany, smarowanie</td><td>% czasu wykonania</td></tr>
<tr><td><b>t<sub>ufp</sub></b> (na potrzeby fizjologiczne)</td><td>odpoczynek, potrzeby naturalne</td><td>% czasu wykonania</td></tr></table></div>
<h4>Przykład obliczeniowy</h4>
<pre>Partia n = 50 szt., t_pz = 40 min
t_g = 3,2 min, t_p = 1,8 min → t_w = 5,0 min
t_u = 12% t_w = 0,6 min → t_j = 5,6 min
T = 40 + 50 · 5,6 = 40 + 280 = 320 min = 5 h 20 min
Czas na 1 sztukę z udziałem t_pz: t_jk = t_j + t_pz / n = 5,6 + 0,8 = 6,4 min</pre>
<h4>Normy pracy</h4>
<ul>
<li><b>Norma czasu</b>: czas potrzebny do wykonania jednostki pracy w określonych warunkach przez pracownika o odpowiednich kwalifikacjach.</li>
<li><b>Norma ilościowa (wydajności)</b>: liczba sztuk na jednostkę czasu, N<sub>il</sub> = czas zmiany / t<sub>j</sub>. Przy zmianie 480 min i t<sub>j</sub> = 6 min: 80 szt./zmianę.</li>
<li><b>Wskaźnik wykonania normy</b> W = (czas normatywny wykonanej pracy / czas rzeczywisty)·100%. Np. 520 min normatywnych w 480 min pracy: 108%.</li>
</ul>
<h4>Czas maszynowy a czas pracownika</h4>
<p>Przy obsłudze <b>wielomaszynowej</b> pracownik w czasie maszynowo-automatycznym jednej obrabiarki obsługuje inne. Liczba obsługiwanych maszyn ≈ (t<sub>ma</sub> + t<sub>r</sub>)/t<sub>r</sub>, gdzie t<sub>r</sub> to czas pracy ręcznej na jednej maszynie.</p>
<div class="tip">Czas t<sub>pz</sub> nie mnoży się przez liczbę sztuk. Najczęstszy błąd w obliczeniach: T = n·(t<sub>pz</sub> + t<sub>j</sub>) zamiast T = t<sub>pz</sub> + n·t<sub>j</sub>.</div>` },
        { tytul: "Metody ustalania norm", tresc: `<h4>Metody analityczne</h4>
<ul>
<li><b>Analityczno-obliczeniowa</b>: czas główny liczy się ze wzorów (droga i posuw), pozostałe składniki z normatywów (tablic czasów pomocniczych, wskaźników procentowych). Stosowana do obróbki skrawaniem.</li>
<li><b>Analityczno-badawcza</b>: czasy wyznacza się pomiarami na stanowisku pracy.</li>
<li><b>Analityczno-porównawcza</b>: porównanie z podobną, znormowaną pracą.</li>
</ul>
<p>Metody <b>sumaryczne</b> (szacunkowa, statystyczna na podstawie danych z przeszłości) są mniej dokładne, stosowane przy pracach jednostkowych i nietypowych.</p>
<h4>Badania czasu pracy</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th><th>Zastosowanie</th></tr>
<tr><td><b>Chronometraż</b></td><td>pomiar stoperem czasu powtarzalnych czynności (seria pomiarów, odrzucenie wartości odstających)</td><td>czasy t<sub>p</sub>, t<sub>j</sub> w pracy powtarzalnej</td></tr>
<tr><td><b>Fotografia dnia pracy</b></td><td>ciągła obserwacja i zapis wszystkich czynności i przerw przez całą zmianę</td><td>czasy uzupełniające, straty, przestoje</td></tr>
<tr><td><b>Obserwacje migawkowe</b></td><td>losowe, chwilowe obserwacje wielu stanowisk, wynik statystyczny</td><td>wykorzystanie maszyn, struktura czasu w dużym wydziale</td></tr>
<tr><td><b>Systemy czasów elementarnych</b> (MTM)</td><td>czasy ruchów podstawowych z tablic</td><td>praca ręczna, montaż, projektowanie stanowisk</td></tr></table></div>
<h4>Opracowanie chronometrażu</h4>
<pre>Pomiary czasu mocowania [s]: 22, 24, 23, 35, 21, 23
Wynik 35 odrzucamy (przyczyna: upadek klucza, odstające)
Średnia z pozostałych: (22+24+23+21+23)/5 = 22,6 s
Współczynnik rozrzutu: k = t_max / t_min = 24/21 ≈ 1,14
(dla prac ręcznych wymaga się zwykle k ≤ 1,5-2)</pre>
<p>Wynik koryguje się <b>współczynnikiem tempa</b> pracy (np. pracownik pracował w tempie 110% normalnego, czas normalny = 22,6 · 1,1 ≈ 24,9 s).</p>
<h4>Fotografia dnia: klasyfikacja czasu</h4>
<p>Czas pracy (t<sub>pz</sub>, t<sub>w</sub>, t<sub>u</sub>) oraz czas <b>przerw</b>: uzasadnione (regulaminowe, technologiczne) i nieuzasadnione (z winy organizacji: brak materiału, awaria; z winy pracownika: spóźnienie). Analiza pozwala usunąć straty i ustalić normatywy czasów uzupełniających.</p>
<div class="tip">Chronometraż mierzy czas powtarzalnych czynności, fotografia dnia rejestruje wszystko w ciągu zmiany. Jeśli w pytaniu są „przestoje i przerwy przez całą zmianę”, odpowiedzią jest fotografia dnia pracy.</div>` },
        { tytul: "Takt, zdolność produkcyjna, wąskie gardła", tresc: `<h4>Takt produkcji</h4>
<pre>Takt = efektywny czas pracy / wymagana liczba sztuk
Zmiana 8 h, przerwy 30 min → 450 min
Zapotrzebowanie 900 szt./zmianę
Takt = 450 / 900 = 0,5 min = 30 s
Rytm = 1 / takt = 2 szt./min</pre>
<p>Liczba stanowisk w operacji linii: <b>m = t<sub>j</sub>/takt</b>, zaokrąglona w górę. Operacja trwająca 75 s przy takcie 30 s wymaga 3 stanowisk (2,5 → 3). Współczynnik obciążenia stanowisk: η = 2,5/3 ≈ 83%.</p>
<h4>Bilansowanie linii</h4>
<p>Linia jest zrównoważona, gdy czasy operacji są zbliżone do taktu. Operacja o najdłuższym czasie to <b>wąskie gardło</b>: ogranicza wydajność całej linii. Sprawność linii = suma czasów operacji / (liczba stanowisk × takt). Metody poprawy: podział długiej operacji, dodatkowe stanowisko, automatyzacja, przeniesienie czynności na stanowiska mniej obciążone, bufory przed wąskim gardłem.</p>
<h4>Zdolność produkcyjna</h4>
<pre>Fundusz czasu maszyny (rok, 2 zmiany):
250 dni · 2 zmiany · 8 h = 4000 h nominalnie
straty na remonty 5% → efektywny F_e = 3800 h
t_j = 12 min = 0,2 h
Zdolność = F_e / t_j = 3800 / 0,2 = 19 000 szt./rok</pre>
<p>Zdolność produkcyjna to maksymalna ilość wyrobów możliwa do wykonania w danym czasie przy pełnym wykorzystaniu zasobów. Wykorzystanie zdolności = produkcja rzeczywista / zdolność · 100%.</p>
<h4>Wydajność pracy</h4>
<p><b>W = ilość wyrobów / nakład pracy</b> (np. sztuki na roboczogodzinę) lub odwrotnie pracochłonność (roboczogodziny na sztukę). Wydajność wzrasta przez: mechanizację i automatyzację, poprawę organizacji (mniej przestojów), skrócenie przezbrojeń (<b>SMED</b>), szkolenie, ergonomię stanowisk.</p>
<h4>Cykl produkcyjny</h4>
<p>Czas od rozpoczęcia pierwszej operacji do zakończenia ostatniej dla partii. Przy przebiegu <b>szeregowym</b> partia przechodzi do kolejnej operacji w całości (najdłuższy cykl), przy <b>równoległym</b> sztuki przekazywane pojedynczo (najkrótszy cykl), przy <b>szeregowo-równoległym</b> w podpartiach.</p>
<pre>Przebieg szeregowy: T_c = n · Σ t_i
n = 10, operacje 2 + 5 + 3 min → T_c = 10 · 10 = 100 min
Przebieg równoległy: T_c = Σ t_i + (n - 1) · t_max = 10 + 9 · 5 = 55 min</pre>
<div class="tip">Liczba stanowisk zawsze zaokrąglana w górę. Nie możesz mieć 2,5 maszyny, a 2 stanowiska nie nadążą za taktem.</div>` }
      ],
      pytania: [
        Q("Normę czasu na partię oblicza się ze wzoru", "T = tpz + n · tj", "T = n · (tpz + tj)", "T = tpz · tj / n", "T = tpz + tj", "Czas przygotowawczo-zakończeniowy występuje raz na partię."),
        Q("Dla partii 50 sztuk, tpz = 40 min i tj = 5,6 min norma czasu wynosi", "320 min", "2280 min", "45,6 min", "280 min", "40 + 50 · 5,6."),
        Q("Czas zamocowania przedmiotu w uchwycie należy do czasu", "pomocniczego", "głównego", "przygotowawczo-zakończeniowego", "na potrzeby fizjologiczne", "Umożliwia wykonanie pracy głównej."),
        Q("Metoda ciągłej obserwacji wszystkich czynności i przerw w czasie całej zmiany to", "fotografia dnia pracy", "chronometraż", "obserwacje migawkowe", "metoda MTM", "Służy do analizy strat i przestojów."),
        Q("Takt linii przy efektywnym czasie 450 min i zapotrzebowaniu 900 szt. wynosi", "30 s", "2 min", "0,5 s", "50 s", "450/900 = 0,5 min."),
        Q("Operacja trwająca 75 s przy takcie 30 s wymaga stanowisk", "3", "2", "2,5", "4", "75/30 = 2,5, zaokrąglenie w górę."),
        Q("Stanowisko o najdłuższym czasie operacji, ograniczające wydajność linii, nazywamy", "wąskim gardłem", "buforem", "taktem", "rytmem", "Jego wydajność decyduje o wydajności linii."),
        Q("Cykl produkcyjny partii jest najkrótszy przy przebiegu", "równoległym", "szeregowym", "szeregowo-równoległym z dużymi podpartiami", "partiami po całości", "Sztuki przekazywane są pojedynczo.")
      ]
    },
    {
      id: "planowanie", tytul: "Planowanie i organizacja produkcji", opis: "Dobierzesz formę organizacji produkcji, sporządzisz harmonogram i zastosujesz narzędzia Lean.",
      lekcje: [
        { tytul: "Typy i formy organizacji produkcji", tresc: `<h4>Typy produkcji</h4>
<div class="tw"><table><tr><th>Typ</th><th>Cechy</th><th>Przykład</th></tr>
<tr><td><b>Jednostkowa</b></td><td>pojedyncze wyroby lub małe ilości, maszyny uniwersalne, wysokie kwalifikacje, długi cykl</td><td>prototypy, maszyny specjalne, remonty</td></tr>
<tr><td><b>Seryjna</b> (mało-, średnio-, wielkoseryjna)</td><td>wyroby w partiach powtarzalnych, przezbrajanie stanowisk</td><td>pompy, przekładnie, obrabiarki</td></tr>
<tr><td><b>Masowa</b></td><td>duże ilości jednego wyrobu w sposób ciągły, maszyny specjalne, linie automatyczne, krótki takt</td><td>śruby, łożyska, samochody</td></tr></table></div>
<p>Wskaźnikiem typu produkcji jest <b>współczynnik specjalizacji stanowisk</b> (liczba różnych operacji przypisanych do jednego stanowiska): 1 dla masowej, kilka do kilkunastu dla seryjnej, powyżej ok. 40 dla jednostkowej.</p>
<h4>Formy organizacji</h4>
<ul>
<li><b>Technologiczna</b> (gniazda technologiczne): grupy jednakowych obrabiarek (tokarnia, frezarnia). Elastyczna, ale długie drogi transportu i duże zapasy między operacjami. Typowa dla produkcji jednostkowej.</li>
<li><b>Przedmiotowa</b> (gniazda przedmiotowe, komórki produkcyjne): różne maszyny ustawione w kolejności obróbki rodziny części (np. wałki). Krótkie drogi, szybki przepływ.</li>
<li><b>Liniowa</b> (potokowa): stanowiska w kolejności operacji, ruch przedmiotów z taktem, przenośniki. Produkcja wielkoseryjna i masowa.</li>
<li><b>Elastyczne systemy produkcyjne (ESP, FMS)</b>: obrabiarki CNC, automatyczny transport (AGV) i magazyny, sterowanie komputerowe. Łączą wydajność z elastycznością.</li>
</ul>
<h4>Struktura przedsiębiorstwa produkcyjnego</h4>
<p>Komórki podstawowe (wydziały produkcyjne: obróbka, montaż), pomocnicze (narzędziownia, utrzymanie ruchu, energetyka, transport wewnętrzny, magazyny) i obsługi (technologia, planowanie, jakość, zaopatrzenie, sprzedaż). <b>Gospodarka narzędziowa</b>: wydawalnia narzędzi, ostrzenie, regeneracja, ewidencja zużycia.</p>
<h4>Gospodarka materiałowa</h4>
<ul>
<li>Zapas bieżący, zapas bezpieczeństwa (na wypadek opóźnień dostaw i wahań zużycia), punkt ponownego zamówienia.</li>
<li><b>Analiza ABC</b>: grupa A to ok. 20% pozycji dająca ok. 80% wartości (ścisła kontrola), B średnia, C dużo pozycji o małej wartości.</li>
<li>Wycena rozchodu: <b>FIFO</b> (pierwsze przyszło, pierwsze wyszło), LIFO, średnia ważona.</li>
</ul>
<div class="tip">Na egzaminie: grupowanie jednakowych maszyn to forma technologiczna (gniazdowa), układ maszyn w kolejności operacji dla rodziny części to forma przedmiotowa.</div>` },
        { tytul: "Planowanie i harmonogramowanie", tresc: `<h4>Poziomy planowania</h4>
<ul>
<li><b>Strategiczne</b> (kilka lat): asortyment, inwestycje, zdolność produkcyjna.</li>
<li><b>Taktyczne</b> (rok, kwartał): główny harmonogram produkcji (MPS), plan zaopatrzenia, plan zatrudnienia.</li>
<li><b>Operacyjne</b> (miesiąc, tydzień, zmiana): harmonogramy wydziałów i stanowisk, zlecenia, kolejność zadań.</li>
</ul>
<h4>MRP</h4>
<p><b>MRP</b> (planowanie potrzeb materiałowych) wylicza z planu wyrobów, struktury wyrobu (BOM) i stanów magazynowych, ile i kiedy zamówić lub wyprodukować każdej części. Zapotrzebowanie netto = zapotrzebowanie brutto - zapas - dostawy w drodze (+ zapas bezpieczeństwa).</p>
<pre>Wyrób: przekładnia, w strukturze 2 wałki na 1 szt.
Plan: 150 przekładni, zapas wałków: 60 szt., w drodze: 40 szt.
Brutto = 150 · 2 = 300 wałków
Netto = 300 - 60 - 40 = 200 wałków do wyprodukowania
Czas realizacji wałka 2 tyg. → zlecenie 2 tyg. przed montażem</pre>
<p><b>MRP II</b> rozszerza MRP o zdolności produkcyjne i finanse, a <b>ERP</b> obejmuje całe przedsiębiorstwo (sprzedaż, zakupy, kadry, księgowość).</p>
<h4>Wykres Gantta</h4>
<p>Poziome paski na osi czasu przedstawiają zadania (lub obciążenie maszyn), ich początek, czas trwania i kolejność. Pozwala kontrolować postęp (zaznaczenie wykonania) i wykrywać kolizje zasobów. Przy planowaniu stanowisk uwzględnia się czas t<sub>pz</sub>, normy t<sub>j</sub> i liczbę zmian.</p>
<h4>Planowanie sieciowe</h4>
<p>Metoda <b>CPM</b> (ścieżki krytycznej): sieć czynności z czasami trwania. <b>Ścieżka krytyczna</b> to najdłuższa droga od początku do końca, wyznacza minimalny czas realizacji przedsięwzięcia. Czynności krytyczne nie mają zapasu czasu: ich opóźnienie opóźnia całość. PERT uwzględnia czasy optymistyczny, najbardziej prawdopodobny i pesymistyczny: t<sub>e</sub> = (a + 4m + b)/6.</p>
<h4>Kolejność zleceń</h4>
<p>Reguły priorytetu: FIFO (kolejność wpływu), SPT (najkrótszy czas operacji najpierw: minimalizuje średni czas przepływu), EDD (najwcześniejszy termin), reguła Johnsona dla dwóch maszyn (minimalizacja całkowitego czasu: zadania z krótszym czasem na M1 na początek, z krótszym na M2 na koniec).</p>
<div class="tip">Zapamiętaj: ścieżka krytyczna to najdłuższa, a nie najkrótsza ścieżka w sieci. To ona decyduje o terminie zakończenia.</div>` },
        { tytul: "Lean manufacturing", tresc: `<h4>Siedem marnotrawstw (muda)</h4>
<p>Nadprodukcja, zapasy, transport, zbędny ruch, oczekiwanie, nadmierne przetwarzanie, braki (wady). Często dodaje się ósme: niewykorzystany potencjał pracowników. Lean dąży do przepływu bez marnotrawstwa i do produkcji „ciągnionej” przez klienta.</p>
<h4>Narzędzia Lean</h4>
<div class="tw"><table><tr><th>Narzędzie</th><th>Istota</th></tr>
<tr><td><b>5S</b></td><td>Sortowanie, Systematyka (porządek), Sprzątanie, Standaryzacja, Samodyscyplina</td></tr>
<tr><td><b>Kanban</b></td><td>karty sygnalizujące potrzebę uzupełnienia, system ssący (pull)</td></tr>
<tr><td><b>JIT</b> (Just in Time)</td><td>dostawy i produkcja dokładnie wtedy, gdy są potrzebne, minimalne zapasy</td></tr>
<tr><td><b>SMED</b></td><td>skrócenie przezbrojenia do jednocyfrowej liczby minut, przeniesienie czynności wewnętrznych (przy zatrzymanej maszynie) na zewnętrzne</td></tr>
<tr><td><b>TPM</b></td><td>kompleksowe utrzymanie maszyn z udziałem operatorów, wskaźnik OEE</td></tr>
<tr><td><b>Poka-yoke</b></td><td>zabezpieczenia przed pomyłką (kształt uniemożliwiający złe założenie detalu)</td></tr>
<tr><td><b>Kaizen</b></td><td>ciągłe doskonalenie małymi krokami, z udziałem pracowników</td></tr>
<tr><td><b>VSM</b></td><td>mapowanie strumienia wartości, wykrywanie marnotrawstw w przepływie</td></tr>
<tr><td><b>Andon</b></td><td>wizualna sygnalizacja problemu na stanowisku (światło, tablica)</td></tr>
<tr><td><b>Heijunka</b></td><td>poziomowanie produkcji (równomierny wolumen i mix)</td></tr></table></div>
<h4>SMED w praktyce</h4>
<ol>
<li>Rejestracja przezbrojenia (film, lista czynności z czasami).</li>
<li>Rozdzielenie czynności wewnętrznych i zewnętrznych.</li>
<li>Przeniesienie czynności na zewnątrz (przygotowanie narzędzi i przyrządów przed zatrzymaniem maszyny).</li>
<li>Usprawnienie czynności wewnętrznych (szybkozłącza, bazy, standaryzowane wysokości narzędzi, presetting).</li>
<li>Standaryzacja nowej metody.</li>
</ol>
<h4>Standaryzacja pracy</h4>
<p>Standard pracy określa: takt, kolejność czynności, standardowy zapas w procesie. Instrukcje stanowiskowe (z obrazami, punktami kluczowymi jakości i BHP) umieszcza się bezpośrednio przy stanowisku. <b>Zarządzanie wizualne</b>: tablice wyników, oznaczenie miejsc składowania, cienie narzędzi (shadow board).</p>
<h4>Wskaźnik OEE i takt: przykład</h4>
<p><b>OEE = dostępność × wydajność × jakość</b>. Maszyna planowo pracuje 480 min, postoje trwały 48 min: dostępność 432/480 = 0,9. Wykonano 380 szt. przy możliwych 400: wydajność 0,95. Dobrych było 361 szt.: jakość 361/380 = 0,95. OEE = 0,9 × 0,95 × 0,95 ≈ <b>0,81 (81%)</b>. Wartość ok. 85% uważa się za poziom światowy.</p>
<p><b>Takt</b> = dostępny czas pracy / zapotrzebowanie klienta, np. 27 000 s / 450 szt. = 60 s na sztukę. Gdy czas cyklu jest dłuższy od taktu, linia nie nadąży za popytem.</p>
<div class="tip">Pytanie o „przeniesienie czynności z czasu postoju maszyny do czasu jej pracy” to zawsze SMED. „Karta, która uruchamia produkcję lub dostawę” to kanban.</div>` }
      ],
      pytania: [
        Q("Forma organizacji produkcji polegająca na grupowaniu jednakowych obrabiarek (np. tokarnia, frezarnia) to forma", "technologiczna", "przedmiotowa", "liniowa", "potokowa", "Typowa dla produkcji jednostkowej."),
        Q("Produkcja w sposób ciągły dużych ilości jednego wyrobu na liniach z krótkim taktem to produkcja", "masowa", "jednostkowa", "małoseryjna", "prototypowa", "Współczynnik specjalizacji stanowisk wynosi ok. 1."),
        Q("Zapotrzebowanie netto na wałki przy potrzebie brutto 300 szt., zapasie 60 szt. i dostawie w drodze 40 szt. wynosi", "200 szt.", "300 szt.", "260 szt.", "400 szt.", "300 - 60 - 40."),
        Q("Ścieżka krytyczna w sieci czynności to ścieżka", "najdłuższa, wyznaczająca minimalny czas realizacji", "najkrótsza", "z największą liczbą czynności", "z czynnościami o największym zapasie czasu", "Czynności krytyczne nie mają zapasu."),
        Q("W analizie ABC grupa A obejmuje", "mało pozycji o największej wartości", "najwięcej pozycji o małej wartości", "pozycje bez ruchu w magazynie", "wyłącznie materiały pomocnicze", "Ok. 20% pozycji daje ok. 80% wartości."),
        Q("Metoda skracania czasu przezbrojenia przez przeniesienie czynności na czas pracy maszyny to", "SMED", "5S", "Kanban", "Poka-yoke", "Single Minute Exchange of Die."),
        Q("Zabezpieczenie uniemożliwiające błędne założenie detalu w przyrządzie to", "poka-yoke", "kaizen", "heijunka", "andon", "Japońskie „zabezpieczenie przed pomyłką”."),
        Q("Pierwszy krok metody 5S to", "sortowanie (seiri)", "standaryzacja (seiketsu)", "samodyscyplina (shitsuke)", "sprzątanie (seiso)", "Kolejność: sortowanie, systematyka, sprzątanie, standaryzacja, samodyscyplina.")
      ]
    },
    {
      id: "jakosc-koszty", tytul: "Jakość i koszty produkcji", opis: "Zastosujesz narzędzia jakości i SPC, obliczysz koszt jednostkowy, próg rentowności i amortyzację.",
      lekcje: [
        { tytul: "Systemy i narzędzia jakości", tresc: `<h4>System zarządzania jakością</h4>
<p>Norma <b>ISO 9001</b> określa wymagania systemu zarządzania jakością (podejście procesowe, orientacja na klienta, zarządzanie ryzykiem, ciągłe doskonalenie, udokumentowane informacje). W motoryzacji obowiązuje <b>IATF 16949</b>, w ochronie środowiska ISO 14001, w BHP ISO 45001. Certyfikat wydaje niezależna jednostka po audycie.</p>
<h4>Cykl PDCA (Deminga)</h4>
<p><b>Plan</b> (zaplanuj), <b>Do</b> (wykonaj), <b>Check</b> (sprawdź), <b>Act</b> (działaj, standaryzuj lub koryguj). Podstawa ciągłego doskonalenia.</p>
<h4>Narzędzia jakości</h4>
<div class="tw"><table><tr><th>Narzędzie</th><th>Zastosowanie</th></tr>
<tr><td><b>Diagram Ishikawy</b> (rybiej ości, przyczynowo-skutkowy)</td><td>szukanie przyczyn problemu w grupach 5M: człowiek, maszyna, metoda, materiał, pomiar (+ środowisko, zarządzanie)</td></tr>
<tr><td><b>Diagram Pareto</b></td><td>uszeregowanie przyczyn od najczęstszej; zasada 80/20: niewiele przyczyn daje większość problemów</td></tr>
<tr><td><b>Karta kontrolna</b></td><td>monitorowanie stabilności procesu w czasie (linie centralna i granice kontrolne)</td></tr>
<tr><td><b>Histogram</b></td><td>rozkład wyników pomiarów</td></tr>
<tr><td><b>Arkusz kontrolny</b></td><td>zbieranie danych o wadach</td></tr>
<tr><td><b>Diagram korelacji</b></td><td>związek między dwiema zmiennymi</td></tr>
<tr><td><b>5 x Dlaczego</b></td><td>dochodzenie do przyczyny źródłowej</td></tr>
<tr><td><b>FMEA</b></td><td>analiza możliwych wad i ich skutków; liczba priorytetu ryzyka <b>RPN = S · O · D</b> (znaczenie, występowanie, wykrywalność, każda w skali 1-10)</td></tr></table></div>
<h4>Przykład FMEA</h4>
<pre>Wada: niedokręcona śruba pokrywy
S (znaczenie) = 7, O (występowanie) = 4, D (wykrywalność) = 6
RPN = 7 · 4 · 6 = 168 → wymaga działań (np. klucz z kontrolą momentu)</pre>
<h4>Koszty jakości</h4>
<p>Koszty <b>zapobiegania</b> (szkolenia, FMEA, poka-yoke), <b>oceny</b> (kontrola, pomiary, audyty), <b>błędów wewnętrznych</b> (braki, poprawki) i <b>zewnętrznych</b> (reklamacje, gwarancje, utrata klienta). Inwestycja w zapobieganie zmniejsza koszty błędów najbardziej.</p>
<h4>Kontrola jakości</h4>
<p>Kontrola <b>stuprocentowa</b> (każda sztuka: wyroby krytyczne) i <b>wyrywkowa</b> (statystyczna, plany próbkowania wg AQL). Wyroby niezgodne oznacza się, izoluje i rejestruje; decyzja: naprawa, przeróbka, dopuszczenie warunkowe lub złomowanie.</p>
<div class="tip">Diagram Ishikawy szuka przyczyn jednego skutku, diagram Pareto wskazuje, które przyczyny są najważniejsze ilościowo.</div>` },
        { tytul: "Statystyczne sterowanie procesem (SPC)", tresc: `<h4>Zmienność procesu</h4>
<p>Przyczyny <b>losowe</b> (naturalne, wiele małych czynników) i <b>specjalne</b> (wyznaczalne: zużycie narzędzia, nowa partia materiału, błąd operatora). Proces <b>stabilny</b> (pod kontrolą statystyczną) ma tylko zmienność losową.</p>
<h4>Karty kontrolne</h4>
<p>Karta <b>X̄-R</b> (średnia i rozstęp z próbek np. 5-elementowych, pobieranych co godzinę) dla cech mierzalnych. Karty p i np dla odsetka i liczby wadliwych, c i u dla liczby wad. Granice kontrolne (zwykle ±3σ od linii centralnej) wynikają z procesu, a nie z tolerancji.</p>
<p>Sygnały rozregulowania: punkt poza granicami kontrolnymi, 7 kolejnych punktów po jednej stronie linii centralnej, 7 punktów rosnących lub malejących (trend, np. zużycie narzędzia), układy cykliczne. Wtedy należy znaleźć i usunąć przyczynę specjalną.</p>
<h4>Zdolność procesu</h4>
<pre>Cp  = (USL - LSL) / (6σ)
Cpk = min[(USL - μ) / 3σ ; (μ - LSL) / 3σ]

Wymiar 20 ± 0,06: USL = 20,06, LSL = 19,94
σ = 0,01, średnia μ = 20,02
Cp  = 0,12 / 0,06 = 2,0
Cpk = min[(20,06 - 20,02)/0,03 ; (20,02 - 19,94)/0,03]
    = min[1,33 ; 2,67] = 1,33</pre>
<div class="tw"><table><tr><th>Wartość</th><th>Ocena</th></tr>
<tr><td>Cpk &lt; 1,0</td><td>proces niezdolny, produkuje braki</td></tr>
<tr><td>1,0-1,33</td><td>proces na granicy zdolności</td></tr>
<tr><td>≥ 1,33</td><td>proces zdolny (typowy wymóg klientów)</td></tr>
<tr><td>≥ 1,67</td><td>wymagany dla cech krytycznych (np. motoryzacja)</td></tr></table></div>
<p><b>Cp</b> mówi o potencjale (rozrzut względem tolerancji), <b>Cpk</b> uwzględnia także przesunięcie średniej. Jeśli Cp jest duże, a Cpk małe, proces trzeba <b>wycentrować</b> (np. korekta narzędzia na CNC), a nie wymieniać maszynę.</p>
<h4>Analiza systemu pomiarowego (MSA)</h4>
<p>Badanie <b>R&amp;R</b> (powtarzalność i odtwarzalność): kilku operatorów mierzy kilkukrotnie te same części. Wynik GRR do 10% tolerancji: system dobry, 10-30% warunkowo akceptowalny, powyżej 30% nieakceptowalny. Bez wiarygodnego pomiaru SPC nie ma sensu.</p>
<div class="tip">Granice kontrolne na karcie to nie granice tolerancji. Punkt może być w tolerancji, a mimo to sygnalizować rozregulowanie procesu.</div>` },
        { tytul: "Koszty wytwarzania i rentowność", tresc: `<h4>Podział kosztów</h4>
<ul>
<li><b>Bezpośrednie</b> (przypisane do wyrobu): materiały bezpośrednie, płace bezpośrednie z narzutami, koszty specjalne (narzędzia specjalne). <b>Pośrednie</b>: koszty wydziałowe (utrzymanie hal, energia ogólna, płace mistrzów) i ogólnozakładowe, rozliczane narzutem.</li>
<li><b>Stałe</b> (niezależne od wielkości produkcji: amortyzacja, czynsz, płace administracji) i <b>zmienne</b> (rosną z produkcją: materiał, płace akordowe, energia technologiczna).</li>
</ul>
<h4>Kalkulacja doliczeniowa</h4>
<pre>Materiał bezpośredni                    120 zł
Płace bezpośrednie (2 h · 40 zł)         80 zł
Koszty wydziałowe: narzut 150% płac     120 zł
= Koszt wytworzenia                     320 zł
Koszty ogólnozakładowe: 10%              32 zł
= Koszt własny                          352 zł
Zysk 15%                                 52,80 zł
= Cena netto                            404,80 zł</pre>
<h4>Próg rentowności</h4>
<pre>BEP [szt.] = K_s / (c - k_zj)
K_s = 60 000 zł (koszty stałe), c = 50 zł/szt., k_zj = 30 zł/szt.
BEP = 60 000 / 20 = 3000 szt.
Przy 4000 szt.: zysk = 4000 · 20 - 60 000 = 20 000 zł</pre>
<p>Różnica c - k<sub>zj</sub> to <b>marża jednostkowa</b> (na pokrycie kosztów stałych). Poniżej progu rentowności firma ponosi stratę. Koszt jednostkowy maleje ze wzrostem produkcji, bo koszty stałe rozkładają się na więcej sztuk.</p>
<h4>Amortyzacja</h4>
<p>Metoda <b>liniowa</b>: odpis roczny = wartość początkowa · stawka. Obrabiarka 400 000 zł, stawka 10%: 40 000 zł rocznie, 3333 zł miesięcznie, okres 10 lat. Metoda <b>degresywna</b>: stawka stosowana do wartości netto (wyższe odpisy w pierwszych latach). Koszt godziny pracy maszyny (maszynogodziny) obejmuje amortyzację, energię, konserwację, powierzchnię, podzielone przez efektywny czas pracy w roku.</p>
<h4>Porównanie wariantów procesu</h4>
<p>Wariant z wyższymi kosztami stałymi (np. CNC, przyrząd specjalny) i niższymi zmiennymi opłaca się powyżej <b>serii granicznej</b>: n<sub>gr</sub> = (K<sub>s2</sub> - K<sub>s1</sub>)/(k<sub>z1</sub> - k<sub>z2</sub>). Przyrząd za 6000 zł zmniejszający koszt sztuki z 25 zł do 13 zł opłaca się od 500 sztuk.</p>
<h4>Nadzór nad zespołem</h4>
<p>Mistrz lub brygadzista rozdziela zadania wg kwalifikacji, kontroluje terminowość i jakość, prowadzi instruktaż stanowiskowy BHP, dokumentuje czas pracy. Motywacja: płacowa (akord, premia) i pozapłacowa (uznanie, rozwój, dobra atmosfera).</p>
<div class="tip">Na egzaminie wzór progu rentowności dzieli koszty stałe przez marżę jednostkową, nie przez cenę. Jeśli wynik wychodzi niecałkowity, zaokrąglij w górę.</div>` }
      ],
      pytania: [
        Q("Diagram przyczynowo-skutkowy grupujący przyczyny w kategorie 5M to diagram", "Ishikawy", "Pareto", "Gantta", "korelacji", "Nazywany też diagramem rybiej ości."),
        Q("Liczba priorytetu ryzyka RPN w FMEA dla S = 7, O = 4, D = 6 wynosi", "168", "17", "28", "42", "RPN = S · O · D."),
        Q("Wskaźnik Cpk dla wymiaru 20 ± 0,06 przy σ = 0,01 i średniej 20,02 wynosi", "1,33", "2,0", "2,67", "1,0", "Decyduje bliższa granica: (20,06 - 20,02)/0,03."),
        Q("Gdy Cp procesu jest duże, a Cpk małe, należy przede wszystkim", "wycentrować proces", "wymienić obrabiarkę", "poszerzyć tolerancję", "zaprzestać pomiarów", "Rozrzut jest mały, ale średnia jest przesunięta."),
        Q("Siedem kolejnych punktów rosnących na karcie kontrolnej wskazuje na", "trend, np. zużywanie się narzędzia", "proces stabilny", "błąd w obliczeniu tolerancji", "zbyt małą próbkę", "To sygnał przyczyny specjalnej."),
        Q("Próg rentowności przy kosztach stałych 60 000 zł, cenie 50 zł i koszcie zmiennym 30 zł/szt. wynosi", "3000 szt.", "1200 szt.", "2000 szt.", "750 szt.", "60 000 / (50 - 30)."),
        Q("Do kosztów stałych zalicza się", "amortyzację budynków i maszyn", "materiał bezpośredni", "płace akordowe", "energię zużytą na obróbkę", "Nie zależy od wielkości produkcji."),
        Q("Roczny odpis amortyzacyjny liniowy maszyny o wartości 400 000 zł przy stawce 10% wynosi", "40 000 zł", "4000 zł", "400 000 zł", "10 000 zł", "400 000 · 0,1.")
      ]
    }
  ]);
})(window.KURSY);
