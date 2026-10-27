/* Dodatkowe pytania - dopisywane na końcu, żeby nie zmieniać numeracji istniejących */
window.KURSY = window.KURSY || {};
(function (K) {
  function add(kod, lista) { if (K[kod]) K[kod].pytania = K[kod].pytania.concat(lista); }

  add("EKA.04", [
    { p: "Umowa leasingu to umowa, w której", o: ["finansujący oddaje rzecz do używania za raty, często z możliwością wykupu", "rzecz przechodzi na własność biorącego od razu", "rzecz oddaje się bezpłatnie", "pobiera się wyłącznie pożytki z gruntu"], k: 0, w: "Leasing łączy używanie rzeczy z odpłatnością w ratach." },
    { p: "Osoba w wieku 15 lat ma", o: ["ograniczoną zdolność do czynności prawnych", "pełną zdolność do czynności prawnych", "brak zdolności prawnej", "brak zdolności do czynności prawnych"], k: 0, w: "Ograniczona zdolność przysługuje osobom w wieku 13-18 lat." },
    { p: "Znak sprawy ORG.0123.5.2026 - liczba 5 oznacza", o: ["kolejny numer sprawy", "symbol z wykazu akt", "rok", "numer pokoju"], k: 0, w: "Elementy: symbol komórki, symbol klasyfikacyjny, nr sprawy, rok." },
    { p: "Faktura korygująca jest wystawiana m.in. gdy", o: ["udzielono rabatu po sprzedaży lub zwrócono towar", "klient zapłacił w terminie", "zmieniono godzinę dostawy", "towar dostarczono zgodnie z zamówieniem"], k: 0, w: "Koryguje cenę, ilość, stawkę VAT lub dane." },
    { p: "Komisję inwentaryzacyjną powołuje", o: ["kierownik jednostki", "główny księgowy samodzielnie", "urząd skarbowy", "magazynier"], k: 0, w: "Zarządzenie o inwentaryzacji wydaje kierownik jednostki." },
    { p: "Zapasy w magazynie strzeżonym, objęte ewidencją ilościowo-wartościową, można inwentaryzować", o: ["raz w ciągu 2 lat", "raz na 4 lata", "codziennie", "raz na 10 lat"], k: 0, w: "Środki trwałe na terenie strzeżonym - raz na 4 lata." },
    { p: "Niedobór zawiniony obciąża", o: ["osobę materialnie odpowiedzialną", "koszty firmy w całości", "urząd skarbowy", "dostawcę towaru"], k: 0, w: "Niedobory niezawinione (np. ubytki naturalne) obciążają koszty." },
    { p: "Środek trwały o wartości 8 000 zł firma może", o: ["jednorazowo zaliczyć w koszty", "amortyzować wyłącznie metodą degresywną", "amortyzować przez 50 lat", "ująć jako towar handlowy"], k: 0, w: "Środki do 10 000 zł można jednorazowo zaliczyć w koszty." },
    { p: "Strategia cenowa polegająca na wprowadzeniu produktu po niskiej cenie, aby szybko zdobyć rynek, to strategia", o: ["penetracji rynku", "zbierania śmietanki", "cen prestiżowych", "dumpingu eksportowego"], k: 0, w: "Zbieranie śmietanki to wysoka cena na start." },
    { p: "W macierzy BCG produkt o wysokim udziale w rynku i niskim tempie wzrostu rynku to", o: ["dojna krowa", "gwiazda", "znak zapytania", "pies"], k: 0, w: "Dojne krowy przynoszą stabilne dochody." }
  ]);

  add("EKA.05", [
    { p: "Plan urlopów pracodawca ustala", o: ["biorąc pod uwagę wnioski pracowników", "wyłącznie według swojego uznania bez konsultacji", "tylko dla kierowników", "na wniosek urzędu pracy"], k: 0, w: "Plan uwzględnia wnioski pracowników i potrzebę normalnego toku pracy." },
    { p: "Wynagrodzenie zasadnicze 4 800 zł, nominalny czas pracy w miesiącu 160 h. Stawka godzinowa wynosi", o: ["30 zł", "24 zł", "40 zł", "48 zł"], k: 0, w: "4 800 ÷ 160 = 30 zł." },
    { p: "Przy stawce godzinowej 30 zł dodatek za 4 nadgodziny w dzień roboczy (50%) wynosi", o: ["60 zł", "120 zł", "30 zł", "240 zł"], k: 0, w: "30 × 4 × 50% = 60 zł (plus normalne wynagrodzenie za te godziny)." },
    { p: "Składkę na Fundusz Gwarantowanych Świadczeń Pracowniczych finansuje", o: ["pracodawca - 0,10%", "pracownik - 0,10%", "pracownik - 2,45%", "budżet państwa"], k: 0, w: "FGŚP chroni wynagrodzenia w razie niewypłacalności pracodawcy." },
    { p: "Zasiłek chorobowy za okres pobytu w szpitalu wynosi zwykle", o: ["70% podstawy", "80% podstawy", "100% podstawy", "50% podstawy"], k: 0, w: "Wyjątki (100%) - m.in. ciąża, wypadek w drodze do pracy." },
    { p: "Formularz wyrejestrowania pracownika z ubezpieczeń to", o: ["ZUS ZWUA", "ZUS ZUA", "ZUS RCA", "PIT-11"], k: 0, w: "Wyrejestrowanie w ciągu 7 dni od ustania tytułu do ubezpieczenia." },
    { p: "Zaliczki na podatek dochodowy pobrane od pracowników płatnik przekazuje do urzędu skarbowego do", o: ["20. dnia następnego miesiąca", "10. dnia", "15. dnia", "końca kwartału"], k: 0, w: "Termin zaliczek PIT pobranych przez płatnika - 20. dzień." },
    { p: "Wskaźnik płynności bieżącej wynosi 0,8. Oznacza to, że firma", o: ["może mieć trudności ze spłatą zobowiązań krótkoterminowych", "ma nadmiar gotówki", "jest bardzo rentowna", "nie ma zobowiązań"], k: 0, w: "Wartość poniżej 1 oznacza, że aktywa obrotowe nie pokrywają zobowiązań bieżących." },
    { p: "Od odsetek z lokaty bankowej osoby fizycznej pobiera się podatek w wysokości", o: ["19%", "12%", "23%", "9%"], k: 0, w: "Zryczałtowany podatek od zysków kapitałowych." },
    { p: "Jednorazowa lokata 10 000 zł na 2 lata przy 5% rocznie z kapitalizacją roczną da kapitał końcowy", o: ["11 025 zł", "11 000 zł", "10 500 zł", "11 500 zł"], k: 0, w: "10 000 × 1,05² = 11 025 zł." }
  ]);

  add("EKA.07", [
    { p: "Zasada ostrożnej wyceny oznacza m.in., że", o: ["uwzględnia się zmniejszenia wartości aktywów i rezerwy na znane ryzyko", "aktywa wycenia się zawsze po cenach rynkowych wyższych", "pomija się koszty przyszłych okresów", "zysk nierealizowany ujmuje się w przychodach"], k: 0, w: "Nie zawyża się aktywów ani wyniku." },
    { p: "Kapitał podstawowy spółki w bilansie to", o: ["pasywa - kapitał własny", "aktywa trwałe", "zobowiązania krótkoterminowe", "aktywa obrotowe"], k: 0, w: "Konto 800 - kapitał podstawowy." },
    { p: "Zakup towarów za gotówkę (bez VAT) to operacja", o: ["aktywna", "pasywna", "aktywno-pasywna zwiększająca", "aktywno-pasywna zmniejszająca"], k: 0, w: "Rosną towary (A+), maleje kasa (A−)." },
    { p: "Zaciągnięcie kredytu bankowego wpłaconego na rachunek bankowy to operacja", o: ["aktywno-pasywna zwiększająca", "aktywna", "pasywna", "aktywno-pasywna zmniejszająca"], k: 0, w: "Rośnie rachunek bankowy (A+) i kredyty (P+)." },
    { p: "Sprzedaż towarów na fakturę z odroczonym terminem - kwotę brutto księguje się", o: ["Wn 200 Rozrachunki z odbiorcami", "Ma 200", "Wn 201", "Wn 730"], k: 0, w: "Ma 730 (netto) i Ma 222 (VAT)." },
    { p: "Wpływ należności od odbiorcy na rachunek bankowy księguje się", o: ["Wn 130, Ma 200", "Wn 200, Ma 130", "Wn 130, Ma 201", "Wn 100, Ma 130"], k: 0, w: "Rosną środki w banku, maleją należności." },
    { p: "Lista płac - naliczenie wynagrodzeń brutto księguje się", o: ["Wn 404, Ma 230", "Wn 230, Ma 404", "Wn 405, Ma 229", "Wn 230, Ma 130"], k: 0, w: "Koszt wynagrodzeń i zobowiązanie wobec pracowników." },
    { p: "Zestawienie obrotów i sald służy m.in. do", o: ["sprawdzenia poprawności zapisów na kontach (suma Wn = suma Ma)", "obliczenia podatku VAT", "wystawienia faktury", "inwentaryzacji gotówki"], k: 0, w: "Jest podstawą do sporządzenia bilansu." },
    { p: "Ustawa o rachunkowości przewiduje dla sprawozdania finansowego zatwierdzenie nie później niż", o: ["6 miesięcy od dnia bilansowego", "3 miesiące", "12 miesięcy", "30 dni"], k: 0, w: "Sporządzenie - 3 miesiące, zatwierdzenie - 6 miesięcy." },
    { p: "Koszt zmienny jednostkowy 20 zł, cena 35 zł. Marża jednostkowa na pokrycie kosztów stałych wynosi", o: ["15 zł", "55 zł", "20 zł", "35 zł"], k: 0, w: "Cena − jednostkowy koszt zmienny = 15 zł." }
  ]);

  add("SPL.01", [
    { p: "Regał umożliwiający wjazd wózka w głąb regału po szynach (bez przejść między rzędami) to regał", o: ["wjezdny (drive-in)", "wspornikowy", "półkowy", "przepływowy grawitacyjny"], k: 0, w: "Dobre wykorzystanie przestrzeni, zasada LIFO." },
    { p: "Zasada lokalizacji, w której każdy towar ma przypisane stałe miejsce, to lokalizacja", o: ["stała", "wolna", "chaotyczna", "dynamiczna"], k: 0, w: "Wolna lokalizacja wymaga systemu WMS." },
    { p: "Numer SSCC na etykiecie logistycznej identyfikuje", o: ["konkretną jednostkę wysyłkową (np. paletę)", "kraj pochodzenia", "cenę towaru", "magazyniera"], k: 0, w: "Serial Shipping Container Code - 18 cyfr." },
    { p: "Kontrola jakościowa przy przyjęciu towaru obejmuje m.in.", o: ["stan opakowań i termin przydatności", "liczenie sztuk", "ważenie palety", "zapis do kartoteki"], k: 0, w: "Liczenie i ważenie to kontrola ilościowa." },
    { p: "Zapas średni: początkowy 400 szt., końcowy 600 szt. wynosi", o: ["500 szt.", "1 000 szt.", "200 szt.", "600 szt."], k: 0, w: "(400 + 600) ÷ 2 = 500." },
    { p: "Powierzchnia użytkowa magazynu 1 000 m², zajęta przez regały i towary 750 m². Wskaźnik wykorzystania powierzchni", o: ["75%", "25%", "133%", "7,5%"], k: 0, w: "750 ÷ 1 000 × 100%." },
    { p: "Linie wyznaczające drogi transportowe w magazynie maluje się zwykle w kolorze", o: ["żółtym", "zielonym", "niebieskim", "czerwonym"], k: 0, w: "Żółty oznacza drogi i strefy ruchu." },
    { p: "Kompletacja dwustopniowa polega na", o: ["zbiorczym pobraniu towaru, a potem rozdziale na zamówienia", "pobieraniu towaru dla jednego zamówienia naraz", "wysyłce bez kompletacji", "kompletacji przez klienta"], k: 0, w: "Zmniejsza liczbę przejść po magazynie." },
    { p: "Pojemnik na odpady z tworzyw sztucznych i metali ma kolor", o: ["żółty", "niebieski", "zielony", "brązowy"], k: 0, w: "Niebieski - papier, zielony - szkło, brązowy - bio." },
    { p: "Ekonomiczna wielkość zamówienia (EOQ) minimalizuje", o: ["łączne koszty zamawiania i utrzymania zapasów", "liczbę pracowników", "koszt transportu morskiego", "cenę jednostkową"], k: 0, w: "Wzór Wilsona." }
  ]);

  add("SPL.04", [
    { p: "Przy regule FCA ryzyko przechodzi na kupującego", o: ["z chwilą przekazania towaru przewoźnikowi kupującego", "dopiero w miejscu przeznaczenia", "po odprawie importowej", "po zapłacie faktury"], k: 0, w: "Free Carrier - dostarczone do przewoźnika." },
    { p: "Przy regule DPU rozładunek w miejscu przeznaczenia należy do", o: ["sprzedającego", "kupującego", "przewoźnika na jego koszt", "urzędu celnego"], k: 0, w: "Delivered at Place Unloaded - dostarczone i rozładowane." },
    { p: "Skrócony tygodniowy odpoczynek kierowcy trwa co najmniej", o: ["24 h", "45 h", "11 h", "9 h"], k: 0, w: "Regularny tygodniowy - 45 h; skrócony wymaga rekompensaty." },
    { p: "Przerwę 45 minut kierowca może podzielić na", o: ["15 minut, a następnie 30 minut", "30 minut, a następnie 15 minut", "trzy przerwy po 15 minut", "dowolne części"], k: 0, w: "Kolejność ma znaczenie: najpierw co najmniej 15, potem co najmniej 30 minut." },
    { p: "Przewóz pojazdów ciężarowych na statku, na który wjeżdżają one o własnym napędzie, to technologia", o: ["Ro-Ro", "Lo-Lo", "Ro-La", "FCL"], k: 0, w: "Roll-on/Roll-off." },
    { p: "Ładunek pełnokontenerowy w transporcie morskim oznacza się skrótem", o: ["FCL", "LCL", "TEU", "AWB"], k: 0, w: "LCL - drobnica, kilku nadawców w jednym kontenerze." },
    { p: "Limit odpowiedzialności przewoźnika według konwencji CMR wynosi", o: ["8,33 SDR za 1 kg masy brutto", "17 SDR za 1 kg", "100 € za przesyłkę", "pełną wartość rynkową zawsze"], k: 0, w: "W transporcie lotniczym (konwencja montrealska) limit jest wyższy." },
    { p: "Dystrybucja, w której producent sprzedaje przez jednego pośrednika na danym obszarze, to dystrybucja", o: ["wyłączna", "intensywna", "selektywna", "masowa"], k: 0, w: "Stosowana np. przy markach luksusowych." },
    { p: "System informatyczny do planowania tras i zarządzania flotą to", o: ["TMS", "WMS", "CRM", "HRM"], k: 0, w: "Transport Management System." },
    { p: "Trasa 540 km, średnia prędkość 60 km/h - czas samej jazdy wynosi", o: ["9 h", "8 h", "10 h", "6 h"], k: 0, w: "540 ÷ 60 = 9 h, czyli dzienny limit jazdy." }
  ]);

  add("HAN.01", [
    { p: "Marża 20% liczona „w stu” od ceny sprzedaży netto 150 zł wynosi", o: ["30 zł", "25 zł", "20 zł", "37,50 zł"], k: 0, w: "150 × 20% = 30 zł; cena zakupu 120 zł." },
    { p: "Cena zakupu 100 zł, cena sprzedaży netto 125 zł. Marża liczona od ceny zakupu wynosi", o: ["25%", "20%", "125%", "80%"], k: 0, w: "25 ÷ 100 × 100% = 25%." },
    { p: "Towar 0,75 l kosztuje 6,00 zł. Cena jednostkowa wynosi", o: ["8,00 zł/l", "4,50 zł/l", "6,75 zł/l", "0,80 zł/l"], k: 0, w: "6,00 ÷ 0,75 = 8,00 zł za litr." },
    { p: "Sprzedaż osobista z doradztwem sprzedawcy jest najbardziej potrzebna przy sprzedaży", o: ["sprzętu RTV i AGD", "pieczywa", "napojów w automacie", "gazet"], k: 0, w: "Towary wybieralne wymagają porównania i porady." },
    { p: "Pytanie otwarte w rozmowie z klientem to", o: ["„Do czego będzie Pani używać tego odkurzacza?”", "„Czy podać torbę?”", "„Płaci Pan kartą?”", "„Czy to wszystko?”"], k: 0, w: "Pytania otwarte zaczynają się od: co, jak, do czego, dlaczego." },
    { p: "Klientowi zgłaszającemu zastrzeżenie co do ceny sprzedawca powinien", o: ["przedstawić korzyści i wartość produktu", "od razu obniżyć cenę", "zignorować uwagę", "skierować go do konkurencji"], k: 0, w: "Metoda „tak, ale…” - przyznać rację i pokazać korzyści." },
    { p: "Produkty o krótkim terminie przydatności umieszcza się przy uzupełnianiu półek", o: ["z przodu, przed produktami z dłuższą datą", "z tyłu półki", "w magazynie", "na najwyższej półce"], k: 0, w: "Zasada FIFO/FEFO ogranicza straty." },
    { p: "Ekspozycja pionowa towaru polega na", o: ["umieszczeniu jednej marki na kilku półkach jedna nad drugą", "ułożeniu towaru tylko na dolnej półce", "ułożeniu towaru w koszu", "eksponowaniu wyłącznie przy kasie"], k: 0, w: "Klient widzi markę na całej wysokości regału." },
    { p: "Wobbler to", o: ["materiał reklamowy POS przymocowany do półki na sprężystym elemencie", "rodzaj kasy fiskalnej", "dokument dostawy", "wózek sklepowy"], k: 0, w: "Przyciąga wzrok ruchem przy produkcie." },
    { p: "Termin przydatności do spożycia „należy spożyć do” oznacza, że po tej dacie produkt", o: ["nie może być sprzedawany", "można sprzedać z rabatem", "można sprzedać przez tydzień", "trzeba zamrozić i sprzedać"], k: 0, w: "Produkty po terminie przydatności wycofuje się ze sprzedaży." },
    { p: "Sprzedawca ma obowiązek wydać klientowi paragon fiskalny", o: ["przy każdej sprzedaży zarejestrowanej na kasie", "tylko na żądanie", "tylko przy kwocie powyżej 100 zł", "tylko przy płatności kartą"], k: 0, w: "Paragon wydaje się zawsze, także w postaci elektronicznej za zgodą klienta." },
    { p: "Zabezpieczenie banknotu, którego kolor zmienia się przy zmianie kąta patrzenia, to", o: ["farba zmienna optycznie", "znak wodny", "mikrodruk", "recto-verso"], k: 0, w: "Np. nominał na banknocie 100 zł." }
  ]);

  add("HGT.02", [
    { p: "Drób poddaje się obróbce cieplnej tak, aby temperatura wewnątrz produktu osiągnęła co najmniej", o: ["+75°C", "+50°C", "+60°C przez sekundę", "+40°C"], k: 0, w: "To zabezpiecza przed Salmonellą i Campylobacterem." },
    { p: "Zaprawianie zupy żółtkami ze śmietaną to", o: ["liaison", "zasmażka", "zawiesina", "glazurowanie"], k: 0, w: "Żółtek nie gotuje się po dodaniu - ścinają się." },
    { p: "Drobna kostka warzywna (ok. 2 mm) to", o: ["brunoise", "julienne", "macédoine", "paysanne"], k: 0, w: "Macédoine - kostka ok. 5-8 mm." },
    { p: "Panierowanie po angielsku obejmuje kolejno", o: ["mąkę, jajo, bułkę tartą", "jajo, mąkę, bułkę tartą", "bułkę tartą, jajo, mąkę", "tylko mąkę"], k: 0, w: "To klasyczna panierka kotleta schabowego." },
    { p: "Stopień wysmażenia steku „medium rare” oznacza mięso", o: ["różowe i soczyste w środku", "całkowicie surowe", "dobrze wysmażone", "spalone na zewnątrz"], k: 0, w: "Rare - krwiste, medium - lekko różowe, well done - wysmażone." },
    { p: "Zakwaszanie startego jabłka sokiem z cytryny zapobiega", o: ["ciemnieniu enzymatycznemu", "rozwojowi pleśni w ciągu godziny", "utracie białka", "kleikowaniu skrobi"], k: 0, w: "Kwas hamuje działanie enzymów utleniających." },
    { p: "Rumiana skórka pieczonego mięsa powstaje głównie w wyniku", o: ["reakcji Maillarda", "denaturacji tłuszczu", "fermentacji", "kleikowania"], k: 0, w: "Reakcja cukrów z aminokwasami w wysokiej temperaturze." },
    { p: "Zestaw dań w stałej cenie, bez możliwości wyboru, to menu", o: ["table d'hôte", "a la carte", "bufet szwedzki", "karta win"], k: 0, w: "A la carte - wybór pojedynczych dań." },
    { p: "Do alergenów, które trzeba wyróżnić w karcie, należy", o: ["seler", "marchew", "ziemniak", "ryż"], k: 0, w: "Seler jest jednym z 14 alergenów wymagających informacji." },
    { p: "Ciasto parzone wykorzystuje się do wypieku", o: ["ptysiów i eklerów", "pierników", "rogalików drożdżowych", "kruchych babeczek"], k: 0, w: "Mąkę zaparza się we wrzącej wodzie z tłuszczem, potem dodaje jaja." }
  ]);

  add("MOT.05", [
    { p: "Na turbosprężarkę oddziałuje bezpośrednio", o: ["energia spalin", "napęd paska wielorowkowego", "silnik elektryczny rozrusznika", "ciśnienie płynu hamulcowego"], k: 0, w: "Turbina napędzana spalinami napędza sprężarkę powietrza." },
    { p: "Intercooler w układzie dolotowym służy do", o: ["chłodzenia sprężonego powietrza", "podgrzewania paliwa", "chłodzenia oleju w skrzyni", "oczyszczania spalin"], k: 0, w: "Chłodniejsze powietrze ma większą gęstość - więcej tlenu w cylindrze." },
    { p: "Filtr DPF stosuje się w silnikach", o: ["ZS do zatrzymywania cząstek sadzy", "ZI do zatrzymywania CO", "elektrycznych", "dwusuwowych gaźnikowych"], k: 0, w: "DPF wymaga okresowego wypalania (regeneracji)." },
    { p: "Przegub homokinetyczny stosuje się w", o: ["półosiach napędowych kół przednich", "wale korbowym", "układzie wydechowym", "zacisku hamulca"], k: 0, w: "Zapewnia stałą prędkość kątową przy skręconych kołach." },
    { p: "Kolumna McPhersona to element", o: ["zawieszenia", "układu kierowniczego", "skrzyni biegów", "układu rozrządu"], k: 0, w: "Łączy amortyzator ze sprężyną i jest elementem prowadzącym koło." },
    { p: "Indeks prędkości opony „H” oznacza maksymalną prędkość", o: ["210 km/h", "180 km/h", "240 km/h", "270 km/h"], k: 0, w: "T - 190, H - 210, V - 240, W - 270 km/h." },
    { p: "Przyrząd do pomiaru bicia tarczy hamulcowej to", o: ["czujnik zegarowy", "suwmiarka", "szczelinomierz", "areometr"], k: 0, w: "Mocuje się go na statywie magnetycznym." },
    { p: "Stan naładowania akumulatora kwasowego można sprawdzić", o: ["areometrem (gęstość elektrolitu) lub pomiarem napięcia spoczynkowego", "manometrem", "stroboskopem", "dymomierzem"], k: 0, w: "Gęstość ok. 1,28 g/cm³ - akumulator naładowany." },
    { p: "Biały, gęsty dym ze słodkawym zapachem przy rozgrzanym silniku wskazuje na", o: ["przedostawanie się płynu chłodniczego do komory spalania", "zbyt ubogą mieszankę", "zużyte klocki hamulcowe", "spalanie oleju przekładniowego"], k: 0, w: "Najczęstsza przyczyna - uszkodzona uszczelka głowicy." },
    { p: "Moment dokręcania śrub kół należy sprawdzić", o: ["kluczem dynamometrycznym, dokręcając na krzyż", "kluczem udarowym na maksimum", "ręcznie bez narzędzi", "tylko po 10 000 km"], k: 0, w: "Dokręcanie na krzyż zapobiega skrzywieniu tarczy i felgi." },
    { p: "Kod usterki P0171 oznacza", o: ["zbyt ubogą mieszankę (bank 1)", "wypadanie zapłonów w cylindrze 1", "usterkę czujnika ABS", "błąd komunikacji CAN"], k: 0, w: "Przyczyny: nieszczelność dolotu, przepływomierz, pompa paliwa." }
  ]);

  add("ELE.02", [
    { p: "Moc pobierana przez odbiornik trójfazowy: U = 400 V, I = 10 A, cos φ = 0,8 wynosi około", o: ["5,5 kW", "3,2 kW", "4 kW", "6,9 kW"], k: 0, w: "P = √3 × 400 × 10 × 0,8 ≈ 5 543 W." },
    { p: "Rezystancja przewodu rośnie, gdy", o: ["rośnie jego długość lub maleje przekrój", "rośnie przekrój", "maleje długość", "zmniejsza się rezystywność"], k: 0, w: "R = ρ × l ÷ S." },
    { p: "Przekładnia transformatora 230/23 V wynosi", o: ["10", "0,1", "207", "253"], k: 0, w: "ϑ = U₁ ÷ U₂ = 230 ÷ 23 = 10." },
    { p: "Wyłącznik różnicowoprądowy sprawdza się przyciskiem TEST", o: ["okresowo, np. raz w miesiącu", "tylko przy montażu", "nigdy - przycisk jest dla serwisu", "raz na 10 lat"], k: 0, w: "Producenci zalecają regularne sprawdzanie mechanizmu." },
    { p: "W strefie 1 łazienki (nad wanną) oprawy muszą mieć stopień ochrony co najmniej", o: ["IPX4", "IP20", "IPX1", "IP00"], k: 0, w: "W strefie 0 - IPX7." },
    { p: "Łącznik świecznikowy pozwala", o: ["załączać dwa obwody (grupy żarówek) niezależnie z jednego miejsca", "sterować światłem z trzech miejsc", "regulować jasność", "załączać obwód trójfazowy"], k: 0, w: "Stosowany do żyrandoli wieloramiennych." },
    { p: "Uprawnienia „E” (świadectwo kwalifikacyjne) dotyczą stanowiska", o: ["eksploatacji", "dozoru", "projektowania", "kierownika budowy"], k: 0, w: "D - dozór." },
    { p: "Ograniczniki przepięć typu 1 instaluje się", o: ["w złączu lub rozdzielnicy głównej budynku z instalacją odgromową", "bezpośrednio przy gnieździe komputera", "w lampie sufitowej", "w puszce łącznika"], k: 0, w: "Typ 2 - rozdzielnice piętrowe, typ 3 - przy odbiornikach." },
    { p: "Stopień ochrony IP65 oznacza ochronę przed", o: ["pyłem (pyłoszczelność) i strumieniem wody", "zanurzeniem trwałym", "tylko dotykiem palcem", "kroplami wody spadającymi pionowo"], k: 0, w: "6 - pyłoszczelne, 5 - strumień wody z dyszy." },
    { p: "Przemiennik częstotliwości (falownik) w układzie napędowym pozwala", o: ["płynnie regulować prędkość obrotową silnika indukcyjnego", "zmienić silnik na prądnicę", "zwiększyć napięcie sieci do 1 kV", "zastąpić wyłącznik różnicowoprądowy"], k: 0, w: "Prędkość zależy od częstotliwości napięcia zasilania." }
  ]);

  add("BUD.12", [
    { p: "Silikaty to elementy murowe wykonane z", o: ["wapna i piasku", "gliny wypalanej", "betonu komórkowego", "gipsu"], k: 0, w: "Cegła wapienno-piaskowa, autoklawizowana." },
    { p: "Bloczki z betonu komórkowego o dokładnych wymiarach muruje się zwykle na", o: ["zaprawie cienkowarstwowej (klej)", "zaprawie glinianej", "suchu bez zaprawy", "zaprawie gipsowej grubowarstwowej"], k: 0, w: "Spoina cienkowarstwowa ma 1-3 mm." },
    { p: "Grubość muru 1½ cegły wynosi", o: ["38 cm", "25 cm", "51 cm", "30 cm"], k: 0, w: "Z uwzględnieniem spoin pionowych." },
    { p: "Murowanie rozpoczyna się od", o: ["narożników i miejsc połączeń ścian", "środka ściany", "nadproży", "ścianek działowych"], k: 0, w: "Narożniki wyznaczają poziom i lico dla sznura murarskiego." },
    { p: "Prefabrykowane belki nadprożowe typu L-19 układa się", o: ["nad otworami okiennymi i drzwiowymi", "pod fundamentem", "jako wieniec stropu na całym obwodzie zamiast zbrojenia", "w ściankach działowych z płyt g-k"], k: 0, w: "Belki L-19 przenoszą obciążenia nad otworem." },
    { p: "Druga warstwa tynku tradycyjnego, wyrównująca powierzchnię, to", o: ["narzut", "obrzutka", "gładź", "szpachla"], k: 0, w: "Obrzutka - przyczepność, gładź - wykończenie." },
    { p: "Na styku dwóch różnych materiałów podłoża przed tynkowaniem stosuje się", o: ["siatkę zbrojącą", "folię paroizolacyjną", "papę", "styropian"], k: 0, w: "Ogranicza pękanie tynku w tym miejscu." },
    { p: "Tynk akrylowy, silikonowy lub mineralny cienkowarstwowy stosuje się najczęściej", o: ["jako wykończenie elewacji docieplanej metodą ETICS", "w piwnicach pod okładzinę", "jako obrzutkę", "na stropach drewnianych bez podłoża"], k: 0, w: "To ostatnia warstwa systemu ocieplenia." },
    { p: "Strefa niebezpieczna wokół rusztowania, z którego mogą spaść przedmioty, ma szerokość co najmniej", o: ["1/10 wysokości, nie mniej niż 6 m", "1 m", "2 m", "tyle co wysokość budynku"], k: 0, w: "Strefę wygradza się i oznakowuje." },
    { p: "Zaprawy, która zaczęła wiązać,", o: ["nie wolno ponownie rozrabiać wodą", "można dowolnie rozcieńczyć wodą", "używa się do tynków gładzi", "należy podgrzać"], k: 0, w: "Rozrobienie przerywa wiązanie i obniża wytrzymałość." },
    { p: "Narzędzie do zacierania narzutu tynku to", o: ["packa", "kielnia", "pion", "młotek murarski"], k: 0, w: "Packa drewniana lub styropianowa." }
  ]);

  add("FRK.01", [
    { p: "Osłonka (kutykula) włosa zbudowana jest z", o: ["nachodzących na siebie łusek keratynowych", "melaniny", "rdzenia z pęcherzykami powietrza", "łoju"], k: 0, w: "Gładka, zamknięta kutykula daje połysk." },
    { p: "Fizjologicznie w ciągu doby wypada do około", o: ["100 włosów", "10 włosów", "1 000 włosów", "5 włosów"], k: 0, w: "Większa utrata może świadczyć o łysieniu." },
    { p: "Faza spoczynku i wypadania włosa to", o: ["telogen", "anagen", "katagen", "mezogen"], k: 0, w: "Trwa ok. 3 miesiące." },
    { p: "Strzyżenie z uniesieniem pasm pod kątem 90° daje", o: ["równomierne cieniowanie", "jednolitą linię", "zagęszczenie końcówek", "brak zmian długości"], k: 0, w: "Wszystkie włosy mają podobną długość." },
    { p: "Effilowanie to", o: ["cieniowanie końcówek brzytwą lub nożyczkami ruchem ślizgowym", "farbowanie pasemek", "trwała ondulacja", "mycie skóry głowy"], k: 0, w: "Daje lekkość i rozmycie konturu." },
    { p: "Oksydant 3% stosuje się głównie do", o: ["koloryzacji ton w ton i przyciemniania", "rozjaśnienia o 3 tony", "rozjaśniania pasemek do platyny", "trwałej ondulacji"], k: 0, w: "Nie rozjaśnia naturalnego pigmentu." },
    { p: "Refleks oznaczony po kropce cyfrą .1 to zwykle refleks", o: ["popielaty", "miedziany", "złoty", "czerwony"], k: 0, w: ".3 złoty, .4 miedziany, .5 mahoń, .6 czerwony." },
    { p: "Utrwalacz w trwałej ondulacji zawiera najczęściej", o: ["nadtlenek wodoru", "tioglikolan amonu", "amoniak", "alkohol"], k: 0, w: "Utlenia i odbudowuje wiązania dwusiarczkowe." },
    { p: "Twarzy pociągłej zaleca się fryzurę", o: ["z grzywką i objętością po bokach", "z dużą objętością na czubku", "gładko zaczesaną do tyłu", "bardzo długą, prostą bez grzywki"], k: 0, w: "Grzywka skraca, objętość boczna poszerza twarz." },
    { p: "Narzędzia, które naruszają ciągłość skóry, po dezynfekcji i myciu należy", o: ["wysterylizować", "tylko przetrzeć ręcznikiem", "spłukać zimną wodą", "odłożyć bez dalszych czynności"], k: 0, w: "Sterylizacja niszczy także przetrwalniki." },
    { p: "Po koloryzacji stosuje się odżywkę o odczynie kwaśnym, aby", o: ["zamknąć łuski i ustabilizować kolor", "rozjaśnić włosy", "otworzyć łuski", "przyspieszyć utlenianie"], k: 0, w: "Zakwaszenie przywraca naturalne pH włosa." },
    { p: "Łupież tłusty wiąże się najczęściej z", o: ["nadmiernym wydzielaniem łoju", "zbyt rzadkim strzyżeniem", "farbowaniem henną", "noszeniem kapelusza"], k: 0, w: "Stosuje się szampony przeciwłupieżowe i regulujące wydzielanie łoju." }
  ]);
})(window.KURSY);
