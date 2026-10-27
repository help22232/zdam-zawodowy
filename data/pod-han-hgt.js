/* Podkursy: HAN.01, HAN.02, HGT.01, HGT.02, HGT.03 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("HAN.01", [
    {
      id: "dostawa-magazyn", tytul: "Przyjęcie dostawy i magazyn", opis: "Przyjmiesz dostawę ilościowo i jakościowo, udokumentujesz rozbieżności i prawidłowo przechowasz towar.",
      lekcje: [
        { tytul: "Odbiór ilościowy i jakościowy", tresc: `<h4>Kolejność przyjęcia dostawy</h4>
<ol>
<li>Sprawdzenie <b>środka transportu</b> (czystość, temperatura w chłodni, plomby) i dokumentów: <b>WZ</b> (wydanie zewnętrzne od dostawcy), faktura, ewentualnie świadectwa jakości, dokumenty weterynaryjne.</li>
<li><b>Odbiór ilościowy</b>: przeliczenie opakowań zbiorczych, zważenie lub zmierzenie, porównanie z WZ i zamówieniem.</li>
<li><b>Odbiór jakościowy</b>: stan opakowań, terminy przydatności, oznakowanie, cechy organoleptyczne (wygląd, zapach, konsystencja), temperatura produktów chłodzonych i mrożonych.</li>
<li>Wystawienie dokumentu <b>PZ</b> (przyjęcie zewnętrzne) i wprowadzenie towaru do ewidencji.</li>
</ol>
<h4>Rodzaje rozbieżności</h4>
<div class="tw"><table><tr><th>Rozbieżność</th><th>Przykład</th><th>Postępowanie</th></tr>
<tr><td>niedobór ilościowy</td><td>na WZ 40 kartonów, dostarczono 38</td><td>protokół rozbieżności, korekta faktury</td></tr>
<tr><td>nadwyżka</td><td>dostarczono 42 kartony</td><td>protokół, uzgodnienie z dostawcą (zwrot lub dokupienie)</td></tr>
<tr><td>wada jakościowa</td><td>zgniecione opakowania, przeterminowany towar</td><td>odmowa przyjęcia lub protokół szkody</td></tr>
<tr><td>niezgodność asortymentowa</td><td>inny smak, inny rozmiar niż zamówiony</td><td>protokół, zwrot dostawcy</td></tr></table></div>
<p><b>Protokół rozbieżności</b> zawiera: datę, numer dokumentu dostawy, dane dostawcy i odbiorcy, nazwę towaru, ilość według dokumentu i faktyczną, opis wady oraz podpisy kierowcy (przedstawiciela dostawcy) i odbierającego.</p>
<h4>Dokumenty przy dostawie</h4>
<ul>
<li><b>faktura</b>: dokument rozliczeniowy, podstawa zapłaty; może przyjść z towarem lub później;</li>
<li><b>WZ</b>: potwierdza ilości wydane przez dostawcę, odbiorca podpisuje kopię;</li>
<li><b>PZ</b>: wewnętrzny dokument odbiorcy, wprowadza towar na stan magazynu;</li>
<li><b>MM</b>: przesunięcie międzymagazynowe, <b>RW</b>: rozchód wewnętrzny (np. na potrzeby sklepu), <b>ZW</b>: zwrot wewnętrzny.</li>
</ul>
<p>Przy towarach mrożonych mierzy się temperaturę termometrem szpilkowym między opakowaniami. Produkt mrożony powyżej -15°C (z tolerancją transportową) można odrzucić. Ślady rozmrożenia (lód w opakowaniu, zbrylenie) świadczą o przerwaniu łańcucha chłodniczego.</p>
<div class="tip">Na egzaminie typowe zadanie: porównaj WZ z tym, co przyjechało, i wypełnij protokół. Licz różnicę zawsze jako „ilość faktyczna - ilość z dokumentu”: wynik ujemny to niedobór, dodatni to nadwyżka.</div>
<p>Towar wadliwy nie trafia na salę sprzedaży. Odkłada się go w wydzielonym, oznaczonym miejscu do czasu zwrotu.</p>` },
        { tytul: "Warunki przechowywania towarów", tresc: `<h4>Czynniki przechowywania</h4>
<ul>
<li><b>temperatura</b>: mrożonki -18°C i niżej, lody -18°C do -22°C, mięso i wędliny 0 do +4°C, nabiał +2 do +6°C, owoce i warzywa zależnie od gatunku (banany nie niżej niż +12°C, bo czernieją);</li>
<li><b>wilgotność względna</b> powietrza: pieczywo, cukier, mąka, kasze wymagają suchego pomieszczenia (ok. 60-70%), warzywa korzeniowe wilgotnego (85-95%);</li>
<li><b>światło</b>: oleje, piwo, wino, kosmetyki chroni się przed światłem słonecznym;</li>
<li><b>sąsiedztwo towarów</b>: produkty o silnym zapachu (ryby, przyprawy, chemia) oddziela się od chłonących zapach (pieczywo, masło, mąka).</li>
</ul>
<h4>Zasady rotacji</h4>
<p><b>FIFO</b> (first in, first out): pierwsze przyjęte, pierwsze wydane, dla towarów o długim terminie. <b>FEFO</b> (first expired, first out): najpierw wydaje się towar z najkrótszym terminem przydatności, niezależnie od daty dostawy. W handlu żywnością FEFO jest ważniejsze.</p>
<h4>Składowanie</h4>
<ul>
<li>Towar nie stoi bezpośrednio na podłodze: na paletach lub regałach, z odstępem od ścian.</li>
<li><b>Paleta EUR</b>: 1200 × 800 mm. Cięższe opakowania na dole, lżejsze na górze.</li>
<li>Nie wolno przekraczać dopuszczalnego obciążenia regału (tabliczka znamionowa).</li>
<li>Strefy magazynu: przyjęć, składowania, kompletacji, wydań, odpadów i opakowań zwrotnych.</li>
</ul>
<h4>Przechowywanie towarów nieżywnościowych</h4>
<ul>
<li>chemia gospodarcza i kosmetyki: osobno od żywności, z dala od źródeł ciepła, środki łatwopalne (aerozole) w ilościach dopuszczonych przepisami ppoż.;</li>
<li>odzież i tekstylia: sucho, bez dostępu słońca (blaknięcie), na wieszakach lub w kartonach;</li>
<li>sprzęt RTV i AGD: w oryginalnych opakowaniach, zgodnie ze strzałkami „góra” i znakiem „ostrożnie, szkło”.</li>
</ul>
<p>Znaki manipulacyjne na opakowaniach transportowych: parasol (chronić przed wilgocią), kieliszek (kruche), strzałki (tą stroną do góry), liczba w trójkącie z kartonami (maksymalna liczba warstw w stosie).</p>
<div class="tip">Pułapka: „termin przydatności do spożycia” (należy spożyć do) dotyczy produktów łatwo psujących się, po nim towaru nie wolno sprzedawać. „Data minimalnej trwałości” (najlepiej spożyć przed) mówi o jakości, ale sprzedaż po tej dacie także jest niedopuszczalna w obrocie detalicznym bez specjalnych procedur.</div>` },
        { tytul: "BHP i transport wewnętrzny", tresc: `<h4>Ręczne przenoszenie ciężarów</h4>
<p>Według rozporządzenia o pracach transportowych dopuszczalna masa przenoszona ręcznie przy pracy stałej wynosi dla mężczyzny <b>30 kg</b>, przy pracy dorywczej <b>50 kg</b>. Dla kobiety: <b>12 kg</b> przy pracy stałej i <b>20 kg</b> przy pracy dorywczej.</p>
<ul>
<li>Ciężar podnosi się z <b>przysiadu</b>, z prostym kręgosłupem, blisko ciała, bez skrętów tułowia.</li>
<li>Ładunki niewygodne lub cięższe przenosi się we dwie osoby albo sprzętem.</li>
</ul>
<h4>Środki transportu wewnętrznego</h4>
<div class="tw"><table><tr><th>Urządzenie</th><th>Zastosowanie</th></tr>
<tr><td>wózek paletowy ręczny (paleciak)</td><td>przemieszczanie palet po płaskiej posadzce</td></tr>
<tr><td>wózek platformowy</td><td>kartony, skrzynki</td></tr>
<tr><td>wózek widłowy</td><td>palety na wysokie regały, wymaga uprawnień UDT</td></tr>
<tr><td>przenośnik taśmowy lub rolkowy</td><td>ciągły transport opakowań</td></tr></table></div>
<h4>Opakowania</h4>
<ul>
<li><b>jednostkowe</b> (bezpośrednie): butelka, puszka, torebka;</li>
<li><b>zbiorcze</b>: karton zawierający kilka opakowań jednostkowych;</li>
<li><b>transportowe</b>: paleta z folią stretch, kontener;</li>
<li><b>zwrotne</b> (kaucjonowane): skrzynki, palety, butelki. Ewidencjonuje się je osobno. Od 2025 r. w Polsce działa system kaucyjny dla butelek PET do 3 l, puszek metalowych do 1 l i szklanych butelek wielokrotnego użytku do 1,5 l.</li>
</ul>
<h4>Ochrona przeciwpożarowa</h4>
<p>Drogi ewakuacyjne i dostęp do gaśnic muszą być wolne. Gaśnica proszkowa <b>ABC</b> gasi ciała stałe, ciecze i gazy. Urządzeń pod napięciem nie gasi się wodą.</p>
<h4>Obowiązki pracownika magazynu</h4>
<ul>
<li>odzież robocza, obuwie z noskiem ochronnym, rękawice przy pracy z paletami i kartonami;</li>
<li>przed użyciem wózka sprawdzenie hamulca, kół i dźwigni podnoszenia;</li>
<li>nie wolno przewozić ludzi na wózkach paletowych ani wchodzić na regały;</li>
<li>do zdejmowania towaru z wysokości używa się drabinki lub podestu z barierką;</li>
<li>folię stretch i taśmy tnie się nożem z ostrzem chowanym, kierując ostrze od siebie.</li>
</ul>
<div class="tip">Na egzaminie pojawiają się pytania o masę: zapamiętaj pary 30/50 kg (mężczyźni) i 12/20 kg (kobiety).</div>` }
      ],
      pytania: [
        Q("Dokument, który dostawca przekazuje wraz z towarem, potwierdzający wydanie towaru z jego magazynu, to", "WZ", "PZ", "RW", "MM", "WZ: wydanie zewnętrzne. PZ wystawia odbiorca przy przyjęciu."),
        Q("Na dokumencie dostawy jest 50 opakowań, przyjechało 47. Sporządza się", "protokół rozbieżności z niedoborem 3 opakowań", "protokół nadwyżki 3 opakowań", "fakturę korygującą przez odbiorcę", "remanent", "Różnica 47 - 50 = -3, czyli niedobór."),
        Q("Zasada FEFO oznacza wydawanie w pierwszej kolejności towaru", "z najkrótszym terminem przydatności", "przyjętego najpóźniej", "najdroższego", "najlżejszego", "First expired, first out."),
        Q("Banany przechowuje się w temperaturze nie niższej niż ok.", "+12°C", "0°C", "+4°C", "-2°C", "W niższej temperaturze skórka czernieje."),
        Q("Wymiary palety EUR wynoszą", "1200 × 800 mm", "1200 × 1000 mm", "1000 × 600 mm", "800 × 600 mm", "1200 × 1000 mm to paleta przemysłowa."),
        Q("Dopuszczalna masa ładunku przenoszonego ręcznie przez kobietę przy pracy stałej wynosi", "12 kg", "20 kg", "25 kg", "30 kg", "20 kg dotyczy pracy dorywczej."),
        Q("Do obsługi wózka widłowego w magazynie wymagane są", "uprawnienia UDT", "prawo jazdy kategorii B", "tylko szkolenie BHP", "zaświadczenie od sanepidu", "Wózki widłowe podlegają Urzędowi Dozoru Technicznego."),
        Q("Pieczywa nie przechowuje się obok", "środków chemicznych i ryb", "mąki", "kaszy", "cukru", "Pieczywo chłonie obce zapachy.")
      ]
    },
    {
      id: "ekspozycja", tytul: "Przygotowanie i ekspozycja towaru", opis: "Przygotujesz towar do sprzedaży, oznakujesz go cenami i rozmieścisz zgodnie z zasadami merchandisingu.",
      lekcje: [
        { tytul: "Przygotowanie towaru do sprzedaży", tresc: `<h4>Czynności przygotowawcze</h4>
<ul>
<li><b>rozpakowanie</b> z opakowań zbiorczych i kontrola jakości;</li>
<li><b>porcjowanie</b> i <b>paczkowanie</b> (wędliny, sery, owoce): ważenie na wadze z ważną legalizacją, oznaczenie masy netto;</li>
<li><b>metkowanie</b>: etykieta z ceną, metka odzieżowa (skład surowcowy, rozmiar, symbole konserwacji);</li>
<li><b>kompletowanie</b> zestawów (np. kosze prezentowe);</li>
<li><b>zabezpieczenie</b> przed kradzieżą: etykiety i klipsy EAS (radiowe RF lub akustomagnetyczne AM), bramki przy wyjściu.</li>
</ul>
<h4>Wagi i krajalnice</h4>
<p>Waga używana w handlu musi mieć <b>legalizację</b> (cecha legalizacyjna, znak M na zielonym tle przy ocenie zgodności). Przed ważeniem ustawia się <b>tarę</b> (masę opakowania), aby klient płacił tylko za towar. Krajalnicę czyści się po wyłączeniu z sieci, z użyciem rękawicy ochronnej, a przy krojeniu resztek używa się popychacza.</p>
<h4>Kod kreskowy EAN-13</h4>
<ul>
<li>13 cyfr: prefiks kraju organizacji GS1 (dla Polski <b>590</b>), numer firmy, numer produktu, ostatnia cyfra <b>kontrolna</b>.</li>
<li>Prefiks nie oznacza kraju produkcji, tylko kraj, w którym firma zarejestrowała kod.</li>
<li>EAN-8 stosuje się na małych opakowaniach. Towary ważone w sklepie dostają kody wewnętrzne zaczynające się od 2.</li>
</ul>
<h4>Oznakowanie odzieży i obuwia</h4>
<p>Metka tekstylna podaje <b>skład surowcowy</b> w procentach (np. 95% bawełna, 5% elastan), rozmiar i symbole konserwacji. Obuwie oznacza się piktogramami materiału cholewki, podszewki i podeszwy: skóra (zarys skóry), skóra powlekana, tekstylia, inne materiały.</p>
<div class="tip">Typowa pułapka: kod 590 nie gwarantuje, że produkt powstał w Polsce.</div>
<h4>Higiena przy przygotowaniu</h4>
<p>Sprzedawca żywności nieopakowanej ma orzeczenie sanitarno-epidemiologiczne, czystą odzież i nakrycie głowy. Do każdej grupy (wędliny, sery, ryby) używa się osobnych desek i noży. Nie wolno jednocześnie obsługiwać kasy i podawać towaru nieopakowanego gołymi rękami.</p>` },
        { tytul: "Ceny i informacja dla klienta", tresc: `<h4>Obowiązki informacyjne</h4>
<p>Zgodnie z ustawą o informowaniu o cenach towarów i usług sprzedawca uwidacznia <b>cenę</b> (brutto, w złotych) i <b>cenę jednostkową</b>, czyli cenę za jednostkę miary:</p>
<div class="tw"><table><tr><th>Towar</th><th>Jednostka ceny jednostkowej</th></tr>
<tr><td>sprzedawany na wagę lub objętość</td><td>1 kg lub 1 l</td></tr>
<tr><td>do 50 g lub 50 ml</td><td>można za 10 g / 10 ml albo 100 g / 100 ml</td></tr>
<tr><td>na długość lub powierzchnię</td><td>1 m, 1 m²</td></tr>
<tr><td>na sztuki</td><td>1 szt.</td></tr></table></div>
<p><b>Przykład</b>: ser 250 g kosztuje 8,75 zł. Cena za kg = 8,75 ÷ 0,25 = <b>35,00 zł/kg</b>.</p>
<h4>Obniżki</h4>
<p>Przy każdej obniżce podaje się także <b>najniższą cenę z 30 dni</b> przed wprowadzeniem obniżki. Dla towarów szybko psujących się można podać cenę sprzed pierwszej obniżki. Gdy cena na półce różni się od ceny w kasie, klient ma prawo zapłacić <b>cenę niższą</b>.</p>
<h4>Etykieta cenowa zawiera</h4>
<ul><li>nazwę towaru (ewentualnie markę, gramaturę),</li><li>cenę i cenę jednostkową,</li><li>najlepiej kod towaru, aby uniknąć pomyłek przy weryfikacji.</li></ul>
<h4>Ceny psychologiczne</h4>
<p>Cena 9,99 zł zamiast 10 zł wydaje się wyraźnie niższa (efekt lewej cyfry). Pakiety „3 za 2” obniżają cenę jednostkową: 3 sztuki po 6 zł za 12 zł to 4 zł za sztukę, czyli rabat 33,3%.</p>
<h4>Sposób uwidaczniania</h4>
<p>Cenę umieszcza się na towarze, przy towarze (etykieta półkowa) lub w formie katalogu, cennika, a w sklepach z dużą liczbą towarów także przez czytnik cen. Informacja musi być jednoznaczna i czytelna. Za brak cen Inspekcja Handlowa może nałożyć karę pieniężną.</p>
<div class="tip">Na egzaminie licz cenę jednostkową z dokładnością do grosza i pamiętaj o przeliczeniu gramów na kilogramy (np. 400 g = 0,4 kg).</div>` },
        { tytul: "Merchandising i układ sklepu", tresc: `<h4>Strefy półki</h4>
<div class="tw"><table><tr><th>Strefa</th><th>Wysokość</th><th>Co tam umieszczamy</th></tr>
<tr><td>strefa oczu</td><td>ok. 120-160 cm</td><td>towary o najwyższej marży, nowości</td></tr>
<tr><td>strefa rąk</td><td>ok. 80-120 cm</td><td>towary popularne, marki własne</td></tr>
<tr><td>strefa sięgania</td><td>powyżej 160 cm</td><td>towary lekkie, mniej rotujące</td></tr>
<tr><td>strefa schylania</td><td>poniżej 80 cm</td><td>towary ciężkie, opakowania zbiorcze, tanie produkty pierwszej potrzeby</td></tr></table></div>
<h4>Układ sali sprzedaży</h4>
<ul>
<li><b>Strefa wejścia</b> (dekompresji): klient zwalnia, nie zauważa jeszcze półek, dlatego stawia się tam ekspozycje sezonowe, kwiaty, owoce.</li>
<li>Klienci w Polsce zwykle poruszają się <b>przeciwnie do ruchu wskazówek zegara</b>, a wzrok kierują w prawo.</li>
<li>Towary pierwszej potrzeby (pieczywo, nabiał) umieszcza się <b>w głębi</b> sklepu, aby klient minął inne działy.</li>
<li><b>Strefa przykasowa</b>: zakupy impulsowe (słodycze, gumy, baterie).</li>
<li><b>Towary komplementarne</b> obok siebie: makaron i sos, chipsy i napoje.</li>
</ul>
<h4>Ekspozycja</h4>
<ul>
<li><b>pionowa</b>: jedna marka od góry do dołu, łatwo porównać warianty;</li>
<li><b>pozioma</b>: produkty jednego rodzaju na jednej półce;</li>
<li><b>ekspozycja dodatkowa</b>: stojaki, kosze, ekspozycja na końcu regału (<b>gondola czołowa</b>), która sprzedaje znacznie więcej niż półka w alejce;</li>
<li><b>facing</b>: liczba frontów produktu widocznych dla klienta. Więcej frontów to lepsza widoczność.</li>
</ul>
<p><b>Planogram</b> to rysunek pokazujący dokładne miejsce i liczbę frontów każdego produktu na regale. Materiały POS: wobbler (ruchoma zawieszka na półce), shelf-liner (pasek na krawędzi półki), stopper (wystający z półki), display (stojak).</p>
<p>Zasada <b>blokowania</b> marek: produkty jednej marki tworzą wyraźny blok koloru, co ułatwia ich znalezienie.</p>
<div class="tip">Pamiętaj: na wysokości oczu towar o wysokiej marży, na dole ciężki. Pytanie „gdzie najlepiej sprzedaje się towar” ma odpowiedź: strefa oczu lub gondola czołowa.</div>` }
      ],
      pytania: [
        Q("Ser w opakowaniu 200 g kosztuje 7,40 zł. Cena jednostkowa wynosi", "37,00 zł/kg", "14,80 zł/kg", "3,70 zł/kg", "74,00 zł/kg", "7,40 ÷ 0,2 = 37,00 zł za kilogram."),
        Q("Prefiks 590 w kodzie EAN-13 oznacza, że", "kod nadała polska organizacja GS1", "towar wyprodukowano w Polsce", "towar jest ekologiczny", "towar jest sprzedawany na wagę", "Prefiks wskazuje kraj rejestracji kodu, nie produkcji."),
        Q("Ostatnia cyfra kodu EAN-13 to", "cyfra kontrolna", "numer partii", "numer kraju", "numer producenta", "Służy do sprawdzenia poprawności odczytu."),
        Q("Gdy cena na półce jest niższa niż naliczona w kasie, klient", "ma prawo zapłacić cenę niższą", "musi zapłacić cenę z kasy", "płaci średnią z obu cen", "musi zrezygnować z zakupu", "Rozbieżność rozstrzyga się na korzyść konsumenta."),
        Q("Towary ciężkie i w dużych opakowaniach umieszcza się w strefie", "schylania", "oczu", "sięgania", "przykasowej", "Strefa najniżej położona, bezpieczna dla ciężkich towarów."),
        Q("Liczba widocznych dla klienta frontów danego produktu na półce to", "facing", "planogram", "wobbler", "cross-merchandising", "Więcej frontów oznacza lepszą widoczność."),
        Q("Rysunek pokazujący dokładne rozmieszczenie produktów na regale to", "planogram", "inwentarz", "protokół", "cennik", "Planogram określa miejsce i liczbę frontów."),
        Q("Przed zważeniem towaru w pojemniku sprzedawca powinien", "odjąć tarę, czyli masę opakowania", "doliczyć masę opakowania do ceny", "zważyć towar bez legalizacji wagi", "zaokrąglić masę w górę", "Klient płaci tylko za masę netto towaru.")
      ]
    },
    {
      id: "obsluga-klienta", tytul: "Obsługa klienta i komunikacja", opis: "Przeprowadzisz rozmowę sprzedażową, odpowiesz na obiekcje i obsłużysz klienta trudnego.",
      lekcje: [
        { tytul: "Komunikacja werbalna i niewerbalna", tresc: `<h4>Elementy komunikacji</h4>
<p>Nadawca, komunikat, kanał, odbiorca i <b>informacja zwrotna</b>. Zakłócenia (szum) to np. hałas, żargon fachowy, pośpiech, uprzedzenia.</p>
<h4>Komunikacja niewerbalna</h4>
<ul>
<li><b>mowa ciała</b>: otwarta postawa (nieskrzyżowane ręce), uśmiech, kontakt wzrokowy;</li>
<li><b>proksemika</b>: strefy dystansu. Intymna do ok. 45 cm, osobista 45-120 cm, <b>społeczna 120-360 cm</b> (typowa dla obsługi klienta), publiczna powyżej 360 cm;</li>
<li><b>parajęzyk</b>: ton, tempo, głośność głosu;</li>
<li>wygląd sprzedawcy: czysty strój służbowy, identyfikator.</li>
</ul>
<h4>Aktywne słuchanie</h4>
<div class="tw"><table><tr><th>Technika</th><th>Przykład</th></tr>
<tr><td>parafraza</td><td>„Czyli szuka Pan butów do biegania po asfalcie, tak?”</td></tr>
<tr><td>odzwierciedlanie uczuć</td><td>„Widzę, że jest Pani zdenerwowana tą sytuacją.”</td></tr>
<tr><td>dopytywanie</td><td>„Co jest dla Pana najważniejsze w tym sprzęcie?”</td></tr>
<tr><td>podsumowanie</td><td>„Podsumowując: lekki laptop, do 3000 zł, z dobrą baterią.”</td></tr></table></div>
<h4>Rodzaje pytań</h4>
<ul>
<li><b>otwarte</b> (Co? Jak? Do czego?): rozpoznanie potrzeb;</li>
<li><b>zamknięte</b> (tak/nie): potwierdzenie decyzji;</li>
<li><b>alternatywne</b>: „Woli Pan kolor czarny czy szary?”, przydatne przy finalizacji;</li>
<li><b>sugerujące</b>: należy ich unikać, bo zniechęcają klienta.</li>
</ul>
<h4>Bariery komunikacyjne</h4>
<ul>
<li>przerywanie, ocenianie, moralizowanie, ironia;</li>
<li>zbyt fachowe słownictwo (żargon) bez wyjaśnienia;</li>
<li>niespójność słów i mowy ciała (mówimy „chętnie pomogę”, ale odwracamy się do monitora);</li>
<li>rozpraszacze: telefon, rozmowy z innym pracownikiem przy kliencie.</li>
</ul>
<h4>Asertywność</h4>
<p>Postawa asertywna to wyrażanie własnego zdania i odmowa z szacunkiem dla klienta, bez agresji i bez uległości. Przykład: „Rozumiem, że to dla Pana ważne, jednak nie mogę przyjąć zwrotu bez dowodu zakupu. Mogę natomiast sprawdzić, czy transakcja jest w systemie.”</p>
<p>Powitanie klienta powinno nastąpić w ciągu kilku sekund od wejścia do działu, nawet jeśli sprzedawca jest zajęty (skinienie głową, „Zaraz do Pani podejdę”).</p>
<div class="tip">Komunikat „ja” („Chciałbym wyjaśnić...”) zamiast „ty” („Pan źle zrozumiał”) łagodzi konflikt. To częste pytanie egzaminacyjne.</div>` },
        { tytul: "Prezentacja towaru i obiekcje", tresc: `<h4>Język korzyści</h4>
<p>Metoda <b>CZK</b> (cecha, zaleta, korzyść), po angielsku FAB:</p>
<div class="tw"><table><tr><th>Cecha</th><th>Zaleta</th><th>Korzyść dla klienta</th></tr>
<tr><td>bateria 5000 mAh</td><td>długo działa bez ładowania</td><td>„Nie musi Pan nosić ładowarki na cały dzień.”</td></tr>
<tr><td>kurtka z membraną</td><td>nie przemaka, oddycha</td><td>„Będzie Pani sucho i komfortowo na wycieczce.”</td></tr></table></div>
<p>Klient kupuje korzyści, nie parametry. Podczas prezentacji warto dać towar do ręki (zaangażowanie zmysłów).</p>
<h4>Obiekcje (zastrzeżenia)</h4>
<ul>
<li><b>Metoda „tak, ale”</b>: przyznanie racji i dodanie argumentu („Tak, jest droższy, ale wystarczy na dłużej”).</li>
<li><b>Metoda bumerangu</b>: zamiana zarzutu w argument („Właśnie dlatego, że jest ciężki, jest stabilny”).</li>
<li><b>Metoda kompensacji</b>: wada równoważona zaletą.</li>
<li><b>Metoda pytań</b>: „Co dokładnie budzi Pana wątpliwość?”</li>
<li><b>Metoda odroczenia</b>: wrócenie do ceny po pokazaniu wartości.</li>
</ul>
<h4>Sygnały gotowości do zakupu</h4>
<p>Klient pyta o gwarancję, dostawę, sposób płatności, ponownie ogląda towar. Wtedy sprzedawca przechodzi do <b>finalizacji</b>: technika alternatywy („Pakuję czarny czy szary?”), podsumowania korzyści lub założenia zakupu.</p>
<h4>Sprzedaż dodatkowa</h4>
<p><b>Cross-selling</b>: produkty uzupełniające (buty i pasta do butów). <b>Up-selling</b>: lepsza wersja (większa pojemność). Sprzedaż dodatkowa ma pomagać klientowi, a nie być nachalna.</p>
<p>Obiekcja cenowa („za drogo”) często oznacza, że klient nie widzi wartości. Pomaga przeliczenie ceny na dzień użytkowania lub porównanie z tańszym modelem i jego ograniczeniami.</p>
<p>Obiekcja cenowa („za drogo”) często oznacza, że klient nie widzi wartości. Pomaga przeliczenie ceny na dzień użytkowania („to 30 gr dziennie przez trzy lata”) lub porównanie z tańszym modelem i jego ograniczeniami. Nie krytykuje się produktów konkurencji ani wyboru klienta. Gdy towaru brak, proponuje się zamiennik o podobnych cechach albo zamówienie z terminem odbioru.</p>
<div class="tip">Na egzaminie odróżnij cechę („wodoodporny do 50 m”) od korzyści („może Pan pływać z zegarkiem”). Poprawna odpowiedź zwykle mówi o korzyści dla klienta.</div>` },
        { tytul: "Klienci trudni i sytuacje szczególne", tresc: `<h4>Klient zdenerwowany</h4>
<ol>
<li>wysłuchaj bez przerywania;</li>
<li>okaż zrozumienie i przeproś za niedogodność (to nie jest przyznanie winy);</li>
<li>zaproponuj rozwiązanie, przyjmij reklamację;</li>
<li>podziękuj i sprawdź, czy klient jest usatysfakcjonowany.</li>
</ol>
<p>Nie podnosi się głosu, nie bierze się uwag osobiście, nie obwinia innych pracowników. Rozmowę z klientem bardzo zdenerwowanym można przenieść w spokojniejsze miejsce lub poprosić kierownika.</p>
<h4>Typologia klientów, postępowanie</h4>
<div class="tw"><table><tr><th>Klient</th><th>Postępowanie</th></tr>
<tr><td>ekspert, „wszystkowiedzący”</td><td>docenić wiedzę, mówić rzeczowo, nie wchodzić w spór</td></tr>
<tr><td>niezdecydowany</td><td>ograniczyć wybór do 2-3 produktów, pomóc decyzją</td></tr>
<tr><td>gadatliwy</td><td>uprzejmie wracać do tematu zakupu</td></tr>
<tr><td>nieufny</td><td>fakty, certyfikaty, gwarancja, możliwość zwrotu</td></tr>
<tr><td>spieszący się</td><td>krótko, konkretnie, szybka obsługa</td></tr>
<tr><td>senior</td><td>spokój, wyraźna mowa, cierpliwość</td></tr></table></div>
<h4>Osoby z niepełnosprawnościami</h4>
<p>Mówi się bezpośrednio do klienta, nie do opiekuna. Osobie niewidomej opisuje się towar i odlicza głośno resztę. Pies asystujący ma prawo wejść do sklepu.</p>
<h4>Sytuacje zabronione prawem</h4>
<ul>
<li>Nie wolno sprzedawać <b>alkoholu i wyrobów tytoniowych</b> osobom poniżej 18 lat. W razie wątpliwości sprzedawca żąda dokumentu potwierdzającego wiek.</li>
<li>Alkoholu nie sprzedaje się osobom nietrzeźwym, na kredyt ani pod zastaw.</li>
<li>Napojów energetycznych z kofeiną lub tauryną nie sprzedaje się osobom poniżej 18 lat (przepis od 2024 r.).</li>
</ul>
<h4>Podejrzenie kradzieży</h4>
<p>Sprzedawca nie przeszukuje klienta. Może poprosić o pokazanie towaru, wezwać ochronę lub policję. Ujęcie obywatelskie jest dopuszczalne tylko w razie schwytania na gorącym uczynku, z niezwłocznym oddaniem w ręce policji.</p>
<div class="tip">Pytania o osoby nieletnie i alkohol to pewniak na egzaminie: odpowiedź to zawsze żądanie dokumentu i odmowa sprzedaży, gdy go brak.</div>` }
      ],
      pytania: [
        Q("Dystans społeczny, typowy dla rozmowy sprzedawcy z klientem, wynosi ok.", "120-360 cm", "do 45 cm", "45-60 cm", "powyżej 5 m", "Strefa osobista to 45-120 cm, społeczna 120-360 cm."),
        Q("Wypowiedź „Rozumiem, że zależy Pani na lekkim modelu do podróży” to przykład", "parafrazy", "pytania zamkniętego", "obiekcji", "metody bumerangu", "Parafraza to powtórzenie własnymi słowami treści klienta."),
        Q("Pytanie „Woli Pan wersję czarną czy srebrną?” to pytanie", "alternatywne", "otwarte", "sugerujące", "retoryczne", "Często stosowane przy finalizacji sprzedaży."),
        Q("Zdanie „Dzięki tej baterii nie będzie Pan musiał ładować telefonu w ciągu dnia” przedstawia", "korzyść dla klienta", "cechę produktu", "obiekcję klienta", "cenę produktu", "Metoda cecha, zaleta, korzyść."),
        Q("Odpowiedź na zarzut „Ten fotel jest ciężki”: „Właśnie dlatego jest stabilny i bezpieczny” to metoda", "bumerangu", "odroczenia", "pytań", "kompensacji", "Zarzut zostaje zamieniony w argument."),
        Q("Klient pyta o termin dostawy i warunki gwarancji. Jest to sygnał", "gotowości do zakupu", "rezygnacji z zakupu", "reklamacji", "obiekcji cenowej", "Wtedy należy przejść do finalizacji."),
        Q("Młody klient chce kupić piwo, a sprzedawca ma wątpliwości co do jego wieku. Sprzedawca powinien", "zażądać dokumentu potwierdzającego wiek", "sprzedać piwo, jeśli klient zapewnia, że jest pełnoletni", "zadzwonić do rodziców", "sprzedać napój bezalkoholowy zamiast piwa bez pytania", "Brak dokumentu oznacza odmowę sprzedaży."),
        Q("Obsługując osobę niewidomą przy płatności gotówką, sprzedawca powinien", "głośno odliczać wydawaną resztę", "podać resztę bez słowa", "zwracać się do jej opiekuna", "odmówić płatności gotówką", "Ułatwia to kontrolę reszty.")
      ]
    },
    {
      id: "kasa", tytul: "Kasa fiskalna i płatności", opis: "Obsłużysz kasę rejestrującą, przyjmiesz każdą formę płatności i rozliczysz utarg.",
      lekcje: [
        { tytul: "Obsługa kasy rejestrującej", tresc: `<h4>Obowiązki</h4>
<ul>
<li>Każdą sprzedaż na rzecz osób fizycznych nieprowadzących działalności i rolników ryczałtowych rejestruje się na kasie <b>przed</b> wydaniem towaru i przyjęciem zapłaty, a <b>paragon</b> wydaje się klientowi.</li>
<li>Kasy <b>online</b> przesyłają dane do <b>Centralnego Repozytorium Kas</b> prowadzonego przez Szefa KAS.</li>
<li>Na początku zmiany kasjer przyjmuje <b>pogotowie kasowe</b> (gotówkę na wydawanie reszty), przelicza je i potwierdza podpisem.</li>
</ul>
<h4>Raporty</h4>
<div class="tw"><table><tr><th>Raport</th><th>Kiedy</th></tr>
<tr><td>raport dobowy fiskalny</td><td>po zakończeniu sprzedaży danego dnia, najpóźniej przed pierwszą sprzedażą następnego dnia</td></tr>
<tr><td>raport miesięczny</td><td>po zakończeniu miesiąca, przed pierwszą sprzedażą w kolejnym</td></tr>
<tr><td>raport niefiskalny (zmianowy, kasjera)</td><td>na koniec zmiany, do rozliczenia kasjera</td></tr></table></div>
<h4>Błędy i zwroty</h4>
<ul>
<li>Pozycję błędną można <b>stornować</b> przed zamknięciem paragonu.</li>
<li>Paragon zamknięty z błędem ujmuje się w <b>ewidencji pomyłek</b> (opis, kwota, oryginał paragonu).</li>
<li>Zwrot towaru i uznaną reklamację ujmuje się w <b>ewidencji zwrotów</b>; potrzebny jest dowód zakupu i protokół podpisany przez klienta.</li>
</ul>
<h4>Faktura do paragonu</h4>
<p>Nabywca może żądać faktury w ciągu <b>3 miesięcy</b> od końca miesiąca zakupu. Firmie (podatnikowi) fakturę do paragonu wystawia się tylko wtedy, gdy na paragonie jest jej <b>NIP</b>. Paragon z NIP na kwotę do <b>450 zł brutto</b> jest fakturą uproszczoną.</p>
<p>Kasjer sprawdza na początku dnia datę i godzinę na wyświetlaczu, ilość papieru i poprawność nazw towarów. Nazwa towaru na paragonie musi pozwalać na jego jednoznaczną identyfikację (np. „mleko 3,2% 1 l”, a nie „towar 1”).</p>
<h4>Awaria kasy</h4>
<p>Przy awarii kasy sprzedaż należy przerwać (lub kontynuować na kasie rezerwowej) i zgłosić serwisowi. Sprzedaży bez kasy nie prowadzi się.</p>
<div class="tip">Pułapka: brak NIP na paragonie oznacza, że przedsiębiorca nie dostanie faktury do tego paragonu. NIP trzeba podać przed wydrukiem paragonu.</div>` },
        { tytul: "Formy płatności i autentyczność pieniędzy", tresc: `<h4>Płatności bezgotówkowe</h4>
<ul>
<li><b>karta debetowa</b>: środki z rachunku klienta; <b>kredytowa</b>: z limitu kredytowego banku;</li>
<li>płatność <b>zbliżeniowa</b>: do 100 zł zwykle bez PIN-u, ale terminal może zażądać PIN-u;</li>
<li><b>BLIK</b>: 6-cyfrowy kod z aplikacji, ważny 2 minuty;</li>
<li><b>cashback</b>: wypłata gotówki przy płatności kartą;</li>
<li>bony i karty podarunkowe, raty, przelew (sprzedaż internetowa).</li>
</ul>
<p>Terminal płatniczy drukuje potwierdzenie transakcji. Przy płatności kartą sprzedawca nie zatrzymuje karty i nie prosi o podanie PIN-u na głos.</p>
<h4>Zabezpieczenia banknotów NBP</h4>
<div class="tw"><table><tr><th>Zabezpieczenie</th><th>Jak sprawdzić</th></tr>
<tr><td>znak wodny</td><td>pod światło widać portret władcy</td></tr>
<tr><td>nitka zabezpieczająca</td><td>pod światło ciemna linia z napisami</td></tr>
<tr><td>recto-verso</td><td>pod światło elementy z obu stron tworzą całość</td></tr>
<tr><td>farba zmienna optycznie</td><td>przy przechylaniu zmienia barwę</td></tr>
<tr><td>druk wypukły</td><td>wyczuwalny dotykiem</td></tr>
<tr><td>elementy w UV</td><td>świecą w lampie ultrafioletowej</td></tr></table></div>
<p>Metoda <b>„dotknij, popatrz pod światło, przechyl”</b>. Banknotu podejrzanego kasjer nie oddaje klientowi; postępuje zgodnie z instrukcją (powiadamia kierownika, policję), banknot trafia do banku i NBP.</p>
<h4>Przyjęcie zapłaty gotówką</h4>
<ol><li>głośno podaj kwotę do zapłaty;</li><li>przyjmij banknot, powiedz jego nominał, odłóż go na wierzch szuflady;</li><li>odlicz resztę, podaj ją z paragonem;</li><li>dopiero potem schowaj banknot do przegródki.</li></ol>
<p>Kasjer przyjmuje także bony i karty podarunkowe według regulaminu sklepu, sprawdzając datę ważności. Reszty z bonu zwykle nie wypłaca się gotówką, jeśli regulamin tak stanowi.</p>
<p>Kasjer przyjmuje także bony i karty podarunkowe według regulaminu sklepu, sprawdzając datę ważności. Reszty z bonu zwykle nie wypłaca się gotówką, jeśli regulamin tak stanowi. Przy płatności kartą odrzuconej przez terminal kasjer nie komentuje sytuacji głośno, tylko dyskretnie proponuje inną formę zapłaty.</p>
<div class="tip">Kolejność z punktu 2 chroni przed sporem „dałem 200, a nie 100 zł”. To częste zadanie sytuacyjne.</div>` },
        { tytul: "Rozliczenie utargu i dokumenty kasowe", tresc: `<h4>Rozliczenie kasjera</h4>
<pre>gotówka należna = pogotowie kasowe + sprzedaż gotówkowa
                  - zwroty gotówkowe - wypłaty z kasy
różnica = gotówka faktyczna - gotówka należna
(ujemna: niedobór kasowy, dodatnia: nadwyżka)</pre>
<p><b>Przykład</b>: pogotowie 300 zł, sprzedaż ogółem 4200 zł, z tego kartą 2600 zł, zwrot gotówkowy 50 zł. Należna gotówka = 300 + (4200 - 2600) - 50 = <b>1850 zł</b>. W szufladzie jest 1840 zł, więc niedobór wynosi 10 zł.</p>
<h4>Dokumenty kasowe</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Zastosowanie</th></tr>
<tr><td><b>KP</b> (kasa przyjmie)</td><td>wpłata gotówki do kasy firmy, np. pogotowia</td></tr>
<tr><td><b>KW</b> (kasa wypłaci)</td><td>wypłata z kasy, np. odprowadzenie utargu</td></tr>
<tr><td>raport kasowy</td><td>zestawienie KP i KW za okres, saldo kasy</td></tr>
<tr><td>dowód wpłaty do banku</td><td>wpłata utargu na rachunek</td></tr></table></div>
<h4>Bezpieczne przechowywanie utargu</h4>
<ul>
<li>Nadmiar gotówki z szuflady przenosi się w ciągu dnia do sejfu (tzw. podjęcie).</li>
<li>Utarg odprowadza się do banku w bezpiecznych kopertach lub przez firmę konwojującą.</li>
<li>Kasjer nie pracuje na cudzej szufladzie i nie udostępnia swojego kodu kasjera.</li>
</ul>
<h4>VAT na paragonie</h4>
<p>Paragon pokazuje sprzedaż według stawek: A 23%, B 8%, C 5%, D 0% (oznaczenia ustalane w kasie). Kwota VAT w cenie brutto: VAT = brutto × stawka ÷ (100 + stawka). Dla 123 zł przy 23%: 123 × 23 ÷ 123 = <b>23 zł</b>.</p>
<p>Różnicę kasową wpisuje się do raportu kasjera i wyjaśnia z kierownikiem. Najczęstsze przyczyny: błędnie wydana reszta, płatność kartą zaksięgowana jako gotówka, pominięty zwrot.</p>
<div class="tip">Przy liczeniu niedoboru nie wliczaj płatności kartą do gotówki w szufladzie. To najczęstszy błąd w zadaniach.</div>` }
      ],
      pytania: [
        Q("Raport dobowy fiskalny sporządza się", "po zakończeniu sprzedaży, najpóźniej przed pierwszą sprzedażą następnego dnia", "raz w tygodniu", "tylko na żądanie urzędu skarbowego", "po każdym paragonie", "Raport miesięczny sporządza się po zakończeniu miesiąca."),
        Q("Kasy online przesyłają dane do", "Centralnego Repozytorium Kas", "ZUS", "UOKiK", "GUS", "Repozytorium prowadzi Szef KAS."),
        Q("Paragon z NIP nabywcy na kwotę do 450 zł brutto jest", "fakturą uproszczoną", "notą korygującą", "dowodem KW", "fakturą zaliczkową", "Do 450 zł brutto paragon z NIP może zastąpić fakturę."),
        Q("Pogotowie kasowe 200 zł, sprzedaż gotówkowa 1500 zł, zwrot gotówkowy 30 zł. Gotówka należna w kasie wynosi", "1670 zł", "1700 zł", "1730 zł", "1500 zł", "200 + 1500 - 30 = 1670 zł."),
        Q("Dokument potwierdzający wypłatę gotówki z kasy to", "KW", "KP", "PZ", "WZ", "KW: kasa wypłaci."),
        Q("Zabezpieczenie banknotu zmieniające barwę przy przechylaniu to", "farba zmienna optycznie", "znak wodny", "nitka zabezpieczająca", "recto-verso", "Sprawdza się je, przechylając banknot."),
        Q("Kasjer otrzymał od klienta banknot 200 zł. Powinien", "głośno podać nominał i odłożyć banknot na wierzch do czasu wydania reszty", "od razu schować banknot pod szufladę", "oddać banknot klientowi", "wydać resztę bez komentarza", "Chroni to przed sporem o nominał."),
        Q("Kwota VAT zawarta w cenie brutto 246 zł przy stawce 23% wynosi", "46 zł", "56,58 zł", "23 zł", "200 zł", "246 × 23 ÷ 123 = 46 zł.")
      ]
    },
    {
      id: "reklamacje-inwentaryzacja", tytul: "Reklamacje, zwroty i inwentaryzacja", opis: "Rozpatrzysz reklamację zgodnie z prawem konsumenta i przeprowadzisz spis z natury.",
      lekcje: [
        { tytul: "Niezgodność towaru z umową", tresc: `<h4>Zasady od 2023 r.</h4>
<p>Zgodnie z ustawą o prawach konsumenta sprzedawca odpowiada za <b>brak zgodności towaru z umową</b> istniejący w chwili dostarczenia i ujawniony w ciągu <b>2 lat</b>. Przez 2 lata obowiązuje <b>domniemanie</b>, że wada istniała przy wydaniu towaru, więc to sprzedawca musiałby udowodnić, że jest inaczej.</p>
<h4>Kolejność uprawnień konsumenta</h4>
<ol>
<li><b>naprawa</b> lub <b>wymiana</b> (wybiera konsument; sprzedawca może zmienić wybór, gdy wybrany sposób jest niemożliwy lub wymaga nadmiernych kosztów);</li>
<li><b>obniżenie ceny</b> lub <b>odstąpienie od umowy</b>, gdy: sprzedawca odmówił naprawy i wymiany, nie wykonał ich, wada się powtarza albo jest tak istotna, że uzasadnia to od razu.</li>
</ol>
<p>Od umowy nie można odstąpić, gdy niezgodność jest <b>nieistotna</b>. Koszty naprawy, wymiany i transportu ponosi sprzedawca. Zwrot pieniędzy następuje w ciągu <b>14 dni</b>.</p>
<h4>Termin odpowiedzi</h4>
<p>Sprzedawca odpowiada na reklamację w ciągu <b>14 dni</b>. Brak odpowiedzi oznacza uznanie reklamacji.</p>
<h4>Protokół reklamacyjny</h4>
<ul><li>dane klienta i sprzedawcy, data zgłoszenia;</li><li>nazwa towaru, data zakupu, dowód zakupu (paragon, wyciąg z karty);</li><li>opis wady i data jej stwierdzenia;</li><li>żądanie konsumenta;</li><li>podpisy obu stron, kopia dla klienta.</li></ul>
<h4>Gwarancja</h4>
<p>Jest dobrowolna i wynika z dokumentu gwarancyjnego. Gdy gwarant nie podał terminu, wynosi on <b>2 lata</b> od wydania rzeczy. Konsument sam wybiera, czy reklamuje u sprzedawcy, czy z gwarancji.</p>
<p>Sprzedawca może przyjąć reklamację nawet bez oryginalnego opakowania. Brak opakowania nie odbiera konsumentowi uprawnień.</p>
<div class="tip">Pułapka: sprzedawca nie może odesłać klienta „do serwisu producenta”, jeśli klient reklamuje u sprzedawcy. Paragon nie jest jedynym dowodem zakupu.</div>` },
        { tytul: "Zwroty i odstąpienie od umowy", tresc: `<h4>Sklep stacjonarny</h4>
<p>Zwrot <b>pełnowartościowego</b> towaru kupionego w sklepie stacjonarnym nie jest obowiązkiem prawnym. Zależy od regulaminu sklepu (np. „zwrot w 30 dni z paragonem”). Jeżeli sklep ogłosił taką możliwość, musi jej przestrzegać.</p>
<h4>Umowa na odległość i poza lokalem</h4>
<ul>
<li>Konsument może odstąpić od umowy <b>w ciągu 14 dni</b> bez podania przyczyny. Termin liczy się od objęcia rzeczy w posiadanie (przy usługach od zawarcia umowy).</li>
<li>Gdy przedsiębiorca nie poinformował o tym prawie, termin wydłuża się o <b>12 miesięcy</b>.</li>
<li>Przedsiębiorca zwraca płatność wraz z kosztem najtańszej zwykłej dostawy w ciągu <b>14 dni</b> od otrzymania oświadczenia. Może wstrzymać zwrot do chwili otrzymania rzeczy.</li>
<li>Konsument odsyła rzecz w ciągu 14 dni i zwykle ponosi koszt odesłania.</li>
</ul>
<h4>Wyjątki: brak prawa odstąpienia</h4>
<div class="tw"><table><tr><th>Przykład</th><th>Powód</th></tr>
<tr><td>garnitur szyty na miarę</td><td>towar wg specyfikacji konsumenta</td></tr>
<tr><td>świeże pieczywo, kwiaty</td><td>szybko się psują</td></tr>
<tr><td>rozpakowana bielizna, kosmetyk z zerwaną folią</td><td>względy higieniczne</td></tr>
<tr><td>płyta, gra z otwartym opakowaniem</td><td>nagranie w zapieczętowanym opakowaniu</td></tr>
<tr><td>gazeta, czasopismo</td><td>prasa (poza prenumeratą)</td></tr></table></div>
<h4>Instytucje pomocy</h4>
<p>Miejski lub powiatowy <b>rzecznik konsumentów</b> (bezpłatna porada, pomoc w sporze), <b>UOKiK</b> (praktyki naruszające zbiorowe interesy konsumentów), <b>Inspekcja Handlowa</b> (kontrole, mediacje, stałe sądy polubowne), Europejskie Centrum Konsumenckie (spory z firmami z UE).</p>
<p>Konsument może złożyć oświadczenie o odstąpieniu na formularzu sprzedawcy lub w dowolnej formie (np. e-mailem). Odpowiada za zmniejszenie wartości rzeczy, jeśli korzystał z niej ponad potrzebę sprawdzenia jej charakteru i działania.</p>
<div class="tip">Na egzaminie odróżnij: 14 dni na odstąpienie dotyczy internetu i sprzedaży poza lokalem, a nie zakupów w sklepie stacjonarnym.</div>` },
        { tytul: "Inwentaryzacja i ubytki", tresc: `<h4>Metody inwentaryzacji</h4>
<ul>
<li><b>spis z natury</b>: policzenie, zważenie, zmierzenie towarów; podstawowa metoda w handlu;</li>
<li><b>potwierdzenie sald</b>: należności od kontrahentów;</li>
<li><b>weryfikacja</b>: porównanie ksiąg z dokumentami.</li>
</ul>
<h4>Terminy (ustawa o rachunkowości)</h4>
<p>Spis z natury przeprowadza się na ostatni dzień roku obrotowego. Towary w punktach sprzedaży detalicznej można spisywać <b>raz na 2 lata</b>, zapasy w strzeżonych magazynach z ewidencją ilościowo-wartościową <b>raz na 4 lata</b>. Dodatkowo inwentaryzację robi się przy zmianie osoby materialnie odpowiedzialnej, po kradzieży, pożarze, powodzi.</p>
<h4>Przebieg spisu</h4>
<ol>
<li>zarządzenie kierownika, powołanie <b>komisji inwentaryzacyjnej</b> i zespołów spisowych (co najmniej 2 osoby);</li>
<li>przygotowanie pola spisowego: uporządkowanie towarów, wstrzymanie przyjęć i wydań;</li>
<li>spis na <b>numerowanych arkuszach spisowych</b>, długopisem, bez wymazywania. Błąd przekreśla się, wpisuje poprawny zapis i parafuje;</li>
<li>wycena, porównanie ze stanem księgowym i ustalenie różnic;</li>
<li>wyjaśnienie różnic i rozliczenie.</li>
</ol>
<h4>Różnice inwentaryzacyjne</h4>
<pre>różnica = stan rzeczywisty - stan księgowy
przykład: księgowo 1250 szt., spisano 1238 szt.
niedobór = 12 szt.</pre>
<p>Niedobór dzieli się na <b>niezawiniony</b> (ubytki naturalne w granicach norm: wysychanie, kruszenie, parowanie) i <b>zawiniony</b> (kradzież, niedbalstwo), za który odpowiada pracownik z umową o odpowiedzialności materialnej. Normy ubytków naturalnych ustala kierownik jednostki.</p>
<h4>Rotacja zapasów</h4>
<pre>średni zapas = (zapas początkowy + zapas końcowy) ÷ 2
wskaźnik rotacji w dniach = średni zapas × liczba dni ÷ sprzedaż</pre>
<p>Arkusz spisowy podpisują członkowie zespołu spisowego i osoba materialnie odpowiedzialna. Po zakończeniu spisu nie wolno już dopisywać pozycji.</p>
<div class="tip">Zapamiętaj: w arkuszu spisowym nie używa się ołówka ani korektora. Niedobór w normach ubytków naturalnych nie obciąża pracownika.</div>` }
      ],
      pytania: [
        Q("Sprzedawca odpowiada wobec konsumenta za brak zgodności towaru z umową ujawniony w ciągu", "2 lat od wydania towaru", "1 roku", "6 miesięcy", "14 dni", "Przez 2 lata obowiązuje też domniemanie istnienia wady."),
        Q("W pierwszej kolejności konsument reklamujący wadliwy towar może żądać", "naprawy lub wymiany", "wyłącznie zwrotu pieniędzy", "tylko obniżenia ceny", "odszkodowania od producenta", "Obniżenie ceny i odstąpienie przysługują w dalszej kolejności."),
        Q("Gdy sprzedawca nie odpowie na reklamację konsumenta w ciągu 14 dni, oznacza to", "uznanie reklamacji", "odrzucenie reklamacji", "przedłużenie terminu o 30 dni", "przekazanie sprawy do sądu", "Milczenie sprzedawcy działa na korzyść konsumenta."),
        Q("Konsument nie może odstąpić od umowy zawartej przez internet, jeśli kupił", "garnitur szyty na jego miarę", "telewizor", "książkę", "buty sportowe", "Towar wykonany według specyfikacji konsumenta jest wyjątkiem."),
        Q("Gdy sklep internetowy nie poinformował konsumenta o prawie odstąpienia, termin ten", "wydłuża się o 12 miesięcy", "skraca się do 7 dni", "nie ulega zmianie", "wygasa", "Wynika to z ustawy o prawach konsumenta."),
        Q("Podstawową metodą inwentaryzacji towarów w sklepie jest", "spis z natury", "potwierdzenie sald", "weryfikacja dokumentów", "analiza SWOT", "Polega na policzeniu, zważeniu i zmierzeniu towarów."),
        Q("Stan księgowy 840 szt., stan rzeczywisty 852 szt. Różnica inwentaryzacyjna to", "nadwyżka 12 szt.", "niedobór 12 szt.", "niedobór 852 szt.", "brak różnicy", "852 - 840 = +12, wynik dodatni to nadwyżka."),
        Q("Ubytek towaru wynikający z wysychania w granicach norm jest niedoborem", "niezawinionym", "zawinionym", "pozornym", "nadzwyczajnym", "Ubytki naturalne w granicach norm nie obciążają pracownika.")
      ]
    }
  ]);

  pod("HAN.02", [
    {
      id: "marketing", tytul: "Marketing i badania rynku", opis: "Przeprowadzisz badanie rynku, przeanalizujesz produkt i dobierzesz strategię marketingową.",
      lekcje: [
        { tytul: "Marketing mix i cykl życia produktu", tresc: `<h4>Koncepcja 4P</h4>
<div class="tw"><table><tr><th>Element</th><th>Decyzje</th></tr>
<tr><td><b>Product</b> (produkt)</td><td>jakość, marka, opakowanie, asortyment, serwis</td></tr>
<tr><td><b>Price</b> (cena)</td><td>poziom ceny, rabaty, warunki płatności</td></tr>
<tr><td><b>Place</b> (dystrybucja)</td><td>kanały, logistyka, lokalizacja</td></tr>
<tr><td><b>Promotion</b> (promocja)</td><td>reklama, promocja sprzedaży, PR, sprzedaż osobista</td></tr></table></div>
<p>W usługach rozszerza się to do <b>7P</b>: dodatkowo People (personel), Process (proces obsługi), Physical evidence (otoczenie materialne). Z perspektywy klienta mówi się o <b>4C</b>: korzyść, koszt, wygoda, komunikacja.</p>
<h4>Cykl życia produktu</h4>
<ol>
<li><b>wprowadzenie</b>: niska sprzedaż, wysokie koszty promocji, często strata;</li>
<li><b>wzrost</b>: szybki wzrost sprzedaży i zysku, pojawia się konkurencja;</li>
<li><b>dojrzałość</b>: sprzedaż najwyższa, ale stabilna, walka cenowa;</li>
<li><b>schyłek</b>: spadek sprzedaży, decyzja o modernizacji lub wycofaniu.</li>
</ol>
<h4>Macierz BCG</h4>
<div class="tw"><table><tr><th></th><th>Wysoki udział w rynku</th><th>Niski udział w rynku</th></tr>
<tr><td><b>Wysoka dynamika rynku</b></td><td>gwiazdy</td><td>znaki zapytania</td></tr>
<tr><td><b>Niska dynamika rynku</b></td><td>dojne krowy</td><td>psy</td></tr></table></div>
<p>„Dojne krowy” finansują rozwój „znaków zapytania”. „Psy” zwykle się wycofuje.</p>
<h4>Strategie cenowe</h4>
<ul>
<li><b>zbierania śmietanki</b> (skimming): wysoka cena na start, dla innowacji (nowe smartfony);</li>
<li><b>penetracji rynku</b>: niska cena na start, aby szybko zdobyć udział;</li>
<li>cena prestiżowa, cena psychologiczna, ceny dyskontowe.</li>
</ul>
<h4>Poziomy produktu</h4>
<p><b>rdzeń</b> (podstawowa korzyść, np. komunikacja w telefonie), <b>produkt rzeczywisty</b> (marka, design, opakowanie, jakość), <b>produkt poszerzony</b> (gwarancja, dostawa, serwis, instalacja). Konkurencja na dojrzałych rynkach toczy się głównie na poziomie produktu poszerzonego.</p>
<p>Działania w fazie dojrzałości: modyfikacja produktu, nowe zastosowania, nowe segmenty, promocje lojalnościowe, aby wydłużyć tę fazę.</p>
<div class="tip">Kluczowa pułapka: najwyższa sprzedaż występuje w fazie dojrzałości, a najszybszy przyrost sprzedaży w fazie wzrostu.</div>` },
        { tytul: "Segmentacja i analiza otoczenia", tresc: `<h4>Kryteria segmentacji</h4>
<ul>
<li><b>geograficzne</b>: region, wielkość miejscowości, klimat;</li>
<li><b>demograficzne</b>: wiek, płeć, dochód, wykształcenie, wielkość rodziny;</li>
<li><b>psychograficzne</b>: styl życia, wartości, osobowość;</li>
<li><b>behawioralne</b>: częstotliwość zakupu, lojalność, poszukiwane korzyści.</li>
</ul>
<p>Strategie obsługi segmentów: <b>niezróżnicowana</b> (jedna oferta dla całego rynku), <b>zróżnicowana</b> (różne oferty dla kilku segmentów), <b>skoncentrowana</b> (jeden segment, nisza).</p>
<h4>Analiza SWOT</h4>
<div class="tw"><table><tr><th></th><th>Pozytywne</th><th>Negatywne</th></tr>
<tr><td>Wewnętrzne</td><td><b>S</b> mocne strony (np. doświadczona kadra)</td><td><b>W</b> słabe strony (np. mały magazyn)</td></tr>
<tr><td>Zewnętrzne</td><td><b>O</b> szanse (np. nowe osiedle obok)</td><td><b>T</b> zagrożenia (np. nowy dyskont)</td></tr></table></div>
<h4>Analiza PEST i 5 sił Portera</h4>
<p><b>PEST</b> bada makrootoczenie: polityczno-prawne, ekonomiczne, społeczne, technologiczne. <b>Model 5 sił Portera</b>: rywalizacja w sektorze, groźba nowych konkurentów, groźba substytutów, siła przetargowa dostawców, siła przetargowa nabywców.</p>
<h4>Kanały dystrybucji</h4>
<ul>
<li><b>bezpośredni</b>: producent, konsument (sklep firmowy, internet);</li>
<li><b>pośredni krótki</b>: producent, detalista, konsument;</li>
<li><b>pośredni długi</b>: producent, hurtownik, detalista, konsument.</li>
</ul>
<p>Dystrybucja <b>intensywna</b> (wszędzie: napoje, pieczywo), <b>selektywna</b> (wybrani sprzedawcy: RTV), <b>wyłączna</b> (jeden dealer w regionie: samochody luksusowe).</p>
<h4>Wnioski z SWOT</h4>
<p>Strategia <b>agresywna</b> (S i O): wykorzystać mocne strony do szans. <b>Konkurencyjna</b> (W i O): poprawić słabości, by skorzystać z szans. <b>Konserwatywna</b> (S i T): mocnymi stronami bronić się przed zagrożeniami. <b>Defensywna</b> (W i T): przetrwać, ograniczyć działalność.</p>
<p><b>Pozycjonowanie</b> to budowanie wyróżniającego wizerunku w umysłach klientów, np. „najtańszy w okolicy” albo „sklep z produktami lokalnymi”.</p>
<div class="tip">W SWOT konkurencja i przepisy to zawsze czynniki zewnętrzne (O lub T), a personel, lokal i finanse firmy to czynniki wewnętrzne (S lub W).</div>` },
        { tytul: "Metody badań rynku", tresc: `<h4>Źródła danych</h4>
<p><b>Wtórne</b> (zza biurka, desk research): GUS, raporty branżowe, dane z kas i programu lojalnościowego. Tańsze i szybsze. <b>Pierwotne</b>: zbierane specjalnie do badania, droższe, ale dokładnie dopasowane.</p>
<h4>Metody</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th></tr>
<tr><td>CAPI / PAPI</td><td>wywiad osobisty z komputerem / z papierowym kwestionariuszem</td></tr>
<tr><td>CATI</td><td>wywiad telefoniczny wspomagany komputerowo</td></tr>
<tr><td>CAWI</td><td>ankieta internetowa</td></tr>
<tr><td>IDI</td><td>indywidualny wywiad pogłębiony (jakościowy)</td></tr>
<tr><td>FGI</td><td>zogniskowany wywiad grupowy, 6-10 osób z moderatorem</td></tr>
<tr><td>obserwacja</td><td>np. ścieżki klientów w sklepie, tajemniczy klient</td></tr>
<tr><td>eksperyment</td><td>np. test dwóch cen w dwóch sklepach</td></tr></table></div>
<h4>Dobór próby</h4>
<ul>
<li><b>losowy</b>: każdy członek populacji ma szansę trafić do próby, wyniki można uogólniać;</li>
<li><b>kwotowy</b>: próba odwzorowuje strukturę populacji (np. 52% kobiet);</li>
<li><b>celowy</b> lub dogodnościowy: tańszy, ale mniej reprezentatywny.</li>
</ul>
<h4>Kwestionariusz</h4>
<ul>
<li>pytania <b>zamknięte</b> (jednokrotnego i wielokrotnego wyboru), <b>otwarte</b>, <b>półotwarte</b> (z opcją „inne”);</li>
<li><b>skala Likerta</b>: od „zdecydowanie się nie zgadzam” do „zdecydowanie się zgadzam”;</li>
<li><b>metryczka</b> (wiek, płeć, miejsce zamieszkania) zwykle na końcu;</li>
<li>pytania jednoznaczne, bez sugestii, jedno zagadnienie w pytaniu.</li>
</ul>
<h4>Etapy badania</h4>
<p>określenie problemu, plan badania, zebranie danych, analiza, raport z wnioskami.</p>
<p>Badanie <b>ilościowe</b> odpowiada na pytania „ile?” i „jak często?” na dużej próbie. Badanie <b>jakościowe</b> wyjaśnia „dlaczego?” na małej grupie. Wyniki przedstawia się w tabelach i na wykresach (kołowy dla struktury, słupkowy dla porównań, liniowy dla zmian w czasie).</p>
<p>Koszt badania rośnie wraz z wielkością próby i udziałem ankieterów, dlatego badania CAWI są najtańsze.</p>
<div class="tip">Pytanie „Czy nie uważa Pan, że nasze ceny są niskie?” jest sugerujące i błędne. Na egzaminie wskaż je jako przykład wadliwego pytania.</div>` }
      ],
      pytania: [
        Q("Faza cyklu życia produktu, w której sprzedaż jest najwyższa, ale już się nie zwiększa, to", "dojrzałość", "wprowadzenie", "wzrost", "schyłek", "W fazie wzrostu sprzedaż rośnie najszybciej."),
        Q("Produkt o wysokim udziale w rynku o niskiej dynamice wzrostu w macierzy BCG to", "dojna krowa", "gwiazda", "znak zapytania", "pies", "Dojne krowy przynoszą stabilne wpływy."),
        Q("Ustalenie wysokiej ceny na nowy, innowacyjny produkt to strategia", "zbierania śmietanki", "penetracji rynku", "ceny dyskontowej", "dumpingu", "Skimming: wysoka cena na start."),
        Q("Otwarcie dużego dyskontu w pobliżu sklepu w analizie SWOT to", "zagrożenie", "szansa", "słaba strona", "mocna strona", "To czynnik zewnętrzny i negatywny."),
        Q("Ankieta prowadzona przez internet to metoda", "CAWI", "CATI", "CAPI", "FGI", "CATI jest telefoniczna, CAPI osobista z komputerem."),
        Q("Zogniskowany wywiad grupowy z moderatorem oznacza się skrótem", "FGI", "IDI", "PAPI", "CAWI", "Focus Group Interview."),
        Q("Dane GUS wykorzystane w badaniu rynku są danymi", "wtórnymi", "pierwotnymi", "eksperymentalnymi", "jakościowymi z wywiadu", "Nie zebrano ich specjalnie do tego badania."),
        Q("Sprzedaż samochodów luksusowej marki przez jednego dealera w regionie to dystrybucja", "wyłączna", "intensywna", "selektywna", "masowa", "Ogranicza się liczbę pośredników do jednego.")
      ]
    },
    {
      id: "promocja-ecommerce", tytul: "Promocja i handel internetowy", opis: "Zaplanujesz działania promocyjne, policzysz ich efektywność i poprowadzisz sprzedaż internetową zgodnie z prawem.",
      lekcje: [
        { tytul: "Narzędzia promocji", tresc: `<h4>Promotion mix</h4>
<div class="tw"><table><tr><th>Narzędzie</th><th>Przykłady</th><th>Cecha</th></tr>
<tr><td>reklama</td><td>TV, radio, billboard, internet</td><td>masowa, płatna, bezosobowa</td></tr>
<tr><td>promocja sprzedaży</td><td>rabaty, kupony, próbki, konkursy, gratisy</td><td>krótkotrwały wzrost sprzedaży</td></tr>
<tr><td>sprzedaż osobista</td><td>przedstawiciel handlowy, doradca</td><td>bezpośredni kontakt, najdroższa w przeliczeniu na klienta</td></tr>
<tr><td>public relations</td><td>sponsoring, konferencje prasowe, artykuły</td><td>buduje wizerunek</td></tr>
<tr><td>marketing bezpośredni</td><td>mailing, newsletter, SMS</td><td>dopasowany do odbiorcy</td></tr></table></div>
<h4>Model AIDA</h4>
<p>Skuteczny przekaz reklamowy przeprowadza odbiorcę przez etapy: <b>A</b>ttention (uwaga), <b>I</b>nterest (zainteresowanie), <b>D</b>esire (pożądanie), <b>A</b>ction (działanie, zakup).</p>
<h4>Strategie push i pull</h4>
<p><b>Push</b> (pchania): producent zachęca pośredników (rabaty dla hurtowni, premie dla sprzedawców). <b>Pull</b> (ciągnięcia): reklama skierowana do konsumentów, którzy sami szukają produktu w sklepach.</p>
<h4>Granice prawne</h4>
<ul>
<li><b>Reklama porównawcza</b> jest dozwolona, jeśli nie wprowadza w błąd i porównuje obiektywnie cechy towarów o tym samym przeznaczeniu.</li>
<li>Zakazana jest reklama wprowadzająca w błąd, reklama ukryta oraz reklama napojów alkoholowych poza piwem (z ograniczeniami).</li>
<li>Reklamy wyrobów tytoniowych są zakazane.</li>
</ul>
<h4>Budżet promocji</h4>
<p>Metody: procent od sprzedaży (np. 3% planowanych przychodów), dopasowanie do konkurencji, metoda zadaniowa (koszt osiągnięcia konkretnego celu), metoda „na ile nas stać”.</p>
<h4>Promocja w miejscu sprzedaży</h4>
<p>Materiały <b>POS</b> (point of sale): plakaty, stojaki, wobblery, shelf-linery, ekrany cyfrowe. Degustacje i pokazy prowadzi się w strefie dobrze widocznej, ale nieblokującej ruchu klientów. Skuteczność promocji ocenia się, porównując sprzedaż przed, w trakcie i po akcji (efekt „dołka” po promocji, gdy klienci zrobili zapasy).</p>
<div class="tip">Kupon rabatowy i degustacja to promocja sprzedaży, a nie reklama. Sponsoring lokalnego festynu to PR.</div>` },
        { tytul: "Sprzedaż internetowa", tresc: `<h4>Modele e-commerce</h4>
<ul>
<li><b>B2B</b>: firma, firma (platformy hurtowe);</li>
<li><b>B2C</b>: firma, konsument (sklep internetowy);</li>
<li><b>C2C</b>: konsument, konsument (serwisy ogłoszeniowe);</li>
<li><b>marketplace</b>: platforma, na której sprzedaje wielu sprzedawców.</li>
</ul>
<h4>Obowiązki sklepu internetowego</h4>
<ul>
<li><b>regulamin</b> udostępniony przed zawarciem umowy, dane firmy (NIP, adres, kontakt);</li>
<li>informacja o cenie łącznej z podatkami i kosztach dostawy;</li>
<li>przycisk zamówienia z wyraźną informacją, że oznacza obowiązek zapłaty (np. „Zamawiam i płacę”);</li>
<li>potwierdzenie zawarcia umowy na trwałym nośniku (np. e-mail);</li>
<li>pouczenie o prawie odstąpienia w ciągu 14 dni i wzór formularza odstąpienia;</li>
<li>informacja, czy opinie klientów są weryfikowane.</li>
</ul>
<h4>RODO w handlu</h4>
<p>Dane osobowe przetwarza się na podstawie prawnej (umowa, zgoda, obowiązek prawny, prawnie uzasadniony interes). Na wysyłkę newslettera potrzebna jest <b>zgoda</b>. Klient ma prawo do dostępu, sprostowania, usunięcia danych i sprzeciwu. Naruszenie ochrony danych zgłasza się do <b>Prezesa UODO</b> w ciągu 72 godzin.</p>
<h4>Promocja w internecie</h4>
<ul><li><b>SEO</b>: optymalizacja strony pod wyszukiwarkę (ruch bezpłatny);</li><li><b>SEM / PPC</b>: płatne reklamy w wyszukiwarce, płaci się za kliknięcie;</li><li>marketing w mediach społecznościowych, influencerzy (współpraca musi być oznaczona jako reklama);</li><li>remarketing: ponowne wyświetlanie reklam osobom, które odwiedziły sklep.</li></ul>
<p>Płatności w e-sklepie: szybkie przelewy, BLIK, karty, płatność przy odbiorze, odroczone płatności. Dostawa: kurier, paczkomaty, odbiór osobisty (click and collect).</p>
<p>Sklep internetowy musi też zapewnić bezpieczne połączenie (szyfrowanie HTTPS), politykę prywatności i informację o plikach cookies. Ceny promocyjne w e-sklepie podlegają tym samym zasadom co w sklepie stacjonarnym, w tym obowiązkowi podania najniższej ceny z 30 dni.</p>
<div class="tip">SEO nie jest reklamą płatną za kliknięcie. To SEM (PPC) jest płatne.</div>` },
        { tytul: "Wskaźniki skuteczności działań", tresc: `<h4>Wskaźniki e-commerce</h4>
<pre>współczynnik konwersji = liczba transakcji ÷ liczba odwiedzin × 100%
CTR = liczba kliknięć ÷ liczba wyświetleń × 100%
średnia wartość koszyka = przychód ÷ liczba transakcji
CPC = koszt kampanii ÷ liczba kliknięć</pre>
<p><b>Przykład</b>: 20 000 odwiedzin, 300 zamówień, przychód 45 000 zł. Konwersja = 300 ÷ 20 000 × 100% = <b>1,5%</b>, średni koszyk = 45 000 ÷ 300 = <b>150 zł</b>.</p>
<h4>Efektywność promocji</h4>
<pre>przyrost sprzedaży = sprzedaż w czasie promocji - sprzedaż przed promocją
ROI = (zysk z kampanii - koszt kampanii) ÷ koszt kampanii × 100%</pre>
<p><b>Przykład</b>: kampania kosztowała 4000 zł, dodatkowy zysk brutto ze sprzedaży wyniósł 10 000 zł. ROI = (10 000 - 4000) ÷ 4000 × 100% = <b>150%</b>.</p>
<h4>Lojalność klientów</h4>
<ul>
<li><b>CRM</b>: system zarządzania relacjami z klientami (historia zakupów, kontakty, segmentacja);</li>
<li><b>programy lojalnościowe</b>: punkty, karty stałego klienta, rabaty progowe;</li>
<li><b>NPS</b>: „Na ile prawdopodobne jest, że polecisz nas znajomym?” (skala 0-10). NPS = % promotorów (9-10) - % krytyków (0-6).</li>
</ul>
<p><b>Przykład NPS</b>: 100 ankiet, 55 osób dało 9-10, 25 osób 7-8, 20 osób 0-6. NPS = 55 - 20 = <b>35</b>.</p>
<p>Porzucony koszyk (dodanie do koszyka bez zakupu) to sygnał problemu: wysokie koszty dostawy, skomplikowany formularz lub brak preferowanej płatności.</p>
<p>Wskaźniki porównuje się w czasie (miesiąc do miesiąca) i z celami kampanii.</p>
<div class="tip">W NPS osoby oceniające 7-8 (pasywni) nie wchodzą do wzoru. To typowa pułapka.</div>` }
      ],
      pytania: [
        Q("Etapy oddziaływania reklamy według modelu AIDA to", "uwaga, zainteresowanie, pożądanie, działanie", "analiza, informacja, decyzja, akcja", "atrakcja, interes, dystrybucja, akceptacja", "akcja, impuls, dążenie, analiza", "Attention, Interest, Desire, Action."),
        Q("Rozdawanie próbek i degustacje w sklepie to narzędzia", "promocji sprzedaży", "public relations", "reklamy prasowej", "sprzedaży osobistej", "Mają krótkoterminowo zwiększyć sprzedaż."),
        Q("Strategia, w której producent zachęca hurtowników rabatami do zakupu większej ilości towaru, to strategia", "push", "pull", "penetracji", "skimmingu", "Push: pchanie produktu przez kanał dystrybucji."),
        Q("Sklep internetowy miał 40 000 odwiedzin i 800 zamówień. Współczynnik konwersji wynosi", "2%", "5%", "0,2%", "20%", "800 ÷ 40 000 × 100% = 2%."),
        Q("Płatna reklama w wyszukiwarce rozliczana za kliknięcie to", "PPC", "SEO", "CRM", "NPS", "SEO to bezpłatne pozycjonowanie."),
        Q("Na wysyłanie klientowi newslettera z ofertami sklep potrzebuje", "zgody klienta", "zgody UOKiK", "tylko numeru NIP klienta", "pisemnej umowy notarialnej", "Wymagają tego RODO i przepisy o komunikacji elektronicznej."),
        Q("Kampania kosztowała 2000 zł, a przyniosła 5000 zł dodatkowego zysku. ROI wynosi", "150%", "250%", "40%", "60%", "(5000 - 2000) ÷ 2000 × 100% = 150%."),
        Q("W badaniu NPS było 60% promotorów, 25% pasywnych i 15% krytyków. NPS wynosi", "45", "35", "85", "60", "60 - 15 = 45; pasywnych się nie liczy.")
      ]
    },
    {
      id: "zaopatrzenie", tytul: "Zaopatrzenie i zapasy", opis: "Wybierzesz dostawcę, ustalisz wielkość i moment zamówienia oraz zarządzisz zapasami.",
      lekcje: [
        { tytul: "Wybór dostawcy", tresc: `<h4>Etapy zakupu</h4>
<ol><li>określenie potrzeb (rodzaj, ilość, termin);</li><li><b>zapytanie ofertowe</b> do kilku dostawców;</li><li>porównanie ofert;</li><li>negocjacje i wybór;</li><li><b>zamówienie</b>, potwierdzenie, umowa;</li><li>kontrola dostawy i ocena dostawcy.</li></ol>
<h4>Metoda punktowa z wagami</h4>
<p>Każde kryterium ma wagę (suma wag = 1). Ocenę dostawcy mnoży się przez wagę i sumuje.</p>
<div class="tw"><table><tr><th>Kryterium</th><th>Waga</th><th>Dostawca A</th><th>Dostawca B</th></tr>
<tr><td>cena</td><td>0,5</td><td>4</td><td>5</td></tr>
<tr><td>termin dostawy</td><td>0,3</td><td>5</td><td>3</td></tr>
<tr><td>warunki płatności</td><td>0,2</td><td>4</td><td>3</td></tr>
<tr><td><b>wynik</b></td><td></td><td>2 + 1,5 + 0,8 = <b>4,3</b></td><td>2,5 + 0,9 + 0,6 = <b>4,0</b></td></tr></table></div>
<p>Wybieramy dostawcę A, mimo że B jest tańszy. Kryterium z najwyższą wagą nie przesądza o wyniku samo.</p>
<h4>Oferta a zaproszenie do zawarcia umowy</h4>
<ul>
<li><b>oferta</b> (art. 66 KC): stanowcza propozycja zawarcia umowy z jej istotnymi postanowieniami; wiąże oferenta;</li>
<li><b>zaproszenie do zawarcia umowy</b> (art. 71 KC): ogłoszenia, cenniki, reklamy skierowane do ogółu. W razie wątpliwości nie są ofertą;</li>
<li>wyjątek: towar <b>wystawiony w sklepie z ceną</b> uważa się za ofertę (art. 543 KC).</li>
</ul>
<h4>Elementy zamówienia</h4>
<p>numer i data, dane zamawiającego i dostawcy, nazwa towaru, ilość, cena jednostkowa, termin i miejsce dostawy, warunki płatności, podpis.</p>
<p>Ocena dostawcy po realizacji obejmuje terminowość, kompletność dostaw, jakość i reakcję na reklamacje. Dostawców dzieli się na strategicznych, stałych i okazjonalnych.</p>
<p>Przed zamówieniem warto sprawdzić wiarygodność dostawcy: wpis w KRS lub CEIDG, numer NIP na białej liście podatników VAT, opinie innych odbiorców.</p>
<div class="tip">W metodzie punktowej zawsze sprawdź, czy suma wag wynosi 1, a wynik licz osobno dla każdego dostawcy, wiersz po wierszu.</div>` },
        { tytul: "Ile i kiedy zamawiać", tresc: `<h4>Punkt ponownego zamówienia</h4>
<pre>ROP = dzienne zużycie × czas realizacji dostawy (dni) + zapas bezpieczeństwa
przykład: 40 szt./dzień × 5 dni + 100 szt. = 300 szt.</pre>
<p>Gdy zapas spadnie do 300 sztuk, składamy zamówienie (system <b>stałej wielkości zamówienia</b>). W systemie <b>stałego cyklu</b> zamawia się w stałych odstępach czasu (np. co tydzień) zmienną ilość, uzupełniając zapas do poziomu maksymalnego.</p>
<h4>Ekonomiczna wielkość zamówienia (wzór Wilsona)</h4>
<pre>EOQ = √(2 × Z × Kz ÷ Ku)
Z  - roczne zapotrzebowanie
Kz - koszt złożenia jednego zamówienia
Ku - roczny koszt utrzymania jednej jednostki zapasu
przykład: Z = 3200 szt., Kz = 50 zł, Ku = 2 zł
EOQ = √(2 × 3200 × 50 ÷ 2) = √160 000 = 400 szt.
liczba zamówień w roku = 3200 ÷ 400 = 8</pre>
<p>Przy EOQ łączny koszt zamawiania i utrzymania zapasu jest najmniejszy. Duże zamówienia zmniejszają koszty zamawiania, ale zwiększają koszty magazynowania.</p>
<h4>Rodzaje zapasów</h4>
<ul>
<li><b>bieżący</b> (rotujący): zużywany między dostawami;</li>
<li><b>bezpieczeństwa</b>: chroni przed opóźnieniem dostawy i nagłym wzrostem popytu;</li>
<li><b>sezonowy</b>: gromadzony przed sezonem (znicze, artykuły szkolne);</li>
<li><b>nadmierny</b> i <b>nieprawidłowy</b> (zbędny, przeterminowany): zamraża pieniądze.</li>
</ul>
<h4>Zapas maksymalny i minimalny</h4>
<p>Zapas minimalny to poziom, poniżej którego grozi brak towaru (zwykle zapas bezpieczeństwa). Zapas maksymalny ogranicza powierzchnia magazynu i zamrożone środki. Wielkość zamówienia w systemie stałego cyklu = zapas maksymalny - zapas bieżący + przewidywane zużycie w czasie dostawy.</p>
<div class="tip">W ROP nie zapomnij o zapasie bezpieczeństwa. Jeśli zadanie go nie podaje, ROP to samo zużycie w czasie dostawy.</div>` },
        { tytul: "Analiza ABC i XYZ", tresc: `<h4>Analiza ABC</h4>
<p>Opiera się na zasadzie Pareto (80/20). Pozycje asortymentu szereguje się malejąco według wartości sprzedaży (lub zużycia) i liczy udział narastająco.</p>
<div class="tw"><table><tr><th>Grupa</th><th>Udział w liczbie pozycji</th><th>Udział w wartości</th><th>Postępowanie</th></tr>
<tr><td>A</td><td>ok. 20%</td><td>ok. 80%</td><td>ścisła kontrola, częste zamówienia, negocjacje cen</td></tr>
<tr><td>B</td><td>ok. 30%</td><td>ok. 15%</td><td>kontrola okresowa</td></tr>
<tr><td>C</td><td>ok. 50%</td><td>ok. 5%</td><td>uproszczona kontrola, większe partie, rzadziej</td></tr></table></div>
<h4>Analiza XYZ</h4>
<p>Dzieli asortyment według <b>regularności popytu</b>: X: popyt stały, łatwy do prognozowania; Y: popyt wahający się (sezonowy, trendowy); Z: popyt nieregularny, trudny do przewidzenia. Połączenie ABC i XYZ daje macierz 9 pól, np. <b>AX</b>: ważne i przewidywalne, nadają się do dostaw just in time.</p>
<h4>Wskaźniki gospodarki zapasami</h4>
<pre>średni zapas = (zapas początkowy + zapas końcowy) ÷ 2
rotacja w razach = sprzedaż ÷ średni zapas
rotacja w dniach = średni zapas × 360 ÷ sprzedaż
przykład: zapas pocz. 40 000 zł, końc. 50 000 zł, sprzedaż 540 000 zł
średni zapas = 45 000 zł, rotacja = 12 razy, w dniach = 30 dni</pre>
<p>Im <b>krótsza</b> rotacja w dniach, tym szybciej towar zamienia się na gotówkę. Wskaźnik pokrycia zapasem mówi, na ile dni sprzedaży wystarczy obecny zapas.</p>
<h4>Logistyka</h4>
<ul><li><b>JIT</b> (just in time): dostawy dokładnie wtedy, gdy są potrzebne, minimalne zapasy;</li><li><b>cross-docking</b>: przeładunek bez składowania w magazynie;</li><li>zasada <b>7W</b> logistyki: właściwy produkt, ilość, jakość, miejsce, czas, klient, koszt.</li></ul>
<div class="tip">Grupa A to mało pozycji, ale większość wartości. Nie myl udziału w liczbie pozycji z udziałem w wartości.</div>` }
      ],
      pytania: [
        Q("Dzienne zużycie 25 szt., czas dostawy 4 dni, zapas bezpieczeństwa 50 szt. Punkt ponownego zamówienia wynosi", "150 szt.", "100 szt.", "125 szt.", "79 szt.", "25 × 4 + 50 = 150 szt."),
        Q("Roczne zapotrzebowanie 2000 szt., koszt zamówienia 100 zł, roczny koszt utrzymania sztuki 4 zł. Ekonomiczna wielkość zamówienia to ok.", "316 szt.", "100 szt.", "500 szt.", "1000 szt.", "√(2 × 2000 × 100 ÷ 4) = √100 000 ≈ 316."),
        Q("Dostawca A uzyskał 4,3 pkt, B 4,0 pkt, C 3,8 pkt w ocenie punktowej z wagami. Należy wybrać", "dostawcę A", "dostawcę B", "dostawcę C", "najtańszego bez względu na punkty", "Wygrywa najwyższa suma ważona."),
        Q("Cennik rozesłany do wielu klientów jest w świetle Kodeksu cywilnego", "zaproszeniem do zawarcia umowy", "ofertą wiążącą", "umową przedwstępną", "zamówieniem", "Art. 71 KC."),
        Q("W analizie ABC do grupy A należą pozycje, które", "stanowią ok. 20% asortymentu i ok. 80% wartości", "stanowią ok. 80% asortymentu i 20% wartości", "mają nieregularny popyt", "są przeterminowane", "Zasada Pareto."),
        Q("Towar o nieregularnym, trudnym do przewidzenia popycie w analizie XYZ należy do grupy", "Z", "X", "Y", "A", "X: popyt stały, Y: wahający się, Z: nieregularny."),
        Q("Średni zapas 30 000 zł, roczna sprzedaż 360 000 zł. Rotacja zapasów w dniach (rok 360 dni) wynosi", "30 dni", "12 dni", "120 dni", "3 dni", "30 000 × 360 ÷ 360 000 = 30 dni."),
        Q("Zapas chroniący przed opóźnieniem dostawy to zapas", "bezpieczeństwa", "sezonowy", "nadmierny", "bieżący", "Uwzględnia się go w punkcie ponownego zamówienia.")
      ]
    },
    {
      id: "umowy-dokumenty", tytul: "Umowy, negocjacje i dokumenty", opis: "Zawrzesz umowę handlową, poprowadzisz negocjacje i poprawnie wystawisz dokumenty sprzedaży.",
      lekcje: [
        { tytul: "Umowy w obrocie handlowym", tresc: `<h4>Umowa sprzedaży (art. 535 KC)</h4>
<p>Sprzedawca zobowiązuje się <b>przenieść własność</b> rzeczy i ją <b>wydać</b>, a kupujący <b>odebrać</b> rzecz i <b>zapłacić cenę</b>. Formy szczególne: sprzedaż na raty, z zastrzeżeniem prawa własności (własność przechodzi po zapłacie całości), na próbę, według wzoru.</p>
<h4>Inne umowy</h4>
<div class="tw"><table><tr><th>Umowa</th><th>Istota</th></tr>
<tr><td>dostawy (art. 605 KC)</td><td>rzeczy oznaczone co do gatunku, wytwarzane, dostarczane częściami lub periodycznie</td></tr>
<tr><td>komisu</td><td>komisant sprzedaje we <b>własnym imieniu</b> na rachunek komitenta, za prowizję</td></tr>
<tr><td>agencyjna</td><td>agent stale pośredniczy lub zawiera umowy w imieniu zleceniodawcy, za prowizję</td></tr>
<tr><td>franczyzy</td><td>franczyzobiorca korzysta z marki i know-how, płaci opłatę wstępną i bieżącą</td></tr>
<tr><td>leasingu</td><td>finansujący oddaje rzecz do używania za raty</td></tr>
<tr><td>przewozu, spedycji, składu</td><td>transport, organizacja transportu, przechowanie</td></tr></table></div>
<h4>Terminy płatności</h4>
<p>W transakcjach między przedsiębiorcami termin zapłaty nie powinien przekraczać <b>60 dni</b> od doręczenia faktury (dłuższy tylko wyjątkowo i nie może być rażąco nieuczciwy). Po terminie należą się odsetki ustawowe za opóźnienie w transakcjach handlowych oraz rekompensata za koszty odzyskiwania należności (40, 70 lub 100 euro w zależności od kwoty).</p>
<h4>Incoterms 2020</h4>
<ul>
<li><b>EXW</b>: najmniej obowiązków sprzedającego (odbiór z jego zakładu);</li>
<li><b>DDP</b>: najwięcej (dostarczone, cło opłacone);</li>
<li>tylko transport morski: <b>FAS, FOB, CFR, CIF</b>;</li>
<li><b>CIF</b> i <b>CIP</b>: sprzedający ubezpiecza towar; <b>DPU</b> zastąpiła dawną DAT.</li>
</ul>
<p>Dokumenty przewozowe: <b>CMR</b> (międzynarodowy list przewozowy drogowy), <b>konosament</b> (B/L, morski), <b>AWB</b> (lotniczy), CIM (kolejowy).</p>
<p>Umowę sprzedaży można zawrzeć w dowolnej formie, jednak forma pisemna ułatwia dowodzenie warunków.</p>
<div class="tip">Komisant działa we własnym imieniu, agent w imieniu zleceniodawcy. To najczęściej mylone umowy.</div>` },
        { tytul: "Negocjacje handlowe", tresc: `<h4>Kluczowe pojęcia</h4>
<ul>
<li><b>BATNA</b>: najlepsza alternatywa na wypadek braku porozumienia, chroni przed złą umową;</li>
<li><b>punkt oporu</b>: granica, poza którą nie ustąpimy;</li>
<li><b>ZOPA</b>: strefa możliwego porozumienia, obszar między punktami oporu obu stron;</li>
<li><b>kotwica</b>: pierwsza propozycja, która ustawia rozmowę.</li>
</ul>
<p><b>Przykład</b>: sprzedawca nie zejdzie poniżej 80 zł za sztukę, kupujący nie zapłaci więcej niż 95 zł. ZOPA to 80-95 zł. Gdyby kupujący miał limit 75 zł, ZOPA nie istnieje.</p>
<h4>Style negocjacji</h4>
<div class="tw"><table><tr><th>Styl</th><th>Cechy</th></tr>
<tr><td>twardy</td><td>rywalizacja, presja, wygrany i przegrany</td></tr>
<tr><td>miękki</td><td>ustępliwość, dbałość o relację kosztem interesu</td></tr>
<tr><td>rzeczowy (harwardzki)</td><td>oddzielenie ludzi od problemu, interesy zamiast stanowisk, wiele opcji, obiektywne kryteria</td></tr></table></div>
<h4>Taktyki, które trzeba rozpoznać</h4>
<ul>
<li><b>salami</b>: wymuszanie ustępstw małymi kawałkami;</li>
<li><b>dobry i zły policjant</b>: jeden negocjator ostry, drugi „wyrozumiały”;</li>
<li><b>ograniczone pełnomocnictwo</b>: „muszę zapytać szefa”;</li>
<li><b>presja czasu</b>: sztuczny termin;</li>
<li><b>wilk w owczej skórze</b>: udawanie niewiedzy.</li>
</ul>
<h4>Etapy</h4>
<p>przygotowanie (cele, BATNA, informacje o partnerze), otwarcie, prezentacja stanowisk, targowanie (ustępstwa zawsze za coś), zamknięcie i spisanie ustaleń.</p>
<h4>Przygotowanie do negocjacji</h4>
<ul><li>cele: maksymalny (idealny), realny, minimalny (punkt oporu);</li><li>informacje o partnerze: jego potrzeby, alternatywy, presja czasu;</li><li>lista możliwych ustępstw (termin płatności, wielkość partii, transport, rabat) i ich koszt dla firmy.</li></ul>
<p>Komunikacja w negocjacjach: pytania otwarte, aktywne słuchanie, mówienie o interesach („potrzebujemy pewności dostaw”), a nie o stanowiskach („chcemy 10% rabatu”).</p>
<div class="tip">Zasada ustępstw: nigdy nie ustępuj za darmo („obniżymy cenę o 2%, jeśli zwiększą Państwo zamówienie do 500 sztuk”).</div>` },
        { tytul: "Faktury i dokumenty sprzedaży", tresc: `<h4>Elementy faktury VAT</h4>
<ul>
<li>data wystawienia, kolejny numer, data sprzedaży (jeśli inna);</li>
<li>nazwy, adresy i <b>NIP</b> sprzedawcy i nabywcy;</li>
<li>nazwa towaru, miara i ilość, <b>cena jednostkowa netto</b>, rabaty;</li>
<li>wartość netto, stawka VAT, kwota VAT, kwota należności ogółem (brutto).</li>
</ul>
<p>Od 2026 r. faktury między firmami wystawia się w <b>Krajowym Systemie e-Faktur (KSeF)</b>, który nadaje każdej fakturze numer identyfikacyjny.</p>
<h4>Korekty</h4>
<div class="tw"><table><tr><th>Dokument</th><th>Kto</th><th>Kiedy</th></tr>
<tr><td>faktura korygująca</td><td>sprzedawca</td><td>zmiana ceny, ilości, rabat po sprzedaży, zwrot towaru, błędna stawka VAT</td></tr>
<tr><td>nota korygująca</td><td>nabywca</td><td>pomyłki w danych niekwotowych, np. błędny adres, literówka w nazwie (nie dla faktur z KSeF)</td></tr></table></div>
<h4>Obliczenia na fakturze</h4>
<pre>wartość netto = ilość × cena jednostkowa netto
VAT = wartość netto × stawka
brutto = netto + VAT
przykład: 120 szt. × 12,50 zł = 1500 zł netto
VAT 23% = 345 zł, brutto = 1845 zł</pre>
<h4>Rabaty i skonto</h4>
<ul>
<li>rabat łańcuchowy 10% i 5%: cena × 0,90 × 0,95 = cena × 0,855, czyli łącznie <b>14,5%</b>, a nie 15%;</li>
<li>skonto „2/14, netto 30”: 2% obniżki przy zapłacie w 14 dni, w przeciwnym razie pełna kwota w 30 dni.</li>
</ul>
<h4>Inne dokumenty</h4>
<p><b>Oferta handlowa</b>, <b>zamówienie</b>, <b>WZ</b>, <b>faktura proforma</b> (nie jest dokumentem księgowym, służy np. do przedpłaty), <b>faktura zaliczkowa</b> (po otrzymaniu zaliczki), <b>wezwanie do zapłaty</b>.</p>
<p>Fakturę przechowuje się do upływu okresu przedawnienia zobowiązania podatkowego (zwykle 5 lat od końca roku).</p>
<div class="tip">Pułapka: kolejne rabaty nie sumują się. 10% + 10% to 19%, a nie 20%.</div>` }
      ],
      pytania: [
        Q("Komisant w umowie komisu sprzedaje rzeczy", "we własnym imieniu na rachunek komitenta", "w imieniu i na rachunek komitenta", "we własnym imieniu i na własny rachunek", "wyłącznie w imieniu producenta", "Agent działa w imieniu zleceniodawcy, komisant we własnym."),
        Q("Formuła Incoterms 2020 nakładająca najmniej obowiązków na sprzedającego to", "EXW", "DDP", "CIF", "DAP", "Ex Works: kupujący odbiera towar z zakładu sprzedawcy."),
        Q("Międzynarodowy samochodowy list przewozowy to", "CMR", "konosament", "AWB", "CIM", "Konosament jest morski, AWB lotniczy, CIM kolejowy."),
        Q("Sprzedawca nie zejdzie poniżej 120 zł, kupujący zapłaci najwyżej 140 zł. Strefa możliwego porozumienia (ZOPA) to", "120-140 zł", "0-120 zł", "powyżej 140 zł", "nie istnieje", "ZOPA leży między punktami oporu."),
        Q("Negocjator, który wymusza drobne ustępstwa jedno po drugim, stosuje taktykę", "salami", "dobrego i złego policjanta", "ograniczonego pełnomocnictwa", "kotwicy", "Ustępstwa wycina się jak plasterki salami."),
        Q("Błąd w adresie nabywcy na fakturze papierowej może poprawić nabywca, wystawiając", "notę korygującą", "fakturę korygującą", "dowód KW", "fakturę proforma", "Nota korygująca dotyczy danych niekwotowych."),
        Q("Cena katalogowa 200 zł, rabaty łańcuchowe 10% i 5%. Cena po rabatach wynosi", "171 zł", "170 zł", "180 zł", "190 zł", "200 × 0,9 × 0,95 = 171 zł."),
        Q("Warunek płatności „2/10, netto 30” oznacza", "2% skonta przy zapłacie w 10 dni, inaczej pełna kwota w 30 dni", "2% odsetek po 10 dniach", "zapłatę w 2 ratach co 10 dni", "rabat 30% przy zapłacie w 2 dni", "To skonto za wcześniejszą zapłatę.")
      ]
    },
    {
      id: "kalkulacje-analiza", tytul: "Kalkulacje i analiza wyników", opis: "Policzysz ceny, marże i próg rentowności oraz ocenisz wyniki sprzedaży wskaźnikami.",
      lekcje: [
        { tytul: "Marża od sta i w stu", tresc: `<h4>Dwa sposoby liczenia marży</h4>
<div class="tw"><table><tr><th>Marża</th><th>Podstawa</th><th>Wzór na cenę sprzedaży netto</th></tr>
<tr><td>od sta</td><td>cena zakupu netto</td><td>Cs = Cz × (1 + m)</td></tr>
<tr><td>w stu</td><td>cena sprzedaży netto</td><td>Cs = Cz ÷ (1 - m)</td></tr></table></div>
<pre>przykład: Cz = 80 zł
marża 25% od sta: Cs = 80 × 1,25 = 100 zł
marża 20% w stu:  Cs = 80 ÷ 0,80 = 100 zł</pre>
<p>Ta sama kwota marży (20 zł) to 25% od sta i 20% w stu. Przeliczenie:</p>
<pre>m(w stu) = m(od sta) ÷ (100 + m(od sta)) × 100
m(od sta) = m(w stu) ÷ (100 - m(w stu)) × 100
np. 25 ÷ 125 × 100 = 20%</pre>
<h4>Od ceny brutto do zakupu</h4>
<pre>cena brutto 147,60 zł, VAT 23%, marża 20% od sta
netto = 147,60 ÷ 1,23 = 120 zł
Cz = 120 ÷ 1,20 = 100 zł</pre>
<h4>Marża hurtowa i detaliczna</h4>
<p>Cena producenta, plus marża hurtowa, daje cenę hurtową. Cena hurtowa, plus marża detaliczna, daje cenę detaliczną netto, a doliczenie VAT daje cenę brutto. Marże w łańcuchu się <b>nakładają</b>: 10% hurtowa i 20% detaliczna od sta podnoszą cenę o 32% (1,1 × 1,2 = 1,32).</p>
<h4>Narzut a marża</h4>
<p>W praktyce „narzut” to często marża od sta (doliczana do kosztu), a „marża” w raportach handlowych to marża w stu (udział zysku w cenie).</p>
<p>W zadaniach egzaminacyjnych zawsze zapisz, od jakiej podstawy liczysz marżę, i sprawdź wynik odwrotnym działaniem.</p>
<div class="tip">Najczęstszy błąd: odejmowanie procentu od ceny sprzedaży, gdy marża była liczona od ceny zakupu. 100 zł - 25% to 75 zł, a nie prawidłowe 80 zł.</div>` },
        { tytul: "Koszty i próg rentowności", tresc: `<h4>Rodzaje kosztów</h4>
<ul>
<li><b>stałe</b>: nie zależą od wielkości sprzedaży (czynsz, amortyzacja, pensje stałe, ubezpieczenia);</li>
<li><b>zmienne</b>: rosną wraz ze sprzedażą (koszt zakupu towaru, prowizje, opakowania).</li>
</ul>
<h4>Próg rentowności (BEP)</h4>
<pre>BEP ilościowy = KS ÷ (C - KZj)
BEP wartościowy = BEP ilościowy × C
KS  - koszty stałe, C - cena jednostkowa netto
KZj - koszt zmienny jednostkowy
(C - KZj) to marża na pokrycie (marża brutto jednostkowa)

przykład: KS = 12 000 zł, C = 50 zł, KZj = 30 zł
BEP = 12 000 ÷ 20 = 600 szt.; wartościowo 30 000 zł</pre>
<p>Poniżej 600 sztuk firma ponosi stratę, powyżej osiąga zysk. Każda dodatkowa sztuka ponad próg daje 20 zł zysku.</p>
<h4>Ilość dla zysku docelowego</h4>
<pre>Q = (KS + zysk planowany) ÷ (C - KZj)
np. zysk 4000 zł: (12 000 + 4000) ÷ 20 = 800 szt.</pre>
<h4>Margines bezpieczeństwa</h4>
<pre>MB = (sprzedaż planowana - BEP) ÷ sprzedaż planowana × 100%
np. plan 1000 szt.: (1000 - 600) ÷ 1000 × 100% = 40%</pre>
<p>Sprzedaż może spaść o 40%, zanim firma zacznie ponosić stratę.</p>
<p>Na wykresie progu rentowności linia przychodów przecina linię kosztów całkowitych (stałe + zmienne) właśnie w punkcie BEP.</p>
<p>Obniżenie kosztów zmiennych (np. tańszy dostawca) zwiększa marżę na pokrycie i obniża próg rentowności.</p>
<div class="tip">Wzrost kosztów stałych podnosi próg rentowności, a wzrost ceny przy tych samych kosztach go obniża. Takie pytania pojawiają się na egzaminie bez liczb.</div>` },
        { tytul: "Wskaźniki działalności handlowej", tresc: `<h4>Struktura i dynamika</h4>
<pre>wskaźnik struktury = część ÷ całość × 100%
dynamika (o podstawie stałej) = wartość okresu ÷ wartość okresu bazowego × 100%
dynamika łańcuchowa = wartość okresu ÷ wartość okresu poprzedniego × 100%
tempo zmian = dynamika - 100%</pre>
<p><b>Przykład</b>: sprzedaż 2024: 400 000 zł, 2025: 460 000 zł. Dynamika = 460 000 ÷ 400 000 × 100% = <b>115%</b>, czyli wzrost o 15%.</p>
<h4>Rentowność</h4>
<pre>rentowność sprzedaży = zysk netto ÷ przychody ze sprzedaży × 100%
rentowność brutto ze sprzedaży = zysk brutto ÷ przychody × 100%</pre>
<p>Przychody 800 000 zł, zysk netto 40 000 zł, rentowność = <b>5%</b>: z każdej złotówki sprzedaży zostaje 5 gr zysku.</p>
<h4>Wydajność i powierzchnia</h4>
<pre>wydajność pracy = sprzedaż ÷ liczba zatrudnionych
sprzedaż z 1 m² = sprzedaż ÷ powierzchnia sali sprzedaży</pre>
<h4>Należności</h4>
<pre>rotacja należności w dniach = średnie należności × 360 ÷ przychody</pre>
<p>Rosnąca rotacja należności oznacza, że klienci płacą coraz później.</p>
<h4>Prognozowanie</h4>
<p><b>Średnia ruchoma</b> 3-okresowa: prognoza na kwiecień = (styczeń + luty + marzec) ÷ 3. Np. (300 + 330 + 360) ÷ 3 = <b>330</b> szt. Metoda nie uwzględnia trendu, dlatego przy stałym wzroście zaniża prognozę.</p>
<h4>Plan sprzedaży</h4>
<p>Plan ustala się według asortymentu, okresów (miesiące, kwartały) i handlowców, z uwzględnieniem sezonowości. Wskaźnik sezonowości = sprzedaż miesiąca ÷ średnia miesięczna × 100%.</p>
<div class="tip">Dynamika 95% oznacza spadek o 5%, a nie wzrost. Zawsze odejmij 100%, aby otrzymać tempo zmian.</div>` }
      ],
      pytania: [
        Q("Cena zakupu netto 60 zł, marża 25% liczona w stu. Cena sprzedaży netto wynosi", "80 zł", "75 zł", "85 zł", "45 zł", "60 ÷ (1 - 0,25) = 80 zł."),
        Q("Marża 25% liczona od sta odpowiada marży liczonej w stu w wysokości", "20%", "25%", "30%", "33,3%", "25 ÷ 125 × 100 = 20%."),
        Q("Koszty stałe 18 000 zł, cena 40 zł, koszt zmienny jednostkowy 25 zł. Próg rentowności wynosi", "1200 szt.", "720 szt.", "450 szt.", "1800 szt.", "18 000 ÷ (40 - 25) = 1200 szt."),
        Q("Wzrost kosztów stałych przy niezmienionej cenie i kosztach zmiennych powoduje, że próg rentowności", "rośnie", "maleje", "nie zmienia się", "staje się ujemny", "Trzeba sprzedać więcej, by pokryć koszty."),
        Q("Do kosztów zmiennych sklepu zalicza się", "koszt zakupu sprzedanych towarów", "czynsz za lokal", "amortyzację regałów", "ubezpieczenie budynku", "Pozostałe koszty są stałe."),
        Q("Sprzedaż w roku bazowym 250 000 zł, w badanym 225 000 zł. Dynamika sprzedaży wynosi", "90%", "110%", "10%", "111%", "225 000 ÷ 250 000 × 100% = 90%, czyli spadek o 10%."),
        Q("Przychody ze sprzedaży 500 000 zł, zysk netto 30 000 zł. Rentowność sprzedaży wynosi", "6%", "16,7%", "3%", "60%", "30 000 ÷ 500 000 × 100% = 6%."),
        Q("Sprzedaż w styczniu 210, lutym 240, marcu 270 szt. Prognoza na kwiecień metodą 3-okresowej średniej ruchomej to", "240 szt.", "270 szt.", "300 szt.", "720 szt.", "(210 + 240 + 270) ÷ 3 = 240 szt.")
      ]
    }
  ]);

  pod("HGT.01", [
    {
      id: "sala-nakrycia", tytul: "Sala i nakrycia stołów", opis: "Przygotujesz salę konsumencką, nakryjesz stół zasadniczo i okolicznościowo zgodnie z menu.",
      lekcje: [
        { tytul: "Mise en place sali", tresc: `<h4>Przygotowanie sali przed otwarciem</h4>
<ol>
<li>przewietrzenie, sprawdzenie czystości podłóg, oświetlenia, temperatury (ok. 20-22°C);</li>
<li>ustawienie stołów i krzeseł (krzesło krawędzią siedziska przy zwisie obrusa, ale go nie dotyka);</li>
<li>nakrycie stołów: molton, obrus, ewentualnie napperon;</li>
<li>przygotowanie <b>serwantki</b> (kredensu kelnerskiego): zapas sztućców, talerzyków, serwetek, przypraw, karty menu, tace, korkociąg;</li>
<li>polerowanie szkła i sztućców (przez czystą, suchą ściereczkę, chwytając szkło za nóżkę);</li>
<li>uzupełnienie <b>menażek</b> (sól, pieprz) i dekoracji (niski kwiat, który nie zasłania gości).</li>
</ol>
<h4>Bielizna stołowa</h4>
<div class="tw"><table><tr><th>Element</th><th>Funkcja</th></tr>
<tr><td>molton</td><td>podkład z flaneli lub filcu: wygłusza, chroni blat, obrus się nie przesuwa</td></tr>
<tr><td>obrus</td><td>zwis ok. 25-30 cm, równy z każdej strony, załamania (kanty) równoległe do krawędzi stołu</td></tr>
<tr><td>napperon</td><td>mniejszy obrus dekoracyjny na obrusie zasadniczym, łatwy do wymiany</td></tr>
<tr><td>skirting (falbana)</td><td>okrycie boków stołu bufetowego do podłogi</td></tr>
<tr><td>serwetki</td><td>płócienne zwykle 40 × 40 lub 50 × 50 cm, składane w proste formy</td></tr></table></div>
<p>Obrus rozkłada się od strony wejścia gości tak, by kant środkowy biegł przez środek stołu, a zakładka (krawędź górna) była skierowana w stronę wejścia.</p>
<h4>Wymiary</h4>
<ul>
<li>wysokość stołu: ok. 75-76 cm;</li>
<li>szerokość miejsca dla gościa: ok. 60-80 cm (przy bankiecie bliżej 60 cm);</li>
<li>przejście dla kelnera między stołami: co najmniej ok. 1 m.</li>
</ul>
<p>Przed otwarciem kelner sprawdza też rezerwacje (liczba osób, godzina, życzenia specjalne) i dostosowuje do nich ustawienie stołów. Stoliki zarezerwowane oznacza się tabliczką „rezerwacja”.</p>
<div class="tip">Zabrudzony obrus podczas serwisu przykrywa się czystą serwetą lub napperonem, a przy wymianie obrusa nie odsłania się blatu przed gośćmi.</div>` },
        { tytul: "Nakrycie zasadnicze i do potraw", tresc: `<h4>Zasady nakrycia</h4>
<ul>
<li><b>talerz zastępczy</b> (podstawowy) ok. 1-2 cm od krawędzi stołu, na środku miejsca;</li>
<li><b>noże</b> z prawej, ostrzem do talerza; <b>łyżka do zupy</b> z prawej, na zewnątrz od noży;</li>
<li><b>widelce</b> z lewej, zębami do góry;</li>
<li>sztućce układa się od zewnątrz według kolejności dań: najpierw używane są skrajne;</li>
<li><b>sztućce deserowe</b> nad talerzem: łyżeczka trzonkiem w prawo, widelczyk pod nią trzonkiem w lewo;</li>
<li><b>talerzyk do pieczywa</b> z lewej, nad widelcami, z nożykiem do masła;</li>
<li><b>kieliszki</b> nad nożami: pierwszy (do napoju podawanego najwcześniej lub do wody) nad czubkiem noża głównego.</li>
</ul>
<h4>Przykład: przekąska, zupa, danie mięsne, deser, białe i czerwone wino</h4>
<pre>lewa strona: widelec do przekąski | widelec do dania (od talerza)
prawa strona (od talerza): nóż do dania | nóż do przekąski | łyżka do zupy
nad talerzem: łyżeczka i widelczyk deserowy
kieliszki: do białego wina, do czerwonego, do wody</pre>
<h4>Nakrycia specjalne</h4>
<div class="tw"><table><tr><th>Potrawa</th><th>Nakrycie</th></tr>
<tr><td>ryba</td><td>nóż i widelec do ryby</td></tr>
<tr><td>owoce morza, homar</td><td>szczypce, widelczyk do wydobywania mięsa, miseczka z wodą i cytryną (fingerbowl)</td></tr>
<tr><td>bulion w filiżance</td><td>bulionówka na talerzyku, łyżka bulionowa</td></tr>
<tr><td>spaghetti</td><td>widelec i łyżka</td></tr>
<tr><td>sery</td><td>nóż i widelec deserowy, talerzyk deserowy</td></tr></table></div>
<p>W nakryciu jednocześnie znajdują się zwykle nie więcej niż 3 noże i 3 widelce. Sztućce do kolejnych dań dokłada się przed ich podaniem (z prawej noże, z lewej widelce).</p>
<div class="tip">Na egzaminie pisemnym często pojawia się rysunek nakrycia. Sprawdź kolejność od zewnątrz i położenie łyżki do zupy: zawsze po prawej, na zewnątrz od noży.</div>` },
        { tytul: "Nakrycia okolicznościowe i stoły", tresc: `<h4>Rodzaje nakryć</h4>
<ul>
<li><b>śniadaniowe</b>: talerz płytki deserowy, nóż i widelec deserowy, filiżanka na spodku z łyżeczką z prawej, talerzyk do pieczywa;</li>
<li><b>obiadowe a la carte</b>: nakrycie wyjściowe (talerz zastępczy, nóż, widelec, kieliszek, serwetka), uzupełniane po złożeniu zamówienia;</li>
<li><b>bankietowe</b>: pełne nakrycie do całego menu, ustalonego wcześniej;</li>
<li><b>kawowe</b>: filiżanka, spodek, łyżeczka, talerzyk deserowy z widelczykiem do ciasta.</li>
</ul>
<h4>Układy stołów na przyjęcia</h4>
<div class="tw"><table><tr><th>Układ</th><th>Zastosowanie</th></tr>
<tr><td>stół prosty (I)</td><td>małe grupy do ok. 20 osób</td></tr>
<tr><td>litera T</td><td>stół prezydialny i jeden stół dla gości</td></tr>
<tr><td>litera U (podkowa)</td><td>konferencje, wesela średniej wielkości</td></tr>
<tr><td>litera E, grzebień</td><td>duże przyjęcia w podłużnej sali</td></tr>
<tr><td>stoły okrągłe</td><td>bankiety, wesela, po 8-10 osób przy stole</td></tr></table></div>
<p>Przy stołach w kształcie T, U, E po wewnętrznej stronie stołu prezydialnego nie sadza się gości (goście patrzą na salę).</p>
<h4>Miejsca honorowe</h4>
<ul>
<li>gość honorowy siedzi <b>po prawej stronie gospodarza</b>, jego partnerka po prawej stronie gospodyni;</li>
<li>przy stole prostym gospodarze siedzą zwykle naprzeciw siebie, na środku dłuższych boków;</li>
<li>miejsce z widokiem na salę i wejście jest ważniejsze niż miejsce plecami do drzwi.</li>
</ul>
<h4>Obliczanie długości stołu</h4>
<pre>długość = liczba osób przy boku × szerokość miejsca
np. 12 osób w jednym rzędzie × 0,7 m = 8,4 m
stół dwustronny dla 24 osób: 12 po każdej stronie, ok. 8,4 m</pre>
<p>Dekoracja stołu nie może być wyższa niż ok. 30 cm (goście muszą się widzieć).</p>
<div class="tip">Typowe zadanie praktyczne: obliczyć ilość bielizny i zastawy dla określonej liczby osób. Doliczaj zapas (zwykle ok. 10%) na wymianę podczas serwisu.</div>` }
      ],
      pytania: [
        Q("Podkład pod obrus wygłuszający stół to", "molton", "napperon", "skirting", "serweta", "Napperon kładzie się na obrus, skirting na boki bufetu."),
        Q("Zwis obrusa na stole w sali konsumenckiej powinien wynosić ok.", "25-30 cm", "5 cm", "50-60 cm", "do podłogi", "Do podłogi sięga skirting na stołach bufetowych."),
        Q("Łyżkę do zupy w nakryciu układa się", "z prawej strony, na zewnątrz od noży", "z lewej strony, obok widelców", "nad talerzem", "na talerzyku do pieczywa", "Używa się jej przed daniem głównym, więc leży na zewnątrz."),
        Q("Sztućce deserowe ułożone nad talerzem: łyżeczka ma trzonek skierowany", "w prawo", "w lewo", "do gościa", "do środka stołu", "Widelczyk deserowy ma trzonek w lewo."),
        Q("Talerzyk do pieczywa ustawia się w nakryciu", "z lewej strony, nad widelcami", "z prawej strony, nad nożami", "na talerzu zastępczym", "nad talerzem, za sztućcami deserowymi", "Pieczywo podaje się z lewej strony."),
        Q("Miseczkę z wodą i plasterkiem cytryny (fingerbowl) podaje się do", "owoców morza jedzonych palcami", "zupy kremu", "deseru lodowego", "kawy", "Służy do opłukania palców."),
        Q("Gość honorowy na przyjęciu zajmuje miejsce", "po prawej stronie gospodarza", "po lewej stronie gospodarza", "naprzeciw wejścia, z dala od gospodarza", "na końcu stołu", "To zasada precedencji przy stole."),
        Q("Przy szerokości miejsca 0,7 m długość jednostronnego stołu dla 10 osób wynosi", "7 m", "10 m", "3,5 m", "14 m", "10 × 0,7 m = 7 m.")
      ]
    },
    {
      id: "serwis", tytul: "Techniki i metody obsługi", opis: "Podasz potrawy właściwą metodą, z właściwej strony i w odpowiedniej kolejności.",
      lekcje: [
        { tytul: "Metody podawania potraw", tresc: `<h4>Główne metody</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Opis</th><th>Strona</th></tr>
<tr><td><b>francuska</b></td><td>kelner trzyma półmisek, gość sam nakłada sobie potrawę</td><td>z lewej</td></tr>
<tr><td><b>angielska bezpośrednia</b></td><td>kelner nakłada potrawę z półmiska na talerz gościa sztućcami serwisowymi</td><td>z lewej</td></tr>
<tr><td><b>angielska pośrednia</b></td><td>kelner nakłada potrawę na talerz przy stoliku pomocniczym (gueridonie), potem podaje talerz</td><td>talerz z prawej</td></tr>
<tr><td><b>amerykańska</b> (talerzowa)</td><td>potrawa porcjowana i dekorowana w kuchni, podana na talerzu</td><td>z prawej</td></tr>
<tr><td><b>niemiecka</b> (rodzinna)</td><td>półmiski stawia się na stole, goście sami nakładają</td><td>na stół</td></tr></table></div>
<h4>Zasady stron</h4>
<ul>
<li>z <b>prawej</b> strony, prawą ręką: talerze z porcjami, napoje, zbieranie naczyń, dokładanie noży;</li>
<li>z <b>lewej</b> strony, lewą ręką: półmiski, pieczywo, sosjerka (przy metodzie francuskiej), dokładanie widelców;</li>
<li>kelner porusza się wokół stołu <b>zgodnie z ruchem wskazówek zegara</b>, przy podawaniu z prawej idzie do przodu.</li>
</ul>
<h4>Wykańczanie potraw przy stole</h4>
<p>Na <b>gueridonie</b> kelner może porcjować (filetowanie ryby, krojenie pieczeni), przygotować tatar, sałatkę Cezar lub <b>flambirować</b> (podpalić alkohol nad potrawą, np. crêpes Suzette). Flambirowanie wymaga palnika, stabilnego wózka i odległości od zasłon, a alkohol nalewa się do miseczki, nigdy z butelki nad płomieniem.</p>
<h4>Kolejność podawania przy stole</h4>
<p>Potrawy podaje się wszystkim gościom przy stole równocześnie (przy większych stołach kilku kelnerów). Sosy i dodatki podawane osobno (sosjerka, salaterka) podaje się zaraz po daniu głównym, z lewej strony. Pieczywo podaje się przed przekąską i uzupełnia do końca dania głównego.</p>
<p>Przy metodzie francuskiej sztućce serwisowe (łyżka i widelec) leżą na półmisku rękojeściami w stronę gościa.</p>
<div class="tip">Metoda francuska to „gość nakłada sam z półmiska trzymanego przez kelnera”. Angielska to „kelner nakłada”. Te dwie metody mylą się najczęściej.</div>` },
        { tytul: "Technika noszenia i zbierania", tresc: `<h4>Noszenie talerzy</h4>
<ul>
<li>talerz trzyma się kciukiem na rancie, bez dotykania potrawy ani wnętrza talerza;</li>
<li>jednocześnie kelner niesie najczęściej <b>2 talerze</b> (chwyt podstawowy) lub <b>3 talerze</b> (chwyt górny lub dolny w lewej ręce i jeden w prawej);</li>
<li>talerze z potrawą stawia się tak, by główny składnik (mięso) był najbliżej gościa (pozycja „na godz. 6”), a logo talerza u góry.</li>
</ul>
<h4>Taca</h4>
<p>Tacę nosi się na lewej dłoni, na wysokości pasa, cięższe naczynia bliżej środka i ciała. Napoje z tacy podaje się prawą ręką z prawej strony gościa.</p>
<h4>Zbieranie naczyń</h4>
<ul>
<li>dopiero gdy <b>wszyscy</b> goście przy stole skończyli jeść (wyjątek: gość prosi o zabranie);</li>
<li>z <b>prawej</b> strony, zaczynając od gościa obsłużonego jako pierwszy;</li>
<li>sztućce zbiera się na pierwszym talerzu, przytrzymując je kciukiem, resztki zgarnia się na górny talerz poza wzrokiem gości (lub przy serwantce);</li>
<li>przed deserem zbiera się wszystko, co zbędne: talerzyki do pieczywa, menażki, kieliszki po winie do dań, a okruchy usuwa się szczotką lub zgarniaczem.</li>
</ul>
<h4>Sygnały gościa</h4>
<div class="tw"><table><tr><th>Ułożenie sztućców</th><th>Znaczenie</th></tr>
<tr><td>obok siebie, równolegle, rękojeści skośnie w prawo w dół (godz. 4 lub 5)</td><td>skończyłem</td></tr>
<tr><td>skrzyżowane lub w kształcie daszka na talerzu</td><td>przerwa, jem dalej</td></tr>
<tr><td>karta menu zamknięta, odłożona</td><td>gotowy do zamówienia</td></tr></table></div>
<h4>Kolejność obsługi</h4>
<p>gość honorowy, następnie panie (od najstarszych), panowie, a <b>gospodarz na końcu</b>. Przy dużych stołach dwóch kelnerów obsługuje równocześnie dwie połowy stołu.</p>
<div class="tip">Zbieranie naczyń, gdy tylko część gości skończyła, jest błędem oceniany na egzaminie praktycznym. Poczekaj na cały stół.</div>` },
        { tytul: "Przyjęcie zamówienia i kolejność dań", tresc: `<h4>Etapy obsługi gościa a la carte</h4>
<ol>
<li>powitanie przy wejściu, pomoc w zajęciu miejsca (odsunięcie krzesła paniom), odebranie okryć;</li>
<li>podanie <b>karty menu</b> z prawej strony, otwartej; karta win dla gospodarza;</li>
<li>propozycja aperitifu i informacja o daniach dnia;</li>
<li><b>przyjęcie zamówienia</b>: zaczyna się od pań i gościa honorowego, gospodarza na końcu. Pyta się o stopień wysmażenia steku, dodatki i alergie;</li>
<li>przekazanie zamówienia do kuchni (bon, system POS), dostosowanie nakrycia;</li>
<li>serwis kolejnych dań i napojów, kontrola zadowolenia po 2-3 minutach od podania;</li>
<li>propozycja deseru, kawy, digestifu;</li>
<li>rachunek na życzenie gościa, pożegnanie.</li>
</ol>
<h4>Kolejność dań w menu</h4>
<p>przekąska zimna, zupa, przekąska gorąca (lub danie rybne), danie główne mięsne, sery, deser, owoce, kawa. Przy menu klasycznym sorbet podaje się między daniem rybnym a mięsnym (oczyszczenie smaku).</p>
<h4>Karta menu</h4>
<ul>
<li>grupy dań w kolejności serwisu, nazwa potrawy, <b>gramatura</b> lub objętość, <b>cena brutto</b>;</li>
<li>informacja o <b>14 alergenach</b> (rozporządzenie UE 1169/2011) dostępna dla gościa, także ustnie z dokumentacją;</li>
<li>opłata serwisowa musi być podana w karcie z góry, napiwek jest dobrowolny.</li>
</ul>
<h4>Komunikacja z gościem</h4>
<p>Kelner proponuje (sprzedaż sugerowana): „Do tej kaczki polecam wytrawne czerwone wino”. Nie przerywa rozmowy gości, nie opiera się o stół, nie liczy napiwków na sali.</p>
<p>Kelner przyjmujący zamówienie stoi z lewej strony gościa, notuje według numerów miejsc przy stole, aby nie pytać przy podaniu, „kto zamawiał rybę”.</p>
<div class="tip">Karta menu podawana jest z prawej strony, ale potrawy z półmiska z lewej. Zapamiętaj: wszystko „na talerzu i w kieliszku” z prawej.</div>` }
      ],
      pytania: [
        Q("Metoda, w której kelner nakłada potrawę z półmiska na talerz gościa, stojąc po jego lewej stronie, to metoda", "angielska bezpośrednia", "francuska", "amerykańska", "niemiecka", "We francuskiej gość nakłada sam."),
        Q("Potrawy porcjowane w kuchni i podane na talerzach to metoda", "amerykańska", "francuska", "angielska pośrednia", "niemiecka", "Talerze podaje się z prawej strony."),
        Q("Stolik pomocniczy, przy którym kelner porcjuje lub flambiruje potrawy, to", "gueridon", "serwantka", "menażka", "bufet", "Serwantka to kredens kelnerski."),
        Q("Wokół stołu kelner porusza się", "zgodnie z ruchem wskazówek zegara", "przeciwnie do ruchu wskazówek zegara", "dowolnie, najkrótszą drogą", "tylko wzdłuż jednej strony", "Przy podawaniu z prawej idzie do przodu."),
        Q("Talerz z porcją mięsa i dodatkami stawia się przed gościem tak, aby mięso było", "najbliżej gościa", "najdalej od gościa", "po lewej stronie talerza", "zakryte dodatkami", "Pozycja „na godzinie 6”."),
        Q("Naczynia po daniu głównym zbiera się", "gdy wszyscy goście przy stole skończą jeść", "od razu po skończeniu przez każdego gościa", "po podaniu deseru", "tylko na prośbę gospodarza", "Wyjątek: wyraźna prośba gościa."),
        Q("W klasycznym menu sorbet podaje się", "między daniem rybnym a mięsnym", "przed przekąską", "po kawie", "razem z zupą", "Sorbet oczyszcza smak."),
        Q("Zamówienie przy stole przyjmuje się w kolejności", "panie i gość honorowy, potem panowie, gospodarz na końcu", "najpierw gospodarz", "od gościa siedzącego najbliżej kuchni", "najpierw panowie", "Gospodarz jest obsługiwany jako ostatni.")
      ]
    },
    {
      id: "napoje", tytul: "Napoje i serwis wina", opis: "Dobierzesz i podasz wino, alkohole, kawę i herbatę w prawidłowej temperaturze i szkle.",
      lekcje: [
        { tytul: "Wino: dobór i serwis", tresc: `<h4>Temperatury podawania</h4>
<div class="tw"><table><tr><th>Wino</th><th>Temperatura</th></tr>
<tr><td>musujące (szampan, prosecco)</td><td>6-8°C</td></tr>
<tr><td>białe lekkie, wytrawne</td><td>8-10°C</td></tr>
<tr><td>białe pełne (beczkowane)</td><td>10-12°C</td></tr>
<tr><td>różowe</td><td>8-10°C</td></tr>
<tr><td>czerwone lekkie</td><td>12-14°C</td></tr>
<tr><td>czerwone pełne, wytrawne</td><td>16-18°C</td></tr>
<tr><td>słodkie deserowe białe</td><td>6-10°C</td></tr></table></div>
<h4>Serwis butelki wina</h4>
<ol>
<li><b>prezentacja</b> butelki gospodarzowi z prawej strony, etykietą do niego (nazwa, rocznik);</li>
<li>otwarcie przy stole: nacięcie kapsla pod kołnierzem, wkręcenie korkociągu (kelnerskiego) w środek korka, wyjęcie bez huku, wytarcie szyjki;</li>
<li>pokazanie korka (zapach, wilgotność);</li>
<li><b>degustacja</b>: gospodarzowi nalewa się ok. 2-3 cl do oceny;</li>
<li>po akceptacji nalewa się gościom (panie, panowie), gospodarzowi na końcu;</li>
<li>po nalaniu obraca się butelkę, aby kropla nie spadła na obrus.</li>
</ol>
<h4>Napełnianie kieliszków</h4>
<p>czerwone do ok. 1/3-1/2 (duża czasza, wino oddycha), białe do ok. 1/2-2/3, musujące do ok. 2/3-3/4 (w kieliszku flute, w dwóch etapach z powodu piany).</p>
<h4>Dekantacja</h4>
<p>Przelanie wina do <b>karafki</b>: starsze czerwone, aby oddzielić osad (przy świecy widać, kiedy osad dochodzi do szyjki), młode taniczne, aby się napowietrzyło.</p>
<h4>Dobór do potraw</h4>
<ul><li>ryby, owoce morza, drób w jasnych sosach: wina białe wytrawne;</li><li>czerwone mięso, dziczyzna, sery dojrzewające: wina czerwone wytrawne;</li><li>desery: wina słodkie (deser nie powinien być słodszy od wina).</li></ul>
<p>Wina białe utrzymuje się w temperaturze w <b>coolerze</b> (wiaderku z lodem i wodą) przy stole, czerwone stawia się na stole lub na podstawce.</p>
<p>Przy kolejnych winach zasada: białe przed czerwonym, lekkie przed ciężkim, wytrawne przed słodkim.</p>
<div class="tip">Wino musujące otwiera się, trzymając butelkę pod kątem ok. 45°, przytrzymując korek kciukiem i obracając butelkę, a nie korek.</div>` },
        { tytul: "Napoje alkoholowe i bar", tresc: `<h4>Kategorie</h4>
<ul>
<li><b>aperitif</b> (przed posiłkiem, pobudza apetyt): wytrawne wino musujące, wermut, sherry wytrawne, koktajle wytrawne;</li>
<li><b>digestif</b> (po posiłku): koniak, brandy, likiery, calvados, grappa, porto.</li>
</ul>
<h4>Temperatury i szkło</h4>
<div class="tw"><table><tr><th>Napój</th><th>Temperatura</th><th>Szkło</th></tr>
<tr><td>wódka czysta</td><td>4-6°C, schłodzona</td><td>kieliszek do wódki</td></tr>
<tr><td>piwo jasne (lager)</td><td>6-8°C</td><td>pokal, kufel, szklanka</td></tr>
<tr><td>piwo ciemne (porter, stout)</td><td>10-13°C</td><td>pokal</td></tr>
<tr><td>koniak, brandy</td><td>temperatura pokojowa, ok. 18-20°C</td><td>koniakówka (snifter, tulipan)</td></tr>
<tr><td>whisky</td><td>pokojowa, z lodem na życzenie</td><td>szklanka old fashioned (tumbler)</td></tr></table></div>
<h4>Miary i sprzęt baru</h4>
<ul>
<li>porcja wódki: 50 ml (w barach także 40 ml), porcja wina: 100-150 ml, kieliszek do degustacji ok. 20-30 ml;</li>
<li><b>jigger</b>: miarka barmańska; <b>shaker</b>: do wstrząsania; <b>szklanica barmańska</b> z łyżką barową: do mieszania; <b>strainer</b>: sitko; <b>muddler</b>: tłuczek.</li>
</ul>
<h4>Metody sporządzania koktajli</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Kiedy</th></tr>
<tr><td>build (bezpośrednio w szkle)</td><td>proste drinki z sokiem lub tonikiem</td></tr>
<tr><td>stir (mieszanie z lodem)</td><td>klarowne składniki: martini</td></tr>
<tr><td>shake (wstrząsanie)</td><td>soki, śmietanka, jajko, syropy</td></tr>
<tr><td>blend (blender)</td><td>koktajle z owocami, kruszonym lodem</td></tr></table></div>
<h4>Prawo</h4>
<p>Zabrania się sprzedaży i podawania alkoholu osobom <b>do 18 lat</b>, osobom <b>nietrzeźwym</b>, a także <b>na kredyt lub pod zastaw</b> (ustawa o wychowaniu w trzeźwości). Sprzedaż alkoholu wymaga zezwolenia gminy.</p>
<p>Szkło do napojów zimnych może być schłodzone (frappowanie: schłodzenie kieliszka lodem). Garnirunek (dekoracja) to plasterek cytrusa, oliwka, wisienka koktajlowa, gałązka mięty.</p>
<p>Piwo nalewa się do pochylonej szklanki, prostując ją pod koniec, aby powstała piana ok. 2-3 cm.</p>
<div class="tip">Koniaku nie chłodzi się. Kieliszek koniakówki ogrzewa się dłonią, aby wydobyć aromat.</div>` },
        { tytul: "Kawa, herbata i napoje bezalkoholowe", tresc: `<h4>Espresso</h4>
<ul>
<li>ok. <b>7-9 g</b> świeżo zmielonej kawy na porcję;</li>
<li>woda ok. 90-94°C, ciśnienie ok. 9 barów;</li>
<li>czas ekstrakcji ok. 25 s, objętość ok. 25-30 ml;</li>
<li>gęsta, orzechowa pianka (crema).</li>
</ul>
<h4>Napoje na bazie espresso</h4>
<div class="tw"><table><tr><th>Napój</th><th>Skład</th><th>Naczynie</th></tr>
<tr><td>ristretto</td><td>krótkie espresso, ok. 15-20 ml</td><td>filiżanka do espresso</td></tr>
<tr><td>lungo</td><td>dłuższa ekstrakcja, ok. 50-60 ml</td><td>filiżanka</td></tr>
<tr><td>americano</td><td>espresso dolane gorącą wodą</td><td>filiżanka</td></tr>
<tr><td>cappuccino</td><td>espresso, spienione mleko, piana (ok. 1/3 każdego)</td><td>filiżanka ok. 150-180 ml</td></tr>
<tr><td>latte macchiato</td><td>mleko, espresso wlane na wierzch, warstwy</td><td>wysoka szklanka</td></tr>
<tr><td>kawa po irlandzku</td><td>kawa, whiskey, cukier, bita śmietanka</td><td>szklanka z uchem na nóżce</td></tr></table></div>
<p>Mleko spienia się do ok. 60-65°C. Powyżej 70°C traci słodycz i nie tworzy dobrej piany.</p>
<h4>Herbata</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Woda</th><th>Czas parzenia</th></tr>
<tr><td>czarna</td><td>95-100°C</td><td>3-5 min</td></tr>
<tr><td>zielona</td><td>70-80°C</td><td>2-3 min</td></tr>
<tr><td>biała</td><td>70-80°C</td><td>3-5 min</td></tr>
<tr><td>oolong</td><td>85-95°C</td><td>3-5 min</td></tr>
<tr><td>owocowa, ziołowa</td><td>100°C</td><td>5-10 min</td></tr></table></div>
<h4>Podawanie</h4>
<p>Filiżankę stawia się z prawej strony gościa, uchem w prawo (na godz. 4), łyżeczka na spodku równolegle do ucha. Cukier, mleko, cytrynę podaje się osobno. Woda mineralna podawana jest w temp. ok. 8-12°C, soki ok. 10-12°C.</p>
<p>Napoje gazowane nalewa się po ściance pochylonej szklanki, aby nie traciły gazu. Butelkę wody otwiera się przy gościu, etykietą do niego.</p>
<p>Herbatę w hotelach i restauracjach podaje się często w dzbanku lub filiżance z torebką na spodku, z czajniczkiem gorącej wody, aby gość sam regulował moc.</p>
<div class="tip">Zielonej herbaty nie zalewa się wrzątkiem, bo staje się gorzka. To częste pytanie z zakresu temperatur.</div>` }
      ],
      pytania: [
        Q("Czerwone wino wytrawne o pełnym smaku podaje się w temperaturze ok.", "16-18°C", "6-8°C", "10-12°C", "22-24°C", "Musujące podaje się w 6-8°C."),
        Q("Podczas serwisu wina do degustacji nalewa się niewielką ilość", "gospodarzowi", "gościowi honorowemu", "najstarszej pani", "każdemu gościowi", "Po akceptacji gospodarza nalewa się gościom."),
        Q("Kieliszki do wina czerwonego napełnia się do ok.", "1/3-1/2 objętości", "pełna", "3/4 objętości", "1/10 objętości", "Duża czasza pozwala winu oddychać."),
        Q("Napój podawany po posiłku dla ułatwienia trawienia to", "digestif", "aperitif", "sorbet", "bulion", "Np. koniak, likier, calvados."),
        Q("Koktajl ze śmietanką i sokami sporządza się metodą", "shake", "build", "stir", "float", "Wstrząsanie łączy składniki o różnej gęstości."),
        Q("Kelnerowi nie wolno podać alkoholu", "na kredyt lub pod zastaw", "do potraw rybnych", "w kieliszkach na nóżce", "gościom w wieku 65 lat", "Ustawa o wychowaniu w trzeźwości."),
        Q("Czas ekstrakcji espresso wynosi ok.", "25 s", "5 s", "2 min", "60 s", "Objętość ok. 25-30 ml."),
        Q("Filiżankę z kawą stawia się przed gościem", "z prawej strony, uchem w prawo", "z lewej strony, uchem w lewo", "na środku stołu", "uchem do gościa", "Łyżeczka leży na spodku równolegle do ucha.")
      ]
    },
    {
      id: "przyjecia", tytul: "Przyjęcia okolicznościowe", opis: "Przyjmiesz zamówienie na przyjęcie, zaplanujesz je i policzysz koszty.",
      lekcje: [
        { tytul: "Rodzaje przyjęć", tresc: `<h4>Podział przyjęć</h4>
<div class="tw"><table><tr><th>Przyjęcie</th><th>Charakter</th><th>Obsługa</th></tr>
<tr><td><b>bankiet</b></td><td>zasiadany, uroczysty, ustalone menu, kilka dań</td><td>kelnerska przy stole, wina do dań</td></tr>
<tr><td><b>przyjęcie bufetowe</b> (szwedzki stół)</td><td>goście sami nakładają potrawy z bufetu, mogą siedzieć</td><td>kelnerzy uzupełniają bufet, zbierają naczynia, podają napoje</td></tr>
<tr><td><b>koktajl party</b></td><td>na stojąco, krótkie (ok. 1,5-2 h), zwykle po południu</td><td>przekąski i napoje roznoszone na tacach</td></tr>
<tr><td><b>raut</b></td><td>na stojąco, wieczorne, uroczyste (dyplomacja, gale), dłuższe</td><td>bufety i roznoszenie, dużo personelu</td></tr>
<tr><td><b>lampka wina</b></td><td>krótkie spotkanie (ok. 30-60 min), np. po otwarciu wystawy</td><td>wino, drobne przekąski</td></tr>
<tr><td><b>garden party</b></td><td>w ogrodzie, na świeżym powietrzu</td><td>bufety, grill, namioty</td></tr></table></div>
<h4>Przekąski na przyjęcia na stojąco</h4>
<p>Muszą być na jeden kęs, bez noża: <b>kanapki koktajlowe</b>, koreczki, tartinki, mini tartaletki, finger food. Przyjmuje się ok. 8-12 sztuk na osobę przy krótkim koktajlu.</p>
<h4>Bufet</h4>
<ul>
<li>ustawienie potraw w kolejności menu: talerze na początku, przekąski zimne, sałatki, dania gorące w podgrzewaczach (<b>chafing dish</b>, powyżej +63°C), desery, napoje osobno;</li>
<li>przy każdej potrawie sztućce do nakładania, ewentualnie opis z alergenami;</li>
<li>przy dużej liczbie gości bufet dwustronny, aby uniknąć kolejek.</li>
</ul>
<p>Przy przyjęciu bufetowym zasiadanym goście mają nakryte stoły, ale potrawy biorą z bufetu. Przy przyjęciu na stojąco ustawia się wysokie stoliki koktajlowe, krzesła tylko dla osób starszych.</p>
<p>Rodzaj przyjęcia dobiera się do okazji, pory dnia, liczby gości i budżetu zamawiającego.</p>
<div class="tip">Koktajl party i raut są na stojąco, bankiet jest zasiadany. Na egzaminie łatwo pomylić raut (wieczorny, uroczysty) z koktajlem (krótki, popołudniowy).</div>` },
        { tytul: "Zamówienie i organizacja przyjęcia", tresc: `<h4>Zamówienie przyjęcia zawiera</h4>
<ul>
<li>dane zamawiającego, rodzaj i okazję przyjęcia, datę, godzinę rozpoczęcia i zakończenia;</li>
<li>liczbę gości (w tym dzieci, wegetarian, osób z alergiami);</li>
<li>menu, napoje, sposób obsługi, układ stołów, dekoracje;</li>
<li>cenę za osobę, wartość całkowitą, <b>zaliczkę</b> i termin płatności, warunki rezygnacji;</li>
<li>podpisy obu stron.</li>
</ul>
<h4>Harmonogram</h4>
<ol>
<li>potwierdzenie ostatecznej liczby gości (zwykle kilka dni przed);</li>
<li>zamówienie surowców, napojów, dodatkowego personelu;</li>
<li>w dniu przyjęcia: ustawienie stołów, nakrycia, odprawa personelu (podział rewirów, kolejność serwisu);</li>
<li>przebieg: powitanie lampką wina, serwis dań według ustalonych godzin;</li>
<li>rozliczenie z klientem, protokół zużycia napojów (przy rozliczaniu według zużycia).</li>
</ol>
<h4>Liczba kelnerów</h4>
<p>Orientacyjnie: bankiet zasiadany z pełnym serwisem: 1 kelner na ok. 8-12 gości; przyjęcie bufetowe: 1 kelner na ok. 20-30 gości. Liczba zależy od standardu i liczby dań.</p>
<h4>Precedencja</h4>
<p>Przy oficjalnych przyjęciach ustala się kolejność miejsc według rangi gości. Plan stołów (rozsadzenie) i winietki (karteczki z nazwiskami) przygotowuje się wcześniej.</p>
<h4>Odprawa przed przyjęciem</h4>
<p>Kierownik sali omawia z kelnerami: menu i składniki potraw (alergeny), kolejność i godziny serwisu, przydział rewirów i stołów, rozmieszczenie gości honorowych, sygnały do rozpoczęcia podawania kolejnych dań, sposób serwisu napojów. Każdy kelner zna swój rewir i zastępstwo na wypadek przerwy.</p>
<p>Po przyjęciu sporządza się rozliczenie z zamawiającym i protokół ewentualnych szkód (stłuczona zastawa, zniszczona bielizna).</p>
<div class="tip">W zadaniu praktycznym zawsze zapisz w zamówieniu godzinę rozpoczęcia i zakończenia oraz liczbę gości. Brak tych danych to częsta strata punktów.</div>` },
        { tytul: "Kalkulacja przyjęcia", tresc: `<h4>Kosztorys</h4>
<pre>wartość przyjęcia = cena menu za osobę × liczba gości
                  + napoje + usługi dodatkowe (dekoracje, DJ, tort)
do zapłaty po zaliczce = wartość - zaliczka</pre>
<p><b>Przykład</b>: 60 gości × 180 zł = 10 800 zł, napoje 2 400 zł, dekoracje 600 zł. Razem <b>13 800 zł</b>. Zaliczka 30% = 4 140 zł, pozostaje 9 660 zł.</p>
<h4>Zapotrzebowanie na napoje</h4>
<pre>wino: ok. 1 butelka 0,75 l na 2-3 osoby przy kolacji
1 butelka 0,75 l = ok. 5-6 kieliszków po 125-150 ml
woda: ok. 0,5 l na osobę
szampan na toast: 1 butelka na ok. 6-8 osób</pre>
<p><b>Przykład</b>: toast dla 48 osób, 1 butelka na 8 osób: 48 ÷ 8 = <b>6 butelek</b>.</p>
<h4>Zapotrzebowanie na zastawę</h4>
<pre>liczba sztuk = liczba gości × liczba użyć + zapas (ok. 10%)
np. 50 gości, talerz płytki do przekąski i dania (2 użycia):
50 × 2 = 100 + 10% = 110 talerzy</pre>
<h4>Rabaty i ceny</h4>
<ul>
<li>ceny w ofercie podaje się brutto dla klienta indywidualnego;</li>
<li>usługa gastronomiczna (posiłki) jest opodatkowana stawką 8% VAT, a napoje alkoholowe stawką 23%;</li>
<li>rabat dla grup lub przy wcześniejszej rezerwacji liczy się od wartości przed zaliczką.</li>
</ul>
<h4>Rachunek przy stole</h4>
<p>Rachunek podaje się na życzenie w etui lub na tacce, z prawej strony, osobie zamawiającej (zakrytą sumą do dołu). Płatność kartą odbywa się terminalem przy stoliku, kelner nie zabiera karty z sali.</p>
<div class="tip">Zawsze sprawdzaj, czy zapas zastawy został doliczony i czy liczba butelek została zaokrąglona w górę.</div>` }
      ],
      pytania: [
        Q("Przyjęcie na stojąco, krótkie, popołudniowe, z przekąskami roznoszonymi na tacach, to", "koktajl party", "bankiet", "przyjęcie bufetowe zasiadane", "obiad rodzinny", "Raut jest wieczorny i bardziej uroczysty."),
        Q("Przyjęcie zasiadane z ustalonym menu i pełną obsługą kelnerską to", "bankiet", "koktajl party", "lampka wina", "raut", "Goście siedzą przy nakrytych stołach."),
        Q("Podgrzewacz do utrzymywania potraw gorących na bufecie to", "chafing dish", "gueridon", "shaker", "molton", "Utrzymuje temperaturę powyżej +63°C."),
        Q("Przekąski na przyjęcie na stojąco powinny", "mieścić się w jednym kęsie i nie wymagać noża", "być podawane z nożem i widelcem", "być gorące, z sosem", "mieć gramaturę co najmniej 200 g", "Np. koreczki, tartinki, finger food."),
        Q("Menu kosztuje 150 zł za osobę, gości jest 40, napoje 1 800 zł. Wartość przyjęcia wynosi", "7 800 zł", "6 000 zł", "7 200 zł", "1 950 zł", "40 × 150 + 1 800 = 7 800 zł."),
        Q("Ile butelek szampana potrzeba na toast dla 56 osób, jeśli butelka wystarcza dla 8 osób?", "7", "8", "6", "56", "56 ÷ 8 = 7."),
        Q("Dla 60 gości potrzebne są 2 talerze na osobę i 10% zapasu. Należy przygotować", "132 talerze", "120 talerzy", "66 talerzy", "126 talerzy", "60 × 2 = 120, plus 10% = 132."),
        Q("Kartki z nazwiskami gości ustawiane przy nakryciach to", "winietki", "menażki", "napperony", "bony", "Ułatwiają gościom zajęcie wyznaczonych miejsc.")
      ]
    },
    {
      id: "rozliczenia", tytul: "Rozliczenia i sytuacje trudne", opis: "Rozliczysz gościa, przyjmiesz reklamację i zachowasz się prawidłowo w sytuacjach awaryjnych.",
      lekcje: [
        { tytul: "Rachunek i płatności w restauracji", tresc: `<h4>System POS w gastronomii</h4>
<ul>
<li>zamówienie wprowadza się do systemu przypisanego do <b>numeru stołu</b>; bon trafia do kuchni lub baru;</li>
<li>przed wydrukiem rachunku kelner sprawdza zgodność pozycji z tym, co podano;</li>
<li>paragon fiskalny drukuje się przy każdej sprzedaży i wręcza gościowi.</li>
</ul>
<h4>Dzielenie rachunku</h4>
<p>Gdy goście płacą osobno, kelner pyta o to wcześniej (najlepiej przy zamówieniu) i dzieli rachunek według pozycji. Dzielenie po równo: suma ÷ liczba osób.</p>
<pre>rachunek 384 zł, 4 osoby: 384 ÷ 4 = 96 zł na osobę</pre>
<h4>Opłata serwisowa i napiwki</h4>
<ul>
<li>opłatę serwisową (np. 10% dla grup powyżej 8 osób) można doliczyć tylko wtedy, gdy była podana w karcie menu przed zamówieniem;</li>
<li>napiwek jest dobrowolny. Przy płatności kartą może być dodany w terminalu;</li>
<li>kelner nie komentuje wysokości napiwku i nie przelicza go przy gościu.</li>
</ul>
<h4>Rozliczenie kelnera po zmianie</h4>
<pre>gotówka do oddania = sprzedaż ogółem - płatności kartą - vouchery
przykład: sprzedaż 3 200 zł, karty 2 150 zł, voucher 150 zł
gotówka = 3 200 - 2 150 - 150 = 900 zł</pre>
<p>Kelner rozlicza się z kierownikiem na podstawie raportu kelnerskiego z systemu POS. Niedobór obciąża kelnera, jeśli ma umowę o odpowiedzialności materialnej za powierzone pieniądze.</p>
<h4>Płatność kartą</h4>
<p>Terminal przynosi się do stolika. Gość sam wkłada lub przykłada kartę i wpisuje PIN. Kelner odwraca wzrok i nie dotyka karty bez potrzeby.</p>
<p>Reszta wydawana jest na tacce z paragonem.</p>
<div class="tip">Pułapka: rachunek podaje się dopiero na prośbę gościa. Położenie rachunku bez prośby to sygnał ponaglania.</div>` },
        { tytul: "Reklamacje i goście wymagający", tresc: `<h4>Reklamacja potrawy</h4>
<ol>
<li>wysłuchać gościa, nie przerywać, nie dyskutować o „gustach”;</li>
<li><b>przeprosić</b> i podziękować za uwagę;</li>
<li><b>zabrać</b> potrawę i zaproponować rozwiązanie: wymianę, inną potrawę lub poprawienie (np. dosmażenie steku);</li>
<li>poinformować kuchnię i kierownika sali;</li>
<li>sprawdzić zadowolenie gościa po podaniu nowej potrawy;</li>
<li>rozważyć gest dobrej woli (deser, kawa na koszt firmy) zgodnie z polityką lokalu.</li>
</ol>
<h4>Typowe przyczyny reklamacji</h4>
<ul><li>długi czas oczekiwania, zimna potrawa, zły stopień wysmażenia;</li><li>ciało obce w potrawie (włos, szkło): poważne naruszenie zasad, wymaga zgłoszenia kierownikowi i wpisu w dokumentacji HACCP;</li><li>błąd w rachunku: sprawdzić, skorygować, przeprosić.</li></ul>
<h4>Goście szczególni</h4>
<div class="tw"><table><tr><th>Gość</th><th>Postępowanie</th></tr>
<tr><td>z alergią pokarmową</td><td>sprawdzić skład w dokumentacji, uprzedzić kuchnię, unikać kontaktu krzyżowego</td></tr>
<tr><td>z dziećmi</td><td>krzesełko, menu dziecięce, ostrożnie z gorącymi naczyniami</td></tr>
<tr><td>osoba na wózku</td><td>stolik przy wejściu, usunąć krzesło, zapewnić swobodny przejazd</td></tr>
<tr><td>osoba niewidoma</td><td>odczytać menu, opisać ułożenie potraw na talerzu według tarczy zegara</td></tr>
<tr><td>gość nietrzeźwy</td><td>odmówić podania alkoholu, uprzejmie, bez ośmieszania, w razie agresji kierownik i ochrona</td></tr></table></div>
<p>Gość, który wychodzi bez zapłaty, nie może być zatrzymywany siłą przez kelnera. Należy powiadomić kierownika i policję.</p>
<p>Kelner nie dyskutuje przy stole o winie personelu kuchni. Zapisuje zgłoszenie w rejestrze reklamacji, co pozwala kierownikowi analizować powtarzające się problemy.</p>
<p>Rzeczy pozostawione przez gości na sali kelner przekazuje kierownikowi, a ten wpisuje je do rejestru rzeczy znalezionych.</p>
<div class="tip">Na egzaminie zawsze wybieraj odpowiedź, w której kelner przeprasza i od razu proponuje rozwiązanie, a nie tłumaczy się lub obwinia kuchnię.</div>` },
        { tytul: "BHP i sytuacje awaryjne na sali", tresc: `<h4>Zagrożenia w pracy kelnera</h4>
<ul>
<li><b>poślizgnięcie</b>: rozlane płyny wyciera się natychmiast, ustawia się tabliczkę ostrzegawczą;</li>
<li><b>oparzenia</b>: gorące talerze nosi się przez serwetę serwisową, ostrzega się gości („talerz jest gorący”);</li>
<li><b>skaleczenia</b>: stłuczone szkło zbiera się szufelką i zmiotką, nigdy gołymi rękami;</li>
<li><b>przeciążenie</b>: noszenie tacy blisko ciała, wygodne obuwie zakryte, antypoślizgowe;</li>
<li><b>ogień</b>: flambirowanie z dala od zasłon i dekoracji, świece w stabilnych świecznikach.</li>
</ul>
<h4>Rozlanie napoju na gościa</h4>
<ol><li>natychmiast przeprosić, podać czyste serwetki (nie wycierać gościa samemu bez jego zgody);</li><li>zaproponować oczyszczenie odzieży na koszt lokalu, poinformować kierownika;</li><li>wymienić nakrycie, przykryć mokry obrus serwetą.</li></ol>
<h4>Pierwsza pomoc</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Postępowanie</th></tr>
<tr><td>zakrztuszenie, gość kaszle</td><td>zachęcać do kaszlu</td></tr>
<tr><td>zadławienie, gość nie może oddychać</td><td>5 uderzeń między łopatki, potem 5 uciśnięć nadbrzusza (rękoczyn Heimlicha), naprzemiennie; wezwać pomoc (112)</td></tr>
<tr><td>oparzenie termiczne</td><td>chłodzić letnią wodą ok. 15-20 min, nie przekłuwać pęcherzy</td></tr>
<tr><td>wstrząs anafilaktyczny</td><td>wezwać 112, pomóc użyć autostrzykawki z adrenaliną, jeśli gość ją ma</td></tr>
<tr><td>utrata przytomności, brak oddechu</td><td>112, resuscytacja: 30 uciśnięć klatki i 2 oddechy, AED, jeśli jest dostępny</td></tr></table></div>
<h4>Higiena kelnera</h4>
<p>Czysty strój, krótkie paznokcie, brak intensywnych perfum, włosy spięte. Szkło trzyma się za nóżkę, filiżanki za ucho, sztućce za rękojeść, nigdy za część dotykającą ust gościa.</p>
<p>Apteczka pierwszej pomocy musi być łatwo dostępna, a personel zna numer alarmowy i miejsce AED.</p>
<div class="tip">Pytania o pierwszą pomoc są wspólne dla wielu kwalifikacji: zapamiętaj 30:2 dla RKO i chłodzenie oparzenia letnią wodą.</div>` }
      ],
      pytania: [
        Q("Opłatę serwisową można doliczyć do rachunku, jeśli", "informacja o niej była podana w karcie przed zamówieniem", "kelner uzna obsługę za trudną", "gość zapłaci kartą", "przyjęcie trwało dłużej niż 2 godziny", "Gość musi znać ją z góry."),
        Q("Sprzedaż kelnera 2 600 zł, płatności kartą 1 900 zł, vouchery 100 zł. Gotówka do rozliczenia wynosi", "600 zł", "700 zł", "800 zł", "2 600 zł", "2 600 - 1 900 - 100 = 600 zł."),
        Q("Gość zgłasza, że stek jest zbyt krwisty. Kelner powinien", "przeprosić, zabrać danie i zaproponować dosmażenie lub wymianę", "wyjaśnić, że taki jest przepis szefa kuchni", "doliczyć opłatę za ponowną obróbkę", "zignorować uwagę", "Liczy się szybkie rozwiązanie problemu."),
        Q("Gość z alergią na orzechy pyta o deser. Kelner powinien", "sprawdzić skład w dokumentacji i uprzedzić kuchnię", "zapewnić, że orzechów na pewno nie ma, bez sprawdzania", "odmówić podania deseru", "zaproponować usunięcie orzechów z wierzchu", "Informacja o alergenach musi być rzetelna."),
        Q("Stłuczone szkło na sali kelner usuwa", "szufelką i zmiotką", "gołymi rękami", "serwetą gościa", "nogą pod stół", "Chroni to przed skaleczeniem."),
        Q("Gościowi, który się zadławił i nie może oddychać, należy", "wykonać 5 uderzeń między łopatki, a potem 5 uciśnięć nadbrzusza", "podać wodę do picia", "położyć go na plecach", "czekać na przyjazd karetki bez działania", "Postępowanie naprzemienne, z wezwaniem 112."),
        Q("Oparzenie termiczne dłoni kelnera należy", "chłodzić letnią wodą przez ok. 15-20 minut", "posmarować masłem", "przekłuć pęcherze", "obłożyć lodem bezpośrednio na skórę", "Nie przekłuwa się pęcherzy."),
        Q("Kieliszek z napojem kelner trzyma", "za nóżkę", "za brzeg czaszy", "od środka palcami", "za czaszę całą dłonią", "Nie dotyka się części, z której gość pije.")
      ]
    }
  ]);

  pod("HGT.02", [
    {
      id: "higiena-haccp", tytul: "Higiena i system HACCP", opis: "Rozpoznasz zagrożenia żywności, wyznaczysz punkty krytyczne i poprowadzisz dokumentację higieniczną.",
      lekcje: [
        { tytul: "Drobnoustroje i zatrucia pokarmowe", tresc: `<h4>Najważniejsze patogeny</h4>
<div class="tw"><table><tr><th>Drobnoustrój</th><th>Typowe źródło</th><th>Uwagi</th></tr>
<tr><td><i>Salmonella</i></td><td>jaja, drób, majonez domowy</td><td>ginie w obróbce cieplnej; objawy po 6-72 h</td></tr>
<tr><td><i>Staphylococcus aureus</i> (gronkowiec)</td><td>ręce, rany, nos personelu</td><td>wytwarza <b>toksynę ciepłooporną</b>, której nie niszczy podgrzewanie</td></tr>
<tr><td><i>Clostridium botulinum</i></td><td>konserwy, przetwory w słoikach</td><td>rozwija się beztlenowo; puszka wybrzuszona (bombaż) do wyrzucenia</td></tr>
<tr><td><i>Listeria monocytogenes</i></td><td>sery z mleka niepasteryzowanego, wędzone ryby, wędliny</td><td><b>rośnie w temperaturze lodówki</b>; groźna dla kobiet w ciąży</td></tr>
<tr><td><i>Clostridium perfringens</i></td><td>duże porcje mięsa i sosów schładzane powoli</td><td>dlatego potrawy schładza się szybko</td></tr>
<tr><td><i>Bacillus cereus</i></td><td>ugotowany ryż przetrzymywany w cieple</td><td>przetrwalniki przeżywają gotowanie</td></tr>
<tr><td>norowirusy</td><td>chory personel, owoce morza</td><td>bardzo zaraźliwe; ważne mycie rąk</td></tr></table></div>
<h4>Warunki rozwoju bakterii</h4>
<p>Temperatura (strefa +5 do +63°C), wilgotność, składniki odżywcze (białko), czas, odczyn bliski obojętnemu. W sprzyjających warunkach liczba bakterii podwaja się co ok. 20 minut.</p>
<h4>Choroby personelu</h4>
<p>Pracownik z biegunką, wymiotami, gorączką, zmianami ropnymi skóry rąk musi zostać <b>odsunięty</b> od pracy z żywnością i zgłosić się do lekarza. Zranienie dłoni zabezpiecza się wodoodpornym, kolorowym (niebieskim) opatrunkiem i rękawiczką.</p>
<h4>Zagrożenia chemiczne i fizyczne</h4>
<p>Chemiczne: pozostałości środków myjących, pestycydy, metale ciężkie, histamina w nieświeżych rybach (makrela, tuńczyk), mykotoksyny (aflatoksyny w spleśniałych orzechach). Fizyczne: szkło, metal, kamienie, kości, plastik. Zapobieganie: zakaz szkła w strefie produkcji, wykrywacze metali, przesiewanie mąki, kontrola surowców przy dostawie.</p>
<p>Podejrzenie zatrucia zgłasza się kierownikowi, a próbki potraw zabezpiecza się do badań.</p>
<div class="tip">Pułapka egzaminacyjna: podgrzanie potrawy zanieczyszczonej gronkowcem nie czyni jej bezpieczną, bo toksyna jest ciepłooporna. Listeria to bakteria, która rośnie w lodówce.</div>` },
        { tytul: "7 zasad HACCP w praktyce", tresc: `<h4>Zasady</h4>
<ol>
<li><b>analiza zagrożeń</b> (biologicznych, chemicznych, fizycznych, alergenów) dla każdego etapu;</li>
<li>wyznaczenie <b>CCP</b> (krytycznych punktów kontroli) przy pomocy drzewka decyzyjnego;</li>
<li>ustalenie <b>limitów krytycznych</b> dla każdego CCP;</li>
<li>system <b>monitorowania</b> CCP;</li>
<li><b>działania korygujące</b>, gdy limit zostanie przekroczony;</li>
<li>procedury <b>weryfikacji</b> (czy system działa);</li>
<li><b>dokumentacja</b> i zapisy.</li>
</ol>
<h4>Przykłady CCP w kuchni</h4>
<div class="tw"><table><tr><th>Etap</th><th>Limit krytyczny</th><th>Monitoring</th><th>Działanie korygujące</th></tr>
<tr><td>obróbka cieplna drobiu</td><td>co najmniej +75°C w środku produktu</td><td>termometr szpilkowy, każda partia</td><td>kontynuować obróbkę</td></tr>
<tr><td>schładzanie</td><td>z +63°C do +10°C w ciągu 90 min (do 2 h)</td><td>pomiar, zapis godziny</td><td>przy przekroczeniu potrawę zutylizować</td></tr>
<tr><td>przechowywanie chłodnicze</td><td>0 do +4°C</td><td>odczyt 2 razy dziennie</td><td>przenieść produkty, wezwać serwis</td></tr>
<tr><td>wydawanie na gorąco</td><td>powyżej +63°C</td><td>pomiar w bemarze</td><td>podgrzać do +75°C lub wycofać</td></tr></table></div>
<h4>Programy wstępne</h4>
<p>HACCP działa na fundamencie <b>GHP</b> i <b>GMP</b>: czystość, szkolenia, zaopatrzenie w wodę pitną, kontrola szkodników (<b>DDD</b>: dezynsekcja, dezynfekcja, deratyzacja), gospodarka odpadami, kontrola dostawców.</p>
<h4>Weryfikacja i dokumenty</h4>
<p>Karty kontroli temperatur, rejestry mycia i dezynfekcji, rejestr szkoleń, wyniki badań wody, rejestr dostaw. Nadzór sprawuje <b>Państwowa Inspekcja Sanitarna</b> (sanepid).</p>
<p>Zespół HACCP tworzą osoby znające proces (szef kuchni, technolog, kierownik). Plan HACCP opracowuje się na podstawie <b>schematu technologicznego</b> (diagramu przepływu) sprawdzonego w praktyce.</p>
<p>Dokumenty HACCP przechowuje się co najmniej przez okres przydatności produktów, a w praktyce zwykle rok lub dłużej, na potrzeby kontroli sanepidu.</p>
<div class="tip">Na egzaminie łatwo pomylić monitorowanie (bieżący pomiar, np. termometrem) z weryfikacją (sprawdzenie, czy cały system działa, np. audyt lub badanie laboratoryjne).</div>` },
        { tytul: "Mycie, dezynfekcja i odpady", tresc: `<h4>Etapy mycia i dezynfekcji</h4>
<ol>
<li>usunięcie resztek mechanicznie;</li>
<li>mycie wstępne ciepłą wodą;</li>
<li>mycie zasadnicze roztworem detergentu;</li>
<li>płukanie;</li>
<li><b>dezynfekcja</b> środkiem dopuszczonym do kontaktu z żywnością, w stężeniu i czasie podanym przez producenta;</li>
<li>płukanie wodą pitną (jeśli wymaga tego środek) i suszenie.</li>
</ol>
<p>Zmywarki do naczyń: mycie ok. 55-65°C, płukanie ok. 80-85°C (dezynfekcja termiczna). Środki chemiczne przechowuje się w oryginalnych opakowaniach, w osobnym pomieszczeniu, z kartą charakterystyki.</p>
<h4>Mycie rąk</h4>
<p>Ciepła woda, mydło w płynie, co najmniej ok. 30 s, z myciem przestrzeni między palcami i kciuków, osuszanie ręcznikiem jednorazowym. Kran zamyka się przez ręcznik lub łokciem (bateria bezdotykowa).</p>
<h4>Kolory desek i noży</h4>
<div class="tw"><table><tr><th>Kolor</th><th>Przeznaczenie</th></tr>
<tr><td>czerwony</td><td>surowe mięso</td></tr>
<tr><td>żółty</td><td>surowy drób</td></tr>
<tr><td>niebieski</td><td>surowe ryby</td></tr>
<tr><td>zielony</td><td>warzywa i owoce</td></tr>
<tr><td>brązowy</td><td>warzywa korzeniowe nieobrane</td></tr>
<tr><td>biały</td><td>pieczywo, nabiał</td></tr></table></div>
<h4>Odpady</h4>
<ul>
<li>pojemniki na odpady w kuchni zamykane, otwierane nogą, opróżniane na bieżąco;</li>
<li>segregacja: papier, plastik i metale, szkło, bio, zmieszane;</li>
<li>zużyty olej spożywczy oddaje się firmie odbierającej, nie wylewa do kanalizacji;</li>
<li>resztki pokonsumpcyjne nie mogą wrócić do obrotu.</li>
</ul>
<p>Plan higieny określa: co myć, czym (środek, stężenie), jak często, kto odpowiada i kto kontroluje. Sprzęt drobny (deski, noże) myje się i dezynfekuje po każdym użyciu do innego surowca.</p>
<p>Szkodniki (gryzonie, owady) zwalcza firma DDD na podstawie umowy. Pułapki i lampy owadobójcze oznacza się na planie zakładu, a ich kontrolę dokumentuje się w rejestrze.</p>
<div class="tip">Dezynfekcja zawsze następuje po myciu. Środek dezynfekujący na brudnej powierzchni nie działa skutecznie.</div>` }
      ],
      pytania: [
        Q("Bakteria, która może się rozwijać w temperaturze chłodniczej, to", "Listeria monocytogenes", "Clostridium perfringens", "Salmonella w temperaturze zamrażania", "Bacillus cereus w temperaturze wrzenia", "Listeria rośnie w lodówce, groźna dla kobiet w ciąży."),
        Q("Ciepłooporną toksynę wytwarza", "gronkowiec złocisty", "Listeria", "Salmonella", "drożdże piekarskie", "Podgrzanie potrawy nie niszczy tej toksyny."),
        Q("Wybrzuszona puszka konserwy (bombaż) może wskazywać na obecność", "Clostridium botulinum", "pleśni na powierzchni", "Listeria", "norowirusów", "Bakteria rozwija się beztlenowo i wytwarza gaz."),
        Q("Drugą zasadą HACCP jest", "wyznaczenie krytycznych punktów kontroli", "dokumentacja", "weryfikacja", "działania korygujące", "Pierwsza to analiza zagrożeń."),
        Q("Potrawę należy schłodzić z +63°C do +10°C w czasie ok.", "90 minut", "6 godzin", "12 godzin", "24 godzin", "Szybkie schładzanie ogranicza rozwój bakterii."),
        Q("Deskę w kolorze niebieskim stosuje się do", "surowych ryb", "surowego mięsa", "pieczywa", "warzyw", "Czerwona: mięso, żółta: drób, zielona: warzywa."),
        Q("Dezynfekcję powierzchni przeprowadza się", "po umyciu i spłukaniu", "przed usunięciem resztek", "zamiast mycia", "tylko raz w tygodniu", "Na brudnej powierzchni środek działa słabo."),
        Q("Kucharz z ropną zmianą skóry na dłoni powinien", "zostać odsunięty od pracy z żywnością", "pracować w rękawiczkach bez zgłaszania", "przejść na stanowisko wydawania potraw", "zakleić ranę zwykłym plastrem i pracować", "Ropne zmiany to źródło gronkowca.")
      ]
    },
    {
      id: "obrobka", tytul: "Obróbka wstępna i cieplna", opis: "Policzysz straty obróbki i dobierzesz technikę cieplną do surowca.",
      lekcje: [
        { tytul: "Obróbka wstępna i normy odpadków", tresc: `<h4>Kolejność obróbki wstępnej warzyw</h4>
<ol><li>sortowanie (usunięcie zepsutych);</li><li>mycie (strefa brudna);</li><li>obieranie;</li><li>płukanie (strefa czysta);</li><li>rozdrabnianie.</li></ol>
<p>Obranych ziemniaków nie przechowuje się długo w wodzie (wypłukują się witaminy i skrobia). Witamina C utlenia się po pokrojeniu, dlatego surówki przygotowuje się tuż przed podaniem.</p>
<h4>Odpadki i wydajność</h4>
<pre>masa netto = masa brutto × (100% - % odpadków)
masa brutto = masa netto ÷ (100% - % odpadków)
przykład 1: 12 kg ziemniaków, odpadki 20% → 12 × 0,8 = 9,6 kg
przykład 2: potrzeba 6 kg obranej marchwi, odpadki 25%
→ 6 ÷ 0,75 = 8 kg marchwi brutto</pre>
<h4>Orientacyjne odpadki</h4>
<div class="tw"><table><tr><th>Surowiec</th><th>Odpadki</th></tr>
<tr><td>ziemniaki młode / stare</td><td>ok. 15% / 20-30%</td></tr>
<tr><td>marchew, pietruszka</td><td>ok. 20-25%</td></tr>
<tr><td>cebula</td><td>ok. 10-15%</td></tr>
<tr><td>ryba cała na filety</td><td>ok. 45-55%</td></tr>
<tr><td>jaja (skorupka)</td><td>ok. 12%</td></tr></table></div>
<h4>Formy krojenia</h4>
<ul>
<li><b>brunoise</b>: drobna kostka ok. 2-3 mm;</li>
<li><b>macédoine</b>: kostka ok. 5-10 mm;</li>
<li><b>julienne</b>: cienkie paski ok. 1-2 mm;</li>
<li><b>jardinière</b>: słupki ok. 4-5 cm;</li>
<li><b>paysanne</b>: cienkie płatki;</li>
<li><b>chiffonade</b>: cienkie paski liści (sałata, szpinak, bazylia);</li>
<li><b>tournée</b>: toczenie warzyw w kształt beczułki (7 ścianek).</li>
</ul>
<h4>Obróbka mięsa i jaj</h4>
<p>Mięso myje się krótko pod bieżącą wodą (nie moczy), osusza, usuwa błony i ścięgna, rozbija (kotlety), panieruje. Jaja wyparza się (krótko zanurza w gorącej wodzie) w strefie brudnej, a wybija w czystej.</p>
<div class="tip">Przy obliczaniu masy brutto dziel przez (1 - odpadki), a nie mnóż przez (1 + odpadki). 6 × 1,25 = 7,5 kg to błąd.</div>` },
        { tytul: "Techniki obróbki cieplnej", tresc: `<h4>Podział technik</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Techniki</th></tr>
<tr><td>w wodzie i parze</td><td>gotowanie tradycyjne, na parze, pod ciśnieniem, w niskiej temp. (poszowanie 70-90°C), blanszowanie</td></tr>
<tr><td>w tłuszczu</td><td>smażenie płytkie, głębokie (frytura 160-180°C), sauté (podrzucanie), stir-fry</td></tr>
<tr><td>w suchym gorącym powietrzu</td><td>pieczenie, grillowanie, opiekanie (gratin, zapiekanie)</td></tr>
<tr><td>mieszane</td><td>duszenie, braising, pieczenie w rękawie, sous-vide</td></tr></table></div>
<h4>Gotowanie mięsa</h4>
<ul>
<li>do <b>wywaru</b> (rosołu) mięso wkłada się do <b>zimnej</b> wody, aby składniki przeszły do płynu;</li>
<li>do <b>sztuki mięsa</b> podawanej jako danie mięso wkłada się do <b>wrzącej</b> wody, aby ścięła się warstwa białka i zatrzymała soki.</li>
</ul>
<h4>Smażenie</h4>
<ul>
<li>tłuszcz z wysokim <b>punktem dymienia</b> (olej rzepakowy rafinowany, ok. 200°C+); masło klarowane zamiast zwykłego (zwykłe przypala się ok. 150°C);</li>
<li>frytki smaży się dwuetapowo: 130-150°C do miękkości, potem 170-180°C do zrumienienia;</li>
<li>olej we frytownicy wymienia się, gdy ciemnieje, pieni się lub dymi (powstaje akroleina i związki polarne).</li>
</ul>
<h4>Sous-vide</h4>
<p>Produkt zamknięty próżniowo, gotowany w kąpieli o stałej, dokładnej temperaturze (np. polędwica wołowa 54-57°C przez 1-3 h, łosoś ok. 45-50°C). Zachowuje soczystość, ale wymaga ścisłej kontroli czasu i temperatury, a potem szybkiego schłodzenia, jeśli nie podaje się od razu.</p>
<h4>Pieczenie mięsa</h4>
<p>Duże kawałki obsmaża się lub piecze najpierw w wysokiej temperaturze (ok. 220°C), potem w niższej (ok. 160-180°C), polewając wytopionym sosem. Po upieczeniu mięso odpoczywa ok. 10-15 min, aby soki się rozeszły.</p>
<p>Duszenie mięsa trwa zwykle od 1 do 3 godzin.</p>
<div class="tip">Typowe pytanie: mięso do rosołu do zimnej wody, mięso do podania jako sztuka mięsa do wrzątku.</div>` },
        { tytul: "Przemiany składników podczas obróbki", tresc: `<h4>Białka</h4>
<ul>
<li><b>denaturacja</b> (ścinanie) białek: od ok. 60°C (białko jaja ok. 62-65°C, żółtko ok. 65-70°C);</li>
<li><b>kolagen</b> tkanki łącznej przy długim gotowaniu w wilgoci zamienia się w <b>żelatynę</b>; dlatego mięsa z dużą ilością tkanki łącznej (goleń, łopatka) dusi się lub gotuje długo;</li>
<li>białka mięsa krótko smażone pozostają soczyste, smażone za długo twardnieją i tracą wodę.</li>
</ul>
<h4>Węglowodany</h4>
<ul>
<li><b>kleikowanie skrobi</b>: w wodzie, od ok. 60-80°C ziarna skrobi pęcznieją (zagęszczanie sosów, gotowanie kasz);</li>
<li><b>dekstrynizacja</b>: skrobia w suchym wysokim cieple (zasmażka, skórka chleba);</li>
<li><b>karmelizacja</b> cukru: od ok. 160°C;</li>
<li><b>retrogradacja</b>: czerstwienie pieczywa, twardnienie zimnych klusek.</li>
</ul>
<h4>Reakcja Maillarda</h4>
<p>Reakcja cukrów redukujących z aminokwasami w wysokiej temperaturze (od ok. 140°C) daje brązową barwę i aromat (skórka pieczeni, steku, chleba). Przy zbyt wysokiej temperaturze powstaje <b>akryloamid</b> (frytki smażone na ciemno).</p>
<h4>Tłuszcze i witaminy</h4>
<ul>
<li>przegrzany tłuszcz rozkłada się i dymi; nie wolno go używać ponownie wiele razy;</li>
<li>witamina C i witaminy z grupy B są wrażliwe na wysoką temperaturę, tlen i rozpuszczają się w wodzie: warzywa wkłada się do <b>wrzącej</b>, osolonej wody, gotuje krótko pod przykryciem (wyjątek: warzywa zielone bez przykrycia, aby nie traciły barwy);</li>
<li>barwniki: chlorofil brązowieje w kwaśnym środowisku i przy długim gotowaniu; antocyjany (czerwona kapusta) zachowują barwę po dodaniu kwasu (octu, cytryny).</li>
</ul>
<p>Długie trzymanie potraw w cieple również niszczy witaminy.</p>
<div class="tip">Czerwona kapusta z octem zostaje czerwona, a fasolka szparagowa gotowana z kwasem lub pod przykryciem szarzeje. To klasyczne pytanie egzaminacyjne.</div>` }
      ],
      pytania: [
        Q("Ile ziemniaków brutto trzeba pobrać, aby otrzymać 9 kg obranych, przy odpadkach 25%?", "12 kg", "11,25 kg", "6,75 kg", "10 kg", "9 ÷ 0,75 = 12 kg."),
        Q("15 kg marchwi, odpadki 20%. Masa netto po obróbce wynosi", "12 kg", "13 kg", "3 kg", "18 kg", "15 × 0,8 = 12 kg."),
        Q("Krojenie warzyw w drobną kostkę ok. 2-3 mm to", "brunoise", "julienne", "jardinière", "chiffonade", "Julienne to cienkie paski."),
        Q("Mięso przeznaczone na wywar do zupy wkłada się do", "zimnej wody", "wrzącej wody", "gorącego tłuszczu", "piekarnika nagrzanego do 220°C", "Składniki przechodzą wtedy do wywaru."),
        Q("Gotowanie w próżniowym woreczku, w kąpieli wodnej o stałej i dokładnej temperaturze, to", "sous-vide", "poszowanie", "blanszowanie", "braising", "Wymaga ścisłej kontroli czasu i temperatury."),
        Q("Zamiana kolagenu w żelatynę podczas długiego gotowania sprawia, że mięso", "staje się miękkie", "twardnieje", "traci barwę na zieloną", "staje się bardziej tłuste", "Dlatego mięsa z tkanką łączną dusi się długo."),
        Q("Brązowienie skórki pieczeni w wysokiej temperaturze wynika z", "reakcji Maillarda", "kleikowania skrobi", "retrogradacji skrobi", "denaturacji białka na zimno", "To reakcja cukrów z aminokwasami."),
        Q("Aby czerwona kapusta zachowała barwę, podczas duszenia dodaje się", "kwas, np. ocet lub sok z cytryny", "sodę oczyszczoną", "dużą ilość wody", "zasmażkę ciemną", "Antocyjany są czerwone w środowisku kwaśnym.")
      ]
    },
    {
      id: "mieso-ryby", tytul: "Mięso, drób i ryby", opis: "Dobierzesz element mięsa do potrawy i przygotujesz go w bezpiecznej temperaturze.",
      lekcje: [
        { tytul: "Elementy kulinarne mięsa", tresc: `<h4>Wieprzowina</h4>
<div class="tw"><table><tr><th>Element</th><th>Zastosowanie</th></tr>
<tr><td>schab</td><td>kotlety schabowe, schab pieczony</td></tr>
<tr><td>polędwiczka</td><td>medaliony, smażenie krótkie</td></tr>
<tr><td>karkówka</td><td>grill, pieczenie, duszenie</td></tr>
<tr><td>szynka</td><td>pieczeń, zrazy, kotlety</td></tr>
<tr><td>łopatka</td><td>gulasz, mięso mielone, pieczeń</td></tr>
<tr><td>boczek, żeberka</td><td>pieczenie, duszenie, wędzenie</td></tr>
<tr><td>golonka</td><td>gotowanie, pieczenie</td></tr></table></div>
<h4>Wołowina</h4>
<div class="tw"><table><tr><th>Element</th><th>Zastosowanie</th></tr>
<tr><td>polędwica</td><td>stek, befsztyk, tatar, chateaubriand</td></tr>
<tr><td>rostbef (wysoki i niski)</td><td>antrykot (entrecôte), pieczeń angielska, steki</td></tr>
<tr><td>udziec: zrazowa górna</td><td>zrazy zawijane, bitki</td></tr>
<tr><td>udziec: zrazowa dolna, ligawa</td><td>pieczeń duszona</td></tr>
<tr><td>łopatka</td><td>gulasz, duszenie</td></tr>
<tr><td>mostek, szponder</td><td>rosół, sztuka mięsa</td></tr>
<tr><td>goleń</td><td>wywary, osso buco (z cielęciny)</td></tr></table></div>
<h4>Ocena świeżości mięsa</h4>
<ul><li>barwa właściwa dla gatunku (wołowina ciemnoczerwona, wieprzowina różowa), powierzchnia matowa, lekko wilgotna, nie lepka;</li><li>zapach swoisty, bez kwaśnego lub gnilnego;</li><li>konsystencja jędrna: dołek po ucisku palcem szybko się wyrównuje.</li></ul>
<h4>Kruszenie mięsa</h4>
<p>Mięso wołowe dojrzewa (kruszeje) w chłodni kilka do kilkunastu dni. Sposoby mechaniczne: rozbijanie tłuczkiem, krojenie w poprzek włókien, mielenie. Chemiczne: marynaty z kwasem (ocet, wino, kefir) lub enzymami (papaina z papai, bromelaina z ananasa).</p>
<h4>Cielęcina i jagnięcina</h4>
<p>Cielęcina jest jasnoróżowa, delikatna, chuda: sznycle, eskalopki, potrawki, pieczeń z udźca, goleń na osso buco. Jagnięcina: comber, kotlety z kością (carré), udziec na pieczeń, łopatka na gulasz. Mięso jagnięce podaje się często z miętą, rozmarynem, czosnkiem.</p>
<p>Mięso mielone przygotowuje się w dniu użycia i przechowuje krótko w chłodni, bo duża powierzchnia sprzyja rozwojowi bakterii.</p>
<div class="tip">Elementy z dużą ilością tkanki łącznej (łopatka, goleń, mostek) gotuje się lub dusi. Elementy delikatne (polędwica, rostbef) smaży się krótko lub piecze.</div>` },
        { tytul: "Temperatury i stopnie wysmażenia", tresc: `<h4>Stopnie wysmażenia steku wołowego</h4>
<div class="tw"><table><tr><th>Stopień</th><th>Temperatura w środku</th><th>Wygląd</th></tr>
<tr><td>blue (bardzo krwisty)</td><td>ok. 45-48°C</td><td>w środku surowy, ciepły</td></tr>
<tr><td>rare (krwisty)</td><td>ok. 50-52°C</td><td>czerwony środek</td></tr>
<tr><td>medium rare</td><td>ok. 54-57°C</td><td>różowoczerwony środek</td></tr>
<tr><td>medium</td><td>ok. 60-63°C</td><td>różowy środek</td></tr>
<tr><td>medium well</td><td>ok. 65-68°C</td><td>lekko różowy</td></tr>
<tr><td>well done</td><td>ok. 70°C i więcej</td><td>szary, bez soku</td></tr></table></div>
<h4>Bezpieczne temperatury</h4>
<ul>
<li><b>drób</b> i <b>mięso mielone</b>: zawsze dobrze przegotowane, co najmniej <b>+75°C</b> w środku;</li>
<li>wieprzowina: w polskiej praktyce gastronomicznej do pełnego dogotowania (ok. +70-75°C);</li>
<li>pomiar termometrem szpilkowym w najgrubszym miejscu, nie przy kości.</li>
</ul>
<h4>Drób</h4>
<ul>
<li>kurczak, indyk, kaczka, gęś; mięso jasne (pierś) jest chude, ciemne (udo) bardziej soczyste;</li>
<li>surowy drób to główne źródło <i>Salmonelli</i> i <i>Campylobacter</i>; nie myje się go pod strumieniem wody (rozpryskiwanie bakterii), deski osobne (żółte);</li>
<li>kaczkę i gęś piecze się długo, aby wytopić tłuszcz, nakłuwając skórę.</li>
</ul>
<h4>Panierowanie</h4>
<ul>
<li><b>pojedyncze</b>: w mące;</li>
<li><b>podwójne</b>: w mące i jajku;</li>
<li><b>potrójne</b> (angielskie): mąka, jajo, bułka tarta (kotlet schabowy, sznycel wiedeński z cielęciny).</li>
</ul>
<p>Steki przed smażeniem wyjmuje się z chłodni ok. 30 min wcześniej, osusza, soli tuż przed smażeniem lub po nim. Smaży się na mocno rozgrzanej patelni lub grillu, odwracając szczypcami (nakłuwanie widelcem powoduje wyciek soku). Po smażeniu stek odpoczywa kilka minut.</p>
<p>Klient zamawiający stek jest zawsze pytany o stopień wysmażenia.</p>
<div class="tip">Na egzaminie stopień „medium” to różowy środek, a nie krwisty. Drób nigdy nie jest podawany na różowo.</div>` },
        { tytul: "Ryby i owoce morza", tresc: `<h4>Ocena świeżości ryby</h4>
<ul>
<li>oczy <b>wypukłe</b>, przejrzyste (u nieświeżej zapadnięte, mętne);</li>
<li>skrzela <b>jasnoczerwone</b>, wilgotne;</li>
<li>łuski błyszczące, ściśle przylegające, śluz przezroczysty;</li>
<li>mięso jędrne, sprężyste, zapach świeży, morski, bez amoniaku.</li>
</ul>
<h4>Podział ryb</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Przykłady</th></tr>
<tr><td>chude (do 2% tłuszczu)</td><td>dorsz, mintaj, sandacz, szczupak, morszczuk</td></tr>
<tr><td>średnio tłuste (2-8%)</td><td>karp, pstrąg, flądra</td></tr>
<tr><td>tłuste (powyżej 8%)</td><td>łosoś, makrela, śledź, węgorz</td></tr></table></div>
<h4>Obróbka</h4>
<ol><li>rozmrażanie w chłodni (ryby filetowane można też smażyć z lekko zamrożonych, aby nie straciły kształtu);</li><li>skrobanie łusek od ogona do głowy, patroszenie, usunięcie skrzeli;</li><li>filetowanie wzdłuż kręgosłupa;</li><li>skropienie sokiem z cytryny i solenie tuż przed obróbką (sól wyciąga wodę).</li></ol>
<p>Ryby mają mało tkanki łącznej, więc obróbka jest <b>krótka</b>. Gotowane są zwykle w <b>wywarze warzywnym z dodatkiem kwasu</b> (court-bouillon) w temperaturze poniżej wrzenia, aby nie rozpadały się.</p>
<h4>Owoce morza</h4>
<ul>
<li>małże kupuje się żywe: muszla zamknięta lub zamykająca się po stuknięciu. Po ugotowaniu muszle zamknięte odrzuca się;</li>
<li>krewetki gotuje się krótko (2-3 min), aż zmienią barwę na różową;</li>
<li>skorupiaki i mięczaki są <b>alergenami</b> z listy 14.</li>
</ul>
<h4>Dodatki do ryb</h4>
<p>Sosy: holenderski, tatarski, koperkowy, maślany z cytryną. Wina białe wytrawne. Ziemniaki gotowane z koperkiem, ryż, warzywa na parze.</p>
<p>Ryby mrożone w glazurze (cienka warstwa lodu) mają deklarowaną masę netto bez glazury. Przy kalkulacji uwzględnia się, że glazura może stanowić kilka do kilkunastu procent masy.</p>
<p>Ryby przechowuje się w temperaturze ok. 0 do +2°C, najlepiej na lodzie.</p>
<div class="tip">Rybę soli się bezpośrednio przed smażeniem. Solenie z wyprzedzeniem powoduje wyciek soku i suche mięso.</div>` }
      ],
      pytania: [
        Q("Element wołowy przeznaczony na tatar i befsztyk to", "polędwica", "szponder", "goleń", "mostek", "To najdelikatniejszy element wołowiny."),
        Q("Na zrazy zawijane wybiera się wołową", "zrazową górną", "polędwicę", "golonkę", "żeberka", "Zrazowa górna pochodzi z udźca."),
        Q("Stek w stopniu „medium” ma w środku temperaturę ok.", "60-63°C", "45-48°C", "75-80°C", "35-40°C", "W środku jest różowy."),
        Q("Drób i mięso mielone muszą osiągnąć w środku co najmniej", "+75°C", "+50°C", "+60°C", "+40°C", "To zapobiega zatruciom Salmonellą."),
        Q("Panierowanie w mące, jajku i bułce tartej to panierowanie", "potrójne (angielskie)", "pojedyncze", "podwójne", "na mokro", "Stosowane m.in. do kotleta schabowego."),
        Q("Świeża ryba ma", "oczy wypukłe i skrzela jasnoczerwone", "oczy zapadnięte i mętne", "skrzela szare", "zapach amoniaku", "To podstawowa ocena organoleptyczna."),
        Q("Rybą chudą jest", "dorsz", "węgorz", "łosoś", "makrela", "Chude ryby mają do ok. 2% tłuszczu."),
        Q("Po ugotowaniu małży odrzuca się te, które", "mają zamknięte muszle", "mają otwarte muszle", "zmieniły kolor", "mają piasek w środku", "Zamknięta muszla po gotowaniu oznacza martwego małża przed obróbką.")
      ]
    },
    {
      id: "zupy-sosy", tytul: "Zupy, sosy i dodatki", opis: "Przygotujesz wywary, zupy, sosy podstawowe i dodatki skrobiowe w prawidłowych proporcjach.",
      lekcje: [
        { tytul: "Wywary i zupy", tresc: `<h4>Wywary</h4>
<ul>
<li><b>mięsny</b> (rosół): mięso i kości do zimnej wody, gotować bardzo wolno („mruga”), zbierać szumowiny, dodać włoszczyznę i opaloną cebulę po ok. 1-1,5 h;</li>
<li><b>z kości</b> (fond): kości jasne lub obsmażane (ciemny fond), długie gotowanie;</li>
<li><b>rybny</b>: ości, głowy (bez skrzeli), krótko, ok. 20-30 min, bo gorzknieje;</li>
<li><b>warzywny</b>: ok. 30-40 min.</li>
</ul>
<h4>Klarowanie</h4>
<p>Do zimnego, odtłuszczonego wywaru dodaje się „klarę”: mięso mielone wołowe z białkiem jaja i warzywami, powoli podgrzewa. Ścinające się białko wiąże zmętnienia. Tak przygotowuje się bulion i consommé.</p>
<h4>Podział zup</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Przykłady</th></tr>
<tr><td>czyste</td><td>rosół, barszcz czerwony, consommé</td></tr>
<tr><td>zagęszczane zawiesiną</td><td>ogórkowa, pomidorowa, żurek</td></tr>
<tr><td>zagęszczane zasmażką</td><td>fasolowa, grochowa (tradycyjnie)</td></tr>
<tr><td>przecierane, purée</td><td>grochówka przecierana, krem z dyni</td></tr>
<tr><td>kremy</td><td>zagęszczane śmietanką i żółtkiem (liaison) lub masłem</td></tr>
<tr><td>zimne</td><td>chłodnik litewski, gazpacho, zupy owocowe</td></tr></table></div>
<h4>Normy</h4>
<p>Porcja zupy: ok. <b>250-350 ml</b>. Zupy podaje się w temperaturze co najmniej <b>+75°C</b>, chłodniki ok. +10°C. Do zagęszczania liaison (żółtka ze śmietanką) zupę zdejmuje się z ognia, bo żółtko ścina się powyżej ok. 70°C.</p>
<h4>Zawiesina i hartowanie</h4>
<p>Zawiesinę (mąka rozprowadzona w zimnym mleku, śmietanie lub wodzie) wlewa się do wrzącej zupy, mieszając. Śmietanę najpierw <b>hartuje się</b>: miesza z niewielką ilością gorącej zupy, aby się nie zważyła.</p>
<p>Wkładki do zup: makaron, ryż, kasze, kluski, grzanki, groszek ptysiowy. Gotuje się je osobno i dodaje przy wydawaniu, aby zupa nie mętniała i nie gęstniała.</p>
<div class="tip">Wywar rybny gotowany zbyt długo staje się gorzki i mętny. Na egzaminie pytają o czas: ok. 20-30 minut.</div>` },
        { tytul: "Sosy podstawowe i pochodne", tresc: `<h4>Zasmażki</h4>
<div class="tw"><table><tr><th>Zasmażka</th><th>Czas, barwa</th><th>Zastosowanie</th></tr>
<tr><td>biała</td><td>krótko, bez zmiany barwy</td><td>beszamel, sosy jasne</td></tr>
<tr><td>jasna (złocista)</td><td>do słomkowej barwy</td><td>velouté, sosy na jasnym wywarze</td></tr>
<tr><td>ciemna (rumiana)</td><td>do brązowej barwy</td><td>sos hiszpański, sosy ciemne</td></tr></table></div>
<p>Proporcja: tłuszcz i mąka zwykle 1:1 (wagowo). Gorącą zasmażkę rozprowadza się zimnym płynem lub zimną zasmażkę gorącym płynem, aby nie powstały grudki.</p>
<h4>Sosy matki</h4>
<div class="tw"><table><tr><th>Sos podstawowy</th><th>Skład</th><th>Przykłady pochodnych</th></tr>
<tr><td>beszamel</td><td>biała zasmażka, mleko</td><td>Mornay (z serem), sos cebulowy</td></tr>
<tr><td>velouté</td><td>jasna zasmażka, jasny wywar</td><td>sos koperkowy, chrzanowy, potrawkowy</td></tr>
<tr><td>hiszpański (demi-glace)</td><td>ciemna zasmażka, ciemny wywar, warzywa, przecier</td><td>sos myśliwski, grzybowy ciemny</td></tr>
<tr><td>pomidorowy</td><td>przecier pomidorowy, wywar, warzywa</td><td>sos neapolitański</td></tr>
<tr><td>holenderski</td><td>emulsja żółtek i masła klarowanego, sok z cytryny</td><td>bearneński (z estragonem), musztardowy</td></tr></table></div>
<h4>Sos holenderski</h4>
<p>Żółtka ubija się w <b>kąpieli wodnej</b> (temperatura masy ok. 60-65°C), stopniowo dodając ciepłe masło klarowane. Przegrzanie ścina żółtka (sos się „waży”). Sos przechowuje się w cieple (ok. 60°C), krótko, bo jest ryzykowny mikrobiologicznie.</p>
<h4>Sosy zimne</h4>
<ul>
<li><b>majonez</b>: emulsja żółtka i oleju z musztardą i kwasem; składniki w tej samej temperaturze (pokojowej), olej dodawany cienkim strumieniem. Pochodne: tatarski, remoulade, czosnkowy;</li>
<li><b>vinaigrette</b>: olej i ocet w proporcji ok. <b>3:1</b>, przyprawy;</li>
<li>sosy na bazie jogurtu, śmietany (do surówek).</li>
</ul>
<p>Sosy ciepłe utrzymuje się w bemarze powyżej +63°C, przykryte, aby nie tworzył się kożuch (można też posmarować powierzchnię masłem).</p>
<div class="tip">Przy majonezie i holenderskim, emulsja psuje się przez zbyt szybkie dodawanie tłuszczu. Ratunek: nowe żółtko i stopniowe dodawanie zważonej masy.</div>` },
        { tytul: "Ziemniaki, kasze, makarony", tresc: `<h4>Ziemniaki</h4>
<ul>
<li>typy kulinarne: <b>A</b> sałatkowe (zwarte, nie rozpadają się), <b>B</b> ogólnoużytkowe, <b>C</b> mączyste (purée, placki, pyzy);</li>
<li>ziemniaki gotuje się w osolonej wodzie, od zimnej lub wrzącej wody (młode od wrzącej), pod przykryciem;</li>
<li><b>purée</b>: przecieranie na gorąco, dodatek ciepłego mleka i masła; zimne mleko daje kleistą masę;</li>
<li>ziemniaki zielone (z solaniną) nie nadają się do spożycia.</li>
</ul>
<h4>Kasze i ryż: proporcje wody</h4>
<div class="tw"><table><tr><th>Produkt</th><th>Woda na 1 część kaszy (objętościowo)</th><th>Uwagi</th></tr>
<tr><td>kasza gryczana</td><td>ok. 2</td><td>na sypko, po zagotowaniu na małym ogniu lub w piekarniku</td></tr>
<tr><td>kasza jęczmienna (pęczak)</td><td>ok. 2,5-3</td><td>dłuższe gotowanie</td></tr>
<tr><td>kasza jaglana</td><td>ok. 2</td><td>przepłukać wrzątkiem (goryczka)</td></tr>
<tr><td>ryż biały długoziarnisty</td><td>ok. 1,5-2</td><td>na sypko, przepłukany</td></tr>
<tr><td>kasza manna</td><td>dużo płynu (mleko)</td><td>wsypywać cienkim strumieniem do wrzącego płynu, mieszając</td></tr></table></div>
<p>Kasze zwiększają objętość ok. 2-3 razy. Ryżu na risotto się nie płucze, aby zachować skrobię, która nadaje kremowość.</p>
<h4>Makarony</h4>
<ul>
<li>proporcja: ok. <b>1 l wody na 100 g</b> makaronu, ok. 10 g soli na litr;</li>
<li>gotowanie <b>al dente</b> (sprężysty, lekko twardy w środku);</li>
<li>makaron do sałatek przepłukuje się zimną wodą, do sosu nie, bo skrobia wiąże sos.</li>
</ul>
<h4>Kluski i pierogi</h4>
<p>Ciasto pierogowe: mąka, ciepła woda, odrobina tłuszczu, sól; krótko wyrabiane. Pierogi wrzuca się do wrzącej osolonej wody i gotuje ok. 2-3 min od wypłynięcia. Kluski śląskie: ziemniaki gotowane i skrobia ziemniaczana (ok. 1/4 masy ziemniaków).</p>
<div class="tip">Do purée wybierz ziemniaki typu C (mączyste), do sałatki typu A. Ten podział pojawia się w testach.</div>` }
      ],
      pytania: [
        Q("Wywar rybny gotuje się ok.", "20-30 minut", "2-3 godziny", "5 minut", "całą noc", "Dłuższe gotowanie daje gorycz i mętność."),
        Q("Do klarowania rosołu na consommé używa się", "mięsa mielonego z białkiem jaja", "zasmażki ciemnej", "żelatyny i octu", "mąki ziemniaczanej", "Ścinające się białko wiąże zmętnienia."),
        Q("Śmietanę przed dodaniem do gorącej zupy należy", "zahartować niewielką ilością gorącej zupy", "zagotować osobno", "zamrozić", "wymieszać z octem", "Zapobiega to zważeniu śmietany."),
        Q("Sos beszamelowy przygotowuje się z", "białej zasmażki i mleka", "ciemnej zasmażki i ciemnego wywaru", "żółtek i masła klarowanego", "oleju i octu", "Velouté to jasna zasmażka z jasnym wywarem."),
        Q("Sos holenderski to emulsja", "żółtek i masła klarowanego", "oleju i octu", "mąki i mleka", "śmietany i jogurtu", "Przygotowuje się go w kąpieli wodnej."),
        Q("Proporcja oleju do octu w sosie vinaigrette wynosi ok.", "3:1", "1:3", "1:1", "10:1", "Klasyczna proporcja to 3 części oleju na 1 część kwasu."),
        Q("Do przygotowania purée najlepsze są ziemniaki typu", "C (mączyste)", "A (sałatkowe)", "B (ogólnoużytkowe) wyłącznie młode", "dowolne zielone", "Typ A nie rozpada się, dobry do sałatek."),
        Q("Makaron gotuje się w proporcji ok.", "1 l wody na 100 g makaronu", "100 ml wody na 100 g", "3 l wody na 50 g", "pół litra wody na 1 kg", "Zbyt mało wody skleja makaron.")
      ]
    },
    {
      id: "ciasta-desery", tytul: "Ciasta i desery", opis: "Przygotujesz podstawowe ciasta i desery, znając proporcje, temperatury i błędy technologiczne.",
      lekcje: [
        { tytul: "Ciasta spulchniane biologicznie i chemicznie", tresc: `<h4>Ciasto drożdżowe</h4>
<ul>
<li><b>rozczyn</b>: drożdże, letnie mleko (ok. 30-35°C), odrobina cukru i mąki; drożdże giną powyżej ok. 50-60°C;</li>
<li>wyrabianie do momentu, aż ciasto odchodzi od ręki i naczynia, z pęcherzykami powietrza;</li>
<li>wyrastanie w ciepłym miejscu bez przeciągów (ok. 28-32°C), ciasto podwaja objętość;</li>
<li>pieczenie ok. 180-200°C; tłuszcz dodaje się na końcu wyrabiania, bo hamuje drożdże;</li>
<li>za dużo cukru lub soli spowalnia fermentację.</li>
</ul>
<h4>Ciasto kruche</h4>
<ul>
<li>proporcja <b>mąka : tłuszcz : cukier = 3 : 2 : 1</b> (ewentualnie żółtka);</li>
<li>składniki <b>zimne</b>, szybkie zagniatanie (ciepło rąk topi tłuszcz i ciasto staje się twarde, „zaparzone”);</li>
<li>chłodzenie ok. 30 min, nakłucie widelcem przed pieczeniem, ok. 180-200°C.</li>
</ul>
<h4>Ciasto piernikowe i ucierane</h4>
<ul>
<li>piernik: miód, przyprawa korzenna, spulchniacze chemiczne (<b>soda</b> z kwaśnym środowiskiem, amoniak w płaskich piernikach);</li>
<li>ciasto ucierane (babka, muffiny): ucieranie tłuszczu z cukrem na puszystą masę, dodawanie jaj pojedynczo, potem mąka z proszkiem do pieczenia.</li>
</ul>
<h4>Spulchniacze</h4>
<div class="tw"><table><tr><th>Spulchniacz</th><th>Rodzaj</th><th>Ciasta</th></tr>
<tr><td>drożdże</td><td>biologiczny (CO₂ z fermentacji)</td><td>drożdżowe, pizza, pączki</td></tr>
<tr><td>proszek do pieczenia</td><td>chemiczny</td><td>ucierane, kruche</td></tr>
<tr><td>soda oczyszczona</td><td>chemiczny, wymaga kwasu (miód, kefir)</td><td>piernik, ciasto na maślance</td></tr>
<tr><td>amoniak (węglan amonu)</td><td>chemiczny</td><td>płaskie pierniczki, ciastka</td></tr>
<tr><td>ubite jaja, para wodna</td><td>fizyczny</td><td>biszkopt, parzone, francuskie</td></tr></table></div>
<p>Ciasto drożdżowe można prowadzić metodą <b>dwufazową</b> (najpierw rozczyn, potem ciasto) lub <b>jednofazową</b> (wszystkie składniki od razu, z drożdżami suchymi).</p>
<p>Proszek do pieczenia przesiewa się razem z mąką.</p>
<div class="tip">Kruche ciasto twarde i łamliwe po upieczeniu oznacza zbyt długie wyrabianie w cieple. To typowy błąd z pytań egzaminacyjnych.</div>` },
        { tytul: "Biszkopt, ciasto parzone i francuskie", tresc: `<h4>Biszkopt</h4>
<ul>
<li>składniki: jaja, cukier, mąka (część mąki można zastąpić skrobią ziemniaczaną), bez tłuszczu;</li>
<li>białka ubija się na sztywno z cukrem, dodaje żółtka, a mąkę <b>delikatnie miesza</b> łyżką lub szpatułką, aby nie stracić powietrza;</li>
<li>forma wyłożona papierem tylko na dnie, boki niesmarowane (ciasto się „wspina”);</li>
<li>pieczenie ok. 170-180°C, nie otwierać piekarnika w pierwszych 15-20 min, bo opada;</li>
<li>biszkopt studzi się, czasem odwrócony do góry dnem, kroi się po ostygnięciu.</li>
</ul>
<h4>Ciasto parzone (ptysie, eklery)</h4>
<ol>
<li>zagotować wodę (lub mleko) z tłuszczem i solą;</li>
<li>wsypać mąkę na raz i <b>zaparzyć</b>, mieszając, aż ciasto odejdzie od garnka;</li>
<li>ostudzić do ciepłej temperatury, wbijać jaja <b>pojedynczo</b>, miksując do gładkiej, lśniącej masy;</li>
<li>pieczenie w ok. 200-220°C, potem ok. 180°C do wysuszenia; nie otwierać piekarnika, bo ptysie opadną.</li>
</ol>
<p>Spulchnia je <b>para wodna</b>, dlatego wnętrze jest puste.</p>
<h4>Ciasto francuskie</h4>
<ul>
<li>ciasto podstawowe (mąka, woda, odrobina tłuszczu, sól) i tłuszcz (masło lub margaryna do ciasta francuskiego);</li>
<li>wielokrotne <b>składanie i wałkowanie</b> (tzw. tury) z chłodzeniem między nimi, daje setki warstw;</li>
<li>pieczenie w wysokiej temperaturze ok. 220-230°C, para wodna rozdziela warstwy;</li>
<li>wycina się ostrym nożem lub wykrawaczem, aby nie zlepić brzegów.</li>
</ul>
<h4>Ciasto półfrancuskie</h4>
<p>Szybsza wersja: tłuszcz siekany z mąką, z dodatkiem śmietany lub drożdży, mniej warstw.</p>
<p>Wyrób gotowy ocenia się organoleptycznie: biszkopt równomiernie wyrośnięty, o drobnych porach, sprężysty; ptysie lekkie, chrupiące, puste w środku; ciasto francuskie listkujące, równomiernie zrumienione.</p>
<div class="tip">Ptysie i biszkopt opadają po otwarciu piekarnika na początku pieczenia. Odpowiedź „otwarto piekarnik za wcześnie” jest częstym wyjaśnieniem błędu.</div>` },
        { tytul: "Desery i kremy", tresc: `<h4>Desery z żelatyną</h4>
<ul>
<li>żelatynę namacza się w zimnej wodzie, a rozpuszcza w ciepłym (nie wrzącym) płynie; gotowanie osłabia żelowanie;</li>
<li>ok. 20-30 g żelatyny na 1 l płynu do galaretki, więcej do deserów, które się wykłada z formy;</li>
<li>świeży <b>ananas</b>, <b>kiwi</b>, papaja zawierają enzymy rozkładające białko żelatyny. Owoce te stosuje się z puszki lub po zblanszowaniu, albo używa się agaru.</li>
</ul>
<h4>Kremy i sosy deserowe</h4>
<div class="tw"><table><tr><th>Krem</th><th>Skład i technika</th></tr>
<tr><td>sos angielski (crème anglaise)</td><td>mleko, żółtka, cukier, wanilia, podgrzewane do ok. 82-85°C, bez gotowania, do „różyczki” na łyżce</td></tr>
<tr><td>krem budyniowy (patissière)</td><td>mleko, żółtka, cukier, skrobia; zagotowany</td></tr>
<tr><td>bita śmietana</td><td>śmietanka 30-36%, schłodzona, ubijana z cukrem pudrem</td></tr>
<tr><td>mus</td><td>baza owocowa lub czekoladowa, ubita śmietana lub piana z białek, żelatyna</td></tr>
<tr><td>beza (meringue)</td><td>białka ubite z cukrem (ok. 2:1 cukru do białek wagowo), suszenie w ok. 100-120°C</td></tr></table></div>
<h4>Desery mrożone</h4>
<p><b>Lody</b> śmietankowe (baza mleczna), <b>sorbet</b> (sok, purée owocowe, syrop, bez tłuszczu mlecznego), <b>parfait</b> (mrożony krem na żółtkach i śmietanie). Lody nadtopione nie mogą być ponownie zamrożone.</p>
<h4>Desery na ciepło</h4>
<p>Naleśniki, racuchy, pierogi z owocami, szarlotka na ciepło z lodami, suflet (piana z białek, podawany natychmiast, bo opada), crème brûlée (karmelizacja cukru palnikiem).</p>
<h4>Ubijanie białek</h4>
<p>Białka bez śladu żółtka, w czystym, odtłuszczonym naczyniu. Szczypta soli lub kilka kropli soku z cytryny stabilizuje pianę, a cukier dodaje się stopniowo, gdy piana już się tworzy.</p>
<div class="tip">Galaretka ze świeżym ananasem nie stężeje. To pytanie pojawia się regularnie, a odpowiedź to enzym bromelaina.</div>` }
      ],
      pytania: [
        Q("Proporcja mąki, tłuszczu i cukru w cieście kruchym wynosi", "3 : 2 : 1", "1 : 1 : 1", "2 : 3 : 1", "4 : 1 : 2", "Ciasto zagniata się szybko, na zimno."),
        Q("Rozczyn drożdżowy przygotowuje się z mlekiem o temperaturze ok.", "30-35°C", "70-80°C", "5-10°C", "100°C", "Drożdże giną powyżej ok. 50-60°C."),
        Q("Ciasto parzone jest spulchniane", "parą wodną", "drożdżami", "proszkiem do pieczenia", "amoniakiem", "Dlatego ptysie są puste w środku."),
        Q("Wielokrotne wałkowanie i składanie ciasta z tłuszczem jest charakterystyczne dla ciasta", "francuskiego", "biszkoptowego", "drożdżowego", "piernikowego", "Powstaje wiele cienkich warstw."),
        Q("Soda oczyszczona jako spulchniacz wymaga obecności", "składnika kwaśnego, np. miodu lub kefiru", "dużej ilości tłuszczu", "drożdży", "skrobi ziemniaczanej", "Reaguje z kwasem, wydzielając CO₂."),
        Q("Galaretka z dodatkiem świeżego ananasa nie stężeje, ponieważ ananas zawiera", "enzym rozkładający białko żelatyny", "dużo skrobi", "dużo tłuszczu", "konserwanty", "Enzymem tym jest bromelaina."),
        Q("Sos angielski (crème anglaise) podgrzewa się do ok.", "82-85°C, bez gotowania", "100°C, gotując 5 min", "50°C", "120°C", "Zagotowany sos się zważy."),
        Q("Deser mrożony z soku owocowego i syropu, bez tłuszczu mlecznego, to", "sorbet", "parfait", "lody śmietankowe", "mus czekoladowy", "Parfait zawiera żółtka i śmietankę.")
      ]
    },
    {
      id: "kalkulacja-zywienie", tytul: "Receptury, kalkulacje i żywienie", opis: "Przeliczysz recepturę, policzysz koszt i cenę porcji oraz ułożysz jadłospis zgodny z zasadami żywienia.",
      lekcje: [
        { tytul: "Receptura i przeliczanie porcji", tresc: `<h4>Elementy karty technologicznej</h4>
<ul><li>nazwa potrawy, liczba porcji, masa porcji;</li><li>surowce z ilościami (brutto lub netto);</li><li>opis wykonania, czas, temperatury;</li><li>sposób wydawania, naczynia, temperatura podania;</li><li>alergeny.</li></ul>
<h4>Przeliczanie receptury</h4>
<pre>współczynnik = nowa liczba porcji ÷ liczba porcji w recepturze
ilość surowca = ilość w recepturze × współczynnik

przykład: receptura na 10 porcji, potrzeba 35 porcji
współczynnik = 3,5
mąka 0,8 kg × 3,5 = 2,8 kg; mleko 1,2 l × 3,5 = 4,2 l</pre>
<p>Gdy receptura podaje masę na porcję: zapotrzebowanie = norma × liczba porcji. Np. 150 g mięsa × 40 porcji = 6 kg.</p>
<h4>Ubytki podczas obróbki cieplnej</h4>
<div class="tw"><table><tr><th>Produkt</th><th>Ubytek masy</th></tr>
<tr><td>mięso gotowane</td><td>ok. 35-40%</td></tr>
<tr><td>mięso pieczone, duszone</td><td>ok. 30-40%</td></tr>
<tr><td>kotlety smażone</td><td>ok. 20-30%</td></tr>
<tr><td>ryby smażone</td><td>ok. 15-20%</td></tr></table></div>
<pre>potrzeba 20 porcji pieczeni po 100 g po upieczeniu, ubytek 35%
mięso surowe = 2 kg ÷ 0,65 ≈ 3,08 kg</pre>
<h4>Wydajność</h4>
<p>Kasze i ryż zwiększają masę ok. 2,5-3 razy, makaron ok. 2-2,5 raza. Np. 100 g suchego ryżu daje ok. 250-300 g ugotowanego.</p>
<p>Przy przeliczaniu przypraw (sól, pieprz, ostre przyprawy) zwiększa się je ostrożniej niż wynika ze współczynnika i koryguje smak na końcu.</p>
<p>Masę porcji gotowej sprawdza się, ważąc kilka porcji przed wydaniem. Zbyt duże porcje podnoszą koszt, a zbyt małe są przyczyną reklamacji gości.</p>
<div class="tip">W zadaniu praktycznym zawsze sprawdź, czy receptura podaje masę brutto, czy netto, i czy masa porcji dotyczy produktu surowego, czy gotowego.</div>` },
        { tytul: "Koszt i cena potrawy", tresc: `<h4>Kalkulacja kosztu</h4>
<pre>koszt surowca = ilość × cena jednostkowa
koszt porcji = suma kosztów surowców ÷ liczba porcji

przykład (10 porcji):
filet z kurczaka 1,5 kg × 24 zł = 36,00 zł
ryż 0,6 kg × 8 zł = 4,80 zł
warzywa 1,0 kg × 9 zł = 9,00 zł
przyprawy, olej = 3,20 zł
razem 53,00 zł → koszt porcji 5,30 zł</pre>
<h4>Cena gastronomiczna</h4>
<pre>cena netto = koszt porcji × (1 + marża)
cena brutto = cena netto × (1 + VAT)
marża 200%: 5,30 × 3 = 15,90 zł netto
VAT 8% (usługa gastronomiczna): 15,90 × 1,08 ≈ 17,17 zł
w karcie zwykle zaokrąglenie: 17,50 zł lub 18,00 zł</pre>
<h4>Food cost</h4>
<pre>food cost % = koszt surowców ÷ cena netto × 100%
5,30 ÷ 15,90 × 100% ≈ 33,3%</pre>
<p>W restauracjach food cost wynosi zwykle ok. <b>25-35%</b>. Wyższy oznacza niski zysk lub straty (marnowanie, kradzieże, zbyt duże porcje).</p>
<h4>Zarządzanie zapasem w kuchni</h4>
<ul>
<li><b>raport rozchodu surowców</b> porównuje zużycie z normami receptur;</li>
<li>zasada <b>FIFO/FEFO</b> w magazynie i chłodniach, opisywanie pojemników (nazwa, data przygotowania, data zużycia);</li>
<li>wykorzystanie odpadów kulinarnych (kości na wywar, obierki na bulion warzywny), aby obniżyć koszt.</li>
</ul>
<p>Cenę surowców przyjmuje się według ostatnich faktur lub cennika magazynu. Przy zmianie cen dostawców karty kalkulacyjne aktualizuje się, aby marża nie spadła niezauważenie.</p>
<div class="tip">Food cost liczymy od ceny netto, nie brutto. Liczenie od brutto zaniża wskaźnik.</div>` },
        { tytul: "Zasady żywienia i planowanie jadłospisu", tresc: `<h4>Składniki odżywcze</h4>
<div class="tw"><table><tr><th>Składnik</th><th>Energia</th><th>Źródła</th></tr>
<tr><td>białko</td><td>4 kcal/g</td><td>mięso, ryby, jaja, nabiał, strączki</td></tr>
<tr><td>węglowodany</td><td>4 kcal/g</td><td>zboża, ziemniaki, owoce</td></tr>
<tr><td>tłuszcze</td><td>9 kcal/g</td><td>oleje, masło, orzechy</td></tr>
<tr><td>błonnik</td><td>ok. 2 kcal/g</td><td>pełne ziarna, warzywa</td></tr></table></div>
<pre>wartość energetyczna potrawy:
białko 25 g × 4 + węglowodany 60 g × 4 + tłuszcz 20 g × 9
= 100 + 240 + 180 = 520 kcal</pre>
<h4>Zalecenia</h4>
<p>Według norm żywienia (Narodowy Instytut Zdrowia Publicznego PZH-PIB): energia z białka ok. 10-20%, z tłuszczów ok. 20-35%, z węglowodanów ok. 45-65%; sól do 5 g dziennie; 4-5 posiłków dziennie; warzywa i owoce w każdym posiłku, z przewagą warzyw.</p>
<h4>Zasady układania jadłospisu</h4>
<ul>
<li><b>urozmaicenie</b>: nie powtarzać tego samego surowca ani techniki w jednym zestawie (np. zupa ziemniaczana i ziemniaki do dania);</li>
<li><b>kontrast</b> barw, smaków i konsystencji (danie kremowe i chrupiący dodatek);</li>
<li><b>sezonowość</b> surowców, ich dostępność i koszt;</li>
<li>dostosowanie do grupy (dzieci, seniorzy, osoby aktywne fizycznie, diety).</li>
</ul>
<h4>Diety lecznicze</h4>
<div class="tw"><table><tr><th>Dieta</th><th>Wyklucza</th><th>Zalecane techniki</th></tr>
<tr><td>łatwo strawna</td><td>smażenie, ostre przyprawy, wzdymające warzywa</td><td>gotowanie, na parze, pieczenie w folii</td></tr>
<tr><td>z ograniczeniem tłuszczu</td><td>tłuste mięsa, śmietanę, zasmażki</td><td>gotowanie, duszenie bez obsmażania</td></tr>
<tr><td>bezglutenowa</td><td>pszenica, żyto, jęczmień, orkisz</td><td>dowolne, bez kontaktu krzyżowego z mąką</td></tr>
<tr><td>niskosodowa</td><td>sól, wędliny, sery żółte, konserwy</td><td>przyprawianie ziołami</td></tr></table></div>
<p>Jadłospis dekadowy (na 10 dni) stosuje się w żywieniu zbiorowym (stołówki, szpitale, internaty).</p>
<div class="tip">Kasza manna to produkt pszenny, więc nie nadaje się do diety bezglutenowej. Kasza gryczana i jaglana są bezglutenowe.</div>` }
      ],
      pytania: [
        Q("Receptura jest na 8 porcji, a potrzeba 20 porcji. Współczynnik przeliczeniowy wynosi", "2,5", "1,6", "12", "0,4", "20 ÷ 8 = 2,5."),
        Q("Norma mięsa 120 g na porcję. Na 50 porcji potrzeba", "6 kg", "600 g", "60 kg", "1,2 kg", "120 g × 50 = 6000 g."),
        Q("Koszt surowców na 10 porcji wynosi 62 zł. Koszt jednej porcji to", "6,20 zł", "62 zł", "0,62 zł", "16,20 zł", "62 ÷ 10 = 6,20 zł."),
        Q("Koszt porcji 6 zł, cena netto 20 zł. Food cost wynosi", "30%", "70%", "333%", "14%", "6 ÷ 20 × 100% = 30%."),
        Q("Wartość energetyczna 10 g tłuszczu wynosi", "90 kcal", "40 kcal", "70 kcal", "10 kcal", "Tłuszcz dostarcza 9 kcal/g."),
        Q("Potrawa zawiera 20 g białka, 50 g węglowodanów i 10 g tłuszczu. Jej wartość energetyczna to", "370 kcal", "320 kcal", "800 kcal", "280 kcal", "80 + 200 + 90 = 370 kcal."),
        Q("Do diety bezglutenowej nie nadaje się", "kasza manna", "kasza gryczana", "ryż", "kasza jaglana", "Kasza manna jest produktem z pszenicy."),
        Q("W diecie łatwo strawnej zalecaną techniką jest", "gotowanie na parze", "smażenie w głębokim tłuszczu", "grillowanie na rumiano", "obsmażanie na zasmażce", "Unika się smażenia i tłustych dodatków.")
      ]
    }
  ]);

  pod("HGT.03", [
    {
      id: "obiekty", tytul: "Obiekty i jednostki mieszkalne", opis: "Rozpoznasz rodzaje obiektów hotelarskich, ich kategorie i typy pokoi oraz ich wyposażenie.",
      lekcje: [
        { tytul: "Rodzaje i kategoryzacja obiektów", tresc: `<h4>Podstawa prawna</h4>
<p>Ustawa o usługach hotelarskich (oraz usługach pilotów wycieczek i przewodników turystycznych) i rozporządzenie w sprawie obiektów hotelarskich i innych obiektów, w których są świadczone usługi hotelarskie. Kategorię obiektu nadaje <b>marszałek województwa</b>, który prowadzi też ich ewidencję. Inne obiekty (np. kwatery prywatne) ewidencjonuje wójt, burmistrz lub prezydent miasta.</p>
<h4>Rodzaje obiektów hotelarskich i kategorie</h4>
<div class="tw"><table><tr><th>Rodzaj</th><th>Cechy</th><th>Kategorie</th></tr>
<tr><td>hotel</td><td>co najmniej <b>10 pokoi</b>, większość jedno- i dwuosobowych, szeroki zakres usług</td><td>1-5 gwiazdek</td></tr>
<tr><td>motel</td><td>przy drodze, parking, usługi dla zmotoryzowanych</td><td>1-5 gwiazdek</td></tr>
<tr><td>pensjonat</td><td>co najmniej <b>7 pokoi</b>, całodzienne wyżywienie</td><td>1-5 gwiazdek</td></tr>
<tr><td>kemping</td><td>teren strzeżony, namioty, przyczepy, domki</td><td>1-4 gwiazdki</td></tr>
<tr><td>dom wycieczkowy</td><td>co najmniej 30 miejsc, dla turystyki zorganizowanej</td><td>I-III</td></tr>
<tr><td>schronisko młodzieżowe</td><td>dla młodzieży, często wspólne sale</td><td>I-III</td></tr>
<tr><td>schronisko</td><td>w górach, na szlakach, warunki turystyczne</td><td>bez kategorii</td></tr>
<tr><td>pole biwakowe</td><td>teren do biwakowania, ogólnodostępne sanitariaty</td><td>bez kategorii</td></tr></table></div>
<h4>Inne pojęcia</h4>
<ul>
<li><b>usługi hotelarskie</b>: krótkotrwałe udostępnianie domów, mieszkań, pokoi i miejsc noclegowych wraz ze świadczeniem usług z tym związanych;</li>
<li>obiekt musi spełniać wymagania budowlane, przeciwpożarowe i sanitarne;</li>
<li>nazwy „hotel”, „motel”, „pensjonat” wolno używać tylko obiektom, którym nadano kategorię.</li>
</ul>
<h4>Podział hoteli według funkcji</h4>
<p>miejskie, biznesowe (konferencyjne), wypoczynkowe (resort), uzdrowiskowe i SPA, butikowe, apartamentowe, tranzytowe (przy lotniskach).</p>
<p>Obiekt nieskategoryzowany nie może posługiwać się gwiazdkami.</p>
<p>Kontrolę spełniania wymagań kategorii przeprowadza marszałek, a w razie niespełniania wymagań może zmienić lub cofnąć kategorię.</p>
<div class="tip">Kategoryzację nadaje marszałek województwa, a nie wojewoda ani gmina. Hotel potrzebuje co najmniej 10 pokoi, pensjonat co najmniej 7.</div>` },
        { tytul: "Typy jednostek mieszkalnych", tresc: `<h4>Rodzaje pokoi</h4>
<div class="tw"><table><tr><th>Oznaczenie</th><th>Opis</th></tr>
<tr><td>SGL (single)</td><td>pokój jednoosobowy</td></tr>
<tr><td>DBL (double)</td><td>pokój dwuosobowy z łóżkiem małżeńskim</td></tr>
<tr><td>TWN (twin)</td><td>pokój dwuosobowy z dwoma pojedynczymi łóżkami</td></tr>
<tr><td>DSU (double for single use)</td><td>pokój dwuosobowy dla jednej osoby</td></tr>
<tr><td>TRPL (triple)</td><td>pokój trzyosobowy</td></tr>
<tr><td>studio</td><td>pokój z kanapą rozkładaną zamiast łóżka, część dzienna</td></tr>
<tr><td>apartament (suite)</td><td>co najmniej 2 pokoje (sypialnia i salon) z łazienką</td></tr>
<tr><td>connecting rooms</td><td>pokoje połączone drzwiami wewnętrznymi (rodziny)</td></tr>
<tr><td>adjoining rooms</td><td>pokoje sąsiadujące bez drzwi wewnętrznych</td></tr></table></div>
<h4>Łóżka</h4>
<ul>
<li>pojedyncze: ok. 90 × 200 cm;</li>
<li>podwójne (double): ok. 140-160 × 200 cm;</li>
<li>queen: ok. 160 × 200 cm, king: ok. 180-200 × 200 cm;</li>
<li><b>dostawka</b>: dodatkowe łóżko (rozkładane), łóżeczko dziecięce na życzenie.</li>
</ul>
<h4>Wyposażenie pokoju</h4>
<p>Wymagania minimalne zależą od kategorii, np. łóżka, szafa, stolik, krzesła, oświetlenie nocne, zasłony zaciemniające, telefon lub inny sposób łączności z recepcją, telewizor, dostęp do internetu, sejf (wyższe kategorie). Łazienka: wanna lub prysznic, umywalka, WC, lustro, ręczniki (dla każdego gościa), mydło, kosmetyki.</p>
<h4>Amenities (artykuły gościnne)</h4>
<ul><li>podstawowe: mydło, żel, szampon, kubki, papier toaletowy;</li><li>dodatkowe (wyższe kategorie): szlafrok, kapcie, zestaw do szycia, do pielęgnacji obuwia, czajnik z kawą i herbatą, woda butelkowana.</li></ul>
<h4>Pokoje szczególne</h4>
<p>Pokój dla osoby z niepełnosprawnością (szersze drzwi, brak progów, uchwyty, prysznic bez brodzika, niżej zawieszone wyposażenie), pokój dla alergików (bez dywanów, pościel antyalergiczna), pokoje dla palących (coraz rzadziej, z oznakowaniem).</p>
<div class="tip">Twin to dwa osobne łóżka, double to jedno łóżko małżeńskie. To najczęściej mylone oznaczenie w testach.</div>` },
        { tytul: "Statusy pokoi i współpraca działów", tresc: `<h4>Statusy pokoi</h4>
<div class="tw"><table><tr><th>Skrót</th><th>Znaczenie</th></tr>
<tr><td>VC (vacant clean)</td><td>wolny, czysty, gotowy do sprzedaży (po kontroli: vacant ready)</td></tr>
<tr><td>VD (vacant dirty)</td><td>wolny, brudny, do sprzątania</td></tr>
<tr><td>OC (occupied clean)</td><td>zajęty, posprzątany</td></tr>
<tr><td>OD (occupied dirty)</td><td>zajęty, do sprzątania</td></tr>
<tr><td>OOO (out of order)</td><td>wyłączony ze sprzedaży: awaria, remont</td></tr>
<tr><td>DND (do not disturb)</td><td>gość prosi, aby nie przeszkadzać</td></tr>
<tr><td>C/O (check-out, departure)</td><td>gość wymeldowuje się dziś</td></tr>
<tr><td>sleep out</td><td>pokój opłacony, ale gość nie nocował</td></tr>
<tr><td>skipper</td><td>gość wyjechał bez uregulowania rachunku</td></tr></table></div>
<h4>Raport pokojowej i rozbieżności</h4>
<p>Pokojowa sprawdza stan pokoi i sporządza raport (housekeeping report), który porównuje się z danymi recepcji. Rozbieżność, np. recepcja: pokój zajęty, służba pięter: brak bagażu i niespane łóżko, wyjaśnia się natychmiast (może to być sleep out lub skipper).</p>
<h4>Współpraca działów</h4>
<ul>
<li><b>recepcja</b>: przekazuje listę przyjazdów i wyjazdów, życzenia gości (łóżeczko, poduszki), informację o VIP;</li>
<li><b>służba pięter</b> (housekeeping): sprzątanie, bielizna, minibar, rzeczy znalezione, zgłaszanie usterek;</li>
<li><b>dział techniczny</b>: naprawy, zgłoszenia przez zeszyt usterek lub system;</li>
<li><b>gastronomia</b>: śniadania, room service, bankiety.</li>
</ul>
<h4>Struktura służby pięter</h4>
<p>kierownik służby pięter (executive housekeeper), zastępca, inspektor (supervisor, kontroluje pokoje), pokojowe (room attendant), porządkowi części ogólnodostępnych (public area), pracownicy pralni i magazynu bielizny.</p>
<p>Status pokoju aktualizuje się w systemie hotelowym (PMS) natychmiast po sprzątaniu i kontroli, aby recepcja mogła sprzedać pokój.</p>
<p>Lista przyjazdów pozwala służbie pięter ustalić, które pokoje muszą być gotowe najwcześniej.</p>
<div class="tip">Pokój OOO nie jest sprzedawany i nie wlicza się do liczby pokoi dostępnych przy obliczaniu frekwencji.</div>` }
      ],
      pytania: [
        Q("Kategorię obiektowi hotelarskiemu nadaje", "marszałek województwa", "wójt gminy", "wojewoda", "minister finansów", "Marszałek prowadzi też ewidencję obiektów skategoryzowanych."),
        Q("Pensjonat musi mieć co najmniej", "7 pokoi i zapewniać całodzienne wyżywienie", "10 pokoi", "50 pokoi", "1 pokój", "Hotel potrzebuje co najmniej 10 pokoi."),
        Q("Kempingi są kategoryzowane w skali", "1-4 gwiazdek", "1-5 gwiazdek", "I-III", "nie mają kategorii", "Hotele, motele i pensjonaty mają 1-5 gwiazdek."),
        Q("Pokój dwuosobowy z dwoma oddzielnymi łóżkami oznacza się skrótem", "TWN", "DBL", "SGL", "DSU", "DBL ma jedno łóżko małżeńskie."),
        Q("Pokoje połączone drzwiami wewnętrznymi, przydatne dla rodzin, to", "connecting rooms", "adjoining rooms", "studio", "suite", "Adjoining to pokoje sąsiednie bez drzwi wewnętrznych."),
        Q("Status VD oznacza pokój", "wolny, brudny", "wolny, czysty", "zajęty, brudny", "wyłączony z eksploatacji", "Vacant dirty."),
        Q("Gość, który wyjechał bez uregulowania rachunku, w żargonie hotelowym to", "skipper", "sleep out", "walk-in", "no show", "Sleep out to gość, który opłacił pokój, ale nie nocował."),
        Q("Pokój wyłączony ze sprzedaży z powodu remontu ma status", "OOO", "OC", "VC", "DND", "Out of order.")
      ]
    },
    {
      id: "sprzatanie", tytul: "Sprzątanie jednostek mieszkalnych", opis: "Przygotujesz pokój dla gościa w prawidłowej kolejności, z właściwymi środkami i w normie czasu.",
      lekcje: [
        { tytul: "Kolejność sprzątania pokoi i czynności", tresc: `<h4>Kolejność pokoi</h4>
<ol>
<li>pokoje z prośbą o sprzątanie (zawieszka „Proszę posprzątać”);</li>
<li>pokoje <b>VIP</b> i pokoje na szybki przyjazd (early check-in);</li>
<li>pokoje po wyjeździe gości (check-out), potrzebne dla przyjeżdżających;</li>
<li>pokoje zajęte (pobytowe);</li>
<li>pokoje wolne (odświeżenie, kontrola).</li>
</ol>
<p>Pokoje z zawieszką <b>DND</b> pomija się. Jeśli zawieszka wisi długo (np. po godz. 14), informuje się przełożoną lub recepcję, która kontaktuje się z gościem.</p>
<h4>Wejście do pokoju</h4>
<p>Zapukać, powiedzieć „Housekeeping” lub „Służba pięter”, odczekać, powtórzyć. Wózek ustawia się przy drzwiach, blokując wejście, drzwi zostają otwarte. Jeśli gość jest w pokoju, pyta się, kiedy można posprzątać.</p>
<h4>Kolejność czynności w pokoju</h4>
<ol>
<li>przewietrzenie, odsłonięcie zasłon, włączenie światła (kontrola żarówek);</li>
<li>usunięcie śmieci, naczyń, zebranie brudnej bielizny;</li>
<li><b>ścielenie łóżek</b> (po wyjeździe: pełna zmiana pościeli);</li>
<li>wycieranie kurzu <b>od góry do dołu</b>, w jednym kierunku wokół pokoju (zgodnie z ruchem wskazówek zegara), wilgotną ściereczką;</li>
<li>sprzątanie <b>łazienki</b>;</li>
<li>uzupełnienie amenities, materiałów informacyjnych, kontrola minibaru;</li>
<li><b>odkurzanie</b> od najdalszego miejsca (okna) w stronę drzwi;</li>
<li>kontrola końcowa: zapach, światła, klimatyzacja, zamknięcie okien, zgłoszenie usterek.</li>
</ol>
<h4>Pokój zajęty a po wyjeździe</h4>
<p>W pokoju zajętym nie przestawia się rzeczy gościa, nie otwiera bagażu ani szuflad, nie wyrzuca niczego, co nie leży w koszu. Gazety, notatki zostawia się. Ubrania można złożyć lub powiesić.</p>
<p>Po zakończeniu pracy pokojowa uzupełnia wózek, oddaje klucze i raport, zgłasza usterki.</p>
<div class="tip">Odkurzanie zawsze na końcu, od okna do drzwi. Wycieranie kurzu zawsze od góry do dołu. To dwie zasady, które wracają w każdym teście.</div>` },
        { tytul: "Łazienka i środki czyszczące", tresc: `<h4>Kolejność sprzątania łazienki</h4>
<ol>
<li>usunięcie zużytych ręczników, śmieci, zużytych kosmetyków;</li>
<li>naniesienie środka na WC (czas działania);</li>
<li>czyszczenie od miejsc najczystszych do najbrudniejszych: lustro, półki, umywalka, wanna lub kabina, armatura;</li>
<li><b>WC na końcu</b>, osobną ściereczką i szczotką (deska z obu stron, kołnierz, zewnętrzna część);</li>
<li>polerowanie armatury na sucho, uzupełnienie ręczników i kosmetyków;</li>
<li>mycie podłogi od najdalszego kąta do drzwi.</li>
</ol>
<h4>Kolory ściereczek</h4>
<div class="tw"><table><tr><th>Kolor</th><th>Zastosowanie</th></tr>
<tr><td>czerwony</td><td>WC, pisuary, bidety (najwyższe ryzyko)</td></tr>
<tr><td>żółty</td><td>umywalki, glazura, wanna, kabina</td></tr>
<tr><td>niebieski</td><td>meble, drzwi, lustra i powierzchnie w pokoju</td></tr>
<tr><td>zielony</td><td>strefy żywności (aneks kuchenny, bar)</td></tr></table></div>
<h4>Środki chemiczne według pH</h4>
<div class="tw"><table><tr><th>Odczyn</th><th>Zastosowanie</th><th>Przykład</th></tr>
<tr><td>kwaśny (pH poniżej 7)</td><td>kamień, osady wapienne, rdza</td><td>środki do WC, odkamieniacze</td></tr>
<tr><td>obojętny (pH ok. 7)</td><td>codzienne mycie powierzchni, drewna, podłóg</td><td>płyny uniwersalne</td></tr>
<tr><td>zasadowy (pH powyżej 7)</td><td>tłuszcz, zabrudzenia organiczne</td><td>odtłuszczacze, środki do piekarników</td></tr></table></div>
<h4>Bezpieczeństwo pracy</h4>
<ul>
<li><b>nie mieszać</b> środków chlorowych z kwaśnymi (wydziela się trujący chlor);</li>
<li>stosować rękawice, przy rozpylaniu ewentualnie okulary; środki w oryginalnych, opisanych opakowaniach;</li>
<li>dozowanie zgodne z etykietą, karta charakterystyki dostępna dla pracownika;</li>
<li>marmuru i kamienia naturalnego nie myje się środkami kwaśnymi (matowieją).</li>
</ul>
<p>Ściereczki z mikrofibry piorą się w temperaturze ok. 60°C, bez płynu zmiękczającego, który zatyka włókna.</p>
<p>Kubki i szklanki w łazience wymienia się na czyste i zabezpieczone (folią lub kapturkiem).</p>
<div class="tip">Ściereczka do WC nigdy nie dotyka umywalki ani szklanek. Szklanki w pokoju wymienia się na czyste z pralni lub zmywalni, a nie myje w umywalce.</div>` },
        { tytul: "Normy czasu i planowanie pracy", tresc: `<h4>Normy czasu</h4>
<p>Orientacyjnie: pokój po wyjeździe ok. 25-35 min, pokój pobytowy ok. 15-20 min. Normy ustala hotel w zależności od kategorii i wielkości pokoi.</p>
<pre>czas pracy potrzebny = liczba pokoi × norma
liczba pokojowych = czas potrzebny ÷ czas pracy jednej osoby

przykład: 30 pokoi po wyjeździe × 30 min = 900 min
40 pokoi pobytowych × 18 min = 720 min
razem 1620 min = 27 h
zmiana 8 h (480 min), ale ok. 420 min efektywnej pracy:
1620 ÷ 420 ≈ 3,86 → potrzeba 4 pokojowych</pre>
<p>Wynik zawsze <b>zaokrągla się w górę</b>.</p>
<h4>Wózek pokojowej</h4>
<p>Zawiera czystą bieliznę, worki na brudną bieliznę i śmieci, amenities, środki czystości, ściereczki w kolorach, rękawice, odkurzacz obok. Kompletuje się go przed rozpoczęciem pracy, aby nie wracać do magazynu.</p>
<h4>Sprzątanie gruntowne (generalne)</h4>
<p>Według harmonogramu, np. co kilka miesięcy lub przy niskim obłożeniu: mycie okien, pranie zasłon i wykładzin, odsuwanie mebli, czyszczenie kratek wentylacyjnych, obracanie materaców. Pokój zostaje na ten czas wyłączony ze sprzedaży.</p>
<h4>Części ogólnodostępne</h4>
<p>Hol, korytarze, windy, toalety ogólne sprząta się w godzinach małego ruchu (noc, wczesny ranek). Mokrą podłogę oznacza się tabliczką ostrzegawczą.</p>
<h4>Ergonomia</h4>
<ul><li>ścielenie łóżek z przysiadu lub klęku, a nie ze skłonu;</li><li>odkurzacz i wózek pcha się przed sobą;</li><li>materace obraca się we dwie osoby.</li></ul>
<div class="tip">W zadaniach o liczbie pokojowych zwróć uwagę, czy zadanie podaje czas efektywny pracy, czy pełną zmianę. Licz według danych z zadania.</div>` }
      ],
      pytania: [
        Q("W pierwszej kolejności pokojowa sprząta pokoje", "z zawieszką z prośbą o sprzątanie", "wolne, czyste", "z zawieszką DND", "w których nikt nie mieszka od tygodnia", "Następnie VIP i pokoje po wyjeździe."),
        Q("Kurz w pokoju wyciera się", "od góry do dołu", "od dołu do góry", "dowolnie", "tylko na podłodze", "Kurz opada, więc zaczyna się od góry."),
        Q("Odkurzanie pokoju wykonuje się", "na końcu, od okna w stronę drzwi", "na początku, od drzwi do okna", "przed ścieleniem łóżek", "tylko po wyjeździe gościa", "Dzięki temu nie depcze się odkurzonej powierzchni."),
        Q("Ściereczkę koloru czerwonego stosuje się do", "WC i pisuarów", "luster", "mebli w pokoju", "aneksu kuchennego", "Najwyższe ryzyko zakażenia."),
        Q("Do usuwania osadów wapiennych w łazience stosuje się środki", "kwaśne", "zasadowe", "obojętne", "chlorowe zmieszane z octem", "Kamień rozpuszcza się w kwasach."),
        Q("Nie wolno mieszać środków chlorowych ze środkami kwaśnymi, ponieważ", "wydziela się trujący chlor", "tracą zapach", "zmieniają kolor", "powstaje piana", "To poważne zagrożenie dla zdrowia."),
        Q("40 pokoi do sprzątania, norma 30 minut, czas efektywny pracy 400 minut. Potrzeba co najmniej", "3 pokojowych", "2 pokojowych", "4 pokojowych", "1 pokojowej", "40 × 30 = 1200 min, 1200 ÷ 400 = 3."),
        Q("W pokoju zajętym pokojowa", "nie przestawia rzeczy gościa i nie otwiera bagażu", "wyrzuca gazety i notatki gościa", "chowa rzeczy gościa do szafy zamkniętej na klucz", "otwiera szuflady, aby wytrzeć kurz", "Szanuje prywatność gościa.")
      ]
    },
    {
      id: "bielizna", tytul: "Bielizna i pralnia hotelowa", opis: "Pościelesz łóżko, zorganizujesz obieg bielizny i dobierzesz sposób konserwacji tekstyliów.",
      lekcje: [
        { tytul: "Ścielenie łóżek", tresc: `<h4>Elementy łóżka</h4>
<ul>
<li>materac z <b>podkładem ochronnym</b> (ochraniacz, często wodoodporny);</li>
<li>prześcieradło (płaskie lub z gumką);</li>
<li>kołdra w poszwie lub koc z dwoma prześcieradłami (system tradycyjny, „kopertowy”);</li>
<li>poduszki w poszewkach (zwykle 2 na osobę w wyższych kategoriach);</li>
<li>narzuta dekoracyjna lub pasek dekoracyjny (bed runner).</li>
</ul>
<h4>Narożnik kopertowy</h4>
<p>Prześcieradło płaskie zakłada się pod materac w nogach łóżka, a następnie boczny nadmiar unosi się pod kątem 45°, wsuwa dolną część pod materac i opuszcza górną, tworząc ukośne, gładkie zagięcie. Prześcieradło musi być napięte, bez fałd.</p>
<h4>Kolejność</h4>
<ol>
<li>zdjęcie zużytej bielizny (sprawdzając, czy nie ma w niej rzeczy gościa), od razu do worka, nie na podłogę;</li>
<li>kontrola materaca i ochraniacza;</li>
<li>założenie prześcieradła, kołdry w poszwie, poduszek;</li>
<li>wygładzenie, narzuta, dekoracja.</li>
</ol>
<h4>Wieczorne przygotowanie pokoju (turndown service)</h4>
<ul>
<li>odchylenie kołdry pod kątem (zwykle od strony bliższej łazience lub telefonu);</li>
<li>zdjęcie i złożenie narzuty, zasłonięcie okien, zapalenie lampki nocnej;</li>
<li>położenie kapci, dywanika przy łóżku, czekoladki, karty z prognozą pogody lub menu śniadaniowego;</li>
<li>usunięcie śmieci, wymiana zużytych ręczników.</li>
</ul>
<h4>Częstotliwość zmiany</h4>
<p>Pełna zmiana pościeli i ręczników <b>zawsze po wyjeździe gościa</b>. Podczas pobytu według standardu hotelu (np. co 2-3 dni) lub na prośbę. W programach ekologicznych ręcznik zostawiony na podłodze lub w wannie oznacza prośbę o wymianę, powieszony: używam dalej.</p>
<p>Ścielenie wykonuje się z jednej strony łóżka, a potem z drugiej, aby ograniczyć chodzenie dookoła.</p>
<div class="tip">Brudnej bielizny nie kładzie się na podłodze ani na meblach pokoju, a czystej nie wkłada się do tego samego worka. To element oceny na egzaminie praktycznym.</div>` },
        { tytul: "Obieg bielizny", tresc: `<h4>Obieg</h4>
<pre>pokój → worek na wózku → zsyp lub transport do pralni
→ sortowanie → pranie → suszenie → prasowanie (magiel)
→ kontrola jakości → magazyn bielizny → office piętrowy → pokój</pre>
<p>Brudną i czystą bieliznę transportuje się <b>oddzielnie</b>, w zamkniętych workach lub wózkach. Bielizna zabrudzona krwią lub wydzielinami trafia do osobnego worka (oznaczonego), bo wymaga specjalnej procedury prania.</p>
<h4>Zapas bielizny</h4>
<p>Na jedno łóżko przypadają zwykle co najmniej <b>3 komplety</b> (tzw. par): jeden w pokoju, jeden w pralni, jeden w magazynie. W hotelach z własną pralnią i dużym obłożeniem utrzymuje się 4-5 kompletów (dodatkowy na wymianę zużytych).</p>
<pre>zapotrzebowanie = liczba łóżek × liczba kompletów
np. 80 łóżek × 4 komplety = 320 prześcieradeł</pre>
<h4>Ewidencja</h4>
<ul>
<li>pokojowa liczy brudną bieliznę przekazaną do pralni i czystą pobraną, zapis w zeszycie lub systemie;</li>
<li>pralnia zewnętrzna: protokół przekazania z ilościami i stanem (plamy, dziury);</li>
<li>bieliznę zniszczoną wycofuje się (protokół kasacji) i przeznacza np. na ściereczki techniczne.</li>
</ul>
<h4>Ręczniki</h4>
<div class="tw"><table><tr><th>Ręcznik</th><th>Typowy wymiar</th></tr>
<tr><td>kąpielowy (duży)</td><td>ok. 70 × 140 cm</td></tr>
<tr><td>do rąk (średni)</td><td>ok. 50 × 100 cm</td></tr>
<tr><td>do twarzy (mały)</td><td>ok. 30 × 50 cm</td></tr>
<tr><td>dywanik łazienkowy</td><td>ok. 50 × 70 cm</td></tr></table></div>
<p>Bieliznę czystą sprawdza się przed ułożeniem na łóżku: plamy, dziury, zapach. Bielizna z wadą wraca do pralni lub do kasacji.</p>
<p>Brudną bieliznę liczy się przy przekazaniu, a czystą przy odbiorze.</p>
<div class="tip">Zapamiętaj zasadę trzech kompletów: łóżko, pralnia, magazyn. Pytania o minimalny zapas bielizny są częste.</div>` },
        { tytul: "Konserwacja tekstyliów i usuwanie plam", tresc: `<h4>Symbole konserwacji</h4>
<div class="tw"><table><tr><th>Symbol</th><th>Znaczenie</th></tr>
<tr><td>wanienka z liczbą (np. 60)</td><td>pranie w wodzie, maksymalna temperatura w °C; dłoń w wanience: tylko pranie ręczne</td></tr>
<tr><td>kreska pod wanienką</td><td>program delikatny (dwie kreski: bardzo delikatny)</td></tr>
<tr><td>trójkąt pusty</td><td>wybielanie dozwolone</td></tr>
<tr><td>trójkąt z dwiema ukośnymi kreskami</td><td>tylko wybielacze tlenowe, bez chloru</td></tr>
<tr><td>kwadrat z kołem</td><td>suszenie w suszarce bębnowej (kropki: temperatura)</td></tr>
<tr><td>żelazko z kropkami</td><td>1 kropka ok. 110°C, 2 kropki ok. 150°C, 3 kropki ok. 200°C</td></tr>
<tr><td>koło z literą P lub F</td><td>czyszczenie chemiczne profesjonalne (litera W: profesjonalne czyszczenie na mokro)</td></tr>
<tr><td>symbol przekreślony</td><td>zabieg niedozwolony</td></tr></table></div>
<h4>Temperatury prania bielizny hotelowej</h4>
<p>Bawełniana pościel i ręczniki białe: zwykle 60-90°C (higienizacja). Tkaniny kolorowe i mieszane: 40-60°C. Wełna, jedwab: niska temperatura lub pranie ręczne, czyszczenie chemiczne.</p>
<h4>Usuwanie plam</h4>
<div class="tw"><table><tr><th>Plama</th><th>Postępowanie</th></tr>
<tr><td>krew</td><td><b>zimna</b> woda (gorąca ścina białko i utrwala plamę)</td></tr>
<tr><td>wosk</td><td>zeskrobać, przeprasować przez bibułę</td></tr>
<tr><td>tłuszcz</td><td>płyn do naczyń, środek odtłuszczający, ciepła woda</td></tr>
<tr><td>czerwone wino</td><td>szybko zmyć zimną wodą, potem odplamiacz tlenowy</td></tr>
<tr><td>guma do żucia</td><td>zamrozić (lód w woreczku), odkruszyć</td></tr>
<tr><td>kawa, herbata</td><td>zimna woda, potem odplamiacz</td></tr></table></div>
<h4>Usługa pralnicza dla gości</h4>
<p>Gość wypełnia <b>formularz zlecenia</b> (rodzaj usługi: pranie, czyszczenie chemiczne, prasowanie; liczba sztuk; usługa standardowa lub ekspresowa) i wkłada rzeczy do worka. Pokojowa sprawdza kieszenie i liczbę sztuk w obecności gościa lub opisuje uszkodzenia. Koszt dolicza się do rachunku pokoju.</p>
<p>Plamę usuwa się od brzegu do środka, aby jej nie rozprowadzić.</p>
<div class="tip">Plamę z krwi pierze się zimną wodą. To jedno z najczęściej powtarzanych pytań o plamy.</div>` }
      ],
      pytania: [
        Q("Wieczorne przygotowanie pokoju do snu (odchylenie kołdry, zasłonięcie okien) to", "turndown service", "room service", "wake-up call", "check-out", "Często z czekoladką i menu śniadaniowym."),
        Q("Pełna zmiana pościeli i ręczników obowiązkowo następuje", "po wyjeździe gościa", "raz w miesiącu", "tylko na prośbę gościa", "co 2 godziny", "Podczas pobytu zależnie od standardu hotelu."),
        Q("Minimalna liczba kompletów bielizny na jedno łóżko w hotelu to zwykle", "3", "1", "2", "10", "Jeden w pokoju, jeden w pralni, jeden w magazynie."),
        Q("Hotel ma 60 łóżek i utrzymuje 4 komplety bielizny na łóżko. Potrzebuje prześcieradeł", "240", "64", "180", "120", "60 × 4 = 240."),
        Q("Symbol żelazka z dwiema kropkami oznacza prasowanie w temperaturze maksymalnie ok.", "150°C", "110°C", "200°C", "60°C", "1 kropka ok. 110°C, 3 kropki ok. 200°C."),
        Q("Pusty trójkąt na metce oznacza, że", "wybielanie jest dozwolone", "nie wolno prać", "można suszyć w suszarce", "wolno prasować w wysokiej temperaturze", "Przekreślony trójkąt oznacza zakaz wybielania."),
        Q("Plamę z krwi na pościeli usuwa się", "zimną wodą", "wrzątkiem", "żelazkiem na gorąco", "rozpuszczalnikiem nitro", "Gorąca woda ścina białko i utrwala plamę."),
        Q("Bieliznę zabrudzoną krwią z pokoju gościa", "pakuje się do osobnego, oznaczonego worka", "pierze się w umywalce w pokoju", "wyrzuca się do kosza w pokoju", "miesza się z czystą bielizną", "Wymaga oddzielnej procedury prania.")
      ]
    },
    {
      id: "uslugi", tytul: "Śniadania, room service i usługi", opis: "Zorganizujesz śniadanie i room service oraz obsłużysz zamówienia na usługi dodatkowe.",
      lekcje: [
        { tytul: "Rodzaje śniadań hotelowych", tresc: `<h4>Rodzaje śniadań</h4>
<div class="tw"><table><tr><th>Śniadanie</th><th>Skład</th></tr>
<tr><td><b>kontynentalne</b></td><td>pieczywo (bułki, croissanty), masło, dżem lub miód, gorący napój (kawa, herbata), czasem sok</td></tr>
<tr><td><b>angielskie</b></td><td>jak kontynentalne oraz dania na ciepło: jaja (sadzone, jajecznica), bekon, kiełbaski, fasolka w sosie pomidorowym, pieczarki, pomidor, owsianka (porridge), tosty</td></tr>
<tr><td><b>amerykańskie</b></td><td>soki, płatki z mlekiem, jaja, bekon, naleśniki (pancakes) z syropem klonowym, gofry, tosty, kawa</td></tr>
<tr><td><b>wiedeńskie</b></td><td>kontynentalne z jajkiem na miękko</td></tr>
<tr><td><b>bufetowe</b> (szwedzki stół)</td><td>szeroki wybór dań zimnych i ciepłych, gość obsługuje się sam</td></tr>
<tr><td><b>á la carte</b></td><td>dania z karty śniadaniowej, zamawiane u kelnera</td></tr></table></div>
<h4>Bufet śniadaniowy</h4>
<ul>
<li>układ: talerze, pieczywo, nabiał i wędliny, sery, warzywa, dania ciepłe w podgrzewaczach (powyżej +63°C), płatki i jogurty, owoce, słodkie, napoje;</li>
<li>produkty chłodzone w strefie chłodzonej lub na lodzie (do +4°C, maks. ok. 2-4 h ekspozycji);</li>
<li>opisy potraw z oznaczeniem alergenów i produktów wegetariańskich, bezglutenowych;</li>
<li>bieżące uzupełnianie, porządek, zbieranie talerzy ze stołów;</li>
<li>stacja jajeczna (omlety na zamówienie) w wyższych kategoriach.</li>
</ul>
<h4>Nakrycie śniadaniowe</h4>
<p>Talerz płytki deserowy, nóż i widelec deserowy, filiżanka na spodku z łyżeczką (uchem w prawo), talerzyk do pieczywa, serwetka, kieliszek do soku. Przy jajku na miękko: kieliszek do jajka i łyżeczka.</p>
<h4>Planowanie</h4>
<pre>liczba śniadań ≈ liczba gości z pakietem BB
przykład: 120 pokoi zajętych, średnio 1,6 osoby na pokój
→ ok. 192 śniadania</pre>
<p>Godziny śniadań podaje się gościom przy zameldowaniu.</p>
<div class="tip">Skrót BB (bed and breakfast) oznacza nocleg ze śniadaniem, HB (half board) śniadanie i obiadokolację, FB (full board) pełne wyżywienie, AI (all inclusive) wszystko w cenie.</div>` },
        { tytul: "Room service", tresc: `<h4>Przyjęcie zamówienia</h4>
<ul>
<li><b>telefonicznie</b>: przedstawienie się, zapisanie numeru pokoju, nazwiska, zamówienia, liczby osób, godziny; powtórzenie zamówienia i podanie czasu realizacji;</li>
<li><b>karta zawieszkowa</b> (doorknob menu): gość zaznacza wieczorem śniadanie i przedział czasowy, wiesza kartę na zewnętrznej klamce. Służba nocna zbiera karty i przekazuje do kuchni.</li>
</ul>
<h4>Przygotowanie i dostarczenie</h4>
<ol>
<li>przygotowanie <b>tacy</b> (małe zamówienia) lub <b>wózka</b> (zamówienia większe, z podgrzewaczem): serwetka, nakrycie, przyprawy, potrawy przykryte kloszami;</li>
<li>sprawdzenie zamówienia z bonem przed wyjściem z kuchni;</li>
<li>zapukanie, przedstawienie się („Room service”), po zaproszeniu wejście;</li>
<li>zapytanie, gdzie ustawić tacę lub wózek, rozłożenie nakrycia, otwarcie kloszy;</li>
<li>podanie rachunku do podpisu (obciążenie pokoju) lub przyjęcie płatności;</li>
<li>informacja o odbiorze naczyń (np. „Proszę wystawić tacę na korytarz lub zadzwonić”).</li>
</ol>
<h4>Odbiór naczyń</h4>
<p>Naczynia zbiera się po ok. 30-60 minutach lub na sygnał gościa. Tace pozostawione na korytarzu zbiera się na bieżąco (estetyka, higiena, bezpieczeństwo).</p>
<h4>Standardy</h4>
<ul><li>czas realizacji: zwykle ok. 20-30 min dla śniadania, informacja o opóźnieniu;</li><li>potrawy gorące gorące, zimne zimne, napoje gorące w termosach;</li><li>dyskrecja: nie komentuje się wyglądu pokoju i gości.</li></ul>
<h4>Minibar</h4>
<p>Sprawdza się go codziennie i przy wyjeździe gościa. Zużyte produkty wpisuje się do rachunku przez recepcję i uzupełnia. Kontroluje się terminy przydatności produktów.</p>
<p>Zamówienie z alkoholem realizuje się tylko dla gości pełnoletnich. Pracownik dostarczający zamówienie może zapytać o dokument, gdy ma wątpliwości.</p>
<div class="tip">Rachunek za room service gość podpisuje, a kwotę dopisuje się do rachunku pokoju. Na egzaminie to typowa odpowiedź na pytanie o sposób rozliczenia.</div>` },
        { tytul: "Usługi dodatkowe i dokumentacja", tresc: `<h4>Usługi dodatkowe</h4>
<div class="tw"><table><tr><th>Usługa</th><th>Opis</th></tr>
<tr><td>budzenie (wake-up call)</td><td>na prośbę gościa, zapis w systemie lub zeszycie, sprawdzenie, czy gość odebrał</td></tr>
<tr><td>przechowanie bagażu</td><td>przechowalnia, kwit z numerem dla gościa i drugi na bagażu</td></tr>
<tr><td>depozyt</td><td>sejf w pokoju lub depozyt hotelowy przy recepcji</td></tr>
<tr><td>pralnia i prasowalnia</td><td>formularz zlecenia, worek, cennik</td></tr>
<tr><td>concierge</td><td>rezerwacje biletów, restauracji, transport, informacja turystyczna</td></tr>
<tr><td>transfer</td><td>z lotniska, dworca</td></tr>
<tr><td>usługi SPA, fitness, basen</td><td>regulamin, godziny, rezerwacje</td></tr>
<tr><td>usługi dla dzieci</td><td>łóżeczko, krzesełko, opieka (baby-sitting)</td></tr></table></div>
<h4>Zamówienie usługi</h4>
<p>Każda usługa przyjmowana jest z datą, godziną, numerem pokoju, nazwiskiem, zakresem i ceną. Gość potwierdza zamówienie (podpis lub potwierdzenie ustne zapisane w systemie). Opłatę dolicza się do rachunku pokoju.</p>
<h4>Odpowiedzialność hotelu za rzeczy gościa</h4>
<ul>
<li>hotel odpowiada za utratę lub uszkodzenie rzeczy wniesionych przez gościa (Kodeks cywilny, art. 846 i nast.);</li>
<li>odpowiedzialność jest <b>ograniczona do stukrotności należności za jedną dobę</b> hotelową, chyba że rzecz oddano na przechowanie lub szkodę wyrządził personel;</li>
<li>za pieniądze, papiery wartościowe i kosztowności hotel odpowiada bez ograniczeń tylko wtedy, gdy przyjął je na przechowanie;</li>
<li>gość powinien niezwłocznie zawiadomić hotel o szkodzie.</li>
</ul>
<h4>Dokumentacja służby pięter</h4>
<p>raport pokojowej, karta zadań (lista pokoi), zeszyt usterek, rejestr rzeczy znalezionych, ewidencja bielizny, rejestr minibaru, plan sprzątania gruntownego.</p>
<p>Usługi dodatkowe mogą być płatne lub wliczone w cenę pokoju (np. Wi-Fi, parking).</p>
<p>Cennik usług dodatkowych powinien być dostępny dla gościa w pokoju lub w aplikacji hotelu.</p>
<div class="tip">Ograniczenie odpowiedzialności hotelu do stukrotności ceny doby nie dotyczy rzeczy oddanych na przechowanie. To ważne rozróżnienie.</div>` }
      ],
      pytania: [
        Q("Śniadanie składające się z pieczywa, masła, dżemu i gorącego napoju to śniadanie", "kontynentalne", "angielskie", "amerykańskie", "bufetowe", "Angielskie zawiera dodatkowo dania na ciepło."),
        Q("Śniadanie z jajami, bekonem, kiełbaskami i fasolką w sosie pomidorowym to śniadanie", "angielskie", "kontynentalne", "wiedeńskie", "dietetyczne", "Bywa też owsianka (porridge)."),
        Q("Skrót HB w ofercie hotelu oznacza", "śniadanie i obiadokolację", "tylko nocleg", "tylko śniadanie", "pełne wyżywienie z napojami", "BB: śniadanie, FB: pełne wyżywienie."),
        Q("Karta, na której gość zamawia śniadanie do pokoju i wiesza ją wieczorem na klamce, to", "doorknob menu", "karta meldunkowa", "voucher", "karta win", "Służba nocna zbiera karty i przekazuje do kuchni."),
        Q("Dostarczając zamówienie room service, kelner po wejściu", "pyta gościa, gdzie ustawić tacę lub wózek", "stawia tacę na łóżku bez pytania", "zostawia tacę pod drzwiami bez pukania", "prosi gościa o zapłatę gotówką przed wejściem", "Następnie podaje rachunek do podpisu."),
        Q("Hotel odpowiada za rzeczy wniesione przez gościa, które nie zostały oddane na przechowanie, do wysokości", "stukrotności należności za dobę hotelową", "dziesięciokrotności należności za dobę", "pełnej wartości bez ograniczeń", "nie odpowiada wcale", "Wynika to z Kodeksu cywilnego."),
        Q("Bagaż przyjęty do przechowalni oznacza się", "kwitem z numerem, którego drugą część dostaje gość", "nazwiskiem gościa wypisanym markerem na walizce", "nie oznacza się go", "naklejką z numerem karty kredytowej gościa", "Numer kwitu łączy bagaż z gościem."),
        Q("Minibar w pokoju kontroluje się", "codziennie i przy wyjeździe gościa", "raz w miesiącu", "tylko na prośbę gościa", "tylko przy remoncie pokoju", "Zużycie dopisuje się do rachunku.")
      ]
    },
    {
      id: "obsluga-gosci", tytul: "Obsługa gości i bezpieczeństwo", opis: "Obsłużysz gościa zgodnie ze standardem, rozpatrzysz skargę i zareagujesz w sytuacji zagrożenia.",
      lekcje: [
        { tytul: "Standardy komunikacji z gościem", tresc: `<h4>Zasady</h4>
<ul>
<li>powitanie gościa jako pierwszy, z uśmiechem, kontakt wzrokowy, zwracanie się po nazwisku, jeśli je znamy;</li>
<li>zasada <b>10/5</b>: na odległość ok. 10 kroków (3 m) kontakt wzrokowy i uśmiech, na ok. 5 kroków powitanie słowne (stosowana w wielu sieciach hotelowych);</li>
<li>pracownik służby pięter na korytarzu ustępuje gościowi drogi, nie prowadzi głośnych rozmów prywatnych;</li>
<li>w windzie personel korzysta z windy służbowej.</li>
</ul>
<h4>Rozmowa telefoniczna</h4>
<ol><li>odebranie do <b>3 sygnałów</b>;</li><li>przedstawienie się: nazwa działu, imię, „W czym mogę pomóc?”;</li><li>notowanie, powtórzenie ustaleń;</li><li>podziękowanie i pożegnanie; gość rozłącza się pierwszy.</li></ol>
<h4>Goście o szczególnych potrzebach</h4>
<div class="tw"><table><tr><th>Gość</th><th>Działania</th></tr>
<tr><td>VIP</td><td>pokój sprawdzony przez inspektora, upominek powitalny (welcome pack: owoce, wino, list od dyrektora), dyskrecja</td></tr>
<tr><td>osoba z niepełnosprawnością ruchową</td><td>pokój dostosowany, blisko windy, pomoc z bagażem</td></tr>
<tr><td>osoba niewidoma z psem asystującym</td><td>pies ma prawo wejścia, opis rozkładu pokoju, nie przestawia się rzeczy</td></tr>
<tr><td>rodzina z dziećmi</td><td>łóżeczko, krzesełko, zabezpieczenia gniazdek, oferta dla dzieci</td></tr>
<tr><td>gość z alergią</td><td>pokój hipoalergiczny, bez kwiatów i zapachów, informacja w kuchni</td></tr>
<tr><td>gość zagraniczny</td><td>komunikacja w języku obcym, materiały w kilku językach, uwzględnienie zwyczajów</td></tr></table></div>
<h4>Ochrona danych gości</h4>
<p>Pracownik nie podaje osobom trzecim numeru pokoju ani informacji o tym, czy ktoś mieszka w hotelu. Dane osobowe gości chroni <b>RODO</b>. Dokumenty z danymi nie mogą leżeć na wózku ani w częściach ogólnodostępnych.</p>
<div class="tip">Pytanie „Ktoś przy recepcji pyta, w którym pokoju mieszka pan Kowalski” ma odpowiedź: nie podajemy numeru, możemy połączyć telefonicznie z pokojem lub przekazać wiadomość.</div>` },
        { tytul: "Skargi i reklamacje gości", tresc: `<h4>Model postępowania (LAST)</h4>
<ol>
<li><b>Listen</b>: wysłuchaj uważnie, bez przerywania i tłumaczenia się;</li>
<li><b>Apologize</b>: przeproś za niedogodność;</li>
<li><b>Solve</b>: rozwiąż problem lub przekaż osobie decyzyjnej, podaj czas załatwienia;</li>
<li><b>Thank</b>: podziękuj za zgłoszenie, bo pozwala ono poprawić jakość.</li>
</ol>
<h4>Typowe skargi i reakcje</h4>
<div class="tw"><table><tr><th>Skarga</th><th>Reakcja</th></tr>
<tr><td>pokój nieposprzątany</td><td>natychmiastowe sprzątanie, kontrola inspektora, ewentualnie upominek</td></tr>
<tr><td>usterka (nie działa klimatyzacja, cieknie kran)</td><td>zgłoszenie do działu technicznego, naprawa lub zmiana pokoju</td></tr>
<tr><td>hałas z sąsiedniego pokoju</td><td>interwencja recepcji lub ochrony, zaproponowanie innego pokoju</td></tr>
<tr><td>brak zamówionego łóżeczka</td><td>dostarczenie od razu, przeprosiny</td></tr>
<tr><td>zagubiona rzecz</td><td>sprawdzenie rejestru rzeczy znalezionych, protokół</td></tr></table></div>
<h4>Zasady</h4>
<ul>
<li>nie obwinia się innych działów ani współpracowników;</li>
<li>skargę zapisuje się w systemie lub księdze skarg, z opisem i sposobem załatwienia;</li>
<li>pracownik działa w ramach swoich uprawnień (rekompensatę finansową ustala kierownik);</li>
<li>po rozwiązaniu sprawdza się zadowolenie gościa.</li>
</ul>
<h4>Rzeczy znalezione</h4>
<p>Pokojowa przekazuje rzecz przełożonej lub do biura służby pięter, z wpisem w <b>rejestrze rzeczy znalezionych</b>: data, numer pokoju, opis przedmiotu, osoba znajdująca. Rzeczy wartościowe przechowuje się w sejfie. Rzecz oddaje się gościowi po potwierdzeniu jego tożsamości i opisu przedmiotu. Nie kontaktuje się samodzielnie z gościem, jeśli mogłoby to naruszyć jego prywatność.</p>
<p>Skargę zgłoszoną w internecie (portal z opiniami) hotel również rozpatruje i odpowiada na nią publicznie, uprzejmie i rzeczowo.</p>
<p>Analiza skarg pomaga poprawić standardy pracy.</p>
<div class="tip">Na egzaminie odpowiedź „przeprosić i od razu zaproponować rozwiązanie” jest prawie zawsze poprawna. Tłumaczenie się lub odsyłanie gościa do innego działu to błąd.</div>` },
        { tytul: "Bezpieczeństwo w obiekcie", tresc: `<h4>Ochrona przeciwpożarowa</h4>
<ul>
<li>w pokoju umieszcza się <b>plan ewakuacji</b> z drogą do najbliższego wyjścia;</li>
<li>drogi ewakuacyjne i drzwi pożarowe muszą być wolne, a oznakowanie podświetlone;</li>
<li>w razie pożaru: zaalarmować (ręczny ostrzegacz pożarowy, recepcja, <b>112</b> lub 998), pomóc w ewakuacji gości, <b>nie używać windy</b>;</li>
<li>w zadymieniu poruszać się nisko, przy podłodze, zamykając za sobą drzwi;</li>
<li>gaśnica proszkowa ABC: ciała stałe, ciecze, gazy; urządzeń elektrycznych pod napięciem nie gasi się wodą.</li>
</ul>
<h4>Bezpieczeństwo gości</h4>
<ul>
<li>pokojowa nie otwiera pokoju osobie, która twierdzi, że zgubiła klucz: kieruje ją do recepcji, która sprawdza tożsamość;</li>
<li>klucze i karty serwisowe (master key) pracownik nosi przy sobie, nie zostawia na wózku;</li>
<li>gość w złym stanie zdrowia w pokoju: wezwać pomoc (112), powiadomić przełożonego, udzielić pierwszej pomocy;</li>
<li>podejrzane przedmioty lub sytuacje (broń, narkotyki) zgłasza się przełożonemu i ochronie, niczego się nie dotyka.</li>
</ul>
<h4>Bezpieczeństwo pracownika</h4>
<div class="tw"><table><tr><th>Zagrożenie</th><th>Zapobieganie</th></tr>
<tr><td>poślizgnięcie</td><td>obuwie antypoślizgowe, tabliczki „mokra podłoga”</td></tr>
<tr><td>chemikalia</td><td>rękawice, właściwe dozowanie, karty charakterystyki</td></tr>
<tr><td>skaleczenie (szkło, igły w pościeli)</td><td>ostrożne zdejmowanie pościeli, kontrola kosza, nie ugniatać śmieci ręką</td></tr>
<tr><td>przeciążenie kręgosłupa</td><td>ergonomiczne ścielenie, wózek zamiast noszenia</td></tr>
<tr><td>porażenie prądem</td><td>nie dotykać uszkodzonych urządzeń, zgłaszać usterki</td></tr></table></div>
<h4>Pierwsza pomoc</h4>
<p>Ocena bezpieczeństwa, sprawdzenie przytomności i oddechu (do 10 s), wezwanie 112, resuscytacja 30 uciśnięć i 2 oddechy, użycie AED, jeśli jest w hotelu. Osobę nieprzytomną z oddechem układa się w pozycji bocznej ustalonej.</p>
<p>Pracownicy hotelu przechodzą okresowe szkolenia ppoż. i ćwiczenia ewakuacyjne.</p>
<div class="tip">Podczas pożaru nie korzysta się z windy. To pytanie wraca w wielu kwalifikacjach.</div>` }
      ],
      pytania: [
        Q("Telefon w dziale hotelu należy odebrać", "do 3 sygnałów", "po 10 sygnałach", "tylko po zakończeniu bieżącej pracy", "nie wcześniej niż po 5 sygnałach", "To standard szybkiej obsługi."),
        Q("Osoba przy recepcji pyta o numer pokoju gościa. Pracownik powinien", "nie podawać numeru, a zaproponować połączenie z pokojem lub przekazanie wiadomości", "podać numer pokoju", "podać numer, jeśli osoba zna nazwisko gościa", "zaprowadzić osobę do pokoju", "Chroni to prywatność i bezpieczeństwo gościa."),
        Q("Upominek powitalny przygotowany w pokoju gościa VIP to", "welcome pack", "turndown", "doorknob menu", "late check-out", "Np. owoce, wino, list od dyrektora."),
        Q("Pierwszym krokiem modelu LAST przy skardze gościa jest", "wysłuchanie gościa", "zaproponowanie rabatu", "przeprosiny i zakończenie rozmowy", "przekazanie sprawy policji", "Listen, Apologize, Solve, Thank."),
        Q("Pokojowa znalazła w pokoju po wyjeździe gościa zegarek. Powinna", "przekazać go przełożonej i wpisać do rejestru rzeczy znalezionych", "zatrzymać go do czasu, aż gość się zgłosi", "wyrzucić go do kosza", "wysłać go pocztą na adres z karty meldunkowej", "Rzeczy wartościowe trafiają do sejfu."),
        Q("Osoba na korytarzu twierdzi, że zgubiła kartę do pokoju i prosi pokojową o otwarcie drzwi. Pokojowa powinna", "skierować ją do recepcji", "otworzyć pokój kartą serwisową", "otworzyć, jeśli osoba poda numer pokoju", "pożyczyć jej kartę serwisową", "Recepcja sprawdzi tożsamość."),
        Q("Podczas pożaru w hotelu nie wolno", "korzystać z windy", "używać klatki schodowej", "zamykać za sobą drzwi", "poruszać się nisko przy podłodze", "Winda może się zatrzymać i wypełnić dymem."),
        Q("Osobę nieprzytomną, która prawidłowo oddycha, układa się", "w pozycji bocznej ustalonej", "na brzuchu z głową w dół", "w pozycji siedzącej", "na plecach z poduszką pod głową", "Chroni to drożność dróg oddechowych.")
      ]
    }
  ]);
})(window.KURSY);
