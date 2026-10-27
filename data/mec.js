window.KURSY = window.KURSY || {};

var MEC_RYSUNEK = `
<ul>
<li>Rzutowanie prostokątne metodą europejską (E): widok z przodu (główny), z góry pod spodem, z lewej strony - po prawej stronie widoku głównego.</li>
<li>Linie: ciągła gruba - krawędzie widoczne; kreskowa - niewidoczne; punktowa cienka - osie symetrii; ciągła cienka - linie wymiarowe i kreskowanie przekrojów.</li>
<li>Przekroje: pełny, półwidok-półprzekrój, cząstkowy, kład.</li>
<li>Wymiarowanie: wymiary w mm bez jednostki; Ø - średnica, R - promień, M10 - gwint metryczny o średnicy 10 mm, M10×1 - drobnozwojny.</li>
<li><b>Tolerancja</b> - różnica między wymiarem górnym i dolnym, np. Ø20 ±0,1 → 19,9-20,1. Pasowania w układzie <b>stałego otworu</b> (H) - np. H7/g6 (luźne), H7/k6 (mieszane), H7/s6 (ciasne).</li>
<li><b>Chropowatość</b> Ra w µm - im mniejsza, tym gładsza powierzchnia (np. Ra 0,8 po szlifowaniu, Ra 6,3 po toczeniu zgrubnym).</li>
</ul>`;

