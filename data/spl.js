window.KURSY = window.KURSY || {};

window.KURSY["SPL.01"] = {
  podstawowy: [
    {
      tytul: "Magazyn — rodzaje, strefy, wyposażenie",
      tresc: `
<h4>Rodzaje magazynów</h4>
<ul>
<li>wg konstrukcji: <b>otwarte</b> (place składowe — np. kruszywa, drewno), <b>półotwarte</b> (wiaty — materiały odporne na temperaturę, ale nie na opady), <b>zamknięte</b> (budynki — większość towarów), <b>specjalne</b> (silosy, zbiorniki, chłodnie);</li>
<li>wg funkcji: zaopatrzeniowe, produkcyjne, dystrybucyjne; magazyny celne;</li>
<li>wg wysokości: niskiego składowania (do ok. 7 m), wysokiego składowania (powyżej).</li>
</ul>
<h4>Strefy magazynu</h4>
<p><b>przyjęć</b> (kontrola ilościowa i jakościowa) → <b>składowania</b> → <b>kompletacji</b> (przygotowanie zamówień) → <b>wydań</b> (ekspedycja). Układy technologiczne: <b>przelotowy</b> (wejście i wyjście po przeciwnych stronach), <b>workowy</b> (rampa po jednej stronie), <b>kątowy</b>.</p>
<h4>Sposoby składowania</h4>
<ul><li><b>blokowe</b> — jednostki ustawione jedna na drugiej bez regałów (dobre wykorzystanie powierzchni, trudny dostęp);</li><li><b>rzędowe</b> — w rzędach z przejściami;</li><li><b>regałowe</b> — regały ramowe, półkowe, wspornikowe (dłużyce), przepływowe (FIFO), przejezdne (drive-in), wjezdne, przesuwne.</li></ul>
<h4>Urządzenia</h4>
<p>Wózki: paletowy ręczny, wózek widłowy czołowy, wysokiego składowania (reach truck), kompletacyjny; układnice, przenośniki taśmowe i rolkowe, suwnice. Obsługa wózków jezdniowych z napędem wymaga uprawnień UDT.</p>`
    },
    {
      tytul: "Jednostki ładunkowe, opakowania i oznakowanie",
      tresc: `
<h4>Paletowa jednostka ładunkowa</h4>
<ul>
<li>Paleta <b>EUR (EPAL)</b>: <b>1200 × 800 × 144 mm</b>, 78 gwoździ, 9 klocków; paleta przemysłowa — 1200 × 1000 mm.</li>
<li>Zabezpieczenie ładunku: folia stretch, folia termokurczliwa, taśmy, narożniki, siatki.</li>
<li>Ładunek nie powinien wystawać poza obrys palety.</li>
</ul>
<h4>Znaki manipulacyjne (ISO 780)</h4>
<div class="tw"><table><tr><th>Znak</th><th>Znaczenie</th></tr>
<tr><td>dwie strzałki w górę</td><td>tą stroną do góry</td></tr><tr><td>kieliszek</td><td>ostrożnie, kruche</td></tr><tr><td>parasol</td><td>chronić przed wilgocią</td></tr>
<tr><td>słońce</td><td>chronić przed nagrzaniem</td></tr><tr><td>przekreślony hak</td><td>nie używać haków</td></tr><tr><td>łańcuchy</td><td>tu zakładać zawiesie</td></tr>
<tr><td>krzyżyk w okręgu (+)</td><td>środek ciężkości</td></tr><tr><td>przekreślony wózek</td><td>nie używać wózka widłowego z tej strony</td></tr><tr><td>ciężarek z liczbą</td><td>ograniczenie piętrzenia (masa)</td></tr></table></div>
<h4>Kody i identyfikacja</h4>
<ul>
<li><b>EAN-13</b> — 13 cyfr: prefiks kraju (Polska: <b>590</b>), numer firmy, numer produktu, <b>cyfra kontrolna</b>.</li>
<li><b>EAN-8</b> — małe opakowania; <b>GS1-128</b> — etykieta logistyczna z identyfikatorami zastosowania (np. SSCC — numer seryjny jednostki wysyłkowej).</li>
<li><b>RFID</b> — identyfikacja falami radiowymi, bez kontaktu wzrokowego.</li>
<li>Kody 2D: QR, DataMatrix.</li>
</ul>`
    },
    {
      tytul: "Przyjmowanie, przechowywanie i wydawanie towarów",
      tresc: `
<h4>Przyjęcie</h4>
<ol><li>Kontrola dokumentów (WZ dostawcy, list przewozowy, zamówienie).</li><li>Kontrola ilościowa (sztuki, masa, objętość) i jakościowa (uszkodzenia, termin przydatności).</li><li>Rozbieżności → protokół szkody / niezgodności, reklamacja.</li><li>Wystawienie <b>PZ</b> i rozlokowanie.</li></ol>
<h4>Zasady wydawania</h4>
<ul>
<li><b>FIFO</b> — pierwsze przyjęte, pierwsze wydane;</li>
<li><b>FEFO</b> — pierwsze traci ważność, pierwsze wydane (żywność, leki);</li>
<li><b>LIFO</b> — ostatnie przyjęte, pierwsze wydane (np. materiały sypkie, które się nie starzeją).</li>
</ul>
<h4>Warunki przechowywania</h4>
<p>Temperatura, wilgotność względna, oświetlenie, wentylacja, ochrona przed szkodnikami. Towary nie mogą stykać się z podłogą ani ścianą. Substancje niebezpieczne — oddzielnie, z kartami charakterystyki. Mrożonki — co najmniej −18°C.</p>
<h4>Kompletacja zamówień</h4>
<p>Metody: <b>„człowiek do towaru”</b> (pick-by-paper, pick-by-scanner, pick-by-voice, pick-by-light) i <b>„towar do człowieka”</b> (systemy zautomatyzowane). Kompletacja jednostopniowa (zamówienie po zamówieniu) i dwustopniowa (zbiorcze pobranie, potem rozdział).</p>
<h4>Systemy informatyczne</h4><p><b>WMS</b> — system zarządzania magazynem; <b>ERP</b> — zintegrowany system przedsiębiorstwa; <b>EDI</b> — elektroniczna wymiana dokumentów.</p>`
    },
    {
      tytul: "Zapasy i wskaźniki magazynowe",
      tresc: `
<h4>Rodzaje zapasów</h4>
<ul><li><b>bieżący</b> — zaspokaja normalny popyt między dostawami;</li><li><b>bezpieczeństwa</b> — chroni przed nieprzewidzianym popytem lub opóźnieniem dostawy;</li><li><b>informacyjny</b> (punkt ponownego zamówienia) — po jego osiągnięciu składa się zamówienie;</li><li><b>nadmierny</b>, <b>sezonowy</b>, <b>spekulacyjny</b>.</li></ul>
<pre>punkt ponownego zamówienia = popyt dzienny × czas dostawy (dni) + zapas bezpieczeństwa
zapas średni = (zapas początkowy + zapas końcowy) ÷ 2
rotacja w dniach = zapas średni ÷ sprzedaż (lub zużycie) w okresie × liczba dni okresu
rotacja w razach = sprzedaż ÷ zapas średni
wskaźnik wykorzystania powierzchni = powierzchnia zajęta ÷ powierzchnia użytkowa × 100%</pre>
<h4>Analiza ABC i XYZ</h4>
<ul>
<li><b>ABC</b> (zasada Pareto): grupa A — ok. 20% asortymentu daje ok. 80% wartości (ścisła kontrola, blisko strefy wydań), B — średnio, C — duża liczba pozycji o małej wartości.</li>
<li><b>XYZ</b> — wg regularności popytu: X — stały, Y — wahający się, Z — nieregularny.</li>
</ul>
<h4>Ekonomiczna wielkość zamówienia (EOQ)</h4>
<pre>EOQ = √( 2 × roczny popyt × koszt złożenia zamówienia ÷ roczny koszt utrzymania jednostki )</pre>`
    },
    {
      tytul: "BHP w magazynie i gospodarka odpadami",
      tresc: `
<ul>
<li>Na regałach umieszcza się tabliczki z dopuszczalnym obciążeniem półki i całego regału. Regały kontroluje się co najmniej raz w roku.</li>
<li>Drogi transportowe szerokości dostosowanej do wózków, oznakowane żółtymi liniami; nie wolno ich zastawiać.</li>
<li>Wózkiem widłowym jedzie się z ładunkiem opuszczonym nisko i masztem odchylonym do tyłu; przy ograniczonej widoczności — tyłem.</li>
<li>Ręczne przenoszenie: limity masy jak w module BHP (mężczyźni 30 kg praca stała).</li>
<li>Ochrona ppoż.: gaśnice, oznakowane drogi ewakuacyjne.</li>
</ul>
<h4>Odpady</h4>
<p>Hierarchia postępowania: <b>zapobieganie → przygotowanie do ponownego użycia → recykling → inne odzyskiwanie (np. energii) → unieszkodliwianie</b>. Firmy wytwarzające odpady prowadzą ewidencję w systemie <b>BDO</b> (karta przekazania odpadów, karta ewidencji). Opakowania zwrotne: palety, skrzynki, kontenery.</p>
<p>Kolory pojemników segregacji: niebieski — papier, żółty — metale i tworzywa sztuczne, zielony — szkło, brązowy — bioodpady, czarny — zmieszane.</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Zadanie praktyczne SPL.01 — dokumentacja magazynowa",
      tresc: `
<p>Zadanie (model „d”, 120 minut) zwykle opisuje magazyn i serię dostaw oraz wydań. Typowe polecenia:</p>
<ul><li>sporządź dokument PZ, WZ, RW lub MM na podstawie opisu;</li><li>prowadź kartotekę magazynową i wyceń rozchód metodą FIFO;</li><li>oblicz liczbę palet, potrzebną powierzchnię lub liczbę miejsc regałowych;</li><li>dobierz środek transportu wewnętrznego i znaki manipulacyjne;</li><li>sporządź protokół szkody lub różnic przy przyjęciu.</li></ul>
<h4>Obliczenia paletowe — schemat</h4>
<pre>kartony w warstwie = (1200 ÷ długość kartonu) × (800 ÷ szerokość) — części całkowite
liczba warstw = (dopuszczalna wysokość − 144 mm) ÷ wysokość kartonu
kartony na palecie = warstwa × liczba warstw
liczba palet = zamówione kartony ÷ kartony na palecie, w górę</pre>
<p>Przykład: karton 400 × 200 × 250 mm, wysokość PJŁ maks. 1 144 mm → warstwa 3 × 4 = 12 kartonów, 1 000 ÷ 250 = 4 warstwy → 48 kartonów na palecie.</p>`
    },
    {
      tytul: "Logistyka magazynu — usprawnienia",
      tresc: `
<ul>
<li><b>Cross-docking</b> — towar przechodzi z rampy przyjęć na rampę wydań bez składowania (lub z krótkim postojem).</li>
<li><b>Just in Time</b> — dostawy dokładnie wtedy, gdy są potrzebne, minimalne zapasy.</li>
<li><b>Kanban</b> — karty sygnalizujące potrzebę uzupełnienia.</li>
<li><b>5S</b>: sortowanie, systematyka, sprzątanie, standaryzacja, samodyscyplina.</li>
<li><b>Outsourcing</b> magazynowy — usługi operatora logistycznego (3PL).</li>
<li>Lokalizacja towarów: <b>stała</b> (każdy towar ma swoje miejsce) i <b>wolna</b> (dowolne wolne miejsce, wymaga WMS).</li>
</ul>`
    }
  ],
  pytania: [
    { p: "Wymiary palety EUR (EPAL) to", o: ["1200 × 800 mm", "1200 × 1000 mm", "1000 × 800 mm", "800 × 600 mm"], k: 0, w: "Wysokość palety EUR to 144 mm." },
    { p: "Magazyn w postaci wiaty, chroniący towary przed opadami, to magazyn", o: ["półotwarty", "otwarty", "zamknięty", "specjalny"], k: 0, w: "Plac składowy — otwarty; budynek — zamknięty." },
    { p: "Układ technologiczny magazynu, w którym strefa przyjęć i strefa wydań znajdują się po przeciwnych stronach budynku, to układ", o: ["przelotowy", "workowy", "kątowy", "blokowy"], k: 0, w: "W układzie workowym rampy są po jednej stronie." },
    { p: "Zasada wydawania w pierwszej kolejności towarów o najkrótszym terminie przydatności to", o: ["FEFO", "FIFO", "LIFO", "HIFO"], k: 0, w: "First Expired, First Out — stosowana w żywności i farmacji." },
    { p: "Prefiks kodu EAN-13 przydzielony Polsce to", o: ["590", "400", "500", "880"], k: 0, w: "590 to prefiks GS1 Polska." },
    { p: "Ostatnia cyfra kodu EAN-13 to", o: ["cyfra kontrolna", "numer kraju", "numer producenta", "numer partii"], k: 0, w: "Pozwala czytnikowi sprawdzić poprawność odczytu." },
    { p: "Znak manipulacyjny przedstawiający parasol oznacza", o: ["chronić przed wilgocią", "chronić przed nagrzaniem", "tą stroną do góry", "ostrożnie, kruche"], k: 0, w: "Słońce — chronić przed nagrzaniem; kieliszek — kruche." },
    { p: "Znak manipulacyjny z przekreślonym hakiem oznacza", o: ["zakaz używania haków", "miejsce zakładania zawiesi", "środek ciężkości", "zakaz piętrzenia"], k: 0, w: "Łańcuchy oznaczają miejsce zakładania zawiesi." },
    { p: "Technologia identyfikacji towarów za pomocą fal radiowych, bez potrzeby kontaktu wzrokowego, to", o: ["RFID", "EAN-13", "QR", "EDI"], k: 0, w: "Radio Frequency Identification." },
    { p: "System informatyczny przeznaczony do zarządzania procesami w magazynie to", o: ["WMS", "CRM", "TMS", "MRP"], k: 0, w: "Warehouse Management System." },
    { p: "Regały, w których jednostki ładunkowe przemieszczają się grawitacyjnie od strony załadunku do strony rozładunku, realizując zasadę FIFO, to regały", o: ["przepływowe", "wspornikowe", "półkowe", "przesuwne"], k: 0, w: "Regały przepływowe mają rolki ustawione pod kątem." },
    { p: "Do składowania dłużyc (rur, prętów, desek) najlepiej nadają się regały", o: ["wspornikowe", "przepływowe", "półkowe", "szufladowe"], k: 0, w: "Wysięgniki regału wspornikowego utrzymują długie elementy." },
    { p: "W analizie ABC do grupy A zalicza się towary, które", o: ["stanowią niewielką część asortymentu, ale dużą część wartości", "mają największą liczbę pozycji o małej wartości", "mają nieregularny popyt", "są wyłącznie sezonowe"], k: 0, w: "Zgodnie z zasadą Pareto: ok. 20% pozycji daje ok. 80% wartości." },
    { p: "W analizie XYZ grupa Z obejmuje towary o popycie", o: ["nieregularnym", "stałym", "lekko wahającym się", "sezonowym przewidywalnym"], k: 0, w: "X — stały popyt, Y — wahania, Z — nieregularny." },
    { p: "Dzienne zużycie wynosi 40 szt., czas dostawy 5 dni, zapas bezpieczeństwa 100 szt. Punkt ponownego zamówienia wynosi", o: ["300 szt.", "200 szt.", "140 szt.", "500 szt."], k: 0, w: "40 × 5 + 100 = 300 sztuk." },
    { p: "Zapas średni wyniósł 2 000 szt., a sprzedaż kwartalna (90 dni) 9 000 szt. Wskaźnik rotacji zapasów w dniach wynosi", o: ["20 dni", "4,5 dnia", "45 dni", "90 dni"], k: 0, w: "2 000 ÷ 9 000 × 90 = 20 dni." },
    { p: "Zapas utrzymywany na wypadek nieprzewidzianego wzrostu popytu lub opóźnienia dostawy to zapas", o: ["bezpieczeństwa", "bieżący", "nadmierny", "spekulacyjny"], k: 0, w: "Chroni przed brakami towaru." },
    { p: "Metoda, w której towar przeładowuje się z rampy przyjęć bezpośrednio na rampę wydań, bez składowania, to", o: ["cross-docking", "kanban", "outsourcing", "kompletacja dwustopniowa"], k: 0, w: "Skraca czas i ogranicza zapasy w magazynie." },
    { p: "Karton ma wymiary 400 × 200 mm (podstawa). Ile kartonów zmieści się w jednej warstwie na palecie EUR przy jednakowym ułożeniu?", o: ["12", "10", "8", "16"], k: 0, w: "1200 ÷ 400 = 3, 800 ÷ 200 = 4; 3 × 4 = 12." },
    { p: "Do obsługi wózka jezdniowego z napędem silnikowym wymagane są uprawnienia wydane przez", o: ["Urząd Dozoru Technicznego", "Państwową Inspekcję Pracy", "Inspekcję Transportu Drogowego", "Sanepid"], k: 0, w: "UDT wydaje zaświadczenia kwalifikacyjne operatorów wózków." },
    { p: "Elektroniczną ewidencję odpadów w Polsce prowadzi się w systemie", o: ["BDO", "WMS", "CEIDG", "JPK"], k: 0, w: "Baza danych o produktach i opakowaniach oraz o gospodarce odpadami." },
    { p: "Najbardziej pożądanym sposobem postępowania z odpadami według hierarchii jest", o: ["zapobieganie ich powstawaniu", "recykling", "odzysk energii", "składowanie"], k: 0, w: "Unieszkodliwianie (np. składowanie) to ostateczność." },
    { p: "Przy przyjęciu dostawy stwierdzono uszkodzenie kartonów. Należy sporządzić", o: ["protokół szkody", "dokument RW", "fakturę korygującą", "dokument MM"], k: 0, w: "Protokół jest podstawą reklamacji u dostawcy lub przewoźnika." },
    { p: "Kompletacja zamówień, w której pracownik otrzymuje polecenia głosowe przez słuchawki, to", o: ["pick-by-voice", "pick-by-light", "pick-by-paper", "put-to-light"], k: 0, w: "Pick-by-light wskazuje lokalizacje światełkami." }
  ]
};

window.KURSY["SPL.04"] = {
  podstawowy: [
    {
      tytul: "Gałęzie transportu i środki transportu",
      tresc: `
<div class="tw"><table><tr><th>Gałąź</th><th>Zalety</th><th>Wady</th></tr>
<tr><td>drogowy</td><td>elastyczność, przewóz „od drzwi do drzwi”</td><td>wysoki koszt na długich trasach, wypadkowość, ograniczenia masy</td></tr>
<tr><td>kolejowy</td><td>masowe ładunki, niski koszt na długich odcinkach, ekologiczny</td><td>mała elastyczność, przeładunki</td></tr>
<tr><td>morski</td><td>największe ładunki, najniższy koszt jednostkowy</td><td>wolny, zależny od portów i pogody</td></tr>
<tr><td>lotniczy</td><td>najszybszy</td><td>najdroższy, ograniczona masa</td></tr>
<tr><td>żegluga śródlądowa</td><td>tani, ekologiczny</td><td>zależny od stanu rzek</td></tr>
<tr><td>przesyłowy (rurociągi)</td><td>ciągły przesył cieczy i gazów</td><td>tylko określone ładunki</td></tr></table></div>
<h4>Pojazdy drogowe</h4>
<ul>
<li>Standardowa naczepa: długość ładowni <b>13,6 m</b>, mieści <b>33 palety EUR</b>; zabudowy: plandeka (firana), chłodnia, izoterma, cysterna, wywrotka, kontenerowa.</li>
<li>Typowa maksymalna masa całkowita zestawu ciągnik + naczepa: <b>40 t</b> (w transporcie kombinowanym z kontenerem 40 stóp — 44 t).</li>
<li>Pojazdy do 3,5 t DMC — kategoria prawa jazdy B.</li>
</ul>
<h4>Kontenery</h4>
<p>Kontener 20-stopowy = <b>1 TEU</b> (jednostka miary ładowności statków), 40-stopowy = 2 TEU (FEU). Typy: dry (uniwersalny), reefer (chłodniczy), open top, flat rack, tank.</p>
<h4>Transport intermodalny</h4><p>Jedna jednostka ładunkowa (kontener, naczepa, nadwozie wymienne) przewożona kilkoma gałęziami transportu bez przeładunku samego towaru. Odmiany: system „Ro-La” (ciężarówka na wagonie), Ro-Ro (pojazdy wjeżdżają na statek), Lo-Lo (ładunek podnoszony dźwigiem).</p>`
    },
    {
      tytul: "Dokumenty i konwencje przewozowe",
      tresc: `
<div class="tw"><table><tr><th>Gałąź</th><th>Konwencja / przepisy</th><th>Dokument przewozowy</th></tr>
<tr><td>drogowy międzynarodowy</td><td><b>CMR</b></td><td>list przewozowy CMR</td></tr>
<tr><td>kolejowy międzynarodowy</td><td>COTIF / <b>CIM</b></td><td>list przewozowy CIM</td></tr>
<tr><td>lotniczy</td><td>Konwencja montrealska</td><td>lotniczy list przewozowy <b>AWB</b></td></tr>
<tr><td>morski</td><td>Reguły haskie / haga-visby</td><td><b>konosament (B/L)</b> — dokument własności towaru</td></tr></table></div>
<p>List przewozowy CMR wystawia się zwykle w 3 oryginałach: dla nadawcy, odbiorcy (jedzie z towarem) i przewoźnika.</p>
<h4>Ładunki szczególne</h4>
<ul>
<li><b>ADR</b> — przewóz drogowy towarów niebezpiecznych; <b>RID</b> — kolejowy; <b>IMDG</b> — morski; <b>IATA DGR</b> — lotniczy.</li>
<li>Pojazd ADR oznacza się <b>pomarańczowymi tablicami</b>: górna liczba — numer rozpoznawczy zagrożenia, dolna — numer UN materiału (np. 33/1203 — benzyna).</li>
<li>Towary niebezpieczne dzieli się na <b>9 klas</b> (1 — materiały wybuchowe, 2 — gazy, 3 — ciecze zapalne, … 9 — różne).</li>
<li><b>ATP</b> — przewóz szybko psującej się żywności (pojazdy izotermiczne, chłodnie).</li>
<li><b>Karnet TIR</b> — uproszczona procedura tranzytu celnego.</li>
<li>Ładunki ponadgabarytowe wymagają zezwolenia i często pilotażu.</li>
</ul>`
    },
    {
      tytul: "Incoterms 2020",
      tresc: `
<p>Reguły <b>Incoterms 2020</b> (Międzynarodowa Izba Handlowa) określają, kto organizuje i opłaca transport, ubezpieczenie i odprawy oraz gdzie ryzyko przechodzi ze sprzedającego na kupującego.</p>
<div class="tw"><table><tr><th>Reguła</th><th>Znaczenie</th></tr>
<tr><td><b>EXW</b></td><td>Ex Works — z zakładu; minimum obowiązków sprzedającego</td></tr>
<tr><td><b>FCA</b></td><td>Free Carrier — dostarczone do przewoźnika</td></tr>
<tr><td><b>CPT</b></td><td>Carriage Paid To — przewóz opłacony do…</td></tr>
<tr><td><b>CIP</b></td><td>Carriage and Insurance Paid To — przewóz i ubezpieczenie opłacone do…</td></tr>
<tr><td><b>DAP</b></td><td>Delivered at Place — dostarczone do miejsca</td></tr>
<tr><td><b>DPU</b></td><td>Delivered at Place Unloaded — dostarczone do miejsca, rozładowane</td></tr>
<tr><td><b>DDP</b></td><td>Delivered Duty Paid — dostarczone, cło opłacone; maksimum obowiązków sprzedającego</td></tr>
<tr><td colspan="2"><i>Tylko transport morski i śródlądowy:</i></td></tr>
<tr><td><b>FAS</b></td><td>Free Alongside Ship — dostarczone wzdłuż burty statku</td></tr>
<tr><td><b>FOB</b></td><td>Free on Board — dostarczone na statek</td></tr>
<tr><td><b>CFR</b></td><td>Cost and Freight — koszt i fracht</td></tr>
<tr><td><b>CIF</b></td><td>Cost, Insurance and Freight — koszt, ubezpieczenie i fracht</td></tr></table></div>
<div class="tip">Grupa C: sprzedający płaci za transport, ale ryzyko przechodzi na kupującego już przy przekazaniu pierwszemu przewoźnikowi (lub na statek).</div>`
    },
    {
      tytul: "Czas pracy kierowcy",
      tresc: `
<p>Rozporządzenie (WE) nr 561/2006 dla pojazdów powyżej 3,5 t:</p>
<div class="tw"><table><tr><th>Norma</th><th>Wartość</th></tr>
<tr><td>dzienny czas jazdy</td><td>9 h (dwa razy w tygodniu można 10 h)</td></tr>
<tr><td>tygodniowy czas jazdy</td><td>maks. 56 h</td></tr>
<tr><td>czas jazdy w dwóch kolejnych tygodniach</td><td>maks. 90 h</td></tr>
<tr><td>przerwa</td><td>45 minut po 4,5 h jazdy (można podzielić: najpierw 15, potem 30 minut)</td></tr>
<tr><td>odpoczynek dobowy</td><td>regularny 11 h (lub 3 + 9 h); skrócony 9 h — maks. 3 razy między odpoczynkami tygodniowymi</td></tr>
<tr><td>odpoczynek tygodniowy</td><td>regularny 45 h; skrócony co najmniej 24 h (z rekompensatą)</td></tr></table></div>
<p>Czas pracy kierowcy rejestruje <b>tachograf</b> (cyfrowy — karta kierowcy; inteligentny — z lokalizacją GNSS). Kontrolę prowadzi m.in. <b>Inspekcja Transportu Drogowego (ITD)</b>.</p>
<pre>Przykład: trasa 720 km, średnia prędkość 70 km/h
czas jazdy = 720 ÷ 70 ≈ 10,3 h → przekracza 10 h, potrzebne dwa dni
lub załoga podwójna</pre>`
    },
    {
      tytul: "Planowanie i koszty transportu",
      tresc: `
<h4>Wskaźniki</h4>
<pre>wykorzystanie ładowności = masa ładunku ÷ ładowność pojazdu × 100%
wykorzystanie przestrzeni = liczba miejsc paletowych zajętych ÷ dostępnych × 100%
wskaźnik współczynnika przebiegu ładownego = km z ładunkiem ÷ km ogółem
koszt przewozu = stawka za km × liczba km (+ opłaty drogowe, promy)</pre>
<h4>Koszty</h4>
<ul><li><b>stałe</b>: amortyzacja pojazdów, ubezpieczenia OC/AC, wynagrodzenia stałe, leasing;</li><li><b>zmienne</b>: paliwo, opony, opłaty drogowe (e-TOLL w Polsce), diety kierowców, naprawy.</li></ul>
<h4>Spedycja</h4>
<p><b>Spedytor</b> organizuje przewóz w imieniu klienta (zlecenie spedycyjne), nie musi mieć własnych pojazdów. <b>Przewoźnik</b> wykonuje przewóz. Ubezpieczenie OCP — odpowiedzialność cywilna przewoźnika; OCS — spedytora. Odpowiedzialność przewoźnika w CMR ograniczona jest do <b>8,33 SDR</b> za kilogram masy brutto brakującego lub uszkodzonego towaru.</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Zadanie praktyczne SPL.04 — zlecenie transportowe",
      tresc: `
<p>W zadaniu (model „d”) dostajesz opis zlecenia klienta. Zwykle trzeba:</p>
<ol><li>dobrać środek transportu (ładowność, liczba palet, rodzaj zabudowy) i obliczyć wskaźnik wykorzystania;</li><li>zaplanować trasę z czasem jazdy, przerwami i odpoczynkami kierowcy;</li><li>obliczyć koszt i cenę usługi (marża, VAT);</li><li>wypełnić list przewozowy CMR lub zlecenie transportowe;</li><li>wskazać obowiązki stron wg reguły Incoterms.</li></ol>
<h4>Najważniejsze pola CMR</h4>
<p>1 — nadawca, 2 — odbiorca, 3 — miejsce przeznaczenia, 4 — miejsce i data załadowania, 5 — załączone dokumenty, 6–12 — znaki, liczba sztuk, sposób opakowania, rodzaj towaru, masa brutto, objętość, 16 — przewoźnik, 23 — podpis przewoźnika, 24 — potwierdzenie odbioru.</p>
<div class="tip">Rozpisz harmonogram jazdy w tabeli: godzina wyjazdu, odcinki jazdy po maks. 4,5 h, przerwy 45 min, odpoczynek dobowy — łatwo wtedy sprawdzić normy.</div>`
    },
    {
      tytul: "Logistyka dystrybucji",
      tresc: `
<ul>
<li>Kanały dystrybucji: <b>bezpośredni</b> (producent → klient), <b>pośredni krótki</b> (przez detalistę), <b>długi</b> (hurt → detal).</li>
<li>Dystrybucja <b>intensywna</b> (wszędzie, np. napoje), <b>selektywna</b> (wybrani pośrednicy), <b>wyłączna</b> (jeden dystrybutor na obszarze).</li>
<li>Operatorzy logistyczni: <b>2PL</b> (przewóz/magazyn), <b>3PL</b> (kompleksowe usługi logistyczne), <b>4PL</b> (integrator zarządzający całym łańcuchem).</li>
<li>Systemy: <b>TMS</b> (zarządzanie transportem), GPS/telematyka, giełdy transportowe.</li>
<li>Problem komiwojażera i trasowanie — minimalizacja drogi przy obsłudze wielu odbiorców.</li>
</ul>`
    }
  ],
  pytania: [
    { p: "Dokument przewozowy stosowany w międzynarodowym drogowym przewozie towarów to", o: ["list przewozowy CMR", "konosament", "AWB", "list przewozowy CIM"], k: 0, w: "CMR — drogowy, CIM — kolejowy, AWB — lotniczy, konosament — morski." },
    { p: "Dokument w transporcie morskim, który jest jednocześnie dokumentem własności towaru, to", o: ["konosament", "list CMR", "AWB", "karnet TIR"], k: 0, w: "Konosament (Bill of Lading) można przenieść na inną osobę." },
    { p: "Umowa europejska dotycząca międzynarodowego przewozu drogowego towarów niebezpiecznych to", o: ["ADR", "ATP", "AETR", "RID"], k: 0, w: "RID dotyczy kolei, ATP — żywności szybko psującej się." },
    { p: "Umowa ATP dotyczy przewozu", o: ["szybko psujących się artykułów żywnościowych", "towarów niebezpiecznych", "zwierząt", "ładunków ponadgabarytowych"], k: 0, w: "Określa wymagania dla pojazdów izotermicznych i chłodni." },
    { p: "Na standardowej naczepie o długości ładowni 13,6 m mieści się palet EUR", o: ["33", "26", "38", "24"], k: 0, w: "Paleta EUR 1,2 × 0,8 m — 33 sztuki w układzie poprzecznym i wzdłużnym." },
    { p: "Kontener 20-stopowy odpowiada", o: ["1 TEU", "2 TEU", "0,5 TEU", "1 FEU"], k: 0, w: "TEU — Twenty-foot Equivalent Unit." },
    { p: "Najtańsza jednostkowo gałąź transportu dla dużych ładunków na duże odległości to transport", o: ["morski", "lotniczy", "drogowy", "kolejowy dużych prędkości"], k: 0, w: "Statki przewożą tysiące kontenerów przy niskim koszcie na tonę." },
    { p: "Reguła Incoterms 2020, w której sprzedający ma minimum obowiązków, udostępniając towar w swoim zakładzie, to", o: ["EXW", "DDP", "FCA", "CIF"], k: 0, w: "Ex Works — kupujący organizuje cały transport." },
    { p: "Reguła Incoterms, w której sprzedający ponosi wszystkie koszty i ryzyko do miejsca przeznaczenia, wraz z cłem, to", o: ["DDP", "DAP", "EXW", "FOB"], k: 0, w: "Delivered Duty Paid — maksimum obowiązków sprzedającego." },
    { p: "Reguła Incoterms przeznaczona wyłącznie dla transportu morskiego i śródlądowego to", o: ["FOB", "FCA", "CPT", "DAP"], k: 0, w: "Do tej grupy należą też FAS, CFR i CIF." },
    { p: "Reguła CIF oznacza, że sprzedający opłaca", o: ["koszt, ubezpieczenie i fracht", "tylko koszt towaru", "cło importowe", "rozładunek w porcie przeznaczenia i cło"], k: 0, w: "Cost, Insurance and Freight." },
    { p: "Maksymalny dzienny czas jazdy kierowcy (przy przedłużeniu, dwa razy w tygodniu) wynosi", o: ["10 h", "9 h", "12 h", "11 h"], k: 0, w: "Standardowo 9 h, dwa razy w tygodniu można 10 h." },
    { p: "Kierowca po 4,5 godzinach jazdy musi zrobić przerwę trwającą co najmniej", o: ["45 minut", "15 minut", "30 minut", "60 minut"], k: 0, w: "Przerwę można podzielić: 15 minut, a potem 30 minut." },
    { p: "Maksymalny czas jazdy w ciągu dwóch kolejnych tygodni wynosi", o: ["90 h", "56 h", "100 h", "112 h"], k: 0, w: "W jednym tygodniu maks. 56 h, ale w dwóch łącznie 90 h." },
    { p: "Regularny dzienny odpoczynek kierowcy trwa co najmniej", o: ["11 godzin", "9 godzin", "8 godzin", "24 godziny"], k: 0, w: "Skrócony — 9 godzin, maks. 3 razy między odpoczynkami tygodniowymi." },
    { p: "Urządzenie rejestrujące czas pracy kierowcy i prędkość pojazdu to", o: ["tachograf", "taksometr", "odometr", "immobilizer"], k: 0, w: "Tachograf cyfrowy współpracuje z kartą kierowcy." },
    { p: "Pomarańczowa tablica z liczbami 33 i 1203 na cysternie oznacza", o: ["przewóz towaru niebezpiecznego zgodnie z ADR", "ładunek ponadgabarytowy", "pojazd chłodniczy", "przewóz żywych zwierząt"], k: 0, w: "33 — numer zagrożenia (bardzo łatwo zapalna ciecz), 1203 — numer UN (benzyna)." },
    { p: "Pojazd o ładowności 24 t przewozi 18 t ładunku. Wskaźnik wykorzystania ładowności wynosi", o: ["75%", "133%", "60%", "80%"], k: 0, w: "18 ÷ 24 × 100% = 75%." },
    { p: "Transport, w którym jednostka ładunkowa przewożona jest kilkoma gałęziami transportu bez przeładunku samego towaru, to transport", o: ["intermodalny", "bezpośredni", "całopojazdowy", "drobnicowy"], k: 0, w: "Np. kontener: statek → kolej → ciężarówka." },
    { p: "Podmiot organizujący przewóz w imieniu klienta, bez obowiązku posiadania własnych pojazdów, to", o: ["spedytor", "przewoźnik", "nadawca", "odbiorca"], k: 0, w: "Spedytor zawiera umowę spedycji; przewoźnik — umowę przewozu." },
    { p: "Kosztem zmiennym w przedsiębiorstwie transportowym jest", o: ["koszt paliwa", "ubezpieczenie OC pojazdu", "rata leasingowa", "amortyzacja liniowa pojazdu"], k: 0, w: "Zużycie paliwa rośnie z liczbą przejechanych kilometrów." },
    { p: "Operator logistyczny świadczący kompleksowe usługi logistyczne (transport, magazynowanie, obsługa zamówień) to", o: ["3PL", "1PL", "2PL", "B2C"], k: 0, w: "4PL to integrator zarządzający całym łańcuchem dostaw." },
    { p: "Elektroniczny system poboru opłat za przejazd drogami w Polsce to", o: ["e-TOLL", "BDO", "e-Deklaracje", "SENT"], k: 0, w: "e-TOLL zastąpił system viaTOLL." },
    { p: "Kontener przeznaczony do przewozu towarów wymagających kontrolowanej niskiej temperatury to", o: ["reefer", "open top", "flat rack", "dry van"], k: 0, w: "Reefer ma własny agregat chłodniczy." }
  ]
};
