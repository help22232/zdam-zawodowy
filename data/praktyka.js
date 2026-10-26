/* Zadania praktyczne z kryteriami oceniania w stylu CKE */
window.KURSY = window.KURSY || {};
(function (K) {
  function add(kod, p) { if (K[kod]) K[kod].praktyka = p; }

  add("INF.02", {
    tytul: "Konfiguracja sieci małego biura i serwera",
    model: "w", czas: 150,
    opis: `
<p>Firma ma serwer z systemem Windows Server, stację roboczą z Windows 10/11, router z punktem dostępowym i przełącznik. Masz do dyspozycji skrętkę U/UTP kat. 5e, wtyki RJ-45, zaciskarkę i tester.</p>
<ol>
<li>Wykonaj kabel prosty (sekwencja T568B) o długości ok. 1 m i sprawdź go testerem.</li>
<li>Połącz serwer, stację i router przez przełącznik.</li>
<li>Router: adres LAN <code>192.168.10.1/24</code>, serwer DHCP wyłączony, sieć Wi-Fi o SSID <code>Biuro_10</code>, szyfrowanie WPA2-PSK (AES), klucz <code>Egzamin!2026</code>.</li>
<li>Serwer: statyczny adres <code>192.168.10.2/24</code>, brama <code>192.168.10.1</code>, DNS <code>127.0.0.1</code>. Zainstaluj rolę DHCP: zakres <code>192.168.10.100–192.168.10.150</code>, opcje: brama <code>192.168.10.1</code> (router), DNS <code>192.168.10.2</code> (serwer), rezerwacja <code>192.168.10.120</code> dla stacji roboczej (wg jej adresu MAC).</li>
<li>Na serwerze utwórz grupę <code>Ksiegowosc</code> i użytkownika <code>a.nowak</code> (członek grupy), folder <code>C:\\Dane</code> udostępniony jako <code>Dane</code> z uprawnieniem odczytu i zapisu wyłącznie dla grupy.</li>
<li>Stacja: ustaw automatyczne pobieranie adresu, sprawdź poleceniem <code>ipconfig /all</code>, że otrzymała adres z rezerwacji, i wykonaj <code>ping</code> do serwera i routera.</li>
</ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Kabel", pozycje: ["Oba wtyki zaciśnięte w sekwencji T568B, żyły wsunięte do końca wtyku", "Izolacja zewnętrzna zaciśnięta pod zatrzaskiem wtyku", "Test wykazał poprawne połączenie wszystkich 8 żył"] },
      { grupa: "Rezultat 2: Router", pozycje: ["Adres LAN 192.168.10.1, maska 255.255.255.0", "Serwer DHCP routera wyłączony", "SSID Biuro_10, WPA2-PSK z szyfrowaniem AES i podanym kluczem"] },
      { grupa: "Rezultat 3: Serwer", pozycje: ["Statyczny adres IP, maska, brama i DNS zgodne z treścią", "Zakres DHCP 192.168.10.100–150 aktywny", "Opcje zakresu: brama (003) 192.168.10.1 i DNS (006) 192.168.10.2", "Rezerwacja 192.168.10.120 dla adresu MAC stacji roboczej", "Grupa Ksiegowosc i użytkownik a.nowak będący jej członkiem", "Udział Dane: uprawnienia udziału i NTFS — odczyt i zapis tylko dla grupy (bez Everyone)"] },
      { grupa: "Rezultat 4: Stacja robocza", pozycje: ["Stacja pobiera adres automatycznie i otrzymała 192.168.10.120", "ping do serwera i do routera kończy się powodzeniem"] },
      { grupa: "Przebieg", pozycje: ["Praca przy wyłączonym zasilaniu podczas łączenia sprzętu, porządek na stanowisku", "Ścinki przewodów i odpady zebrane, narzędzia odłożone"] }
    ],
    rozwiazanie: `
<h4>Najczęstsze pułapki</h4>
<ul><li>Pozostawiony włączony DHCP na routerze — stacja dostaje adres z routera, a nie z rezerwacji.</li>
<li>Rezerwacja wymaga adresu MAC w formacie bez separatorów lub z myślnikami — odczytaj go z <code>ipconfig /all</code> (Adres fizyczny).</li>
<li>Zakres DHCP po utworzeniu trzeba <b>aktywować</b> i (w domenie) <b>autoryzować</b> serwer.</li>
<li>Udostępnianie: usuń grupę „Wszyscy” (Everyone) z uprawnień udziału, dodaj <code>Ksiegowosc</code> z „Zmiana”; w zabezpieczeniach NTFS — „Modyfikacja”.</li></ul>
<h4>Polecenia kontrolne</h4>
<pre>ipconfig /release
ipconfig /renew
ipconfig /all
ping 192.168.10.2
ping 192.168.10.1</pre>
<p>Na serwerze w PowerShell: <code>Get-DhcpServerv4Lease -ScopeId 192.168.10.0</code> pokazuje dzierżawy.</p>`
  });

  add("INF.03", {
    tytul: "Strona „Biblioteka” z bazą danych",
    model: "wk", czas: 150,
    opis: `
<p>Baza <code>biblioteka</code> ma tabele <code>ksiazki(id, tytul, autor_id, rok, cena)</code> i <code>autorzy(id, imie, nazwisko)</code>.</p>
<h4>Część 1 — zapytania (zapisz w pliku kwerendy.txt, zrób zrzuty kw1–kw4)</h4>
<ol><li>Tytuły i rok wydania książek wydanych po 2015 roku, posortowane malejąco według roku.</li>
<li>Liczba książek każdego autora: nazwisko autora i liczba (złączenie i grupowanie).</li>
<li>Dodanie autora Olgi Tokarczuk.</li>
<li>Zwiększenie ceny wszystkich książek wydanych przed 2000 rokiem o 10%.</li></ol>
<h4>Część 2 — strona biblioteka.html / biblioteka.php</h4>
<ul><li>Układ: baner (całą szerokość, wys. 100 px, tło <code>#2F4F4F</code>, biały napis h1 „Nasza biblioteka”), panel lewy (30% szerokości) z listą numerowaną trzech kategorii, panel prawy (70%) z wynikiem skryptu, stopka z tekstem „Stronę wykonał: numer zdającego”.</li>
<li>Styl w pliku styl.css; czcionka Verdana; panel lewy ma tło <code>#D3D3D3</code>, marginesy wewnętrzne 10 px.</li>
<li>Skrypt PHP w panelu prawym: łączy się z bazą, wykonuje zapytanie 1 i wypisuje każdą książkę w akapicie w formacie „tytuł (rok)”, zamyka połączenie.</li></ul>`,
    kryteria: [
      { grupa: "Rezultat 1: Zapytania", pozycje: ["Zapytanie 1: WHERE rok > 2015 i ORDER BY rok DESC", "Zapytanie 2: JOIN autorzy z książkami po autor_id, GROUP BY i COUNT", "Zapytanie 3: poprawny INSERT INTO autorzy", "Zapytanie 4: UPDATE ... SET cena = cena * 1.1 WHERE rok < 2000", "Zrzuty ekranu kw1–kw4 zapisane pod podanymi nazwami"] },
      { grupa: "Rezultat 2: HTML", pozycje: ["Poprawny szkielet HTML5 z lang=\"pl\", kodowaniem UTF-8 i tytułem", "Styl dołączony znacznikiem `<link>`", "Cztery bloki w podanej kolejności (baner, lewy, prawy, stopka)", "Lista numerowana z trzema elementami w panelu lewym", "Stopka z tekstem wymaganym w treści"] },
      { grupa: "Rezultat 3: CSS", pozycje: ["Czcionka Verdana dla całej strony", "Baner: tło #2F4F4F, wysokość 100 px, biały tekst", "Panele 30% i 70% szerokości ułożone obok siebie (float lub flex)", "Panel lewy: tło #D3D3D3 i padding 10 px"] },
      { grupa: "Rezultat 4: Skrypt", pozycje: ["mysqli_connect z poprawnymi parametrami bazy biblioteka", "mysqli_query z zapytaniem 1 i pętla po wynikach (mysqli_fetch_*)", "Każdy wiersz w osobnym akapicie w formacie „tytuł (rok)”", "mysqli_close na końcu skryptu"] }
    ],
    rozwiazanie: `
<h4>Zapytania</h4>
<pre>SELECT tytul, rok FROM ksiazki WHERE rok &gt; 2015 ORDER BY rok DESC;
SELECT a.nazwisko, COUNT(k.id) FROM autorzy a JOIN ksiazki k ON a.id = k.autor_id GROUP BY a.nazwisko;
INSERT INTO autorzy (imie, nazwisko) VALUES ('Olga', 'Tokarczuk');
UPDATE ksiazki SET cena = cena * 1.1 WHERE rok &lt; 2000;</pre>
<h4>CSS</h4>
<pre>* { font-family: Verdana; }
#baner { height: 100px; background-color: #2F4F4F; color: white; }
#lewy { float: left; width: 30%; background-color: #D3D3D3; padding: 10px; box-sizing: border-box; }
#prawy { float: left; width: 70%; }
footer { clear: both; }</pre>
<h4>PHP</h4>
<pre>&lt;?php
$db = mysqli_connect("localhost", "root", "", "biblioteka");
$w = mysqli_query($db, "SELECT tytul, rok FROM ksiazki WHERE rok &gt; 2015 ORDER BY rok DESC;");
while ($r = mysqli_fetch_row($w)) {
    echo "&lt;p&gt;$r[0] ($r[1])&lt;/p&gt;";
}
mysqli_close($db);
?&gt;</pre>
<div class="tip">Bez <code>box-sizing: border-box</code> panel 30% + padding 20 px nie zmieści się obok panelu 70% — prawy spadnie pod spód.</div>`
  });

  add("INF.04", {
    tytul: "Aplikacja konsolowa i okienkowa „Sklep”",
    model: "wk", czas: 180,
    opis: `
<h4>Część 1 — aplikacja konsolowa (C++, C#, Java lub Python)</h4>
<ul><li>Klasa <code>Produkt</code> z prywatnymi polami: nazwa (napis), cena (liczba rzeczywista), ilosc (liczba całkowita).</li>
<li>Konstruktor z trzema parametrami, metoda <code>Wartosc()</code> zwracająca cena × ilosc, metoda <code>Wypisz()</code> wypisująca dane w jednej linii.</li>
<li>W programie głównym: tablica (lista) 5 produktów, wypisanie wszystkich, a następnie posortowanie ich malejąco według wartości <b>własną implementacją sortowania bąbelkowego</b> i ponowne wypisanie.</li>
<li>Funkcja sortująca opatrzona komentarzem dokumentującym (nazwa, opis, parametry, zwracany typ, autor).</li></ul>
<h4>Część 2 — aplikacja z interfejsem</h4>
<ul><li>Okno (lub ekran mobilny) z polami: nazwa, cena, ilość; przycisk „Dodaj”; etykieta z łączną wartością koszyka.</li>
<li>Po kliknięciu „Dodaj”: walidacja (pola niepuste, cena &gt; 0, ilość całkowita &gt; 0), w przeciwnym razie komunikat o błędzie; przy poprawnych danych — produkt trafia na listę, a etykieta pokazuje sumę z dokładnością do 2 miejsc po przecinku.</li></ul>
<h4>Część 3 — testy</h4><p>Wykonaj zrzuty ekranu: działanie konsoli, poprawne dodanie produktu i komunikat walidacji.</p>`,
    kryteria: [
      { grupa: "Rezultat 1: Klasa", pozycje: ["Pola klasy prywatne (hermetyzacja)", "Konstruktor przypisujący trzy pola", "Metoda Wartosc() zwraca cena × ilosc", "Metoda Wypisz() wypisuje wszystkie dane"] },
      { grupa: "Rezultat 2: Program konsolowy", pozycje: ["Utworzonych 5 obiektów w tablicy lub liście", "Własna implementacja sortowania bąbelkowego (bez gotowych funkcji sort)", "Sortowanie malejące według wartości", "Wypisanie przed i po sortowaniu", "Komentarz dokumentujący funkcję sortującą ze wszystkimi elementami"] },
      { grupa: "Rezultat 3: Interfejs", pozycje: ["Trzy pola, przycisk i etykieta zgodnie z opisem", "Walidacja pustych pól i wartości ≤ 0 z komunikatem", "Dodanie produktu do listy", "Suma wyświetlana z dokładnością do 2 miejsc"] },
      { grupa: "Rezultat 4: Testy", pozycje: ["Zrzuty ekranu z trzech scenariuszy zapisane", "Program kompiluje się i uruchamia bez błędów"] }
    ],
    rozwiazanie: `
<h4>Sortowanie (C#)</h4>
<pre>/*********************************************
 nazwa funkcji: SortujMalejaco
 opis funkcji: sortuje produkty malejąco według wartości (sortowanie bąbelkowe)
 parametry: t - tablica obiektów Produkt
 zwracany typ i opis: brak, tablica sortowana w miejscu
 autor: numer zdającego
**********************************************/
static void SortujMalejaco(Produkt[] t) {
    for (int i = 0; i &lt; t.Length - 1; i++)
        for (int j = 0; j &lt; t.Length - 1 - i; j++)
            if (t[j].Wartosc() &lt; t[j + 1].Wartosc()) {
                Produkt tmp = t[j]; t[j] = t[j + 1]; t[j + 1] = tmp;
            }
}</pre>
<h4>Walidacja</h4>
<pre>if (!double.TryParse(tbCena.Text, out double cena) || cena &lt;= 0) { MessageBox.Show("Podaj poprawną cenę"); return; }
if (!int.TryParse(tbIlosc.Text, out int ilosc) || ilosc &lt;= 0) { MessageBox.Show("Podaj poprawną ilość"); return; }
suma += cena * ilosc;
lblSuma.Text = suma.ToString("F2");</pre>`
  });

  add("EKA.04", {
    tytul: "Dokumentacja zakupu, magazynu i środka trwałego",
    model: "dk", czas: 120,
    opis: `
<p>Hurtownia „Papirus” sp. z o.o. (ul. Długa 5, 31-100 Kraków, NIP 6762221133).</p>
<ol>
<li>Sporządź <b>zamówienie</b> z 3.03.2026 do dostawcy „Biuro-Max” (ul. Polna 2, 30-001 Kraków) na 200 ryz papieru A4 po 18,00 zł netto i 50 segregatorów po 9,00 zł netto, z terminem dostawy 10.03.2026.</li>
<li>Dostawa przyszła 10.03.2026 zgodnie z zamówieniem. Sporządź dokument <b>PZ</b> (ceny netto).</li>
<li>Kartoteka papieru A4: stan początkowy 100 ryz po 17,00 zł, przyjęcie 200 ryz po 18,00 zł, 12.03 wydano 180 ryz. Prowadź kartotekę i wyceń rozchód metodą <b>FIFO</b>.</li>
<li>Firma kupiła drukarkę wielofunkcyjną za 12 000 zł netto, przyjętą do używania 15.03.2026 (stawka amortyzacji liniowej 30%). W arkuszu sporządź <b>plan amortyzacji</b> na 2026 rok (odpisy miesięczne i umorzenie narastająco).</li>
</ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Zamówienie", pozycje: ["Dane zamawiającego i dostawcy, miejscowość i data", "Pozycje z ilościami i cenami netto", "Termin dostawy i podpis osoby upoważnionej"] },
      { grupa: "Rezultat 2: PZ", pozycje: ["Data, numer dokumentu, dostawca", "Wartość papieru 3 600,00 zł i segregatorów 450,00 zł", "Łączna wartość 4 050,00 zł", "Podpisy: wydał, przyjął"] },
      { grupa: "Rezultat 3: Kartoteka FIFO", pozycje: ["Rozchód 180 ryz wyceniony: 100 × 17,00 + 80 × 18,00 = 3 140,00 zł", "Stan końcowy: 120 ryz po 18,00 zł = 2 160,00 zł", "Kolumny ilość i wartość prowadzone dla przychodu, rozchodu i stanu"] },
      { grupa: "Rezultat 4: Amortyzacja", pozycje: ["Odpis roczny 3 600,00 zł, miesięczny 300,00 zł", "Pierwszy odpis w kwietniu 2026", "9 odpisów w 2026 roku, umorzenie na koniec roku 2 700,00 zł", "Wartość netto na 31.12.2026: 9 300,00 zł"] }
    ],
    rozwiazanie: `
<h4>Obliczenia</h4>
<pre>PZ: 200 × 18,00 = 3 600,00; 50 × 9,00 = 450,00; razem 4 050,00 zł netto
FIFO: 100 × 17,00 = 1 700,00 + 80 × 18,00 = 1 440,00 → 3 140,00 zł
stan: 120 × 18,00 = 2 160,00 zł
amortyzacja: 12 000 × 30% = 3 600 rocznie, 300 miesięcznie
od 04.2026 do 12.2026 = 9 miesięcy → 2 700 zł; wartość netto 9 300 zł</pre>
<div class="tip">Amortyzację zaczyna się od miesiąca <b>następującego</b> po przyjęciu do używania — marzec się nie liczy.</div>`
  });

  add("EKA.05", {
    tytul: "Lista płac i deklaracje",
    model: "dk", czas: 120,
    opis: `
<p>Firma „Domex” zatrudnia dwoje pracowników (oboje mają ukończone 26 lat, mieszkają w miejscowości zakładu pracy, złożyli PIT-2).</p>
<ul><li>Anna Wiśniewska — wynagrodzenie zasadnicze 5 000 zł, premia 500 zł.</li>
<li>Piotr Zieliński — wynagrodzenie zasadnicze 4 200 zł, w marcu chorował 5 dni (podstawa wymiaru wynagrodzenia chorobowego 4 200 zł, 80%); wynagrodzenie zasadnicze za przepracowany czas: 4 200 − (4 200 ÷ 30 × 5) = 3 500 zł.</li></ul>
<p>Przyjmij: składki pracownika 9,76% / 1,5% / 2,45%, zdrowotna 9%, koszty 250 zł, zaliczka 12% − 300 zł, zaokrąglenia do pełnych złotych przy podstawie i zaliczce.</p>
<ol><li>Sporządź listę płac za marzec 2026 w arkuszu kalkulacyjnym.</li><li>Oblicz składki finansowane przez pracodawcę (emerytalna 9,76%, rentowa 6,5%, wypadkowa 1,67%, FP 2,45%, FGŚP 0,10%).</li><li>Wskaż terminy: wypłaty, przekazania składek do ZUS i zaliczek do urzędu skarbowego.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Anna Wiśniewska", pozycje: ["Brutto 5 500,00 zł", "Składki społeczne pracownika 754,05 zł", "Składka zdrowotna 427,14 zł", "Zaliczka PIT 240 zł (4 496 × 12% − 300 = 239,52)", "Netto 4 078,81 zł"] },
      { grupa: "Rezultat 2: Piotr Zieliński", pozycje: ["Wynagrodzenie chorobowe 560,00 zł (140 × 80% × 5)", "Składki społeczne naliczone tylko od 3 500 zł (479,85 zł)", "Składka zdrowotna liczona od 3 580,15 zł (322,21 zł)", "Podstawa opodatkowania 3 330 zł, zaliczka PIT 100 zł", "Netto 3 157,94 zł"] },
      { grupa: "Rezultat 3: Pracodawca i terminy", pozycje: ["Składki pracodawcy liczone od podstaw bez wynagrodzenia chorobowego", "Wypłata do 10. dnia następnego miesiąca", "ZUS do 15. dnia, zaliczki PIT do 20. dnia następnego miesiąca"] },
      { grupa: "Rezultat 4: Arkusz", pozycje: ["Formuły zamiast wpisanych wartości", "Zaokrąglenia funkcją ZAOKR i formatowanie walutowe"] }
    ],
    rozwiazanie: `
<h4>Anna Wiśniewska</h4>
<pre>brutto 5 500,00
emerytalna 536,80; rentowa 82,50; chorobowa 134,75 → 754,05
zdrowotna: (5 500 − 754,05) × 9% = 4 745,95 × 9% = 427,14
podstawa podatku: 5 500 − 754,05 − 250 = 4 495,95 → 4 496
zaliczka: 4 496 × 12% − 300 = 239,52 → 240
netto: 5 500 − 754,05 − 427,14 − 240 = 4 078,81</pre>
<h4>Piotr Zieliński</h4>
<pre>składki od 3 500: 341,60 + 52,50 + 85,75 = 479,85
chorobowe: 4 200 ÷ 30 = 140; 140 × 80% × 5 = 560,00
podstawa zdrowotnej: 3 500 − 479,85 + 560 = 3 580,15 → 9% = 322,21
podstawa podatku: 3 500 − 479,85 + 560 − 250 = 3 330,15 → 3 330
zaliczka: 3 330 × 12% − 300 = 99,60 → 100
netto: 3 500 + 560 − 479,85 − 322,21 − 100 = 3 157,94</pre>
<div class="tip">Wynagrodzenie chorobowe nie jest oskładkowane w ZUS (społeczne), ale wchodzi do podstawy składki zdrowotnej i podatku.</div>`
  });

  add("EKA.07", {
    tytul: "Księgowanie operacji i wynik finansowy",
    model: "dk", czas: 120,
    opis: `
<p>Bilans otwarcia firmy „Lumen” sp. z o.o. na 1.04.2026: Środki trwałe 80 000, Kasa 2 000, Rachunek bankowy 18 000, Towary 20 000 | Kapitał podstawowy 100 000, Zobowiązania wobec dostawców 20 000.</p>
<p>Operacje w kwietniu:</p>
<ol><li>WB — zapłata zobowiązania wobec dostawcy 12 000 zł.</li>
<li>FZ — zakup towarów 10 000 zł netto + VAT 23% (2 300 zł), płatne w terminie 14 dni; towary przyjęto (PZ).</li>
<li>FS — sprzedaż towarów 24 000 zł netto + VAT 5 520 zł, płatne przelewem w terminie.</li>
<li>WZ — wartość sprzedanych towarów w cenach zakupu 15 000 zł.</li>
<li>KW — wypłata z kasy zaliczki pracownikowi 500 zł.</li>
<li>LT/OT — naliczenie amortyzacji 1 000 zł.</li></ol>
<p>Otwórz konta, zaksięguj operacje (konta zespołów 0–8), sporządź zestawienie obrotów i sald oraz ustal wynik finansowy za kwiecień.</p>`,
    kryteria: [
      { grupa: "Rezultat 1: Otwarcie", pozycje: ["Salda początkowe po właściwych stronach (aktywa Wn, pasywa Ma)", "Bilans otwarcia: aktywa = pasywa = 120 000 zł"] },
      { grupa: "Rezultat 2: Księgowania", pozycje: ["Op. 1: Wn 201 / Ma 130 — 12 000", "Op. 2: Wn 330 10 000, Wn 221 2 300 / Ma 201 12 300", "Op. 3: Wn 200 29 520 / Ma 730 24 000, Ma 222 5 520", "Op. 4: Wn 731 / Ma 330 — 15 000", "Op. 5: Wn 234 / Ma 100 — 500", "Op. 6: Wn 400 / Ma 070 — 1 000"] },
      { grupa: "Rezultat 3: Zestawienie i wynik", pozycje: ["Suma obrotów Wn = suma obrotów Ma", "Wynik: 24 000 − 15 000 − 1 000 = zysk 8 000 zł", "Przeksięgowanie przychodów i kosztów na konto 860, saldo Ma = zysk"] }
    ],
    rozwiazanie: `
<pre>Op. 1  Wn 201 Rozrachunki z dostawcami      12 000 / Ma 130 Rachunek bankowy 12 000
Op. 2  Wn 330 Towary 10 000; Wn 221 VAT naliczony 2 300 / Ma 201 12 300
Op. 3  Wn 200 Rozrachunki z odbiorcami 29 520 / Ma 730 Sprzedaż towarów 24 000; Ma 222 VAT należny 5 520
Op. 4  Wn 731 Wartość sprzedanych towarów 15 000 / Ma 330 Towary 15 000
Op. 5  Wn 234 Pozostałe rozrachunki z pracownikami 500 / Ma 100 Kasa 500
Op. 6  Wn 400 Amortyzacja 1 000 / Ma 070 Umorzenie środków trwałych 1 000

860: Wn 731 15 000 + 400 1 000 = 16 000 | Ma 730 24 000 → saldo Ma 8 000 = zysk</pre>
<div class="tip">W wariancie porównawczym koszty rodzajowe (zespół 4) przenosi się na 860 bezpośrednio, jeśli firma nie prowadzi zespołu 5 — postępuj zgodnie z założeniami w treści.</div>`
  });

  add("SPL.01", {
    tytul: "Przyjęcie dostawy i formowanie paletowych jednostek ładunkowych",
    model: "d", czas: 120,
    opis: `
<p>Magazyn „LogPol” przyjął 14.04.2026 dostawę od firmy „Agro-Sok”: 1 440 kartonów soku (karton 400 × 300 × 250 mm, masa brutto 10 kg). Na WZ dostawcy: 1 440 kartonów, w dostawie stwierdzono 1 430 kartonów, w tym 4 uszkodzone (przeciekające).</p>
<ol><li>Sporządź <b>protokół przyjęcia z niezgodnościami</b> (braki i uszkodzenia).</li>
<li>Sporządź dokument <b>PZ</b> na towar pełnowartościowy (cena 18,50 zł netto za karton).</li>
<li>Oblicz liczbę kartonów na palecie EUR przy maksymalnej wysokości PJŁ 1 144 mm i masie PJŁ do 1 000 kg (masa palety 25 kg), oraz liczbę potrzebnych palet.</li>
<li>Dobierz znaki manipulacyjne dla PJŁ i środek transportu wewnętrznego do rozładunku z naczepy.</li>
<li>Oblicz punkt ponownego zamówienia: zużycie 120 kartonów dziennie, czas dostawy 4 dni, zapas bezpieczeństwa 240 kartonów.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Protokół", pozycje: ["Wskazany brak 10 kartonów", "Wskazane 4 kartony uszkodzone z opisem uszkodzenia", "Dane dostawcy, przewoźnika, data, podpisy komisji"] },
      { grupa: "Rezultat 2: PZ", pozycje: ["Ilość pełnowartościowa 1 426 kartonów", "Wartość 26 381,00 zł", "Numer i data dokumentu, dostawca, podpisy"] },
      { grupa: "Rezultat 3: Obliczenia PJŁ", pozycje: ["Kartonów w warstwie: 8 — sprawdzone oba ułożenia (3 × 2 = 6 albo 4 × 2 = 8)", "Liczba warstw: (1 144 − 144) ÷ 250 = 4", "Sprawdzenie masy: 32 × 10 + 25 = 345 kg ≤ 1 000 kg", "32 kartony na palecie, 45 palet (1 426 ÷ 32 = 44,56 → w górę)"] },
      { grupa: "Rezultat 4: Dobór", pozycje: ["Znaki: „góra”, „chronić przed wilgocią”, „ograniczenie piętrzenia” (opcjonalnie „kruche”)", "Środek: wózek widłowy czołowy lub paletowy z napędem przy rozładunku z rampy", "Punkt ponownego zamówienia 720 kartonów"] }
    ],
    rozwiazanie: `
<pre>pełnowartościowe: 1 430 − 4 = 1 426 kartonów; 1 426 × 18,50 = 26 381,00 zł
ułożenie A: (1200 ÷ 400) × (800 ÷ 300) = 3 × 2 = 6 kartonów
ułożenie B: (1200 ÷ 300) × (800 ÷ 400) = 4 × 2 = 8 kartonów → wybieramy 8
warstw: (1 144 − 144) ÷ 250 = 4 → 8 × 4 = 32 kartony na palecie
masa: 32 × 10 + 25 = 345 kg ≤ 1 000 kg
palety: 1 426 ÷ 32 = 44,56 → 45 palet
ROP = 120 × 4 + 240 = 720 kartonów</pre>
<div class="tip">Zawsze sprawdź oba ułożenia kartonu (wzdłuż i w poprzek palety) — tu ułożenie boku 300 mm wzdłuż krawędzi 1 200 mm daje 8 zamiast 6 kartonów w warstwie.</div>`
  });

  add("SPL.04", {
    tytul: "Organizacja przewozu międzynarodowego",
    model: "d", czas: 120,
    opis: `
<p>Firma spedycyjna „TransEuro” otrzymała zlecenie: przewóz 30 palet EUR (masa brutto 18 t) z Poznania do Lyonu (1 450 km), załadunek 20.05.2026 o 6:00, rozładunek najpóźniej 22.05.2026 do 14:00. Warunki dostawy: <b>DAP Lyon</b> (Incoterms 2020).</p>
<ol><li>Dobierz środek transportu i oblicz wskaźnik wykorzystania ładowności (naczepa: ładowność 24 t, 33 miejsca paletowe) i przestrzeni.</li>
<li>Zaplanuj harmonogram jazdy jednego kierowcy (średnia prędkość 70 km/h) zgodnie z rozporządzeniem 561/2006.</li>
<li>Oblicz koszt przewozu: 1,10 €/km plus opłaty drogowe 180 €; cena dla klienta z marżą 15%.</li>
<li>Wypełnij kluczowe pola listu CMR i wskaż, kto ponosi koszt i ryzyko przewozu przy DAP.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Środek transportu", pozycje: ["Ciągnik siodłowy z naczepą plandekową (firanką) 13,6 m", "Wykorzystanie ładowności 75%", "Wykorzystanie przestrzeni 90,9% (30/33)"] },
      { grupa: "Rezultat 2: Harmonogram", pozycje: ["Czas jazdy ok. 20,7 h — rozłożony na 3 dni", "Przerwy 45 min po każdych 4,5 h jazdy", "Dzienny czas jazdy ≤ 9 h (lub 10 h maks. 2 razy w tygodniu)", "Odpoczynek dobowy co najmniej 11 h (lub skrócony 9 h)", "Dostawa przed 22.05 godz. 14:00"] },
      { grupa: "Rezultat 3: Koszt", pozycje: ["Koszt: 1 450 × 1,10 + 180 = 1 775 €", "Cena z marżą 15%: 2 041,25 €"] },
      { grupa: "Rezultat 4: Dokumenty i Incoterms", pozycje: ["CMR: nadawca, odbiorca, miejsce załadunku i rozładunku, liczba palet, masa brutto", "DAP: sprzedający ponosi koszty i ryzyko do miejsca w Lyonie, kupujący rozładowuje i odprawia import"] }
    ],
    rozwiazanie: `
<pre>czas jazdy: 1 450 ÷ 70 ≈ 20,7 h
dzień 1 (20.05): 6:00 załadunek do 7:00, jazda 4,5 h, przerwa 45 min, jazda 4,5 h → 9 h jazdy, ok. 630 km
odpoczynek 11 h
dzień 2 (21.05): jazda 4,5 h + przerwa + 4,5 h → 9 h, razem 1 260 km
odpoczynek 11 h
dzień 3 (22.05): ok. 2,7 h jazdy → przyjazd wcześnie rano, przed terminem 14:00
koszt: 1 595 + 180 = 1 775 €; × 1,15 = 2 041,25 €</pre>
<div class="tip">Przy DAP towar dostarcza się na środku transportu gotowy do rozładunku — rozładunek należy do kupującego (przy DPU — do sprzedającego).</div>`
  });

  add("HAN.01", {
    tytul: "Przyjęcie dostawy, kalkulacja cen i reklamacja w sklepie",
    model: "d", czas: 120,
    opis: `
<p>Sklep spożywczy „Pod Lipą” otrzymał dostawę według faktury: jogurt naturalny 400 g — 60 szt. po 2,40 zł netto (VAT 5%), kawa mielona 500 g — 20 szt. po 22,00 zł netto (VAT 23%).</p>
<ol><li>Sprawdź dostawę: dostarczono 58 jogurtów (2 brakujące), kawa zgodna. Sporządź <b>protokół rozbieżności</b>.</li>
<li>Oblicz <b>ceny sprzedaży brutto</b> przy marży 30% liczonej od ceny zakupu netto, zaokrąglając do pełnych groszy, i <b>ceny jednostkowe</b> (za 1 kg).</li>
<li>Przygotuj treść etykiet cenowych.</li>
<li>Klientka reklamuje czajnik kupiony 8 miesięcy temu (przestał grzać). Wypełnij <b>protokół reklamacyjny</b> i wskaż, na jakiej podstawie i w jakim terminie sklep odpowie.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Dostawa", pozycje: ["Protokół: brak 2 szt. jogurtu, dane dostawcy, data, podpisy", "Żądanie korekty faktury (faktura korygująca) lub dosłania towaru"] },
      { grupa: "Rezultat 2: Ceny", pozycje: ["Jogurt: 2,40 × 1,30 = 3,12 netto; × 1,05 = 3,28 zł brutto", "Kawa: 22,00 × 1,30 = 28,60 netto; × 1,23 = 35,18 zł brutto", "Cena jednostkowa jogurtu: 8,20 zł/kg", "Cena jednostkowa kawy: 70,36 zł/kg"] },
      { grupa: "Rezultat 3: Etykiety", pozycje: ["Nazwa towaru, gramatura, cena brutto i cena jednostkowa na każdej etykiecie"] },
      { grupa: "Rezultat 4: Reklamacja", pozycje: ["Podstawa: brak zgodności towaru z umową (2 lata odpowiedzialności sprzedawcy)", "Żądanie klientki (naprawa lub wymiana) wpisane w protokół", "Odpowiedź sklepu w ciągu 14 dni", "Dane klientki, opis wady, data zakupu, dowód zakupu"] }
    ],
    rozwiazanie: `
<pre>jogurt: 2,40 + 30% = 3,12; 3,12 × 1,05 = 3,276 → 3,28 zł; 3,28 ÷ 0,4 kg = 8,20 zł/kg
kawa:   22,00 + 30% = 28,60; 28,60 × 1,23 = 35,178 → 35,18 zł; 35,18 ÷ 0,5 kg = 70,36 zł/kg</pre>
<div class="tip">Klient nie musi mieć paragonu — wystarczy inny dowód zakupu (np. wyciąg z karty). W ciągu roku od wydania towaru domniemywa się, że wada istniała w chwili zakupu.</div>`
  });

  add("HGT.02", {
    tytul: "Przygotowanie i wydanie zestawu obiadowego",
    model: "w", czas: 180,
    opis: `
<p>Przygotuj i wydaj <b>4 porcje</b> zestawu: <b>zupa krem z dyni</b> (porcja 250 ml), <b>kotlet schabowy panierowany</b> (porcja mięsa 120 g netto), <b>ziemniaki gotowane z koperkiem</b> (200 g), <b>surówka z marchwi i jabłka</b> (100 g).</p>
<ol><li>Na karcie zapisz: zestawienie surowców z normami na 4 porcje, kolejność wykonywania czynności i sprzęt.</li>
<li>Przygotuj stanowisko zgodnie z zasadami higieny i BHP.</li>
<li>Wykonaj potrawy, wydaj je o właściwej temperaturze, na odpowiedniej zastawie, z dekoracją.</li>
<li>Uporządkuj stanowisko.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Planowanie", pozycje: ["Zestawienie surowców z ilościami na 4 porcje", "Kolejność: najpierw zupa i ziemniaki (najdłużej), schab smażony tuż przed wydaniem, surówka na końcu (przed podaniem)"] },
      { grupa: "Rezultat 2: Zupa krem", pozycje: ["Gładka konsystencja, bez grudek", "Smak doprawiony, porcja 250 ml, temperatura ≥ 75°C"] },
      { grupa: "Rezultat 3: Kotlet i ziemniaki", pozycje: ["Plastry schabu rozbite równomiernie, panierka: mąka, jajo, bułka tarta", "Kotlet usmażony na złoto, dosmażony w środku (≥ 75°C)", "Ziemniaki ugotowane, nierozgotowane, posypane koperkiem"] },
      { grupa: "Rezultat 4: Surówka", pozycje: ["Marchew i jabłko starte na tarce o drobnych oczkach, skropione cytryną (jabłko nie ściemniało)", "Porcja 100 g, wydana schłodzona"] },
      { grupa: "Przebieg", pozycje: ["Czysta odzież robocza, nakrycie głowy, mycie rąk po kontakcie z surowym mięsem i jajami", "Jaja wyparzone przed użyciem", "Oddzielne deski i noże dla surowego mięsa i warzyw", "Segregacja odpadów i porządek na stanowisku"] }
    ],
    rozwiazanie: `
<h4>Normy na 4 porcje (orientacyjnie)</h4>
<div class="tw"><table><tr><th>Potrawa</th><th>Surowce</th></tr>
<tr><td>Krem z dyni</td><td>dynia 800 g, ziemniak 150 g, cebula 80 g, marchew 100 g, bulion 800 ml, śmietanka 100 ml, masło 20 g, sól, pieprz, gałka</td></tr>
<tr><td>Schabowy</td><td>schab 520 g brutto (4 × 120 g netto + odpadki), jaja 2 szt., mąka 40 g, bułka tarta 80 g, olej 150 ml</td></tr>
<tr><td>Ziemniaki</td><td>ziemniaki 1 kg brutto (≈ 800 g netto), koperek 20 g, masło 20 g</td></tr>
<tr><td>Surówka</td><td>marchew 300 g, jabłko 150 g, cytryna ½, cukier, olej</td></tr></table></div>
<div class="tip">Schab panieruj tuż przed smażeniem, inaczej panierka namoknie. Olej ma mieć ok. 170°C — sprawdzisz kawałkiem bułki, który powinien się od razu zrumienić.</div>`
  });

  add("MOT.05", {
    tytul: "Diagnoza i wymiana elementów układu hamulcowego osi przedniej",
    model: "w", czas: 150,
    opis: `
<p>Klient zgłasza piszczenie i bicie kierownicy podczas hamowania. Samochód osobowy, hamulce tarczowe z przodu. Dane producenta: grubość nominalna tarczy 22 mm, minimalna 20 mm, maksymalne bicie osiowe 0,05 mm, minimalna grubość okładziny klocka 2 mm, moment dokręcenia jarzma zacisku 110 Nm, śrub prowadnic 30 Nm, kół 110 Nm.</p>
<ol><li>Przygotuj stanowisko i zabezpiecz pojazd na podnośniku.</li>
<li>Zdemontuj koła, zmierz grubość tarcz (mikrometrem) i ich bicie (czujnikiem zegarowym) oraz grubość okładzin klocków.</li>
<li>Na podstawie pomiarów oceń stan elementów i wymień zużyte części.</li>
<li>Złóż układ, dokręć elementy zgodnie z momentami, sprawdź działanie hamulca.</li>
<li>Wypełnij kartę zlecenia z wynikami pomiarów i wnioskami.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Pomiary", pozycje: ["Grubość tarcz zmierzona mikrometrem w kilku punktach", "Bicie osiowe zmierzone czujnikiem zegarowym na statywie magnetycznym", "Grubość okładzin klocków zmierzona i zapisana", "Wyniki porównane z danymi producenta"] },
      { grupa: "Rezultat 2: Naprawa", pozycje: ["Wymiana tarcz i klocków parami na całej osi", "Oczyszczenie piasty i jarzma, nasmarowanie prowadnic smarem do zacisków", "Wycofanie tłoczka zacisku bez uszkodzenia osłony", "Jarzmo 110 Nm, prowadnice 30 Nm — kluczem dynamometrycznym", "Koła dokręcone na krzyż momentem 110 Nm"] },
      { grupa: "Rezultat 3: Kontrola", pozycje: ["Kilkukrotne wciśnięcie pedału przed ruszeniem, sprawdzenie poziomu płynu", "Karta zlecenia z pomiarami, wnioskiem i listą części"] },
      { grupa: "Przebieg", pozycje: ["Pojazd zabezpieczony, pokrowce na fotel i błotniki", "Odzież robocza, rękawice, okulary przy czyszczeniu", "Zużyte części i odpady w oznaczonych pojemnikach"] }
    ],
    rozwiazanie: `
<h4>Ocena</h4>
<ul><li>Tarcza o grubości &lt; 20 mm lub biciu &gt; 0,05 mm — do wymiany. Bicie tarcz to typowa przyczyna drgań kierownicy przy hamowaniu.</li>
<li>Klocek z okładziną ≤ 2 mm lub z działającym wskaźnikiem zużycia (piszczenie) — do wymiany.</li>
<li>Tarcze i klocki wymienia się zawsze na obu kołach osi.</li></ul>
<h4>Pomiar bicia</h4><p>Czujnik ustawia się prostopadle do powierzchni tarczy, ok. 10 mm od jej zewnętrznej krawędzi, z napięciem wstępnym, zeruje i obraca tarczę o pełny obrót; odczyt to różnica wskazań maks. − min. Przed pomiarem tarczę dociska się nakrętkami kół (z podkładkami).</p>`
  });

  add("ELE.02", {
    tytul: "Układ sterowania silnikiem trójfazowym z dwóch miejsc",
    model: "w", czas: 180,
    opis: `
<p>Na tablicy montażowej wykonaj układ zasilania i sterowania silnikiem indukcyjnym trójfazowym (400 V, 1,5 kW, In = 3,4 A).</p>
<ul><li>Zabezpieczenie: wyłącznik silnikowy lub wyłącznik nadprądowy C10 3P z przekaźnikiem termobimetalowym nastawionym na prąd znamionowy silnika.</li>
<li>Stycznik z cewką 230 V; sterowanie z dwóch miejsc — przyciski START (zielone) i STOP (czerwone); lampka sygnalizacyjna pracy silnika.</li>
<li>Przewody: obwody główne 1,5 mm², sterownicze 1 mm², z zachowaniem barw (L1 brązowy, L2 czarny, L3 szary, N niebieski, PE zielono-żółty).</li></ul>
<p>Narysuj schemat obwodu sterowania, zmontuj układ, wykonaj pomiar rezystancji izolacji i ciągłości przewodu ochronnego, uruchom pod nadzorem i zapisz protokół.</p>`,
    kryteria: [
      { grupa: "Rezultat 1: Schemat", pozycje: ["Przyciski STOP połączone szeregowo, START równolegle", "Styk zwierny stycznika podtrzymujący, równolegle do START", "Styk przekaźnika termicznego (rozwierny) w obwodzie cewki"] },
      { grupa: "Rezultat 2: Montaż", pozycje: ["Aparaty zamocowane zgodnie z rozmieszczeniem, na szynie TH35", "Barwy przewodów zgodne z treścią", "Końcówki linek zaciśnięte tulejkami, zaciski dokręcone", "Przekaźnik termiczny nastawiony na 3,4 A", "Obudowa silnika podłączona do PE"] },
      { grupa: "Rezultat 3: Pomiary i uruchomienie", pozycje: ["Rezystancja izolacji zmierzona napięciem 500 V DC, wynik ≥ 1 MΩ", "Ciągłość przewodu ochronnego potwierdzona", "Silnik startuje i zatrzymuje się z obu miejsc, lampka sygnalizuje pracę", "Protokół z wynikami i oceną"] },
      { grupa: "Przebieg", pozycje: ["Montaż przy odłączonym zasilaniu, sprawdzenie braku napięcia", "Porządek, odpady przewodów zebrane"] }
    ],
    rozwiazanie: `
<h4>Obwód sterowania (230 V)</h4>
<pre>L ── F (zabezpieczenie) ── styk 95-96 przekaźnika termicznego
   ── STOP1 (NC) ── STOP2 (NC) ──┬── START1 (NO) ──┬── A1 cewki K1 ── A2 ── N
                                 ├── START2 (NO) ──┤
                                 └── K1 13-14 (NO) ┘
lampka H1 równolegle do cewki (lub przez styk K1 23-24)</pre>
<div class="tip">Jeśli silnik startuje, ale nie trzyma po puszczeniu START — brak lub zły styk podtrzymania. Jeśli nie da się go zatrzymać jednym z przycisków — STOP podłączony równolegle zamiast szeregowo.</div>`
  });

  add("BUD.12", {
    tytul: "Fragment ściany z cegły z otworem i tynkiem",
    model: "w", czas: 180,
    opis: `
<p>Wymuruj fragment ściany o grubości 1 cegły (25 cm), długości 1,0 m i wysokości 8 warstw, w wiązaniu pospolitym (warstwy główkowe i wozówkowe na przemian), z otworem o szerokości 25 cm od 5. warstwy w górę (otwór w osi ściany). Zaprawa cementowo-wapienna 1 : 1 : 6.</p>
<ol><li>Oblicz zapotrzebowanie na cegły (przyjmij 100 szt./m² ściany grubości 1 cegły) i zaprawę (0,06 m³/m²).</li>
<li>Przygotuj zaprawę i stanowisko.</li>
<li>Wymuruj ścianę z zachowaniem wiązania, spoin, pionu i poziomu.</li>
<li>Na jednej stronie ściany wykonaj tynk kategorii II (obrzutka i narzut zatarty packą) na powierzchni 0,5 m².</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Obliczenia", pozycje: ["Powierzchnia: 1,0 m × 8 warstw po ok. 77 mm ≈ 0,62 m² → ok. 62 cegły (mały otwór nie jest potrącany, chyba że zadanie mówi inaczej)", "Zaprawa: 0,62 × 0,06 ≈ 0,037 m³"] },
      { grupa: "Rezultat 2: Mur", pozycje: ["Wiązanie pospolite zachowane — warstwy główkowe i wozówkowe na przemian", "Spoiny pionowe przesunięte o ¼ cegły", "Spoiny poziome 10–15 mm, pionowe 5–15 mm, całkowicie wypełnione", "Odchylenie od pionu i poziomu w granicach dopuszczalnych (sprawdzone poziomicą)", "Otwór o szerokości 25 cm w osi ściany, krawędzie pionowe"] },
      { grupa: "Rezultat 3: Tynk", pozycje: ["Podłoże zwilżone, obrzutka narzucona na całą powierzchnię", "Narzut wyrównany łatą i zatarty packą, grubość równomierna"] },
      { grupa: "Przebieg", pozycje: ["Rękawice, okulary przy przygotowaniu zaprawy", "Zaprawa wymieszana w proporcji 1 : 1 : 6 do jednolitej konsystencji", "Narzędzia umyte, stanowisko uprzątnięte"] }
    ],
    rozwiazanie: `
<div class="tip">W warstwie główkowej przy wiązaniu pospolitym na krawędziach stosuje się <b>ćwiartki lub dziewiątki</b> (cegły docięte), żeby przesunąć spoiny pionowe o ¼ cegły względem warstwy wozówkowej. Sznur murarski naciągaj na każdą warstwę między narożnikami.</div>
<p>Kontroluj pion co 2–3 warstwy. Nadmiar zaprawy zbieraj kielnią na bieżąco, zanim zwiąże.</p>`
  });

  add("FRK.01", {
    tytul: "Strzyżenie, koloryzacja odrostów i modelowanie",
    model: "w", czas: 180,
    opis: `
<p>Klientka ma włosy do ramion, naturalny poziom 6 (ciemny blond), 30% siwych włosów, odrost 2 cm, długości farbowane wcześniej na 7.3. Oczekuje odświeżenia koloru 7.3 i fryzury typu bob z lekkim cieniowaniem na tyle.</p>
<ol><li>Przeprowadź wywiad i diagnozę włosów i skóry głowy; wpisz je do karty klienta.</li>
<li>Dobierz farbę, oksydant i proporcje; wykonaj koloryzację odrostów, a w ostatnich minutach wyrównaj kolor na długościach.</li>
<li>Wykonaj strzyżenie bob z cieniowaniem tyłu.</li>
<li>Wymodeluj włosy szczotką i suszarką; doradź pielęgnację domową.</li></ol>`,
    kryteria: [
      { grupa: "Rezultat 1: Karta klienta", pozycje: ["Diagnoza: poziom naturalny 6, 30% siwizny, stan włosów i skóry", "Informacja o próbie uczuleniowej wykonanej 48 h wcześniej", "Zapis: farba 7.3 + dodatek koloru naturalnego 7.0 na siwe, oksydant 6%, proporcje, czas"] },
      { grupa: "Rezultat 2: Koloryzacja", pozycje: ["Farba nakładana najpierw na odrosty, separacje do 1 cm", "Długości tylko w końcowych 5–10 minutach (lub emulgowanie)", "Siwe włosy pokryte, kolor jednolity na całej długości", "Spłukanie, szampon po koloryzacji i odżywka zakwaszająca"] },
      { grupa: "Rezultat 3: Strzyżenie", pozycje: ["Pasmo prowadzące z tyłu, linia boba symetryczna", "Cieniowanie tyłu bez dziur i schodków", "Długości po obu stronach równe"] },
      { grupa: "Rezultat 4: Modelowanie", pozycje: ["Preparat termoochronny, włosy wymodelowane z objętością przy czubku", "Porada dotycząca kosmetyków do włosów farbowanych"] },
      { grupa: "Przebieg", pozycje: ["Zdezynfekowane narzędzia, peleryna i ręcznik dla klientki", "Rękawiczki przy koloryzacji, porządek na stanowisku"] }
    ],
    rozwiazanie: `
<ul><li>Na 30% siwych włosów do refleksu dodaje się kolor naturalny z tego samego poziomu (np. 7.3 : 7.0 = 2 : 1) — sam refleks złoty słabo kryje siwiznę.</li>
<li>Oksydant 6% — pokrycie siwizny i podniesienie o 1 ton (z 6 na 7).</li>
<li>Długości już farbowane nakłada się na końcu, żeby nie przyciemnić i nie przesuszyć końcówek.</li></ul>`
  });
})(window.KURSY);