window.KURSY["MEC.03"] = {
  podstawowy: [
    { tytul: "Rysunek techniczny maszynowy", tresc: MEC_RYSUNEK },
    {
      tytul: "Części maszyn i połączenia",
      tresc: `
<ul>
<li><b>Połączenia rozłączne</b>: gwintowe (śruby, wkręty, nakrętki; zabezpieczenia: podkładka sprężysta, nakrętka samokontrująca, przeciwnakrętka, klej do gwintów, zawleczka), wpustowe, wielowypustowe, kołkowe, sworzniowe.</li>
<li><b>Nierozłączne</b>: spawane, zgrzewane, lutowane, nitowe, klejone, wciskowe (skurczowe).</li>
<li>Wały i osie: wał przenosi moment obrotowy, oś tylko podtrzymuje elementy obrotowe.</li>
<li><b>Sprzęgła</b> - łączą wały: sztywne, podatne (kompensują niewspółosiowość), cierne (rozłączne w ruchu), jednokierunkowe.</li>
<li>Łożyska toczne: kulkowe zwykłe (obciążenie promieniowe i niewielkie osiowe), walcowe (duże promieniowe), stożkowe (promieniowe i osiowe), wzdłużne (osiowe). Oznaczenie np. 6205: 6 - łożysko kulkowe zwykłe, 05 - średnica otworu 25 mm (05 × 5).</li>
<li>Uszczelnienia: pierścienie typu O (O-ring), uszczelniacze wargowe (simmeringi), uszczelki płaskie, dławnice.</li>
</ul>`
    },
    {
      tytul: "Montaż, uruchamianie i obsługa maszyn",
      tresc: `
<ul>
<li>Montaż wg <b>dokumentacji techniczno-ruchowej (DTR)</b> i rysunku złożeniowego; kolejność: zespoły → podzespoły → maszyna.</li>
<li>Śruby łączące kołnierze dokręca się <b>na krzyż</b>, stopniowo, kluczem dynamometrycznym do podanego momentu.</li>
<li><b>Współosiowość</b> wałów silnika i maszyny sprawdza się czujnikiem zegarowym lub laserowo - niewspółosiowość powoduje drgania i zużycie łożysk.</li>
<li>Montaż łożysk: na zimno (prasa, tuleja montażowa - siła przez pierścień osadzany ciasno), na gorąco (nagrzewnica indukcyjna, ok. 80-110°C, nigdy płomieniem).</li>
<li>Smarowanie: oleje (lepkość wg ISO VG), smary plastyczne (np. łożyska), centralne układy smarowania; karta smarowania określa punkty, środek i częstotliwość.</li>
<li>Uruchomienie: kontrola smarowania, osłon, kierunku obrotów, próba na biegu jałowym, potem pod obciążeniem; pomiar temperatury łożysk i drgań.</li>
<li>Obsługa: codzienna (kontrola, czystość), okresowa (przeglądy wg DTR), naprawy (bieżące, średnie, kapitalne).</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Diagnostyka i zużycie elementów maszyn",
      tresc: `
<ul><li>Rodzaje zużycia: <b>ścierne</b>, adhezyjne (zatarcie), <b>zmęczeniowe</b> (pitting w łożyskach i kołach zębatych), korozyjne, erozyjne.</li>
<li>Diagnostyka: drgania (wibroakustyka), temperatura (termowizja), analiza oleju (cząstki metalu), pomiar luzów, endoskopia.</li>
<li>Przyczyny przegrzewania łożyska: za dużo lub za mało smaru, zbyt ciasne pasowanie, niewspółosiowość, zanieczyszczenie.</li></ul>`
    }
  ],
  pytania: [
    { p: "Krawędzie niewidoczne na rysunku technicznym rysuje się linią", o: ["kreskową", "ciągłą grubą", "punktową cienką", "ciągłą falistą"], k: 0, w: "Osie symetrii - linia punktowa cienka." },
    { p: "W rzutowaniu metodą europejską widok z góry umieszcza się", o: ["pod widokiem z przodu", "nad widokiem z przodu", "po lewej stronie", "po prawej stronie"], k: 0, w: "Widok z lewej umieszcza się po prawej stronie widoku głównego." },
    { p: "Oznaczenie M12 na rysunku to", o: ["gwint metryczny o średnicy nominalnej 12 mm", "materiał o twardości 12", "moduł koła zębatego 12", "otwór pod kołek 12 mm"], k: 0, w: "Gwint zwykły, jeśli nie podano skoku." },
    { p: "Wymiar Ø50 +0,2/−0,1 - wymiar dolny wynosi", o: ["49,9 mm", "50,2 mm", "49,8 mm", "50,1 mm"], k: 0, w: "50 − 0,1 = 49,9." },
    { p: "Tolerancja wymiaru Ø50 +0,2/−0,1 wynosi", o: ["0,3 mm", "0,1 mm", "0,2 mm", "50,3 mm"], k: 0, w: "50,2 − 49,9 = 0,3 mm." },
    { p: "Pasowanie H7/g6 to pasowanie", o: ["luźne", "ciasne", "mieszane", "wtłaczane"], k: 0, w: "Wałek g jest mniejszy od otworu H." },
    { p: "Mniejsza wartość parametru chropowatości Ra oznacza powierzchnię", o: ["gładszą", "bardziej chropowatą", "twardszą", "pomalowaną"], k: 0, w: "Ra to średnie odchylenie profilu w µm." },
    { p: "Łożysko 6206 ma średnicę otworu", o: ["30 mm", "26 mm", "62 mm", "6 mm"], k: 0, w: "06 × 5 = 30 mm." },
    { p: "Do przenoszenia dużych obciążeń promieniowych i osiowych jednocześnie stosuje się łożyska", o: ["stożkowe", "kulkowe wzdłużne", "igiełkowe", "ślizgowe porowate"], k: 0, w: "Montuje się je zwykle parami." },
    { p: "Element przenoszący moment obrotowy to", o: ["wał", "oś", "tuleja dystansowa", "podkładka"], k: 0, w: "Oś tylko podtrzymuje elementy." },
    { p: "Sprzęgło kompensujące niewielką niewspółosiowość wałów to sprzęgło", o: ["podatne", "sztywne kołnierzowe", "cierne wielopłytkowe zawsze", "jednokierunkowe"], k: 0, w: "Ma element sprężysty (np. gumowy)." },
    { p: "Połączeniem nierozłącznym jest połączenie", o: ["nitowe", "gwintowe", "wpustowe", "sworzniowe"], k: 0, w: "Rozłączenie wymaga zniszczenia nitu." },
    { p: "Zabezpieczeniem połączenia gwintowego przed samoodkręceniem jest", o: ["nakrętka samokontrująca lub przeciwnakrętka", "podkładka płaska zwykła", "smar grafitowy", "dłuższa śruba"], k: 0, w: "Stosuje się też podkładki sprężyste i kleje." },
    { p: "Śruby łączące kołnierze dokręca się", o: ["na krzyż, stopniowo, do podanego momentu", "po kolei po obwodzie od razu do końca", "dowolnie", "tylko ręcznie bez klucza"], k: 0, w: "Zapewnia równomierny docisk uszczelki." },
    { p: "Łożysko nagrzewa się przed montażem na wał", o: ["nagrzewnicą indukcyjną do ok. 80-110°C", "palnikiem acetylenowym do czerwoności", "w ognisku", "w ciekłym azocie"], k: 0, w: "Płomień powoduje miejscowe przegrzanie i odpuszczenie stali." },
    { p: "Niewspółosiowość wałów silnika i pompy powoduje", o: ["drgania i szybkie zużycie łożysk", "spadek temperatury", "zwiększenie sprawności", "brak wpływu"], k: 0, w: "Sprawdza się ją czujnikami zegarowymi lub laserowo." },
    { p: "Dokument opisujący montaż, obsługę, smarowanie i konserwację maszyny to", o: ["DTR", "faktura", "karta pracy", "rysunek wykonawczy części"], k: 0, w: "Dokumentacja techniczno-ruchowa." },
    { p: "Zużycie zmęczeniowe powierzchni łożysk i kół zębatych w postaci wykruszeń to", o: ["pitting", "zatarcie", "korozja", "erozja"], k: 0, w: "Wynika z cyklicznych naprężeń kontaktowych." },
    { p: "Uszczelniacz wargowy na wale (simmering) chroni przed", o: ["wyciekiem oleju i wnikaniem zanieczyszczeń", "przeciążeniem", "luzem osiowym", "korozją wału w całości"], k: 0, w: "Warga przylega do obracającego się wału." },
    { p: "Pierwszy rozruch maszyny po montażu wykonuje się", o: ["na biegu jałowym, po sprawdzeniu smarowania, osłon i kierunku obrotów", "od razu pod pełnym obciążeniem", "bez osłon dla lepszej obserwacji", "bez smarowania"], k: 0, w: "Obserwuje się drgania, hałas i temperaturę." }
  ],
  praktyka: {
    tytul: "Wymiana łożysk i montaż zespołu napędowego",
    model: "w", czas: 150,
    opis: `
<p>Zespół: wał z dwoma łożyskami kulkowymi 6205 w obudowach, koło pasowe na wpuście, sprzęgło podatne do silnika. Łożyska są zużyte (hałas, luz).</p>
<ol><li>Na podstawie rysunku złożeniowego zaplanuj kolejność demontażu i montażu, dobierz narzędzia.</li>
<li>Zdemontuj zespół, zmierz średnicę czopów wału mikrometrem i porównaj z rysunkiem (Ø25 k6).</li>
<li>Zamontuj nowe łożyska, uszczelnienia, koło pasowe, sprawdź swobodę obrotu.</li>
<li>Ustaw współosiowość wałów w sprzęgle (czujnik zegarowy), dokręć śruby momentem z DTR.</li>
<li>Nasmaruj łożyska, wypełnij kartę montażu i protokół z pomiarów.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Planowanie", pozycje: ["Kolejność demontażu i montażu zgodna z rysunkiem", "Dobór narzędzi: ściągacz, prasa lub tuleja montażowa, klucz dynamometryczny, mikrometr, czujnik zegarowy"] },
      { grupa: "Rezultat 2: Pomiary", pozycje: ["Średnice czopów zmierzone w dwóch płaszczyznach", "Ocena zgodności z tolerancją k6 (Ø25 +0,015/+0,002)"] },
      { grupa: "Rezultat 3: Montaż", pozycje: ["Łożyska wciśnięte przez pierścień wewnętrzny (tuleja) lub nagrzane nagrzewnicą", "Uszczelnienia nieuszkodzone, właściwie skierowane", "Wpust i koło pasowe osadzone, zabezpieczone osiowo", "Wał obraca się swobodnie bez zacięć", "Bicie promieniowe i osiowe w sprzęgle w granicach podanych w DTR", "Śruby dokręcone momentem z DTR"] },
      { grupa: "Rezultat 4: Dokumentacja", pozycje: ["Karta montażu i protokół z wynikami pomiarów i wnioskami"] },
      { grupa: "Przebieg", pozycje: ["Okulary i rękawice przy demontażu, porządek, zużyte części oddzielone"] }
    ],
    rozwiazanie: `
<div class="tip">Nigdy nie wbijaj łożyska młotkiem przez pierścień zewnętrzny na wał - siła przechodzi przez kulki i uszkadza bieżnie. Używaj tulei opartej o pierścień wewnętrzny.</div>`
  }
};

