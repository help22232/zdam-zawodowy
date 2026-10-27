/* Podkursy: BUD.11, BUD.12, BUD.14, FRK.01, FRK.03, FRK.04, ROL.04, ROL.10, WSP */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("BUD.11", [
    {
      id: "sucha-zabudowa", tytul: "Sucha zabudowa g-k", opis: "Zaprojektujesz i wykonasz ściankę działową, sufit podwieszany i spoinowanie płyt w wymaganej klasie jakości.",
      lekcje: [
        { tytul: "Ścianka działowa krok po kroku", tresc: `<h4>Kolejność montażu</h4>
<ol>
<li>Wyznaczenie osi ścianki na podłodze (sznur traserski), przeniesienie na strop pionem lub laserem.</li>
<li>Przyklejenie <b>taśmy akustycznej</b> (uszczelniającej) na grzbiet profili UW i skrajnych CW.</li>
<li>Montaż prowadnic <b>UW</b> do podłogi i stropu kołkami rozporowymi lub szybkiego montażu co ok. <b>100 cm</b> (min. 3 punkty na profil, pierwszy ok. 5-10 cm od końca).</li>
<li>Osadzenie słupków <b>CW</b> w rozstawie <b>60 cm</b> (osiowo), profil CW krótszy od wysokości pomieszczenia o ok. 1-1,5 cm, aby ugięcie stropu nie zgniatało ścianki.</li>
<li>Przy otworach drzwiowych: profile <b>UA</b> (grubościenne, 2 mm) lub zdwojone CW, nadproże z profilu UW z zagiętymi końcami.</li>
<li>Opłytowanie jednej strony, rozprowadzenie instalacji przez przepusty w profilach, wełna mineralna, opłytowanie drugiej strony.</li>
</ol>
<h4>Zasady mocowania płyt</h4>
<ul>
<li>Płyty 1200 mm ustawia się pionowo, styki pionowe wypadają na profilu.</li>
<li>Wkręty TN (do blachy do 0,7 mm) w rozstawie co <b>25 cm</b> przy jednej warstwie; przy dwóch warstwach pierwsza warstwa co 75 cm, druga co 25 cm.</li>
<li>Odległość wkrętu od krawędzi oklejonej kartonem min. 10 mm, od krawędzi ciętej min. 15 mm.</li>
<li>Styki poziome płyt na sąsiednich arkuszach przesuwa się o min. <b>40 cm</b>; płyty po obu stronach ścianki montuje się ze styków przesuniętych o jeden rozstaw profili.</li>
<li>Od podłogi pozostawia się szczelinę ok. 10 mm (w łazience wypełnianą masą uszczelniającą).</li>
</ul>
<div class="tw"><table><tr><th>Ścianka</th><th>Profil</th><th>Grubość z 1x12,5 mm z każdej strony</th></tr>
<tr><td>CW 50</td><td>50 mm</td><td>75 mm</td></tr>
<tr><td>CW 75</td><td>75 mm</td><td>100 mm</td></tr>
<tr><td>CW 100</td><td>100 mm</td><td>125 mm</td></tr></table></div>
<div class="tip">Pod okładzinę ceramiczną lub ciężkie szafki stosuje się rozstaw profili <b>40 cm</b> albo podwójne opłytowanie; ciężkie elementy (umywalka, WC podwieszane) mocuje się do stelaży lub trawers, nie do samej płyty.</div>` },
        { tytul: "Sufity podwieszane i okładziny ścienne", tresc: `<h4>Ruszt sufitu</h4>
<p>Najczęściej wykonuje się <b>ruszt dwupoziomowy</b> z profili CD 60x27: górne profile <b>główne</b> zawieszone na wieszakach i dolne profile <b>nośne (montażowe)</b> połączone z nimi łącznikami krzyżowymi. W ruszcie jednopoziomowym profile CD łączy się w jednej płaszczyźnie łącznikami poprzecznymi.</p>
<ul>
<li>Na obwodzie przykręca się profil przyścienny <b>UD</b> 28x27 z taśmą akustyczną.</li>
<li>Rozstaw profili nośnych, do których przykręca się płyty: zwykle <b>50 cm</b> (przy płytach poprzecznych do profili), 40 cm przy dodatkowym obciążeniu.</li>
<li>Rozstaw wieszaków (noniuszowych lub ES) ok. <b>90-100 cm</b>, zależnie od ciężaru; wieszaki kotwi się do stropu kotwami metalowymi.</li>
<li>Płyty montuje się <b>poprzecznie</b> do profili nośnych, styki krótszych krawędzi przesunięte o min. jeden rozstaw profili.</li>
<li>Wkręty na suficie gęściej niż na ścianie: co ok. <b>17 cm</b>.</li>
</ul>
<h4>Suche tynki i okładziny na ruszcie</h4>
<ul>
<li><b>Suchy tynk na kleju gipsowym</b>: placki kleju co ok. 30-35 cm i pasmo na obwodzie; podłoże musi być nośne i suche, nierówności do ok. 20 mm.</li>
<li><b>Okładzina na ruszcie</b> z profili CD na wieszakach bezpośrednich: gdy ściana jest krzywa lub potrzebna jest izolacja (wełna) albo miejsce na instalacje.</li>
<li>Poddasza: płyty mocowane do profili CD na wieszakach do krokwi, z paroizolacją (folia) od strony ciepłej, pod płytą.</li>
</ul>
<h4>Dobór płyt</h4>
<div class="tw"><table><tr><th>Oznaczenie (PN-EN 520)</th><th>Zastosowanie</th></tr>
<tr><td>A</td><td>standardowe pomieszczenia suche</td></tr>
<tr><td>H2</td><td>łazienki, kuchnie (nasiąkliwość powierzchniowa ograniczona)</td></tr>
<tr><td>F (DF)</td><td>zwiększona odporność ogniowa (rdzeń zbrojony włóknem)</td></tr>
<tr><td>DFH2, I, R</td><td>łączone właściwości, utwardzona powierzchnia, zwiększona wytrzymałość</td></tr></table></div>
<div class="tip">W pomieszczeniach mokrych płyta H2 nie zastępuje hydroizolacji: w strefie natrysku zawsze wykonuje się folię w płynie z taśmami w narożach.</div>` },
        { tytul: "Spoinowanie i klasy jakości Q1-Q4", tresc: `<h4>Technologia spoinowania</h4>
<ol>
<li>Krawędzie cięte fazuje się strugiem pod kątem 45° na ok. 2/3 grubości kartonu i odpyla.</li>
<li>Pierwsza warstwa masy szpachlowej wciskana w spoinę, zatopienie <b>taśmy zbrojącej</b> (papierowej lub z włókna szklanego; przy masach bez taśmy według systemu producenta).</li>
<li>Po wyschnięciu druga warstwa szersza, wyrównanie, szpachlowanie łbów wkrętów.</li>
<li>Narożniki wypukłe: <b>kątowniki ochronne</b> (metalowe, papierowo-aluminiowe) osadzone w masie.</li>
<li>Szlifowanie siatką lub papierem (granulacja ok. 120-180), gruntowanie przed malowaniem.</li>
</ol>
<p>Temperatura podczas spoinowania nie powinna spadać poniżej <b>+10 °C</b>; płyty muszą być zaaklimatyzowane, a mokre prace (wylewki, tynki) zakończone, bo zmiany wilgotności powodują rysy.</p>
<h4>Klasy jakości powierzchni</h4>
<div class="tw"><table><tr><th>Klasa</th><th>Zakres prac</th><th>Pod co</th></tr>
<tr><td>Q1</td><td>wypełnienie spoin i przykrycie łbów wkrętów</td><td>płytki ceramiczne, okładziny</td></tr>
<tr><td>Q2</td><td>Q1 + druga warstwa, płynne przejście do płyty</td><td>farby strukturalne, tapety średnie i grube</td></tr>
<tr><td>Q3</td><td>Q2 + szersze szpachlowanie spoin i zamknięcie porów kartonu na całej powierzchni</td><td>farby matowe drobnoziarniste, tapety cienkie</td></tr>
<tr><td>Q4</td><td>Q3 + szpachlowanie całej powierzchni warstwą min. ok. 1 mm</td><td>farby z połyskiem, tapety gładkie, oświetlenie smugowe</td></tr></table></div>
<h4>Typowe wady</h4>
<ul>
<li><b>Rysy na spoinach</b>: brak taśmy, za szybkie schnięcie, ruchy konstrukcji, brak przesunięcia styków.</li>
<li><b>Wybrzuszenia nad wkrętami</b>: wkręt za płytko; zbyt głęboko wkręcony przerywa karton i traci nośność.</li>
<li><b>Widoczne spoiny po malowaniu</b>: niewłaściwa klasa jakości przy świetle bocznym, brak gruntu wyrównującego chłonność.</li>
</ul>
<div class="tip">Na egzaminie: tapety cienkie i farby z połyskiem wymagają co najmniej Q3, a pod płytki wystarczy Q1.</div>` }
      ],
      pytania: [
        Q("Jaki jest typowy rozstaw osiowy profili CW w ściance działowej z jednowarstwowym opłytowaniem?", "60 cm", "30 cm", "90 cm", "120 cm", "Rozstaw 60 cm odpowiada połowie szerokości płyty 120 cm."),
        Q("Profil CW w ściance działowej przycina się:", "o ok. 1-1,5 cm krócej niż wysokość pomieszczenia", "dokładnie na wysokość pomieszczenia", "o 5 cm dłużej i wciska na siłę", "o 10 cm krócej", "Luz kompensuje ugięcie stropu."),
        Q("Płyty g-k na suficie podwieszanym montuje się:", "poprzecznie do profili nośnych", "równolegle do profili nośnych", "dowolnie", "tylko pionowo", "Płyty mocuje się poprzecznie do profili nośnych CD."),
        Q("Klasa jakości szpachlowania wymagana pod tapety gładkie i farby z połyskiem to:", "Q4", "Q1", "Q2", "Q0", "Q4 to pełne szpachlowanie całej powierzchni."),
        Q("Pod okładzinę z płytek ceramicznych na ściance g-k wystarczy szpachlowanie w klasie:", "Q1", "Q3", "Q4", "Q5", "Q1 to wypełnienie spoin i zakrycie wkrętów."),
        Q("Profil UA w ściance działowej stosuje się do:", "wzmocnienia ościeży otworów drzwiowych", "mocowania wieszaków sufitu", "wykończenia narożników wypukłych", "obwodowego obramowania sufitu", "Profil UA ma grubszą ściankę (ok. 2 mm)."),
        Q("Profil przyścienny w suficie podwieszanym z profili CD to:", "UD", "CW", "UW", "UA", "UD 28x27 współpracuje z profilami CD 60x27."),
        Q("Przyczyną wybrzuszeń nad łbami wkrętów jest najczęściej:", "zbyt płytkie wkręcenie wkrętów", "zbyt gęsty rozstaw profili", "użycie płyt H2", "taśma akustyczna pod profilem", "Łeb wkrętu powinien być tuż pod powierzchnią kartonu.")
      ]
    },
    {
      id: "okladziny", tytul: "Okładziny ceramiczne", opis: "Przygotujesz podłoże, dobierzesz klej, fugę i płytki oraz ułożysz okładzinę zgodnie z normami.",
      lekcje: [
        { tytul: "Ocena i przygotowanie podłoża", tresc: `<h4>Co sprawdzić przed układaniem</h4>
<ul>
<li><b>Nośność</b>: brak głuchych miejsc (opukiwanie), łuszczących się powłok, pyłu; stare farby usuwa się lub szlifuje.</li>
<li><b>Równość</b>: sprawdzana łatą 2 m; odchyłka zwykle nie większa niż ok. <b>3 mm na 2 m</b> (pod duże formaty mniej). Większe nierówności wyrównuje się zaprawą lub masą samopoziomującą.</li>
<li><b>Wilgotność</b> mierzona metodą karbidową (CM): podkład cementowy zwykle do <b>2% CM</b>, anhydrytowy do <b>0,5% CM</b> (z ogrzewaniem podłogowym 0,3%).</li>
<li><b>Wiek podłoża</b>: tynk cementowo-wapienny i wylewka cementowa sezonowane ok. 28 dni (orientacyjnie 1 tydzień na 1 cm grubości jastrychu).</li>
</ul>
<h4>Gruntowanie</h4>
<p>Grunt zmniejsza i wyrównuje chłonność, wiąże pył. Na podłoża gipsowe i anhydrytowe pod kleje cementowe stosuje się grunt dedykowany (zapobiega reakcji gipsu z cementem); anhydryt dodatkowo szlifuje się z mleczka. Na podłoża niechłonne (stare płytki, lastryko) grunt sczepny z kruszywem kwarcowym.</p>
<h4>Hydroizolacja podpłytkowa</h4>
<ol>
<li>Zagruntowanie podłoża.</li>
<li>Wklejenie <b>taśm uszczelniających</b> w narożach ścian i styku ściana-posadzka, <b>mankietów</b> wokół rur i odpływów, narożników wewnętrznych i zewnętrznych.</li>
<li>Dwie warstwy <b>folii w płynie</b> lub szlamu uszczelniającego, druga prostopadle do pierwszej, łączna grubość wg producenta (zwykle ok. 1 mm po wyschnięciu).</li>
</ol>
<p>Zakres: posadzka całej łazienki, ściany w strefie natrysku do wysokości min. ok. 2 m (i ok. 20 cm poza strefę), wokół wanny i umywalki pas ok. 20 cm.</p>
<div class="tw"><table><tr><th>Podłoże</th><th>Przygotowanie</th></tr>
<tr><td>tynk cementowo-wapienny</td><td>odpylenie, grunt głęboko penetrujący</td></tr>
<tr><td>tynk gipsowy, płyta g-k</td><td>grunt pod kleje cementowe, przy wilgoci hydroizolacja</td></tr>
<tr><td>stare płytki</td><td>odtłuszczenie, sprawdzenie przyczepności, grunt sczepny</td></tr>
<tr><td>beton młody</td><td>odczekanie min. 3 miesięcy lub klej wysokoodkształcalny S1</td></tr></table></div>
<div class="tip">Typowe pytanie: jak sprawdzić wilgotność jastrychu? Metodą karbidową CM, nie „na oko” ani dotykiem.</div>` },
        { tytul: "Kleje, fugi i płytki: oznaczenia", tresc: `<h4>Kleje (PN-EN 12004)</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Znaczenie</th></tr>
<tr><td>C / D / R</td><td>cementowy / dyspersyjny / reaktywny (żywiczny)</td></tr>
<tr><td>1 / 2</td><td>normalny (przyczepność ≥ 0,5 N/mm²) / o podwyższonych parametrach (≥ 1,0 N/mm²)</td></tr>
<tr><td>F</td><td>szybkowiążący</td></tr>
<tr><td>T</td><td>o zmniejszonym spływie (płytki na ścianie nie zsuwają się)</td></tr>
<tr><td>E</td><td>o wydłużonym czasie otwartym</td></tr>
<tr><td>S1 / S2</td><td>odkształcalny / wysokoodkształcalny (ogrzewanie podłogowe, tarasy, płyty g-k, duże formaty)</td></tr></table></div>
<p>Przykład: <b>C2TE S1</b> to klej cementowy o podwyższonej przyczepności, niespływający, z wydłużonym czasem otwartym, odkształcalny, czyli dobry na balkon, ogrzewanie podłogowe i gres.</p>
<h4>Fugi (PN-EN 13888)</h4>
<ul>
<li><b>CG1</b> zwykła cementowa, <b>CG2</b> o podwyższonych parametrach; dodatkowe: <b>W</b> zmniejszona nasiąkliwość, <b>Ar</b> wysoka odporność na ścieranie.</li>
<li><b>RG</b> fuga reaktywna (epoksydowa): kuchnie przemysłowe, baseny, odporność chemiczna.</li>
</ul>
<h4>Płytki (PN-EN 14411)</h4>
<div class="tw"><table><tr><th>Grupa nasiąkliwości</th><th>E</th><th>Przykład</th></tr>
<tr><td>BIa</td><td>≤ 0,5%</td><td>gres porcelanowy, mrozoodporny</td></tr>
<tr><td>BIb</td><td>0,5-3%</td><td>gres, klinkier</td></tr>
<tr><td>BIIa / BIIb</td><td>3-6% / 6-10%</td><td>płytki podłogowe wewnętrzne</td></tr>
<tr><td>BIII</td><td>&gt; 10%</td><td>glazura ścienna, tylko wewnątrz</td></tr></table></div>
<ul>
<li><b>PEI I-V</b>: odporność szkliwa na ścieranie; I łazienki (boso), III mieszkanie, IV-V obiekty publiczne.</li>
<li><b>R9-R13</b>: antypoślizgowość; R10-R11 w strefach mokrych i na zewnątrz, R12-R13 w zakładach przemysłowych.</li>
<li>Gatunek I (pierwszy) dopuszcza najmniej wad; płytki <b>rektyfikowane</b> mają szlifowane krawędzie i pozwalają na fugę ok. 2 mm.</li>
</ul>
<div class="tip">Na taras: płytki BIa (mrozoodporne), klej C2 S1 lub S2, metoda kombinowana, fuga CG2 W.</div>` },
        { tytul: "Układanie, fugowanie i odbiór", tresc: `<h4>Metody nakładania kleju</h4>
<ul>
<li><b>Metoda zwykła (floating)</b>: klej na podłoże pacą zębatą, płytki małe i średnie na ścianach wewnątrz.</li>
<li><b>Metoda kombinowana (floating-buttering)</b>: klej na podłoże i cienka warstwa na spód płytki; obowiązkowa na zewnątrz, na posadzkach obciążonych, przy płytkach o boku powyżej ok. 30 cm i formatach wielkich.</li>
<li>Wypełnienie klejem: ściany wewnątrz min. ok. <b>65%</b>, posadzki wewnątrz min. <b>80%</b>, na zewnątrz i w strefach mokrych praktycznie <b>100%</b> (bez pustek, w których zbiera się woda).</li>
<li>Wielkość zębów pacy dobiera się do formatu: 4-6 mm mozaika i małe płytki, 8-10 mm średnie, 10-12 mm duże.</li>
</ul>
<h4>Kolejność w łazience</h4>
<ol>
<li>Wyznaczenie poziomu (laser, wąż) i podziału płytek tak, by docinki przy narożach były symetryczne i nie węższe niż pół płytki.</li>
<li>Ściany od <b>drugiego rzędu</b>, na listwie podporowej przykręconej w poziomie.</li>
<li>Posadzka ze spadkiem do odpływu (ok. 1,5-2%), od narożnika przeciwnego do drzwi.</li>
<li>Pierwszy rząd ścienny po ułożeniu posadzki, aby płytki ścienne „stały” na posadzce.</li>
</ol>
<h4>Fugowanie i dylatacje</h4>
<ul>
<li>Fugowanie po związaniu kleju: zwykle po <b>24 h</b> (klej szybkowiążący po kilku godzinach).</li>
<li>Szerokość fugi: płytki rektyfikowane min. ok. 2 mm, zwykłe ścienne 2-3 mm, posadzkowe 3-5 mm, klinkier 8-10 mm.</li>
<li>Fugę wciska się pacą gumową ukośnie do spoin, nadmiar zmywa wilgotną gąbką po zmatowieniu.</li>
<li>Naroża wewnętrzne, styk ściana-posadzka i przejścia rur wypełnia się <b>silikonem sanitarnym</b>, nie fugą cementową.</li>
<li>Dylatacje konstrukcyjne podkładu przenosi się w tym samym miejscu na okładzinę; na zewnątrz pola zwykle do ok. 9-16 m².</li>
</ul>
<h4>Odbiór</h4>
<p>Sprawdza się: przyczepność (brak głuchego dźwięku przy opukiwaniu), równość łatą 2 m, prostoliniowość spoin sznurem, spadki poziomicą, jednolitość barwy i wymiaru partii (ten sam kaliber i odcień na kartonie).</p>
<div class="tip">Pułapka egzaminacyjna: fugi cementowej nie stosuje się w narożach wewnętrznych łazienki, bo pęka; tam idzie elastyczny silikon.</div>` }
      ],
      pytania: [
        Q("Symbol C2TE oznacza klej:", "cementowy, o podwyższonej przyczepności, o zmniejszonym spływie i wydłużonym czasie otwartym", "dyspersyjny, szybkowiążący", "epoksydowy, wysokoodkształcalny", "cementowy zwykły, mrozoodporny", "C = cementowy, 2 = podwyższone parametry, T = niespływający, E = wydłużony czas otwarty."),
        Q("Płytki o nasiąkliwości E ≤ 0,5%, odpowiednie na taras, należą do grupy:", "BIa", "BIII", "BIIb", "AIII", "BIa to gres porcelanowy, mrozoodporny."),
        Q("Metodę kombinowaną nakładania kleju stosuje się przede wszystkim:", "na zewnątrz i przy płytkach dużego formatu", "przy mozaice na ścianie w suchym pomieszczeniu", "wyłącznie na płytach g-k", "tylko przy klejach dyspersyjnych", "Kombinowana daje pełne podparcie płytki bez pustek."),
        Q("Wilgotność jastrychu cementowego przed klejeniem płytek mierzy się:", "metodą karbidową (CM)", "poziomnicą", "łatą 2 m", "młotkiem przez opukiwanie", "Wynik podaje się w % CM."),
        Q("Styk ściany z posadzką w łazience wypełnia się:", "silikonem sanitarnym", "fugą cementową CG1", "klejem C1", "zaprawą cementową", "Naroża pracują, potrzebna jest masa elastyczna."),
        Q("Okładzinę ścienną w łazience zaczyna się zwykle układać:", "od drugiego rzędu, na listwie podporowej", "od rzędu przy suficie", "od pierwszego rzędu przy posadzce przed jej ułożeniem", "od środka ściany w dół", "Pierwszy rząd układa się po wykonaniu posadzki."),
        Q("Oznaczenie PEI dotyczy:", "odporności szkliwa płytek na ścieranie", "antypoślizgowości", "mrozoodporności", "odkształcalności kleju", "Klasy PEI I-V."),
        Q("Fuga oznaczona RG to fuga:", "reaktywna (epoksydowa)", "cementowa zwykła", "cementowa o zmniejszonej nasiąkliwości", "dyspersyjna gotowa", "RG = reaction resin grout.")
      ]
    },
    {
      id: "malowanie-tapety", tytul: "Malowanie i tapetowanie", opis: "Dobierzesz farbę do podłoża, wykonasz powłokę bez wad i obliczysz liczbę rolek tapety.",
      lekcje: [
        { tytul: "Podłoże i rodzaje farb", tresc: `<h4>Wymagania dla podłoża</h4>
<ul>
<li>Suche, czyste, nośne, odtłuszczone; tynki cementowo-wapienne sezonowane ok. 4 tygodnie, gipsowe do pełnego wyschnięcia (zwykle 1-2 tygodnie).</li>
<li>Rysy poszerza się i wypełnia masą, plamy z zacieków izoluje farbą izolującą, grzyb usuwa preparatem grzybobójczym.</li>
<li><b>Próba farby klejowej</b>: wilgotna gąbka ściera powłokę, więc farbę klejową trzeba zmyć przed farbą emulsyjną, bo ta się nie utrzyma.</li>
<li><b>Próba taśmy</b>: przyklejona i zerwana taśma nie może odrywać płatów starej powłoki.</li>
<li>Warunki: temperatura powietrza i podłoża zwykle od <b>+5 do +25 °C</b>, wilgotność powietrza do ok. 80%, bez przeciągów i mocnego słońca.</li>
</ul>
<h4>Dobór farby</h4>
<div class="tw"><table><tr><th>Farba</th><th>Spoiwo, cechy</th><th>Gdzie</th></tr>
<tr><td>emulsyjna akrylowa, lateksowa</td><td>dyspersja polimerów, zmywalna, paroprzepuszczalna w różnym stopniu</td><td>ściany i sufity wewnątrz, kuchnie (lateks)</td></tr>
<tr><td>silikatowa</td><td>szkło wodne potasowe, wiąże chemicznie z podłożem mineralnym</td><td>elewacje, tynki mineralne; nie na stare akryle i drewno</td></tr>
<tr><td>silikonowa</td><td>żywica silikonowa, hydrofobowa, paroprzepuszczalna</td><td>elewacje, tynki silikonowe</td></tr>
<tr><td>wapienna</td><td>wapno, alkaliczna, bakteriobójcza</td><td>piwnice, obiekty inwentarskie, zabytki</td></tr>
<tr><td>klejowa</td><td>kleje celulozowe, niezmywalna</td><td>dziś rzadko, sufity tanie</td></tr>
<tr><td>olejna, ftalowa, poliuretanowa</td><td>spoiwa rozpuszczalnikowe</td><td>drewno, metal, lamperie</td></tr></table></div>
<p>Wg PN-EN 13300 farbę ocenia się m.in. klasą <b>odporności na szorowanie na mokro</b> (klasa 1 najlepsza, 5 najsłabsza) i <b>siłą krycia</b> (klasa 1 najlepsza).</p>
<div class="tip">Kolejność w pomieszczeniu: najpierw sufit, potem ściany, na końcu stolarka i lamperie; malowanie zaczyna się od okna w głąb pomieszczenia.</div>` },
        { tytul: "Technika malowania i wady powłok", tresc: `<h4>Wykonanie</h4>
<ol>
<li>Zabezpieczenie podłóg, okien i osprzętu folią i taśmą malarską.</li>
<li>Gruntowanie (grunt akrylowy, mleczko) w celu wyrównania chłonności.</li>
<li>Malowanie narożników i krawędzi pędzlem „na mokro” przed wałkowaniem.</li>
<li>Wałkowanie pasami ok. 1 m szerokości metodą „na krzyż”, ostatnie przejście na sufitach <b>równolegle do padania światła</b> (od okna), na ścianach pionowo z góry na dół.</li>
<li>Druga warstwa po wyschnięciu pierwszej (zwykle 2-4 h dla emulsji).</li>
</ol>
<h4>Narzędzia</h4>
<ul><li>wałek z mikrofazy lub welurowy do gładkich ścian, z dłuższym włosiem (ok. 18 mm) do podłoży chropowatych;</li>
<li>agregat hydrodynamiczny (airless) przy dużych powierzchniach, zużycie farby wyższe o ok. 10-20%;</li>
<li>pędzle ławkowce do farb wapiennych, pędzle płaskie do stolarki.</li></ul>
<h4>Wady powłok i przyczyny</h4>
<div class="tw"><table><tr><th>Wada</th><th>Przyczyna</th></tr>
<tr><td>zacieki</td><td>zbyt gruba warstwa, za rzadka farba</td></tr>
<tr><td>smugi, „łączenia”</td><td>malowanie po przeschnięciu krawędzi pasa, brak gruntu, nierówna chłonność</td></tr>
<tr><td>prześwity</td><td>za mało warstw, za cienka warstwa, niska siła krycia</td></tr>
<tr><td>łuszczenie, odspojenie</td><td>brudne, pylące lub wilgotne podłoże, farba klejowa pod spodem</td></tr>
<tr><td>pęcherze</td><td>wilgoć w podłożu, malowanie w pełnym słońcu</td></tr>
<tr><td>kredowanie</td><td>rozkład spoiwa (UV), farba wewnętrzna użyta na zewnątrz</td></tr>
<tr><td>spękania („skóra krokodyla”)</td><td>twarda powłoka na miękkiej, zbyt gruba warstwa</td></tr></table></div>
<h4>Zużycie farby</h4>
<p>Wydajność podaje producent w m²/l na jedną warstwę. Przykład: ściany 42 m², sufit 16 m², 2 warstwy, wydajność 10 m²/l: (42 + 16) × 2 / 10 = <b>11,6 l</b>, czyli kupuje się np. 2 opakowania po 5 l i 1 po 2,5 l (12,5 l).</p>
<div class="tip">Zacieki usuwa się dopiero po wyschnięciu (szlifowanie) i malowanie ponownie; poprawianie mokrej powłoki wałkiem pogarsza efekt.</div>` },
        { tytul: "Tapetowanie i obliczenia", tresc: `<h4>Rodzaje tapet</h4>
<ul>
<li><b>papierowe</b> (simpleks, dupleks): tanie, wrażliwe na wilgoć;</li>
<li><b>winylowe</b> na papierze lub flizelinie: zmywalne, do kuchni i przedpokojów;</li>
<li><b>flizelinowe</b>: stabilne wymiarowo, klej nakłada się na ścianę, łatwe usuwanie „na sucho”;</li>
<li><b>z włókna szklanego</b>: do malowania, wzmacniają podłoże.</li>
</ul>
<h4>Symbole na etykiecie</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Znaczenie</th></tr>
<tr><td>jedna fala</td><td>odporna na wodę (podczas klejenia)</td></tr>
<tr><td>dwie fale</td><td>zmywalna</td></tr>
<tr><td>trzy fale</td><td>bardzo zmywalna</td></tr>
<tr><td>fala ze szczotką</td><td>odporna na szorowanie</td></tr>
<tr><td>strzałka z zerem</td><td>bez dopasowania wzoru</td></tr>
<tr><td>dwie strzałki na tym samym poziomie</td><td>dopasowanie proste</td></tr>
<tr><td>dwie strzałki przesunięte</td><td>dopasowanie przesunięte (o pół raportu)</td></tr>
<tr><td>strzałki przeciwne</td><td>klejenie odwrotne (co drugi pas obrócony)</td></tr>
<tr><td>pędzel na ścianie</td><td>klej nakładać na ścianę</td></tr></table></div>
<h4>Technologia</h4>
<ol><li>Podłoże gładkie, zagruntowane klejem rozcieńczonym; usunięcie starych tapet.</li>
<li>Wyznaczenie <b>pionu</b> pionem lub laserem przy oknie; pierwszy pas od okna, dalej w kierunku od światła (zakłady nie rzucają cienia).</li>
<li>Tapety papierowe i winylowe na papierze: klej na tapetę, złożenie i czas nasiąkania wg producenta.</li>
<li>Docisk wałkiem od środka na boki, nadmiar odcięty nożem przy suficie i listwie.</li></ol>
<h4>Obliczenie liczby rolek</h4>
<p>Rolka standardowa: <b>10,05 m x 0,53 m</b>. Pokój 4 x 5 m, wysokość 2,6 m, okno 1,5 m szerokości i drzwi 0,9 m (prosto: pomija się je lub odejmuje szerokości):</p>
<ul>
<li>obwód: 2 × (4 + 5) = 18 m, po odjęciu otworów 18 - 2,4 = 15,6 m;</li>
<li>liczba pasów: 15,6 / 0,53 = 29,4, czyli <b>30 pasów</b>;</li>
<li>długość pasa z naddatkiem 10 cm: 2,7 m; pasów z rolki: 10,05 / 2,7 = 3,7, czyli <b>3 pasy</b>;</li>
<li>rolki: 30 / 3 = <b>10 rolek</b> (zaleca się kupić z jednej partii i z zapasem).</li>
</ul>
<div class="tip">Przy wzorze z raportem do długości pasa dolicza się raport, co często zmniejsza liczbę pasów z rolki. Rolki muszą mieć ten sam numer partii (odcień).</div>` }
      ],
      pytania: [
        Q("Farbę silikatową stosuje się na:", "podłoża mineralne, np. tynki cementowo-wapienne", "stare powłoki akrylowe", "drewno", "płyty OSB", "Spoiwo silikatowe wiąże chemicznie z podłożem mineralnym."),
        Q("Jak sprawdzić, czy na ścianie jest farba klejowa?", "przetrzeć ją wilgotną gąbką, farba klejowa się zmywa", "zmierzyć wilgotność metodą CM", "przyłożyć łatę 2 m", "posypać kredą", "Farbę klejową trzeba zmyć przed malowaniem emulsją."),
        Q("Ostatnie przejście wałkiem na suficie wykonuje się:", "równolegle do kierunku padania światła z okna", "prostopadle do okna", "po okręgu", "dowolnie", "Zapobiega to widoczności śladów wałka."),
        Q("Zacieki na powłoce są najczęściej skutkiem:", "zbyt grubej warstwy lub zbyt rzadkiej farby", "malowania w temperaturze 18 °C", "gruntowania podłoża", "użycia wałka welurowego", "Nadmiar farby spływa pod własnym ciężarem."),
        Q("Ile litrów farby potrzeba na 60 m² przy dwóch warstwach i wydajności 10 m²/l?", "12 l", "6 l", "20 l", "60 l", "60 × 2 / 10 = 12 l."),
        Q("Symbol trzech fal na etykiecie tapety oznacza tapetę:", "bardzo zmywalną", "odporną na światło", "do klejenia na ścianę", "bez dopasowania wzoru", "Jedna fala: odporna na wodę, dwie: zmywalna, trzy: bardzo zmywalna."),
        Q("Pierwszy pas tapety przykleja się zazwyczaj:", "przy oknie, według wyznaczonego pionu", "w najciemniejszym narożniku", "nad drzwiami", "od środka ściany bez pionu", "Kierunek od okna ukrywa zakłady."),
        Q("Z rolki 10,05 m przy długości pasa 2,7 m otrzymuje się pełnych pasów:", "3", "4", "2", "5", "10,05 / 2,7 = 3,7, liczy się tylko pełne pasy.")
      ]
    },
    {
      id: "posadzki", tytul: "Podkłady i posadzki", opis: "Wykonasz jastrych z dylatacjami i ułożysz panele, deski oraz wykładziny zgodnie z technologią.",
      lekcje: [
        { tytul: "Jastrychy i podkłady", tresc: `<h4>Rodzaje podkładów (PN-EN 13813)</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Spoiwo</th><th>Uwagi</th></tr>
<tr><td>CT</td><td>cementowy</td><td>uniwersalny, także w łazienkach i na zewnątrz; np. CT-C20-F4 (wytrzymałość na ściskanie 20 N/mm², na zginanie 4 N/mm²)</td></tr>
<tr><td>CA</td><td>siarczanowo-wapniowy (anhydryt)</td><td>samopoziomujący, mały skurcz, idealny na ogrzewanie podłogowe; nie do pomieszczeń stale mokrych</td></tr>
<tr><td>SR</td><td>żywiczny</td><td>posadzki przemysłowe</td></tr>
<tr><td>MA</td><td>asfalt lany</td><td>obiekty przemysłowe</td></tr></table></div>
<h4>Podkład zespolony i pływający</h4>
<ul>
<li><b>Zespolony</b>: związany bezpośrednio ze stropem (warstwa sczepna), cieńszy, ok. 25-40 mm.</li>
<li><b>Na warstwie oddzielającej</b>: na folii (np. na izolacji przeciwwilgociowej), min. ok. 35-40 mm.</li>
<li><b>Pływający</b>: na izolacji termicznej lub akustycznej (styropian EPS 100, wełna), oddzielony od ścian taśmą dylatacyjną; cementowy zwykle min. <b>45 mm</b> (nad rurkami ogrzewania min. ok. 45 mm), anhydrytowy ok. 35 mm.</li>
</ul>
<h4>Dylatacje</h4>
<ul>
<li>Obwodowa <b>taśma dylatacyjna</b> 8-10 mm przy ścianach, słupach, rurach.</li>
<li>Pola dylatacyjne podkładów cementowych zwykle do ok. <b>30-40 m²</b>, bok do 6-8 m, proporcja boków nie większa niż 1:2; dylatacje w progach drzwi.</li>
<li>Przy ogrzewaniu podłogowym osobne pole dla każdego obwodu grzewczego.</li>
</ul>
<h4>Pielęgnacja i wilgotność</h4>
<p>Jastrych cementowy chroni się przed szybkim wysychaniem (folia, zraszanie przez min. ok. 3 dni), przeciągiem i słońcem; ruch pieszy po ok. 2-3 dniach. Przed wykończeniem wymagana wilgotność: cementowy pod parkiet ok. <b>2% CM</b> (z ogrzewaniem 1,8%), anhydrytowy <b>0,5% CM</b> (z ogrzewaniem 0,3%). Ogrzewanie podłogowe wygrzewa się wg protokołu wygrzewania przed układaniem posadzki.</p>
<div class="tip">Zbrojenie rozproszone (włókna polipropylenowe) ogranicza rysy skurczowe; siatka stalowa w podkładzie pływającym nie zastępuje dylatacji.</div>` },
        { tytul: "Panele, deski i parkiet", tresc: `<h4>Panele laminowane i winylowe</h4>
<ul>
<li><b>Aklimatyzacja</b>: paczki w pomieszczeniu min. <b>48 h</b> przed montażem, temperatura ok. 18-20 °C.</li>
<li>Na podkład mineralny: <b>folia PE</b> paroizolacyjna min. 0,2 mm z zakładem ok. 20 cm wywiniętym na ściany, potem podkład wygłuszający (np. XPS, korek, pianka).</li>
<li><b>Szczelina dylatacyjna</b> przy ścianach i rurach <b>8-10 mm</b> (klinami), zakryta listwą przypodłogową przykręconą do ściany, nie do paneli.</li>
<li>Kierunek: równolegle do padania światła; przesunięcie styków czołowych w sąsiednich rzędach min. ok. <b>30-40 cm</b>; ostatni rząd nie węższy niż ok. 5 cm.</li>
<li>Przy dużych powierzchniach (zwykle ponad 8-10 m długości) i w progach: profile dylatacyjne.</li>
</ul>
<div class="tw"><table><tr><th>Klasa</th><th>Zastosowanie</th></tr>
<tr><td>21-23</td><td>mieszkania (od sypialni do przedpokoju)</td></tr>
<tr><td>31-34</td><td>obiekty komercyjne (od biur po sklepy)</td></tr>
<tr><td>AC1-AC6</td><td>odporność warstwy wierzchniej na ścieranie (AC4 typowo do mieszkań o dużym ruchu)</td></tr></table></div>
<h4>Parkiet i deski lite</h4>
<ul>
<li>Wilgotność drewna ok. <b>9% ± 2%</b>; podkład suchy, równy (np. do 2 mm na 2 m).</li>
<li>Klepki klei się klejem poliuretanowym lub MS na zagruntowany podkład; wzory: jodełka, deska angielska, mozaika.</li>
<li>Po związaniu kleju (zwykle kilka dni) cyklinowanie gradacjami (np. 40, 60, 80, 100), szpachlowanie szczelin, lakierowanie lub olejowanie (3 warstwy lakieru z międzyszlifem).</li>
</ul>
<h4>Najczęstsze wady</h4>
<ul>
<li>„Klawiszowanie” i szczeliny paneli: brak aklimatyzacji, nierówny podkład.</li>
<li>Wybrzuszenie (wypiętrzenie) podłogi: brak szczeliny dylatacyjnej lub listwa przybita do paneli.</li>
<li>Pęknięcia lakieru, „miseczkowanie” desek: za wilgotny podkład lub drewno.</li>
</ul>
<div class="tip">Pod panele na jastrychu mineralnym zawsze folia PE, nawet jeśli podkład wygląda na suchy; wilgoć z betonu niszczy płytę HDF.</div>` },
        { tytul: "Wykładziny elastyczne i obmiar posadzek", tresc: `<h4>Wykładziny PVC i kauczukowe</h4>
<ol>
<li>Podłoże gładkie: masa wyrównująca (samopoziomująca) 2-5 mm, szlifowanie, odkurzenie, grunt.</li>
<li>Rozłożenie wykładziny na min. 24 h do aklimatyzacji (rozwinięta, „odpoczywa”).</li>
<li>Klejenie klejem dyspersyjnym pacą o drobnych zębach (np. A2), po czasie odparowania; wałkowanie ciężkim wałkiem od środka na boki.</li>
<li>Docinanie na zakładkę (podwójne cięcie), łączenie pasów: <b>spawanie na gorąco</b> sznurem PVC po wyfrezowaniu rowka, po związaniu kleju (ok. 24 h); nadmiar sznura ścina się nożem półksiężycowym w dwóch przejściach.</li>
<li>Wywinięcie na ścianę (cokół) na profilu wyobleniowym w pomieszczeniach higienicznych (szpitale, kuchnie).</li>
</ol>
<h4>Wykładziny tekstylne</h4>
<ul><li>Klejone na całej powierzchni, mocowane taśmą dwustronną lub na listwach z kolcami (tzw. listwy napinające).</li>
<li>Kierunek włosa (runa) we wszystkich pasach taki sam, inaczej widać różnicę odcienia.</li></ul>
<h4>Obmiar posadzek: przykład</h4>
<p>Pomieszczenie 5,20 x 3,80 m, panele w paczce 2,22 m², naddatek na docinki 5-10% (przy układzie w jodełkę więcej, ok. 10-15%).</p>
<ul>
<li>Powierzchnia: 5,20 × 3,80 = <b>19,76 m²</b>.</li>
<li>Z naddatkiem 7%: 19,76 × 1,07 = 21,14 m².</li>
<li>Paczki: 21,14 / 2,22 = 9,5, czyli <b>10 paczek</b>.</li>
<li>Listwy przypodłogowe: obwód 2 × (5,20 + 3,80) = 18,0 m, minus drzwi 0,9 m = 17,1 m; przy listwach 2,5 m: 17,1 / 2,5 = 6,84, czyli <b>7 sztuk</b>.</li>
<li>Folia PE: 19,76 m² + zakłady ok. 10% = ok. 22 m².</li>
</ul>
<div class="tip">W zadaniu egzaminacyjnym zawsze zaokrągla się w górę do pełnych opakowań, a naddatek dolicza tylko wtedy, gdy podaje go treść zadania.</div>` }
      ],
      pytania: [
        Q("Szczelina dylatacyjna przy ścianach pod panelami laminowanymi powinna wynosić około:", "8-10 mm", "1-2 mm", "30 mm", "nie jest potrzebna", "Panele pracują pod wpływem wilgotności i temperatury."),
        Q("Symbol CA w oznaczeniu podkładu oznacza podkład:", "siarczanowo-wapniowy (anhydrytowy)", "cementowy", "asfaltowy", "żywiczny", "CT cementowy, CA anhydrytowy, SR żywiczny, MA asfalt lany."),
        Q("Dopuszczalna wilgotność podkładu anhydrytowego bez ogrzewania przed ułożeniem parkietu to ok.:", "0,5% CM", "2% CM", "5% CM", "10% CM", "Anhydryt jest wrażliwy na wilgoć."),
        Q("Pod panele na jastrychu cementowym układa się najpierw:", "folię PE z zakładami", "papę asfaltową na lepiku", "siatkę z włókna szklanego", "klej dyspersyjny", "Folia chroni panele przed wilgocią z podłoża."),
        Q("Łączenie pasów wykładziny PVC w pomieszczeniach higienicznych wykonuje się:", "spawaniem na gorąco sznurem PVC", "silikonem", "fugą cementową", "taśmą malarską", "Spaw daje szczelną, zmywalną posadzkę."),
        Q("Ile paczek paneli po 2,22 m² trzeba na 19,76 m² przy 7% naddatku?", "10", "9", "8", "12", "21,14 / 2,22 = 9,5, zaokrąglone w górę do 10."),
        Q("Wybrzuszenie podłogi z paneli najczęściej wynika z:", "braku szczeliny dylatacyjnej przy ścianach", "zbyt długiej aklimatyzacji", "zastosowania folii PE", "ułożenia równolegle do światła", "Panele rozszerzają się i nie mają miejsca."),
        Q("Podkład pływający to podkład:", "ułożony na warstwie izolacji i oddzielony od ścian taśmą dylatacyjną", "przyklejony do stropu warstwą sczepną", "wykonany wyłącznie z żywicy", "który nie wymaga dylatacji", "Nie ma sztywnego połączenia ze stropem i ścianami.")
      ]
    }
  ]);

  pod("BUD.12", [
    {
      id: "materialy-zaprawy", tytul: "Elementy murowe i zaprawy", opis: "Rozpoznasz elementy murowe po oznaczeniach i przygotujesz zaprawę o wymaganej recepturze.",
      lekcje: [
        { tytul: "Elementy murowe i ich parametry", tresc: `<h4>Cegła i jej wymiary</h4>
<p>Cegła pełna ma format <b>250 x 120 x 65 mm</b>. Ściany nazywa się: <b>wozówka</b> (250 x 65, dłuższy bok w licu), <b>główka</b> (120 x 65), <b>podstawa</b> (250 x 120). Części cegły: połówka, ćwiartka (ok. 6 cm), trzy czwarte (dziewiątka, ok. 19 cm), dziurawka i kratówka mają otwory.</p>
<div class="tw"><table><tr><th>Grubość muru</th><th>Wymiar</th></tr>
<tr><td>1/4 cegły (na rąb)</td><td>6,5 cm</td></tr>
<tr><td>1/2 cegły</td><td>12 cm</td></tr>
<tr><td>1 cegła</td><td>25 cm</td></tr>
<tr><td>1 1/2 cegły</td><td>38 cm</td></tr>
<tr><td>2 cegły</td><td>51 cm</td></tr></table></div>
<p>Zasada: każda kolejna połówka dodaje 12 cm cegły + 1 cm spoiny podłużnej.</p>
<h4>Inne elementy murowe</h4>
<ul>
<li><b>Pustaki ceramiczne</b> (np. szlifowane na zaprawę cienkowarstwową lub klej w piance), poryzowane, z pióro-wpustem: spoin pionowych nie wypełnia się zaprawą.</li>
<li><b>Bloczki silikatowe</b> (wapienno-piaskowe): duża gęstość, dobra akustyka i nośność, mała izolacyjność cieplna.</li>
<li><b>Beton komórkowy</b> (gazobeton): klasy gęstości np. 400, 500, 600, 700 kg/m³; im lżejszy, tym cieplejszy, ale mniej wytrzymały.</li>
<li><b>Bloczki betonowe</b> (fundamentowe): ściany fundamentowe i piwnice.</li>
</ul>
<h4>Oznaczenia (PN-EN 771)</h4>
<ul>
<li>Znormalizowana <b>wytrzymałość na ściskanie</b> w N/mm² (MPa), np. klasa 15 lub 20.</li>
<li><b>Kategoria I</b> (deklarowana wytrzymałość z prawdopodobieństwem ≥ 95%) lub <b>II</b>.</li>
<li><b>Grupa elementów</b> 1-4 wg udziału otworów: grupa 1 to elementy pełne lub z otworami do 25% objętości.</li>
<li>Mrozoodporność i nasiąkliwość (cegła licowa, klinkier: niska nasiąkliwość, wysoka mrozoodporność).</li>
</ul>
<h4>Zapotrzebowanie cegły</h4>
<p>Przy spoinach ok. 1 cm na 1 m² muru o grubości 1/2 cegły idzie ok. <b>50 cegieł</b>, a 1 cegły ok. <b>100 cegieł</b> (ok. 400 cegieł na 1 m³ muru). Zaprawy: ok. 0,25-0,28 m³ na 1 m³ muru z cegły pełnej.</p>
<div class="tip">Na egzaminie licz z naddatkiem na straty tylko wtedy, gdy podano jego wielkość, np. 3% na ubytki transportowe.</div>` },
        { tytul: "Zaprawy murarskie: rodzaje i receptury", tresc: `<h4>Podział zapraw</h4>
<ul>
<li>Wg spoiwa: <b>cementowe</b> (mocne, mało plastyczne, fundamenty, piwnice, kominy ponad dachem), <b>cementowo-wapienne</b> (uniwersalne, plastyczne, ściany nadziemne), <b>wapienne</b> (słabe, ściany nienośne i zabytki), <b>gipsowe</b>, a także gotowe zaprawy fabryczne.</li>
<li>Wg wytrzymałości: klasa <b>M</b> z liczbą oznaczającą wytrzymałość na ściskanie w MPa: M1, M2,5, M5, M10, M15, M20 (np. M5 = 5 N/mm²).</li>
<li>Wg grubości spoiny: zaprawa zwykła (spoiny ok. 8-15 mm), do cienkich spoin (1-3 mm), lekka.</li>
</ul>
<h4>Proporcje objętościowe</h4>
<p>Zapis cement : wapno : piasek, np. <b>1 : 1 : 6</b> oznacza 1 część cementu, 1 część ciasta wapiennego (lub wapna hydratyzowanego) i 6 części piasku. Zaprawa cementowa np. 1 : 4, wapienna 1 : 3.</p>
<h4>Przykład obliczenia</h4>
<p>Potrzeba 0,8 m³ zaprawy cementowo-wapiennej 1 : 1 : 6. Suma części: 1 + 1 + 6 = 8. Jedna część to 0,8 / 8 = 0,1 m³ (w uproszczeniu, bez współczynnika wydajności). Potrzeba: cement 0,1 m³, wapno 0,1 m³, piasek 0,6 m³. Przy gęstości nasypowej cementu ok. 1200 kg/m³: 0,1 × 1200 = <b>120 kg cementu</b>, czyli 5 worków po 25 kg.</p>
<h4>Składniki i woda</h4>
<ul>
<li>Piasek: czysty, bez gliny i części organicznych, uziarnienie do ok. 2 mm (do spoin murów).</li>
<li>Woda: wodociągowa, bez zanieczyszczeń; nie stosuje się wody z kałuż i ścieków.</li>
<li>Wapno: hydratyzowane (suchy proszek) lub ciasto wapienne z wapna palonego, dobrze dojrzałe; niedogaszone ziarna powodują później „wybuchy” i spęcherzenia.</li>
<li>Domieszki: uplastyczniające, przeciwmrozowe, uszczelniające (dodawane wg instrukcji, w małych ilościach).</li>
</ul>
<h4>Przygotowanie</h4>
<p>W betoniarce: woda, część piasku, cement i wapno, reszta piasku, mieszanie ok. 3 min do jednolitej barwy. Zaprawę z cementem zużywa się zwykle w ciągu <b>2-3 godzin</b>; zaprawy, która zaczęła wiązać, nie wolno ponownie rozrabiać wodą.</p>
<div class="tip">Konsystencję zaprawy sprawdza się stożkiem pomiarowym (zagłębienie w cm); do murowania cegły zwykle 6-8 cm, do bloczków chłonnych bardziej plastyczna.</div>` },
        { tytul: "Ocena jakości materiałów i składowanie", tresc: `<h4>Odbiór materiałów na budowie</h4>
<ul>
<li>Każda partia ma <b>deklarację właściwości użytkowych</b> (DWU/DoP) i oznakowanie <b>CE</b> lub krajowy <b>znak budowlany B</b>.</li>
<li>Sprawdza się zgodność z projektem: rodzaj, klasę wytrzymałości, wymiary, partię, datę produkcji (cement i zaprawy workowane mają termin przydatności, zwykle kilka miesięcy).</li>
<li>Oględziny cegły: pęknięcia, odpryski, zwichrowanie, <b>margiel</b> (wtrącenia wapienne powodujące odpryski), wykwity; dźwięk przy uderzeniu: czysty, metaliczny świadczy o dobrym wypaleniu.</li>
</ul>
<h4>Składowanie</h4>
<div class="tw"><table><tr><th>Materiał</th><th>Sposób</th></tr>
<tr><td>cegły, pustaki, bloczki</td><td>na paletach, na utwardzonym i odwodnionym podłożu, przykryte folią</td></tr>
<tr><td>cement, wapno, zaprawy suche</td><td>w workach w suchym, zamkniętym magazynie, na podestach ok. 10 cm nad podłogą, w stosach do ok. 10-12 warstw</td></tr>
<tr><td>piasek, kruszywo</td><td>w pryzmach na utwardzonym podłożu, oddzielnie wg frakcji</td></tr>
<tr><td>ciasto wapienne</td><td>w dołach lub pojemnikach, przykryte warstwą piasku, chronione przed mrozem</td></tr></table></div>
<h4>Murowanie w niskich temperaturach</h4>
<ul>
<li>Przy temperaturze poniżej ok. <b>+5 °C</b> stosuje się zaprawy z domieszkami przeciwmrozowymi, podgrzewanie składników i osłony muru.</li>
<li>Nie wolno murować z oblodzonych lub zaśnieżonych elementów ani na zamarzniętym murze.</li>
<li>Świeży mur chroni się przed deszczem i mrozem (plandeki, maty) oraz przed zbyt szybkim wysychaniem w upał (zwilżanie).</li>
</ul>
<h4>Zwilżanie elementów</h4>
<p>Cegły ceramiczne o dużej nasiąkliwości zwilża się przed murowaniem w upał, aby nie „wypiły” wody z zaprawy (słaba przyczepność, kruszenie spoin). Bloczków z betonu komórkowego na zaprawę cienkowarstwową zwykle się nie moczy, tylko odpyla.</p>
<div class="tip">Pytanie typu „co oznacza margiel w cegle” ma odpowiedź: grudki wapna, które po zawilgoceniu pęcznieją i powodują odpryski.</div>` }
      ],
      pytania: [
        Q("Mur o grubości 1 1/2 cegły ma grubość:", "38 cm", "25 cm", "51 cm", "32 cm", "12 + 1 + 25 = 38 cm."),
        Q("Ile cegieł pełnych potrzeba orientacyjnie na 1 m² muru o grubości 1/2 cegły?", "około 50", "około 100", "około 25", "około 400", "Na mur 1 cegły ok. 100 szt./m², na 1 m³ ok. 400 szt."),
        Q("Symbol M10 w oznaczeniu zaprawy oznacza:", "wytrzymałość na ściskanie 10 N/mm²", "10% domieszek", "proporcję 1:10", "czas zużycia 10 godzin", "Liczba po M to wytrzymałość w MPa."),
        Q("W zaprawie 1:1:6 trzecia liczba oznacza:", "części piasku", "części wody", "części cementu", "części wapna", "Kolejność: cement, wapno, piasek."),
        Q("Ile cementu (objętościowo) potrzeba na 0,8 m³ zaprawy 1:1:6 w uproszczonym rachunku?", "0,1 m³", "0,2 m³", "0,6 m³", "0,8 m³", "0,8 / 8 części = 0,1 m³ na część."),
        Q("Margiel w cegle to:", "wtrącenia wapna powodujące odpryski po zawilgoceniu", "rodzaj spoiny", "glazurowana powierzchnia", "otwór w cegle kratówce", "Grudki CaO pęcznieją pod wpływem wody."),
        Q("Zaprawy, która zaczęła wiązać:", "nie wolno rozrabiać ponownie wodą", "można rozcieńczyć wodą i użyć", "należy podgrzać", "używa się do spoin licowych", "Dodanie wody obniża wytrzymałość."),
        Q("Worki z cementem składuje się:", "w suchym magazynie na podestach nad podłogą", "na gruncie pod gołym niebem", "w pryzmie z piaskiem", "w wodzie", "Cement chroni się przed wilgocią.")
      ]
    },
    {
      id: "wiazania", tytul: "Wiązania i mury z cegły", opis: "Dobierzesz wiązanie do grubości muru, wykonasz narożniki, połączenia i nadproża.",
      lekcje: [
        { tytul: "Zasady wiązania i rodzaje wiązań", tresc: `<h4>Reguły wiązania muru</h4>
<ol>
<li>Spoiny poziome (wsporne) muszą być ciągłe i prostopadłe do kierunku działania obciążenia.</li>
<li>Spoiny pionowe w sąsiednich warstwach <b>przesunięte</b> co najmniej o 1/4 cegły (główkę lub połowę główki), nigdy jedna nad drugą.</li>
<li>Spoiny podłużne w murze grubszym niż 1/2 cegły przesunięte w kolejnych warstwach.</li>
<li>Grubość spoin: poziome ok. <b>12 mm</b> (10-15 mm), pionowe ok. <b>10 mm</b> (5-15 mm); wypełnione całkowicie zaprawą.</li>
<li>Mur wiąże się w każdej warstwie na całej grubości, z cegieł całych; połówek i ćwiartek używa się tylko tam, gdzie wymaga tego wiązanie (naroża, ościeża).</li>
</ol>
<h4>Najważniejsze wiązania</h4>
<div class="tw"><table><tr><th>Wiązanie</th><th>Układ</th><th>Zastosowanie</th></tr>
<tr><td>wozówkowe</td><td>same wozówki, przesunięcie o 1/2 cegły</td><td>ścianki 1/2 cegły, ściany warstwowe (warstwa licowa)</td></tr>
<tr><td>główkowe</td><td>same główki, przesunięcie o 1/4 cegły</td><td>filary, łuki, gzymsy</td></tr>
<tr><td>pospolite (kowadełkowe)</td><td>na przemian warstwa główkowa i wozówkowa</td><td>najczęstsze w murach 1 cegły i grubszych</td></tr>
<tr><td>krzyżykowe</td><td>jak pospolite, ale co druga warstwa wozówkowa przesunięta o 1/2 cegły</td><td>mury licowe, dekoracyjne</td></tr>
<tr><td>polskie (gotyckie)</td><td>w każdej warstwie na przemian główka i wozówka</td><td>mury licowe, zabytkowe</td></tr>
<tr><td>amerykańskie</td><td>kilka warstw wozówkowych (3-5), potem jedna główkowa</td><td>mury licowe, szybkie murowanie</td></tr></table></div>
<h4>Murowanie warstwy</h4>
<p>Najpierw wykonuje się <b>naroża i skrajne części</b> (tzw. „węgarki”) na kilka warstw wyżej, sprawdzając pion i poziom, między nimi naciąga się sznur murarski i wypełnia warstwy. Wysokość warstw kontroluje się <b>łatą kreskową</b> (warstwówką): 4 warstwy cegły ze spoinami = ok. 30-31 cm.</p>
<div class="tip">Na rysunku wiązania pospolitego warstwa główkowa w murze 1 cegły ma przy narożu „dziewiątkę” (3/4 cegły) lub ćwiartki, aby przesunąć spoiny o 1/4 cegły.</div>` },
        { tytul: "Połączenia, ościeża i nadproża", tresc: `<h4>Łączenie ścian</h4>
<ul>
<li><b>Połączenie na strzępia zazębione (końcowe)</b>: wystające co drugą warstwę cegły (wnęki co drugą warstwę); stosowane, gdy ścianę dokańcza się później w tym samym miejscu.</li>
<li><b>Strzępia schodkowe (uciekające)</b>: najbezpieczniejsze przy przerwie w murowaniu, łatwe do dokończenia.</li>
<li>Połączenie ściany działowej z nośną: strzępia, łączniki stalowe (kotwy, bednarka) w spoinach co kilka warstw lub profil systemowy.</li>
<li>Przerwy w murowaniu kończy się strzępiami schodkowymi, nie pionową krawędzią.</li>
</ul>
<h4>Ościeża i otwory</h4>
<ul>
<li>Ościeże proste lub z <b>węgarkiem</b> (występem) dla osadzenia stolarki; szerokość węgarka zwykle 1/4 cegły (6,5 cm).</li>
<li>Otwory zostawia się zgodnie z projektem: wymiary w świetle muru z tolerancją; pod okno parapet z cegieł na rąb lub z betonu.</li>
</ul>
<h4>Nadproża</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Cechy</th></tr>
<tr><td>prefabrykowane L19, belki ceramiczno-żelbetowe</td><td>szybki montaż, oparcie min. ok. 12-15 cm (wg producenta), kilka belek obok siebie wg grubości ściany</td></tr>
<tr><td>monolityczne żelbetowe</td><td>wykonane w deskowaniu z wieńcem lub osobno; oparcie min. ok. 25 cm przy większych rozpiętościach</td></tr>
<tr><td>ceglane łukowe, płaskie (prostowe)</td><td>mury zabytkowe i licowe; wykonuje się na krążynach, rozbiórka po związaniu zaprawy</td></tr></table></div>
<h4>Wieńce</h4>
<p>Wieniec żelbetowy na poziomie stropu łączy ściany w sztywną całość i rozkłada obciążenie. Zbrojenie typowo 4 pręty podłużne (np. Ø12) i strzemiona co ok. 25-30 cm; od zewnątrz docieplenie wieńca, aby nie było mostka termicznego.</p>
<h4>Ściany szczelinowe i warstwowe</h4>
<p>Ściana trójwarstwowa: warstwa nośna, izolacja termiczna (wełna lub styropian) z ewentualną szczeliną wentylacyjną i warstwa licowa 1/2 cegły; warstwy łączy się <b>kotwami</b> ze stali nierdzewnej, zwykle min. 4-5 szt./m², z kapinosem (rozetą) odprowadzającym wodę. U dołu warstwy licowej zostawia się otwarte spoiny pionowe dla odpływu wody i wentylacji.</p>
<div class="tip">Pytanie egzaminacyjne: przerwę w murowaniu kończy się strzępiami schodkowymi, bo zazębione trudniej dobrze wypełnić zaprawą.</div>` },
        { tytul: "Przewody kominowe i kontrola murów", tresc: `<h4>Przewody w murach z cegły</h4>
<ul>
<li>Przewody dymowe, spalinowe i wentylacyjne murowane z cegły pełnej mają przekrój minimalny ok. <b>14 x 14 cm</b> (1/2 x 1/2 cegły); ścianki między przewodami i zewnętrzne min. 1/2 cegły (12 cm).</li>
<li>Spoiny w przewodach muszą być <b>pełne i szczelne</b>, wewnętrzne powierzchnie gładkie (spoiny zatarte), bez wystających cegieł.</li>
<li>Do przewodów dymowych używa się zaprawy cementowo-wapiennej lub ogniotrwałej, nie wapiennej; część komina nad dachem z cegły klinkierowej lub pełnej na zaprawie cementowej.</li>
<li>Coraz częściej stosuje się systemy kominowe z pustaków keramzytobetonowych i rur ceramicznych.</li>
<li>Drewnianych elementów (więźby) nie wolno opierać ani przybliżać do przewodów dymowych; zachowuje się odległości wg przepisów.</li>
</ul>
<h4>Kontrola jakości murów</h4>
<div class="tw"><table><tr><th>Co sprawdzić</th><th>Czym</th></tr>
<tr><td>pion ścian i naroży</td><td>pion murarski, poziomnica, laser</td></tr>
<tr><td>poziom warstw</td><td>poziomnica, niwelator, łata kreskowa</td></tr>
<tr><td>płaskość lica</td><td>łata 2 m (prześwit pod łatą)</td></tr>
<tr><td>grubość i wypełnienie spoin</td><td>miarka, oględziny</td></tr>
<tr><td>wymiary otworów i grubości ścian</td><td>taśma miernicza</td></tr></table></div>
<h4>Przyczyny złej jakości</h4>
<ul>
<li>Niepełne spoiny pionowe: obniżona nośność, izolacyjność i akustyka.</li>
<li>Nadmierna grubość spoin poziomych: większe osiadanie muru i rysy.</li>
<li>Zbyt szybkie murowanie na wysokość (przy zaprawie wapiennej): ściskanie świeżych spoin.</li>
<li>Brak izolacji poziomej na fundamencie: podciąganie wilgoci kapilarnie; izolację z papy lub folii układa się na ławie i pod pierwszą warstwą nad terenem.</li>
</ul>
<h4>Spoinowanie muru licowego</h4>
<p>Mur licowy wykonuje się „na czysto”: spoiny wygładza się spoinówką (wklęsłe, płaskie) w trakcie murowania albo wydrapuje na głębokość ok. 1,5 cm i spoinuje później zaprawą do fugowania. Lico czyści się na bieżąco z zaprawy, bo zaschniętej trudno usunąć bez zabrudzenia cegły.</p>
<div class="tip">Na egzaminie: minimalny przekrój przewodu kominowego z cegły to 14 x 14 cm, a spoiny w nim zawsze pełne.</div>` }
      ],
      pytania: [
        Q("Spoiny pionowe w sąsiednich warstwach muru przesuwa się co najmniej o:", "1/4 cegły", "1 cm", "1 cegłę", "nie trzeba ich przesuwać", "Spoiny jedna nad drugą osłabiają mur."),
        Q("Wiązanie z samych wozówek stosuje się w murach o grubości:", "1/2 cegły", "1 cegły", "2 cegieł", "1 1/2 cegły", "Wiązanie wozówkowe ma przesunięcie o 1/2 cegły."),
        Q("Wiązanie, w którym warstwy główkowe i wozówkowe występują na przemian, to wiązanie:", "pospolite (kowadełkowe)", "wozówkowe", "polskie", "amerykańskie", "Polskie ma główki i wozówki naprzemiennie w każdej warstwie."),
        Q("Przerwę w murowaniu ściany kończy się:", "strzępiami schodkowymi", "pionową krawędzią bez strzępi", "dowolnie", "pianką montażową", "Strzępia schodkowe łatwo dokończyć."),
        Q("Typowa grubość spoiny poziomej w murze z cegły pełnej to około:", "12 mm", "3 mm", "25 mm", "40 mm", "Dopuszcza się 10-15 mm."),
        Q("Minimalny przekrój przewodu kominowego z cegły pełnej wynosi:", "14 x 14 cm", "10 x 10 cm", "25 x 25 cm", "8 x 12 cm", "Pół cegły na pół cegły."),
        Q("Warstwę licową ściany trójwarstwowej łączy się z warstwą nośną:", "kotwami ze stali nierdzewnej", "klejem do płytek", "wyłącznie zaprawą w szczelinie", "gwoździami budowlanymi", "Kotwy przenoszą obciążenia poziome."),
        Q("Do sprawdzenia płaskości lica muru używa się:", "łaty 2 m", "stożka pomiarowego", "wilgotnościomierza CM", "pionu", "Mierzy się prześwit pod łatą.")
      ]
    },
    {
      id: "tynki", tytul: "Tynki zwykłe i maszynowe", opis: "Wykonasz tynk wybranej kategorii, ręcznie lub maszynowo, i ocenisz jego jakość zgodnie z wymaganiami.",
      lekcje: [
        { tytul: "Kategorie i warstwy tynku zwykłego", tresc: `<h4>Warstwy</h4>
<div class="tw"><table><tr><th>Warstwa</th><th>Grubość</th><th>Rola</th></tr>
<tr><td>obrzutka</td><td>ok. 3-4 mm</td><td>zwiększa przyczepność, rzadka zaprawa narzucana kielnią</td></tr>
<tr><td>narzut</td><td>ok. 8-15 mm (w 1-2 warstwach)</td><td>wyrównuje powierzchnię, ściąga się łatą po pasach</td></tr>
<tr><td>gładź</td><td>ok. 2-3 mm</td><td>wykończenie, piasek drobny, zacieranie packą</td></tr></table></div>
<h4>Kategorie tynków zwykłych</h4>
<ul>
<li><b>0</b>: tynk surowy (obrzutka), np. w piwnicach, pod okładziny;</li>
<li><b>I</b>: tynk surowy dwuwarstwowy (obrzutka + narzut bez wygładzania);</li>
<li><b>II</b>: dwuwarstwowy, narzut wyrównany kielnią lub pacą (pomieszczenia gospodarcze);</li>
<li><b>III</b>: <b>pospolity</b> trójwarstwowy, gładź zatarta packą (typowe mieszkania);</li>
<li><b>IV</b>: <b>doborowy</b> trójwarstwowy, gładź na prowadnicach, zatarta na gładko (np. pod malowanie z połyskiem), odmiany: IVf filcowany, IVw wypalany.</li>
</ul>
<h4>Dopuszczalne odchylenia (orientacyjnie)</h4>
<div class="tw"><table><tr><th>Kategoria</th><th>Płaskość (łata 2 m)</th><th>Pion</th></tr>
<tr><td>III</td><td>do 3 mm, najwyżej 3 odchyłki</td><td>do 2 mm na 1 m, max 4 mm w pomieszczeniu</td></tr>
<tr><td>IV</td><td>do 2 mm, najwyżej 2 odchyłki</td><td>do 1,5 mm na 1 m, max 3 mm w pomieszczeniu</td></tr></table></div>
<h4>Kolejność wykonania</h4>
<ol>
<li>Przygotowanie podłoża: oczyszczenie spoin na głębokość ok. 5 mm (w murze), usunięcie kurzu i wykwitów, zwilżenie podłoża chłonnego.</li>
<li>Osadzenie <b>pasów kierunkowych</b> (prowadnic) z zaprawy lub listew w rozstawie ok. 1-1,5 m, sprawdzone w pionie.</li>
<li>Obrzutka, po związaniu narzut ściągany łatą opartą na pasach.</li>
<li>Gładź na lekko związany narzut, zacieranie packą drewnianą lub styropianową, ruchem kolistym.</li>
</ol>
<p>Kolejność w budynku: najpierw sufity, potem ściany, od najwyższej kondygnacji w dół; tynki zewnętrzne po osiadaniu budynku i wykonaniu dachu.</p>
<div class="tip">Na egzaminie: tynk pospolity = kategoria III, trójwarstwowy, w mieszkaniach. Tynk doborowy = IV.</div>` },
        { tytul: "Tynki maszynowe i cienkowarstwowe", tresc: `<h4>Tynk gipsowy maszynowy</h4>
<ul>
<li>Jednowarstwowy, grubość zwykle <b>10-15 mm</b> (min. ok. 8 mm na ścianach), sucha mieszanka fabryczna.</li>
<li>Tylko w pomieszczeniach suchych lub o okresowo podwyższonej wilgotności (domowe łazienki i kuchnie); nie w garażach, pralniach, na zewnątrz.</li>
<li>Podłoże gruntowane: chłonne (beton komórkowy) gruntem zmniejszającym chłonność, gładki beton gruntem sczepnym z piaskiem kwarcowym.</li>
<li>Na narożach <b>narożniki stalowe</b> (ocynkowane), w miejscach styku różnych materiałów siatka zbrojąca.</li>
<li>Kolejność: natrysk agregatem, rozprowadzenie łatą typu „h”, po zmatowieniu wyrównanie łatą trapezową, po wstępnym związaniu zwilżenie i zatarcie pacą gąbkową, wygładzenie pacą stalową (jeśli wymagane).</li>
<li>Temperatura ok. +5 do +25 °C; po nałożeniu intensywne wietrzenie dla wyschnięcia (malowanie zwykle po 1-2 tygodniach).</li>
</ul>
<h4>Tynk cementowo-wapienny maszynowy</h4>
<p>Do pomieszczeń wilgotnych i na zewnątrz, grubość ok. 10-20 mm. Wymaga dłuższego sezonowania (ok. 1 dzień na 1 mm grubości przed tynkiem dekoracyjnym lub malowaniem).</p>
<h4>Tynki cienkowarstwowe (elewacyjne)</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Cechy</th></tr>
<tr><td>mineralny</td><td>sucha mieszanka, paroprzepuszczalny, tani, malowany po związaniu</td></tr>
<tr><td>akrylowy</td><td>gotowa masa, elastyczny, barwiony w masie, mniej paroprzepuszczalny</td></tr>
<tr><td>silikatowy</td><td>paroprzepuszczalny, odporny na grzyby i glony, wymaga gruntu silikatowego</td></tr>
<tr><td>silikonowy</td><td>hydrofobowy, samoczyszczący, najdroższy</td></tr></table></div>
<p>Grubość wynika z uziarnienia kruszywa (np. 1,5 mm, 2 mm). Faktury: <b>baranek</b> (zacierany kołowo), <b>kornik</b> (bruzdy od zacierania ruchem poziomym, pionowym lub kolistym). Nakłada się bez przerw na całej płaszczyźnie (na „mokre w mokre”), a granice pól wyznacza taśmą, aby nie było widocznych łączeń.</p>
<div class="tip">Tynku cienkowarstwowego nie nakłada się w pełnym słońcu, przy silnym wietrze ani przed deszczem; schnie zbyt szybko lub jest wymywany, co daje przebarwienia.</div>` },
        { tytul: "Wady tynków i obmiar robót tynkarskich", tresc: `<h4>Wady i ich przyczyny</h4>
<div class="tw"><table><tr><th>Wada</th><th>Przyczyna</th></tr>
<tr><td>rysy skurczowe (siatka drobnych pęknięć)</td><td>za tłusta zaprawa, za szybkie wysychanie (słońce, przeciąg), zbyt gruba warstwa</td></tr>
<tr><td>odspojenie, „głuche” miejsca</td><td>brudne lub niezwilżone podłoże, brak obrzutki lub gruntu</td></tr>
<tr><td>spęcherzenia, odpryski z kraterami</td><td>niedogaszone ziarna wapna w zaprawie</td></tr>
<tr><td>wykwity</td><td>sole z podłoża lub zaprawy migrujące z wodą</td></tr>
<tr><td>pęknięcia na styku materiałów</td><td>brak siatki zbrojącej na styku np. ceramiki z betonem</td></tr>
<tr><td>pylenie, osypywanie</td><td>za chuda zaprawa, przemrożenie, zbyt szybkie wyschnięcie</td></tr></table></div>
<h4>Naprawa</h4>
<p>Odspojony fragment skuwa się do zdrowego podłoża, krawędzie podcina się pod kątem, podłoże oczyszcza, zwilża i gruntuje, po czym wykonuje się tynk o tym samym składzie. Rysy przy narożach okien naprawia się z zatopieniem siatki.</p>
<h4>Obmiar tynków (wg zasad KNR)</h4>
<ul>
<li>Powierzchnię tynku oblicza się w <b>m²</b> jako iloczyn długości ścian w stanie surowym i wysokości (od podłoża do stropu lub do poziomu, do którego tynkuje się ściany).</li>
<li>Typowa zasada: <b>nie potrąca się otworów do 3 m²</b>, a ościeży się nie dolicza; od otworów większych niż 3 m² potrąca się ich powierzchnię i dolicza powierzchnię ościeży.</li>
<li>Tynki sufitów liczy się w świetle ścian, osobno od tynków ścian; filary, pilastry i belki oblicza się wg rozwinięcia.</li>
</ul>
<h4>Przykład</h4>
<p>Pomieszczenie 4,0 x 3,5 m, wysokość 2,7 m, drzwi 0,9 x 2,0 m (1,8 m²), okno 2,4 x 1,5 m (3,6 m², ościeża głębokości 0,2 m).</p>
<ul>
<li>ściany: 2 × (4,0 + 3,5) × 2,7 = <b>40,50 m²</b>;</li>
<li>drzwi 1,8 m² ≤ 3 m²: nie potrąca się;</li>
<li>okno 3,6 m² &gt; 3 m²: potrąca się 3,6 m², dolicza ościeża: (2 × 1,5 + 2,4) × 0,2 = 1,08 m²;</li>
<li>wynik: 40,50 - 3,60 + 1,08 = <b>37,98 m²</b>; sufit: 4,0 × 3,5 = 14,00 m².</li>
</ul>
<div class="tip">Zasady obmiaru zawsze sprawdzaj w treści zadania: jeżeli podano inne reguły potrącania otworów, liczysz według treści.</div>` }
      ],
      pytania: [
        Q("Tynk pospolity trójwarstwowy stosowany w mieszkaniach to tynk kategorii:", "III", "0", "I", "IVf", "Obrzutka, narzut, gładź zatarta packą."),
        Q("Pierwsza warstwa tynku zwykłego, zwiększająca przyczepność, to:", "obrzutka", "gładź", "narzut", "szpachla", "Obrzutka ma ok. 3-4 mm."),
        Q("Spęcherzenia i odpryski z kraterami w tynku są skutkiem:", "niedogaszonych ziaren wapna w zaprawie", "za grubej gładzi", "użycia piasku płukanego", "zbyt wolnego wysychania", "Ziarna wapna gaszą się w tynku i zwiększają objętość."),
        Q("Typowa grubość tynku gipsowego maszynowego na ścianach to:", "10-15 mm", "1-2 mm", "30-40 mm", "50 mm", "Minimalnie ok. 8 mm."),
        Q("Tynku gipsowego nie stosuje się:", "na elewacjach i w pomieszczeniach stale mokrych", "w sypialniach", "na ścianach z betonu komórkowego", "na sufitach w mieszkaniach", "Gips jest wrażliwy na stałą wilgoć."),
        Q("Wg typowych zasad przedmiaru tynków otworów o powierzchni do 3 m²:", "nie potrąca się, a ościeży nie dolicza", "potrąca się zawsze", "potrąca się połowę", "dolicza się podwójnie", "Otwory > 3 m² potrąca się, doliczając ościeża."),
        Q("Faktura tynku cienkowarstwowego z bruzdami od zacierania to:", "kornik", "baranek", "gładź", "filc", "Baranek ma równomierne ziarno."),
        Q("Rysy skurczowe w tynku powstają najczęściej przez:", "zbyt szybkie wysychanie i za tłustą zaprawę", "gruntowanie podłoża", "osadzenie narożników", "nakładanie gładzi packą", "Szybka utrata wody powoduje skurcz.")
      ]
    },
    {
      id: "rusztowania-przedmiar", tytul: "Rusztowania i przedmiar murów", opis: "Bezpiecznie użytkujesz rusztowanie i obliczysz ilość muru, materiałów i robocizny.",
      lekcje: [
        { tytul: "Rusztowania i praca na wysokości", tresc: `<h4>Rodzaje rusztowań</h4>
<ul>
<li><b>kozłowe (na kozłach)</b>: do niewielkich wysokości wewnątrz pomieszczeń, pomost z desek na kozłach;</li>
<li><b>ramowe (systemowe)</b>: najpopularniejsze przy elewacjach, z ram stalowych, stężeń i pomostów;</li>
<li><b>warszawskie (z rur i złączy)</b>: dowolne kształty;</li>
<li><b>przejezdne</b> na kółkach: kółka z hamulcem, nie przemieszcza się ich z ludźmi i materiałem;</li>
<li><b>wiszące i wysuwne</b>: specjalistyczne.</li>
</ul>
<h4>Wymagania bezpieczeństwa</h4>
<ul>
<li>Rusztowanie montuje się zgodnie z dokumentacją producenta lub projektem, na nośnym i wypoziomowanym podłożu (podkładki, stopki).</li>
<li>Pomost: szerokość min. <b>0,6 m</b>, pełny, bez szczelin, odległość od ściany zwykle do ok. 0,2 m.</li>
<li>Zabezpieczenie boczne: poręcz główna na wysokości <b>1,1 m</b>, poręcz pośrednia i <b>krawężnik</b> min. <b>0,15 m</b>.</li>
<li>Kotwienie do ściany wg instrukcji, uziemienie rusztowań metalowych, piorunochron przy wysokich.</li>
<li>Przed użyciem <b>odbiór rusztowania</b> wpisem do dziennika lub protokołem; przegląd po silnym wietrze, burzy i dłuższej przerwie.</li>
<li>Nie montuje się i nie pracuje na rusztowaniu przy wietrze powyżej ok. <b>10 m/s</b>, w czasie burzy, gołoledzi, po zmroku bez oświetlenia.</li>
<li>Nie składuje się na pomoście materiałów ponad dopuszczalne obciążenie (podane na tabliczce).</li>
</ul>
<h4>Praca na wysokości</h4>
<p>Pracą na wysokości jest praca wykonywana na powierzchni co najmniej <b>1,0 m</b> nad poziomem podłogi lub ziemi. Wymaga badań lekarskich, szkolenia i środków ochrony: barierek, siatek lub <b>szelek bezpieczeństwa</b> z linką i amortyzatorem przypiętych do stałego punktu.</p>
<h4>Strefa niebezpieczna</h4>
<p>Wokół rusztowania i miejsca, z którego mogą spaść przedmioty, wyznacza się <b>strefę niebezpieczną</b> (min. 1/10 wysokości, nie mniej niż 6 m) ogrodzoną barierami lub wykonuje się daszki ochronne nad przejściami.</p>
<div class="tip">Częste pytanie: wysokość poręczy ochronnej na rusztowaniu to 1,1 m, a krawężnika 0,15 m.</div>` },
        { tytul: "Przedmiar robót murowych", tresc: `<h4>Zasady obmiaru murów (KNR)</h4>
<ul>
<li>Mury z cegły i bloczków oblicza się w <b>m²</b> powierzchni ściany o danej grubości (lub w m³ przy fundamentach i murach grubych, zależnie od pozycji katalogu).</li>
<li>Długość mierzy się w osi lub wg zasad katalogu (ściany wewnętrzne w świetle ścian zewnętrznych), wysokość od wierzchu stropu (posadzki konstrukcyjnej) do spodu stropu wyższej kondygnacji.</li>
<li>Typowo potrąca się otwory i wnęki o powierzchni większej niż <b>0,5 m²</b>.</li>
<li>Nadproża, wieńce i słupy żelbetowe w ścianie potrąca się, bo są osobnymi pozycjami.</li>
</ul>
<h4>Przykład</h4>
<p>Ściana z cegły pełnej grubości 25 cm, długość 6,0 m, wysokość 2,8 m, okno 1,5 x 1,5 m, otwór wentylacyjny 0,3 x 0,3 m.</p>
<ul>
<li>powierzchnia brutto: 6,0 × 2,8 = 16,80 m²;</li>
<li>okno 2,25 m² &gt; 0,5 m²: potrąca się; otwór 0,09 m²: nie potrąca się;</li>
<li>netto: 16,80 - 2,25 = <b>14,55 m²</b> muru grubości 1 cegły;</li>
<li>cegły: 14,55 × 100 szt./m² = 1455 szt., przy 3% strat: 1455 × 1,03 = 1498,7, czyli <b>1499 szt.</b>;</li>
<li>zaprawa: 14,55 m² × 0,25 m = 3,64 m³ muru × 0,27 m³/m³ = ok. <b>0,98 m³</b> zaprawy.</li>
</ul>
<h4>Robocizna i czas</h4>
<p>Katalog podaje nakład np. w r-g (roboczogodzinach) na 1 m². Jeżeli nakład wynosi 2,2 r-g/m², to 14,55 × 2,2 = 32,0 r-g. Dwóch murarzy pracujących po 8 h: 32,0 / (2 × 8) = <b>2 dni</b>.</p>
<h4>Ściany z bloczków na cienką spoinę</h4>
<p>Zapotrzebowanie bloczków: 1 / (długość × wysokość bloczka w m). Bloczek 59 x 24 cm: 1 / (0,59 × 0,24) = 7,06, czyli ok. <b>7,1 szt./m²</b>. Zaprawy cienkowarstwowej ok. 1,5-2 kg na 1 m² przy grubości 24 cm (wg producenta, zależnie od grubości ściany).</p>
<div class="tip">W zadaniu egzaminacyjnym tabelę przedmiaru wypełnia się dokładnie: numer pozycji, opis, jednostka, obliczenia, ilość; wynik podaje się z dokładnością wskazaną w poleceniu (często do 2 miejsc po przecinku).</div>` },
        { tytul: "Rozbiórki, przebicia i naprawy murów", tresc: `<h4>Roboty rozbiórkowe</h4>
<ul>
<li>Rozbiórkę prowadzi się <b>od góry do dołu</b>, warstwami, w kolejności odwrotnej do wznoszenia: najpierw elementy wyposażenia i instalacje (po odłączeniu mediów), potem dach, stropy, ściany.</li>
<li>Nie wolno jednocześnie pracować na kilku poziomach w jednym pionie ani podcinać murów, aby je przewrócić bez zgody i planu.</li>
<li>Gruz usuwa się zsypami (rynnami) do kontenera, nie zrzuca swobodnie z wysokości; strefę poniżej wygradza się.</li>
<li>Pył ogranicza się zraszaniem; pracownicy w kaskach, okularach, maskach przeciwpyłowych.</li>
<li>Materiały zawierające <b>azbest</b> usuwa wyłącznie wyspecjalizowana firma z odpowiednią procedurą.</li>
</ul>
<h4>Przebicia otworów w ścianach nośnych</h4>
<ol>
<li>Projekt konstruktora i sprawdzenie, czy ściana jest nośna.</li>
<li>Podstemplowanie stropu po obu stronach ściany.</li>
<li>Wykucie bruzd i osadzenie belek stalowych nadproża (np. dwa dwuteowniki skręcone śrubami) najpierw z jednej, potem z drugiej strony, na podlewce z zaprawy cementowej.</li>
<li>Po związaniu zaprawy wykucie otworu, obrobienie ościeży.</li>
</ol>
<h4>Naprawy murów</h4>
<div class="tw"><table><tr><th>Uszkodzenie</th><th>Naprawa</th></tr>
<tr><td>pojedyncze zniszczone cegły</td><td>wykucie i wymiana na nowe, z pełnym wypełnieniem spoin</td></tr>
<tr><td>pęknięcia muru</td><td>po ustabilizowaniu przyczyny: klamry stalowe, pręty spiralne w spoinach, iniekcja</td></tr>
<tr><td>zawilgocenie kapilarne</td><td>izolacja pozioma metodą iniekcji krystalicznej lub podcinania muru i wkładania folii</td></tr>
<tr><td>zniszczone spoiny</td><td>wydrapanie na głębokość ok. 1,5-2 cm i ponowne spoinowanie</td></tr></table></div>
<h4>Bruzdy instalacyjne</h4>
<p>Bruzdy wycina się bruzdownicą, nie kuje młotem; w ścianach nośnych ich głębokość i szerokość jest ograniczona (zwykle nie więcej niż kilka cm i nie w nadprożach). Bruzd poziomych w ścianach nośnych unika się albo wykonuje je blisko stropu lub posadzki.</p>
<div class="tip">Kolejność rozbiórki to zawsze odwrotność budowy: od góry do dołu, a przebicie w ścianie nośnej wymaga podstemplowania stropu.</div>` }
      ],
      pytania: [
        Q("Poręcz główna na rusztowaniu powinna znajdować się na wysokości:", "1,1 m", "0,5 m", "0,8 m", "2,0 m", "Do tego poręcz pośrednia i krawężnik 0,15 m."),
        Q("Pracą na wysokości jest praca na powierzchni położonej co najmniej:", "1,0 m nad poziomem podłogi lub ziemi", "0,5 m", "2,0 m", "3,0 m", "Definicja z przepisów BHP."),
        Q("Minimalna szerokość pomostu roboczego rusztowania to:", "0,6 m", "0,3 m", "1,2 m", "0,4 m", "Pomost musi być pełny i bez szczelin."),
        Q("Wg typowych zasad przedmiaru murów potrąca się otwory większe niż:", "0,5 m²", "3 m²", "5 m²", "0,1 m²", "Małe otwory pomija się."),
        Q("Ile cegieł (bez strat) potrzeba na 14,55 m² muru o grubości 1 cegły?", "1455", "728", "2910", "400", "Ok. 100 szt./m²."),
        Q("Nakład 32 r-g wykonują 2 murarze po 8 h dziennie w ciągu:", "2 dni", "4 dni", "1 dnia", "8 dni", "32 / (2 × 8) = 2."),
        Q("Rozbiórkę budynku prowadzi się:", "od góry do dołu, w kolejności odwrotnej do wznoszenia", "od fundamentów w górę", "od ścian nośnych", "dowolnie, byle szybko", "Podcinanie dolnych części grozi zawaleniem."),
        Q("Przed wykuciem otworu w ścianie nośnej należy:", "podstemplować strop i osadzić nadproże", "zdjąć tynk z całej ściany", "zalać ścianę wodą", "zamurować drzwi", "Ściana nośna przenosi obciążenie stropu.")
      ]
    }
  ]);

  pod("BUD.14", [
    {
      id: "prawo-budowlane", tytul: "Prawo budowlane w praktyce", opis: "Poprowadzisz formalności budowy od pozwolenia przez dziennik budowy po odbiór i użytkowanie obiektu.",
      lekcje: [
        { tytul: "Pozwolenie, zgłoszenie i rozpoczęcie budowy", tresc: `<h4>Tryby</h4>
<div class="tw"><table><tr><th>Tryb</th><th>Cechy</th></tr>
<tr><td>pozwolenie na budowę</td><td>decyzja starosty (prezydenta miasta na prawach powiatu) lub wojewody; wymaga projektu budowlanego</td></tr>
<tr><td>zgłoszenie</td><td>organ ma <b>21 dni</b> na wniesienie sprzeciwu; po tym terminie można rozpocząć roboty (tzw. milcząca zgoda)</td></tr>
<tr><td>zgłoszenie z projektem</td><td>np. domy jednorodzinne o oddziaływaniu w obrębie działki</td></tr>
<tr><td>bez formalności</td><td>drobne obiekty i roboty wymienione w ustawie (np. remont wewnątrz bez zmiany konstrukcji)</td></tr></table></div>
<h4>Projekt budowlany (od 2020)</h4>
<ul>
<li><b>projekt zagospodarowania działki lub terenu</b>;</li>
<li><b>projekt architektoniczno-budowlany</b> (składany do organu);</li>
<li><b>projekt techniczny</b> (nie składa się go do organu, ale musi być na budowie przed rozpoczęciem robót).</li>
</ul>
<h4>Ważność pozwolenia</h4>
<p>Decyzja wygasa, jeżeli budowa nie została rozpoczęta przed upływem <b>3 lat</b> od dnia, w którym decyzja stała się ostateczna, lub budowa została przerwana na czas dłuższy niż 3 lata.</p>
<h4>Przed rozpoczęciem robót</h4>
<ol>
<li>Uzyskanie dziennika budowy (papierowego z organu lub w systemie <b>EDB</b>, elektronicznego dziennika budowy).</li>
<li>Ustanowienie kierownika budowy (oświadczenie o przyjęciu obowiązków) i w razie potrzeby inspektora nadzoru inwestorskiego.</li>
<li><b>Zawiadomienie</b> organu nadzoru budowlanego (PINB) o zamierzonym terminie rozpoczęcia robót co najmniej <b>7 dni</b> wcześniej.</li>
<li>Wytyczenie geodezyjne obiektu, tablica informacyjna, ogłoszenie z danymi BHP (gdy wymagane), zagospodarowanie placu budowy.</li>
</ol>
<p>Rozpoczęcie budowy następuje z chwilą podjęcia <b>prac przygotowawczych</b> (wytyczenie geodezyjne, niwelacja terenu, zagospodarowanie placu budowy z tymczasowymi obiektami, przyłącza na potrzeby budowy).</p>
<div class="tip">Pułapka: projekt techniczny nie jest zatwierdzany decyzją, ale bez niego nie wolno rozpocząć robót budowlanych.</div>` },
        { tytul: "Uczestnicy procesu i plan BIOZ", tresc: `<h4>Uczestnicy procesu budowlanego</h4>
<div class="tw"><table><tr><th>Uczestnik</th><th>Najważniejsze obowiązki</th></tr>
<tr><td>inwestor</td><td>organizuje proces, zapewnia projekt, kierownika budowy, w razie potrzeby inspektora nadzoru i nadzór autorski</td></tr>
<tr><td>inspektor nadzoru inwestorskiego</td><td>reprezentuje inwestora: kontroluje zgodność z projektem i jakość, sprawdza i odbiera roboty zanikające, uczestniczy w odbiorach</td></tr>
<tr><td>projektant</td><td>opracowuje projekt, sprawuje nadzór autorski na żądanie inwestora, sporządza <b>informację BIOZ</b></td></tr>
<tr><td>kierownik budowy</td><td>prowadzi dziennik, organizuje budowę zgodnie z projektem i przepisami BHP, sporządza <b>plan BIOZ</b>, zgłasza roboty do odbioru</td></tr>
<tr><td>kierownik robót</td><td>kieruje robotami w określonej specjalności (np. instalacyjnej)</td></tr></table></div>
<h4>Plan BIOZ (bezpieczeństwa i ochrony zdrowia)</h4>
<p>Kierownik budowy sporządza go przed rozpoczęciem budowy, gdy:</p>
<ul>
<li>roboty będą trwać dłużej niż <b>30 dni roboczych</b> i jednocześnie będzie zatrudnionych co najmniej <b>20 pracowników</b>, lub</li>
<li>planowany zakres robót przekracza <b>500 osobodni</b>, lub</li>
<li>przewiduje się roboty szczególnie niebezpieczne (np. wykopy powyżej 3 m, prace na wysokości powyżej 5 m, przy liniach energetycznych, z użyciem materiałów wybuchowych, przy zagrożeniu utonięciem, przy montażu ciężkich prefabrykatów).</li>
</ul>
<p>Plan zawiera m.in.: zakres robót i kolejność, istniejące obiekty, elementy zagospodarowania mogące stwarzać zagrożenia, przewidywane zagrożenia, sposób prowadzenia instruktażu, środki zapobiegające zagrożeniom.</p>
<h4>Dziennik budowy</h4>
<ul>
<li>Wpisy dokonują: kierownik budowy i robót, inspektor nadzoru, projektant (nadzór autorski), organy kontroli, geodeta.</li>
<li>Wpisuje się m.in. przebieg robót, zdarzenia, polecenia, odbiory robót zanikających, wyniki prób.</li>
<li>Dziennik jest dokumentem urzędowym; po zakończeniu budowy przechowuje go inwestor.</li>
</ul>
<div class="tip">Informację BIOZ sporządza projektant, a plan BIOZ kierownik budowy. To częste pytanie na egzaminie.</div>` },
        { tytul: "Odbiory, zakończenie budowy i użytkowanie", tresc: `<h4>Rodzaje odbiorów</h4>
<ul>
<li><b>Odbiór robót zanikających i ulegających zakryciu</b>: np. zbrojenie przed betonowaniem, izolacje przeciwwilgociowe przed zasypaniem, instalacje przed zakryciem; dokonuje inspektor nadzoru, wpis do dziennika.</li>
<li><b>Odbiory częściowe</b>: etapy lub elementy robót (np. stan surowy), często podstawa płatności częściowych.</li>
<li><b>Odbiór końcowy</b>: po zakończeniu wszystkich robót, komisyjny, z protokołem i listą usterek z terminem usunięcia.</li>
<li><b>Odbiór pogwarancyjny</b>: przed upływem okresu gwarancji i rękojmi.</li>
</ul>
<h4>Dokumenty do odbioru końcowego</h4>
<ul>
<li>dziennik budowy, oświadczenie kierownika budowy o zgodności wykonania z projektem i przepisami oraz o doprowadzeniu do porządku terenu budowy;</li>
<li>protokoły badań i sprawdzeń (np. instalacji elektrycznej, szczelności gazu, kominiarski);</li>
<li><b>geodezyjna inwentaryzacja powykonawcza</b>;</li>
<li>dokumentacja powykonawcza z naniesionymi zmianami nieistotnymi;</li>
<li>deklaracje właściwości użytkowych wbudowanych wyrobów.</li>
</ul>
<h4>Przystąpienie do użytkowania</h4>
<div class="tw"><table><tr><th>Forma</th><th>Termin</th></tr>
<tr><td>zawiadomienie o zakończeniu budowy</td><td>użytkowanie, jeżeli organ w ciągu <b>14 dni</b> nie wniesie sprzeciwu</td></tr>
<tr><td>pozwolenie na użytkowanie</td><td>decyzja PINB po obowiązkowej kontroli (np. budynki użyteczności publicznej, inne wskazane w ustawie)</td></tr></table></div>
<h4>Rękojmia i gwarancja</h4>
<p><b>Rękojmia</b> wynika z Kodeksu cywilnego (przy budynkach 5 lat od wydania), <b>gwarancja</b> to dobrowolne zobowiązanie wykonawcy określone w umowie (czas i zakres w karcie gwarancyjnej). W zamówieniach publicznych może być żądane zabezpieczenie należytego wykonania umowy.</p>
<h4>Książka obiektu budowlanego</h4>
<p>Prowadzi ją właściciel lub zarządca (dla wielu obiektów elektronicznie w c-KOB); dokumentuje przeglądy okresowe: <b>coroczne</b> (instalacje gazowe, przewody kominowe, elementy narażone na wpływy atmosferyczne) i <b>pięcioletnie</b> (stan techniczny, instalacja elektryczna i piorunochronna).</p>
<div class="tip">Zbrojenie przed zabetonowaniem to klasyczny przykład roboty zanikającej: bez wpisu odbioru do dziennika nie wolno betonować.</div>` }
      ],
      pytania: [
        Q("Organ może wnieść sprzeciw do zgłoszenia robót budowlanych w terminie:", "21 dni", "7 dni", "14 dni", "30 dni", "Po bezskutecznym upływie terminu można rozpocząć roboty."),
        Q("O zamierzonym terminie rozpoczęcia robót zawiadamia się nadzór budowlany co najmniej:", "7 dni wcześniej", "1 dzień wcześniej", "30 dni wcześniej", "nie trzeba zawiadamiać", "Zawiadomienie wraz z oświadczeniem kierownika budowy."),
        Q("Plan BIOZ sporządza:", "kierownik budowy", "projektant", "inwestor", "wojewoda", "Projektant sporządza informację BIOZ."),
        Q("Plan BIOZ jest wymagany m.in., gdy planowany zakres robót przekracza:", "500 osobodni", "50 osobodni", "100 roboczogodzin", "10 dni roboczych", "Lub > 30 dni roboczych i ≥ 20 pracowników jednocześnie."),
        Q("Pozwolenie na budowę wygasa, gdy budowy nie rozpoczęto przed upływem:", "3 lat od uprawomocnienia decyzji", "1 roku", "6 miesięcy", "10 lat", "Także przy przerwie dłuższej niż 3 lata."),
        Q("Przykładem roboty zanikającej jest:", "zbrojenie przed betonowaniem", "malowanie ścian", "montaż drzwi", "układanie paneli", "Po zabetonowaniu nie można jej sprawdzić."),
        Q("Po zawiadomieniu o zakończeniu budowy organ może wnieść sprzeciw w terminie:", "14 dni", "21 dni", "3 dni", "60 dni", "Brak sprzeciwu pozwala użytkować obiekt."),
        Q("Projekt techniczny:", "nie jest składany do organu, ale musi być na budowie przed rozpoczęciem robót", "jest zatwierdzany decyzją starosty", "jest zbędny przy pozwoleniu na budowę", "sporządza go kierownik budowy", "Od 2020 projekt budowlany ma trzy części.")
      ]
    },
    {
      id: "przedmiar", tytul: "Przedmiar i obmiar robót", opis: "Sporządzisz przedmiar na podstawie dokumentacji i zasad katalogów KNR.",
      lekcje: [
        { tytul: "Katalogi KNR i struktura przedmiaru", tresc: `<h4>Przedmiar a obmiar</h4>
<ul>
<li><b>Przedmiar</b>: zestawienie robót z ilościami obliczonymi <b>z dokumentacji projektowej</b> przed wykonaniem (podstawa kosztorysu inwestorskiego i ofertowego).</li>
<li><b>Obmiar</b>: pomiar <b>robót faktycznie wykonanych</b> na budowie (podstawa kosztorysu powykonawczego i rozliczenia).</li>
</ul>
<h4>Katalogi nakładów rzeczowych</h4>
<p>KNR podają nakłady <b>robocizny (r-g)</b>, <b>materiałów</b> i <b>pracy sprzętu (m-g)</b> na jednostkę przedmiarową. Przykłady: KNR 2-01 roboty ziemne, KNR 2-02 konstrukcje budowlane (mury, tynki, posadzki), KNR 4-01 remonty, KNR 2-15 instalacje. Oznaczenie pozycji np. <b>KNR 2-02 0126-01</b>: katalog 2-02, tablica 0126, kolumna 01.</p>
<h4>Struktura tabeli przedmiaru</h4>
<div class="tw"><table><tr><th>Lp.</th><th>Podstawa</th><th>Opis</th><th>j.m.</th><th>Obliczenia</th><th>Ilość</th></tr>
<tr><td>1</td><td>KNR 2-02 ...</td><td>Ściany z cegły pełnej gr. 25 cm na zaprawie cem.-wap.</td><td>m²</td><td>6,0 × 2,8 - 1,5 × 1,5</td><td>14,55</td></tr></table></div>
<h4>Założenia ogólne</h4>
<ul>
<li>Przed obliczeniami czyta się <b>założenia szczegółowe</b> rozdziału katalogu: jak mierzyć długość i wysokość, które otwory się potrąca, co jest wliczone w nakład (np. rusztowania, transport pionowy).</li>
<li>Jednostki: m, m², m³, kg, t, szt., kpl.; ilość podaje się zwykle z dokładnością do 2 miejsc po przecinku.</li>
<li>Kolejność pozycji zgodna z technologią: roboty przygotowawcze, ziemne, fundamenty, mury, stropy, dach, wykończenie.</li>
</ul>
<h4>Specyfikacja techniczna (STWiORB)</h4>
<p>Szczegółowa specyfikacja techniczna wykonania i odbioru robót budowlanych opisuje wymagania materiałowe, technologię, kontrolę jakości, <b>zasady obmiaru</b> i odbioru. W zamówieniach publicznych przedmiar, STWiORB i projekt tworzą opis przedmiotu zamówienia.</p>
<div class="tip">Na egzaminie BUD.14 rubrykę „obliczenia” wypełnia się działaniem, nie tylko wynikiem; sprawdzający ocenia, czy dobrze potrącono otwory.</div>` },
        { tytul: "Przedmiar robót ziemnych i fundamentów", tresc: `<h4>Roboty ziemne</h4>
<ul>
<li>Wykopy oblicza się w <b>m³</b> objętości gruntu w stanie rodzimym (bez spulchnienia).</li>
<li>Wykop szerokoprzestrzenny o skarpach: przybliżenie wzorem na objętość ostrosłupa ściętego lub ze średniej powierzchni: V = h/6 × (F1 + 4·Fs + F2) (wzór Simpsona), w prostych zadaniach V = h × (F1 + F2)/2.</li>
<li>Kategoria gruntu (I-IV dla robót ziemnych) wpływa na nakład pracy; podaje ją projekt lub badania geotechniczne.</li>
<li>Wykop pod ławy (wąskoprzestrzenny): szerokość dna = szerokość ławy + przestrzeń robocza (np. po 0,3-0,5 m z każdej strony, gdy wymaga tego deskowanie lub izolacja).</li>
</ul>
<h4>Przykład: wykop pod ławę</h4>
<p>Ława 0,6 m szer., obwód (w osi) 36 m, wykop o pionowych ścianach, przestrzeń robocza po 0,3 m, głębokość 1,2 m.</p>
<ul><li>szerokość wykopu: 0,6 + 2 × 0,3 = 1,2 m;</li>
<li>objętość: 36 × 1,2 × 1,2 = <b>51,84 m³</b>.</li></ul>
<h4>Ławy i ściany fundamentowe</h4>
<ul>
<li>Beton ław w <b>m³</b>: 36 × 0,6 × 0,4 (wysokość ławy) = <b>8,64 m³</b>.</li>
<li>Zbrojenie w <b>kg lub t</b> wg zestawienia stali: długość prętów × masa jednostkowa (np. Ø12: 0,888 kg/m, Ø6: 0,222 kg/m).</li>
<li>Deskowanie w <b>m²</b> powierzchni styku betonu z deskowaniem: 2 boki × 36 × 0,4 = 28,80 m².</li>
<li>Izolacja przeciwwilgociowa ścian fundamentowych w m², pozioma w m² lub mb wg pozycji.</li>
</ul>
<h4>Zasypki i wywóz</h4>
<p>Zasypka = objętość wykopu - objętość fundamentów poniżej terenu. Wywóz nadmiaru gruntu liczy się w m³ z uwzględnieniem odległości (np. dodatek za każdy kolejny 1 km). Współczynnik spulchnienia uwzględnia się przy transporcie, gdy wymaga tego treść.</p>
<div class="tip">Masa prętów: m = 0,00617 × d² kg/m (d w mm). Dla Ø12: 0,00617 × 144 = 0,888 kg/m.</div>` },
        { tytul: "Przedmiar robót wykończeniowych: zadanie", tresc: `<h4>Dane</h4>
<p>Pokój 5,0 x 4,0 m, wysokość 2,7 m. Okno 1,5 x 1,5 m (ościeże 0,25 m), drzwi 0,9 x 2,1 m. Do wykonania: tynk cementowo-wapienny kat. III ścian i sufitu, dwukrotne malowanie farbą emulsyjną, posadzka z paneli, listwy przypodłogowe.</p>
<h4>Obliczenia (zasady jak w KNR)</h4>
<div class="tw"><table><tr><th>Lp.</th><th>Robota</th><th>Obliczenia</th><th>Ilość</th></tr>
<tr><td>1</td><td>tynk ścian</td><td>2 × (5,0 + 4,0) × 2,7 = 48,60; okno 2,25 m² i drzwi 1,89 m² są ≤ 3 m², nie potrąca się</td><td>48,60 m²</td></tr>
<tr><td>2</td><td>tynk sufitu</td><td>5,0 × 4,0</td><td>20,00 m²</td></tr>
<tr><td>3</td><td>malowanie ścian</td><td>48,60 - 2,25 - 1,89 + ościeża okna (2 × 1,5 + 1,5) × 0,25 = 1,13</td><td>45,59 m²</td></tr>
<tr><td>4</td><td>malowanie sufitu</td><td>5,0 × 4,0</td><td>20,00 m²</td></tr>
<tr><td>5</td><td>panele</td><td>5,0 × 4,0</td><td>20,00 m²</td></tr>
<tr><td>6</td><td>listwy przypodłogowe</td><td>2 × (5,0 + 4,0) - 0,9</td><td>17,10 m</td></tr></table></div>
<p>Uwaga: zasady potrąceń przy malowaniu przyjęto tu w uproszczeniu (malowanie wg rzeczywistej powierzchni); w zadaniu zawsze obowiązują zasady podane w treści.</p>
<h4>Zestawienie materiałów</h4>
<ul>
<li>Farba: wydajność 8 m²/l, 2 warstwy: (45,59 + 20,00) × 2 / 8 = <b>16,40 l</b>.</li>
<li>Panele: 20,00 m² + 5% = 21,00 m², paczka 2,4 m²: 21,00 / 2,4 = 8,75, czyli <b>9 paczek</b>.</li>
<li>Listwy 2,5 m: 17,10 / 2,5 = 6,84, czyli <b>7 szt.</b></li>
</ul>
<h4>Najczęstsze błędy</h4>
<ul>
<li>Liczenie tynku ścian po odjęciu wszystkich otworów, gdy zasady każą nie potrącać małych.</li>
<li>Zapominanie o ościeżach przy otworach potrącanych.</li>
<li>Pomieszanie jednostek (m i m²) i brak zaokrągleń do pełnych opakowań przy materiałach.</li>
<li>Pominięcie robót towarzyszących (gruntowanie, zabezpieczenie folią), jeśli są osobnymi pozycjami w treści.</li>
</ul>
<div class="tip">Ilość w przedmiarze zaokrągla się do 2 miejsc po przecinku, a zakup materiałów zawsze w górę do pełnych sztuk lub opakowań.</div>` }
      ],
      pytania: [
        Q("Przedmiar robót sporządza się na podstawie:", "dokumentacji projektowej przed wykonaniem robót", "pomiarów robót już wykonanych", "faktur za materiały", "dziennika budowy po odbiorze", "Obmiar dotyczy robót wykonanych."),
        Q("W oznaczeniu KNR 2-02 0126-01 liczba 0126 to:", "numer tablicy", "numer kolumny", "numer katalogu", "liczba roboczogodzin", "2-02 katalog, 0126 tablica, 01 kolumna."),
        Q("Wykopy oblicza się w:", "m³ gruntu w stanie rodzimym", "m² powierzchni terenu", "tonach urobku", "m gruntu", "Objętość bez spulchnienia."),
        Q("Objętość wykopu 36 m x 1,2 m x 1,2 m wynosi:", "51,84 m³", "43,20 m³", "86,40 m³", "25,92 m³", "36 × 1,2 × 1,2."),
        Q("Masa 1 m pręta Ø12 wynosi około:", "0,888 kg", "0,222 kg", "1,58 kg", "0,395 kg", "0,00617 × 12² = 0,888."),
        Q("Deskowanie ław fundamentowych oblicza się w:", "m² powierzchni styku z betonem", "m³", "kg", "mb ławy bez względu na wysokość", "Liczy się boki ławy."),
        Q("Szczegółowe zasady obmiaru danej roboty określa m.in.:", "STWiORB i założenia katalogu KNR", "dziennik budowy", "plan BIOZ", "pozwolenie na budowę", "Specyfikacja techniczna wykonania i odbioru robót."),
        Q("Ilość farby na 65,59 m² przy dwóch warstwach i wydajności 8 m²/l wynosi ok.:", "16,40 l", "8,20 l", "32,80 l", "4,10 l", "65,59 × 2 / 8 = 16,40.")
      ]
    },
    {
      id: "kosztorys", tytul: "Kosztorysowanie", opis: "Obliczysz wartość kosztorysową metodą szczegółową i uproszczoną oraz dobierzesz rodzaj kosztorysu.",
      lekcje: [
        { tytul: "Składniki ceny i metoda szczegółowa", tresc: `<h4>Składniki</h4>
<ul>
<li><b>R</b>: robocizna = nakład r-g × ilość × stawka za r-g;</li>
<li><b>M</b>: materiały = nakład × ilość × cena jednostkowa (+ koszty zakupu <b>Kz</b> jako % od M);</li>
<li><b>S</b>: sprzęt = nakład m-g × ilość × cena m-g;</li>
<li><b>Kp</b>: koszty pośrednie, zwykle % od (R + S);</li>
<li><b>Z</b>: zysk, zwykle % od (R + S + Kp od R i S);</li>
<li><b>VAT</b> doliczany do wartości netto (8% lub 23%).</li>
</ul>
<h4>Wzór metody szczegółowej</h4>
<p><b>C = Σ L × (Σ n·c + Kp + Z)</b>, gdzie L to ilość jednostek przedmiarowych, n nakład rzeczowy, c cena jednostkowa nakładu.</p>
<h4>Przykład</h4>
<p>Ściana 50 m². Nakłady na 1 m²: robocizna 2,0 r-g, cegły 100 szt., zaprawa 0,07 m³, betoniarka 0,05 m-g. Ceny: r-g 40 zł, cegła 1,50 zł, zaprawa 300 zł/m³, m-g betoniarki 20 zł. Kp 60% (R+S), Z 10% (R+S+Kp), Kz 5% M.</p>
<div class="tw"><table><tr><th>Składnik</th><th>Obliczenie</th><th>zł</th></tr>
<tr><td>R</td><td>50 × 2,0 × 40</td><td>4 000,00</td></tr>
<tr><td>M</td><td>50 × (100 × 1,50 + 0,07 × 300) = 50 × 171</td><td>8 550,00</td></tr>
<tr><td>Kz</td><td>5% × 8 550</td><td>427,50</td></tr>
<tr><td>S</td><td>50 × 0,05 × 20</td><td>50,00</td></tr>
<tr><td>Kp</td><td>60% × (4 000 + 50)</td><td>2 430,00</td></tr>
<tr><td>Z</td><td>10% × (4 000 + 50 + 2 430)</td><td>648,00</td></tr>
<tr><td>razem netto</td><td>R + M + Kz + S + Kp + Z</td><td><b>16 105,50</b></td></tr>
<tr><td>VAT 23%</td><td>0,23 × 16 105,50</td><td>3 704,27</td></tr>
<tr><td>brutto</td><td></td><td>19 809,77</td></tr></table></div>
<p>Cena jednostkowa netto: 16 105,50 / 50 = <b>322,11 zł/m²</b>.</p>
<div class="tip">Zawsze czytaj w treści, od czego liczy się narzuty. Gdy Kp liczy się od R + S, materiały nie wchodzą do podstawy Kp ani Z.</div>` },
        { tytul: "Metoda uproszczona i rodzaje kosztorysów", tresc: `<h4>Metoda uproszczona</h4>
<p><b>Wk = Σ L × Cj</b>, gdzie Cj to cena jednostkowa roboty obejmująca R, M, S, Kp i Z (z cennika, bazy cen lub kalkulacji własnej). Przykład: tynk 120 m² × 38,50 zł/m² = 4 620,00 zł netto; malowanie 150 m² × 14,20 zł/m² = 2 130,00 zł; razem 6 750,00 zł netto.</p>
<h4>Rodzaje kosztorysów</h4>
<div class="tw"><table><tr><th>Kosztorys</th><th>Kto i kiedy</th></tr>
<tr><td>inwestorski</td><td>sporządza inwestor (projektant) przed przetargiem, do ustalenia wartości zamówienia; metoda uproszczona, ceny średnie</td></tr>
<tr><td>ofertowy</td><td>wykonawca w przetargu, wg własnych cen i narzutów</td></tr>
<tr><td>umowny</td><td>wynik negocjacji, załącznik do umowy</td></tr>
<tr><td>zamienny</td><td>gdy zmieniono rozwiązania lub materiały w trakcie realizacji</td></tr>
<tr><td>dodatkowy (uzupełniający)</td><td>na roboty nieprzewidziane w umowie</td></tr>
<tr><td>powykonawczy</td><td>po zakończeniu, na podstawie obmiaru robót wykonanych</td></tr>
<tr><td>szacunkowy (wskaźnikowy)</td><td>na etapie koncepcji, wg wskaźników ceny za m² lub m³</td></tr></table></div>
<h4>Wynagrodzenie ryczałtowe a kosztorysowe</h4>
<ul>
<li><b>Ryczałtowe</b>: stała cena za cały zakres; ryzyko ilości ponosi wykonawca; przedmiar ma charakter pomocniczy.</li>
<li><b>Kosztorysowe</b>: zapłata za faktycznie wykonane ilości wg cen jednostkowych z kosztorysu ofertowego.</li>
</ul>
<h4>Stawki VAT w budownictwie</h4>
<ul>
<li><b>8%</b>: budowa, remont, modernizacja obiektów budownictwa objętego społecznym programem mieszkaniowym (lokale do 150 m², domy jednorodzinne do 300 m²; nadwyżkę liczy się 23%).</li>
<li><b>23%</b>: pozostałe obiekty, np. budynki usługowe, garaże wolnostojące, lokale ponad limit.</li>
</ul>
<h4>Programy kosztorysowe</h4>
<p>Programy (np. Norma, Rodos, Zuzia) zawierają bazy KNR i cen (np. Sekocenbud, Intercenbud), automatycznie liczą R, M, S i narzuty, tworzą przedmiar, kosztorys, zestawienie materiałów i robocizny. W zadaniu praktycznym zwykle liczy się „ręcznie” w arkuszu lub tabeli.</p>
<div class="tip">Kosztorys inwestorski służy do ustalenia wartości zamówienia, a ofertowy to cena wykonawcy. Kosztorys powykonawczy opiera się na obmiarze.</div>` },
        { tytul: "Zestawienia, ceny i kontrola kosztów", tresc: `<h4>Zestawienia w kosztorysie</h4>
<ul>
<li><b>Zestawienie materiałów</b>: suma ilości każdego materiału ze wszystkich pozycji (np. cegły, zaprawa, cement), z ceną i wartością; podstawa zamówień.</li>
<li><b>Zestawienie robocizny</b>: łączna liczba r-g, z podziałem na zawody, podstawa planowania brygad.</li>
<li><b>Zestawienie sprzętu</b>: m-g pracy maszyn.</li>
<li><b>Tabela elementów scalonych</b>: wartości grup robót (np. stan zero, stan surowy, wykończenie), często podstawa płatności częściowych.</li>
</ul>
<h4>Źródła cen</h4>
<p>Ceny czynników produkcji: własne kalkulacje wykonawcy, oferty dostawców, wydawnictwa cenowe (np. Sekocenbud) z cenami średnimi i minimalnymi/maksymalnymi dla regionu. Stawka r-g obejmuje płacę i koszty pracodawcy (składki), ale narzuty Kp i Z liczy się osobno.</p>
<h4>Przykład kontroli kosztów</h4>
<p>Planowany koszt etapu: 120 000 zł. Po 50% czasu wykonano roboty wartości 54 000 zł (wg cen kosztorysowych), a poniesiono koszty 61 000 zł.</p>
<ul>
<li>Odchylenie kosztowe: 54 000 - 61 000 = <b>-7 000 zł</b> (przekroczenie kosztów).</li>
<li>Postęp: 54 000 / 120 000 = 45% zamiast planowanych 50%, czyli opóźnienie rzeczowe.</li>
<li>Działania: analiza przyczyn (ceny materiałów, wydajność brygad, przestoje), korekta harmonogramu, ewentualny kosztorys zamienny przy zmianach projektowych.</li>
</ul>
<h4>Waloryzacja i rozliczenie</h4>
<ul>
<li>Przy umowach długoterminowych stosuje się klauzule <b>waloryzacyjne</b> (np. wg wskaźnika cen GUS).</li>
<li>Roboty dodatkowe rozlicza się na podstawie protokołu konieczności i kosztorysu dodatkowego, z cenami uzgodnionymi wcześniej z inwestorem.</li>
<li>Faktury częściowe wystawia się po protokolarnym odbiorze częściowym, z potrąceniem ewentualnych kaucji gwarancyjnych.</li>
</ul>
<div class="tip">W zadaniu praktycznym BUD.14 wynik końcowy kosztorysu podaje się netto, kwotę VAT i brutto, a wszystkie kwoty z dokładnością do grosza.</div>` }
      ],
      pytania: [
        Q("Koszty pośrednie (Kp) w metodzie szczegółowej najczęściej oblicza się jako procent od:", "robocizny i sprzętu (R + S)", "materiałów", "wartości brutto", "zysku", "Materiały mają osobno koszty zakupu Kz."),
        Q("Wzór C = Σ L × Cj opisuje metodę kalkulacji:", "uproszczoną", "szczegółową", "wskaźnikową", "powykonawczą", "Cj zawiera już wszystkie narzuty."),
        Q("R = 50 m² × 2,0 r-g/m² × 40 zł/r-g wynosi:", "4 000 zł", "2 000 zł", "100 zł", "8 000 zł", "50 × 2 × 40 = 4 000."),
        Q("Kosztorys sporządzany po zakończeniu robót na podstawie obmiaru to kosztorys:", "powykonawczy", "inwestorski", "ofertowy", "szacunkowy", "Opiera się na ilościach wykonanych."),
        Q("Kosztorys inwestorski służy przede wszystkim do:", "ustalenia wartości zamówienia przed przetargiem", "rozliczenia robót dodatkowych", "zamówienia materiałów przez wykonawcę", "ustalenia wynagrodzenia brygady", "Sporządza go inwestor lub projektant."),
        Q("Remont mieszkania o powierzchni 70 m² objęty jest stawką VAT:", "8%", "23%", "5%", "0%", "Budownictwo objęte społecznym programem mieszkaniowym (lokal do 150 m²)."),
        Q("Przy wynagrodzeniu ryczałtowym ryzyko błędów w ilościach robót ponosi zazwyczaj:", "wykonawca", "inwestor", "projektant", "nadzór budowlany", "Cena jest stała niezależnie od ilości."),
        Q("Kosztorys zamienny sporządza się, gdy:", "w trakcie robót zmieniono rozwiązania lub materiały", "inwestor ogłasza przetarg", "budowa zakończyła się bez zmian", "trzeba ustalić ubezpieczenie budowy", "Zmienia pozycje kosztorysu umownego.")
      ]
    },
    {
      id: "harmonogram", tytul: "Harmonogram i kontrola jakości", opis: "Ułożysz harmonogram robót z brygadami, wyznaczysz ścieżkę krytyczną i zaplanujesz kontrolę jakości.",
      lekcje: [
        { tytul: "Czas trwania robót i brygady", tresc: `<h4>Wzór</h4>
<p><b>T = (L × n) / (N × t × w)</b></p>
<ul>
<li>T: czas w dniach roboczych;</li>
<li>L: ilość robót (z przedmiaru), n: nakład r-g na jednostkę;</li>
<li>N: liczba robotników, t: czas zmiany (zwykle 8 h);</li>
<li>w: wskaźnik wykonania normy (np. 1,0 lub 1,1 przy 110%).</li>
</ul>
<h4>Przykład</h4>
<p>Tynk 600 m², nakład 0,9 r-g/m², brygada 5 tynkarzy, 8 h, normy 100%.</p>
<p>Pracochłonność: 600 × 0,9 = <b>540 r-g</b>. T = 540 / (5 × 8) = <b>13,5 dnia</b>, czyli 14 dni roboczych. Jeżeli wymagany termin to 10 dni: N = 540 / (10 × 8) = 6,75, potrzeba <b>7 tynkarzy</b>.</p>
<h4>Dobór sprzętu</h4>
<p>Czas pracy maszyny: T = ilość robót / (wydajność eksploatacyjna × czas zmiany). Koparka o wydajności 25 m³/h przy wykopie 800 m³: 800 / 25 = 32 h, czyli 4 zmiany 8-godzinne. Liczba środków transportu dobiera się tak, aby koparka nie czekała (cykl wozidła ≥ czas załadunku × liczba wozideł).</p>
<h4>Metody organizacji robót</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th></tr>
<tr><td>kolejna (szeregowa)</td><td>roboty na kolejnych działkach jedna po drugiej; najdłuższy czas, mała liczba robotników</td></tr>
<tr><td>równoczesna</td><td>wszystkie działki naraz; najkrótszy czas, duże zatrudnienie i zapotrzebowanie na sprzęt</td></tr>
<tr><td>równomierna (potokowa)</td><td>brygady specjalistyczne przechodzą z działki na działkę w stałym rytmie; równomierne zatrudnienie, dobra wydajność</td></tr></table></div>
<h4>Przerwy technologiczne</h4>
<p>W harmonogramie uwzględnia się przerwy: dojrzewanie betonu przed rozdeskowaniem (np. 7-28 dni zależnie od elementu i pogody), wysychanie tynków przed malowaniem, sezonowanie jastrychów (ok. 1 tydzień na 1 cm). Brak przerw powoduje wady jakości.</p>
<div class="tip">Wynik czasu zawsze zaokrąglaj w górę do pełnych dni, a liczbę robotników w górę do pełnych osób.</div>` },
        { tytul: "Harmonogram Gantta i sieć zależności", tresc: `<h4>Harmonogram Gantta (paskowy)</h4>
<p>Tabela robót z ilościami, pracochłonnością, liczbą robotników i czasem, a obok oś czasu z paskami. Pod spodem często <b>wykres zatrudnienia</b> (liczba pracowników w kolejnych dniach); powinien być możliwie równomierny, bez nagłych skoków.</p>
<h4>Zależności między robotami</h4>
<ul>
<li><b>Zakończenie-rozpoczęcie (ZR)</b>: najczęstsza, np. tynki po zakończeniu instalacji podtynkowych.</li>
<li><b>Rozpoczęcie-rozpoczęcie (RR)</b> z przesunięciem: np. murowanie drugiej działki może zacząć się po 2 dniach murowania pierwszej.</li>
<li><b>Zakończenie-zakończenie (ZZ)</b>.</li>
</ul>
<h4>Ścieżka krytyczna (CPM)</h4>
<p>Ścieżka krytyczna to najdłuższy ciąg czynności od początku do końca przedsięwzięcia; czynności na niej mają <b>zerowy zapas czasu</b>, a ich opóźnienie opóźnia całą budowę.</p>
<h4>Przykład</h4>
<div class="tw"><table><tr><th>Czynność</th><th>Czas [dni]</th><th>Poprzedniki</th></tr>
<tr><td>A wykopy</td><td>3</td><td>-</td></tr>
<tr><td>B fundamenty</td><td>5</td><td>A</td></tr>
<tr><td>C przyłącza</td><td>4</td><td>A</td></tr>
<tr><td>D ściany parteru</td><td>8</td><td>B</td></tr>
<tr><td>E zasypanie i izolacja</td><td>2</td><td>B, C</td></tr></table></div>
<ul>
<li>A-B-D: 3 + 5 + 8 = <b>16 dni</b> (ścieżka krytyczna);</li>
<li>A-B-E: 3 + 5 + 2 = 10 dni; A-C-E: 3 + 4 + 2 = 9 dni;</li>
<li>Zapas czasu C: E może zacząć się najwcześniej po B (dzień 8), C kończy się w dniu 7, a E może skończyć się najpóźniej w dniu 16, więc C ma zapas: (16 - 2) - 7 = 7 dni.</li>
</ul>
<h4>Harmonogramy pomocnicze</h4>
<ul><li>harmonogram dostaw materiałów (z wyprzedzeniem wg terminów produkcji);</li>
<li>harmonogram pracy sprzętu (dźwig, betonowanie);</li>
<li>harmonogram rzeczowo-finansowy (wartości robót w miesiącach, podstawa finansowania).</li></ul>
<div class="tip">Aby skrócić budowę, skraca się czynności leżące na ścieżce krytycznej (więcej ludzi, druga zmiana); skracanie innych nie zmienia terminu końcowego.</div>` },
        { tytul: "Kontrola jakości i dokumentacja budowy", tresc: `<h4>Etapy kontroli</h4>
<ol>
<li><b>Kontrola materiałów</b> przy dostawie: zgodność z zamówieniem i projektem, deklaracja właściwości użytkowych, oznakowanie CE lub B, stan opakowań, termin.</li>
<li><b>Kontrola międzyoperacyjna</b>: każda faza przed rozpoczęciem następnej (np. podłoże przed tynkiem, zbrojenie przed betonowaniem).</li>
<li><b>Kontrola końcowa</b>: pomiary i oględziny przy odbiorze.</li>
</ol>
<h4>Narzędzia i badania</h4>
<div class="tw"><table><tr><th>Element</th><th>Sprawdzenie</th></tr>
<tr><td>beton</td><td>próbki sześcienne 150 mm do badań wytrzymałości (po 28 dniach), konsystencja metodą opadu stożka, sklerometr na elementach</td></tr>
<tr><td>zbrojenie</td><td>średnice, rozstaw, otulina (dystanse), długości zakładów</td></tr>
<tr><td>mury, tynki</td><td>pion, poziom, płaskość łatą 2 m, grubość spoin</td></tr>
<tr><td>posadzki</td><td>wilgotność CM, równość, spadki</td></tr>
<tr><td>instalacje</td><td>próby szczelności, pomiary elektryczne, protokoły</td></tr></table></div>
<h4>Dokumentacja budowy</h4>
<ul>
<li>pozwolenie na budowę lub zgłoszenie, projekt budowlany i techniczny;</li>
<li>dziennik budowy, protokoły odbiorów częściowych i końcowych;</li>
<li>książka obmiarów (jeśli prowadzona), dokumentacja geodezyjna;</li>
<li>plan BIOZ, dokumenty szkoleń BHP pracowników;</li>
<li>dokumenty materiałów i wyniki badań laboratoryjnych.</li>
</ul>
<h4>Postępowanie z niezgodnościami</h4>
<p>Wadę zgłasza się wpisem do dziennika i protokołem; wykonawca ustala przyczynę, proponuje naprawę (lub wymianę elementu), inspektor nadzoru akceptuje sposób i odbiera naprawę. Wadę istotną, której nie da się usunąć, rozlicza się obniżeniem wynagrodzenia lub ponownym wykonaniem.</p>
<h4>Zagospodarowanie placu budowy</h4>
<p>Plan zagospodarowania wskazuje: ogrodzenie i bramy, drogi tymczasowe (szerokość min. ok. 3,5 m przy ruchu jednokierunkowym), składowiska, zaplecze socjalne (szatnie, umywalnie, jadalnia, ustępy), miejsce pracy dźwigu ze strefą niebezpieczną, przyłącza wody i prądu, punkt pierwszej pomocy i sprzęt ppoż.</p>
<div class="tip">Próbki betonu do badania wytrzymałości to standardowo sześciany 150 x 150 x 150 mm badane po 28 dniach.</div>` }
      ],
      pytania: [
        Q("Pracochłonność 540 r-g wykona 5-osobowa brygada pracująca po 8 h w ciągu:", "13,5 dnia (14 dni roboczych)", "10 dni", "27 dni", "5 dni", "540 / (5 × 8) = 13,5."),
        Q("Ścieżka krytyczna to:", "najdłuższy ciąg czynności, w którym czynności mają zerowy zapas czasu", "najkrótszy ciąg czynności", "kolejność dostaw materiałów", "trasa dojazdu na budowę", "Opóźnienie na ścieżce krytycznej opóźnia całość."),
        Q("Metoda organizacji, w której brygady specjalistyczne przechodzą rytmicznie z działki na działkę, to metoda:", "równomierna (potokowa)", "kolejna", "równoczesna", "ryczałtowa", "Daje równomierne zatrudnienie."),
        Q("Ile tynkarzy potrzeba, aby 540 r-g wykonać w 10 dni po 8 h?", "7", "5", "6", "10", "540 / 80 = 6,75, w górę do 7."),
        Q("Standardowe próbki betonu do badania wytrzymałości na ściskanie to:", "sześciany 150 mm badane po 28 dniach", "walce 50 mm po 3 dniach", "belki 1 m po 7 dniach", "kostki 50 mm po roku", "Klasa betonu odnosi się do 28 dni."),
        Q("Aby skrócić czas całej budowy, należy skrócić czynności:", "leżące na ścieżce krytycznej", "mające największy zapas czasu", "dowolne", "wykonywane na końcu", "Tylko one wyznaczają termin końcowy."),
        Q("Konsystencję mieszanki betonowej na budowie bada się najczęściej:", "metodą opadu stożka", "sklerometrem", "łatą 2 m", "metodą karbidową", "Opad stożka Abramsa."),
        Q("Wykres zatrudnienia pod harmonogramem Gantta powinien być:", "możliwie równomierny", "jak najbardziej zmienny", "zawsze malejący", "niepotrzebny", "Równomierne zatrudnienie ułatwia organizację.")
      ]
    }
  ]);

  pod("FRK.01", [
    {
      id: "diagnoza", tytul: "Diagnoza włosów i skóry głowy", opis: "Przeprowadzisz wywiad i próby diagnostyczne, rozpoznasz przeciwwskazania i dobierzesz usługę.",
      lekcje: [
        { tytul: "Budowa chemiczna i cykl życia włosa", tresc: `<h4>Wiązania w keratynie</h4>
<div class="tw"><table><tr><th>Wiązanie</th><th>Siła</th><th>Co je zrywa</th><th>Znaczenie w salonie</th></tr>
<tr><td>wodorowe</td><td>słabe, liczne</td><td>woda, ciepło</td><td>modelowanie, nawijanie na mokro, prostownica (efekt nietrwały)</td></tr>
<tr><td>solne (jonowe)</td><td>słabe</td><td>zmiana pH</td><td>pęcznienie włosa w środowisku zasadowym</td></tr>
<tr><td>dwusiarczkowe (cystynowe)</td><td>bardzo mocne</td><td>reduktory (tioglikolan)</td><td>trwała ondulacja, prostowanie chemiczne</td></tr></table></div>
<h4>Warstwy włosa</h4>
<ul>
<li><b>Łuska (kutikula)</b>: 6-10 warstw zachodzących komórek; zamknięta odbija światło (połysk), otwiera się w pH zasadowym.</li>
<li><b>Kora</b>: ok. 80-90% masy włosa, keratyna i pigment (eumelanina brązowo-czarna, feomelanina żółto-czerwona); decyduje o wytrzymałości i elastyczności.</li>
<li><b>Rdzeń</b>: w grubych włosach, często nieobecny w cienkich.</li>
</ul>
<h4>Fazy wzrostu</h4>
<div class="tw"><table><tr><th>Faza</th><th>Czas</th><th>Udział włosów</th></tr>
<tr><td>anagen (wzrost)</td><td>2-7 lat</td><td>ok. 85-90%</td></tr>
<tr><td>katagen (przejściowa)</td><td>2-3 tygodnie</td><td>ok. 1%</td></tr>
<tr><td>telogen (spoczynek, wypadanie)</td><td>2-4 miesiące</td><td>ok. 10-15%</td></tr></table></div>
<p>Włos rośnie ok. <b>1 cm na miesiąc</b> (ok. 0,3-0,4 mm na dobę). Na głowie jest ok. 100-150 tys. włosów; normalna utrata to ok. 50-100 dziennie. pH skóry i włosów wynosi ok. <b>4,5-5,5</b>.</p>
<h4>Typy włosów wg średnicy i porowatości</h4>
<ul>
<li>cienkie (do ok. 0,05 mm), średnie, grube (powyżej ok. 0,08 mm); grube i szkliste trudniej przyjmują barwnik;</li>
<li>porowatość niska (łuska zamknięta, włos „szklisty”), średnia, wysoka (po rozjaśnianiu, trwałej, słońcu): włos chłonie preparat szybko i nierównomiernie, szybko traci kolor.</li>
</ul>
<div class="tip">Pytanie egzaminacyjne: trwała ondulacja działa na mostki dwusiarczkowe, a modelowanie suszarką tylko na wiązania wodorowe, dlatego jest nietrwałe.</div>` },
        { tytul: "Choroby i przeciwwskazania", tresc: `<h4>Zmiany, przy których usługi się nie wykonuje</h4>
<div class="tw"><table><tr><th>Choroba</th><th>Objawy</th><th>Postępowanie</th></tr>
<tr><td>grzybica skóry głowy</td><td>okrągłe ogniska z łamiącymi się włosami, łuszczenie</td><td>odmowa usługi, skierowanie do dermatologa, dezynfekcja narzędzi</td></tr>
<tr><td>wszawica</td><td>gnidy przy nasadzie, świąd</td><td>odmowa usługi, dezynfekcja i dezynsekcja stanowiska</td></tr>
<tr><td>liszajec, ropne zapalenie mieszków</td><td>krosty, strupy, sączenie</td><td>odmowa, lekarz</td></tr>
<tr><td>rany, otarcia, oparzenia skóry głowy</td><td>uszkodzony naskórek</td><td>brak zabiegów chemicznych do wygojenia</td></tr>
<tr><td>uczulenie na PPD (parafenylenodiaminę)</td><td>dodatnia próba uczuleniowa</td><td>nie wykonuje się farbowania farbą utleniającą</td></tr></table></div>
<h4>Zmiany wymagające ostrożności</h4>
<ul>
<li><b>Łupież suchy i tłusty</b>: szampony przeciwłupieżowe (pirytionian cynku, ketokonazol, dziegieć), peeling skóry głowy.</li>
<li><b>Łojotok</b>: szampony łagodne, nie myć zbyt gorącą wodą, unikać intensywnego masażu.</li>
<li><b>Łuszczyca</b>: nie jest zakaźna, ale przy zmianach zapalnych unika się zabiegów chemicznych na skórze.</li>
<li><b>Łysienie</b>: androgenowe (zakola, czubek), plackowate (okrągłe gładkie ogniska), telogenowe (rozlane, np. po stresie, porodzie); w salonie można doradzić wcierki i strzyżenie maskujące, diagnozę stawia lekarz lub trycholog.</li>
</ul>
<h4>Uszkodzenia łodygi włosa</h4>
<ul>
<li><b>rozdwojone końce (trichoptiloza)</b>: tylko obcięcie, preparaty jedynie skrywają;</li>
<li><b>węzełkowatość (trichorrhexis nodosa)</b>: białe zgrubienia, łamliwość po zabiegach chemicznych i mechanicznych;</li>
<li>przesuszenie i przetłuszczenie, „włosy siane” po nadmiernym rozjaśnianiu.</li>
</ul>
<h4>Karta klienta</h4>
<p>Zapisuje się: dane klienta, wywiad (alergie, choroby, leki, ciąża, poprzednie zabiegi i preparaty, henna), stan włosów i skóry, wyniki prób, użyte preparaty z proporcjami, czas działania, efekt i zalecenia. Na karcie klient podpisuje zgodę na zabieg chemiczny (zgodnie z RODO dane chroni się przed osobami trzecimi).</p>
<div class="tip">Choroby zakaźne (grzybica, wszawica, liszajec) to bezwzględne przeciwwskazanie do każdej usługi w salonie.</div>` },
        { tytul: "Próby diagnostyczne", tresc: `<h4>Próba uczuleniowa (alergiczna)</h4>
<ol>
<li>Wykonuje się ją <b>48 godzin</b> przed farbowaniem farbą utleniającą lub henną (zgodnie z instrukcją producenta), także u stałych klientów przy zmianie preparatu.</li>
<li>Niewielką ilość mieszaniny nakłada się na odtłuszczoną skórę <b>za uchem</b> lub w <b>zgięciu łokciowym</b>.</li>
<li>Pozostawia się na 48 h; zaczerwienienie, świąd, pęcherzyki lub obrzęk oznaczają wynik dodatni: nie wolno wykonać zabiegu.</li>
</ol>
<h4>Próby stanu włosa</h4>
<div class="tw"><table><tr><th>Próba</th><th>Wykonanie</th><th>Wniosek</th></tr>
<tr><td>elastyczności</td><td>pojedynczy włos na mokro rozciąga się w palcach</td><td>zdrowy włos wydłuża się o ok. 20-30% i wraca; pęka od razu: włos zniszczony, odradza się zabiegi chemiczne</td></tr>
<tr><td>porowatości</td><td>przesuwanie palcami pod włos od końców do nasady</td><td>szorstkość świadczy o otwartej łusce i wysokiej porowatości</td></tr>
<tr><td>na pasmie (próbna)</td><td>preparat nakłada się na pasmo w niewidocznym miejscu</td><td>ocena efektu koloru, czasu działania i reakcji włosa</td></tr>
<tr><td>na metale (sole metali)</td><td>pasmo zanurza się w mieszaninie rozjaśniacza lub wody utlenionej z amoniakiem</td><td>nagrzewanie, dymienie, zmiana koloru: włosy z barwnikami metalicznymi, zabieg chemiczny zabroniony</td></tr>
<tr><td>loku testowego</td><td>w trakcie ondulacji odwinięcie 1,5 obrotu wałka</td><td>wyraźny kształt litery S: koniec działania płynu</td></tr></table></div>
<h4>Ocena siwizny</h4>
<p>Określa się procent siwych włosów (np. 25%, 50%, 75%, 100%) i ich odporność (włosy szkliste). Od tego zależy dodatek koloru naturalnego (.0) do mieszanki, stężenie oksydantu (zwykle 6%) i ewentualna pre-pigmentacja lub prepilaż.</p>
<h4>Wywiad z klientem</h4>
<p>Pyta się o: oczekiwania (zdjęcia), codzienną pielęgnację i stylizację, czas na układanie, przebyte zabiegi (farby, henna, trwała, keratyna), alergie i leki. Pytanie o hennę i farby z apteki (z solami metali) jest kluczowe przed rozjaśnianiem i trwałą.</p>
<div class="tip">Próbę uczuleniową wykonuje się 48 h wcześniej, a próba na pasmie daje informację o efekcie koloru, ale nie zastępuje próby alergicznej.</div>` }
      ],
      pytania: [
        Q("Trwała ondulacja zmienia kształt włosa, rozrywając wiązania:", "dwusiarczkowe", "wodorowe", "solne", "peptydowe w rdzeniu", "Tioglikolan redukuje mostki cystynowe."),
        Q("Faza wzrostu włosa to:", "anagen", "katagen", "telogen", "exogen", "Trwa 2-7 lat."),
        Q("Włos rośnie przeciętnie o około:", "1 cm na miesiąc", "1 mm na miesiąc", "5 cm na miesiąc", "1 cm na rok", "Ok. 0,3-0,4 mm na dobę."),
        Q("Próbę uczuleniową przed farbowaniem wykonuje się:", "48 godzin przed zabiegiem", "bezpośrednio przed nałożeniem farby", "tydzień po zabiegu", "tylko u nowych klientów raz w życiu", "Wynik ocenia się po 48 h."),
        Q("Bezwzględnym przeciwwskazaniem do usługi fryzjerskiej jest:", "grzybica skóry głowy", "łupież suchy", "włosy cienkie", "siwizna 50%", "Choroby zakaźne wykluczają usługę."),
        Q("Próba na metale wykazuje obecność:", "barwników metalicznych, np. z farb z solami metali", "silikonów", "keratyny", "łupieżu", "Reakcja z oksydantem jest gwałtowna."),
        Q("Zdrowy włos w próbie elastyczności na mokro:", "wydłuża się o ok. 20-30% i wraca do długości", "pęka natychmiast", "nie wydłuża się wcale", "wydłuża się dwukrotnie", "Szybkie pękanie świadczy o zniszczeniu."),
        Q("Pigment odpowiedzialny za odcienie żółto-czerwone to:", "feomelanina", "eumelanina", "keratyna", "cystyna", "Eumelanina daje odcienie brązowo-czarne.")
      ]
    },
    {
      id: "pielegnacja", tytul: "Mycie i pielęgnacja", opis: "Dobierzesz preparaty myjące i pielęgnujące do włosów i skóry głowy oraz wykonasz masaż.",
      lekcje: [
        { tytul: "Preparaty myjące i pH", tresc: `<h4>Składniki szamponu</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Przykłady</th><th>Działanie</th></tr>
<tr><td>tenzydy anionowe</td><td>SLES (Sodium Laureth Sulfate), SLS</td><td>silnie myjące, pieniące; SLS może podrażniać</td></tr>
<tr><td>tenzydy amfoteryczne</td><td>Cocamidopropyl Betaine</td><td>łagodzą, wspomagają pianę, szampony dla dzieci</td></tr>
<tr><td>tenzydy niejonowe</td><td>glukozydy (Coco-Glucoside)</td><td>bardzo łagodne</td></tr>
<tr><td>związki kationowe</td><td>Polyquaternium, Behentrimonium Chloride</td><td>kondycjonują, neutralizują ładunek ujemny włosa, ułatwiają rozczesywanie</td></tr>
<tr><td>dodatki</td><td>pantenol, proteiny, silikony, ekstrakty</td><td>pielęgnacja, połysk</td></tr></table></div>
<h4>pH preparatów</h4>
<ul>
<li>pH &lt; 7 (kwaśne, np. 3,5-5): obkurcza i <b>zamyka łuskę</b>, połysk; odżywki, płukanki, szampony po koloryzacji.</li>
<li>pH &gt; 7 (zasadowe, np. farby, płyny do trwałej, rozjaśniacze ok. 9-11): <b>otwiera łuskę</b>, włos pęcznieje.</li>
<li>Po zabiegach chemicznych stosuje się preparaty kwaśne, które przywracają pH i stabilizują kolor.</li>
</ul>
<h4>Dobór szamponu</h4>
<ul>
<li>włosy przetłuszczające się: szampon oczyszczający, delikatne myjące, bez ciężkich silikonów; myje się wodą letnią;</li>
<li>włosy suche, zniszczone: szampon nawilżający z proteinami, olejami;</li>
<li>włosy farbowane: kwaśne pH, filtry UV, bez agresywnych siarczanów;</li>
<li>przed koloryzacją lub trwałą: szampon <b>oczyszczający (techniczny)</b> bez silikonów, ale bez masażu i drapania skóry;</li>
<li>łupież: szampony przeciwłupieżowe stosowane kuracyjnie.</li>
</ul>
<h4>Technika mycia</h4>
<ol>
<li>Zabezpieczenie klienta peleryną i ręcznikiem, rozczesanie włosów.</li>
<li>Sprawdzenie temperatury wody na nadgarstku (ok. <b>37-38 °C</b>), zmoczenie od czoła ku tyłowi, osłanianie uszu i twarzy dłonią.</li>
<li>Dwukrotne mycie (pierwsze usuwa zabrudzenia, drugie pielęgnuje), masaż opuszkami palców, nie paznokciami.</li>
<li>Dokładne spłukanie, odżywka na długości, osuszenie ręcznikiem przez dociśnięcie, nie tarcie.</li>
</ol>
<div class="tip">Szampon przed zabiegiem chemicznym nakłada się delikatnie, bez masażu, aby nie podrażnić skóry, która za chwilę zetknie się z preparatem zasadowym.</div>` },
        { tytul: "Zabiegi pielęgnacyjne włosów", tresc: `<h4>Rodzaje preparatów</h4>
<ul>
<li><b>Odżywki bez spłukiwania i ze spłukiwaniem</b>: kationowe składniki wygładzają łuskę.</li>
<li><b>Maski i kuracje regenerujące</b>: keratyna hydrolizowana, aminokwasy, ceramidy, oleje (arganowy, kokosowy); działanie zwiększa ciepło (czepek, klimazon).</li>
<li><b>Ampułki</b> na skórę głowy: wcierki wzmacniające, przeciw wypadaniu (kofeina, niacynamid, ekstrakty).</li>
<li><b>Peeling skóry głowy</b>: kwasy (salicylowy) lub drobinki; przy łupieżu i łojotoku, nie przy podrażnieniach.</li>
<li><b>Keratynowe prostowanie</b>: zabieg wygładzający z keratyną i wysoką temperaturą (prostownica), utrzymuje się kilka tygodni.</li>
</ul>
<h4>Równowaga PEH</h4>
<p>Pielęgnacja dzieli składniki na: <b>proteiny</b> (P, odbudowa), <b>emolienty</b> (E, ochrona, wygładzenie), <b>humektanty</b> (H, nawilżenie: gliceryna, aloes, kwas hialuronowy). Za dużo protein usztywnia włosy, za dużo emolientów obciąża, humektanty przy suchym powietrzu mogą puszyć.</p>
<h4>Dobór do problemu</h4>
<div class="tw"><table><tr><th>Problem</th><th>Zabieg</th></tr>
<tr><td>włosy po rozjaśnianiu</td><td>kuracja proteinowa, odbudowa wiązań (preparaty typu „bond builder”), kwaśne pH</td></tr>
<tr><td>włosy puszące się</td><td>emolienty, wygładzenie łuski, keratyna</td></tr>
<tr><td>wypadanie</td><td>ampułki na skórę, masaż, skierowanie do lekarza przy silnym wypadaniu</td></tr>
<tr><td>łupież tłusty</td><td>peeling, szampon przeciwłupieżowy, ograniczenie ciężkich kosmetyków przy skórze</td></tr></table></div>
<h4>Zalecenia dla klienta</h4>
<p>Fryzjer doradza pielęgnację domową: rodzaj szamponu i odżywki, termoochronę przed suszarką i prostownicą (temperatura prostownicy zwykle do ok. 180-200 °C, niżej przy włosach cienkich), ochronę UV, częstotliwość podcinania końców (co ok. 6-8 tygodni przy krótkich formach).</p>
<div class="tip">Rozdwojonych końców nie da się „skleić” na stałe; jedyną skuteczną metodą jest obcięcie, a odżywki tylko je maskują.</div>` },
        { tytul: "Masaż skóry głowy i stanowisko pracy", tresc: `<h4>Techniki masażu</h4>
<ol>
<li><b>Głaskanie</b>: rozpoczęcie i zakończenie masażu, rozgrzewa, uspokaja.</li>
<li><b>Rozcieranie</b>: koliste ruchy opuszkami, przesuwanie skóry względem czaszki.</li>
<li><b>Ugniatanie</b>: ujmowanie skóry i lekki ucisk.</li>
<li><b>Oklepywanie</b>: delikatne uderzenia opuszkami.</li>
<li><b>Wibracja</b>: drżenie dłoni na skórze, rozluźnia.</li>
</ol>
<p>Masaż wykonuje się od linii czoła i skroni ku potylicy, z wyczuciem, ok. 5-10 minut. Pobudza krążenie i odżywienie cebulek, rozluźnia napięcie mięśni.</p>
<h4>Przeciwwskazania do masażu</h4>
<ul><li>stany zapalne, rany, choroby skóry głowy;</li>
<li>silny łojotok (masaż pobudza gruczoły łojowe);</li>
<li>bezpośrednio przed zabiegiem chemicznym;</li>
<li>nadciśnienie, migreny, świeże urazy głowy.</li></ul>
<h4>Ergonomia stanowiska</h4>
<ul>
<li>Fotel z regulacją wysokości: dłonie fryzjera na wysokości łokci, plecy proste; myjnia z regulowanym oparciem.</li>
<li>Obuwie stabilne i wygodne, mata antyzmęczeniowa, przerwy na zmianę pozycji.</li>
<li>Rękawiczki ochronne przy pracy z chemią i myciu (ochrona przed zapaleniem skóry dłoni), krem ochronny.</li>
<li>Wentylacja przy pracy z amoniakiem i aerozolami.</li>
</ul>
<h4>Higiena narzędzi</h4>
<div class="tw"><table><tr><th>Czynność</th><th>Cel</th></tr>
<tr><td>mycie</td><td>usunięcie włosów, zabrudzeń, resztek preparatu</td></tr>
<tr><td>dezynfekcja</td><td>zniszczenie większości drobnoustrojów (zanurzenie w roztworze roboczym wg czasu z etykiety, spryskanie powierzchni)</td></tr>
<tr><td>sterylizacja</td><td>zniszczenie wszystkich form, także przetrwalnikowych (autoklaw); narzędzia naruszające ciągłość skóry</td></tr></table></div>
<p>Brzytwy z wymiennymi ostrzami stosuje się z nowym ostrzem dla każdego klienta. Ręczniki i peleryny zmienia się po każdym kliencie, pędzle i miseczki myje i dezynfekuje.</p>
<div class="tip">Kolejność ruchów masażu kończy się zawsze głaskaniem, tak jak się zaczyna; przy łojotoku masażu się nie wykonuje.</div>` }
      ],
      pytania: [
        Q("Preparaty o kwaśnym pH (3,5-5) działają na łuskę włosa:", "zamykająco, nadając połysk", "otwierająco", "rozpuszczająco", "nie mają wpływu", "Zasadowe pH otwiera łuskę."),
        Q("SLES to składnik szamponu z grupy:", "tenzydów anionowych", "związków kationowych", "konserwantów", "silikonów", "Główny składnik myjący."),
        Q("Temperatura wody do mycia głowy powinna wynosić około:", "37-38 °C", "20 °C", "50 °C", "60 °C", "Sprawdza się ją na nadgarstku."),
        Q("Przed trwałą ondulacją włosy myje się:", "szamponem oczyszczającym, bez masażu skóry", "szamponem z silikonami i masażem", "tylko wodą z octem", "nie myje się wcale", "Masaż mógłby podrażnić skórę."),
        Q("Związki kationowe w odżywkach:", "neutralizują ujemny ładunek włosa i ułatwiają rozczesywanie", "silnie myją i pienią", "rozjaśniają włosy", "zrywają mostki dwusiarczkowe", "Np. polyquaternium."),
        Q("Przeciwwskazaniem do masażu skóry głowy jest:", "silny łojotok", "włosy suche", "włosy długie", "siwizna", "Masaż pobudza wydzielanie łoju."),
        Q("Ostatnią techniką w masażu skóry głowy jest:", "głaskanie", "oklepywanie", "ugniatanie", "wibracja", "Masaż zaczyna się i kończy głaskaniem."),
        Q("Sterylizacja różni się od dezynfekcji tym, że:", "niszczy wszystkie drobnoustroje, także przetrwalniki", "usuwa tylko zabrudzenia", "jest wykonywana zimną wodą", "dotyczy tylko ręczników", "Najczęściej w autoklawie.")
      ]
    },
    {
      id: "strzyzenie", tytul: "Strzyżenie i modelowanie", opis: "Wykonasz strzyżenie z właściwym kątem elewacji i pasmem prowadzącym oraz wymodelujesz fryzurę.",
      lekcje: [
        { tytul: "Elewacja, pasmo prowadzące i formy", tresc: `<h4>Kąt elewacji (uniesienia)</h4>
<div class="tw"><table><tr><th>Kąt</th><th>Efekt</th><th>Forma</th></tr>
<tr><td>0°</td><td>wszystkie włosy kończą się na jednej linii, ciężar na obwodzie</td><td>forma jednolita (solid, bob na jedną długość)</td></tr>
<tr><td>45°</td><td>krótsze nad dłuższymi, nagromadzenie ciężaru (linia wagi)</td><td>graduacja (np. bob stopniowany)</td></tr>
<tr><td>90°</td><td>wszystkie włosy tej samej długości od skóry</td><td>równe warstwy (uniform layers)</td></tr>
<tr><td>180°</td><td>włosy na czubku krótkie, coraz dłuższe ku dołowi</td><td>warstwy wydłużające się (long layers)</td></tr></table></div>
<h4>Pasmo prowadzące</h4>
<ul>
<li><b>Stałe (nieruchome)</b>: wszystkie pasma przyciąga się do jednego miejsca; daje przyrost długości w kierunku od pasma (np. przy długich warstwach przednich).</li>
<li><b>Ruchome (przesuwne)</b>: każde kolejne pasmo strzyże się do części poprzedniego; zachowuje ten sam kształt na całej głowie.</li>
</ul>
<h4>Separacje i podział głowy</h4>
<p>Głowę dzieli się na sekcje: przód (grzywka), boki (skronie), czubek (ciemię), potylica, kark. Separacje mogą być poziome (forma jednolita, graduacja), pionowe (warstwy, przejścia), ukośne do przodu lub do tyłu (kształt linii). Grubość separacji ok. 1-2 cm, aby widzieć pasmo prowadzące.</p>
<h4>Kierunek przeciągnięcia (overdirection)</h4>
<p>Przeciągnięcie pasm poza ich naturalne położenie (np. do tyłu) powoduje, że po opuszczeniu włosy będą się wydłużać w przeciwnym kierunku (np. ku przodowi). Tak buduje się długość przy twarzy.</p>
<h4>Linia i kontrola</h4>
<ul>
<li>Linia może być pozioma, ukośna do przodu (konkawa, dłuższa z przodu) lub do tyłu (konweks).</li>
<li>Kontrolę wykonuje się w przeciwnym kierunku niż strzyżenie (np. strzyżono pionowo, kontroluje się poziomo), sprawdza symetrię w lustrze i porównuje pasma z obu stron.</li>
<li>Włosy kręcone strzyże się z uwzględnieniem skurczu po wyschnięciu (pozostawia się dłuższe).</li>
</ul>
<div class="tip">Elewacja 90° daje równe warstwy, a 180° długie warstwy krótkie na górze i długie na dole. Pomylenie tych kątów to częsty błąd w testach.</div>` },
        { tytul: "Narzędzia i techniki cięcia", tresc: `<h4>Narzędzia</h4>
<ul>
<li><b>Nożyczki proste</b>: podstawowe strzyżenie, linie; długość ostrzy ok. 5-6 cali do precyzji, dłuższe do techniki nożyczki na grzebieniu.</li>
<li><b>Degażówki</b> (nożyczki z ząbkami): przerzedzanie, zmniejszenie objętości, zmiękczenie linii.</li>
<li><b>Brzytwa</b>: cięcie na mokrych włosach, miękkie, rozwichrzone końce; nowe ostrze dla każdego klienta.</li>
<li><b>Maszynka</b> z nasadkami (np. 3 mm, 6 mm, 9 mm, 12 mm) i trymer do konturów.</li>
</ul>
<h4>Techniki</h4>
<div class="tw"><table><tr><th>Technika</th><th>Opis</th></tr>
<tr><td>tępe cięcie (blunt)</td><td>prosto w poprzek pasma, mocna linia</td></tr>
<tr><td>point cut</td><td>cięcie końcami nożyczek w głąb pasma, zmiękcza linię</td></tr>
<tr><td>slicing</td><td>przesuwanie lekko otwartych nożyczek wzdłuż pasma, tekstura i ruch</td></tr>
<tr><td>effilowanie (degażowanie)</td><td>przerzedzanie włosów na różnych wysokościach</td></tr>
<tr><td>nożyczki na grzebieniu</td><td>krótkie strzyżenia męskie i przejścia na karku</td></tr>
<tr><td>fade (cieniowanie maszynką)</td><td>płynne przejście od skóry lub bardzo krótkiej nasadki do dłuższych włosów</td></tr></table></div>
<h4>Strzyżenie męskie: przykład</h4>
<ol>
<li>Wyznaczenie linii przejścia (np. na wysokości kości ciemieniowej).</li>
<li>Boki i tył maszynką z nasadką 3 mm, przejście nasadkami 6 mm i 9 mm w górę (ruch „wywinięcia” od skóry).</li>
<li>Góra nożyczkami z elewacją 90° na pasmo ruchome, długość np. 5 cm.</li>
<li>Połączenie przejścia techniką nożyczki na grzebieniu, kontur trymerem, wyczyszczenie karku.</li>
</ol>
<h4>Bezpieczeństwo</h4>
<p>Nożyczki przekazuje się zamknięte, rączką do odbiorcy. Brzytwę przechowuje się zabezpieczoną, zużyte ostrza wrzuca do pojemnika na odpady ostre. Skaleczenie: przerwanie pracy, rękawiczki, zatamowanie krwawienia jałowym gazikiem, dezynfekcja narzędzia.</p>
<div class="tip">Brzytwą tnie się zawsze włosy mokre; na suchych ciągnie i niszczy końce.</div>` },
        { tytul: "Modelowanie i stylizacja", tresc: `<h4>Modelowanie suszarką</h4>
<ul>
<li>Włosy odsączone ręcznikiem, preparat termoochronny i objętościowy (pianka, spray u nasady).</li>
<li>Strumień powietrza kieruje się <b>od nasady do końców</b>, zgodnie z ułożeniem łuski, z koncentratorem (dyszą), co wygładza i daje połysk.</li>
<li>Szczotka okrągła: mała średnica daje mocne skręty, duża objętość i gładkość; przy nasadzie unosi się pasmo pod kątem ok. 90° lub więcej dla objętości.</li>
<li>Pasma o szerokości szczotki, kolejność od karku ku górze, na końcu zimny nadmuch utrwala (wiązania wodorowe zamykają się w nowym kształcie).</li>
<li>Dyfuzor: dla loków i fal, suszenie bez rozwiewania skrętu.</li>
</ul>
<h4>Ondulacja wodna i nawijanie</h4>
<ul>
<li><b>Wałki</b> nawija się na mokre włosy, suszy pod klimazonem lub suszarką hełmową; większa średnica daje fale, mniejsza loki.</li>
<li><b>Papiloty</b>, <b>loki płaskie (pin curls)</b>: fryzury retro.</li>
<li><b>Fale wodne palcami i grzebieniem</b> (fryzura z lat 20.): kształtowanie litery S na mokrych włosach z żelem.</li>
</ul>
<h4>Narzędzia termiczne</h4>
<div class="tw"><table><tr><th>Narzędzie</th><th>Zastosowanie</th><th>Uwagi</th></tr>
<tr><td>prostownica</td><td>wygładzanie, fale</td><td>na suchych włosach, termoochrona, zwykle 150-200 °C</td></tr>
<tr><td>lokówka</td><td>loki o średnicy wałka</td><td>nie trzymać za długo na jednym paśmie</td></tr>
<tr><td>karbownica</td><td>drobne karby, objętość u nasady</td><td>na suchych włosach</td></tr></table></div>
<h4>Preparaty do stylizacji</h4>
<ul><li>pianka, spray do nasady: objętość;</li>
<li>żel, wosk, pasta, glinka: kontrola i tekstura (glinka matowa, pomada błyszcząca);</li>
<li>lakier: utrwalenie (elastyczny lub mocny);</li>
<li>serum, olejek: połysk i wygładzenie końców.</li></ul>
<div class="tip">Pod koniec modelowania zimny nadmuch „zamyka” fryzurę, bo wiązania wodorowe stabilizują się po ostygnięciu.</div>` }
      ],
      pytania: [
        Q("Strzyżenie z elewacją 0° daje formę:", "jednolitą (solid), z ciężarem na obwodzie", "równych warstw", "długich warstw", "graduacji wysokiej", "Wszystkie włosy kończą się na jednej linii."),
        Q("Elewacja 90° w strzyżeniu daje:", "warstwy o jednakowej długości od skóry", "formę jednolitą", "warstwy wydłużające się ku dołowi", "linię ciężaru na karku", "Uniform layers."),
        Q("Pasmo prowadzące ruchome polega na tym, że:", "każde kolejne pasmo strzyże się do części poprzedniego", "wszystkie pasma przyciąga się do jednego punktu", "strzyże się bez pasma", "używa się tylko maszynki", "Stałe pasmo daje przyrost długości."),
        Q("Brzytwą strzyże się włosy:", "mokre", "suche", "po lakierowaniu", "tylko kręcone suche", "Na suchych brzytwa szarpie."),
        Q("Degażówki służą przede wszystkim do:", "przerzedzania włosów i zmiękczania linii", "cięcia mocnych linii", "golenia karku", "nawijania loków", "Mają ząbki na jednym lub obu ostrzach."),
        Q("Podczas modelowania strumień powietrza kieruje się:", "od nasady do końców", "od końców do nasady", "prostopadle do skóry", "losowo", "Zgodnie z ułożeniem łuski."),
        Q("Na zakończenie modelowania stosuje się zimny nadmuch, aby:", "utrwalić kształt po zamknięciu wiązań wodorowych", "rozjaśnić włosy", "otworzyć łuskę", "usunąć lakier", "Ostygnięcie stabilizuje kształt."),
        Q("Kontrolę strzyżenia przeprowadza się:", "w kierunku przeciwnym do separacji użytej podczas strzyżenia", "tylko patrząc w lustro z daleka", "na suchych włosach po lakierowaniu", "nie wykonuje się kontroli", "Np. strzyżono pionowo, kontrola poziomo.")
      ]
    },
    {
      id: "koloryzacja", tytul: "Koloryzacja i rozjaśnianie", opis: "Odczytasz numerację farb, dobierzesz oksydant i proporcje oraz zneutralizujesz niechciane odcienie.",
      lekcje: [
        { tytul: "Numeracja farb i wysokość tonu", tresc: `<h4>Skala wysokości tonu</h4>
<div class="tw"><table><tr><th>Ton</th><th>Kolor</th><th>Pigment tła rozjaśnienia</th></tr>
<tr><td>1</td><td>czarny</td><td>-</td></tr>
<tr><td>2-3</td><td>bardzo ciemny / ciemny brąz</td><td>ciemnoczerwony</td></tr>
<tr><td>4</td><td>średni brąz</td><td>czerwony</td></tr>
<tr><td>5</td><td>jasny brąz</td><td>czerwono-pomarańczowy</td></tr>
<tr><td>6</td><td>ciemny blond</td><td>pomarańczowy</td></tr>
<tr><td>7</td><td>średni blond</td><td>pomarańczowo-żółty</td></tr>
<tr><td>8</td><td>jasny blond</td><td>żółty</td></tr>
<tr><td>9</td><td>bardzo jasny blond</td><td>jasnożółty</td></tr>
<tr><td>10</td><td>najjaśniejszy (platynowy) blond</td><td>bladożółty</td></tr></table></div>
<h4>Odczytywanie numeru</h4>
<p>Numer <b>7.43</b>: 7 to wysokość tonu (średni blond), 4 to refleks <b>główny</b> (miedziany), 3 to refleks <b>drugorzędny</b> (złoty). Numer <b>6.66</b>: podwójna cyfra oznacza intensywny refleks (intensywna czerwień). Numer <b>8.0</b> lub <b>8/0</b>: naturalny jasny blond.</p>
<div class="tw"><table><tr><th>Refleks (najczęstszy system)</th><th>Odcień</th></tr>
<tr><td>.0</td><td>naturalny</td></tr>
<tr><td>.1</td><td>popielaty (niebieski)</td></tr>
<tr><td>.2</td><td>perłowy / fioletowy (matowy)</td></tr>
<tr><td>.3</td><td>złoty</td></tr>
<tr><td>.4</td><td>miedziany</td></tr>
<tr><td>.5</td><td>mahoniowy</td></tr>
<tr><td>.6</td><td>czerwony</td></tr>
<tr><td>.7</td><td>brązowy (lub zielony, matujący, zależnie od producenta)</td></tr></table></div>
<p>Systemy różnią się między producentami, dlatego zawsze sprawdza się kartę kolorów.</p>
<h4>Rodzaje farb</h4>
<ul>
<li><b>Trwała (utleniająca)</b>: amoniak lub MEA, oksydant 3-12%, barwnik w korze, pokrywa siwiznę.</li>
<li><b>Półtrwała (ton w ton)</b>: niski oksydant (1,5-2%), wypłukuje się po ok. 20-25 myciach, nie rozjaśnia.</li>
<li><b>Bezpośrednia (toner, płukanka)</b>: barwnik na powierzchni, bez oksydantu.</li>
<li><b>Roślinna (henna)</b>: barwi łuskę; utrudnia późniejsze zabiegi chemiczne.</li>
</ul>
<div class="tip">Pigment tła rozjaśnienia na poziomie 7 jest pomarańczowo-żółty, na 9 jasnożółty; to on „wychodzi” po rozjaśnieniu i trzeba go zneutralizować.</div>` },
        { tytul: "Oksydanty, proporcje i siwizna", tresc: `<h4>Stężenie oksydantu (H2O2)</h4>
<div class="tw"><table><tr><th>Stężenie</th><th>Zastosowanie</th></tr>
<tr><td>1,5-2%</td><td>koloryzacja ton w ton, tonowanie po rozjaśnianiu</td></tr>
<tr><td>3%</td><td>ton w ton, przyciemnianie, delikatne pokrycie siwizny, włosy uwrażliwione</td></tr>
<tr><td>6%</td><td>rozjaśnienie o ok. 1 ton, standardowe pokrycie siwizny</td></tr>
<tr><td>9%</td><td>rozjaśnienie o ok. 2 tony</td></tr>
<tr><td>12%</td><td>rozjaśnienie o ok. 3 tony, farby superrozjaśniające (do 4 tonów)</td></tr></table></div>
<h4>Proporcje i czas</h4>
<ul>
<li>Standard <b>1 : 1</b> (np. 60 g farby + 60 g oksydantu), farby superrozjaśniające często <b>1 : 2</b>; zawsze wg producenta.</li>
<li>Czas działania zwykle <b>30-45 minut</b>, z ciepłem krócej (wg instrukcji).</li>
<li>Mieszankę przygotowuje się bezpośrednio przed nałożeniem, w misce niemetalowej, i zużywa od razu.</li>
</ul>
<h4>Siwizna</h4>
<ul>
<li>Przy siwiźnie do ok. 30% wystarczy kolor modny, od ok. 50% dodaje się odcień naturalny (.0) w proporcji wg producenta (np. 1/3 lub 1/2), przy 100% głównie naturalny.</li>
<li>Siwe włosy szkliste: zmiękczenie (prepilaż) oksydantem 6% przed farbą lub dłuższy czas.</li>
<li>Pre-pigmentacja: przy przyciemnianiu o 3 i więcej tonów najpierw nakłada się pigment ciepły (np. miedziany), aby kolor nie był zielonkawy i szybko się nie wypłukał.</li>
</ul>
<h4>Kolejność nakładania</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Kolejność</th></tr>
<tr><td>pierwsza koloryzacja, rozjaśnienie</td><td>najpierw długości i końce (ok. 1-2 cm od skóry), po ok. 10-20 min odrost, bo ciepło skóry przyspiesza reakcję („gorące korzenie”)</td></tr>
<tr><td>pierwsza koloryzacja na ciemniej lub ton w ton</td><td>na całą długość od razu</td></tr>
<tr><td>farbowanie odrostu</td><td>najpierw odrost, a końce przez ostatnie 5-10 min (lub tylko odświeżenie tonerem)</td></tr></table></div>
<h4>Obliczenie</h4>
<p>Włosy półdługie: 60 g farby 7.0 + 30 g 7.43 (dla refleksu), proporcja 1:1, oksydant 6%: łącznie 90 g farby + <b>90 g oksydantu</b>.</p>
<div class="tip">Farba nie rozjaśnia włosów już farbowanych: „farba nie zdejmie farby”. Do rozjaśnienia sztucznego koloru potrzebna jest dekoloryzacja lub rozjaśniacz.</div>` },
        { tytul: "Rozjaśnianie, neutralizacja i techniki", tresc: `<h4>Neutralizacja (koło barw)</h4>
<p>Niechciany odcień neutralizuje się kolorem leżącym naprzeciw w kole barw:</p>
<div class="tw"><table><tr><th>Niechciany</th><th>Neutralizuje</th><th>Refleks</th></tr>
<tr><td>żółty</td><td>fioletowy</td><td>.2 (perłowy, fioletowy)</td></tr>
<tr><td>pomarańczowy</td><td>niebieski</td><td>.1 (popielaty)</td></tr>
<tr><td>czerwony</td><td>zielony</td><td>matowy (np. .7 w niektórych systemach)</td></tr>
<tr><td>zielonkawy</td><td>czerwony</td><td>.6, .4</td></tr></table></div>
<h4>Rozjaśniacze</h4>
<ul>
<li>Proszek rozjaśniający + oksydant zwykle w proporcji 1 : 1,5 do 1 : 2; na skórę głowy max ok. 6% (lub wg producenta), poza skórą (folie) do 9-12%.</li>
<li>Rozjaśniacz w kremie lub oleju: łagodniejszy przy skórze.</li>
<li>Czas wg kontroli wizualnej, zwykle do ok. 50 minut; nie podgrzewa się rozjaśniacza na folii powyżej zaleceń.</li>
<li>Dodatki odbudowujące wiązania chronią włos przed nadmiernym zniszczeniem.</li>
</ul>
<h4>Dekoloryzacja</h4>
<p>Usuwa sztuczny pigment z włosów farbowanych (np. zbyt ciemny kolor). Preparaty redukujące działają na barwnik utleniający; po zabiegu konieczne dokładne płukanie i ponowna koloryzacja zwykle o ton jaśniej niż oczekiwany kolor, oksydantem niskim, bo włos jest porowaty.</p>
<h4>Techniki koloryzacji</h4>
<div class="tw"><table><tr><th>Technika</th><th>Opis</th></tr>
<tr><td>pasemka na folii</td><td>cienkie pasma wybrane grzebieniem (tkanie), zawinięte w folię</td></tr>
<tr><td>pasemka przez czepek</td><td>krótkie włosy, pasma wyciągane szydełkiem</td></tr>
<tr><td>balejaż</td><td>ręczne malowanie pasm pędzlem, efekt muśnięcia słońcem</td></tr>
<tr><td>ombre</td><td>płynne przejście od ciemnej nasady do jasnych końców</td></tr>
<tr><td>babylights</td><td>bardzo cienkie, gęste pasemka, naturalny efekt</td></tr>
<tr><td>tonowanie</td><td>wyrównanie i nadanie odcienia po rozjaśnieniu, niskim oksydantem</td></tr></table></div>
<h4>Po koloryzacji</h4>
<p>Emulgowanie (rozmasowanie farby z odrobiną wody przy linii włosów), spłukanie do czystej wody, szampon po koloryzacji, odżywka kwaśna stabilizująca kolor. Plamy z farby na skórze usuwa się specjalnym preparatem, a dokumentuje użyte numery i proporcje w karcie.</p>
<div class="tip">Żółty po rozjaśnieniu neutralizuje się fioletem (.2), a pomarańczowy niebieskim, popielatym (.1).</div>` }
      ],
      pytania: [
        Q("W numerze farby 7.43 cyfra 4 oznacza:", "refleks główny (miedziany)", "wysokość tonu", "refleks drugorzędny", "stężenie oksydantu", "7 = ton, 4 = refleks główny, 3 = drugorzędny."),
        Q("Wysokość tonu 1 w skali farb to:", "czarny", "najjaśniejszy blond", "średni blond", "rudy", "Skala od 1 (czarny) do 10."),
        Q("Do rozjaśnienia włosów naturalnych o ok. 2 tony farbą utleniającą stosuje się oksydant:", "9%", "1,5%", "3%", "40%", "6% to ok. 1 ton, 12% ok. 3 tony."),
        Q("Żółty odcień po rozjaśnieniu neutralizuje się refleksem:", "fioletowym (perłowym)", "złotym", "miedzianym", "czerwonym", "Fiolet leży naprzeciw żółtego w kole barw."),
        Q("Przy pierwszej koloryzacji na jaśniej farbę nakłada się najpierw:", "na długości i końce, a odrost później", "na odrost, potem końce", "tylko na końce", "na całą długość naraz z ciepłem", "Ciepło skóry przyspiesza reakcję przy nasadzie."),
        Q("Standardowa proporcja farby utleniającej i oksydantu wynosi najczęściej:", "1 : 1", "1 : 5", "3 : 1", "1 : 10", "Superrozjaśniające często 1 : 2."),
        Q("Pomarańczowy odcień neutralizuje się kolorem:", "niebieskim (popielatym)", "żółtym", "czerwonym", "złotym", "Niebieski jest przeciwny pomarańczowemu."),
        Q("Aby rozjaśnić włosy wcześniej farbowane farbą utleniającą na ciemno, stosuje się:", "dekoloryzację lub rozjaśniacz", "jaśniejszą farbę z oksydantem 3%", "szampon oczyszczający", "odżywkę kwaśną", "Farba nie rozjaśnia sztucznego pigmentu.")
      ]
    },
    {
      id: "ondulacja", tytul: "Ondulacja i prostowanie chemiczne", opis: "Wykonasz trwałą ondulację i chemiczne prostowanie, kontrolując lok testowy i utrwalanie.",
      lekcje: [
        { tytul: "Chemia trwałej ondulacji", tresc: `<h4>Dwa etapy</h4>
<ol>
<li><b>Redukcja</b>: płyn do trwałej (reduktor, najczęściej <b>tioglikolan amonu</b>) rozrywa mostki dwusiarczkowe w korze; włosy nawinięte na wałki przyjmują ich kształt.</li>
<li><b>Utlenianie (utrwalanie)</b>: utrwalacz (zwykle nadtlenek wodoru ok. <b>1,5-2%</b> lub bromian sodu) odbudowuje mostki w nowym położeniu.</li>
</ol>
<h4>Rodzaje płynów</h4>
<div class="tw"><table><tr><th>Płyn</th><th>pH</th><th>Do jakich włosów</th></tr>
<tr><td>alkaliczny (tioglikolan amonu)</td><td>ok. 8,5-9,5</td><td>naturalne, mocne, odporne; mocny, trwały skręt</td></tr>
<tr><td>kwaśny (monotioglikolan glicerolu)</td><td>ok. 6-7</td><td>delikatne, farbowane; łagodniejszy, wymaga ciepła</td></tr>
<tr><td>neutralne, bez tioglikolanu (np. cysteamina)</td><td>ok. 7-8</td><td>uwrażliwione, efekt naturalnych fal</td></tr></table></div>
<p>Płyny dzieli się też wg mocy: do włosów <b>trudnych (mocny)</b>, normalnych, farbowanych i uwrażliwionych (słaby). Dobór zależy od próby elastyczności i porowatości.</p>
<h4>Przeciwwskazania</h4>
<ul>
<li>uszkodzona skóra głowy, choroby skóry, alergia na składniki;</li>
<li>włosy z barwnikami metalicznymi (wynik dodatni próby na metale), świeżo hennowane;</li>
<li>włosy bardzo zniszczone, rozjaśnione na wysoki poziom (ryzyko zerwania);</li>
<li>okres zaraz po porodzie i w trakcie niektórych terapii lekowych (zmiana struktury włosa; zabieg może się nie udać).</li>
</ul>
<h4>Ochrona klienta i fryzjera</h4>
<p>Wokół linii włosów nakłada się krem ochronny i opaskę z waty; fryzjer pracuje w <b>rękawiczkach</b>. Płyn do oczu: natychmiast płukać dużą ilością wody, w razie potrzeby lekarz. Pomieszczenie wentylowane (amoniak).</p>
<div class="tip">Kolejność jest stała: najpierw reduktor (otwiera mostki), potem utrwalacz (utlenia i zamyka). Zamiana kolejności nie daje skrętu.</div>` },
        { tytul: "Nawijanie i przebieg zabiegu", tresc: `<h4>Dobór wałków</h4>
<ul>
<li>Średnica wałka decyduje o skręcie: mała, drobny lok; duża, luźne fale.</li>
<li>Szerokość pasma nie większa niż długość wałka, grubość pasma nie większa niż jego średnica.</li>
<li>Bibułki na końce włosów zapobiegają załamaniom i „rybim haczykom”.</li>
</ul>
<h4>Techniki nawijania</h4>
<div class="tw"><table><tr><th>Technika</th><th>Efekt</th></tr>
<tr><td>klasyczna (prostokątna, „9 sekcji”)</td><td>równomierny skręt na całej głowie</td></tr>
<tr><td>cegiełkowa</td><td>brak widocznych przedziałków</td></tr>
<tr><td>spiralna (pionowa)</td><td>długie, sprężyste loki na długich włosach</td></tr>
<tr><td>podwójna (piggyback)</td><td>jednolity skręt na długich włosach</td></tr>
<tr><td>częściowa</td><td>objętość tylko w wybranej strefie (np. u nasady)</td></tr></table></div>
<h4>Przebieg</h4>
<ol>
<li>Wywiad, próby, karta klienta; szampon oczyszczający bez masażu, odsączenie.</li>
<li>Nawijanie z jednakowym, umiarkowanym naciągiem, gumki nie mogą uciskać włosów przy nasadzie.</li>
<li>Ochrona skóry, nałożenie płynu na każdy wałek (od karku), czepek; czas wg producenta, zwykle <b>10-20 min</b>.</li>
<li><b>Lok testowy</b>: odwinąć ok. 1,5 obrotu wałka na kilku miejscach; wyraźna litera S oznacza koniec działania.</li>
<li>Płukanie letnią wodą na wałkach przez ok. 3-5 min, odsączenie ręcznikiem.</li>
<li>Utrwalacz na wałki, ok. 5 min, ostrożne zdjęcie wałków, utrwalacz na długości, kolejne ok. 3-5 min.</li>
<li>Spłukanie, odżywka kwaśna, stylizacja bez mocnego naciągu (dyfuzor).</li>
</ol>
<h4>Zalecenia po zabiegu</h4>
<p>Nie myć włosów przez ok. <b>48 h</b>, nie spinać mocno, nie prostować; używać kosmetyków do włosów kręconych. Koloryzację wykonuje się najlepiej ok. 1-2 tygodnie po trwałej (lub przed nią z odstępem wg producenta).</p>
<div class="tip">Sygnał końca działania płynu to lok testowy w kształcie litery S, a nie upływ maksymalnego czasu z instrukcji.</div>` },
        { tytul: "Prostowanie chemiczne i wady trwałej", tresc: `<h4>Prostowanie chemiczne</h4>
<p>Wykorzystuje ten sam mechanizm (redukcja i utlenianie), ale zamiast nawijania włosy wygładza się grzebieniem, dłońmi lub prostownicą w trakcie działania preparatu.</p>
<ul>
<li><b>Na bazie tioglikolanu</b>: krem nakłada się, wygładza, kontroluje stopień rozluźnienia, płucze, a następnie utrwala.</li>
<li><b>Na bazie wodorotlenków</b> (np. sodu, guanidyny): bardzo silne, do włosów afro; nie łączy się ich z preparatami tioglikolanowymi.</li>
<li><b>Prostowanie keratynowe</b> to zabieg wygładzający, nie trwale chemiczny; po kilku tygodniach skręt wraca.</li>
<li>Zakaz nakładania preparatu na skórę głowy (ok. 1 cm odstępu), przy odroście tylko na nowy odrost.</li>
</ul>
<h4>Wady trwałej ondulacji</h4>
<div class="tw"><table><tr><th>Wada</th><th>Przyczyna</th></tr>
<tr><td>za słaby skręt</td><td>za krótki czas, za słaby płyn, za duże wałki, płyn rozcieńczony wodą z niedostatecznie odsączonych włosów</td></tr>
<tr><td>włosy suche, puszyste, „frotte”</td><td>za mocny płyn, za długi czas, za małe wałki</td></tr>
<tr><td>załamania przy nasadzie</td><td>gumka wałka uciskająca włosy, za duży naciąg</td></tr>
<tr><td>„haczyki” na końcach</td><td>końce zawinięte nierówno, brak bibułki</td></tr>
<tr><td>nierównomierny skręt</td><td>różny naciąg i grubość pasm, nierówne nałożenie płynu</td></tr>
<tr><td>szybkie rozkręcenie</td><td>niedokładne utrwalenie, za krótki czas utrwalacza, mycie zaraz po zabiegu</td></tr>
<tr><td>łamanie włosów</td><td>włosy zniszczone, zbyt silny płyn, metale we włosach</td></tr></table></div>
<h4>Korekta</h4>
<p>Zbyt słaby skręt można powtórzyć dopiero po ocenie stanu włosów, słabszym płynem i z odstępem (najlepiej ok. 2 tygodnie). Przekręcone włosy wymagają regeneracji i stopniowego ścinania, a nie kolejnego zabiegu chemicznego.</p>
<div class="tip">Załamania przy nasadzie najczęściej powstają od gumki wałka, która zbyt mocno uciska świeżo zredukowane, miękkie włosy.</div>` }
      ],
      pytania: [
        Q("Podstawowym reduktorem w płynach do trwałej ondulacji jest:", "tioglikolan amonu", "nadtlenek wodoru", "amoniak", "pantenol", "Nadtlenek wodoru to utrwalacz."),
        Q("Utrwalacz w trwałej ondulacji działa przez:", "utlenienie i odbudowę mostków dwusiarczkowych", "redukcję mostków", "zamknięcie wiązań wodorowych", "rozpuszczenie keratyny", "Zwykle H2O2 ok. 1,5-2%."),
        Q("Koniec działania płynu redukującego rozpoznaje się po:", "loku testowym w kształcie litery S", "zmianie koloru włosów", "zapachu amoniaku", "wyschnięciu włosów", "Odwija się ok. 1,5 obrotu wałka."),
        Q("Płyn kwaśny do trwałej stosuje się przede wszystkim do włosów:", "delikatnych i farbowanych", "bardzo grubych odpornych", "z barwnikami metalicznymi", "afro do prostowania", "Działa łagodniej."),
        Q("Załamania włosów przy nasadzie po trwałej powstają najczęściej przez:", "gumkę wałka uciskającą włosy", "za długie płukanie", "użycie bibułek", "zbyt słaby płyn", "Zmiękczony włos łatwo się odkształca."),
        Q("Po trwałej ondulacji nie zaleca się mycia włosów przez około:", "48 godzin", "15 minut", "2 tygodnie", "6 miesięcy", "Mostki stabilizują się po zabiegu."),
        Q("Za słaby skręt po trwałej może wynikać z:", "zbyt krótkiego czasu działania lub zbyt dużych wałków", "zbyt małych wałków", "zbyt mocnego płynu", "zbyt długiego utrwalania", "Mostki nie zostały dostatecznie zredukowane."),
        Q("Przeciwwskazaniem do trwałej ondulacji jest:", "obecność barwników metalicznych we włosach", "włosy proste", "włosy krótkie", "włosy naturalne nieskrzywdzone", "Grozi zniszczeniem włosów i poparzeniem.")
      ]
    }
  ]);

  pod("FRK.03", [
    {
      id: "kompozycja", tytul: "Kompozycja i typ urody", opis: "Przeanalizujesz kształt twarzy, profil i sylwetkę klienta i dobierzesz do nich formę fryzury.",
      lekcje: [
        { tytul: "Kształty twarzy i korekta fryzurą", tresc: `<h4>Jak określić kształt twarzy</h4>
<p>Włosy zaczesuje się do tyłu i porównuje: szerokość czoła, kości policzkowych i żuchwy oraz długość twarzy. Twarz dzieli się na <b>trzy części</b>: od linii włosów do brwi, od brwi do podstawy nosa, od nosa do brody. W twarzy proporcjonalnej są one zbliżone.</p>
<div class="tw"><table><tr><th>Kształt</th><th>Cel korekty</th><th>Zalecenia</th></tr>
<tr><td>owalny</td><td>uważany za wzorcowy</td><td>prawie każda forma</td></tr>
<tr><td>okrągły</td><td>optycznie wydłużyć i wysmuklić</td><td>objętość na czubku, asymetria, boczna grzywka, pionowe linie przy twarzy; unikać objętości na wysokości policzków</td></tr>
<tr><td>kwadratowy</td><td>złagodzić kanciastość</td><td>fale, miękkie warstwy, asymetryczne przedziałki; unikać prostych linii na wysokości żuchwy</td></tr>
<tr><td>prostokątny (podłużny)</td><td>optycznie skrócić</td><td>grzywka, objętość po bokach, linie poziome; unikać wysokiej objętości na czubku</td></tr>
<tr><td>trójkątny (wąskie czoło, szeroka żuchwa)</td><td>poszerzyć górę</td><td>objętość na skroniach i czubku, krótsze boki u góry, dłuższe za żuchwą</td></tr>
<tr><td>odwrócony trójkąt, serce</td><td>poszerzyć dół, zwęzić czoło</td><td>boczna grzywka, objętość na wysokości żuchwy, bob do brody</td></tr>
<tr><td>romb (diament)</td><td>poszerzyć czoło i brodę</td><td>grzywka, objętość na wysokości czoła i brody, przylegające boki przy kościach policzkowych</td></tr></table></div>
<h4>Profil i szczegóły</h4>
<ul>
<li><b>Profil wypukły</b> (cofnięte czoło i broda): objętość z przodu nad czołem, grzywka, nie zaczesywać gładko do tyłu.</li>
<li><b>Profil wklęsły</b> (wystające czoło i broda): grzywka miękka, gładka, bez objętości na czole.</li>
<li><b>Duży nos</b>: objętość z tyłu głowy, unikać gładkiego przedziałka pośrodku i ostrej, krótkiej grzywki.</li>
<li><b>Wystające uszy</b>: fryzury przykrywające uszy, objętość po bokach.</li>
<li><b>Krótka szyja</b>: krótki tył lub wysokie upięcia, odsłonięty kark; <b>długa szyja</b>: dłuższe włosy w karku, objętość na wysokości szyi.</li>
</ul>
<div class="tip">Zasada ogólna: objętość dodaje się tam, gdzie twarz jest wąska, a fryzurę przybliża do twarzy tam, gdzie twarz jest szeroka.</div>` },
        { tytul: "Zasady kompozycji fryzury", tresc: `<h4>Elementy kompozycji</h4>
<ul>
<li><b>Forma (kształt)</b>: zarys fryzury w trzech wymiarach, oglądany z przodu, z boku i z tyłu.</li>
<li><b>Linia</b>: pozioma (poszerza, uspokaja), pionowa (wydłuża, wysmukla), ukośna (dynamika, ruch), krzywa i falista (łagodzi, dodaje kobiecości).</li>
<li><b>Faktura (tekstura)</b>: gładka (odbija światło, elegancja) lub aktywna, rozczochrana (ruch, młodość).</li>
<li><b>Kolor</b>: podkreśla formę, może optycznie przybliżać (jasny) lub oddalać (ciemny).</li>
</ul>
<h4>Zasady</h4>
<div class="tw"><table><tr><th>Zasada</th><th>Opis i przykład</th></tr>
<tr><td>równowaga symetryczna</td><td>obie strony takie same, statyka i klasyka (np. kok centralny)</td></tr>
<tr><td>równowaga asymetryczna</td><td>różne strony, ale „ciężar wizualny” wyrównany (np. boczny przedziałek i fala)</td></tr>
<tr><td>proporcja</td><td>stosunek wielkości fryzury do głowy i sylwetki; często korzysta się ze <b>złotego podziału</b> (ok. 1 : 1,618)</td></tr>
<tr><td>rytm</td><td>powtarzanie elementów (fale, loki, sploty) w regularnych odstępach</td></tr>
<tr><td>kontrast</td><td>zestawienie przeciwieństw: krótkie i długie, gładkie i kręcone, jasne i ciemne</td></tr>
<tr><td>dominanta (akcent)</td><td>jeden element przyciągający wzrok, np. kwiat, kok, mocny kolor grzywki</td></tr>
<tr><td>harmonia i jedność</td><td>wszystkie elementy pasują do siebie i do klienta (strój, makijaż, okazja)</td></tr></table></div>
<h4>Formy strzyżenia w projekcie</h4>
<ul>
<li><b>forma jednolita (solid)</b>: gładka powierzchnia, mocna linia; włosy cienkie wyglądają na gęstsze;</li>
<li><b>graduacja</b>: kształt trójkątny, nagromadzenie ciężaru na linii wagi;</li>
<li><b>warstwy</b>: aktywna powierzchnia, ruch, mniejsza masa.</li>
</ul>
<h4>Sylwetka</h4>
<p>Fryzurę ocenia się w lustrze na tle całej postaci. Osoby niskie: unikać dużej objętości szerokiej i bardzo długich włosów; wysokie i szczupłe: objętość na boki, średnie długości; przy masywnej sylwetce za mała, przylegająca fryzura optycznie powiększa ciało.</p>
<div class="tip">Na egzaminie często pojawia się pytanie o działanie linii: pionowa wydłuża, pozioma poszerza.</div>` },
        { tytul: "Analiza klienta i dobór stylu", tresc: `<h4>Konsultacja przed projektem</h4>
<ol>
<li><b>Wywiad</b>: oczekiwania (zdjęcia, inspiracje), okazja, styl życia, zawód, czas przeznaczany na układanie, budżet.</li>
<li><b>Analiza włosów</b>: gęstość (mała, średnia, duża), grubość, naturalny skręt, kierunek wzrostu (wiry, „krowie liźnięcie”), linia włosów, porowatość, stan po zabiegach.</li>
<li><b>Analiza twarzy i sylwetki</b>: kształt, profil, szyja, typ kolorystyczny.</li>
<li><b>Ograniczenia</b>: choroby skóry, łysienie, blizny, alergie.</li>
</ol>
<h4>Wpływ cech włosów na projekt</h4>
<div class="tw"><table><tr><th>Cecha</th><th>Konsekwencja</th></tr>
<tr><td>włosy cienkie i rzadkie</td><td>formy jednolite, krótsze długości, mało przerzedzania, kolor z refleksami dla głębi</td></tr>
<tr><td>włosy grube i gęste</td><td>przerzedzanie, warstwy, graduacja wewnętrzna</td></tr>
<tr><td>włosy kręcone</td><td>strzyżenie z uwzględnieniem skurczu, często na sucho, unikanie bardzo krótkich warstw na górze</td></tr>
<tr><td>wir na czubku lub w karku</td><td>dłuższe pasma lub bardzo krótko, kierunek przedziałka zgodny z wirem</td></tr></table></div>
<h4>Style fryzur</h4>
<ul>
<li><b>klasyczny</b>: proste, ponadczasowe formy (bob, kok), stonowane kolory;</li>
<li><b>romantyczny</b>: fale, loki, miękkie upięcia, ozdoby;</li>
<li><b>sportowy</b>: krótkie, łatwe w układaniu, praktyczne;</li>
<li><b>awangardowy</b>: asymetria, mocne kolory, geometria, nietypowe faktury;</li>
<li><b>wieczorowy i okolicznościowy</b>: upięcia, efektowne fale, dodatki.</li>
</ul>
<h4>Dopasowanie do wieku i zawodu</h4>
<p>U osób starszych korzystne są fryzury z objętością i miękkimi liniami (unoszą rysy), jaśniejsze, ciepłe odcienie zmiękczające zmarszczki. Zawód wymagający związania włosów (gastronomia, medycyna) wymaga długości pozwalającej na upięcie lub krótkiej, praktycznej formy.</p>
<div class="tip">Projekt zawsze uzasadnia się analizą: „ze względu na okrągły kształt twarzy zaproponowano objętość na czubku i boczną grzywkę”.</div>` }
      ],
      pytania: [
        Q("Przy okrągłej twarzy fryzura powinna:", "wydłużać twarz, np. objętością na czubku i boczną grzywką", "mieć dużą objętość na wysokości policzków", "mieć prostą krótką grzywkę i szerokie boki", "być gładko zaczesana do tyłu z objętością po bokach", "Celem jest optyczne wydłużenie."),
        Q("Linia pionowa w fryzurze optycznie:", "wydłuża i wysmukla", "poszerza", "skraca", "nie ma wpływu", "Pozioma poszerza."),
        Q("Twarz prostokątną (podłużną) koryguje się:", "grzywką i objętością po bokach", "wysoką objętością na czubku", "gładkim zaczesaniem do tyłu", "długimi prostymi włosami bez grzywki", "Celem jest optyczne skrócenie."),
        Q("Złoty podział w kompozycji fryzury to proporcja około:", "1 : 1,618", "1 : 1", "1 : 3", "2 : 5", "Proporcja uznawana za harmonijną."),
        Q("Dominanta w kompozycji fryzury to:", "element przyciągający wzrok, akcent", "symetria obu stron", "powtarzanie loków", "kolor naturalny", "Np. kwiat lub kok."),
        Q("Przy profilu wypukłym (cofnięte czoło i broda) zaleca się:", "objętość z przodu nad czołem lub grzywkę", "gładkie zaczesanie do tyłu", "kok nisko na karku bez grzywki", "bardzo krótkie boki i gładką górę", "Grzywka wyrównuje profil."),
        Q("Przy krótkiej szyi korzystne są:", "krótki tył lub wysokie upięcia", "długie włosy z objętością w karku", "bardzo szerokie fale na wysokości szyi", "niskie koki na karku", "Odsłonięty kark wydłuża szyję."),
        Q("Twarz w kształcie serca (szerokie czoło, wąska broda) koryguje się:", "objętością na wysokości żuchwy i boczną grzywką", "objętością na skroniach", "krótkimi bokami przy brodzie", "wysokim upięciem odsłaniającym czoło", "Wyrównuje się dolną część twarzy.")
      ]
    },
    {
      id: "kolor-projekt", tytul: "Kolor w projekcie fryzury", opis: "Dobierzesz kolor do typu urody z wykorzystaniem teorii barw i zaplanujesz technikę koloryzacji.",
      lekcje: [
        { tytul: "Teoria barw w praktyce", tresc: `<h4>Koło barw (Itten)</h4>
<ul>
<li><b>Barwy podstawowe</b> (I rzędu): żółty, czerwony, niebieski.</li>
<li><b>Barwy pochodne</b> (II rzędu): pomarańczowy (żółty + czerwony), fioletowy (czerwony + niebieski), zielony (niebieski + żółty).</li>
<li><b>Barwy III rzędu</b>: mieszanina podstawowej i sąsiedniej pochodnej, np. czerwono-pomarańczowy.</li>
<li><b>Barwy dopełniające</b> leżą naprzeciw siebie: żółty-fioletowy, czerwony-zielony, niebieski-pomarańczowy; zmieszane dają szarość (neutralizacja), zestawione obok siebie wzmacniają się.</li>
<li><b>Barwy ciepłe</b>: żółte, pomarańczowe, czerwone, miedziane, złote; <b>zimne</b>: niebieskie, fioletowe, zielone, popielate.</li>
</ul>
<h4>Kontrasty barwne</h4>
<div class="tw"><table><tr><th>Kontrast</th><th>Przykład we fryzurze</th></tr>
<tr><td>jasne-ciemne (walorowy)</td><td>jasne pasemka na ciemnej bazie</td></tr>
<tr><td>ciepłe-zimne</td><td>miedziane refleksy przy chłodnym brązie</td></tr>
<tr><td>dopełniający</td><td>rzadko w całości; w akcentach awangardowych (np. fiolet przy złotym)</td></tr>
<tr><td>jakościowy (nasycenia)</td><td>intensywna czerwień obok stonowanego brązu</td></tr>
<tr><td>ilościowy</td><td>mała plama mocnego koloru na dużej neutralnej powierzchni</td></tr>
<tr><td>symultaniczny</td><td>kolor wydaje się inny zależnie od sąsiedztwa (np. szarość przy czerwieni wygląda na zielonkawą)</td></tr></table></div>
<h4>Optyczne działanie koloru</h4>
<ul>
<li>Jasne kolory <b>przybliżają i powiększają</b>, dodają objętości (np. jaśniejsze pasma na czubku przy okrągłej twarzy wydłużają).</li>
<li>Ciemne kolory <b>oddalają i wysmuklają</b> (np. ciemniejsze boki zwężają szeroką twarz).</li>
<li>Kolory ciepłe ożywiają cerę, zimne mogą podkreślać zaczerwienienia lub szarość skóry przy złym doborze.</li>
<li>Kolor jednolity podkreśla linię i połysk, wielotonowy daje głębię i ruch.</li>
</ul>
<h4>Konturowanie kolorem (contouring)</h4>
<p>Jaśniejsze pasma przy twarzy rozświetlają i „podnoszą” rysy, ciemniejsze przy żuchwie wyszczuplają. Tak samo jak w makijażu: światło wysuwa, cień chowa.</p>
<div class="tip">Barwy dopełniające leżą naprzeciw siebie w kole barw: ta wiedza służy zarówno do projektowania kontrastów, jak i do neutralizacji niechcianych odcieni.</div>` },
        { tytul: "Typy kolorystyczne urody", tresc: `<h4>Cztery pory roku</h4>
<div class="tw"><table><tr><th>Typ</th><th>Cechy</th><th>Kolor włosów w projekcie</th></tr>
<tr><td>wiosna</td><td>ciepły, jasny: cera brzoskwiniowa lub złocista, oczy jasne (niebieskie, zielone, piwne), włosy złotoblond, jasnorude</td><td>złote blondy, miód, jasna miedź, karmel</td></tr>
<tr><td>lato</td><td>chłodny, stonowany: cera różowawa lub chłodna, oczy szaroniebieskie, szarozielone, włosy popielate</td><td>popielate i perłowe blondy, chłodne jasne brązy, beżowe</td></tr>
<tr><td>jesień</td><td>ciepły, głęboki: cera złocista, piegi, oczy brązowe, zielone, włosy rude, kasztanowe</td><td>miedź, rudości, kasztan, czekolada z ciepłym refleksem</td></tr>
<tr><td>zima</td><td>chłodny, kontrastowy: cera porcelanowa lub oliwkowa, oczy ciemne lub lodowate, włosy ciemne</td><td>czerń, chłodny ciemny brąz, oberżyna, platyna przy odważnym stylu</td></tr></table></div>
<h4>Jak rozpoznać tonację skóry</h4>
<ul>
<li>Żyły na nadgarstku zielonkawe: tonacja ciepła; niebieskawe, fioletowe: chłodna.</li>
<li>Złota biżuteria lepiej wygląda przy ciepłej, srebrna przy chłodnej.</li>
<li>Próba chusty: kolory przykłada się do twarzy bez makijażu, przy świetle dziennym; dobre ożywiają cerę, złe podkreślają cienie i zaczerwienienia.</li>
</ul>
<h4>Zasady doboru koloru</h4>
<ul>
<li>Kolor nie powinien odbiegać od naturalnego o więcej niż ok. 2-3 tony, aby wyglądał naturalnie (chyba że projekt jest awangardowy).</li>
<li>U osób starszych lepsze są kolory nieco jaśniejsze niż dawny naturalny, ciepłe, bo zmiękczają rysy; bardzo ciemny, płaski kolor postarza.</li>
<li>Przy cerze z rumieniem unika się czerwieni i miedzi, które go podkreślają.</li>
<li>Uwzględnia się kolor brwi (różnica zbyt duża wygląda nienaturalnie) i możliwość utrzymania koloru (odrosty).</li>
</ul>
<div class="tip">Typ „lato” i „zima” to tonacje chłodne, „wiosna” i „jesień” ciepłe. Typ zima wyróżnia się wysokim kontrastem między cerą a włosami.</div>` },
        { tytul: "Techniki koloryzacji w projekcie", tresc: `<h4>Techniki i ich efekt</h4>
<div class="tw"><table><tr><th>Technika</th><th>Efekt</th><th>Dla kogo</th></tr>
<tr><td>balejaż (balayage)</td><td>ręcznie malowane pasma, miękkie, naturalne przejścia</td><td>średnie i długie włosy, efekt „muśnięcia słońcem”</td></tr>
<tr><td>ombre</td><td>wyraźne przejście ciemne-jasne od nasady do końców</td><td>długie włosy, mało wizyt (odrost niewidoczny)</td></tr>
<tr><td>sombre</td><td>subtelniejsze, mniej kontrastowe ombre</td><td>osoby szukające naturalności</td></tr>
<tr><td>pasemka klasyczne (folie)</td><td>równomiernie rozjaśnione cienkie pasma</td><td>rozjaśnienie bez pełnej koloryzacji</td></tr>
<tr><td>babylights</td><td>bardzo cienkie pasemka</td><td>naturalne blondy, maskowanie siwizny</td></tr>
<tr><td>color melting</td><td>płynne „przelanie” kilku odcieni bez granic</td><td>efekt wielowymiarowy</td></tr>
<tr><td>blok koloru (color blocking)</td><td>wyraźne pola różnych kolorów zgodnie z geometrią strzyżenia</td><td>fryzury awangardowe</td></tr>
<tr><td>peekaboo</td><td>kolor ukryty w spodniej warstwie</td><td>osoby chcące dyskretnego akcentu</td></tr></table></div>
<h4>Planowanie w projekcie</h4>
<ol>
<li>Ocena koloru wyjściowego (wysokość tonu, siwizna, wcześniejsze farby).</li>
<li>Ustalenie koloru docelowego i różnicy tonów; czy potrzebne jest rozjaśnienie, dekoloryzacja, pre-pigmentacja.</li>
<li>Wybór techniki i rozmieszczenia pasm (np. ramka twarzy, czubek).</li>
<li>Dobór preparatów: numer farby, oksydant, proporcje, czas, kolejność nakładania.</li>
<li>Tonowanie i pielęgnacja po koloryzacji.</li>
</ol>
<h4>Zapis w dokumentacji</h4>
<p>Przykład: „Baza 6.0 + 6.3 (1:1), oksydant 6%, 1:1, odrost i długości, 35 min. Pasma przy twarzy i na czubku: rozjaśniacz + 6%, folie, kontrola do poziomu 9, tonowanie 9.2 + 1,9%, 20 min.” Taki zapis pozwala powtórzyć efekt.</p>
<h4>Kolor a strzyżenie</h4>
<p>Kolor powinien podkreślać linie strzyżenia: przy bobie jasne pasma wzdłuż linii obwodu podkreślają ruch, przy graduacji ciemniejsza strefa na karku pogłębia kształt. Najpierw strzyżenie (lub jego zarys), potem koloryzacja dopasowana do warstw, na koniec korekta i stylizacja.</p>
<div class="tip">Ombre ma wyraźne przejście kolorów, balejaż to ręcznie malowane pasma; to dwie różne techniki, choć obie dają jasne końce.</div>` }
      ],
      pytania: [
        Q("Barwami podstawowymi w kole barw Ittena są:", "żółty, czerwony, niebieski", "zielony, fioletowy, pomarańczowy", "biały, czarny, szary", "czerwony, zielony, niebieski", "Pochodne powstają z ich zmieszania."),
        Q("Barwą dopełniającą do pomarańczowego jest:", "niebieski", "żółty", "czerwony", "zielony", "Leży naprzeciw w kole barw."),
        Q("Jasne kolory włosów optycznie:", "przybliżają i powiększają", "oddalają i zmniejszają", "zawsze wysmuklają twarz", "nie zmieniają odbioru formy", "Ciemne kolory oddalają i wysmuklają."),
        Q("Typ urody „lato” charakteryzuje się:", "chłodną, stonowaną kolorystyką", "ciepłą i głęboką kolorystyką", "wysokim kontrastem cery i włosów", "rudymi włosami i piegami", "Lato i zima to typy chłodne."),
        Q("Dla typu „jesień” w projekcie fryzury zaleca się kolory:", "miedziane, rude, kasztanowe", "popielate blondy", "chłodną czerń", "platynę z fioletem", "Jesień to typ ciepły i głęboki."),
        Q("Technika, w której pasma maluje się ręcznie pędzlem dla miękkiego efektu, to:", "balejaż", "ombre", "color blocking", "pasemka przez czepek", "Balayage z franc. „zamiatanie”."),
        Q("Zielonkawe żyły na nadgarstku wskazują zwykle na tonację skóry:", "ciepłą", "chłodną", "neutralną zawsze", "nie mają związku", "Niebieskie żyły wskazują na chłodną."),
        Q("Kontrast symultaniczny polega na tym, że:", "kolor wydaje się inny zależnie od sąsiadującego koloru", "łączy się dwa kolory ciepłe", "stosuje się tylko czerń i biel", "kolor jest jednolity", "Np. szarość przy czerwieni wydaje się zielonkawa.")
      ]
    },
    {
      id: "historia", tytul: "Fryzury historyczne", opis: "Rozpoznasz fryzury charakterystyczne dla epok i odtworzysz ich elementy w projekcie stylizacji.",
      lekcje: [
        { tytul: "Od starożytności do renesansu", tresc: `<h4>Starożytny Egipt</h4>
<ul>
<li>Golenie głów (higiena, klimat) i noszenie <b>peruk</b> z włosów ludzkich, wełny, włókien roślinnych; kształty geometryczne, proste grzywki, gęsto splecione warkoczyki.</li>
<li>Barwienie <b>henną</b>, ozdoby ze złota, diademy z wizerunkiem kobry (ureusz) u faraonów.</li>
<li>U dzieci tzw. „lok młodości”: jeden warkocz z boku ogolonej głowy.</li>
</ul>
<h4>Grecja i Rzym</h4>
<ul>
<li>Grecja: włosy zbierane w <b>węzeł grecki</b> na potylicy, opaski (wstążki, diademy), loki przy twarzy; ideał harmonii i proporcji.</li>
<li>Rzym: fryzury coraz bardziej wymyślne; w czasach Flawiuszów wysokie konstrukcje loków nad czołem (na stelażach), w okresie republiki skromne koki; mężczyźni krótko strzyżeni.</li>
<li>Używano żelazek do loków (calamistrum), rozjaśniania i peruk z włosów jeńców.</li>
</ul>
<h4>Średniowiecze</h4>
<ul>
<li>Włosy mężatek zakryte <b>czepcami, welonami, podwikami</b>; panny nosiły rozpuszczone włosy lub warkocze z wiankiem.</li>
<li>W XV w. modne wysokie, wygolone czoło i nakrycia głowy, np. <b>hennin</b> (wysoki stożek z welonem), czepiec rogaty.</li>
<li>Mężczyźni: fryzury „na pazia” (równo przycięte do linii uszu), tonsura u duchownych.</li>
</ul>
<h4>Renesans</h4>
<ul>
<li>Odkryte wysokie czoło, włosy gładko zaczesane z przedziałkiem pośrodku, siatki z perłami, warkocze upięte wokół głowy.</li>
<li>Modny jasny, złocisty kolor (rozjaśnianie słońcem i preparatami); we Włoszech kapelusze bez denka do rozjaśniania.</li>
<li>Elżbietańska Anglia: drobne loki z przodu, podwyższenie nad czołem, rudy kolor na wzór królowej.</li>
</ul>
<div class="tip">Hennin to wysokie stożkowe nakrycie głowy z końca średniowiecza, a węzeł grecki to kok na potylicy z opaską; oba bywają w pytaniach o rozpoznanie epoki.</div>` },
        { tytul: "Barok, rokoko i XIX wiek", tresc: `<h4>Barok (XVII w.)</h4>
<ul>
<li>Kobiety: <b>fontaź (fontange)</b>, wysoka konstrukcja z koronek i wstążek na drucianym stelażu nad czołem, nazwana od Angeliki de Fontanges, faworyty Ludwika XIV.</li>
<li>Mężczyźni: <b>peruka allonge</b>, długie loki spływające na ramiona i plecy, symbol statusu (dwór Ludwika XIV).</li>
</ul>
<h4>Rokoko (XVIII w.)</h4>
<ul>
<li>Bardzo wysokie fryzury kobiece (<b>pouf</b>) na stelażach i poduszkach, <b>pudrowane</b> na biało lub szaro, ozdobione piórami, kwiatami, a nawet modelami statków.</li>
<li>Symbol epoki: Maria Antonina i jej fryzjer Léonard.</li>
<li>Mężczyźni: krótsze, pudrowane peruki z warkoczykiem związanym kokardą (harcap), loki nad uszami.</li>
</ul>
<h4>Empire i romantyzm (przełom XVIII i XIX w.)</h4>
<ul>
<li>Po rewolucji francuskiej powrót do antyku: fryzury <b>à la grecque</b>, opaski, loczki przy twarzy.</li>
<li>Krótkie fryzury <b>à la Titus</b> u kobiet i mężczyzn.</li>
</ul>
<h4>Biedermeier i epoka wiktoriańska</h4>
<ul>
<li>Gładkie zaczesanie z przedziałkiem pośrodku, <b>loki lub pętle przy skroniach</b>, wysoki kok (węzeł Apolla) na czubku z ozdobami.</li>
<li>Później włosy upięte nisko w siatce (chignon), loki z tyłu; u mężczyzn bokobrody, wąsy.</li>
</ul>
<h4>Secesja (ok. 1890-1910)</h4>
<ul>
<li>Bujne, puszyste upięcia z falami nad czołem (styl <b>pompadour</b>, „Gibson girl”), duża objętość na wałku z włosów (tzw. wypełniacz).</li>
<li>W 1872 r. Marcel Grateau wynalazł <b>ondulację żelazkiem</b> (fale marcel), co zmieniło fryzjerstwo.</li>
</ul>
<div class="tw"><table><tr><th>Epoka</th><th>Rozpoznawczy element</th></tr>
<tr><td>barok</td><td>fontaź, peruka allonge</td></tr>
<tr><td>rokoko</td><td>bardzo wysokie, pudrowane fryzury</td></tr>
<tr><td>empire</td><td>stylizacja antyczna, à la Titus</td></tr>
<tr><td>biedermeier</td><td>loki na skroniach, węzeł Apolla</td></tr>
<tr><td>secesja</td><td>bujne pompadour, fale marcel</td></tr></table></div>
<div class="tip">Pudrowane, wysokie fryzury to rokoko, a peruka allonge to barok. Łatwo je pomylić, bo obie epoki kojarzą się z dworem francuskim.</div>` },
        { tytul: "Fryzury XX wieku i współczesne", tresc: `<h4>Dekady XX wieku</h4>
<div class="tw"><table><tr><th>Okres</th><th>Fryzury i zjawiska</th></tr>
<tr><td>lata 20.</td><td><b>bob</b> i fryzura „na chłopczycę” (garçonne), płaskie fale wodne i marcel przy twarzy, opaski z piórem</td></tr>
<tr><td>lata 30.</td><td>miękkie fale i loki do ramion, trwała ondulacja, styl gwiazd Hollywood (platynowy blond)</td></tr>
<tr><td>lata 40.</td><td><b>victory rolls</b> (wałki nad czołem), siatki, turbany; praktyczność w czasie wojny</td></tr>
<tr><td>lata 50.</td><td>loki pin curl, koński ogon, fryzura „Audrey” z krótką grzywką; u mężczyzn pompadour z brylantyną (rock and roll)</td></tr>
<tr><td>lata 60.</td><td><b>beehive (ul)</b> z tapirowania, geometryczne cięcia <b>Vidala Sassoona</b> (np. five-point cut), fryzura „na pazia” Beatlesów</td></tr>
<tr><td>lata 70.</td><td>afro, długie proste włosy hippisów, <b>shag</b>, fale Farrah Fawcett, punkowy irokez</td></tr>
<tr><td>lata 80.</td><td>trwała z dużą objętością, <b>mullet</b>, intensywny lakier, asymetria, neonowe kolory</td></tr>
<tr><td>lata 90.</td><td>„The Rachel” (warstwy), grunge, cienkie brwi i pasemka „zebra”</td></tr></table></div>
<h4>Fryzury okolicznościowe inspirowane historią</h4>
<ul>
<li>Stylizacje retro (lata 20., 40., 50.) na wesela i sesje: fale wodne, victory rolls, koki z wałkiem.</li>
<li>Fryzury barokowe i rokokowe w teatrze i na balach kostiumowych: peruki, postiże, tapirowanie, puder (dziś suchy szampon lub kolorowy spray).</li>
<li>Upięcia greckie: opaska, luźne loki, warkocze wokół głowy.</li>
</ul>
<h4>Odtwarzanie fryzury historycznej</h4>
<ol>
<li>Analiza ikonografii (portrety, zdjęcia z epoki) i proporcji.</li>
<li>Dobór technik współczesnych: wałki, lokówka, tapirowanie, wypełniacze (donut, wałki do koka), postiże, peruki.</li>
<li>Uproszczenie konstrukcji pod potrzeby klienta i okazji, zachowując rozpoznawalne elementy (sylwetkę, linię, ozdoby).</li>
<li>Stylizacja całości: makijaż, strój, dodatki w duchu epoki.</li>
</ol>
<div class="tip">Vidal Sassoon w latach 60. wprowadził precyzyjne, geometryczne cięcia, a fale marcel wynalazł Marcel Grateau w XIX wieku. Nazwiska te pojawiają się w pytaniach.</div>` }
      ],
      pytania: [
        Q("Fontaź (fontange) to charakterystyczna fryzura epoki:", "baroku", "renesansu", "secesji", "lat 60. XX wieku", "Konstrukcja z koronek na stelażu nad czołem."),
        Q("Wysokie, pudrowane fryzury kobiece na stelażach to cecha:", "rokoka", "średniowiecza", "starożytnego Egiptu", "lat 20. XX wieku", "Symbolem jest Maria Antonina."),
        Q("Peruka allonge to:", "męska peruka z długimi lokami, typowa dla baroku", "stożkowe nakrycie głowy", "kobiecy kok grecki", "krótka fryzura chłopczycy", "Moda dworu Ludwika XIV."),
        Q("Hennin to:", "wysokie stożkowe nakrycie głowy z końca średniowiecza", "fryzura rokokowa", "rodzaj trwałej ondulacji", "warkocz egipski", "Często z welonem."),
        Q("Fryzura bob i styl „na chłopczycę” stały się modne w:", "latach 20. XX wieku", "latach 80. XX wieku", "renesansie", "baroku", "Symbol emancypacji kobiet."),
        Q("Ondulację żelazkiem (fale marcel) wynalazł:", "Marcel Grateau", "Vidal Sassoon", "Léonard", "Angelika de Fontanges", "W 1872 roku."),
        Q("Fryzura beehive (ul) jest typowa dla:", "lat 60. XX wieku", "lat 20.", "biedermeieru", "starożytnego Rzymu", "Wysoka objętość z tapirowania."),
        Q("Loki lub pętle przy skroniach i węzeł Apolla na czubku to cecha fryzur:", "biedermeieru", "baroku", "lat 70. XX wieku", "Egiptu", "Pierwsza połowa XIX wieku.")
      ]
    },
    {
      id: "projekt-wykonanie", tytul: "Projekt i fryzury okolicznościowe", opis: "Przygotujesz pełną dokumentację projektu i wykonasz fryzurę okolicznościową z upięć, warkoczy i postiży.",
      lekcje: [
        { tytul: "Dokumentacja projektu", tresc: `<h4>Elementy dokumentacji</h4>
<ol>
<li><b>Karta klienta</b>: dane, wywiad, analiza włosów, skóry głowy, twarzy i sylwetki, przeciwwskazania, wyniki prób.</li>
<li><b>Założenia projektu</b>: okazja, styl, oczekiwania, cel korekty (np. wydłużenie twarzy).</li>
<li><b>Rysunek projektowy</b>: fryzura en face, z profilu i z tyłu, z zaznaczeniem linii, kierunków, objętości i koloru.</li>
<li><b>Opis technologiczny</b>: kolejność czynności, techniki (strzyżenie, koloryzacja, ondulacja, stylizacja), narzędzia, preparaty z proporcjami i czasem.</li>
<li><b>Kalkulacja kosztów</b>: materiały, czas pracy, cena usługi.</li>
<li><b>Dokumentacja fotograficzna</b>: przed i po zabiegu, w tych samych ujęciach i świetle.</li>
<li><b>Zalecenia pielęgnacyjne</b> dla klienta.</li>
</ol>
<h4>Rysunek głowy w proporcjach</h4>
<ul>
<li>Głowę rysuje się w owalu; oczy leżą mniej więcej w połowie wysokości głowy.</li>
<li>Twarz dzieli się na trzy równe części (linia włosów, brwi, podstawa nosa, broda).</li>
<li>Szerokość głowy en face odpowiada ok. pięciu szerokościom oka.</li>
<li>Uszy między linią brwi a podstawą nosa.</li>
<li>Strzałki pokazują kierunek uczesania, cieniowanie wskazuje objętość, kolor zaznacza się kredkami lub w programie graficznym.</li>
</ul>
<h4>Kalkulacja ceny usługi: przykład</h4>
<div class="tw"><table><tr><th>Pozycja</th><th>Wartość</th></tr>
<tr><td>farba 90 g (1,5 tubki po 60 g, tubka 30 zł)</td><td>45,00 zł</td></tr>
<tr><td>oksydant 90 ml (1 l = 25 zł)</td><td>2,25 zł</td></tr>
<tr><td>szampon, odżywka, preparaty do stylizacji</td><td>8,00 zł</td></tr>
<tr><td>robocizna 2 h × 60 zł</td><td>120,00 zł</td></tr>
<tr><td>razem koszty</td><td>175,25 zł</td></tr>
<tr><td>marża 20%</td><td>35,05 zł</td></tr>
<tr><td>cena usługi netto</td><td>210,30 zł</td></tr></table></div>
<h4>Prezentacja</h4>
<p>Projekt przedstawia się klientowi przed wykonaniem i uzyskuje jego akceptację (podpis na karcie). Na egzaminie oceniane są: zgodność wykonania z projektem, poprawność opisu technologii, estetyka i czytelność dokumentacji.</p>
<div class="tip">Projekt musi być spójny: analiza (np. twarz okrągła) uzasadnia formę, a formę realizują wybrane techniki opisane w kolejności wykonania.</div>` },
        { tytul: "Upięcia i warkocze", tresc: `<h4>Przygotowanie włosów</h4>
<ul>
<li>Włosy umyte dzień wcześniej lub z dodatkiem pudru (teksturyzacja) trzymają upięcie lepiej niż świeżo umyte i śliskie.</li>
<li>Podkręcenie lokówką lub wałkami termicznymi nadaje strukturę i objętość.</li>
<li>Tapirowanie (natapirowanie) od wewnątrz pasm u nasady daje podstawę objętości; wierzch wygładza się szczotką z włosia.</li>
<li>Narzędzia: wsuwki (do mocowania), szpilki (do delikatnego podpinania), gumki silikonowe, wypełniacze (donut, wałek do koka), lakier.</li>
</ul>
<h4>Podstawowe upięcia</h4>
<div class="tw"><table><tr><th>Upięcie</th><th>Wykonanie</th><th>Okazja</th></tr>
<tr><td>kok klasyczny</td><td>kucyk, owinięcie wokół podstawy lub wypełniacza, wsuwki</td><td>wieczór, taniec, praca</td></tr>
<tr><td>banan (rolka francuska)</td><td>włosy zebrane z boku, skręcone pionowo w rolkę wzdłuż tyłu głowy, mocowane wsuwkami „na krzyż”</td><td>elegancja, wieczór</td></tr>
<tr><td>kok niski luźny (romantyczny)</td><td>skręcane pasma upinane nisko na karku, wyciągnięte kosmyki</td><td>ślub, wesele</td></tr>
<tr><td>koczek baletnicy</td><td>wysoki, gładki, mały kok</td><td>sport, taniec, młodzieżowy styl</td></tr></table></div>
<h4>Warkocze</h4>
<ul>
<li><b>klasyczny 3-pasmowy</b>: pasma zewnętrzne przekłada się na środek, nad środkowym;</li>
<li><b>francuski</b>: dobieranie pasm przy każdym przełożeniu, pasma <b>nad</b> środkiem; warkocz przylega do głowy;</li>
<li><b>holenderski (odwrócony)</b>: dobieranie pasm, ale przekładanie <b>pod</b> środkiem; warkocz wystaje ponad powierzchnię;</li>
<li><b>kłos (rybi ogon)</b>: dwa pasma, z zewnętrznej krawędzi każdego przekłada się cienkie pasemko na drugie;</li>
<li><b>4- i 5-pasmowe</b>, korony z warkoczy wokół głowy, warkocze skręcane (twist).</li>
</ul>
<p>Po zapleceniu warkocz „rozluźnia się” (pancaking), wyciągając lekko krawędzie, co daje objętość.</p>
<div class="tip">Francuski: pasma nad środkiem (warkocz wtopiony), holenderski: pod środkiem (warkocz wypukły). To typowe pytanie testowe.</div>` },
        { tytul: "Fryzury ślubne, wieczorowe i postiże", tresc: `<h4>Fryzura ślubna</h4>
<ul>
<li><b>Fryzura próbna</b> na kilka tygodni przed ślubem: dobór do sukni (dekolt, plecy), welonu, ozdób, kształtu twarzy, a także test trwałości.</li>
<li>Welon mocuje się nad kokiem lub pod nim, zależnie od długości i ciężaru; grzebyk welonu wpina się w stabilną podstawę z wsuwek.</li>
<li>Do dekoltu typu łódka lub golf pasują wysokie upięcia, do dekoltu V i odkrytych pleców rozpuszczone fale lub niskie koki.</li>
<li>Ozdoby: kwiaty naturalne (zabezpieczone), grzebyki, opaski, diademy, spinki z perłami.</li>
</ul>
<h4>Fryzura wieczorowa</h4>
<p>Charakteryzuje się efektowną formą i połyskiem: hollywoodzkie fale (lokówka, szczotkowanie, klipsy w zagłębieniach fal), wysokie upięcia, gładkie koki z akcentem. Dobór do stroju i charakteru imprezy (bal, gala, studniówka).</p>
<h4>Postiże i włosy dopinane</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Zastosowanie</th></tr>
<tr><td>peruka</td><td>całkowite pokrycie głowy: łysienie, teatr, zmiana wizerunku</td></tr>
<tr><td>tupecik, topper</td><td>uzupełnienie przerzedzeń na czubku</td></tr>
<tr><td>treska</td><td>pasmo włosów na taśmie, do zagęszczenia lub wydłużenia</td></tr>
<tr><td>doczepy na klipsy</td><td>tymczasowe zagęszczenie na okazję</td></tr>
<tr><td>koki, warkocze i kucyki sztuczne</td><td>szybkie uzyskanie efektownego upięcia</td></tr>
<tr><td>przedłużanie trwałe (keratyna, taśmy, mikroringi)</td><td>stała zmiana długości, konieczna korekta co kilka tygodni</td></tr></table></div>
<h4>Pielęgnacja postiży</h4>
<p>Włosy naturalne myje się delikatnym szamponem w letniej wodzie, nie trze, suszy na główce manekina; można je farbować i układać na gorąco. Włosy syntetyczne myje się w preparatach do syntetyków i nie wolno ich prostować ani kręcić zwykłym narzędziem termicznym, chyba że są termoodporne. Postiże przechowuje się na główkach lub w siatkach.</p>
<div class="tip">Do dekoltu łódka i golf najlepiej pasuje upięcie wysokie, a do pleców odkrytych i dekoltu V fale lub niski kok.</div>` }
      ],
      pytania: [
        Q("Rysunek projektowy fryzury przedstawia się zwykle:", "en face, z profilu i z tyłu", "tylko z przodu", "wyłącznie z góry", "tylko w formie opisu", "Pokazuje formę w trzech wymiarach."),
        Q("Na rysunku głowy oczy leżą mniej więcej:", "w połowie wysokości głowy", "na 1/4 wysokości od góry", "tuż pod linią włosów", "na wysokości ust", "Typowy błąd to rysowanie oczu za wysoko."),
        Q("Warkocz holenderski różni się od francuskiego tym, że pasma przekłada się:", "pod środkowym pasmem", "nad środkowym pasmem", "tylko z jednej strony", "bez dobierania pasm", "Daje warkocz wypukły."),
        Q("Fryzurę próbną przed ślubem wykonuje się, aby:", "dobrać fryzurę do sukni, welonu i sprawdzić jej trwałość", "wykonać próbę uczuleniową", "skrócić czas zabiegu do 5 minut", "zmienić kolor włosów", "Ustala się projekt i ozdoby."),
        Q("Tupecik (topper) służy do:", "uzupełnienia przerzedzeń na czubku głowy", "całkowitego pokrycia głowy", "przedłużania końców", "ochrony włosów przed farbą", "Peruka pokrywa całą głowę."),
        Q("Włosów syntetycznych w postiżach nie wolno zazwyczaj:", "układać zwykłą prostownicą lub lokówką", "czesać", "przechowywać na główce", "myć w letniej wodzie", "Chyba że są termoodporne."),
        Q("Do dekoltu typu łódka najlepiej pasuje:", "wysokie upięcie", "długie rozpuszczone włosy", "bardzo niski kok na karku", "fryzura z dużą objętością na wysokości ramion", "Odsłania szyję i linię ramion."),
        Q("Tapirowanie wykonuje się:", "od wewnętrznej strony pasm przy nasadzie dla objętości", "na końcach włosów dla połysku", "wyłącznie na mokrych włosach", "tylko na włosach syntetycznych", "Wierzch się wygładza.")
      ]
    }
  ]);

  pod("FRK.04", [
    {
      id: "diagnoza-skory", tytul: "Diagnoza skóry twarzy", opis: "Przeprowadzisz wywiad i diagnozę skóry, rozpoznasz wykwity i przeciwwskazania do zabiegu.",
      lekcje: [
        { tytul: "Metody diagnozy i typy skóry", tresc: `<h4>Etapy diagnozy</h4>
<ol>
<li><b>Wywiad</b>: wiek, choroby (cukrzyca, padaczka, choroby serca), leki (retinoidy doustne, antybiotyki, sterydy, leki światłouczulające), alergie, ciąża, przebyte zabiegi (kwasy, lasery, botoks, wypełniacze), pielęgnacja domowa, nawyki (słońce, palenie).</li>
<li><b>Oględziny</b> skóry po demakijażu przy dobrym świetle i pod lupą.</li>
<li><b>Badanie dotykiem</b>: grubość, elastyczność (próba fałdu), napięcie, tłustość.</li>
<li><b>Badania aparaturowe</b>: lampa Wooda, korneometr (nawilżenie), sebumetr (łój), pH-metr, kamera, analizatory wieloparametrowe.</li>
</ol>
<h4>Lampa Wooda</h4>
<div class="tw"><table><tr><th>Świecenie</th><th>Interpretacja</th></tr>
<tr><td>niebieskofioletowe</td><td>skóra normalna</td></tr>
<tr><td>fioletowe, ciemniejsze</td><td>skóra odwodniona, cienka</td></tr>
<tr><td>białe plamki</td><td>zrogowaciały naskórek</td></tr>
<tr><td>żółtopomarańczowe punkty</td><td>łój, zaskórniki (porfiryny bakterii)</td></tr>
<tr><td>brązowe plamy</td><td>przebarwienia (melanina)</td></tr>
<tr><td>zielonkawe</td><td>zmiany grzybicze (skierowanie do lekarza)</td></tr></table></div>
<h4>Typy i stany skóry</h4>
<div class="tw"><table><tr><th>Typ</th><th>Cechy</th></tr>
<tr><td>normalna</td><td>gładka, matowa, pory niewidoczne, dobre napięcie</td></tr>
<tr><td>sucha</td><td>cienka, matowa, szorstka, uczucie ściągnięcia, drobne zmarszczki, pory niewidoczne</td></tr>
<tr><td>tłusta</td><td>błyszcząca, gruba, rozszerzone pory, zaskórniki</td></tr>
<tr><td>mieszana</td><td>tłusta strefa T (czoło, nos, broda), sucha lub normalna na policzkach</td></tr></table></div>
<p>Typ skóry jest uwarunkowany genetycznie, a <b>stany</b> (odwodnienie, wrażliwość, naczynkowość, trądzik, przebarwienia, starzenie) mogą się zmieniać. Skóra tłusta może być jednocześnie <b>odwodniona</b>.</p>
<h4>Fototypy wg Fitzpatricka</h4>
<p>I: bardzo jasna, zawsze się pali, nigdy nie opala; II: jasna, łatwo się pali, opala słabo; III: opala się stopniowo; IV: oliwkowa, rzadko się pali; V: ciemna; VI: bardzo ciemna. Fototyp wpływa na dobór zabiegów złuszczających i ryzyko przebarwień.</p>
<div class="tip">Odwodnienie to brak wody, a suchość to brak lipidów. Skóra tłusta może być odwodniona i wtedy wymaga nawilżania, nie wysuszania.</div>` },
        { tytul: "Wykwity i zmiany skórne", tresc: `<h4>Wykwity pierwotne</h4>
<div class="tw"><table><tr><th>Wykwit</th><th>Opis</th></tr>
<tr><td>plama</td><td>zmiana zabarwienia bez zmiany powierzchni (rumień, przebarwienie, odbarwienie)</td></tr>
<tr><td>grudka</td><td>wyniosła, niewielka (do ok. 0,5-1 cm), ustępuje bez blizny</td></tr>
<tr><td>guzek</td><td>głębszy, większy, może pozostawić bliznę</td></tr>
<tr><td>bąbel pokrzywkowy</td><td>obrzęk skóry, swędzący, szybko znika</td></tr>
<tr><td>pęcherzyk, pęcherz</td><td>wypełniony płynem surowiczym (pęcherz większy)</td></tr>
<tr><td>krosta</td><td>wypełniona ropą</td></tr></table></div>
<h4>Wykwity wtórne</h4>
<p>Powstają z pierwotnych: <b>nadżerka</b> (ubytek naskórka, bez blizny), <b>owrzodzenie</b> (głębszy ubytek, z blizną), <b>strup</b>, <b>łuska</b>, <b>blizna</b>, <b>przeczos</b> (ślad drapania), <b>pęknięcie</b>, przebarwienie pozapalne.</p>
<h4>Najczęstsze problemy w gabinecie</h4>
<ul>
<li><b>Trądzik pospolity</b>: zaskórniki otwarte (czarne) i zamknięte (białe), grudki, krosty, cysty; u nastolatków i dorosłych. Przy trądziku ropnym i cystowym nie wykonuje się peelingów mechanicznych ani masażu.</li>
<li><b>Trądzik różowaty</b>: rumień, teleangiektazje, grudki, krosty w środkowej części twarzy, brak zaskórników; unika się ciepła, alkoholu, ostrych peelingów, masażu rozgrzewającego.</li>
<li><b>Cera naczyniowa</b>: rozszerzone naczynka (teleangiektazje), skłonność do rumienia; zabiegi chłodzące, łagodne.</li>
<li><b>Przebarwienia</b>: piegi, plamy soczewicowate, ostuda (melasma, często w ciąży i po antykoncepcji), przebarwienia pozapalne; konieczny filtr SPF.</li>
<li><b>Prosaki</b>: drobne białe grudki z keratyny, usuwane nakłuciem jałową igłą przez wykwalifikowaną osobę.</li>
</ul>
<h4>Przeciwwskazania do zabiegów</h4>
<div class="tw"><table><tr><th>Bezwzględne (zabieg niemożliwy)</th><th>Względne (ostrożność, modyfikacja)</th></tr>
<tr><td>choroby zakaźne skóry: opryszczka w fazie czynnej, liszajec, grzybica, brodawki w miejscu zabiegu; gorączka; zmiany o niejasnym charakterze (podejrzenie nowotworu)</td><td>ciąża (aparatura, kwasy), cera naczyniowa, alergie, cukrzyca, nadciśnienie, przyjmowanie leków światłouczulających</td></tr></table></div>
<div class="tip">Zmianę barwnikową, która rośnie, krwawi lub ma nieregularne brzegi, kosmetolog kieruje do dermatologa i nie wykonuje na niej zabiegu.</div>` },
        { tytul: "Starzenie skóry i karta zabiegowa", tresc: `<h4>Rodzaje starzenia</h4>
<ul>
<li><b>Chronologiczne (wewnątrzpochodne)</b>: z wiekiem spada produkcja kolagenu i elastyny, kwasu hialuronowego, łoju; skóra cieńsza, sucha, z utratą jędrności.</li>
<li><b>Fotostarzenie</b>: promieniowanie UVA (głębiej, starzenie) i UVB (oparzenia, rumień); grube zmarszczki, przebarwienia, teleangiektazje, skóra pogrubiała i szorstka.</li>
<li>Czynniki przyspieszające: palenie, zanieczyszczenia, stres, brak snu, dieta bogata w cukry (glikacja).</li>
</ul>
<h4>Zmarszczki</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Przyczyna</th><th>Przykład</th></tr>
<tr><td>mimiczne</td><td>skurcze mięśni</td><td>lwia zmarszczka, kurze łapki</td></tr>
<tr><td>statyczne, grawitacyjne</td><td>utrata jędrności, opadanie tkanek</td><td>bruzdy nosowo-wargowe, „chomiki”</td></tr>
<tr><td>z odwodnienia</td><td>przesuszenie warstwy rogowej</td><td>drobna siateczka, ustępuje po nawilżeniu</td></tr></table></div>
<h4>Karta zabiegowa (karta klienta)</h4>
<ol>
<li>Dane osobowe i kontaktowe (zgoda RODO na przetwarzanie).</li>
<li>Wywiad: zdrowie, leki, alergie, ciąża, przeciwwskazania.</li>
<li>Diagnoza: typ i stan skóry, fototyp, zmiany, wynik lampy Wooda.</li>
<li>Cel zabiegu i plan serii (np. 6 zabiegów co 7-14 dni).</li>
<li>Przebieg: preparaty (nazwa, stężenie), parametry urządzeń, czas, reakcja skóry.</li>
<li>Zalecenia domowe (pielęgnacja, SPF, czego unikać) i termin kolejnej wizyty.</li>
<li>Podpis klienta (świadoma zgoda) i kosmetologa.</li>
</ol>
<h4>Zalecenia po zabiegach złuszczających</h4>
<p>Unikanie słońca i solarium, krem z filtrem <b>SPF 50</b>, bez peelingów domowych i retinoidów przez kilka dni, delikatne mycie, nawilżanie i łagodzenie (pantenol, alantoina). Zabiegi kwasami i laserowe najlepiej w miesiącach o niskim nasłonecznieniu.</p>
<div class="tip">Karta zabiegowa jest dokumentem: chroni klienta i kosmetologa, a na egzaminie ocenia się jej kompletność (wywiad, diagnoza, przebieg, zalecenia).</div>` }
      ],
      pytania: [
        Q("Żółtopomarańczowe świecenie w lampie Wooda wskazuje na:", "łój i zaskórniki", "skórę normalną", "przebarwienia melaninowe", "odwodnienie", "To porfiryny bakterii w zaskórnikach."),
        Q("Skóra mieszana charakteryzuje się:", "tłustą strefą T i suchymi lub normalnymi policzkami", "równomiernym przetłuszczaniem całej twarzy", "brakiem porów", "obecnością teleangiektazji na całej twarzy", "Strefa T to czoło, nos i broda."),
        Q("Krosta to wykwit:", "wypełniony ropą", "wypełniony płynem surowiczym", "płaski, zmieniający tylko barwę", "powstały z drapania", "Pęcherzyk zawiera płyn surowiczy."),
        Q("Nadżerka różni się od owrzodzenia tym, że:", "jest płytsza i goi się bez blizny", "zawsze krwawi", "jest wykwitem pierwotnym", "zawiera ropę", "Owrzodzenie pozostawia bliznę."),
        Q("Bezwzględnym przeciwwskazaniem do zabiegu na twarzy jest:", "czynna opryszczka w miejscu zabiegu", "skóra sucha", "skóra mieszana", "fototyp II", "Grozi rozsianiem zakażenia."),
        Q("Przy trądziku różowatym należy unikać:", "zabiegów rozgrzewających i ostrych peelingów", "kremów łagodzących", "filtrów SPF", "masek chłodzących", "Ciepło nasila rumień."),
        Q("Fotostarzenie wywołuje przede wszystkim:", "promieniowanie UVA", "niedobór wody pitnej", "masaż twarzy", "sen na plecach", "UVA wnika głęboko do skóry właściwej."),
        Q("Zmarszczki z odwodnienia:", "ustępują po nawilżeniu skóry", "są zawsze głębokimi bruzdami", "powstają od skurczów mięśni", "wymagają leczenia chirurgicznego", "To drobna siateczka w warstwie rogowej.")
      ]
    },
    {
      id: "kosmetyki", tytul: "Składniki kosmetyków", opis: "Odczytasz skład INCI i dobierzesz substancje aktywne, kwasy i filtry do problemu skóry.",
      lekcje: [
        { tytul: "INCI i podstawowe grupy składników", tresc: `<h4>Zasady zapisu INCI</h4>
<ul>
<li>Składniki wymienia się w kolejności <b>malejącego stężenia</b>; składniki poniżej 1% mogą być w dowolnej kolejności.</li>
<li>Pierwszy zwykle jest <b>Aqua</b> (woda), w olejach i balsamach bezwodnych oleje.</li>
<li>Barwniki oznacza się numerem <b>CI</b> (Colour Index), kompozycje zapachowe jako <b>Parfum</b>, a alergeny zapachowe (np. Limonene, Linalool) podaje się, gdy przekraczają określone stężenie.</li>
<li>Rośliny podaje się po łacinie (np. Aloe Barbadensis Leaf Juice).</li>
</ul>
<h4>Grupy składników</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Działanie</th><th>Przykłady</th></tr>
<tr><td>humektanty</td><td>wiążą wodę w naskórku</td><td>gliceryna, kwas hialuronowy, mocznik (do ok. 10%), pantenol, sorbitol</td></tr>
<tr><td>emolienty</td><td>natłuszczają, wygładzają, uzupełniają lipidy</td><td>oleje roślinne, skwalan, masło shea, ceramidy</td></tr>
<tr><td>substancje okluzyjne</td><td>tworzą film, ograniczają TEWL (przeznaskórkową utratę wody)</td><td>wazelina, parafina, lanolina, silikony (Dimethicone)</td></tr>
<tr><td>emulgatory</td><td>łączą fazę wodną i olejową</td><td>Cetearyl Alcohol, Glyceryl Stearate, Polysorbate</td></tr>
<tr><td>konserwanty</td><td>chronią przed drobnoustrojami</td><td>Phenoxyethanol, Sodium Benzoate, parabeny</td></tr>
<tr><td>przeciwutleniacze</td><td>chronią przed wolnymi rodnikami i jełczeniem</td><td>tokoferol (wit. E), wit. C, ekstrakt z zielonej herbaty</td></tr>
<tr><td>łagodzące</td><td>zmniejszają podrażnienie</td><td>alantoina, bisabolol, pantenol, wąkrota azjatycka</td></tr></table></div>
<h4>Emulsje</h4>
<p><b>O/W (olej w wodzie)</b>: lekkie, szybko się wchłaniają, do skóry tłustej i normalnej, na dzień. <b>W/O (woda w oleju)</b>: bogate, ochronne, do skóry suchej, na zimę i noc.</p>
<div class="tip">Mocznik do ok. 10% nawilża, a w wyższych stężeniach działa keratolitycznie (złuszczająco), np. w kremach na pięty.</div>` },
        { tytul: "Kwasy i peelingi chemiczne", tresc: `<h4>Rodzaje kwasów</h4>
<div class="tw"><table><tr><th>Kwas</th><th>Grupa</th><th>Właściwości</th></tr>
<tr><td>glikolowy</td><td>AHA</td><td>najmniejsza cząsteczka, wnika najgłębiej, odnowa, zmarszczki, przebarwienia; ryzyko podrażnień</td></tr>
<tr><td>mlekowy</td><td>AHA</td><td>nawilża, łagodniejszy, skóra sucha i wrażliwa</td></tr>
<tr><td>migdałowy</td><td>AHA</td><td>duża cząsteczka, działa powierzchownie i łagodnie, antybakteryjnie; trądzik, przebarwienia, ciemniejsze fototypy</td></tr>
<tr><td>salicylowy</td><td>BHA</td><td>rozpuszczalny w tłuszczach, wnika w ujścia mieszków, przeciwzapalny; trądzik, łojotok</td></tr>
<tr><td>glukonolakton, laktobionowy</td><td>PHA</td><td>bardzo łagodne, nawilżające; skóra wrażliwa, naczyniowa</td></tr>
<tr><td>pirogronowy</td><td>alfa-ketokwas</td><td>silny, trądzik, łojotok, blizny</td></tr>
<tr><td>TCA (trichlorooctowy)</td><td>-</td><td>peeling średniogłęboki w wyższych stężeniach, wykonywany przez lekarza</td></tr></table></div>
<h4>Od czego zależy siła peelingu</h4>
<ul>
<li><b>stężenie</b> (gabinetowe np. 20-50%, domowe zwykle do ok. 10%);</li>
<li><b>pH</b>: im niższe, tym silniejsze działanie (więcej wolnego kwasu);</li>
<li><b>czas</b> kontaktu ze skórą i liczba warstw;</li>
<li>stan skóry (przygotowanie preparatami domowymi, wcześniejsze zabiegi).</li>
</ul>
<h4>Przebieg zabiegu</h4>
<ol>
<li>Demakijaż, odtłuszczenie skóry (preparat przygotowujący), zabezpieczenie okolic wrażliwych (kąciki oczu, nosa i ust) wazeliną.</li>
<li>Nałożenie kwasu pędzelkiem lub wacikiem od czoła, w ustalonej kolejności, kontrola reakcji (rumień, pieczenie, frosting przy niektórych kwasach).</li>
<li><b>Neutralizacja</b> kwasów AHA preparatem zasadowym (np. z wodorowęglanem sodu) lub wodą po zalecanym czasie; kwas salicylowy często samoneutralizuje się.</li>
<li>Maska łagodząca, krem regenerujący i <b>SPF 50</b>.</li>
</ol>
<h4>Przeciwwskazania</h4>
<p>Opryszczka czynna, uszkodzenia skóry, świeża opalenizna, retinoidy doustne (izotretynoina) w ciągu ostatnich miesięcy, ciąża (przy silnych kwasach i salicylowym), alergia na kwas (np. salicylowy przy uczuleniu na aspirynę).</p>
<div class="tip">Kwas migdałowy jest polecany dla skóry wrażliwej i przy ciemniejszych fototypach, bo ma dużą cząsteczkę i działa łagodnie.</div>` },
        { tytul: "Substancje aktywne i ochrona przeciwsłoneczna", tresc: `<h4>Substancje aktywne</h4>
<div class="tw"><table><tr><th>Substancja</th><th>Działanie</th><th>Uwagi</th></tr>
<tr><td>retinol i pochodne</td><td>przyspiesza odnowę naskórka, stymuluje kolagen, wygładza, zmniejsza przebarwienia i trądzik</td><td>stosować wieczorem, z SPF, nie w ciąży, może podrażniać</td></tr>
<tr><td>witamina C (kwas askorbinowy i pochodne)</td><td>antyoksydant, rozjaśnia, wzmacnia naczynka, wspiera kolagen</td><td>utlenia się na świetle i powietrzu</td></tr>
<tr><td>niacynamid (wit. B3)</td><td>reguluje łój, wzmacnia barierę, rozjaśnia, przeciwzapalny</td><td>dobrze tolerowany</td></tr>
<tr><td>kwas azelainowy</td><td>przeciwtrądzikowy, rozjaśniający, przy trądziku różowatym</td><td>bezpieczny w ciąży</td></tr>
<tr><td>peptydy</td><td>sygnałowe, stymulują syntezę kolagenu</td><td>preparaty przeciwstarzeniowe</td></tr>
<tr><td>arbutyna, kwas kojowy, traneksamowy</td><td>hamują melanogenezę (rozjaśnianie przebarwień)</td><td>konieczna ochrona SPF</td></tr>
<tr><td>ceramidy, cholesterol, kwasy tłuszczowe</td><td>odbudowa bariery lipidowej</td><td>skóra sucha, atopowa</td></tr></table></div>
<h4>Promieniowanie UV i filtry</h4>
<ul>
<li><b>UVB</b> (280-315 nm): oparzenia, rumień, opalenizna; ochronę przed nim oznacza <b>SPF</b> (SPF 30 to ochrona wysoka, SPF 50+ bardzo wysoka).</li>
<li><b>UVA</b> (315-400 nm): fotostarzenie, przebarwienia, wnika głębiej, przenika przez szyby; oznaczenie <b>UVA w kółku</b> oznacza, że ochrona UVA wynosi co najmniej 1/3 deklarowanego SPF.</li>
<li><b>Filtry mineralne (fizyczne)</b>: tlenek cynku, dwutlenek tytanu, odbijają i rozpraszają promieniowanie; łagodne, dla dzieci i skóry wrażliwej.</li>
<li><b>Filtry chemiczne (organiczne)</b>: pochłaniają promieniowanie, lżejsza konsystencja.</li>
<li>Ilość: ok. <b>2 mg/cm²</b>, czyli ok. pół łyżeczki na twarz; reaplikacja co ok. 2 godziny na słońcu i po kąpieli.</li>
</ul>
<h4>Łączenie składników</h4>
<p>Nie łączy się w jednym etapie retinolu z silnymi kwasami (podrażnienie); witaminę C i niacynamid można stosować razem w nowoczesnych formułach. Przy terapii retinoidami i kwasami ochrona SPF jest obowiązkowa.</p>
<div class="tip">SPF dotyczy ochrony przed UVB; o ochronie przed UVA informuje symbol UVA w kółku.</div>` }
      ],
      pytania: [
        Q("W składzie INCI składniki podaje się w kolejności:", "malejącego stężenia (poniżej 1% dowolnie)", "alfabetycznej", "rosnącego stężenia", "od najdroższego do najtańszego", "Pierwszy jest zwykle Aqua."),
        Q("Kwas hialuronowy i gliceryna należą do:", "humektantów", "emulgatorów", "konserwantów", "filtrów UV", "Wiążą wodę w naskórku."),
        Q("Kwas salicylowy (BHA) poleca się przede wszystkim przy:", "trądziku i łojotoku", "skórze bardzo suchej bez zmian", "zmarszczkach z odwodnienia", "przy uczuleniu na aspirynę", "Jest rozpuszczalny w tłuszczach."),
        Q("Kwas o najmniejszej cząsteczce z grupy AHA, wnikający najgłębiej, to kwas:", "glikolowy", "migdałowy", "mlekowy", "laktobionowy", "Daje silne efekty, ale może podrażniać."),
        Q("Siła działania peelingu kwasowego rośnie, gdy:", "pH preparatu jest niższe", "pH preparatu jest wyższe", "czas kontaktu jest krótszy", "skóra jest nawilżona kremem tłustym", "Niższe pH to więcej wolnego kwasu."),
        Q("Symbol UVA w kółku oznacza, że:", "ochrona przed UVA wynosi co najmniej 1/3 deklarowanego SPF", "produkt nie chroni przed UVB", "kosmetyk jest wodoodporny", "SPF wynosi 100", "Wymóg europejskiego zalecenia."),
        Q("Filtry mineralne to m.in.:", "tlenek cynku i dwutlenek tytanu", "retinol i niacynamid", "gliceryna i mocznik", "parabeny", "Odbijają i rozpraszają promieniowanie."),
        Q("Emulsja typu W/O jest polecana szczególnie dla skóry:", "suchej, na zimę i noc", "tłustej na dzień latem", "trądzikowej z łojotokiem", "zawsze pod makijaż matujący", "Zawiera ciągłą fazę olejową.")
      ]
    },
    {
      id: "aparatura", tytul: "Aparatura kosmetyczna", opis: "Dobierzesz zabieg aparaturowy, ustawisz parametry i uwzględnisz przeciwwskazania.",
      lekcje: [
        { tytul: "Galwanizacja, jonoforeza i dezynkrustacja", tresc: `<h4>Prąd galwaniczny</h4>
<p>Prąd stały o niskim napięciu i natężeniu, przepływający między dwiema elektrodami: <b>anodą (+)</b> i <b>katodą (-)</b>. Pacjent trzyma elektrodę bierną, a kosmetolog prowadzi elektrodę czynną po skórze.</p>
<div class="tw"><table><tr><th>Biegun</th><th>Działanie na skórę</th></tr>
<tr><td>katoda (-)</td><td>odczyn zasadowy, rozpulchnienie, rozszerzenie naczyń, pobudzenie, zmydlanie łoju</td></tr>
<tr><td>anoda (+)</td><td>odczyn kwaśny, ściągnięcie, obkurczenie naczyń, uspokojenie, działanie przeciwzapalne</td></tr></table></div>
<h4>Dezynkrustacja</h4>
<ul>
<li>Cel: głębokie oczyszczenie skóry tłustej i zanieczyszczonej, rozpuszczenie łoju i zaskórników.</li>
<li>Na skórę nakłada się roztwór alkaliczny (np. preparat do dezynkrustacji, roztwór wodorowęglanu sodu lub sól fizjologiczna); elektroda czynna to <b>katoda (-)</b>.</li>
<li>Czas kilka minut (np. 5-8), natężenie zwiększa się stopniowo, aż do odczucia lekkiego mrowienia.</li>
<li>Na koniec przez ok. 1-2 minuty zmiana biegunowości na <b>anodę (+)</b>, aby przywrócić kwaśne pH skóry.</li>
<li>Po zabiegu można łatwiej wykonać oczyszczanie manualne.</li>
</ul>
<h4>Jonoforeza</h4>
<p>Wprowadzanie do skóry substancji o budowie jonowej. Substancję umieszcza się pod elektrodą o <b>tym samym znaku</b> co jej jony (jednoimienne ładunki się odpychają): substancje o ładunku ujemnym z katody, o ładunku dodatnim z anody. Biegunowość podaje producent ampułki.</p>
<h4>Przeciwwskazania do prądów</h4>
<ul>
<li>rozrusznik serca, metalowe implanty i druty w okolicy zabiegu, aparat ortodontyczny (ostrożność);</li>
<li>ciąża, padaczka, choroby nowotworowe, gorączka;</li>
<li>uszkodzenia skóry, stany zapalne, cera naczyniowa (przy katodzie);</li>
<li>zaburzenia czucia, nadwrażliwość na prąd.</li>
</ul>
<p>Klient zdejmuje biżuterię metalową. Elektrody nie wolno odrywać od skóry w trakcie przepływu prądu (szarpnięcie, możliwe oparzenie); natężenie zmniejsza się do zera przed zakończeniem.</p>
<div class="tip">Dezynkrustacja: katoda (-) i roztwór alkaliczny, na końcu zmiana na anodę. W jonoforezie substancję wprowadza się z elektrody o tym samym ładunku.</div>` },
        { tytul: "Złuszczanie i ultradźwięki", tresc: `<h4>Mikrodermabrazja</h4>
<ul>
<li><b>Korundowa</b>: strumień kryształków tlenku glinu z jednoczesnym podciśnieniem; <b>diamentowa</b>: głowice z nasypem diamentowym o różnej gradacji.</li>
<li>Złuszcza warstwę rogową, wygładza, pobudza odnowę, poprawia wchłanianie preparatów.</li>
<li>Wskazania: skóra szara, zrogowaciała, płytkie blizny, rozszerzone pory, przebarwienia powierzchowne.</li>
<li>Przeciwwskazania: aktywny trądzik ropny, cera naczyniowa i trądzik różowaty (ostrożnie lub wcale), świeża opalenizna, uszkodzenia skóry, opryszczka.</li>
<li>Skórę napina się palcami, głowicę prowadzi liniami w jednym kierunku, bez wielokrotnego przejeżdżania po tym samym miejscu; seria ok. 6-10 zabiegów co 7-14 dni.</li>
</ul>
<h4>Peeling kawitacyjny</h4>
<p>Wykorzystuje ultradźwięki o częstotliwości ok. <b>25-30 kHz</b> przekazywane przez stalową łopatkę na zwilżoną skórę. Powstające pęcherzyki kawitacyjne usuwają zrogowaciały naskórek i zanieczyszczenia. Skóra musi być stale wilgotna (woda, tonik). Zabieg łagodny, dla większości typów skóry, także przy cerze trądzikowej niezapalnej.</p>
<h4>Sonoforeza</h4>
<ul>
<li>Ultradźwięki o częstotliwości ok. <b>1 MHz</b> (głębiej) lub <b>3 MHz</b> (płycej, typowo na twarz) wprowadzają składniki aktywne i działają mikromasażem.</li>
<li>Wymagany <b>żel sprzęgający</b> (lub preparat w formie żelu), głowicę prowadzi się stale ruchami kolistymi, nie zatrzymując w jednym miejscu.</li>
<li>Przeciwwskazania: ciąża, rozrusznik, nowotwory, implanty metalowe, zakrzepica, okolica oczu (bez specjalnej głowicy) i tarczycy.</li>
</ul>
<h4>Inne urządzenia</h4>
<div class="tw"><table><tr><th>Urządzenie</th><th>Działanie</th></tr>
<tr><td>wapozon</td><td>para wodna (z ozonem) rozpulchnia naskórek przed oczyszczaniem; odległość ok. 30-40 cm, kilka do 10 minut; nie przy cerze naczyniowej</td></tr>
<tr><td>darsonwalizacja</td><td>prąd wysokiej częstotliwości przez elektrody szklane, wytwarza ozon; działanie bakteriobójcze po oczyszczaniu, pobudzenie krążenia</td></tr>
<tr><td>mezoterapia mikroigłowa</td><td>mikronakłucia pobudzają odnowę i wnikanie składników; konieczna sterylność</td></tr>
<tr><td>fale radiowe (RF)</td><td>ogrzewanie skóry właściwej, stymulacja kolagenu, ujędrnianie</td></tr></table></div>
<div class="tip">Peeling kawitacyjny to ultradźwięki w kHz na wilgotnej skórze, a sonoforeza to ultradźwięki w MHz z żelem do wprowadzania substancji.</div>` },
        { tytul: "Bezpieczeństwo pracy z urządzeniami", tresc: `<h4>Przed zabiegiem</h4>
<ul>
<li>Sprawdzenie stanu technicznego: przewody, wtyczki, głowice, elektrody (bez pęknięć); urządzenie z instrukcją, deklaracją zgodności i oznakowaniem CE.</li>
<li>Przegląd techniczny wg zaleceń producenta, wpisy w dokumentacji urządzenia.</li>
<li>Wywiad pod kątem przeciwwskazań: rozrusznik, implanty, ciąża, padaczka, nowotwory, choroby skóry; klient zdejmuje biżuterię i soczewki (przy zabiegach w okolicy oczu).</li>
<li>Klient informowany o przebiegu i odczuciach, podpisuje zgodę.</li>
</ul>
<h4>W trakcie</h4>
<ol>
<li>Ustawienie parametrów od najniższych, stopniowe zwiększanie wg reakcji skóry i odczuć klienta.</li>
<li>Stała kontrola skóry (rumień, pieczenie) i komunikacja z klientem.</li>
<li>Głowice ultradźwiękowe zawsze w ruchu i w kontakcie ze skórą przez medium (żel, woda).</li>
<li>Przy prądzie galwanicznym: natężenie zmniejsza się do zera przed oderwaniem elektrody.</li>
</ol>
<h4>Po zabiegu</h4>
<ul>
<li>Wyłączenie urządzenia, oczyszczenie i dezynfekcja głowic i elektrod preparatem zalecanym przez producenta, elementy jednorazowe do odpadów.</li>
<li>Przy mikronakłuciach: igły i kartridże jednorazowe do pojemnika na odpady ostre (odpady medyczne zakaźne).</li>
<li>Wpis do karty: urządzenie, parametry, czas, reakcja skóry, zalecenia.</li>
</ul>
<h4>Higiena gabinetu</h4>
<div class="tw"><table><tr><th>Czynność</th><th>Przykład</th></tr>
<tr><td>mycie</td><td>blaty, umywalka, narzędzia przed dezynfekcją</td></tr>
<tr><td>dezynfekcja</td><td>powierzchnie, głowice, rękawiczki, skóra przed zabiegiem naruszającym ciągłość</td></tr>
<tr><td>sterylizacja</td><td>narzędzia metalowe wielokrotnego użytku naruszające skórę (autoklaw, np. 134 °C)</td></tr></table></div>
<p>Kosmetolog pracuje w czystej odzieży ochronnej, rękawiczkach jednorazowych, z krótkimi paznokciami bez biżuterii na dłoniach. Higienę rąk wykonuje się przed i po każdym kliencie.</p>
<h4>Porażenie prądem i pierwsza pomoc</h4>
<p>Przy porażeniu: odłączyć zasilanie (wyłącznik, wtyczka), nie dotykać poszkodowanego pod napięciem, ocenić oddech, wezwać pomoc (112), w razie potrzeby RKO.</p>
<div class="tip">Parametry urządzenia zawsze zaczyna się od minimum, a każdą zmianę i reakcję skóry zapisuje w karcie zabiegowej.</div>` }
      ],
      pytania: [
        Q("Podczas dezynkrustacji elektrodą czynną jest zwykle:", "katoda (-)", "anoda (+)", "elektroda szklana", "głowica diamentowa", "Katoda daje odczyn zasadowy i zmydla łój."),
        Q("Po dezynkrustacji zmienia się biegunowość na anodę, aby:", "przywrócić kwaśne pH skóry", "zwiększyć zasadowość", "wprowadzić witaminę C", "rozgrzać skórę", "Anoda ściąga i uspokaja."),
        Q("W jonoforezie substancję o ładunku ujemnym wprowadza się:", "z katody (-)", "z anody (+)", "bez prądu", "przez wapozon", "Jednoimienne ładunki się odpychają."),
        Q("Bezwzględnym przeciwwskazaniem do galwanizacji jest:", "rozrusznik serca", "skóra tłusta", "rozszerzone pory", "skóra szara", "Prąd może zakłócić działanie urządzenia."),
        Q("Peeling kawitacyjny wykorzystuje:", "ultradźwięki ok. 25-30 kHz na wilgotnej skórze", "prąd stały", "kryształki korundu", "parę wodną z ozonem", "Kawitacja usuwa zrogowaciały naskórek."),
        Q("W sonoforezie na twarzy stosuje się zwykle częstotliwość:", "3 MHz", "50 Hz", "25 kHz", "1 kHz", "3 MHz działa płyciej niż 1 MHz."),
        Q("Mikrodermabrazji nie wykonuje się przy:", "aktywnym trądziku ropnym", "skórze szarej", "płytkich bliznach", "rozszerzonych porach", "Mogłaby rozsiać zakażenie."),
        Q("Wapozonu nie stosuje się przy:", "cerze naczyniowej", "skórze tłustej", "zaskórnikach", "skórze zanieczyszczonej", "Ciepło rozszerza naczynka.")
      ]
    },
    {
      id: "zabieg-masaz", tytul: "Zabieg pielęgnacyjny i masaż", opis: "Wykonasz pełny zabieg pielęgnacyjny twarzy z oczyszczaniem, masażem i maską w poprawnej kolejności.",
      lekcje: [
        { tytul: "Kolejność zabiegu pielęgnacyjnego", tresc: `<h4>Etapy</h4>
<ol>
<li><b>Przygotowanie</b>: stanowisko zdezynfekowane, jednorazowe podkłady, opaska na włosy, higiena rąk, rękawiczki.</li>
<li><b>Wywiad i karta</b> klienta, wykluczenie przeciwwskazań.</li>
<li><b>Demakijaż</b>: najpierw oczy (płyn dwufazowy przy wodoodpornym tuszu, wacik przytrzymany kilka sekund, ruch od góry w dół), potem usta (od kącików do środka), potem twarz, szyja, dekolt mleczkiem lub żelem.</li>
<li><b>Tonizacja</b>: przywrócenie pH, usunięcie resztek.</li>
<li><b>Diagnoza</b> skóry (lupa, lampa Wooda).</li>
<li><b>Peeling</b>: enzymatyczny (wrażliwa, naczyniowa, trądzik), mechaniczny drobnoziarnisty (tłusta, zrogowaciała, bez stanów zapalnych), kawitacyjny lub kwasowy.</li>
<li><b>Rozmiękczenie</b> naskórka: wapozon lub ciepłe kompresy (nie przy cerze naczyniowej), ewentualnie dezynkrustacja.</li>
<li><b>Oczyszczanie manualne</b> (przy potrzebie).</li>
<li><b>Tonizacja i dezynfekcja</b>, darsonwalizacja po oczyszczaniu.</li>
<li><b>Ampułka lub serum</b> (wprowadzane np. sonoforezą, jonoforezą).</li>
<li><b>Masaż</b> (jeśli nie ma przeciwwskazań; po oczyszczaniu manualnym nie wykonuje się intensywnego masażu tłustymi preparatami).</li>
<li><b>Maska</b> dobrana do problemu skóry.</li>
<li><b>Krem</b> końcowy i filtr SPF, zalecenia domowe.</li>
</ol>
<h4>Oczyszczanie manualne</h4>
<ul>
<li>W rękawiczkach jednorazowych, palce owinięte jałowym gazikiem lub chusteczkami.</li>
<li>Ucisk z dwóch stron zaskórnika w kierunku jego ujścia, delikatnie, bez paznokci; zaskórniki zamknięte po nakłuciu jałową igłą (lancetem).</li>
<li>Nie wyciska się krost zapalnych, cyst i zmian ropnych w głębi skóry.</li>
<li>Czas ograniczony (ok. 15-20 min), aby nie traumatyzować skóry; po zabiegu dezynfekcja, darsonwalizacja, maska ściągająca i łagodząca.</li>
</ul>
<div class="tip">Demakijaż zaczyna się od oczu i ust, a dopiero potem twarzy. Typowa pułapka w pytaniach o kolejność.</div>` },
        { tytul: "Masaż kosmetyczny twarzy", tresc: `<h4>Zasady</h4>
<ul>
<li>Ruchy wykonuje się zgodnie z przebiegiem <b>naczyń chłonnych</b>, w kierunku węzłów chłonnych (przyusznych, podżuchwowych, szyjnych), zwykle od środka twarzy na zewnątrz i od dołu ku górze.</li>
<li>Dłonie ciepłe, z preparatem poślizgowym (olejek, krem do masażu), dobranym do skóry.</li>
<li>Ruchy rytmiczne, płynne, bez odrywania dłoni od skóry; intensywność dostosowana do skóry.</li>
<li>Czas ok. 15-20 minut.</li>
</ul>
<h4>Techniki masażu klasycznego</h4>
<div class="tw"><table><tr><th>Technika</th><th>Wykonanie</th><th>Działanie</th></tr>
<tr><td>głaskanie</td><td>przesuwanie całą dłonią lub opuszkami</td><td>rozpoczęcie i zakończenie, rozgrzanie, rozprowadzenie preparatu</td></tr>
<tr><td>rozcieranie</td><td>ruchy koliste opuszkami z lekkim uciskiem</td><td>przekrwienie, rozluźnienie, odżywienie</td></tr>
<tr><td>ugniatanie</td><td>uciskanie i ujmowanie tkanek</td><td>pobudzenie mięśni, ujędrnienie</td></tr>
<tr><td>oklepywanie (tapotement)</td><td>szybkie lekkie uderzenia opuszkami („pianino”)</td><td>pobudzenie, poprawa napięcia</td></tr>
<tr><td>wibracja</td><td>drżenie dłoni na skórze</td><td>rozluźnienie lub pobudzenie zależnie od tempa</td></tr></table></div>
<h4>Inne rodzaje masażu</h4>
<ul>
<li><b>Masaż Jacquet</b>: rytmiczne szczypanie skóry między kciukiem a palcem wskazującym; do skóry tłustej, łojotokowej, z zaskórnikami, pobudza opróżnianie gruczołów łojowych; nie przy cerze naczyniowej i stanach zapalnych.</li>
<li><b>Drenaż limfatyczny</b>: powolne, delikatne ruchy pompujące w kierunku węzłów; obrzęki, cienie pod oczami, cera naczyniowa.</li>
<li><b>Masaż Kobido, liftingujący</b>: ujędrnianie i modelowanie owalu twarzy.</li>
</ul>
<h4>Przeciwwskazania do masażu</h4>
<p>Stany zapalne i ropne, trądzik ropny i różowaty (masaż klasyczny), opryszczka, uszkodzenia skóry, gorączka, świeże zabiegi medycyny estetycznej (np. wypełniacze w ciągu ok. 2 tygodni), cera naczyniowa (intensywny masaż), nowotwory, zakrzepica.</p>
<div class="tip">Masaż Jacquet to szczypanie dla skóry tłustej, a drenaż limfatyczny to delikatne ruchy dla obrzęków i skóry naczyniowej.</div>` },
        { tytul: "Maski kosmetyczne i dobór zabiegu", tresc: `<h4>Rodzaje masek</h4>
<div class="tw"><table><tr><th>Maska</th><th>Cechy</th><th>Dla skóry</th></tr>
<tr><td>algowa (alginatowa)</td><td>proszek z wodą tworzy plastyczną, zastygającą masę; ujędrnia, nawilża, chłodzi</td><td>większość typów; odmiany z dodatkami (wit. C, kolagen, węgiel)</td></tr>
<tr><td>glinkowa</td><td>biała (kaolin): łagodna, wrażliwa; zielona: tłusta, trądzikowa; różowa: naczyniowa, wrażliwa; czerwona: szara, zmęczona</td><td>dobór kolorem</td></tr>
<tr><td>termomodelująca (gipsowa) ciepła</td><td>wydziela ciepło przy zastyganiu, wzmacnia wnikanie preparatu</td><td>skóra dojrzała, odwodniona; nie przy cerze naczyniowej</td></tr>
<tr><td>chłodząca (np. kriogenna)</td><td>obkurcza naczynia, łagodzi</td><td>naczyniowa, wrażliwa, po oczyszczaniu</td></tr>
<tr><td>kremowa</td><td>natłuszcza, odżywia</td><td>sucha, dojrzała</td></tr>
<tr><td>płatowa, kolagenowa</td><td>nasączony płat, nawilżenie</td><td>odwodniona, zmęczona</td></tr></table></div>
<h4>Zasady nakładania</h4>
<ul>
<li>Maskę nakłada się szpatułką lub pędzlem, od szyi ku górze, omijając oczy, brwi, usta i otwory nosa (przy algowej oczy chroni się płatkami, a usta można zostawić odsłonięte).</li>
<li>Czas zwykle ok. <b>15-20 minut</b>; maski algowe zdejmuje się w całości od dołu ku górze.</li>
<li>Glinki nie powinny całkowicie wyschnąć na skórze suchej i wrażliwej (zraszanie hydrolatem).</li>
</ul>
<h4>Dobór zabiegu do problemu</h4>
<div class="tw"><table><tr><th>Problem</th><th>Przykładowy zabieg</th></tr>
<tr><td>skóra tłusta, zaskórniki</td><td>peeling kawitacyjny lub kwas salicylowy, dezynkrustacja, oczyszczanie manualne, darsonwalizacja, maska z zieloną glinką</td></tr>
<tr><td>skóra sucha, odwodniona</td><td>peeling enzymatyczny, ampułka z kwasem hialuronowym (sonoforeza), masaż, maska kremowa lub płatowa</td></tr>
<tr><td>cera naczyniowa</td><td>peeling enzymatyczny, ampułka z witaminą C i rutyną, drenaż, maska chłodząca algowa</td></tr>
<tr><td>skóra dojrzała</td><td>mikrodermabrazja, peptydy, masaż liftingujący, maska termomodelująca</td></tr>
<tr><td>przebarwienia</td><td>seria kwasów (migdałowy, glikolowy) jesienią i zimą, wit. C, SPF 50</td></tr></table></div>
<div class="tip">Maska ciepła termomodelująca jest przeciwwskazana przy cerze naczyniowej, tam stosuje się maski chłodzące.</div>` }
      ],
      pytania: [
        Q("Demakijaż w zabiegu pielęgnacyjnym zaczyna się od:", "oczu i ust", "szyi i dekoltu", "czoła", "nałożenia maski", "Następnie twarz, szyja i dekolt."),
        Q("Ruchy masażu twarzy wykonuje się:", "w kierunku węzłów chłonnych", "zawsze od góry w dół", "przypadkowo", "przeciwnie do naczyń chłonnych", "Wspiera to odpływ chłonki."),
        Q("Masaż i zabieg zaczyna się i kończy techniką:", "głaskania", "oklepywania", "ugniatania", "wibracji", "Głaskanie rozgrzewa i wycisza."),
        Q("Masaż Jacquet jest wskazany przy skórze:", "tłustej, łojotokowej", "naczyniowej", "z trądzikiem różowatym", "z opryszczką", "Polega na szczypaniu skóry."),
        Q("Do skóry tłustej i trądzikowej poleca się glinkę:", "zieloną", "różową", "białą przy suchości", "czerwoną przy naczyniach", "Zielona oczyszcza i reguluje łój."),
        Q("Przy cerze naczyniowej nie stosuje się maski:", "termomodelującej ciepłej", "algowej chłodzącej", "z różową glinką", "płatowej kolagenowej", "Ciepło rozszerza naczynka."),
        Q("Krosty zapalne i zmiany ropne w głębi skóry podczas oczyszczania manualnego:", "nie są wyciskane", "wyciska się je w pierwszej kolejności", "przekłuwa się zwykłą igłą", "masuje się do skutku", "Grozi to rozsianiem stanu zapalnego i bliznami."),
        Q("Maskę algową zdejmuje się:", "w całości, od dołu ku górze", "zmywając gorącą wodą", "szczotką do peelingu", "po 2 godzinach", "Tworzy elastyczny płat.")
      ]
    },
    {
      id: "oprawa-makijaz", tytul: "Oprawa oka i makijaż", opis: "Wykonasz hennę i regulację brwi oraz makijaż korygujący dopasowany do okazji i typu urody.",
      lekcje: [
        { tytul: "Henna i regulacja brwi", tresc: `<h4>Przygotowanie do henny</h4>
<ul>
<li><b>Próba uczuleniowa</b> co najmniej <b>48 h</b> wcześniej (np. za uchem lub w zgięciu łokcia).</li>
<li>Przeciwwskazania: zapalenie spojówek, jęczmień, alergia, uszkodzenia skóry, choroby oczu, łzawienie, soczewki kontaktowe (zdjąć), świeże zabiegi okolicy oczu.</li>
<li>Demakijaż i odtłuszczenie włosków; zabezpieczenie skóry wokół brwi i rzęs tłustym kremem lub wazeliną, pod oczy płatki ochronne.</li>
</ul>
<h4>Wykonanie</h4>
<ol>
<li>Przygotowanie henny bezpośrednio przed nałożeniem: barwnik w kremie lub żelu + oksydant zwykle <b>3%</b> (wg producenta) w niemetalowej miseczce.</li>
<li>Rzęsy: klient zamyka oczy, hennę nakłada się aplikatorem od nasady do końców; czas zwykle ok. 5-10 min.</li>
<li>Brwi: od środka lub od końca łuku (cieńszy koniec krótszy czas), czas zwykle kilka minut zależnie od efektu i koloru włosków.</li>
<li>Usunięcie henny suchym, potem wilgotnym wacikiem, od zewnątrz do wewnątrz przy rzęsach (lub zgodnie z zaleceniami), bez pocierania oka.</li>
<li>Jeżeli preparat dostał się do oka: natychmiast przepłukać dużą ilością wody lub solą fizjologiczną, w razie potrzeby lekarz.</li>
</ol>
<h4>Regulacja brwi: geometria</h4>
<div class="tw"><table><tr><th>Punkt</th><th>Wyznaczenie</th></tr>
<tr><td>początek</td><td>na linii pionowej przez skrzydełko nosa i wewnętrzny kącik oka</td></tr>
<tr><td>najwyższy punkt łuku</td><td>na linii od skrzydełka nosa przez zewnętrzną krawędź tęczówki (przy patrzeniu na wprost)</td></tr>
<tr><td>koniec</td><td>na linii od skrzydełka nosa przez zewnętrzny kącik oka</td></tr></table></div>
<ul>
<li>Włoski usuwa się pęsetą <b>zgodnie z kierunkiem wzrostu</b>, napinając skórę, głównie od dołu łuku i między brwiami.</li>
<li>Po regulacji: dezynfekcja, preparat łagodzący, ewentualnie chłodny kompres.</li>
<li>Kształt dobiera się do twarzy: okrągła, łuk wyższy; podłużna, brew bardziej pozioma; kwadratowa, łagodnie zaokrąglona.</li>
</ul>
<div class="tip">Hennę nakłada się po próbie uczuleniowej, z oksydantem zwykle 3%, a skórę wokół zabezpiecza tłustym kremem.</div>` },
        { tytul: "Makijaż korygujący", tresc: `<h4>Przygotowanie skóry</h4>
<p>Oczyszczenie, tonik, krem dobrany do skóry (nawilżający, matujący), baza pod makijaż (wygładzająca, matująca, rozświetlająca, korygująca kolor). Kolejność dalej: korektor kolorowy, podkład, korektor rozświetlający, puder, konturowanie, róż, oczy, brwi, usta.</p>
<h4>Korekta koloru</h4>
<div class="tw"><table><tr><th>Problem</th><th>Kolor korektora</th></tr>
<tr><td>zaczerwienienia, naczynka, krostki</td><td>zielony</td></tr>
<tr><td>sińce niebieskie, fioletowe pod oczami</td><td>brzoskwiniowy, łososiowy, żółty (na jasnej cerze)</td></tr>
<tr><td>ciemne cienie przy ciemnej karnacji</td><td>pomarańczowy</td></tr>
<tr><td>ziemista, żółtawa cera</td><td>fioletowy (lawendowy)</td></tr>
<tr><td>szara, zmęczona cera</td><td>różowy</td></tr></table></div>
<h4>Konturowanie</h4>
<ul>
<li>Kolor <b>ciemniejszy</b> (bronzer, kontur chłodny) <b>wysmukla i cofa</b>; <b>jasny</b> (rozświetlacz) <b>wysuwa i powiększa</b>.</li>
<li>Twarz okrągła: kontur pod kośćmi policzkowymi i po bokach twarzy, rozświetlenie środka (czoło, nos, broda).</li>
<li>Twarz kwadratowa: przyciemnienie kątów żuchwy i boków czoła.</li>
<li>Twarz podłużna: przyciemnienie przy linii włosów i pod brodą, róż poziomo.</li>
<li>Szeroki nos: dwie ciemniejsze linie wzdłuż boków, jasna linia na grzbiecie.</li>
</ul>
<h4>Korekta oczu</h4>
<ul>
<li>Oczy blisko osadzone: jasny cień w wewnętrznym kąciku, ciemniejszy na zewnątrz.</li>
<li>Oczy szeroko osadzone: ciemniejszy cień od wewnętrznej strony.</li>
<li>Opadająca powieka: cień w załamaniu wyżej niż naturalne, wydłużenie ku górze na zewnątrz.</li>
<li>Małe oczy: jasne cienie, kredka cielista na linii wodnej, wywinięte rzęsy, kreska tylko na zewnętrznej części.</li>
</ul>
<h4>Higiena makijażu</h4>
<p>Produkty pobiera się szpatułką na paletkę, tusz jednorazowymi szczoteczkami, kredki temperuje przed każdym klientem; pędzle myje i dezynfekuje. Nie wykonuje się makijażu na skórze z opryszczką lub zapaleniem spojówek.</p>
<div class="tip">Zielony korektor neutralizuje czerwień, fioletowy żółtawy koloryt, a łososiowy sińce. To ta sama zasada barw dopełniających co w koloryzacji.</div>` },
        { tytul: "Rodzaje makijażu i dobór kolorów", tresc: `<h4>Makijaż wg okazji</h4>
<div class="tw"><table><tr><th>Makijaż</th><th>Cechy</th></tr>
<tr><td>dzienny</td><td>lekki podkład lub krem BB, naturalne cienie, tusz, delikatny róż, usta w naturalnym kolorze; dobrze wygląda w świetle dziennym</td></tr>
<tr><td>wieczorowy</td><td>mocniejsze krycie, wyraźne oczy lub usta (zasada: akcent na jedno), rozświetlenie, połysk, kreski, smoky eye</td></tr>
<tr><td>ślubny</td><td>trwały (baza, utrwalacz, wodoodporny tusz), dopasowany do sukni i fryzury, fotogeniczny; próbny makijaż przed ślubem</td></tr>
<tr><td>fotograficzny, telewizyjny</td><td>matowe wykończenie (unikanie odblasku flesza), staranne konturowanie, unika się pudrów z SPF i drobinek odbijających flesz (efekt białej twarzy)</td></tr>
<tr><td>sceniczny, charakteryzacja</td><td>przerysowany, widoczny z daleka</td></tr></table></div>
<h4>Dobór kolorów do typu urody</h4>
<ul>
<li><b>Wiosna</b> (ciepła, jasna): brzoskwinie, złota, ciepłe brązy, koralowe usta.</li>
<li><b>Lato</b> (chłodna, stonowana): róże pudrowe, szarości, fiolety, chłodne beże.</li>
<li><b>Jesień</b> (ciepła, głęboka): miedź, khaki, oliwki, brązy, ceglaste usta.</li>
<li><b>Zima</b> (chłodna, kontrastowa): czerń, grafit, śliwka, czerwień z niebieskim tonem.</li>
<li>Kolor oczu podkreśla się barwami dopełniającymi: oczy niebieskie, brązy i miedzie; zielone, fiolety i śliwki; brązowe, większość kolorów, szczególnie zielenie i granaty.</li>
</ul>
<h4>Podkład</h4>
<p>Odcień dobiera się na linii żuchwy, w świetle dziennym, tak by zlewał się ze skórą szyi. Rodzaj: skóra sucha, nawilżające i rozświetlające; tłusta, matujące, beztłuszczowe; dojrzała, lekkie, nieosiadające w zmarszczkach. Puder sypki utrwala, prasowany do poprawek.</p>
<h4>Makijaż dojrzałej skóry</h4>
<p>Mało pudru i brokatu, kremowe formuły, rozświetlenie zamiast ciężkiego konturu, uniesienie oka cieniem ku skroni, wyraźniejsze brwi, konturówka do ust zapobiegająca rozmazywaniu się szminki w zmarszczkach.</p>
<div class="tip">W makijażu wieczorowym akcentuje się zwykle albo oczy, albo usta, nie oba elementy jednocześnie, aby zachować harmonię.</div>` }
      ],
      pytania: [
        Q("Próbę uczuleniową przed henną wykonuje się:", "co najmniej 48 h przed zabiegiem", "bezpośrednio przed zabiegiem", "po zabiegu", "nie jest potrzebna", "Wynik ocenia się po 48 h."),
        Q("Najczęściej stosowany oksydant do henny brwi i rzęs to:", "3%", "12%", "9%", "40%", "Zgodnie z instrukcją producenta."),
        Q("Początek brwi wyznacza linia pionowa przechodząca przez:", "skrzydełko nosa i wewnętrzny kącik oka", "środek źrenicy", "zewnętrzny kącik oka", "kącik ust", "Koniec wyznacza linia przez zewnętrzny kącik oka."),
        Q("Włoski brwi podczas regulacji usuwa się:", "zgodnie z kierunkiem wzrostu", "przeciwnie do kierunku wzrostu", "nożyczkami przy skórze", "maszynką", "Zmniejsza to ból i ryzyko wrastania."),
        Q("Zaczerwienienia na twarzy neutralizuje korektor w kolorze:", "zielonym", "fioletowym", "różowym", "pomarańczowym", "Zieleń jest dopełniająca do czerwieni."),
        Q("Ciemniejszy kolor w konturowaniu twarzy:", "wysmukla i cofa", "wysuwa i powiększa", "rozświetla", "nie zmienia kształtu", "Jasny kolor wysuwa."),
        Q("Przy oczach blisko osadzonych jasny cień nakłada się:", "w wewnętrznym kąciku", "w zewnętrznym kąciku", "tylko pod łukiem brwiowym", "na całej powiece ruchomej ciemnym kolorem", "Optycznie oddala oczy od siebie."),
        Q("W makijażu fotograficznym unika się:", "pudrów z SPF i drobinek odbijających flesz", "matowego wykończenia", "konturowania", "bazy pod makijaż", "Mogą dać efekt białej twarzy na zdjęciach.")
      ]
    }
  ]);

  pod("ROL.04", [
    {
      id: "gleba-nawozenie", tytul: "Gleba i nawożenie", opis: "Ocenisz glebę, zaplanujesz wapnowanie i obliczysz dawki nawozów zgodnie z przepisami.",
      lekcje: [
        { tytul: "Klasy bonitacyjne, kompleksy i odczyn", tresc: `<h4>Klasy bonitacyjne gruntów ornych</h4>
<div class="tw"><table><tr><th>Klasa</th><th>Gleby</th></tr>
<tr><td>I, II</td><td>orne najlepsze i bardzo dobre (czarnoziemy, mady, czarne ziemie)</td></tr>
<tr><td>IIIa, IIIb</td><td>dobre i średnio dobre</td></tr>
<tr><td>IVa, IVb</td><td>średnie i słabsze</td></tr>
<tr><td>V</td><td>słabe (piaski gliniaste lekkie)</td></tr>
<tr><td>VI, VIRz</td><td>najsłabsze, piaski luźne; VIRz pod zalesienie</td></tr></table></div>
<h4>Kompleksy przydatności rolniczej</h4>
<p>Łączą glebę z warunkami wodnymi i klimatem: <b>1</b> pszenny bardzo dobry, <b>2</b> pszenny dobry, <b>3</b> pszenny wadliwy, <b>4</b> żytni bardzo dobry, <b>5</b> żytni dobry, <b>6</b> żytni słaby, <b>7</b> żytni bardzo słaby, <b>8</b> zbożowo-pastewny mocny, <b>9</b> zbożowo-pastewny słaby. Kompleksy użytków zielonych oznacza się 1z, 2z, 3z.</p>
<h4>Odczyn (pH w KCl)</h4>
<div class="tw"><table><tr><th>pH</th><th>Odczyn</th></tr>
<tr><td>do 4,5</td><td>bardzo kwaśny</td></tr>
<tr><td>4,6-5,5</td><td>kwaśny</td></tr>
<tr><td>5,6-6,5</td><td>lekko kwaśny</td></tr>
<tr><td>6,6-7,2</td><td>obojętny</td></tr>
<tr><td>powyżej 7,2</td><td>zasadowy</td></tr></table></div>
<ul>
<li>Wrażliwe na zakwaszenie: <b>burak cukrowy, lucerna, jęczmień, pszenica, rzepak</b> (wymagają pH ok. 6-7).</li>
<li>Tolerujące odczyn kwaśny: <b>żyto, owies, ziemniak, łubin, seradela</b>.</li>
<li>W glebie kwaśnej spada dostępność fosforu i molibdenu, rośnie toksyczny glin i mangan.</li>
</ul>
<h4>Wapnowanie</h4>
<ul>
<li>Potrzebę wapnowania określa stacja chemiczno-rolnicza na podstawie pH i kategorii agronomicznej gleby (bardzo lekka, lekka, średnia, ciężka).</li>
<li><b>Tlenkowa</b> forma (CaO) działa szybko: gleby średnie i ciężkie; <b>węglanowa</b> (CaCO3) łagodnie: gleby lekkie.</li>
<li>Najlepszy termin: po zbiorze przedplonu, pod uprawki pożniwne; dawki dzieli się przy dużych potrzebach.</li>
<li>Nie stosuje się wapna razem z <b>obornikiem</b> ani nawozami amonowymi (straty azotu w postaci amoniaku) i fosforowymi rozpuszczalnymi (uwstecznianie); odstęp kilku tygodni.</li>
</ul>
<div class="tip">Na egzaminie: burak i lucerna są najbardziej wrażliwe na kwaśny odczyn, a żyto i łubin dobrze go znoszą.</div>` },
        { tytul: "Nawozy mineralne i obliczanie dawek", tresc: `<h4>Zawartość składnika w nawozach</h4>
<div class="tw"><table><tr><th>Nawóz</th><th>Zawartość</th></tr>
<tr><td>saletra amonowa</td><td>32-34% N</td></tr>
<tr><td>mocznik</td><td>46% N</td></tr>
<tr><td>saletrzak</td><td>ok. 27% N (z wapniem i magnezem)</td></tr>
<tr><td>siarczan amonu</td><td>21% N, 24% S</td></tr>
<tr><td>RSM (roztwór saletrzano-mocznikowy)</td><td>28-32% N</td></tr>
<tr><td>superfosfat potrójny</td><td>ok. 40-46% P2O5</td></tr>
<tr><td>sól potasowa</td><td>ok. 60% K2O</td></tr>
<tr><td>siarczan potasu</td><td>ok. 50% K2O</td></tr></table></div>
<h4>Wzór</h4>
<p><b>Dawka nawozu (kg/ha) = dawka składnika (kg/ha) × 100 / zawartość składnika (%)</b></p>
<h4>Przykład</h4>
<p>Pszenica ozima, 8 ha. Zalecane: 120 kg N/ha (w dwóch dawkach 60 + 60), 60 kg P2O5/ha, 90 kg K2O/ha.</p>
<ul>
<li>Saletra 34%: 60 × 100 / 34 = <b>176,5 kg/ha</b> na jedną dawkę; na 8 ha: 1412 kg, obie dawki 2824 kg.</li>
<li>Superfosfat potrójny 40%: 60 × 100 / 40 = <b>150 kg/ha</b>; 8 ha: 1200 kg.</li>
<li>Sól potasowa 60%: 90 × 100 / 60 = <b>150 kg/ha</b>; 8 ha: 1200 kg.</li>
</ul>
<h4>Terminy i zasady</h4>
<ul>
<li>Fosfor i potas: głównie przedsiewnie, jesienią pod orkę (mało ruchliwe w glebie).</li>
<li>Azot: dzielony, w okresach największego zapotrzebowania (np. pszenica: ruszenie wegetacji, strzelanie w źdźbło, kłoszenie), bo łatwo się wymywa.</li>
<li>Mocznik przed użyciem doglebowym wymaga szybkiego wymieszania z glebą (straty amoniaku) lub stosowania z inhibitorem.</li>
<li>Nawozy rozsiewa się równomiernie rozsiewaczem skalibrowanym na dawkę, z zachowaniem odległości od wód.</li>
</ul>
<h4>Bilans</h4>
<p>Zapotrzebowanie = pobranie składnika z plonem (np. pszenica ok. 25 kg N na 1 t ziarna ze słomą) - zasoby gleby (zasobność wg analizy) - azot z nawozów naturalnych i przedplonu. Zasobność w P, K, Mg bada się co ok. 4 lata.</p>
<div class="tip">Wynik zawsze sprawdzaj: nawozu jest więcej niż składnika (dzielisz przez procent). 100 kg N to ok. 294 kg saletry 34%.</div>` },
        { tytul: "Nawozy naturalne i program azotanowy", tresc: `<h4>Nawozy naturalne i organiczne</h4>
<div class="tw"><table><tr><th>Nawóz</th><th>Cechy</th></tr>
<tr><td>obornik</td><td>ok. 0,5% N, 0,3% P2O5, 0,7% K2O; dawki 20-40 t/ha; działa przez kilka lat (ok. 50% w pierwszym roku); poprawia strukturę i próchnicę</td></tr>
<tr><td>gnojowica</td><td>płynna mieszanina kału i moczu; szybko działający azot amonowy; aplikacja doglebowa lub węże wleczone</td></tr>
<tr><td>gnojówka</td><td>przefermentowany mocz; głównie N i K, mało P</td></tr>
<tr><td>nawozy zielone, międzyplony</td><td>przyorana biomasa (np. gorczyca, facelia, łubin); próchnica, ograniczenie wymywania</td></tr>
<tr><td>kompost, słoma</td><td>słomę przyoraną uzupełnia się ok. 8-10 kg N na tonę dla rozkładu</td></tr></table></div>
<p>Rośliny najlepiej reagujące na obornik: <b>okopowe</b> (ziemniak, burak), kukurydza; zbóż zwykle nie nawozi się bezpośrednio obornikiem.</p>
<h4>Program działań azotanowych (najważniejsze zasady)</h4>
<ul>
<li>Dawka azotu z nawozów naturalnych nie może przekraczać <b>170 kg N/ha</b> rocznie (średnio w gospodarstwie).</li>
<li>Okresy stosowania na gruntach ornych: nawozy mineralne azotowe i naturalne płynne od <b>1 marca</b> do jesiennego terminu wyznaczonego dla danej gminy (zwykle 20-31 października), stałe nawozy naturalne do <b>30 listopada</b>.</li>
<li>Zakaz nawożenia na glebach zalanych wodą, przykrytych śniegiem, zamarzniętych i podczas opadów deszczu.</li>
<li>Nawozy naturalne na gruntach bez roślin miesza się z glebą jak najszybciej, nie później niż następnego dnia.</li>
<li>Zachowuje się odległości od wód powierzchniowych, ujęć wody i zbiorników.</li>
<li>Obornik przechowuje się na <b>szczelnej płycie</b> z odprowadzeniem odcieków, a płynne nawozy w szczelnych zbiornikach (pojemność co najmniej na kilka miesięcy przechowywania); dopuszczalne czasowe składowanie obornika na polu na określonych warunkach.</li>
</ul>
<h4>Przykład: dawka azotu z obornika</h4>
<p>30 t/ha obornika o zawartości 0,5% N daje 30 000 kg × 0,005 = <b>150 kg N/ha</b> (całkowitego). W pierwszym roku do dyspozycji roślin ok. połowy, co uwzględnia się, zmniejszając dawkę nawozów mineralnych.</p>
<div class="tip">Limit 170 kg N/ha dotyczy azotu z nawozów naturalnych, a nie z nawozów mineralnych.</div>` }
      ],
      pytania: [
        Q("Ile saletry amonowej 34% trzeba zastosować, aby dać 60 kg N/ha?", "ok. 176 kg/ha", "ok. 20 kg/ha", "ok. 60 kg/ha", "ok. 340 kg/ha", "60 × 100 / 34 = 176,5."),
        Q("Najbardziej wrażliwą na kwaśny odczyn gleby rośliną jest:", "burak cukrowy", "żyto", "łubin", "owies", "Wymaga pH zbliżonego do obojętnego."),
        Q("Wapno w formie tlenkowej stosuje się przede wszystkim na gleby:", "średnie i ciężkie", "bardzo lekkie piaszczyste", "torfowe pod łąki", "zalane wodą", "Na lekkie lepsza forma węglanowa."),
        Q("Wapna nie należy stosować razem z obornikiem, ponieważ:", "powoduje straty azotu w postaci amoniaku", "obornik staje się kwaśny", "zwiększa się zawartość fosforu", "wapno się rozpuszcza", "Reakcja zasadowa uwalnia NH3."),
        Q("Roczna dawka azotu z nawozów naturalnych nie może przekraczać:", "170 kg N/ha", "50 kg N/ha", "300 kg N/ha", "500 kg N/ha", "Wymóg programu azotanowego."),
        Q("Zawartość azotu w moczniku wynosi:", "46%", "34%", "21%", "60%", "Najbardziej skoncentrowany nawóz azotowy stały."),
        Q("Stosowanie nawozów jest zabronione, gdy gleba jest:", "zamarznięta lub pokryta śniegiem", "wilgotna po deszczu dzień wcześniej", "uprawiona agregatem", "obsiana międzyplonem", "Grozi spływem do wód."),
        Q("Kompleks przydatności rolniczej nr 4 to kompleks:", "żytni bardzo dobry", "pszenny bardzo dobry", "zbożowo-pastewny słaby", "pszenny wadliwy", "1-3 to pszenne, 4-7 żytnie.")
      ]
    },
    {
      id: "uprawa-siew", tytul: "Uprawa roli i siew", opis: "Zaplanujesz zespoły uprawek, płodozmian i obliczysz normę wysiewu nasion.",
      lekcje: [
        { tytul: "Zespoły uprawek", tresc: `<h4>Uprawki pożniwne</h4>
<ul>
<li>Wykonywane bezpośrednio po zbiorze: <b>podorywka</b> (8-12 cm) + bronowanie lub uprawa ścierniska broną talerzową, kultywatorem ścierniskowym.</li>
<li>Cel: przerwanie parowania wody, przyspieszenie rozkładu resztek, prowokowanie kiełkowania chwastów i samosiewów, przyoranie słomy.</li>
<li>Po kilku tygodniach (kiedy wzejdą chwasty) bronowanie lub kultywator.</li>
</ul>
<h4>Uprawa przedsiewna pod oziminy</h4>
<p><b>Orka siewna</b> na średnią głębokość (ok. 18-22 cm) co najmniej 2-3 tygodnie przed siewem, aby gleba osiadła; potem agregat uprawowy (kultywator, wał strunowy). Przy krótkim okresie stosuje się wał Campbella lub uprawę bezorkową.</p>
<h4>Uprawa przedzimowa pod jare</h4>
<p><b>Orka zimowa (głęboka)</b> 25-30 cm jesienią, pozostawiona <b>w ostrej skibie</b> na zimę, co zatrzymuje śnieg i wodę, a mróz rozkrusza bryły.</p>
<h4>Uprawa wiosenna</h4>
<ol>
<li><b>Włókowanie lub bronowanie</b> po obeschnięciu gleby: zamknięcie wody (ograniczenie parowania).</li>
<li>Kultywator i agregat uprawowy na głębokość siewu.</li>
<li>Wałowanie przy glebach lekkich i suchych (podsiąkanie wody).</li>
</ol>
<h4>Narzędzia i ich działanie</h4>
<div class="tw"><table><tr><th>Narzędzie</th><th>Działanie</th></tr>
<tr><td>pług</td><td>odwracanie, kruszenie i mieszanie gleby, przykrywanie resztek i nawozów</td></tr>
<tr><td>kultywator</td><td>spulchnianie bez odwracania, niszczenie chwastów</td></tr>
<tr><td>brona</td><td>płytkie spulchnianie, wyrównanie, niszczenie skorupy</td></tr>
<tr><td>wał gładki</td><td>ugniatanie, podsiąkanie wody</td></tr>
<tr><td>wał Campbella</td><td>ugniatanie warstwy podpowierzchniowej po orce</td></tr>
<tr><td>agregat uprawowy</td><td>kilka operacji w jednym przejeździe</td></tr></table></div>
<h4>Uprawa uproszczona</h4>
<p>Uprawa bezorkowa (kultywator głęboki, brona talerzowa) i siew bezpośredni ograniczają erozję, koszty i straty wody, ale zwiększają presję chwastów i chorób przenoszonych na resztkach; wymagają dobrej ochrony herbicydowej.</p>
<div class="tip">Orka zimowa zostaje w ostrej skibie, a orka siewna musi mieć czas na osiadanie gleby przed siewem ozimin.</div>` },
        { tytul: "Norma wysiewu i terminy siewu", tresc: `<h4>Wzór</h4>
<p><b>Norma wysiewu (kg/ha) = obsada (szt./m²) × MTZ (g) / WU (%)</b></p>
<ul>
<li><b>MTZ</b>: masa tysiąca ziaren w gramach;</li>
<li><b>WU</b>: wartość użytkowa = czystość (%) × zdolność kiełkowania (%) / 100.</li>
</ul>
<h4>Przykład</h4>
<p>Pszenica ozima: obsada 400 roślin/m², MTZ 45 g, czystość 98%, zdolność kiełkowania 92%.</p>
<ul>
<li>WU = 98 × 92 / 100 = 90,2%;</li>
<li>norma = 400 × 45 / 90,2 = <b>199,6 kg/ha</b>, czyli ok. 200 kg/ha;</li>
<li>na pole 6 ha: 6 × 200 = 1200 kg materiału siewnego.</li>
</ul>
<h4>Wybrane parametry siewu</h4>
<div class="tw"><table><tr><th>Roślina</th><th>Termin</th><th>Głębokość</th><th>Obsada</th></tr>
<tr><td>pszenica ozima</td><td>ok. 15 września - 10 października (zależnie od regionu)</td><td>3-4 cm</td><td>350-450 szt./m²</td></tr>
<tr><td>żyto ozime</td><td>druga połowa września</td><td>2-3 cm</td><td>250-350 szt./m²</td></tr>
<tr><td>rzepak ozimy</td><td>ok. 10-25 sierpnia</td><td>1,5-2 cm</td><td>40-60 szt./m²</td></tr>
<tr><td>jęczmień jary</td><td>jak najwcześniej wiosną (marzec, początek kwietnia)</td><td>3-4 cm</td><td>300-400 szt./m²</td></tr>
<tr><td>kukurydza</td><td>gdy gleba ma ok. 8-10 °C (koniec kwietnia, początek maja)</td><td>4-6 cm</td><td>7-10 szt./m²</td></tr>
<tr><td>ziemniak (sadzenie)</td><td>gdy gleba ma ok. 8 °C, kwiecień</td><td>ok. 8-10 cm</td><td>ok. 4-5 bulw/m²</td></tr></table></div>
<h4>Przygotowanie materiału siewnego</h4>
<p>Kwalifikowany materiał siewny (etykieta, stopień kwalifikacji) zaprawia się zaprawą nasienną przeciw chorobom grzybowym (np. śnieć, fuzarioza) i szkodnikom. Opóźniony siew wymaga zwiększenia normy (gorsze krzewienie).</p>
<div class="tip">Wynik normy wysiewu podaje się w kg/ha. Jeśli WU wynosi 100%, norma = obsada × MTZ / 100.</div>` },
        { tytul: "Płodozmian, przedplony i zbiór", tresc: `<h4>Zasady płodozmianu</h4>
<ul>
<li>Przemienne następstwo roślin o różnych wymaganiach i wpływie na glebę: <b>zboża</b>, <b>okopowe</b> (ziemniak, burak, kukurydza), <b>strączkowe i motylkowe</b> (groch, bobik, łubin, koniczyna, lucerna), <b>oleiste</b> (rzepak).</li>
<li>Strączkowe i motylkowe wiążą azot atmosferyczny (bakterie brodawkowe) i zostawiają go roślinie następczej.</li>
<li>Udział zbóż w zmianowaniu nie powinien być zbyt wysoki; zboża po zbożach sprzyjają chorobom podstawy źdźbła i chwastom (miotła zbożowa).</li>
<li>Rzepaku nie uprawia się na tym samym polu częściej niż co ok. 3-4 lata (kiła kapusty), buraka co ok. 4 lata (mątwik).</li>
</ul>
<h4>Wartość przedplonów dla pszenicy ozimej</h4>
<div class="tw"><table><tr><th>Ocena</th><th>Przedplon</th></tr>
<tr><td>bardzo dobre</td><td>rzepak, strączkowe, koniczyna, ziemniak wczesny</td></tr>
<tr><td>dobre</td><td>kukurydza na kiszonkę, burak (przy wczesnym zbiorze)</td></tr>
<tr><td>złe</td><td>pszenica, jęczmień (choroby podstawy źdźbła)</td></tr></table></div>
<h4>Międzyplony</h4>
<p><b>Ścierniskowe</b> (po zbiorze, np. gorczyca, facelia), <b>ozime</b> (np. żyto, życica na zielonkę wiosną), <b>wsiewki</b> (w roślinę ochronną, np. koniczyna w jęczmień). Chronią glebę przed erozją i wymywaniem azotu, dostarczają masy organicznej.</p>
<h4>Fazy rozwojowe i zbiór zbóż</h4>
<ul>
<li>Fazy wg skali BBCH: kiełkowanie, wschody, krzewienie, strzelanie w źdźbło, kłoszenie, kwitnienie, dojrzałość (mleczna, woskowa, pełna).</li>
<li>Zbiór kombajnem w <b>dojrzałości pełnej</b>, przy wilgotności ziarna ok. 14-15%; ziarno wilgotniejsze trzeba dosuszyć.</li>
<li>Ziarno do przechowania: wilgotność do ok. 14%, oczyszczone, w czystym magazynie, z kontrolą temperatury.</li>
<li>Kukurydza na kiszonkę: dojrzałość woskowa, sucha masa ok. 30-35%.</li>
</ul>
<div class="tip">Rośliny strączkowe są bardzo dobrym przedplonem, bo pozostawiają w glebie azot związany z powietrza.</div>` }
      ],
      pytania: [
        Q("Norma wysiewu przy obsadzie 400 szt./m², MTZ 45 g i WU 90% wynosi:", "200 kg/ha", "180 kg/ha", "45 kg/ha", "400 kg/ha", "400 × 45 / 90 = 200."),
        Q("Wartość użytkowa nasion to:", "czystość × zdolność kiełkowania / 100", "MTZ × obsada", "masa nasion w worku", "liczba nasion w 1 kg", "Np. 98 × 92 / 100 = 90,2%."),
        Q("Orkę zimową pozostawia się na zimę:", "w ostrej skibie", "zwałowaną i zbronowaną", "przykrytą folią", "obsianą rzepakiem", "Zatrzymuje śnieg i wodę."),
        Q("Głębokość siewu rzepaku ozimego wynosi ok.:", "1,5-2 cm", "5-6 cm", "8-10 cm", "0,2 cm", "Drobne nasiona sieje się płytko."),
        Q("Podorywka wykonywana jest:", "bezpośrednio po zbiorze przedplonu", "wiosną przed siewem jarych", "w zimie na zmarzniętą glebę", "tylko na łąkach", "Przerywa parowanie i niszczy chwasty."),
        Q("Złym przedplonem dla pszenicy ozimej jest:", "pszenica", "rzepak", "groch", "koniczyna", "Sprzyja chorobom podstawy źdźbła."),
        Q("Zboża zbiera się kombajnem w fazie:", "dojrzałości pełnej", "dojrzałości mlecznej", "kwitnienia", "krzewienia", "Wilgotność ziarna ok. 14-15%."),
        Q("Rośliny wiążące azot atmosferyczny dzięki bakteriom brodawkowym to:", "strączkowe i motylkowe", "zboża", "okopowe", "oleiste", "Np. groch, łubin, koniczyna.")
      ]
    },
    {
      id: "ochrona-roslin", tytul: "Ochrona roślin", opis: "Zaplanujesz zabiegi zgodne z integrowaną ochroną, skalibrujesz opryskiwacz i bezpiecznie zastosujesz środki.",
      lekcje: [
        { tytul: "Integrowana ochrona roślin", tresc: `<h4>Zasady</h4>
<p>Od <b>1 stycznia 2014 r.</b> każdy profesjonalny użytkownik środków ochrony roślin ma obowiązek stosować zasady <b>integrowanej ochrony roślin</b>: pierwszeństwo mają metody niechemiczne, a środki chemiczne stosuje się, gdy jest to konieczne, np. po przekroczeniu progu szkodliwości.</p>
<h4>Metody ochrony</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Przykłady</th></tr>
<tr><td>agrotechniczna</td><td>płodozmian, termin i gęstość siewu, uprawa roli, zrównoważone nawożenie, niszczenie resztek pożniwnych</td></tr>
<tr><td>hodowlana</td><td>odmiany odporne lub tolerancyjne</td></tr>
<tr><td>biologiczna</td><td>organizmy pożyteczne (biedronki, kruszynek, grzyby i bakterie antagonistyczne), preparaty biologiczne</td></tr>
<tr><td>fizyczna i mechaniczna</td><td>pielenie, bronowanie, pułapki, siatki</td></tr>
<tr><td>chemiczna</td><td>środki ochrony roślin zarejestrowane dla danej uprawy</td></tr></table></div>
<h4>Próg szkodliwości</h4>
<p>To liczebność szkodnika lub nasilenie choroby, przy którym należy wykonać zabieg, bo straty byłyby większe niż koszt ochrony. Ocenia się go lustracją pól (np. żółte naczynia w rzepaku dla słodyszka, liczenie mszyc na roślinach).</p>
<h4>Grupy środków</h4>
<ul>
<li><b>herbicydy</b>: chwasty; <b>fungicydy</b>: choroby grzybowe; <b>insektycydy</b>: owady; <b>akarycydy</b>: roztocza; <b>moluskocydy</b>: ślimaki; <b>rodentycydy</b>: gryzonie;</li>
<li><b>regulatory wzrostu</b>: np. skracające źdźbło zbóż (zapobieganie wyleganiu);</li>
<li><b>zaprawy</b> nasienne.</li>
</ul>
<h4>Ważne choroby i szkodniki</h4>
<div class="tw"><table><tr><th>Uprawa</th><th>Choroby</th><th>Szkodniki</th></tr>
<tr><td>zboża</td><td>mączniak prawdziwy, rdze, septorioza, fuzarioza kłosów, łamliwość źdźbła</td><td>skrzypionki, mszyce, ploniarka</td></tr>
<tr><td>ziemniak</td><td>zaraza ziemniaka, alternarioza, parch</td><td>stonka ziemniaczana</td></tr>
<tr><td>rzepak</td><td>sucha zgnilizna, zgnilizna twardzikowa, kiła</td><td>słodyszek, chowacze, pchełki</td></tr>
<tr><td>burak</td><td>chwościk, mączniak</td><td>mątwik, śmietka</td></tr></table></div>
<div class="tip">Integrowana ochrona nie zakazuje chemii, ale wymaga uzasadnienia zabiegu (np. przekroczenie progu) i wcześniejszego wykorzystania metod niechemicznych.</div>` },
        { tytul: "Kalibracja opryskiwacza i przygotowanie cieczy", tresc: `<h4>Wzór na dawkę cieczy</h4>
<p><b>Q (l/ha) = 600 × q / (v × b)</b></p>
<ul><li>q: wydatek jednego rozpylacza (l/min);</li>
<li>v: prędkość robocza (km/h);</li>
<li>b: rozstaw rozpylaczy na belce (m), zwykle 0,5 m.</li></ul>
<h4>Przykład</h4>
<p>q = 1,2 l/min, v = 6 km/h, b = 0,5 m: Q = 600 × 1,2 / (6 × 0,5) = 720 / 3 = <b>240 l/ha</b>.</p>
<p>Odwrotnie: aby uzyskać 200 l/ha przy 8 km/h, potrzeba q = Q × v × b / 600 = 200 × 8 × 0,5 / 600 = <b>1,33 l/min</b> z rozpylacza (dobiera się rozpylacz i ciśnienie z tabeli).</p>
<h4>Sprawdzenie wydatku</h4>
<ol>
<li>Napełnienie zbiornika czystą wodą, ustawienie ciśnienia roboczego.</li>
<li>Pomiar wydatku z kilku rozpylaczy przez 1 minutę (menzurka); różnica od nominalnego nie powinna przekraczać ok. 10%, inaczej rozpylacz wymienia się.</li>
<li>Pomiar rzeczywistej prędkości na odcinku 100 m: v = 360 / t (s).</li>
</ol>
<h4>Ilość środka do zbiornika</h4>
<p>Środek dawka 1,5 l/ha, dawka cieczy 240 l/ha, zbiornik 1200 l. Jeden zbiornik wystarcza na 1200 / 240 = 5 ha, więc do pełnego zbiornika dodaje się 5 × 1,5 = <b>7,5 l</b> środka. Na pole 12 ha: 18 l środka i 2880 l cieczy (2 pełne zbiorniki i jeden częściowy na 2 ha: 480 l wody + 3 l środka).</p>
<h4>Przygotowanie cieczy</h4>
<ul>
<li>Zbiornik napełniony do ok. połowy wodą, włączone mieszadło, dodanie środka (przy mieszaninach kolejność wg etykiet), dopełnienie wodą.</li>
<li>Opakowanie płucze się trzykrotnie, a popłuczyny wlewa do zbiornika; puste opakowania zwraca się do punktu sprzedaży.</li>
<li>Przygotowuje się tyle cieczy, ile potrzeba; resztę rozcieńcza i wypryskuje na polu, na którym wykonano zabieg.</li>
<li>Badanie sprawności opryskiwacza wykonuje się co <b>3 lata</b> (nowy w ciągu 5 lat od zakupu).</li>
</ul>
<div class="tip">Prędkość wyższa przy tym samym wydatku rozpylaczy oznacza mniejszą dawkę cieczy na hektar.</div>` },
        { tytul: "Bezpieczne stosowanie środków", tresc: `<h4>Uprawnienia i dokumentacja</h4>
<ul>
<li>Środki stosuje osoba z ważnym <b>szkoleniem</b> w zakresie stosowania środków ochrony roślin (ważne <b>5 lat</b>).</li>
<li>Stosuje się tylko środki zarejestrowane w Polsce dla danej uprawy, zgodnie z <b>etykietą</b> (dawka, termin, liczba zabiegów).</li>
<li>Prowadzi się <b>ewidencję zabiegów</b> (data, uprawa, powierzchnia, nazwa środka, dawka, przyczyna zabiegu) i przechowuje ją co najmniej 3 lata.</li>
</ul>
<h4>Karencja i prewencja</h4>
<div class="tw"><table><tr><th>Pojęcie</th><th>Znaczenie</th></tr>
<tr><td><b>okres karencji</b></td><td>minimalny czas od ostatniego zabiegu do zbioru rośliny lub jej spożycia</td></tr>
<tr><td><b>okres prewencji</b></td><td>czas od zabiegu, w którym ludzie i zwierzęta nie mogą przebywać na polu (także pszczoły, w nazewnictwie zwykle okres prewencji dla pszczół)</td></tr>
<tr><td>okres ochrony (działania)</td><td>czas skutecznego działania środka</td></tr></table></div>
<h4>Warunki zabiegu</h4>
<ul>
<li>Prędkość wiatru nie większa niż <b>4 m/s</b>, temperatura zwykle do ok. 25 °C, brak opadów.</li>
<li>Zabiegi środkami niebezpiecznymi dla pszczół wykonuje się <b>po zakończeniu lotu pszczół</b> (wieczorem), nie na kwitnące uprawy i chwasty, jeśli etykieta tego zabrania.</li>
<li>Odległości: od pasiek co najmniej <b>20 m</b>, od krawędzi dróg publicznych <b>3 m</b>, od wód wg etykiety (strefy buforowe), z technikami ograniczającymi znoszenie (rozpylacze eżektorowe).</li>
</ul>
<h4>Środki ochrony osobistej i magazyn</h4>
<p>Kombinezon, rękawice nitrylowe, gogle lub osłona twarzy, półmaska z filtrem, obuwie gumowe. W czasie pracy nie je się, nie pije i nie pali. Środki przechowuje się w oryginalnych opakowaniach, w zamkniętym, suchym, wentylowanym magazynie, z dala od żywności i pasz, niedostępnym dla dzieci.</p>
<h4>Zatrucie</h4>
<p>Wyprowadzić poszkodowanego na świeże powietrze, zdjąć skażoną odzież, zmyć skórę wodą z mydłem, oczy płukać ok. 15 min, wezwać pomoc (112) i pokazać lekarzowi etykietę lub kartę charakterystyki. Nie wywoływać wymiotów bez zalecenia.</p>
<div class="tip">Karencja dotyczy zbioru i spożycia, a prewencja przebywania ludzi, zwierząt i pszczół na opryskanym polu.</div>` }
      ],
      pytania: [
        Q("Dawka cieczy przy q = 1,2 l/min, v = 6 km/h i b = 0,5 m wynosi:", "240 l/ha", "120 l/ha", "360 l/ha", "60 l/ha", "600 × 1,2 / (6 × 0,5) = 240."),
        Q("Okres karencji to:", "minimalny czas od ostatniego zabiegu do zbioru rośliny", "czas, w którym nie wolno wchodzić na pole", "czas działania środka", "termin ważności środka", "Prewencja dotyczy przebywania na polu."),
        Q("Integrowana ochrona roślin jest obowiązkowa w Polsce od:", "1 stycznia 2014 r.", "1 maja 2004 r.", "1 stycznia 2023 r.", "nie jest obowiązkowa", "Wynika z dyrektywy UE."),
        Q("Zabiegu opryskiwania nie wykonuje się przy prędkości wiatru powyżej:", "4 m/s", "10 m/s", "15 m/s", "1 km/h", "Grozi znoszeniem cieczy."),
        Q("Środki niebezpieczne dla pszczół stosuje się:", "po zakończeniu lotu pszczół", "w południe", "rano przed lotem pszczół w pełnym kwitnieniu", "w czasie deszczu", "Najczęściej wieczorem."),
        Q("Szkolenie z zakresu stosowania środków ochrony roślin jest ważne:", "5 lat", "1 rok", "10 lat", "bezterminowo", "Potem trzeba je odnowić."),
        Q("Herbicydy służą do zwalczania:", "chwastów", "grzybów", "owadów", "gryzoni", "Fungicydy to grzyby, insektycydy owady."),
        Q("Ile środka (1,5 l/ha) dodać do zbiornika 1200 l przy dawce cieczy 240 l/ha?", "7,5 l", "1,5 l", "5 l", "18 l", "Zbiornik na 5 ha × 1,5 l.")
      ]
    },
    {
      id: "zwierzeta", tytul: "Chów i żywienie zwierząt", opis: "Zaplanujesz rozród, żywienie i warunki utrzymania bydła, świń i drobiu zgodnie z wymaganiami.",
      lekcje: [
        { tytul: "Rozród zwierząt gospodarskich", tresc: `<h4>Czas ciąży i cykl płciowy</h4>
<div class="tw"><table><tr><th>Gatunek</th><th>Ciąża</th><th>Cykl rujowy</th></tr>
<tr><td>krowa</td><td>ok. 280-285 dni (ok. 9 miesięcy)</td><td>co ok. 21 dni, ruja ok. 18-24 h</td></tr>
<tr><td>locha</td><td>ok. 114 dni (3 miesiące, 3 tygodnie, 3 dni)</td><td>co ok. 21 dni</td></tr>
<tr><td>owca, koza</td><td>ok. 150 dni</td><td>owca co ok. 17 dni, sezonowo</td></tr>
<tr><td>klacz</td><td>ok. 335-340 dni</td><td>co ok. 21 dni, sezonowo</td></tr>
<tr><td>królica</td><td>ok. 30-31 dni</td><td>owulacja prowokowana</td></tr></table></div>
<h4>Inkubacja jaj</h4>
<p>Kura <b>21 dni</b>, kaczka i indyczka ok. <b>28 dni</b>, gęś ok. 28-30 dni.</p>
<h4>Rozród bydła w praktyce</h4>
<ul>
<li>Objawy rui: niepokój, ryczenie, obskakiwanie innych i <b>stanie przy obskakiwaniu</b> (najpewniejszy objaw), śluz z pochwy, spadek mleczności.</li>
<li>Zasada inseminacji <b>„rano-wieczór”</b>: ruja zauważona rano, inseminacja wieczorem; zauważona wieczorem, inseminacja następnego dnia rano.</li>
<li>Jałówki unasienia się po osiągnięciu ok. 15-16 miesięcy i ok. 60-65% masy krowy dorosłej.</li>
<li>Okres międzywycieleniowy optymalnie ok. 365-400 dni; krowę unasienia się ok. 60-90 dni po porodzie.</li>
<li><b>Zasuszenie</b> ok. 6-8 tygodni przed wycieleniem (regeneracja wymienia, rozwój płodu).</li>
</ul>
<h4>Odchów młodych</h4>
<ul>
<li>Cielę otrzymuje <b>siarę</b> jak najszybciej po urodzeniu (w ciągu ok. 1-2 h, ok. 2-4 l w pierwszym karmieniu); zawiera przeciwciała, bo cielę rodzi się bez odporności biernej.</li>
<li>Prosięta: siara w pierwszych godzinach, uzupełnianie żelaza (iniekcja) w pierwszych dniach życia, temperatura w legowisku ok. 30-32 °C w pierwszych dniach.</li>
<li>Bydło oznakowuje się kolczykami i zgłasza do rejestru ARiMR w terminie <b>7 dni</b> od urodzenia.</li>
</ul>
<div class="tip">Ciąża lochy to 114 dni, krowy ok. 9 miesięcy (280-285 dni), a inkubacja kurzych jaj 21 dni. To najczęstsze liczby w testach.</div>` },
        { tytul: "Pasze i dawki pokarmowe", tresc: `<h4>Podział pasz</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Przykłady</th><th>Cechy</th></tr>
<tr><td>objętościowe soczyste</td><td>zielonki, kiszonki (z kukurydzy, traw), okopowe</td><td>dużo wody, tanie, podstawa żywienia przeżuwaczy</td></tr>
<tr><td>objętościowe suche</td><td>siano, słoma, sianokiszonka (podsuszona)</td><td>włókno, praca żwacza</td></tr>
<tr><td>treściwe</td><td>ziarna zbóż, śruty, poekstrakcyjne śruty rzepakowa i sojowa, mieszanki pełnoporcjowe i uzupełniające</td><td>dużo energii lub białka, mało włókna</td></tr>
<tr><td>dodatki</td><td>mieszanki mineralne, witaminy, sól, lizawki</td><td>uzupełnienie niedoborów</td></tr></table></div>
<h4>Zasady żywienia</h4>
<ul>
<li><b>Przeżuwacze</b> (bydło, owce): podstawą są pasze objętościowe; zbyt dużo paszy treściwej i za mało włókna grozi kwasicą żwacza; zmiany dawki stopniowo.</li>
<li><b>Świnie</b> (zwierzęta monogastryczne): pasze treściwe, mieszanki z białkiem o dobrym składzie aminokwasów (lizyna), dawka zależna od fazy (prestarter, starter, tucz).</li>
<li><b>Drób</b>: mieszanki pełnoporcjowe, dla niosek dodatek wapnia (grysik).</li>
<li>Stały dostęp do czystej wody; krowa wysokowydajna pije ok. 100-150 l dziennie.</li>
</ul>
<h4>Kiszonka</h4>
<p>Zakiszanie to fermentacja mlekowa beztlenowa; zielonkę rozdrabnia się, szybko ubija i szczelnie okrywa folią. Kukurydzę zbiera się w dojrzałości woskowej (ok. 30-35% suchej masy). Dobra kiszonka ma pH ok. 4, przyjemny kwaśny zapach, bez pleśni; pleśniejących partii nie skarmia się.</p>
<h4>Dawka pokarmowa</h4>
<p>Pokrywa potrzeby bytowe i produkcyjne (mleko, przyrost, ciąża). Normy wyrażane są w systemach energetycznych i białkowych (np. dla bydła w systemie INRA: JPM, BTJE, BTJN; dla świń energia metaboliczna EM w MJ i białko). Przykład: krowa 600 kg o wydajności 25 kg mleka potrzebuje paszy na potrzeby bytowe i na każdy kg mleka; dawkę bilansuje się kiszonką, sianem i paszą treściwą tak, by pokryć braki.</p>
<div class="tip">Kwasica żwacza to skutek nadmiaru łatwo fermentujących pasz treściwych przy niedoborze włókna z pasz objętościowych.</div>` },
        { tytul: "Utrzymanie zwierząt i dobrostan", tresc: `<h4>Systemy utrzymania bydła</h4>
<ul>
<li><b>Uwięziowy</b> (na stanowiskach przywiązanych): tańszy w małych stadach, mniej ruchu.</li>
<li><b>Wolnostanowiskowy</b> (boksy legowiskowe, korytarze gnojowe): lepszy dobrostan, łatwiejsza mechanizacja, dój w hali udojowej lub robotem.</li>
<li>Cielęta do 8 tygodni mogą przebywać w kojcach indywidualnych, potem grupowo (z wyjątkami weterynaryjnymi).</li>
<li>Wypas na pastwisku sprzyja zdrowiu racic i płodności.</li>
</ul>
<h4>Świnie: minimalna powierzchnia na zwierzę w kojcu grupowym</h4>
<div class="tw"><table><tr><th>Masa</th><th>Powierzchnia</th></tr>
<tr><td>do 10 kg</td><td>0,15 m²</td></tr>
<tr><td>30-50 kg</td><td>0,40 m²</td></tr>
<tr><td>85-110 kg</td><td>0,65 m²</td></tr>
<tr><td>powyżej 110 kg</td><td>1,00 m²</td></tr></table></div>
<p>Świnie muszą mieć dostęp do materiału manipulacyjnego (słoma, siano, drewno), stały dostęp do wody, oświetlenie min. 40 lx przez co najmniej 8 h dziennie.</p>
<h4>Mikroklimat budynku</h4>
<ul>
<li>Temperatura, wilgotność względna (zwykle 60-80%), wymiana powietrza, ograniczenie amoniaku, siarkowodoru i dwutlenku węgla.</li>
<li>Przeciągi i wysoka wilgotność sprzyjają chorobom układu oddechowego.</li>
</ul>
<h4>Higiena i bioasekuracja</h4>
<ul>
<li>Maty dezynfekcyjne przy wejściach, odzież i obuwie przeznaczone tylko do budynku, kwarantanna nowych zwierząt, ograniczenie wizyt osób obcych.</li>
<li>Szczególne wymagania przy zagrożeniu <b>ASF</b> (afrykański pomór świń) i ptasią grypą: ogrodzenie, zabezpieczenie paszy i ściółki przed dzikimi zwierzętami, ewidencja wjazdów.</li>
<li>Metoda „wszystko pełne, wszystko puste” w tuczu i drobiu: czyszczenie i dezynfekcja między rzutami.</li>
</ul>
<h4>Jakość mleka</h4>
<p>Mleko surowe krowie powinno mieć ogólną liczbę drobnoustrojów nie wyższą niż <b>100 000/ml</b> i liczbę komórek somatycznych nie wyższą niż <b>400 000/ml</b>. Wysoka liczba komórek somatycznych wskazuje na zapalenie wymienia (mastitis). Przed dojem: przedzdajanie pierwszych strumieni, mycie i osuszenie strzyków, po doju dipping.</p>
<div class="tip">Tucznik powyżej 110 kg wymaga co najmniej 1,0 m² powierzchni kojca, a tucznik 85-110 kg 0,65 m².</div>` }
      ],
      pytania: [
        Q("Ciąża lochy trwa około:", "114 dni", "150 dni", "280 dni", "21 dni", "3 miesiące, 3 tygodnie, 3 dni."),
        Q("Inkubacja jaj kurzych trwa:", "21 dni", "28 dni", "14 dni", "35 dni", "Kaczka i indyczka ok. 28 dni."),
        Q("Najpewniejszym objawem rui u krowy jest:", "stanie przy obskakiwaniu przez inne zwierzęta", "spadek apetytu", "wzrost mleczności", "kaszel", "Tzw. odruch tolerancji."),
        Q("Krowę zasusza się przed wycieleniem na około:", "6-8 tygodni", "1 tydzień", "4 miesiące", "nie zasusza się", "Wymię się regeneruje."),
        Q("Siarę cielę powinno otrzymać:", "jak najszybciej po urodzeniu, w ciągu 1-2 h", "po 3 dniach", "po tygodniu", "nie potrzebuje siary", "Zawiera przeciwciała."),
        Q("Kwasica żwacza jest skutkiem:", "nadmiaru pasz treściwych i niedoboru włókna", "nadmiaru siana", "pojenia czystą wodą", "wypasu na pastwisku", "Fermentacja skrobi obniża pH żwacza."),
        Q("Minimalna powierzchnia kojca dla tucznika powyżej 110 kg wynosi:", "1,0 m²", "0,40 m²", "0,15 m²", "2,5 m²", "Dla 85-110 kg 0,65 m²."),
        Q("Wysoka liczba komórek somatycznych w mleku świadczy o:", "zapaleniu wymienia", "wysokiej zawartości tłuszczu", "dobrym żywieniu", "niskiej temperaturze mleka", "Limit to 400 000/ml.")
      ]
    },
    {
      id: "maszyny", tytul: "Maszyny i ciągniki", opis: "Przygotujesz ciągnik i maszyny do pracy, ustawisz je i bezpiecznie obsłużysz.",
      lekcje: [
        { tytul: "Ciągnik rolniczy i agregatowanie", tresc: `<h4>Układy ciągnika</h4>
<ul>
<li><b>Silnik</b> wysokoprężny (diesel): układ zasilania, smarowania, chłodzenia; codzienna kontrola poziomu oleju, płynu chłodzącego, filtra powietrza.</li>
<li><b>Układ napędowy</b>: sprzęgło, skrzynia biegów, most, blokada mechanizmu różnicowego (włączana tylko na prostej przy poślizgu kół).</li>
<li><b>WOM</b> (wałek odbioru mocy): standardowo <b>540</b> i <b>1000 obr/min</b>; prędkość dobiera się do maszyny.</li>
<li><b>TUZ</b> (trzypunktowy układ zawieszenia) z podnośnikiem hydraulicznym: regulacja pozycyjna, siłowa (przy orce) i mieszana.</li>
<li><b>Hydraulika zewnętrzna</b>: szybkozłącza do siłowników maszyn.</li>
</ul>
<h4>Przygotowanie do pracy</h4>
<ol>
<li>Kontrola codzienna: płyny, ciśnienie w ogumieniu, oświetlenie, hamulce, osłony.</li>
<li>Dobór ciśnienia w oponach: niższe w polu (mniejsze ugniatanie gleby), wyższe na drodze.</li>
<li><b>Balastowanie</b>: obciążniki przednie przy ciężkich maszynach zawieszanych z tyłu (oś przednia musi mieć min. ok. 20% masy ciągnika z maszyną, by zachować sterowność).</li>
<li>Agregatowanie maszyny: zaczepienie, zabezpieczenie sworzni zawleczkami, wypoziomowanie, ustawienie cięgieł ograniczających ruch boczny.</li>
</ol>
<h4>Wał przegubowo-teleskopowy</h4>
<ul>
<li>Musi mieć <b>kompletną osłonę</b> zabezpieczoną łańcuszkami przed obracaniem się.</li>
<li>Długość dobiera się tak, aby rury nie dobijały przy skręcie i nie rozłączały się przy podnoszeniu (odpowiednie zachodzenie).</li>
<li>Kąty przegubów możliwie małe; przy dużym skręcie WOM wyłącza się.</li>
<li>Przed podłączeniem i pracami obsługowymi: silnik wyłączony, kluczyk wyjęty, WOM wyłączony.</li>
</ul>
<h4>Ruch drogowy</h4>
<p>Ciągnik z maszyną zawieszaną: oświetlenie i oznakowanie tablicą wyróżniającą (pojazd wolnobieżny), maszyna podniesiona i zablokowana, wystające elementy oznakowane. Prędkość dostosowana do przepisów i ładunku; przyczepy z hamulcami przy określonej masie.</p>
<div class="tip">Blokadę mechanizmu różnicowego włącza się tylko przy jeździe na wprost w razie poślizgu; na zakrętach grozi uszkodzeniem i utratą sterowności.</div>` },
        { tytul: "Maszyny do uprawy, siewu i nawożenia", tresc: `<h4>Pług</h4>
<ul>
<li>Korpus: lemiesz (podcina skibę), odkładnica (odwraca i kruszy), płóz; dodatkowo pogłębiacze, przedpłużki, kroje.</li>
<li><b>Pług obracalny</b> pozwala orać w jednym kierunku bez zagonów i rozorywek.</li>
<li>Regulacja: głębokość (koło podporowe, TUZ), szerokość pierwszej skiby, pion (łącznik górny i wieszaki), szerokość robocza korpusów.</li>
<li>Przy orce stosuje się regulację siłową podnośnika.</li>
</ul>
<h4>Siewnik</h4>
<ul>
<li>Rzędowy mechaniczny (wałki wysiewające), pneumatyczny (dozownik centralny, rozdział powietrzem), punktowy (kukurydza, burak: dokładny rozstaw nasion w rzędzie).</li>
<li>Regulacja: dawka wysiewu, głębokość (redlice, docisk), znaczniki przejazdów, ścieżki technologiczne.</li>
</ul>
<h4>Próba kręconą (próba wysiewu na postoju)</h4>
<ol>
<li>Wyliczenie liczby obrotów koła napędowego odpowiadającej znanej powierzchni, np. 1/40 ha (250 m²).</li>
<li>Obrót koła (lub korbą) przewidzianą liczbę razy z nasionami w skrzyni, zbieranie nasion do pojemników.</li>
<li>Zważenie: masa × 40 = dawka na ha. Np. 5,1 kg × 40 = 204 kg/ha przy żądanych 200 kg/ha: korekta przekładni i powtórzenie próby.</li>
</ol>
<h4>Rozsiewacz nawozów</h4>
<p>Tarczowy (odśrodkowy) lub pneumatyczny. Szerokość roboczą i nakładanie się pasów ustala się wg tabel producenta dla danego nawozu (gęstość, granulacja); dawkę reguluje zasuwą i prędkością. Kontrola równomierności tacami testowymi. Przy granicach pola i wodach stosuje się rozsiew graniczny.</p>
<h4>Opryskiwacz polowy</h4>
<p>Zbiornik, pompa, zawór regulacyjny z manometrem, filtry, belka z rozpylaczami (wysokość ok. 50 cm nad roślinami przy rozstawie 50 cm). Rozpylacze płaskostrumieniowe standardowe, eżektorowe (grube krople, mniejsze znoszenie). Kalibracja według wzoru na wydatek cieczy.</p>
<div class="tip">Próba kręconą pozwala sprawdzić dawkę wysiewu przed wyjazdem w pole; wynik z 1/40 ha mnoży się przez 40.</div>` },
        { tytul: "Maszyny do zbioru i BHP", tresc: `<h4>Kombajn zbożowy</h4>
<ul>
<li>Zespoły: <b>heder</b> (nagarniacz, kosa, przenośnik ślimakowy), przenośnik pochyły, <b>zespół młócący</b> (bęben i klepisko lub rotor), wytrząsacze (oddzielanie ziarna od słomy), <b>zespół czyszczący</b> (sita i wentylator), zbiornik ziarna, rozdrabniacz słomy.</li>
<li>Regulacje: obroty bębna i szczelina omłotowa (więcej obrotów i mniejsza szczelina przy trudnym omłocie, ryzyko uszkodzeń ziarna), wentylator i sita (czystość ziarna), wysokość cięcia, prędkość jazdy.</li>
<li>Kontrola strat: za wytrząsaczami i sitami; dopuszczalne łączne straty zwykle do ok. 1-2%.</li>
</ul>
<h4>Zbiór zielonek i siana</h4>
<div class="tw"><table><tr><th>Maszyna</th><th>Zadanie</th></tr>
<tr><td>kosiarka rotacyjna (bębnowa, dyskowa), z kondycjonerem</td><td>koszenie, zgniatanie łodyg dla szybszego schnięcia</td></tr>
<tr><td>przetrząsacz</td><td>rozrzucenie i przewracanie pokosu</td></tr>
<tr><td>zgrabiarka</td><td>zgrabienie w wały</td></tr>
<tr><td>prasa zwijająca lub kostkująca</td><td>formowanie bel lub kostek</td></tr>
<tr><td>owijarka</td><td>owijanie bel folią (sianokiszonka)</td></tr>
<tr><td>sieczkarnia</td><td>zbiór i rozdrabnianie kukurydzy na kiszonkę</td></tr></table></div>
<h4>Zbiór okopowych</h4>
<p>Kopaczki i kombajny do ziemniaków (elewatory, oddzielanie łęcin i grud, stół przebierczy), kombajny buraczane (ogławianie, wyorywanie, oczyszczanie). Głębokość pracy ustawia się, aby nie kaleczyć bulw ani korzeni.</p>
<h4>BHP przy maszynach</h4>
<ul>
<li>Wszystkie osłony części ruchomych (wały, łańcuchy, pasy) muszą być założone.</li>
<li>Usuwanie zapchań, regulacje i czyszczenie wyłącznie przy <b>wyłączonym silniku</b>, wyjętym kluczyku i zatrzymanych zespołach; podniesione maszyny zabezpiecza się podporami.</li>
<li>Nie przebywa się między ciągnikiem a maszyną podczas zaczepiania; zaczepianie przyczepy z kabiny lub przy unieruchomionym ciągniku.</li>
<li>Kombajn: uwaga na linie energetyczne przy rozkładaniu rury wyładowczej, gaśnica w kabinie, usuwanie kurzu i resztek z silnika (ryzyko pożaru).</li>
<li>Jazda tylko z osobami w miejscach do tego przeznaczonych; dzieci nie przebywają w strefie pracy maszyn.</li>
</ul>
<div class="tip">Najwięcej wypadków przy maszynach wiąże się z wałem przegubowym bez osłony i usuwaniem zapchań przy pracującym silniku.</div>` }
      ],
      pytania: [
        Q("Standardowe prędkości WOM w ciągnikach to:", "540 i 1000 obr/min", "100 i 200 obr/min", "3000 i 5000 obr/min", "60 i 90 obr/min", "Prędkość dobiera się do maszyny."),
        Q("Blokadę mechanizmu różnicowego włącza się:", "przy poślizgu kół podczas jazdy na wprost", "na każdym zakręcie", "podczas jazdy po drodze", "stale podczas orki z zawracaniem", "Na zakręcie grozi uszkodzeniem."),
        Q("Przy orce podnośnik hydrauliczny pracuje najczęściej w regulacji:", "siłowej", "pozycyjnej", "wyłączonej", "pływającej bez kontroli", "Utrzymuje stały opór i głębokość."),
        Q("Wynik próby kręconej z powierzchni 1/40 ha wynosi 5 kg. Dawka wysiewu to:", "200 kg/ha", "125 kg/ha", "40 kg/ha", "5 kg/ha", "5 × 40 = 200."),
        Q("Pług obracalny pozwala:", "orać bez tworzenia zagonów i rozorywek", "wysiewać nasiona", "uprawiać bez odwracania gleby", "zbierać ziemniaki", "Skiby odkładane są w jedną stronę."),
        Q("W kombajnie zbożowym za oddzielenie ziarna od słomy odpowiadają:", "wytrząsacze", "nagarniacz", "rozdrabniacz", "heder", "Czystość zapewnia zespół czyszczący."),
        Q("Zapchanie maszyny usuwa się:", "przy wyłączonym silniku i zatrzymanych zespołach", "w czasie pracy na niskich obrotach", "ręką przy włączonym WOM", "drągiem w trakcie jazdy", "Podstawowa zasada BHP."),
        Q("Kondycjoner w kosiarce służy do:", "zgniatania łodyg dla szybszego schnięcia", "zbierania pokosu w wały", "owijania bel folią", "rozdrabniania kukurydzy", "Przyspiesza suszenie siana.")
      ]
    }
  ]);

  pod("ROL.10", [
    {
      id: "ekonomika", tytul: "Ekonomika gospodarstwa", opis: "Obliczysz koszty, nadwyżkę bezpośrednią, próg opłacalności i ocenisz wyniki działalności.",
      lekcje: [
        { tytul: "Koszty i ich podział", tresc: `<h4>Podział kosztów</h4>
<div class="tw"><table><tr><th>Kryterium</th><th>Rodzaje</th><th>Przykłady</th></tr>
<tr><td>związek z działalnością</td><td><b>bezpośrednie</b> (przypisane do konkretnej uprawy lub zwierząt)</td><td>nasiona, nawozy, środki ochrony, pasze, usługi weterynaryjne</td></tr>
<tr><td></td><td><b>pośrednie</b> (ogólnogospodarcze)</td><td>amortyzacja budynków, ubezpieczenia, podatek rolny, energia, KRUS</td></tr>
<tr><td>zależność od skali</td><td><b>zmienne</b></td><td>rosną z wielkością produkcji: nasiona, paliwo, nawozy</td></tr>
<tr><td></td><td><b>stałe</b></td><td>niezależne w krótkim okresie: amortyzacja, dzierżawa, ubezpieczenia</td></tr></table></div>
<h4>Amortyzacja</h4>
<p>Rozłożenie wartości środka trwałego na lata użytkowania. Metoda liniowa: <b>A = wartość początkowa / liczba lat</b> (lub × stopa amortyzacji). Ciągnik za 240 000 zł używany 10 lat: 24 000 zł rocznie, ok. 2000 zł miesięcznie.</p>
<h4>Produkcja w gospodarstwie</h4>
<ul>
<li><b>Produkcja globalna</b>: cała wytworzona produkcja (także zużyta w gospodarstwie, np. pasze własne).</li>
<li><b>Produkcja towarowa</b>: sprzedana poza gospodarstwo.</li>
<li><b>Produkcja końcowa</b>: produkcja globalna minus obrót wewnętrzny (pasze, nasiona własne) i straty.</li>
</ul>
<h4>Koszt jednostkowy</h4>
<p><b>Kj = koszty całkowite / ilość produktu</b>. Koszty uprawy 1 ha pszenicy 5600 zł, plon 7 t/ha: Kj = 5600 / 7 = <b>800 zł/t</b>. Przy cenie 900 zł/t zysk wynosi 100 zł/t, przy cenie 750 zł/t produkcja jest nieopłacalna bez dopłat.</p>
<h4>Wskaźniki</h4>
<ul>
<li><b>Wskaźnik opłacalności</b> = przychody / koszty × 100%; powyżej 100% produkcja opłacalna.</li>
<li><b>Rentowność</b> = zysk / przychody × 100%.</li>
<li><b>Wydajność pracy</b> = produkcja / nakład pracy (np. t na roboczogodzinę).</li>
<li><b>Produktywność ziemi</b> = produkcja na 1 ha użytków rolnych.</li>
</ul>
<div class="tip">Koszty stałe nie zmieniają się przy wzroście produkcji, dlatego większa skala obniża koszt jednostkowy (efekt skali).</div>` },
        { tytul: "Nadwyżka bezpośrednia i dochód", tresc: `<h4>Nadwyżka bezpośrednia (NB)</h4>
<p><b>NB = wartość produkcji (z płatnościami związanymi z daną działalnością) - koszty bezpośrednie</b>. Służy do porównywania opłacalności działalności i wyboru struktury produkcji.</p>
<h4>Przykład: porównanie upraw na 1 ha</h4>
<div class="tw"><table><tr><th>Pozycja</th><th>Pszenica</th><th>Rzepak</th></tr>
<tr><td>plon</td><td>7 t</td><td>3,5 t</td></tr>
<tr><td>cena</td><td>900 zł/t</td><td>2000 zł/t</td></tr>
<tr><td>wartość produkcji</td><td>6300 zł</td><td>7000 zł</td></tr>
<tr><td>nasiona</td><td>400 zł</td><td>350 zł</td></tr>
<tr><td>nawozy</td><td>1600 zł</td><td>1900 zł</td></tr>
<tr><td>środki ochrony</td><td>700 zł</td><td>900 zł</td></tr>
<tr><td>inne bezpośrednie (paliwo, usługi)</td><td>800 zł</td><td>950 zł</td></tr>
<tr><td>koszty bezpośrednie</td><td>3500 zł</td><td>4100 zł</td></tr>
<tr><td><b>NB</b></td><td><b>2800 zł</b></td><td><b>2900 zł</b></td></tr></table></div>
<p>Rzepak daje nieco wyższą NB, ale decyzja uwzględnia też płodozmian, ryzyko i dostępność maszyn.</p>
<h4>Dochód rolniczy</h4>
<ul>
<li><b>Dochód z gospodarstwa</b> = suma NB wszystkich działalności + płatności niezwiązane z produkcją - koszty pośrednie (ogólnogospodarcze).</li>
<li>Dochód netto pomniejsza się o podatki i obciążenia; wynagradza on pracę rodziny, ziemię i kapitał własny.</li>
<li>W systemie FADN (Polski FADN) gospodarstwa prowadzą rachunkowość na potrzeby porównań w UE.</li>
</ul>
<h4>Standardowa produkcja (SO)</h4>
<p>Średnia wartość produkcji z 1 ha uprawy lub 1 zwierzęcia w regionie, w euro. Suma SO wyznacza <b>wielkość ekonomiczną</b> gospodarstwa, a udział działalności jego <b>typ rolniczy</b> (np. uprawy polowe, mleczny). Wielkość ekonomiczna bywa kryterium dostępu do programów wsparcia.</p>
<h4>Analiza wrażliwości</h4>
<p>Sprawdza się, jak NB zmienia się przy spadku ceny lub plonu (np. o 10%). Pszenica: plon 6,3 t daje 5670 zł, NB spada do 2170 zł, o 22,5%. Uprawy o wysokich kosztach bezpośrednich są bardziej wrażliwe.</p>
<div class="tip">NB nie uwzględnia kosztów pośrednich, więc nie jest zyskiem. Służy do porównań działalności.</div>` },
        { tytul: "Próg opłacalności i inwestycje", tresc: `<h4>Próg opłacalności (rentowności)</h4>
<p><b>Ilościowy: Q = KS / (C - kz)</b>, gdzie KS to koszty stałe, C cena jednostkowa, kz jednostkowy koszt zmienny.</p>
<p><b>Przykład</b>: chów tuczników, koszty stałe 60 000 zł rocznie, cena tucznika 1000 zł, koszt zmienny (prosię, pasza, weterynaria) 850 zł na sztukę. Q = 60 000 / (1000 - 850) = <b>400 tuczników</b> rocznie, aby pokryć koszty.</p>
<p><b>Plonu</b>: minimalny plon = koszty na 1 ha / cena. Koszty 5600 zł/ha, cena 900 zł/t: 5600 / 900 = <b>6,22 t/ha</b>.</p>
<p><b>Cenowy</b>: minimalna cena = koszty na 1 ha / plon, np. 5600 / 7 = 800 zł/t.</p>
<h4>Ocena inwestycji</h4>
<ul>
<li><b>Prosty okres zwrotu</b> = nakład inwestycyjny / roczny przyrost dochodu (lub przepływ pieniężny). Np. dojarka za 80 000 zł oszczędzająca 20 000 zł rocznie zwraca się w <b>4 lata</b>.</li>
<li><b>Stopa zwrotu</b> = roczny zysk / nakład × 100%.</li>
<li>Metody dyskontowe (NPV, IRR) uwzględniają wartość pieniądza w czasie, stosowane w biznesplanach do wniosków o dofinansowanie.</li>
</ul>
<h4>Źródła finansowania</h4>
<div class="tw"><table><tr><th>Źródło</th><th>Cechy</th></tr>
<tr><td>środki własne</td><td>brak kosztów odsetek, ograniczona kwota</td></tr>
<tr><td>kredyt bankowy (także preferencyjny z dopłatą ARiMR do oprocentowania)</td><td>odsetki, zabezpieczenie, harmonogram spłat</td></tr>
<tr><td>leasing</td><td>raty kosztem, wykup po okresie umowy</td></tr>
<tr><td>dotacje z PS WPR (EFRROW)</td><td>refundacja części kosztów po realizacji, wymagany biznesplan i trwałość inwestycji</td></tr></table></div>
<h4>Ryzyko w rolnictwie</h4>
<p>Ryzyko produkcyjne (susza, przymrozki, choroby), cenowe, instytucjonalne. Ograniczanie: ubezpieczenia upraw i zwierząt (dopłaty do składek), dywersyfikacja, umowy kontraktacyjne ze stałą ceną, grupy producentów, magazynowanie.</p>
<div class="tip">W progu ilościowym dzielisz koszty stałe przez nadwyżkę ceny nad kosztem zmiennym jednostki, a nie przez samą cenę.</div>` }
      ],
      pytania: [
        Q("Nadwyżkę bezpośrednią oblicza się jako:", "wartość produkcji minus koszty bezpośrednie", "przychód minus wszystkie koszty", "koszty stałe plus zmienne", "dochód minus podatki", "Nie uwzględnia kosztów pośrednich."),
        Q("Do kosztów stałych zalicza się:", "amortyzację budynków", "nasiona", "nawozy", "paszę treściwą", "Nie zależy od wielkości produkcji."),
        Q("Koszt uprawy 1 ha wynosi 5600 zł, a plon 7 t. Koszt jednostkowy to:", "800 zł/t", "700 zł/t", "39 200 zł/t", "5600 zł/t", "5600 / 7 = 800."),
        Q("Próg opłacalności przy KS = 60 000 zł, cenie 1000 zł i koszcie zmiennym 850 zł wynosi:", "400 szt.", "60 szt.", "70 szt.", "600 szt.", "60 000 / 150 = 400."),
        Q("Amortyzacja liniowa ciągnika za 240 000 zł przy 10 latach użytkowania wynosi rocznie:", "24 000 zł", "2 400 zł", "240 000 zł", "10 000 zł", "240 000 / 10."),
        Q("Wskaźnik opłacalności powyżej 100% oznacza, że:", "przychody przewyższają koszty", "produkcja przynosi stratę", "koszty są równe zero", "gospodarstwo nie otrzymało dopłat", "Przychody / koszty × 100%."),
        Q("Prosty okres zwrotu inwestycji 80 000 zł przynoszącej 20 000 zł rocznie wynosi:", "4 lata", "2 lata", "8 lat", "20 lat", "80 000 / 20 000."),
        Q("Produkcja towarowa to produkcja:", "sprzedana poza gospodarstwo", "zużyta na paszę w gospodarstwie", "cała wytworzona", "zniszczona przez szkodniki", "Globalna obejmuje także zużycie własne.")
      ]
    },
    {
      id: "wpr", tytul: "WPR i instytucje rolne", opis: "Poznasz system płatności Wspólnej Polityki Rolnej, wymogi warunkowości i instytucje obsługujące rolnika.",
      lekcje: [
        { tytul: "Płatności bezpośrednie i ekoschematy", tresc: `<h4>Plan Strategiczny WPR 2023-2027</h4>
<p>WPR ma dwa filary: <b>I filar</b> (EFRG) finansuje płatności bezpośrednie i interwencje rynkowe, <b>II filar</b> (EFRROW) rozwój obszarów wiejskich. W Polsce oba realizuje <b>Plan Strategiczny dla WPR na lata 2023-2027</b>, a płatności obsługuje <b>ARiMR</b>.</p>
<h4>Płatności bezpośrednie (I filar)</h4>
<div class="tw"><table><tr><th>Płatność</th><th>Charakter</th></tr>
<tr><td>podstawowe wsparcie dochodów</td><td>do każdego kwalifikującego się hektara</td></tr>
<tr><td>płatność redystrybucyjna</td><td>do pierwszych hektarów (wspiera mniejsze gospodarstwa)</td></tr>
<tr><td>płatność dla młodych rolników</td><td>dla rolników do 40 lat rozpoczynających działalność</td></tr>
<tr><td>płatności związane z produkcją</td><td>do wybranych upraw (np. strączkowe, buraki, ziemniaki skrobiowe, chmiel) i zwierząt (krowy, młode bydło, owce, kozy)</td></tr>
<tr><td>ekoschematy</td><td>dobrowolne praktyki korzystne dla klimatu i środowiska</td></tr>
<tr><td>płatność dla małych gospodarstw</td><td>uproszczona, ryczałtowa</td></tr></table></div>
<h4>Ekoschematy (przykłady)</h4>
<ul>
<li><b>rolnictwo węglowe</b> i zarządzanie składnikami odżywczymi: międzyplony, uproszczone systemy uprawy, wymieszanie obornika z glebą w krótkim czasie, plan nawożenia, zróżnicowana struktura upraw, wapnowanie;</li>
<li><b>obszary z roślinami miododajnymi</b>;</li>
<li><b>integrowana produkcja roślin</b> (z certyfikatem);</li>
<li><b>biologiczna ochrona upraw</b>;</li>
<li><b>retencjonowanie wody</b> na trwałych użytkach zielonych;</li>
<li><b>dobrostan zwierząt</b> (np. większa powierzchnia, wypas).</li>
</ul>
<h4>Wniosek</h4>
<p>Wniosek o płatności składa się co roku elektronicznie (aplikacja <b>eWniosekPlus</b>) w terminie ogłaszanym przez ARiMR, zwykle od 15 marca. Zawiera deklarację działek rolnych z uprawami (na mapie), zwierząt i wybranych ekoschematów. Minimalne wymagania: działka rolna co najmniej 0,1 ha, łączna powierzchnia co najmniej 1 ha (z wyjątkami). Kontrole prowadzi się m.in. systemem monitorowania obszarów na podstawie zdjęć satelitarnych.</p>
<div class="tip">Ekoschematy są dobrowolne i dodatkowo płatne, a warunkowość jest obowiązkowa dla każdego, kto pobiera płatności.</div>` },
        { tytul: "Warunkowość i II filar", tresc: `<h4>Warunkowość</h4>
<p>Rolnik otrzymujący płatności musi przestrzegać:</p>
<ul>
<li><b>Wymogów podstawowych w zakresie zarządzania (SMR)</b>: przepisy UE o ochronie wód przed azotanami, ochronie ptaków i siedlisk, bezpieczeństwie żywności, identyfikacji i rejestracji zwierząt, stosowaniu środków ochrony roślin, dobrostanie zwierząt.</li>
<li><b>Norm dobrej kultury rolnej zgodnej z ochroną środowiska (GAEC)</b>, m.in.: utrzymanie trwałych użytków zielonych, ochrona torfowisk i mokradeł, zakaz wypalania ścierniska, <b>strefy buforowe</b> wzdłuż cieków wodnych, ograniczanie erozji, minimalna pokrywa gleby w okresach wrażliwych, <b>zmianowanie upraw</b>, ochrona elementów krajobrazu (zadrzewienia, oczka wodne), zakaz przekształcania cennych trwałych użytków zielonych.</li>
</ul>
<p>Naruszenia skutkują <b>zmniejszeniem płatności</b> (procentowo, zależnie od wagi, zasięgu i powtarzalności).</p>
<h4>II filar: przykładowe interwencje</h4>
<div class="tw"><table><tr><th>Interwencja</th><th>Cel</th></tr>
<tr><td>premia dla młodych rolników</td><td>rozpoczęcie prowadzenia gospodarstwa, wymagany biznesplan</td></tr>
<tr><td>inwestycje w gospodarstwach (modernizacja)</td><td>zakup maszyn, budynki, technologie</td></tr>
<tr><td>rolnictwo ekologiczne</td><td>płatności do powierzchni w konwersji lub po niej</td></tr>
<tr><td>działania rolno-środowiskowo-klimatyczne</td><td>ochrona siedlisk, gleb, wód, zasobów genetycznych</td></tr>
<tr><td>płatności ONW</td><td>obszary z ograniczeniami naturalnymi (górskie, niskie bonitacje)</td></tr>
<tr><td>współpraca, grupy producentów, LEADER</td><td>organizacja rynku, rozwój lokalny</td></tr></table></div>
<h4>Rolnictwo ekologiczne</h4>
<p>Zakaz syntetycznych nawozów i środków ochrony roślin oraz GMO. Gospodarstwo podlega kontroli <b>jednostki certyfikującej</b> co najmniej raz w roku. Okres konwersji: zwykle <b>2 lata</b> dla upraw jednorocznych i łąk, <b>3 lata</b> dla upraw wieloletnich (sady). Produkty oznacza się logo UE (euroliść) i numerem jednostki certyfikującej.</p>
<div class="tip">Strefy buforowe wzdłuż cieków i zakaz wypalania to przykłady norm GAEC, czyli elementu warunkowości.</div>` },
        { tytul: "Instytucje i obowiązki rolnika", tresc: `<h4>Instytucje</h4>
<div class="tw"><table><tr><th>Instytucja</th><th>Zadania</th></tr>
<tr><td>ARiMR (Agencja Restrukturyzacji i Modernizacji Rolnictwa)</td><td>płatności bezpośrednie i obszarowe, inwestycje PS WPR, rejestr zwierząt (IRZ), numer producenta (identyfikacyjny)</td></tr>
<tr><td>KOWR (Krajowy Ośrodek Wsparcia Rolnictwa)</td><td>gospodarowanie państwową ziemią rolną, mechanizmy rynkowe, promocja żywności</td></tr>
<tr><td>KRUS (Kasa Rolniczego Ubezpieczenia Społecznego)</td><td>ubezpieczenie społeczne rolników: emerytalno-rentowe, wypadkowe, chorobowe i macierzyńskie, prewencja wypadków</td></tr>
<tr><td>ODR (ośrodki doradztwa rolniczego)</td><td>doradztwo, szkolenia, pomoc we wnioskach i planach nawozowych</td></tr>
<tr><td>PIORiN</td><td>zdrowie roślin, nasiennictwo, kontrola obrotu i stosowania środków ochrony roślin</td></tr>
<tr><td>Inspekcja Weterynaryjna</td><td>zdrowie zwierząt, bezpieczeństwo produktów pochodzenia zwierzęcego</td></tr>
<tr><td>IJHARS</td><td>jakość handlowa artykułów rolno-spożywczych, nadzór nad rolnictwem ekologicznym</td></tr>
<tr><td>OSChR (stacje chemiczno-rolnicze)</td><td>analizy gleby, zalecenia nawozowe</td></tr>
<tr><td>izby rolnicze</td><td>samorząd rolniczy, reprezentacja interesów</td></tr></table></div>
<h4>Ubezpieczenia obowiązkowe</h4>
<ul>
<li><b>OC rolnika</b> z tytułu posiadania gospodarstwa rolnego;</li>
<li><b>ubezpieczenie budynków</b> wchodzących w skład gospodarstwa od ognia i innych zdarzeń losowych;</li>
<li>ubezpieczenie upraw od ryzyk (np. susza, grad, przymrozki) dla rolników pobierających płatności, w określonym zakresie, z dopłatą do składki z budżetu państwa;</li>
<li>OC posiadacza pojazdu mechanicznego (ciągniki).</li>
</ul>
<h4>Podatki</h4>
<ul>
<li><b>Podatek rolny</b>: od gruntów gospodarstwa w hektarach przeliczeniowych, równowartość <b>2,5 q żyta</b> (wg średniej ceny skupu ogłaszanej przez GUS lub obniżonej przez gminę) od 1 ha przeliczeniowego.</li>
<li><b>VAT</b>: rolnik ryczałtowy jest zwolniony z VAT i otrzymuje od nabywcy (czynnego podatnika) <b>zryczałtowany zwrot podatku 7%</b> (faktura VAT RR); może wybrać status czynnego podatnika VAT.</li>
<li>Działy specjalne produkcji rolnej (np. duże fermy drobiu, pieczarkarnie) mogą podlegać podatkowi dochodowemu.</li>
</ul>
<div class="tip">Podatek rolny liczy się od hektara przeliczeniowego jako równowartość 2,5 q żyta, a zwrot zryczałtowany VAT wynosi 7%.</div>` }
      ],
      pytania: [
        Q("Płatności bezpośrednie w Polsce obsługuje:", "ARiMR", "KRUS", "KOWR", "PIORiN", "Agencja Restrukturyzacji i Modernizacji Rolnictwa."),
        Q("Ekoschematy to:", "dobrowolne, dodatkowo płatne praktyki korzystne dla środowiska", "obowiązkowe normy GAEC", "rodzaj podatku rolnego", "kredyty preferencyjne", "Rolnik wybiera je we wniosku."),
        Q("Normy GAEC są częścią:", "warunkowości", "ekoschematów", "płatności redystrybucyjnej", "systemu KRUS", "Obowiązują każdego beneficjenta płatności."),
        Q("Okres konwersji dla upraw jednorocznych w rolnictwie ekologicznym trwa zwykle:", "2 lata", "6 miesięcy", "5 lat", "10 lat", "Uprawy wieloletnie 3 lata."),
        Q("Podatek rolny od 1 ha przeliczeniowego to równowartość:", "2,5 q żyta", "1 t pszenicy", "10 q kukurydzy", "5 q owsa", "Według ceny ogłaszanej przez GUS."),
        Q("Zryczałtowany zwrot podatku VAT dla rolnika ryczałtowego wynosi:", "7%", "23%", "5%", "8%", "Rozliczany fakturą VAT RR."),
        Q("Obowiązkowym ubezpieczeniem rolnika jest:", "OC rolnika z tytułu posiadania gospodarstwa", "ubezpieczenie od kradzieży telefonu", "ubezpieczenie na życie", "ubezpieczenie podróżne", "Także ubezpieczenie budynków."),
        Q("Ubezpieczenie społeczne rolników prowadzi:", "KRUS", "ZUS", "ARiMR", "ODR", "Kasa Rolniczego Ubezpieczenia Społecznego.")
      ]
    },
    {
      id: "organizacja-pracy", tytul: "Organizacja pracy i mechanizacji", opis: "Zaplanujesz prace polowe, obliczysz wydajność agregatów i zdecydujesz o zakupie maszyny lub usłudze.",
      lekcje: [
        { tytul: "Wydajność agregatów i czas prac", tresc: `<h4>Wydajność teoretyczna</h4>
<p><b>Wt (ha/h) = 0,1 × b (m) × v (km/h)</b></p>
<p>Agregat uprawowy 3 m, prędkość 8 km/h: Wt = 0,1 × 3 × 8 = <b>2,4 ha/h</b>.</p>
<h4>Wydajność eksploatacyjna</h4>
<p>Uwzględnia nawroty, napełnianie, postoje, wykorzystanie szerokości: <b>We = Wt × k</b>, gdzie k to współczynnik wykorzystania czasu (zwykle 0,6-0,8). Przy k = 0,7: 2,4 × 0,7 = <b>1,68 ha/h</b>.</p>
<h4>Czas wykonania pracy</h4>
<p>Pole 50 ha: 50 / 1,68 = <b>29,8 h</b>, czyli przy 8 h dziennie ok. <b>3,7 dnia</b> (4 dni robocze). Jeśli <b>okres agrotechniczny</b> (dopuszczalny czas na zabieg, np. siew pszenicy) wynosi 3 dni, potrzeba dłuższego dnia pracy, drugiego agregatu lub usługi.</p>
<h4>Zapotrzebowanie na pracę</h4>
<ul>
<li>Nakłady wyraża się w <b>roboczogodzinach (rbh)</b> i <b>ciągnikogodzinach (cnh)</b> na 1 ha lub 1 zwierzę.</li>
<li>Bilans pracy porównuje zapotrzebowanie w okresach (miesiącach) z zasobami pracy rodziny i pracowników; szczyty (wiosna, żniwa) wymagają planowania.</li>
<li>Jednostka <b>AWU</b> (roczna jednostka pracy) odpowiada pełnemu etatowi pracy w rolnictwie (w Polsce przyjmuje się 2120 h rocznie).</li>
</ul>
<h4>Przykład bilansu</h4>
<div class="tw"><table><tr><th>Uprawa</th><th>ha</th><th>rbh/ha w kwietniu</th><th>Razem</th></tr>
<tr><td>jęczmień jary</td><td>20</td><td>4</td><td>80 rbh</td></tr>
<tr><td>kukurydza</td><td>15</td><td>5</td><td>75 rbh</td></tr>
<tr><td>pszenica (nawożenie, oprysk)</td><td>25</td><td>2</td><td>50 rbh</td></tr>
<tr><td>razem</td><td></td><td></td><td>205 rbh</td></tr></table></div>
<p>Dwie osoby, 22 dni robocze po 8 h dają 352 rbh, więc zasoby pokrywają zapotrzebowanie (ale trzeba sprawdzić terminy agrotechniczne poszczególnych zabiegów).</p>
<div class="tip">Wzór 0,1 × b × v daje ha/h, bo 1 km × 1 m = 0,1 ha. Wydajność rzeczywista jest zawsze mniejsza od teoretycznej.</div>` },
        { tytul: "Koszty maszyn: zakup czy usługa", tresc: `<h4>Koszty eksploatacji maszyn</h4>
<div class="tw"><table><tr><th>Koszty stałe (roczne)</th><th>Koszty zmienne (na ha lub h)</th></tr>
<tr><td>amortyzacja, oprocentowanie kapitału, przechowywanie (garaż), ubezpieczenie, podatki</td><td>paliwo, smary, naprawy i części, praca operatora, zużycie ogumienia</td></tr></table></div>
<h4>Koszt jednostkowy pracy maszyny</h4>
<p><b>Kj = KS / roczne wykorzystanie + kz</b>. Im więcej hektarów maszyna obsłuży rocznie, tym niższy koszt na 1 ha.</p>
<h4>Przykład: siewnik</h4>
<ul>
<li>Siewnik za 100 000 zł, użytkowany 10 lat: amortyzacja 10 000 zł, oprocentowanie, ubezpieczenie i garaż 2 000 zł; KS = <b>12 000 zł/rok</b>.</li>
<li>Koszty zmienne (paliwo, naprawy, praca): <b>60 zł/ha</b>.</li>
<li>Cena usługi siewu: <b>180 zł/ha</b>.</li>
</ul>
<p><b>Próg opłacalności zakupu</b>: KS / (cena usługi - kz) = 12 000 / (180 - 60) = <b>100 ha</b> rocznie. Gospodarstwo siejące 60 ha: własny siew kosztuje 12 000 / 60 + 60 = 260 zł/ha, drożej niż usługa, więc opłaca się usługa (lub wspólny zakup z sąsiadami).</p>
<h4>Formy wspólnego użytkowania maszyn</h4>
<ul>
<li><b>usługi</b> zewnętrzne (firmy, sąsiedzi);</li>
<li><b>wspólne użytkowanie</b> (zespoły rolników, umowy sąsiedzkie);</li>
<li><b>spółdzielnie</b> i <b>kółka rolnicze</b>, grupy producentów;</li>
<li><b>leasing</b> i wynajem krótkoterminowy.</li>
</ul>
<h4>Dobór ciągnika do maszyn</h4>
<p>Moc dobiera się do najcięższej pracy (np. orki): pług 4-skibowy na glebach średnich wymaga ok. 100-130 KM. Za mały ciągnik pracuje przeciążony, za duży generuje zbędne koszty stałe i ugniata glebę.</p>
<h4>Rolnictwo precyzyjne</h4>
<p>Systemy GPS (automatyczne prowadzenie), mapy plonów i zasobności, zmienne dawkowanie nawozów i środków (ISOBUS) zmniejszają nakładanie przejazdów i zużycie środków, podnosząc efektywność.</p>
<div class="tip">Zakup maszyny opłaca się, gdy roczna powierzchnia pracy przekracza próg KS / (cena usługi - koszty zmienne).</div>` },
        { tytul: "Nadzór nad pracami i BHP w gospodarstwie", tresc: `<h4>Harmonogram prac</h4>
<ol>
<li>Lista zabiegów dla każdej uprawy (od uprawy pożniwnej po zbiór i sprzedaż) z terminami agrotechnicznymi.</li>
<li>Przypisanie maszyn, ludzi, materiałów (nasiona, nawozy, środki) i ich ilości.</li>
<li>Kalendarz prac z oznaczeniem okresów szczytowych i zastępstw.</li>
<li>Plan zakupu i dostaw środków produkcji z wyprzedzeniem (np. nawozy kupione zimą).</li>
</ol>
<h4>Nadzór i kontrola</h4>
<ul>
<li>Kontrola jakości zabiegów: głębokość orki, równomierność wschodów, obsada roślin, pokrycie cieczą (papierki wodoczułe), straty przy zbiorze.</li>
<li>Prowadzenie dokumentacji: ewidencja zabiegów ochrony roślin, plan nawożenia, rejestr zwierząt, książka leczenia zwierząt, ewidencja sprzedaży.</li>
<li>Ocena wyników po sezonie: plony, koszty, NB, wnioski na kolejny rok.</li>
</ul>
<h4>Zatrudnianie pracowników</h4>
<p>Pracowników sezonowych zatrudnia się na umowę o pracę, umowę zlecenia lub <b>umowę o pomocy przy zbiorach</b> (pomocnik rolnika, maks. 180 dni w roku; ubezpieczenie w KRUS opłaca rolnik). Pracodawca zapewnia szkolenie BHP, odzież ochronną i warunki pracy.</p>
<h4>BHP w gospodarstwie</h4>
<div class="tw"><table><tr><th>Zagrożenie</th><th>Zapobieganie</th></tr>
<tr><td>upadki (z drabin, schodów, przyczep)</td><td>poręcze, stabilne drabiny, porządek, oświetlenie</td></tr>
<tr><td>maszyny (wały, przekładnie)</td><td>osłony, wyłączanie przed obsługą, szkolenie operatorów</td></tr>
<tr><td>zwierzęta (pogryzienia, kopnięcia)</td><td>spokojne obchodzenie się, przegrody, unikanie samotnej pracy z bykiem</td></tr>
<tr><td>gazy (zbiorniki gnojowicy, silosy)</td><td>wentylacja, zakaz wchodzenia bez asekuracji, praca we dwoje</td></tr>
<tr><td>chemikalia</td><td>środki ochrony osobistej, magazyn środków, karty charakterystyki</td></tr>
<tr><td>pożar (siano, paliwa)</td><td>suche siano, kontrola temperatury stogów, gaśnice, zakaz palenia</td></tr></table></div>
<p>KRUS prowadzi prewencję wypadkową i wypłaca jednorazowe odszkodowanie z tytułu wypadku przy pracy rolniczej.</p>
<div class="tip">Do zbiornika gnojowicy nie wchodzi się bez asekuracji drugiej osoby: siarkowodór może zabić w kilka chwil.</div>` }
      ],
      pytania: [
        Q("Wydajność teoretyczna agregatu 3 m przy prędkości 8 km/h wynosi:", "2,4 ha/h", "24 ha/h", "0,24 ha/h", "11 ha/h", "0,1 × 3 × 8."),
        Q("Wydajność eksploatacyjna jest mniejsza od teoretycznej, ponieważ uwzględnia:", "nawroty, napełnianie i postoje", "tylko prędkość jazdy", "masę ciągnika", "cenę paliwa", "Współczynnik wykorzystania czasu 0,6-0,8."),
        Q("Ile godzin zajmie praca na 50 ha przy wydajności 1,68 ha/h?", "ok. 30 h", "ok. 84 h", "ok. 10 h", "ok. 3 h", "50 / 1,68 = 29,8."),
        Q("Próg opłacalności zakupu siewnika przy KS 12 000 zł, usłudze 180 zł/ha i kz 60 zł/ha wynosi:", "100 ha", "67 ha", "200 ha", "50 ha", "12 000 / 120."),
        Q("Do kosztów zmiennych eksploatacji maszyny zalicza się:", "paliwo i naprawy", "amortyzację", "ubezpieczenie", "garażowanie", "Zależą od intensywności użytkowania."),
        Q("Okres agrotechniczny to:", "dopuszczalny czas na wykonanie danego zabiegu", "czas trwania sezonu wegetacyjnego", "okres karencji środka", "wiek maszyny", "Np. optymalny termin siewu."),
        Q("Umowa o pomocy przy zbiorach pozwala zatrudnić pomocnika rolnika łącznie maksymalnie na:", "180 dni w roku", "30 dni w roku", "365 dni", "7 dni", "Ubezpieczenie w KRUS opłaca rolnik."),
        Q("Największym zagrożeniem przy wchodzeniu do zbiornika gnojowicy jest:", "zatrucie gazami (siarkowodór)", "porażenie prądem", "hałas", "przegrzanie", "Wchodzi się tylko z asekuracją.")
      ]
    },
    {
      id: "biznesplan-jakosc", tytul: "Biznesplan, rynek i jakość", opis: "Opracujesz biznesplan gospodarstwa, wybierzesz kanały sprzedaży i systemy jakości żywności.",
      lekcje: [
        { tytul: "Biznesplan gospodarstwa", tresc: `<h4>Struktura biznesplanu</h4>
<ol>
<li><b>Streszczenie</b>: cel przedsięwzięcia, kwota, oczekiwane efekty.</li>
<li><b>Opis gospodarstwa</b>: powierzchnia, struktura użytków i zasiewów, zwierzęta, budynki, maszyny, siła robocza, wykształcenie.</li>
<li><b>Analiza rynku</b>: odbiorcy, konkurencja, ceny, trendy.</li>
<li><b>Plan marketingowy</b>: produkt, cena, dystrybucja, promocja (4P).</li>
<li><b>Plan produkcji</b>: zmiany struktury, technologie, nakłady.</li>
<li><b>Plan inwestycyjny</b>: zakres, koszt, harmonogram, źródła finansowania.</li>
<li><b>Plan finansowy</b>: przychody, koszty, NB, dochód, przepływy pieniężne, wskaźniki (okres zwrotu, NPV).</li>
<li><b>Analiza ryzyka</b> i SWOT.</li>
</ol>
<h4>Analiza SWOT: przykład gospodarstwa mlecznego</h4>
<div class="tw"><table><tr><th>Mocne strony</th><th>Słabe strony</th></tr>
<tr><td>nowoczesna obora, wykształcony następca, własne pasze objętościowe</td><td>rozdrobnione działki, stary park maszyn, zadłużenie</td></tr>
<tr><th>Szanse</th><th>Zagrożenia</th></tr>
<tr><td>dotacje na modernizację, rosnący popyt na sery, bliskość mleczarni</td><td>wahania cen mleka, susze, choroby zwierząt, wzrost cen energii</td></tr></table></div>
<p>Strategia: wykorzystać mocne strony do szans (np. inwestycja w schładzalnik i robota udojowego z dotacją), ograniczyć słabe strony i zagrożenia (ubezpieczenia, umowa z mleczarnią).</p>
<h4>Cele SMART</h4>
<p>Cele biznesplanu powinny być <b>konkretne, mierzalne, osiągalne, istotne i określone w czasie</b>, np. „zwiększenie produkcji mleka z 400 000 do 550 000 l rocznie do końca 2027 r.”.</p>
<h4>Wymogi przy wnioskach o pomoc</h4>
<ul>
<li>Spójność liczb (powierzchnia, pogłowie, plony) z wnioskiem o płatności i rejestrem zwierząt.</li>
<li>Realne założenia cen i plonów (zwykle średnie z kilku lat).</li>
<li>Zachowanie <b>trwałości operacji</b> przez określony czas po płatności końcowej (zwykle 5 lat).</li>
</ul>
<div class="tip">W SWOT mocne i słabe strony to czynniki wewnętrzne gospodarstwa, a szanse i zagrożenia zewnętrzne (rynek, prawo, klimat).</div>` },
        { tytul: "Rynek i kanały sprzedaży", tresc: `<h4>Kanały dystrybucji</h4>
<div class="tw"><table><tr><th>Kanał</th><th>Cechy</th></tr>
<tr><td>skup, przetwórnia, mleczarnia, cukrownia</td><td>duże ilości, stabilny odbiór, niższa cena; często <b>umowy kontraktacyjne</b></td></tr>
<tr><td>grupa i organizacja producentów</td><td>wspólna sprzedaż większych partii, lepsza pozycja negocjacyjna, wsparcie z PS WPR</td></tr>
<tr><td>sprzedaż bezpośrednia</td><td>małe ilości produktów nieprzetworzonych konsumentowi lub lokalnemu sklepowi</td></tr>
<tr><td><b>RHD</b> (rolniczy handel detaliczny)</td><td>sprzedaż żywności przetworzonej z własnych surowców (np. sery, przetwory) konsumentowi końcowemu; przychód do <b>100 000 zł</b> rocznie zwolniony z podatku dochodowego, powyżej ryczałt 2%</td></tr>
<tr><td>MLO (działalność marginalna, lokalna, ograniczona)</td><td>sprzedaż produktów zwierzęcych do lokalnych sklepów i restauracji, nadzór weterynaryjny</td></tr>
<tr><td>e-commerce, paczki, kooperatywy</td><td>wyższa cena, większe koszty logistyki i marketingu</td></tr></table></div>
<h4>Umowa kontraktacyjna</h4>
<p>Umowa między producentem a odbiorcą zawierana przed rozpoczęciem produkcji: ilość, jakość, cena lub sposób jej ustalenia, termin dostawy, ewentualne świadczenia odbiorcy (nasiona, doradztwo). Zmniejsza ryzyko cenowe i rynkowe.</p>
<h4>Marketing mix 4P w gospodarstwie</h4>
<ul>
<li><b>Produkt</b>: jakość, odmiana, opakowanie, certyfikat (ekologiczny, regionalny).</li>
<li><b>Cena</b>: na podstawie kosztów, cen konkurencji i wartości dla klienta.</li>
<li><b>Dystrybucja</b>: kanały, logistyka, przechowalnictwo (sprzedaż poza sezonem po wyższej cenie).</li>
<li><b>Promocja</b>: targi, media społecznościowe, degustacje, marka gospodarstwa, szlaki kulinarne.</li>
</ul>
<h4>Ceny i informacja rynkowa</h4>
<p>Ceny rolne podlegają sezonowym wahaniom (zboże najtańsze w żniwa, droższe wiosną). Informacje rynkowe publikuje m.in. Zintegrowany System Rolniczej Informacji Rynkowej (ZSRIR) ministerstwa, giełdy towarowe (MATIF), GUS.</p>
<div class="tip">RHD dotyczy żywności przetworzonej z własnych surowców sprzedawanej konsumentom końcowym, a sprzedaż bezpośrednia produktów nieprzetworzonych to odrębna forma.</div>` },
        { tytul: "Systemy jakości i bezpieczeństwo żywności", tresc: `<h4>HACCP: 7 zasad</h4>
<ol>
<li>Analiza zagrożeń: <b>biologicznych</b> (bakterie, pleśnie), <b>chemicznych</b> (pozostałości środków, leków), <b>fizycznych</b> (szkło, metal, kamienie), a także alergenów.</li>
<li>Wyznaczenie <b>krytycznych punktów kontroli (CCP)</b>.</li>
<li>Ustalenie limitów krytycznych (np. temperatura schłodzenia mleka).</li>
<li>System monitorowania CCP.</li>
<li>Działania korygujące przy przekroczeniu limitu.</li>
<li>Procedury weryfikacji.</li>
<li>Dokumentacja i zapisy.</li>
</ol>
<p>Podstawą HACCP są <b>GHP</b> (dobra praktyka higieniczna) i <b>GMP</b> (dobra praktyka produkcyjna). W produkcji pierwotnej obowiązuje higiena i prowadzenie rejestrów, a pełny HACCP przy przetwórstwie (np. RHD).</p>
<h4>Identyfikowalność (traceability)</h4>
<p>Rozporządzenie (WE) nr 178/2002 wymaga, by każdy uczestnik łańcucha znał dostawcę i odbiorcę swojego produktu (zasada „jeden krok wstecz, jeden krok naprzód”). W gospodarstwie służą temu ewidencje zabiegów, rejestr zwierząt, dokumenty sprzedaży.</p>
<h4>Systemy jakości żywności</h4>
<div class="tw"><table><tr><th>System</th><th>Opis</th></tr>
<tr><td>rolnictwo ekologiczne</td><td>certyfikat jednostki certyfikującej, logo UE</td></tr>
<tr><td>Integrowana Produkcja Roślin (IP)</td><td>certyfikat PIORiN, racjonalne nawożenie i ochrona</td></tr>
<tr><td>ChNP i ChOG</td><td>chroniona nazwa pochodzenia i oznaczenie geograficzne (np. oscypek, rogal świętomarciński)</td></tr>
<tr><td>GTS</td><td>gwarantowana tradycyjna specjalność (tradycyjny skład lub metoda)</td></tr>
<tr><td>QAFP, PQS</td><td>krajowe systemy jakości mięsa i wędlin</td></tr>
<tr><td>GLOBALG.A.P.</td><td>międzynarodowy standard dobrej praktyki rolniczej, wymagany przez sieci handlowe</td></tr></table></div>
<h4>Jakość surowców</h4>
<p>Ziarno: wilgotność, gęstość w stanie zsypnym, liczba opadania, zawartość białka, zanieczyszczenia. Mleko: ogólna liczba drobnoustrojów do 100 000/ml, komórki somatyczne do 400 000/ml, brak inhibitorów (antybiotyków), schłodzenie do ok. 4-6 °C po doju.</p>
<div class="tip">Zagrożenia w HACCP dzielą się na biologiczne, chemiczne i fizyczne. CCP to punkt, w którym kontrola może wyeliminować lub ograniczyć zagrożenie.</div>` }
      ],
      pytania: [
        Q("W analizie SWOT szanse i zagrożenia to czynniki:", "zewnętrzne", "wewnętrzne", "wyłącznie finansowe", "techniczne gospodarstwa", "Mocne i słabe strony są wewnętrzne."),
        Q("Przychód z RHD zwolniony z podatku dochodowego wynosi do:", "100 000 zł rocznie", "10 000 zł", "1 000 000 zł", "nie ma zwolnienia", "Powyżej ryczałt 2%."),
        Q("Umowa kontraktacyjna jest zawierana:", "przed rozpoczęciem produkcji i ustala ilość, jakość oraz cenę", "po sprzedaży towaru", "tylko z konsumentem końcowym", "wyłącznie z ARiMR", "Ogranicza ryzyko rynkowe."),
        Q("Krytyczny punkt kontroli w systemie HACCP oznacza się skrótem:", "CCP", "GMP", "GHP", "IRZ", "Critical Control Point."),
        Q("Zasada „jeden krok wstecz, jeden krok naprzód” dotyczy:", "identyfikowalności żywności", "płodozmianu", "rozrodu zwierząt", "kalibracji opryskiwacza", "Rozporządzenie 178/2002."),
        Q("Oscypek jest przykładem produktu z oznaczeniem:", "ChNP (chroniona nazwa pochodzenia)", "GLOBALG.A.P.", "IP", "QAFP", "Produkt regionalny UE."),
        Q("Cele SMART powinny być m.in.:", "mierzalne i określone w czasie", "ogólne i bez terminu", "wyłącznie jakościowe", "tajne", "Specific, Measurable, Achievable, Relevant, Time-bound."),
        Q("Do zagrożeń fizycznych w HACCP należą:", "kawałki szkła, metalu, kamienie", "bakterie Salmonella", "pozostałości antybiotyków", "pleśnie", "Biologiczne i chemiczne to odrębne grupy.")
      ]
    }
  ]);

  pod("WSP", [
    {
      id: "bhp-zagrozenia", tytul: "BHP i czynniki zagrożeń", opis: "Rozpoznasz zagrożenia na stanowisku, dobierzesz środki ochrony i ocenisz ryzyko zawodowe.",
      lekcje: [
        { tytul: "Substancje chemiczne i oznakowanie CLP", tresc: `<h4>Piktogramy CLP (czerwony romb na białym tle)</h4>
<div class="tw"><table><tr><th>Piktogram</th><th>Znaczenie</th><th>Przykład</th></tr>
<tr><td>GHS01 wybuchająca bomba</td><td>materiały wybuchowe</td><td>fajerwerki, nadtlenki organiczne</td></tr>
<tr><td>GHS02 płomień</td><td>substancje łatwopalne</td><td>rozpuszczalniki, aerozole, benzyna</td></tr>
<tr><td>GHS03 płomień nad okręgiem</td><td>utleniacze</td><td>nadtlenek wodoru o wysokim stężeniu, saletra</td></tr>
<tr><td>GHS04 butla</td><td>gazy pod ciśnieniem</td><td>butle z gazem</td></tr>
<tr><td>GHS05 korozja</td><td>działanie żrące na skórę, oczy, metale</td><td>kwasy, zasady, odkamieniacze</td></tr>
<tr><td>GHS06 czaszka</td><td>toksyczność ostra</td><td>niektóre środki ochrony roślin, trutki</td></tr>
<tr><td>GHS07 wykrzyknik</td><td>działanie drażniące, szkodliwe, uczulające skórę</td><td>detergenty, farby do włosów</td></tr>
<tr><td>GHS08 zagrożenie dla zdrowia</td><td>rakotwórcze, mutagenne, uczulające drogi oddechowe</td><td>niektóre rozpuszczalniki, pyły</td></tr>
<tr><td>GHS09 środowisko</td><td>zagrożenie dla organizmów wodnych</td><td>pestycydy, oleje</td></tr></table></div>
<h4>Dokumenty i etykieta</h4>
<ul>
<li><b>Karta charakterystyki</b> (16 sekcji): identyfikacja, zagrożenia, skład, pierwsza pomoc, gaszenie, postępowanie przy uwolnieniu, magazynowanie, kontrola narażenia i ŚOI, właściwości, utylizacja, transport.</li>
<li>Etykieta: hasło ostrzegawcze („Niebezpieczeństwo” lub „Uwaga”), zwroty <b>H</b> (zagrożenia, np. H314 powoduje poważne oparzenia skóry) i <b>P</b> (środki ostrożności, np. P280 stosować rękawice ochronne).</li>
</ul>
<h4>Najwyższe dopuszczalne stężenia</h4>
<ul>
<li><b>NDS</b>: średnie stężenie w ciągu 8-godzinnego dnia pracy, które nie powinno spowodować zmian w zdrowiu pracownika i jego potomstwa.</li>
<li><b>NDSCh</b>: chwilowe, przez maksymalnie 15 minut, nie częściej niż 2 razy w zmianie, w odstępie min. 1 godziny.</li>
<li><b>NDSP</b>: pułapowe, którego nie wolno przekroczyć w żadnym momencie.</li>
<li><b>NDN</b>: najwyższe dopuszczalne natężenie czynników fizycznych (np. hałas, promieniowanie).</li>
</ul>
<div class="tip">Substancje przechowuje się w oryginalnych opakowaniach z etykietą; przelewanie chemii do butelek po napojach to częsta przyczyna zatruć.</div>` },
        { tytul: "Środki ochrony indywidualnej i zbiorowej", tresc: `<h4>Kolejność działań</h4>
<p>Najpierw eliminacja zagrożenia lub zastąpienie go mniejszym, potem środki techniczne i <b>ochrona zbiorowa</b> (osłony, wentylacja, barierki, wyciągi miejscowe), organizacja pracy (rotacja, skrócenie ekspozycji), a dopiero na końcu <b>środki ochrony indywidualnej</b> (ŚOI).</p>
<h4>ŚOI: dobór do zagrożenia</h4>
<div class="tw"><table><tr><th>Zagrożenie</th><th>Środek ochrony</th></tr>
<tr><td>spadające przedmioty, uderzenia głową</td><td>hełm (kask) ochronny</td></tr>
<tr><td>odpryski, pył, chemikalia w oczach</td><td>okulary lub gogle, osłona twarzy</td></tr>
<tr><td>hałas powyżej 85 dB</td><td>nauszniki, wkładki przeciwhałasowe</td></tr>
<tr><td>pyły, aerozole, opary</td><td>półmaski filtrujące (klasy FFP1, FFP2, FFP3), maski z pochłaniaczami</td></tr>
<tr><td>chemikalia, skaleczenia, wibracje</td><td>rękawice ochronne odpowiedniego typu (nitrylowe, antyprzecięciowe, antywibracyjne)</td></tr>
<tr><td>upadek z wysokości</td><td>szelki bezpieczeństwa z amortyzatorem, linką i punktem kotwiczenia</td></tr>
<tr><td>przebicie i zmiażdżenie stopy, śliska podłoga</td><td>obuwie ochronne z podnoskiem, podeszwa antypoślizgowa</td></tr>
<tr><td>prąd elektryczny</td><td>rękawice i obuwie dielektryczne, narzędzia izolowane</td></tr></table></div>
<h4>Wymagania wobec ŚOI</h4>
<ul>
<li>Oznakowanie <b>CE</b> i deklaracja zgodności; instrukcja użytkowania.</li>
<li>Pracodawca dostarcza je <b>nieodpłatnie</b>, dba o ich pranie, konserwację i wymianę; pracownik ma obowiązek je stosować.</li>
<li>Odzież i obuwie robocze: pracodawca może zgodzić się na używanie własnych, wypłacając ekwiwalent; nie dotyczy to ŚOI.</li>
<li>Półmaski FFP3 chronią przed najdrobniejszymi i toksycznymi pyłami (najwyższa skuteczność).</li>
</ul>
<h4>Ocena ryzyka: przykład</h4>
<p>Stanowisko fryzjera, zagrożenie: kontakt z preparatami chemicznymi. Ciężkość: średnia (zapalenie skóry), prawdopodobieństwo: prawdopodobne, ryzyko: <b>średnie</b>. Działania: rękawice nitrylowe, wentylacja, szkolenie, kremy ochronne. Ponowna ocena po zmianach, wypadku lub zmianie technologii.</p>
<div class="tip">Środki ochrony indywidualnej stosuje się dopiero wtedy, gdy zagrożenia nie da się wyeliminować ani ograniczyć środkami zbiorowymi.</div>` },
        { tytul: "Wypadek przy pracy: postępowanie krok po kroku", tresc: `<h4>Natychmiast po zdarzeniu</h4>
<ol>
<li>Zabezpieczenie miejsca (wyłączenie maszyny, odcięcie prądu), aby nie było kolejnych poszkodowanych.</li>
<li><b>Pierwsza pomoc</b> i wezwanie pomocy (112).</li>
<li>Zawiadomienie przełożonego (obowiązek pracownika i świadków).</li>
<li>Pracodawca zabezpiecza miejsce wypadku do czasu ustalenia okoliczności; zmiany dopuszcza się tylko, gdy jest to konieczne dla ratowania ludzi lub ruchu zakładu.</li>
</ol>
<h4>Postępowanie powypadkowe</h4>
<ul>
<li>Pracodawca powołuje <b>zespół powypadkowy</b> (pracownik służby BHP i społeczny inspektor pracy; w małych firmach pracodawca lub specjalista z zewnątrz i przedstawiciel pracowników).</li>
<li>Zespół ogląda miejsce, przesłuchuje poszkodowanego i świadków, zbiera dokumentację, ustala przyczyny i proponuje środki profilaktyczne.</li>
<li><b>Protokół powypadkowy</b> sporządza się nie później niż w ciągu <b>14 dni</b> od uzyskania zawiadomienia; poszkodowany może zgłosić zastrzeżenia.</li>
<li>Wypadek wpisuje się do <b>rejestru wypadków przy pracy</b>, a statystyczną kartę wypadku przesyła do GUS.</li>
<li>Wypadek śmiertelny, ciężki i zbiorowy zgłasza się niezwłocznie do <b>PIP</b> i <b>prokuratury</b>.</li>
</ul>
<h4>Rodzaje wypadków</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Definicja</th></tr>
<tr><td>ciężki</td><td>poważne uszkodzenie ciała, np. utrata wzroku, słuchu, kończyny, choroba zagrażająca życiu, trwała niezdolność do pracy</td></tr>
<tr><td>śmiertelny</td><td>śmierć w ciągu 6 miesięcy od wypadku</td></tr>
<tr><td>zbiorowy</td><td>co najmniej 2 osoby w tym samym zdarzeniu</td></tr>
<tr><td>w drodze do pracy lub z pracy</td><td>nie jest wypadkiem przy pracy, ma osobne ustalenie (karta wypadku w drodze)</td></tr></table></div>
<h4>Świadczenia</h4>
<p>Za czas niezdolności do pracy z powodu wypadku przy pracy przysługuje <b>zasiłek chorobowy w wysokości 100%</b> podstawy wymiaru. ZUS wypłaca jednorazowe odszkodowanie przy stałym lub długotrwałym uszczerbku na zdrowiu oraz rentę z tytułu niezdolności do pracy.</p>
<div class="tip">Wypadek w drodze do pracy nie jest wypadkiem przy pracy, choć jest dokumentowany. Wypadek zbiorowy to co najmniej dwie osoby.</div>` }
      ],
      pytania: [
        Q("Piktogram GHS05 (korozja) oznacza substancje:", "żrące", "łatwopalne", "wybuchowe", "niebezpieczne dla środowiska", "Np. kwasy i zasady."),
        Q("Zwroty P na etykiecie substancji chemicznej dotyczą:", "środków ostrożności", "rodzaju zagrożenia", "producenta", "ceny", "Zwroty H opisują zagrożenia."),
        Q("NDSCh to stężenie, które może występować nie dłużej niż:", "15 minut", "8 godzin", "1 godzinę bez przerwy", "nigdy", "Najwyżej 2 razy w zmianie."),
        Q("Środki ochrony indywidualnej stosuje się:", "gdy zagrożenia nie da się wyeliminować środkami zbiorowymi", "zawsze w pierwszej kolejności", "tylko na życzenie pracownika", "wyłącznie na budowie", "Pierwszeństwo ma ochrona zbiorowa."),
        Q("Najwyższą skuteczność ochrony przed pyłami ma półmaska klasy:", "FFP3", "FFP1", "FFP2", "FFP0", "FFP3 chroni przed najdrobniejszymi pyłami."),
        Q("Protokół powypadkowy sporządza się w ciągu:", "14 dni od zawiadomienia", "24 godzin", "3 miesięcy", "1 roku", "Sporządza go zespół powypadkowy."),
        Q("Wypadek śmiertelny zgłasza się niezwłocznie do:", "PIP i prokuratury", "urzędu skarbowego", "sanepidu i banku", "KRUS i GUS", "Także wypadek ciężki i zbiorowy."),
        Q("Zasiłek chorobowy po wypadku przy pracy wynosi:", "100% podstawy wymiaru", "50%", "80%", "nie przysługuje", "Przy zwykłej chorobie zwykle 80%.")
      ]
    },
    {
      id: "ppoz", tytul: "Ochrona przeciwpożarowa", opis: "Dobierzesz gaśnicę do grupy pożaru, ugasisz pożar w zarodku i przeprowadzisz ewakuację.",
      lekcje: [
        { tytul: "Spalanie i grupy pożarów", tresc: `<h4>Trójkąt spalania</h4>
<p>Do spalania potrzebne są jednocześnie: <b>materiał palny</b>, <b>utleniacz</b> (najczęściej tlen z powietrza) i <b>źródło ciepła</b> (temperatura zapłonu). Gaszenie polega na usunięciu jednego z elementów: odcięciu tlenu (koc, piana, CO2), ochłodzeniu (woda), usunięciu materiału palnego lub przerwaniu reakcji (proszek).</p>
<h4>Grupy pożarów (PN-EN 2)</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Co się pali</th><th>Czym gasić</th></tr>
<tr><td>A</td><td>ciała stałe pochodzenia organicznego, tlące się: drewno, papier, tkaniny, tworzywa</td><td>woda, piana, proszek ABC</td></tr>
<tr><td>B</td><td>ciecze i topiące się ciała stałe: benzyna, oleje, rozpuszczalniki, parafina</td><td>piana, proszek, CO2; <b>nie woda</b></td></tr>
<tr><td>C</td><td>gazy: propan-butan, metan, acetylen</td><td>proszek BC lub ABC, najpierw zamknąć dopływ gazu</td></tr>
<tr><td>D</td><td>metale: magnez, sód, potas, aluminium w pyle</td><td>specjalny proszek D, piasek; nigdy woda</td></tr>
<tr><td>F</td><td>oleje i tłuszcze spożywcze w urządzeniach kuchennych</td><td>gaśnica F, koc gaśniczy; nigdy woda</td></tr></table></div>
<h4>Dlaczego nie woda</h4>
<ul>
<li>Płonący olej lub tłuszcz zalany wodą powoduje gwałtowne odparowanie i <b>wyrzut płonącego oleju</b> (wybuch kuli ognia).</li>
<li>Ciecze lżejsze od wody pływają po niej, rozlewając pożar.</li>
<li>Metale reagują z wodą, wydzielając wodór.</li>
<li>Urządzenia pod napięciem: woda przewodzi prąd i grozi porażeniem.</li>
</ul>
<h4>Przyczyny pożarów w pracy</h4>
<p>Wadliwa instalacja elektryczna i przeciążone przedłużacze, palenie tytoniu w miejscach niedozwolonych, prace spawalnicze bez zabezpieczenia, samozapalenie (szmaty z olejem, mokre siano), nieostrożne obchodzenie się z ogniem, urządzenia grzewcze blisko materiałów palnych, wyładowania atmosferyczne.</p>
<div class="tip">Płonącego tłuszczu na patelni nie gasi się wodą. Przykrywa się go pokrywką lub kocem gaśniczym, po wyłączeniu źródła ciepła.</div>` },
        { tytul: "Gaśnice i gaszenie pożaru w zarodku", tresc: `<h4>Rodzaje gaśnic</h4>
<div class="tw"><table><tr><th>Gaśnica</th><th>Grupy</th><th>Uwagi</th></tr>
<tr><td>proszkowa ABC (np. GP-6x ABC)</td><td>A, B, C</td><td>najbardziej uniwersalna, także urządzenia elektryczne pod napięciem do 1000 V (z odległości min. 1 m); brudzi i niszczy elektronikę</td></tr>
<tr><td>proszkowa BC</td><td>B, C</td><td>ciecze i gazy</td></tr>
<tr><td>śniegowa CO2 (GS)</td><td>B, C</td><td>urządzenia elektryczne i elektronika (nie zostawia osadu); dysza bardzo zimna, nie trzymać gołą ręką; w małych pomieszczeniach ryzyko uduszenia</td></tr>
<tr><td>pianowa lub płynowa (GWP, GWG)</td><td>A, B (niektóre F)</td><td>nie do urządzeń pod napięciem, chyba że producent dopuszcza</td></tr>
<tr><td>gaśnica F</td><td>F (często też A)</td><td>kuchnie gastronomiczne</td></tr></table></div>
<p>Oznaczenie np. <b>GP-6x ABC</b>: gaśnica proszkowa, 6 kg środka, przenośna, do grup A, B, C.</p>
<h4>Obsługa gaśnicy</h4>
<ol>
<li>Ocena, czy pożar jest w zarodku i czy droga ucieczki jest wolna (stań plecami do wyjścia).</li>
<li>Wyrwanie zawleczki (zabezpieczenia), skierowanie węża lub dyszy.</li>
<li>Naciśnięcie dźwigni z odległości kilku metrów.</li>
<li>Strumień na <b>podstawę płomieni</b>, nie na płomienie; z kierunku nawiewu (wiatr w plecy).</li>
<li>Płonącą ciecz rozlaną gasi się <b>od krawędzi</b> w kierunku środka, płonącą ścianę od dołu do góry, kapiącą ciecz od góry do dołu.</li>
<li>Użycie kilku gaśnic naraz, a nie po kolei; po ugaszeniu pilnowanie pogorzeliska.</li>
</ol>
<h4>Wymagania ogólne</h4>
<ul>
<li>Odległość z dowolnego miejsca do najbliższej gaśnicy nie większa niż <b>30 m</b>.</li>
<li>Jedna jednostka masy środka gaśniczego (2 kg lub 3 dm³) na każde 100 m² strefy pożarowej (w większości budynków).</li>
<li>Gaśnice w miejscach widocznych, oznakowanych, łatwo dostępnych; przegląd co najmniej <b>raz w roku</b>.</li>
<li>Koc gaśniczy do gaszenia odzieży na człowieku i małych pożarów naczyń.</li>
</ul>
<div class="tip">Do urządzeń elektronicznych najlepsza jest gaśnica śniegowa CO2, bo nie zostawia osadu. Gaśnicę proszkową ABC można stosować prawie wszędzie.</div>` },
        { tytul: "Alarmowanie i ewakuacja", tresc: `<h4>Alarmowanie</h4>
<ul>
<li>Numer alarmowy <b>112</b>, straż pożarna <b>998</b>, pogotowie ratunkowe <b>999</b>, policja <b>997</b>.</li>
<li>Zgłoszenie: <b>gdzie</b> (dokładny adres, piętro, punkty orientacyjne), <b>co się pali</b>, czy są <b>zagrożeni ludzie</b>, swoje imię i nazwisko oraz numer telefonu. Nie rozłączać się pierwszym, odpowiadać na pytania dyspozytora.</li>
<li>Ostrzeżenie innych osób w budynku (okrzyk, ręczny ostrzegacz pożarowy, system alarmowy).</li>
</ul>
<h4>Ewakuacja</h4>
<ol>
<li>Przerwanie pracy, wyłączenie urządzeń (jeśli to bezpieczne), zamknięcie okien.</li>
<li>Opuszczenie budynku <b>drogami ewakuacyjnymi</b> (zielone znaki), bez używania wind.</li>
<li>W zadymieniu: ruch nisko przy podłodze, usta i nos zasłonięte wilgotną tkaniną; przed otwarciem drzwi sprawdzenie ich temperatury wierzchem dłoni.</li>
<li>Zamykanie drzwi za sobą (ograniczenie rozprzestrzeniania dymu), bez zamykania na klucz.</li>
<li>Zbiórka w miejscu zbiórki do sprawdzenia obecności; nie wracać do budynku.</li>
<li>Pomoc osobom z niepełnosprawnością, gościom, klientom.</li>
</ol>
<h4>Instrukcja bezpieczeństwa pożarowego</h4>
<p>Obiekty (np. zakłady, szkoły, sklepy) mają instrukcję bezpieczeństwa pożarowego z planami ewakuacji, a pracownicy uczestniczą w <b>praktycznym sprawdzeniu organizacji i warunków ewakuacji</b> (próbna ewakuacja) co najmniej raz na 2 lata, w niektórych obiektach częściej.</p>
<h4>Obowiązki pracownika</h4>
<ul>
<li>znajomość rozmieszczenia gaśnic, hydrantów, wyłączników prądu i dróg ewakuacyjnych;</li>
<li>niezastawianie dróg ewakuacyjnych, drzwi pożarowych i sprzętu gaśniczego;</li>
<li>przestrzeganie zakazu palenia i zasad przechowywania materiałów palnych;</li>
<li>zgłaszanie usterek instalacji elektrycznej.</li>
</ul>
<h4>Znaki</h4>
<p>Znaki ewakuacyjne są <b>zielone</b> (wyjście, kierunek drogi ewakuacyjnej), znaki ochrony przeciwpożarowej <b>czerwone</b> (gaśnica, hydrant, ręczny ostrzegacz, telefon alarmowy).</p>
<div class="tip">Podczas pożaru nie korzysta się z wind; w dymie porusza się nisko, bo przy podłodze jest najwięcej powietrza.</div>` }
      ],
      pytania: [
        Q("Pożar grupy B to pożar:", "cieczy i topiących się ciał stałych", "ciał stałych tlących się", "gazów", "metali", "Np. benzyna, oleje."),
        Q("Płonącego oleju na patelni nie gasi się wodą, ponieważ:", "następuje gwałtowny wyrzut płonącego oleju", "woda jest za droga", "olej przestaje się palić za wolno", "woda zamienia się w lód", "Woda gwałtownie paruje pod olejem."),
        Q("Do gaszenia urządzeń elektronicznych najlepiej nadaje się gaśnica:", "śniegowa CO2", "pianowa", "wodna", "z piaskiem", "Nie pozostawia osadu."),
        Q("Oznaczenie GP-6x ABC oznacza gaśnicę:", "proszkową, 6 kg środka, do grup A, B, C", "pianową 6 l", "śniegową 6 kg do grupy F", "wodną do pożarów metali", "GP = gaśnica proszkowa."),
        Q("Strumień środka gaśniczego kieruje się:", "na podstawę płomieni, z wiatrem w plecy", "w górną część płomieni pod wiatr", "w powietrze nad ogniem", "na ściany pomieszczenia", "Gasi się źródło spalania."),
        Q("Odległość do najbliższej gaśnicy nie powinna przekraczać:", "30 m", "100 m", "5 m", "300 m", "Wymóg przepisów ppoż."),
        Q("Numer alarmowy straży pożarnej to:", "998", "999", "997", "996", "Ogólny numer alarmowy 112."),
        Q("Podczas ewakuacji z zadymionego budynku należy:", "poruszać się nisko przy podłodze i nie korzystać z windy", "jechać windą", "otwierać wszystkie okna i drzwi", "zamykać drzwi na klucz", "Dym gromadzi się pod sufitem.")
      ]
    },
    {
      id: "pierwsza-pomoc", tytul: "Pierwsza pomoc w praktyce", opis: "Ocenisz stan poszkodowanego, wykonasz RKO z AED i udzielisz pomocy w urazach i nagłych stanach.",
      lekcje: [
        { tytul: "Ocena poszkodowanego i RKO", tresc: `<h4>Schemat postępowania</h4>
<ol>
<li><b>Bezpieczeństwo</b>: własne, poszkodowanego, świadków (prąd, ruch drogowy, gaz). Rękawiczki z apteczki.</li>
<li><b>Ocena przytomności</b>: głośne pytanie, potrząśnięcie za ramiona.</li>
<li>Wołanie o pomoc osób w pobliżu.</li>
<li><b>Udrożnienie dróg oddechowych</b>: odchylenie głowy i uniesienie żuchwy.</li>
<li><b>Ocena oddechu</b>: patrz, słuchaj, czuj, do <b>10 sekund</b>. Pojedyncze westchnienia (oddech agonalny) to nie jest prawidłowy oddech.</li>
<li>Brak oddechu: wezwanie pomocy <b>112</b> (lub zlecenie konkretnej osobie) i przyniesienie <b>AED</b>.</li>
<li><b>RKO</b>: 30 uciśnięć klatki piersiowej i 2 oddechy ratownicze.</li>
</ol>
<h4>Parametry RKO u dorosłych</h4>
<div class="tw"><table><tr><th>Parametr</th><th>Wartość</th></tr>
<tr><td>miejsce</td><td>środek klatki piersiowej (dolna połowa mostka)</td></tr>
<tr><td>głębokość</td><td>5-6 cm</td></tr>
<tr><td>tempo</td><td>100-120 uciśnięć na minutę</td></tr>
<tr><td>stosunek</td><td>30 : 2</td></tr>
<tr><td>oddech ratowniczy</td><td>ok. 1 s, do uniesienia klatki piersiowej</td></tr></table></div>
<p>Po każdym uciśnięciu klatka musi się w pełni unieść; przerwy w uciśnięciach jak najkrótsze. Jeżeli ratownik nie chce lub nie może wykonywać oddechów, prowadzi same uciśnięcia. RKO kontynuuje się do przyjazdu służb, powrotu oddechu lub wyczerpania sił ratownika.</p>
<h4>AED (automatyczny defibrylator zewnętrzny)</h4>
<ul>
<li>Włączyć i postępować według poleceń głosowych.</li>
<li>Naklejenie elektrod na odsłoniętą, suchą klatkę: pod prawym obojczykiem i na lewym boku pod pachą.</li>
<li>Podczas analizy i wyładowania nikt nie dotyka poszkodowanego; po wyładowaniu natychmiast wznowić RKO.</li>
</ul>
<h4>Pozycja bezpieczna</h4>
<p>Poszkodowanego nieprzytomnego, ale oddychającego, układa się w <b>pozycji bocznej ustalonej</b> i co ok. minutę sprawdza oddech. Nie stosuje się jej przy podejrzeniu urazu kręgosłupa, jeśli drogi oddechowe są drożne.</p>
<div class="tip">Ocena oddechu trwa do 10 sekund. Brak prawidłowego oddechu = rozpoczęcie RKO 30:2 i jak najszybsze użycie AED.</div>` },
        { tytul: "Krwotoki, rany, złamania i oparzenia", tresc: `<h4>Krwotoki</h4>
<ul>
<li><b>Bezpośredni ucisk</b> rany jałowym opatrunkiem i założenie <b>opatrunku uciskowego</b>; przesiąknięty opatrunek nie jest zdejmowany, dokłada się kolejny.</li>
<li>Przy krwotoku z kończyny, którego nie da się zatamować uciskiem (np. amputacja), stosuje się <b>opaskę uciskową (stazę)</b> powyżej rany i zapisuje godzinę założenia.</li>
<li>Ciało obce w ranie: nie usuwa się go, stabilizuje opatrunkiem wokół.</li>
<li>Krwawienie z nosa: głowa lekko pochylona do przodu, ucisk skrzydełek nosa przez ok. 10 minut, zimny okład na kark.</li>
</ul>
<h4>Złamania i zwichnięcia</h4>
<ul>
<li>Unieruchomienie w zastanej pozycji: przy złamaniu kości dwa sąsiednie stawy, przy urazie stawu dwie sąsiednie kości.</li>
<li>Nie nastawia się złamań ani zwichnięć; złamanie otwarte najpierw przykrywa się jałowym opatrunkiem.</li>
<li>Podejrzenie urazu kręgosłupa (upadek z wysokości, wypadek): nie przemieszczać, stabilizować głowę, chyba że grozi niebezpieczeństwo lub trzeba prowadzić RKO.</li>
</ul>
<h4>Oparzenia</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Postępowanie</th></tr>
<tr><td>termiczne</td><td>chłodzenie chłodną bieżącą wodą przez ok. <b>20 minut</b> (min. 10), zdjęcie biżuterii przed obrzękiem, jałowy opatrunek; nie przebija się pęcherzy, nie smaruje tłuszczem</td></tr>
<tr><td>chemiczne</td><td>usunięcie skażonej odzieży, długie płukanie wodą (ok. 15-20 min i dłużej), przy proszkach najpierw strzepnąć; nie neutralizuje się kwasem ani zasadą</td></tr>
<tr><td>oczu chemikaliami</td><td>płukanie od wewnętrznego do zewnętrznego kącika, z oka zdrowego nie spływa do chorego</td></tr>
<tr><td>elektryczne</td><td>odłączenie prądu, ocena oddechu, opatrunek na rany wejścia i wyjścia, zawsze lekarz</td></tr></table></div>
<h4>Porażenie prądem</h4>
<p>Najpierw <b>odłączenie zasilania</b> (wyłącznik, bezpieczniki). Przy niskim napięciu, gdy nie da się wyłączyć, odsunięcie poszkodowanego przedmiotem nieprzewodzącym (suche drewno), stojąc na izolującym podłożu. Przy wysokim napięciu nie zbliża się, wzywa służby. Następnie ocena oddechu, RKO w razie potrzeby.</p>
<div class="tip">Oparzenie chłodzi się wodą około 20 minut. Nie stosuje się lodu, masła, mąki ani kremów.</div>` },
        { tytul: "Nagłe stany i apteczka", tresc: `<h4>Zadławienie</h4>
<ol>
<li>Kaszel skuteczny: zachęcanie do kaszlu.</li>
<li>Kaszel nieskuteczny u przytomnego dorosłego: do <b>5 uderzeń</b> między łopatki przy pochylonym do przodu tułowiu.</li>
<li>Bez efektu: do <b>5 uciśnięć nadbrzusza</b> (rękoczyn Heimlicha), naprzemiennie z uderzeniami w plecy.</li>
<li>Utrata przytomności: wezwanie 112 i RKO.</li>
</ol>
<h4>Inne stany</h4>
<div class="tw"><table><tr><th>Stan</th><th>Objawy</th><th>Pomoc</th></tr>
<tr><td>zawał serca</td><td>ucisk lub piekący ból za mostkiem promieniujący do ramienia, żuchwy, duszność, poty</td><td>pozycja półsiedząca, spokój, 112; aspiryna do rozgryzienia, jeśli brak przeciwwskazań</td></tr>
<tr><td>udar mózgu</td><td>opadnięcie kącika ust, osłabienie ręki, zaburzenia mowy (test UDAR lub FAST)</td><td>natychmiast 112, zapamiętanie godziny wystąpienia objawów</td></tr>
<tr><td>hipoglikemia (cukrzyca)</td><td>pot, drżenie, rozdrażnienie, zaburzenia świadomości</td><td>przytomnemu podać słodki napój lub cukier; nieprzytomnemu nic doustnie</td></tr>
<tr><td>napad drgawek (padaczka)</td><td>utrata przytomności, drgawki</td><td>chronić głowę, usunąć przedmioty, nie wkładać nic do ust, nie przytrzymywać; po napadzie pozycja boczna</td></tr>
<tr><td>omdlenie</td><td>krótka utrata przytomności</td><td>ułożenie na plecach, uniesienie nóg (gdy przytomny), świeże powietrze</td></tr>
<tr><td>wstrząs anafilaktyczny</td><td>obrzęk, duszność, wysypka po alergenie</td><td>112, pomoc w użyciu autostrzykawki z adrenaliną</td></tr></table></div>
<h4>Apteczka w miejscu pracy</h4>
<p>Zawiera m.in.: rękawiczki jednorazowe, maseczkę lub ustnik do oddechów, jałowe gaziki i kompresy, bandaże, opatrunki indywidualne, chustę trójkątną, plastry, nożyczki, folię NRC (termoizolacyjną), instrukcję udzielania pierwszej pomocy. Nie zawiera leków (poza wyjątkami wskazanymi przez lekarza). Apteczkę oznacza się zielonym znakiem z białym krzyżem, a pracodawca wyznacza osoby do udzielania pierwszej pomocy.</p>
<h4>Folia NRC</h4>
<p>Strona srebrna do ciała chroni przed wychłodzeniem (odbija ciepło ciała), strona złota do ciała chroni przed przegrzaniem.</p>
<div class="tip">W zadławieniu u dorosłego: 5 uderzeń w plecy i 5 uciśnięć nadbrzusza na zmianę. Przy padaczce nie wkłada się niczego do ust.</div>` }
      ],
      pytania: [
        Q("Ocena oddechu u nieprzytomnego trwa nie dłużej niż:", "10 sekund", "1 minutę", "30 sekund", "3 sekundy", "Patrz, słuchaj, czuj."),
        Q("Stosunek uciśnięć do oddechów w RKO dorosłego wynosi:", "30 : 2", "15 : 2", "5 : 1", "30 : 5", "Zgodnie z wytycznymi ERC."),
        Q("Głębokość uciśnięć klatki piersiowej u dorosłego to:", "5-6 cm", "1-2 cm", "8-10 cm", "3 cm", "Tempo 100-120 na minutę."),
        Q("Oparzenie termiczne chłodzi się chłodną wodą przez około:", "20 minut", "1 minutę", "2 godziny", "nie chłodzi się", "Co najmniej 10 minut."),
        Q("Opaskę uciskową (stazę) stosuje się:", "przy krwotoku z kończyny, którego nie da się zatamować uciskiem", "przy każdym skaleczeniu", "przy krwawieniu z nosa", "przy oparzeniu", "Zapisuje się godzinę założenia."),
        Q("Pierwszą czynnością przy porażeniu prądem jest:", "odłączenie zasilania", "rozpoczęcie RKO bez względu na prąd", "polanie poszkodowanego wodą", "podanie wody do picia", "Najpierw bezpieczeństwo ratownika."),
        Q("U dorosłego z niedrożnością dróg oddechowych i nieskutecznym kaszlem wykonuje się najpierw:", "5 uderzeń między łopatki", "30 uciśnięć klatki", "pozycję boczną", "podanie wody", "Potem 5 uciśnięć nadbrzusza."),
        Q("Podczas napadu drgawek należy:", "chronić głowę i nie wkładać niczego do ust", "przytrzymywać kończyny siłą", "włożyć łyżkę między zęby", "polewać zimną wodą", "Po napadzie pozycja boczna.")
      ]
    },
    {
      id: "prawo-pracy", tytul: "Prawo pracy w praktyce", opis: "Obliczysz urlop, okres wypowiedzenia i wynagrodzenie za nadgodziny oraz poznasz prawa młodocianych.",
      lekcje: [
        { tytul: "Urlop i staż pracy: obliczenia", tresc: `<h4>Wymiar urlopu</h4>
<ul>
<li><b>20 dni</b> przy stażu poniżej 10 lat, <b>26 dni</b> przy stażu co najmniej 10 lat.</li>
<li>Do stażu wlicza się okresy nauki (nie sumują się, liczy się korzystniejszy): szkoła branżowa I stopnia (zasadnicza) do 3 lat, technikum 5 lat, liceum ogólnokształcące 4 lata, szkoła policealna 6 lat, studia wyższe 8 lat.</li>
<li>Jeśli pracownik pracował w czasie nauki, wlicza się albo okres nauki, albo okres pracy, w zależności od tego, co korzystniejsze.</li>
</ul>
<h4>Przykład</h4>
<p>Absolwent technikum (5 lat) przepracował 5 lat: staż 5 + 5 = 10 lat, więc przysługuje mu <b>26 dni</b> urlopu. Absolwent liceum (4 lata) z 5 latami pracy: 9 lat, czyli 20 dni.</p>
<h4>Pierwsza praca</h4>
<p>W roku podjęcia pierwszej pracy urlop nabywa się z upływem każdego miesiąca pracy w wymiarze <b>1/12</b> wymiaru rocznego (20 dni / 12 = 1,67 dnia za miesiąc). Kolejny urlop przysługuje w każdym następnym roku kalendarzowym w całości od 1 stycznia.</p>
<h4>Zasady udzielania</h4>
<ul>
<li>Urlop udziela się wg planu urlopów lub po porozumieniu; co najmniej jedna część musi trwać <b>14 kolejnych dni kalendarzowych</b>.</li>
<li>Urlop zaległy wykorzystuje się do <b>30 września</b> następnego roku.</li>
<li><b>Urlop na żądanie</b>: 4 dni w roku (w ramach wymiaru), zgłoszony najpóźniej w dniu rozpoczęcia.</li>
<li>Niewykorzystany urlop zamienia się na ekwiwalent pieniężny tylko przy rozwiązaniu lub wygaśnięciu stosunku pracy.</li>
<li>Urlop dla pracownika na część etatu proporcjonalnie, np. 1/2 etatu i 26 dni: 13 dni.</li>
</ul>
<h4>Inne zwolnienia od pracy</h4>
<p>Opieka nad dzieckiem do 14 lat: 2 dni lub 16 godzin w roku (płatne); <b>urlop opiekuńczy</b> 5 dni w roku (bezpłatny); zwolnienie z powodu siły wyższej 2 dni lub 16 godzin (50% wynagrodzenia); urlop okolicznościowy: 2 dni (ślub pracownika, narodziny dziecka, zgon małżonka, dziecka, rodzica), 1 dzień (ślub dziecka, zgon rodzeństwa, dziadków, teściów).</p>
<div class="tip">Okresy nauki się nie sumują: absolwent technikum, który ukończył też studia, ma wliczone 8 lat (studia), a nie 5 + 8.</div>` },
        { tytul: "Wynagrodzenie, nadgodziny i czas pracy", tresc: `<h4>Czas pracy</h4>
<ul>
<li>Norma: <b>8 h na dobę</b> i przeciętnie <b>40 h w tygodniu</b> w przyjętym okresie rozliczeniowym.</li>
<li>Pora nocna: 8 godzin między 21:00 a 7:00 (ustala pracodawca); dodatek nocny 20% stawki wynikającej z minimalnego wynagrodzenia za każdą godzinę.</li>
<li>Limit nadgodzin: <b>150 h w roku</b> kalendarzowym (chyba że układ lub regulamin przewiduje inaczej, maks. przeciętnie 48 h tygodniowo łącznie).</li>
<li>Przerwa 15 min wliczana do czasu pracy przy dobowym wymiarze co najmniej 6 h.</li>
</ul>
<h4>Dodatki za nadgodziny</h4>
<div class="tw"><table><tr><th>Kiedy</th><th>Dodatek</th></tr>
<tr><td>w nocy, w niedziele i święta niebędące dla pracownika dniami pracy, w dniu wolnym udzielonym za pracę w niedzielę lub święto</td><td>100%</td></tr>
<tr><td>za przekroczenie przeciętnej normy tygodniowej (chyba że przypada na dzień z dodatkiem 100%)</td><td>100%</td></tr>
<tr><td>w pozostałe dni</td><td>50%</td></tr></table></div>
<p>Zamiast dodatku pracodawca może udzielić czasu wolnego: na wniosek pracownika w wymiarze 1 : 1, bez wniosku w wymiarze 1,5 h za 1 h nadliczbową.</p>
<h4>Przykład obliczenia</h4>
<p>Stawka 30 zł/h. Pracownik przepracował 4 nadgodziny w środę po zmianie dziennej (50%) i 2 nadgodziny w nocy (100%).</p>
<ul>
<li>środa: 4 × (30 + 15) = <b>180 zł</b>;</li>
<li>noc: 2 × (30 + 30) = <b>120 zł</b> (plus dodatek nocny);</li>
<li>razem za nadgodziny: <b>300 zł</b> brutto.</li>
</ul>
<h4>Wynagrodzenie</h4>
<ul>
<li>Nie może być niższe niż <b>minimalne wynagrodzenie</b> ustalane co roku przez Radę Ministrów (przy pełnym etacie).</li>
<li>Wypłaca się je co najmniej raz w miesiącu, w stałym terminie, najpóźniej do <b>10. dnia</b> następnego miesiąca.</li>
<li>Brutto obejmuje składki pracownika i zaliczkę na podatek; netto to kwota „na rękę”. Pracodawca dodatkowo płaci własne składki.</li>
<li>Formy: czasowa (stawka godzinowa, miesięczna), akordowa (za wykonaną ilość), prowizyjna, premiowa.</li>
</ul>
<div class="tip">Nadgodzina w zwykły dzień roboczy to dodatek 50%, a w nocy lub w niedzielę wolną od pracy 100%.</div>` },
        { tytul: "Rozwiązanie umowy i młodociani", tresc: `<h4>Sposoby rozwiązania umowy o pracę</h4>
<div class="tw"><table><tr><th>Sposób</th><th>Opis</th></tr>
<tr><td>za porozumieniem stron</td><td>w dowolnym terminie uzgodnionym przez strony</td></tr>
<tr><td>za wypowiedzeniem</td><td>z zachowaniem okresu wypowiedzenia; pracodawca przy umowie na czas nieokreślony i określony musi podać przyczynę</td></tr>
<tr><td>bez wypowiedzenia z winy pracownika (dyscyplinarne)</td><td>ciężkie naruszenie obowiązków (np. praca pod wpływem alkoholu), przestępstwo; w ciągu 1 miesiąca od uzyskania wiadomości</td></tr>
<tr><td>bez wypowiedzenia z winy pracodawcy</td><td>np. ciężkie naruszenie obowiązków wobec pracownika (niewypłacanie wynagrodzenia)</td></tr>
<tr><td>bez winy (np. długotrwała choroba)</td><td>po wyczerpaniu okresów ochronnych</td></tr>
<tr><td>wygaśnięcie</td><td>śmierć pracownika lub pracodawcy, upływ terminu umowy</td></tr></table></div>
<h4>Okresy wypowiedzenia (umowa na czas określony i nieokreślony)</h4>
<p>2 tygodnie (staż u pracodawcy poniżej 6 miesięcy), 1 miesiąc (co najmniej 6 miesięcy), 3 miesiące (co najmniej 3 lata). Okres liczony w tygodniach kończy się w <b>sobotę</b>, a w miesiącach <b>ostatniego dnia miesiąca</b>.</p>
<h4>Ochrona szczególna</h4>
<p>Nie wolno wypowiedzieć umowy m.in.: pracownicy w ciąży, w czasie urlopu macierzyńskiego i rodzicielskiego, pracownikowi w wieku przedemerytalnym (4 lata przed wiekiem emerytalnym), w czasie usprawiedliwionej nieobecności (urlop, choroba). Odwołanie od wypowiedzenia do sądu pracy: <b>21 dni</b>.</p>
<h4>Świadectwo pracy</h4>
<p>Pracodawca wydaje je w dniu ustania stosunku pracy (a gdy to niemożliwe, w ciągu 7 dni); zawiera okres zatrudnienia, wymiar etatu, wykorzystany urlop, sposób rozwiązania umowy.</p>
<h4>Młodociani</h4>
<ul>
<li>Młodociany to osoba, która ukończyła <b>15 lat</b>, a nie przekroczyła <b>18 lat</b>; zatrudnia się go w celu przygotowania zawodowego lub przy pracach lekkich.</li>
<li>Czas pracy: do 16 lat <b>6 h</b> na dobę, powyżej 16 lat <b>8 h</b>; czas nauki wlicza się do czasu pracy.</li>
<li>Zakaz pracy w godzinach nadliczbowych i w porze nocnej, przy pracach wzbronionych (wykaz w rozporządzeniu).</li>
<li>Urlop: po 6 miesiącach pierwszej pracy <b>12 dni</b>, po roku <b>26 dni</b> (w roku ukończenia 18 lat 20 dni).</li>
<li>Obowiązkowe badania lekarskie przed przyjęciem i okresowe.</li>
</ul>
<div class="tip">Okres wypowiedzenia liczony w miesiącach kończy się ostatniego dnia miesiąca, a w tygodniach w sobotę. Odwołanie do sądu pracy: 21 dni.</div>` }
      ],
      pytania: [
        Q("Absolwent technikum z 5-letnim stażem pracy ma prawo do urlopu w wymiarze:", "26 dni", "20 dni", "21 dni", "30 dni", "5 lat nauki + 5 lat pracy = 10 lat."),
        Q("Jedna część urlopu wypoczynkowego musi trwać co najmniej:", "14 kolejnych dni kalendarzowych", "5 dni roboczych", "3 dni", "21 dni", "Pozostałe części dowolnie."),
        Q("Urlop zaległy należy wykorzystać do:", "30 września następnego roku", "31 grudnia bieżącego roku", "31 marca następnego roku", "końca umowy", "Zgodnie z Kodeksem pracy."),
        Q("Urlop na żądanie przysługuje w wymiarze:", "4 dni w roku", "2 dni w roku", "10 dni w roku", "nie przysługuje", "W ramach wymiaru urlopu."),
        Q("Pracownik ze stawką 30 zł/h przepracował 4 nadgodziny w zwykły dzień roboczy. Należy mu się:", "180 zł", "120 zł", "240 zł", "60 zł", "4 × (30 + 50% × 30)."),
        Q("Roczny limit godzin nadliczbowych (bez innych ustaleń) wynosi:", "150 godzin", "50 godzin", "300 godzin", "416 godzin", "Kodeks pracy."),
        Q("Młodociany w wieku do 16 lat może pracować na dobę maksymalnie:", "6 godzin", "8 godzin", "4 godziny", "10 godzin", "Powyżej 16 lat 8 godzin."),
        Q("Odwołanie od wypowiedzenia umowy o pracę wnosi się do sądu pracy w terminie:", "21 dni", "7 dni", "14 dni", "3 miesięcy", "Od doręczenia wypowiedzenia.")
      ]
    },
    {
      id: "firma", tytul: "Własna firma krok po kroku", opis: "Założysz działalność, wybierzesz formę opodatkowania, rozliczysz składki i wystawisz dokumenty sprzedaży.",
      lekcje: [
        { tytul: "Rejestracja i pierwsze decyzje", tresc: `<h4>Działalność nierejestrowana</h4>
<p>Osoba fizyczna może prowadzić drobną działalność bez rejestracji, jeśli przychód w żadnym kwartale nie przekracza <b>225% minimalnego wynagrodzenia</b> i nie prowadziła działalności w ostatnich 60 miesiącach. Przychód rozlicza się w zeznaniu PIT jako przychód z innych źródeł; nie płaci się składek ZUS z tego tytułu.</p>
<h4>Rejestracja w CEIDG</h4>
<ol>
<li>Wniosek CEIDG-1 (online, bezpłatnie): dane osobowe, nazwa firmy (musi zawierać imię i nazwisko), adres, data rozpoczęcia, kody <b>PKD</b>.</li>
<li>W tym samym wniosku: wybór formy opodatkowania, zgłoszenie do ZUS (lub KRUS), nadanie REGON; NIP przedsiębiorca zwykle już ma.</li>
<li>Zgłoszenie do VAT (VAT-R) w urzędzie skarbowym, jeśli firma nie korzysta ze zwolnienia lub sprzedaje usługi objęte obowiązkiem VAT.</li>
<li>Otwarcie rachunku firmowego (wymagany do rozliczeń z innymi firmami przy płatnościach powyżej 15 000 zł i dla mechanizmu podzielonej płatności).</li>
<li>Wymagane zezwolenia lub koncesje w niektórych branżach (np. sprzedaż alkoholu), zgłoszenia do Sanepidu (gastronomia, usługi kosmetyczne), uzgodnienia z PIP i ppoż.</li>
</ol>
<h4>Zwolnienie z VAT</h4>
<p>Zwolnienie podmiotowe przysługuje, gdy sprzedaż w roku nie przekracza limitu (od 2026 r. <b>240 000 zł</b>, wcześniej 200 000 zł). Nie mogą z niego korzystać m.in. firmy świadczące usługi prawnicze, doradcze, jubilerskie, sprzedające niektóre towary (np. paliwa, wyroby akcyzowe).</p>
<h4>Kasa fiskalna</h4>
<p>Sprzedaż osobom fizycznym nieprowadzącym działalności rejestruje się na kasie fiskalnej (online) po przekroczeniu limitu obrotów (20 000 zł rocznie); niektóre usługi (np. fryzjerskie, kosmetyczne, naprawy pojazdów, gastronomia) wymagają kasy od pierwszej sprzedaży.</p>
<div class="tip">Usługi fryzjerskie i kosmetyczne wymagają kasy fiskalnej od pierwszej transakcji, bez względu na wysokość obrotów.</div>` },
        { tytul: "Podatki i składki ZUS", tresc: `<h4>Formy opodatkowania PIT</h4>
<div class="tw"><table><tr><th>Forma</th><th>Zasady</th><th>Dla kogo</th></tr>
<tr><td>skala podatkowa</td><td>12% do 120 000 zł dochodu, 32% nadwyżki; kwota wolna 30 000 zł; możliwość ulg i wspólnego rozliczenia z małżonkiem</td><td>mniejsze dochody</td></tr>
<tr><td>podatek liniowy</td><td>19% od dochodu, bez kwoty wolnej i większości ulg</td><td>wysokie dochody</td></tr>
<tr><td>ryczałt od przychodów ewidencjonowanych</td><td>% od przychodu, bez odliczania kosztów; stawki zależne od rodzaju działalności (np. 3% handel, 5,5% budowlanka i produkcja, 8,5% wiele usług, 15%, 17%)</td><td>niskie koszty prowadzenia działalności</td></tr></table></div>
<p><b>Dochód = przychód - koszty uzyskania przychodu.</b> Przykład na skali: przychód 150 000 zł, koszty 60 000 zł, dochód 90 000 zł; podatek ok. 90 000 × 12% - 3600 zł (kwota zmniejszająca) = <b>7 200 zł</b> (przed odliczeniem składek).</p>
<h4>Ewidencje</h4>
<ul>
<li><b>KPiR</b> (podatkowa księga przychodów i rozchodów): skala i liniowy;</li>
<li><b>ewidencja przychodów</b>: ryczałt;</li>
<li><b>pełna księgowość</b>: spółki kapitałowe i firmy z przychodami powyżej limitu;</li>
<li>ewidencja środków trwałych, rejestry VAT (JPK_V7).</li>
</ul>
<h4>Składki ZUS przedsiębiorcy</h4>
<div class="tw"><table><tr><th>Etap</th><th>Składki społeczne</th></tr>
<tr><td>„ulga na start”, pierwsze 6 miesięcy</td><td>brak składek społecznych, płaci się tylko zdrowotną</td></tr>
<tr><td>preferencyjne, kolejne 24 miesiące</td><td>od podstawy 30% minimalnego wynagrodzenia</td></tr>
<tr><td>„mały ZUS plus”</td><td>przy niskich przychodach, podstawa zależna od dochodu (przez określony czas)</td></tr>
<tr><td>pełny ZUS</td><td>od podstawy 60% przeciętnego wynagrodzenia prognozowanego</td></tr></table></div>
<p>Składki społeczne: emerytalna, rentowe, wypadkowa, chorobowa (dobrowolna), oraz Fundusz Pracy (gdy podstawa nie jest preferencyjna). <b>Składka zdrowotna</b> jest obowiązkowa i zależy od formy opodatkowania (na skali 9% dochodu, na liniowym 4,9% dochodu, na ryczałcie kwotowo wg progów przychodu). Składki płaci się do <b>20. dnia</b> następnego miesiąca.</p>
<div class="tip">Na ryczałcie podatek płaci się od przychodu, bez odliczania kosztów, więc opłaca się przy niskich kosztach działalności.</div>` },
        { tytul: "Dokumenty sprzedaży i zatrudnianie", tresc: `<h4>Faktura</h4>
<ul>
<li>Elementy obowiązkowe: data wystawienia, kolejny numer, dane i NIP sprzedawcy i nabywcy, data sprzedaży (jeśli inna), nazwa towaru lub usługi, ilość, cena jednostkowa netto, wartość netto, stawka i kwota VAT, wartość brutto.</li>
<li>Termin: do 15. dnia miesiąca następującego po miesiącu sprzedaży (z wyjątkami).</li>
<li>Faktura <b>korygująca</b> przy zmianie ceny, zwrocie, błędzie; nota korygująca (wystawia nabywca) tylko do błędów niedotyczących kwot.</li>
<li>Krajowy System e-Faktur (KSeF): faktury ustrukturyzowane, obowiązkowo wprowadzane etapami od 2026 r.</li>
</ul>
<h4>Przykład obliczenia faktury</h4>
<p>Usługa netto 400 zł, VAT 23%: VAT = 400 × 0,23 = 92 zł, brutto <b>492 zł</b>. Z brutto 615 zł (23%): netto = 615 / 1,23 = <b>500 zł</b>, VAT 115 zł.</p>
<h4>Inne dokumenty</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Zastosowanie</th></tr>
<tr><td>paragon fiskalny</td><td>sprzedaż dla konsumenta na kasie; paragon z NIP nabywcy do 450 zł brutto jest fakturą uproszczoną</td></tr>
<tr><td>rachunek</td><td>sprzedaż przez podatnika zwolnionego z VAT</td></tr>
<tr><td>KP, KW</td><td>kasa przyjmie, kasa wyda: dowody wpłaty i wypłaty gotówki</td></tr>
<tr><td>WZ, PZ</td><td>wydanie i przyjęcie towaru z magazynu</td></tr>
<tr><td>umowa, zamówienie, oferta</td><td>dokumenty handlowe (ustalenie warunków)</td></tr></table></div>
<h4>Zatrudnienie pierwszego pracownika</h4>
<ol>
<li>Wstępne badania lekarskie (skierowanie od pracodawcy) i szkolenie BHP (instruktaż ogólny i stanowiskowy).</li>
<li>Umowa na piśmie przed dopuszczeniem do pracy, informacja o warunkach zatrudnienia (w ciągu 7 dni).</li>
<li>Zgłoszenie do ZUS w ciągu <b>7 dni</b> od zatrudnienia.</li>
<li>Założenie akt osobowych, ewidencji czasu pracy, ocena ryzyka zawodowego stanowiska.</li>
<li>Comiesięczne naliczanie wynagrodzenia, składek i zaliczki na podatek.</li>
</ol>
<h4>Ochrona konsumenta</h4>
<p>Konsument może odstąpić od umowy zawartej na odległość lub poza lokalem w ciągu <b>14 dni</b> bez podania przyczyny. Sprzedawca odpowiada z tytułu niezgodności towaru z umową przez 2 lata; reklamację rozpatruje w ciągu 14 dni.</p>
<div class="tip">Wartość netto z brutto liczysz dzieląc przez (1 + stawka VAT), np. 615 / 1,23 = 500 zł, a nie odejmując 23% od brutto.</div>` }
      ],
      pytania: [
        Q("Jednoosobową działalność gospodarczą rejestruje się w:", "CEIDG", "KRS", "GUS bezpośrednio", "sądzie rejonowym", "Wniosek CEIDG-1, bezpłatnie."),
        Q("Ulga na start pozwala nie płacić składek społecznych ZUS przez:", "6 miesięcy", "24 miesiące", "12 miesięcy", "3 lata", "Składkę zdrowotną płaci się."),
        Q("Na ryczałcie od przychodów ewidencjonowanych podatek oblicza się od:", "przychodu, bez odliczania kosztów", "dochodu", "wartości majątku", "liczby pracowników", "Stawki zależą od rodzaju działalności."),
        Q("Podatek liniowy wynosi:", "19%", "12%", "32%", "9%", "Bez kwoty wolnej."),
        Q("Kwota brutto usługi o wartości netto 400 zł i VAT 23% wynosi:", "492 zł", "423 zł", "308 zł", "400 zł", "400 × 1,23."),
        Q("Wartość netto z kwoty brutto 615 zł przy VAT 23% to:", "500 zł", "473,55 zł", "591 zł", "615 zł", "615 / 1,23."),
        Q("Pracownika zgłasza się do ZUS w ciągu:", "7 dni od zatrudnienia", "30 dni", "1 dnia przed zatrudnieniem obowiązkowo", "3 miesięcy", "Druk ZUS ZUA."),
        Q("Konsument może odstąpić od umowy zawartej na odległość w ciągu:", "14 dni", "3 dni", "30 dni", "1 roku", "Bez podania przyczyny.")
      ]
    }
  ]);
})(window.KURSY);
