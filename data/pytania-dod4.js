/* Dodatkowe pytania (część 4) */
window.KURSY = window.KURSY || {};
(function (K) {
  function add(kod, lista) { if (K[kod]) K[kod].pytania = K[kod].pytania.concat(lista); }

  add("BUD.11", [
    { p: "Typowa grubość płyty gipsowo-kartonowej do ścian to", o: ["12,5 mm", "3 mm", "50 mm", "25 cm"], k: 0, w: "Stosuje się też płyty 9,5 i 15 mm." },
    { p: "Słupki ścianki działowej z płyt g-k wykonuje się z profili", o: ["CW", "UW", "UD", "CD"], k: 0, w: "UW to prowadnice poziome." },
    { p: "Narożniki zewnętrzne ścian z płyt g-k zabezpiecza się", o: ["narożnikami (kątownikami) ochronnymi", "silikonem", "taśmą izolacyjną", "papą"], k: 0, w: "Chronią krawędź przed uszkodzeniami." },
    { p: "Wypełnienie ścianki działowej wełną mineralną poprawia przede wszystkim", o: ["izolacyjność akustyczną", "nośność", "przewodność elektryczną", "wilgotność"], k: 0, w: "Także odporność ogniową." },
    { p: "Fuga epoksydowa (RG) jest stosowana tam, gdzie wymagana jest", o: ["odporność chemiczna i wodoszczelność", "najniższa cena", "duża elastyczność dylatacji", "łatwe usuwanie"], k: 0, w: "Np. w kuchniach przemysłowych, basenach." },
    { p: "Oznaczenie E przy kleju do płytek to", o: ["wydłużony czas otwarty", "zmniejszony spływ", "klej epoksydowy", "odporność na ogień"], k: 0, w: "Daje więcej czasu na ułożenie płytek." },
    { p: "Pierwszy pas tapety przykleja się", o: ["według pionu wyznaczonego poziomicą lub pionem", "od narożnika bez sprawdzania", "w poziomie", "dowolnie"], k: 0, w: "Ściany rzadko są idealnie pionowe." },
    { p: "Farby silikatowe i silikonowe stosuje się głównie na", o: ["elewacjach", "meblach drewnianych", "metalach w kuchni", "podłogach drewnianych"], k: 0, w: "Są paroprzepuszczalne i odporne na warunki atmosferyczne." },
    { p: "Pod panele podłogowe na podłożu mineralnym (wylewce) układa się", o: ["folię paroizolacyjną i podkład", "papę i smołę", "siatkę tynkarską", "płytę g-k"], k: 0, w: "Folia chroni panele przed wilgocią z podłoża." },
    { p: "Potrzeba 12,6 m² płytek, opakowanie 1,44 m². Należy kupić (z zapasem 10%)", o: ["10 opakowań", "9 opakowań", "8 opakowań", "13 opakowań"], k: 0, w: "12,6 × 1,1 = 13,86 ÷ 1,44 = 9,6 → 10." }
  ]);

  add("BUD.14", [
    { p: "Uczestnikiem procesu budowlanego nie jest", o: ["sprzedawca materiałów budowlanych", "inwestor", "kierownik budowy", "projektant"], k: 0, w: "Prawo budowlane wymienia: inwestora, inspektora nadzoru, projektanta, kierownika budowy." },
    { p: "Protokolarne przejęcie terenu budowy od inwestora należy do", o: ["kierownika budowy", "projektanta", "starosty", "geodety"], k: 0, w: "To jeden z pierwszych obowiązków kierownika." },
    { p: "Tablicę informacyjną budowy umieszcza się", o: ["w widocznym miejscu na budowie", "w biurze inwestora", "w dzienniku budowy", "na stronie internetowej starostwa"], k: 0, w: "Zawiera dane budowy i uczestników." },
    { p: "Do odbioru robót zanikających zgłasza kierownik budowy, a dokonuje go", o: ["inspektor nadzoru inwestorskiego (lub inwestor)", "projektant zawsze", "nadzór budowlany", "dostawca betonu"], k: 0, w: "Odbiór wpisuje się do dziennika budowy." },
    { p: "Metoda kosztorysowania polegająca na mnożeniu ilości robót przez ceny jednostkowe to metoda", o: ["uproszczona", "szczegółowa", "analityczna", "porównawcza"], k: 0, w: "W szczegółowej rozdziela się R, M, S, Kp, Z." },
    { p: "Koszty zakupu materiałów w kosztorysie szczegółowym dolicza się do", o: ["materiałów (M)", "robocizny (R)", "sprzętu (S)", "zysku"], k: 0, w: "Zwykle jako procent wartości materiałów." },
    { p: "Nakład sprzętu w KNR podaje się w", o: ["maszynogodzinach (m-g)", "roboczogodzinach", "metrach", "złotych"], k: 0, w: "Robocizna — w r-g." },
    { p: "Wartość netto robót 50 000 zł, VAT 23%. Wartość brutto wynosi", o: ["61 500 zł", "50 230 zł", "38 500 zł", "65 000 zł"], k: 0, w: "50 000 × 1,23." },
    { p: "Wykres przedstawiający kolejne roboty jako paski na osi czasu to", o: ["harmonogram Gantta", "przekrój budynku", "dziennik budowy", "kosztorys"], k: 0, w: "Ułatwia koordynację brygad." },
    { p: "Strefę niebezpieczną wokół pracującego żurawia wyznacza się, aby", o: ["chronić ludzi przed spadającymi ładunkami", "oznaczyć parking", "przyspieszyć dostawy", "ułatwić pomiary geodezyjne"], k: 0, w: "Strefę wygradza się i oznakowuje." },
    { p: "Badanie wytrzymałości betonu wykonuje się standardowo po", o: ["28 dniach", "1 dniu", "7 godzinach", "1 roku"], k: 0, w: "Na próbkach pobranych podczas betonowania." },
    { p: "Kosztorys wykonywany na roboty nieprzewidziane w umowie to kosztorys", o: ["dodatkowy", "inwestorski", "ofertowy", "przedmiarowy"], k: 0, w: "Zamienny dotyczy zmian technologii lub materiałów." }
  ]);

  add("FRK.03", [
    { p: "Linie poziome we fryzurze optycznie", o: ["poszerzają", "wydłużają", "wysmuklają szyję", "nie zmieniają proporcji"], k: 0, w: "Np. prosta grzywka na całą szerokość." },
    { p: "Twarz trójkątna (wąskie czoło, szeroka żuchwa) wymaga fryzury z objętością", o: ["w górnej części głowy i przy skroniach", "na wysokości żuchwy", "tylko z tyłu", "przy samym karku"], k: 0, w: "Równoważy to szeroką dolną część twarzy." },
    { p: "Barwy pochodne (drugiego rzędu) to", o: ["pomarańczowa, zielona, fioletowa", "żółta, czerwona, niebieska", "biała i czarna", "brązowa i beżowa"], k: 0, w: "Powstają ze zmieszania dwóch barw podstawowych." },
    { p: "Kolorem dopełniającym dla pomarańczowego jest", o: ["niebieski", "zielony", "fioletowy", "żółty"], k: 0, w: "Niebieski neutralizuje miedziane refleksy." },
    { p: "Typ urody o ciepłym podtonie i głębokich, nasyconych barwach (np. rude włosy, piegi) to", o: ["jesień", "lato", "zima", "brak typu"], k: 0, w: "Wiosna jest ciepła, ale jaśniejsza." },
    { p: "Typ urody o zimnym, stonowanym kolorycie, jasnych popielatych włosach to", o: ["lato", "zima", "jesień", "wiosna"], k: 0, w: "Zima to typ zimny i kontrastowy." },
    { p: "Technika delikatnych, cienkich rozjaśnień imitujących naturalne refleksy to", o: ["babylights", "koloryzacja blokowa", "ombre kontrastowe", "farbowanie całościowe na czerń"], k: 0, w: "Daje bardzo naturalny efekt." },
    { p: "Fale wodne wykonywane gorącymi szczypcami w latach 20. XX w. to", o: ["marcelowanie", "tapirowanie", "balejaż", "degażowanie"], k: 0, w: "Nazwa od fryzjera Marcela Grateau." },
    { p: "Warkocz pleciony od góry z dobieraniem pasm, z pasmami przekładanymi pod spód, to warkocz", o: ["holenderski", "francuski", "kłos", "zwykły trzypasmowy"], k: 0, w: "We francuskim pasma przekłada się na wierzch." },
    { p: "Asymetria we fryzurze", o: ["nadaje dynamiki i może maskować niedoskonałości twarzy", "zawsze jest błędem", "jest dozwolona tylko u mężczyzn", "wyklucza koloryzację"], k: 0, w: "To świadomy zabieg kompozycyjny." },
    { p: "Ciemniejszy kolor włosów przy twarzy optycznie", o: ["wyszczupla i zwęża twarz", "poszerza twarz", "rozjaśnia cerę", "zwiększa objętość"], k: 0, w: "Ciemne barwy „cofają” i zmniejszają." },
    { p: "Przy projektowaniu fryzury dla osoby wysokiej i szczupłej unika się zwykle", o: ["bardzo dużej objętości na czubku głowy", "objętości po bokach", "fryzur do ramion", "miękkich fal"], k: 0, w: "Dodatkowo wydłużałaby sylwetkę." }
  ]);

  add("FRK.04", [
    { p: "Najbardziej zewnętrzną warstwą naskórka jest warstwa", o: ["rogowa", "podstawna", "kolczysta", "ziarnista"], k: 0, w: "Złożona z martwych, zrogowaciałych komórek." },
    { p: "Włókna kolagenowe i elastynowe znajdują się w", o: ["skórze właściwej", "warstwie rogowej", "płytce paznokcia", "tkance kostnej"], k: 0, w: "Odpowiadają za jędrność i elastyczność." },
    { p: "Cera mieszana charakteryzuje się", o: ["przetłuszczaniem w strefie T i normalną lub suchą skórą na policzkach", "jednolicie suchą skórą", "wyłącznie rumieniem", "brakiem gruczołów łojowych"], k: 0, w: "Strefa T: czoło, nos, broda." },
    { p: "Kwas migdałowy to przykład", o: ["kwasu AHA", "kwasu BHA", "enzymu", "witaminy"], k: 0, w: "Ma duże cząsteczki, działa łagodnie." },
    { p: "Masaż twarzy zaczyna się i kończy ruchem", o: ["głaskania", "oklepywania", "ugniatania", "wibracji"], k: 0, w: "Głaskanie przygotowuje i wycisza skórę." },
    { p: "Kierunek ruchów masażu twarzy powinien odpowiadać", o: ["przebiegowi naczyń limfatycznych w stronę węzłów chłonnych", "kierunkowi wzrostu włosów", "dowolnemu kierunkowi", "zawsze od dołu do góry na szyi"], k: 0, w: "Wspomaga odpływ limfy." },
    { p: "Mikrodermabrazja to zabieg", o: ["mechanicznego złuszczania naskórka", "depilacji woskiem", "koloryzacji brwi", "elektrostymulacji mięśni"], k: 0, w: "Kryształkami lub głowicą diamentową." },
    { p: "Obrąbek naskórkowy paznokcia (skórki) podczas manicure", o: ["zmiękcza się i delikatnie odsuwa", "wycina się głęboko aż do krwi", "przypala", "zostawia bez pielęgnacji zawsze"], k: 0, w: "Chroni macierz przed zakażeniem." },
    { p: "Przeciwwskazaniem do pedicure u kosmetyczki jest", o: ["zakażenie grzybicze stóp i paznokci", "sucha skóra pięt", "lakier na paznokciach", "zrogowacenia"], k: 0, w: "Wymaga leczenia u lekarza lub podologa." },
    { p: "Fioletowy korektor stosuje się do neutralizacji", o: ["żółtawego kolorytu skóry", "zaczerwienień", "sińców u ciemnej karnacji", "piegów"], k: 0, w: "Fioletowy jest dopełniający dla żółtego." },
    { p: "Karta zabiegowa klienta w gabinecie kosmetycznym zawiera m.in.", o: ["wywiad, przeciwwskazania i opis wykonanych zabiegów", "tylko cenę", "wyłącznie numer telefonu", "zdjęcie paszportowe"], k: 0, w: "Służy bezpieczeństwu i ciągłości pielęgnacji." }
  ]);

  add("ROL.04", [
    { p: "Optymalny odczyn gleby dla większości roślin uprawnych to około", o: ["pH 5,5–7", "pH 3", "pH 9–10", "pH 1"], k: 0, w: "Gleby bardzo kwaśne wymagają wapnowania." },
    { p: "Fosfor wpływa przede wszystkim na", o: ["rozwój korzeni i kwitnienie", "barwę liści przez chlorofil wyłącznie", "wyleganie", "wzrost pędów bocznych tylko"], k: 0, w: "Ważny w początkowych fazach wzrostu." },
    { p: "Nawozem azotowym jest", o: ["saletra amonowa", "superfosfat", "sól potasowa", "kreda nawozowa"], k: 0, w: "Superfosfat — fosfor, sól potasowa — potas." },
    { p: "Orka przedzimowa wykonywana jest", o: ["jesienią, przed zimą, na głębokość ok. 25–30 cm", "wiosną bezpośrednio przed siewem", "latem po zbiorze jako płytka", "zimą na zamarzniętej glebie"], k: 0, w: "Gleba przemarza i poprawia się jej struktura." },
    { p: "Masa tysiąca ziaren oznacza się skrótem", o: ["MTZ", "WU", "NPK", "DJP"], k: 0, w: "Wykorzystuje się ją do obliczania normy wysiewu." },
    { p: "Przerwy w uprawie rzepaku na tym samym polu powinny wynosić co najmniej", o: ["3–4 lata", "1 rok", "6 miesięcy", "nie są potrzebne"], k: 0, w: "Ogranicza to choroby, np. kiłę kapusty." },
    { p: "Próg szkodliwości to", o: ["liczebność szkodnika, przy której zabieg chemiczny staje się opłacalny", "maksymalna dawka nawozu", "termin siewu", "klasa gleby"], k: 0, w: "Element integrowanej ochrony roślin." },
    { p: "Zaświadczenie o ukończeniu szkolenia w zakresie stosowania środków ochrony roślin jest ważne", o: ["5 lat", "1 rok", "bezterminowo", "10 lat"], k: 0, w: "Potem szkolenie trzeba powtórzyć." },
    { p: "Kiszonkę z kukurydzy zalicza się do pasz", o: ["objętościowych soczystych", "treściwych", "mineralnych", "objętościowych suchych"], k: 0, w: "Siano — objętościowa sucha." },
    { p: "Wał przegubowo-teleskopowy łączący ciągnik z maszyną musi być", o: ["zabezpieczony kompletną osłoną", "bez osłony dla łatwiejszej kontroli", "smarowany w czasie pracy ręką", "używany tylko zimą"], k: 0, w: "Wciągnięcie odzieży przez wał to częsta przyczyna ciężkich wypadków." }
  ]);

  add("ROL.10", [
    { p: "Koszty pośrednie w gospodarstwie to m.in.", o: ["amortyzacja budynków i maszyn, ubezpieczenia", "nasiona", "nawozy mineralne", "środki ochrony roślin"], k: 0, w: "Nie przypisuje się ich bezpośrednio do jednej uprawy." },
    { p: "Dochód rolniczy oblicza się jako", o: ["wartość produkcji + dopłaty − koszty ogółem", "przychody − VAT", "nadwyżkę bezpośrednią bez dopłat", "wartość ziemi ÷ liczbę lat"], k: 0, w: "Uwzględnia także koszty pośrednie." },
    { p: "Wnioski o płatności bezpośrednie składa się elektronicznie w aplikacji", o: ["eWniosekPlus", "Płatnik", "e-Deklaracje", "BDO"], k: 0, w: "Prowadzi ją ARiMR." },
    { p: "Normy dobrej kultury rolnej zgodnej z ochroną środowiska oznacza się skrótem", o: ["GAEC", "HACCP", "FADN", "PKD"], k: 0, w: "Są elementem warunkowości." },
    { p: "Podatek rolny oblicza się od", o: ["hektarów przeliczeniowych", "przychodu ze sprzedaży", "liczby zwierząt", "wartości maszyn"], k: 0, w: "Stawka zależy od ceny żyta." },
    { p: "Specjalizacja produkcji w gospodarstwie zwiększa", o: ["efektywność, ale też ryzyko", "zawsze bezpieczeństwo dochodu", "liczbę kierunków produkcji", "koszty pośrednie do zera"], k: 0, w: "Dywersyfikacja zmniejsza ryzyko." },
    { p: "Kontrolę gospodarstw ekologicznych prowadzą", o: ["upoważnione jednostki certyfikujące", "urzędy skarbowe", "KRUS", "Inspekcja Transportu Drogowego"], k: 0, w: "Wydają certyfikat zgodności." },
    { p: "Koszt paliwa zużywanego przez ciągnik to koszt", o: ["zmienny", "stały", "pośredni stały", "amortyzacyjny"], k: 0, w: "Rośnie z liczbą godzin pracy." },
    { p: "Kombajn o szerokości 5 m, prędkość 5 km/h, wykorzystanie czasu 0,8. Wydajność wynosi", o: ["2 ha/h", "20 ha/h", "2,5 ha/h", "0,5 ha/h"], k: 0, w: "5 × 5 × 0,1 × 0,8." },
    { p: "Systemy prowadzenia równoległego w ciągnikach wykorzystują", o: ["GPS (GNSS)", "radio FM", "czujnik deszczu", "tachograf"], k: 0, w: "Ograniczają nakładki i omijaki." },
    { p: "Plon 4 t/ha, cena 2 000 zł/t, koszty bezpośrednie 3 500 zł/ha. Nadwyżka bezpośrednia wynosi", o: ["4 500 zł/ha", "8 000 zł/ha", "11 500 zł/ha", "500 zł/ha"], k: 0, w: "8 000 − 3 500." },
    { p: "Analiza SWOT gospodarstwa do czynników wewnętrznych zalicza", o: ["mocne i słabe strony", "szanse i zagrożenia", "ceny skupu", "przepisy UE"], k: 0, w: "Szanse i zagrożenia to otoczenie." },
    { p: "Identyfikowalność żywności w gospodarstwie zapewnia", o: ["dokumentacja produkcji i sprzedaży (skąd, kiedy, komu)", "reklama w mediach", "zakup nowych maszyn", "zmiana płodozmianu"], k: 0, w: "Umożliwia wycofanie partii w razie zagrożenia." },
    { p: "Ubezpieczenie upraw od przymrozków i gradobicia to przykład", o: ["zarządzania ryzykiem produkcyjnym", "podatku rolnego", "płatności bezpośredniej", "kredytu kupieckiego"], k: 0, w: "Ubezpieczenia mogą być dotowane z budżetu państwa." }
  ]);
})(window.KURSY);