window.KURSY["MEC.05"] = {
  podstawowy: [
    {
      tytul: "Obróbka skrawaniem: rodzaje i parametry",
      tresc: `
<ul>
<li><b>Toczenie</b> (tokarka) - przedmiot się obraca, nóż wykonuje posuw; powierzchnie obrotowe, gwinty, czoła.</li>
<li><b>Frezowanie</b> (frezarka) - narzędzie wieloostrzowe się obraca; płaszczyzny, rowki, kieszenie, koła zębate.</li>
<li><b>Wiercenie</b>, <b>rozwiercanie</b> (dokładne otwory), <b>pogłębianie</b>, <b>gwintowanie</b>.</li>
<li><b>Szlifowanie</b> - obróbka wykończeniowa ściernicą, mała chropowatość i duża dokładność.</li>
</ul>
<h4>Parametry skrawania</h4>
<pre>prędkość skrawania: vc = π × D × n ÷ 1000   [m/min]
prędkość obrotowa:  n = 1000 × vc ÷ (π × D)   [obr/min]
posuw f [mm/obr] (toczenie), fz [mm/ząb] (frezowanie)
prędkość posuwu przy frezowaniu: vf = fz × z × n   [mm/min]
głębokość skrawania ap [mm]

Przykład: D = 50 mm, vc = 150 m/min → n = 150 000 ÷ (3,14 × 50) ≈ 955 obr/min</pre>
<p>Większą prędkość skrawania stosuje się dla narzędzi z <b>węglików spiekanych</b> niż ze stali szybkotnącej (<b>HSS</b>) i dla materiałów miękkich (aluminium) niż twardych.</p>`
    },
    {
      tytul: "Narzędzia i mocowanie",
      tresc: `
<ul>
<li>Materiały narzędziowe: stal szybkotnąca HSS, <b>węgliki spiekane</b> (płytki wymienne), cermetale, ceramika, CBN, diament (PCD - aluminium, kompozyty).</li>
<li>Geometria ostrza: kąt natarcia, przyłożenia, ostrza; promień naroża wpływa na chropowatość.</li>
<li>Mocowanie przedmiotu na tokarce: uchwyt trójszczękowy samocentrujący, czteroszczękowy (niezależny), kły (długie wałki), tuleja zaciskowa, podtrzymka; na frezarce: imadło, docisk do stołu, podzielnica.</li>
<li>Ciecze obróbkowe (chłodziwa) - chłodzą, smarują, usuwają wióry.</li>
<li>Pomiary: suwmiarka, mikrometr, średnicówka, sprawdziany (tłoczkowe do otworów, szczękowe do wałków - strona „przechodnia” i „nieprzechodnia”), sprawdziany do gwintów.</li>
</ul>`
    },
    {
      tytul: "Programowanie CNC",
      tresc: `
<ul>
<li>Osie: <b>Z</b> - oś wrzeciona (na tokarce wzdłuż przedmiotu), X - średnica (tokarka) lub oś pozioma stołu (frezarka), Y.</li>
<li>Punkty: <b>M</b> - zero maszyny, <b>W</b> - zero przedmiotu (ustawiane przez operatora), <b>R</b> - punkt referencyjny.</li>
<li>Programowanie absolutne (<b>G90</b>) i przyrostowe (<b>G91</b>).</li>
</ul>
<div class="tw"><table><tr><th>Kod</th><th>Znaczenie</th></tr>
<tr><td>G00</td><td>ruch szybki (bez skrawania)</td></tr><tr><td>G01</td><td>interpolacja liniowa z posuwem F</td></tr>
<tr><td>G02 / G03</td><td>interpolacja kołowa zgodnie / przeciwnie do ruchu wskazówek zegara</td></tr>
<tr><td>G41 / G42 / G40</td><td>korekcja promienia narzędzia lewa / prawa / odwołanie</td></tr>
<tr><td>M03 / M04 / M05</td><td>obroty wrzeciona w prawo / w lewo / stop</td></tr>
<tr><td>M08 / M09</td><td>chłodziwo włącz / wyłącz</td></tr>
<tr><td>M30</td><td>koniec programu z powrotem na początek</td></tr>
<tr><td>S, F, T</td><td>obroty, posuw, numer narzędzia</td></tr></table></div>
<pre>N10 G90 G54
N20 T1 M06
N30 S1200 M03
N40 G00 X0 Y0 Z5
N50 G01 Z-2 F100
N60 G01 X50 F300
N70 G00 Z50 M05
N80 M30</pre>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Jakość obróbki i BHP przy obrabiarkach",
      tresc: `
<ul><li>Chropowatość zależy od posuwu i promienia naroża: mniejszy posuw → gładsza powierzchnia.</li>
<li>Drgania (wibracje) - za duży wysięg narzędzia lub przedmiotu, za duża głębokość skrawania, tępe narzędzie.</li>
<li>Narost na ostrzu - przy zbyt małej prędkości skrawania materiałów plastycznych.</li>
<li>BHP: ścisły ubiór, nakrycie włosów, okulary ochronne; <b>nie pracować w rękawicach przy obracającym się wrzecionie</b>; usuwanie wiórów haczykiem lub szczotką po zatrzymaniu; klucz z uchwytu wyjęty przed włączeniem; osłony zamknięte.</li></ul>`
    }
  ],
  pytania: [
    { p: "Prędkość obrotową wrzeciona przy vc = 100 m/min i D = 40 mm wynosi około", o: ["796 obr/min", "2 500 obr/min", "400 obr/min", "126 obr/min"], k: 0, w: "n = 100 000 ÷ (3,14 × 40) ≈ 796." },
    { p: "Prędkość skrawania przy D = 100 mm i n = 500 obr/min wynosi około", o: ["157 m/min", "50 m/min", "500 m/min", "15,7 m/min"], k: 0, w: "vc = 3,14 × 100 × 500 ÷ 1000." },
    { p: "Frez 4-ostrzowy, fz = 0,05 mm/ząb, n = 2 000 obr/min. Prędkość posuwu vf wynosi", o: ["400 mm/min", "100 mm/min", "200 mm/min", "8 000 mm/min"], k: 0, w: "0,05 × 4 × 2 000 = 400 mm/min." },
    { p: "Obróbka wykończeniowa ściernicą, zapewniająca małą chropowatość, to", o: ["szlifowanie", "toczenie zgrubne", "wiercenie", "piłowanie"], k: 0, w: "Ra rzędu 0,2-0,8 µm." },
    { p: "Do mocowania długich wałków na tokarce stosuje się", o: ["kły i ewentualnie podtrzymkę", "imadło maszynowe", "podzielnicę", "stół magnetyczny frezarki"], k: 0, w: "Podtrzymka zapobiega uginaniu się wałka." },
    { p: "Uchwyt tokarski, w którym szczęki przesuwają się jednocześnie, centrując przedmiot, to uchwyt", o: ["trójszczękowy samocentrujący", "czteroszczękowy niezależny", "tarcza zabierakowa", "tuleja redukcyjna"], k: 0, w: "W czteroszczękowym każdą szczękę ustawia się osobno." },
    { p: "Sprawdzian szczękowy służy do kontroli", o: ["wałków", "otworów", "gwintów wewnętrznych", "chropowatości"], k: 0, w: "Do otworów - sprawdzian tłoczkowy." },
    { p: "Narzędzia z węglików spiekanych pozwalają na", o: ["większe prędkości skrawania niż HSS", "tylko obróbkę drewna", "mniejsze prędkości niż HSS", "pracę bez chłodzenia zawsze"], k: 0, w: "Węgliki są twardsze i odporne na temperaturę." },
    { p: "Oś Z na obrabiarce CNC to", o: ["oś wrzeciona", "oś poprzeczna stołu zawsze", "oś obrotu stołu", "oś osprzętu chłodzenia"], k: 0, w: "Ruch w kierunku +Z oddala narzędzie od przedmiotu." },
    { p: "Kod G00 oznacza", o: ["ruch szybki ustawczy", "interpolację liniową z posuwem", "interpolację kołową", "postój"], k: 0, w: "G01 - ruch roboczy z posuwem F." },
    { p: "Interpolację kołową zgodną z ruchem wskazówek zegara programuje się kodem", o: ["G02", "G03", "G01", "G41"], k: 0, w: "G03 - przeciwnie do ruchu wskazówek." },
    { p: "Kod M03 oznacza", o: ["obroty wrzeciona w prawo", "zatrzymanie wrzeciona", "włączenie chłodziwa", "koniec programu"], k: 0, w: "M05 - stop wrzeciona, M08 - chłodziwo." },
    { p: "Programowanie absolutne (współrzędne od punktu zerowego) włącza się kodem", o: ["G90", "G91", "G54", "G40"], k: 0, w: "G91 - programowanie przyrostowe." },
    { p: "Korekcję promienia narzędzia z lewej strony konturu włącza kod", o: ["G41", "G42", "G40", "G43"], k: 0, w: "G42 - prawa, G40 - odwołanie." },
    { p: "Punkt zerowy przedmiotu oznacza się literą", o: ["W", "M", "R", "N"], k: 0, w: "M - zero maszyny, R - punkt referencyjny." },
    { p: "Zmniejszenie posuwu przy toczeniu wykończeniowym powoduje", o: ["zmniejszenie chropowatości powierzchni", "zwiększenie chropowatości", "przyspieszenie obróbki", "zmianę średnicy przedmiotu"], k: 0, w: "Ślady posuwu są płytsze." },
    { p: "Przy pracy na tokarce zabronione jest", o: ["używanie rękawic przy obracającym się uchwycie", "noszenie okularów ochronnych", "używanie haczyka do wiórów", "zamykanie osłon"], k: 0, w: "Rękawica może zostać wciągnięta razem z dłonią." },
    { p: "Narost na ostrzu powstaje najczęściej przy", o: ["zbyt małej prędkości skrawania materiałów plastycznych", "zbyt dużej prędkości", "szlifowaniu", "obróbce żeliwa szarego"], k: 0, w: "Zwiększenie vc i dobre chłodzenie ograniczają narost." },
    { p: "Do wykonania dokładnego otworu po wierceniu stosuje się", o: ["rozwiertak", "pogłębiacz stożkowy", "frez tarczowy", "nóż przecinak"], k: 0, w: "Rozwiercanie daje dokładność i gładkość otworu." },
    { p: "Koniec programu z powrotem do jego początku oznacza kod", o: ["M30", "M05", "M08", "G28"], k: 0, w: "M02 - koniec programu bez przewinięcia (w części sterowań)." }
  ],
  praktyka: {
    tytul: "Toczenie wałka stopniowego na tokarce CNC",
    model: "w", czas: 180,
    opis: `
<p>Wykonaj wałek stopniowy ze stali C45 (półfabrykat Ø40 × 82 mm) wg rysunku: Ø36 h9 na długości 30 mm, Ø30 ±0,05 na długości 25 mm, fazka 1×45° na krawędziach, długość całkowita 80 mm, Ra 3,2.</p>
<ol><li>Opracuj kolejność zabiegów, dobierz narzędzia i parametry (vc = 180 m/min dla płytki z węglików spiekanych; oblicz n dla Ø36 i Ø30).</li>
<li>Napisz program (lub uzupełnij program bazowy), ustaw zero przedmiotu i korekcje narzędzi.</li>
<li>Wykonaj symulację, potem obróbkę.</li>
<li>Zmierz wymiary i chropowatość, wypełnij kartę pomiarów.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Technologia", pozycje: ["Kolejność: planowanie czoła, toczenie zgrubne, wykończeniowe, fazki", "n dla Ø36 ≈ 1 592 obr/min, dla Ø30 ≈ 1 910 obr/min", "Posuw wykończeniowy mniejszy niż zgrubny"] },
      { grupa: "Rezultat 2: Program", pozycje: ["Poprawne kody G00/G01, M03, M08, M05, M30", "Zero przedmiotu na czole wałka, korekcje narzędzi ustawione", "Symulacja bez kolizji"] },
      { grupa: "Rezultat 3: Wyrób", pozycje: ["Ø36 h9 w tolerancji (35,938-36,000)", "Ø30 ±0,05 w tolerancji", "Długości 30, 25 i 80 mm w tolerancji ogólnej", "Fazki 1×45° wykonane", "Chropowatość nie większa niż Ra 3,2"] },
      { grupa: "Przebieg", pozycje: ["Okulary, bez rękawic przy obracającym się uchwycie, osłony zamknięte", "Wióry usuwane po zatrzymaniu, porządek"] }
    ],
    rozwiazanie: `
<pre>n(Ø36) = 1000 × 180 ÷ (3,14 × 36) ≈ 1 592 obr/min
n(Ø30) = 1000 × 180 ÷ (3,14 × 30) ≈ 1 910 obr/min</pre>
<div class="tip">Na tokarce CNC zwykle używa się stałej prędkości skrawania (G96 S180) z ograniczeniem obrotów (G50 / G92 S...), wtedy sterowanie samo zmienia n w zależności od średnicy.</div>`
  }
};

