/* Dodatkowe pytania (część 2) - dopisywane na końcu banków */
window.KURSY = window.KURSY || {};
(function (K) {
  function add(kod, lista) { if (K[kod]) K[kod].pytania = K[kod].pytania.concat(lista); }

  add("INF.07", [
    { p: "Element szafy rack służący do porządkowania kabli krosowych to", o: ["organizer kabli", "panel krosowy", "listwa zasilająca", "półka wentylacyjna"], k: 0, w: "Ułatwia utrzymanie porządku i opis połączeń." },
    { p: "Złącze światłowodowe o małym rozmiarze, popularne w przełącznikach z modułami SFP, to", o: ["LC", "SC", "ST", "RJ-11"], k: 0, w: "SC i ST są większe." },
    { p: "Moduł wkładany do gniazda przełącznika, zmieniający rodzaj interfejsu (np. na światłowód), to", o: ["SFP", "PoE injector", "keystone", "balun"], k: 0, w: "Small Form-factor Pluggable." },
    { p: "Polecenie Cisco IOS wyłączające port przełącznika to", o: ["shutdown", "no shutdown", "disable", "erase"], k: 0, w: "no shutdown włącza port." },
    { p: "Adres używany do zdalnego zarządzania przełącznikiem warstwy 2 konfiguruje się na", o: ["interfejsie VLAN (SVI)", "porcie trunk", "porcie konsoli", "każdym porcie fizycznym"], k: 0, w: "Np. interface vlan 1 i ip address." }
  ]);

  add("INF.08", [
    { p: "W technologii ADSL prędkość pobierania jest", o: ["większa niż prędkość wysyłania", "równa prędkości wysyłania", "mniejsza niż prędkość wysyłania", "zawsze 1 Gb/s"], k: 0, w: "A - asymetryczny." },
    { p: "Element sieci GPON dzielący sygnał optyczny na wielu abonentów bez zasilania to", o: ["splitter pasywny", "router", "przełącznik zarządzalny", "wzmacniacz EDFA zawsze"], k: 0, w: "Stąd nazwa: pasywna sieć optyczna." },
    { p: "Odległość administracyjna OSPF wynosi domyślnie", o: ["110", "120", "90", "1"], k: 0, w: "RIP - 120, EIGRP - 90." },
    { p: "Router wybiera trasę o", o: ["najdłuższym dopasowaniu prefiksu", "najkrótszym prefiksie", "największej odległości administracyjnej", "najstarszym wpisie"], k: 0, w: "Np. /24 ma pierwszeństwo przed /16 dla pasującego adresu." },
    { p: "Protokół służący do zdalnego, szyfrowanego zarządzania routerem to", o: ["SSH", "Telnet", "TFTP", "HTTP"], k: 0, w: "Telnet przesyła dane jawnym tekstem." }
  ]);

  add("EKA.01", [
    { p: "Organem wykonawczym powiatu jest", o: ["zarząd powiatu", "rada powiatu", "wojewoda", "wójt"], k: 0, w: "Przewodniczy mu starosta." },
    { p: "Decyzja, od której nie przysługuje odwołanie w administracyjnym toku instancji, to decyzja", o: ["ostateczna", "nieważna", "wstępna", "warunkowa"], k: 0, w: "Można ją zaskarżyć do sądu administracyjnego." },
    { p: "Wznowienie postępowania i stwierdzenie nieważności decyzji to", o: ["tryby nadzwyczajne", "zwykłe odwołania", "ponaglenia", "zażalenia"], k: 0, w: "Dotyczą decyzji ostatecznych." },
    { p: "Dowód osobisty z warstwą elektroniczną umożliwia złożenie", o: ["podpisu osobistego", "podpisu notarialnego", "podpisu kwalifikowanego bez certyfikatu", "pieczęci urzędu"], k: 0, w: "Podpis osobisty ma skutek formy dokumentowej wobec urzędów." },
    { p: "Zasada, zgodnie z którą organ powinien wyjaśnić stronie przesłanki rozstrzygnięcia, to zasada", o: ["przekonywania", "dwuinstancyjności", "pisemności", "trwałości"], k: 0, w: "Ma ograniczyć potrzebę stosowania środków przymusu." }
  ]);

  add("HAN.02", [
    { p: "Badanie przeprowadzane przez internet za pomocą ankiety online to metoda", o: ["CAWI", "CATI", "IDI", "PAPI"], k: 0, w: "CATI - telefonicznie, PAPI - papierowo." },
    { p: "Skonto 2% od kwoty 10 000 zł przy zapłacie w terminie skonta wynosi", o: ["200 zł", "20 zł", "2 000 zł", "980 zł"], k: 0, w: "Do zapłaty 9 800 zł." },
    { p: "Inkaso dokumentowe polega na tym, że", o: ["bank wydaje kupującemu dokumenty po zapłacie lub akceptacji weksla", "sprzedawca otrzymuje zaliczkę", "kupujący płaci gotówką kierowcy", "bank udziela kredytu konsumenckiego"], k: 0, w: "Bank nie gwarantuje zapłaty (w odróżnieniu od akredytywy)." },
    { p: "Sprzedaż w modelu C2C to sprzedaż", o: ["między konsumentami", "firmy do konsumenta", "między firmami", "firmy do administracji"], k: 0, w: "Np. portale ogłoszeniowe." },
    { p: "Wskaźnik rentowności sprzedaży przy zysku 40 000 zł i przychodach 800 000 zł wynosi", o: ["5%", "20%", "0,5%", "50%"], k: 0, w: "40 000 ÷ 800 000 × 100%." }
  ]);

  add("HGT.01", [
    { p: "Naperon to", o: ["mniejszy obrus ozdobny lub ochronny kładziony na obrus", "podkład wygłuszający", "serweta kelnerska", "rodzaj kieliszka"], k: 0, w: "Łatwo go wymienić bez zmiany całego obrusu." },
    { p: "Filiżankę z kawą stawia się przed gościem", o: ["z uchem skierowanym w prawo, łyżeczka na spodku", "z uchem w lewo", "bez spodka", "łyżeczką w filiżance"], k: 0, w: "Ułatwia to chwycenie filiżanki prawą ręką." },
    { p: "Miarka barmańska do odmierzania alkoholu to", o: ["jigger", "shaker", "strainer", "bar spoon"], k: 0, w: "Strainer - sitko, bar spoon - łyżka barmańska." },
    { p: "Podczas bankietu zasiadanego jeden kelner obsługuje zwykle", o: ["8-12 gości", "50 gości", "2 gości", "100 gości"], k: 0, w: "Zależy od standardu i liczby dań." },
    { p: "Cappuccino przygotowuje się z", o: ["espresso i spienionego mleka", "kawy rozpuszczalnej i śmietany", "espresso i wody", "kawy parzonej z cukrem"], k: 0, w: "Latte macchiato podaje się w wysokiej szklance." },
    { p: "Kieliszek do czerwonego wina jest w porównaniu z kieliszkiem do białego", o: ["większy, o szerszej czaszy", "mniejszy", "taki sam", "bez nóżki"], k: 0, w: "Czerwone wino potrzebuje kontaktu z powietrzem." },
    { p: "Garden party to przyjęcie", o: ["w ogrodzie, na świeżym powietrzu", "w sali bankietowej przy stołach okrągłych", "koktajlowe w nocnym klubie", "wyłącznie śniadaniowe"], k: 0, w: "Zwykle w ciepłej porze roku." }
  ]);

  add("HGT.03", [
    { p: "Domy wycieczkowe i schroniska młodzieżowe kategoryzuje się w skali", o: ["I-III", "1-5 gwiazdek", "A-C", "1-10"], k: 0, w: "Hotele i motele - gwiazdki." },
    { p: "Śniadanie angielskie zawiera, w odróżnieniu od kontynentalnego,", o: ["dania na ciepło, np. jajka, bekon, kiełbaski", "tylko pieczywo i dżem", "wyłącznie owoce", "tylko napoje"], k: 0, w: "Często też fasolkę i grillowane pomidory." },
    { p: "Pranie i prasowanie odzieży gościa realizuje się na podstawie", o: ["formularza zlecenia z cennikiem", "ustnej prośby bez zapisu", "karty meldunkowej", "rachunku minibaru"], k: 0, w: "Formularz zabezpiecza hotel i gościa." },
    { p: "Kolor ściereczek do mebli i powierzchni w pokoju w popularnym systemie kodowania to", o: ["niebieski", "czerwony", "żółty", "czarny"], k: 0, w: "Czerwony - WC, żółty - umywalki i armatura." },
    { p: "Sprzątanie gruntowne obejmuje m.in.", o: ["mycie okien i pranie zasłon", "tylko ścielenie łóżka", "wymianę ręczników na życzenie", "uzupełnienie kosmetyków"], k: 0, w: "Wykonuje się je okresowo." },
    { p: "Pokój po sprzątaniu i kontroli przełożonej zgłasza się do recepcji jako", o: ["czysty i sprawdzony, gotowy do sprzedaży", "zajęty", "wyłączony z eksploatacji", "w trakcie remontu"], k: 0, w: "Recepcja może go przydzielić nowemu gościowi." },
    { p: "Zawieszka na klamce, którą gość zamawia śniadanie do pokoju, służy działowi", o: ["room service", "technicznemu", "kadr", "rezerwacji grupowych"], k: 0, w: "Gość zaznacza godzinę i potrawy." },
    { p: "Kosmetyki w łazience uzupełnia się", o: ["zgodnie ze standardem obiektu", "tylko po wyjeździe gościa raz na tydzień", "nigdy", "tylko w apartamentach"], k: 0, w: "Standard określa ilość i rodzaj." }
  ]);

  add("HGT.06", [
    { p: "Plan wyżywienia FB oznacza", o: ["pełne wyżywienie (trzy posiłki)", "tylko śniadanie", "śniadanie i obiadokolację", "tylko nocleg"], k: 0, w: "Full board." },
    { p: "Wcześniejsze niż standardowe zameldowanie to", o: ["early check-in", "late check-out", "no-show", "walk-in"], k: 0, w: "Zależy od dostępności pokoju." },
    { p: "Rachunek gościa w systemie hotelowym, na który księguje się usługi, to", o: ["folio", "voucher", "rooming list", "karta meldunkowa"], k: 0, w: "Na wymeldowaniu folio zamyka się płatnością." },
    { p: "Portal pośredniczący w sprzedaży noclegów online za prowizję to", o: ["OTA", "PMS", "POS", "GDS lotniczy wyłącznie"], k: 0, w: "Online Travel Agency." },
    { p: "Termin, do którego organizator grupy musi potwierdzić liczbę zarezerwowanych pokoi, to", o: ["termin opcji", "okres karencji", "doba hotelowa", "termin no-show"], k: 0, w: "Po nim niewykorzystane pokoje wracają do sprzedaży." },
    { p: "Hotel 50 pokoi, obłożenie 80%, ADR 250 zł. RevPAR wynosi", o: ["200 zł", "250 zł", "312,50 zł", "40 zł"], k: 0, w: "RevPAR = ADR × obłożenie." },
    { p: "Podczas wymeldowania przed wystawieniem rachunku należy sprawdzić", o: ["minibar i usługi dodatkowe", "kartę meldunkową następnego gościa", "grafik pokojowych", "stan magazynu"], k: 0, w: "Aby rachunek był kompletny." },
    { p: "Reklamację gościa recepcjonista powinien najpierw", o: ["wysłuchać i przeprosić", "zignorować", "przekazać do księgowości", "od razu odmówić"], k: 0, w: "Potem szuka rozwiązania lub przekazuje przełożonemu." }
  ]);

  add("HGT.07", [
    { p: "Osoba prowadząca zwiedzanie i przekazująca wiedzę o danym obiekcie lub mieście to", o: ["przewodnik turystyczny", "pilot wycieczek", "rezydent", "kierowca autokaru"], k: 0, w: "Pilot opiekuje się grupą w trakcie podróży." },
    { p: "Przedstawiciel biura podróży stale przebywający w miejscowości wypoczynkowej i opiekujący się klientami to", o: ["rezydent", "przewodnik górski", "agent ubezpieczeniowy", "animator hotelu"], k: 0, w: "Pomaga w sprawach organizacyjnych i reklamacjach." },
    { p: "Ubezpieczenie od następstw nieszczęśliwych wypadków oznacza się skrótem", o: ["NNW", "KL", "OC", "AC"], k: 0, w: "Wypłaca świadczenie za trwały uszczerbek na zdrowiu." },
    { p: "Turystyka pielgrzymkowa należy do turystyki", o: ["religijnej", "kwalifikowanej", "biznesowej", "uzdrowiskowej"], k: 0, w: "Np. wyjazdy do Częstochowy, Rzymu." },
    { p: "Kosztem stałym imprezy jest", o: ["wynajem autokaru", "bilet wstępu uczestnika", "obiad uczestnika", "ubezpieczenie NNW uczestnika"], k: 0, w: "Nie zależy od liczby uczestników." },
    { p: "Im więcej uczestników imprezy, tym koszt stały na osobę jest", o: ["mniejszy", "większy", "taki sam", "równy zero"], k: 0, w: "Koszt stały dzieli się na więcej osób." },
    { p: "Obiekty wpisane na listę światowego dziedzictwa przyznaje organizacja", o: ["UNESCO", "WHO", "NATO", "UEFA"], k: 0, w: "W Polsce m.in. Stare Miasto w Krakowie i Kopalnia Soli w Wieliczce." },
    { p: "Najwyżej położony polski park narodowy z najwyższym szczytem Polski to", o: ["Tatrzański Park Narodowy", "Białowieski Park Narodowy", "Słowiński Park Narodowy", "Kampinoski Park Narodowy"], k: 0, w: "Rysy - 2 499 m n.p.m." }
  ]);

  add("HGT.12", [
    { p: "Kolacja w pięciu posiłkach dziennie powinna dostarczać około", o: ["15-20% energii", "40% energii", "5% energii", "60% energii"], k: 0, w: "Najwięcej energii daje obiad." },
    { p: "Zalecany udział energii z tłuszczów w diecie dorosłego wynosi", o: ["20-35%", "5-10%", "50-60%", "70%"], k: 0, w: "Węglowodany 45-65%, białko 10-15%." },
    { p: "System cook-freeze różni się od cook-chill tym, że potrawy", o: ["zamraża się", "podaje od razu", "tylko schładza", "gotuje w próżni"], k: 0, w: "Wydłuża to okres przechowywania." },
    { p: "Narzut gastronomiczny 150% przy koszcie surowców 8 zł daje cenę netto", o: ["20 zł", "12 zł", "9,50 zł", "16 zł"], k: 0, w: "8 × 2,5 = 20 zł." },
    { p: "Cena netto 20 zł, VAT 8%. Cena brutto wynosi", o: ["21,60 zł", "24,60 zł", "20,80 zł", "28 zł"], k: 0, w: "20 × 1,08." },
    { p: "Raport żywieniowy w stołówce to dokument określający", o: ["zapotrzebowanie na surowce do produkcji danego dnia", "liczbę gości restauracji w roku", "zysk zakładu", "grafik pracowników"], k: 0, w: "Na jego podstawie wydaje się surowce z magazynu." },
    { p: "W ciągu technologicznym zakładu magazyn surowców sąsiaduje bezpośrednio z", o: ["pomieszczeniem obróbki wstępnej", "salą konsumencką", "zmywalnią naczyń stołowych", "szatnią gości"], k: 0, w: "Surowiec przechodzi kolejno przez etapy obróbki." },
    { p: "W żywieniu dzieci w szkołach ogranicza się przede wszystkim", o: ["cukier, sól i tłuszcze nasycone", "warzywa", "produkty pełnoziarniste", "wodę"], k: 0, w: "Wynika to z przepisów o żywności w szkołach." },
    { p: "Straty masy mięsa podczas obróbki cieplnej uwzględnia się, aby", o: ["porcja po obróbce miała właściwą gramaturę", "obniżyć VAT", "skrócić czas pracy", "zwiększyć zysk ze sprzedaży alkoholu"], k: 0, w: "Normy surowcowe przelicza się z masy po obróbce." },
    { p: "Napoje alkoholowe w lokalu gastronomicznym objęte są stawką VAT", o: ["23%", "8%", "5%", "0%"], k: 0, w: "Usługi gastronomiczne bez alkoholu - zwykle 8%." }
  ]);

  add("SPC.01", [
    { p: "Ciasto drożdżowe przygotowywane z rozczynem to metoda", o: ["dwufazowa", "jednofazowa", "na zimno bez drożdży", "parzona"], k: 0, w: "Najpierw rozczyn, potem ciasto właściwe." },
    { p: "Do ciasta biszkoptowego klasycznego nie dodaje się", o: ["tłuszczu", "jaj", "cukru", "mąki"], k: 0, w: "Spulchnia je piana z jaj." },
    { p: "Krem angielski podgrzewa się do temperatury około", o: ["82-84°C", "100°C", "60°C", "120°C"], k: 0, w: "Wyższa temperatura ścina żółtka." },
    { p: "Syrop cukrowy w temperaturze ok. 115°C daje próbę", o: ["kulki miękkiej", "karmelu", "nitki cienkiej", "twardego trzasku"], k: 0, w: "Karmel powstaje powyżej ok. 160°C." },
    { p: "Opadnięcie wyrobów drożdżowych w czasie pieczenia jest najczęściej skutkiem", o: ["przerośnięcia (zbyt długiego garowania)", "zbyt krótkiego wyrabiania mąki tortowej", "dodania soli", "pieczenia w formie"], k: 0, w: "Siatka glutenowa nie utrzymuje gazów." },
    { p: "Laminowane ciasto z drożdżami, z którego wypieka się croissanty, to ciasto", o: ["półfrancuskie (drożdżowe francuskie)", "parzone", "kruche", "piernikowe"], k: 0, w: "Łączy laminowanie z fermentacją." },
    { p: "Polewę z cukru i wody krystalizowaną do białej, gładkiej masy nazywa się", o: ["fondantem (pomadą)", "ganache", "karmelem", "marcepanem"], k: 0, w: "Ganache to krem z czekolady i śmietanki." },
    { p: "Masę z mielonych migdałów i cukru, używaną do dekoracji, to", o: ["marcepan", "fondant", "beza", "kruszonka"], k: 0, w: "Można z niej modelować figurki." }
  ]);
})(window.KURSY);
