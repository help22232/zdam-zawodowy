/* Podkursy: HGT.06, HGT.07, HGT.12, SPC.01 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("HGT.06", [
    {
      id: "rezerwacje", tytul: "Rezerwacje i ceny", opis: "Przyjmiesz, zmienisz i anulujesz rezerwację indywidualną oraz grupową, dobierając właściwą cenę i warunki.",
      lekcje: [
        { tytul: "Przyjęcie rezerwacji krok po kroku", tresc: `<h4>Dane, które musi zawierać rezerwacja</h4>
<p>Na egzaminie praktycznym najczęściej wypełnia się <b>kartę rezerwacji</b> lub formularz w systemie PMS. Brak jednego pola to utrata punktu, dlatego warto znać stały zestaw danych:</p>
<ul>
<li>imię i nazwisko gościa (osoby rezerwującej i, jeśli inna, osoby przyjeżdżającej),</li>
<li>data przyjazdu i wyjazdu oraz <b>liczba nocy</b> (wyjazd minus przyjazd, np. 12.05-15.05 to 3 noce),</li>
<li>liczba i typ pokoi (SGL, DBL, TWIN, TRPL, apartament), liczba osób dorosłych i dzieci (wiek dzieci wpływa na cenę),</li>
<li>plan wyżywienia (RO, BB, HB, FB, AI), cena za pokój lub osobę i warunki płatności,</li>
<li>sposób gwarancji (karta, przedpłata, zadatek, list gwarancyjny firmy), dane kontaktowe, uwagi specjalne,</li>
<li>imię osoby przyjmującej rezerwację, data przyjęcia i <b>numer rezerwacji</b>.</li>
</ul>
<h4>Typy pokoi: częste pułapki</h4>
<div class="tw"><table><tr><th>Skrót</th><th>Znaczenie</th></tr>
<tr><td>DBL</td><td>pokój dwuosobowy z jednym łóżkiem małżeńskim</td></tr>
<tr><td>TWIN</td><td>pokój dwuosobowy z dwoma osobnymi łóżkami</td></tr>
<tr><td>DBL for single use (DUS)</td><td>pokój dwuosobowy sprzedany jednej osobie, zwykle po niższej cenie niż DBL</td></tr>
<tr><td>Connecting rooms</td><td>dwa pokoje połączone wewnętrznymi drzwiami (np. dla rodziny)</td></tr>
<tr><td>Adjoining rooms</td><td>pokoje sąsiadujące, bez drzwi między sobą</td></tr></table></div>
<h4>Potwierdzenie i zmiany</h4>
<p>Rezerwację potwierdza się gościowi na piśmie (e-mail), podając wszystkie ustalenia, warunki anulacji i godziny doby hotelowej. Każda zmiana (data, liczba osób) wymaga aktualizacji w systemie i nowego potwierdzenia. Anulowana rezerwacja dostaje <b>numer anulacji</b>, który chroni obie strony przy sporze o opłatę.</p>
<h4>Grafik rezerwacji</h4>
<p>W zadaniach często trzeba wpisać rezerwację w <b>grafik (planer) rezerwacji</b>: wiersze to pokoje, kolumny to noce. Pokój zajmuje się od nocy przyjazdu do nocy poprzedzającej wyjazd, bo w dniu wyjazdu pokój jest już wolny na kolejną noc.</p>
<div class="tip">Policz noce, nie dni: pobyt od poniedziałku do czwartku to 3 noce, a w grafiku zaznaczasz poniedziałek, wtorek i środę.</div>` },
        { tytul: "Ceny pokoi i revenue management", tresc: `<h4>Rodzaje cen</h4>
<ul>
<li><b>Rack rate</b>: cena katalogowa, maksymalna, z cennika. Punkt odniesienia dla rabatów.</li>
<li><b>BAR</b> (best available rate): najlepsza dostępna cena danego dnia, zmienna zależnie od popytu.</li>
<li><b>Cena korporacyjna</b>: wynegocjowana z firmą w umowie, zwykle za stały wolumen noclegów rocznie.</li>
<li><b>Cena grupowa</b>: niższa cena za pokój przy rezerwacji kilku lub kilkunastu pokoi (najczęściej od 10 osób).</li>
<li><b>Cena pakietowa</b>: nocleg plus usługi (np. kolacja, SPA) w jednej cenie.</li>
<li><b>Cena bezzwrotna</b> (non-refundable): niższa, ale płatna z góry i bez zwrotu przy anulacji.</li>
</ul>
<h4>Revenue management</h4>
<p>To zarządzanie przychodem: sprzedaż właściwego pokoju właściwemu gościowi, we właściwym czasie, po właściwej cenie i właściwym kanałem. Narzędzia:</p>
<ul>
<li>zmiana cen w zależności od obłożenia i sezonu (ceny dynamiczne),</li>
<li>minimalna długość pobytu (MinLOS), np. w weekend majowy minimum 2 noce,</li>
<li>zamknięcie sprzedaży tańszych kategorii cenowych, gdy obłożenie rośnie (stop sale),</li>
<li>kontrolowany overbooking na podstawie statystyki anulacji i no-show.</li>
</ul>
<h4>Przykład obliczenia rachunku za pobyt</h4>
<p>Gość rezerwuje pokój DBL na 4 noce, cena 400 zł za dobę ze śniadaniem dla dwóch osób, rabat stałego gościa 10%. Należność za noclegi: 4 × 400 zł = 1600 zł, rabat 160 zł, do zapłaty 1440 zł brutto. Opłatę miejscową dolicza się osobno, bo nie jest częścią ceny pokoju.</p>
<h4>Dzieci i dostawki</h4>
<p>Hotele zwykle stosują progi wiekowe, np. dziecko do 3 lat gratis w łóżeczku, 4-12 lat 50% ceny dostawki. Zawsze czytaj cennik w treści zadania: egzamin sprawdza, czy zastosujesz warunki z cennika, a nie własne założenia.</p>
<div class="tip">Rabaty najpierw nalicza się od ceny pokoju, a dopiero potem dodaje się usługi dodatkowe, chyba że cennik mówi inaczej.</div>` },
        { tytul: "Gwarancje, anulacje i grupy", tresc: `<h4>Zadatek a zaliczka</h4>
<div class="tw"><table><tr><th>Cecha</th><th>Zadatek</th><th>Zaliczka</th></tr>
<tr><td>Podstawa</td><td>art. 394 Kodeksu cywilnego</td><td>umowa stron, brak osobnej regulacji</td></tr>
<tr><td>Gość rezygnuje z winy własnej</td><td>hotel zatrzymuje zadatek</td><td>zaliczka podlega zwrotowi (chyba że umowa przewiduje opłatę)</td></tr>
<tr><td>Hotel nie wykonuje umowy</td><td>gość może żądać zwrotu zadatku w podwójnej wysokości</td><td>zwrot zaliczki</td></tr>
<tr><td>Umowa wykonana</td><td>zalicza się na poczet ceny</td><td>zalicza się na poczet ceny</td></tr></table></div>
<h4>Warunki anulacji</h4>
<p>Hotel określa je w regulaminie lub potwierdzeniu, np. bezpłatna anulacja do 48 godzin przed przyjazdem, później opłata za pierwszą dobę. Przy rezerwacji gwarantowanej, gdy gość nie przyjedzie (<b>no-show</b>), hotel obciąża kartę zgodnie z tymi warunkami. Bez wcześniejszego poinformowania gościa o warunkach obciążenie jest nieuprawnione.</p>
<h4>Rezerwacja grupowa</h4>
<ol>
<li>Zapytanie od organizatora i <b>oferta</b> z cenami i terminem ważności.</li>
<li><b>Umowa</b> z terminem opcji (do kiedy organizator potwierdza liczbę pokoi) i terminem wpłat.</li>
<li><b>Allotment</b>: pula pokoi zablokowana dla kontrahenta (np. biura podróży), którą może on sprzedawać do określonej daty (release date). Niesprzedane pokoje wracają do sprzedaży hotelu.</li>
<li><b>Rooming list</b>: lista gości z przydziałem do pokoi, przesyłana przed przyjazdem.</li>
<li>Przy grupie często stosuje się <b>pokój gratis</b> dla pilota lub co 21. osoby (np. 20 + 1) oraz wspólny rachunek główny (master bill) i rachunki indywidualne na dodatki.</li>
</ol>
<h4>Overbooking i walk-out</h4>
<p>Gdy zabraknie pokoju dla gościa z potwierdzoną rezerwacją, recepcja przenosi go do hotelu o tym samym lub wyższym standardzie, pokrywa koszt noclegu i transportu, przeprasza i zwykle oferuje rekompensatę. To <b>walk-out</b> (relokacja).</p>
<div class="tip">Na teście „zadatek” i „zaliczka” to klasyczna pułapka: tylko zadatek przepada przy rezygnacji gościa.</div>` }
      ],
      pytania: [
        Q("Gość rezerwuje pobyt od 10 do 14 lipca. Ile nocy należy zaznaczyć w grafiku rezerwacji?", "4", "5", "3", "6", "Noce: 10, 11, 12 i 13 lipca. 14 lipca gość wyjeżdża."),
        Q("Pokój dwuosobowy z dwoma osobnymi łóżkami to pokój typu", "TWIN", "DBL", "SGL", "DUS", "DBL ma jedno łóżko małżeńskie, TWIN dwa osobne."),
        Q("Pula pokoi zablokowana dla biura podróży do określonej daty zwolnienia to", "allotment", "rooming list", "walk-in", "upgrade", "Allotment to kontyngent pokoi, niesprzedany wraca do hotelu po release date."),
        Q("Gość, który wpłacił zadatek, rezygnuje z pobytu z własnej winy. Zgodnie z Kodeksem cywilnym hotel", "może zatrzymać zadatek", "musi zwrócić zadatek w podwójnej wysokości", "musi zwrócić zadatek w całości", "musi zwrócić połowę zadatku", "Art. 394 KC: strona, która nie wykonała umowy, traci zadatek."),
        Q("Najlepsza dostępna cena pokoju w danym dniu, zmieniająca się zależnie od popytu, to", "BAR", "rack rate", "cena korporacyjna", "cena grupowa", "BAR = best available rate."),
        Q("Relokacja gościa do innego hotelu z powodu braku pokoi wskutek overbookingu to", "walk-out", "walk-in", "no-show", "check-out", "Walk-out: hotel przenosi gościa i pokrywa koszty."),
        Q("Lista uczestników grupy z przydziałem do pokoi to", "rooming list", "allotment", "voucher", "master bill", "Rooming list przesyła organizator przed przyjazdem grupy."),
        Q("Ograniczenie, które wymaga od gościa rezerwacji co najmniej 2 nocy w długi weekend, to", "minimalna długość pobytu (MinLOS)", "stop sale", "release date", "late check-out", "MinLOS to narzędzie revenue management.")
      ]
    },
    {
      id: "pobyt", tytul: "Obsługa gościa w pobycie", opis: "Zameldujesz gościa, obsłużysz jego prośby i reklamacje oraz znasz odpowiedzialność hotelu za rzeczy gościa.",
      lekcje: [
        { tytul: "Obiekty hotelarskie i kategoryzacja", tresc: `<h4>Rodzaje obiektów hotelarskich</h4>
<p>Podstawą jest <b>ustawa o usługach hotelarskich oraz usługach pilotów wycieczek i przewodników turystycznych</b> i rozporządzenie w sprawie obiektów hotelarskich. Obiekty kategoryzowane:</p>
<div class="tw"><table><tr><th>Rodzaj</th><th>Kategorie</th><th>Cecha</th></tr>
<tr><td>Hotel</td><td>1-5 gwiazdek</td><td>co najmniej 10 pokoi, większość jedno- i dwuosobowych, szeroki zakres usług</td></tr>
<tr><td>Motel</td><td>1-5 gwiazdek</td><td>położony przy drodze, z parkingiem</td></tr>
<tr><td>Pensjonat</td><td>1-5 gwiazdek</td><td>co najmniej 7 pokoi, całodzienne wyżywienie</td></tr>
<tr><td>Kemping</td><td>1-4 gwiazdki</td><td>teren strzeżony, miejsca na namioty, przyczepy i domki</td></tr>
<tr><td>Dom wycieczkowy</td><td>kategorie I-III</td><td>co najmniej 30 miejsc, standard turystyczny</td></tr>
<tr><td>Schronisko, pole biwakowe</td><td>bez kategorii</td><td>schronisko co najmniej 15 miejsc</td></tr></table></div>
<p>Kategorię nadaje <b>marszałek województwa</b>, a ewidencję innych obiektów, w których świadczy się usługi hotelarskie (np. kwater prywatnych), prowadzi <b>wójt, burmistrz lub prezydent miasta</b>. Na egzaminie łatwo pomylić te dwa organy.</p>
<h4>Doba hotelowa</h4>
<p>Czas doby hotelowej określa regulamin obiektu (np. od 14:00 do 12:00). Gość musi znać te godziny przed przyjazdem, dlatego podaje się je w potwierdzeniu rezerwacji i przy zameldowaniu.</p>
<h4>Zameldowanie: co sprawdza recepcjonista</h4>
<ul>
<li>zgodność danych z rezerwacją (daty, typ pokoju, cena, wyżywienie),</li>
<li>dokument tożsamości: dane wpisuje się do karty meldunkowej tylko w zakresie potrzebnym hotelowi (RODO, zasada minimalizacji danych),</li>
<li>zabezpieczenie płatności: preautoryzacja karty lub depozyt gotówkowy,</li>
<li>zgody gościa (np. marketingowe) muszą być dobrowolne i oddzielne od umowy noclegowej.</li>
</ul>
<h4>Gość zagraniczny i dane statystyczne</h4>
<p>Dane gościa zagranicznego (obywatelstwo, kraj zamieszkania) są potrzebne m.in. do sprawozdania GUS o wykorzystaniu turystycznych obiektów noclegowych. Na egzaminie pojawiają się też pytania o regulamin obiektu: zawiera on godziny doby hotelowej, ciszy nocnej, zasady odpowiedzialności za szkody wyrządzone przez gościa i zasady przyjmowania zwierząt. Regulamin musi być dostępny dla gościa, np. w recepcji i w pokoju.</p>
<div class="tip">Kserowanie dowodu osobistego „na wszelki wypadek” narusza zasadę minimalizacji danych. Recepcja spisuje tylko to, co niezbędne.</div>` },
        { tytul: "Rzeczy gościa i odpowiedzialność hotelu", tresc: `<h4>Odpowiedzialność za rzeczy wniesione (Kodeks cywilny, art. 846-852)</h4>
<p>Utrzymujący hotel odpowiada za utratę lub uszkodzenie rzeczy wniesionych przez gościa, nawet bez własnej winy. Rzeczą wniesioną jest rzecz, która w czasie pobytu znajduje się w hotelu lub poza nim, gdy hotel przejął nad nią pieczę (np. bagaż przewożony przez hotelowy transfer).</p>
<div class="tw"><table><tr><th>Sytuacja</th><th>Zakres odpowiedzialności</th></tr>
<tr><td>Rzeczy wniesione, zwykłe</td><td>do 100-krotności ceny doby za cały pokój, a za jedną rzecz do 50-krotności</td></tr>
<tr><td>Rzeczy oddane na przechowanie (depozyt hotelowy)</td><td>bez ograniczenia kwotowego</td></tr>
<tr><td>Hotel bezzasadnie odmówił przyjęcia rzeczy na przechowanie</td><td>bez ograniczenia kwotowego</td></tr>
<tr><td>Szkoda z winy hotelu lub jego personelu</td><td>bez ograniczenia kwotowego</td></tr></table></div>
<p>Hotel nie odpowiada, jeśli szkoda wynikła z właściwości rzeczy, z siły wyższej albo powstała wyłącznie z winy poszkodowanego lub osób mu towarzyszących. Gość musi <b>niezwłocznie</b> zawiadomić hotel o szkodzie, inaczej traci roszczenie (z wyjątkiem szkody z winy hotelu).</p>
<p>Hotel może odmówić przyjęcia na przechowanie rzeczy niebezpiecznych lub o nadmiernej wartości albo rozmiarach. Hotelowi przysługuje <b>ustawowe prawo zastawu</b> na rzeczach gościa dla zabezpieczenia należności za nocleg i usługi.</p>
<p>Informacja wywieszona w pokoju, że „hotel nie odpowiada za rzeczy pozostawione w pokoju”, nie wyłącza odpowiedzialności ustawowej.</p>
<h4>Depozyt i sejf</h4>
<p>Przy przyjęciu depozytu recepcja wydaje pokwitowanie, wpisuje rzecz do księgi depozytów, a wydaje ją wyłącznie za okazaniem pokwitowania i dokumentu. Sejf w pokoju nie jest depozytem hotelowym w rozumieniu przepisów o przechowaniu.</p>
<h4>Rzeczy pozostawione po wyjeździe</h4>
<ol><li>Pokojowa przekazuje rzecz do działu pięter lub recepcji.</li><li>Wpis do rejestru rzeczy znalezionych: data, pokój, opis, kto znalazł.</li><li>Kontakt z gościem i odesłanie na jego koszt lub przechowanie przez okres określony w procedurze hotelu.</li></ol>
<div class="tip">Zapamiętaj liczby: 100 razy cena doby (łącznie) i 50 razy cena doby (jedna rzecz).</div>` },
        { tytul: "Reklamacje i sprzedaż usług", tresc: `<h4>Obsługa reklamacji: model LEARN</h4>
<ol>
<li><b>Listen</b>: wysłuchaj gościa do końca, bez przerywania.</li>
<li><b>Empathize</b>: okaż zrozumienie („Rozumiem, że to bardzo nieprzyjemne”).</li>
<li><b>Apologize</b>: przeproś za sytuację, nie szukaj winnych przy gościu.</li>
<li><b>React</b>: zaproponuj konkretne rozwiązanie (zmiana pokoju, naprawa, rekompensata).</li>
<li><b>Notify</b>: poinformuj przełożonego i odpowiedni dział, zapisz reklamację w książce lub systemie.</li>
</ol>
<p>Pisemna reklamacja wymaga odpowiedzi pisemnej. Dobrą praktyką jest odpowiedź w ciągu kilku dni, a w przypadku konsumentów termin 14 dni na ustosunkowanie się wynika z przepisów o reklamacjach usług. Odpowiedź zawiera: podziękowanie za zgłoszenie, opis podjętych działań, decyzję i przeprosiny.</p>
<h4>Techniki sprzedaży w recepcji</h4>
<div class="tw"><table><tr><th>Technika</th><th>Przykład</th></tr>
<tr><td>Up-selling</td><td>propozycja pokoju z widokiem na morze za 80 zł więcej za dobę</td></tr>
<tr><td>Cross-selling</td><td>propozycja kolacji w restauracji lub zabiegu SPA do pobytu</td></tr>
<tr><td>Upgrade</td><td>bezpłatne przeniesienie do wyższej kategorii (np. dla gościa VIP lub przy braku pokoi niższej kategorii)</td></tr>
<tr><td>Pakietowanie</td><td>weekend z kolacją i masażem w jednej cenie</td></tr></table></div>
<h4>Gość szczególny</h4>
<ul>
<li><b>VIP</b>: wcześniejsze przygotowanie pokoju, upominek powitalny, zameldowanie w pokoju lub bez kolejki.</li>
<li>Osoba z niepełnosprawnością: pokój przystosowany, blisko windy, informacja o drogach ewakuacji; mówimy do gościa, nie do opiekuna.</li>
<li>Gość z dziećmi: łóżeczko, krzesełko do karmienia, informacja o atrakcjach rodzinnych.</li>
<li>Gość zagraniczny: komunikacja w języku obcym, informacja o kursie waluty i lokalnych zwyczajach.</li>
</ul>
<h4>Usługi recepcji w trakcie pobytu</h4>
<p>Budzenie (wake-up call), przyjmowanie wiadomości, zamawianie taksówki, przechowalnia bagażu, informacja turystyczna, rezerwacja biletów, przyjmowanie przesyłek dla gościa.</p>
<div class="tip">Upgrade jest bezpłatny, up-selling to sprzedaż wyższej kategorii za dopłatą. Te pojęcia często są zamieniane w odpowiedziach.</div>` }
      ],
      pytania: [
        Q("Kategorię hotelowi nadaje", "marszałek województwa", "wójt gminy", "minister właściwy do spraw turystyki", "Polska Organizacja Turystyczna", "Ewidencję obiektów niekategoryzowanych prowadzi wójt (burmistrz)."),
        Q("Hotel musi mieć co najmniej", "10 pokoi", "5 pokoi", "7 pokoi", "30 pokoi", "Pensjonat to co najmniej 7 pokoi, hotel co najmniej 10."),
        Q("Za utratę rzeczy wniesionej (jednej rzeczy) nieoddanej na przechowanie hotel odpowiada do", "50-krotności ceny doby", "100-krotności ceny doby", "10-krotności ceny doby", "pełnej wartości bez ograniczeń", "Łącznie do 100-krotności, za jedną rzecz do 50-krotności."),
        Q("Za rzeczy oddane do depozytu hotelowego hotel odpowiada", "bez ograniczenia kwotowego", "do 50-krotności ceny doby", "do 100-krotności ceny doby", "tylko przy winie gościa", "Rzeczy przyjęte na przechowanie: odpowiedzialność nieograniczona."),
        Q("Bezpłatne przeniesienie gościa do pokoju wyższej kategorii to", "upgrade", "up-selling", "cross-selling", "walk-out", "Up-selling oznacza sprzedaż wyższej kategorii za dopłatą."),
        Q("Zaproponowanie gościowi zabiegu SPA przy zameldowaniu to przykład", "cross-sellingu", "up-sellingu", "upgrade'u", "overbookingu", "Cross-selling to sprzedaż usług uzupełniających."),
        Q("Pierwszym krokiem w obsłudze reklamacji według modelu LEARN jest", "wysłuchanie gościa", "zaproponowanie rekompensaty", "poinformowanie kierownika", "przeprosiny", "L = Listen."),
        Q("Kopiowanie dowodu osobistego każdego gościa przy zameldowaniu jest niezgodne z zasadą", "minimalizacji danych (RODO)", "doby hotelowej", "kategoryzacji", "gwarancji rezerwacji", "Hotel przetwarza tylko dane niezbędne do celu.")
      ]
    },
    {
      id: "rozliczenia", tytul: "Rozliczenia i wskaźniki", opis: "Rozliczysz pobyt gościa, wystawisz dokumenty sprzedaży i obliczysz wskaźniki pracy hotelu.",
      lekcje: [
        { tytul: "Rachunek gościa i dokumenty sprzedaży", tresc: `<h4>Konto gościa (folio)</h4>
<p>Każdy pokój ma w systemie konto, na które księguje się noclegi (automatycznie podczas audytu nocnego) oraz usługi dodatkowe: restauracja, minibar, pralnia, parking, SPA. Przy wyjeździe recepcja drukuje <b>rachunek wstępny</b> do sprawdzenia przez gościa, a po akceptacji przyjmuje płatność.</p>
<h4>Stawki VAT w hotelu</h4>
<div class="tw"><table><tr><th>Usługa</th><th>Stawka</th></tr>
<tr><td>Nocleg (usługa zakwaterowania)</td><td>8%</td></tr>
<tr><td>Śniadanie, usługi gastronomiczne (bez alkoholu)</td><td>8%</td></tr>
<tr><td>Napoje alkoholowe</td><td>23%</td></tr>
<tr><td>Usługi SPA i rekreacji (typowo)</td><td>23%</td></tr>
<tr><td>Opłata miejscowa</td><td>nie podlega VAT (to danina gminy)</td></tr></table></div>
<h4>Obliczanie VAT z kwoty brutto</h4>
<p>VAT = brutto × stawka / (100 + stawka). Przykład: nocleg 540 zł brutto przy 8%: VAT = 540 × 8 / 108 = 40 zł, netto 500 zł. Przy 23% współczynnik to 23/123.</p>
<h4>Paragon i faktura</h4>
<ul>
<li>Sprzedaż osobie fizycznej rejestruje się na <b>kasie fiskalnej</b> i wydaje paragon.</li>
<li>Firma (lub osoba prywatna na żądanie) może otrzymać fakturę. Faktura do paragonu dla firmy może zostać wystawiona tylko wtedy, gdy na paragonie jest <b>NIP nabywcy</b>, dlatego trzeba zapytać o fakturę przed zakończeniem transakcji.</li>
<li>Faktura zawiera m.in.: datę wystawienia, numer, dane i NIP sprzedawcy i nabywcy, nazwę usługi, ilość, cenę netto, stawkę i kwotę VAT, wartość brutto.</li>
</ul>
<h4>Podział rachunku</h4>
<p>Często pracodawca płaci tylko za nocleg i śniadanie, a gość sam za dodatki. Wtedy tworzy się dwa konta: firmowe (przelew, tzw. city ledger, rozliczenie odroczone na podstawie umowy) i prywatne gościa. Przed wyjazdem rozlicza się konto prywatne, a firmowe trafia do działu księgowości.</p>
<div class="tip">W zadaniu z rachunkiem sumuj osobno każdą stawkę VAT. Jedna łączna kwota VAT dla noclegu i alkoholu to błąd.</div>` },
        { tytul: "Płatności, waluty i opłata miejscowa", tresc: `<h4>Formy płatności</h4>
<ul>
<li><b>Gotówka</b>: przeliczenie przy gościu, sprawdzenie autentyczności banknotów (znak wodny, nitka, farba zmienna optycznie), wydanie reszty.</li>
<li><b>Karta płatnicza</b>: przy zameldowaniu robi się <b>preautoryzację</b> (blokadę środków), a przy wyjeździe rozliczenie rzeczywistej kwoty. Niewykorzystana blokada jest zwalniana.</li>
<li><b>Przelew</b>: przedpłata przed przyjazdem lub rozliczenie odroczone dla firm.</li>
<li><b>Voucher</b>: dokument od biura podróży; hotel rozlicza się z biurem, a gość płaci tylko za usługi nieobjęte voucherem.</li>
<li>Bon podarunkowy, płatność mobilna (BLIK, portfel w telefonie).</li>
</ul>
<h4>Wymiana walut</h4>
<p>Hotel kupujący walutę od gościa stosuje <b>kurs kupna</b> (niższy), a sprzedający walutę <b>kurs sprzedaży</b> (wyższy). Przykład: gość płaci 200 EUR, kurs kupna 4,20 zł, więc hotel przyjmuje 200 × 4,20 = 840 zł. Jeśli rachunek wynosi 790 zł, reszta to 50 zł.</p>
<h4>Opłata miejscowa i uzdrowiskowa</h4>
<p>Pobiera się ją od osób fizycznych przebywających czasowo w celach turystycznych, wypoczynkowych lub szkoleniowych, <b>za każdą dobę</b> pobytu, w miejscowościach spełniających warunki ustawy o podatkach i opłatach lokalnych. Stawkę ustala rada gminy w uchwale (w granicach maksymalnych stawek ogłaszanych co roku). Hotel jest inkasentem: pobiera opłatę i przekazuje ją gminie. Uchwała może przewidywać zwolnienia (np. dzieci, osoby z niepełnosprawnością).</p>
<p>Przykład: 2 dorosłych, 5 nocy, opłata 3,00 zł za osobę za dobę: 2 × 5 × 3,00 = 30 zł. Kwotę wpisuje się na rachunku osobno, bez VAT.</p>
<h4>Zamknięcie zmiany</h4>
<p>Na koniec zmiany recepcjonista sporządza <b>raport kasowy</b>: przychody według form płatności, wypłaty, stan gotówki. Różnica między stanem gotówki a raportem to niedobór lub nadwyżka, które trzeba wyjaśnić i opisać.</p>
<div class="tip">Kurs kupna stosuje kantor lub hotel, gdy to on kupuje walutę od klienta. Klient płacący euro „sprzedaje” euro hotelowi.</div>` },
        { tytul: "Wskaźniki hotelowe z przykładami", tresc: `<h4>Najważniejsze wzory</h4>
<div class="tw"><table><tr><th>Wskaźnik</th><th>Wzór</th></tr>
<tr><td>Frekwencja pokoi (occupancy)</td><td>pokoje sprzedane / pokoje dostępne × 100%</td></tr>
<tr><td>Frekwencja łóżek</td><td>miejsca (osobonoclegi) sprzedane / miejsca dostępne × 100%</td></tr>
<tr><td>ADR (średnia cena pokoju)</td><td>przychód z pokoi / pokoje sprzedane</td></tr>
<tr><td>RevPAR</td><td>przychód z pokoi / pokoje dostępne (= ADR × frekwencja)</td></tr>
<tr><td>Wskaźnik podwójnego obłożenia</td><td>(liczba gości - liczba sprzedanych pokoi) / liczba sprzedanych pokoi × 100%</td></tr>
<tr><td>Średnia długość pobytu</td><td>liczba osobonocy / liczba gości (przyjazdów)</td></tr></table></div>
<h4>Przykład</h4>
<p>Hotel ma 80 pokoi. W danej dobie 2 pokoje są wyłączone ze sprzedaży (out of order), sprzedano 60 pokoi, w których nocowało 96 gości. Przychód z pokoi: 18 000 zł.</p>
<ul>
<li>Pokoje dostępne: 80 - 2 = 78 (wg metody stosowanej w zadaniu; jeśli treść nie mówi o wyłączeniu, bierz wszystkie 80).</li>
<li>Frekwencja: 60 / 78 × 100% ≈ 76,9%.</li>
<li>ADR: 18 000 / 60 = 300 zł.</li>
<li>RevPAR: 18 000 / 78 ≈ 230,77 zł (sprawdzenie: 300 × 0,769 ≈ 230,7 zł).</li>
<li>Podwójne obłożenie: (96 - 60) / 60 × 100% = 60%.</li>
</ul>
<h4>Interpretacja</h4>
<p>Wysoka frekwencja przy niskim ADR oznacza sprzedaż „za tanio”. Wysoki ADR i niska frekwencja oznacza zbyt wysokie ceny lub słabą promocję. RevPAR łączy oba aspekty, dlatego służy do porównywania hoteli. GOPPAR uwzględnia dodatkowo koszty (zysk operacyjny brutto na dostępny pokój).</p>
<h4>Osobonoc</h4>
<p>Jedna osoba nocująca jedną noc to 1 osobonoc. Grupa 30 osób na 4 noce to 120 osobonocy. Dane o udzielonych noclegach i osobonocach obiekt przekazuje do GUS (sprawozdanie KT-1).</p>
<div class="tip">ADR dzielisz przez pokoje sprzedane, RevPAR przez pokoje dostępne. Pomyłka mianownika to najczęstszy błąd.</div>` }
      ],
      pytania: [
        Q("Hotel ma 120 pokoi, sprzedano 90. Frekwencja pokoi wynosi", "75%", "90%", "133%", "25%", "90 / 120 × 100% = 75%."),
        Q("Przychód z pokoi 24 000 zł, sprzedano 80 pokoi z dostępnych 100. ADR wynosi", "300 zł", "240 zł", "192 zł", "320 zł", "24 000 / 80 = 300 zł."),
        Q("Przychód z pokoi 24 000 zł, sprzedano 80 pokoi z dostępnych 100. RevPAR wynosi", "240 zł", "300 zł", "192 zł", "80 zł", "24 000 / 100 = 240 zł."),
        Q("W 50 sprzedanych pokojach nocowało 80 gości. Wskaźnik podwójnego obłożenia wynosi", "60%", "160%", "62,5%", "30%", "(80 - 50) / 50 × 100% = 60%."),
        Q("Kwota VAT zawarta w cenie noclegu 216 zł brutto (stawka 8%) wynosi", "16 zł", "17,28 zł", "21,60 zł", "40,39 zł", "216 × 8 / 108 = 16 zł."),
        Q("Opłata miejscowa na rachunku gościa", "nie podlega VAT", "podlega VAT 8%", "podlega VAT 23%", "jest wliczona w cenę noclegu", "To danina na rzecz gminy, hotel jest inkasentem."),
        Q("Gość płaci w euro. Hotel przeliczy kwotę po kursie", "kupna", "sprzedaży", "średnim NBP z dnia przyjazdu", "dowolnym ustalonym przez gościa", "Hotel kupuje walutę od gościa, więc stosuje kurs kupna."),
        Q("Blokada środków na karcie gościa przy zameldowaniu to", "preautoryzacja", "zadatek", "city ledger", "voucher", "Przy wyjeździe blokada jest rozliczana lub zwalniana.")
      ]
    },
    {
      id: "systemy", tytul: "Systemy i dokumentacja recepcji", opis: "Poprowadzisz statusy pokoi, audyt nocny, raporty i korespondencję zgodnie z RODO.",
      lekcje: [
        { tytul: "Statusy pokoi i współpraca z działami", tresc: `<h4>Statusy pokoi w systemie PMS</h4>
<div class="tw"><table><tr><th>Skrót</th><th>Znaczenie</th><th>Czy można sprzedać?</th></tr>
<tr><td>VC (vacant clean)</td><td>wolny, posprzątany, sprawdzony</td><td>tak</td></tr>
<tr><td>VD (vacant dirty)</td><td>wolny, do sprzątania (np. po wyjeździe)</td><td>po sprzątaniu</td></tr>
<tr><td>OC (occupied clean)</td><td>zajęty, posprzątany</td><td>nie, zajęty</td></tr>
<tr><td>OD (occupied dirty)</td><td>zajęty, do sprzątania</td><td>nie, zajęty</td></tr>
<tr><td>OOO (out of order)</td><td>wyłączony z eksploatacji (awaria, remont), nie liczy się do pokoi dostępnych</td><td>nie</td></tr>
<tr><td>OOS (out of service)</td><td>czasowo wyłączony na krótko (drobna naprawa), zwykle liczony w dostępnych</td><td>nie w tej chwili</td></tr>
<tr><td>DND (do not disturb)</td><td>gość prosi, by nie przeszkadzać</td><td>nie</td></tr></table></div>
<p>Rozbieżność statusu recepcji i działu pięter (np. recepcja ma „zajęty”, a pokojowa zgłasza pusty pokój bez bagażu) to <b>discrepancy</b>, którą trzeba wyjaśnić: może to być gość, który wyjechał bez rozliczenia (skipper), albo gość, który nocował poza hotelem (sleep out).</p>
<h4>Współpraca recepcji z innymi działami</h4>
<ul>
<li><b>Housekeeping</b>: lista przyjazdów i wyjazdów, prośby gości (dodatkowy ręcznik, łóżeczko), pokoje VIP.</li>
<li><b>Dział techniczny</b>: zgłoszenie usterki, zmiana statusu na OOO i zwrot do sprzedaży po naprawie.</li>
<li><b>Gastronomia</b>: liczba śniadań (raport na podstawie stanu gości), diety, obciążenia na konto pokoju.</li>
<li><b>Sprzedaż i marketing</b>: grupy, konferencje, umowy firmowe.</li>
</ul>
<h4>Zmiana pokoju gościa</h4>
<p>Przy przeniesieniu (room move) recepcja zmienia pokój w systemie, przenosi konto, aktualizuje kartę-klucz, informuje housekeeping (stary pokój VD) i, jeśli trzeba, bagażowego.</p>
<h4>Kolejność sprzątania pokoi</h4>
<p>Housekeeping zwykle sprząta najpierw pokoje gości VIP i pokoje zamówione na wcześniejszy przyjazd (early check-in), potem pokoje po wyjazdach (VD), aby jak najszybciej oddać je do sprzedaży, a na końcu pokoje zajęte, w których gość nie wywiesił zawieszki DND. Recepcja na bieżąco przekazuje informację o wyjazdach, a housekeeping o pokojach gotowych.</p>
<div class="tip">Do liczby pokoi dostępnych nie wlicza się pokoi OOO. Status OOS zwykle nie zmniejsza liczby pokoi dostępnych.</div>` },
        { tytul: "Audyt nocny i raporty", tresc: `<h4>Zadania audytora nocnego</h4>
<ol>
<li>Sprawdzenie, czy wszyscy przyjeżdżający gości zostali zameldowani lub oznaczeni jako no-show.</li>
<li>Kontrola kont gości: czy wszystkie usługi z dnia (restauracja, bar, minibar) zostały zaksięgowane i czy nie ma pomyłek.</li>
<li>Uzgodnienie raportów kasowych wszystkich zmian i punktów sprzedaży.</li>
<li><b>Naliczenie opłat za noclegi</b> (room posting) na wszystkie zajęte pokoje.</li>
<li>Kontrola limitów kredytowych: gość, którego zadłużenie przekracza preautoryzację, zostaje oznaczony do rozmowy rano.</li>
<li>Zamknięcie dnia w systemie (zmiana daty hotelowej) i archiwizacja danych.</li>
<li>Przygotowanie raportów na następny dzień.</li>
</ol>
<h4>Najważniejsze raporty</h4>
<div class="tw"><table><tr><th>Raport</th><th>Zawartość i odbiorca</th></tr>
<tr><td>Lista przyjazdów (arrivals)</td><td>rezerwacje na dany dzień, uwagi specjalne, VIP; recepcja, housekeeping</td></tr>
<tr><td>Lista wyjazdów (departures)</td><td>pokoje do zwolnienia; recepcja, housekeeping</td></tr>
<tr><td>Raport stanu gości (in-house)</td><td>kto mieszka w hotelu; ochrona, ewakuacja, gastronomia (śniadania)</td></tr>
<tr><td>Raport frekwencji</td><td>obłożenie, ADR, RevPAR; kierownictwo</td></tr>
<tr><td>Raport no-show i anulacji</td><td>podstawa do obciążeń; dział rezerwacji, księgowość</td></tr>
<tr><td>Prognoza (forecast)</td><td>przewidywane obłożenie na kolejne dni; wszystkie działy</td></tr>
<tr><td>Raport zadłużeń (high balance)</td><td>gości z wysokim saldem; kierownik recepcji</td></tr></table></div>
<h4>Dokumentacja papierowa w zadaniach egzaminacyjnych</h4>
<p>Arkusze praktyczne często każą wypełnić: kartę rezerwacji, kartę meldunkową, rachunek, raport kasowy, zestawienie przyjazdów lub grafik rezerwacji. Wypełniaj dane czytelnie, bez skreśleń, z datą i podpisem pracownika, a kwoty podawaj z dwoma miejscami po przecinku.</p>
<h4>Raport kasowy nocnej zmiany</h4>
<p>Audytor porównuje sumy z kasy fiskalnej, terminala płatniczego i systemu PMS. Różnice (np. płatność kartą zaksięgowana w PMS jako gotówka) koryguje się przed zamknięciem dnia, z opisem przyczyny. Raport dobowy (fiskalny) z kasy fiskalnej drukuje się po zakończeniu sprzedaży danego dnia i przechowuje zgodnie z przepisami.</p>
<div class="tip">Raport stanu gości ma znaczenie dla bezpieczeństwa: podczas ewakuacji pozwala ustalić, kogo brakuje na miejscu zbiórki.</div>` },
        { tytul: "Korespondencja, RODO i bezpieczeństwo", tresc: `<h4>Korespondencja hotelowa</h4>
<p>Typowe pisma: potwierdzenie rezerwacji, oferta dla grupy, odpowiedź na reklamację, podziękowanie za pobyt. Układ pisma: dane hotelu, miejscowość i data, dane adresata, tytuł (np. „Potwierdzenie rezerwacji nr 1234”), zwrot grzecznościowy, treść, zwrot końcowy, podpis z imieniem, nazwiskiem i stanowiskiem.</p>
<ul>
<li>Zwroty: „Szanowna Pani”, „Szanowny Panie”, „Szanowni Państwo”; zakończenie: „Z poważaniem”, „Z wyrazami szacunku”.</li>
<li>W języku angielskim: „Dear Mr Smith”, a na końcu „Yours sincerely”; gdy nie znamy nazwiska: „Dear Sir or Madam” i „Yours faithfully”.</li>
</ul>
<h4>RODO w recepcji</h4>
<ul>
<li>Dane gościa przetwarza się w celu wykonania umowy (nocleg), obowiązków prawnych (np. rachunkowość, opłata miejscowa) i za zgodą (newsletter).</li>
<li>Gość ma prawo dostępu do danych, sprostowania, usunięcia (gdy nie ma podstawy dalszego przetwarzania) i sprzeciwu wobec marketingu.</li>
<li>Recepcja nie podaje osobom trzecim numeru pokoju ani informacji, czy dana osoba mieszka w hotelu. Telefon przełącza się do pokoju lub przyjmuje wiadomość.</li>
<li>Monitor ustawiony tak, by gość nie widział danych innych osób, wydruki niszczy się w niszczarce, hasła do PMS są indywidualne.</li>
<li>Naruszenie ochrony danych zgłasza się administratorowi (inspektorowi ochrony danych), a ten do Prezesa UODO w ciągu 72 godzin, jeśli jest ryzyko dla osób.</li>
</ul>
<h4>Bezpieczeństwo gości</h4>
<ul>
<li>Karty-klucze koduje się na konkretny pokój i okres pobytu; duplikat wydaje się po sprawdzeniu tożsamości.</li>
<li>Przy alarmie pożarowym recepcja drukuje listę gości, informuje straż pożarną (112 lub 998) i kieruje ewakuację zgodnie z instrukcją bezpieczeństwa pożarowego.</li>
<li>Pierwsza pomoc: zabezpieczenie miejsca, ocena przytomności i oddechu, wezwanie pomocy (112), w razie potrzeby RKO (30 uciśnięć i 2 oddechy) i użycie AED.</li>
</ul>
<div class="tip">Na pytanie osoby z zewnątrz „w którym pokoju mieszka pan Kowalski?” poprawna reakcja to odmowa podania numeru i propozycja połączenia lub przekazania wiadomości.</div>` }
      ],
      pytania: [
        Q("Status VD oznacza pokój", "wolny, do sprzątania", "zajęty, posprzątany", "wyłączony z eksploatacji", "wolny, gotowy do sprzedaży", "VD = vacant dirty."),
        Q("Pokój z awarią instalacji wodnej, wyłączony na dłużej ze sprzedaży, ma status", "OOO", "OC", "VC", "DND", "OOO = out of order."),
        Q("Naliczenie opłat za noclegi na konta wszystkich zajętych pokoi wykonuje", "audytor nocny", "pokojowa", "kierownik działu sprzedaży", "bagażowy", "Room posting to zadanie audytu nocnego."),
        Q("Raport, na podstawie którego kuchnia planuje liczbę śniadań, to", "raport stanu gości (in-house)", "raport no-show", "raport kasowy", "raport zadłużeń", "Liczba gości w hotelu wyznacza liczbę śniadań."),
        Q("Gość, który opuścił hotel bez uregulowania rachunku, to w żargonie hotelowym", "skipper", "walk-in", "sleep out", "no-show", "Sleep out oznacza gościa, który nie nocował w pokoju, ale nadal ma pobyt."),
        Q("W angielskim liście rozpoczętym zwrotem „Dear Sir or Madam” właściwym zakończeniem jest", "Yours faithfully", "Yours sincerely", "Best wishes", "See you soon", "Yours sincerely stosuje się, gdy znamy nazwisko adresata."),
        Q("Osoba telefonująca pyta o numer pokoju gościa. Recepcjonista powinien", "odmówić podania numeru i zaproponować połączenie lub przekazanie wiadomości", "podać numer pokoju", "podać numer, jeśli rozmówca zna nazwisko gościa", "podać numer telefonu komórkowego gościa", "Ochrona danych i bezpieczeństwa gościa."),
        Q("Naruszenie ochrony danych osobowych zgłasza się Prezesowi UODO w terminie", "72 godzin", "24 godzin", "7 dni", "30 dni", "Art. 33 RODO: bez zbędnej zwłoki, nie później niż w 72 godziny.")
      ]
    }
  ]);

  pod("HGT.07", [
    {
      id: "rynek", tytul: "Rynek i walory turystyczne", opis: "Rozpoznasz formy turystyki, walory turystyczne Polski i elementy produktu turystycznego.",
      lekcje: [
        { tytul: "Formy i rodzaje turystyki", tresc: `<h4>Definicje według UNWTO i GUS</h4>
<ul>
<li><b>Turysta</b>: odwiedzający, który spędza w odwiedzanym miejscu co najmniej jedną noc (nie dłużej niż rok), poza swoim zwykłym otoczeniem, w celu innym niż zarobkowy w tym miejscu.</li>
<li><b>Odwiedzający jednodniowy</b> (wycieczkowicz): nie nocuje w odwiedzanym miejscu.</li>
</ul>
<h4>Turystyka według kierunku ruchu</h4>
<div class="tw"><table><tr><th>Pojęcie</th><th>Składniki</th><th>Przykład dla Polski</th></tr>
<tr><td>Krajowa</td><td>mieszkańcy podróżujący po swoim kraju</td><td>warszawiak w Zakopanem</td></tr>
<tr><td>Przyjazdowa</td><td>cudzoziemcy przyjeżdżający do kraju</td><td>Niemcy na Mazurach</td></tr>
<tr><td>Wyjazdowa</td><td>mieszkańcy wyjeżdżający za granicę</td><td>Polacy w Grecji</td></tr>
<tr><td>Wewnętrzna</td><td>krajowa + przyjazdowa</td><td>cały ruch na terenie Polski</td></tr>
<tr><td>Narodowa</td><td>krajowa + wyjazdowa</td><td>wszystkie podróże Polaków</td></tr>
<tr><td>Międzynarodowa</td><td>przyjazdowa + wyjazdowa</td><td>ruch przez granice</td></tr></table></div>
<h4>Rodzaje turystyki według celu</h4>
<ul>
<li><b>Wypoczynkowa</b> (rekreacyjna): plaże, jeziora, góry, często w formie pobytowej.</li>
<li><b>Kulturowa</b>: zabytki, muzea, festiwale; odmiany: religijna (pielgrzymki do Częstochowy, Lichenia), etniczna (sentymentalna), dziedzictwa przemysłowego (Szlak Zabytków Techniki na Śląsku).</li>
<li><b>Kwalifikowana</b>: wymaga umiejętności i sprzętu, np. wysokogórska, kajakowa, żeglarska, nurkowa, narciarska, rowerowa.</li>
<li><b>Zdrowotna</b>: uzdrowiskowa (Krynica-Zdrój, Ciechocinek, Kołobrzeg), wellness i SPA, medyczna.</li>
<li><b>Biznesowa</b>: podróże służbowe i przemysł spotkań <b>MICE</b> (meetings, incentives, conferences, exhibitions). Incentive to wyjazd motywacyjny, nagroda dla pracowników.</li>
<li><b>Wiejska i agroturystyka</b>: pobyt w gospodarstwie rolnym, kontakt z przyrodą i kulturą ludową.</li>
<li><b>Ekoturystyka</b>: obserwacja przyrody przy minimalnym wpływie na środowisko (np. ptaki nad Biebrzą).</li>
</ul>
<h4>Inne podziały</h4>
<p>Według liczby uczestników: indywidualna i zbiorowa (grupowa). Według organizacji: zorganizowana (przez organizatora turystyki) i niezorganizowana. Według czasu: krótkookresowa (do 3 noclegów, np. city break) i długookresowa.</p>
<div class="tip">Turystyka wewnętrzna to nie to samo co krajowa: obejmuje również cudzoziemców przyjeżdżających do Polski.</div>` },
        { tytul: "Walory turystyczne Polski", tresc: `<h4>Podział walorów</h4>
<ul>
<li><b>Przyrodnicze</b>: góry, wybrzeże, jeziora, lasy, jaskinie, parki narodowe.</li>
<li><b>Antropogeniczne (kulturowe)</b>: zabytki architektury, muzea, skanseny, miejsca pamięci, imprezy kulturalne, folklor.</li>
<li>Według funkcji: <b>wypoczynkowe</b>, <b>krajoznawcze</b> i <b>specjalistyczne</b> (pozwalające uprawiać turystykę kwalifikowaną).</li>
</ul>
<h4>Parki narodowe: liczby i rekordy</h4>
<p>W Polsce są <b>23 parki narodowe</b>. Najczęściej pytane:</p>
<div class="tw"><table><tr><th>Park</th><th>Ciekawostka</th></tr>
<tr><td>Białowieski</td><td>najstarszy (1932 jako park w Białowieży), żubry, obiekt UNESCO</td></tr>
<tr><td>Biebrzański</td><td>największy, bagna i ptaki wodno-błotne</td></tr>
<tr><td>Ojcowski</td><td>najmniejszy, skałki jurajskie (Maczuga Herkulesa), zamek w Pieskowej Skale</td></tr>
<tr><td>Tatrzański</td><td>Rysy (2499 m n.p.m.), najwyższy szczyt Polski, Morskie Oko</td></tr>
<tr><td>Słowiński</td><td>ruchome wydmy koło Łeby</td></tr>
<tr><td>Karkonoski</td><td>Śnieżka (1603 m), najwyższy szczyt Sudetów</td></tr>
<tr><td>Pieniński</td><td>Trzy Korony, przełom Dunajca, spływ flisacki</td></tr>
<tr><td>Ujście Warty</td><td>najmłodszy (2001), ostoja ptaków</td></tr></table></div>
<h4>Obiekty UNESCO w Polsce (wybrane)</h4>
<ul>
<li>Stare Miasto w Krakowie, kopalnie soli w Wieliczce i Bochni, Stare Miasto w Warszawie, Zamość, Toruń, zamek krzyżacki w Malborku.</li>
<li>Niemiecki nazistowski obóz koncentracyjny i zagłady Auschwitz-Birkenau, Kalwaria Zebrzydowska, Kościoły Pokoju w Jaworze i Świdnicy.</li>
<li>Hala Stulecia we Wrocławiu, Park Mużakowski, drewniane kościoły i cerkwie Karpat, kopalnia w Tarnowskich Górach, Krzemionki (kopalnie krzemienia), Puszcza Białowieska, buczyny karpackie.</li>
</ul>
<h4>Regiony turystyczne</h4>
<p>Pobrzeże Bałtyku (Hel, Sopot, Kołobrzeg), Kraina Wielkich Jezior Mazurskich (Śniardwy to największe jezioro, Mamry), Pojezierze Pomorskie, Wyżyna Krakowsko-Częstochowska (Szlak Orlich Gniazd), Sudety, Karpaty (Tatry, Pieniny, Bieszczady, Beskidy), Podlasie (szlak tatarski w Kruszynianach i Bohonikach).</p>
<h4>Walory w programie imprezy</h4>
<p>Przy układaniu oferty łączy się walory w spójną trasę, np. Kraków, Wieliczka i Ojców w jednej wycieczce po Małopolsce albo Toruń, Malbork i Gdańsk na Pomorzu. Uwzględnia się też parki krajobrazowe, rezerwaty i szlaki tematyczne (Szlak Orlich Gniazd, Szlak Piastowski), które uzupełniają program.</p>
<div class="tip">Na egzaminie częste są pytania typu „gdzie znajduje się...” lub „który park chroni...”. Łącz obiekt z regionem i województwem.</div>` },
        { tytul: "Produkt turystyczny i rynek", tresc: `<h4>Produkt turystyczny</h4>
<p>To wszystko, co turysta kupuje, przeżywa i ocenia w czasie podróży. Rodzaje produktu:</p>
<ul>
<li><b>Rzecz</b> (pamiątka, przewodnik drukowany),</li>
<li><b>Usługa</b> (nocleg, przewóz, wyżywienie, pilotaż),</li>
<li><b>Impreza</b> (pakiet co najmniej dwóch rodzajów usług),</li>
<li><b>Obiekt</b> (zamek, muzeum, park rozrywki),</li>
<li><b>Szlak</b> (Szlak Piastowski, Szlak Architektury Drewnianej),</li>
<li><b>Obszar</b> (region, miasto, destynacja).</li>
</ul>
<p>Warstwy produktu: <b>rdzeń</b> (główna korzyść, np. wypoczynek), <b>produkt rzeczywisty</b> (konkretne usługi i ich jakość), <b>produkt poszerzony</b> (dodatki: transfer, ubezpieczenie, upominek).</p>
<h4>Cechy usług turystycznych</h4>
<p>Niematerialność, nierozdzielność produkcji i konsumpcji, niejednorodność (zależy od ludzi), nietrwałość (niesprzedanego miejsca w autokarze nie można przechować), sezonowość popytu, komplementarność (usługi się uzupełniają).</p>
<h4>Marketing mix w turystyce</h4>
<div class="tw"><table><tr><th>Element</th><th>Przykład działania biura podróży</th></tr>
<tr><td>Product</td><td>nowy program weekendowy w Pieninach</td></tr>
<tr><td>Price</td><td>rabat za wczesną rezerwację (first minute), last minute</td></tr>
<tr><td>Place (dystrybucja)</td><td>sprzedaż przez stronę www, agentów i OTA</td></tr>
<tr><td>Promotion</td><td>katalog, media społecznościowe, targi turystyczne</td></tr>
<tr><td>People, Process, Physical evidence</td><td>kompetentni piloci, prosty proces rezerwacji, wygląd biura i materiałów</td></tr></table></div>
<h4>Podmioty rynku turystycznego</h4>
<ul>
<li><b>Organizator turystyki</b> (touroperator): tworzy i sprzedaje imprezy na własny rachunek.</li>
<li><b>Agent turystyczny</b>: pośredniczy w sprzedaży imprez organizatora za prowizję.</li>
<li>Usługodawcy: hotele, przewoźnicy, gastronomia, przewodnicy.</li>
<li>Instytucje: Polska Organizacja Turystyczna (promocja Polski za granicą), regionalne i lokalne organizacje turystyczne, informacja turystyczna, samorządy.</li>
</ul>
<h4>Popyt i podaż turystyczna</h4>
<p>Popyt turystyczny zależy od dochodów, czasu wolnego, cen, mody i sytuacji w regionie docelowym. Podaż tworzą walory, zagospodarowanie turystyczne (baza noclegowa, gastronomiczna, towarzysząca) i dostępność komunikacyjna. Sezonowość ogranicza się przez oferty pozasezonowe: konferencje, pobyty SPA, wydarzenia kulturalne i ceny promocyjne poza szczytem.</p>
<div class="tip">Nietrwałość usług tłumaczy, dlaczego organizatorzy stosują oferty last minute: niesprzedane miejsce przepada.</div>` }
      ],
      pytania: [
        Q("Wyjazd Polaków na wypoczynek do Hiszpanii to przykład turystyki", "wyjazdowej", "przyjazdowej", "krajowej", "wewnętrznej", "Mieszkańcy kraju wyjeżdżają za granicę."),
        Q("Turystyka wewnętrzna obejmuje turystykę", "krajową i przyjazdową", "krajową i wyjazdową", "przyjazdową i wyjazdową", "tylko krajową", "Narodowa to krajowa i wyjazdowa."),
        Q("Najmniejszym parkiem narodowym w Polsce jest", "Ojcowski Park Narodowy", "Biebrzański Park Narodowy", "Pieniński Park Narodowy", "Tatrzański Park Narodowy", "Biebrzański jest największy."),
        Q("Ruchome wydmy są głównym walorem", "Słowińskiego Parku Narodowego", "Wolińskiego Parku Narodowego", "Kampinoskiego Parku Narodowego", "Drawieńskiego Parku Narodowego", "Wydmy koło Łeby, np. Łącka Góra."),
        Q("Kościoły Pokoju wpisane na listę UNESCO znajdują się w", "Jaworze i Świdnicy", "Toruniu i Malborku", "Krakowie i Wieliczce", "Zamościu i Lublinie", "To obiekty na Dolnym Śląsku."),
        Q("Wyjazd motywacyjny dla pracowników firmy to", "incentive", "city break", "agroturystyka", "last minute", "Incentive to część segmentu MICE."),
        Q("Brak możliwości przechowania niesprzedanego miejsca w autokarze na inny termin wynika z cechy usług zwanej", "nietrwałością", "niematerialnością", "komplementarnością", "nierozdzielnością", "Usługa niesprzedana przepada."),
        Q("Pośrednik sprzedający imprezy organizatora turystyki za prowizję to", "agent turystyczny", "touroperator", "przewoźnik", "Polska Organizacja Turystyczna", "Organizator tworzy imprezę na własny rachunek.")
      ]
    },
    {
      id: "prawo", tytul: "Prawo imprez turystycznych", opis: "Zastosujesz przepisy ustawy o imprezach turystycznych przy zawieraniu, zmianie i rozwiązaniu umowy.",
      lekcje: [
        { tytul: "Organizator i zabezpieczenie finansowe", tresc: `<h4>Podstawa prawna</h4>
<p><b>Ustawa z 24 listopada 2017 r. o imprezach turystycznych i powiązanych usługach turystycznych</b> (obowiązuje od 1 lipca 2018 r., wdraża dyrektywę UE 2015/2302). Impreza turystyczna to połączenie co najmniej dwóch różnych rodzajów usług turystycznych (przewóz, zakwaterowanie, wynajem pojazdów, inne usługi turystyczne) na potrzeby tej samej podróży.</p>
<h4>Kto prowadzi rejestry</h4>
<div class="tw"><table><tr><th>Rejestr lub fundusz</th><th>Kto prowadzi</th></tr>
<tr><td>Rejestr organizatorów turystyki i przedsiębiorców ułatwiających nabywanie powiązanych usług turystycznych</td><td>marszałek województwa (właściwy dla siedziby)</td></tr>
<tr><td>Centralna Ewidencja Organizatorów Turystyki i PUNPUT</td><td>minister właściwy do spraw turystyki</td></tr>
<tr><td>Turystyczny Fundusz Gwarancyjny i Turystyczny Fundusz Pomocowy</td><td>Ubezpieczeniowy Fundusz Gwarancyjny</td></tr></table></div>
<h4>Zabezpieczenie finansowe</h4>
<p>Organizator musi mieć zabezpieczenie na wypadek niewypłacalności, które pokrywa koszty powrotu podróżnych do kraju oraz zwrot wpłat za niezrealizowaną imprezę. Formy:</p>
<ul>
<li>gwarancja bankowa lub ubezpieczeniowa,</li>
<li>umowa ubezpieczenia na rzecz podróżnych,</li>
<li>dodatkowo składki odprowadzane do <b>Turystycznego Funduszu Gwarancyjnego</b> od każdego podróżnego (zależnie od rodzaju imprezy i środka transportu).</li>
</ul>
<p>Wysokość zabezpieczenia określa rozporządzenie jako procent przychodu z imprez, zależnie od kierunku i transportu (najwyższy przy imprezach zagranicznych z przelotem czarterowym).</p>
<h4>Obowiązki informacyjne przed zawarciem umowy</h4>
<ul>
<li>przekazanie <b>standardowego formularza informacyjnego</b>,</li>
<li>główne cechy usług: miejsce, trasa, terminy, środek transportu, kategoria zakwaterowania, posiłki, program zwiedzania, wielkość grupy,</li>
<li>cena łącznie z opłatami i podatkami, harmonogram płatności, minimalna liczba uczestników i termin, do którego organizator może rozwiązać umowę z tego powodu,</li>
<li>wymagania paszportowe i wizowe, informacja o ubezpieczeniach i możliwości odstąpienia od umowy.</li>
</ul>
<div class="tip">Agent turystyczny nie musi mieć zabezpieczenia finansowego, jeśli działa wyłącznie jako pośrednik organizatora wpisanego do rejestru.</div>` },
        { tytul: "Zmiany, odstąpienie i rozwiązanie umowy", tresc: `<h4>Zmiana ceny</h4>
<p>Organizator może podwyższyć cenę tylko wtedy, gdy umowa to przewiduje i wyłącznie z powodu: kosztu paliwa lub innych źródeł zasilania w transporcie, podatków i opłat (np. lotniskowych), kursów walut. Podwyżkę trzeba zakomunikować <b>nie później niż 20 dni przed rozpoczęciem imprezy</b>. Jeśli przekracza ona <b>8% ceny</b>, podróżny może ją przyjąć albo odstąpić od umowy bez opłaty.</p>
<h4>Przeniesienie umowy</h4>
<p>Podróżny może przenieść umowę na osobę spełniającą warunki udziału, zawiadamiając organizatora na trwałym nośniku <b>najpóźniej 7 dni przed rozpoczęciem imprezy</b>. Obie osoby odpowiadają solidarnie za zapłatę ceny i ewentualne koszty przeniesienia.</p>
<h4>Odstąpienie przez podróżnego</h4>
<ul>
<li>Podróżny może odstąpić od umowy w każdym czasie przed rozpoczęciem imprezy.</li>
<li>Organizator może żądać <b>opłaty za odstąpienie</b>, odpowiadającej rzeczywistym kosztom (często w formie standardowych opłat zależnych od terminu rezygnacji).</li>
<li>Bez opłaty, gdy w miejscu docelowym lub jego bezpośrednim sąsiedztwie wystąpią <b>nieuniknione i nadzwyczajne okoliczności</b> mające wpływ na imprezę (np. klęska żywiołowa, epidemia, działania wojenne).</li>
</ul>
<h4>Rozwiązanie umowy przez organizatora z powodu zbyt małej liczby uczestników</h4>
<div class="tw"><table><tr><th>Czas trwania imprezy</th><th>Zawiadomienie najpóźniej</th></tr>
<tr><td>ponad 6 dni</td><td>20 dni przed rozpoczęciem</td></tr>
<tr><td>od 2 do 6 dni</td><td>7 dni przed rozpoczęciem</td></tr>
<tr><td>krócej niż 2 dni</td><td>48 godzin przed rozpoczęciem</td></tr></table></div>
<p>Organizator zwraca wszystkie wpłaty <b>w terminie 14 dni</b> od rozwiązania umowy, bez dodatkowego odszkodowania. Może też rozwiązać umowę z powodu nieuniknionych i nadzwyczajnych okoliczności, zawiadamiając niezwłocznie.</p>
<h4>Istotna zmiana warunków</h4>
<p>Gdy organizator przed rozpoczęciem imprezy musi istotnie zmienić główne właściwości usług (np. hotel niższej kategorii, inny termin), zawiadamia podróżnego, który może przyjąć zmianę albo odstąpić od umowy bez opłaty. Gdy zmiana obniża jakość, podróżnemu przysługuje obniżka ceny.</p>
<div class="tip">Zapamiętaj ciąg liczb: 20 dni (podwyżka i rozwiązanie imprezy ponad 6-dniowej), 8% (próg podwyżki), 7 dni (przeniesienie umowy), 14 dni (zwrot wpłat).</div>` },
        { tytul: "Niezgodności, reklamacje i odpowiedzialność", tresc: `<h4>Niezgodność z umową w trakcie imprezy</h4>
<ol>
<li>Podróżny <b>niezwłocznie</b> zawiadamia organizatora (np. przez pilota lub telefon alarmowy) o stwierdzonej niezgodności.</li>
<li>Organizator usuwa niezgodność, chyba że jest to niemożliwe lub wymaga nieproporcjonalnych kosztów.</li>
<li>Jeśli nie usunie jej w rozsądnym terminie, podróżny może zrobić to sam i żądać zwrotu niezbędnych wydatków.</li>
<li>Gdy znaczna część usług nie może być zrealizowana, organizator proponuje świadczenia zastępcze tej samej lub wyższej jakości bez dopłat. Jeśli są gorszej jakości, przyznaje obniżkę ceny.</li>
<li>Przy niezgodności istotnie wpływającej na imprezę, której organizator nie usunął, podróżny może rozwiązać umowę bez opłaty; organizator zapewnia powrót do kraju.</li>
</ol>
<h4>Obniżka ceny i odszkodowanie</h4>
<p>Podróżny ma prawo do obniżki ceny za każdy okres niezgodności oraz do odszkodowania lub zadośćuczynienia, chyba że niezgodność jest winą podróżnego, osoby trzeciej niezwiązanej z usługami albo wynika z nieuniknionych i nadzwyczajnych okoliczności.</p>
<p>Umowa może ograniczyć odszkodowanie do <b>trzykrotności ceny imprezy</b> dla każdego podróżnego. Ograniczenie nie dotyczy szkody na osobie ani szkody wyrządzonej umyślnie lub wskutek niedbalstwa. Roszczenia przedawniają się po <b>3 latach</b>.</p>
<h4>Pomoc podróżnemu</h4>
<p>Organizator ma obowiązek niezwłocznie udzielić pomocy podróżnemu w trudnej sytuacji: informacja o opiece medycznej, władzach lokalnych, pomocy konsularnej, pomoc w komunikacji i znalezieniu świadczeń zastępczych. Gdy powrót nie jest możliwy z powodu nieuniknionych okoliczności, organizator pokrywa koszty zakwaterowania <b>do 3 nocy</b>.</p>
<h4>Reklamacja pisemna: elementy</h4>
<ul>
<li>dane podróżnego i numer umowy, nazwa imprezy i termin,</li>
<li>opis niezgodności i data jej zgłoszenia na miejscu (np. protokół z pilotem lub rezydentem),</li>
<li>żądanie (obniżka ceny, odszkodowanie), dowody (zdjęcia, oświadczenia), podpis.</li>
</ul>
<div class="tip">Protokół spisany z pilotem lub rezydentem na miejscu jest kluczowym dowodem. Pilot nie może odmówić jego spisania.</div>` }
      ],
      pytania: [
        Q("Organizator może podwyższyć cenę imprezy najpóźniej", "20 dni przed rozpoczęciem imprezy", "7 dni przed rozpoczęciem imprezy", "48 godzin przed rozpoczęciem imprezy", "w dniu wyjazdu", "Podwyżka wymaga podstawy w umowie i zawiadomienia co najmniej 20 dni wcześniej."),
        Q("Podróżny może odstąpić od umowy bez opłaty, jeśli podwyżka ceny przekracza", "8%", "5%", "10%", "15%", "Próg 8% wynika z ustawy."),
        Q("Podróżny może przenieść umowę na inną osobę, zawiadamiając organizatora najpóźniej", "7 dni przed rozpoczęciem imprezy", "14 dni przed rozpoczęciem imprezy", "20 dni przed rozpoczęciem imprezy", "1 dzień przed rozpoczęciem imprezy", "Zawiadomienie na trwałym nośniku."),
        Q("Przy 4-dniowej imprezie organizator może ją odwołać z powodu zbyt małej liczby chętnych, zawiadamiając najpóźniej", "7 dni przed rozpoczęciem", "20 dni przed rozpoczęciem", "48 godzin przed rozpoczęciem", "3 dni przed rozpoczęciem", "Impreza 2-6 dni: 7 dni."),
        Q("Po rozwiązaniu umowy organizator zwraca wpłaty w terminie", "14 dni", "7 dni", "30 dni", "3 dni", "Zwrot w 14 dni, bez dodatkowego odszkodowania."),
        Q("Rejestr organizatorów turystyki prowadzi", "marszałek województwa", "starosta powiatu", "Polska Organizacja Turystyczna", "Urząd Ochrony Konkurencji i Konsumentów", "Centralną Ewidencję prowadzi minister właściwy do spraw turystyki."),
        Q("Turystyczny Fundusz Gwarancyjny prowadzi", "Ubezpieczeniowy Fundusz Gwarancyjny", "Narodowy Bank Polski", "Polska Izba Turystyki", "Rzecznik Praw Konsumenta", "TFG jest prowadzony przez UFG."),
        Q("Umowne ograniczenie odszkodowania nie może być niższe niż", "trzykrotność ceny imprezy", "dwukrotność ceny imprezy", "cena imprezy", "połowa ceny imprezy", "Nie dotyczy szkód na osobie i szkód umyślnych.")
      ]
    },
    {
      id: "kalkulacja", tytul: "Program i kalkulacja imprezy", opis: "Ułożysz realny program imprezy i obliczysz jej cenę z marżą i VAT marża.",
      lekcje: [
        { tytul: "Układanie programu imprezy", tresc: `<h4>Elementy programu</h4>
<ul>
<li>nazwa, termin, czas trwania (liczba dni i noclegów), miejsce zbiórki i powrotu,</li>
<li>szczegółowy plan każdego dnia z godzinami: przejazdy, zwiedzanie, posiłki, czas wolny, nocleg,</li>
<li>świadczenia w cenie (transport, noclegi, wyżywienie, bilety, pilot, przewodnicy, ubezpieczenie) i dodatkowo płatne.</li>
</ul>
<h4>Czas pracy kierowcy autokaru (rozporządzenie UE 561/2006)</h4>
<div class="tw"><table><tr><th>Zasada</th><th>Wartość</th></tr>
<tr><td>Nieprzerwana jazda</td><td>maksymalnie 4,5 godziny, potem przerwa 45 minut (może być podzielona: 15 + 30 minut)</td></tr>
<tr><td>Dzienny czas jazdy</td><td>9 godzin, maksymalnie 2 razy w tygodniu 10 godzin</td></tr>
<tr><td>Tygodniowy czas jazdy</td><td>maksymalnie 56 godzin, w dwóch kolejnych tygodniach 90 godzin</td></tr>
<tr><td>Odpoczynek dobowy</td><td>11 godzin (skrócony 9 godzin najwyżej 3 razy między odpoczynkami tygodniowymi)</td></tr></table></div>
<p>Przy dłuższych trasach organizator zapewnia drugiego kierowcę. W programie przyjmuje się średnią prędkość autokaru ok. 60 km/h, więc 300 km to ok. 5 godzin jazdy plus przerwa.</p>
<h4>Zasady dobrego programu</h4>
<ul>
<li>zwiedzanie najcenniejszych obiektów rano, gdy grupa jest wypoczęta,</li>
<li>przeplatanie zwiedzania z odpoczynkiem i czasem wolnym, nie więcej niż kilka obiektów dziennie,</li>
<li>uwzględnienie godzin otwarcia i dni zamknięcia muzeów (często poniedziałek) oraz konieczności wcześniejszej rezerwacji (np. Wieliczka, Muzeum Auschwitz-Birkenau),</li>
<li>dopasowanie do grupy docelowej: wiek, kondycja, zainteresowania, budżet,</li>
<li>zakwaterowanie do ok. 18:00-19:00, obiadokolacja po przyjeździe.</li>
</ul>
<h4>Przykład fragmentu programu</h4>
<p><b>Dzień 1</b>: 7:00 wyjazd z Warszawy, 11:30 przyjazd do Krakowa, zwiedzanie Wawelu z przewodnikiem (3 godz.), 15:00 obiad, 16:30 spacer Drogą Królewską, 19:00 zakwaterowanie, obiadokolacja. <b>Dzień 2</b>: 8:00 śniadanie, 9:00 przejazd do Wieliczki, zwiedzanie trasy turystycznej, 14:00 obiad, czas wolny, nocleg.</p>
<div class="tip">W zadaniu praktycznym sprawdź dni tygodnia: zaplanowanie muzeum na dzień, w którym jest zamknięte, to częsta utrata punktów.</div>` },
        { tytul: "Kalkulacja ceny imprezy", tresc: `<h4>Koszty stałe i zmienne</h4>
<ul>
<li><b>Koszty stałe (grupowe)</b>: nie zależą od liczby uczestników, dzieli się je na płacących. Przykłady: wynajem autokaru, wynagrodzenie pilota, przewodnik za grupę, parkingi, opłaty drogowe.</li>
<li><b>Koszty zmienne (jednostkowe)</b>: naliczane na osobę: noclegi, wyżywienie, bilety wstępu, ubezpieczenie.</li>
<li>Osoby <b>gratis</b> (np. opiekunowie, kierowca, pilot): ich koszty zmienne rozkłada się na płacących uczestników.</li>
</ul>
<h4>Przykład krok po kroku</h4>
<p>Wycieczka szkolna, 2 dni, 40 uczniów płacących + 3 opiekunów gratis. Koszty: autokar 4 000 zł, pilot 800 zł, przewodnik 600 zł, nocleg ze śniadaniem 120 zł za osobę, obiadokolacja 45 zł, obiad 40 zł, bilety 60 zł za osobę, ubezpieczenie 8 zł za osobę.</p>
<ol>
<li>Koszty stałe: 4 000 + 800 + 600 = 5 400 zł.</li>
<li>Koszty zmienne na 1 osobę: 120 + 45 + 40 + 60 + 8 = 273 zł.</li>
<li>Koszty zmienne całej grupy (43 osoby): 43 × 273 = 11 739 zł.</li>
<li>Koszt całkowity: 5 400 + 11 739 = 17 139 zł.</li>
<li>Koszt na 1 płacącego: 17 139 / 40 = 428,48 zł.</li>
</ol>
<h4>Marża i narzut</h4>
<p>Narzut liczy się od kosztu: cena = koszt × (1 + narzut). Przy narzucie 15%: 428,48 × 1,15 = 492,75 zł. Marża liczona od ceny: cena = koszt / (1 - marża). Przy marży 15%: 428,48 / 0,85 = 504,09 zł. Zawsze sprawdź w poleceniu, którą metodę zastosować.</p>
<h4>Zaokrąglenie i próg opłacalności</h4>
<p>Cenę zwykle zaokrągla się w górę (np. do 495 zł lub 510 zł). Próg opłacalności (minimalna liczba uczestników): liczba osób, przy której przychód pokrywa koszty stałe i zmienne. Przykład: cena 495 zł, koszt zmienny 273 zł, różnica 222 zł na osobę pokrywa koszty stałe 5 400 zł, więc potrzeba 5 400 / 222 ≈ 24,3, czyli 25 płacących (przy pominięciu osób gratis).</p>
<div class="tip">Koszty zmienne osób gratis mnożysz przez wszystkich uczestników (płacących i gratis), ale sumę dzielisz tylko przez płacących.</div>` },
        { tytul: "VAT marża i cena końcowa", tresc: `<h4>Procedura VAT marża (art. 119 ustawy o VAT)</h4>
<p>Biuro podróży, które kupuje usługi od innych podatników (hotel, przewoźnik, restauracja) na bezpośrednią korzyść turysty i działa we własnym imieniu, rozlicza VAT nie od całej ceny, ale <b>od marży</b>. Marża to różnica między kwotą zapłaconą przez klienta a kosztami nabytych usług, pomniejszona o VAT.</p>
<h4>Wzór</h4>
<ul>
<li>Marża brutto = cena sprzedaży - koszty usług nabytych dla turysty.</li>
<li>VAT = marża brutto × 23 / 123.</li>
<li>Marża netto = marża brutto - VAT.</li>
</ul>
<h4>Przykład</h4>
<p>Cena imprezy dla klienta 2 460 zł, koszty usług obcych 1 845 zł. Marża brutto: 2 460 - 1 845 = 615 zł. VAT: 615 × 23 / 123 = 115 zł. Marża netto: 500 zł.</p>
<p>Na fakturze w procedurze marży <b>nie wykazuje się kwoty VAT</b>, a dokument zawiera adnotację „procedura marży dla biur podróży”. Biuro nie odlicza VAT z faktur od usługodawców, których koszt jest częścią marży.</p>
<h4>Usługi własne</h4>
<p>Jeśli biuro świadczy usługę samo (np. własnym autokarem, z zatrudnionym pilotem), ta część może być rozliczana na zasadach ogólnych. W zadaniach egzaminacyjnych zazwyczaj wszystkie usługi traktuje się jako obce, chyba że treść mówi inaczej.</p>
<h4>Ceny w ofercie</h4>
<ul>
<li>Cena w katalogu musi być ceną całkowitą, obejmującą wszystkie obowiązkowe opłaty (np. opłaty lotniskowe, składkę na TFG).</li>
<li>Rabaty: first minute (za wczesną rezerwację), dla dzieci, dla stałych klientów, last minute.</li>
<li>Dopłaty: za pokój jednoosobowy, za widok na morze, za dodatkowe wycieczki fakultatywne.</li>
</ul>
<h4>Wycieczki fakultatywne</h4>
<p>To dodatkowo płatne, dobrowolne wycieczki w trakcie imprezy. Uczestnik musi wiedzieć przed wyjazdem, że nie są wliczone w cenę, a ich organizator i cena powinny być jasno określone.</p>
<div class="tip">Współczynnik 23/123 stosuje się, bo marża brutto zawiera już podatek. Pomnożenie marży przez 23% to błąd.</div>` }
      ],
      pytania: [
        Q("Wynajem autokaru dla grupy jest w kalkulacji imprezy kosztem", "stałym", "zmiennym", "jednostkowym na osobę", "fakultatywnym", "Nie zależy od liczby uczestników."),
        Q("Maksymalny czas nieprzerwanej jazdy kierowcy autokaru wynosi", "4,5 godziny", "3 godziny", "6 godzin", "9 godzin", "Potem przerwa 45 minut."),
        Q("Dzienny czas jazdy kierowcy może zostać wydłużony do 10 godzin", "najwyżej 2 razy w tygodniu", "codziennie", "najwyżej raz w miesiącu", "nie może zostać wydłużony", "Standardowo 9 godzin."),
        Q("Marża brutto biura podróży wynosi 369 zł. VAT w procedurze marży wynosi", "69 zł", "84,87 zł", "29,52 zł", "36,90 zł", "369 × 23 / 123 = 69 zł."),
        Q("Koszt imprezy na 1 osobę wynosi 400 zł, narzut 20%. Cena sprzedaży wynosi", "480 zł", "500 zł", "420 zł", "320 zł", "400 × 1,20 = 480 zł."),
        Q("Koszt imprezy na 1 osobę wynosi 400 zł, marża liczona od ceny 20%. Cena wynosi", "500 zł", "480 zł", "520 zł", "320 zł", "400 / 0,80 = 500 zł."),
        Q("Na fakturze wystawionej w procedurze marży dla biur podróży", "nie wykazuje się kwoty VAT", "wykazuje się VAT od całej ceny", "wykazuje się VAT 8%", "nie podaje się ceny", "Wymagana jest adnotacja „procedura marży dla biur podróży”."),
        Q("Dodatkowo płatna, dobrowolna wycieczka w trakcie imprezy to wycieczka", "fakultatywna", "objazdowa", "pobytowa", "incentive", "Nie jest wliczona w cenę podstawową.")
      ]
    },
    {
      id: "realizacja", tytul: "Realizacja i obsługa imprezy", opis: "Poprowadzisz imprezę jako pilot, przygotujesz dokumenty podróży i zareagujesz w sytuacjach kryzysowych.",
      lekcje: [
        { tytul: "Pilot w trakcie imprezy", tresc: `<h4>Pilot a przewodnik</h4>
<p>Pilot wycieczek opiekuje się grupą przez całą imprezę w imieniu organizatora i dba o realizację programu. Przewodnik turystyczny oprowadza po konkretnym obiekcie lub obszarze i przekazuje wiedzę o nim. Pilot może przekazywać ogólne informacje krajoznawcze, ale w wielu obiektach (np. muzea, Wawel) obowiązuje oprowadzanie przez przewodników zatwierdzonych przez obiekt.</p>
<h4>Dokumenty pilota (teczka pilota)</h4>
<ul>
<li>umowa ze zleceniodawcą i program imprezy, lista uczestników z danymi kontaktowymi,</li>
<li><b>vouchery</b> i potwierdzenia rezerwacji (hotele, restauracje, bilety), rooming list,</li>
<li>polisa ubezpieczeniowa grupy, numery alarmowe organizatora, ubezpieczyciela, konsulatu,</li>
<li>środki na wydatki w trasie (zaliczka) i formularze rozliczenia,</li>
<li>druk raportu z imprezy i protokołu reklamacyjnego.</li>
</ul>
<h4>Przebieg pracy pilota</h4>
<ol>
<li><b>Przed wyjazdem</b>: zapoznanie się z programem i trasą, potwierdzenie rezerwacji, kontakt z kierowcą.</li>
<li><b>Zbiórka</b>: sprawdzenie listy obecności i dokumentów, powitanie, przedstawienie siebie i kierowcy, omówienie zasad bezpieczeństwa (pasy, wyjścia awaryjne) i programu.</li>
<li><b>W trasie</b>: informacje o trasie, przerwy zgodne z czasem pracy kierowcy, liczenie uczestników po każdym postoju.</li>
<li><b>W hotelu</b>: zameldowanie grupy według rooming listy, ustalenie godzin posiłków i zbiórki, przekazanie uczestnikom numeru telefonu pilota.</li>
<li><b>Po imprezie</b>: rozliczenie zaliczki, raport z przebiegu imprezy, przekazanie reklamacji i uwag organizatorowi.</li>
</ol>
<h4>Techniki pracy z grupą</h4>
<ul>
<li>mówienie przodem do grupy, przez mikrofon w autokarze, krótkie informacje (kilka minut), przerwy na pytania,</li>
<li>wyraźne podawanie godziny i miejsca zbiórki, najlepiej z punktem orientacyjnym,</li>
<li>reagowanie na konflikty spokojnie, indywidualnie, bez komentowania przy całej grupie.</li>
</ul>
<div class="tip">Po każdym postoju pilot liczy uczestników, zanim autokar ruszy. To pytanie pojawia się na egzaminie w wielu wariantach.</div>` },
        { tytul: "Transport i dokumenty podróży", tresc: `<h4>Transport lotniczy</h4>
<ul>
<li><b>Lot rejsowy</b> (regularny): według rozkładu, bilet indywidualny. <b>Lot czarterowy</b>: samolot wynajęty przez organizatora na konkretny kierunek i termin. <b>Tani przewoźnik</b> (low-cost): niska cena podstawowa, dopłaty za bagaż i miejsca.</li>
<li>Kody IATA lotnisk: WAW (Warszawa Chopin), KRK (Kraków), GDN (Gdańsk), KTW (Katowice), WRO (Wrocław), POZ (Poznań).</li>
<li>Odprawa: biletowo-bagażowa (check-in, karta pokładowa, nadanie bagażu rejestrowanego), kontrola bezpieczeństwa (płyny w bagażu podręcznym do 100 ml w pojemnikach, łącznie w torebce do 1 litra, o ile lotnisko nie stosuje nowych skanerów), kontrola paszportowa poza strefą Schengen.</li>
<li>Prawa pasażera (rozporządzenie WE 261/2004): przy dużym opóźnieniu lub odwołaniu lotu opieka (posiłki, nocleg) i odszkodowanie 250, 400 lub 600 euro zależnie od długości trasy.</li>
</ul>
<h4>Transport kolejowy, autokarowy, promowy</h4>
<p>Dla grup stosuje się zniżki grupowe na kolei, autokar wynajmuje się z kierowcą (cena za kilometr lub za dzień). Autokar przewożący dzieci jest kontrolowany przez policję przed wyjazdem (zgłoszenie kontroli). Na promach rezerwuje się miejsca w kabinach i transport autokaru.</p>
<h4>Dokumenty podróży</h4>
<div class="tw"><table><tr><th>Cel podróży</th><th>Wymagany dokument</th></tr>
<tr><td>Kraje UE, EOG i Szwajcaria</td><td>dowód osobisty lub paszport</td></tr>
<tr><td>Wybrane kraje poza UE (np. Albania, Gruzja, Czarnogóra)</td><td>według aktualnych przepisów często wystarcza dowód, trzeba sprawdzić przed wyjazdem</td></tr>
<tr><td>Pozostałe kraje</td><td>paszport, często ważny co najmniej 6 miesięcy od daty powrotu, ewentualnie wiza lub zezwolenie elektroniczne (np. ESTA do USA)</td></tr></table></div>
<p>Aktualne wymagania sprawdza się na stronie MSZ (serwis „Podróżuj bezpiecznie”), gdzie można też zarejestrować podróż w systemie <b>Odyseusz</b>. Dziecko potrzebuje własnego dokumentu.</p>
<h4>Strefy czasowe</h4>
<p>Polska: czas środkowoeuropejski UTC+1, latem UTC+2. Przy planowaniu przelotów pamiętaj, że godziny w rozkładzie podaje się w czasie lokalnym.</p>
<div class="tip">Przy pytaniu o dokument zawsze odpowiedź „paszport” jest bezpieczna dla krajów spoza UE, ale w strefie Schengen wystarczy ważny dowód osobisty.</div>` },
        { tytul: "Ubezpieczenia i sytuacje kryzysowe", tresc: `<h4>Ubezpieczenia turystyczne</h4>
<div class="tw"><table><tr><th>Skrót</th><th>Zakres</th></tr>
<tr><td>KL</td><td>koszty leczenia za granicą, transport medyczny do kraju (obowiązkowe przy imprezach zagranicznych)</td></tr>
<tr><td>NNW</td><td>następstwa nieszczęśliwych wypadków: świadczenie za trwały uszczerbek na zdrowiu lub śmierć</td></tr>
<tr><td>OC</td><td>odpowiedzialność cywilna za szkody wyrządzone innym osobom</td></tr>
<tr><td>Bagaż</td><td>utrata, kradzież lub zniszczenie bagażu</td></tr>
<tr><td>Koszty rezygnacji</td><td>zwrot opłaty za odstąpienie od umowy z ważnych przyczyn (choroba, wypadek); zwykle kupuje się je przy zawarciu umowy</td></tr></table></div>
<p>Przy sportach wysokiego ryzyka (narty, nurkowanie) trzeba wykupić rozszerzenie polisy. <b>EKUZ</b> (Europejska Karta Ubezpieczenia Zdrowotnego), wydawana przez NFZ, uprawnia do publicznej opieki zdrowotnej w krajach UE i EFTA na zasadach jak dla mieszkańców, ale nie pokrywa transportu do Polski ani akcji ratunkowych w górach, dlatego nie zastępuje KL.</p>
<h4>Choroba lub wypadek uczestnika</h4>
<ol><li>Udzielenie pierwszej pomocy, wezwanie pomocy (112).</li><li>Kontakt z centrum alarmowym ubezpieczyciela (podać numer polisy).</li><li>Zapewnienie opieki uczestnikowi i dalsza realizacja programu dla grupy.</li><li>Notatka w raporcie pilota, zabezpieczenie dokumentów (rachunki, zaświadczenia lekarskie).</li></ol>
<h4>Inne sytuacje kryzysowe</h4>
<ul>
<li><b>Zgubienie uczestnika</b>: pozostawienie informacji w miejscu zbiórki, telefon, zgłoszenie na policji po ustalonym czasie.</li>
<li><b>Utrata dokumentów za granicą</b>: zgłoszenie na policji, kontakt z konsulatem RP, który wydaje <b>paszport tymczasowy</b>.</li>
<li><b>Awaria autokaru</b>: zabezpieczenie grupy w bezpiecznym miejscu, kontakt z przewoźnikiem i organizatorem, autokar zastępczy, korekta programu.</li>
<li><b>Overbooking w hotelu</b>: żądanie zakwaterowania zastępczego tego samego lub wyższego standardu, protokół, informacja do organizatora.</li>
<li><b>Klęska żywiołowa, zamieszki</b>: postępowanie według zaleceń służb i organizatora, informacja z serwisu MSZ.</li>
</ul>
<div class="tip">EKUZ to nie ubezpieczenie komercyjne. Pytanie „co pokrywa EKUZ” ma zwykle odpowiedź: leczenie w publicznej służbie zdrowia kraju UE.</div>` }
      ],
      pytania: [
        Q("Ubezpieczenie obowiązkowe przy zagranicznej imprezie turystycznej to ubezpieczenie", "kosztów leczenia (KL)", "bagażu", "kosztów rezygnacji", "OC kierowcy", "Organizator zapewnia KL i NNW przy imprezach za granicą."),
        Q("EKUZ uprawnia do", "korzystania z publicznej opieki zdrowotnej w krajach UE i EFTA", "bezpłatnego transportu medycznego do Polski", "leczenia w prywatnych klinikach na całym świecie", "zwrotu kosztów rezygnacji z imprezy", "Nie zastępuje ubezpieczenia KL."),
        Q("Dokument potwierdzający opłacenie usługi, wymieniany na świadczenie u usługodawcy, to", "voucher", "rooming list", "polisa", "faktura VAT marża", "Pilot przekazuje vouchery w hotelach i restauracjach."),
        Q("Kod IATA lotniska w Krakowie-Balicach to", "KRK", "KRA", "KTW", "WAW", "KTW to Katowice-Pyrzowice."),
        Q("Do podróży do Włoch obywatelowi Polski wystarczy", "ważny dowód osobisty", "paszport z wizą", "paszport ważny 6 miesięcy", "prawo jazdy", "Włochy są w UE i strefie Schengen."),
        Q("Uczestnik zgubił paszport za granicą. Pilot pomaga mu, kierując do", "konsulatu RP, który wydaje paszport tymczasowy", "lotniska po kartę pokładową", "hotelu po kartę meldunkową", "biura organizatora w Polsce", "Wcześniej zgłasza się utratę na policji."),
        Q("Po każdym postoju autokaru pilot przede wszystkim", "liczy uczestników przed odjazdem", "rozdaje vouchery", "rozlicza zaliczkę", "zbiera opinie o imprezie", "Zapobiega pozostawieniu uczestnika."),
        Q("System MSZ, w którym podróżny może zarejestrować wyjazd za granicę, to", "Odyseusz", "Schengen", "ESTA", "EKUZ", "ESTA to elektroniczne zezwolenie na wjazd do USA.")
      ]
    }
  ]);

  pod("HGT.12", [
    {
      id: "zywienie", tytul: "Zasady żywienia i jadłospisy", opis: "Zaplanujesz jadłospis zgodny z normami, uwzględniając diety specjalne i alergeny.",
      lekcje: [
        { tytul: "Składniki odżywcze i normy", tresc: `<h4>Wartość energetyczna składników</h4>
<div class="tw"><table><tr><th>Składnik</th><th>kcal z 1 g</th><th>Udział w energii diety</th></tr>
<tr><td>Białko</td><td>4</td><td>10-20%</td></tr>
<tr><td>Tłuszcz</td><td>9</td><td>20-35% (nasycone jak najmniej)</td></tr>
<tr><td>Węglowodany przyswajalne</td><td>4</td><td>45-65% (cukry dodane poniżej 10%)</td></tr>
<tr><td>Alkohol etylowy</td><td>7</td><td>nie jest składnikiem zalecanym</td></tr>
<tr><td>Błonnik</td><td>ok. 2</td><td>zalecane ok. 25 g dziennie u dorosłych</td></tr></table></div>
<h4>Przykład obliczenia</h4>
<p>Porcja zawiera 20 g białka, 15 g tłuszczu i 50 g węglowodanów: 20 × 4 + 15 × 9 + 50 × 4 = 80 + 135 + 200 = <b>415 kcal</b>. Udział tłuszczu: 135 / 415 × 100% ≈ 32,5%.</p>
<h4>Rodzaje norm (Instytut Żywności i Żywienia, obecnie NIZP PZH-PIB)</h4>
<ul>
<li><b>EAR</b> (średnie zapotrzebowanie): pokrywa potrzeby 50% osób w grupie, służy do oceny żywienia grup.</li>
<li><b>RDA</b> (zalecane spożycie): pokrywa potrzeby 97-98% osób, stosuje się przy planowaniu jadłospisów.</li>
<li><b>AI</b> (wystarczające spożycie): gdy brak danych do ustalenia EAR i RDA.</li>
<li><b>Zakres AMDR</b> (referencyjny przedział spożycia makroskładników) jako procent energii.</li>
</ul>
<h4>Zapotrzebowanie energetyczne</h4>
<p>Całkowita przemiana materii = podstawowa przemiana materii (PPM) × współczynnik aktywności fizycznej (PAL). PAL wynosi ok. 1,4 przy siedzącym trybie życia, 1,6 przy umiarkowanej aktywności, 1,75 i więcej przy dużej. Zapotrzebowanie zależy od płci, wieku, masy ciała, stanu fizjologicznego (ciąża, karmienie) i pracy.</p>
<h4>Witaminy i składniki mineralne w zadaniach</h4>
<ul>
<li>witaminy rozpuszczalne w tłuszczach: A, D, E, K; w wodzie: C i z grupy B,</li>
<li>wapń: mleko i przetwory, wchłanianie wspiera witamina D; żelazo: mięso, podroby, wchłanianie wspiera witamina C,</li>
<li>witamina C najbardziej wrażliwa na obróbkę cieplną i tlen, dlatego warzywa gotuje się krótko, w małej ilości wody, wkładając do wrzątku.</li>
</ul>
<div class="tip">Do planowania jadłospisu stosuje się RDA (zalecane spożycie), a do oceny sposobu żywienia grupy EAR.</div>` },
        { tytul: "Planowanie jadłospisu krok po kroku", tresc: `<h4>Rozkład energii na posiłki (5 posiłków)</h4>
<div class="tw"><table><tr><th>Posiłek</th><th>Udział energii</th></tr>
<tr><td>I śniadanie</td><td>25-30%</td></tr>
<tr><td>II śniadanie</td><td>5-10%</td></tr>
<tr><td>Obiad</td><td>35-40%</td></tr>
<tr><td>Podwieczorek</td><td>5-10%</td></tr>
<tr><td>Kolacja</td><td>15-20%</td></tr></table></div>
<p>Przy 4 posiłkach: śniadanie ok. 30%, obiad ok. 40%, podwieczorek ok. 10%, kolacja ok. 20%. Przy zapotrzebowaniu 2 400 kcal obiad (35%) to 840 kcal.</p>
<h4>Zasady układania jadłospisu</h4>
<ol>
<li>Ustal grupę odbiorców i ich zapotrzebowanie (wiek, aktywność, stan zdrowia).</li>
<li>Rozplanuj jadłospis na kilka dni (dekadowy, tygodniowy) z różnorodnością surowców i technik.</li>
<li>W każdym głównym posiłku: produkt zbożowy (najlepiej pełnoziarnisty), warzywa lub owoce, źródło białka.</li>
<li>Ryby co najmniej 1-2 razy w tygodniu, rośliny strączkowe kilka razy w tygodniu, ograniczenie mięsa czerwonego i przetworzonego.</li>
<li>Nie powtarzaj tej samej potrawy ani techniki w dwóch kolejnych posiłkach, np. zupa krem i sos na bazie tego samego warzywa.</li>
<li>Dobieraj kolory, konsystencję i smaki (kontrast: potrawa miękka z chrupiącą surówką).</li>
<li>Uwzględnij sezonowość, budżet (stawkę żywieniową) i możliwości techniczne kuchni.</li>
</ol>
<h4>Talerz zdrowego żywienia</h4>
<p>Połowa talerza: warzywa i owoce (z przewagą warzyw), ćwierć: produkty zbożowe pełnoziarniste, ćwierć: źródła białka (ryby, rośliny strączkowe, drób, jaja). Do picia woda. To wizualizacja zaleceń NCEŻ, zastępująca w edukacji klasyczną piramidę.</p>
<h4>Stawka żywieniowa</h4>
<p>To kwota przeznaczona na surowce do wyżywienia jednej osoby przez dzień (np. w szpitalu, internacie, na koloniach). Jadłospis musi się w niej zmieścić. Przykład: stawka 18 zł, śniadanie 4,50 zł, obiad 9 zł, kolacja 4 zł, razem 17,50 zł, zostaje 0,50 zł rezerwy.</p>
<h4>Ocena jadłospisu</h4>
<p>Metoda punktowa lub obliczeniowa (z tabel wartości odżywczej) albo program komputerowy. Sprawdza się realizację norm energii, białka, wapnia, witaminy C, udział tłuszczów i cukrów.</p>
<div class="tip">Najczęstszy błąd w zadaniu praktycznym: powtórzenie tego samego surowca (np. ziemniaki w zupie i jako dodatek) w jednym obiedzie.</div>` },
        { tytul: "Diety specjalne i alergeny", tresc: `<h4>Diety najczęściej pojawiające się na egzaminie</h4>
<div class="tw"><table><tr><th>Dieta</th><th>Zasady</th><th>Wykluczone lub ograniczane</th></tr>
<tr><td>Łatwostrawna</td><td>gotowanie w wodzie i na parze, duszenie bez obsmażania, pieczenie w folii</td><td>smażenie, potrawy wzdymające (kapusta, strączki), ostre przyprawy</td></tr>
<tr><td>Z ograniczeniem tłuszczu</td><td>chude mięso, chudy nabiał, tłuszcz dodawany na surowo</td><td>tłuste mięsa, zasmażki, smażenie</td></tr>
<tr><td>Z ograniczeniem cukrów prostych (cukrzyca)</td><td>produkty o niskim indeksie glikemicznym, regularne posiłki</td><td>cukier, słodycze, słodkie napoje, białe pieczywo w nadmiarze</td></tr>
<tr><td>Bezglutenowa (celiakia)</td><td>ryż, kukurydza, gryka, proso, ziemniaki, produkty z przekreślonym kłosem</td><td>pszenica, żyto, jęczmień, owies (jeśli nie jest certyfikowany)</td></tr>
<tr><td>Z ograniczeniem sodu (nadciśnienie)</td><td>zioła zamiast soli</td><td>sól, wędliny, sery żółte, produkty konserwowane</td></tr>
<tr><td>Wegetariańska (laktoowo)</td><td>białko z jaj, nabiału, strączków</td><td>mięso, ryby</td></tr>
<tr><td>Wegańska</td><td>strączki, tofu, orzechy, suplementacja witaminy B12</td><td>wszystkie produkty zwierzęce</td></tr></table></div>
<h4>14 alergenów (rozporządzenie UE 1169/2011)</h4>
<ol>
<li>zboża zawierające gluten,</li><li>skorupiaki,</li><li>jaja,</li><li>ryby,</li><li>orzeszki ziemne (arachidowe),</li><li>soja,</li><li>mleko (łącznie z laktozą),</li><li>orzechy (laskowe, włoskie, migdały, nerkowce i inne),</li><li>seler,</li><li>gorczyca,</li><li>nasiona sezamu,</li><li>dwutlenek siarki i siarczyny (powyżej 10 mg/kg lub 10 mg/l),</li><li>łubin,</li><li>mięczaki.</li>
</ol>
<p>W zakładzie gastronomicznym informację o alergenach trzeba przekazać konsumentowi także dla potraw nieopakowanych, np. w karcie menu lub na tablicy. Personel musi umieć odpowiedzieć, czy potrawa zawiera dany alergen.</p>
<h4>Zapobieganie kontaktowi krzyżowemu</h4>
<ul>
<li>osobne deski, noże i pojemniki dla potraw bezglutenowych i bezalergenowych,</li>
<li>przygotowanie potraw dla alergików w pierwszej kolejności lub na wydzielonym stanowisku,</li>
<li>osobny olej do smażenia (frytownica, w której smażono panierowane ryby, zawiera gluten i alergen ryb).</li>
</ul>
<div class="tip">Owies jest naturalnie bezglutenowy, ale zwykle zanieczyszczony pszenicą. W diecie bezglutenowej dopuszcza się tylko owies certyfikowany.</div>` }
      ],
      pytania: [
        Q("1 g tłuszczu dostarcza około", "9 kcal", "4 kcal", "7 kcal", "2 kcal", "Białko i węglowodany: 4 kcal, alkohol 7 kcal."),
        Q("Porcja zawiera 10 g białka, 10 g tłuszczu i 30 g węglowodanów. Jej wartość energetyczna wynosi", "250 kcal", "200 kcal", "170 kcal", "290 kcal", "40 + 90 + 120 = 250 kcal."),
        Q("Do planowania żywienia grupy stosuje się normę na poziomie", "zalecanego spożycia (RDA)", "średniego zapotrzebowania (EAR)", "maksymalnego spożycia (UL)", "minimalnego spożycia", "RDA pokrywa potrzeby 97-98% osób."),
        Q("Przy zapotrzebowaniu 2 000 kcal i udziale obiadu 35% obiad powinien dostarczyć", "700 kcal", "350 kcal", "500 kcal", "800 kcal", "2 000 × 0,35 = 700 kcal."),
        Q("W diecie łatwostrawnej niezalecaną techniką jest", "smażenie", "gotowanie na parze", "duszenie bez obsmażania", "pieczenie w folii", "Smażenie zwiększa zawartość tłuszczu i utrudnia trawienie."),
        Q("W diecie bezglutenowej można stosować", "kaszę gryczaną", "kaszę jęczmienną", "płatki żytnie", "kaszę manną", "Kasza manna jest z pszenicy, jęczmienna z jęczmienia."),
        Q("Do 14 alergenów wymagających oznaczenia należy", "seler", "marchew", "pomidor", "pieprz", "Seler, gorczyca, sezam, łubin i inne."),
        Q("Witamina rozpuszczalna w wodzie to witamina", "C", "A", "D", "K", "A, D, E, K rozpuszczają się w tłuszczach.")
      ]
    },
    {
      id: "kalkulacja", tytul: "Normowanie i kalkulacja", opis: "Przeliczysz receptury, uwzględnisz odpadki i straty oraz obliczysz cenę potrawy.",
      lekcje: [
        { tytul: "Odpadki, ubytki i masa brutto", tresc: `<h4>Pojęcia</h4>
<ul>
<li><b>Masa brutto</b>: surowiec w stanie zakupionym, przed obróbką wstępną.</li>
<li><b>Masa netto</b>: surowiec po obróbce wstępnej (obieranie, oczyszczanie, odkostnianie), gotowy do obróbki cieplnej.</li>
<li><b>Odpadki</b>: części usuwane w obróbce wstępnej (skórki, kości, gniazda nasienne), wyrażone w % masy brutto.</li>
<li><b>Ubytki (straty) obróbki cieplnej</b>: utrata masy przez odparowanie wody, wytopienie tłuszczu, wyciek soku, wyrażona w % masy netto.</li>
</ul>
<h4>Wzory</h4>
<div class="tw"><table><tr><th>Szukamy</th><th>Wzór</th></tr>
<tr><td>Masa netto z brutto</td><td>netto = brutto × (100% - % odpadków)</td></tr>
<tr><td>Masa brutto z netto</td><td>brutto = netto / (100% - % odpadków)</td></tr>
<tr><td>Masa po obróbce cieplnej</td><td>masa gotowa = netto × (100% - % ubytków)</td></tr>
<tr><td>Wskaźnik wydajności</td><td>masa gotowa / masa brutto × 100%</td></tr></table></div>
<h4>Przykłady</h4>
<p><b>1.</b> Potrzeba 12 kg obranych ziemniaków, odpadki 25%. Brutto: 12 / 0,75 = <b>16 kg</b>. Częsty błąd: 12 × 1,25 = 15 kg (za mało).</p>
<p><b>2.</b> 5 kg mięsa wołowego netto, ubytki przy duszeniu 40%. Masa gotowa: 5 × 0,60 = 3 kg. Liczba porcji po 100 g: 30.</p>
<p><b>3.</b> Ile mięsa netto potrzeba na 50 porcji po 120 g gotowej pieczeni przy stratach 30%? Masa gotowa: 50 × 0,12 = 6 kg. Netto: 6 / 0,70 ≈ 8,57 kg.</p>
<h4>Orientacyjne odpadki i ubytki</h4>
<div class="tw"><table><tr><th>Surowiec lub proces</th><th>Wartość orientacyjna</th></tr>
<tr><td>ziemniaki obierane ręcznie lub maszynowo</td><td>ok. 20-30% odpadków</td></tr>
<tr><td>marchew</td><td>ok. 15-20%</td></tr>
<tr><td>cebula</td><td>ok. 10-15%</td></tr>
<tr><td>ryba cała do filetowania</td><td>ok. 40-50%</td></tr>
<tr><td>duszenie, pieczenie mięsa</td><td>ok. 30-40% ubytków</td></tr>
<tr><td>gotowanie kasz, ryżu</td><td>przyrost masy (wchłanianie wody, ryż ok. 2,5-3 razy)</td></tr></table></div>
<p>Konkretne wartości w zadaniu zawsze podaje treść lub tabela norm. Używaj danych z arkusza.</p>
<div class="tip">Procent odpadków odnosi się do masy brutto. Dlatego z netto do brutto dzielisz, a nie mnożysz.</div>` },
        { tytul: "Receptury i przeliczanie porcji", tresc: `<h4>Receptura i karta technologiczna</h4>
<p><b>Receptura</b> to wykaz surowców i ich ilości (zwykle na 10 porcji lub 1 kg wyrobu) oraz opis wykonania. <b>Karta technologiczna</b> (karta potrawy) zawiera dodatkowo: masę porcji, sposób podania, wymagania jakościowe, zdjęcie, alergeny, wartość odżywczą, czasem cenę. Ujednolica produkcję, ułatwia kalkulację i szkolenie personelu.</p>
<h4>Przeliczanie receptury</h4>
<p>Współczynnik przeliczeniowy = liczba porcji potrzebnych / liczba porcji w recepturze. Każdy surowiec mnoży się przez ten współczynnik.</p>
<div class="tw"><table><tr><th>Surowiec</th><th>Na 10 porcji</th><th>Na 35 porcji (× 3,5)</th></tr>
<tr><td>mięso wieprzowe</td><td>1,40 kg</td><td>4,90 kg</td></tr>
<tr><td>cebula</td><td>0,20 kg</td><td>0,70 kg</td></tr>
<tr><td>olej</td><td>0,08 l</td><td>0,28 l</td></tr>
<tr><td>mąka</td><td>0,05 kg</td><td>0,175 kg</td></tr>
<tr><td>przyprawy</td><td>do smaku</td><td>do smaku, dodawane stopniowo</td></tr></table></div>
<p>Przy dużym zwiększeniu ilości przypraw i soli nie mnoży się mechanicznie w całości, tylko dosmacza (sól łatwo przedawkować).</p>
<h4>Zapotrzebowanie surowcowe i raport produkcji</h4>
<ol>
<li>Na podstawie jadłospisu i liczby porcji ustala się, ile każdej potrawy trzeba przygotować.</li>
<li>Z receptur oblicza się ilości surowców netto, a po uwzględnieniu odpadków ilości brutto.</li>
<li>Sumuje się ten sam surowiec z różnych potraw (np. cebula do zupy i do sosu).</li>
<li>Porównuje się z zapasem magazynowym i sporządza <b>zamówienie</b> do dostawcy lub <b>dowód wydania z magazynu</b> (RW).</li>
</ol>
<h4>Dokumenty magazynowe</h4>
<div class="tw"><table><tr><th>Skrót</th><th>Znaczenie</th></tr>
<tr><td>PZ</td><td>przyjęcie zewnętrzne (dostawa od dostawcy)</td></tr>
<tr><td>WZ</td><td>wydanie zewnętrzne (na zewnątrz zakładu, np. catering)</td></tr>
<tr><td>RW</td><td>rozchód wewnętrzny (wydanie do kuchni)</td></tr>
<tr><td>MM</td><td>przesunięcie międzymagazynowe</td></tr>
<tr><td>ZW</td><td>zwrot wewnętrzny (niewykorzystany surowiec wraca do magazynu)</td></tr></table></div>
<p>Wydawanie z magazynu według zasady <b>FIFO</b> (pierwsze przyszło, pierwsze wyszło) lub <b>FEFO</b> (pierwsze traci ważność, pierwsze wychodzi).</p>
<div class="tip">Na egzaminie praktycznym zawsze przeliczaj recepturę na liczbę porcji z treści zadania i zapisz współczynnik. Egzaminator sprawdza sposób obliczeń.</div>` },
        { tytul: "Kalkulacja ceny i food cost", tresc: `<h4>Kalkulacja ceny potrawy</h4>
<ol>
<li>Oblicz <b>koszt surowców</b> na porcję: ilość brutto każdego surowca × cena jednostkowa, zsumuj.</li>
<li>Dolicz <b>marżę gastronomiczną</b> (narzut) albo zastosuj docelowy wskaźnik food cost. Otrzymasz cenę netto.</li>
<li>Dolicz <b>VAT</b>: usługi gastronomiczne zwykle 8%, napoje alkoholowe 23%. Otrzymasz cenę brutto (menu).</li>
<li>Zaokrąglij cenę do wartości przyjaznej klientowi (np. 28,90 zł).</li>
</ol>
<h4>Przykład</h4>
<p>Koszt surowców porcji: 9,60 zł. Marża (narzut) 150%: cena netto = 9,60 × 2,5 = 24,00 zł. VAT 8%: 24,00 × 1,08 = 25,92 zł brutto, w karcie np. 25,90 zł lub 26,00 zł.</p>
<h4>Food cost</h4>
<p>Food cost (%) = koszt surowców / cena sprzedaży netto × 100%. W restauracjach typowo 25-35%. Jeśli food cost ma wynosić 30%: cena netto = 9,60 / 0,30 = 32,00 zł. Wskaźnik służy do kontroli: wzrost food cost oznacza droższe surowce, większe straty, kradzieże lub zbyt duże porcje.</p>
<h4>Struktura kosztów zakładu</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Przykłady</th></tr>
<tr><td>Koszty surowców (food cost, beverage cost)</td><td>żywność, napoje</td></tr>
<tr><td>Koszty pracy (labour cost)</td><td>wynagrodzenia i składki</td></tr>
<tr><td>Koszty stałe</td><td>czynsz, amortyzacja, ubezpieczenie, abonamenty</td></tr>
<tr><td>Koszty zmienne pozostałe</td><td>energia, gaz, woda, opakowania, środki czystości</td></tr></table></div>
<p><b>Prime cost</b> = koszt surowców + koszt pracy; w dobrze prowadzonej restauracji zwykle ok. 60-65% przychodu.</p>
<h4>Przychód i zysk</h4>
<p>Zysk brutto ze sprzedaży = przychód netto - koszty. Próg rentowności: liczba porcji, przy której przychód pokrywa wszystkie koszty. Przykład: koszty stałe miesięczne 30 000 zł, cena netto 32 zł, koszt zmienny porcji 12 zł; próg = 30 000 / (32 - 12) = 1 500 porcji miesięcznie.</p>
<div class="tip">Marża liczona „od kosztu” (narzut) i „od ceny” daje różne wyniki. 50% narzutu to nie to samo co 50% marży od ceny.</div>` }
      ],
      pytania: [
        Q("Potrzeba 9 kg marchwi netto, odpadki wynoszą 25%. Należy pobrać marchwi brutto", "12 kg", "11,25 kg", "6,75 kg", "10 kg", "9 / 0,75 = 12 kg."),
        Q("Z 4 kg mięsa netto przy ubytkach 35% otrzyma się mięsa gotowego", "2,6 kg", "1,4 kg", "3,5 kg", "2,96 kg", "4 × 0,65 = 2,6 kg."),
        Q("Receptura podana jest na 10 porcji. Aby przygotować 45 porcji, każdą ilość mnoży się przez", "4,5", "45", "0,45", "4", "45 / 10 = 4,5."),
        Q("Dokument wydania surowców z magazynu do kuchni to", "RW", "PZ", "WZ", "MM", "RW = rozchód wewnętrzny."),
        Q("Zasada wydawania z magazynu najpierw produktów o najkrótszym terminie przydatności to", "FEFO", "FIFO", "LIFO", "HACCP", "First expired, first out."),
        Q("Koszt surowców porcji 10 zł, docelowy food cost 25%. Cena netto potrawy wynosi", "40 zł", "12,50 zł", "25 zł", "35 zł", "10 / 0,25 = 40 zł."),
        Q("Cena netto potrawy 30 zł, VAT 8%. Cena brutto wynosi", "32,40 zł", "36,90 zł", "30,80 zł", "38 zł", "30 × 1,08 = 32,40 zł."),
        Q("Suma kosztów surowców i kosztów pracy to", "prime cost", "food cost", "marża", "próg rentowności", "Prime cost wynosi zwykle ok. 60-65% przychodu.")
      ]
    },
    {
      id: "organizacja", tytul: "Organizacja zakładu i HACCP", opis: "Zorganizujesz pracę zakładu gastronomicznego zgodnie z GHP, GMP i systemem HACCP.",
      lekcje: [
        { tytul: "Struktura zakładu i ciągi technologiczne", tresc: `<h4>Rodzaje zakładów</h4>
<ul>
<li><b>Żywienie otwarte</b> (ogólnodostępne): restauracja, bar, kawiarnia, bistro, pizzeria, fast food, food truck.</li>
<li><b>Żywienie zamknięte</b> (zbiorowe dla określonej grupy): stołówki szkolne, szpitale, domy pomocy społecznej, żłobki, zakłady pracy, wojsko.</li>
</ul>
<h4>Pomieszczenia i zasada ruchu jednokierunkowego</h4>
<p>Surowce przechodzą od rampy przez magazyny i przygotowalnie do kuchni, a następnie do wydawalni. Brudne naczynia, odpady i surowce nie mogą krzyżować się z potrawami gotowymi.</p>
<div class="tw"><table><tr><th>Strefa</th><th>Pomieszczenia</th></tr>
<tr><td>Przyjęcie i magazynowanie</td><td>rampa, magazyny suche, chłodnie (mięso, nabiał, warzywa osobno), mroźnie</td></tr>
<tr><td>Obróbka wstępna</td><td>przygotowalnia warzyw (brudna i czysta), mięsa, ryb, drobiu, jaj (osobno)</td></tr>
<tr><td>Obróbka cieplna</td><td>kuchnia zasadnicza, cukiernia, kuchnia zimna</td></tr>
<tr><td>Ekspedycja</td><td>wydawalnia, sala konsumencka</td></tr>
<tr><td>Strefa brudna</td><td>zmywalnia naczyń stołowych i kuchennych, pomieszczenie na odpady</td></tr>
<tr><td>Socjalna</td><td>szatnie, toalety, pomieszczenie dla personelu, w tym umywalnie z ciepłą wodą</td></tr></table></div>
<h4>Ciąg technologiczny</h4>
<p>To uporządkowany zestaw urządzeń ustawionych w kolejności operacji, np. dla ziemniaków: magazyn, obieraczka, stół do doczyszczania, zlew, krajalnica, kocioł, wydawanie. Rozróżnia się ciągi technologiczne surowcowe (warzywa, mięso), potrawowe (dla potrawy) i naczyń.</p>
<h4>Systemy produkcji</h4>
<ul>
<li><b>Tradycyjny</b>: przygotowanie i wydanie tego samego dnia.</li>
<li><b>Cook-chill</b>: ugotowanie, szybkie schłodzenie (do 0-3°C w ciągu 90 minut), przechowywanie do kilku dni, regeneracja przed podaniem.</li>
<li><b>Cook-freeze</b>: zamrożenie potrawy (do -18°C lub niżej), przechowywanie nawet kilka miesięcy.</li>
<li><b>Sous-vide</b>: obróbka próżniowa w niskiej, kontrolowanej temperaturze w łaźni wodnej.</li>
<li><b>Catering (przewóz potraw)</b>: potrawy z kuchni centralnej do punktów wydawania w termosach i pojemnikach.</li>
</ul>
<div class="tip">Przygotowalnia jaj musi mieć urządzenie do mycia i dezynfekcji (lub stosuje się masę jajową pasteryzowaną). Jaja to ryzyko salmonelli.</div>` },
        { tytul: "HACCP i bezpieczeństwo żywności", tresc: `<h4>Fundamenty: GHP i GMP</h4>
<p><b>GHP</b> (dobra praktyka higieniczna) obejmuje higienę personelu, pomieszczeń, sprzętu, zwalczanie szkodników, gospodarkę odpadami, jakość wody. <b>GMP</b> (dobra praktyka produkcyjna) obejmuje właściwe procesy: przyjęcie surowców, przechowywanie, obróbkę, transport. Na nich opiera się <b>HACCP</b> (analiza zagrożeń i krytyczne punkty kontroli).</p>
<h4>7 zasad HACCP</h4>
<ol>
<li>Analiza zagrożeń (biologicznych, chemicznych, fizycznych, alergenów).</li>
<li>Wyznaczenie krytycznych punktów kontroli <b>CCP</b> (np. obróbka cieplna, schładzanie).</li>
<li>Ustalenie limitów krytycznych (np. temperatura wewnątrz mięsa drobiowego co najmniej 75°C).</li>
<li>Ustalenie systemu monitorowania CCP (pomiar, kto, jak często).</li>
<li>Działania korygujące przy przekroczeniu limitu.</li>
<li>Procedury weryfikacji (czy system działa).</li>
<li>Dokumentacja i zapisy.</li>
</ol>
<h4>Temperatury, które trzeba znać</h4>
<div class="tw"><table><tr><th>Czynność</th><th>Wartość</th></tr>
<tr><td>Przechowywanie chłodnicze</td><td>0 do +4°C (większość produktów), nabiał do +6°C</td></tr>
<tr><td>Przechowywanie zamrażalnicze</td><td>-18°C i niżej</td></tr>
<tr><td>Strefa niebezpieczna (szybki wzrost bakterii)</td><td>od +5°C do +63°C</td></tr>
<tr><td>Utrzymywanie potraw gorących</td><td>co najmniej +63°C</td></tr>
<tr><td>Schładzanie potraw</td><td>jak najszybciej przez strefę niebezpieczną, w szybkoschładzarce</td></tr>
<tr><td>Rozmrażanie</td><td>w chłodni, nigdy w temperaturze pokojowej; nie zamraża się ponownie</td></tr></table></div>
<h4>Próbki żywności</h4>
<p>Zakłady żywienia zbiorowego (np. szkoły, szpitale, przedszkola, wycieczki zorganizowane) pobierają <b>próbki każdej potrawy</b> w ilości co najmniej <b>150 g</b> (lub całą porcję, jeśli jest mniejsza), przechowują je w zamkniętych, opisanych pojemnikach w temperaturze nie wyższej niż <b>+4°C przez 3 dni (72 godziny)</b>. Służą do badania w razie zatrucia.</p>
<h4>Higiena personelu</h4>
<p>Orzeczenie lekarskie do celów sanitarno-epidemiologicznych, czysta odzież robocza i nakrycie głowy, brak biżuterii, mycie i dezynfekcja rąk (po toalecie, po kontakcie z surowym mięsem, jajami, odpadami), zgłaszanie biegunki i ran na dłoniach.</p>
<div class="tip">Próbki: 150 g, +4°C, 72 godziny. Te trzy liczby padają na egzaminie bardzo często.</div>` },
        { tytul: "Organizacja pracy i zatrudnienie", tresc: `<h4>Struktura personelu kuchni (brigade de cuisine)</h4>
<div class="tw"><table><tr><th>Stanowisko</th><th>Zadania</th></tr>
<tr><td>Szef kuchni (chef)</td><td>menu, zamówienia, nadzór, kalkulacja</td></tr>
<tr><td>Zastępca szefa (sous-chef)</td><td>organizacja zmian, kontrola jakości</td></tr>
<tr><td>Kucharz zmianowy, sekcyjny (chef de partie)</td><td>sekcja: sosy, ryby, mięsa, zupy, garde manger (kuchnia zimna), pâtissier (desery)</td></tr>
<tr><td>Pomoc kuchenna</td><td>obróbka wstępna, porządek</td></tr>
<tr><td>Zmywacz (steward)</td><td>zmywalnia, czystość sprzętu</td></tr></table></div>
<h4>Planowanie zatrudnienia</h4>
<p>Liczbę pracowników ustala się na podstawie liczby wydawanych posiłków, godzin otwarcia, stopnia przetworzenia surowców (półprodukty zmniejszają nakład pracy) i wyposażenia. Przykład obliczenia: produkcja wymaga 64 roboczogodzin dziennie, zmiana trwa 8 godzin, więc potrzeba 8 pracowników na dzień. Do tego dolicza się rezerwę na urlopy i zwolnienia (np. 10-15%).</p>
<h4>Harmonogram pracy</h4>
<ul>
<li>Uwzględnia przepisy Kodeksu pracy: odpoczynek dobowy co najmniej 11 godzin, tygodniowy co najmniej 35 godzin, przerwa co najmniej 15 minut przy pracy co najmniej 6 godzin.</li>
<li>Szczyty pracy w gastronomii: przygotowanie przed otwarciem, pora obiadowa, wieczorne imprezy.</li>
<li>Młodociani mają skrócony czas pracy i nie mogą pracować w porze nocnej.</li>
</ul>
<h4>Dobór wyposażenia</h4>
<p>Urządzenia dobiera się do wielkości produkcji, asortymentu i systemu pracy. Piec konwekcyjno-parowy zastępuje wiele urządzeń (piekarnik, parowar, regeneracja), szybkoschładzarka jest niezbędna przy cook-chill, a urządzenia do utrzymywania temperatury (bemary, podgrzewacze) w wydawalni.</p>
<h4>Gospodarka odpadami</h4>
<p>Segregacja (bio, tworzywa, papier, szkło, zmieszane), odbiór zużytego oleju przez wyspecjalizowaną firmę, odpady pokonsumpcyjne nie mogą trafiać do skarmiania zwierząt. Pojemniki zamykane, opróżniane codziennie.</p>
<h4>Szkolenia personelu</h4>
<p>Nowy pracownik przechodzi szkolenie wstępne BHP (ogólne i stanowiskowe) oraz szkolenie z zasad higieny i systemu HACCP. Szkolenia okresowe przypominają procedury, a ich odbycie dokumentuje się w aktach pracownika. Kierownik zakładu odpowiada za to, by pracownik nie rozpoczął pracy bez badań i szkoleń.</p>
<div class="tip">Przy zadaniach o zatrudnieniu: roboczogodziny dzielisz przez długość zmiany i zaokrąglasz liczbę osób w górę.</div>` }
      ],
      pytania: [
        Q("Stołówka szpitalna to przykład zakładu żywienia", "zamkniętego", "otwartego", "komercyjnego", "sezonowego", "Żywienie dla określonej grupy osób."),
        Q("Ruch surowców, potraw i naczyń w zakładzie powinien odbywać się zgodnie z zasadą", "jednokierunkowości", "FIFO", "rotacji personelu", "dwukierunkowości", "Drogi czyste i brudne nie mogą się krzyżować."),
        Q("Potrawy gorące utrzymuje się do wydania w temperaturze co najmniej", "63°C", "45°C", "50°C", "100°C", "Poniżej 63°C zaczyna się strefa niebezpieczna."),
        Q("Próbki potraw w żywieniu zbiorowym przechowuje się przez", "72 godziny w temperaturze do +4°C", "24 godziny w temperaturze pokojowej", "7 dni w zamrażarce", "48 godzin w temperaturze do +8°C", "Ilość próbki co najmniej 150 g."),
        Q("Pierwszą zasadą systemu HACCP jest", "analiza zagrożeń", "wyznaczenie CCP", "ustalenie działań korygujących", "prowadzenie dokumentacji", "Najpierw identyfikuje się zagrożenia."),
        Q("System, w którym potrawę po ugotowaniu szybko schładza się i przechowuje kilka dni w chłodni, to", "cook-chill", "cook-freeze", "sous-vide", "tradycyjny", "Cook-freeze polega na zamrożeniu."),
        Q("Produkcja wymaga 50 roboczogodzin dziennie, zmiana trwa 8 godzin. Minimalna liczba kucharzy to", "7", "6", "8", "5", "50 / 8 = 6,25, zaokrąglamy w górę do 7."),
        Q("Kucharz odpowiedzialny za kuchnię zimną (przystawki, sałatki, wędliny) to", "garde manger", "pâtissier", "saucier", "steward", "Pâtissier odpowiada za desery i wyroby cukiernicze.")
      ]
    },
    {
      id: "uslugi", tytul: "Usługi gastronomiczne i przyjęcia", opis: "Zaplanujesz i zorganizujesz obsługę konsumentów oraz przyjęcie okolicznościowe od oferty do rozliczenia.",
      lekcje: [
        { tytul: "Metody obsługi i nakrycia", tresc: `<h4>Systemy obsługi</h4>
<ul>
<li><b>Kelnerski</b>: kelner przyjmuje zamówienie i podaje potrawy do stołu (restauracje).</li>
<li><b>Samoobsługowy</b>: konsument sam pobiera potrawy (bar mleczny, stołówka, bufet).</li>
<li><b>Półsamoobsługowy (mieszany)</b>: np. zamówienie przy ladzie, a potrawa donoszona do stolika.</li>
<li>Room service (do pokoju hotelowego), catering zewnętrzny.</li>
</ul>
<h4>Metody podawania potraw</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th></tr>
<tr><td>Francuska</td><td>kelner podaje półmisek z lewej strony, a gość sam nakłada potrawę na talerz</td></tr>
<tr><td>Angielska</td><td>kelner nakłada potrawę z półmiska na talerz gościa sztućcami serwisowymi, od lewej strony</td></tr>
<tr><td>Amerykańska (talerzowa)</td><td>porcja nakładana w kuchni, kelner stawia talerz z prawej strony; najszybsza i najczęstsza</td></tr>
<tr><td>Z bocznego stołu (guéridon)</td><td>kelner porcjuje, flambiruje lub kończy potrawę na wózku przy gościu</td></tr></table></div>
<h4>Zasady kelnerskie</h4>
<ul>
<li>napoje nalewa się i podaje z prawej strony, zbiera naczynia z prawej strony,</li>
<li>półmiski i pieczywo podaje się z lewej, talerze z gotowymi porcjami z prawej,</li>
<li>pierwsza obsługiwana jest najstarsza kobieta lub gość honorowy, gospodarz na końcu,</li>
<li>naczynia zbiera się, gdy wszyscy przy stole skończyli (sztućce ułożone równolegle na talerzu).</li>
</ul>
<h4>Nakrycie</h4>
<p>Nakrycie <b>zasadnicze</b> (podstawowe): talerz płytki lub podstawowy, nóż z prawej (ostrzem do talerza), widelec z lewej, kieliszek lub szklanka nad nożem, serwetka. Nakrycie <b>rozszerzone</b>: sztućce do kolejnych dań układane od zewnątrz (pierwsze danie to sztućce najdalsze od talerza), sztućce deserowe nad talerzem, talerzyk do pieczywa z lewej z nożykiem. Kieliszki ustawia się w kolejności podawania napojów od prawej strony.</p>
<h4>Kolejność dań w menu</h4>
<p>Przystawka zimna, zupa, przystawka gorąca (lub danie rybne), danie główne, sery, deser, napoje gorące. W menu klasycznym ryby podaje się przed mięsem.</p>
<div class="tip">Zapamiętaj: „z prawej nalewamy i zbieramy”, półmisek zawsze z lewej.</div>` },
        { tytul: "Rodzaje przyjęć okolicznościowych", tresc: `<h4>Przyjęcia zasiadane</h4>
<ul>
<li><b>Bankiet (śniadanie, obiad, kolacja zasiadana)</b>: goście przy stołach, obsługa kelnerska, menu ustalone z gospodarzem, plan rozmieszczenia gości.</li>
<li>Normy obsługi: zwykle 1 kelner na 10-12 osób przy bankiecie zasiadanym, przy bardziej wykwintnej obsłudze 1 na 6-8 osób.</li>
<li>Ustawienie stołów: w kształcie litery T, U, E, stoły okrągłe (8-10 osób), stół prostokątny.</li>
</ul>
<h4>Przyjęcia na stojąco</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Cechy</th></tr>
<tr><td>Bufet (szwedzki stół)</td><td>potrawy wyłożone na stołach bufetowych, goście nakładają sami; można dostawić stoliki</td></tr>
<tr><td>Koktajl (cocktail party)</td><td>krótki (1,5-2 godziny), napoje i drobne przekąski (kanapki, koreczki) podawane na tacach</td></tr>
<tr><td>Raut</td><td>przyjęcie wieczorne na stojąco, bardziej uroczyste, bogatszy wybór zimnych i gorących przekąsek</td></tr>
<tr><td>Garden party</td><td>przyjęcie w ogrodzie, często grill, latem w ciągu dnia</td></tr>
<tr><td>Lampka wina, toast</td><td>krótkie spotkanie, np. po uroczystości</td></tr></table></div>
<h4>Normy powierzchni i ilości</h4>
<ul>
<li>przy przyjęciu zasiadanym ok. 60-70 cm długości stołu na osobę,</li>
<li>przy bufecie przyjmuje się ok. 1 m długości stołu bufetowego na 10-15 osób (zależnie od zadania),</li>
<li>przy koktajlu 6-10 przekąsek na osobę na godzinę; przy raucie więcej, bo zastępuje kolację.</li>
</ul>
<h4>Catering wyjazdowy</h4>
<p>Wymaga transportu potraw w odpowiedniej temperaturze (termosy, pojemniki GN, auta chłodnie), sprzętu (stoły, naczynia, podgrzewacze), personelu i zgody na korzystanie z miejsca. Czas między przygotowaniem a podaniem musi być jak najkrótszy, z kontrolą temperatury.</p>
<h4>Zasady protokołu</h4>
<p>Miejsce honorowe: po prawej stronie gospodarza dla najważniejszego gościa (kobiety), po lewej drugie co do ważności. Na przyjęciu oficjalnym stosuje się winietki z nazwiskami i plan stołów przy wejściu.</p>
<div class="tip">Koktajl jest krótki i z drobnymi przekąskami, raut dłuższy i obfitszy. To dwa najczęściej mylone pojęcia.</div>` },
        { tytul: "Przyjęcie od oferty do rozliczenia", tresc: `<h4>Etapy organizacji przyjęcia</h4>
<ol>
<li><b>Przyjęcie zamówienia</b>: data, godzina, czas trwania, liczba gości, rodzaj przyjęcia, budżet, oczekiwania (diety, alergie, dekoracje, muzyka).</li>
<li><b>Oferta</b>: propozycja menu (kilka wariantów), cena za osobę, napoje, usługi dodatkowe, warunki płatności i anulacji.</li>
<li><b>Umowa (zlecenie)</b>: ostateczne menu, liczba osób (termin potwierdzenia ostatecznej liczby, np. 7 dni przed), zaliczka lub zadatek, odpowiedzialność za szkody.</li>
<li><b>Planowanie</b>: zapotrzebowanie surowcowe, harmonogram produkcji, plan sali, liczba kelnerów i kucharzy, zestawienie sprzętu i bielizny stołowej.</li>
<li><b>Realizacja</b>: przygotowanie sali, odprawa personelu (briefing), obsługa według planu.</li>
<li><b>Rozliczenie</b>: faktura według rzeczywistej liczby gości (nie mniej niż zadeklarowana), dodatkowe napoje, dopłaty, analiza kosztów.</li>
</ol>
<h4>Kalkulacja przyjęcia: przykład</h4>
<p>Przyjęcie dla 80 osób. Koszt surowców menu na osobę 48 zł, narzut 120%. Cena netto menu na osobę: 48 × 2,2 = 105,60 zł. Napoje bezalkoholowe pakiet 15 zł netto. Razem netto na osobę: 120,60 zł. Dla 80 osób: 9 648 zł netto. VAT 8%: 771,84 zł, razem brutto 10 419,84 zł. Alkohol rozlicza się osobno z VAT 23%.</p>
<h4>Plan zatrudnienia na przyjęcie</h4>
<p>Przy normie 1 kelner na 10 osób: 80 / 10 = 8 kelnerów oraz kierownik sali (maître d'hôtel) i barman. Przy bufecie mniej kelnerów (obsługa uzupełnia półmiski i zbiera naczynia).</p>
<h4>Jakość usług i reklamacje</h4>
<ul>
<li>standardy obsługi spisane w procedurach (czas podania, temperatura potraw, wygląd personelu),</li>
<li>badanie satysfakcji: ankiety, opinie online, tajemniczy klient (mystery shopper),</li>
<li>reklamacja w restauracji: wysłuchać, przeprosić, wymienić potrawę lub zaproponować inną, poinformować kierownika, zapisać zdarzenie.</li>
</ul>
<h4>Marketing zakładu</h4>
<p>Karta menu jako narzędzie sprzedaży: najlepiej sprzedające się i najbardziej opłacalne pozycje w polu widzenia (prawy górny róg), opis zachęcający, oznaczenia alergenów i potraw wegetariańskich. Analiza menu (menu engineering) dzieli pozycje według popularności i zyskowności na: gwiazdy, konie pociągowe, zagadki i psy.</p>
<div class="tip">W umowie przyjęcia zawsze określ termin potwierdzenia ostatecznej liczby gości. Rozliczasz liczbę zadeklarowaną, nawet jeśli przyszło mniej osób.</div>` }
      ],
      pytania: [
        Q("Metoda podawania, w której kelner nakłada potrawę z półmiska na talerz gościa, to metoda", "angielska", "francuska", "amerykańska", "szwedzka", "W metodzie francuskiej gość nakłada sam."),
        Q("Napoje nalewa się gościowi", "z prawej strony", "z lewej strony", "od strony gospodarza", "zza pleców, z dowolnej strony", "Z prawej też zbiera się naczynia."),
        Q("Przy metodzie amerykańskiej talerz z gotową porcją stawia się", "z prawej strony gościa", "z lewej strony gościa", "na środku stołu", "na stole bufetowym", "Porcja nakładana jest w kuchni."),
        Q("Krótkie przyjęcie na stojąco z napojami i drobnymi przekąskami podawanymi na tacach to", "koktajl", "bankiet", "raut", "obiad zasiadany", "Raut jest dłuższy i bardziej obfity."),
        Q("Na przyjęcie zasiadane dla 120 osób przy normie 1 kelner na 12 osób potrzeba kelnerów", "10", "12", "8", "14", "120 / 12 = 10."),
        Q("Miejsce dla najważniejszego gościa znajduje się", "po prawej stronie gospodarza", "po lewej stronie gospodarza", "naprzeciwko wejścia", "na końcu stołu", "Po lewej siedzi gość drugi co do ważności."),
        Q("Koszt surowców menu na osobę 50 zł, narzut 100%. Cena netto menu na osobę wynosi", "100 zł", "50 zł", "150 zł", "75 zł", "50 × 2 = 100 zł."),
        Q("W analizie menu pozycje popularne i bardzo zyskowne to", "gwiazdy", "psy", "zagadki", "konie pociągowe", "Konie pociągowe są popularne, ale mało zyskowne.")
      ]
    }
  ]);

  pod("SPC.01", [
    {
      id: "surowce", tytul: "Surowce i dodatki", opis: "Dobierzesz i ocenisz surowce cukiernicze, wiedząc, jak każdy z nich działa w cieście i masie.",
      lekcje: [
        { tytul: "Mąka, skrobia i cukry", tresc: `<h4>Typ mąki</h4>
<p>Typ mąki oznacza zawartość popiołu (składników mineralnych) w miligramach na 100 g suchej masy mąki. Im niższy typ, tym jaśniejsza mąka, mniej otrąb i błonnika.</p>
<div class="tw"><table><tr><th>Typ</th><th>Nazwa handlowa</th><th>Zastosowanie w cukierni</th></tr>
<tr><td>450</td><td>tortowa</td><td>biszkopty, ciasta ucierane, delikatne wyroby</td></tr>
<tr><td>500-550</td><td>krupczatka, luksusowa</td><td>ciasta kruche (krupczatka), drożdżowe, francuskie, parzone</td></tr>
<tr><td>650-750</td><td>poznańska, chlebowa</td><td>pieczywo, rzadziej ciasta</td></tr>
<tr><td>1850-2000</td><td>graham, razowa</td><td>wyroby pełnoziarniste, ciastka „fit”</td></tr></table></div>
<h4>Gluten i jego rola</h4>
<p>Gluten tworzą białka gliadyna i glutenina po połączeniu z wodą i wyrabianiu. Daje elastyczną siatkę, która zatrzymuje gazy. Dużo mocnego glutenu jest potrzebne w cieście <b>drożdżowym, francuskim i parzonym</b>. W cieście <b>kruchym i biszkoptowym</b> gluten jest niepożądany (wyrób twardy, gumowaty), dlatego używa się mąki o słabszym glutenie, część mąki zastępuje skrobią ziemniaczaną i krótko miesza.</p>
<h4>Skrobia</h4>
<p>Skrobia ziemniaczana kleikuje w temperaturze ok. 60-70°C, pszenna nieco wyżej. Stosuje się ją w biszkoptach (delikatność), budyniach, kremach gotowanych, jako zagęstnik. Zbyt długie gotowanie z kwaśnym sokiem rozrzedza kleik.</p>
<h4>Cukry i substancje słodzące</h4>
<ul>
<li><b>Sacharoza</b> (cukier biały, kryształ, puder): słodzi, rozpuszcza się w wodzie, karmelizuje w ok. 160-180°C, daje barwę skórki, przedłuża świeżość, hamuje rozwój drobnoustrojów w wysokim stężeniu (konfitury).</li>
<li><b>Cukier puder</b>: do ciast kruchych, mas, lukrów (szybko się rozpuszcza, daje gładką strukturę).</li>
<li><b>Syrop skrobiowy (glukozowy)</b>: zapobiega krystalizacji sacharozy w fondancie, karmelu i masach.</li>
<li><b>Cukier inwertowany</b> (mieszanina glukozy i fruktozy): utrzymuje wilgotność, opóźnia czerstwienie.</li>
<li><b>Miód</b>: w piernikach daje aromat, barwę i wilgotność; z sodą tworzy środowisko do spulchniania.</li>
</ul>
<h4>Ocena i przechowywanie mąki</h4>
<p>Mąkę ocenia się organoleptycznie: barwa, zapach (bez stęchlizny), smak (bez goryczy i zgrzytu piasku), brak szkodników i grudek. Przechowuje się ją w suchym (wilgotność powietrza do ok. 70%), przewiewnym magazynie, w temperaturze ok. 10-18°C, na paletach, z dala od ścian. Przed użyciem mąkę się przesiewa (napowietrzenie, usunięcie zanieczyszczeń).</p>
<div class="tip">Na teście „mąka do biszkoptu” to tortowa typ 450 z dodatkiem skrobi ziemniaczanej, a „mąka do ciasta francuskiego” to mąka o mocnym glutenie (np. typ 550).</div>` },
        { tytul: "Jaja, tłuszcze i mleko", tresc: `<h4>Jaja</h4>
<div class="tw"><table><tr><th>Element</th><th>Udział w masie jaja</th><th>Rola w cukiernictwie</th></tr>
<tr><td>Skorupa</td><td>ok. 10-12%</td><td>odpad</td></tr>
<tr><td>Białko</td><td>ok. 55-60%</td><td>tworzy pianę (bezy, biszkopt), ścina się od ok. 62°C</td></tr>
<tr><td>Żółtko</td><td>ok. 30%</td><td>emulguje (lecytyna), barwi, ścina się od ok. 65-70°C</td></tr></table></div>
<p>Klasy wagowe: <b>S</b> poniżej 53 g, <b>M</b> 53-63 g, <b>L</b> 63-73 g, <b>XL</b> 73 g i więcej. Pierwsza cyfra kodu na skorupce to system chowu: 0 ekologiczny, 1 wolny wybieg, 2 ściółkowy, 3 klatkowy, potem kod kraju (PL) i weterynaryjny numer zakładu.</p>
<p>W zakładzie jaja przed wybiciem przechodzą przez <b>przygotowalnię jaj</b>: przegląd na owoskopie (świeżość, pęknięcia), mycie, dezynfekcja (odkażanie), płukanie. Alternatywą jest pasteryzowana masa jajowa (płynna, mrożona lub w proszku). Wybija się każde jajo osobno do naczynia kontrolnego, by nie zepsuć całej partii.</p>
<h4>Piana z białek: zasady</h4>
<ul>
<li>naczynie i rózga muszą być odtłuszczone, białko bez śladu żółtka (tłuszcz niszczy pianę),</li>
<li>szczypta soli lub kwasku cytrynowego stabilizuje pianę,</li>
<li>cukier dodaje się stopniowo, gdy piana jest już spieniona, inaczej ubijanie trwa dłużej.</li>
</ul>
<h4>Tłuszcze</h4>
<ul>
<li><b>Masło</b>: co najmniej 80% tłuszczu mlecznego (masło ekstra ok. 82%), najlepszy smak, topnieje ok. 30-35°C, trudniejsze w pracy przy cieście francuskim.</li>
<li><b>Margaryny cukiernicze</b>: specjalne do ciast kruchych, kremów i ciasta francuskiego (wyższa temperatura topnienia, plastyczność).</li>
<li><b>Smalec</b>: dawniej do ciast kruchych i pączków; <b>oleje</b> roślinne: do ciast ucieranych na oleju i smażenia pączków, faworków (temperatura smażenia ok. 170-180°C).</li>
</ul>
<p>Tłuszcz w cieście „przerywa” siatkę glutenową (kruchość), zwiększa objętość ciast ucieranych, spowalnia czerstwienie.</p>
<h4>Mleko i śmietanka</h4>
<p>Mleko w proszku i świeże poprawia smak, barwę skórki i wartość odżywczą. Do ubijania używa się śmietanki <b>co najmniej 30% tłuszczu</b> (najlepiej 36%), schłodzonej do ok. 4-8°C, bo ciepła się nie ubije lub zmieni w masło.</p>
<div class="tip">Jedno jajo średnie przyjmuje się w recepturach jako ok. 50 g masy jajowej bez skorupy. Taką wartość stosuje się przy przeliczaniu sztuk jaj na kilogramy.</div>` },
        { tytul: "Substancje żelujące i spulchniające", tresc: `<h4>Substancje żelujące</h4>
<div class="tw"><table><tr><th>Substancja</th><th>Pochodzenie</th><th>Sposób użycia</th></tr>
<tr><td>Żelatyna</td><td>zwierzęce (kolagen)</td><td>namoczyć w zimnej wodzie, rozpuścić w ciepłym płynie (ok. 60°C), nie gotować; tężeje w chłodzie, topi się ok. 30-35°C</td></tr>
<tr><td>Agar</td><td>roślinne (krasnorosty)</td><td>trzeba zagotować; tężeje już ok. 35-40°C, żel odporny na wyższą temperaturę</td></tr>
<tr><td>Pektyna</td><td>roślinne (jabłka, cytrusy)</td><td>żeluje w obecności cukru i kwasu (galaretki, marmolady, glazury)</td></tr>
<tr><td>Skrobia modyfikowana</td><td>roślinne</td><td>budynie, kremy odporne na zamrażanie i pieczenie</td></tr></table></div>
<p>Świeży ananas, kiwi, papaja i mango zawierają enzymy rozkładające białka, przez co <b>żelatyna nie tężeje</b>. Owoce trzeba sparzyć lub użyć owoców z puszki albo zastosować agar.</p>
<h4>Spulchnianie ciast</h4>
<div class="tw"><table><tr><th>Sposób</th><th>Czynnik</th><th>Przykład wyrobu</th></tr>
<tr><td>Biologiczny</td><td>drożdże (CO2 z fermentacji)</td><td>ciasto drożdżowe, półfrancuskie, pączki</td></tr>
<tr><td>Chemiczny</td><td>proszek do pieczenia, amoniak, soda, potaż</td><td>ciasta ucierane, kruche, pierniki</td></tr>
<tr><td>Mechaniczny</td><td>powietrze wprowadzone ubijaniem</td><td>biszkopt, beza</td></tr>
<tr><td>Fizyczny</td><td>para wodna</td><td>ciasto francuskie, parzone (ptysie, eklery)</td></tr></table></div>
<h4>Drożdże</h4>
<p>Optymalna temperatura fermentacji to ok. 28-32°C. Powyżej ok. 45°C drożdże słabną, a w temperaturze ok. 55-60°C giną. Duża ilość cukru, soli i tłuszczu spowalnia fermentację, dlatego do ciast bogatych stosuje się więcej drożdży (np. 5-8% masy mąki) i metodę z rozczynem. Sól nie powinna stykać się bezpośrednio z drożdżami.</p>
<h4>Spulchniacze chemiczne</h4>
<ul>
<li><b>Proszek do pieczenia</b>: wodorowęglan sodu + kwaśny nośnik + skrobia (zapobiega reakcji w opakowaniu). Działa w kontakcie z wilgocią i w temperaturze.</li>
<li><b>Amoniak</b> (węglany amonu): rozkłada się w wysokiej temperaturze na gazy, w tym amoniak. Stosuje się go <b>tylko w wyrobach płaskich, cienkich i suchych</b> (pierniczki, ciastka kruche, herbatniki), z których gaz zdąży uciec.</li>
<li><b>Soda oczyszczona</b>: potrzebuje kwaśnego środowiska (miód, kwaśne mleko, kakao, maślanka), inaczej daje mydlany posmak.</li>
</ul>
<div class="tip">Amoniaku nie dodaje się do wysokich wyrobów (np. babek), bo gaz nie ulotni się z miękiszu i wyrób będzie pachniał amoniakiem.</div>` }
      ],
      pytania: [
        Q("Do wypieku biszkoptu najlepsza jest mąka", "tortowa typ 450 z dodatkiem skrobi ziemniaczanej", "razowa typ 2000", "chlebowa typ 750", "graham typ 1850", "Biszkopt wymaga mąki o słabym glutenie."),
        Q("Typ mąki określa", "zawartość popiołu (składników mineralnych)", "zawartość glutenu", "zawartość wody", "stopień rozdrobnienia", "Typ 450 to ok. 450 mg popiołu w 100 g s.m."),
        Q("Jajo klasy wagowej L waży", "od 63 g do 73 g", "od 53 g do 63 g", "poniżej 53 g", "73 g i więcej", "S < 53, M 53-63, L 63-73, XL od 73 g."),
        Q("Cyfra 3 na początku kodu jaja oznacza chów", "klatkowy", "ekologiczny", "na wolnym wybiegu", "ściółkowy", "0 ekologiczny, 1 wolny wybieg, 2 ściółkowy, 3 klatkowy."),
        Q("Żelatyna nie stężeje w galaretce ze świeżym", "ananasem", "jabłkiem", "truskawkami", "wiśniami", "Enzymy ananasa rozkładają białko żelatyny."),
        Q("Amoniak jako spulchniacz stosuje się do wyrobów", "płaskich i cienkich, np. pierniczków", "wysokich, np. babek", "biszkoptowych", "drożdżowych", "Gaz musi ulotnić się w czasie pieczenia."),
        Q("Ciasto parzone i francuskie spulchnia głównie", "para wodna", "dwutlenek węgla z drożdży", "proszek do pieczenia", "amoniak", "To spulchnianie fizyczne."),
        Q("Do ubicia śmietany należy użyć śmietanki o zawartości tłuszczu co najmniej", "30%", "12%", "18%", "22%", "Najlepiej 36%, dobrze schłodzonej.")
      ]
    },
    {
      id: "ciasta", tytul: "Technologia ciast", opis: "Wykonasz każde podstawowe ciasto cukiernicze z zachowaniem parametrów i unikniesz typowych błędów.",
      lekcje: [
        { tytul: "Ciasto drożdżowe i półfrancuskie", tresc: `<h4>Metody sporządzania ciasta drożdżowego</h4>
<ul>
<li><b>Jednofazowa (bezpośrednia)</b>: wszystkie składniki naraz, drożdże rozpuszczone w części płynu. Do ciast ubogich i średnio bogatych.</li>
<li><b>Dwufazowa (z rozczynem)</b>: najpierw rozczyn z drożdży, części mąki, mleka i odrobiny cukru (fermentacja ok. 20-30 minut, aż podwoi objętość), potem ciasto właściwe. Do ciast bogatych (dużo tłuszczu, jaj, cukru), np. baby wielkanocnej, ciasta na pączki.</li>
</ul>
<h4>Etapy i parametry</h4>
<ol>
<li><b>Wyrabianie</b>: do uzyskania gładkiego, elastycznego ciasta odchodzącego od ręki i naczynia; tłuszcz (roztopiony, przestudzony lub plastyczny) dodaje się pod koniec, gdy gluten już się wytworzył.</li>
<li><b>Fermentacja</b>: w temperaturze ok. 28-32°C, aż ciasto podwoi objętość; w trakcie ciasto można przebić (odgazować).</li>
<li><b>Dzielenie i formowanie</b>: drożdżówki, bułki, warkocze, placek z kruszonką.</li>
<li><b>Garowanie</b> (rozrost końcowy): w garowni ok. 30-35°C przy wilgotności 75-85%, do ok. 1,5-2-krotnego wzrostu objętości.</li>
<li><b>Pieczenie</b>: drobne wyroby ok. 200-220°C (10-20 minut), placki 180-200°C, duże baby ok. 170-180°C dłużej. Pączki smaży się w tłuszczu ok. 170-180°C.</li>
</ol>
<h4>Błędy fermentacji</h4>
<div class="tw"><table><tr><th>Wada</th><th>Objaw</th><th>Przyczyna</th></tr>
<tr><td>Niedogarowanie</td><td>wyrób mały, zbity, popękany boczek</td><td>za krótki rozrost, zbyt chłodno</td></tr>
<tr><td>Przegarowanie</td><td>wyrób opadnięty, płaski, kwaśny smak, duże pory</td><td>za długi rozrost, za ciepło</td></tr>
<tr><td>Twardy, ciężki miękisz</td><td>małe pory</td><td>za mało drożdży, za zimne składniki, za słabe wyrobienie</td></tr></table></div>
<h4>Ciasto półfrancuskie (drożdżowe listkowane)</h4>
<p>To ciasto drożdżowe, w które wykłada się warstwę zimnego tłuszczu i składa (laminuje) jak ciasto francuskie, np. 3 składania pojedyncze (na 3). Wyroby: rogaliki (croissanty), ciastka duńskie, ślimaki. Spulchniają je jednocześnie drożdże i para wodna. Ciasto trzeba chłodzić między składaniami, a garować w niższej temperaturze (ok. 26-28°C), żeby tłuszcz się nie roztopił.</p>
<div class="tip">Wyroby drożdżowe przed pieczeniem smaruje się jajem roztrzepanym z odrobiną wody lub mleka, co daje błyszczącą, rumianą skórkę.</div>` },
        { tytul: "Biszkopt, ciasta ucierane i bezy", tresc: `<h4>Ciasto biszkoptowe</h4>
<p>Klasyczna proporcja: na 1 jajo (ok. 50 g) ok. 30 g cukru i 30 g mąki (do 1/3 mąki można zastąpić skrobią ziemniaczaną). Biszkopt bez tłuszczu i proszku spulchnia wyłącznie piana.</p>
<ul>
<li><b>Metoda na ciepło</b>: jaja z cukrem ubija się na parze do ok. 40-45°C, potem na zimno do wystudzenia i gęstości. Daje stabilną, drobną pianę (biszkopt tortowy).</li>
<li><b>Metoda na zimno</b>: osobno ubija się białka z cukrem, dodaje żółtka, a na końcu przesianą mąkę.</li>
<li>Mąkę wmiesza się delikatnie, krótko, łyżką lub szpatułą (nie mikserem na wysokich obrotach), żeby nie zniszczyć piany.</li>
<li>Pieczenie: ok. 170-180°C, 30-40 minut (tortownica), roladę cienką ok. 200-220°C krótko. Formę wykłada się papierem tylko na dnie, by ciasto mogło „wspinać się” po bokach.</li>
<li>W pierwszych 15-20 minutach nie otwiera się pieca. Gotowość sprawdza się patyczkiem.</li>
</ul>
<h4>Ciasto ucierane</h4>
<p>Tłuszcz uciera się z cukrem na puszystą masę, dodaje jaja stopniowo (po jednym), potem mąkę z proszkiem do pieczenia na zmianę z płynem. Składniki muszą mieć <b>temperaturę pokojową</b>, inaczej masa się zwarzy. Wyroby: babki, keksy, muffiny, murzynek. Pieczenie ok. 170-180°C. Babka gotowa, gdy patyczek wychodzi suchy.</p>
<h4>Masy bezowe</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Wykonanie</th><th>Zastosowanie</th></tr>
<tr><td>Francuska (na zimno)</td><td>białka ubija się na zimno, dodając cukier (zwykle 1 część białka na 2 części cukru)</td><td>bezy suszone, pavlova</td></tr>
<tr><td>Szwajcarska (na ciepło)</td><td>białka z cukrem podgrzewa się na parze do ok. 50-60°C i ubija</td><td>dekoracje, kremy</td></tr>
<tr><td>Włoska (z syropem)</td><td>do ubitych białek wlewa się gorący syrop cukrowy (ok. 118-121°C)</td><td>krem maślany na bezie, opalane dekoracje, musy</td></tr></table></div>
<p>Bezy się <b>suszy</b>, a nie piecze: ok. 90-120°C przez 1,5-3 godziny, często z uchylonymi drzwiczkami pieca. Za wysoka temperatura powoduje brązowienie i pękanie, wilgotne powietrze daje lepkie bezy.</p>
<h4>Ciasto biszkoptowo-tłuszczowe</h4>
<p>Biszkopt z dodatkiem roztopionego, przestudzonego masła (np. genuaz). Tłuszcz dodaje się na samym końcu, delikatnie, bo łatwo niszczy pianę.</p>
<div class="tip">Zakalec w biszkopcie to najczęściej skutek otwarcia pieca, zbyt długiego mieszania mąki lub zbyt niskiej temperatury pieczenia.</div>` },
        { tytul: "Ciasto kruche, francuskie, parzone i piernikowe", tresc: `<h4>Ciasto kruche</h4>
<p>Klasyczna proporcja <b>1 : 2 : 3</b> (cukier : tłuszcz : mąka). Składniki zimne, szybkie zagniatanie (lub siekanie tłuszczu z mąką), chłodzenie ciasta ok. 30 minut. Zbyt długie wyrabianie i ciepłe ręce powodują <b>zaparzenie</b>: tłuszcz się topi, ciasto staje się lepkie, a po upieczeniu twarde. Pieczenie ok. 180-200°C do złotego koloru. Ciasto półkruche zawiera mniej tłuszczu i proszek do pieczenia (np. na mazurki, tarty, spody).</p>
<h4>Ciasto francuskie</h4>
<ol>
<li>Ciasto podstawowe (wodne): mąka o mocnym glutenie, woda, sól, kilka kropli kwasu (ocet, sok z cytryny), trochę tłuszczu.</li>
<li>Tłuszcz wykładany: masło lub margaryna do ciasta francuskiego, plastyczne, w temperaturze ok. 12-15°C, podobnej twardości jak ciasto.</li>
<li>Zawinięcie tłuszczu, wałkowanie i składanie: zwykle 4 razy po 3 (pojedyncze) albo składania podwójne (na 4), z chłodzeniem ok. 20-30 minut między seriami. Powstaje kilkaset warstw.</li>
<li>Pieczenie w wysokiej temperaturze ok. 220-230°C: woda w cieście zmienia się w parę i rozdziela warstwy.</li>
</ol>
<p>Wyroby: ciastka francuskie z kremem, napoleonki (kremówki), paluchy, wolowany. Krawędzie tnie się ostrym nożem i nie smaruje jajem boków, bo skleja warstwy.</p>
<h4>Ciasto parzone</h4>
<ol>
<li>Woda (lub mleko) z tłuszczem i solą doprowadza się do wrzenia.</li>
<li>Wsypuje się mąkę i parzy, mieszając, aż ciasto odejdzie od garnka (skleikowanie skrobi).</li>
<li>Studzi się do ok. 40-50°C i dodaje jaja stopniowo, aż ciasto będzie gładkie, lśniące i spadające ze szpatuły w kształcie „języka”.</li>
<li>Wyroby (ptysie, eklery, gniazdka) piecze się w ok. 220°C, po wyrośnięciu obniża do ok. 180°C, nie otwierając pieca w pierwszej fazie.</li>
</ol>
<h4>Ciasto piernikowe</h4>
<p>Składniki: miód (lub sztuczny miód, karmel), cukier, tłuszcz, mąka pszenna lub żytnia, jaja, przyprawa korzenna (cynamon, goździki, imbir, kardamon, gałka muszkatołowa), spulchniacze: soda, amoniak, potaż. Ciasto <b>staropolskie</b> dojrzewa (leżakuje) w chłodnym miejscu od kilku tygodni do kilku miesięcy, co poprawia aromat i strukturę. Pierniki piecze się ok. 170-180°C, cienkie pierniczki krócej.</p>
<div class="tip">Ciasto francuskie bez listkowania to najczęściej skutek zbyt ciepłego tłuszczu albo pominięcia chłodzenia między składaniami.</div>` }
      ],
      pytania: [
        Q("Klasyczna proporcja ciasta kruchego cukier : tłuszcz : mąka wynosi", "1 : 2 : 3", "1 : 1 : 1", "2 : 1 : 3", "1 : 3 : 2", "Na 300 g mąki 200 g tłuszczu i 100 g cukru."),
        Q("Ciasto drożdżowe bogate w tłuszcz i jaja sporządza się najlepiej metodą", "dwufazową, z rozczynem", "jednofazową, na zimno", "parzenia", "ucierania", "Rozczyn przyspiesza rozwój drożdży w trudnym środowisku."),
        Q("Garowanie wyrobów drożdżowych przeprowadza się w temperaturze około", "30-35°C", "5-10°C", "45-55°C", "60-70°C", "Przy wilgotności 75-85%."),
        Q("Wyrób drożdżowy opadnięty, płaski, o kwaśnym smaku był", "przegarowany", "niedogarowany", "za mocno wyrobiony", "pieczony w za wysokiej temperaturze", "Za długi rozrost końcowy."),
        Q("Bezy francuskie poddaje się", "suszeniu w temperaturze ok. 90-120°C", "pieczeniu w 220°C", "smażeniu w tłuszczu", "gotowaniu na parze", "Wysoka temperatura daje brązowe, pękające bezy."),
        Q("Masa bezowa włoska powstaje przez", "wlanie gorącego syropu cukrowego do ubitych białek", "ubijanie białek na zimno z cukrem pudrem", "podgrzanie białek z cukrem na parze", "dodanie mąki do ubitej piany", "Syrop ok. 118-121°C."),
        Q("Ciasto parzone piecze się początkowo w temperaturze około", "220°C", "150°C", "120°C", "180°C bez zmiany przez cały czas", "Po wyrośnięciu temperaturę się obniża."),
        Q("Ciasto francuskie spulchnia się głównie dzięki", "parze wodnej tworzącej się między warstwami tłuszczu", "drożdżom", "proszkowi do pieczenia", "ubitej pianie z białek", "Wysoka temperatura pieczenia, ok. 220-230°C.")
      ]
    },
    {
      id: "masy", tytul: "Kremy, czekolada i dekoracje", opis: "Przygotujesz kremy, masy i polewy oraz wykończysz wyrób zgodnie z zasadami estetyki i higieny.",
      lekcje: [
        { tytul: "Kremy i masy cukiernicze", tresc: `<h4>Kremy maślane</h4>
<ul>
<li><b>Na masie jajowej (francuski)</b>: do ubijanych jaj lub żółtek wlewa się syrop cukrowy (ok. 116-118°C), ubija do ostygnięcia, potem dodaje utarte masło.</li>
<li><b>Na bezie (szwajcarskiej lub włoskiej)</b>: lekki, jasny, stabilny, dobry do pokrywania tortów.</li>
<li><b>Na budyniu</b>: ostudzony budyń dodaje się do utartego masła (oba składniki w tej samej temperaturze, ok. 20°C).</li>
</ul>
<p>Krem się <b>zwarza</b> (rozwarstwia, wygląda jak twarożek), gdy składniki mają różną temperaturę. Naprawa: lekko ogrzać miskę lub dodać trochę roztopionego masła i dalej ubijać (gdy za zimny) albo schłodzić (gdy za ciepły).</p>
<h4>Kremy gotowane</h4>
<div class="tw"><table><tr><th>Krem</th><th>Składniki i zasada</th></tr>
<tr><td>Angielski (sos waniliowy)</td><td>mleko, żółtka, cukier, wanilia; podgrzewa się do ok. 82-85°C (gęstnieje na łyżce), bez gotowania, bo żółtka się zetną</td></tr>
<tr><td>Patissière (cukierniczy, budyniowy)</td><td>mleko, żółtka, cukier, skrobia lub mąka; gotuje się ok. 1-2 minut, aż skrobia skleikuje; nadzienie ptysi, eklerów, tart</td></tr>
<tr><td>Diplomat</td><td>krem patissière połączony z bitą śmietaną (czasem z żelatyną)</td></tr></table></div>
<h4>Bita śmietana i musy</h4>
<p>Bitą śmietanę ubija się z zimnej śmietanki 30-36%, na końcu dodając cukier puder. Przebita śmietana się zwarza (zamienia w masło). Stabilizuje się ją żelatyną lub specjalnym środkiem (śmietan-fix). <b>Mus</b> to puszysta masa z bitej śmietany lub piany z żelatyną i pulpą owocową, czekoladą albo serem.</p>
<h4>Masy serowe</h4>
<p>Masa na sernik pieczony: twaróg mielony (dwukrotnie lub przetarty), jaja, cukier, tłuszcz, skrobia lub budyń, aromat. Sernik piecze się w niższej temperaturze (ok. 160-170°C) albo z kąpielą wodną, studzi powoli w uchylonym piecu, co zapobiega pęknięciom i opadaniu. Sernik na zimno wiąże się żelatyną.</p>
<h4>Masa marcepanowa i inne</h4>
<ul>
<li><b>Marcepan</b>: zmielone migdały i cukier (często 1 : 1), do figurek i pokrywania tortów.</li>
<li><b>Masa cukrowa (fondant plastyczny)</b>: cukier puder, syrop glukozowy, żelatyna lub tylóza, tłuszcz; do obciągania tortów i figurek.</li>
<li><b>Masa kajmakowa (krówkowa)</b>: mleko zagęszczone słodzone, gotowane długo, do mazurków.</li>
</ul>
<div class="tip">Krem angielski się nie gotuje (ok. 82-85°C), krem patissière trzeba zagotować, bo zawiera skrobię. To dobre rozróżnienie na test.</div>` },
        { tytul: "Czekolada, polewy i syrop cukrowy", tresc: `<h4>Temperowanie czekolady</h4>
<p>Temperowanie (krystalizacja kontrolowana) sprawia, że masło kakaowe tworzy stabilne kryształy. Czekolada jest wtedy błyszcząca, twarda, łamie się z trzaskiem i łatwo odchodzi od formy.</p>
<div class="tw"><table><tr><th>Czekolada</th><th>Topienie</th><th>Schłodzenie</th><th>Temperatura pracy</th></tr>
<tr><td>Gorzka (deserowa)</td><td>45-50°C</td><td>27-28°C</td><td>31-32°C</td></tr>
<tr><td>Mleczna</td><td>40-45°C</td><td>26-27°C</td><td>29-30°C</td></tr>
<tr><td>Biała</td><td>40-45°C</td><td>25-26°C</td><td>28-29°C</td></tr></table></div>
<p>Metody: na marmurze (schładzanie części czekolady na blacie), przez dodanie posiekanej czekolady (metoda zaszczepiania), w temperówce. Czekoladę topi się w kąpieli wodnej lub w mikrofali, bez kontaktu z wodą i parą. Kropla wody powoduje, że czekolada gęstnieje i grudkuje.</p>
<p><b>Wykwit tłuszczowy</b> (szary nalot) to skutek złego temperowania lub wahań temperatury. <b>Wykwit cukrowy</b> (biały, szorstki) to skutek wilgoci, która rozpuszcza cukier na powierzchni.</p>
<h4>Polewy</h4>
<ul>
<li><b>Polewa kakaowa (tłuszczowa)</b>: na tłuszczu roślinnym, nie wymaga temperowania, prostsza, tańsza.</li>
<li><b>Ganache</b>: czekolada i gorąca śmietanka; 1 : 1 jako polewa lub krem, 2 : 1 (czekolady więcej) jako twarda masa na trufle.</li>
<li><b>Glazura lustrzana</b>: na bazie żelatyny, syropu glukozowego, mleka zagęszczonego i czekolady, wylewana na zamrożone torty musowe.</li>
<li><b>Lukier</b>: cukier puder z wodą lub sokiem; <b>lukier królewski</b> z białkiem do napisów i dekoracji piernikowych.</li>
<li><b>Fondant</b>: syrop cukrowy z dodatkiem syropu glukozowego gotowany do ok. 115-117°C, schłodzony do ok. 40°C i ucierany, aż zbieleje (drobne kryształy). Do polewania podgrzewa się go do ok. 35-40°C; przegrzany traci połysk.</li>
</ul>
<h4>Stopnie gotowania syropu cukrowego</h4>
<div class="tw"><table><tr><th>Temperatura</th><th>Próba i zastosowanie</th></tr>
<tr><td>ok. 105-110°C</td><td>nitka; syropy do nasączania (gotowane krócej), konfitury</td></tr>
<tr><td>ok. 112-118°C</td><td>miękka kulka; fondant, krem francuski</td></tr>
<tr><td>ok. 118-121°C</td><td>twardsza kulka; beza włoska</td></tr>
<tr><td>ok. 145-155°C</td><td>twardy trzask; cukier lany, dmuchany</td></tr>
<tr><td>ok. 160-180°C</td><td>karmel jasny do ciemnego</td></tr></table></div>
<div class="tip">Do nasączania biszkoptu używa się syropu cukrowego (np. 1 część cukru na 1-2 części wody) z dodatkiem soku, herbaty lub alkoholu, w temperaturze ciepłej, nie wrzącej.</div>` },
        { tytul: "Dekorowanie i wykańczanie wyrobów", tresc: `<h4>Kolejność wykańczania tortu</h4>
<ol>
<li>Wystudzony biszkopt kroi się poziomo na blaty (np. 3), wyrównuje wierzch.</li>
<li>Nasącza się blaty syropem (dolny mniej, górny najwięcej, bo przyjmuje syrop z kremu).</li>
<li>Przekłada kremem, ewentualnie owocami lub frużeliną.</li>
<li>Pokrywa się wierzch i boki cienką warstwą kremu (tzw. obłożenie wstępne, zbiera okruchy), chłodzi, potem kładzie warstwę ostateczną.</li>
<li>Boki obsypuje się (wiórki, migdały, posypka) lub obciąga masą cukrową albo marcepanem.</li>
<li>Dekoruje wierzch: szprycowanie (rękaw cukierniczy i tylki), owoce, czekolada, napis, figurki.</li>
</ol>
<h4>Techniki dekoracyjne</h4>
<ul>
<li><b>Szprycowanie</b>: rękaw z tylką gwiazdkową, płaską, karbowaną; rozetki, muszelki, girlandy, kwiaty.</li>
<li><b>Glazurowanie i polewanie</b>: polewa w odpowiedniej temperaturze na schłodzony wyrób.</li>
<li><b>Dekoracje z czekolady</b>: listki, wachlarze, wiórki, transfery, figurki z form.</li>
<li><b>Owoce</b>: świeże, umyte, osuszone, zabezpieczone galaretką lub żelem (nie ciemnieją i nie wysychają).</li>
<li><b>Barwienie</b>: barwniki spożywcze dozwolone, w żelu lub proszku, z umiarem.</li>
<li><b>Opalanie</b> palnikiem bezy włoskiej, karmelizacja cukru (crème brûlée).</li>
</ul>
<h4>Estetyka i zasady</h4>
<p>Dekoracja musi być jadalna lub łatwo oddzielana (np. figurki nieprzeznaczone do spożycia trzeba oznaczyć), dopasowana do okazji, w ograniczonej liczbie kolorów. Wyrób porcjowany (np. ciastka w blasze) dekoruje się tak, by każda porcja wyglądała tak samo. Do krojenia stosuje się nóż maczany w gorącej wodzie i osuszony.</p>
<h4>Higiena i przechowywanie wyrobów</h4>
<div class="tw"><table><tr><th>Wyrób</th><th>Warunki</th></tr>
<tr><td>Z kremem, bitą śmietaną, serem, owocami</td><td>chłodnia, ok. 2-6°C, krótki termin (zwykle 1-3 dni)</td></tr>
<tr><td>Torty i desery musowe do dłuższego przechowania</td><td>mrożenie w szybkozamrażarce, rozmrażanie w chłodni</td></tr>
<tr><td>Suche (pierniki, herbatniki, bezy)</td><td>sucho, w szczelnych opakowaniach, temperatura pokojowa</td></tr>
<tr><td>Drożdżowe</td><td>w temperaturze pokojowej, zabezpieczone przed wysychaniem, 1-2 dni</td></tr></table></div>
<p>Etykieta wyrobu opakowanego zawiera m.in. nazwę, skład z wyróżnionymi alergenami, masę, datę minimalnej trwałości lub termin przydatności do spożycia („należy spożyć do”), warunki przechowywania i dane producenta.</p>
<div class="tip">Rękawy cukiernicze wielokrotnego użytku trzeba myć i dezynfekować po każdym użyciu. Bezpieczniejsze są rękawy jednorazowe, szczególnie do kremów z jajami.</div>` }
      ],
      pytania: [
        Q("Krem maślany się zwarzył. Najczęstszą przyczyną jest", "różna temperatura łączonych składników", "za długie gotowanie budyniu", "dodanie cukru pudru", "użycie masła 82%", "Masło i masa muszą mieć podobną temperaturę."),
        Q("Krem angielski podgrzewa się do temperatury około", "82-85°C, bez gotowania", "100°C, gotując 5 minut", "60°C", "120°C", "Wyższa temperatura ścina żółtka."),
        Q("Temperatura pracy przy temperowanej czekoladzie gorzkiej wynosi", "31-32°C", "45-50°C", "27-28°C", "36-38°C", "Topienie 45-50°C, schłodzenie 27-28°C, praca 31-32°C."),
        Q("Szary nalot na czekoladzie, będący skutkiem złego temperowania, to wykwit", "tłuszczowy", "cukrowy", "pleśniowy", "skrobiowy", "Wykwit cukrowy powstaje pod wpływem wilgoci."),
        Q("Fondant otrzymuje się z syropu cukrowego gotowanego do temperatury około", "115-117°C", "100°C", "140-150°C", "170°C", "Następnie się go studzi i uciera."),
        Q("Ganache to połączenie czekolady ze", "śmietanką", "skrobią", "żelatyną i wodą", "białkami jaj", "Proporcja zależy od zastosowania."),
        Q("Torty z kremem przechowuje się w temperaturze około", "2-6°C", "15-18°C", "20-22°C", "-1°C do 0°C w temperaturze pokojowej", "To wyroby łatwo psujące się."),
        Q("Cienka warstwa kremu nakładana przed ostatecznym pokryciem tortu służy do", "zebrania okruchów i wyrównania powierzchni", "nasączenia blatów", "zastąpienia syropu", "barwienia tortu", "Potem tort się chłodzi i nakłada warstwę ostateczną.")
      ]
    },
    {
      id: "produkcja", tytul: "Produkcja, maszyny i jakość", opis: "Obsłużysz maszyny cukiernicze, rozpoznasz wady wyrobów i przeliczysz receptury na potrzebną produkcję.",
      lekcje: [
        { tytul: "Maszyny i urządzenia cukiernicze", tresc: `<h4>Urządzenia i ich zastosowanie</h4>
<div class="tw"><table><tr><th>Urządzenie</th><th>Zastosowanie</th></tr>
<tr><td>Przesiewacz mąki</td><td>napowietrzenie i oczyszczenie mąki, usunięcie grudek</td></tr>
<tr><td>Miesiarka (z hakiem spiralnym)</td><td>wyrabianie ciasta drożdżowego i ciast gęstych</td></tr>
<tr><td>Robot planetarny (ubijarka)</td><td>rózga: piany, bita śmietana, biszkopt; mieszadło płaskie (łopatka): ucieranie, ciasta kruche, kremy; hak: ciasta drożdżowe</td></tr>
<tr><td>Wałkownica (sheeter)</td><td>wałkowanie i laminowanie ciasta francuskiego, półfrancuskiego, kruchego</td></tr>
<tr><td>Dzielarka, dzielarko-zaokrąglarka</td><td>dzielenie ciasta drożdżowego na równe kęsy</td></tr>
<tr><td>Garownia (komora fermentacyjna)</td><td>rozrost końcowy w kontrolowanej temperaturze i wilgotności</td></tr>
<tr><td>Piec etażowy (komorowy)</td><td>pieczenie na trzonie, osobne sterowanie górą i dołem; ciasta, torty, pieczywo</td></tr>
<tr><td>Piec konwekcyjny i konwekcyjno-parowy</td><td>wymuszony obieg powietrza, równomierne pieczenie kilku blach, możliwość zaparowania</td></tr>
<tr><td>Piec obrotowy (rotacyjny)</td><td>wózek z blachami obraca się w komorze, duża produkcja</td></tr>
<tr><td>Smażalnik (frytownica)</td><td>pączki, faworki, oponki</td></tr>
<tr><td>Temperówka, szybkoschładzarka, szokówka</td><td>czekolada; szybkie schładzanie i zamrażanie wyrobów</td></tr></table></div>
<h4>Zasady BHP przy maszynach</h4>
<ul>
<li>uruchamiać tylko maszynę sprawną, z założonymi osłonami i działającym wyłącznikiem bezpieczeństwa,</li>
<li>nie wkładać rąk ani narzędzi do pracującej maszyny; nie zdejmować dzieży w ruchu,</li>
<li>czyścić i myć maszynę po <b>wyłączeniu i odłączeniu od zasilania</b>,</li>
<li>związane włosy, odzież bez luźnych elementów, brak biżuterii,</li>
<li>przy piecach rękawice termoizolacyjne, ostrożność przy otwieraniu pieca parowego (para wodna parzy),</li>
<li>przy smażeniu: nie dolewać wody do gorącego tłuszczu, płonący tłuszcz gasić kocem gaśniczym lub gaśnicą klasy F, nigdy wodą.</li>
</ul>
<h4>Konserwacja i dokumentacja</h4>
<p>Każde urządzenie ma instrukcję stanowiskową (obsługi i BHP), umieszczoną przy maszynie. Prowadzi się rejestr temperatur urządzeń chłodniczych i plan mycia i dezynfekcji. Przeglądy techniczne wykonuje uprawniony serwis.</p>
<div class="tip">Na egzaminie praktycznym oceniane jest, czy zdający dobrał właściwe mieszadło: rózga do piany, łopatka do ucierania, hak do ciasta drożdżowego.</div>` },
        { tytul: "Wady wyrobów i ich przyczyny", tresc: `<h4>Ocena organoleptyczna</h4>
<p>Wyrób gotowy ocenia się według: wyglądu zewnętrznego (kształt, barwa, powierzchnia), struktury i porowatości na przekroju, smaku i zapachu, konsystencji. Wyniki wpisuje się do karty oceny jakości. Ocena odbywa się w dobrze oświetlonym miejscu, po wystudzeniu wyrobu.</p>
<h4>Wady najczęściej pytane na egzaminie</h4>
<div class="tw"><table><tr><th>Wyrób i wada</th><th>Możliwe przyczyny</th></tr>
<tr><td>Biszkopt: zakalec (ciemna, zbita warstwa)</td><td>otwarcie pieca na początku pieczenia, zbyt długie mieszanie mąki, za niska temperatura, niedopieczenie</td></tr>
<tr><td>Biszkopt: wypukły środek, pęknięcia</td><td>za wysoka temperatura, zbyt dużo mąki</td></tr>
<tr><td>Ciasto kruche: twarde, zbite</td><td>za długie wyrabianie, za ciepłe składniki (zaparzenie), za dużo mąki przy wałkowaniu</td></tr>
<tr><td>Ciasto kruche: kruszy się, rozpada</td><td>za mało jaj lub płynu, za dużo tłuszczu</td></tr>
<tr><td>Ciasto francuskie: słabe listkowanie, wyciekanie tłuszczu</td><td>za ciepły tłuszcz, brak chłodzenia, za niska temperatura pieca</td></tr>
<tr><td>Ptysie: płaskie, opadnięte</td><td>za rzadkie ciasto (za dużo jaj), niedostateczne zaparzenie mąki, otwarcie pieca</td></tr>
<tr><td>Babka: opadnięta</td><td>za dużo proszku lub cukru, otwarcie pieca, za krótkie pieczenie</td></tr>
<tr><td>Ciasto drożdżowe: kwaśne, płaskie</td><td>przegarowanie (za długi rozrost)</td></tr>
<tr><td>Pączki: chłoną tłuszcz</td><td>za niska temperatura tłuszczu, przegarowanie</td></tr>
<tr><td>Pączki: surowe w środku, ciemne z zewnątrz</td><td>za wysoka temperatura tłuszczu</td></tr>
<tr><td>Sernik: pęknięty, opadnięty</td><td>za wysoka temperatura, za szybkie studzenie, za mocno ubita masa</td></tr>
<tr><td>Bezy: lepkie, brązowe</td><td>wilgoć, za wysoka temperatura suszenia</td></tr></table></div>
<h4>Zapobieganie</h4>
<ul>
<li>dokładne odważanie surowców według receptury (waga, nie „na oko”),</li>
<li>kontrola temperatury surowców, ciasta, pieca i garowni,</li>
<li>przestrzeganie czasu wyrabiania, fermentacji, pieczenia, studzenia,</li>
<li>sprawdzanie jakości surowców przed użyciem (świeżość jaj, siła mąki, aktywność drożdży).</li>
</ul>
<h4>Zagrożenia dla zdrowia</h4>
<p>Wyroby z kremem i jajami to środowisko dla bakterii z rodzaju <b>Salmonella</b> i gronkowca złocistego. Dlatego stosuje się jaja odkażone lub pasteryzowane, krótkie terminy, chłodzenie wyrobów i rygorystyczną higienę rąk i sprzętu. Znaleziony w wyrobie obiekt obcy (szkło, metal) to zagrożenie fizyczne, przed którym chronią przesiewanie, kontrola narzędzi i wykrywacze metali.</p>
<div class="tip">Pytanie o „przyczynę zakalca” prawie zawsze ma w odpowiedziach otwarcie pieca w pierwszej fazie pieczenia.</div>` },
        { tytul: "Receptury, normowanie i dokumentacja", tresc: `<h4>Receptura cukiernicza</h4>
<p>Podaje ilości surowców najczęściej na <b>1 kg ciasta</b>, <b>1 kg wyrobu gotowego</b> lub określoną liczbę sztuk (np. 100 ptysi). Zawiera też opis wykonania, parametry (temperatury, czasy) i wydajność.</p>
<h4>Przeliczanie receptury</h4>
<p>Współczynnik = potrzebna ilość / ilość w recepturze. Przykład: receptura ciasta kruchego na 3 kg ciasta: mąka 1,5 kg, masło 1,0 kg, cukier puder 0,5 kg. Potrzeba 4,5 kg ciasta, więc współczynnik 4,5 / 3 = 1,5:</p>
<div class="tw"><table><tr><th>Surowiec</th><th>Na 3 kg</th><th>Na 4,5 kg (× 1,5)</th></tr>
<tr><td>mąka</td><td>1,5 kg</td><td>2,25 kg</td></tr>
<tr><td>masło</td><td>1,0 kg</td><td>1,5 kg</td></tr>
<tr><td>cukier puder</td><td>0,5 kg</td><td>0,75 kg</td></tr></table></div>
<h4>Jaja w recepturze</h4>
<p>Gdy receptura podaje sztuki, a produkcja masę (lub odwrotnie), przyjmuje się masę jaja bez skorupy (np. 50 g). 20 jaj to ok. 1 kg masy jajowej. Przy zamawianiu jaj w skorupkach doliczasz ok. 10-12% na skorupę.</p>
<h4>Ubytek wypieku i wydajność</h4>
<p>W czasie pieczenia ciasto traci wodę. <b>Ubytek wypiekowy</b> = (masa ciasta - masa wyrobu) / masa ciasta × 100%. Przykład: 2 kg ciasta daje 1,7 kg wyrobu, ubytek: 0,3 / 2 × 100% = 15%. Aby otrzymać 3,4 kg wyrobu przy ubytku 15%, potrzeba 3,4 / 0,85 = 4 kg ciasta.</p>
<h4>Liczba sztuk z masy ciasta</h4>
<p>Masa kęsa ciasta = masa wyrobu gotowego / (1 - ubytek). Na 60 drożdżówek po 70 g przy ubytku 12,5%: kęs 70 / 0,875 = 80 g, ciasto: 60 × 80 g = 4,8 kg.</p>
<h4>Dokumentacja produkcji</h4>
<ul>
<li><b>Zapotrzebowanie surowcowe</b> (raport produkcyjny): ilości surowców na plan dnia.</li>
<li><b>Karta technologiczna</b> wyrobu: receptura, parametry, wymagania jakościowe, alergeny.</li>
<li>Dokumenty magazynowe: <b>PZ</b> (przyjęcie dostawy), <b>RW</b> (wydanie do produkcji), <b>WZ</b> (wydanie wyrobów na zewnątrz).</li>
<li>Rejestry HACCP: temperatury chłodni i pieca, mycie i dezynfekcja, przyjęcie surowców (data, partia, dostawca, ocena), działania korygujące.</li>
<li>Identyfikowalność (traceability): możliwość ustalenia, z jakiej partii surowców powstał wyrób.</li>
</ul>
<h4>Koszt wyrobu</h4>
<p>Koszt surowców = suma (ilość × cena) wszystkich składników receptury. Przykład: na 1 kg ciasta potrzeba surowców za 14,40 zł; z 1 kg ciasta otrzymuje się 12 ciastek, więc koszt surowców 1 ciastka to 1,20 zł.</p>
<div class="tip">Przy przeliczaniu z masy wyrobu na masę ciasta dzielisz przez (1 - ubytek), tak jak przy odpadkach. Mnożenie przez (1 + ubytek) daje wynik za mały.</div>` }
      ],
      pytania: [
        Q("Do ubicia piany z białek w robocie planetarnym stosuje się", "rózgę (trzepaczkę)", "hak spiralny", "mieszadło płaskie", "nóż tnący", "Hak służy do ciasta drożdżowego, łopatka do ucierania."),
        Q("Do laminowania ciasta francuskiego służy", "wałkownica (sheeter)", "dzielarka", "miesiarka spiralna", "temperówka", "Wałkownica równomiernie wałkuje ciasto z tłuszczem."),
        Q("Płonący tłuszcz w smażalniku należy gasić", "kocem gaśniczym lub gaśnicą klasy F", "wodą", "gaśnicą wodną", "mąką", "Woda powoduje wybuchowe rozpryskiwanie tłuszczu."),
        Q("Pączki nasiąknięte tłuszczem to najczęściej skutek", "zbyt niskiej temperatury tłuszczu", "zbyt wysokiej temperatury tłuszczu", "za krótkiego garowania", "dodania spirytusu do ciasta", "Właściwa temperatura to ok. 170-180°C."),
        Q("Receptura podaje surowce na 2 kg ciasta, a potrzeba 5 kg. Współczynnik przeliczeniowy wynosi", "2,5", "0,4", "3", "10", "5 / 2 = 2,5."),
        Q("Z 4 kg ciasta otrzymano 3,4 kg wyrobu. Ubytek wypiekowy wynosi", "15%", "85%", "17,6%", "6%", "0,6 / 4 × 100% = 15%."),
        Q("Ile ciasta potrzeba, aby otrzymać 1,8 kg wyrobu przy ubytku wypiekowym 10%?", "2 kg", "1,98 kg", "1,62 kg", "2,2 kg", "1,8 / 0,9 = 2 kg."),
        Q("Dokument wydania surowców z magazynu do produkcji to", "RW", "PZ", "WZ", "faktura", "PZ to przyjęcie dostawy, WZ wydanie na zewnątrz.")
      ]
    }
  ]);
})(window.KURSY);