window.KURSY["MEC.08"] = {
  podstawowy: [
    {
      tytul: "Obróbka ręczna: trasowanie, piłowanie, cięcie",
      tresc: `
<ul>
<li><b>Trasowanie</b> - przeniesienie zarysów z rysunku na materiał: płyta traserska, rysik, znacznik (wysokościowy), cyrkiel traserski, <b>punktak</b> (zaznaczanie środków otworów), kątownik, środkownik; farba traserska.</li>
<li><b>Piłowanie</b> - pilniki wg nacięcia: <b>zdzieraki</b> (zgrubne), <b>równiaki</b>, <b>gładziki</b>, iglaki (drobne prace). Pilnik pracuje przy ruchu do przodu; przedmiot mocuje się w imadle nisko nad szczękami (nakładki z miękkiego metalu na powierzchnie obrobione).</li>
<li><b>Cięcie piłką ręczną</b> - zęby brzeszczotu skierowane <b>do przodu</b> (od rękojeści); do materiałów cienkich i twardych - drobna podziałka zębów; cięcie rozpoczyna się pod niewielkim kątem.</li>
<li>Przecinanie przecinakiem, cięcie nożycami ręcznymi i dźwigniowymi, szlifierką kątową (osłona tarczy, okulary, zakaz zdejmowania osłony).</li>
<li>Gięcie i prostowanie blach i prętów, zaginanie w imadle, na giętarce.</li>
</ul>`
    },
    {
      tytul: "Wiercenie i gwintowanie",
      tresc: `
<ul>
<li>Wiertarki: stołowa, kolumnowa, promieniowa, ręczna. Przedmiot mocuje się w imadle maszynowym - <b>nigdy nie trzyma się go ręką</b>.</li>
<li>Wiertło kręte - kąt wierzchołkowy dla stali ok. <b>118°</b>; prędkość obrotowa jak przy toczeniu: n = 1000 × vc ÷ (π × D) (dla HSS i stali konstrukcyjnej vc ok. 20-30 m/min).</li>
<li>Duże otwory wierci się w dwóch etapach (najpierw mniejszym wiertłem - otwór pilotujący).</li>
<li><b>Pogłębianie</b> - stożkowe pod łby wkrętów, walcowe pod łby śrub imbusowych; <b>rozwiercanie</b> - dokładne otwory.</li>
<li><b>Gwintowanie wewnętrzne</b> - gwintowniki (komplet: wstępny, pośredni, wykańczający), pokrętło. Średnica otworu pod gwint metryczny ≈ <b>D − P</b> (średnica − skok): <b>M6 → 5 mm</b>, <b>M8 → 6,8 mm</b>, <b>M10 → 8,5 mm</b>, <b>M12 → 10,2 mm</b>. Po każdym obrocie - cofnięcie o ok. ¼-½ obrotu, aby złamać wiór; smarowanie.</li>
<li><b>Gwintowanie zewnętrzne</b> - narzynki w oprawce.</li>
</ul>`
    },
    {
      tytul: "Łączenie elementów i obróbka cieplna",
      tresc: `
<ul>
<li><b>Spawanie</b>: łukowe elektrodą otuloną (<b>MMA</b>, 111), w osłonie gazu: <b>MIG</b> (gaz obojętny - argon) i <b>MAG</b> (gaz aktywny - CO₂ lub mieszanka, stal konstrukcyjna; 135), <b>TIG</b> (elektroda wolframowa nietopliwa, argon; stal nierdzewna, aluminium; 141), gazowe (acetylen + tlen). Ochrona: przyłbica z filtrem, rękawice, odzież trudnopalna, wentylacja.</li>
<li><b>Lutowanie</b> miękkie (do 450°C, cyna) i twarde (powyżej 450°C, mosiądz, srebro).</li>
<li><b>Nitowanie</b> - nity pełne, zrywalne (POP).</li>
<li><b>Obróbka cieplna stali</b>: <b>hartowanie</b> (nagrzanie i szybkie chłodzenie - wzrost twardości, kruchość), <b>odpuszczanie</b> (po hartowaniu, zmniejsza kruchość i naprężenia), <b>wyżarzanie</b> (zmiękczające, normalizujące, odprężające), <b>nawęglanie</b> i azotowanie (utwardzenie powierzchni).</li>
<li>Oznaczenia stali: <b>S235JR</b> - stal konstrukcyjna, minimalna granica plastyczności 235 MPa; <b>C45</b> - stal węglowa do ulepszania cieplnego, ok. 0,45% węgla; 42CrMo4 - stal stopowa.</li>
</ul>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Naprawa elementów maszyn i narzędzi",
      tresc: `
<ul><li>Weryfikacja części: pomiar zużycia, kwalifikacja do dalszej pracy, naprawy lub wymiany.</li>
<li>Metody regeneracji: napawanie, metalizacja natryskowa, tulejowanie, obróbka na wymiar naprawczy, klejenie kompozytami.</li>
<li>Ostrzenie narzędzi (wierteł, przecinaków, dłut) na szlifierce - z podtrzymką ustawioną blisko ściernicy (ok. 2-3 mm), w okularach.</li></ul>`
    }
  ],
  pytania: [
    { p: "Narzędzie do zaznaczania środka otworu przed wierceniem to", o: ["punktak", "rysik", "przecinak", "pilnik iglak"], k: 0, w: "Wgłębienie prowadzi wiertło." },
    { p: "Pilnik o najgrubszym nacięciu, do zdejmowania dużych naddatków, to", o: ["zdzierak", "gładzik", "równiak", "iglak"], k: 0, w: "Gładzik - wykończeniowy." },
    { p: "Zęby brzeszczotu piłki ręcznej do metalu powinny być skierowane", o: ["do przodu, od rękojeści", "do tyłu, w stronę rękojeści", "dowolnie", "w górę"], k: 0, w: "Piłka tnie przy ruchu do przodu." },
    { p: "Do cięcia cienkościennych rur i blach stosuje się brzeszczot", o: ["o drobnej podziałce zębów", "o grubej podziałce", "bez zębów", "do drewna"], k: 0, w: "W materiale powinny pracować co najmniej 2-3 zęby." },
    { p: "Kąt wierzchołkowy wiertła krętego do stali wynosi typowo", o: ["118°", "90°", "60°", "180°"], k: 0, w: "Dla twardszych materiałów stosuje się np. 135°." },
    { p: "Podczas wiercenia na wiertarce stołowej przedmiot należy", o: ["zamocować w imadle maszynowym", "trzymać ręką w rękawicy", "przytrzymać kolanem", "położyć luzem na stole"], k: 0, w: "Wiertło może porwać przedmiot." },
    { p: "Średnica otworu pod gwint M8 wynosi", o: ["6,8 mm", "8 mm", "7,5 mm", "6 mm"], k: 0, w: "D − P = 8 − 1,25 = 6,75 ≈ 6,8 mm." },
    { p: "Średnica otworu pod gwint M10 wynosi", o: ["8,5 mm", "9 mm", "10 mm", "7,5 mm"], k: 0, w: "10 − 1,5 = 8,5 mm." },
    { p: "Gwint zewnętrzny wykonuje się ręcznie za pomocą", o: ["narzynki", "gwintownika", "rozwiertaka", "pogłębiacza"], k: 0, w: "Gwintownik - gwint wewnętrzny." },
    { p: "Podczas gwintowania gwintownikiem po każdym obrocie należy", o: ["cofnąć narzędzie o ok. ¼-½ obrotu, by złamać wiór", "dociskać mocniej", "nie cofać", "uderzyć młotkiem"], k: 0, w: "Zapobiega to złamaniu gwintownika." },
    { p: "Metoda spawania w osłonie gazu aktywnego (np. CO₂) drutem elektrodowym to", o: ["MAG", "MIG", "TIG", "MMA"], k: 0, w: "MIG - gaz obojętny." },
    { p: "Metoda spawania elektrodą wolframową nietopliwą w osłonie argonu to", o: ["TIG", "MAG", "MMA", "gazowe"], k: 0, w: "Stosowana do stali nierdzewnych i aluminium." },
    { p: "Lutowanie twarde odbywa się w temperaturze", o: ["powyżej 450°C", "poniżej 200°C", "dokładnie 100°C", "w temperaturze pokojowej"], k: 0, w: "Lutowanie miękkie - do 450°C." },
    { p: "Zabieg cieplny polegający na nagrzaniu stali i szybkim schłodzeniu w celu zwiększenia twardości to", o: ["hartowanie", "wyżarzanie", "odpuszczanie", "normalizowanie"], k: 0, w: "Po hartowaniu stal jest twarda, ale krucha." },
    { p: "Zabieg wykonywany po hartowaniu, zmniejszający kruchość, to", o: ["odpuszczanie", "nawęglanie", "wyżarzanie zmiękczające", "azotowanie"], k: 0, w: "Hartowanie + odpuszczanie = ulepszanie cieplne." },
    { p: "Oznaczenie stali S235JR informuje, że minimalna granica plastyczności wynosi", o: ["235 MPa", "235 HB", "2,35% węgla", "235°C"], k: 0, w: "S - stal konstrukcyjna." },
    { p: "Stal C45 zawiera około", o: ["0,45% węgla", "45% węgla", "4,5% chromu", "45% żelaza"], k: 0, w: "Stal węglowa do ulepszania cieplnego." },
    { p: "Podtrzymkę szlifierki stołowej ustawia się od ściernicy w odległości około", o: ["2-3 mm", "2-3 cm", "10 mm", "dowolnej"], k: 0, w: "Większa szczelina grozi wciągnięciem przedmiotu." },
    { p: "Narzędzie do wyznaczania linii równoległych na określonej wysokości od płyty traserskiej to", o: ["znacznik", "punktak", "środkownik", "kątomierz"], k: 0, w: "Często z noniuszem (znacznik wysokościowy)." },
    { p: "Nit zrywalny montowany jednostronnie to nit", o: ["POP", "pełny z łbem kulistym", "rurkowy zakuwany", "drążony"], k: 0, w: "Zakłada się go nitownicą ręczną." }
  ],
  praktyka: {
    tytul: "Wykonanie płytki z otworami gwintowanymi",
    model: "w", czas: 180,
    opis: `
<p>Z płaskownika S235JR 50 × 10 mm wykonaj płytkę wg rysunku: długość 80 ±0,2 mm, ścięcie narożnika 10×45°, dwa otwory gwintowane M8 w rozstawie 50 ±0,1 mm na osi płytki, jeden otwór Ø10 H9 rozwiercany, wszystkie krawędzie stępione.</p>
<ol><li>Zaplanuj kolejność operacji i dobierz narzędzia (wiertła pod gwint i pod rozwiercanie).</li><li>Wytrasuj zarys i środki otworów.</li><li>Wykonaj cięcie, piłowanie na wymiar, wiercenie, gwintowanie i rozwiercanie.</li><li>Zmierz wymiary i sprawdź gwinty sprawdzianem, wypełnij kartę kontroli.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Planowanie", pozycje: ["Kolejność: trasowanie → cięcie → piłowanie → wiercenie → gwintowanie / rozwiercanie → stępienie krawędzi", "Wiertło pod M8: Ø6,8; pod rozwiercanie Ø10 H9: Ø9,8"] },
      { grupa: "Rezultat 2: Wyrób", pozycje: ["Długość 80 ±0,2 mm", "Ścięcie 10×45° wykonane", "Rozstaw otworów 50 ±0,1 mm", "Gwinty M8 przechodzą sprawdzian", "Otwór Ø10 H9 - sprawdzian tłoczkowy strona przechodnia wchodzi, nieprzechodnia nie", "Krawędzie stępione, powierzchnie bez głębokich rys"] },
      { grupa: "Rezultat 3: Kontrola", pozycje: ["Karta kontroli z wynikami pomiarów i oceną zgodności"] },
      { grupa: "Przebieg", pozycje: ["Przedmiot mocowany w imadle przy wierceniu, okulary ochronne", "Gwintownik prowadzony prostopadle, z cofaniem i smarowaniem", "Porządek, wióry usuwane szczotką"] }
    ],
    rozwiazanie: `
<div class="tip">Przed wierceniem wypunktuj środki i nawierć je nawiertakiem - wiertło nie „ucieknie”, a rozstaw otworów zmieści się w tolerancji ±0,1 mm.</div>`
  }
};

