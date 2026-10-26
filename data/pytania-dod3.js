/* Dodatkowe pytania (część 3) */
window.KURSY = window.KURSY || {};
(function (K) {
  function add(kod, lista) { if (K[kod]) K[kod].pytania = K[kod].pytania.concat(lista); }

  add("MOT.02", [
    { p: "Zacisk 50 w instalacji pojazdu służy do", o: ["sterowania rozrusznikiem", "zasilania świateł stopu", "połączenia z masą", "zasilania stałego"], k: 0, w: "Napięcie pojawia się w położeniu stacyjki „start”." },
    { p: "Napięcie spoczynkowe w pełni naładowanego akumulatora 12 V wynosi około", o: ["12,6–12,8 V", "11,0 V", "14,4 V", "10,5 V"], k: 0, w: "Poniżej ok. 12,2 V akumulator jest znacznie rozładowany." },
    { p: "Czujnik położenia wałka rozrządu (CMP) pozwala sterownikowi", o: ["rozpoznać, który cylinder jest w suwie pracy", "zmierzyć temperaturę oleju", "ustalić ciśnienie w oponach", "zmierzyć prędkość pojazdu"], k: 0, w: "Potrzebny do wtrysku sekwencyjnego." },
    { p: "Czujnik Halla wytwarza sygnał", o: ["prostokątny (cyfrowy)", "sinusoidalny bez zasilania", "wyłącznie stałe 12 V", "akustyczny"], k: 0, w: "Wymaga zasilania; czujnik indukcyjny daje sygnał sinusoidalny." },
    { p: "Dane zapisane przez sterownik w chwili wystąpienia usterki to", o: ["freeze frame (dane zamrożone)", "live data", "kod VIN", "mapa zapłonu"], k: 0, w: "Pokazują warunki pracy w momencie błędu." },
    { p: "Przepustnica sterowana elektrycznie przez sterownik silnika to układ", o: ["drive-by-wire", "gaźnikowy", "mechaniczny z linką", "hydrauliczny"], k: 0, w: "Pedał przyspieszenia ma czujnik położenia." },
    { p: "Wymiany bezpiecznika na bezpiecznik o większym prądzie znamionowym", o: ["nie wolno wykonywać — grozi to przegrzaniem przewodów", "wykonuje się zawsze przy przepaleniu", "zaleca producent", "nie ma znaczenia"], k: 0, w: "Trzeba znaleźć przyczynę przepalenia." },
    { p: "Do obsługi układów klimatyzacji z czynnikiem fluorowanym wymagany jest", o: ["certyfikat F-gazowy", "certyfikat SEP E", "prawo jazdy kat. C", "certyfikat UDT na wózki"], k: 0, w: "Czynnik odzyskuje się stacją obsługi." },
    { p: "Uszkodzenie terminatora w sieci CAN spowoduje, że rezystancja między CAN-H i CAN-L wyniesie około", o: ["120 Ω", "60 Ω", "0 Ω", "1 MΩ"], k: 0, w: "Pozostanie jeden rezystor 120 Ω." },
    { p: "Napięcie szczytowe na uzwojeniu wtórnym cewki zapłonowej osiąga", o: ["kilkadziesiąt kilowoltów", "12 V", "230 V", "5 V"], k: 0, w: "Dlatego przy pracującym silniku nie dotyka się przewodów zapłonowych." }
  ]);

  add("MOT.06", [
    { p: "Pierwsza okresowa kontrola techniczna nowego samochodu osobowego odbywa się przed upływem", o: ["3 lat od pierwszej rejestracji", "1 roku", "5 lat", "6 miesięcy"], k: 0, w: "Następna po 2 latach, potem co rok." },
    { p: "Część numeru VIN opisująca cechy pojazdu (6 znaków) to", o: ["VDS", "WMI", "VIS", "DOT"], k: 0, w: "VIS — numer seryjny, 8 znaków." },
    { p: "Naprawa kapitalna (główna) to naprawa", o: ["przywracająca pełną sprawność zespołu, np. silnika, z wymianą wielu części", "polegająca na wymianie żarówki", "wykonywana codziennie", "wyłącznie lakiernicza"], k: 0, w: "Jest najbardziej pracochłonna." },
    { p: "Robocizna 3 rbh × 150 zł, części 450 zł, materiały 20 zł netto. Wartość netto naprawy wynosi", o: ["920 zł", "470 zł", "1 131,60 zł", "450 zł"], k: 0, w: "450 + 450 + 20." },
    { p: "Zużyte akumulatory z warsztatu przekazuje się", o: ["uprawnionemu odbiorcy lub do punktu zbiórki", "do odpadów komunalnych", "do kanalizacji po rozcieńczeniu", "klientowi zawsze"], k: 0, w: "To odpad niebezpieczny zawierający ołów i kwas." },
    { p: "Kosztorys naprawy z polisy OC sprawcy sporządza zwykle", o: ["rzeczoznawca ubezpieczyciela lub serwis w systemie kalkulacyjnym", "policja", "Stacja Kontroli Pojazdów", "wydział komunikacji"], k: 0, w: "Na podstawie norm czasowych i cen części." },
    { p: "Kontrola jakości po naprawie układu hamulcowego obejmuje m.in.", o: ["jazdę próbną i sprawdzenie skuteczności hamowania", "tylko mycie auta", "wymianę oleju", "zmianę opon"], k: 0, w: "Bezpieczeństwo jest priorytetem." },
    { p: "Stanowisko z kanałem lub podnośnikiem służy przede wszystkim do", o: ["obsługi i napraw podwozia", "przyjęcia klienta", "rozliczeń", "przechowywania części"], k: 0, w: "Daje dostęp do spodu pojazdu." },
    { p: "Wskaźnik wykorzystania czasu pracy: 280 h sprzedanych przy 350 h dostępnych wynosi", o: ["80%", "125%", "70%", "35%"], k: 0, w: "280 ÷ 350 × 100%." },
    { p: "Ubezpieczenie Assistance zapewnia m.in.", o: ["holowanie i pomoc drogową", "obowiązkową ochronę sprawcy wypadku", "zwrot podatku VAT", "badanie techniczne"], k: 0, w: "Jest ubezpieczeniem dobrowolnym." }
  ]);

  add("ELE.05", [
    { p: "Dokumentacja techniczno-ruchowa urządzenia oznaczana jest skrótem", o: ["DTR", "BHP", "SEP", "PPOŻ"], k: 0, w: "Zawiera dane, zasady obsługi i konserwacji." },
    { p: "Podczas pomiaru rezystancji izolacji uzwojeń silnika na tabliczce zaciskowej należy", o: ["odłączyć zasilanie i rozłączyć mostki przy pomiarze między fazami", "pozostawić silnik pod napięciem", "zewrzeć przewód PE z fazą", "uruchomić silnik"], k: 0, w: "Pomiar wykonuje się na odłączonym obiekcie." },
    { p: "Przekaźnik termobimetalowy chroni silnik przed", o: ["przeciążeniem", "zwarciem doziemnym w ułamku sekundy", "przepięciem atmosferycznym", "zanikiem zasilania sterowania"], k: 0, w: "Zwarcie wyłącza wyłącznik lub bezpieczniki." },
    { p: "Kompensacja indywidualna mocy biernej polega na", o: ["podłączeniu kondensatora bezpośrednio przy odbiorniku", "jednej baterii w rozdzielnicy głównej", "wymianie transformatora", "wyłączeniu silników"], k: 0, w: "Kompensacja centralna — w rozdzielnicy głównej." },
    { p: "Moc pozorna odbiornika jednofazowego 230 V pobierającego 10 A wynosi", o: ["2,3 kVA", "23 kVA", "230 VA", "4 kVA"], k: 0, w: "S = U × I." },
    { p: "Odbiornik o mocy czynnej 4 kW i mocy pozornej 5 kVA ma współczynnik mocy", o: ["0,8", "1,25", "0,4", "1"], k: 0, w: "cos φ = P ÷ S." },
    { p: "Silnik wysokiej sprawności w porównaniu ze standardowym", o: ["zużywa mniej energii przy tej samej mocy na wale", "zawsze jest mniejszy", "nie wymaga zabezpieczeń", "pracuje tylko z falownikiem"], k: 0, w: "Mniejsze straty w uzwojeniach i rdzeniu." },
    { p: "Średni czas naprawy urządzenia to wskaźnik", o: ["MTTR", "MTBF", "IP", "RCD"], k: 0, w: "Mean Time To Repair." },
    { p: "Przyrząd do bezdotykowego pomiaru prędkości obrotowej wału to", o: ["tachometr (np. optyczny)", "luksomierz", "megaomomierz", "miernik pętli zwarcia"], k: 0, w: "Wykorzystuje znacznik odblaskowy na wale." },
    { p: "Oznaczenie IP54 silnika informuje o ochronie przed", o: ["pyłem (ograniczona) i bryzgami wody", "zanurzeniem trwałym", "tylko dotykiem palcem", "żadnymi czynnikami"], k: 0, w: "5 — ochrona pyłowa, 4 — bryzgi z każdej strony." }
  ]);

  add("ELM.02", [
    { p: "Tranzystor bipolarny ma wyprowadzenia", o: ["baza, emiter, kolektor", "bramka, dren, źródło", "anoda, katoda", "plus, minus, masa"], k: 0, w: "Bramka, dren, źródło — tranzystor polowy." },
    { p: "Prąd bazy 0,1 mA, wzmocnienie β = 200. Prąd kolektora wynosi", o: ["20 mA", "2 mA", "200 mA", "0,5 mA"], k: 0, w: "IC = β × IB." },
    { p: "Wzmocnienie wzmacniacza odwracającego z R1 = 2 kΩ i R2 = 20 kΩ wynosi", o: ["−10", "10", "11", "−0,1"], k: 0, w: "k = −R2 ÷ R1." },
    { p: "Częstotliwość graniczna filtru RC (R = 1 kΩ, C = 1 µF) wynosi około", o: ["159 Hz", "1 kHz", "16 Hz", "1,59 kHz"], k: 0, w: "f = 1 ÷ (2π × 1000 × 0,000001)." },
    { p: "Bramka NOR przy obu wejściach równych 0 daje na wyjściu", o: ["1", "0", "stan nieokreślony", "stan wysokiej impedancji"], k: 0, w: "NOR = zanegowane OR." },
    { p: "Przerzutnik typu D zapamiętuje", o: ["stan wejścia D w chwili zbocza zegara", "sumę wejść", "tylko stan 0", "napięcie analogowe"], k: 0, w: "Stosowany w rejestrach." },
    { p: "Oznaczenie kondensatora 472 to pojemność", o: ["4,7 nF", "472 pF", "47 nF", "4,7 µF"], k: 0, w: "47 × 10² pF = 4 700 pF." },
    { p: "W systemie CCTV rejestratorem dla kamer IP jest", o: ["NVR", "DVR analogowy wyłącznie", "multiswitch", "centrala alarmowa"], k: 0, w: "Network Video Recorder." },
    { p: "Urządzenie rozdzielające sygnał satelitarny z konwertera do wielu odbiorników to", o: ["multiswitch", "wzmacniacz audio", "zasilacz buforowy", "stabilizator 7805"], k: 0, w: "Pozwala każdemu odbiornikowi wybierać dowolny transponder." },
    { p: "Zimny lut najczęściej powstaje, gdy", o: ["miejsce lutowania jest za słabo nagrzane lub element poruszy się w czasie stygnięcia", "użyje się topnika", "grot jest czysty", "lut jest błyszczący"], k: 0, w: "Połączenie jest wtedy niepewne mechanicznie i elektrycznie." }
  ]);

  add("ELM.03", [
    { p: "Ciśnienie 6 bar odpowiada około", o: ["0,6 MPa", "6 MPa", "60 kPa", "0,06 MPa"], k: 0, w: "1 bar = 0,1 MPa." },
    { p: "Zawór 5/3 ma w położeniu środkowym", o: ["trzecie położenie (np. zamknięte, odpowietrzone lub pod ciśnieniem)", "dwa wyjścia zawsze otwarte na stałe bez zmiany", "brak przyłączy", "tylko sterowanie ręczne"], k: 0, w: "Pozwala zatrzymać siłownik w pozycji pośredniej." },
    { p: "Tłumik na odpowietrzeniu zaworu pneumatycznego służy do", o: ["ograniczenia hałasu wylotu powietrza", "zwiększenia ciśnienia", "smarowania", "regulacji siły"], k: 0, w: "Niektóre tłumiki mają też funkcję dławienia." },
    { p: "Pompa hydrauliczna zamienia energię mechaniczną na", o: ["energię ciśnienia cieczy", "energię elektryczną", "ciepło jako cel", "energię sprężonego powietrza"], k: 0, w: "Silnik hydrauliczny wykonuje przemianę odwrotną." },
    { p: "Czujnik wykrywający przedmiot z tworzywa sztucznego bez kontaktu to czujnik", o: ["pojemnościowy", "indukcyjny", "kontaktronowy", "Halla"], k: 0, w: "Indukcyjny reaguje tylko na metale." },
    { p: "Przekładnia pasowa z kołem napędzającym Ø100 mm i napędzanym Ø200 mm przy n1 = 1 400 obr/min daje n2", o: ["700 obr/min", "2 800 obr/min", "1 400 obr/min", "350 obr/min"], k: 0, w: "n2 = n1 × D1 ÷ D2." },
    { p: "Pasowanie, w którym zawsze występuje wcisk, to pasowanie", o: ["ciasne", "luźne", "mieszane", "suwliwe"], k: 0, w: "Mieszane może dawać luz lub wcisk." },
    { p: "Suwmiarka z noniuszem 0,02 mm pozwala odczytać wymiar z dokładnością", o: ["0,02 mm", "0,2 mm", "1 mm", "0,002 mm"], k: 0, w: "Mikrometr — 0,01 mm." },
    { p: "Enkoder inkrementalny dostarcza informacji o", o: ["przyroście położenia i prędkości (impulsy)", "temperaturze uzwojenia", "ciśnieniu", "napięciu sieci"], k: 0, w: "Absolutny podaje położenie bezwzględne." },
    { p: "Sygnalizacja zadziałania czujnika kontaktronowego na siłowniku to zwykle", o: ["zapalenie się diody LED w czujniku", "dźwięk syreny", "spadek ciśnienia", "zmiana koloru przewodu"], k: 0, w: "Ułatwia ustawienie czujnika." }
  ]);

  add("ELM.06", [
    { p: "Wyjście tranzystorowe sterownika PLC w porównaniu z przekaźnikowym", o: ["pozwala na szybsze przełączanie, ale tylko prądu stałego", "przełącza prąd przemienny 230 V", "ma ograniczoną trwałość mechaniczną styków", "nie wymaga zasilania"], k: 0, w: "Przekaźnik przełącza AC i DC, ale wolniej." },
    { p: "Sygnał analogowy napięciowy w automatyce ma zwykle zakres", o: ["0–10 V", "0–230 V", "100–200 V", "−400 do 400 V"], k: 0, w: "Prądowy — 4–20 mA." },
    { p: "Timer impulsowy, dający na wyjściu impuls o stałym czasie, to", o: ["TP", "TON", "TOF", "CTU"], k: 0, w: "Pulse timer." },
    { p: "Licznik CTU z PV = 5 ustawi wyjście Q po", o: ["5 impulsach na wejściu CU", "5 sekundach", "5 cyklach programu", "wyłączeniu zasilania"], k: 0, w: "Wyjście Q = 1, gdy CV ≥ PV." },
    { p: "Graficzny język programowania z blokami funkcyjnymi łączonymi liniami to", o: ["FBD", "ST", "IL", "SFC"], k: 0, w: "Function Block Diagram." },
    { p: "Połączenie urządzeń w sieci Modbus RTU opiera się na zasadzie", o: ["master–slave (klient–serwer)", "każdy z każdym bez adresów", "token ring", "bez adresowania"], k: 0, w: "Urządzenia podrzędne mają adresy 1–247." },
    { p: "Kurtyna świetlna przy maszynie służy do", o: ["zatrzymania niebezpiecznego ruchu, gdy człowiek wejdzie w strefę", "oświetlenia stanowiska", "pomiaru detali", "liczenia sztuk na taśmie jako jedyna funkcja"], k: 0, w: "To element obwodu bezpieczeństwa." },
    { p: "Panel uczący robota przemysłowego to", o: ["teach pendant", "HMI biurowe", "falownik", "enkoder"], k: 0, w: "Służy do ręcznego prowadzenia robota i zapisu punktów." },
    { p: "Przed zmianą programu w sterowniku pracującej maszyny należy przede wszystkim", o: ["wykonać kopię zapasową programu", "wyłączyć wszystkie zabezpieczenia", "usunąć stary program bez kopii", "zmienić adresy wejść"], k: 0, w: "Umożliwia powrót do działającej wersji." },
    { p: "System nadzoru i akwizycji danych z wielu sterowników to", o: ["SCADA", "LD", "CAN", "OEE"], k: 0, w: "Wizualizuje proces i archiwizuje dane." }
  ]);

  add("MEC.03", [
    { p: "Linia ciągła cienka na rysunku technicznym służy m.in. do", o: ["rysowania linii wymiarowych i kreskowania przekrojów", "krawędzi widocznych", "osi symetrii", "krawędzi niewidocznych"], k: 0, w: "Krawędzie widoczne — linia ciągła gruba." },
    { p: "Oznaczenie R5 na rysunku to", o: ["promień 5 mm", "średnica 5 mm", "gwint 5 mm", "chropowatość 5 µm"], k: 0, w: "Średnicę oznacza się Ø." },
    { p: "Pasowanie H7/s6 jest pasowaniem", o: ["ciasnym", "luźnym", "mieszanym", "suwliwym"], k: 0, w: "Wymaga wtłaczania lub montażu skurczowego." },
    { p: "Łożysko kulkowe zwykłe przenosi przede wszystkim obciążenia", o: ["promieniowe i niewielkie osiowe", "tylko osiowe", "wyłącznie udarowe", "żadne"], k: 0, w: "Do dużych obciążeń osiowych — łożyska wzdłużne." },
    { p: "Połączenie wielowypustowe stosuje się, gdy trzeba", o: ["przenieść duży moment z możliwością przesuwu piasty wzdłuż wału", "połączyć dwie blachy na stałe", "uszczelnić wał", "zmierzyć wał"], k: 0, w: "Np. w skrzyniach biegów." },
    { p: "Sprzęgło umożliwiające rozłączanie wałów w czasie ruchu to sprzęgło", o: ["cierne", "sztywne tulejowe", "kołnierzowe", "łubkowe"], k: 0, w: "Np. sprzęgło samochodowe." },
    { p: "Rodzaj zużycia polegający na sczepianiu się powierzchni przy braku smarowania to", o: ["zatarcie (zużycie adhezyjne)", "korozja", "pitting", "erozja"], k: 0, w: "Prowadzi do uszkodzenia współpracujących elementów." },
    { p: "Karta smarowania maszyny określa", o: ["punkty smarowania, rodzaj środka i częstotliwość", "wynagrodzenie operatora", "cenę maszyny", "kolor obudowy"], k: 0, w: "Jest częścią dokumentacji eksploatacyjnej." },
    { p: "Klucz dynamometryczny służy do", o: ["dokręcania z określonym momentem", "pomiaru średnicy", "wybijania łożysk", "cięcia śrub"], k: 0, w: "Zapewnia właściwe napięcie połączenia." },
    { p: "Przyczyną przegrzewania się łożyska może być", o: ["nadmiar lub brak smaru", "prawidłowy luz", "czyste uszczelnienie", "właściwa współosiowość"], k: 0, w: "Także zbyt ciasne pasowanie." }
  ]);

  add("MEC.05", [
    { p: "Narzędzie do obróbki otworów zwiększające ich dokładność i gładkość to", o: ["rozwiertak", "frez czołowy", "nóż do gwintów zewnętrznych", "ściernica tarczowa do cięcia"], k: 0, w: "Rozwiercanie wykonuje się po wierceniu." },
    { p: "Frezowanie współbieżne to frezowanie, w którym", o: ["kierunek ruchu ostrza jest zgodny z kierunkiem posuwu", "kierunki są przeciwne", "przedmiot się obraca", "nie ma posuwu"], k: 0, w: "Daje lepszą powierzchnię, wymaga sztywnej maszyny." },
    { p: "Głębokość skrawania oznacza się symbolem", o: ["ap", "vc", "f", "n"], k: 0, w: "vc — prędkość skrawania, f — posuw." },
    { p: "Do obróbki aluminium stosuje się zwykle", o: ["większe prędkości skrawania niż dla stali", "mniejsze prędkości niż dla stali hartowanej", "wyłącznie szlifowanie", "bez chłodzenia zawsze wiercenie ręczne"], k: 0, w: "Aluminium jest miękkie i dobrze skrawalne." },
    { p: "Kod M08 włącza", o: ["chłodziwo", "obroty wrzeciona", "zmianę narzędzia", "koniec programu"], k: 0, w: "M09 wyłącza chłodziwo." },
    { p: "Programowanie przyrostowe (od ostatniego punktu) włącza kod", o: ["G91", "G90", "G00", "G41"], k: 0, w: "G90 — absolutne." },
    { p: "Kod G03 oznacza", o: ["interpolację kołową przeciwnie do ruchu wskazówek zegara", "ruch szybki", "interpolację liniową", "korekcję prawą"], k: 0, w: "G02 — zgodnie z ruchem wskazówek." },
    { p: "Adres F w programie CNC określa", o: ["posuw", "obroty", "numer narzędzia", "numer bloku"], k: 0, w: "S — obroty, T — narzędzie, N — numer bloku." },
    { p: "Wióry z obrabiarki usuwa się", o: ["haczykiem lub szczotką po zatrzymaniu maszyny", "dłonią w czasie pracy", "sprężonym powietrzem w twarz", "rękawicą w czasie obrotów"], k: 0, w: "Wióry są ostre i gorące." },
    { p: "Drgania podczas toczenia długiego wałka można ograniczyć przez", o: ["użycie podtrzymki i zmniejszenie wysięgu", "zwiększenie głębokości skrawania", "usunięcie kła", "tępe narzędzie"], k: 0, w: "Zwiększa to sztywność układu." }
  ]);

  add("MEC.08", [
    { p: "Średnica otworu pod gwint M6 wynosi", o: ["5 mm", "6 mm", "4,2 mm", "5,5 mm"], k: 0, w: "6 − 1,0 = 5 mm." },
    { p: "Średnica otworu pod gwint M12 wynosi", o: ["10,2 mm", "12 mm", "11 mm", "9,5 mm"], k: 0, w: "12 − 1,75 = 10,25 ≈ 10,2 mm." },
    { p: "Pogłębianie stożkowe wykonuje się pod", o: ["łby wkrętów stożkowych", "nakrętki sześciokątne", "kołki walcowe", "nity zrywalne"], k: 0, w: "Łeb chowa się równo z powierzchnią." },
    { p: "Do cięcia blachy po linii krzywej stosuje się", o: ["nożyce do blachy (np. lewe/prawe)", "przecinak płaski", "pilnik zdzierak", "rozwiertak"], k: 0, w: "Nożyce ręczne lub wyrzynarkę." },
    { p: "Przy cięciu szlifierką kątową należy", o: ["używać osłony tarczy i okularów ochronnych", "zdjąć osłonę dla lepszej widoczności", "trzymać przedmiot w ręce", "używać tarczy pękniętej"], k: 0, w: "Tarcza może pęknąć przy dużej prędkości." },
    { p: "Metoda spawania elektrodą otuloną to", o: ["MMA (111)", "TIG (141)", "MAG (135)", "gazowa (311)"], k: 0, w: "Najprostsza w warunkach warsztatowych i terenowych." },
    { p: "Przy spawaniu łukowym oczy chroni się", o: ["przyłbicą z filtrem spawalniczym", "okularami przeciwsłonecznymi", "zwykłymi okularami korekcyjnymi", "nie trzeba chronić oczu"], k: 0, w: "Łuk emituje silne promieniowanie UV i IR." },
    { p: "Wyżarzanie odprężające stosuje się w celu", o: ["usunięcia naprężeń własnych, np. po spawaniu", "maksymalnego zwiększenia twardości", "nawęglenia powierzchni", "pomalowania elementu"], k: 0, w: "Przeprowadza się je w niższej temperaturze." },
    { p: "Utwardzenie warstwy powierzchniowej przez nasycenie węglem to", o: ["nawęglanie", "odpuszczanie", "normalizowanie", "wyżarzanie zupełne"], k: 0, w: "Po nawęglaniu stosuje się hartowanie." },
    { p: "Do mocowania w imadle przedmiotu o obrobionych powierzchniach stosuje się", o: ["nakładki z miękkiego metalu na szczęki", "dodatkowy klin stalowy", "smar", "papier ścierny"], k: 0, w: "Chronią powierzchnię przed odciskami." }
  ]);

  add("MEC.09", [
    { p: "Najmniejsza część operacji wykonywana jednym narzędziem na jednej powierzchni przy stałych parametrach to", o: ["zabieg", "operacja", "proces", "partia"], k: 0, w: "Zabieg może składać się z kilku przejść." },
    { p: "Czas, w którym następuje bezpośrednia zmiana kształtu przedmiotu (np. skrawanie), to czas", o: ["główny (maszynowy)", "pomocniczy", "uzupełniający", "przygotowawczo-zakończeniowy"], k: 0, w: "Pomocniczy — np. mocowanie przedmiotu." },
    { p: "tpz = 60 min, partia 120 szt. Udział czasu tpz na jedną sztukę wynosi", o: ["0,5 min", "2 min", "60 min", "7 200 min"], k: 0, w: "60 ÷ 120 = 0,5 min." },
    { p: "Czas dostępny stanowiska 480 min, czas jednostkowy 6 min. Zdolność produkcyjna wynosi", o: ["80 szt.", "2 880 szt.", "48 szt.", "6 szt."], k: 0, w: "480 ÷ 6 = 80." },
    { p: "Japońska koncepcja ciągłego doskonalenia małymi krokami to", o: ["kaizen", "kanban", "SMED", "poka-yoke"], k: 0, w: "Angażuje wszystkich pracowników." },
    { p: "5S to metoda organizacji stanowiska obejmująca m.in.", o: ["sortowanie, systematykę, sprzątanie, standaryzację, samodyscyplinę", "pięć stref bezpieczeństwa", "pięć zmian roboczych", "pięć rodzajów kontroli"], k: 0, w: "Podstawa Lean manufacturing." },
    { p: "Utrzymanie ruchu z udziałem operatorów w codziennych przeglądach maszyn to", o: ["TPM", "MRP", "CAD", "FMEA"], k: 0, w: "Total Productive Maintenance." },
    { p: "Na karcie kontrolnej SPC punkt poza górną granicą kontrolną oznacza", o: ["sygnał, że proces może być rozregulowany", "idealny wynik", "brak potrzeby reakcji", "koniec produkcji"], k: 0, w: "Należy zbadać przyczynę specjalną." },
    { p: "Koszty wydziałowe rozlicza się na wyroby najczęściej za pomocą", o: ["narzutu (np. % od robocizny bezpośredniej)", "faktury od klienta", "ceny sprzedaży", "VAT"], k: 0, w: "Są to koszty pośrednie." },
    { p: "Norma dotycząca systemu zarządzania bezpieczeństwem i higieną pracy to", o: ["ISO 45001", "ISO 9001", "ISO 14001", "ISO 22000"], k: 0, w: "ISO 22000 — bezpieczeństwo żywności." }
  ]);
})(window.KURSY);
