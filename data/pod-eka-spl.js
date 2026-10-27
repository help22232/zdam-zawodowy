/* Podkursy: EKA.01, EKA.04, EKA.05, EKA.07, SPL.01, SPL.04 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("EKA.01", [
    {
      id: "postepowanie", tytul: "Postępowanie administracyjne", opis: "Przeprowadzisz sprawę od wszczęcia do zebrania dowodów i poprawnie policzysz każdy termin z KPA.",
      lekcje: [
        { tytul: "Wszczęcie postępowania i strony", tresc: `<h4>Jak zaczyna się sprawa</h4>
<p>Postępowanie wszczyna się <b>na żądanie strony</b> albo <b>z urzędu</b> (art. 61 KPA). Datą wszczęcia na żądanie jest <b>dzień doręczenia żądania organowi</b>, a nie dzień nadania pisma na poczcie. O wszczęciu organ zawiadamia wszystkie osoby będące stronami.</p>
<p>Gdy żądanie wnosi osoba niebędąca stroną albo postępowanie z innych uzasadnionych przyczyn nie może być wszczęte, organ wydaje <b>postanowienie o odmowie wszczęcia postępowania</b> (art. 61a), na które służy zażalenie.</p>
<h4>Podanie</h4>
<ul>
<li>Można je wnieść na piśmie, w formie dokumentu elektronicznego albo ustnie do protokołu.</li>
<li>Musi zawierać co najmniej: wskazanie osoby wnoszącej, jej adres, żądanie i podpis.</li>
<li>Brak adresu, którego nie da się ustalić: podanie pozostawia się bez rozpoznania. Inne braki: wezwanie do uzupełnienia w 7 dni (art. 64).</li>
<li>Podanie wniesione do <b>niewłaściwego organu</b> przekazuje się niezwłocznie organowi właściwemu. Jeśli wpłynęło przed upływem terminu, termin uważa się za zachowany (art. 65).</li>
</ul>
<h4>Kto jest stroną</h4>
<p>Stroną jest każdy, czyjego <b>interesu prawnego lub obowiązku</b> dotyczy postępowanie albo kto żąda czynności organu ze względu na swój interes prawny lub obowiązek (art. 28). Sam interes faktyczny (np. „nie podoba mi się budowa sąsiada”) nie wystarcza.</p>
<div class="tw"><table><tr><th>Podmiot</th><th>Jak działa w sprawie</th></tr>
<tr><td>osoba fizyczna z pełną zdolnością do czynności prawnych</td><td>samodzielnie lub przez pełnomocnika</td></tr>
<tr><td>osoba małoletnia lub ubezwłasnowolniona</td><td>przez przedstawiciela ustawowego (rodzic, opiekun)</td></tr>
<tr><td>osoba prawna, np. spółka z o.o.</td><td>przez organ (zarząd) lub pełnomocnika</td></tr></table></div>
<p>Pełnomocnictwo składa się w oryginale lub urzędowo poświadczonym odpisie. Adwokat, radca prawny, rzecznik patentowy i doradca podatkowy mogą sami uwierzytelnić odpis pełnomocnictwa.</p>
<h4>Wyłączenie pracownika (art. 24)</h4>
<p>Pracownik nie może prowadzić sprawy, która dotyczy jego samego, małżonka, krewnych i powinowatych do <b>drugiego stopnia</b>, osoby związanej z nim przysposobieniem, opieką lub kuratelą, a także sprawy, w której był świadkiem, biegłym lub przedstawicielem strony albo brał udział w wydaniu zaskarżonej decyzji w niższej instancji.</p>
<div class="tip">Pułapka: wszczęcie na żądanie następuje w dniu, w którym pismo <b>dotarło do organu</b>. Data stempla pocztowego liczy się dopiero przy zachowaniu terminów (art. 57 § 5).</div>` },
        { tytul: "Dowody i postępowanie wyjaśniające", tresc: `<h4>Co może być dowodem</h4>
<p>Jako dowód dopuszcza się <b>wszystko, co może przyczynić się do wyjaśnienia sprawy, a nie jest sprzeczne z prawem</b> (art. 75): dokumenty, zeznania świadków, opinie biegłych, oględziny. Na wniosek strony organ może przyjąć jej oświadczenie złożone pod rygorem odpowiedzialności za fałszywe zeznania.</p>
<ul>
<li><b>Dokument urzędowy</b> (sporządzony przez organ w swoim zakresie działania) stanowi dowód tego, co zostało w nim urzędowo stwierdzone (art. 76).</li>
<li>Faktów powszechnie znanych i znanych organowi z urzędu nie trzeba udowadniać.</li>
<li>Organ ocenia dowody swobodnie, ale musi to uzasadnić w decyzji.</li>
</ul>
<h4>Czynny udział strony</h4>
<p>Przed wydaniem decyzji organ musi umożliwić stronie <b>wypowiedzenie się co do zebranych dowodów i materiałów</b> (art. 10 i 81). Okoliczność może być uznana za udowodnioną tylko wtedy, gdy strona miała możliwość wypowiedzenia się co do przeprowadzonych dowodów. Strona ma prawo przeglądać akta, sporządzać z nich notatki, kopie i odpisy (art. 73).</p>
<p>Jeśli strona nie spełniła warunków potrzebnych do uwzględnienia żądania, organ przed wydaniem decyzji informuje ją o tych przesłankach (art. 79a) i wyznacza termin na dodatkowe dowody.</p>
<h4>Protokół czy adnotacja</h4>
<div class="tw"><table><tr><th>Forma</th><th>Kiedy</th></tr>
<tr><td>protokół</td><td>przyjęcie ustnego wniosku, przesłuchanie strony, świadka, biegłego, oględziny, rozprawa</td></tr>
<tr><td>adnotacja w aktach</td><td>czynności mające znaczenie dla sprawy, z których nie sporządza się protokołu, np. treść rozmowy telefonicznej</td></tr></table></div>
<h4>Zawieszenie i umorzenie</h4>
<ul>
<li><b>Zawieszenie obowiązkowe</b> (art. 97): m.in. śmierć strony, gdy nie można wezwać spadkobierców, oraz gdy rozpatrzenie sprawy zależy od rozstrzygnięcia <b>zagadnienia wstępnego</b> przez inny organ lub sąd.</li>
<li><b>Zawieszenie na wniosek strony</b> (art. 98): jeśli przez <b>3 lata</b> nikt nie zwróci się o podjęcie, żądanie wszczęcia uważa się za wycofane.</li>
<li><b>Umorzenie</b> (art. 105): gdy postępowanie stało się bezprzedmiotowe, np. strona zmarła w sprawie o charakterze osobistym. Umorzenie następuje w drodze <b>decyzji</b>.</li>
</ul>
<div class="tip">Zawieszenie i odmowa wszczęcia to <b>postanowienia</b>, ale umorzenie postępowania to <b>decyzja</b>. To częste pytanie na egzaminie.</div>` },
        { tytul: "Terminy i doręczenia w praktyce", tresc: `<h4>Liczenie terminów (art. 57)</h4>
<div class="tw"><table><tr><th>Termin</th><th>Reguła</th><th>Przykład</th></tr>
<tr><td>w dniach</td><td>nie liczy się dnia zdarzenia, termin upływa z końcem ostatniego dnia</td><td>doręczenie 5.05, 14 dni → 19.05</td></tr>
<tr><td>w tygodniach</td><td>upływa w dniu, który nazwą odpowiada dniowi początkowemu</td><td>doręczenie w środę, 2 tygodnie → środa za dwa tygodnie</td></tr>
<tr><td>w miesiącach</td><td>upływa w dniu, który datą odpowiada dniowi początkowemu, a gdy go brak, w ostatnim dniu miesiąca</td><td>doręczenie 31.01, 1 miesiąc → 28.02 (w roku nieprzestępnym)</td></tr></table></div>
<p>Jeżeli koniec terminu przypada na <b>sobotę lub dzień ustawowo wolny</b>, termin upływa następnego dnia, który nie jest dniem wolnym ani sobotą.</p>
<pre>Decyzję doręczono w sobotę 17.10.2026.
14 dni: 18.10 → 31.10.2026 (sobota)
1.11 to niedziela i święto, więc termin upływa
w poniedziałek 2.11.2026.</pre>
<h4>Kiedy termin jest zachowany</h4>
<p>Gdy przed jego upływem pismo zostało: wysłane elektronicznie (z urzędowym poświadczeniem odbioru), <b>nadane w polskiej placówce operatora wyznaczonego</b> (Poczta Polska), złożone w polskim urzędzie konsularnym, przez żołnierza w dowództwie jednostki, przez członka załogi statku u kapitana albo przez osobę pozbawioną wolności w administracji zakładu.</p>
<div class="tip">Nadanie u prywatnego kuriera nie zachowuje terminu: liczy się dzień, w którym przesyłka dotrze do urzędu.</div>
<h4>Przywrócenie terminu (art. 58)</h4>
<p>Strona musi <b>uprawdopodobnić brak winy</b>, złożyć prośbę w ciągu <b>7 dni od ustania przyczyny</b> uchybienia i jednocześnie dopełnić spóźnionej czynności (np. dołączyć odwołanie). Przywrócenie terminu do złożenia tej prośby jest niedopuszczalne.</p>
<h4>Doręczenia</h4>
<ul>
<li>Jeśli strona ma pełnomocnika, pisma doręcza się <b>pełnomocnikowi</b>.</li>
<li>Pod nieobecność adresata pismo można doręczyć dorosłemu domownikowi, sąsiadowi lub dozorcy, jeśli podjęli się oddania go adresatowi.</li>
<li>Awizo: pismo czeka <b>14 dni</b>, powtórne zawiadomienie po 7 dniach, potem fikcja doręczenia.</li>
<li>Odmowa przyjęcia pisma: pismo wraca do akt z adnotacją, a doręczenie uważa się za dokonane <b>w dniu odmowy</b>.</li>
<li>Osobie prawnej doręcza się w lokalu siedziby, do rąk osoby upoważnionej do odbioru.</li>
</ul>` }
      ],
      pytania: [
        Q("Datą wszczęcia postępowania na żądanie strony jest dzień", "doręczenia żądania organowi", "nadania pisma w placówce pocztowej", "sporządzenia podania przez stronę", "zarejestrowania sprawy w spisie spraw", "Art. 61 § 3 KPA."),
        Q("Stroną postępowania administracyjnego jest osoba, której dotyczy", "interes prawny lub obowiązek", "wyłącznie interes faktyczny", "interes społeczny", "każda sprawa w gminie, w której mieszka", "Art. 28 KPA: interes prawny lub obowiązek."),
        Q("Pracownik urzędu podlega wyłączeniu od sprawy, która dotyczy jego", "brata", "kuzyna", "kolegi z pracy", "sąsiada z bloku", "Rodzeństwo to krewni drugiego stopnia; kuzyn to czwarty stopień."),
        Q("Postępowanie, które stało się bezprzedmiotowe, organ kończy przez wydanie", "decyzji o umorzeniu postępowania", "postanowienia o zawieszeniu", "zaświadczenia", "notatki służbowej", "Umorzenie następuje w drodze decyzji (art. 105)."),
        Q("Jeżeli w postępowaniu zawieszonym na wniosek strony nikt przez 3 lata nie zwróci się o jego podjęcie, to", "żądanie wszczęcia uważa się za wycofane", "organ wydaje decyzję pozytywną", "sprawę przekazuje się do sądu", "postępowanie automatycznie się wznawia", "Art. 98 § 2 KPA."),
        Q("Ostatni dzień 14-dniowego terminu przypada w sobotę. Termin upływa", "w najbliższym dniu, który nie jest dniem wolnym ani sobotą", "w tę sobotę", "w poprzedzający piątek", "po kolejnych 7 dniach", "Art. 57 § 4 KPA."),
        Q("Prośbę o przywrócenie terminu wnosi się w ciągu", "7 dni od ustania przyczyny uchybienia", "14 dni od doręczenia decyzji", "30 dni od upływu terminu", "3 dni od ustania przyczyny", "Jednocześnie trzeba dopełnić czynności, np. wnieść odwołanie."),
        Q("Termin na wniesienie odwołania zostanie zachowany, jeśli przed jego upływem pismo", "nadano w placówce Poczty Polskiej jako operatora wyznaczonego", "nadano u dowolnego kuriera", "wrzucono do skrzynki pocztowej w sobotę wieczorem bez nadania", "przekazano znajomemu pracownikowi urzędu prywatnie", "Art. 57 § 5 pkt 2 KPA.")
      ]
    },
    {
      id: "decyzje", tytul: "Decyzje i inne akty", opis: "Zredagujesz decyzję, postanowienie i zaświadczenie ze wszystkimi wymaganymi elementami.",
      lekcje: [
        { tytul: "Budowa decyzji krok po kroku", tresc: `<h4>Elementy decyzji (art. 107 KPA)</h4>
<ol>
<li>oznaczenie organu administracji publicznej,</li>
<li>data wydania,</li>
<li>oznaczenie strony lub stron,</li>
<li>powołanie podstawy prawnej,</li>
<li>rozstrzygnięcie,</li>
<li>uzasadnienie faktyczne i prawne,</li>
<li>pouczenie, czy i w jakim trybie służy odwołanie, oraz o prawie do zrzeczenia się odwołania i jego skutkach,</li>
<li>podpis z imieniem, nazwiskiem i stanowiskiem służbowym osoby upoważnionej (w formie elektronicznej: kwalifikowany podpis elektroniczny).</li>
</ol>
<p>Gdy od decyzji przysługuje powództwo do sądu powszechnego lub skarga do sądu administracyjnego, decyzja zawiera także pouczenie o tej możliwości.</p>
<h4>Szkielet decyzji</h4>
<pre>Wójt Gminy Zielonka            Zielonka, 12.06.2026
OS.3112.14.2026
               DECYZJA
Na podstawie art. 104 KPA oraz art. ... ustawy ...
po rozpatrzeniu wniosku Pana Jana Kowalskiego
              orzekam
przyznać dodatek mieszkaniowy w wysokości ...
            UZASADNIENIE
(fakty, dowody, przepisy, ocena)
            POUCZENIE
Od decyzji służy odwołanie do Samorządowego
Kolegium Odwoławczego za pośrednictwem Wójta
w terminie 14 dni od dnia doręczenia ...
           (podpis, imię, nazwisko, stanowisko)
Otrzymują: 1. adresat  2. a/a</pre>
<h4>Uzasadnienie</h4>
<ul>
<li><b>Faktyczne</b>: jakie fakty organ uznał za udowodnione, na jakich dowodach się oparł i dlaczego innym odmówił wiarygodności.</li>
<li><b>Prawne</b>: wyjaśnienie podstawy prawnej z przytoczeniem przepisów.</li>
<li>Organ <b>może odstąpić od uzasadnienia</b>, gdy decyzja uwzględnia w całości żądanie strony. Nie dotyczy to decyzji rozstrzygających sporne interesy stron ani wydanych na skutek odwołania.</li>
</ul>
<h4>Błędne pouczenie</h4>
<p>Błędne pouczenie w decyzji co do prawa odwołania albo skargi <b>nie może szkodzić stronie</b>, która zastosowała się do tego pouczenia (art. 112).</p>
<div class="tip">W zadaniu praktycznym najczęściej traci się punkty za brak podstawy prawnej, brak pouczenia o zrzeczeniu się odwołania, brak stanowiska podpisującego oraz brak rozdzielnika („Otrzymują”).</div>` },
        { tytul: "Postanowienia, zaświadczenia, ugoda", tresc: `<h4>Postanowienie</h4>
<p>Rozstrzyga kwestie wynikające w toku postępowania, ale <b>nie sprawę co do istoty</b>, chyba że przepis stanowi inaczej. Elementy (art. 124): oznaczenie organu, data, oznaczenie stron i innych osób biorących udział, podstawa prawna, rozstrzygnięcie, pouczenie, czy i w jakim trybie służy zażalenie lub skarga, podpis. <b>Uzasadnienie</b> jest wymagane, gdy przysługuje zażalenie lub skarga.</p>
<ul>
<li>Zażalenie przysługuje tylko wtedy, gdy kodeks tak stanowi; termin <b>7 dni</b>.</li>
<li>Postanowienia, na które nie służy zażalenie, strona może zaskarżyć w odwołaniu od decyzji.</li>
<li>Przykłady zaskarżalnych postanowień: odmowa wszczęcia postępowania, zawieszenie, odmowa wydania zaświadczenia, odmowa przywrócenia terminu.</li>
</ul>
<h4>Zaświadczenie (art. 217-220)</h4>
<ul>
<li>Jest urzędowym potwierdzeniem faktów lub stanu prawnego. Wydaje się je na żądanie, gdy wymaga tego przepis prawa albo osoba ubiega się o nie ze względu na swój interes prawny.</li>
<li>Wydaje się je na podstawie posiadanej ewidencji, rejestrów lub danych. W razie potrzeby organ może przeprowadzić postępowanie wyjaśniające w niezbędnym zakresie.</li>
<li>Termin: bez zbędnej zwłoki, najpóźniej w <b>7 dni</b>. Odmowa: <b>postanowienie</b>, na które służy zażalenie.</li>
<li>Organ nie może żądać zaświadczenia, jeśli fakty są mu znane z urzędu lub może je ustalić z rejestrów publicznych.</li>
</ul>
<div class="tw"><table><tr><th>Akt</th><th>Co robi</th><th>Środek zaskarżenia</th></tr>
<tr><td>decyzja</td><td>rozstrzyga sprawę co do istoty</td><td>odwołanie, 14 dni</td></tr>
<tr><td>postanowienie</td><td>kwestie proceduralne</td><td>zażalenie, 7 dni (gdy przewidziane)</td></tr>
<tr><td>zaświadczenie</td><td>potwierdza fakty, nic nie rozstrzyga</td><td>zażalenie na postanowienie o odmowie</td></tr></table></div>
<h4>Ugoda administracyjna i mediacja</h4>
<p>Ugodę mogą zawrzeć strony o spornych interesach, przed organem prowadzącym postępowanie. Organ <b>zatwierdza ją postanowieniem</b> w terminie 7 dni od jej zawarcia. Ugoda staje się wykonalna, gdy postanowienie o zatwierdzeniu stanie się ostateczne. Ugoda wywołuje takie skutki jak decyzja.</p>
<p>Mediacja (art. 96a i nast.) może odbyć się między stronami albo między stroną a organem. Jej celem jest wyjaśnienie okoliczności i przyjęcie ustaleń, które organ uwzględnia w decyzji.</p>
<h4>Milczące załatwienie sprawy</h4>
<p>Gdy przepis szczególny tak stanowi, sprawę uważa się za załatwioną zgodnie z żądaniem, jeśli organ w terminie <b>1 miesiąca</b> nie wyda decyzji ani nie wniesie sprzeciwu (art. 122a).</p>` },
        { tytul: "Ostateczność, wykonanie i poprawianie decyzji", tresc: `<h4>Ostateczna a prawomocna</h4>
<div class="tw"><table><tr><th>Pojęcie</th><th>Znaczenie</th></tr>
<tr><td>decyzja ostateczna</td><td>nie służy od niej odwołanie ani wniosek o ponowne rozpatrzenie w administracyjnym toku instancji (art. 16)</td></tr>
<tr><td>decyzja prawomocna</td><td>nie można jej już zaskarżyć także do sądu administracyjnego</td></tr></table></div>
<p>Decyzja nieostateczna co do zasady <b>nie podlega wykonaniu</b> przed upływem terminu do wniesienia odwołania, a wniesienie odwołania w terminie wstrzymuje jej wykonanie (art. 130). Wyjątki: decyzja z rygorem natychmiastowej wykonalności, decyzja zgodna z żądaniem wszystkich stron, przepis szczególny.</p>
<h4>Rygor natychmiastowej wykonalności (art. 108)</h4>
<p>Nadaje się go, gdy jest to niezbędne ze względu na <b>ochronę zdrowia lub życia ludzkiego</b>, zabezpieczenie gospodarstwa narodowego przed ciężkimi stratami, inny interes społeczny lub wyjątkowo ważny interes strony, a także gdy wymaga tego ustawa. Można go nadać w decyzji albo później w drodze postanowienia.</p>
<h4>Poprawianie decyzji</h4>
<ul>
<li><b>Uzupełnienie lub sprostowanie</b> (art. 111): strona może w ciągu <b>14 dni</b> od doręczenia żądać uzupełnienia decyzji co do rozstrzygnięcia albo co do prawa odwołania, powództwa lub skargi, a także sprostowania pouczenia. Organ może to zrobić także z urzędu.</li>
<li><b>Sprostowanie oczywistych omyłek</b> (art. 113 § 1): błędy pisarskie i rachunkowe, np. literówka w nazwisku lub zła suma. Organ prostuje je z urzędu lub na żądanie, <b>postanowieniem</b>.</li>
<li><b>Wyjaśnienie wątpliwości</b> co do treści decyzji (art. 113 § 2): na żądanie strony lub organu egzekucyjnego, także postanowieniem.</li>
</ul>
<div class="tip">Sprostowanie nie może zmieniać treści rozstrzygnięcia. Jeśli pomyłka dotyczy istoty sprawy (np. przyznano inną kwotę niż wynika z obliczeń), potrzebne jest odwołanie albo tryb nadzwyczajny.</div>
<h4>Wygaśnięcie decyzji (art. 162)</h4>
<p>Organ stwierdza wygaśnięcie decyzji, gdy stała się <b>bezprzedmiotowa</b>, a przepis prawa to przewiduje lub leży to w interesie społecznym lub strony, albo gdy strona <b>nie dopełniła warunku</b> zastrzeżonego w decyzji.</p>
<h4>Odpisy i kopie</h4>
<p>Strona może żądać uwierzytelnienia odpisów i kopii akt sprawy. Za uwierzytelnienie pobiera się opłatę skarbową (od każdej pełnej lub zaczętej strony).</p>` }
      ],
      pytania: [
        Q("Elementem decyzji administracyjnej, którego NIE wymaga art. 107 KPA, jest", "pieczęć okrągła z godłem", "powołanie podstawy prawnej", "uzasadnienie faktyczne i prawne", "pouczenie o odwołaniu", "Ustawa wymaga podpisu z imieniem, nazwiskiem i stanowiskiem, a nie pieczęci okrągłej."),
        Q("Organ może odstąpić od uzasadnienia decyzji, gdy", "decyzja uwzględnia w całości żądanie strony", "strona o to poprosi telefonicznie", "decyzja została wydana na skutek odwołania", "sprawa dotyczy spornych interesów stron", "Art. 107 § 4 KPA."),
        Q("Odmowa wydania zaświadczenia następuje w formie", "postanowienia, na które służy zażalenie", "decyzji, od której służy odwołanie", "notatki służbowej", "pisma informacyjnego bez pouczenia", "Art. 219 KPA."),
        Q("Ugodę administracyjną organ zatwierdza w drodze", "postanowienia w terminie 7 dni od jej zawarcia", "decyzji w terminie 14 dni", "zaświadczenia", "protokołu z rozprawy bez rozstrzygnięcia", "Art. 119 KPA."),
        Q("Decyzja, od której nie służy odwołanie w administracyjnym toku instancji, to decyzja", "ostateczna", "prawomocna", "nieważna", "wykonalna warunkowo", "Prawomocna to taka, której nie można zaskarżyć również do sądu."),
        Q("Rygor natychmiastowej wykonalności nadaje się decyzji m.in. ze względu na", "ochronę zdrowia lub życia ludzkiego", "wygodę pracownika urzędu", "koniec roku budżetowego", "brak odwołania w ciągu 3 dni", "Art. 108 § 1 KPA."),
        Q("Błąd rachunkowy w decyzji organ prostuje", "postanowieniem, z urzędu lub na żądanie strony", "nową decyzją po wznowieniu postępowania", "tylko na podstawie wyroku sądu", "aneksem podpisanym przez stronę", "Art. 113 § 1 KPA."),
        Q("Strona, która zastosowała się do błędnego pouczenia o terminie odwołania", "nie może ponieść z tego powodu ujemnych skutków", "traci prawo do odwołania", "musi zapłacić opłatę karną", "odpowiada za błąd organu", "Art. 112 KPA.")
      ]
    },
    {
      id: "zaskarzanie", tytul: "Odwołania i skargi", opis: "Rozpoznasz właściwy środek zaskarżenia, organ i termin w każdej sytuacji.",
      lekcje: [
        { tytul: "Odwołanie i postępowanie odwoławcze", tresc: `<h4>Wniesienie odwołania</h4>
<ul>
<li>Odwołanie wnosi się do organu wyższego stopnia <b>za pośrednictwem organu, który wydał decyzję</b>, w terminie <b>14 dni</b> od doręczenia (lub ogłoszenia ustnego).</li>
<li><b>Nie wymaga szczegółowego uzasadnienia</b>. Wystarczy, że z odwołania wynika, iż strona nie jest zadowolona z decyzji (art. 128).</li>
<li>Od decyzji ministra lub SKO wydanej w I instancji nie ma odwołania, ale strona może złożyć <b>wniosek o ponowne rozpatrzenie sprawy</b> do tego samego organu.</li>
</ul>
<h4>Organy wyższego stopnia</h4>
<div class="tw"><table><tr><th>Organ I instancji</th><th>Organ odwoławczy</th></tr>
<tr><td>wójt, burmistrz, starosta, marszałek (sprawy własne)</td><td>samorządowe kolegium odwoławcze</td></tr>
<tr><td>wojewoda</td><td>właściwy minister</td></tr>
<tr><td>kierownik urzędu stanu cywilnego (zadania zlecone)</td><td>wojewoda</td></tr>
<tr><td>naczelnik urzędu skarbowego (Ordynacja podatkowa)</td><td>dyrektor izby administracji skarbowej</td></tr></table></div>
<h4>Co robi organ I instancji</h4>
<ol>
<li>Sprawdza, czy odwołanie wniesiono w terminie (uchybienie terminu stwierdza jednak organ odwoławczy).</li>
<li>Może dokonać <b>samokontroli</b>: jeśli uzna, że odwołanie zasługuje w całości na uwzględnienie, wydaje nową decyzję (art. 132).</li>
<li>W przeciwnym razie przesyła odwołanie wraz z aktami organowi odwoławczemu w ciągu <b>7 dni</b>.</li>
</ol>
<h4>Rozstrzygnięcia organu odwoławczego (art. 138)</h4>
<ul>
<li>utrzymuje decyzję w mocy,</li>
<li>uchyla decyzję i orzeka co do istoty albo umarza postępowanie I instancji,</li>
<li>uchyla decyzję i przekazuje sprawę do ponownego rozpatrzenia (gdy konieczne jest wyjaśnienie sprawy w znacznej części),</li>
<li>umarza postępowanie odwoławcze (np. po cofnięciu odwołania).</li>
</ul>
<p>Organ odwoławczy <b>nie może wydać decyzji na niekorzyść</b> strony odwołującej się, chyba że zaskarżona decyzja rażąco narusza prawo lub interes społeczny (zakaz reformationis in peius, art. 139).</p>
<h4>Zrzeczenie się odwołania</h4>
<p>W czasie biegu terminu strona może zrzec się odwołania. Z dniem doręczenia organowi oświadczenia ostatniej ze stron decyzja staje się <b>ostateczna i prawomocna</b>. Zrzeczenia nie można cofnąć.</p>
<div class="tip">Na egzaminie: odwołanie składa się zawsze „za pośrednictwem”. Odpowiedź „bezpośrednio do SKO” jest błędna, choć SKO je rozpatruje.</div>` },
        { tytul: "Tryby nadzwyczajne", tresc: `<p>Tryby nadzwyczajne dotyczą <b>decyzji ostatecznych</b>. Pozwalają usunąć z obrotu decyzje wadliwe mimo upływu terminu na odwołanie.</p>
<h4>Wznowienie postępowania (art. 145)</h4>
<p>Dotyczy wad <b>procesowych</b>. Przykładowe przesłanki:</p>
<ul>
<li>dowody, na których oparto decyzję, okazały się fałszywe;</li>
<li>decyzja została wydana w wyniku przestępstwa;</li>
<li>decyzję wydał pracownik lub organ podlegający wyłączeniu;</li>
<li>strona <b>bez własnej winy</b> nie brała udziału w postępowaniu;</li>
<li>wyszły na jaw nowe okoliczności lub dowody istniejące w dniu wydania decyzji, nieznane organowi;</li>
<li>decyzję wydano bez wymaganego stanowiska innego organu.</li>
</ul>
<p>Podanie o wznowienie wnosi się do organu, który wydał decyzję w ostatniej instancji, w terminie <b>1 miesiąca</b> od dnia, w którym strona dowiedziała się o okoliczności stanowiącej podstawę wznowienia.</p>
<h4>Stwierdzenie nieważności (art. 156)</h4>
<p>Dotyczy wad <b>najcięższych</b> (materialnych i kompetencyjnych). Decyzja jest nieważna, gdy:</p>
<ul>
<li>wydano ją z naruszeniem przepisów o właściwości,</li>
<li>wydano ją bez podstawy prawnej lub z rażącym naruszeniem prawa,</li>
<li>dotyczy sprawy już rozstrzygniętej inną decyzją ostateczną,</li>
<li>została skierowana do osoby niebędącej stroną,</li>
<li>była niewykonalna w dniu wydania i ta niewykonalność ma charakter trwały,</li>
<li>jej wykonanie wywołałoby czyn zagrożony karą.</li>
</ul>
<p>Właściwy jest <b>organ wyższego stopnia</b>. Jeśli od doręczenia minęło 10 lat lub decyzja wywołała nieodwracalne skutki prawne, organ nie stwierdza nieważności, tylko stwierdza wydanie decyzji z naruszeniem prawa.</p>
<h4>Uchylenie lub zmiana decyzji ostatecznej</h4>
<div class="tw"><table><tr><th>Przepis</th><th>Sytuacja</th></tr>
<tr><td>art. 154</td><td>żadna ze stron nie nabyła prawa; uchyla lub zmienia organ, który wydał decyzję, gdy przemawia za tym interes społeczny lub słuszny interes strony</td></tr>
<tr><td>art. 155</td><td>strona nabyła prawo, ale <b>wyraża zgodę</b> na zmianę lub uchylenie</td></tr></table></div>
<div class="tw"><table><tr><th>Tryb</th><th>Kto rozpatruje</th><th>Termin dla strony</th></tr>
<tr><td>wznowienie</td><td>organ, który wydał decyzję w ostatniej instancji</td><td>1 miesiąc od dowiedzenia się o przesłance</td></tr>
<tr><td>nieważność</td><td>organ wyższego stopnia</td><td>co do zasady bez terminu</td></tr></table></div>
<div class="tip">Zapamiętaj: „fałszywy dowód, nowy dowód, brak udziału strony” to wznowienie; „brak podstawy prawnej, rażące naruszenie prawa, niewłaściwy organ” to nieważność.</div>` },
        { tytul: "Sąd administracyjny, skargi i wnioski", tresc: `<h4>Skarga do wojewódzkiego sądu administracyjnego</h4>
<ul>
<li>Przysługuje po <b>wyczerpaniu środków zaskarżenia</b> (najpierw odwołanie, potem sąd).</li>
<li>Termin: <b>30 dni</b> od doręczenia rozstrzygnięcia w sprawie.</li>
<li>Wnosi się ją <b>za pośrednictwem organu</b>, którego działanie jest przedmiotem skargi. Organ przekazuje skargę z aktami i odpowiedzią na skargę w ciągu 30 dni.</li>
<li>Od wyroku WSA przysługuje <b>skarga kasacyjna</b> do Naczelnego Sądu Administracyjnego w terminie 30 dni od doręczenia wyroku z uzasadnieniem.</li>
<li>Skargę można też wnieść na bezczynność lub przewlekłość organu, po wcześniejszym <b>ponagleniu</b>.</li>
</ul>
<h4>Ponaglenie (art. 37)</h4>
<p>Strona wnosi je, gdy organ nie załatwił sprawy w terminie (<b>bezczynność</b>) lub prowadzi ją dłużej, niż to konieczne (<b>przewlekłość</b>). Ponaglenie kieruje się do organu wyższego stopnia za pośrednictwem organu prowadzącego. Organ wyższego stopnia rozpatruje je w terminie 7 dni, w drodze postanowienia.</p>
<h4>Skargi i wnioski (dział VIII KPA)</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Czego dotyczy</th><th>Termin załatwienia</th></tr>
<tr><td>skarga</td><td>zaniedbanie lub nienależyte wykonywanie zadań, naruszenie praworządności lub interesów skarżącego, przewlekłe lub biurokratyczne załatwianie spraw</td><td>bez zbędnej zwłoki, najpóźniej 1 miesiąc</td></tr>
<tr><td>wniosek</td><td>ulepszenie organizacji, wzmocnienie praworządności, usprawnienie pracy, lepsze zaspokajanie potrzeb ludności</td><td>bez zbędnej zwłoki, najpóźniej 1 miesiąc</td></tr>
<tr><td>petycja (ustawa o petycjach)</td><td>żądanie w interesie publicznym, podmiotu wnoszącego lub osoby trzeciej</td><td>bez zbędnej zwłoki, najpóźniej 3 miesiące</td></tr></table></div>
<ul>
<li>Skargę lub wniosek można złożyć pisemnie, elektronicznie albo ustnie do protokołu.</li>
<li>Skarga niezawierająca imienia, nazwiska (nazwy) i adresu wnoszącego pozostawia się bez rozpatrzenia.</li>
<li>Skarżący nie może z tego powodu ponieść żadnego uszczerbku (zakaz represjonowania).</li>
<li>Kierownicy urzędów przyjmują obywateli w sprawach skarg i wniosków co najmniej raz w tygodniu, w ustalonym dniu i godzinach.</li>
<li>Odpowiedź na skargę zawiera: oznaczenie organu, wskazanie sposobu załatwienia, uzasadnienie faktyczne i prawne, podpis z imieniem, nazwiskiem i stanowiskiem.</li>
</ul>
<div class="tip">Skarga z działu VIII KPA to coś innego niż skarga do sądu administracyjnego. Na skargę z działu VIII nie wydaje się decyzji, tylko zawiadomienie o sposobie załatwienia.</div>` }
      ],
      pytania: [
        Q("Odwołanie od decyzji wójta w sprawie zadań własnych gminy rozpatruje", "samorządowe kolegium odwoławcze", "rada gminy", "wojewoda", "wojewódzki sąd administracyjny", "SKO jest organem wyższego stopnia dla organów samorządu."),
        Q("Od decyzji wydanej w I instancji przez ministra strona może wnieść", "wniosek o ponowne rozpatrzenie sprawy", "odwołanie do premiera", "zażalenie do wojewody", "skargę do SKO", "Art. 127 § 3 KPA."),
        Q("Organ I instancji przekazuje odwołanie wraz z aktami organowi odwoławczemu w terminie", "7 dni", "14 dni", "30 dni", "3 dni", "Art. 133 KPA."),
        Q("Zakaz wydania przez organ odwoławczy decyzji na niekorzyść odwołującego się dotyczy sytuacji, gdy decyzja", "nie narusza rażąco prawa ani interesu społecznego", "została wydana przez wójta", "dotyczy podatków", "ma rygor natychmiastowej wykonalności", "Art. 139 KPA."),
        Q("Podstawą wznowienia postępowania jest sytuacja, w której", "strona bez własnej winy nie brała udziału w postępowaniu", "decyzję wydano bez podstawy prawnej", "decyzję skierowano do osoby niebędącej stroną", "decyzja jest trwale niewykonalna", "Pozostałe odpowiedzi to przesłanki nieważności."),
        Q("Podanie o wznowienie postępowania wnosi się w terminie", "1 miesiąca od dowiedzenia się o okoliczności stanowiącej podstawę wznowienia", "7 dni od doręczenia decyzji", "14 dni od doręczenia decyzji", "5 lat od wydania decyzji", "Art. 148 KPA."),
        Q("Skargę do wojewódzkiego sądu administracyjnego wnosi się", "za pośrednictwem organu, w terminie 30 dni", "bezpośrednio do sądu, w terminie 14 dni", "za pośrednictwem SKO, w terminie 7 dni", "do NSA, w terminie 60 dni", "Art. 53 i 54 p.p.s.a."),
        Q("Skargę obywatela na przewlekłe załatwianie spraw przez urzędnika (dział VIII KPA) należy załatwić najpóźniej w ciągu", "1 miesiąca", "7 dni", "14 dni", "3 miesięcy", "3 miesiące to termin na petycję.")
      ]
    },
    {
      id: "kancelaria", tytul: "Kancelaria i archiwum", opis: "Obsłużysz przesyłkę od wpływu do archiwum zgodnie z instrukcją kancelaryjną i JRWA.",
      lekcje: [
        { tytul: "Obieg przesyłki w kancelarii", tresc: `<h4>Dwa sposoby dokumentowania</h4>
<p>Instrukcja kancelaryjna przewiduje <b>system EZD</b> (elektroniczne zarządzanie dokumentacją: dokumentem wiodącym jest wersja elektroniczna) oraz <b>system tradycyjny</b> (papierowy, z rejestrem przesyłek i spisami spraw). Instrukcja dla urzędów administracji rządowej i samorządowej opiera się na <b>systemie bezdziennikowym</b>: sprawy rejestruje się według JRWA, a nie w jednym dzienniku.</p>
<h4>Przyjęcie przesyłki</h4>
<ol>
<li>Sprawdzenie poprawności adresu i stanu opakowania; uszkodzenie odnotowuje się w obecności doręczającego.</li>
<li>Otwarcie przesyłki i odciśnięcie <b>pieczęci wpływu</b> na pierwszej stronie pisma (data wpływu, liczba załączników, podpis).</li>
<li>Rejestracja w <b>rejestrze przesyłek wpływających</b> (w EZD: zarejestrowanie i skanowanie).</li>
<li>Przekazanie do kierownika komórki, który dokonuje <b>dekretacji</b>: wskazuje osobę prowadzącą sprawę i ewentualnie sposób załatwienia.</li>
</ol>
<div class="tw"><table><tr><th>Przesyłki, których kancelaria nie otwiera</th><th>Postępowanie</th></tr>
<tr><td>z informacjami niejawnymi</td><td>przekazuje do kancelarii niejawnej</td></tr>
<tr><td>adresowane imiennie, z dopiskiem „do rąk własnych”</td><td>przekazuje adresatowi zamknięte</td></tr>
<tr><td>oferty w zamówieniach publicznych</td><td>przechowuje zamknięte do terminu otwarcia ofert</td></tr></table></div>
<p>Kopertę dołącza się do pisma, gdy data nadania ma znaczenie dla terminu (np. odwołanie), gdy brak adresu nadawcy na piśmie lub gdy pismo jest anonimowe.</p>
<h4>Załatwienie sprawy</h4>
<ul>
<li>Prowadzący sprawę zakłada ją w spisie spraw i nadaje <b>znak sprawy</b>.</li>
<li>Przygotowuje projekt pisma, który <b>akceptuje</b> osoba uprawniona (podpis lub zatwierdzenie w EZD).</li>
<li>Czystopis wysyła się, rejestrując go w <b>rejestrze przesyłek wychodzących</b>; w aktach zostaje kopia oznaczona „a/a” (ad acta).</li>
<li>Pismo wysyłane jako przesyłka polecona za potwierdzeniem odbioru dokumentuje doręczenie; zwrotne potwierdzenie dołącza się do akt.</li>
</ul>
<h4>Pojęcia, które warto rozróżniać</h4>
<ul>
<li><b>Przesyłka</b>: każdy dokument wpływający lub wysyłany.</li>
<li><b>Sprawa</b>: zdarzenie lub stan rzeczy wymagający rozpatrzenia i podjęcia czynności.</li>
<li><b>Akta sprawy</b>: wszystkie dokumenty dotyczące jednej sprawy.</li>
<li><b>Metryka sprawy</b>: wykaz czynności i osób, które je wykonały.</li>
</ul>
<div class="tip">Dekretacja nie jest podpisem pisma. Dekretuje kierownik (przydziela sprawę), akceptuje osoba uprawniona do podpisu.</div>` },
        { tytul: "JRWA, znak sprawy i spis spraw", tresc: `<h4>Jednolity rzeczowy wykaz akt</h4>
<ul>
<li>JRWA to <b>klasyfikacja dziesiętna</b>: 10 klas pierwszego rzędu oznaczonych cyframi 0-9, dzielonych na klasy coraz niższego rzędu (do czwartego).</li>
<li><b>Klasa końcowa</b> to ta, która nie dzieli się dalej. Tylko klasa końcowa ma <b>kategorię archiwalną</b> i tylko według niej zakłada się teczki i spisy spraw.</li>
<li>W urzędach samorządowych pierwsze klasy to m.in.: 0 Zarządzanie, 1 Kadry, 2 Administracja i obsługa techniczna, 3 Finanse. Konkretne symbole w zadaniu zawsze podaje wyciąg z wykazu akt.</li>
</ul>
<h4>Budowa znaku sprawy</h4>
<pre>OS.3112.14.2026
OS    - oznaczenie komórki organizacyjnej
3112  - symbol klasyfikacyjny z JRWA (klasa końcowa)
14    - kolejny numer sprawy w spisie spraw
2026  - rok założenia sprawy (cztery cyfry)</pre>
<p>Elementy oddziela się kropkami. Znak sprawy umieszcza się na każdym piśmie w sprawie, a w odpowiedzi powołuje się także znak pisma nadawcy („Wasz znak”).</p>
<h4>Spis spraw</h4>
<ul>
<li>Prowadzi się go dla każdej klasy końcowej odrębnie, na <b>rok kalendarzowy</b>.</li>
<li>Kolumny: liczba porządkowa (numer sprawy), sprawa (krótka treść), od kogo wpłynęła, znak i data pisma, data wszczęcia, data ostatecznego załatwienia, uwagi.</li>
<li>Numeracja zaczyna się od 1 w każdym roku. Sprawa wszczęta w grudniu i zakończona w styczniu zachowuje znak z roku wszczęcia.</li>
</ul>
<h4>Teczka aktowa</h4>
<p>Opis teczki zawiera: oznaczenie komórki, symbol klasyfikacyjny, <b>kategorię archiwalną</b>, hasło klasyfikacyjne z wykazu akt, roczne daty skrajne. Akta w teczce układa się sprawami, według kolejności spisu spraw, a w obrębie sprawy chronologicznie.</p>
<div class="tw"><table><tr><th>Przykład z zadania</th><th>Znak</th></tr>
<tr><td>Wydział Organizacyjny (OR), skargi i wnioski (1510), 7. sprawa w roku 2026</td><td>OR.1510.7.2026</td></tr>
<tr><td>Referat Spraw Społecznych (OS), dodatki mieszkaniowe (3112), 14. sprawa</td><td>OS.3112.14.2026</td></tr></table></div>
<div class="tip">Częsty błąd: wpisanie numeru z rejestru przesyłek zamiast numeru ze spisu spraw albo użycie symbolu klasy, która nie jest klasą końcową.</div>` },
        { tytul: "Archiwum zakładowe i brakowanie", tresc: `<h4>Przekazanie akt do archiwum zakładowego</h4>
<ul>
<li>Komórki przekazują <b>sprawy zakończone</b>, zwykle po upływie <b>2 lat</b> od zakończenia (licząc od 1 stycznia roku następnego).</li>
<li>Akta muszą być uporządkowane: kompletne, w teczkach opisanych zgodnie z JRWA, bez metalowych spinaczy i zszywek, ponumerowane.</li>
<li>Przekazanie dokumentuje <b>spis zdawczo-odbiorczy</b>, osobno dla dokumentacji kategorii A i B.</li>
<li>Dokumentacji kategorii <b>Bc</b> nie przekazuje się do archiwum zakładowego.</li>
</ul>
<h4>Kategorie i okresy</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Znaczenie</th><th>Co dalej</th></tr>
<tr><td>A</td><td>materiały archiwalne, przechowywane wieczyście</td><td>przekazanie do archiwum państwowego po 25 latach od wytworzenia</td></tr>
<tr><td>B5, B10, B50</td><td>dokumentacja niearchiwalna, liczba to lata przechowywania</td><td>brakowanie za zgodą archiwum państwowego</td></tr>
<tr><td>BE5</td><td>niearchiwalna, ale po okresie podlega ekspertyzie</td><td>archiwum państwowe może zmienić ją na A</td></tr>
<tr><td>Bc</td><td>krótkotrwałe znaczenie praktyczne</td><td>w komórce, brakowana po wykorzystaniu</td></tr></table></div>
<pre>Sprawa zakończona 20.08.2026, kategoria B5
Okres liczymy od 1.01.2027
Dokumentację można wybrakować po 31.12.2031
(za zgodą dyrektora archiwum państwowego)</pre>
<h4>Brakowanie dokumentacji</h4>
<ol>
<li>Archiwista wybiera dokumentację, której okres przechowywania minął.</li>
<li>Sporządza <b>spis dokumentacji niearchiwalnej</b> przeznaczonej do brakowania.</li>
<li>Kierownik jednostki występuje o <b>zgodę dyrektora właściwego archiwum państwowego</b>.</li>
<li>Po uzyskaniu zgody dokumentację niszczy się w sposób uniemożliwiający odczytanie (zgodnie z ochroną danych), a fakt zniszczenia się dokumentuje.</li>
</ol>
<h4>Udostępnianie dokumentacji</h4>
<ul>
<li>Pracownikom jednostki: wypożyczenie na podstawie karty udostępnienia, na określony czas.</li>
<li>Podmiotom zewnętrznym: zwykle wgląd na miejscu, za zgodą kierownika jednostki i z zachowaniem przepisów o ochronie danych.</li>
<li>Archiwum zakładowe prowadzi ewidencję: wykaz spisów zdawczo-odbiorczych, ewidencję udostępnień, spisy dokumentacji wybrakowanej.</li>
</ul>
<div class="tip">Samodzielne zniszczenie dokumentacji kategorii B bez zgody archiwum państwowego jest naruszeniem prawa, nawet gdy okres przechowywania już minął.</div>` }
      ],
      pytania: [
        Q("Kategorię archiwalną w jednolitym rzeczowym wykazie akt ma", "wyłącznie klasa końcowa", "każda klasa pierwszego rzędu", "tylko klasa 0 Zarządzanie", "każde pojedyncze pismo", "Według klasy końcowej zakłada się teczki."),
        Q("W znaku sprawy OR.1510.7.2026 liczba 7 oznacza", "kolejny numer sprawy w spisie spraw", "numer pokoju pracownika", "liczbę załączników", "symbol klasyfikacyjny z JRWA", "1510 to symbol z JRWA, OR to komórka."),
        Q("Kancelaria nie otwiera przesyłki", "zawierającej ofertę w postępowaniu o udzielenie zamówienia publicznego", "z odwołaniem od decyzji", "od innego urzędu", "z wnioskiem o zaświadczenie", "Ofertę przechowuje się zamkniętą do terminu otwarcia ofert."),
        Q("Wskazanie przez kierownika komórki pracownika, który ma załatwić sprawę, to", "dekretacja", "akceptacja", "brakowanie", "ekspertyza archiwalna", "Akceptacja to zatwierdzenie projektu pisma."),
        Q("Spis spraw prowadzi się", "dla każdej klasy końcowej odrębnie na rok kalendarzowy", "jeden dla całego urzędu na 5 lat", "dla każdego pracownika osobno bez podziału na lata", "tylko dla spraw kategorii A", "Numeracja zaczyna się co roku od 1."),
        Q("Materiały archiwalne kategorii A przekazuje się do archiwum państwowego po upływie", "25 lat od ich wytworzenia", "2 lat od zakończenia sprawy", "10 lat", "50 lat", "Ustawa o narodowym zasobie archiwalnym."),
        Q("Zniszczenie dokumentacji kategorii B po upływie okresu przechowywania wymaga", "zgody dyrektora właściwego archiwum państwowego", "uchwały rady gminy", "zgody wojewody", "decyzji pracownika prowadzącego sprawę", "Brakowanie odbywa się na podstawie spisu i zgody archiwum."),
        Q("Dokumentację zakończonej sprawy przekazuje się do archiwum zakładowego na podstawie", "spisu zdawczo-odbiorczego", "rejestru przesyłek wychodzących", "metryki sprawy", "karty udostępnienia", "Spis sporządza się osobno dla kategorii A i B.")
      ]
    },
    {
      id: "obsluga", tytul: "Klient i e-usługi", opis: "Obsłużysz klienta urzędu osobiście i elektronicznie, pobierzesz opłatę skarbową i ochronisz jego dane.",
      lekcje: [
        { tytul: "Komunikacja z klientem urzędu", tresc: `<h4>Zasady obsługi</h4>
<ul>
<li><b>Bezstronność i równe traktowanie</b>: bez względu na wiek, pochodzenie, poglądy, stopień zamożności.</li>
<li><b>Zasada informowania</b> (art. 9 KPA): urzędnik udziela stronom niezbędnych wyjaśnień i czuwa, by nie poniosły szkody z powodu nieznajomości prawa.</li>
<li><b>Prosty język</b>: zamiast „przedmiotowy wniosek podlega uzupełnieniu” lepiej „proszę dołączyć zaświadczenie o dochodach”.</li>
<li><b>Tajemnica i ochrona danych</b>: rozmowy o sprawie nie prowadzi się przy innych klientach.</li>
</ul>
<h4>Techniki komunikacji</h4>
<div class="tw"><table><tr><th>Technika</th><th>Przykład</th></tr>
<tr><td>parafraza</td><td>„Rozumiem, że chodzi Panu o termin wypłaty dodatku?”</td></tr>
<tr><td>pytanie otwarte</td><td>„Jakie dokumenty Pani już złożyła?”</td></tr>
<tr><td>pytanie zamknięte</td><td>„Czy wniosek był podpisany?” (odpowiedź tak lub nie)</td></tr>
<tr><td>podsumowanie</td><td>„Ustaliliśmy, że do piątku dostarczy Pan zaświadczenie.”</td></tr>
<tr><td>komunikat „ja”</td><td>„Gdy Pan podnosi głos, trudno mi się skupić. Proszę, porozmawiajmy spokojnie.”</td></tr></table></div>
<p>Bariery komunikacyjne: hałas, żargon prawniczy, pośpiech, ocenianie, przerywanie, stereotypy, brak kontaktu wzrokowego. Komunikacja niewerbalna (postawa, mimika, ton głosu) może zaprzeczyć słowom.</p>
<h4>Trudny klient</h4>
<ol>
<li>Zachowaj spokój i nie bierz emocji klienta do siebie.</li>
<li>Wysłuchaj bez przerywania, okaż zrozumienie dla emocji (nie musisz przyznawać racji).</li>
<li>Oddziel problem od osoby, ustal fakty pytaniami.</li>
<li>Przedstaw możliwe rozwiązania i kolejne kroki zgodne z prawem.</li>
<li>Przy agresji fizycznej lub groźbach stosuj procedurę bezpieczeństwa urzędu (wezwanie przełożonego, ochrony).</li>
</ol>
<p>Postawa <b>asertywna</b> to wyrażanie swojego stanowiska stanowczo, ale z szacunkiem; w odróżnieniu od uległej (ustępowanie wbrew przepisom) i agresywnej (atakowanie klienta).</p>
<h4>Dostępność</h4>
<ul>
<li>Urząd wyznacza <b>koordynatora do spraw dostępności</b> i publikuje deklarację dostępności strony internetowej.</li>
<li>Osoba głucha może skorzystać z tłumacza polskiego języka migowego, zgłaszając potrzebę co najmniej <b>3 dni robocze</b> wcześniej (poza sytuacjami nagłymi).</li>
<li>Przykłady udogodnień: pętla indukcyjna, podjazd, informacja w tekście łatwym do czytania, możliwość wejścia z psem asystującym.</li>
</ul>
<div class="tip">W pytaniach o komunikację poprawna odpowiedź to zwykle ta, która łączy uprzejmość z przestrzeganiem procedury: urzędnik nie obiecuje wyniku sprawy, tylko informuje o krokach i terminach.</div>` },
        { tytul: "E-usługi i podpisy elektroniczne", tresc: `<h4>Kanały elektroniczne</h4>
<ul>
<li><b>ePUAP</b>: platforma do składania pism do urzędów (elektroniczna skrzynka podawcza). Urząd wysyła urzędowe poświadczenie przedłożenia (UPP), które potwierdza datę wniesienia.</li>
<li><b>e-Doręczenia</b>: elektroniczny odpowiednik listu poleconego za potwierdzeniem odbioru. Adres do doręczeń elektronicznych wpisuje się do bazy adresów elektronicznych (BAE). Od 2025 r. podmioty publiczne są stopniowo zobowiązane do korzystania z tej usługi.</li>
<li><b>mObywatel</b>: aplikacja z dokumentami cyfrowymi (m.in. mDowód) i usługami online.</li>
<li><b>Biznes.gov.pl</b>: usługi dla przedsiębiorców, np. wpis do CEIDG.</li>
</ul>
<h4>Sposoby podpisu</h4>
<div class="tw"><table><tr><th>Podpis</th><th>Jak go uzyskać</th><th>Zastosowanie</th></tr>
<tr><td>profil zaufany (podpis zaufany)</td><td>bezpłatnie: przez bankowość elektroniczną, e-dowód lub w punkcie potwierdzającym; ważny 3 lata</td><td>sprawy z podmiotami publicznymi</td></tr>
<tr><td>podpis osobisty</td><td>e-dowód z warstwą elektroniczną i czytnik lub telefon z NFC</td><td>sprawy urzędowe, zgodnie z ustawą</td></tr>
<tr><td>kwalifikowany podpis elektroniczny</td><td>płatny certyfikat od kwalifikowanego dostawcy usług zaufania</td><td>równoważny podpisowi własnoręcznemu w całej UE, także w umowach prywatnych</td></tr></table></div>
<h4>Decyzja w formie elektronicznej</h4>
<p>Decyzję w formie dokumentu elektronicznego opatruje się <b>kwalifikowanym podpisem elektronicznym</b> osoby upoważnionej (art. 107 KPA). Doręcza się ją na adres do doręczeń elektronicznych strony, jeśli strona go posiada lub wyraziła zgodę na taki sposób doręczenia.</p>
<h4>Bezpieczeństwo e-usług</h4>
<ul>
<li>Urzędnik nigdy nie prosi o hasło do profilu zaufanego ani do bankowości.</li>
<li>Do załatwienia sprawy przez pełnomocnika potrzebne jest pełnomocnictwo; nie wolno „pożyczać” profilu zaufanego innej osobie.</li>
<li>Pismo złożone elektronicznie musi zawierać te same elementy co papierowe (dane wnoszącego, żądanie, podpis).</li>
</ul>
<div class="tip">UPP to dowód wniesienia pisma do urzędu, a UPD (urzędowe poświadczenie doręczenia) to dowód odebrania pisma od urzędu przez adresata.</div>` },
        { tytul: "Opłata skarbowa i ochrona danych", tresc: `<h4>Opłata skarbowa</h4>
<div class="tw"><table><tr><th>Przedmiot opłaty</th><th>Kiedy powstaje obowiązek</th></tr>
<tr><td>dokonanie czynności urzędowej na wniosek</td><td>z chwilą złożenia wniosku</td></tr>
<tr><td>wydanie zaświadczenia</td><td>z chwilą złożenia wniosku</td></tr>
<tr><td>wydanie zezwolenia (pozwolenia, koncesji)</td><td>z chwilą wydania zezwolenia</td></tr>
<tr><td>złożenie dokumentu pełnomocnictwa</td><td>z chwilą złożenia dokumentu</td></tr></table></div>
<ul>
<li>Opłatę wpłaca się na rachunek urzędu gminy (miasta) właściwego ze względu na siedzibę organu, który dokonuje czynności.</li>
<li>Typowe stawki z ustawy: zaświadczenie <b>17 zł</b>, pełnomocnictwo <b>17 zł</b>, uwierzytelnienie odpisu 5 zł od każdej pełnej lub zaczętej strony.</li>
<li><b>Zwolnione</b> z opłaty są m.in. sprawy: alimentacyjne, opieki i kurateli, ubezpieczeń społecznych, pomocy społecznej, zatrudnienia, nauki i oświaty, ochrony zdrowia. Pełnomocnictwo dla małżonka, wstępnego, zstępnego lub rodzeństwa jest zwolnione.</li>
<li>Jeśli czynności nie dokonano lub zaświadczenia nie wydano, opłata podlega zwrotowi.</li>
</ul>
<h4>RODO w urzędzie</h4>
<p>Zasady przetwarzania danych (art. 5 RODO): zgodność z prawem, rzetelność i przejrzystość; ograniczenie celu; <b>minimalizacja danych</b>; prawidłowość; ograniczenie przechowywania; integralność i poufność; rozliczalność.</p>
<ul>
<li>Przy zbieraniu danych urząd spełnia <b>obowiązek informacyjny</b>: kto jest administratorem, kontakt do inspektora ochrony danych (IOD), cel i podstawa, odbiorcy, okres przechowywania, prawa osoby, prawo skargi do Prezesa UODO.</li>
<li>Podmiot publiczny musi wyznaczyć <b>inspektora ochrony danych</b>.</li>
<li>Na żądanie osoby (dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw) odpowiada się w ciągu <b>1 miesiąca</b>, z możliwością przedłużenia o 2 miesiące.</li>
<li>Naruszenie ochrony danych zgłasza się Prezesowi UODO w miarę możliwości w ciągu <b>72 godzin</b> od jego stwierdzenia.</li>
</ul>
<h4>Ochrona danych na stanowisku</h4>
<p>Zasada czystego biurka, blokowanie ekranu przy odejściu, niszczenie dokumentów w niszczarce, nieudzielanie informacji przez telefon bez potwierdzenia tożsamości, wysyłanie danych tylko bezpiecznymi kanałami.</p>
<div class="tip">Urzędnik nie żąda danych „na wszelki wypadek”. Pytanie o numer telefonu we wniosku, który go nie wymaga, może naruszać zasadę minimalizacji, chyba że klient poda go dobrowolnie.</div>` }
      ],
      pytania: [
        Q("Wypowiedź urzędnika: „Rozumiem, że chodzi Pani o termin wypłaty świadczenia?” to przykład", "parafrazy", "pytania zamkniętego o fakty", "komunikatu agresywnego", "bariery komunikacyjnej", "Parafraza potwierdza zrozumienie słów klienta."),
        Q("Osoba głucha, która chce skorzystać z tłumacza PJM w urzędzie, powinna zgłosić to co najmniej", "3 dni robocze wcześniej", "1 dzień wcześniej", "14 dni wcześniej", "miesiąc wcześniej", "Ustawa o języku migowym, z wyjątkiem sytuacji nagłych."),
        Q("Dokumentem potwierdzającym datę wniesienia pisma przez ePUAP jest", "urzędowe poświadczenie przedłożenia (UPP)", "awizo", "zwrotne potwierdzenie odbioru", "paragon fiskalny", "UPD potwierdza doręczenie pisma przez urząd."),
        Q("Podpisem równoważnym własnoręcznemu w całej Unii Europejskiej jest", "kwalifikowany podpis elektroniczny", "podpis zeskanowany i wklejony do pliku", "podpis w treści e-maila", "imię i nazwisko wpisane w formularzu", "Rozporządzenie eIDAS, art. 25."),
        Q("Obowiązek zapłaty opłaty skarbowej za wydanie zaświadczenia powstaje", "z chwilą złożenia wniosku", "z chwilą odbioru zaświadczenia", "po 7 dniach od złożenia wniosku", "na koniec miesiąca", "Ustawa o opłacie skarbowej, art. 6."),
        Q("Z opłaty skarbowej zwolnione jest pełnomocnictwo udzielone", "małżonkowi", "koledze z pracy", "sąsiadowi", "każdej osobie pełnoletniej", "Zwolnienie obejmuje małżonka, wstępnych, zstępnych i rodzeństwo."),
        Q("Naruszenie ochrony danych osobowych urząd zgłasza Prezesowi UODO w miarę możliwości w ciągu", "72 godzin od stwierdzenia", "7 dni", "30 dni", "24 godzin od powstania", "Art. 33 RODO."),
        Q("Zasada RODO, zgodnie z którą zbiera się tylko dane niezbędne do celu, to zasada", "minimalizacji danych", "rozliczalności", "przejrzystości", "integralności", "Art. 5 ust. 1 lit. c RODO.")
      ]
    }
  ]);

  pod("EKA.04", [
    {
      id: "umowy", tytul: "Prawo cywilne i umowy", opis: "Rozpoznasz formę, wady i skutki czynności prawnych oraz zabezpieczysz i odzyskasz należność.",
      lekcje: [
        { tytul: "Czynności prawne i ich forma", tresc: `<h4>Oświadczenie woli</h4>
<p>Czynność prawna polega na złożeniu <b>oświadczenia woli</b>, które tworzy, zmienia lub znosi stosunek prawny. Oświadczenie może być wyrażone każdym zachowaniem, które ujawnia wolę w sposób dostateczny (także w postaci elektronicznej), chyba że ustawa wymaga szczególnej formy.</p>
<h4>Formy czynności prawnych</h4>
<div class="tw"><table><tr><th>Forma</th><th>Na czym polega</th><th>Przykład</th></tr>
<tr><td>dokumentowa</td><td>oświadczenie w postaci dokumentu, który pozwala ustalić osobę składającą</td><td>e-mail, SMS, skan</td></tr>
<tr><td>pisemna</td><td>własnoręczny podpis na dokumencie</td><td>umowa najmu na piśmie</td></tr>
<tr><td>elektroniczna</td><td>kwalifikowany podpis elektroniczny; równoważna formie pisemnej</td><td>umowa podpisana kwalifikowanym podpisem</td></tr>
<tr><td>z podpisem notarialnie poświadczonym</td><td>notariusz potwierdza autentyczność podpisu</td><td>umowa zbycia przedsiębiorstwa</td></tr>
<tr><td>akt notarialny</td><td>notariusz sporządza cały dokument</td><td>sprzedaż nieruchomości, umowa spółki z o.o. (poza trybem S24)</td></tr></table></div>
<h4>Skutki niezachowania formy</h4>
<ul>
<li><b>pod rygorem nieważności</b> (ad solemnitatem): czynność jest nieważna, np. sprzedaż mieszkania bez aktu notarialnego;</li>
<li><b>dla celów dowodowych</b> (ad probationem): czynność ważna, ale w sporze ogranicza się dowód ze świadków;</li>
<li><b>dla wywołania określonych skutków</b> (ad eventum): np. data pewna wobec osób trzecich.</li>
</ul>
<h4>Wady oświadczenia woli</h4>
<div class="tw"><table><tr><th>Wada</th><th>Skutek</th></tr>
<tr><td>brak świadomości lub swobody (np. silne upojenie)</td><td>nieważność bezwzględna</td></tr>
<tr><td>pozorność (strony udają czynność)</td><td>nieważność bezwzględna</td></tr>
<tr><td>błąd istotny, podstęp</td><td>wzruszalność: uchylenie się na piśmie w ciągu 1 roku od wykrycia błędu</td></tr>
<tr><td>groźba bezprawna</td><td>wzruszalność: 1 rok od ustania stanu obawy</td></tr></table></div>
<h4>Przedstawicielstwo</h4>
<ul>
<li><b>Pełnomocnictwo ogólne</b> obejmuje czynności zwykłego zarządu; <b>rodzajowe</b> określony rodzaj czynności; <b>szczególne</b> konkretną czynność.</li>
<li><b>Prokura</b>: udziela jej tylko przedsiębiorca wpisany do KRS (lub CEIDG), wyłącznie osobie fizycznej z pełną zdolnością do czynności prawnych, na piśmie pod rygorem nieważności. Prokura obejmuje czynności sądowe i pozasądowe związane z przedsiębiorstwem; do zbycia przedsiębiorstwa i nieruchomości potrzebne jest pełnomocnictwo szczególne.</li>
</ul>
<div class="tip">Pełnomocnictwo do czynności, która wymaga szczególnej formy, musi być udzielone w tej samej formie. Pełnomocnictwo do kupna mieszkania wymaga więc aktu notarialnego.</div>` },
        { tytul: "Umowy handlowe i odpowiedzialność", tresc: `<h4>Sposoby zawarcia umowy</h4>
<ul>
<li><b>Oferta</b>: wiąże oferenta do terminu w niej wskazanego; złożona ustnie lub w czasie rozmowy telefonicznej przestaje wiązać, gdy nie zostanie przyjęta niezwłocznie.</li>
<li><b>Negocjacje</b>: strona, która prowadzi je w złej wierze, odpowiada za szkodę drugiej strony.</li>
<li><b>Aukcja i przetarg</b>: umowa zostaje zawarta z oferentem, który zaoferował najkorzystniejsze warunki.</li>
</ul>
<h4>Zadatek a zaliczka</h4>
<div class="tw"><table><tr><th></th><th>Zadatek</th><th>Zaliczka</th></tr>
<tr><td>gdy umowę wykonano</td><td>zalicza się na poczet świadczenia</td><td>zalicza się na poczet świadczenia</td></tr>
<tr><td>gdy nie wykonał dający</td><td>druga strona może odstąpić i <b>zatrzymać zadatek</b></td><td>podlega zwrotowi</td></tr>
<tr><td>gdy nie wykonał biorący</td><td>dający może odstąpić i żądać <b>dwukrotności</b> zadatku</td><td>podlega zwrotowi</td></tr></table></div>
<p><b>Kara umowna</b> to zastrzeżona w umowie suma za niewykonanie lub nienależyte wykonanie zobowiązania <b>niepieniężnego</b> (np. opóźnienie dostawy). Za opóźnienie w zapłacie należą się odsetki, a nie kara umowna.</p>
<h4>Rękojmia a gwarancja</h4>
<div class="tw"><table><tr><th></th><th>Rękojmia</th><th>Gwarancja</th></tr>
<tr><td>źródło</td><td>ustawa (Kodeks cywilny)</td><td>dobrowolne oświadczenie gwaranta</td></tr>
<tr><td>kto odpowiada</td><td>sprzedawca</td><td>gwarant, najczęściej producent</td></tr>
<tr><td>okres</td><td>2 lata od wydania rzeczy</td><td>jak w dokumencie; gdy brak, 2 lata</td></tr>
<tr><td>uprawnienia</td><td>naprawa, wymiana, obniżenie ceny, odstąpienie (gdy wada istotna)</td><td>zgodnie z dokumentem gwarancyjnym</td></tr></table></div>
<p>W umowach z konsumentami odpowiedzialność sprzedawcy za <b>brak zgodności towaru z umową</b> reguluje ustawa o prawach konsumenta (2 lata od wydania). Konsument może odstąpić od umowy zawartej na odległość lub poza lokalem w ciągu <b>14 dni</b> bez podania przyczyny.</p>
<h4>Typowe umowy w działalności</h4>
<ul>
<li><b>Umowa agencyjna</b>: agent stale pośredniczy lub zawiera umowy w imieniu dającego zlecenie, za prowizją.</li>
<li><b>Umowa komisu</b>: komisant sprzedaje lub kupuje rzeczy <b>we własnym imieniu</b>, ale na rachunek komitenta.</li>
<li><b>Umowa dostawy</b>: dostawca zobowiązuje się wytwarzać rzeczy i dostarczać je częściowo lub periodycznie.</li>
<li><b>Umowa o roboty budowlane</b>: wykonanie obiektu według projektu; wymaga formy pisemnej.</li>
</ul>
<div class="tip">Agent działa w cudzym imieniu, komisant we własnym. To rozróżnienie często pojawia się w testach.</div>` },
        { tytul: "Przedawnienie, odsetki i windykacja", tresc: `<h4>Przedawnienie roszczeń (art. 118 KC)</h4>
<ul>
<li>Termin ogólny: <b>6 lat</b>; roszczenia o świadczenia okresowe i związane z prowadzeniem działalności gospodarczej: <b>3 lata</b>.</li>
<li>Koniec terminu przypada na <b>ostatni dzień roku kalendarzowego</b>, chyba że termin jest krótszy niż 2 lata.</li>
<li>Bieg przedawnienia <b>przerywa</b> m.in. uznanie roszczenia przez dłużnika, czynność przed sądem (pozew), wszczęcie mediacji. Po przerwie termin biegnie na nowo.</li>
</ul>
<pre>Faktura dla firmy płatna 15.03.2024 (działalność gospodarcza)
15.03.2024 + 3 lata = 15.03.2027
koniec roku kalendarzowego → przedawnienie 31.12.2027</pre>
<h4>Odsetki</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Wysokość</th></tr>
<tr><td>ustawowe za opóźnienie (KC)</td><td>stopa referencyjna NBP + 5,5 punktu procentowego</td></tr>
<tr><td>za opóźnienie w transakcjach handlowych (dłużnik nie jest podmiotem publicznym)</td><td>stopa referencyjna NBP + 10 punktów procentowych</td></tr>
<tr><td>maksymalne za opóźnienie</td><td>dwukrotność odsetek ustawowych za opóźnienie</td></tr></table></div>
<pre>odsetki = kwota × stopa roczna × liczba dni opóźnienia ÷ 365
np. 10 000 zł × 10% × 73 dni ÷ 365 = 200 zł</pre>
<p>W transakcjach handlowych wierzyciel może dodatkowo żądać <b>rekompensaty za koszty odzyskiwania należności</b>: 40 euro (należność do 5 000 zł), 70 euro (5 000-50 000 zł), 100 euro (powyżej 50 000 zł). Termin zapłaty w umowie między przedsiębiorcami nie powinien przekraczać 60 dni, a gdy dłużnikiem jest podmiot publiczny, 30 dni.</p>
<h4>Ścieżka windykacji</h4>
<ol>
<li>Przypomnienie o terminie, potem <b>wezwanie do zapłaty</b> (przedsądowe) z kwotą, numerem faktury i terminem.</li>
<li>Pozew w postępowaniu upominawczym lub nakazowym; drobne sprawy także w elektronicznym postępowaniu upominawczym (e-sąd).</li>
<li>Prawomocny nakaz zapłaty lub wyrok (<b>tytuł egzekucyjny</b>) z klauzulą wykonalności staje się <b>tytułem wykonawczym</b>.</li>
<li>Egzekucja przez <b>komornika</b> na wniosek wierzyciela.</li>
</ol>
<h4>Zabezpieczenia wierzytelności</h4>
<ul>
<li>osobiste: <b>weksel</b> (często in blanco z deklaracją wekslową), poręczenie, gwarancja bankowa;</li>
<li>rzeczowe: <b>zastaw</b> (na rzeczach ruchomych), <b>hipoteka</b> (na nieruchomości), przewłaszczenie na zabezpieczenie, kaucja.</li>
</ul>
<div class="tip">Przy obliczaniu odsetek od faktury liczy się dni od dnia następnego po terminie płatności do dnia zapłaty włącznie.</div>` }
      ],
      pytania: [
        Q("Umowa sprzedaży nieruchomości zawarta w zwykłej formie pisemnej jest", "nieważna", "ważna, ale trudniejsza do udowodnienia", "ważna po zarejestrowaniu w urzędzie skarbowym", "wzruszalna przez 1 rok", "Wymagany jest akt notarialny pod rygorem nieważności."),
        Q("Wiadomość e-mail pozwalająca ustalić nadawcę spełnia wymogi formy", "dokumentowej", "pisemnej", "elektronicznej", "aktu notarialnego", "Forma elektroniczna wymaga kwalifikowanego podpisu."),
        Q("Prokury można udzielić", "osobie fizycznej z pełną zdolnością do czynności prawnych", "spółce z o.o.", "osobie, która ukończyła 13 lat", "każdej osobie prawnej", "Art. 109² KC."),
        Q("Jeśli kupujący, który dał zadatek, nie wykona umowy, sprzedawca może odstąpić od umowy i", "zatrzymać zadatek", "żądać dwukrotności zadatku", "musi zwrócić zadatek", "żądać kary umownej w wysokości ceny", "Dwukrotności może żądać dający zadatek."),
        Q("Kto sprzedaje towar we własnym imieniu, ale na rachunek innej osoby, za prowizją?", "komisant", "agent", "pełnomocnik", "prokurent", "Agent działa w imieniu dającego zlecenie."),
        Q("Roszczenie przedsiębiorcy o zapłatę za towar przedawnia się z upływem", "3 lat, z końcem roku kalendarzowego", "6 lat od dnia wymagalności", "2 lat od wydania towaru", "10 lat", "Roszczenia z działalności gospodarczej: 3 lata (art. 118 KC)."),
        Q("Bieg przedawnienia przerywa", "uznanie roszczenia przez dłużnika", "wysłanie faktury pocztą", "zmiana siedziby wierzyciela", "upływ terminu płatności", "Po przerwaniu przedawnienie biegnie na nowo."),
        Q("Ograniczone prawo rzeczowe zabezpieczające wierzytelność na nieruchomości to", "hipoteka", "zastaw", "poręczenie", "weksel", "Zastaw dotyczy rzeczy ruchomych i praw.")
      ]
    },
    {
      id: "firma", tytul: "Formy działalności gospodarczej", opis: "Dobierzesz formę prawną firmy, przeprowadzisz rejestrację i opiszesz jej strukturę organizacyjną.",
      lekcje: [
        { tytul: "Rejestracja przedsiębiorcy", tresc: `<h4>Jednoosobowa działalność gospodarcza</h4>
<ul>
<li>Osoba fizyczna rejestruje się w <b>CEIDG</b> (Centralna Ewidencja i Informacja o Działalności Gospodarczej) wnioskiem <b>CEIDG-1</b>. Wpis jest <b>bezpłatny</b>.</li>
<li>Jednym wnioskiem można: zgłosić dane do GUS (nadanie <b>REGON</b>), do urzędu skarbowego (NIP, wybór formy opodatkowania), do ZUS lub KRUS (zgłoszenie do ubezpieczeń).</li>
<li>W CEIDG podaje się kody działalności według <b>PKD</b> (Polska Klasyfikacja Działalności).</li>
<li>Przedsiębiorca odpowiada za zobowiązania firmy <b>całym majątkiem osobistym</b>.</li>
</ul>
<h4>Działalność nierejestrowana</h4>
<p>Osoba fizyczna nie musi rejestrować firmy, jeśli jej przychód należny nie przekracza w żadnym kwartale <b>225% minimalnego wynagrodzenia</b> (limit kwartalny obowiązuje od 2025 r.) i nie prowadziła działalności w ostatnich 60 miesiącach. Taka osoba nie płaci składek ZUS z tego tytułu, ale rozlicza podatek w zeznaniu rocznym.</p>
<h4>Ulgi w składkach ZUS dla nowych firm</h4>
<div class="tw"><table><tr><th>Ulga</th><th>Okres</th><th>Na czym polega</th></tr>
<tr><td>ulga na start</td><td>6 pełnych miesięcy</td><td>brak składek społecznych, płaci się tylko składkę zdrowotną</td></tr>
<tr><td>preferencyjne składki</td><td>24 miesiące</td><td>podstawa składek 30% minimalnego wynagrodzenia</td></tr>
<tr><td>Mały ZUS plus</td><td>do 36 miesięcy w ciągu 60</td><td>składki zależne od dochodu, dla firm z niskim przychodem</td></tr></table></div>
<h4>Krajowy Rejestr Sądowy</h4>
<p><b>KRS</b> prowadzą sądy rejonowe (wydziały gospodarcze). Ma trzy rejestry: przedsiębiorców (spółki handlowe, spółdzielnie), stowarzyszeń i fundacji, dłużników niewypłacalnych (obecnie zastąpiony Krajowym Rejestrem Zadłużonych). Wnioski składa się elektronicznie przez Portal Rejestrów Sądowych.</p>
<ul>
<li>Numer <b>KRS</b> ma 10 cyfr; <b>NIP</b> 10 cyfr; <b>REGON</b> 9 cyfr (jednostki lokalne 14).</li>
<li>Spółka cywilna <b>nie jest</b> wpisywana do KRS: w CEIDG wpisani są jej wspólnicy, a sama spółka ma NIP i REGON.</li>
</ul>
<div class="tip">Rejestracja w CEIDG nie wymaga wizyty w ZUS ani w urzędzie skarbowym. Wystarczy jeden wniosek, który CEIDG przekaże dalej.</div>` },
        { tytul: "Spółki osobowe i kapitałowe", tresc: `<h4>Porównanie spółek</h4>
<div class="tw"><table><tr><th>Spółka</th><th>Umowa</th><th>Kapitał minimalny</th><th>Odpowiedzialność wspólników</th></tr>
<tr><td>cywilna</td><td>Kodeks cywilny, forma pisemna dla celów dowodowych</td><td>brak</td><td>solidarna, całym majątkiem</td></tr>
<tr><td>jawna</td><td>pisemna pod rygorem nieważności</td><td>brak</td><td>solidarna, subsydiarna (najpierw majątek spółki)</td></tr>
<tr><td>partnerska</td><td>pisemna</td><td>brak</td><td>partner nie odpowiada za błędy zawodowe innych partnerów</td></tr>
<tr><td>komandytowa</td><td>akt notarialny</td><td>brak</td><td>komplementariusz bez ograniczeń, komandytariusz do sumy komandytowej</td></tr>
<tr><td>komandytowo-akcyjna</td><td>statut w akcie notarialnym</td><td>50 000 zł</td><td>komplementariusz bez ograniczeń, akcjonariusz nie odpowiada</td></tr>
<tr><td>z o.o.</td><td>akt notarialny lub wzorzec S24</td><td>5 000 zł (udział min. 50 zł)</td><td>wspólnicy nie odpowiadają za zobowiązania spółki</td></tr>
<tr><td>prosta spółka akcyjna</td><td>akt notarialny lub S24</td><td>kapitał akcyjny 1 zł</td><td>akcjonariusze nie odpowiadają</td></tr>
<tr><td>akcyjna</td><td>statut w akcie notarialnym</td><td>100 000 zł (akcja min. 1 grosz)</td><td>akcjonariusze nie odpowiadają</td></tr></table></div>
<p>Spółki osobowe (jawna, partnerska, komandytowa, komandytowo-akcyjna) i kapitałowe (z o.o., PSA, akcyjna) są uregulowane w <b>Kodeksie spółek handlowych</b>. Spółka cywilna jest umową z Kodeksu cywilnego i nie ma osobowości prawnej; przedsiębiorcami są jej wspólnicy.</p>
<h4>Organy spółek kapitałowych</h4>
<div class="tw"><table><tr><th>Spółka</th><th>Zarządza</th><th>Nadzoruje</th><th>Decyduje o najważniejszych sprawach</th></tr>
<tr><td>z o.o.</td><td>zarząd</td><td>rada nadzorcza lub komisja rewizyjna (zwykle fakultatywnie)</td><td>zgromadzenie wspólników</td></tr>
<tr><td>akcyjna</td><td>zarząd</td><td>rada nadzorcza (obowiązkowa)</td><td>walne zgromadzenie</td></tr></table></div>
<p>Członkowie zarządu spółki z o.o. odpowiadają solidarnie za jej zobowiązania, gdy egzekucja z majątku spółki okazała się bezskuteczna, a nie zgłosili we właściwym czasie wniosku o ogłoszenie upadłości.</p>
<h4>Oznaczenie w nazwie</h4>
<p>sp.j., sp.p., sp.k., S.K.A., sp. z o.o., P.S.A., S.A. Spółka cywilna używa dopisku „s.c.”, ale nie jest to firma w rozumieniu KSH.</p>
<div class="tip">Subsydiarność w spółce jawnej oznacza, że wierzyciel może prowadzić egzekucję z majątku wspólnika dopiero wtedy, gdy egzekucja z majątku spółki okaże się bezskuteczna.</div>` },
        { tytul: "Struktura organizacyjna i dokumenty wewnętrzne", tresc: `<h4>Funkcje zarządzania</h4>
<p>Planowanie, organizowanie, motywowanie (przewodzenie) i kontrolowanie. Zarządzanie strategiczne obejmuje cele długookresowe (np. analiza <b>SWOT</b>: mocne i słabe strony wewnątrz firmy, szanse i zagrożenia z otoczenia).</p>
<h4>Struktury organizacyjne</h4>
<div class="tw"><table><tr><th>Struktura</th><th>Cechy</th></tr>
<tr><td>liniowa</td><td>jedność rozkazodawstwa: każdy ma jednego przełożonego; prosta, ale przeciąża kierownictwo</td></tr>
<tr><td>funkcjonalna</td><td>pracownik podlega kilku przełożonym, każdemu w innej dziedzinie (specjalizacja)</td></tr>
<tr><td>sztabowo-liniowa</td><td>linia wydaje polecenia, sztab (np. radca prawny, analitycy) tylko doradza</td></tr>
<tr><td>macierzowa</td><td>pracownik podlega kierownikowi działu i kierownikowi projektu</td></tr>
<tr><td>dywizjonalna</td><td>podział na samodzielne jednostki według produktów lub regionów</td></tr></table></div>
<p><b>Rozpiętość kierowania</b> to liczba pracowników bezpośrednio podległych jednemu kierownikowi. Duża rozpiętość daje strukturę <b>płaską</b> (mało szczebli), mała daje strukturę <b>smukłą</b>.</p>
<h4>Dokumenty wewnętrzne</h4>
<ul>
<li><b>Umowa spółki lub statut</b>: podstawowy akt ustrojowy.</li>
<li><b>Regulamin organizacyjny</b>: struktura, zadania komórek, podległość.</li>
<li><b>Regulamin pracy</b>: obowiązkowy u pracodawcy zatrudniającego co najmniej <b>50 pracowników</b> (od 20 do 49, gdy zażąda tego zakładowa organizacja związkowa); wchodzi w życie po 2 tygodniach od podania do wiadomości pracowników.</li>
<li><b>Regulamin wynagradzania</b>: przy co najmniej 50 pracownikach nieobjętych układem zbiorowym.</li>
<li><b>Zarządzenia</b> kierownika (np. o inwentaryzacji), <b>instrukcje</b> (kancelaryjna, obiegu dokumentów, kasowa), <b>zakresy obowiązków</b>, pełnomocnictwa i upoważnienia.</li>
</ul>
<h4>Instrukcja obiegu dokumentów</h4>
<p>Określa, kto wystawia dokument, kto go sprawdza pod względem <b>merytorycznym</b> (czy operacja była celowa i zgodna z rzeczywistością), <b>formalnym i rachunkowym</b> (czy ma wymagane elementy i poprawne obliczenia), kto zatwierdza do zapłaty i w jakim terminie dokument trafia do księgowości.</p>
<div class="tip">Sztab nie ma prawa wydawania poleceń komórkom liniowym. Jeśli w pytaniu „doradca przygotowuje opinie dla dyrektora”, to struktura sztabowo-liniowa.</div>` }
      ],
      pytania: [
        Q("Osoba fizyczna rozpoczynająca jednoosobową działalność gospodarczą składa wniosek", "CEIDG-1", "KRS-W3", "ZUS ZWUA", "VAT-26", "Wpis do CEIDG jest bezpłatny."),
        Q("Minimalny kapitał zakładowy spółki z ograniczoną odpowiedzialnością wynosi", "5 000 zł", "50 000 zł", "100 000 zł", "1 zł", "Wartość udziału co najmniej 50 zł."),
        Q("Wspólnik spółki jawnej odpowiada za zobowiązania spółki", "całym majątkiem, solidarnie i subsydiarnie", "tylko do wysokości wkładu", "do sumy komandytowej", "wcale nie odpowiada", "Subsydiarnie: po bezskutecznej egzekucji z majątku spółki."),
        Q("Do sumy komandytowej za zobowiązania spółki odpowiada", "komandytariusz", "komplementariusz", "akcjonariusz", "partner", "Komplementariusz odpowiada bez ograniczeń."),
        Q("Obowiązkowym organem nadzorczym spółki akcyjnej jest", "rada nadzorcza", "komisja rewizyjna", "zgromadzenie wspólników", "prokurent", "Walne zgromadzenie to organ uchwałodawczy."),
        Q("Spółka cywilna", "nie ma osobowości prawnej, a przedsiębiorcami są jej wspólnicy", "jest wpisywana do KRS", "wymaga kapitału 5 000 zł", "jest spółką kapitałową", "Spółka cywilna jest umową z Kodeksu cywilnego."),
        Q("Struktura, w której pracownik podlega jednocześnie kierownikowi działu i kierownikowi projektu, to struktura", "macierzowa", "liniowa", "sztabowo-liniowa", "dywizjonalna", "Typowa dla firm projektowych."),
        Q("Regulamin pracy jest obowiązkowy u pracodawcy zatrudniającego co najmniej", "50 pracowników", "10 pracowników", "20 pracowników bez wyjątku", "100 pracowników", "Przy 20-49 pracownikach, gdy zażąda tego związek zawodowy.")
      ]
    },
    {
      id: "faktury", tytul: "Faktury i kalkulacje", opis: "Wystawisz i skorygujesz fakturę oraz policzysz marżę, narzut, rabat i skonto.",
      lekcje: [
        { tytul: "Faktura krok po kroku", tresc: `<h4>Obowiązkowe elementy faktury (art. 106e ustawy o VAT)</h4>
<ul>
<li>data wystawienia i <b>kolejny numer</b> (jednoznacznie identyfikujący fakturę);</li>
<li>imiona i nazwiska lub nazwy oraz adresy sprzedawcy i nabywcy;</li>
<li><b>NIP sprzedawcy i NIP nabywcy</b>;</li>
<li>data dokonania dostawy (zakończenia usługi), jeśli różni się od daty wystawienia;</li>
<li>nazwa towaru lub usługi, miara i ilość;</li>
<li>cena jednostkowa netto, rabaty i opusty (jeśli nie zawarto ich w cenie);</li>
<li>wartość netto, stawka VAT, suma wartości netto w podziale na stawki, kwota podatku, <b>kwota należności ogółem</b>.</li>
</ul>
<h4>Terminy wystawienia</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Termin</th></tr>
<tr><td>dostawa towaru, wykonanie usługi</td><td>najpóźniej <b>15. dnia miesiąca następującego</b> po miesiącu dostawy</td></tr>
<tr><td>otrzymanie zaliczki</td><td>do 15. dnia miesiąca po miesiącu otrzymania zaliczki</td></tr>
<tr><td>usługi budowlane</td><td>do 30. dnia od wykonania usługi</td></tr>
<tr><td>najwcześniej</td><td>60 dni przed dostawą lub wykonaniem usługi</td></tr></table></div>
<h4>Adnotacje na fakturze</h4>
<ul>
<li>„<b>mechanizm podzielonej płatności</b>”: gdy kwota należności przekracza <b>15 000 zł brutto</b> i dotyczy towarów lub usług z załącznika nr 15 do ustawy;</li>
<li>„metoda kasowa”, „samofakturowanie”, „odwrotne obciążenie”, „procedura marży”;</li>
<li>przy sprzedaży zwolnionej: podstawa prawna zwolnienia (np. art. 113 ustawy o VAT dla zwolnienia podmiotowego).</li>
</ul>
<h4>Krajowy System e-Faktur</h4>
<p>Od 2026 r. faktury między przedsiębiorcami wystawia się jako <b>faktury ustrukturyzowane</b> w KSeF (wdrażane etapami: od 1 lutego 2026 r. najwięksi podatnicy, od 1 kwietnia 2026 r. pozostali). Faktura otrzymuje numer KSeF, a nabywca odbiera ją w systemie.</p>
<h4>Paragon a faktura</h4>
<ul>
<li>Paragon z NIP nabywcy na kwotę do <b>450 zł brutto</b> (lub 100 euro) jest <b>fakturą uproszczoną</b>.</li>
<li>Do paragonu można wystawić fakturę dla firmy tylko wtedy, gdy paragon zawiera NIP nabywcy.</li>
</ul>
<pre>Przykład wiersza faktury:
krzesło biurowe, 12 szt. × 350,00 zł netto
wartość netto  = 4 200,00 zł
VAT 23%        =   966,00 zł
wartość brutto = 5 166,00 zł</pre>
<div class="tip">Data wystawienia faktury i data sprzedaży to dwie różne daty. Jeśli są różne, obie muszą być na fakturze.</div>` },
        { tytul: "Korekty faktur i duplikaty", tresc: `<h4>Faktura korygująca</h4>
<p>Wystawia ją <b>sprzedawca</b>, gdy po wystawieniu faktury:</p>
<ul>
<li>udzielono rabatu (np. za obrót), obniżono lub podwyższono cenę;</li>
<li>nabywca zwrócił towar albo zwrócono zaliczkę;</li>
<li>stwierdzono pomyłkę w cenie, stawce, kwocie podatku, ilości lub w innej pozycji faktury.</li>
</ul>
<p>Elementy faktury korygującej: wyraz „<b>FAKTURA KORYGUJĄCA</b>” lub „KOREKTA”, numer kolejny i data wystawienia, dane z faktury pierwotnej (numer i data, dane stron), <b>przyczyna korekty</b>, kwota korekty podstawy i podatku (lub poprawne dane, gdy korekta nie dotyczy kwot).</p>
<pre>Faktura: 10 szt. × 50,00 zł netto, VAT 23%
Nabywca zwrócił 2 szt.
korekta netto  = -2 × 50,00 = -100,00 zł
korekta VAT    = -100,00 × 23% = -23,00 zł
korekta brutto = -123,00 zł</pre>
<p>Korektę in minus (zmniejszającą) sprzedawca rozlicza w okresie, w którym uzgodnił warunki z nabywcą i ma dokumentację tego uzgodnienia. Korektę in plus (zwiększającą) rozlicza się zwykle w okresie, w którym powstała przyczyna korekty.</p>
<h4>Nota korygująca</h4>
<ul>
<li>Wystawia ją <b>nabywca</b>, gdy faktura zawiera pomyłki w danych <b>niewpływających na kwoty</b>, np. błędną nazwę lub adres, oznaczenie towaru.</li>
<li>Nota musi zawierać wyrazy „NOTA KORYGUJĄCA” i wymaga <b>akceptacji sprzedawcy</b>.</li>
<li>Notą nie można poprawić ceny, ilości, stawki ani kwoty VAT. Do faktur ustrukturyzowanych w KSeF noty korygującej się nie stosuje, poprawia się je fakturą korygującą.</li>
</ul>
<h4>Duplikat</h4>
<p>Gdy faktura papierowa uległa zniszczeniu lub zaginęła, sprzedawca wystawia ponownie fakturę z wyrazem „<b>DUPLIKAT</b>” i datą jego wystawienia. Faktury z KSeF nie wymagają duplikatów, bo są przechowywane w systemie.</p>
<div class="tw"><table><tr><th>Błąd na fakturze</th><th>Dokument</th><th>Kto wystawia</th></tr>
<tr><td>zła cena jednostkowa</td><td>faktura korygująca</td><td>sprzedawca</td></tr>
<tr><td>literówka w nazwie nabywcy</td><td>nota korygująca (poza KSeF) lub faktura korygująca</td><td>nabywca / sprzedawca</td></tr>
<tr><td>zwrot części towaru</td><td>faktura korygująca</td><td>sprzedawca</td></tr>
<tr><td>zagubiony oryginał papierowy</td><td>duplikat</td><td>sprzedawca</td></tr></table></div>
<div class="tip">Na egzaminie: „nabywca może sam poprawić kwotę VAT notą” to zawsze odpowiedź błędna.</div>` },
        { tytul: "Marża, narzut, rabat i skonto", tresc: `<h4>Marża a narzut</h4>
<p>Obie wielkości opisują tę samą kwotę zysku handlowego, ale liczą procent od innej podstawy.</p>
<pre>zysk handlowy = cena sprzedaży netto - cena zakupu netto
narzut % = zysk ÷ cena ZAKUPU × 100%
marża %  = zysk ÷ cena SPRZEDAŻY × 100%

cena sprzedaży = cena zakupu × (1 + narzut)
cena sprzedaży = cena zakupu ÷ (1 - marża)</pre>
<pre>Cena zakupu 80 zł, narzut 25%:
cena sprzedaży = 80 × 1,25 = 100 zł
zysk = 20 zł, marża = 20 ÷ 100 = 20%

Cena zakupu 80 zł, marża 20%:
cena sprzedaży = 80 ÷ 0,8 = 100 zł</pre>
<div class="tip">Narzut 25% odpowiada marży 20%. Pułapka: przy marży 20% nie liczy się 80 × 1,2 = 96 zł, bo marża jest liczona od ceny sprzedaży.</div>
<h4>Od ceny netto do brutto</h4>
<pre>cena netto 100 zł, VAT 23%
cena brutto = 100 × 1,23 = 123 zł
z brutto: 246 zł ÷ 1,23 = 200 zł netto, VAT 46 zł</pre>
<h4>Rabaty</h4>
<ul>
<li><b>ilościowy</b> (za wielkość zamówienia), <b>za obrót</b> (po okresie), <b>sezonowy</b>, <b>lojalnościowy</b>, <b>gotówkowy</b>.</li>
<li>Rabaty łańcuchowe <b>mnoży się</b>, nie dodaje:</li>
</ul>
<pre>cena 1 000 zł, rabat 10% i dodatkowo 5%
1 000 × 0,90 × 0,95 = 855 zł
łączny rabat = 14,5%, a nie 15%</pre>
<h4>Skonto</h4>
<p>Skonto to obniżka za <b>szybszą zapłatę</b>. Zapis „2/10, netto 30” oznacza: 2% skonta przy zapłacie w ciągu 10 dni, w przeciwnym razie pełna kwota w 30 dni.</p>
<pre>faktura 5 000 zł, warunki 2/10 netto 30
zapłata 8. dnia: 5 000 × 0,98 = 4 900 zł
zapłata 25. dnia: 5 000 zł</pre>
<h4>Ceny w łańcuchu dystrybucji</h4>
<div class="tw"><table><tr><th>Etap</th><th>Obliczenie</th><th>Cena netto</th></tr>
<tr><td>cena producenta</td><td>dane</td><td>40,00 zł</td></tr>
<tr><td>hurtownia, narzut 15%</td><td>40 × 1,15</td><td>46,00 zł</td></tr>
<tr><td>sklep, narzut 30%</td><td>46 × 1,30</td><td>59,80 zł</td></tr>
<tr><td>cena detaliczna brutto, VAT 23%</td><td>59,80 × 1,23</td><td>73,55 zł</td></tr></table></div>
<p>Kwoty zaokrągla się do pełnych groszy dopiero na końcu każdego etapu, zgodnie z poleceniem zadania.</p>` }
      ],
      pytania: [
        Q("Fakturę za towar dostarczony 20 maja należy wystawić najpóźniej", "15 czerwca", "20 maja", "31 maja", "25 czerwca", "Do 15. dnia miesiąca następującego po miesiącu dostawy."),
        Q("Adnotację „mechanizm podzielonej płatności” umieszcza się na fakturze, gdy kwota należności przekracza", "15 000 zł brutto i dotyczy towarów z załącznika nr 15", "1 000 zł netto", "450 zł brutto", "100 000 zł netto przy każdej sprzedaży", "Art. 106e ust. 1 pkt 18a ustawy o VAT."),
        Q("Paragon z NIP nabywcy uznaje się za fakturę uproszczoną, jeśli kwota należności nie przekracza", "450 zł", "1 000 zł", "200 zł", "15 000 zł", "Lub 100 euro."),
        Q("Fakturę korygującą w związku ze zwrotem części towaru wystawia", "sprzedawca", "nabywca", "przewoźnik", "urząd skarbowy", "Nabywca może wystawić tylko notę korygującą."),
        Q("Notą korygującą nabywca może poprawić", "błędny adres nabywcy", "cenę jednostkową", "stawkę VAT", "ilość towaru", "Nota nie może dotyczyć kwot ani stawek."),
        Q("Cena zakupu towaru wynosi 60 zł, narzut 25%. Cena sprzedaży netto wynosi", "75 zł", "72 zł", "80 zł", "85 zł", "60 × 1,25 = 75 zł."),
        Q("Cena zakupu wynosi 80 zł, a marża liczona od ceny sprzedaży 20%. Cena sprzedaży netto wynosi", "100 zł", "96 zł", "64 zł", "104 zł", "80 ÷ (1 - 0,2) = 100 zł."),
        Q("Towar kosztuje 2 000 zł. Klient otrzymał rabat 10%, a następnie dodatkowe 5%. Zapłaci", "1 710 zł", "1 700 zł", "1 750 zł", "1 800 zł", "2 000 × 0,9 × 0,95 = 1 710 zł.")
      ]
    },
    {
      id: "srodki-trwale", tytul: "Środki trwałe w praktyce", opis: "Ustalisz wartość początkową, sporządzisz plan amortyzacji i rozliczysz zmiany w środkach trwałych.",
      lekcje: [
        { tytul: "Wartość początkowa i klasyfikacja", tresc: `<h4>Kiedy składnik jest środkiem trwałym</h4>
<p>Musi być <b>kompletny i zdatny do użytku</b> w dniu przyjęcia, przeznaczony na potrzeby jednostki, a przewidywany okres jego używania musi być <b>dłuższy niż rok</b>. Podatkowo środki o wartości początkowej do <b>10 000 zł</b> netto można jednorazowo zaliczyć do kosztów.</p>
<h4>Cena nabycia</h4>
<p>To cena zakupu powiększona o koszty bezpośrednio związane z nabyciem i przystosowaniem składnika do używania:</p>
<ul>
<li>transport, załadunek i wyładunek, ubezpieczenie w drodze;</li>
<li>montaż, instalacja i uruchomienie;</li>
<li>cło, akcyza, opłaty notarialne, skarbowe, prowizje;</li>
<li>pomniejszona o rabaty i opusty;</li>
<li><b>bez VAT</b>, jeśli podatnikowi przysługuje jego odliczenie.</li>
</ul>
<pre>Maszyna: cena 50 000 zł netto, rabat 3% ceny
transport 1 500 zł, montaż 2 000 zł
50 000 - 1 500 + 1 500 + 2 000 = 52 000 zł
wartość początkowa = 52 000 zł</pre>
<p>Dla środka wytworzonego we własnym zakresie wartością początkową jest <b>koszt wytworzenia</b> (materiały, robocizna, usługi obce, uzasadniona część kosztów pośrednich).</p>
<h4>Klasyfikacja Środków Trwałych (KŚT)</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Zawartość</th><th>Przykładowa stawka</th></tr>
<tr><td>0</td><td>grunty</td><td>nie amortyzuje się</td></tr>
<tr><td>1</td><td>budynki i lokale</td><td>niemieszkalne 2,5%, mieszkalne 1,5%</td></tr>
<tr><td>2</td><td>obiekty inżynierii lądowej i wodnej</td><td>np. 4,5%</td></tr>
<tr><td>3</td><td>kotły i maszyny energetyczne</td><td>np. 7%</td></tr>
<tr><td>4</td><td>maszyny, urządzenia i aparaty ogólnego zastosowania</td><td>zestawy komputerowe 30%</td></tr>
<tr><td>5</td><td>specjalistyczne maszyny i urządzenia</td><td>np. 14%</td></tr>
<tr><td>6</td><td>urządzenia techniczne</td><td>np. 10%</td></tr>
<tr><td>7</td><td>środki transportu</td><td>samochody 20%</td></tr>
<tr><td>8</td><td>narzędzia, przyrządy, ruchomości i wyposażenie</td><td>np. 20%</td></tr>
<tr><td>9</td><td>inwentarz żywy</td><td>np. 20%</td></tr></table></div>
<h4>Dokumentacja</h4>
<p>Przyjęcie: dowód <b>OT</b>, wpis do ewidencji (księgi inwentarzowej), nadanie <b>numeru inwentarzowego</b>, karta środka trwałego. Dodatkowo <b>tabela amortyzacyjna</b> z odpisami za kolejne miesiące.</p>
<div class="tip">Jeśli zakup jest finansowany z zaliczki lub kredytu, odsetki naliczone do dnia przekazania do używania zwiększają wartość początkową, a późniejsze są kosztem finansowym.</div>` },
        { tytul: "Plan amortyzacji: liniowa i degresywna", tresc: `<h4>Metoda liniowa z przyjęciem w trakcie roku</h4>
<pre>Wartość początkowa 52 000 zł, stawka 20%
przyjęcie do używania: 10 marca
odpisy od kwietnia (miesiąc następny)
odpis roczny    = 52 000 × 20% = 10 400 zł
odpis miesięczny = 10 400 ÷ 12 = 866,67 zł
I rok: 9 miesięcy × 866,67 ≈ 7 800 zł</pre>
<h4>Metoda degresywna</h4>
<ul>
<li>Stawka = stawka liniowa × współczynnik <b>do 2,0</b>, liczona od <b>wartości netto</b> na początek roku.</li>
<li>Gdy odpis degresywny będzie niższy od liniowego (liczonego od wartości początkowej), przechodzi się na metodę liniową.</li>
<li>Dotyczy maszyn i urządzeń (grupy 3-6 i 8 KŚT) oraz środków transportu z grupy 7 <b>z wyjątkiem samochodów osobowych</b>. Nie dotyczy budynków.</li>
</ul>
<div class="tw"><table><tr><th>Rok</th><th>Wartość netto na początek</th><th>Odpis degresywny 40%</th><th>Odpis liniowy 20%</th><th>Odpis przyjęty</th></tr>
<tr><td>1</td><td>100 000</td><td>40 000</td><td>20 000</td><td>40 000</td></tr>
<tr><td>2</td><td>60 000</td><td>24 000</td><td>20 000</td><td>24 000</td></tr>
<tr><td>3</td><td>36 000</td><td>14 400</td><td>20 000</td><td>20 000 (zmiana metody)</td></tr>
<tr><td>4</td><td>16 000</td><td>-</td><td>20 000</td><td>16 000 (do pełnego umorzenia)</td></tr></table></div>
<p>Suma odpisów = 100 000 zł, czyli wartość początkowa. W tabeli przyjęto dla prostoty pełne lata użytkowania.</p>
<h4>Inne sposoby amortyzacji</h4>
<ul>
<li><b>Jednorazowa amortyzacja</b> (pomoc de minimis): mali podatnicy i firmy rozpoczynające działalność mogą jednorazowo odpisać środki z grup 3-8 (bez samochodów osobowych) do limitu <b>50 000 euro</b> rocznie.</li>
<li><b>Stawki indywidualne</b> dla środków używanych lub ulepszonych, z minimalnym okresem amortyzacji określonym w ustawie.</li>
<li><b>Metoda naturalna</b> (w rachunkowości): według stopnia zużycia, np. liczby wyprodukowanych sztuk lub przejechanych kilometrów.</li>
</ul>
<pre>Metoda naturalna: maszyna 90 000 zł, wydajność 300 000 szt.
odpis na sztukę = 90 000 ÷ 300 000 = 0,30 zł
w roku wyprodukowano 45 000 szt. → odpis 13 500 zł</pre>
<div class="tip">Częsty błąd: liczenie odpisu degresywnego od wartości początkowej w każdym roku. Degresywna zawsze od wartości netto (po umorzeniu).</div>` },
        { tytul: "Ulepszenie, likwidacja i leasing", tresc: `<h4>Ulepszenie a remont</h4>
<div class="tw"><table><tr><th></th><th>Ulepszenie</th><th>Remont</th></tr>
<tr><td>istota</td><td>przebudowa, rozbudowa, rekonstrukcja, adaptacja, modernizacja; zwiększa wartość użytkową</td><td>przywrócenie stanu pierwotnego, wymiana zużytych części</td></tr>
<tr><td>ujęcie</td><td>gdy wydatki w roku przekraczają 10 000 zł, <b>zwiększają wartość początkową</b></td><td>koszt bieżący</td></tr>
<tr><td>przykład</td><td>dobudowa piętra, montaż windy</td><td>malowanie, wymiana uszkodzonej szyby</td></tr></table></div>
<h4>Likwidacja i sprzedaż</h4>
<ul>
<li>Likwidację dokumentuje dowód <b>LT</b> (protokół komisji likwidacyjnej). Niezamortyzowana wartość netto zlikwidowanego środka obciąża <b>pozostałe koszty operacyjne</b>.</li>
<li>Przy sprzedaży przychód ze sprzedaży ujmuje się w <b>pozostałych przychodach operacyjnych</b>, a wartość netto w pozostałych kosztach operacyjnych. Różnica to wynik na sprzedaży środka trwałego.</li>
<li>Nieodpłatne przekazanie innej jednostce: dowód <b>PT</b>.</li>
</ul>
<pre>Samochód: wartość początkowa 80 000 zł, umorzenie 60 000 zł
sprzedaż za 30 000 zł netto
wartość netto = 80 000 - 60 000 = 20 000 zł
wynik na sprzedaży = 30 000 - 20 000 = +10 000 zł (zysk)</pre>
<h4>Leasing</h4>
<div class="tw"><table><tr><th></th><th>Leasing operacyjny</th><th>Leasing finansowy</th></tr>
<tr><td>kto amortyzuje</td><td>finansujący (leasingodawca)</td><td>korzystający (leasingobiorca)</td></tr>
<tr><td>koszt korzystającego</td><td>cała rata netto (oraz opłata wstępna)</td><td>część odsetkowa raty i odpisy amortyzacyjne</td></tr>
<tr><td>VAT</td><td>doliczany do każdej raty</td><td>płatny z góry od całej wartości przedmiotu</td></tr>
<tr><td>po zakończeniu</td><td>możliwy wykup za cenę z umowy</td><td>zwykle przejście własności</td></tr></table></div>
<p>Najem i dzierżawa różnią się od leasingu tym, że nie przewidują z zasady przejścia własności i nie służą finansowaniu zakupu.</p>
<h4>Inwentaryzacja środków trwałych</h4>
<p>Środki trwałe na terenie strzeżonym spisuje się raz na <b>4 lata</b>. Środki trudno dostępne (np. sieci podziemne) oraz grunty inwentaryzuje się drogą <b>weryfikacji</b>, czyli porównania z dokumentami.</p>
<div class="tip">Wymiana silnika na identyczny to remont. Wymiana na silnik o większej mocy, który zwiększa wydajność maszyny, to modernizacja, czyli ulepszenie.</div>` }
      ],
      pytania: [
        Q("Do wartości początkowej środka trwałego czynnego podatnika VAT NIE wlicza się", "podlegającego odliczeniu VAT naliczonego", "kosztów transportu", "kosztów montażu", "cła", "VAT odliczalny nie zwiększa ceny nabycia."),
        Q("Amortyzację środka trwałego przyjętego do używania 10 marca rozpoczyna się od", "kwietnia", "marca", "stycznia następnego roku", "dnia zakupu", "Od miesiąca następującego po miesiącu przyjęcia."),
        Q("Maszyna o wartości 40 000 zł, stawka liniowa 10%. Miesięczny odpis amortyzacyjny wynosi", "333,33 zł", "400,00 zł", "4 000,00 zł", "3 333,33 zł", "40 000 × 10% = 4 000 zł rocznie ÷ 12."),
        Q("W metodzie degresywnej odpis roczny oblicza się od", "wartości netto na początek roku", "wartości początkowej w każdym roku", "wartości rynkowej", "wartości odtworzeniowej", "Przy spadku odpisu poniżej liniowego przechodzi się na liniową."),
        Q("Metody degresywnej nie można stosować do", "samochodów osobowych", "maszyn produkcyjnych", "urządzeń technicznych", "samochodów ciężarowych", "Wyłączone są samochody osobowe i budynki."),
        Q("Do grupy 0 Klasyfikacji Środków Trwałych należą", "grunty", "budynki", "komputery", "środki transportu", "Gruntów się nie amortyzuje."),
        Q("Przebudowa hali, która zwiększyła jej powierzchnię, a wydatki przekroczyły 10 000 zł, to", "ulepszenie zwiększające wartość początkową", "remont stanowiący koszt bieżący", "likwidacja częściowa", "inwestycja krótkoterminowa", "Rozbudowa to jedna z form ulepszenia."),
        Q("W leasingu operacyjnym odpisów amortyzacyjnych dokonuje", "finansujący", "korzystający", "producent", "ubezpieczyciel", "Korzystający zalicza do kosztów raty leasingowe.")
      ]
    },
    {
      id: "zapasy", tytul: "Zapasy i inwentaryzacja", opis: "Wycenisz rozchód zapasów, przeprowadzisz spis z natury i rozliczysz różnice inwentaryzacyjne.",
      lekcje: [
        { tytul: "Wycena rozchodu: FIFO, LIFO, średnia", tresc: `<h4>Dane przykładu</h4>
<pre>1.03  stan       100 szt. × 10 zł = 1 000 zł
5.03  PZ         200 szt. × 12 zł = 2 400 zł
10.03 WZ         250 szt.</pre>
<div class="tw"><table><tr><th>Metoda</th><th>Wartość rozchodu</th><th>Zapas końcowy</th></tr>
<tr><td>FIFO</td><td>100 × 10 + 150 × 12 = <b>2 800 zł</b></td><td>50 × 12 = 600 zł</td></tr>
<tr><td>LIFO</td><td>200 × 12 + 50 × 10 = <b>2 900 zł</b></td><td>50 × 10 = 500 zł</td></tr>
<tr><td>średnia ważona</td><td>3 400 ÷ 300 = 11,33 zł/szt.; 250 × 11,3333 = <b>2 833,33 zł</b></td><td>566,67 zł</td></tr></table></div>
<p>Kontrola: wartość rozchodu + zapas końcowy = 3 400 zł w każdej metodzie.</p>
<h4>Wpływ na wynik</h4>
<ul>
<li>Przy <b>rosnących cenach</b> FIFO daje najniższy koszt sprzedanych towarów i najwyższy zysk; zapas wyceniony jest po cenach najnowszych.</li>
<li>LIFO przy rosnących cenach daje najwyższy koszt i najniższy zysk.</li>
<li>Średnia ważona wygładza wahania cen. Ważoną średnią przelicza się po każdej dostawie (średnia ruchoma) lub raz na okres.</li>
</ul>
<h4>Kartoteka ilościowo-wartościowa (FIFO)</h4>
<div class="tw"><table><tr><th>Data</th><th>Dokument</th><th>Przychód</th><th>Rozchód</th><th>Zapas</th></tr>
<tr><td>1.03</td><td>BO</td><td></td><td></td><td>100 × 10</td></tr>
<tr><td>5.03</td><td>PZ 1</td><td>200 × 12</td><td></td><td>100 × 10; 200 × 12</td></tr>
<tr><td>10.03</td><td>WZ 1</td><td></td><td>100 × 10; 150 × 12</td><td>50 × 12</td></tr></table></div>
<p>W kartotece FIFO zapas zapisuje się z podziałem na <b>partie</b> (ceny), bo każda partia wychodzi osobno.</p>
<h4>Ceny ewidencyjne</h4>
<p>Firma może prowadzić ewidencję po stałych <b>cenach ewidencyjnych</b> (np. planowanych). Różnica między ceną zakupu a ceną ewidencyjną to <b>odchylenie</b>, które rozlicza się proporcjonalnie na rozchód i zapas.</p>
<div class="tip">W zadaniach zawsze najpierw wypisz partie z ceną i ilością. Rozchód wycinasz z partii od najstarszej (FIFO) albo od najnowszej (LIFO).</div>` },
        { tytul: "Spis z natury krok po kroku", tresc: `<h4>Przygotowanie</h4>
<ol>
<li><b>Zarządzenie kierownika jednostki</b>: termin, zakres, skład komisji inwentaryzacyjnej i zespołów spisowych.</li>
<li>Zespół spisowy: co najmniej <b>2 osoby</b>, niebędące osobami materialnie odpowiedzialnymi za spisywane składniki.</li>
<li>Osoba materialnie odpowiedzialna składa <b>oświadczenie wstępne</b> (że wszystkie dowody przychodu i rozchodu zostały przekazane do ewidencji).</li>
<li>Przygotowanie pola spisowego: uporządkowanie towarów, zawieszenie przyjęć i wydań lub wyodrębnienie towarów przyjętych w czasie spisu.</li>
</ol>
<h4>Arkusz spisu z natury</h4>
<ul>
<li>Jest <b>drukiem ścisłego zarachowania</b>: numerowany, ewidencjonowany, wydawany zespołom za pokwitowaniem.</li>
<li>Ilość ustala się przez <b>przeliczenie, zważenie lub zmierzenie</b>, a nie na podstawie deklaracji pracownika.</li>
<li>Pozycje wpisuje się kolejno; wolne miejsca przekreśla się.</li>
<li>Błędy poprawia się przez skreślenie z zachowaniem czytelności, wpisanie poprawnej treści i podpis osoby poprawiającej. Nie wolno używać korektora.</li>
<li>Arkusz podpisują członkowie zespołu i osoba materialnie odpowiedzialna, która składa <b>oświadczenie końcowe</b> (brak zastrzeżeń do spisu).</li>
</ul>
<h4>Terminy inwentaryzacji (art. 26 ustawy o rachunkowości)</h4>
<div class="tw"><table><tr><th>Składnik</th><th>Termin i częstotliwość</th></tr>
<tr><td>zapasy, gotówka, papiery wartościowe</td><td>na ostatni dzień roku obrotowego; spis rozpoczyna się nie wcześniej niż 3 miesiące przed końcem roku i kończy do 15. dnia następnego roku</td></tr>
<tr><td>zapasy w magazynie strzeżonym z ewidencją ilościowo-wartościową</td><td>raz w ciągu <b>2 lat</b></td></tr>
<tr><td>środki trwałe i maszyny w budowie na terenie strzeżonym</td><td>raz w ciągu <b>4 lat</b></td></tr>
<tr><td>towary i opakowania w punktach sprzedaży detalicznej z ewidencją wartościową</td><td>raz w roku</td></tr></table></div>
<h4>Wycena spisu</h4>
<p>Arkusze wycenia księgowość, zwykle po cenach ewidencyjnych lub cenach nabycia. Następnie porównuje się stan rzeczywisty z ewidencyjnym w <b>zestawieniu różnic inwentaryzacyjnych</b>.</p>
<div class="tip">Osoba materialnie odpowiedzialna nie może być członkiem zespołu spisowego dla swojego magazynu, ale musi być obecna przy spisie lub wskazać osobę, która ją zastąpi.</div>` },
        { tytul: "Rozliczenie różnic i kompensata", tresc: `<h4>Wyjaśnienie różnic</h4>
<p>Komisja inwentaryzacyjna ustala przyczyny różnic, wysłuchuje osoby materialnie odpowiedzialnej i sporządza <b>protokół weryfikacji różnic</b> z wnioskiem o sposobie ich rozliczenia. Decyzję podejmuje kierownik jednostki.</p>
<div class="tw"><table><tr><th>Różnica</th><th>Sposób rozliczenia</th></tr>
<tr><td>niedobór w granicach norm ubytków naturalnych</td><td>koszt (np. zużycie materiałów, wartość sprzedanych towarów)</td></tr>
<tr><td>niedobór niezawiniony (np. kradzież z włamaniem)</td><td>pozostałe koszty operacyjne</td></tr>
<tr><td>niedobór zawiniony</td><td>obciążenie osoby odpowiedzialnej (należność od pracownika)</td></tr>
<tr><td>nadwyżka</td><td>pozostałe przychody operacyjne (lub zmniejszenie kosztów)</td></tr></table></div>
<h4>Kompensata niedoborów z nadwyżkami</h4>
<p>Dopuszczalna tylko, gdy jednocześnie:</p>
<ul>
<li>dotyczą <b>tego samego okresu</b> i tej samej <b>osoby materialnie odpowiedzialnej</b>;</li>
<li>dotyczą składników <b>podobnych</b>, które łatwo pomylić (np. różne gatunki tej samej kawy);</li>
<li>kompensuje się w ilości odpowiadającej <b>mniejszej</b> z ilości (niedoboru lub nadwyżki) i po <b>niższej</b> cenie.</li>
</ul>
<pre>Niedobór: kawa A 10 kg × 40 zł
Nadwyżka: kawa B  6 kg × 35 zł
kompensata: 6 kg
różnica cen przy kompensacie: 6 × (40 - 35) = 30 zł
niedobór po kompensacie: 4 × 40 = 160 zł
do rozliczenia jako niedobór: 160 + 30 = 190 zł</pre>
<h4>Odpowiedzialność materialna pracownika</h4>
<ul>
<li>Za mienie <b>powierzone z obowiązkiem zwrotu lub wyliczenia się</b> (np. kasa, magazyn) pracownik odpowiada w <b>pełnej wysokości</b>, chyba że wykaże, że szkoda powstała z przyczyn od niego niezależnych.</li>
<li>Za szkodę wyrządzoną <b>nieumyślnie</b> przy innym mieniu: do wysokości <b>3-miesięcznego wynagrodzenia</b>.</li>
<li>Za szkodę wyrządzoną umyślnie: w pełnej wysokości.</li>
<li>Wspólna odpowiedzialność materialna wymaga pisemnej umowy wszystkich pracowników.</li>
</ul>
<p>Różnice inwentaryzacyjne ujmuje się w księgach <b>roku obrotowego, na który przypadał termin inwentaryzacji</b>.</p>
<div class="tip">Kompensaty nie stosuje się między różnymi magazynierami ani między zupełnie różnymi towarami (np. mąka i cukier).</div>` }
      ],
      pytania: [
        Q("Stan 100 szt. po 10 zł, dostawa 200 szt. po 12 zł, rozchód 250 szt. Wartość rozchodu wg FIFO wynosi", "2 800 zł", "2 900 zł", "2 833,33 zł", "3 000 zł", "100 × 10 + 150 × 12 = 2 800 zł."),
        Q("Przy rosnących cenach zakupu najwyższy zysk brutto ze sprzedaży wykaże metoda wyceny rozchodu", "FIFO", "LIFO", "średniej ważonej", "każda metoda daje ten sam zysk", "Rozchód wyceniany po najstarszych, najniższych cenach."),
        Q("Arkusz spisu z natury jest", "drukiem ścisłego zarachowania", "dokumentem kasowym", "dowodem zewnętrznym obcym", "dokumentem PZ", "Arkusze są numerowane i ewidencjonowane."),
        Q("Spis z natury zapasów na koniec roku można rozpocząć nie wcześniej niż", "3 miesiące przed końcem roku", "1 miesiąc przed końcem roku", "6 miesięcy przed końcem roku", "w dniu bilansowym", "I zakończyć do 15. dnia następnego roku."),
        Q("Środki trwałe znajdujące się na terenie strzeżonym inwentaryzuje się drogą spisu z natury raz na", "4 lata", "rok", "2 lata", "10 lat", "Art. 26 ust. 3 pkt 3 ustawy o rachunkowości."),
        Q("Kompensata niedoborów z nadwyżkami jest dopuszczalna, gdy dotyczą", "podobnych składników i tej samej osoby materialnie odpowiedzialnej", "dowolnych towarów w całej firmie", "różnych magazynierów w tym samym roku", "środków trwałych i materiałów", "Kompensuje się mniejszą ilość po niższej cenie."),
        Q("Niedobór niezawiniony powstały w wyniku kradzieży z włamaniem rozlicza się w ciężar", "pozostałych kosztów operacyjnych", "kapitału zakładowego", "przychodów ze sprzedaży", "pracownika magazynu", "Niedobór zawiniony obciąża pracownika."),
        Q("Pracownik odpowiada w pełnej wysokości za szkodę w mieniu", "powierzonym mu z obowiązkiem zwrotu lub wyliczenia się", "wyrządzoną nieumyślnie przy obsłudze maszyny", "którego nie był użytkownikiem", "zniszczonym przez klienta", "Przy szkodzie nieumyślnej górna granica to 3-miesięczne wynagrodzenie.")
      ]
    }
  ]);

  pod("EKA.05", [
    {
      id: "prawo-pracy", tytul: "Prawo pracy w praktyce", opis: "Zastosujesz przepisy o umowach, czasie pracy i urlopach do konkretnych przypadków pracowników.",
      lekcje: [
        { tytul: "Umowy o pracę i ich rozwiązanie", tresc: `<h4>Rodzaje umów</h4>
<div class="tw"><table><tr><th>Umowa</th><th>Zasady</th></tr>
<tr><td>na okres próbny</td><td>do 3 miesięcy; do 1 miesiąca, gdy planowana jest umowa na czas określony krótszy niż 6 miesięcy; do 2 miesięcy, gdy planowana na 6-12 miesięcy</td></tr>
<tr><td>na czas określony</td><td>łącznie maksymalnie <b>33 miesiące</b> i nie więcej niż <b>3 umowy</b>; po przekroczeniu umowa staje się umową na czas nieokreślony</td></tr>
<tr><td>na czas nieokreślony</td><td>najtrwalsza forma zatrudnienia</td></tr></table></div>
<ul>
<li>Umowę zawiera się w postaci papierowej lub elektronicznej, określając rodzaj pracy, miejsce, wynagrodzenie, wymiar czasu pracy i termin rozpoczęcia pracy.</li>
<li>Najpóźniej w ciągu <b>7 dni</b> od dopuszczenia do pracy pracodawca informuje pracownika o warunkach zatrudnienia (m.in. dobowa i tygodniowa norma czasu pracy, częstotliwość wypłaty, wymiar urlopu, długość okresu wypowiedzenia).</li>
<li>Przed dopuszczeniem do pracy pracownik musi mieć <b>orzeczenie lekarskie</b> z badań wstępnych i odbyć <b>instruktaż ogólny i stanowiskowy BHP</b>.</li>
</ul>
<h4>Okresy wypowiedzenia</h4>
<div class="tw"><table><tr><th>Umowa</th><th>Staż u pracodawcy</th><th>Okres</th></tr>
<tr><td rowspan="3">na czas nieokreślony i określony</td><td>poniżej 6 miesięcy</td><td>2 tygodnie</td></tr>
<tr><td>co najmniej 6 miesięcy</td><td>1 miesiąc</td></tr>
<tr><td>co najmniej 3 lata</td><td>3 miesiące</td></tr>
<tr><td rowspan="3">na okres próbny</td><td>do 2 tygodni</td><td>3 dni robocze</td></tr>
<tr><td>dłuższy niż 2 tygodnie</td><td>1 tydzień</td></tr>
<tr><td>3 miesiące</td><td>2 tygodnie</td></tr></table></div>
<p>Okres tygodniowy lub miesięczny kończy się odpowiednio w <b>sobotę</b> lub <b>ostatniego dnia miesiąca</b>. Wypowiedzenie umowy na czas nieokreślony i określony przez pracodawcę wymaga podania przyczyny.</p>
<h4>Rozwiązanie bez wypowiedzenia</h4>
<ul>
<li><b>Z winy pracownika</b> (art. 52 KP): ciężkie naruszenie podstawowych obowiązków, przestępstwo uniemożliwiające dalsze zatrudnienie, zawiniona utrata uprawnień. Najpóźniej w ciągu <b>1 miesiąca</b> od uzyskania wiadomości o przyczynie.</li>
<li><b>Bez winy pracownika</b> (art. 53 KP): m.in. długotrwała niezdolność do pracy z powodu choroby po wyczerpaniu określonego okresu.</li>
<li><b>Przez porozumienie stron</b>: w dowolnym terminie uzgodnionym przez strony.</li>
</ul>
<h4>Świadectwo pracy</h4>
<p>Wydaje się je <b>w dniu ustania</b> stosunku pracy, a gdy nie jest to możliwe, w ciągu 7 dni. Pracownik może w ciągu <b>14 dni</b> wystąpić do pracodawcy o sprostowanie, a po odmowie w ciągu 14 dni do sądu pracy.</p>
<div class="tip">Szczególną ochronę przed wypowiedzeniem mają m.in. pracownice w ciąży, osoby na urlopie macierzyńskim i rodzicielskim oraz pracownicy, którym brakuje nie więcej niż 4 lata do wieku emerytalnego.</div>` },
        { tytul: "Czas pracy i nadgodziny", tresc: `<h4>Normy i odpoczynki</h4>
<ul>
<li>Norma: <b>8 godzin na dobę</b> i przeciętnie <b>40 godzin</b> w przeciętnie pięciodniowym tygodniu pracy, w okresie rozliczeniowym do 4 miesięcy.</li>
<li>Doba pracownicza: 24 godziny od godziny rozpoczęcia pracy.</li>
<li>Odpoczynek dobowy: co najmniej <b>11 godzin</b>; tygodniowy: co najmniej <b>35 godzin</b>.</li>
<li>Przerwa wliczana do czasu pracy: 15 minut, gdy dobowy wymiar wynosi co najmniej 6 godzin.</li>
<li>Pora nocna: 8 godzin między 21:00 a 7:00. Dodatek za pracę w nocy: <b>20% stawki godzinowej</b> wynikającej z minimalnego wynagrodzenia.</li>
</ul>
<h4>Wymiar czasu pracy w okresie</h4>
<pre>wymiar = 40 h × liczba pełnych tygodni okresu
       + 8 h × dni od poniedziałku do piątku do końca okresu
       - 8 h × każde święto w dniu innym niż niedziela

Listopad 2026 (1.11 niedziela, 11.11 środa):
4 pełne tygodnie (1-28.11)        = 160 h
pozostałe 29-30.11: 1 dzień pn-pt =   8 h
święto 11.11                      =  -8 h
wymiar                            = 160 h (20 dni)</pre>
<p>Święto przypadające w <b>sobotę</b> też obniża wymiar o 8 godzin, a pracodawca musi wyznaczyć za nie inny dzień wolny. Święto w niedzielę wymiaru nie obniża.</p>
<h4>Praca w godzinach nadliczbowych</h4>
<div class="tw"><table><tr><th>Kiedy</th><th>Dodatek</th></tr>
<tr><td>w nocy, w niedziele i święta niebędące dla pracownika dniami pracy, w dniu wolnym udzielonym za pracę w niedzielę lub święto</td><td>100%</td></tr>
<tr><td>przekroczenie przeciętnej normy tygodniowej</td><td>100%</td></tr>
<tr><td>w pozostałe dni (przekroczenie normy dobowej)</td><td>50%</td></tr></table></div>
<ul>
<li>Limit: <b>150 godzin</b> nadliczbowych w roku kalendarzowym (regulamin lub umowa mogą określić inny limit, z zachowaniem przeciętnie 48 h tygodniowo).</li>
<li>Zamiast dodatku można udzielić czasu wolnego: na wniosek pracownika w proporcji <b>1:1</b>, bez wniosku <b>1:1,5</b>.</li>
</ul>
<pre>Wynagrodzenie 5 600 zł, wymiar w miesiącu 168 h
stawka godzinowa = 5 600 ÷ 168 = 33,33 zł
10 nadgodzin w dzień roboczy (dodatek 50%):
normalne wynagrodzenie 10 × 33,33 = 333,33 zł
dodatek                10 × 16,67 = 166,67 zł
razem                              = 500,00 zł</pre>
<h4>Systemy czasu pracy</h4>
<p>Podstawowy (8 h), równoważny (do 12 h na dobę, krótsze lub wolne inne dni), zadaniowy (czas wynika z zadań), weekendowy (praca w piątki, soboty, niedziele, święta), ruchomy (różne godziny rozpoczęcia pracy), skrócony tydzień pracy.</p>
<div class="tip">Za nadgodziny pracownik z pensją miesięczną dostaje normalne wynagrodzenie za te godziny <b>oraz</b> dodatek. Odpowiedź „tylko dodatek 50%” jest błędna.</div>` },
        { tytul: "Urlopy i zwolnienia od pracy", tresc: `<h4>Wymiar urlopu wypoczynkowego</h4>
<ul>
<li><b>20 dni</b> przy stażu krótszym niż 10 lat, <b>26 dni</b> przy stażu co najmniej 10 lat.</li>
<li>Do stażu wlicza się wszystkie poprzednie okresy zatrudnienia oraz okres nauki (nie sumuje się różnych szkół, liczy się najkorzystniejszą):</li>
</ul>
<div class="tw"><table><tr><th>Ukończona szkoła</th><th>Wliczany okres</th></tr>
<tr><td>zasadnicza lub branżowa szkoła zawodowa</td><td>czas trwania nauki, nie więcej niż 3 lata</td></tr>
<tr><td>średnia szkoła zawodowa (technikum)</td><td>czas trwania nauki, nie więcej niż 5 lat</td></tr>
<tr><td>średnia szkoła ogólnokształcąca</td><td>4 lata</td></tr>
<tr><td>szkoła policealna</td><td>6 lat</td></tr>
<tr><td>szkoła wyższa</td><td>8 lat</td></tr></table></div>
<pre>Absolwent studiów (8 lat) z 2 latami pracy: staż 10 lat → 26 dni
Absolwent technikum (5 lat) z 3 latami pracy: staż 8 lat → 20 dni
Pracownik na 1/2 etatu z prawem do 26 dni: 13 dni</pre>
<h4>Ważne zasady</h4>
<ul>
<li>W <b>pierwszym roku pracy</b> urlop nabywa się z upływem każdego miesiąca w wymiarze 1/12 urlopu rocznego.</li>
<li>Przy niepełnym etacie urlop ustala się proporcjonalnie; niepełny dzień zaokrągla się <b>w górę</b>.</li>
<li>Jeden dzień urlopu odpowiada 8 godzinom pracy (przy pełnym etacie).</li>
<li><b>Urlop na żądanie</b>: 4 dni w roku, w ramach urlopu wypoczynkowego, zgłoszone najpóźniej w dniu rozpoczęcia.</li>
<li>Urlop zaległy należy wykorzystać do <b>30 września</b> następnego roku.</li>
<li><b>Ekwiwalent</b> za niewykorzystany urlop przysługuje tylko przy rozwiązaniu lub wygaśnięciu stosunku pracy.</li>
</ul>
<h4>Inne nieobecności</h4>
<div class="tw"><table><tr><th>Uprawnienie</th><th>Wymiar</th><th>Wynagrodzenie</th></tr>
<tr><td>opieka nad dzieckiem do 14 lat</td><td>2 dni lub 16 godzin w roku</td><td>100%</td></tr>
<tr><td>zwolnienie z powodu siły wyższej</td><td>2 dni lub 16 godzin w roku</td><td>50%</td></tr>
<tr><td>urlop opiekuńczy</td><td>5 dni w roku</td><td>bezpłatny</td></tr>
<tr><td>ślub pracownika, urodzenie dziecka, zgon małżonka, dziecka, rodzica</td><td>2 dni</td><td>100%</td></tr>
<tr><td>ślub dziecka, zgon rodzeństwa, teściów, dziadków</td><td>1 dzień</td><td>100%</td></tr>
<tr><td>urlop ojcowski</td><td>2 tygodnie do 12. miesiąca życia dziecka</td><td>zasiłek 100%</td></tr></table></div>
<div class="tip">Okresy nauki się nie sumują: po technikum i studiach liczy się tylko 8 lat za studia. Gdy pracownik pracował w trakcie nauki, wlicza się okres korzystniejszy (nauki albo pracy).</div>` }
      ],
      pytania: [
        Q("Łączny okres zatrudnienia na podstawie umów na czas określony u tego samego pracodawcy nie może przekraczać", "33 miesięcy", "24 miesięcy", "36 miesięcy", "12 miesięcy", "Ani więcej niż 3 umów."),
        Q("Okres wypowiedzenia umowy na czas nieokreślony przy stażu 4 lat u pracodawcy wynosi", "3 miesiące", "1 miesiąc", "2 tygodnie", "6 miesięcy", "Co najmniej 3 lata stażu: 3 miesiące."),
        Q("Rozwiązanie umowy bez wypowiedzenia z winy pracownika nie może nastąpić po upływie", "1 miesiąca od uzyskania przez pracodawcę wiadomości o przyczynie", "7 dni od zdarzenia", "3 miesięcy od zdarzenia", "roku od zdarzenia", "Art. 52 § 2 KP."),
        Q("Minimalny nieprzerwany odpoczynek dobowy pracownika wynosi", "11 godzin", "8 godzin", "12 godzin", "35 godzin", "35 godzin to odpoczynek tygodniowy."),
        Q("Święto przypadające w sobotę", "obniża wymiar czasu pracy o 8 godzin", "nie wpływa na wymiar czasu pracy", "podwyższa wymiar o 8 godzin", "przenosi się automatycznie na niedzielę", "Pracodawca wyznacza za nie inny dzień wolny."),
        Q("Dodatek za pracę w godzinach nadliczbowych w niedzielę niebędącą dla pracownika dniem pracy wynosi", "100% wynagrodzenia", "50% wynagrodzenia", "20% stawki godzinowej", "150% wynagrodzenia", "Art. 151¹ § 1 KP."),
        Q("Pracownik po studiach wyższych, który przepracował 2 lata, ma prawo do urlopu w wymiarze", "26 dni", "20 dni", "24 dni", "21 dni", "8 lat za studia + 2 lata pracy = 10 lat stażu."),
        Q("Niewykorzystany urlop wypoczynkowy należy udzielić najpóźniej do", "30 września następnego roku", "31 marca następnego roku", "31 grudnia następnego roku", "końca bieżącego roku", "Art. 168 KP.")
      ]
    },
    {
      id: "wynagrodzenia", tytul: "Wynagrodzenia w praktyce", opis: "Policzysz wynagrodzenie za niepełny miesiąc, potrącenia komornicze i całkowity koszt pracodawcy.",
      lekcje: [
        { tytul: "Niepełny miesiąc i choroba", tresc: `<h4>Zasady pomniejszania pensji</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Sposób obliczenia</th></tr>
<tr><td>choroba (wynagrodzenie chorobowe lub zasiłek)</td><td>pensja ÷ <b>30</b> × liczba dni choroby (odejmuje się)</td></tr>
<tr><td>inna nieobecność nieusprawiedliwiona lub bezpłatna</td><td>pensja ÷ godziny do przepracowania w miesiącu × godziny nieobecności</td></tr>
<tr><td>zatrudnienie od połowy miesiąca</td><td>pensja ÷ godziny do przepracowania w miesiącu × godziny przepracowane</td></tr>
<tr><td>choroba trwająca cały miesiąc</td><td>brak wynagrodzenia zasadniczego, tylko świadczenie chorobowe</td></tr></table></div>
<h4>Przykład: 6 dni choroby</h4>
<pre>Pensja 4 500 zł, 6 dni choroby, podstawa = to samo wynagrodzenie

wynagrodzenie zasadnicze:
4 500 ÷ 30 = 150,00 zł × 6 dni = 900,00 zł
4 500 - 900 = 3 600,00 zł

wynagrodzenie chorobowe:
podstawa 4 500 - 13,71% = 3 883,05 zł
stawka dzienna 3 883,05 ÷ 30 = 129,44 zł
80% = 103,55 zł × 6 dni = 621,30 zł</pre>
<h4>Co z tego się oskładkowuje</h4>
<ul>
<li>Od <b>wynagrodzenia zasadniczego</b> (3 600 zł) nalicza się składki społeczne, zdrowotną i zaliczkę PIT.</li>
<li>Od <b>wynagrodzenia chorobowego</b> (621,30 zł) <b>nie nalicza się</b> składek społecznych, ale nalicza się składkę zdrowotną i zaliczkę PIT.</li>
</ul>
<pre>składki społeczne: 3 600 × 13,71% = 493,56 zł
podstawa zdrowotnej: 3 600 - 493,56 + 621,30 = 3 727,74 zł
składka zdrowotna 9% = 335,50 zł</pre>
<h4>Składniki stałe i zmienne</h4>
<p>Stały dodatek (np. funkcyjny) pomniejsza się za dni choroby tak samo jak pensję, jeśli jest wliczany do podstawy chorobowego. Premia, która przysługuje za czas choroby, nie wchodzi do podstawy zasiłku.</p>
<div class="tip">Kolejność w zadaniu: najpierw pomniejsz pensję o dni choroby, potem policz składki od części oskładkowanej, a dopiero potem dodaj świadczenie chorobowe do podstawy zdrowotnej i podatku.</div>` },
        { tytul: "Potrącenia z wynagrodzenia", tresc: `<h4>Kolejność potrąceń (art. 87 KP)</h4>
<p>Potrąca się z wynagrodzenia <b>netto</b> (po odjęciu składek, zaliczki PIT i wpłat do PPK), w kolejności:</p>
<div class="tw"><table><tr><th>Kolejność</th><th>Należność</th><th>Granica potrącenia</th><th>Kwota wolna</th></tr>
<tr><td>1</td><td>egzekucja świadczeń alimentacyjnych</td><td>do <b>3/5</b> wynagrodzenia</td><td>brak</td></tr>
<tr><td>2</td><td>egzekucja innych należności</td><td>do <b>1/2</b></td><td>minimalne wynagrodzenie netto</td></tr>
<tr><td>3</td><td>zaliczki pieniężne udzielone pracownikowi</td><td>do 1/2 (łącznie z pkt 2)</td><td>75% minimalnego wynagrodzenia netto</td></tr>
<tr><td>4</td><td>kary pieniężne z art. 108 KP</td><td>do 1/10 wynagrodzenia do wypłaty</td><td>90% minimalnego wynagrodzenia netto</td></tr></table></div>
<p>Łączne potrącenia z pozycji 1-3 nie mogą przekroczyć 3/5 wynagrodzenia, gdy egzekwuje się alimenty.</p>
<h4>Przykład</h4>
<pre>Wynagrodzenie netto: 4 000 zł
Zajęcie komornicze (dług z kredytu, nie alimenty)
Kwota wolna z treści zadania: 3 600 zł

limit 1/2: 4 000 ÷ 2 = 2 000 zł
po zachowaniu kwoty wolnej: 4 000 - 3 600 = 400 zł
potrącenie = mniejsza kwota = 400 zł
do wypłaty = 3 600 zł</pre>
<pre>To samo wynagrodzenie, ale alimenty:
limit 3/5: 4 000 × 3/5 = 2 400 zł, bez kwoty wolnej
potrącenie = 2 400 zł, do wypłaty 1 600 zł</pre>
<h4>Potrącenia dobrowolne</h4>
<ul>
<li>Wymagają <b>pisemnej zgody</b> pracownika (np. składka na ubezpieczenie grupowe, spłata pożyczki zakładowej).</li>
<li>Kwota wolna: minimalne wynagrodzenie netto przy potrąceniach na rzecz innych podmiotów, <b>80%</b> tej kwoty przy potrąceniach na rzecz pracodawcy.</li>
</ul>
<h4>Kary porządkowe</h4>
<p>Kara pieniężna za jedno przekroczenie nie może być wyższa od jednodniowego wynagrodzenia, a łącznie nie może przekroczyć 1/10 wynagrodzenia przypadającego do wypłaty. Wpływy z kar przeznacza się na poprawę warunków BHP.</p>
<div class="tip">Kwoty wolne zmniejsza się proporcjonalnie przy niepełnym etacie. Najpierw sprawdź limit ułamkowy, potem kwotę wolną i wybierz mniejsze potrącenie.</div>` },
        { tytul: "Koszt pracodawcy, PPK i terminy", tresc: `<h4>Całkowity koszt zatrudnienia</h4>
<pre>Wynagrodzenie brutto 6 000 zł
emerytalna 9,76%          585,60 zł
rentowa 6,50%             390,00 zł
wypadkowa 1,67%           100,20 zł
Fundusz Pracy 2,45%       147,00 zł
FGŚP 0,10%                  6,00 zł
razem pracodawca        1 228,80 zł
koszt pracodawcy = 6 000 + 1 228,80 = 7 228,80 zł
(+ PPK pracodawcy 1,5% = 90,00 zł, jeśli pracownik uczestniczy)</pre>
<p>Składek na Fundusz Pracy i FGŚP nie opłaca się m.in. za pracowników, którzy ukończyli 55 lat (kobiety) lub 60 lat (mężczyźni), oraz przez 36 miesięcy po powrocie z urlopu macierzyńskiego, rodzicielskiego lub wychowawczego.</p>
<h4>Pracownicze Plany Kapitałowe</h4>
<div class="tw"><table><tr><th>Wpłata</th><th>Pracownik</th><th>Pracodawca</th></tr>
<tr><td>podstawowa</td><td>2% (może obniżyć do 0,5% przy niskich dochodach)</td><td>1,5%</td></tr>
<tr><td>dodatkowa</td><td>do 2%</td><td>do 2,5%</td></tr></table></div>
<ul>
<li>Wpłata pracodawcy na PPK jest <b>przychodem pracownika</b>: zwiększa podstawę opodatkowania, ale nie podstawę składek ZUS.</li>
<li>Wpłatę pracownika potrąca się z wynagrodzenia netto.</li>
<li>Wpłaty przekazuje się do instytucji finansowej do 15. dnia następnego miesiąca.</li>
</ul>
<h4>Kalendarz płacowy</h4>
<div class="tw"><table><tr><th>Obowiązek</th><th>Termin</th></tr>
<tr><td>wypłata wynagrodzenia</td><td>najpóźniej do 10. dnia następnego miesiąca</td></tr>
<tr><td>składki ZUS (DRA, raporty RCA, RSA) dla firm</td><td>do 15. dnia następnego miesiąca</td></tr>
<tr><td>zaliczki PIT pobrane od pracowników</td><td>do 20. dnia następnego miesiąca</td></tr>
<tr><td>zgłoszenie do ubezpieczeń (ZUA) i wyrejestrowanie (ZWUA)</td><td>7 dni</td></tr>
<tr><td>PIT-11 do urzędu skarbowego</td><td>do końca stycznia</td></tr>
<tr><td>PIT-11 dla pracownika</td><td>do końca lutego</td></tr>
<tr><td>PIT-4R</td><td>do końca stycznia</td></tr></table></div>
<h4>Raporty ZUS</h4>
<ul>
<li><b>DRA</b>: deklaracja rozliczeniowa płatnika (suma składek).</li>
<li><b>RCA</b>: imienny raport o należnych składkach za każdego ubezpieczonego.</li>
<li><b>RSA</b>: imienny raport o przerwach w opłacaniu składek i wypłaconych świadczeniach (np. chorobowe).</li>
</ul>
<div class="tip">Stopa składki wypadkowej zależy od płatnika. W zadaniu zawsze używaj stopy podanej w treści, a nie wartości z pamięci.</div>` }
      ],
      pytania: [
        Q("Za każdy dzień choroby pensję miesięczną pomniejsza się o", "1/30 wynagrodzenia", "1/21 wynagrodzenia", "stawkę godzinową × 8", "1/12 wynagrodzenia", "Przy innych nieobecnościach stosuje się stawkę godzinową."),
        Q("Od wynagrodzenia chorobowego wypłacanego przez pracodawcę nalicza się", "składkę zdrowotną i zaliczkę PIT", "wszystkie składki społeczne", "tylko składkę chorobową", "składkę na Fundusz Pracy", "Od świadczeń chorobowych nie nalicza się składek społecznych."),
        Q("Jako pierwsze z wynagrodzenia potrąca się", "sumy egzekwowane na zaspokojenie świadczeń alimentacyjnych", "kary porządkowe", "zaliczki udzielone pracownikowi", "dobrowolne składki na ubezpieczenie", "Art. 87 § 1 KP."),
        Q("Przy egzekucji alimentów można potrącić do", "3/5 wynagrodzenia", "1/2 wynagrodzenia", "1/10 wynagrodzenia", "całego wynagrodzenia", "Bez kwoty wolnej od potrąceń."),
        Q("Kary pieniężne łącznie nie mogą przekroczyć", "1/10 wynagrodzenia przypadającego do wypłaty", "1/2 wynagrodzenia", "jednodniowego wynagrodzenia", "10% wynagrodzenia brutto rocznie", "Jedna kara: do jednodniowego wynagrodzenia."),
        Q("Wpłata podstawowa pracodawcy do PPK wynosi", "1,5% wynagrodzenia", "2% wynagrodzenia", "0,5% wynagrodzenia", "2,5% wynagrodzenia", "Pracownik: 2%, pracodawca: 1,5%."),
        Q("Wpłata pracodawcy na PPK dla pracownika", "jest jego przychodem podlegającym opodatkowaniu", "zmniejsza jego podatek", "podlega składkom ZUS pracownika", "jest wolna od podatku", "Dlatego zwiększa podstawę zaliczki PIT."),
        Q("Imienny raport miesięczny o należnych składkach za ubezpieczonego to", "ZUS RCA", "ZUS DRA", "ZUS ZWUA", "PIT-11", "DRA to deklaracja zbiorcza płatnika.")
      ]
    },
    {
      id: "zasilki", tytul: "Zasiłki z ubezpieczenia", opis: "Ustalisz prawo do zasiłków chorobowego, macierzyńskiego i opiekuńczego oraz ich wysokość.",
      lekcje: [
        { tytul: "Zasiłek chorobowy: podstawa i okres", tresc: `<h4>Kto płaci</h4>
<ul>
<li>Przez pierwsze <b>33 dni</b> niezdolności w roku kalendarzowym (14 dni u pracownika po 50. roku życia) pracodawca płaci <b>wynagrodzenie chorobowe</b>, potem przysługuje <b>zasiłek chorobowy</b>.</li>
<li>Zasiłek wypłaca pracodawca, jeśli zgłasza do ubezpieczenia chorobowego <b>więcej niż 20</b> osób; mniejsi płatnicy przekazują dokumenty do ZUS, który wypłaca zasiłek sam.</li>
<li>Zwolnienie lekarskie wystawiane jest elektronicznie (<b>e-ZLA</b>) i trafia do pracodawcy przez PUE ZUS (eZUS).</li>
</ul>
<h4>Okres wyczekiwania</h4>
<p>Prawo do zasiłku powstaje po <b>30 dniach</b> nieprzerwanego ubezpieczenia chorobowego (obowiązkowego) lub po 90 dniach (dobrowolnego). Bez okresu wyczekiwania zasiłek przysługuje m.in. absolwentom, którzy podjęli pracę w ciągu 90 dni od ukończenia szkoły, osobom z co najmniej 10-letnim stażem ubezpieczenia obowiązkowego oraz gdy niezdolność wynika z wypadku w drodze do pracy lub z pracy.</p>
<h4>Podstawa wymiaru</h4>
<div class="tw"><table><tr><th>Staż ubezpieczenia</th><th>Podstawa</th></tr>
<tr><td>12 miesięcy i więcej</td><td>przeciętne wynagrodzenie z 12 miesięcy przed miesiącem niezdolności</td></tr>
<tr><td>krócej niż 12 miesięcy</td><td>przeciętne wynagrodzenie z pełnych miesięcy ubezpieczenia</td></tr>
<tr><td>brak pełnego miesiąca</td><td>wynagrodzenie, które pracownik osiągnąłby za pełny miesiąc</td></tr></table></div>
<p>Wynagrodzenia z każdego miesiąca pomniejsza się o <b>13,71%</b> (składki społeczne pracownika). Wynagrodzenie z miesiąca, w którym pracownik przepracował mniej niż połowę obowiązującego czasu, pomija się lub uzupełnia według przepisów.</p>
<h4>Wysokość</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Stawka</th></tr>
<tr><td>zwykła choroba</td><td>80%</td></tr>
<tr><td>pobyt w szpitalu (zasiłek z ZUS)</td><td>70%</td></tr>
<tr><td>ciąża, wypadek w drodze do lub z pracy, badania dawcy narządów</td><td>100%</td></tr>
<tr><td>wypadek przy pracy, choroba zawodowa</td><td>100% (z ubezpieczenia wypadkowego, od pierwszego dnia z ZUS)</td></tr></table></div>
<h4>Okres zasiłkowy</h4>
<p>Maksymalnie <b>182 dni</b>, a w przypadku gruźlicy lub niezdolności w czasie ciąży <b>270 dni</b>. Do jednego okresu wlicza się kolejne zwolnienia, jeśli przerwa między nimi nie przekroczyła <b>60 dni</b> (wyjątek: niezdolność w czasie ciąży).</p>
<pre>Pracownik zatrudniony od 1 marca, chory od 10 sierpnia
pełne miesiące: marzec-lipiec (5 miesięcy)
podstawa = średnia z 5 miesięcy po odjęciu 13,71%</pre>
<div class="tip">Wykorzystywanie zwolnienia niezgodnie z celem (np. praca zarobkowa) powoduje utratę prawa do zasiłku za cały okres tego zwolnienia.</div>` },
        { tytul: "Świadczenia związane z rodzicielstwem", tresc: `<h4>Urlopy po urodzeniu dziecka</h4>
<div class="tw"><table><tr><th>Urlop</th><th>Wymiar (jedno dziecko)</th><th>Uwagi</th></tr>
<tr><td>macierzyński</td><td><b>20 tygodni</b></td><td>przy porodzie mnogim od 31 do 37 tygodni; co najmniej 14 tygodni wykorzystuje matka</td></tr>
<tr><td>rodzicielski</td><td><b>41 tygodni</b> (43 przy porodzie mnogim)</td><td>po <b>9 tygodni</b> dla każdego z rodziców nie można przenieść na drugiego</td></tr>
<tr><td>ojcowski</td><td>2 tygodnie</td><td>do ukończenia przez dziecko 12 miesięcy</td></tr>
<tr><td>wychowawczy</td><td>do 36 miesięcy, do końca roku, w którym dziecko kończy 6 lat</td><td>bezpłatny; wymaga 6 miesięcy stażu; po 1 miesiącu wyłącznie dla każdego z rodziców</td></tr></table></div>
<h4>Wysokość zasiłku macierzyńskiego</h4>
<ul>
<li>za okres urlopu macierzyńskiego: <b>100%</b> podstawy;</li>
<li>za okres urlopu rodzicielskiego: <b>70%</b> podstawy;</li>
<li>jeśli matka złoży wniosek o cały urlop macierzyński i rodzicielski nie później niż <b>21 dni po porodzie</b>, otrzymuje <b>81,5%</b> podstawy za cały okres;</li>
<li>za urlop ojcowski: 100%.</li>
</ul>
<p>Podstawę ustala się tak jak przy zasiłku chorobowym. Zasiłek macierzyński <b>nie wymaga okresu wyczekiwania</b> i od pierwszego dnia wypłaca go ZUS lub płatnik zgłaszający ponad 20 ubezpieczonych.</p>
<pre>Podstawa 5 000 zł, wniosek o pełny urlop w ciągu 21 dni
miesięczny zasiłek = 5 000 × 81,5% = 4 075 zł

Bez wniosku w terminie:
urlop macierzyński: 5 000 × 100% = 5 000 zł / mies.
urlop rodzicielski: 5 000 × 70% = 3 500 zł / mies.</pre>
<h4>Ochrona i dokumenty</h4>
<ul>
<li>Pracodawca nie może wypowiedzieć ani rozwiązać umowy w okresie ciąży i urlopu macierzyńskiego (poza upadłością lub likwidacją pracodawcy oraz winą pracownicy przy zgodzie związku).</li>
<li>Wniosek o urlop rodzicielski składa się co najmniej 21 dni przed jego rozpoczęciem.</li>
<li>Do akt osobowych odkłada się wnioski urlopowe i odpis aktu urodzenia dziecka.</li>
</ul>
<div class="tip">Pułapka: zasiłek macierzyński to nie wynagrodzenie. Nie nalicza się od niego składek społecznych, ale pobiera się zaliczkę PIT. Składkę emerytalną i rentową za ten okres finansuje budżet państwa.</div>` },
        { tytul: "Zasiłek opiekuńczy i świadczenie rehabilitacyjne", tresc: `<h4>Zasiłek opiekuńczy</h4>
<p>Przysługuje osobie ubezpieczonej, która zwolniła się od pracy, aby osobiście opiekować się dzieckiem lub członkiem rodziny. Wynosi <b>80%</b> podstawy.</p>
<div class="tw"><table><tr><th>Powód</th><th>Wiek dziecka</th><th>Limit w roku</th></tr>
<tr><td>nieprzewidziane zamknięcie żłobka, przedszkola, szkoły; choroba niani; poród lub choroba małżonka, który stale opiekuje się dzieckiem</td><td>zdrowe dziecko do <b>8 lat</b></td><td rowspan="2"><b>60 dni</b> łącznie</td></tr>
<tr><td>choroba dziecka</td><td>do <b>14 lat</b></td></tr>
<tr><td>chory członek rodziny (małżonek, rodzic, teść, dziadek, wnuk, rodzeństwo, dziecko powyżej 14 lat)</td><td>-</td><td>14 dni (w ramach 60)</td></tr></table></div>
<ul>
<li>Limit dotyczy ubezpieczonego, niezależnie od liczby dzieci i osób, którymi się opiekuje.</li>
<li>Zasiłek nie przysługuje, jeśli inny domownik może zapewnić opiekę (nie dotyczy chorego dziecka do 2 lat).</li>
<li>Nie ma okresu wyczekiwania; od pierwszego dnia wypłaca go płatnik lub ZUS.</li>
</ul>
<pre>Podstawa 4 200 zł, 5 dni opieki nad chorym dzieckiem
stawka dzienna = 4 200 ÷ 30 = 140,00 zł
80% = 112,00 zł × 5 = 560,00 zł</pre>
<h4>Świadczenie rehabilitacyjne</h4>
<ul>
<li>Przysługuje po wyczerpaniu zasiłku chorobowego, jeśli dalsze leczenie lub rehabilitacja rokują odzyskanie zdolności do pracy.</li>
<li>Okres: do <b>12 miesięcy</b>.</li>
<li>Wysokość: <b>90%</b> podstawy przez pierwsze 3 miesiące, potem <b>75%</b>; 100% w czasie ciąży lub po wypadku przy pracy.</li>
<li>Decyzję wydaje ZUS na podstawie orzeczenia lekarza orzecznika.</li>
</ul>
<h4>Dokumenty w kadrach</h4>
<div class="tw"><table><tr><th>Formularz</th><th>Zastosowanie</th></tr>
<tr><td>Z-3</td><td>zaświadczenie płatnika do zasiłku (gdy wypłaca ZUS)</td></tr>
<tr><td>Z-15A / Z-15B</td><td>wniosek o zasiłek opiekuńczy nad dzieckiem / innym członkiem rodziny</td></tr>
<tr><td>ZUS RSA</td><td>raport o wypłaconych świadczeniach i przerwach w opłacaniu składek</td></tr></table></div>
<div class="tip">60 dni opiekuńczego to limit roczny wspólny dla wszystkich dzieci. Dwoje dzieci nie daje 120 dni.</div>` }
      ],
      pytania: [
        Q("Pracownik w wieku 40 lat choruje 40 dni w roku. Pracodawca wypłaca mu wynagrodzenie chorobowe za", "33 dni, a od 34. dnia przysługuje zasiłek chorobowy", "14 dni", "40 dni", "30 dni", "Pracownik po 50. roku życia: 14 dni."),
        Q("Zasiłek chorobowy za okres pobytu w szpitalu wynosi", "70% podstawy", "80% podstawy", "100% podstawy", "60% podstawy", "Wyjątki: ciąża, wypadek w drodze do lub z pracy (100%)."),
        Q("Okres zasiłkowy przy zwykłej chorobie wynosi maksymalnie", "182 dni", "270 dni", "33 dni", "12 miesięcy", "270 dni przy gruźlicy i ciąży."),
        Q("Okres wyczekiwania na zasiłek chorobowy dla osoby ubezpieczonej obowiązkowo wynosi", "30 dni", "90 dni", "14 dni", "nie ma okresu wyczekiwania", "Dla ubezpieczonych dobrowolnie 90 dni."),
        Q("Urlop rodzicielski przy urodzeniu jednego dziecka wynosi", "41 tygodni", "20 tygodni", "32 tygodnie", "52 tygodnie", "Po 9 tygodni dla każdego rodzica jest nieprzenoszalne."),
        Q("Matka, która w ciągu 21 dni po porodzie złożyła wniosek o pełny urlop macierzyński i rodzicielski, otrzymuje zasiłek w wysokości", "81,5% podstawy za cały okres", "100% za cały okres", "70% za cały okres", "80% za cały okres", "Bez wniosku: 100% za macierzyński, 70% za rodzicielski."),
        Q("Łączny roczny limit zasiłku opiekuńczego wynosi", "60 dni niezależnie od liczby dzieci", "60 dni na każde dziecko", "14 dni", "30 dni", "W tym 14 dni na innych członków rodziny."),
        Q("Świadczenie rehabilitacyjne przez pierwsze 3 miesiące wynosi", "90% podstawy", "75% podstawy", "80% podstawy", "100% podstawy", "Potem 75%; maksymalnie 12 miesięcy.")
      ]
    },
    {
      id: "finanse", tytul: "Podatki i finanse firmy", opis: "Wybierzesz formę opodatkowania, policzysz koszt kredytu i ocenisz kondycję firmy wskaźnikami.",
      lekcje: [
        { tytul: "Formy opodatkowania przedsiębiorcy", tresc: `<h4>Podatek dochodowy osoby prowadzącej firmę</h4>
<div class="tw"><table><tr><th>Forma</th><th>Stawka</th><th>Podstawa</th><th>Składka zdrowotna</th></tr>
<tr><td>skala podatkowa</td><td>12% do 120 000 zł, nadwyżka 32%; kwota wolna 30 000 zł</td><td>dochód (przychód - koszty)</td><td>9% dochodu</td></tr>
<tr><td>podatek liniowy</td><td>19%</td><td>dochód</td><td>4,9% dochodu</td></tr>
<tr><td>ryczałt od przychodów ewidencjonowanych</td><td>od 2% do 17% zależnie od działalności</td><td>przychód (bez kosztów)</td><td>kwota zależna od progu przychodu (do 60 tys., do 300 tys., powyżej)</td></tr></table></div>
<h4>Przykładowe stawki ryczałtu</h4>
<ul>
<li><b>3%</b>: handel, działalność gastronomiczna (poza sprzedażą napojów powyżej 1,5% alkoholu);</li>
<li><b>5,5%</b>: działalność wytwórcza, roboty budowlane;</li>
<li><b>8,5%</b>: większość usług, najem do 100 000 zł (nadwyżka 12,5%);</li>
<li><b>12%</b>: usługi informatyczne (np. programowanie);</li>
<li><b>14%, 15%, 17%</b>: m.in. usługi medyczne, architektoniczne, doradcze, wolne zawody.</li>
</ul>
<p>Ryczałt może wybrać podatnik, którego przychody w poprzednim roku nie przekroczyły 2 mln euro. Formę opodatkowania zmienia się do <b>20. dnia miesiąca następującego</b> po miesiącu osiągnięcia pierwszego przychodu w roku (lub do końca roku, gdy pierwszy przychód jest w grudniu).</p>
<h4>Spółki: podatek CIT</h4>
<ul>
<li>Stawka podstawowa <b>19%</b>; <b>9%</b> dla małych podatników (przychody do 2 mln euro) i firm w pierwszym roku działalności.</li>
<li>Estoński CIT: podatek płacony dopiero przy wypłacie zysku.</li>
<li>Zeznanie CIT-8 składa się do końca 3. miesiąca roku następnego.</li>
</ul>
<h4>VAT w małej firmie</h4>
<ul>
<li><b>Zwolnienie podmiotowe</b>: gdy sprzedaż opodatkowana w poprzednim roku nie przekroczyła <b>200 000 zł</b> (proporcjonalnie w roku rozpoczęcia działalności). Nie dotyczy m.in. niektórych usług prawniczych, doradczych i sprzedaży wybranych towarów.</li>
<li>Rejestracja jako podatnik VAT czynny: zgłoszenie <b>VAT-R</b>.</li>
<li>Stawki: 23%, 8%, 5%, 0% oraz zwolnienie „zw”.</li>
<li>JPK_V7M (miesięcznie) lub JPK_V7K (kwartalnie, dla małych podatników) do 25. dnia miesiąca po okresie.</li>
</ul>
<pre>Usługi: przychód 200 000 zł, koszty 50 000 zł
liniowy:      (200 000 - 50 000) × 19% = 28 500 zł
ryczałt 8,5%: 200 000 × 8,5%           = 17 000 zł
(w uproszczeniu, bez składek ZUS i zdrowotnej)</pre>
<div class="tip">Przy ryczałcie nie odlicza się kosztów. Ryczałt opłaca się firmom z niskimi kosztami, liniowy firmom z wysokim dochodem i kosztami.</div>` },
        { tytul: "Kredyty, lokaty i leasing w liczbach", tresc: `<h4>Kapitalizacja odsetek</h4>
<pre>odsetki proste:   O = K × r × t
kapitalizacja:    Kn = K × (1 + r ÷ m)^(m × n)
   m - liczba kapitalizacji w roku, n - liczba lat

10 000 zł, 6% rocznie, kapitalizacja kwartalna, 1 rok:
10 000 × (1 + 0,06 ÷ 4)^4 = 10 000 × 1,015^4 = 10 613,64 zł
efektywna stopa roczna = 6,14%
podatek od zysków kapitałowych 19% od 613,64 zł = 116,59 zł</pre>
<h4>Raty kredytu</h4>
<p>Kredyt 12 000 zł, 12 miesięcy, oprocentowanie 12% rocznie (1% miesięcznie).</p>
<div class="tw"><table><tr><th></th><th>Raty malejące</th><th>Raty równe (annuitetowe)</th></tr>
<tr><td>część kapitałowa</td><td>stała: 12 000 ÷ 12 = 1 000 zł</td><td>rośnie z każdą ratą</td></tr>
<tr><td>pierwsza rata</td><td>1 000 + 12 000 × 1% = 1 120 zł</td><td>1 066,19 zł</td></tr>
<tr><td>ostatnia rata</td><td>1 000 + 1 000 × 1% = 1 010 zł</td><td>1 066,19 zł</td></tr>
<tr><td>suma odsetek</td><td>780 zł</td><td>794,23 zł</td></tr></table></div>
<p>Raty malejące są na początku wyższe, ale łączny koszt odsetek jest <b>niższy</b>. Rzeczywisty koszt kredytu konsumenckiego pokazuje <b>RRSO</b>, które obejmuje odsetki, prowizje i inne opłaty.</p>
<h4>Inne źródła finansowania</h4>
<ul>
<li><b>Kredyt kupiecki</b>: odroczony termin płatności u dostawcy; jego kosztem jest utracone skonto.</li>
<li><b>Faktoring</b>: sprzedaż należności faktorowi. Pełny (bez regresu): ryzyko niewypłacalności dłużnika przejmuje faktor; niepełny (z regresem): wraca do firmy.</li>
<li><b>Leasing</b>: finansowanie używania środka trwałego ratami; operacyjny lub finansowy.</li>
<li><b>Dyskonto weksla</b>: bank wypłaca kwotę weksla pomniejszoną o odsetki za czas do terminu płatności.</li>
</ul>
<pre>Dyskonto: weksel 20 000 zł, 90 dni do terminu, stopa 8%
dyskonto = 20 000 × 8% × 90 ÷ 360 = 400 zł
wypłata = 19 600 zł (bank przyjmuje rok 360 dni, gdy tak stanowi umowa)</pre>
<h4>Koszt utraconego skonta</h4>
<pre>warunki 2/10 netto 30: rezygnując ze skonta, firma „pożycza”
98% kwoty na 20 dni za 2%
roczny koszt ≈ 2 ÷ 98 × 365 ÷ 20 ≈ 37,2%</pre>
<div class="tip">Jeśli koszt utraconego skonta jest wyższy od oprocentowania kredytu w rachunku bieżącym, opłaca się wziąć kredyt i zapłacić w terminie skonta.</div>` },
        { tytul: "Analiza finansowa: dynamika, struktura, cykle", tresc: `<h4>Analiza pozioma i pionowa</h4>
<pre>wskaźnik dynamiki = wartość w okresie badanym ÷ wartość w okresie bazowym × 100%
tempo zmian       = wskaźnik dynamiki - 100%
wskaźnik struktury = pozycja ÷ suma (np. suma bilansowa) × 100%

Przychody 2025: 400 000 zł, 2026: 460 000 zł
dynamika = 460 000 ÷ 400 000 × 100% = 115% (wzrost o 15%)</pre>
<h4>Cykle rotacji (w dniach)</h4>
<div class="tw"><table><tr><th>Cykl</th><th>Wzór</th></tr>
<tr><td>zapasów</td><td>średni stan zapasów ÷ koszt własny sprzedaży (lub przychody) × 365</td></tr>
<tr><td>należności</td><td>średni stan należności ÷ przychody ze sprzedaży × 365</td></tr>
<tr><td>zobowiązań</td><td>średni stan zobowiązań z tytułu dostaw ÷ koszt własny sprzedaży × 365</td></tr>
<tr><td>konwersji gotówki</td><td>cykl zapasów + cykl należności - cykl zobowiązań</td></tr></table></div>
<pre>zapasy 40 dni, należności 30 dni, zobowiązania 25 dni
cykl konwersji gotówki = 40 + 30 - 25 = 45 dni
firma musi sfinansować 45 dni działalności z własnych środków lub kredytu</pre>
<h4>Płynność i zadłużenie</h4>
<ul>
<li><b>Płynność gotówkowa</b> = środki pieniężne ÷ zobowiązania krótkoterminowe (zalecane ok. 0,1-0,2).</li>
<li><b>Kapitał obrotowy netto</b> = aktywa obrotowe - zobowiązania krótkoterminowe; wartość dodatnia oznacza, że część majątku obrotowego jest finansowana kapitałem stałym.</li>
<li><b>Złota reguła bilansowa</b>: kapitał własny ≥ aktywa trwałe. <b>Srebrna reguła</b>: kapitał własny + zobowiązania długoterminowe ≥ aktywa trwałe.</li>
<li><b>Wskaźnik zadłużenia kapitału własnego</b> = zobowiązania ogółem ÷ kapitał własny.</li>
</ul>
<h4>Model Du Ponta</h4>
<pre>ROE = ROS × rotacja aktywów × mnożnik kapitałowy
    = (zysk netto ÷ przychody) × (przychody ÷ aktywa) × (aktywa ÷ kapitał własny)
np. 5% × 2,0 × 2,0 = 20%</pre>
<p>Model pokazuje, czy rentowność kapitału wynika z marży na sprzedaży, ze sprawnego wykorzystania majątku, czy z wysokiego zadłużenia (dźwignia finansowa).</p>
<h4>Interpretacja</h4>
<ul>
<li>Skrócenie cyklu należności: klienci płacą szybciej, poprawia się płynność.</li>
<li>Wydłużenie cyklu zapasów: zapasy zalegają, rosną koszty magazynowania.</li>
<li>Bardzo wysoka płynność bieżąca (np. powyżej 3) może oznaczać nadmiar niewykorzystanych środków.</li>
</ul>
<div class="tip">Dynamika 85% to spadek o 15%, a nie wzrost. Tempo zmian zawsze liczysz jako dynamika minus 100%.</div>` }
      ],
      pytania: [
        Q("Stawka podatku liniowego dla przedsiębiorcy wynosi", "19%", "12%", "32%", "9%", "Składka zdrowotna przy liniowym: 4,9% dochodu."),
        Q("Podatnik opłacający ryczałt od przychodów ewidencjonowanych", "nie odlicza kosztów uzyskania przychodu", "odlicza wszystkie koszty", "płaci podatek od dochodu", "nie prowadzi żadnej ewidencji", "Podstawą jest przychód."),
        Q("Zwolnienie podmiotowe z VAT przysługuje, gdy wartość sprzedaży w poprzednim roku nie przekroczyła", "200 000 zł", "100 000 zł", "2 mln euro", "50 000 zł", "Art. 113 ustawy o VAT."),
        Q("Stawka CIT dla małego podatnika wynosi", "9%", "19%", "12%", "5,5%", "Mały podatnik: przychody do 2 mln euro."),
        Q("Przy kredycie spłacanym w ratach malejących", "część kapitałowa raty jest stała", "wszystkie raty są równe", "odsetki rosną z każdą ratą", "łączny koszt odsetek jest wyższy niż przy ratach równych", "Raty malejące mają niższy łączny koszt odsetek."),
        Q("Faktoring pełny oznacza, że ryzyko niewypłacalności dłużnika ponosi", "faktor", "firma sprzedająca należność", "bank dłużnika", "urząd skarbowy", "Przy faktoringu niepełnym ryzyko wraca do firmy."),
        Q("Cykl zapasów 50 dni, cykl należności 35 dni, cykl zobowiązań 30 dni. Cykl konwersji gotówki wynosi", "55 dni", "115 dni", "45 dni", "15 dni", "50 + 35 - 30 = 55 dni."),
        Q("Złota reguła bilansowa mówi, że", "kapitał własny powinien pokrywać aktywa trwałe", "zobowiązania powinny być równe należnościom", "aktywa obrotowe muszą być większe od kapitału własnego", "zysk netto musi pokrywać amortyzację", "Srebrna reguła uwzględnia też kapitał długoterminowy.")
      ]
    }
  ]);

  pod("EKA.07", [
    {
      id: "ksiegowanie", tytul: "Księgowanie operacji", opis: "Zadekretujesz typowe operacje: kasowe, bankowe, rozrachunkowe, materiałowe i na środkach trwałych.",
      lekcje: [
        { tytul: "Środki pieniężne i rozrachunki", tresc: `<h4>Dowody i konta</h4>
<div class="tw"><table><tr><th>Dowód</th><th>Konto</th><th>Co dokumentuje</th></tr>
<tr><td>KP (kasa przyjmie), KW (kasa wypłaci), RK (raport kasowy)</td><td>100 Kasa</td><td>gotówka w kasie</td></tr>
<tr><td>WB (wyciąg bankowy)</td><td>130 Rachunek bankowy</td><td>wpływy i wypływy z rachunku</td></tr>
<tr><td>faktury sprzedaży</td><td>200 Rozrachunki z odbiorcami</td><td>należności od klientów</td></tr>
<tr><td>faktury zakupu</td><td>201 Rozrachunki z dostawcami</td><td>zobowiązania wobec dostawców</td></tr>
<tr><td>rozliczenie zaliczki</td><td>234 Pozostałe rozrachunki z pracownikami</td><td>zaliczki, pożyczki, niedobory pracowników</td></tr></table></div>
<h4>Przykładowe księgowania</h4>
<pre>Wpłata gotówki do kasy przez odbiorcę        Wn 100 / Ma 200
Wpływ należności na rachunek                 Wn 130 / Ma 200
Wpłata gotówki z kasy na rachunek            Wn 130 / Ma 100
Wpływ kredytu bankowego na rachunek          Wn 130 / Ma 134
Spłata raty kredytu                          Wn 134 / Ma 130
Odsetki od kredytu pobrane przez bank        Wn 751 / Ma 130
Odsetki od środków na rachunku               Wn 130 / Ma 750
Zapłata dostawcy przelewem                   Wn 201 / Ma 130</pre>
<h4>Zaliczka dla pracownika</h4>
<pre>1. Wypłata zaliczki 500 zł z kasy            Wn 234 / Ma 100   500
2. Rozliczenie: faktura za materiały biurowe
   netto 300, VAT 69 (brutto 369)            Wn 401 300, Wn 221 69 / Ma 234 369
3. Zwrot niewykorzystanej kwoty do kasy      Wn 100 / Ma 234   131
Saldo konta 234 = 0</pre>
<h4>Rozliczenie VAT</h4>
<pre>VAT naliczony (zakupy)  → konto 221 (strona Wn)
VAT należny (sprzedaż)  → konto 222 (strona Ma)
Przeksięgowanie naliczonego na koniec miesiąca: Wn 222 / Ma 221
Saldo Ma konta 222 = zobowiązanie wobec US
Zapłata VAT: Wn 222 / Ma 130</pre>
<h4>Salda kont rozrachunkowych</h4>
<p>Konta rozrachunkowe mogą mieć <b>saldo dwustronne</b>: na koncie 200 saldo Wn oznacza należności od jednych odbiorców, a saldo Ma nadpłaty innych. W bilansie <b>nie kompensuje się</b> ich: należności idą do aktywów, nadpłaty do zobowiązań. Dlatego prowadzi się konta analityczne dla każdego kontrahenta.</p>
<div class="tip">Wyciąg bankowy księguje się z punktu widzenia firmy: „uznanie” rachunku w banku oznacza wpływ, czyli zapis po stronie Wn konta 130.</div>` },
        { tytul: "Materiały, towary i sprzedaż", tresc: `<h4>Zakup materiałów (ewidencja w cenach zakupu)</h4>
<pre>1. Faktura od dostawcy: netto 10 000, VAT 2 300
   Wn 300 10 000, Wn 221 2 300 / Ma 201 12 300
2. Przyjęcie materiałów do magazynu (PZ)
   Wn 310 / Ma 300                          10 000
3. Wydanie materiałów do produkcji (RW)
   Wn 401 / Ma 310                           6 000</pre>
<p>Saldo Wn konta 300 to <b>materiały w drodze</b> (faktura jest, materiałów nie ma), saldo Ma to <b>dostawy niefakturowane</b>.</p>
<h4>Ewidencja w cenach ewidencyjnych</h4>
<pre>Cena zakupu 10 500 zł, cena ewidencyjna 10 000 zł
Faktura:  Wn 300 10 500, Wn 221 2 415 / Ma 201 12 915
PZ:       Wn 310 10 000 (ewidencyjna)
          Wn 340    500 (odchylenie)  / Ma 300 10 500</pre>
<p>Odchylenie po stronie Wn konta 340 oznacza, że cena zakupu była <b>wyższa</b> od ewidencyjnej. Przy rozchodzie odchylenia przypadające na zużyte materiały przenosi się na koszty proporcjonalnie.</p>
<h4>Sprzedaż towarów w hurcie</h4>
<pre>1. Faktura sprzedaży: netto 8 000, VAT 1 840
   Wn 200 9 840 / Ma 730 8 000, Ma 222 1 840
2. Wydanie towarów (WZ) w cenie zakupu 6 000
   Wn 731 / Ma 330                           6 000
Wynik na sprzedaży = 8 000 - 6 000 = 2 000 zł</pre>
<h4>Zwrot towaru i korekta</h4>
<ul>
<li><b>Storno czerwone</b> (ujemne): powtórzenie błędnego zapisu na tych samych stronach ze znakiem minus; obroty nie są sztucznie zawyżone.</li>
<li><b>Storno czarne</b> (zwykłe): zapis odwrotny, po przeciwnych stronach; zawyża obroty.</li>
</ul>
<pre>Korekta faktury sprzedaży (zwrot towaru netto 800 zł):
Wn 200 -984 / Ma 730 -800, Ma 222 -184 (storno czerwone)
Przyjęcie zwróconego towaru (cena zakupu 600):
Wn 731 -600 / Ma 330 -600 (storno czerwone)</pre>
<h4>Sprzedaż produktów</h4>
<pre>Przyjęcie wyrobów z produkcji (PW): Wn 600 / Ma 580 (lub 490, wg przyjętego wariantu)
Sprzedaż wyrobów: Wn 200 / Ma 700, Ma 222
Koszt sprzedanych wyrobów: Wn 711 / Ma 600</pre>
<div class="tip">Konto 730 zawsze w cenie sprzedaży netto, konto 731 w cenie zakupu (ewidencyjnej). Pomylenie tych kont to najczęstszy błąd dekretacji.</div>` },
        { tytul: "Środki trwałe i zamknięcie roku", tresc: `<h4>Środki trwałe</h4>
<pre>Zakup maszyny wymagającej montażu:
Faktura dostawcy netto 40 000, VAT 9 200    Wn 080 40 000, Wn 221 9 200 / Ma 201 49 200
Usługa montażu netto 2 000, VAT 460          Wn 080 2 000, Wn 221 460 / Ma 201 2 460
Przekazanie do używania (OT)                 Wn 010 / Ma 080   42 000
Miesięczna amortyzacja                       Wn 400 / Ma 070</pre>
<p>Konto <b>080</b> (Środki trwałe w budowie) gromadzi wszystkie koszty do dnia przekazania środka do używania. Konto <b>070</b> to konto korygujące: jego saldo Ma (umorzenie) pomniejsza w bilansie wartość z konta 010.</p>
<h4>Sprzedaż i likwidacja</h4>
<pre>Sprzedaż środka (cena netto 15 000, VAT 3 450):
Wn 200 18 450 / Ma 760 15 000, Ma 222 3 450
Wyksięgowanie (wartość pocz. 50 000, umorzenie 40 000):
Wn 070 40 000, Wn 761 10 000 / Ma 010 50 000
Wynik na sprzedaży = 15 000 - 10 000 = 5 000 zł

Likwidacja środka niezamortyzowanego (bez sprzedaży):
Wn 070 (umorzenie), Wn 761 (wartość netto) / Ma 010 (wartość początkowa)</pre>
<h4>Zamknięcie roku: konto 860</h4>
<ol>
<li>Przeniesienie przychodów: Wn 700, 730, 750, 760 / Ma 860.</li>
<li>Przeniesienie kosztów: Wn 860 / Ma 711, 731, 751, 761 oraz koszty działalności (w wariancie porównawczym konto 490 i zmiana stanu produktów, w kalkulacyjnym koszty sprzedanych produktów, sprzedaży i zarządu).</li>
<li>Podatek dochodowy: Wn 870 / Ma 220, a następnie Wn 860 / Ma 870.</li>
<li>Saldo Ma konta 860 = <b>zysk netto</b>, saldo Wn = <b>strata netto</b>.</li>
</ol>
<pre>Przychody razem       320 000   (Ma 860)
Koszty razem          280 000   (Wn 860)
Zysk brutto            40 000
Podatek 9% (mały podatnik, w uproszczeniu)  3 600
Zysk netto             36 400</pre>
<h4>Podział wyniku</h4>
<p>W następnym roku, po zatwierdzeniu sprawozdania, zysk przenosi się na konto <b>820</b> (Rozliczenie wyniku finansowego) i dzieli zgodnie z uchwałą: na kapitał zapasowy, dywidendy (rozrachunki ze wspólnikami) lub pokrycie strat z lat ubiegłych.</p>
<div class="tip">Kontrola po zamknięciu: konta wynikowe (zespół 4, 5, 7) nie mają sald, a saldo konta 860 przenosi się do bilansu jako wynik finansowy netto w pasywach.</div>` }
      ],
      pytania: [
        Q("Wpływ na rachunek bankowy należności od odbiorcy księguje się", "Wn 130 / Ma 200", "Wn 200 / Ma 130", "Wn 130 / Ma 201", "Wn 100 / Ma 130", "Rośnie rachunek bankowy, maleje należność."),
        Q("Odsetki od kredytu bankowego pobrane z rachunku księguje się na koncie", "751 Koszty finansowe", "750 Przychody finansowe", "761 Pozostałe koszty operacyjne", "402 Usługi obce", "Odsetki od lokat to przychody finansowe 750."),
        Q("Saldo Wn konta 300 Rozliczenie zakupu oznacza", "materiały w drodze", "dostawy niefakturowane", "zobowiązania wobec dostawców", "zużycie materiałów", "Faktura wpłynęła, materiały jeszcze nie."),
        Q("Wydanie sprzedanych towarów w cenie zakupu księguje się", "Wn 731 / Ma 330", "Wn 330 / Ma 731", "Wn 730 / Ma 330", "Wn 200 / Ma 730", "Konto 731 to wartość sprzedanych towarów w cenach zakupu."),
        Q("Storno czerwone polega na", "powtórzeniu błędnego zapisu ze znakiem minus na tych samych stronach kont", "zapisie odwrotnym po przeciwnych stronach", "usunięciu zapisu korektorem", "przeksięgowaniu na konto 860", "Nie zawyża obrotów kont."),
        Q("Przekazanie do używania maszyny, której koszty zebrano na koncie 080, księguje się", "Wn 010 / Ma 080", "Wn 080 / Ma 010", "Wn 400 / Ma 070", "Wn 010 / Ma 201", "Dokumentem jest OT."),
        Q("Wartość netto sprzedanego środka trwałego ujmuje się na koncie", "761 Pozostałe koszty operacyjne", "760 Pozostałe przychody operacyjne", "731 Wartość sprzedanych towarów", "400 Amortyzacja", "Przychód ze sprzedaży: konto 760."),
        Q("Saldo Ma konta 860 Wynik finansowy na koniec roku oznacza", "zysk netto", "stratę netto", "zobowiązanie podatkowe", "kapitał zakładowy", "Saldo Wn oznacza stratę.")
      ]
    },
    {
      id: "wycena", tytul: "Wycena i rozliczenia okresowe", opis: "Wycenisz składniki bilansu na dzień bilansowy, rozliczysz inwentaryzację i rozliczenia międzyokresowe.",
      lekcje: [
        { tytul: "Wycena bilansowa aktywów i pasywów", tresc: `<h4>Zasady wyceny (art. 28 ustawy o rachunkowości)</h4>
<div class="tw"><table><tr><th>Składnik</th><th>Wycena na dzień bilansowy</th></tr>
<tr><td>środki trwałe, wartości niematerialne</td><td>cena nabycia lub koszt wytworzenia pomniejszone o odpisy amortyzacyjne i odpisy z tytułu trwałej utraty wartości</td></tr>
<tr><td>zapasy</td><td>cena nabycia (zakupu) lub koszt wytworzenia, <b>nie wyższe od cen sprzedaży netto</b></td></tr>
<tr><td>należności</td><td>kwota wymagająca zapłaty, z zachowaniem ostrożności (odpisy aktualizujące)</td></tr>
<tr><td>zobowiązania</td><td>kwota wymagająca zapłaty</td></tr>
<tr><td>środki pieniężne</td><td>wartość nominalna</td></tr>
<tr><td>kapitały własne</td><td>wartość nominalna</td></tr></table></div>
<h4>Odpisy aktualizujące</h4>
<p>Gdy istnieje ryzyko, że należność nie zostanie zapłacona (np. dłużnik w upadłości, należność sporna, przeterminowana), tworzy się <b>odpis aktualizujący</b>:</p>
<pre>Odpis aktualizujący należność 6 000 zł:
Wn 761 Pozostałe koszty operacyjne / Ma 290 Odpisy aktualizujące należności
Należność w bilansie = saldo 200 - saldo 290</pre>
<p>Gdy cena sprzedaży netto zapasów spadła poniżej ceny nabycia (np. towar przestarzały), zapasy też obniża się odpisem aktualizującym w ciężar pozostałych kosztów operacyjnych.</p>
<h4>Waluty obce</h4>
<ul>
<li>Operacje w ciągu roku: po <b>kursie średnim NBP z ostatniego dnia roboczego poprzedzającego</b> dzień operacji (chyba że stosuje się kurs faktycznie zastosowany przez bank).</li>
<li>Na dzień bilansowy: po kursie średnim NBP ogłoszonym na ten dzień.</li>
<li>Różnice kursowe <b>dodatnie</b>: przychody finansowe (750), <b>ujemne</b>: koszty finansowe (751).</li>
</ul>
<pre>Należność 1 000 euro, kurs przy sprzedaży 4,30 → 4 300 zł
Zapłata, kurs banku 4,25 → wpływ 4 250 zł
ujemna różnica kursowa 50 zł: Wn 751 / Ma 200</pre>
<h4>Zasada ostrożności</h4>
<p>W wyniku finansowym uwzględnia się <b>zmniejszenia wartości</b> aktywów i przewidywane straty nawet wtedy, gdy nie są pewne, ale <b>nie uwzględnia się niezrealizowanych zysków</b>. Dlatego zapasy nie mogą być wycenione wyżej niż cena sprzedaży netto, ale nie podwyższa się ich wartości, gdy ceny rynkowe wzrosły.</p>
<div class="tip">Należność wycenia się w kwocie wymagającej zapłaty, czyli razem z VAT (brutto), bo tyle zapłaci odbiorca.</div>` },
        { tytul: "Inwentaryzacja w księgach", tresc: `<h4>Metody i składniki</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Składniki</th></tr>
<tr><td>spis z natury</td><td>gotówka, zapasy, środki trwałe (poza trudno dostępnymi), papiery wartościowe w formie dokumentu</td></tr>
<tr><td>potwierdzenie sald</td><td>środki na rachunkach bankowych, kredyty, należności (z wyjątkiem spornych, od osób fizycznych nieprowadzących ksiąg, publicznoprawnych)</td></tr>
<tr><td>weryfikacja</td><td>grunty, wartości niematerialne, należności sporne i publicznoprawne, rozrachunki z pracownikami, zobowiązania wobec osób nieprowadzących ksiąg, rezerwy, rozliczenia międzyokresowe</td></tr></table></div>
<h4>Potwierdzenie sald</h4>
<p>Firma wysyła kontrahentom pismo z wykazem nierozliczonych faktur i saldem na dzień inwentaryzacji. Kontrahent potwierdza saldo lub zgłasza zastrzeżenia. Różnice wyjaśnia się (np. faktura w drodze, zapłata zaksięgowana z opóźnieniem).</p>
<h4>Księgowanie różnic</h4>
<pre>Niedobór materiałów w granicach norm ubytków: Wn 401 / Ma 310
Niedobór niezawiniony (np. kradzież z włamaniem): Wn 761 / Ma 310 (lub 330)
Niedobór zawiniony obciążający pracownika: Wn 234 / Ma 310
   (pracownik obciążany jest w wartości ustalonej przez kierownika)
Nadwyżka materiałów: Wn 310 / Ma 760
Niedobór gotówki obciążający kasjera: Wn 234 / Ma 100
Nadwyżka gotówki: Wn 100 / Ma 760</pre>
<p>Wiele jednostek przed decyzją kierownika ujmuje różnice przejściowo na koncie rozrachunkowym (np. 240), a po decyzji przenosi je na właściwe konto kosztów, przychodów lub należności od pracownika.</p>
<h4>Ważne zasady</h4>
<ul>
<li>Różnice ujmuje się w księgach <b>roku, na który przypadał termin inwentaryzacji</b>.</li>
<li>Wynik inwentaryzacji jest podstawą do korekty stanów ewidencyjnych do stanu rzeczywistego.</li>
<li>Zapasy w magazynie strzeżonym z ewidencją ilościowo-wartościową można inwentaryzować raz na 2 lata, środki trwałe na terenie strzeżonym raz na 4 lata.</li>
<li>Dokumentacja inwentaryzacji: zarządzenie, arkusze spisowe, zestawienie różnic, protokół weryfikacji, decyzja kierownika.</li>
</ul>
<pre>Spis z natury towarów: stan rzeczywisty 48 200 zł
Stan ewidencyjny konta 330: 49 000 zł
Niedobór 800 zł, w tym 150 zł ubytki naturalne,
650 zł zawiniony przez magazyniera
Wn 731 150 / Ma 330 150
Wn 234 650 / Ma 330 650 (wartość z decyzji kierownika)</pre>
<div class="tip">Potwierdzenia sald nie stosuje się do należności od osób fizycznych nieprowadzących ksiąg rachunkowych. Te należności weryfikuje się z dokumentami.</div>` },
        { tytul: "Rozliczenia międzyokresowe i rezerwy", tresc: `<h4>Po co rozliczenia międzyokresowe</h4>
<p>Wynikają z zasady <b>memoriału</b> i <b>współmierności</b>: koszt ujmuje się w okresie, którego dotyczy, a nie w okresie zapłaty.</p>
<h4>Czynne rozliczenia międzyokresowe kosztów</h4>
<p>Wydatki poniesione z góry, które dotyczą przyszłych okresów (aktywa).</p>
<pre>1.10.2026 zapłacono polisę majątkową na 12 miesięcy: 2 400 zł
Zapłata:                Wn 640 / Ma 130  2 400
Co miesiąc (200 zł):    Wn 409 / Ma 640    200
Na 31.12.2026:
koszt roku 2026 = 3 × 200 = 600 zł
w bilansie (aktywa, rozliczenia międzyokresowe) = 1 800 zł</pre>
<p>Inne przykłady: prenumerata, czynsz zapłacony z góry, abonament na oprogramowanie, koszty remontu rozliczane w czasie.</p>
<h4>Bierne rozliczenia międzyokresowe kosztów</h4>
<p>Koszty, które dotyczą bieżącego okresu, ale nie zostały jeszcze zafakturowane ani zapłacone, np. usługa wykonana w grudniu, za którą faktura przyjdzie w styczniu. Tworzy się je w ciężar kosztów (saldo Ma konta 640 lub konto 840) i wykazuje w pasywach.</p>
<h4>Rozliczenia międzyokresowe przychodów</h4>
<pre>1.12.2026 najemca zapłacił czynsz za 6 miesięcy z góry: 6 000 zł netto
Wpływ (bez VAT dla prostoty): Wn 130 / Ma 840  6 000
Przychód grudnia:             Wn 840 / Ma 760  1 000
Na 31.12.2026 w pasywach: 5 000 zł przychodów przyszłych okresów</pre>
<h4>Rezerwy</h4>
<p>Rezerwy to <b>zobowiązania o niepewnym terminie lub kwocie</b>. Tworzy się je na pewne lub prawdopodobne przyszłe zobowiązania, gdy można wiarygodnie oszacować ich kwotę:</p>
<ul>
<li>na odprawy emerytalne i niewykorzystane urlopy (świadczenia pracownicze);</li>
<li>na skutki toczącego się sporu sądowego;</li>
<li>na naprawy gwarancyjne;</li>
<li>na restrukturyzację.</li>
</ul>
<p>Rezerwę tworzy się w ciężar kosztów operacyjnych, pozostałych kosztów operacyjnych lub finansowych, zależnie od związku z działalnością. Wykorzystanie rezerwy zmniejsza ją bez obciążania kosztów, a niewykorzystaną rezerwę rozwiązuje się na dobro pozostałych przychodów operacyjnych.</p>
<div class="tw"><table><tr><th>Pozycja</th><th>Strona bilansu</th></tr>
<tr><td>czynne RMK (koszty zapłacone z góry)</td><td>aktywa</td></tr>
<tr><td>bierne RMK (koszty bez faktury)</td><td>pasywa</td></tr>
<tr><td>przychody przyszłych okresów</td><td>pasywa</td></tr>
<tr><td>rezerwy</td><td>pasywa</td></tr></table></div>
<div class="tip">Ubezpieczenie majątkowe w układzie rodzajowym to „pozostałe koszty rodzajowe” (409), a nie usługi obce (402).</div>` }
      ],
      pytania: [
        Q("Zapasy na dzień bilansowy wycenia się według cen nabycia lub kosztu wytworzenia", "nie wyższych od cen sprzedaży netto", "powiększonych o marżę", "zawsze po cenach rynkowych", "według ceny sprzedaży brutto", "Art. 28 ust. 1 pkt 6 ustawy o rachunkowości."),
        Q("Odpis aktualizujący wartość należności księguje się", "Wn 761 / Ma 290", "Wn 290 / Ma 761", "Wn 200 / Ma 760", "Wn 751 / Ma 200", "Odpis jest kosztem i korektą należności."),
        Q("Ujemne różnice kursowe zalicza się do", "kosztów finansowych", "pozostałych kosztów operacyjnych", "kosztów rodzajowych", "strat nadzwyczajnych", "Dodatnie różnice kursowe to przychody finansowe."),
        Q("Metodą potwierdzenia sald inwentaryzuje się", "środki na rachunkach bankowych", "gotówkę w kasie", "grunty", "należności sporne", "Należności sporne i grunty: weryfikacja."),
        Q("Nadwyżkę materiałów ujawnioną podczas inwentaryzacji księguje się", "Wn 310 / Ma 760", "Wn 760 / Ma 310", "Wn 310 / Ma 401", "Wn 234 / Ma 310", "Nadwyżka zwiększa pozostałe przychody operacyjne."),
        Q("Roczną polisę 2 400 zł zapłacono 1 października. Kwota czynnych rozliczeń międzyokresowych na 31 grudnia wynosi", "1 800 zł", "600 zł", "2 400 zł", "200 zł", "Koszt 3 miesięcy (600 zł) obciąża bieżący rok."),
        Q("Czynsz otrzymany z góry za przyszłe miesiące wykazuje się w bilansie jako", "rozliczenia międzyokresowe przychodów w pasywach", "należności w aktywach", "czynne rozliczenia międzyokresowe kosztów", "kapitał zapasowy", "Przychód rozlicza się w kolejnych miesiącach."),
        Q("Rezerwę tworzy się na", "zobowiązania, których kwota lub termin nie są pewne", "pewne należności od klientów", "zapasy towarów", "zysk zatrzymany", "Np. odprawy emerytalne, spory sądowe, naprawy gwarancyjne.")
      ]
    },
    {
      id: "sprawozdania", tytul: "Sprawozdanie finansowe", opis: "Sporządzisz zestawienie obrotów i sald, bilans, rachunek zysków i strat oraz rachunek przepływów.",
      lekcje: [
        { tytul: "Zestawienie obrotów i sald oraz bilans", tresc: `<h4>Zestawienie obrotów i sald</h4>
<p>Kolumny: symbol i nazwa konta, bilans otwarcia (Wn, Ma), obroty okresu (Wn, Ma), obroty narastająco (Wn, Ma), salda końcowe (Wn, Ma).</p>
<ul>
<li>Kontrola 1: <b>suma obrotów</b> zestawienia = suma obrotów dziennika.</li>
<li>Kontrola 2: <b>suma sald Wn = suma sald Ma</b>.</li>
<li>Zgodność sum nie wyklucza błędów: zaksięgowanie na złym koncie, pominięcie całej operacji lub zaksięgowanie jej dwa razy nie zaburzy równowagi.</li>
</ul>
<h4>Od sald do bilansu</h4>
<div class="tw"><table><tr><th>Konto (saldo)</th><th>Pozycja bilansu</th><th>Kwota</th></tr>
<tr><td>010 (Wn 80 000) - 070 (Ma 20 000)</td><td>A.II Rzeczowe aktywa trwałe</td><td>60 000</td></tr>
<tr><td>310 Materiały (Wn)</td><td>B.I Zapasy</td><td>15 000</td></tr>
<tr><td>200 Odbiorcy (Wn)</td><td>B.II Należności krótkoterminowe</td><td>12 000</td></tr>
<tr><td>100 Kasa + 130 Bank (Wn)</td><td>B.III Inwestycje krótkoterminowe: środki pieniężne</td><td>3 000 + 30 000</td></tr>
<tr><td colspan="2"><b>Aktywa razem</b></td><td><b>120 000</b></td></tr>
<tr><td>800 Kapitał podstawowy (Ma)</td><td>A.I Kapitał podstawowy</td><td>70 000</td></tr>
<tr><td>860 Wynik finansowy (Ma)</td><td>A. Zysk netto</td><td>18 000</td></tr>
<tr><td>201 Dostawcy (Ma)</td><td>B.III Zobowiązania krótkoterminowe: z tytułu dostaw</td><td>22 000</td></tr>
<tr><td>229 ZUS + 220 US (Ma)</td><td>B.III Zobowiązania krótkoterminowe: z tytułu podatków i ubezpieczeń</td><td>4 000 + 6 000</td></tr>
<tr><td colspan="2"><b>Pasywa razem</b></td><td><b>120 000</b></td></tr></table></div>
<h4>Zasady prezentacji</h4>
<ul>
<li>Konta korygujące (070 umorzenie, 290 odpisy aktualizujące) <b>pomniejszają</b> pozycje aktywów, a nie są osobną pozycją pasywów.</li>
<li>Należności i zobowiązania dzieli się na <b>krótkoterminowe</b> (do 12 miesięcy od dnia bilansowego) i <b>długoterminowe</b>.</li>
<li>Kredyt spłacany w ratach dzieli się: raty płatne w ciągu 12 miesięcy to zobowiązania krótkoterminowe, pozostałe długoterminowe.</li>
<li>Nie kompensuje się aktywów z pasywami (np. należności od odbiorcy z zobowiązaniem wobec niego), chyba że przepisy na to pozwalają.</li>
</ul>
<div class="tip">Jeśli aktywa nie równają się pasywom, sprawdź najpierw, czy wynik finansowy (saldo 860 lub różnica przychodów i kosztów) został ujęty w pasywach.</div>` },
        { tytul: "Rachunek zysków i strat w dwóch wariantach", tresc: `<h4>Dane</h4>
<pre>przychody netto ze sprzedaży produktów   200 000
zwiększenie stanu produktów (zapas wzrósł) 10 000
koszty rodzajowe razem                   180 000
  w tym koszty sprzedaży                  15 000
  w tym koszty ogólnego zarządu           25 000</pre>
<h4>Wariant porównawczy</h4>
<pre>A. Przychody netto ze sprzedaży          200 000
   zmiana stanu produktów                 +10 000
                                         210 000
B. Koszty działalności operacyjnej
   (amortyzacja, materiały, usługi obce,
   wynagrodzenia, ubezpieczenia itd.)    180 000
C. Zysk ze sprzedaży (A - B)              30 000</pre>
<p>Zwiększenie stanu produktów <b>dodaje się</b> do przychodów (koszty wytworzenia zapasu nie dotyczą sprzedaży), zmniejszenie <b>odejmuje się</b>.</p>
<h4>Wariant kalkulacyjny</h4>
<pre>koszt wytworzenia sprzedanych produktów
= 180 000 - 10 000 - 15 000 - 25 000 = 130 000

A. Przychody netto ze sprzedaży          200 000
B. Koszt sprzedanych produktów           130 000
C. Zysk brutto ze sprzedaży               70 000
D. Koszty sprzedaży                       15 000
E. Koszty ogólnego zarządu                25 000
F. Zysk ze sprzedaży                      30 000</pre>
<p>Oba warianty dają <b>ten sam wynik</b>. Różnią się tylko układem kosztów.</p>
<h4>Dalsza część rachunku (wspólna)</h4>
<pre>zysk ze sprzedaży                         30 000
+ pozostałe przychody operacyjne           4 000
- pozostałe koszty operacyjne              2 000
= zysk z działalności operacyjnej         32 000
+ przychody finansowe                      1 000
- koszty finansowe                         3 000
= zysk brutto                             30 000
- podatek dochodowy (np. 19%)              5 700
= zysk netto                              24 300</pre>
<h4>Co gdzie trafia</h4>
<div class="tw"><table><tr><th>Pozycja</th><th>Przykłady</th></tr>
<tr><td>pozostałe przychody operacyjne</td><td>zysk ze zbycia środków trwałych, otrzymane kary i odszkodowania, dotacje, rozwiązane rezerwy, nadwyżki inwentaryzacyjne</td></tr>
<tr><td>pozostałe koszty operacyjne</td><td>wartość netto zlikwidowanych środków, zapłacone kary, odpisy aktualizujące należności, niedobory niezawinione, darowizny</td></tr>
<tr><td>przychody finansowe</td><td>odsetki otrzymane, dywidendy, dodatnie różnice kursowe</td></tr>
<tr><td>koszty finansowe</td><td>odsetki od kredytów, ujemne różnice kursowe, prowizje od kredytów</td></tr></table></div>
<div class="tip">W wariancie porównawczym pojawia się „zmiana stanu produktów”, w kalkulacyjnym „koszty sprzedaży” i „koszty ogólnego zarządu”. Po tych pozycjach rozpoznasz wariant w zadaniu.</div>` },
        { tytul: "Rachunek przepływów i obowiązki sprawozdawcze", tresc: `<h4>Rachunek przepływów pieniężnych</h4>
<p>Pokazuje, skąd firma miała pieniądze i na co je wydała, w podziale na trzy rodzaje działalności:</p>
<div class="tw"><table><tr><th>Działalność</th><th>Przykłady przepływów</th></tr>
<tr><td>operacyjna</td><td>wpływy od odbiorców, zapłaty dostawcom, wynagrodzenia, podatki</td></tr>
<tr><td>inwestycyjna</td><td>zakup i sprzedaż środków trwałych, papierów wartościowych długoterminowych, udzielone pożyczki długoterminowe</td></tr>
<tr><td>finansowa</td><td>kredyty i ich spłata, emisja akcji, wypłata dywidend, odsetki od kredytów</td></tr></table></div>
<h4>Metoda pośrednia (działalność operacyjna)</h4>
<pre>zysk netto                         24 300
+ amortyzacja                      15 000
- wzrost zapasów                  -10 000
- wzrost należności                -5 000
+ wzrost zobowiązań krótkoterm.    +3 000
= przepływy z działalności operacyjnej 27 300</pre>
<p>Amortyzację się dodaje, bo jest kosztem niebędącym wydatkiem. Wzrost aktywów obrotowych (zapasów, należności) zamraża gotówkę, więc się go odejmuje; wzrost zobowiązań oznacza, że firma jeszcze nie zapłaciła, więc się go dodaje. Metoda bezpośrednia wykazuje po prostu wpływy i wydatki.</p>
<h4>Skład sprawozdania i terminy</h4>
<ul>
<li>Bilans, rachunek zysków i strat, <b>informacja dodatkowa</b> (zasady rachunkowości i objaśnienia). Jednostki podlegające badaniu: także <b>rachunek przepływów pieniężnych</b> i <b>zestawienie zmian w kapitale własnym</b>.</li>
<li>Jednostki mikro i małe mogą sporządzać sprawozdanie uproszczone, według załączników nr 4 i 5 do ustawy o rachunkowości.</li>
<li>Sporządzenie: do <b>3 miesięcy</b> od dnia bilansowego; zatwierdzenie przez organ zatwierdzający: do <b>6 miesięcy</b>; złożenie do Repozytorium Dokumentów Finansowych KRS: w ciągu 15 dni od zatwierdzenia.</li>
<li>Sprawozdanie sporządza się w postaci elektronicznej (struktura logiczna XML) i podpisuje je osoba, której powierzono prowadzenie ksiąg, oraz kierownik jednostki (w spółce każdy członek zarządu).</li>
<li>Zeznanie CIT-8 składa się do końca 3. miesiąca następnego roku.</li>
</ul>
<h4>Przechowywanie</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Okres</th></tr>
<tr><td>zatwierdzone roczne sprawozdania finansowe</td><td>trwale</td></tr>
<tr><td>księgi rachunkowe</td><td>co najmniej 5 lat</td></tr>
<tr><td>dowody księgowe dotyczące środków trwałych w budowie, pożyczek, kredytów</td><td>5 lat od początku roku następującego po roku zakończenia sprawy</td></tr>
<tr><td>dokumentacja inwentaryzacyjna</td><td>5 lat</td></tr></table></div>
<div class="tip">Okresy przechowywania liczy się od początku roku następującego po roku obrotowym, którego dane dotyczą.</div>` }
      ],
      pytania: [
        Q("Zgodność sumy sald Wn i Ma w zestawieniu obrotów i sald nie wykrywa błędu polegającego na", "zaksięgowaniu operacji na niewłaściwym koncie po właściwej stronie", "zapisie jednostronnym", "zapisie różnych kwot po obu stronach", "pominięciu zapisu po stronie Ma", "Zapis na złym koncie zachowuje równowagę."),
        Q("Saldo konta 070 Umorzenie środków trwałych w bilansie", "pomniejsza wartość środków trwałych w aktywach", "jest wykazywane w pasywach jako kapitał", "jest zobowiązaniem długoterminowym", "zwiększa zapasy", "Konto 070 jest kontem korygującym."),
        Q("Zwiększenie stanu produktów w wariancie porównawczym rachunku zysków i strat", "dodaje się do przychodów netto ze sprzedaży", "odejmuje się od przychodów ze sprzedaży", "jest pozostałym kosztem operacyjnym", "nie jest wykazywane", "Koryguje koszty rodzajowe o wartość zapasu produktów."),
        Q("Pozycja „koszty ogólnego zarządu” występuje w rachunku zysków i strat w wariancie", "kalkulacyjnym", "porównawczym", "tylko w rachunku przepływów", "w obu wariantach jako osobna pozycja", "Wariant porównawczy ma układ rodzajowy."),
        Q("Zysk ze zbycia niefinansowych aktywów trwałych wykazuje się w", "pozostałych przychodach operacyjnych", "przychodach finansowych", "przychodach netto ze sprzedaży", "kapitale zapasowym", "Odsetki i dywidendy to przychody finansowe."),
        Q("W metodzie pośredniej rachunku przepływów amortyzację", "dodaje się do zysku netto", "odejmuje się od zysku netto", "pomija się", "wykazuje się w działalności finansowej", "To koszt, który nie jest wydatkiem."),
        Q("Roczne sprawozdanie finansowe należy sporządzić w ciągu", "3 miesięcy od dnia bilansowego", "6 miesięcy od dnia bilansowego", "30 dni od dnia bilansowego", "15 dni od zatwierdzenia", "Zatwierdzenie: do 6 miesięcy."),
        Q("Zaciągnięcie kredytu długoterminowego w rachunku przepływów pieniężnych to wpływ z działalności", "finansowej", "operacyjnej", "inwestycyjnej", "nadzwyczajnej", "Zakup maszyny za ten kredyt to wydatek inwestycyjny.")
      ]
    },
    {
      id: "koszty", tytul: "Rachunek kosztów", opis: "Rozliczysz koszty w układzie rodzajowym i funkcjonalnym oraz obliczysz koszt jednostkowy i próg rentowności.",
      lekcje: [
        { tytul: "Ewidencja kosztów: zespół 4 i 5", tresc: `<h4>Trzy warianty ewidencji kosztów</h4>
<div class="tw"><table><tr><th>Wariant</th><th>Jak działa</th><th>Kto stosuje</th></tr>
<tr><td>tylko zespół 4</td><td>koszty wyłącznie rodzajowo</td><td>małe firmy usługowe i handlowe</td></tr>
<tr><td>tylko zespół 5</td><td>koszty wyłącznie według miejsc powstania i funkcji</td><td>rzadko</td></tr>
<tr><td>zespół 4 i 5</td><td>koszty najpierw rodzajowo, potem przeksięgowanie na zespół 5 przez konto 490</td><td>firmy produkcyjne</td></tr></table></div>
<h4>Przeksięgowanie przez konto 490</h4>
<pre>1. Koszty rodzajowe w miesiącu:
   amortyzacja      Wn 400 / Ma 070      8 000
   materiały        Wn 401 / Ma 310     30 000
   wynagrodzenia    Wn 404 / Ma 230     20 000
2. Rozliczenie na miejsca powstania (wg dokumentów):
   Wn 500 Koszty działalności podstawowej  40 000
   Wn 550 Koszty zarządu                   18 000
   / Ma 490 Rozliczenie kosztów            58 000
3. Na koniec roku: Wn 490 / Ma 400, 401, 404 (zamknięcie)</pre>
<p>Saldo Ma konta 490 w ciągu roku jest równe sumie kosztów rodzajowych przeksięgowanych na zespół 5.</p>
<h4>Koszty bezpośrednie i pośrednie</h4>
<ul>
<li><b>Bezpośrednie</b>: można je przypisać konkretnemu produktowi na podstawie dokumentu, np. materiały bezpośrednie (RW na zlecenie), płace bezpośrednie (karty pracy).</li>
<li><b>Pośrednie</b>: dotyczą wielu produktów, np. amortyzacja hali, energia wydziału, płace mistrza. Rozlicza się je kluczem (np. proporcjonalnie do płac bezpośrednich lub maszynogodzin).</li>
</ul>
<h4>Koszt wytworzenia produktu (art. 28 ust. 3 UoR)</h4>
<p>Obejmuje koszty bezpośrednie i <b>uzasadnioną część kosztów pośrednich</b>. Nie zalicza się do niego:</p>
<ul>
<li>kosztów ogólnego zarządu,</li>
<li>kosztów sprzedaży,</li>
<li>kosztów niewykorzystanych zdolności produkcyjnych i strat produkcyjnych,</li>
<li>kosztów magazynowania wyrobów gotowych (chyba że są niezbędne w procesie produkcji).</li>
</ul>
<h4>Koszty stałe i zmienne</h4>
<p>Koszty zmienne rosną wraz z wielkością produkcji (materiały, płace akordowe, energia technologiczna). Koszty stałe nie zależą od niej w krótkim okresie (czynsz, amortyzacja liniowa, płace administracji). Jednostkowy koszt stały <b>maleje</b> wraz ze wzrostem produkcji.</p>
<div class="tip">Wariant „4 i 5” daje oba układy jednocześnie, dlatego pozwala sporządzić rachunek zysków i strat w wariancie porównawczym i kalkulacyjnym.</div>` },
        { tytul: "Kalkulacja kosztu jednostkowego", tresc: `<h4>Kalkulacja podziałowa prosta</h4>
<p>Dla produkcji jednorodnej, jednego wyrobu:</p>
<pre>koszt jednostkowy = koszty okresu ÷ liczba wyrobów

Z produkcją w toku (jednostki przeliczeniowe):
wyroby gotowe 1 000 szt., produkcja w toku 200 szt.
przerobionych w 50% → 200 × 0,5 = 100 j.p.
razem 1 100 jednostek przeliczeniowych
koszty 55 000 zł → 55 000 ÷ 1 100 = 50 zł
wyroby gotowe:     1 000 × 50 = 50 000 zł
produkcja w toku:    100 × 50 =  5 000 zł</pre>
<h4>Kalkulacja podziałowa współczynnikowa</h4>
<p>Dla wyrobów podobnych, różniących się np. wielkością lub pracochłonnością:</p>
<div class="tw"><table><tr><th>Wyrób</th><th>Ilość</th><th>Współczynnik</th><th>Jednostki umowne</th><th>Koszt jednostkowy</th></tr>
<tr><td>A</td><td>100</td><td>1,0</td><td>100</td><td>50 zł</td></tr>
<tr><td>B</td><td>200</td><td>1,5</td><td>300</td><td>75 zł</td></tr>
<tr><td>C</td><td>50</td><td>2,0</td><td>100</td><td>100 zł</td></tr>
<tr><td colspan="3"><b>razem</b></td><td>500</td><td></td></tr></table></div>
<pre>koszty 25 000 zł ÷ 500 j.u. = 50 zł za jednostkę umowną
koszt wyrobu = 50 zł × współczynnik</pre>
<h4>Kalkulacja doliczeniowa (zleceniowa)</h4>
<p>Dla produkcji różnorodnej, na zamówienie. Koszty bezpośrednie przypisuje się zleceniom, a pośrednie dolicza <b>narzutem</b>.</p>
<pre>koszty wydziałowe 12 000 zł, płace bezpośrednie wszystkich zleceń 40 000 zł
narzut = 12 000 ÷ 40 000 × 100% = 30%

Zlecenie X: materiały 5 000, płace bezpośrednie 4 000
narzut 30% × 4 000 = 1 200
koszt wytworzenia zlecenia = 5 000 + 4 000 + 1 200 = 10 200 zł</pre>
<h4>Kalkulacja procesowa i łączna</h4>
<ul>
<li><b>Fazowa</b>: produkcja przechodzi przez kolejne fazy (np. przędzalnia, tkalnia); koszt liczy się dla każdej fazy.</li>
<li><b>Produkcji sprzężonej</b>: z jednego procesu powstaje kilka produktów (np. rafineria); koszt dzieli się metodą współczynnikową lub odejmowania produktów ubocznych.</li>
</ul>
<h4>Kalkulacja ceny</h4>
<pre>koszt wytworzenia jednostki           50,00 zł
+ koszty zarządu i sprzedaży na jedn.  10,00 zł
= koszt własny sprzedaży              60,00 zł
+ zysk 20% kosztu                     12,00 zł
= cena netto                          72,00 zł
+ VAT 23%                             16,56 zł
= cena brutto                         88,56 zł</pre>
<div class="tip">W kalkulacji podziałowej z produkcją w toku zawsze przelicz niezakończone wyroby na jednostki gotowe według stopnia przerobu. Bez tego koszt wyrobu gotowego wyjdzie zaniżony.</div>` },
        { tytul: "Rachunek kosztów zmiennych i decyzje", tresc: `<h4>Marża pokrycia</h4>
<pre>jednostkowa marża pokrycia = cena - jednostkowy koszt zmienny
wskaźnik marży pokrycia    = marża jednostkowa ÷ cena
wynik = marża pokrycia razem - koszty stałe</pre>
<h4>Próg rentowności</h4>
<pre>Koszty stałe 60 000 zł, cena 100 zł, koszt zmienny 70 zł
marża jednostkowa = 30 zł, wskaźnik marży = 0,3

BEP ilościowy = 60 000 ÷ 30 = 2 000 szt.
BEP wartościowy = 60 000 ÷ 0,3 = 200 000 zł
(lub 2 000 szt. × 100 zł)</pre>
<h4>Sprzedaż zapewniająca zysk docelowy</h4>
<pre>planowany zysk 15 000 zł
ilość = (koszty stałe + zysk) ÷ marża jednostkowa
      = (60 000 + 15 000) ÷ 30 = 2 500 szt.</pre>
<h4>Margines bezpieczeństwa</h4>
<pre>margines = (sprzedaż planowana - sprzedaż w BEP) ÷ sprzedaż planowana × 100%
         = (2 500 - 2 000) ÷ 2 500 × 100% = 20%</pre>
<p>Oznacza to, że sprzedaż może spaść o 20%, zanim firma zacznie ponosić stratę.</p>
<h4>Decyzje krótkookresowe</h4>
<ul>
<li><b>Dodatkowe zamówienie</b> przy wolnych mocach: opłaca się, jeśli cena jest wyższa od jednostkowego kosztu zmiennego (koszty stałe i tak są ponoszone).</li>
<li><b>Wycofanie produktu</b>: produkt z dodatnią marżą pokrycia pokrywa część kosztów stałych; jego wycofanie może obniżyć wynik.</li>
<li><b>Produkcja czy zakup</b>: porównuje się koszt zmienny produkcji (plus dodatkowe koszty stałe) z ceną zakupu.</li>
</ul>
<pre>Zamówienie dodatkowe: 300 szt. po 80 zł, koszt zmienny 70 zł
dodatkowa marża = 300 × (80 - 70) = 3 000 zł → przyjąć
(mimo że 80 zł to mniej niż pełny koszt jednostkowy)</pre>
<h4>Rachunek kosztów pełnych a zmiennych</h4>
<div class="tw"><table><tr><th></th><th>Koszty pełne</th><th>Koszty zmienne</th></tr>
<tr><td>wycena zapasu wyrobów</td><td>koszt wytworzenia (z kosztami stałymi produkcji)</td><td>tylko koszty zmienne</td></tr>
<tr><td>koszty stałe</td><td>częściowo w zapasie</td><td>w całości w kosztach okresu</td></tr>
<tr><td>zastosowanie</td><td>sprawozdawczość finansowa</td><td>decyzje zarządcze</td></tr></table></div>
<div class="tip">Gdy zapas wyrobów rośnie, rachunek kosztów pełnych wykazuje wyższy zysk niż rachunek kosztów zmiennych, bo część kosztów stałych „zostaje” w zapasie.</div>` }
      ],
      pytania: [
        Q("W wariancie ewidencji kosztów „4 i 5” koszty rodzajowe przeksięgowuje się na zespół 5 przez konto", "490 Rozliczenie kosztów", "860 Wynik finansowy", "300 Rozliczenie zakupu", "640 Rozliczenia międzyokresowe kosztów", "Wn 500, 550 / Ma 490."),
        Q("Do kosztu wytworzenia produktu NIE zalicza się", "kosztów ogólnego zarządu", "materiałów bezpośrednich", "płac bezpośrednich", "uzasadnionej części kosztów wydziałowych", "Ani kosztów sprzedaży."),
        Q("Wyprodukowano 800 szt. gotowych i 400 szt. w toku przerobionych w 50%. Koszty wyniosły 50 000 zł. Koszt jednostkowy wyrobu gotowego wynosi", "50 zł", "41,67 zł", "62,50 zł", "40 zł", "800 + 200 = 1 000 j.p.; 50 000 ÷ 1 000 = 50 zł."),
        Q("Kalkulację doliczeniową stosuje się przy produkcji", "różnorodnej, na zlecenia", "jednorodnej, masowej jednego wyrobu", "wyłącznie usług bankowych", "sprzężonej w rafinerii", "Koszty pośrednie dolicza się narzutem."),
        Q("Koszty stałe 40 000 zł, cena 50 zł, jednostkowy koszt zmienny 30 zł. Próg rentowności wynosi", "2 000 szt.", "800 szt.", "1 333 szt.", "4 000 szt.", "40 000 ÷ (50 - 30) = 2 000 szt."),
        Q("Wskaźnik marży pokrycia wynosi 0,25, a koszty stałe 50 000 zł. Wartościowy próg rentowności to", "200 000 zł", "12 500 zł", "62 500 zł", "250 000 zł", "50 000 ÷ 0,25."),
        Q("Przy wolnych mocach produkcyjnych dodatkowe zamówienie jednorazowe opłaca się przyjąć, gdy cena", "przekracza jednostkowy koszt zmienny", "jest wyższa od pełnego kosztu jednostkowego", "pokrywa wszystkie koszty stałe firmy", "jest równa cenie katalogowej", "Koszty stałe są ponoszone niezależnie od zamówienia."),
        Q("Sprzedaż planowana 5 000 szt., próg rentowności 4 000 szt. Margines bezpieczeństwa wynosi", "20%", "25%", "80%", "1 000%", "(5 000 - 4 000) ÷ 5 000 × 100%.")
      ]
    }
  ]);

  pod("SPL.01", [
    {
      id: "przyjecie-wydanie", tytul: "Przyjęcie i wydanie towarów", opis: "Przyjmiesz dostawę, sporządzisz dokumenty magazynowe i skompletujesz zamówienie bez błędów.",
      lekcje: [
        { tytul: "Przyjęcie dostawy krok po kroku", tresc: `<h4>Przed przyjazdem dostawy</h4>
<ul>
<li><b>Awizacja</b>: dostawca zgłasza termin (okno czasowe), rodzaj i ilość ładunku, numer pojazdu. Magazyn planuje rampę, sprzęt i ludzi.</li>
<li>Przygotowanie strefy przyjęć i miejsc składowania (sprawdzenie w WMS wolnych lokalizacji).</li>
</ul>
<h4>Kolejność czynności przy przyjęciu</h4>
<ol>
<li><b>Kontrola dokumentów</b>: zgodność dokumentu dostawy (WZ dostawcy, specyfikacja) i listu przewozowego z zamówieniem.</li>
<li><b>Kontrola stanu pojazdu i ładunku</b>: plomby, uszkodzenia opakowań, w chłodni temperatura w ładowni i rejestr temperatury z przejazdu.</li>
<li><b>Rozładunek</b> na rampie (wózek, pomost przeładunkowy).</li>
<li><b>Kontrola ilościowa</b>: liczba jednostek ładunkowych i opakowań zbiorczych, potem sztuk, masy lub objętości. Przy dużych partiach można stosować kontrolę wyrywkową.</li>
<li><b>Kontrola jakościowa</b>: oględziny (organoleptyczna), terminy przydatności, numery partii, zgodność oznakowania, certyfikaty.</li>
<li>Wystawienie dokumentu <b>PZ</b>, etykietowanie (np. etykieta logistyczna GS1 z numerem SSCC), wprowadzenie do systemu.</li>
<li>Rozmieszczenie towaru w strefie składowania.</li>
</ol>
<h4>Gdy coś się nie zgadza</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Postępowanie</th></tr>
<tr><td>uszkodzenie widoczne przy rozładunku</td><td>adnotacja w liście przewozowym, <b>protokół szkody</b> podpisany przez kierowcę, zdjęcia</td></tr>
<tr><td>niedobór lub nadwyżka ilościowa</td><td>protokół rozbieżności, przyjęcie stanu rzeczywistego, reklamacja ilościowa do dostawcy</td></tr>
<tr><td>wada jakościowa</td><td>towar do strefy blokady (kwarantanny), reklamacja jakościowa</td></tr>
<tr><td>brak dokumentów lub towar spoza zamówienia</td><td>przyjęcie warunkowe do strefy wyjaśnień albo odmowa przyjęcia</td></tr>
<tr><td>przekroczona temperatura w chłodni</td><td>odmowa przyjęcia lub przyjęcie z zastrzeżeniem i powiadomienie działu jakości</td></tr></table></div>
<h4>Czas i wydajność przyjęć</h4>
<pre>wskaźnik terminowości dostaw = dostawy na czas ÷ wszystkie dostawy × 100%
wskaźnik dostaw bez zastrzeżeń = dostawy bez reklamacji ÷ wszystkie × 100%
Przykład: 46 z 50 dostaw na czas → 92%</pre>
<div class="tip">Uszkodzenie widoczne trzeba zgłosić przewoźnikowi w chwili odbioru. Bez adnotacji na liście przewozowym dochodzenie odszkodowania jest znacznie trudniejsze.</div>` },
        { tytul: "Dokumenty i kartoteka magazynowa", tresc: `<h4>Elementy dokumentu magazynowego</h4>
<p>Nazwa i numer dokumentu, data, magazyn, kontrahent (przy PZ i WZ), nazwa towaru, indeks lub kod, jednostka miary, ilość, cena jednostkowa, wartość, podpisy: wystawiającego, wydającego, przyjmującego, osoby księgującej.</p>
<div class="tw"><table><tr><th>Dokument</th><th>Kiedy</th><th>Ruch</th></tr>
<tr><td>PZ</td><td>przyjęcie od dostawcy</td><td>przychód</td></tr>
<tr><td>WZ</td><td>wydanie odbiorcy zewnętrznemu</td><td>rozchód</td></tr>
<tr><td>PW</td><td>przyjęcie wyrobów z własnej produkcji</td><td>przychód</td></tr>
<tr><td>RW</td><td>wydanie materiałów do produkcji lub na potrzeby firmy</td><td>rozchód</td></tr>
<tr><td>ZW</td><td>zwrot niewykorzystanych materiałów z produkcji</td><td>przychód</td></tr>
<tr><td>MM</td><td>przesunięcie między magazynami</td><td>rozchód w jednym, przychód w drugim</td></tr></table></div>
<h4>Kartoteka ilościowo-wartościowa FIFO</h4>
<pre>1.04  stan       40 szt. × 25 zł = 1 000 zł
5.04  PZ         60 szt. × 27 zł = 1 620 zł
8.04  WZ         70 szt.
12.04 PZ         50 szt. × 26 zł = 1 300 zł
15.04 RW         60 szt.</pre>
<div class="tw"><table><tr><th>Data</th><th>Dokument</th><th>Rozchód</th><th>Wartość</th><th>Zapas po operacji</th></tr>
<tr><td>8.04</td><td>WZ</td><td>40 × 25 + 30 × 27</td><td>1 810 zł</td><td>30 × 27</td></tr>
<tr><td>12.04</td><td>PZ</td><td>-</td><td>-</td><td>30 × 27; 50 × 26</td></tr>
<tr><td>15.04</td><td>RW</td><td>30 × 27 + 30 × 26</td><td>1 590 zł</td><td>20 × 26 = 520 zł</td></tr></table></div>
<p>Kontrola: przychody 1 000 + 1 620 + 1 300 = 3 920 zł; rozchody 1 810 + 1 590 = 3 400 zł; zapas 3 920 - 3 400 = <b>520 zł</b>.</p>
<h4>Kto prowadzi jaką ewidencję</h4>
<ul>
<li><b>Kartoteka ilościowa</b>: magazynier (przychód, rozchód, zapas w sztukach).</li>
<li><b>Kartoteka ilościowo-wartościowa</b>: dział księgowości lub system ERP/WMS.</li>
<li>Dokumenty numeruje się kolejno w ramach rodzaju i roku, np. PZ 15/04/2026.</li>
</ul>
<div class="tip">MM nie zmienia stanu firmy, tylko stany magazynów. Pytanie „który dokument nie zmienia łącznego zapasu przedsiębiorstwa” ma odpowiedź MM.</div>` },
        { tytul: "Kompletacja i wydanie", tresc: `<h4>Proces wydania</h4>
<ol>
<li>Przyjęcie zamówienia i sprawdzenie dostępności.</li>
<li>Wygenerowanie <b>listy kompletacyjnej</b> (picking list) z lokalizacjami w kolejności trasy.</li>
<li>Pobranie towaru według zasady FIFO lub FEFO.</li>
<li>Kontrola kompletacji (skaner, ważenie, kontrola wizualna).</li>
<li>Pakowanie, zabezpieczenie (folia stretch, narożniki), etykieta wysyłkowa.</li>
<li>Odstawienie do <b>strefy wydań</b> przypisanej do trasy lub przewoźnika.</li>
<li>Wystawienie <b>WZ</b>, załadunek, podpisy kierowcy na dokumentach.</li>
</ol>
<h4>Metody kompletacji</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th></tr>
<tr><td>jednostkowa (zamówienie po zamówieniu)</td><td>kompletujący zbiera jedno zamówienie; mało błędów, dużo chodzenia</td></tr>
<tr><td>zbiorcza (batch picking)</td><td>pobranie towarów dla kilku zamówień naraz, potem rozdział</td></tr>
<tr><td>strefowa (zone picking)</td><td>każdy pracownik obsługuje swoją strefę, zamówienie przechodzi między strefami</td></tr>
<tr><td>falowa (wave picking)</td><td>zamówienia grupowane w fale wg godziny odjazdu pojazdów</td></tr></table></div>
<p>Technologie: pick-by-paper, pick-by-scanner, <b>pick-by-voice</b> (polecenia głosowe, wolne ręce), <b>pick-by-light</b> (lampki przy lokalizacjach), systemy „towar do człowieka” (automatyczne regały, roboty).</p>
<h4>Wskaźniki kompletacji</h4>
<pre>wydajność = liczba pobranych linii (pozycji) ÷ czas pracy
2 400 linii, 4 osoby × 8 h → 2 400 ÷ 32 = 75 linii/h na osobę

wskaźnik błędów = błędnie skompletowane linie ÷ wszystkie × 100%
12 błędów na 2 400 linii → 0,5%

OTIF = zamówienia wydane na czas i kompletne ÷ wszystkie × 100%</pre>
<h4>Załadunek</h4>
<ul>
<li>Kolejność załadunku jest <b>odwrotna</b> do kolejności rozładunku: towar dla ostatniego odbiorcy ładuje się najgłębiej.</li>
<li>Ciężkie jednostki na dole i równomiernie na osiach, lekkie na górze.</li>
<li>Ładunek mocuje się tak, by nie przesunął się podczas hamowania (pasy, belki, maty antypoślizgowe).</li>
</ul>
<div class="tip">FEFO ma pierwszeństwo przed FIFO przy towarach z datą przydatności: wydaje się partię, której termin kończy się najwcześniej, nawet jeśli przyszła później.</div>` }
      ],
      pytania: [
        Q("Zgłoszenie przez dostawcę planowanego terminu dostawy i liczby palet to", "awizacja", "kompletacja", "konsolidacja", "inwentaryzacja", "Pozwala zaplanować rampę i sprzęt."),
        Q("Uszkodzenie opakowań stwierdzone podczas rozładunku należy udokumentować", "protokołem szkody podpisanym przez kierowcę i adnotacją w liście przewozowym", "tylko wpisem w kartotece magazynowej", "dokumentem MM", "notatką bez podpisu kierowcy", "Inaczej trudno dochodzić roszczeń od przewoźnika."),
        Q("Zwrot niewykorzystanych materiałów z produkcji do magazynu dokumentuje się dowodem", "ZW", "RW", "PW", "WZ", "RW to wydanie do produkcji."),
        Q("Dokumentem, który nie zmienia łącznego zapasu przedsiębiorstwa, jest", "MM", "PZ", "WZ", "RW", "Przesuwa towar między magazynami."),
        Q("Stan 40 szt. po 25 zł, dostawa 60 szt. po 27 zł, wydano 70 szt. Wartość rozchodu wg FIFO wynosi", "1 810 zł", "1 750 zł", "1 890 zł", "1 820 zł", "40 × 25 + 30 × 27."),
        Q("Kompletacja polegająca na pobraniu towarów dla kilku zamówień jednocześnie i ich późniejszym rozdziale to", "kompletacja zbiorcza (batch picking)", "kompletacja jednostkowa", "cross-docking", "pick-by-light", "Skraca drogę kompletujących."),
        Q("Trzech kompletujących pobrało w ciągu 8 godzin 1 920 linii. Wydajność wynosi", "80 linii/h na osobę", "240 linii/h na osobę", "640 linii/h na osobę", "60 linii/h na osobę", "1 920 ÷ (3 × 8)."),
        Q("Towar dla odbiorcy, który będzie rozładowywany jako ostatni na trasie, ładuje się", "najgłębiej w przestrzeni ładunkowej", "przy drzwiach naczepy", "na samej górze stosu", "w dowolnym miejscu", "Kolejność załadunku jest odwrotna do rozładunku.")
      ]
    },
    {
      id: "skladowanie", tytul: "Składowanie i urządzenia", opis: "Dobierzesz regały i wózki, policzysz pojemność magazynu i rozmieścisz towary w lokalizacjach.",
      lekcje: [
        { tytul: "Regały i urządzenia transportu wewnętrznego", tresc: `<h4>Rodzaje regałów</h4>
<div class="tw"><table><tr><th>Regał</th><th>Cechy</th><th>Zasada wydawania</th></tr>
<tr><td>paletowy rzędowy</td><td>dostęp do każdej palety, duża liczba asortymentów</td><td>dowolna</td></tr>
<tr><td>wjezdny (drive-in)</td><td>wózek wjeżdża w regał z jednej strony; duże partie jednego towaru, dobre wykorzystanie powierzchni</td><td>LIFO</td></tr>
<tr><td>przejezdny (drive-through)</td><td>wjazd z dwóch stron</td><td>FIFO</td></tr>
<tr><td>przepływowy grawitacyjny</td><td>palety lub kartony toczą się po pochylonych rolkach</td><td>FIFO</td></tr>
<tr><td>przesuwny (mobilny)</td><td>regały na wózkach jezdnych, jeden ruchomy korytarz</td><td>dowolna, mała częstotliwość pobrań</td></tr>
<tr><td>wspornikowy</td><td>ramiona bez słupów z przodu; dłużyca: rury, pręty, deski</td><td>dowolna</td></tr>
<tr><td>półkowy</td><td>drobnica, kompletacja ręczna</td><td>dowolna</td></tr></table></div>
<p>Antresola tworzy dodatkowy poziom roboczy nad posadzką. Magazyny automatyczne wysokiego składowania obsługują <b>układnice</b>.</p>
<h4>Wózki i urządzenia</h4>
<div class="tw"><table><tr><th>Urządzenie</th><th>Zastosowanie</th></tr>
<tr><td>wózek paletowy ręczny lub elektryczny</td><td>przemieszczanie palet po posadzce, załadunek z rampy</td></tr>
<tr><td>wózek podnośnikowy (unoszący)</td><td>podnoszenie na niewielką wysokość, obsługa niskich regałów</td></tr>
<tr><td>wózek widłowy czołowy z przeciwwagą</td><td>uniwersalny, także na zewnątrz; wymaga szerokich korytarzy</td></tr>
<tr><td>wózek wysokiego składowania z wysuwanym masztem (reach truck)</td><td>regały wysokie, węższe korytarze</td></tr>
<tr><td>wózek systemowy VNA (trójstronny)</td><td>bardzo wąskie korytarze, pobieranie bez obracania wózka</td></tr>
<tr><td>przenośniki taśmowe i rolkowe</td><td>transport ciągły kartonów i palet</td></tr></table></div>
<h4>Dobór urządzenia</h4>
<p>Uwzględnia się: masę i wymiary jednostki ładunkowej, wysokość składowania, szerokość korytarza, rodzaj posadzki, pracę wewnątrz czy na zewnątrz (spaliny), intensywność przeładunków.</p>
<h4>Dozór techniczny</h4>
<p>Wózki jezdniowe z napędem mechanicznym podlegają dozorowi <b>UDT</b> (badania techniczne, okresowe). Operator musi mieć <b>zaświadczenie kwalifikacyjne UDT</b> oraz upoważnienie pracodawcy. Wózki ręczne bez napędu podnoszenia nie wymagają uprawnień UDT.</p>
<div class="tip">Drive-in to LIFO, drive-through i regał przepływowy to FIFO. To najczęściej sprawdzane przyporządkowanie.</div>` },
        { tytul: "Powierzchnia, pojemność i obciążenia", tresc: `<h4>Rodzaje powierzchni</h4>
<ul>
<li><b>całkowita</b>: wewnątrz ścian zewnętrznych;</li>
<li><b>użytkowa</b>: całkowita pomniejszona o ściany działowe, słupy, klatki schodowe;</li>
<li><b>składowa</b>: zajęta przez towary i urządzenia do składowania;</li>
<li><b>manipulacyjna</b>: drogi transportowe, przejścia, strefy przyjęć i wydań;</li>
<li><b>pomocnicza</b>: biura, socjalna, ładowanie akumulatorów.</li>
</ul>
<pre>wskaźnik wykorzystania powierzchni = powierzchnia składowa ÷ powierzchnia użytkowa × 100%
hala 60 m × 40 m = 2 400 m², regały zajmują 1 440 m²
1 440 ÷ 2 400 × 100% = 60%

wskaźnik wykorzystania pojemności = objętość zajęta ÷ objętość składowa × 100%</pre>
<h4>Miejsca paletowe</h4>
<pre>regał: 10 sekcji × 3 miejsca w sekcji × 4 poziomy = 120 miejsc
3 regały = 360 miejsc
zajęte 306 → wykorzystanie 306 ÷ 360 = 85%</pre>
<h4>Składowanie blokowe</h4>
<pre>300 palet EUR, piętrzenie 3 palety w stosie
liczba stosów = 300 ÷ 3 = 100
powierzchnia palety = 1,2 × 0,8 = 0,96 m²
powierzchnia netto = 100 × 0,96 = 96 m² (plus odstępy i drogi)</pre>
<h4>Obciążenie posadzki i regałów</h4>
<pre>stos 3 palet po 900 kg = 2 700 kg na 0,96 m²
nacisk = 2 700 ÷ 0,96 = 2 812,5 kg/m² ≈ 2,81 t/m²
dopuszczalne obciążenie posadzki 3 t/m² → można składować</pre>
<ul>
<li>Na regale umieszcza się tabliczkę znamionową: dopuszczalne obciążenie <b>poziomu</b> (pary belek) i <b>całego regału</b> (sekcji).</li>
<li>Masa palet na jednym poziomie nie może przekroczyć nośności belek; łączna masa w sekcji nie może przekroczyć nośności ram.</li>
<li>Dopuszczalne piętrzenie zależy od wytrzymałości opakowań; informuje o nim znak manipulacyjny ograniczenia piętrzenia.</li>
</ul>
<h4>Wysokość składowania</h4>
<pre>wysokość jednostki ładunkowej = 144 mm (paleta) + wysokość ładunku
regał z poziomami co 1 500 mm: jednostka maks. ok. 1 400 mm
(trzeba zostawić luz ok. 100 mm na pracę wideł)</pre>
<div class="tip">W zadaniach o liczbie palet zawsze zaokrąglaj w górę liczbę potrzebnych miejsc, a w dół liczbę kartonów mieszczących się w warstwie.</div>` },
        { tytul: "Rozmieszczenie i adresacja lokalizacji", tresc: `<h4>Adres lokalizacji</h4>
<pre>A-03-12-2
A  - strefa (lub magazyn)
03 - rząd (regał)
12 - kolumna (sekcja)
2  - poziom</pre>
<p>Adres pozwala jednoznacznie wskazać miejsce w liście kompletacyjnej i w WMS. Etykiety lokalizacji mają kod kreskowy, który skanuje się przy odkładaniu i pobieraniu.</p>
<h4>Lokalizacja stała, zmienna i mieszana</h4>
<div class="tw"><table><tr><th>System</th><th>Zalety</th><th>Wady</th></tr>
<tr><td>stała (każdy towar ma swoje miejsce)</td><td>łatwe zapamiętanie, prosta kompletacja</td><td>puste miejsca, gdy brak towaru</td></tr>
<tr><td>zmienna, wolna (dowolne wolne miejsce)</td><td>lepsze wykorzystanie powierzchni</td><td>wymaga systemu informatycznego (WMS)</td></tr>
<tr><td>mieszana</td><td>stałe miejsca kompletacyjne + zmienna strefa rezerwy</td><td>potrzebne uzupełnianie</td></tr></table></div>
<h4>Zasady rozmieszczania</h4>
<ul>
<li>Towary o <b>największej rotacji</b> (grupa A wg liczby pobrań) blisko strefy wydań i na wysokości od kolan do ramion („złota strefa”).</li>
<li>Ciężkie i duże na dolnych poziomach, lekkie wyżej.</li>
<li>Towary <b>niekompatybilne</b> oddzielnie: żywność z dala od chemii, towary oddające zapach (ryby, chemia) z dala od chłonących zapach (kawa, herbata, mąka).</li>
<li>Towary niebezpieczne w wydzielonej strefie zgodnie z kartą charakterystyki.</li>
<li>Towary często zamawiane razem obok siebie.</li>
</ul>
<h4>Uzupełnianie miejsc kompletacyjnych</h4>
<p>Gdy zapas w miejscu kompletacyjnym spadnie do ustalonego minimum, WMS generuje zadanie uzupełnienia z <b>rezerwy</b> (wyższe poziomy regałów). Uzupełnienie powinno nastąpić przed falą kompletacji, aby nie blokować pracy.</p>
<h4>Macierz ABC/XYZ</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Charakter</th><th>Strategia</th></tr>
<tr><td>AX</td><td>wysoka wartość, stabilny popyt</td><td>dostawy częste, małe zapasy, np. JIT</td></tr>
<tr><td>AZ</td><td>wysoka wartość, nieregularny popyt</td><td>ścisła kontrola, zamawianie pod zamówienia</td></tr>
<tr><td>CX</td><td>niska wartość, stabilny popyt</td><td>rzadkie duże zamówienia, automatyczne odnawianie</td></tr>
<tr><td>CZ</td><td>niska wartość, nieregularny popyt</td><td>kandydaci do wycofania lub zamawiania na życzenie</td></tr></table></div>
<div class="tip">Analiza ABC do rozmieszczenia robi się według liczby pobrań (rotacji), a do kontroli zapasów według wartości. Sprawdź, o którą chodzi w treści.</div>` }
      ],
      pytania: [
        Q("Regał, w którym palety przesuwają się grawitacyjnie po rolkach od strony załadunku do strony pobierania, umożliwia realizację zasady", "FIFO", "LIFO", "HIFO", "tylko FEFO bez FIFO", "To regał przepływowy."),
        Q("Regał wjezdny drive-in z dostępem z jednej strony wymusza wydawanie według zasady", "LIFO", "FIFO", "FEFO", "dowolnej", "Ostatnia wstawiona paleta stoi najbliżej korytarza."),
        Q("Do składowania rur i prętów najlepiej nadaje się regał", "wspornikowy", "przepływowy", "półkowy", "wjezdny", "Brak słupów z przodu ułatwia dostęp do dłużycy."),
        Q("Operator wózka widłowego z napędem mechanicznym musi posiadać", "zaświadczenie kwalifikacyjne UDT", "prawo jazdy kategorii C", "certyfikat ADR", "uprawnienia SEP", "Wózek podlega dozorowi technicznemu."),
        Q("Hala ma 2 000 m² powierzchni użytkowej, a powierzchnia składowa wynosi 1 300 m². Wskaźnik wykorzystania powierzchni wynosi", "65%", "35%", "153%", "75%", "1 300 ÷ 2 000 × 100%."),
        Q("Regał ma 8 sekcji po 3 miejsca na 5 poziomach. Liczba miejsc paletowych wynosi", "120", "40", "24", "16", "8 × 3 × 5."),
        Q("Towary o największej liczbie pobrań należy umieścić", "blisko strefy wydań, na wysokości dogodnej do pobrania", "na najwyższych poziomach regałów", "w najdalszej części magazynu", "w strefie przyjęć", "Skraca to drogę i czas kompletacji."),
        Q("Kawy nie należy składować w sąsiedztwie", "środków chemicznych o intensywnym zapachu", "herbaty w szczelnych opakowaniach", "cukru w workach", "makaronu", "Kawa chłonie obce zapachy.")
      ]
    },
    {
      id: "zapasy", tytul: "Sterowanie zapasami", opis: "Ustalisz punkt i wielkość zamówienia, zapas bezpieczeństwa oraz ocenisz zapasy wskaźnikami.",
      lekcje: [
        { tytul: "Systemy odnawiania zapasów", tresc: `<h4>System przeglądu ciągłego (punkt ponownego zamówienia)</h4>
<ul>
<li>Zapas jest stale monitorowany. Gdy spadnie do <b>punktu zamówienia (ROP)</b>, składa się zamówienie o <b>stałej wielkości</b> (np. EOQ).</li>
<li>Zmienny jest odstęp między zamówieniami.</li>
</ul>
<pre>ROP = popyt dzienny × czas dostawy (dni) + zapas bezpieczeństwa
popyt 40 szt./dzień, czas dostawy 5 dni, ZB 60 szt.
ROP = 40 × 5 + 60 = 260 szt.</pre>
<h4>System przeglądu okresowego (stały cykl)</h4>
<ul>
<li>Stan sprawdza się w stałych odstępach (np. co 2 tygodnie), a wielkość zamówienia jest <b>zmienna</b>.</li>
<li>Zamawia się tyle, by uzupełnić zapas do <b>poziomu maksymalnego</b>.</li>
</ul>
<pre>wielkość zamówienia = zapas maksymalny - zapas w chwili przeglądu - zamówienia w drodze
zapas maksymalny 800, stan 350, w drodze 100
zamówienie = 800 - 350 - 100 = 350 szt.

zapas maksymalny = popyt dzienny × (cykl przeglądu + czas dostawy) + ZB</pre>
<div class="tw"><table><tr><th></th><th>Przegląd ciągły</th><th>Przegląd okresowy</th></tr>
<tr><td>wielkość zamówienia</td><td>stała</td><td>zmienna</td></tr>
<tr><td>termin zamówienia</td><td>zmienny</td><td>stały</td></tr>
<tr><td>zapas bezpieczeństwa</td><td>niższy</td><td>wyższy (chroni cykl + czas dostawy)</td></tr>
<tr><td>zastosowanie</td><td>towary drogie, grupa A</td><td>wiele pozycji od jednego dostawcy, grupa C</td></tr></table></div>
<h4>Zapas bezpieczeństwa</h4>
<pre>ZB = ω × σ × √T
ω - współczynnik bezpieczeństwa (poziom obsługi)
σ - odchylenie standardowe popytu dziennego
T - czas dostawy w dniach

poziom obsługi 95% → ω = 1,65
σ = 10 szt., T = 4 dni
ZB = 1,65 × 10 × √4 = 1,65 × 10 × 2 = 33 szt.</pre>
<div class="tw"><table><tr><th>Poziom obsługi</th><th>ω</th></tr>
<tr><td>90%</td><td>1,28</td></tr><tr><td>95%</td><td>1,65</td></tr><tr><td>99%</td><td>2,33</td></tr></table></div>
<div class="tip">Podniesienie poziomu obsługi z 95% do 99% zwiększa zapas bezpieczeństwa o ok. 40%. Wysoki poziom obsługi jest kosztowny.</div>` },
        { tytul: "Ekonomiczna wielkość zamówienia i koszty", tresc: `<h4>Koszty związane z zapasami</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Przykłady</th><th>Zależność od wielkości zamówienia</th></tr>
<tr><td>koszty uzupełniania (zamawiania)</td><td>obsługa zamówienia, transport, przyjęcie, kontrola</td><td>maleją przy większych zamówieniach (mniej zamówień)</td></tr>
<tr><td>koszty utrzymania</td><td>zamrożony kapitał, magazynowanie, ubezpieczenie, ubytki, starzenie</td><td>rosną przy większych zamówieniach (większy zapas średni)</td></tr>
<tr><td>koszty wyczerpania</td><td>utracona sprzedaż, przestoje, kary</td><td>rosną przy zbyt małym zapasie</td></tr></table></div>
<h4>Wzór Wilsona (EOQ)</h4>
<pre>EOQ = √(2 × D × Kz ÷ Ku)
D  - roczny popyt (szt.)
Kz - koszt jednego zamówienia (zł)
Ku - roczny koszt utrzymania 1 szt. (zł)

D = 4 000 szt., Kz = 100 zł, Ku = 2 zł
EOQ = √(2 × 4 000 × 100 ÷ 2) = √400 000 ≈ 632 szt.

liczba zamówień = 4 000 ÷ 632 ≈ 6,3 w roku
cykl = 365 ÷ 6,3 ≈ 58 dni</pre>
<h4>Koszt całkowity</h4>
<pre>K = (D ÷ Q) × Kz + (Q ÷ 2) × Ku
dla Q = 632: (4 000 ÷ 632) × 100 + (632 ÷ 2) × 2
            ≈ 632,9 + 632 ≈ 1 265 zł
dla Q = 1 000: 400 + 1 000 = 1 400 zł
dla Q = 400:   1 000 + 400 = 1 400 zł</pre>
<p>W punkcie EOQ <b>koszty zamawiania równają się kosztom utrzymania</b>, a koszt całkowity jest najniższy.</p>
<h4>Koszt utrzymania jako procent ceny</h4>
<pre>cena 10 zł, roczny koszt utrzymania 20% wartości
Ku = 10 × 20% = 2 zł/szt./rok</pre>
<h4>Ograniczenia modelu</h4>
<ul>
<li>zakłada stały, znany popyt i stały czas dostawy;</li>
<li>pomija rabaty ilościowe (przy rabatach sprawdza się koszt całkowity z ceną);</li>
<li>wynik trzeba dopasować do opakowań zbiorczych i palet (np. zaokrąglić do pełnych kartonów).</li>
</ul>
<pre>Wpływ zmian:
popyt × 4  → EOQ × 2 (pierwiastek)
Kz rośnie  → EOQ rośnie
Ku rośnie  → EOQ maleje</pre>
<div class="tip">Wzór ma pod pierwiastkiem roczny popyt i roczny koszt utrzymania. Jeśli zadanie podaje popyt miesięczny, najpierw przelicz na rok.</div>` },
        { tytul: "Analiza ABC i wskaźniki zapasów", tresc: `<h4>Analiza ABC krok po kroku</h4>
<ol>
<li>Oblicz roczną wartość zużycia każdej pozycji (ilość × cena).</li>
<li>Uszereguj pozycje malejąco.</li>
<li>Oblicz udział procentowy i udział skumulowany.</li>
<li>Przypisz grupy według progów (np. A do 80%, B 80-95%, C 95-100%; progi podaje zadanie).</li>
</ol>
<div class="tw"><table><tr><th>Towar</th><th>Wartość (zł)</th><th>Udział</th><th>Skumulowany</th><th>Grupa</th></tr>
<tr><td>T1</td><td>48 000</td><td>48%</td><td>48%</td><td>A</td></tr>
<tr><td>T2</td><td>22 000</td><td>22%</td><td>70%</td><td>A</td></tr>
<tr><td>T3</td><td>12 000</td><td>12%</td><td>82%</td><td>B</td></tr>
<tr><td>T4</td><td>9 000</td><td>9%</td><td>91%</td><td>B</td></tr>
<tr><td>T5</td><td>5 000</td><td>5%</td><td>96%</td><td>C</td></tr>
<tr><td>T6</td><td>4 000</td><td>4%</td><td>100%</td><td>C</td></tr></table></div>
<p>Grupę A kontroluje się najdokładniej (przegląd ciągły, częste dostawy, dokładne prognozy), grupę C najprościej.</p>
<h4>Analiza XYZ</h4>
<p>Dzieli towary według <b>regularności popytu</b>, mierzonej współczynnikiem zmienności (odchylenie standardowe ÷ średnia): X stały popyt, Y wahania (np. sezonowe), Z nieregularny.</p>
<h4>Wskaźniki zapasów</h4>
<pre>zapas średni = (zapas początkowy + zapas końcowy) ÷ 2
rotacja w razach = sprzedaż (zużycie) ÷ zapas średni
rotacja w dniach = zapas średni ÷ sprzedaż × liczba dni okresu
pokrycie zapasem (dni) = zapas bieżący ÷ średnie dzienne zużycie

zapas pocz. 12 000 zł, końc. 8 000 zł → średni 10 000 zł
sprzedaż w kwartale (90 dni) 45 000 zł
rotacja = 45 000 ÷ 10 000 = 4,5 raza
rotacja w dniach = 10 000 ÷ 45 000 × 90 = 20 dni</pre>
<h4>Inne miary</h4>
<ul>
<li><b>Poziom obsługi</b> (fill rate) = ilość wydana na czas ÷ ilość zamówiona × 100%.</li>
<li><b>Udział zapasów niechodliwych</b> = wartość zapasów bez ruchu (np. ponad 180 dni) ÷ wartość zapasów × 100%.</li>
<li><b>Koszt utrzymania zapasu</b> = zapas średni × stopa kosztu utrzymania.</li>
</ul>
<div class="tip">Wyższa rotacja w razach i krótsza rotacja w dniach oznaczają szybszy obrót zapasem i mniej zamrożonego kapitału.</div>` }
      ],
      pytania: [
        Q("Popyt dzienny 30 szt., czas dostawy 6 dni, zapas bezpieczeństwa 40 szt. Punkt ponownego zamówienia wynosi", "220 szt.", "180 szt.", "76 szt.", "260 szt.", "30 × 6 + 40."),
        Q("W systemie przeglądu okresowego", "termin zamówienia jest stały, a wielkość zmienna", "wielkość zamówienia jest stała, a termin zmienny", "nie stosuje się zapasu maksymalnego", "zamawia się codziennie tę samą ilość", "Zamawia się do poziomu maksymalnego."),
        Q("Zapas maksymalny 600 szt., stan przy przeglądzie 220 szt., w drodze 80 szt. Należy zamówić", "300 szt.", "380 szt.", "460 szt.", "520 szt.", "600 - 220 - 80."),
        Q("Odchylenie standardowe popytu dziennego 8 szt., czas dostawy 9 dni, ω = 1,65. Zapas bezpieczeństwa wynosi około", "40 szt.", "119 szt.", "24 szt.", "13 szt.", "1,65 × 8 × 3 = 39,6."),
        Q("Roczny popyt 1 800 szt., koszt zamówienia 50 zł, roczny koszt utrzymania 1 szt. 4 zł. EOQ wynosi", "212 szt.", "150 szt.", "450 szt.", "300 szt.", "√(2 × 1 800 × 50 ÷ 4) = √45 000 ≈ 212."),
        Q("W punkcie ekonomicznej wielkości zamówienia", "roczne koszty zamawiania równają się rocznym kosztom utrzymania", "koszty utrzymania są równe zero", "koszty zamawiania są najwyższe", "zapas średni jest równy rocznemu popytowi", "Koszt całkowity jest wtedy minimalny."),
        Q("W analizie ABC grupę A stanowią pozycje, które", "mają największy udział w wartości obrotu", "są najtańsze w zakupie", "mają nieregularny popyt", "zajmują najwięcej miejsca", "Zwykle ok. 20% pozycji daje ok. 80% wartości."),
        Q("Zapas średni 15 000 zł, sprzedaż roczna 180 000 zł. Rotacja zapasu w dniach (rok 360 dni) wynosi", "30 dni", "12 dni", "60 dni", "15 dni", "15 000 ÷ 180 000 × 360.")
      ]
    },
    {
      id: "bezpieczenstwo", tytul: "Warunki, BHP i opakowania", opis: "Zapewnisz właściwe warunki przechowywania, bezpieczną pracę w magazynie i poprawne postępowanie z opakowaniami.",
      lekcje: [
        { tytul: "Warunki przechowywania i towary niebezpieczne", tresc: `<h4>Czynniki przechowywania</h4>
<ul>
<li><b>temperatura</b>: produkty chłodzone zwykle 0 do +6°C (mięso, nabiał), mrożonki co najmniej -18°C;</li>
<li><b>wilgotność względna</b>: niska dla papieru, tekstyliów, cukru, mąki, elektroniki (ryzyko pleśni, zbrylania, korozji); wyższa dla świeżych owoców i warzyw (ryzyko więdnięcia);</li>
<li><b>światło</b>: ochrona przed promieniami słonecznymi dla leków, kosmetyków, tworzyw;</li>
<li><b>wentylacja</b> i ochrona przed szkodnikami (deratyzacja, dezynsekcja).</li>
</ul>
<p>W magazynie żywności prowadzi się <b>rejestr temperatur</b> i stosuje zasady systemu <b>HACCP</b> (analiza zagrożeń i krytyczne punkty kontroli). Przerwanie łańcucha chłodniczego może wymagać wycofania partii.</p>
<h4>Piktogramy CLP (GHS)</h4>
<div class="tw"><table><tr><th>Piktogram</th><th>Zagrożenie</th></tr>
<tr><td>wybuchająca bomba (GHS01)</td><td>materiały wybuchowe</td></tr>
<tr><td>płomień (GHS02)</td><td>substancje łatwopalne</td></tr>
<tr><td>płomień nad okręgiem (GHS03)</td><td>substancje utleniające</td></tr>
<tr><td>butla gazowa (GHS04)</td><td>gazy pod ciśnieniem</td></tr>
<tr><td>korozja (GHS05)</td><td>substancje żrące</td></tr>
<tr><td>czaszka i skrzyżowane piszczele (GHS06)</td><td>toksyczność ostra</td></tr>
<tr><td>wykrzyknik (GHS07)</td><td>działanie drażniące, szkodliwe</td></tr>
<tr><td>sylwetka człowieka z gwiazdą (GHS08)</td><td>poważne zagrożenie dla zdrowia (np. rakotwórcze)</td></tr>
<tr><td>martwe drzewo i ryba (GHS09)</td><td>zagrożenie dla środowiska wodnego</td></tr></table></div>
<p>Etykieta zawiera też hasło ostrzegawcze („Niebezpieczeństwo” lub „Uwaga”), zwroty <b>H</b> (zagrożenia) i <b>P</b> (środki ostrożności).</p>
<h4>Karta charakterystyki (SDS)</h4>
<ul>
<li>Ma <b>16 sekcji</b>; sekcja 7 dotyczy postępowania z substancją i jej <b>magazynowania</b>, sekcja 10 stabilności i reaktywności (niezgodne materiały), sekcja 14 informacji o transporcie.</li>
<li>Dostawca przekazuje ją przy pierwszej dostawie; musi być dostępna dla pracowników w języku polskim.</li>
</ul>
<h4>Zasady składowania chemii</h4>
<ul>
<li>oddzielnie substancje utleniające i łatwopalne, kwasy i zasady;</li>
<li>wanny wychwytowe pod pojemnikami z cieczami;</li>
<li>wentylacja, zakaz palenia, sorbenty i środki ochrony indywidualnej w pobliżu.</li>
</ul>
<div class="tip">Informację o tym, z czym substancji nie wolno składować razem, znajdziesz w sekcji 7 i 10 karty charakterystyki.</div>` },
        { tytul: "BHP i ochrona przeciwpożarowa w magazynie", tresc: `<h4>Praca z wózkiem widłowym</h4>
<ul>
<li>Przed zmianą: kontrola codzienna (hamulce, sygnał dźwiękowy, światła, widły, łańcuchy, wycieki).</li>
<li>Jazda z ładunkiem opuszczonym nisko, maszt odchylony do tyłu; przy ładunku zasłaniającym widok jazda tyłem.</li>
<li>Na pochylniach ładunek zawsze od strony <b>wzniesienia</b>: w górę jazda przodem, w dół tyłem.</li>
<li>Zakaz przewożenia i podnoszenia osób na widłach.</li>
<li><b>Udźwig</b> maleje, gdy środek ciężkości ładunku jest dalej od masztu lub ładunek podnosi się wyżej (diagram udźwigu na tabliczce).</li>
</ul>
<h4>Regały (PN-EN 15635)</h4>
<ul>
<li>Bieżące kontrole przeprowadza osoba odpowiedzialna za bezpieczeństwo urządzeń do składowania; <b>inspekcję ekspercką</b> co najmniej raz na <b>12 miesięcy</b>.</li>
<li>Klasyfikacja uszkodzeń:</li>
</ul>
<div class="tw"><table><tr><th>Kolor</th><th>Znaczenie</th></tr>
<tr><td>zielony</td><td>uszkodzenie niewielkie, monitorować</td></tr>
<tr><td>pomarańczowy</td><td>naprawić w ciągu 4 tygodni; po rozładunku nie ładować ponownie</td></tr>
<tr><td>czerwony</td><td>natychmiast rozładować i wyłączyć z użytkowania</td></tr></table></div>
<h4>Ręczne prace transportowe</h4>
<div class="tw"><table><tr><th></th><th>Praca stała</th><th>Praca dorywcza</th></tr>
<tr><td>mężczyźni</td><td>30 kg</td><td>50 kg</td></tr>
<tr><td>kobiety</td><td>12 kg</td><td>20 kg</td></tr></table></div>
<p>Podnosi się z ugiętymi nogami i wyprostowanymi plecami, ładunek blisko ciała, bez skręcania tułowia. Kobiety w ciąży i młodociani mają niższe limity.</p>
<h4>Ochrona przeciwpożarowa</h4>
<ul>
<li>Co najmniej 2 kg (lub 3 dm³) środka gaśniczego na każde <b>100 m²</b> powierzchni strefy pożarowej.</li>
<li>Odległość z dowolnego miejsca do najbliższej gaśnicy nie większa niż <b>30 m</b>.</li>
<li>Drogi ewakuacyjne oznakowane znakami zielonymi, niezastawione.</li>
</ul>
<div class="tw"><table><tr><th>Grupa pożaru</th><th>Co się pali</th></tr>
<tr><td>A</td><td>ciała stałe: drewno, papier, tekstylia</td></tr>
<tr><td>B</td><td>ciecze i topiące się ciała stałe: benzyna, oleje, tworzywa</td></tr>
<tr><td>C</td><td>gazy: propan, metan</td></tr>
<tr><td>D</td><td>metale: magnez, sód</td></tr>
<tr><td>F</td><td>tłuszcze i oleje w urządzeniach kuchennych</td></tr></table></div>
<div class="tip">Urządzeń pod napięciem nie gasi się wodą. Gaśnica proszkowa ABC lub śniegowa (CO2) nadaje się do instalacji elektrycznych.</div>` },
        { tytul: "Opakowania i gospodarka odpadami", tresc: `<h4>Funkcje i poziomy opakowań</h4>
<ul>
<li>Funkcje: <b>ochronna</b>, <b>logistyczna</b> (ułatwia składowanie i transport), <b>informacyjna</b>, <b>marketingowa</b>.</li>
<li>Poziomy: <b>jednostkowe</b> (sprzedażowe, trafia do klienta), <b>zbiorcze</b> (karton z kilkoma opakowaniami), <b>transportowe</b> (paleta z folią, skrzynia, kontener).</li>
<li>Opakowania <b>zwrotne</b> (palety, skrzynki) wracają do obiegu; opakowania jednorazowe idą do odzysku.</li>
</ul>
<h4>Oznaczenia materiałowe</h4>
<div class="tw"><table><tr><th>Kod</th><th>Materiał</th></tr>
<tr><td>1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS, 7 O</td><td>tworzywa sztuczne</td></tr>
<tr><td>20 PAP</td><td>tektura falista</td></tr>
<tr><td>21 PAP</td><td>tektura lita</td></tr>
<tr><td>22 PAP</td><td>papier</td></tr>
<tr><td>40 FE / 41 ALU</td><td>stal / aluminium</td></tr>
<tr><td>50 FOR</td><td>drewno</td></tr>
<tr><td>70-72 GL</td><td>szkło</td></tr></table></div>
<p><b>Pętla Möbiusa</b> (trzy strzałki) oznacza opakowanie nadające się do recyklingu. Znak „Zielony Punkt” informuje tylko, że producent wniósł opłatę na system odzysku, a nie że opakowanie jest z recyklingu.</p>
<h4>Palety w obrocie</h4>
<ul>
<li>Palety EUR wymienia się zwykle w systemie <b>1:1</b> przy dostawie; gdy brak palet na wymianę, wystawia się <b>kwit paletowy</b>.</li>
<li>Palety uszkodzone (złamana deska, brak klocka, nieczytelne oznaczenia) wyłącza się z obrotu do naprawy.</li>
</ul>
<h4>Odpady w magazynie</h4>
<ul>
<li>Firma wytwarzająca odpady prowadzi ewidencję w systemie <b>BDO</b>: kartę ewidencji odpadów i elektroniczną <b>kartę przekazania odpadów (KPO)</b> przy przekazaniu firmie odbierającej.</li>
<li>Odpady przekazuje się tylko podmiotom wpisanym do rejestru BDO z odpowiednim zezwoleniem.</li>
<li>Kody odpadów mają 6 cyfr, np. <code>15 01 01</code> opakowania z papieru i tektury, <code>15 01 02</code> z tworzyw sztucznych, <code>15 01 03</code> z drewna, <code>15 01 07</code> ze szkła.</li>
</ul>
<h4>Hierarchia postępowania z odpadami</h4>
<p>zapobieganie → przygotowanie do ponownego użycia → recykling → inne metody odzysku (np. energii) → unieszkodliwianie (np. składowanie).</p>
<pre>Wskaźnik recyklingu opakowań w magazynie:
odpady przekazane do recyklingu 3,6 t ÷ wszystkie odpady 4,0 t × 100% = 90%</pre>
<div class="tip">Belowanie (prasowanie) folii i kartonów zmniejsza objętość odpadów i koszt odbioru. Folia stretch to zwykle LDPE (kod 4).</div>` }
      ],
      pytania: [
        Q("Mrożonki należy przechowywać w temperaturze", "-18°C lub niższej", "od 0 do +4°C", "od -5 do 0°C", "od +8 do +12°C", "Przerwanie łańcucha chłodniczego grozi wycofaniem partii."),
        Q("Piktogram przedstawiający płomień nad okręgiem oznacza substancje", "utleniające", "łatwopalne", "wybuchowe", "żrące", "Sam płomień to substancje łatwopalne."),
        Q("Informacje o warunkach magazynowania substancji niebezpiecznej zawiera sekcja karty charakterystyki", "7", "1", "14", "16", "Sekcja 14: informacje o transporcie."),
        Q("Na pochylni wózek widłowy z ładunkiem zjeżdża w dół", "tyłem, z ładunkiem od strony wzniesienia", "przodem, z ładunkiem skierowanym w dół", "z ładunkiem podniesionym wysoko", "bokiem", "Ładunek zawsze od strony wzniesienia."),
        Q("Uszkodzenie regału oznaczone kolorem czerwonym wymaga", "natychmiastowego rozładowania i wyłączenia z użytkowania", "naprawy w ciągu 4 tygodni", "tylko monitorowania", "obniżenia obciążenia o 10%", "Pomarańczowe: naprawa w 4 tygodnie."),
        Q("Dopuszczalna masa ładunku przenoszonego ręcznie przez kobietę przy pracy stałej wynosi", "12 kg", "20 kg", "30 kg", "25 kg", "Przy pracy dorywczej 20 kg."),
        Q("Pożar oleju jadalnego w urządzeniu kuchennym to pożar grupy", "F", "A", "B", "D", "Grupa D to metale."),
        Q("Dokumentem potwierdzającym przekazanie odpadów firmie odbierającej jest", "karta przekazania odpadów w systemie BDO", "dokument WZ", "list przewozowy CMR", "faktura korygująca", "KPO wystawia się elektronicznie w BDO.")
      ]
    }
  ]);

  pod("SPL.04", [
    {
      id: "ladunek", tytul: "Ładunek i środek transportu", opis: "Dobierzesz pojazd do ładunku, rozmieścisz palety, zabezpieczysz ładunek i obsłużysz przewozy specjalne.",
      lekcje: [
        { tytul: "Dobór pojazdu i rozmieszczenie palet", tresc: `<h4>Typowe pojazdy</h4>
<div class="tw"><table><tr><th>Pojazd</th><th>Przestrzeń ładunkowa (ok.)</th><th>Palety EUR</th></tr>
<tr><td>bus do 3,5 t DMC</td><td>4,2 × 2,1 m</td><td>8-10</td></tr>
<tr><td>solówka (np. 12 t)</td><td>7,2 × 2,45 m</td><td>18</td></tr>
<tr><td>naczepa standard</td><td>13,6 × 2,45 × 2,7 m</td><td>33</td></tr>
<tr><td>naczepa typu mega</td><td>13,6 × 2,45 × ok. 3,0 m</td><td>33 (wyższe ładunki)</td></tr>
<tr><td>zestaw tandem (solo + przyczepa)</td><td>2 × 7,7 m</td><td>38</td></tr></table></div>
<pre>Naczepa 13,6 m, palety EUR 1,2 × 0,8 m ustawione poprzecznie po 3:
3 × 0,8 m = 2,4 m szerokości
13,6 ÷ 1,2 = 11 rzędów → 11 × 3 = 33 palety
Palety przemysłowe 1,2 × 1,0 m: 2 w rzędzie, 13 rzędów = 26 palet</pre>
<h4>Metry ładowne (LDM)</h4>
<pre>1 LDM = 1 metr długości naczepy na całej szerokości (2,4 m)
paleta EUR = 1,2 × 0,8 ÷ 2,4 = 0,4 LDM
paleta przemysłowa = 1,2 × 1,0 ÷ 2,4 = 0,5 LDM
14 palet EUR = 5,6 LDM</pre>
<h4>Wskaźniki wykorzystania</h4>
<pre>26 palet × 650 kg = 16 900 kg, ładowność 24 000 kg, 33 miejsca
wykorzystanie ładowności = 16 900 ÷ 24 000 × 100% = 70,4%
wykorzystanie powierzchni = 26 ÷ 33 × 100% = 78,8%</pre>
<h4>Wymiary i masy dopuszczalne</h4>
<div class="tw"><table><tr><th>Parametr</th><th>Wartość</th></tr>
<tr><td>szerokość</td><td>2,55 m (pojazdy chłodnie 2,60 m)</td></tr>
<tr><td>wysokość</td><td>4,0 m</td></tr>
<tr><td>długość: pojazd pojedynczy / z naczepą / z przyczepą</td><td>12 m / 16,5 m / 18,75 m</td></tr>
<tr><td>dopuszczalna masa całkowita zestawu 5-osiowego</td><td>40 t (44 t w transporcie kombinowanym z kontenerem 40')</td></tr>
<tr><td>nacisk pojedynczej osi napędowej</td><td>11,5 t</td></tr></table></div>
<h4>Zasady doboru</h4>
<ul>
<li>Najpierw sprawdź <b>ograniczenie wiążące</b>: masę (ładunki ciężkie, np. napoje, stal) albo objętość i liczbę palet (ładunki lekkie, np. styropian).</li>
<li>Dobierz zabudowę: plandeka (firana) ułatwia załadunek bokiem, izoterma i chłodnia dla żywności, kontenerowa, cysterna, wywrotka.</li>
<li>Uwzględnij możliwość piętrzenia palet i rozkład masy na osie.</li>
</ul>
<div class="tip">Ładunek 33 palet po 800 kg (26,4 t) przekracza typową ładowność naczepy ok. 24 t. W takim zadaniu ograniczeniem jest masa, a nie liczba miejsc.</div>` },
        { tytul: "Mocowanie ładunku", tresc: `<h4>Siły działające na ładunek (PN-EN 12195-1)</h4>
<div class="tw"><table><tr><th>Kierunek</th><th>Siła bezwładności (część ciężaru ładunku)</th></tr>
<tr><td>do przodu (hamowanie)</td><td>0,8</td></tr>
<tr><td>do tyłu</td><td>0,5</td></tr>
<tr><td>na boki</td><td>0,5</td></tr></table></div>
<pre>Ładunek 10 t: przy hamowaniu musi być utrzymany
ładunek o sile odpowiadającej 0,8 × 10 t = 8 t
tarcie przy macie antypoślizgowej (μ ≈ 0,6) przenosi ok. 6 t
brakujące ok. 2 t zapewnia blokowanie lub pasy
(obliczenie uproszczone)</pre>
<h4>Metody mocowania</h4>
<ul>
<li><b>Blokowanie</b> (mocowanie kształtowe): ładunek dosunięty do ściany czołowej, burt, słupków; luki wypełnione belkami rozporowymi, poduszkami powietrznymi, paletami pustymi.</li>
<li><b>Mocowanie przez docisk</b> (pasy przerzucone przez ładunek): zwiększa nacisk na podłogę, a więc tarcie. Im większy kąt pasa do podłogi (bliżej 90°), tym lepiej.</li>
<li><b>Mocowanie bezpośrednie</b> (odciągi): pas łączy ładunek z punktami mocowania pojazdu; stosowane dla maszyn i ładunków ciężkich.</li>
<li><b>Maty antypoślizgowe</b>: zwiększają współczynnik tarcia, zmniejszają liczbę potrzebnych pasów.</li>
</ul>
<h4>Oznaczenia pasa (etykieta)</h4>
<ul>
<li><b>LC</b> (zdolność mocowania) w daN: dopuszczalna siła w pasie przy mocowaniu bezpośrednim; w pętli 2 × LC.</li>
<li><b>STF</b> (standardowa siła napięcia) w daN: napięcie uzyskane napinaczem, ważne przy mocowaniu przez docisk.</li>
<li>Kolor etykiety: <b>niebieski</b> poliester (PES), zielony poliamid (PA), brązowy polipropylen (PP).</li>
</ul>
<p>Pasa z nieczytelną etykietą, przeciętego lub ze zniszczonym napinaczem nie wolno używać.</p>
<h4>Odpowiedzialność</h4>
<ul>
<li>Za załadunek odpowiada zwykle <b>nadawca</b> (gdy tak przewiduje umowa lub przepisy), za bezpieczeństwo przewozu i sprawdzenie mocowania <b>kierowca</b> i przewoźnik.</li>
<li>Inspekcja Transportu Drogowego może nałożyć karę za niewłaściwie zabezpieczony ładunek i zakazać dalszej jazdy.</li>
<li>Naczepa z ścianą czołową o odpowiedniej wytrzymałości (np. wg PN-EN 12642 XL) pozwala ograniczyć liczbę pasów, jeśli ładunek do niej przylega.</li>
</ul>
<div class="tip">Ładunek dosunięty do ściany czołowej bez luk to podstawa: każda luka pozwala ładunkowi nabrać prędkości i uderzyć w przegrodę z dużą siłą.</div>` },
        { tytul: "Przewozy w temperaturze kontrolowanej i ponadnormatywne", tresc: `<h4>Umowa ATP</h4>
<p>Dotyczy międzynarodowego przewozu szybko psujących się artykułów żywnościowych. Pojazd musi mieć <b>świadectwo ATP</b> (pierwsze na 6 lat, potem odnawiane po badaniach co 3 lata) i oznaczenie klasy na nadwoziu.</p>
<div class="tw"><table><tr><th>Oznaczenie</th><th>Pojazd</th></tr>
<tr><td>IN / IR</td><td>izoterma normalna / wzmocniona (bez agregatu)</td></tr>
<tr><td>FRA</td><td>chłodnia z agregatem, klasa A: od +12°C do 0°C</td></tr>
<tr><td>FRB</td><td>klasa B: od +12°C do -10°C</td></tr>
<tr><td>FRC</td><td>klasa C: od +12°C do -20°C</td></tr></table></div>
<h4>Zasady przewozu chłodniczego</h4>
<ul>
<li>Agregat <b>utrzymuje</b> temperaturę, a nie schładza towaru. Ładunek musi mieć właściwą temperaturę w chwili załadunku.</li>
<li>Przed załadunkiem przestrzeń schładza się do zadanej temperatury (pre-cooling).</li>
<li>Palety nie mogą zasłaniać nawiewu ani dotykać ścian; potrzebna jest cyrkulacja powietrza.</li>
<li>Temperaturę rejestruje <b>termograf</b>; wydruk dołącza się do dokumentów przy rozładunku.</li>
<li>Drzwi otwiera się na krótko, najlepiej przy rampie z uszczelnieniem (śluzą).</li>
</ul>
<pre>Typowe temperatury przewozu:
mrożonki       -18°C lub niżej
lody           -20°C lub niżej
mięso świeże   0 do +4°C (zależnie od rodzaju)
nabiał         do +6°C</pre>
<h4>Ładunki ponadnormatywne</h4>
<ul>
<li>Pojazd przekraczający dopuszczalne wymiary, masę lub naciski osi to <b>pojazd nienormatywny</b>. Wymaga <b>zezwolenia na przejazd</b> (kategorie I-VII, zależne od przekroczonych parametrów).</li>
<li>Przy dużych gabarytach wymagany jest <b>pilot</b> (pojazd pilotujący), a przejazd odbywa się wyznaczoną trasą, często w określonych godzinach.</li>
<li>Planując trasę sprawdza się wiadukty, mosty (nośność), ronda, linie energetyczne.</li>
<li>Pojazd oznacza się tablicami ostrzegawczymi i światłami błyskowymi.</li>
</ul>
<h4>Inne przewozy szczególne</h4>
<p>Żywe zwierzęta (świadectwa weterynaryjne, czas przewozu i przerwy), ładunki sypkie (silosy, wywrotki), ładunki płynne (cysterny, ADR), ładunki o wysokiej wartości (ochrona, monitoring GPS).</p>
<div class="tip">Izoterma nie ma agregatu. Jeśli w zadaniu trzeba utrzymać -18°C na długiej trasie, potrzebna jest chłodnia klasy C (FRC).</div>` }
      ],
      pytania: [
        Q("Na standardowej naczepie o długości 13,6 m mieści się w jednej warstwie", "33 palety EUR", "26 palet EUR", "24 palety EUR", "40 palet EUR", "Palet przemysłowych 1200 × 1000 mieści się 26."),
        Q("Jedna paleta EUR zajmuje", "0,4 metra ładownego", "0,5 metra ładownego", "1,2 metra ładownego", "0,8 metra ładownego", "1,2 × 0,8 ÷ 2,4 = 0,4 LDM."),
        Q("Ładunek 15 600 kg przewożony pojazdem o ładowności 24 000 kg daje wykorzystanie ładowności", "65%", "54%", "154%", "35%", "15 600 ÷ 24 000 × 100%."),
        Q("Dopuszczalna szerokość pojazdu ciężarowego (poza chłodniami) wynosi", "2,55 m", "2,40 m", "2,60 m", "3,00 m", "Chłodnie: 2,60 m."),
        Q("Według PN-EN 12195-1 mocowanie ładunku musi wytrzymać do przodu siłę równą", "0,8 ciężaru ładunku", "0,5 ciężaru ładunku", "1,5 ciężaru ładunku", "0,2 ciężaru ładunku", "Do tyłu i na boki 0,5."),
        Q("Parametr pasa transportowego istotny przy mocowaniu przez docisk to", "STF (standardowa siła napięcia)", "LC w pętli", "długość taśmy", "kolor etykiety", "Docisk zależy od napięcia pasa."),
        Q("Pojazd chłodnia klasy C (FRC) pozwala utrzymać temperaturę w zakresie", "od +12°C do -20°C", "od +12°C do 0°C", "od +12°C do -10°C", "tylko powyżej 0°C", "FRA: do 0°C, FRB: do -10°C."),
        Q("Przejazd pojazdu przekraczającego dopuszczalne wymiary wymaga", "zezwolenia na przejazd pojazdu nienormatywnego", "tylko zgłoszenia na policji", "certyfikatu ATP", "karnetu TIR", "Często także pilota.")
      ]
    },
    {
      id: "kierowca", tytul: "Czas pracy kierowcy i trasa", opis: "Zaplanujesz trasę zgodnie z normami czasu jazdy i odpoczynku oraz obsłużysz tachograf.",
      lekcje: [
        { tytul: "Normy czasu jazdy i odpoczynku", tresc: `<h4>Czas jazdy (rozporządzenie 561/2006)</h4>
<ul>
<li>dzienny: <b>9 h</b>, dwa razy w tygodniu do <b>10 h</b>;</li>
<li>tygodniowy: maks. <b>56 h</b>; w dwóch kolejnych tygodniach maks. <b>90 h</b>;</li>
<li>przerwa: <b>45 min</b> po 4,5 h jazdy; można ją podzielić na 15 min, a potem 30 min (kolejność obowiązkowa).</li>
</ul>
<h4>Odpoczynek dobowy</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Długość</th></tr>
<tr><td>regularny</td><td>co najmniej 11 h</td></tr>
<tr><td>regularny dzielony</td><td>3 h + 9 h (łącznie 12 h)</td></tr>
<tr><td>skrócony</td><td>co najmniej 9 h, maks. 3 razy między odpoczynkami tygodniowymi</td></tr></table></div>
<p>Odpoczynek dobowy musi zakończyć się w ciągu <b>24 h</b> od zakończenia poprzedniego odpoczynku. Przy załodze dwuosobowej każdy kierowca musi mieć co najmniej 9 h odpoczynku w ciągu 30 h.</p>
<h4>Odpoczynek tygodniowy</h4>
<ul>
<li>najpóźniej po 6 okresach 24-godzinnych od poprzedniego odpoczynku tygodniowego;</li>
<li>regularny co najmniej <b>45 h</b>, skrócony co najmniej <b>24 h</b>;</li>
<li>w dwóch kolejnych tygodniach: dwa regularne albo jeden regularny i jeden skrócony;</li>
<li>skrócenie trzeba zrekompensować odpoczynkiem en bloc przed końcem 3. tygodnia po danym tygodniu;</li>
<li>regularnego odpoczynku tygodniowego <b>nie można spędzać w kabinie</b>; przewoźnik zapewnia zakwaterowanie;</li>
<li>przewoźnik organizuje powrót kierowcy do bazy lub miejsca zamieszkania co 4 tygodnie (Pakiet Mobilności).</li>
</ul>
<h4>Polskie przepisy o czasie pracy kierowców</h4>
<ul>
<li>czas pracy (jazda + inne czynności, np. załadunek): 8 h na dobę, przeciętnie 40 h w tygodniu; w danym tygodniu do 60 h, przeciętnie do 48 h;</li>
<li>przerwa w pracy: <b>30 min</b> przy pracy 6-9 h, <b>45 min</b> przy pracy powyżej 9 h;</li>
<li>gdy praca obejmuje porę nocną, czas pracy w dobie nie może przekroczyć 10 h.</li>
</ul>
<h4>Zakazy ruchu w Polsce (pojazdy powyżej 12 t)</h4>
<ul>
<li>dni ustawowo wolne od pracy: 8:00-22:00;</li>
<li>dzień przed takim dniem: 18:00-22:00;</li>
<li>wakacje (od ostatniego piątku czerwca do ostatniej niedzieli sierpnia): piątki 18:00-22:00, soboty 8:00-14:00, niedziele 8:00-22:00.</li>
</ul>
<div class="tip">Przerwa 45 min musi nastąpić najpóźniej po 4,5 h jazdy łącznie. Przerwa 30 + 15 min w tej kolejności nie spełnia normy.</div>` },
        { tytul: "Tachograf i dokumentacja", tresc: `<h4>Rodzaje tachografów</h4>
<ul>
<li><b>analogowy</b>: zapis na wykresówce (tarczy);</li>
<li><b>cyfrowy</b>: zapis w pamięci urządzenia i na karcie kierowcy;</li>
<li><b>inteligentny</b> (drugiej generacji): automatycznie rejestruje położenie z GNSS, przekraczanie granic, operacje załadunku i rozładunku; umożliwia zdalny odczyt podczas kontroli. Pojazdy w transporcie międzynarodowym musiały zostać w niego wyposażone w latach 2024-2025.</li>
</ul>
<h4>Piktogramy aktywności</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Aktywność</th></tr>
<tr><td>kierownica</td><td>jazda</td></tr>
<tr><td>skrzyżowane młotki</td><td>inna praca (załadunek, obsługa pojazdu)</td></tr>
<tr><td>kwadrat z ukośną kreską</td><td>dyspozycyjność (np. oczekiwanie na załadunek, jazda jako drugi kierowca)</td></tr>
<tr><td>łóżko</td><td>przerwa i odpoczynek</td></tr></table></div>
<h4>Karty tachografowe</h4>
<div class="tw"><table><tr><th>Karta</th><th>Kolor</th><th>Dla kogo</th></tr>
<tr><td>kierowcy</td><td>biała</td><td>kierowca; ważna 5 lat, jedna na osobę</td></tr>
<tr><td>przedsiębiorstwa</td><td>żółta</td><td>przewoźnik: blokowanie i pobieranie danych</td></tr>
<tr><td>warsztatowa</td><td>czerwona</td><td>warsztat: kalibracja, naprawa</td></tr>
<tr><td>kontrolna</td><td>niebieska</td><td>organy kontroli (ITD, policja)</td></tr></table></div>
<h4>Obowiązki</h4>
<ul>
<li>Dane z karty kierowcy pobiera się co najmniej co <b>28 dni</b>, z pamięci tachografu co <b>90 dni</b>.</li>
<li>Podczas kontroli drogowej kierowca okazuje zapisy z bieżącego dnia i <b>poprzednich 56 dni</b>.</li>
<li>Wpisy manualne uzupełniają okresy, gdy kierowca był poza pojazdem (np. urlop, inna praca); okresy bez zapisu przewoźnik dokumentuje.</li>
<li>Przy awarii tachografu kierowca prowadzi zapisy ręczne (np. na wydruku), a urządzenie trzeba naprawić niezwłocznie, najpóźniej w ciągu 7 dni.</li>
<li>Kartę uszkodzoną lub zgubioną zgłasza się w ciągu 7 dni; do czasu otrzymania nowej kierowca może jechać do 15 dni, robiąc wydruki na początku i końcu dnia.</li>
</ul>
<pre>Kontrola zapisów z jednego dnia:
06:00-06:30 inna praca (młotki) - kontrola pojazdu
06:30-11:00 jazda 4 h 30 min
11:00-11:45 przerwa (łóżko)
11:45-16:15 jazda 4 h 30 min
dzienny czas jazdy 9 h - norma spełniona</pre>
<div class="tip">Oczekiwanie na rozładunek, gdy kierowca zna przewidywany czas oczekiwania, to dyspozycyjność, a nie przerwa ani jazda.</div>` },
        { tytul: "Planowanie trasy krok po kroku", tresc: `<h4>Dane</h4>
<pre>trasa 1 100 km, średnia prędkość 70 km/h
łączny czas jazdy = 1 100 ÷ 70 ≈ 15,7 h (15 h 43 min)
wyjazd: dzień 1, godz. 6:00</pre>
<h4>Dzień 1 (wykorzystanie 10 h jazdy)</h4>
<div class="tw"><table><tr><th>Godziny</th><th>Czynność</th><th>Km</th></tr>
<tr><td>6:00-10:30</td><td>jazda 4,5 h</td><td>315</td></tr>
<tr><td>10:30-11:15</td><td>przerwa 45 min</td><td>-</td></tr>
<tr><td>11:15-15:45</td><td>jazda 4,5 h</td><td>315</td></tr>
<tr><td>15:45-16:30</td><td>przerwa 45 min</td><td>-</td></tr>
<tr><td>16:30-17:30</td><td>jazda 1 h (przedłużenie do 10 h)</td><td>70</td></tr>
<tr><td>17:30-4:30</td><td>odpoczynek dobowy 11 h</td><td>-</td></tr></table></div>
<p>Po dniu 1 przejechano 700 km; pozostało 400 km, czyli ok. 5 h 43 min jazdy. Odpoczynek kończy się o 4:30, czyli w ciągu 24 h od rozpoczęcia pracy o 6:00.</p>
<h4>Dzień 2</h4>
<div class="tw"><table><tr><th>Godziny</th><th>Czynność</th><th>Km</th></tr>
<tr><td>6:00-10:30</td><td>jazda 4,5 h</td><td>315</td></tr>
<tr><td>10:30-11:15</td><td>przerwa 45 min</td><td>-</td></tr>
<tr><td>11:15-12:28</td><td>jazda ok. 1 h 13 min</td><td>85</td></tr></table></div>
<p>Przyjazd ok. 12:30 dnia 2. W rzeczywistym planie dolicza się czas załadunku i rozładunku (inna praca), postoje na granicach, zakazy ruchu i rezerwę na korki.</p>
<h4>Lista kontrolna planu</h4>
<ol>
<li>Odległość i średnia prędkość (dla ciężarówki zwykle 60-70 km/h).</li>
<li>Bloki jazdy maks. 4,5 h, przerwy 45 min.</li>
<li>Dzienny limit 9 h (lub 10 h, maks. 2 razy w tygodniu).</li>
<li>Odpoczynek dobowy 11 h (lub skrócony 9 h, maks. 3 razy).</li>
<li>Zakazy ruchu, godziny otwarcia u odbiorcy (okno czasowe).</li>
<li>Opłaty drogowe (w Polsce system <b>e-TOLL</b> dla pojazdów powyżej 3,5 t), promy, tunele.</li>
</ol>
<h4>Załoga podwójna</h4>
<p>Dwóch kierowców może zmieniać się za kierownicą; czas jazdy jednego to dyspozycyjność drugiego. Pozwala przejechać ok. 20 h jazdy w ciągu 30 h z 9 h odpoczynku każdego kierowcy, co skraca czas przewozu, ale podnosi koszt.</p>
<div class="tip">W zadaniach zawsze licz czas jazdy w minutach i rozpisz tabelę godzin. Łatwo wtedy wykazać egzaminatorowi, że każda norma jest spełniona.</div>` }
      ],
      pytania: [
        Q("Dzienny czas jazdy kierowcy może zostać wydłużony do 10 godzin", "nie więcej niż dwa razy w tygodniu", "codziennie", "raz w miesiącu", "trzy razy w tygodniu", "Normalnie 9 h."),
        Q("Maksymalny łączny czas jazdy w dwóch kolejnych tygodniach wynosi", "90 h", "56 h", "112 h", "100 h", "W jednym tygodniu maks. 56 h."),
        Q("Przerwę 45 minut można podzielić na dwie części w kolejności", "najpierw co najmniej 15 min, potem co najmniej 30 min", "najpierw 30 min, potem 15 min", "trzy przerwy po 15 min", "dowolnie", "Odwrotna kolejność nie spełnia normy."),
        Q("Regularny tygodniowy okres odpoczynku wynosi co najmniej", "45 godzin", "24 godziny", "11 godzin", "35 godzin", "Skrócony: co najmniej 24 h."),
        Q("Piktogram skrzyżowanych młotków na tachografie oznacza", "inną pracę", "jazdę", "dyspozycyjność", "odpoczynek", "Np. załadunek, tankowanie, kontrolę pojazdu."),
        Q("Dane z karty kierowcy przewoźnik pobiera co najmniej co", "28 dni", "90 dni", "7 dni", "56 dni", "Z pamięci tachografu co 90 dni."),
        Q("Trasa 560 km przy średniej prędkości 70 km/h wymaga czasu jazdy", "8 h i co najmniej jednej przerwy 45 min", "8 h bez przerw", "7 h i dwóch przerw", "10 h i odpoczynku dobowego", "560 ÷ 70 = 8 h, więc po 4,5 h potrzebna jest przerwa."),
        Q("W Polsce pojazdy o DMC powyżej 12 t nie mogą jeździć w dni ustawowo wolne od pracy w godzinach", "8:00-22:00", "6:00-18:00", "0:00-24:00", "18:00-22:00", "Wyjątki dotyczą m.in. przewozu żywności szybko psującej się.")
      ]
    },
    {
      id: "koszty-transportu", tytul: "Koszty, cena i odpowiedzialność", opis: "Obliczysz koszt i cenę usługi przewozowej oraz rozpatrzysz szkodę zgodnie z CMR i prawem przewozowym.",
      lekcje: [
        { tytul: "Koszt 1 km i kalkulacja ceny", tresc: `<h4>Koszty stałe miesięcznie</h4>
<div class="tw"><table><tr><th>Pozycja</th><th>Kwota</th></tr>
<tr><td>rata leasingu (lub amortyzacja)</td><td>9 000 zł</td></tr>
<tr><td>ubezpieczenia OC, AC, OCP</td><td>1 500 zł</td></tr>
<tr><td>wynagrodzenie kierowcy z kosztami pracodawcy</td><td>8 000 zł</td></tr>
<tr><td>koszty ogólne (biuro, parking, telematyka)</td><td>1 500 zł</td></tr>
<tr><td><b>razem</b></td><td><b>20 000 zł</b></td></tr></table></div>
<pre>przebieg miesięczny 10 000 km
koszt stały na 1 km = 20 000 ÷ 10 000 = 2,00 zł/km</pre>
<h4>Koszty zmienne na 1 km</h4>
<pre>paliwo: 30 l/100 km × 6,00 zł/l netto = 1,80 zł/km
AdBlue                                = 0,05 zł/km
opony, serwis, naprawy                = 0,15 zł/km
opłaty drogowe (średnio)              = 0,40 zł/km
razem zmienne                         = 2,40 zł/km
koszt całkowity 1 km = 2,00 + 2,40    = 4,40 zł/km</pre>
<h4>Kalkulacja zlecenia</h4>
<pre>przejazd z ładunkiem 800 km + dojazd pusty 100 km = 900 km
koszt = 900 × 4,40 = 3 960 zł
narzut zysku 15% = 594 zł
cena netto = 4 554 zł
VAT 23% (przewóz krajowy) = 1 047,42 zł
cena brutto = 5 601,42 zł

współczynnik przebiegu ładownego = 800 ÷ 900 = 0,89 (88,9%)</pre>
<h4>Jak obniżyć koszt jednostkowy</h4>
<ul>
<li>ograniczyć puste przebiegi (ładunki powrotne z giełd transportowych);</li>
<li>zwiększyć wykorzystanie ładowności (konsolidacja ładunków drobnicowych);</li>
<li>eco-driving, kontrola zużycia paliwa przez telematykę;</li>
<li>planowanie tras omijających płatne odcinki, gdy to opłacalne.</li>
</ul>
<h4>Diety i ryczałty</h4>
<p>Kierowcy w podróży służbowej przysługują diety (krajowa 45 zł za dobę) i ryczałty za noclegi; w podróży zagranicznej według stawek dla danego kraju. W przewozach kabotażowych i cross-trade obowiązują zasady delegowania z minimalnym wynagrodzeniem kraju przyjmującego.</p>
<div class="tip">Koszt stały na kilometr maleje, gdy pojazd jeździ więcej. Dlatego przestój pojazdu podnosi koszt każdego przejechanego kilometra.</div>` },
        { tytul: "Odpowiedzialność przewoźnika wg CMR", tresc: `<h4>Zakres odpowiedzialności</h4>
<p>Przewoźnik odpowiada za <b>całkowite lub częściowe zaginięcie</b> i <b>uszkodzenie</b> towaru od chwili przyjęcia do chwili wydania oraz za <b>opóźnienie</b> dostawy.</p>
<h4>Zwolnienia (art. 17 CMR)</h4>
<ul>
<li>wina osoby uprawnionej (nadawcy, odbiorcy), jej zlecenie;</li>
<li>wada własna towaru (np. naturalne psucie się);</li>
<li>okoliczności, których przewoźnik nie mógł uniknąć;</li>
<li>szczególne ryzyka: odkryty pojazd (gdy uzgodniono), brak lub wadliwe opakowanie, <b>załadunek przez nadawcę</b>, niedostateczne oznakowanie, przewóz żywych zwierząt.</li>
</ul>
<h4>Wysokość odszkodowania</h4>
<pre>limit = 8,33 SDR za 1 kg wagi brutto brakującego lub uszkodzonego towaru
opóźnienie: odszkodowanie do wysokości przewoźnego

Brak 200 kg towaru wartego 15 000 zł, kurs SDR (przykład) 5,50 zł
limit = 8,33 × 200 × 5,50 = 9 163 zł
przewoźnik płaci 9 163 zł (mniej niż wartość towaru)</pre>
<p>Wyższe odszkodowanie jest możliwe, gdy w liście CMR zadeklarowano <b>wartość towaru</b> (art. 24) lub <b>specjalny interes w dostawie</b> (art. 26) za dodatkową opłatą, albo gdy szkoda wynikła ze złego zamiaru przewoźnika.</p>
<h4>Terminy</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Termin zastrzeżenia</th></tr>
<tr><td>szkoda widoczna</td><td>najpóźniej w chwili odbioru towaru</td></tr>
<tr><td>szkoda niewidoczna</td><td>na piśmie w ciągu 7 dni (bez niedziel i świąt) od odbioru</td></tr>
<tr><td>opóźnienie</td><td>na piśmie w ciągu 21 dni od oddania towaru do dyspozycji odbiorcy</td></tr>
<tr><td>uznanie towaru za zaginiony</td><td>30 dni po uzgodnionym terminie dostawy lub 60 dni od przyjęcia (gdy brak terminu)</td></tr>
<tr><td>przedawnienie roszczeń</td><td>1 rok; 3 lata przy złym zamiarze lub równoznacznym niedbalstwie</td></tr></table></div>
<h4>Przewozy krajowe: prawo przewozowe</h4>
<ul>
<li>Przewoźnik odpowiada za szkodę do wysokości <b>zwykłej wartości</b> przesyłki (lub wartości deklarowanej).</li>
<li>Przed drogą sądową trzeba złożyć <b>reklamację</b>; roszczenia przedawniają się z upływem roku.</li>
<li>Szkodę niewidoczną zgłasza się w ciągu 7 dni od przyjęcia przesyłki.</li>
</ul>
<h4>Ubezpieczenia</h4>
<p><b>OCP</b> chroni przewoźnika (pokrywa jego odpowiedzialność wobec klienta), <b>OCS</b> spedytora, a ubezpieczenie <b>cargo</b> chroni właściciela towaru niezależnie od winy przewoźnika.</p>
<div class="tip">Limit 8,33 SDR liczy się od masy brutto brakującej części, a nie od całej przesyłki ani od wartości towaru.</div>` },
        { tytul: "Zlecenie, uprawnienia i giełdy", tresc: `<h4>Elementy zlecenia transportowego</h4>
<ul>
<li>dane zleceniodawcy i przewoźnika (NIP, numer licencji, polisa OCP);</li>
<li>miejsce, data i godzina (okno czasowe) załadunku i rozładunku;</li>
<li>rodzaj towaru, masa, liczba palet, wymiary, wymagania (temperatura, ADR, wymiana palet);</li>
<li>wymagany pojazd (zabudowa, ładowność, wyposażenie: pasy, maty);</li>
<li><b>fracht</b> (wynagrodzenie), termin płatności, wymagane dokumenty (oryginał CMR, faktura);</li>
<li>kary umowne (za spóźnienie, niepodstawienie pojazdu), zakaz przeładunku i podzlecania bez zgody.</li>
</ul>
<h4>Przewoźnik a spedytor</h4>
<div class="tw"><table><tr><th></th><th>Przewoźnik</th><th>Spedytor</th></tr>
<tr><td>umowa</td><td>przewozu</td><td>spedycji (Kodeks cywilny)</td></tr>
<tr><td>zadanie</td><td>wykonuje przewóz</td><td>organizuje przewóz i usługi dodatkowe</td></tr>
<tr><td>odpowiada za</td><td>towar w czasie przewozu</td><td>staranny wybór przewoźnika i organizację</td></tr></table></div>
<h4>Uprawnienia przewoźnika drogowego</h4>
<ul>
<li><b>Zezwolenie na wykonywanie zawodu przewoźnika drogowego</b>: wymaga siedziby, dobrej reputacji, <b>zdolności finansowej</b> (9 000 euro na pierwszy pojazd i 5 000 euro na każdy kolejny) oraz <b>certyfikatu kompetencji zawodowych</b> osoby zarządzającej transportem.</li>
<li><b>Licencja wspólnotowa</b> na przewozy międzynarodowe; jej wypis wozi się w każdym pojeździe.</li>
<li>Od 2022 r. licencja wspólnotowa jest wymagana także w przewozach międzynarodowych pojazdami od 2,5 t do 3,5 t DMC (zdolność finansowa 1 800 euro i 900 euro).</li>
<li>Kierowca: prawo jazdy (C, C+E), <b>kwalifikacja wstępna</b> i szkolenie okresowe co 5 lat (kod 95), badania lekarskie i psychologiczne.</li>
</ul>
<h4>Kabotaż</h4>
<p>Po przewozie międzynarodowym przewoźnik może wykonać do <b>3 operacji kabotażowych w 7 dni</b> w kraju przyjmującym, a potem obowiązuje 4-dniowa przerwa na kabotaż tym pojazdem w tym kraju.</p>
<h4>Giełdy transportowe i wskaźniki</h4>
<ul>
<li>Giełdy pozwalają publikować ładunki i wolne pojazdy, szukać ładunków powrotnych, sprawdzać wiarygodność kontrahenta.</li>
<li>Przed zleceniem sprawdza się: licencję, polisę OCP (suma ubezpieczenia), opinie, historię płatności.</li>
<li>Ocena przewoźnika: terminowość dostaw, wskaźnik szkód, kompletność dokumentów.</li>
</ul>
<pre>terminowość = dostawy na czas ÷ wszystkie × 100%
wskaźnik szkód = przesyłki uszkodzone ÷ wszystkie × 100%
57 dostaw na czas z 60 → 95%</pre>
<div class="tip">Spedytor nie musi mieć ani jednego pojazdu. Odpowiada za szkodę w towarze tylko wtedy, gdy źle wybrał przewoźnika albo sam podjął się przewozu.</div>` }
      ],
      pytania: [
        Q("Koszty stałe pojazdu wynoszą 18 000 zł miesięcznie przy przebiegu 9 000 km. Koszt stały na 1 km wynosi", "2,00 zł", "0,50 zł", "1,80 zł", "20,00 zł", "18 000 ÷ 9 000."),
        Q("Do kosztów zmiennych w transporcie drogowym zalicza się", "paliwo i opłaty drogowe", "ubezpieczenie OC pojazdu", "ratę leasingu", "czynsz za biuro", "Rosną wraz z liczbą przejechanych kilometrów."),
        Q("Pojazd przejechał 1 200 km, z czego 900 km z ładunkiem. Współczynnik przebiegu ładownego wynosi", "0,75", "1,33", "0,25", "0,90", "900 ÷ 1 200."),
        Q("Według konwencji CMR odszkodowanie za zaginięcie towaru nie może przekroczyć", "8,33 SDR za 1 kg wagi brutto brakującego towaru", "wartości całego pojazdu", "dwukrotności przewoźnego", "100 euro za przesyłkę", "Chyba że zadeklarowano wartość lub specjalny interes."),
        Q("Zastrzeżenie dotyczące szkody niewidocznej przy przewozie CMR odbiorca składa na piśmie w ciągu", "7 dni (bez niedziel i świąt)", "21 dni", "24 godzin", "1 roku", "21 dni dotyczy opóźnienia."),
        Q("Roszczenia z przewozu wg CMR (bez złego zamiaru) przedawniają się po", "1 roku", "3 latach", "6 latach", "6 miesiącach", "Przy złym zamiarze: 3 lata."),
        Q("Ubezpieczenie chroniące przewoźnika przed skutkami jego odpowiedzialności za szkody w towarze to", "OCP", "cargo", "AC", "OCS", "OCS to ubezpieczenie spedytora."),
        Q("Po przewozie międzynarodowym przewoźnik może wykonać w kraju przyjmującym", "do 3 operacji kabotażowych w ciągu 7 dni", "nieograniczoną liczbę przewozów", "1 operację w ciągu 30 dni", "do 5 operacji w ciągu 14 dni", "Potem 4 dni przerwy.")
      ]
    },
    {
      id: "miedzynarodowe", tytul: "Przewozy międzynarodowe i ADR", opis: "Zorganizujesz przewóz towarów niebezpiecznych, przewóz z odprawą celną oraz przewóz morski i lotniczy.",
      lekcje: [
        { tytul: "Towary niebezpieczne ADR w praktyce", tresc: `<h4>Dokumenty w pojeździe</h4>
<ul>
<li><b>dokument przewozowy</b> z opisem towaru: numer UN, prawidłowa nazwa przewozowa, numery nalepek (klasa), <b>grupa pakowania</b> (I duże, II średnie, III małe zagrożenie), kod ograniczeń przewozu przez tunele, ilość;</li>
<li><b>instrukcje pisemne</b> w języku zrozumiałym dla każdego członka załogi;</li>
<li><b>zaświadczenie ADR kierowcy</b> (ważne 5 lat);</li>
<li><b>świadectwo dopuszczenia pojazdu</b> (dla cystern i niektórych pojazdów, np. EX/II, EX/III, FL), ważne maks. 1 rok;</li>
<li>dokument tożsamości ze zdjęciem.</li>
</ul>
<h4>Tablice ostrzegawcze</h4>
<p>Pomarańczowe, odblaskowe, <b>40 × 30 cm</b>, z przodu i z tyłu jednostki transportowej. Przy przewozie w cysternach i luzem podaje się numery: górny to <b>numer rozpoznawczy zagrożenia</b>, dolny to <b>numer UN</b>.</p>
<pre>33   - numer zagrożenia: ciecz bardzo łatwo zapalna
1203 - numer UN: benzyna

Budowa numeru zagrożenia:
2 gaz, 3 ciecz zapalna, 4 ciało stałe zapalne, 5 utleniające,
6 trujące, 7 promieniotwórcze, 8 żrące, 9 inne zagrożenie
podwojona cyfra (33, 66, 88) - nasilenie zagrożenia
X przed numerem (X423) - reaguje niebezpiecznie z wodą
0 na drugim miejscu (30, 80) - brak dodatkowego zagrożenia</pre>
<h4>Gaśnice w jednostce transportowej</h4>
<div class="tw"><table><tr><th>DMC jednostki</th><th>Łączna masa środka</th><th>W tym</th></tr>
<tr><td>do 3,5 t</td><td>4 kg</td><td>gaśnica 2 kg do silnika lub kabiny + 2 kg</td></tr>
<tr><td>3,5-7,5 t</td><td>8 kg</td><td>2 kg + co najmniej 6 kg</td></tr>
<tr><td>powyżej 7,5 t</td><td>12 kg</td><td>2 kg + co najmniej 6 kg</td></tr></table></div>
<p>Inne wyposażenie: klin pod koło, dwa stojące znaki ostrzegawcze, płyn do płukania oczu (poza klasami 1 i 2), dla każdego członka załogi kamizelka, latarka, rękawice i ochrona oczu; dla niektórych gazów i trucizn maska ucieczkowa.</p>
<h4>Ułatwienia</h4>
<ul>
<li><b>Ilości ograniczone (LQ)</b>: małe opakowania wewnętrzne, oznaczenie biało-czarnym rombem; wiele wymagań nie obowiązuje.</li>
<li><b>Zwolnienie 1.1.3.6</b>: gdy suma punktów (ilość × mnożnik kategorii transportowej) nie przekracza <b>1 000</b>, nie są wymagane m.in. tablice pomarańczowe i zaświadczenie ADR kierowcy. Mnożniki: kategoria 1 × 50, kategoria 2 × 3, kategoria 3 × 1; kategoria 4 bez ograniczeń.</li>
</ul>
<pre>200 l towaru kategorii 2 × 3 = 600 pkt
300 l towaru kategorii 3 × 1 = 300 pkt
razem 900 pkt ≤ 1 000 → można skorzystać ze zwolnienia</pre>
<div class="tip">Firma, która przewozi, nadaje lub ładuje towary niebezpieczne, wyznacza doradcę do spraw bezpieczeństwa (DGSA), który m.in. sporządza roczne sprawozdanie.</div>` },
        { tytul: "Odprawa celna i tranzyt", tresc: `<h4>Unia celna</h4>
<p>Między państwami UE nie ma ceł ani odpraw celnych. Sprzedaż do innego kraju UE to <b>WDT</b> (wewnątrzwspólnotowa dostawa towarów), zakup to <b>WNT</b>; rozlicza się je w VAT. Odprawa dotyczy towarów z krajów trzecich lub do nich (eksport, import).</p>
<h4>Numer EORI i systemy</h4>
<ul>
<li>Każdy przedsiębiorca uczestniczący w obrocie z krajami trzecimi musi mieć numer <b>EORI</b>.</li>
<li>Zgłoszenia celne składa się elektronicznie przez platformę <b>PUESC</b> (w Polsce): eksport w systemie AES, import w systemie AIS.</li>
<li>Zgłoszenie może złożyć sam przedsiębiorca lub <b>agencja celna</b> (przedstawiciel bezpośredni lub pośredni).</li>
</ul>
<h4>Dokumenty w obrocie z krajami trzecimi</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Do czego służy</th></tr>
<tr><td>faktura handlowa</td><td>wartość transakcji, podstawa wartości celnej</td></tr>
<tr><td>specyfikacja (packing list)</td><td>zawartość opakowań, masy, wymiary</td></tr>
<tr><td>dokument przewozowy (CMR, B/L, AWB)</td><td>dowód umowy przewozu</td></tr>
<tr><td>świadectwo pochodzenia, np. EUR.1</td><td>preferencyjne (obniżone) stawki celne</td></tr>
<tr><td>pozwolenia, licencje, świadectwa weterynaryjne</td><td>towary objęte ograniczeniami</td></tr></table></div>
<h4>Klasyfikacja i wartość celna</h4>
<ul>
<li>Towar klasyfikuje się kodem <b>Nomenklatury Scalonej CN</b> (8 cyfr) lub <b>TARIC</b> (10 cyfr); od kodu zależy stawka cła.</li>
<li>Wartość celna to zwykle wartość transakcyjna powiększona o koszty transportu i ubezpieczenia do granicy UE (poziom CIF).</li>
<li>Przy imporcie płaci się cło, a od wartości powiększonej o cło także VAT (i ewentualnie akcyzę).</li>
</ul>
<pre>wartość celna 10 000 zł, cło 5% = 500 zł
podstawa VAT = 10 000 + 500 = 10 500 zł
VAT 23% = 2 415 zł</pre>
<h4>Tranzyt</h4>
<ul>
<li>Procedura <b>tranzytu</b> pozwala przewieźć towar bez płacenia ceł do urzędu przeznaczenia; obsługuje ją system <b>NCTS</b>.</li>
<li><b>T1</b>: towary nieunijne; <b>T2</b>: towary unijne przewożone przez kraje tranzytu wspólnego (np. Szwajcaria).</li>
<li>Wymagane jest <b>zabezpieczenie</b> (gwarancja) długu celnego.</li>
<li><b>Karnet TIR</b>: międzynarodowy tranzyt drogowy na podstawie konwencji TIR, z plombowanym pojazdem.</li>
</ul>
<div class="tip">Reguła Incoterms wskazuje, kto dokonuje odpraw: przy EXW eksportową odprawę organizuje kupujący, przy DDP sprzedający odprawia towar także w imporcie i płaci cło.</div>` },
        { tytul: "Przewóz morski, lotniczy i intermodalny", tresc: `<h4>Konosament (B/L)</h4>
<p>W żegludze morskiej konosament pełni trzy funkcje: <b>pokwitowanie przyjęcia</b> towaru, <b>dowód umowy przewozu</b> i <b>papier wartościowy</b> (dokument własności, odbiór towaru tylko za okazaniem oryginału).</p>
<ul>
<li><b>czysty</b> (clean): bez zastrzeżeń co do stanu towaru; <b>nieczysty</b> (foul): z adnotacjami o uszkodzeniach;</li>
<li><b>załadowania</b> (on board) i <b>do załadowania</b> (received for shipment);</li>
<li><b>morski list przewozowy</b> (sea waybill) nie jest dokumentem własności.</li>
</ul>
<h4>Fracht morski</h4>
<div class="tw"><table><tr><th>Usługa</th><th>Na czym polega</th></tr>
<tr><td>FCL</td><td>pełny kontener dla jednego nadawcy</td></tr>
<tr><td>LCL</td><td>drobnica: ładunki wielu nadawców w jednym kontenerze, fracht liczony za W/M (1 t lub 1 m³, co daje więcej)</td></tr></table></div>
<p>Dopłaty: <b>BAF</b> (paliwowa), <b>CAF</b> (walutowa), <b>THC</b> (obsługa w terminalu). Przetrzymanie kontenera ponad czas wolny: <b>demurrage</b> (w terminalu) i <b>detention</b> (poza terminalem, u klienta).</p>
<h4>Kontenery</h4>
<pre>20' (1 TEU): wewnątrz ok. 5,9 × 2,35 × 2,39 m, ok. 11 palet EUR
40' (2 TEU): wewnątrz ok. 12,0 × 2,35 × 2,39 m, ok. 24 palety EUR
40' HC (high cube): wysokość wewnętrzna ok. 2,69 m</pre>
<h4>Przewóz lotniczy</h4>
<ul>
<li>Dokument: lotniczy list przewozowy <b>AWB</b>; przy konsolidacji MAWB (przewoźnik-agent) i HAWB (agent-nadawca).</li>
<li>Opłatę liczy się od większej z mas: rzeczywistej lub <b>przeliczeniowej</b> (objętościowej).</li>
</ul>
<pre>masa przeliczeniowa = długość × szerokość × wysokość (cm) ÷ 6 000
paczka 100 × 80 × 60 cm, masa rzeczywista 50 kg
480 000 ÷ 6 000 = 80 kg → fracht za 80 kg</pre>
<h4>Technologie intermodalne</h4>
<div class="tw"><table><tr><th>Technologia</th><th>Opis</th></tr>
<tr><td>Lo-Lo</td><td>przeładunek pionowy dźwigiem (kontenery)</td></tr>
<tr><td>Ro-Ro</td><td>pojazdy wjeżdżają na statek lub prom</td></tr>
<tr><td>Ro-La</td><td>cały zestaw ciężarowy na wagonach niskopodwoziowych, kierowca jedzie wagonem sypialnym</td></tr>
<tr><td>naczepy kieszeniowe</td><td>naczepa bez ciągnika na wagonie kieszeniowym (przystosowana do przeładunku suwnicą)</td></tr>
<tr><td>nadwozia wymienne</td><td>skrzynie ładunkowe zdejmowane z podwozia; zwykle nie można ich piętrzyć</td></tr></table></div>
<div class="tip">W przewozie lotniczym lekkie, duże paczki płacą za objętość. Zawsze porównaj masę rzeczywistą z przeliczeniową i weź większą.</div>` }
      ],
      pytania: [
        Q("Na pomarańczowej tablicy 33/1203 liczba 1203 oznacza", "numer UN materiału", "numer rozpoznawczy zagrożenia", "klasę ADR", "masę ładunku w kg", "33 to numer zagrożenia."),
        Q("Litera X przed numerem rozpoznawczym zagrożenia oznacza, że materiał", "reaguje niebezpiecznie z wodą", "jest wybuchowy", "jest promieniotwórczy", "nie stwarza zagrożenia", "Np. X423."),
        Q("Grupa pakowania I w ADR oznacza materiały stwarzające", "duże zagrożenie", "małe zagrożenie", "średnie zagrożenie", "brak zagrożenia", "II średnie, III małe."),
        Q("Zaświadczenie ADR kierowcy jest ważne", "5 lat", "1 rok", "10 lat", "bezterminowo", "Świadectwo dopuszczenia pojazdu: maks. 1 rok."),
        Q("Numer, który musi mieć przedsiębiorca uczestniczący w obrocie towarowym z krajami spoza UE, to", "EORI", "REGON", "BDO", "KRS", "Służy do identyfikacji w systemach celnych."),
        Q("Procedurę tranzytu celnego obsługuje system", "NCTS", "e-TOLL", "BDO", "KSeF", "T1 dotyczy towarów nieunijnych."),
        Q("Dokumentem przewozowym, który jest jednocześnie dokumentem własności towaru, jest", "konosament", "list CMR", "lotniczy list przewozowy AWB", "morski list przewozowy (sea waybill)", "Towar wydaje się za okazaniem oryginału."),
        Q("Paczka 120 × 50 × 50 cm waży 40 kg. Masa, od której liczy się fracht lotniczy, wynosi", "50 kg", "40 kg", "300 kg", "90 kg", "300 000 ÷ 6 000 = 50 kg > 40 kg.")
      ]
    }
  ]);

})(window.KURSY);