window.KURSY["MEC.09"] = {
  podstawowy: [
    {
      tytul: "Proces technologiczny i dokumentacja",
      tresc: `
<ul>
<li><b>Proces produkcyjny</b> obejmuje wszystkie działania od surowca do wyrobu; <b>proces technologiczny</b> - działania zmieniające kształt, wymiary, właściwości lub łączące części.</li>
<li>Struktura: <b>operacja</b> (na jednym stanowisku, przy jednym przedmiocie, bez przerw na inne prace) → <b>zabieg</b> (jedno narzędzie, jedna powierzchnia, stałe parametry) → przejście.</li>
<li>Dokumentacja: <b>karta technologiczna</b> (wykaz operacji), <b>karta instrukcyjna</b> (szczegóły operacji: szkic, zabiegi, narzędzia, parametry), karta kontroli, rysunki.</li>
<li>Rodzaje produkcji: <b>jednostkowa</b> (uniwersalne maszyny, wysoko wykwalifikowani pracownicy), <b>seryjna</b> (mało-, średnio-, wielkoseryjna), <b>masowa</b> (specjalizowane linie, automatyzacja).</li>
<li>Systemy CAD (projektowanie), CAM (programowanie obrabiarek), CAPP (planowanie procesów), ERP/MRP (planowanie zasobów i materiałów).</li>
</ul>`
    },
    {
      tytul: "Normowanie czasu i planowanie produkcji",
      tresc: `
<pre>czas jednostkowy:      tj = tg + tp + tu
   tg - główny (maszynowy), tp - pomocniczy, tu - uzupełniający
czas operacji dla partii: T = tpz + n × tj
   tpz - przygotowawczo-zakończeniowy (raz na partię), n - liczba sztuk
czas na sztukę w partii: tpz ÷ n + tj

Przykład: tpz = 30 min, tj = 4 min, n = 60 szt.
T = 30 + 60 × 4 = 270 min = 4,5 h</pre>
<ul>
<li><b>Takt produkcji</b> = dostępny czas pracy ÷ wymagana liczba wyrobów (np. 480 min ÷ 240 szt. = 2 min/szt.).</li>
<li>Zdolność produkcyjna stanowiska = czas dostępny ÷ czas jednostkowy.</li>
<li>Harmonogram (wykres Gantta), planowanie zapotrzebowania materiałowego (<b>MRP</b>), wąskie gardło - stanowisko ograniczające wydajność całej linii.</li>
</ul>`
    },
    {
      tytul: "Jakość i doskonalenie produkcji",
      tresc: `
<ul>
<li><b>Kontrola jakości</b>: odbiorcza (wyrywkowa - plan próbkowania, lub 100%), międzyoperacyjna, końcowa. Wskaźnik braków, <b>PPM</b> (wadliwe części na milion).</li>
<li><b>SPC</b> - statystyczne sterowanie procesem, karty kontrolne (linie: centralna, górna i dolna granica kontrolna); wskaźnik zdolności procesu <b>Cp, Cpk</b> (≥ 1,33 - proces zdolny).</li>
<li>Narzędzia jakości: <b>diagram Ishikawy</b> (przyczyna-skutek, 5M: człowiek, maszyna, metoda, materiał, pomiar), <b>diagram Pareto</b> (80/20), 5 × Dlaczego, FMEA (analiza przyczyn i skutków wad, liczba priorytetowa RPN = znaczenie × występowanie × wykrywalność).</li>
<li><b>Lean manufacturing</b>: 5S, kaizen (ciągłe doskonalenie), <b>SMED</b> (skrócenie czasu przezbrojeń), kanban, poka-yoke (zabezpieczenie przed błędem), TPM (utrzymanie ruchu), eliminacja marnotrawstwa (muda).</li>
<li>Normy: ISO 9001 (systemy zarządzania jakością), IATF 16949 (motoryzacja), ISO 14001 (środowisko), ISO 45001 (BHP).</li>
</ul>`
    },
    {
      tytul: "Koszty wytwarzania",
      tresc: `
<ul><li>Koszty <b>bezpośrednie</b> (materiał, robocizna bezpośrednia) i <b>pośrednie</b> (wydziałowe, ogólnozakładowe - rozlicza się je narzutami).</li>
<li>Kalkulacja kosztu jednostkowego: materiał + robocizna + narzut kosztów wydziałowych (np. % robocizny) + narzut ogólnozakładowy.</li>
<li>Koszt maszynogodziny, amortyzacja maszyn, koszty przezbrojeń maleją na sztukę wraz ze wzrostem wielkości partii.</li></ul>
<pre>materiał 24 zł, robocizna 10 zł, koszty wydziałowe 150% robocizny
koszt wytworzenia = 24 + 10 + 15 = 49 zł/szt.</pre>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Nadzór nad zespołem i stanowiskiem",
      tresc: `
<ul><li>Instruktaż stanowiskowy, przydział zadań, kontrola przestrzegania instrukcji i BHP, ocena ryzyka na stanowiskach.</li>
<li>Wskaźniki: <b>OEE</b> = dostępność × wydajność × jakość (np. 0,9 × 0,95 × 0,98 ≈ 84%), wydajność pracy, absencja, liczba wypadków.</li>
<li>Komunikacja: odprawy zmianowe, tablice wizualizacji wyników, zgłaszanie usprawnień.</li></ul>`
    }
  ],
  pytania: [
    { p: "Część procesu technologicznego wykonywana na jednym stanowisku, przy jednym przedmiocie, bez przerw na inne prace, to", o: ["operacja", "zabieg", "przejście", "czynność pomocnicza"], k: 0, w: "Operacja dzieli się na zabiegi." },
    { p: "Dokument zawierający wykaz kolejnych operacji wytwarzania części to", o: ["karta technologiczna", "karta instrukcyjna", "rysunek złożeniowy", "DTR"], k: 0, w: "Szczegóły operacji opisuje karta instrukcyjna." },
    { p: "Produkcja na liniach specjalizowanych, w ogromnych ilościach, to produkcja", o: ["masowa", "jednostkowa", "małoseryjna", "prototypowa"], k: 0, w: "Wysoki stopień automatyzacji." },
    { p: "Czas przygotowawczo-zakończeniowy tpz występuje", o: ["raz na partię wyrobów", "przy każdej sztuce", "tylko w produkcji masowej", "tylko przy przerwach"], k: 0, w: "Np. ustawienie maszyny, pobranie dokumentacji." },
    { p: "tpz = 40 min, tj = 5 min, partia 80 szt. Czas operacji dla partii wynosi", o: ["440 min", "400 min", "125 min", "3 200 min"], k: 0, w: "40 + 80 × 5 = 440 min." },
    { p: "Dostępny czas zmiany 450 min, wymagana produkcja 225 szt. Takt produkcji wynosi", o: ["2 min/szt.", "0,5 min/szt.", "225 min", "4,5 min/szt."], k: 0, w: "450 ÷ 225 = 2." },
    { p: "Stanowisko ograniczające wydajność całego procesu to", o: ["wąskie gardło", "takt", "bufor", "kanban"], k: 0, w: "Usprawnienie wąskiego gardła zwiększa wydajność linii." },
    { p: "System planowania zapotrzebowania materiałowego to", o: ["MRP", "CAD", "SPC", "TPM"], k: 0, w: "Material Requirements Planning." },
    { p: "Diagram przyczynowo-skutkowy w kształcie ości ryby to diagram", o: ["Ishikawy", "Pareto", "Gantta", "Venna"], k: 0, w: "Analizuje przyczyny w grupach 5M." },
    { p: "Zasada, że ok. 20% przyczyn powoduje ok. 80% skutków, jest podstawą", o: ["analizy Pareto", "metody SMED", "5S", "FMEA"], k: 0, w: "Pozwala skupić się na najważniejszych problemach." },
    { p: "Liczbę priorytetową ryzyka w FMEA (RPN) oblicza się jako", o: ["znaczenie × występowanie × wykrywalność", "koszt × czas", "liczba wad ÷ liczba sztuk", "Cp × Cpk"], k: 0, w: "Każdy czynnik oceniany jest zwykle w skali 1-10." },
    { p: "Metoda skracania czasu przezbrojenia maszyn to", o: ["SMED", "kanban", "poka-yoke", "kaizen jako jedyna"], k: 0, w: "Single Minute Exchange of Die." },
    { p: "Rozwiązanie konstrukcyjne uniemożliwiające popełnienie błędu (np. asymetryczny kształt części) to", o: ["poka-yoke", "5S", "SPC", "takt"], k: 0, w: "Z japońskiego: unikanie pomyłek." },
    { p: "Wskaźnik zdolności procesu Cpk uznaje się zwykle za wystarczający, gdy wynosi co najmniej", o: ["1,33", "0,5", "0,1", "10"], k: 0, w: "Wymagania mogą być wyższe w motoryzacji." },
    { p: "Liczba wadliwych części na milion wyprodukowanych oznaczana jest skrótem", o: ["PPM", "OEE", "MTBF", "KPI"], k: 0, w: "Parts Per Million." },
    { p: "Norma dotycząca systemów zarządzania jakością to", o: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001"], k: 0, w: "14001 - środowisko, 45001 - BHP." },
    { p: "OEE przy dostępności 90%, wydajności 90% i jakości 100% wynosi", o: ["81%", "90%", "280%", "100%"], k: 0, w: "0,9 × 0,9 × 1,0." },
    { p: "Materiał 30 zł, robocizna 20 zł, koszty wydziałowe 100% robocizny. Koszt wytworzenia sztuki wynosi", o: ["70 zł", "50 zł", "100 zł", "60 zł"], k: 0, w: "30 + 20 + 20 = 70 zł." },
    { p: "Kosztem bezpośrednim wytwarzania jest", o: ["materiał zużyty na wyrób", "oświetlenie hali", "pensja dyrektora", "ochrona zakładu"], k: 0, w: "Można go przypisać konkretnemu wyrobowi." },
    { p: "Oprogramowanie do tworzenia programów obróbki dla obrabiarek CNC na podstawie modelu to", o: ["CAM", "CAD", "ERP", "CRM"], k: 0, w: "CAD - projektowanie modelu." },
    { p: "Narzędzie planowania przedstawiające zadania na osi czasu w postaci pasków to", o: ["wykres Gantta", "diagram Pareto", "karta kontrolna", "histogram"], k: 0, w: "Pokazuje kolejność i czas trwania zadań." }
  ],
  praktyka: {
    tytul: "Proces technologiczny, norma czasu i plan produkcji tulei",
    model: "d", czas: 120,
    opis: `
<p>Zakład ma wykonać partię 120 tulei ze stali C45 (Ø50/Ø30 × 60 mm). Dane: toczenie CNC - tpz 45 min, tg 3,2 min, tp 0,6 min, tu 0,2 min; wiercenie i rozwiercanie otworu poprzecznego - tpz 20 min, tj 1,5 min; kontrola 0,5 min/szt. Zmiana 8 h, 450 min czasu efektywnego.</p>
<ol><li>Opracuj kartę technologiczną (operacje, stanowiska, narzędzia, przyrządy pomiarowe).</li>
<li>Oblicz czas jednostkowy toczenia i czas wykonania partii dla każdej operacji.</li>
<li>Wskaż wąskie gardło i oblicz, ile zmian potrzeba na wykonanie partii na tym stanowisku.</li>
<li>Zaproponuj dwa działania (np. SMED, kontrola SPC) poprawiające wydajność lub jakość.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Karta technologiczna", pozycje: ["Operacje w logicznej kolejności z numeracją (np. 10, 20, 30)", "Stanowiska, narzędzia i przyrządy pomiarowe dobrane do operacji"] },
      { grupa: "Rezultat 2: Obliczenia", pozycje: ["tj toczenia = 3,2 + 0,6 + 0,2 = 4,0 min", "Toczenie partii: 45 + 120 × 4 = 525 min", "Wiercenie partii: 20 + 120 × 1,5 = 200 min", "Kontrola: 120 × 0,5 = 60 min"] },
      { grupa: "Rezultat 3: Planowanie", pozycje: ["Wąskie gardło: toczenie CNC", "Liczba zmian: 525 ÷ 450 ≈ 1,17 → 2 zmiany"] },
      { grupa: "Rezultat 4: Usprawnienia", pozycje: ["Dwa konkretne działania z uzasadnieniem (np. skrócenie tpz metodą SMED, kontrola SPC średnicy Ø30)"] }
    ],
    rozwiazanie: `
<pre>tj toczenia = 4,0 min → partia 525 min (wąskie gardło)
wiercenie 200 min, kontrola 60 min
525 ÷ 450 = 1,17 → 2 zmiany na tokarce (lub praca na dwóch maszynach)</pre>`
  }
};
