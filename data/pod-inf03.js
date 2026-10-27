/* Podkursy: INF.03 */
window.KURSY = window.KURSY || {};
(function (K) {
  function Q(p, a, b, c, d, w) { return { p: p, o: [a, b, c, d], k: 0, w: w || "" }; }
  function pod(kod, l) { if (K[kod]) K[kod].podkursy = (K[kod].podkursy || []).concat(l); }

  pod("INF.03", [
    {
      id: "html", tytul: "HTML5", opis: "Zbudujesz poprawny, semantyczny dokument HTML z tabelą, listami i formularzem, tak jak w arkuszu praktycznym.",
      lekcje: [
        { tytul: "Dokument, nagłówek i sekcje semantyczne", tresc: `
<h4>Obowiązkowy szkielet</h4>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="pl"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Biblioteka&lt;/title&gt;
  &lt;link rel="stylesheet" href="styl.css"&gt;
&lt;/head&gt;
&lt;body&gt; ... &lt;/body&gt;
&lt;/html&gt;</pre>
<p>W arkuszu CKE prawie zawsze jest polecenie typu: „tytuł strony widoczny na karcie przeglądarki: ...”. Chodzi o znacznik <code>&lt;title&gt;</code> w sekcji <code>&lt;head&gt;</code>, nie o nagłówek <code>&lt;h1&gt;</code>.</p>
<h4>Znaczniki semantyczne</h4>
<div class="tw"><table><tr><th>Znacznik</th><th>Przeznaczenie</th></tr>
<tr><td><code>&lt;header&gt;</code></td><td>baner, logo, tytuł strony</td></tr>
<tr><td><code>&lt;nav&gt;</code></td><td>menu, odnośniki nawigacyjne</td></tr>
<tr><td><code>&lt;main&gt;</code></td><td>główna treść (jeden na stronie)</td></tr>
<tr><td><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code></td><td>sekcja tematyczna, samodzielny artykuł</td></tr>
<tr><td><code>&lt;aside&gt;</code></td><td>panel boczny</td></tr>
<tr><td><code>&lt;footer&gt;</code></td><td>stopka, autor, prawa autorskie</td></tr></table></div>
<p>Na egzaminie bloki często mają być zrobione jako <code>&lt;div&gt;</code> z identyfikatorami (np. <code>id="lewy"</code>). Jeśli arkusz podaje konkretne nazwy, użyj dokładnie ich, wielkość liter ma znaczenie w CSS.</p>
<h4>Encje i znaki specjalne</h4>
<p><code>&amp;lt;</code> to &lt;, <code>&amp;gt;</code> to &gt;, <code>&amp;amp;</code> to &amp;, <code>&amp;nbsp;</code> to twarda spacja, <code>&amp;copy;</code> to ©.</p>
<div class="tip">Walidator W3C (validator.w3.org) zgłasza błąd, gdy znaczniki są źle zagnieżdżone, np. <code>&lt;b&gt;&lt;i&gt;tekst&lt;/b&gt;&lt;/i&gt;</code>. Zamykaj w odwrotnej kolejności.</div>` },
        { tytul: "Odnośniki, obrazy, listy i tabele", tresc: `
<h4>Odnośniki</h4>
<pre>&lt;a href="kontakt.html"&gt;Kontakt&lt;/a&gt;
&lt;a href="https://cke.gov.pl" target="_blank"&gt;CKE&lt;/a&gt;
&lt;a href="mailto:biuro@firma.pl"&gt;Napisz&lt;/a&gt;
&lt;a href="#cennik"&gt;Do cennika&lt;/a&gt;  &lt;!-- kotwica do id="cennik" --&gt;</pre>
<h4>Obraz</h4>
<p><code>&lt;img src="kot.jpg" alt="kot na kanapie" width="200"&gt;</code>. Atrybut <code>alt</code> jest wymagany, wyświetla się, gdy obraz się nie wczyta, i czytają go czytniki ekranu. Obraz jako odnośnik: <code>&lt;a href="duzy.jpg"&gt;&lt;img src="maly.jpg" alt="..."&gt;&lt;/a&gt;</code>.</p>
<h4>Listy</h4>
<ul><li><code>&lt;ul&gt;</code> punktowana, <code>&lt;ol&gt;</code> numerowana (<code>type="a"</code>, <code>type="I"</code>, <code>start="5"</code>, <code>reversed</code>)</li>
<li>lista zagnieżdżona: wewnętrzne <code>&lt;ul&gt;</code> wstawiasz do środka <code>&lt;li&gt;</code></li>
<li><code>&lt;dl&gt;&lt;dt&gt;termin&lt;/dt&gt;&lt;dd&gt;opis&lt;/dd&gt;&lt;/dl&gt;</code> lista definicji</li></ul>
<h4>Tabela</h4>
<pre>&lt;table&gt;
  &lt;tr&gt;&lt;th&gt;Produkt&lt;/th&gt;&lt;th&gt;Cena&lt;/th&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td colspan="2"&gt;Owoce&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Jabłko&lt;/td&gt;&lt;td&gt;3 zł&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>
<p><code>colspan</code> scala komórki w poziomie (kolumny), <code>rowspan</code> w pionie (wiersze). Wiersz z <code>colspan="2"</code> ma tylko jedną komórkę zamiast dwóch.</p>
<div class="tip">Typowe pytanie: ile komórek <code>&lt;td&gt;</code> zawiera wiersz, gdy jedna ma <code>colspan="3"</code> w tabeli o 4 kolumnach? Odpowiedź: 2.</div>` },
        { tytul: "Formularze i ich walidacja", tresc: `
<h4>Budowa formularza</h4>
<pre>&lt;form action="dodaj.php" method="post"&gt;
  &lt;label for="im"&gt;Imię:&lt;/label&gt;
  &lt;input type="text" id="im" name="imie" required&gt;
  &lt;input type="email" name="mail" placeholder="adres e-mail"&gt;
  &lt;input type="password" name="haslo" minlength="8"&gt;
  &lt;input type="number" name="ile" min="1" max="10" step="1" value="1"&gt;
  &lt;input type="date" name="termin"&gt;
  &lt;input type="radio" name="dost" value="kurier" checked&gt; Kurier
  &lt;input type="radio" name="dost" value="paczkomat"&gt; Paczkomat
  &lt;input type="checkbox" name="zgoda"&gt; Zgoda
  &lt;select name="kat"&gt;&lt;option value="1"&gt;Książki&lt;/option&gt;&lt;/select&gt;
  &lt;textarea name="uwagi" rows="4" cols="40"&gt;&lt;/textarea&gt;
  &lt;input type="submit" value="Wyślij"&gt; &lt;input type="reset" value="Wyczyść"&gt;
&lt;/form&gt;</pre>
<h4>Najważniejsze reguły</h4>
<ul><li>Do PHP trafia wartość pod kluczem z atrybutu <code>name</code>, nie <code>id</code>.</li>
<li>Przyciski radio tworzą grupę, gdy mają ten sam <code>name</code>: wtedy można zaznaczyć tylko jeden.</li>
<li><code>required</code>, <code>min</code>, <code>max</code>, <code>pattern</code>, <code>maxlength</code> sprawdza przeglądarka przed wysłaniem.</li>
<li><code>&lt;label for="x"&gt;</code> wiąże opis z polem o <code>id="x"</code>; kliknięcie w opis zaznacza pole.</li>
<li><code>method="get"</code> dopisuje dane do adresu: <code>dodaj.php?imie=Jan&amp;ile=2</code>.</li></ul>
<div class="tip">Formularz, który w JavaScripcie ma tylko obliczyć wynik bez przeładowania, nie potrzebuje <code>&lt;form&gt;</code>: wystarczy pole i <code>&lt;button onclick="licz()"&gt;</code>.</div>` }
      ],
      pytania: [
        Q("Tytuł wyświetlany na karcie przeglądarki określa znacznik", "<title> w sekcji <head>", "<h1> w sekcji <body>", "<header>", "<meta name=\"title\">", ""),
        Q("Atrybut, który scala dwie komórki tabeli w pionie, to", "rowspan=\"2\"", "colspan=\"2\"", "cellspan=\"2\"", "merge=\"2\"", "rowspan łączy wiersze, colspan kolumny."),
        Q("Dane pola formularza są dostępne w PHP pod kluczem odpowiadającym atrybutowi", "name", "id", "class", "value", ""),
        Q("Aby z grupy przycisków typu radio można było zaznaczyć tylko jeden, muszą one mieć", "ten sam atrybut name", "ten sam atrybut id", "różne atrybuty name", "atrybut multiple", "Identyfikatory na stronie muszą być unikalne."),
        Q("Odnośnik otwierający stronę w nowej karcie zawiera atrybut", "target=\"_blank\"", "target=\"_self\"", "rel=\"new\"", "href=\"_new\"", ""),
        Q("Znacznik przeznaczony na główną treść dokumentu HTML5 to", "<main>", "<aside>", "<nav>", "<footer>", ""),
        Q("Tekst wyświetlany, gdy obraz nie może zostać wczytany, podaje się w atrybucie", "alt", "title", "src", "longdesc", ""),
        Q("Lista numerowana cyframi rzymskimi zaczynająca się od III to", "<ol type=\"I\" start=\"3\">", "<ul type=\"I\" start=\"3\">", "<ol type=\"i\" start=\"III\">", "<ol style=\"roman\" from=\"3\">", "")
      ]
    },
    {
      id: "css", tytul: "CSS3", opis: "Ostylujesz stronę według arkusza: selektory, kolory, czcionki, marginesy, układ bloków i stany odnośników.",
      lekcje: [
        { tytul: "Selektory, kaskada i specyficzność", tresc: `
<h4>Rodzaje selektorów</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Co wybiera</th></tr>
<tr><td><code>*</code></td><td>wszystkie elementy</td></tr>
<tr><td><code>h2</code></td><td>wszystkie nagłówki h2</td></tr>
<tr><td><code>.cena</code></td><td>elementy z <code>class="cena"</code></td></tr>
<tr><td><code>#menu</code></td><td>element z <code>id="menu"</code></td></tr>
<tr><td><code>nav a</code></td><td>odnośniki gdziekolwiek wewnątrz nav</td></tr>
<tr><td><code>ul &gt; li</code></td><td>tylko bezpośrednie dzieci</td></tr>
<tr><td><code>h1 + p</code></td><td>akapit tuż za h1</td></tr>
<tr><td><code>tr:nth-child(even)</code></td><td>parzyste wiersze (paski w tabeli)</td></tr>
<tr><td><code>a:hover</code>, <code>a:visited</code></td><td>odnośnik wskazany myszą, odwiedzony</td></tr>
<tr><td><code>p::first-letter</code></td><td>pierwsza litera akapitu (inicjał)</td></tr></table></div>
<h4>Która reguła wygrywa</h4>
<ol><li><code>!important</code></li><li>styl w atrybucie <code>style=""</code></li><li>identyfikator <code>#id</code></li><li>klasa, pseudoklasa, atrybut</li><li>znacznik</li></ol>
<p>Przy równej specyficzności wygrywa reguła zapisana później. Kolejność pseudoklas odnośnika: <b>:link, :visited, :hover, :active</b> (skrót LoVe HAte).</p>
<div class="tip">Kilka selektorów z tą samą regułą rozdzielasz przecinkiem: <code>h1, h2, h3 { color: navy; }</code>. Spacja zamiast przecinka oznacza zagnieżdżenie, to częsty błąd.</div>` },
        { tytul: "Tekst, kolory, tło, ramki", tresc: `
<h4>Kolor</h4>
<p>Zapis <code>#RRGGBB</code> (np. <code>#FF0000</code> czerwony, <code>#000</code> czarny, <code>#FFF</code> biały), <code>rgb(255, 0, 0)</code>, <code>rgba(0,0,0,0.5)</code> z przezroczystością, nazwy: <code>Teal</code>, <code>SteelBlue</code>, <code>MistyRose</code>. CKE często podaje kolor nazwą: wpisz ją dosłownie.</p>
<h4>Tekst i czcionka</h4>
<pre>body { font-family: Tahoma, sans-serif; font-size: 120%; }
h1 { font-weight: bold; text-transform: uppercase; letter-spacing: 3px; }
p { text-align: justify; line-height: 1.5; text-indent: 20px; }
a { text-decoration: none; }  /* bez podkreślenia */
em { font-style: italic; }</pre>
<h4>Tło i ramki</h4>
<pre>header { background-color: #4D7298; background-image: url("tlo.png");
         background-repeat: no-repeat; }
img { border: 2px solid DarkRed; border-radius: 10px; }
#box { box-shadow: 5px 5px 10px gray; }</pre>
<p><code>border-radius: 50%</code> na kwadratowym obrazie daje koło. Skrót <code>border</code> to grubość, styl (<code>solid</code>, <code>dashed</code>, <code>dotted</code>, <code>double</code>) i kolor.</p>
<h4>Marginesy</h4>
<p>Jedna wartość: wszystkie boki. Dwie: góra/dół, lewo/prawo. Cztery: góra, prawo, dół, lewo. <code>margin: 0 auto</code> wyśrodkowuje blok o ustalonej szerokości.</p>` },
        { tytul: "Układ bloków: float, flex, grid, responsywność", tresc: `
<h4>Typowy układ z arkusza CKE</h4>
<p>Baner na całą szerokość, pod nim dwa lub trzy bloki obok siebie, na dole stopka. Klasyczne rozwiązanie na egzaminie:</p>
<pre>#lewy  { float: left; width: 30%; height: 500px; }
#prawy { float: left; width: 70%; height: 500px; }
footer { clear: both; }</pre>
<p>Uwaga: szerokość liczy się bez paddingu i ramki. Jeśli blok ma 30% i <code>padding: 10px</code>, suma przekroczy 100% i blok spadnie pod spód. Rozwiązanie: <code>box-sizing: border-box;</code>.</p>
<h4>Flexbox</h4>
<pre>main { display: flex; }          /* dzieci w rzędzie */
nav  { display: flex; justify-content: space-between; align-items: center; }
.kol { flex: 1; }                /* równe kolumny */</pre>
<h4>Grid</h4>
<pre>.galeria { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }</pre>
<h4>Responsywność</h4>
<pre>@media (max-width: 600px) {
  #lewy, #prawy { width: 100%; float: none; }
}</pre>
<p>Pozycjonowanie: <code>position: relative</code> (przesunięcie względem siebie), <code>absolute</code> (względem najbliższego przodka z pozycją), <code>fixed</code> (względem okna, nie przewija się), <code>sticky</code>.</p>
<div class="tip"><code>display: none</code> usuwa element z układu, <code>visibility: hidden</code> ukrywa go, ale zostawia puste miejsce.</div>` }
      ],
      pytania: [
        Q("Która reguła ma najwyższą specyficzność (bez !important)?", "#menu", ".menu", "nav", "*", "Identyfikator ma wyższą wagę niż klasa i znacznik."),
        Q("Zapis margin: 10px 20px; ustawia", "10px góra i dół, 20px lewo i prawo", "10px lewo i prawo, 20px góra i dół", "10px góra, 20px dół", "10px wszystkie boki, 20px wewnątrz", ""),
        Q("Aby co drugi wiersz tabeli miał inne tło, użyjesz selektora", "tr:nth-child(even)", "tr:first-child", "tr + tr", "tr::after", ""),
        Q("Właściwość usuwająca podkreślenie odnośników to", "text-decoration: none", "font-style: normal", "text-transform: none", "border: none", ""),
        Q("Element ukryty przez visibility: hidden", "nie jest widoczny, ale zajmuje miejsce", "jest usunięty z układu strony", "jest półprzezroczysty", "nie może mieć ustalonych wymiarów", "display: none usuwa element z układu."),
        Q("Właściwość sprawiająca, że padding i ramka wliczają się do width, to", "box-sizing: border-box", "box-sizing: content-box", "overflow: hidden", "display: inline", ""),
        Q("Zapis koloru #FFFFFF oznacza", "biały", "czarny", "czerwony", "szary 50%", ""),
        Q("Reguła @media (max-width: 600px) zadziała, gdy okno ma szerokość", "600 px lub mniej", "większą niż 600 px", "dokładnie 600 px i tylko wtedy", "dowolną, ale tylko przy wydruku", "")
      ]
    },
    {
      id: "js", tytul: "JavaScript", opis: "Napiszesz skrypt, który pobiera dane z formularza, liczy wynik i zmienia zawartość strony, czyli typowe zadanie z arkusza.",
      lekcje: [
        { tytul: "Zmienne, typy, operatory, warunki", tresc: `
<h4>Deklaracje</h4>
<pre>let ile = 5;          // można zmieniać
const VAT = 0.23;     // stała
var stara = "tekst";  // dawny sposób, zasięg funkcji</pre>
<h4>Typy i konwersje</h4>
<p>Typy: <code>number</code>, <code>string</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>object</code>. Wartość z pola formularza jest zawsze <b>tekstem</b>, więc <code>"2" + "3"</code> daje <code>"23"</code>. Zamień na liczbę: <code>Number(x)</code>, <code>parseInt(x)</code>, <code>parseFloat(x)</code>.</p>
<h4>Operatory</h4>
<div class="tw"><table><tr><th>Operator</th><th>Znaczenie</th></tr>
<tr><td><code>%</code></td><td>reszta z dzielenia: <code>7 % 3</code> to 1</td></tr>
<tr><td><code>==</code> / <code>===</code></td><td>równość z konwersją / bez konwersji (<code>"5" == 5</code> true, <code>"5" === 5</code> false)</td></tr>
<tr><td><code>&amp;&amp;</code>, <code>||</code>, <code>!</code></td><td>i, lub, nie</td></tr>
<tr><td><code>++</code>, <code>+=</code></td><td>zwiększenie o 1, dodanie do zmiennej</td></tr></table></div>
<h4>Warunki</h4>
<pre>if (wiek &gt;= 18) { ... } else if (wiek &gt;= 13) { ... } else { ... }
switch (dzien) { case 1: txt = "pon"; break; default: txt = "?"; }
let opis = (n % 2 == 0) ? "parzysta" : "nieparzysta";</pre>` },
        { tytul: "Pętle, tablice i funkcje", tresc: `
<h4>Pętle</h4>
<pre>for (let i = 1; i &lt;= 10; i++) { suma += i; }
while (x &gt; 0) { x = x - 3; }
do { n++; } while (n &lt; 5);   // wykona się co najmniej raz</pre>
<h4>Tablice</h4>
<pre>let t = [4, 8, 15];
t.push(16);        // dodaj na koniec
t.length;          // 4
t[0];              // 4, indeksy od zera
t.sort((a, b) =&gt; a - b);   // sortowanie liczbowe
t.forEach(x =&gt; console.log(x));</pre>
<p>Bez funkcji porównującej <code>sort()</code> porządkuje jak tekst: <code>[10, 9, 1].sort()</code> daje <code>[1, 10, 9]</code>.</p>
<h4>Funkcje</h4>
<pre>function brutto(netto) { return netto * 1.23; }
const pole = (a, b) =&gt; a * b;</pre>
<h4>Przydatne metody</h4>
<p><code>Math.round()</code>, <code>Math.floor()</code>, <code>Math.random()</code> (0 do 1), <code>x.toFixed(2)</code> (2 miejsca po przecinku, wynik tekstowy), <code>tekst.length</code>, <code>tekst.toUpperCase()</code>, <code>tekst.charAt(0)</code>.</p>
<div class="tip">Losowa liczba całkowita od 1 do 6: <code>Math.floor(Math.random() * 6) + 1</code>.</div>` },
        { tytul: "DOM i zdarzenia: obsługa strony", tresc: `
<h4>Pobranie i zmiana elementów</h4>
<pre>let pole = document.getElementById("cena");
let wartosc = Number(pole.value);           // pole formularza
document.getElementById("wynik").innerHTML = "Koszt: " + wartosc * 2 + " zł";
document.querySelector(".info").style.color = "red";
document.getElementById("foto").src = "kot2.jpg";
let zazn = document.getElementById("zgoda").checked;   // checkbox: true/false</pre>
<h4>Zdarzenia</h4>
<pre>&lt;button onclick="oblicz()"&gt;Oblicz&lt;/button&gt;
&lt;img src="a.jpg" onmouseover="zmien()" onmouseout="wroc()"&gt;
document.getElementById("b").addEventListener("click", oblicz);</pre>
<p>Inne zdarzenia: <code>onchange</code> (zmiana wartości pola), <code>oninput</code> (każdy znak), <code>onload</code> (strona wczytana), <code>onsubmit</code>.</p>
<h4>Wzór rozwiązania z arkusza</h4>
<pre>function oblicz() {
  let kg = Number(document.getElementById("waga").value);
  let ekspres = document.getElementById("ekspres").checked;
  let koszt = kg * 4;
  if (ekspres) koszt += 15;
  document.getElementById("wynik").innerHTML = "Do zapłaty: " + koszt + " zł";
}</pre>
<div class="tip"><code>innerHTML</code> interpretuje znaczniki, <code>textContent</code> wstawia czysty tekst. <code>alert()</code> okno komunikatu, <code>prompt()</code> okno do wpisania, <code>console.log()</code> konsola (F12).</div>` }
      ],
      pytania: [
        Q("Wynik wyrażenia \"2\" + 3 w JavaScript to", "\"23\"", "5", "błąd", "NaN", "Łączenie z tekstem daje tekst."),
        Q("Operator === porównuje", "wartość i typ", "tylko wartość", "tylko typ", "adresy w pamięci liczb", ""),
        Q("Wartość wpisaną w pole <input id=\"a\"> pobierzesz zapisem", "document.getElementById(\"a\").value", "document.getElementById(\"a\").innerHTML", "document.getElementByName(\"a\")", "getValue(\"a\")", ""),
        Q("Stan zaznaczenia pola typu checkbox odczytuje właściwość", "checked", "value", "selected", "status", ""),
        Q("Wynik działania 17 % 5 to", "2", "3", "3.4", "12", "% to reszta z dzielenia."),
        Q("Pętla, która wykona się co najmniej jeden raz, to", "do...while", "while", "for", "for...in na pustej tablicy", ""),
        Q("Zdarzenie wywoływane po najechaniu kursorem na element to", "onmouseover", "onclick", "onchange", "onload", ""),
        Q("Liczbę 3.14159 zaokrągloną do dwóch miejsc po przecinku zwróci", "x.toFixed(2)", "Math.round(x, 2)", "x.round(2)", "parseInt(x, 2)", "parseInt(x, 2) interpretuje tekst w systemie dwójkowym.")
      ]
    },
    {
      id: "php", tytul: "PHP", opis: "Napiszesz skrypt PHP, który łączy się z bazą MySQL, wykonuje zapytanie i wyświetla wyniki na stronie.",
      lekcje: [
        { tytul: "Składnia PHP, zmienne, tablice", tresc: `
<h4>Podstawy</h4>
<pre>&lt;?php
$imie = "Anna";             // zmienne zaczynają się od $
$wiek = 17;
echo "Witaj, $imie!";       // w cudzysłowach zmienne są podstawiane
echo 'Bez $podstawiania';   // w apostrofach nie
echo $imie . " ma " . $wiek . " lat";   // łączenie kropką
?&gt;</pre>
<h4>Warunki i pętle</h4>
<pre>if ($wiek &gt;= 18) { echo "pełnoletni"; } elseif ($wiek &gt; 15) { ... } else { ... }
for ($i = 1; $i &lt;= 5; $i++) { echo "$i "; }
while ($w = mysqli_fetch_row($wynik)) { ... }</pre>
<h4>Tablice</h4>
<pre>$owoce = ["jabłko", "gruszka"];
$owoce[] = "śliwka";              // dopisanie
$osoba = ["imie" =&gt; "Jan", "wiek" =&gt; 30];   // tablica asocjacyjna
foreach ($osoba as $klucz =&gt; $wartosc) { echo "$klucz: $wartosc&lt;br&gt;"; }
count($owoce);   // 3</pre>
<h4>Dane z formularza</h4>
<p><code>$_POST["imie"]</code> dla <code>method="post"</code>, <code>$_GET["id"]</code> dla parametrów w adresie. Przed użyciem sprawdź: <code>if (!empty($_POST["imie"])) { ... }</code> albo <code>isset()</code>.</p>
<div class="tip">Plik z kodem PHP musi mieć rozszerzenie .php i być uruchomiony przez serwer (XAMPP: folder htdocs, adres localhost/...), a nie otwarty dwuklikiem.</div>` },
        { tytul: "Połączenie z MySQL (mysqli)", tresc: `
<h4>Schemat, który działa na każdym egzaminie</h4>
<pre>&lt;?php
$polaczenie = mysqli_connect("localhost", "root", "", "biblioteka");
$zapytanie = "SELECT tytul, autor FROM ksiazki WHERE rok &gt; 2000;";
$wynik = mysqli_query($polaczenie, $zapytanie);
while ($wiersz = mysqli_fetch_array($wynik)) {
    echo "&lt;p&gt;" . $wiersz["tytul"] . ", " . $wiersz["autor"] . "&lt;/p&gt;";
}
mysqli_close($polaczenie);
?&gt;</pre>
<h4>Funkcje pobierające wiersz</h4>
<div class="tw"><table><tr><th>Funkcja</th><th>Dostęp do kolumn</th></tr>
<tr><td><code>mysqli_fetch_row</code></td><td>tylko indeksy: <code>$w[0]</code></td></tr>
<tr><td><code>mysqli_fetch_assoc</code></td><td>tylko nazwy: <code>$w["tytul"]</code></td></tr>
<tr><td><code>mysqli_fetch_array</code></td><td>indeksy i nazwy</td></tr></table></div>
<p>Liczba wierszy wyniku: <code>mysqli_num_rows($wynik)</code>. Zapytania INSERT, UPDATE, DELETE też wykonujesz przez <code>mysqli_query</code>, wynik to true lub false.</p>
<h4>Wstawianie danych z formularza</h4>
<pre>$t = $_POST["tytul"];
mysqli_query($polaczenie, "INSERT INTO ksiazki (tytul) VALUES ('$t');");</pre>
<div class="tip">W kryteriach CKE zwykle jest punkt za zamknięcie połączenia (<code>mysqli_close</code>). Nie zapominaj o nim.</div>` },
        { tytul: "Funkcje, daty, bezpieczeństwo, sesje", tresc: `
<h4>Funkcje własne i wbudowane</h4>
<pre>function brutto($netto, $vat = 23) { return $netto * (1 + $vat / 100); }
echo strlen("kot");          // 3
echo strtoupper("abc");      // ABC
echo date("Y-m-d");          // dzisiejsza data, np. 2026-10-27
echo round(3.456, 2);        // 3.46
echo rand(1, 10);</pre>
<h4>Dołączanie plików</h4>
<p><code>include "menu.php";</code> przy braku pliku daje ostrzeżenie i skrypt działa dalej, <code>require</code> kończy skrypt błędem.</p>
<h4>Sesje i ciasteczka</h4>
<pre>session_start();               // na początku, przed jakimkolwiek wyjściem HTML
$_SESSION["login"] = "anna";
setcookie("motyw", "ciemny", time() + 3600);   // ważne godzinę
echo $_COOKIE["motyw"];</pre>
<h4>Bezpieczeństwo</h4>
<ul><li><b>SQL injection</b>: dane z formularza wklejone do zapytania mogą je zmienić. Ochrona: <code>mysqli_real_escape_string()</code> albo zapytania przygotowane (<code>prepare</code>, <code>bind_param</code>).</li>
<li><b>XSS</b>: wyświetlając dane od użytkownika, użyj <code>htmlspecialchars()</code>.</li>
<li>Hasła zapisuj jako skrót: <code>password_hash()</code>, sprawdzaj <code>password_verify()</code>. Funkcja <code>md5()</code> jest przestarzała.</li></ul>` }
      ],
      pytania: [
        Q("W PHP do łączenia napisów służy operator", ".", "+", "&", "concat", ""),
        Q("Funkcja zwracająca wiersz wyniku wyłącznie jako tablicę asocjacyjną to", "mysqli_fetch_assoc", "mysqli_fetch_row", "mysqli_num_rows", "mysqli_query", ""),
        Q("Liczbę wierszy zwróconych przez zapytanie SELECT podaje funkcja", "mysqli_num_rows", "mysqli_affected_rows dla SELECT zawsze 0", "count_rows", "mysqli_fetch_length", ""),
        Q("Dane z formularza wysłanego metodą POST odczytasz z tablicy", "$_POST", "$_GET", "$_SESSION", "$_SERVER", ""),
        Q("Instrukcja dołączająca plik, której brak pliku przerywa działanie skryptu, to", "require", "include", "import", "echo", ""),
        Q("Przed zapisem do zmiennej $_SESSION należy wywołać", "session_start()", "session_destroy()", "setcookie()", "header()", ""),
        Q("Ochronę przed atakiem XSS przy wyświetlaniu danych użytkownika zapewnia funkcja", "htmlspecialchars()", "mysqli_connect()", "strlen()", "date()", ""),
        Q("Wynik echo \"Ala $x\"; gdy $x = 5, to", "Ala 5", "Ala $x", "błąd składni", "Ala", "W apostrofach wyświetliłoby się Ala $x.")
      ]
    },
    {
      id: "sql", tytul: "SQL i MySQL", opis: "Ułożysz każde zapytanie z arkusza: wybieranie, filtrowanie, sortowanie, funkcje agregujące, złączenia i zmiany danych.",
      lekcje: [
        { tytul: "SELECT: filtrowanie i sortowanie", tresc: `
<h4>Kolejność klauzul</h4>
<pre>SELECT kolumny FROM tabela
WHERE warunek
GROUP BY kolumna
HAVING warunek_na_grupach
ORDER BY kolumna ASC|DESC
LIMIT n;</pre>
<h4>Warunki w WHERE</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Znaczenie</th></tr>
<tr><td><code>cena BETWEEN 10 AND 20</code></td><td>od 10 do 20 włącznie</td></tr>
<tr><td><code>miasto IN ('Kraków', 'Gdańsk')</code></td><td>jedna z wartości</td></tr>
<tr><td><code>nazwisko LIKE 'K%'</code></td><td>zaczyna się na K (<code>%</code> dowolny ciąg, <code>_</code> jeden znak)</td></tr>
<tr><td><code>email IS NULL</code></td><td>brak wartości (nie <code>= NULL</code>!)</td></tr>
<tr><td><code>a &lt;&gt; b</code></td><td>różne</td></tr></table></div>
<h4>Przykłady</h4>
<pre>SELECT imie, nazwisko FROM uczniowie WHERE klasa = '3A' ORDER BY nazwisko;
SELECT DISTINCT miasto FROM klienci;            -- bez powtórzeń
SELECT tytul AS 'Tytuł' FROM filmy LIMIT 5;     -- alias kolumny
SELECT * FROM produkty ORDER BY cena DESC LIMIT 3;   -- 3 najdroższe</pre>
<div class="tip">Teksty i daty ujmuj w apostrofy: <code>'2024-05-01'</code>. Liczby bez apostrofów.</div>` },
        { tytul: "Funkcje agregujące i JOIN", tresc: `
<h4>Agregacja</h4>
<p><code>COUNT(*)</code> liczba wierszy, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, <code>MAX()</code>.</p>
<pre>SELECT COUNT(*) FROM wypozyczenia WHERE zwrot IS NULL;
SELECT klasa, AVG(ocena) AS srednia FROM oceny GROUP BY klasa;
SELECT autor, COUNT(*) FROM ksiazki GROUP BY autor HAVING COUNT(*) &gt; 2;</pre>
<p><b>WHERE</b> filtruje wiersze przed grupowaniem, <b>HAVING</b> filtruje gotowe grupy (może używać funkcji agregujących).</p>
<h4>Złączenia tabel</h4>
<pre>SELECT k.tytul, a.nazwisko
FROM ksiazki k JOIN autorzy a ON k.autor_id = a.id;

-- to samo w starym zapisie
SELECT ksiazki.tytul, autorzy.nazwisko FROM ksiazki, autorzy
WHERE ksiazki.autor_id = autorzy.id;</pre>
<ul><li><code>INNER JOIN</code> (lub sam <code>JOIN</code>): tylko pasujące pary</li>
<li><code>LEFT JOIN</code>: wszystkie wiersze z lewej tabeli, brak pary daje NULL</li>
<li><code>RIGHT JOIN</code>: wszystkie z prawej</li></ul>
<div class="tip">Klucz obcy w jednej tabeli (np. <code>autor_id</code>) wskazuje klucz główny w drugiej (<code>autorzy.id</code>). Warunek ON zawsze łączy te dwie kolumny.</div>` },
        { tytul: "Zmiany danych, struktura i uprawnienia", tresc: `
<h4>DML: zmiana danych</h4>
<pre>INSERT INTO klienci (imie, miasto) VALUES ('Ola', 'Łódź');
UPDATE produkty SET cena = cena * 1.1 WHERE kategoria = 2;
DELETE FROM zamowienia WHERE data &lt; '2020-01-01';</pre>
<p>UPDATE i DELETE bez WHERE zmieniają <b>wszystkie</b> wiersze.</p>
<h4>DDL: struktura</h4>
<pre>CREATE TABLE ksiazki (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tytul VARCHAR(100) NOT NULL,
  cena DECIMAL(6,2),
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES autorzy(id)
);
ALTER TABLE ksiazki ADD rok YEAR;
ALTER TABLE ksiazki DROP COLUMN rok;
DROP TABLE ksiazki;</pre>
<h4>DCL: użytkownicy i uprawnienia</h4>
<pre>CREATE USER 'jan'@'localhost' IDENTIFIED BY 'Haslo1!';
GRANT SELECT, INSERT ON sklep.* TO 'jan'@'localhost';
REVOKE INSERT ON sklep.* FROM 'jan'@'localhost';</pre>
<h4>Typy danych MySQL</h4>
<p><code>INT</code>, <code>TINYINT</code>, <code>DECIMAL(m,d)</code> (kwoty), <code>FLOAT</code>, <code>CHAR(n)</code> (stała długość), <code>VARCHAR(n)</code>, <code>TEXT</code>, <code>DATE</code>, <code>DATETIME</code>, <code>BOOLEAN</code>.</p>
<div class="tip">Eksport bazy do pliku .sql robisz w phpMyAdmin: zakładka Eksport. W arkuszu trzeba zwykle zrobić zrzut ekranu wyniku każdego zapytania.</div>` }
      ],
      pytania: [
        Q("Aby wybrać nazwiska zaczynające się na literę N, użyjesz warunku", "nazwisko LIKE 'N%'", "nazwisko = 'N%'", "nazwisko LIKE '%N'", "nazwisko IN ('N')", ""),
        Q("Warunek na wynik funkcji agregującej po grupowaniu umieszcza się w klauzuli", "HAVING", "WHERE", "ORDER BY", "LIMIT", ""),
        Q("Zapytanie zwracające trzy najtańsze produkty to", "SELECT * FROM produkty ORDER BY cena ASC LIMIT 3;", "SELECT * FROM produkty ORDER BY cena DESC LIMIT 3;", "SELECT TOP 3 FROM produkty;", "SELECT * FROM produkty WHERE cena < 3;", ""),
        Q("Kolumny bez wartości wybierzesz warunkiem", "email IS NULL", "email = NULL", "email == ''", "email NOT EXISTS", ""),
        Q("Złączenie zwracające wszystkie wiersze tabeli z lewej strony, także bez pary, to", "LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SELF JOIN", ""),
        Q("Polecenie nadające użytkownikowi uprawnienia do bazy to", "GRANT", "REVOKE", "ALTER", "COMMIT", ""),
        Q("Typ danych najlepszy do zapisu kwot pieniężnych to", "DECIMAL(8,2)", "FLOAT", "VARCHAR(8)", "INT", "DECIMAL nie gubi groszy przez zaokrąglenia."),
        Q("Polecenie DELETE FROM klienci; bez klauzuli WHERE", "usunie wszystkie wiersze tabeli", "usunie tabelę razem ze strukturą", "nic nie zrobi", "zgłosi błąd składni", "Usunięcie struktury to DROP TABLE.")
      ]
    },
    {
      id: "bazy", tytul: "Projektowanie baz danych", opis: "Zaprojektujesz bazę relacyjną: encje, klucze, relacje, normalizację i integralność danych.",
      lekcje: [
        { tytul: "Model relacyjny i klucze", tresc: `
<h4>Pojęcia</h4>
<ul><li><b>Encja</b>: obiekt, o którym zbieramy dane (Klient, Książka). W bazie staje się tabelą.</li>
<li><b>Atrybut</b>: cecha encji, kolumna tabeli. <b>Krotka</b>: jeden wiersz (rekord).</li>
<li><b>Klucz główny (PRIMARY KEY)</b>: jednoznacznie identyfikuje wiersz, unikalny i niepusty.</li>
<li><b>Klucz obcy (FOREIGN KEY)</b>: kolumna wskazująca klucz główny innej tabeli, tworzy relację.</li>
<li><b>Klucz kandydujący</b>: każdy zestaw kolumn, który mógłby być kluczem głównym (np. PESEL).</li>
<li><b>Klucz złożony</b>: klucz główny z kilku kolumn.</li></ul>
<h4>Rodzaje relacji</h4>
<div class="tw"><table><tr><th>Relacja</th><th>Przykład</th><th>Realizacja</th></tr>
<tr><td>1:1</td><td>osoba i dowód osobisty</td><td>klucz obcy z ograniczeniem UNIQUE</td></tr>
<tr><td>1:N</td><td>klasa i uczniowie</td><td>klucz obcy po stronie „wiele” (uczniowie.klasa_id)</td></tr>
<tr><td>N:M</td><td>uczniowie i przedmioty</td><td>tabela pośrednicząca z dwoma kluczami obcymi</td></tr></table></div>
<div class="tip">Na diagramie ERD relacja 1:N jest rysowana jako linia z „kurzą łapką” po stronie wiele. W phpMyAdmin relacje ustawiasz w widoku Struktura, przycisk Widok relacji.</div>` },
        { tytul: "Normalizacja: 1NF, 2NF, 3NF", tresc: `
<h4>Po co normalizować</h4>
<p>Celem jest usunięcie powtórzeń (redundancji) i anomalii: aktualizacji (zmiana w jednym miejscu, a stara wartość zostaje w innym), wstawiania i usuwania.</p>
<h4>Postacie normalne</h4>
<ol><li><b>1NF</b>: każda komórka zawiera jedną, niepodzielną wartość, brak powtarzających się grup. Kolumna „telefony: 501..., 602...” łamie 1NF.</li>
<li><b>2NF</b>: 1NF i każdy atrybut niekluczowy zależy od <b>całego</b> klucza głównego (problem dotyczy kluczy złożonych).</li>
<li><b>3NF</b>: 2NF i brak zależności przechodnich: atrybut niekluczowy nie zależy od innego atrybutu niekluczowego. Przykład złamania: tabela Pracownicy z kolumnami dzial_id i nazwa_dzialu (nazwa zależy od dzial_id, a nie od pracownika).</li></ol>
<h4>Przykład</h4>
<p>Tabela Zamówienia(nr, data, klient, adres_klienta, produkt, cena) po normalizacji: Klienci(id, nazwa, adres), Produkty(id, nazwa, cena), Zamowienia(nr, data, klient_id), Pozycje(zamowienie_nr, produkt_id, ilosc).</p>
<div class="tip">Denormalizacja (celowe dopuszczenie powtórzeń) bywa stosowana w hurtowniach danych dla szybkości odczytu.</div>` },
        { tytul: "Integralność, indeksy, transakcje, kopie", tresc: `
<h4>Więzy integralności</h4>
<ul><li><code>NOT NULL</code>, <code>UNIQUE</code>, <code>DEFAULT 0</code>, <code>CHECK (cena &gt; 0)</code></li>
<li>Integralność referencyjna: klucz obcy nie może wskazywać nieistniejącego rekordu. <code>ON DELETE CASCADE</code> usuwa rekordy powiązane, <code>ON DELETE RESTRICT</code> blokuje usunięcie, <code>SET NULL</code> wpisuje NULL.</li></ul>
<h4>Indeksy</h4>
<p>Indeks przyspiesza wyszukiwanie i sortowanie po kolumnie, ale spowalnia zapis i zajmuje miejsce. Klucz główny ma indeks automatycznie. <code>CREATE INDEX idx_nazwisko ON klienci(nazwisko);</code></p>
<h4>Transakcje i ACID</h4>
<pre>START TRANSACTION;
UPDATE konta SET saldo = saldo - 100 WHERE id = 1;
UPDATE konta SET saldo = saldo + 100 WHERE id = 2;
COMMIT;    -- albo ROLLBACK; aby wycofać</pre>
<p>ACID: <b>A</b> atomowość (wszystko albo nic), <b>C</b> spójność, <b>I</b> izolacja, <b>D</b> trwałość. W MySQL transakcje obsługuje silnik <b>InnoDB</b> (MyISAM nie).</p>
<h4>Kopie zapasowe</h4>
<p><code>mysqldump -u root -p sklep &gt; kopia.sql</code> tworzy plik z poleceniami SQL. Kopia pełna, różnicowa (zmiany od ostatniej pełnej), przyrostowa (od ostatniej dowolnej).</p>
<div class="tip">Widok (<code>CREATE VIEW</code>) to zapisane zapytanie, które używasz jak tabeli. Wyzwalacz (TRIGGER) uruchamia się sam przy INSERT, UPDATE lub DELETE.</div>` }
      ],
      pytania: [
        Q("Relację wiele do wielu w bazie relacyjnej realizuje się za pomocą", "tabeli pośredniczącej z dwoma kluczami obcymi", "jednego klucza obcego w dowolnej tabeli", "klucza złożonego w jednej z tabel bez nowej tabeli", "indeksu UNIQUE", ""),
        Q("Kolumna zawierająca kilka numerów telefonu oddzielonych przecinkami narusza", "pierwszą postać normalną", "trzecią postać normalną", "integralność referencyjną", "zasadę izolacji transakcji", ""),
        Q("Zależność przechodnia atrybutu niekluczowego od innego atrybutu niekluczowego narusza", "3NF", "1NF", "2NF wyłącznie przy kluczu prostym", "ACID", ""),
        Q("Opcja klucza obcego, która przy usunięciu rekordu nadrzędnego usuwa rekordy powiązane, to", "ON DELETE CASCADE", "ON DELETE RESTRICT", "ON DELETE SET NULL", "ON UPDATE NO ACTION", ""),
        Q("Polecenie wycofujące zmiany wykonane w transakcji to", "ROLLBACK", "COMMIT", "REVOKE", "TRUNCATE", ""),
        Q("Silnik MySQL obsługujący transakcje i klucze obce to", "InnoDB", "MyISAM", "MEMORY", "CSV", ""),
        Q("Indeks założony na kolumnie", "przyspiesza wyszukiwanie, ale spowalnia wstawianie danych", "przyspiesza wszystkie operacje bez wad", "usuwa duplikaty z kolumny", "jest wymagany dla każdej kolumny", ""),
        Q("Kopia zawierająca zmiany od ostatniej kopii pełnej to kopia", "różnicowa", "przyrostowa", "lustrzana", "pełna", "")
      ]
    },
    {
      id: "cpp", tytul: "C++", opis: "Przeczytasz i napiszesz program w C++: typy, instrukcje sterujące, tablice, funkcje i podstawy obiektowości.",
      lekcje: [
        { tytul: "Struktura programu, typy, wejście i wyjście", tresc: `
<h4>Pierwszy program</h4>
<pre>#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b;
    cout &lt;&lt; "Podaj dwie liczby: ";
    cin &gt;&gt; a &gt;&gt; b;
    cout &lt;&lt; "Suma: " &lt;&lt; a + b &lt;&lt; endl;
    return 0;
}</pre>
<h4>Typy podstawowe</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zawartość</th></tr>
<tr><td><code>int</code></td><td>liczba całkowita (zwykle 4 bajty)</td></tr>
<tr><td><code>double</code>, <code>float</code></td><td>zmiennoprzecinkowa</td></tr>
<tr><td><code>char</code></td><td>jeden znak, <code>'a'</code> w apostrofach</td></tr>
<tr><td><code>bool</code></td><td><code>true</code> / <code>false</code></td></tr>
<tr><td><code>string</code></td><td>tekst, <code>"ala"</code> (wymaga <code>#include &lt;string&gt;</code>)</td></tr></table></div>
<h4>Pułapka dzielenia</h4>
<p><code>7 / 2</code> dla dwóch liczb <code>int</code> daje <b>3</b> (dzielenie całkowite). Aby dostać 3.5, jedna liczba musi być zmiennoprzecinkowa: <code>7.0 / 2</code> lub <code>(double)a / b</code>. Reszta: <code>7 % 2</code> to 1.</p>
<div class="tip"><code>i++</code> zwraca starą wartość i zwiększa, <code>++i</code> najpierw zwiększa. Dla <code>int i = 5; int x = i++;</code> x wynosi 5, a i wynosi 6.</div>` },
        { tytul: "Instrukcje sterujące, tablice i funkcje", tresc: `
<h4>Warunki i pętle</h4>
<pre>if (n % 2 == 0) cout &lt;&lt; "parzysta"; else cout &lt;&lt; "nieparzysta";
for (int i = 0; i &lt; 10; i++) suma += i;
while (n &gt; 0) { cyfry++; n /= 10; }   // liczenie cyfr
switch (op) { case '+': w = a + b; break; default: w = 0; }</pre>
<h4>Tablice</h4>
<pre>int t[5] = {3, 1, 4, 1, 5};   // indeksy 0..4, t[5] to błąd (poza zakresem)
int maks = t[0];
for (int i = 1; i &lt; 5; i++) if (t[i] &gt; maks) maks = t[i];</pre>
<h4>Funkcje i przekazywanie argumentów</h4>
<pre>int kwadrat(int x) { return x * x; }          // przez wartość: kopia
void zeruj(int &amp;x) { x = 0; }                // przez referencję: zmienia oryginał
void wypisz(int *p) { cout &lt;&lt; *p; }          // przez wskaźnik</pre>
<p><code>&amp;x</code> to adres zmiennej, <code>*p</code> to wartość pod adresem. Funkcja <code>void</code> nic nie zwraca. Przeciążanie: kilka funkcji o tej samej nazwie i różnych parametrach.</p>
<div class="tip">Typowe zadanie: „co wypisze program”. Prześledź pętlę na kartce w tabelce: wartość licznika, warunek, zmienne po każdym obrocie.</div>` },
        { tytul: "Klasy i obiekty w C++", tresc: `
<h4>Klasa</h4>
<pre>class Prostokat {
private:
    double a, b;
public:
    Prostokat(double x, double y) { a = x; b = y; }   // konstruktor
    ~Prostokat() { }                                   // destruktor
    double pole() { return a * b; }
};

Prostokat p(3, 4);
cout &lt;&lt; p.pole();   // 12</pre>
<h4>Modyfikatory dostępu</h4>
<ul><li><code>public</code>: dostępne wszędzie</li>
<li><code>private</code>: tylko wewnątrz klasy (domyślne w <code>class</code>)</li>
<li><code>protected</code>: w klasie i klasach pochodnych</li></ul>
<h4>Dziedziczenie i polimorfizm</h4>
<pre>class Figura { public: virtual double pole() { return 0; } };
class Kolo : public Figura {
    double r;
public:
    Kolo(double r) : r(r) {}
    double pole() override { return 3.14159 * r * r; }
};</pre>
<p>Cztery filary programowania obiektowego: <b>hermetyzacja</b> (ukrywanie danych), <b>dziedziczenie</b>, <b>polimorfizm</b> (ta sama metoda działa różnie w klasach pochodnych), <b>abstrakcja</b>.</p>
<div class="tip">Konstruktor ma nazwę klasy i nie ma typu zwracanego. Destruktor ma tyldę: <code>~Nazwa()</code>. Obiekt utworzony przez <code>new</code> usuwasz przez <code>delete</code>.</div>` }
      ],
      pytania: [
        Q("Wynik działania 9 / 2 dla zmiennych typu int w C++ to", "4", "4.5", "5", "1", "Dzielenie dwóch liczb całkowitych odrzuca część ułamkową."),
        Q("Strumień służący do wypisywania danych na ekran w C++ to", "cout", "cin", "printf w iostream", "echo", ""),
        Q("Po wykonaniu int i = 5; int x = i++; zmienne mają wartości", "x = 5, i = 6", "x = 6, i = 6", "x = 5, i = 5", "x = 6, i = 5", ""),
        Q("Ostatni element tablicy int t[10]; ma indeks", "9", "10", "1", "11", ""),
        Q("Funkcja void zmien(int &x) otrzymuje argument przekazany", "przez referencję", "przez wartość", "jako stałą", "przez tablicę", ""),
        Q("Specjalna metoda wywoływana automatycznie przy tworzeniu obiektu to", "konstruktor", "destruktor", "akcesor", "metoda wirtualna", ""),
        Q("Pola klasy oznaczone jako private są dostępne", "tylko wewnątrz tej klasy", "w całym programie", "w klasach pochodnych i wszędzie indziej", "tylko w funkcji main", ""),
        Q("Zasada, że ta sama metoda zachowuje się różnie w klasach pochodnych, to", "polimorfizm", "hermetyzacja", "rekurencja", "kompilacja warunkowa", "")
      ]
    },
    {
      id: "csharp", tytul: "C#", opis: "Poznasz składnię C# i .NET: typy, kolekcje, metody, klasy z właściwościami oraz aplikację okienkową.",
      lekcje: [
        { tytul: "Składnia C# i typy danych", tresc: `
<h4>Program konsolowy</h4>
<pre>using System;

class Program {
    static void Main(string[] args) {
        Console.Write("Podaj imię: ");
        string imie = Console.ReadLine();
        int wiek = int.Parse(Console.ReadLine());
        Console.WriteLine($"Cześć {imie}, masz {wiek} lat");
    }
}</pre>
<h4>Typy</h4>
<p>Wartościowe: <code>int</code>, <code>long</code>, <code>double</code>, <code>decimal</code> (kwoty), <code>bool</code>, <code>char</code>, <code>struct</code>. Referencyjne: <code>string</code>, tablice, klasy. <code>var</code> pozwala kompilatorowi samemu ustalić typ.</p>
<h4>Konwersje</h4>
<pre>int a = int.Parse("12");
bool ok = int.TryParse(tekst, out int b);   // bez wyjątku przy złym tekście
double d = Convert.ToDouble("3,5");
string s = a.ToString();</pre>
<p><code>Console.ReadLine()</code> zawsze zwraca <code>string</code>. Interpolacja <code>$"...{x}..."</code> wstawia wartość zmiennej do tekstu.</p>
<div class="tip">C# rozróżnia wielkość liter: <code>Main</code>, <code>Console</code>, <code>WriteLine</code> pisane są wielką literą. <code>main</code> nie zadziała.</div>` },
        { tytul: "Tablice, kolekcje, pętle i wyjątki", tresc: `
<h4>Tablice i listy</h4>
<pre>int[] t = { 5, 2, 9 };
Console.WriteLine(t.Length);      // 3
List&lt;string&gt; imiona = new List&lt;string&gt;();
imiona.Add("Ola"); imiona.Remove("Ola"); int n = imiona.Count;
Dictionary&lt;string, int&gt; wiek = new Dictionary&lt;string, int&gt;();
wiek["Jan"] = 30;</pre>
<h4>Pętle</h4>
<pre>for (int i = 0; i &lt; t.Length; i++) suma += t[i];
foreach (string x in imiona) Console.WriteLine(x);</pre>
<h4>Obsługa wyjątków</h4>
<pre>try {
    int x = int.Parse(Console.ReadLine());
    Console.WriteLine(100 / x);
} catch (FormatException) {
    Console.WriteLine("To nie jest liczba");
} catch (DivideByZeroException) {
    Console.WriteLine("Nie dziel przez zero");
} finally {
    Console.WriteLine("Koniec");   // wykona się zawsze
}</pre>
<div class="tip">Tablica ma właściwość <code>Length</code>, a lista <code>Count</code>. Rozmiar tablicy jest stały, lista rośnie przy <code>Add</code>.</div>` },
        { tytul: "Klasy, właściwości i aplikacje okienkowe", tresc: `
<h4>Klasa z właściwościami</h4>
<pre>public class Osoba {
    private int wiek;
    public string Imie { get; set; }          // właściwość automatyczna
    public int Wiek {
        get { return wiek; }
        set { if (value &gt;= 0) wiek = value; }  // walidacja w setterze
    }
    public Osoba(string imie) { Imie = imie; }
    public override string ToString() { return Imie + " (" + Wiek + ")"; }
}
Osoba o = new Osoba("Ala") { Wiek = 17 };</pre>
<h4>Dziedziczenie i interfejsy</h4>
<pre>public interface IFigura { double Pole(); }
public class Kwadrat : IFigura { public double A; public double Pole() =&gt; A * A; }
public class Uczen : Osoba { public Uczen(string i) : base(i) { } }</pre>
<p>Klasa w C# dziedziczy tylko po jednej klasie, ale może implementować wiele interfejsów. <code>static</code> oznacza element klasy, nie obiektu.</p>
<h4>Aplikacja okienkowa (WinForms, WPF)</h4>
<pre>private void btnOblicz_Click(object sender, EventArgs e) {
    double kg = double.Parse(txtWaga.Text);
    lblWynik.Text = "Koszt: " + (kg * 4) + " zł";
}</pre>
<p>Kontrolki: <code>TextBox</code> (tekst, właściwość <code>Text</code>), <code>Label</code>, <code>Button</code> (zdarzenie <code>Click</code>), <code>CheckBox</code> (<code>Checked</code>), <code>ComboBox</code>, <code>MessageBox.Show("...")</code>.</p>` }
      ],
      pytania: [
        Q("Metoda wczytująca wiersz tekstu z konsoli w C# to", "Console.ReadLine()", "Console.WriteLine()", "cin >>", "Console.Input()", ""),
        Q("Zamianę tekstu na liczbę bez zgłaszania wyjątku przy błędnych danych zapewnia", "int.TryParse", "int.Parse", "Convert.ToInt32 zawsze", "ToString()", ""),
        Q("Liczbę elementów listy List<int> w C# podaje właściwość", "Count", "Length", "Size", "Capacity zawsze równa liczbie elementów", ""),
        Q("Blok finally w instrukcji try wykonuje się", "zawsze, niezależnie od wystąpienia wyjątku", "tylko gdy wystąpi wyjątek", "tylko gdy nie wystąpi wyjątek", "nigdy w trybie Release", ""),
        Q("Klasa w C# może dziedziczyć bezpośrednio", "po jednej klasie i implementować wiele interfejsów", "po wielu klasach", "tylko po interfejsach", "tylko po klasach statycznych", ""),
        Q("Tekst wpisany przez użytkownika w kontrolce TextBox odczytuje właściwość", "Text", "Value", "Content w WinForms", "Caption", ""),
        Q("Typ C# zalecany do obliczeń finansowych to", "decimal", "float", "double", "int", ""),
        Q("Słowo kluczowe tworzące nowy obiekt klasy to", "new", "create", "this", "base", "")
      ]
    },
    {
      id: "python", tytul: "Python", opis: "Odczytasz i napiszesz krótkie skrypty w Pythonie: zmienne, listy, słowniki, pętle i funkcje.",
      lekcje: [
        { tytul: "Podstawy składni Pythona", tresc: `
<h4>Zmienne i wejście</h4>
<pre>imie = input("Podaj imię: ")       # zawsze str
wiek = int(input("Wiek: "))
print("Cześć", imie, "masz", wiek, "lat")
print(f"Za rok będziesz mieć {wiek + 1} lat")</pre>
<h4>Bloki wcięciami</h4>
<p>Python nie używa nawiasów klamrowych. Blok tworzy dwukropek i wcięcie (4 spacje). Złe wcięcie to błąd <code>IndentationError</code>.</p>
<pre>if wiek &gt;= 18:
    print("pełnoletni")
elif wiek &gt;= 13:
    print("nastolatek")
else:
    print("dziecko")</pre>
<h4>Operatory</h4>
<p><code>/</code> dzielenie zawsze zmiennoprzecinkowe (<code>7 / 2</code> to 3.5), <code>//</code> całkowite (3), <code>%</code> reszta (1), <code>**</code> potęga (<code>2 ** 10</code> to 1024). Logiczne: <code>and</code>, <code>or</code>, <code>not</code>.</p>
<div class="tip">Komentarz w Pythonie zaczyna się od <code>#</code>. W PHP i JavaScript jest to <code>//</code>.</div>` },
        { tytul: "Listy, słowniki i pętle", tresc: `
<h4>Listy</h4>
<pre>t = [5, 3, 8]
t.append(1)          # [5, 3, 8, 1]
len(t)               # 4
t[0], t[-1]          # 5 i 1 (ujemny indeks liczy od końca)
t[1:3]               # [3, 8] wycinek, bez elementu o indeksie 3
sorted(t)            # nowa lista posortowana
sum(t), max(t)</pre>
<h4>Słownik</h4>
<pre>ceny = {"chleb": 4.5, "mleko": 3.2}
ceny["masło"] = 7
for nazwa, cena in ceny.items():
    print(nazwa, cena)</pre>
<h4>Pętle</h4>
<pre>for i in range(5):       # 0, 1, 2, 3, 4
    print(i)
for i in range(1, 11, 2):  # 1, 3, 5, 7, 9
    ...
while n &gt; 0:
    n -= 1</pre>
<div class="tip"><code>range(a, b)</code> nie zawiera liczby b. <code>range(1, 5)</code> to 1, 2, 3, 4.</div>` },
        { tytul: "Funkcje, pliki i obiekty", tresc: `
<h4>Funkcje</h4>
<pre>def pole_kola(r, pi=3.14):
    return pi * r ** 2

def silnia(n):            # rekurencja
    return 1 if n &lt;= 1 else n * silnia(n - 1)</pre>
<h4>Plik tekstowy</h4>
<pre>with open("dane.txt", encoding="utf-8") as f:
    for linia in f:
        print(linia.strip())</pre>
<h4>Klasa</h4>
<pre>class Konto:
    def __init__(self, saldo=0):    # konstruktor
        self.saldo = saldo
    def wplata(self, kwota):
        self.saldo += kwota

k = Konto(100)
k.wplata(50)
print(k.saldo)   # 150</pre>
<p><code>self</code> odpowiada <code>this</code> w C++ i C#. Python jest językiem interpretowanym z dynamicznym typowaniem: typ zmiennej ustala się podczas działania programu.</p>` }
      ],
      pytania: [
        Q("Wynik wyrażenia 7 // 2 w Pythonie to", "3", "3.5", "1", "4", "// to dzielenie całkowite, / daje 3.5."),
        Q("Funkcja range(1, 5) zwraca kolejno liczby", "1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "2, 3, 4, 5", ""),
        Q("Bloki kodu w Pythonie wyznacza", "wcięcie", "nawias klamrowy", "słowo end", "średnik", ""),
        Q("Dla listy t = [4, 7, 9] wyrażenie t[-1] zwraca", "9", "4", "błąd", "7", ""),
        Q("Konstruktor klasy w Pythonie to metoda", "__init__", "__main__", "constructor", "new", ""),
        Q("Funkcja input() w Pythonie zwraca wartość typu", "str", "int", "float", "bool", ""),
        Q("Dodanie elementu na koniec listy wykonuje metoda", "append()", "push()", "add()", "insert_end()", ""),
        Q("Wynik 2 ** 3 w Pythonie to", "8", "6", "9", "5", "")
      ]
    },
    {
      id: "grafika", tytul: "Grafika i multimedia", opis: "Przygotujesz grafikę i multimedia do strony: formaty, kolory, rozdzielczość, kompresja i obróbka w GIMP.",
      lekcje: [
        { tytul: "Grafika rastrowa i wektorowa, formaty plików", tresc: `
<h4>Raster i wektor</h4>
<p><b>Rastrowa</b>: siatka pikseli (zdjęcia). Po powiększeniu traci jakość, widać piksele. <b>Wektorowa</b>: kształty opisane matematycznie (logo, ikony). Skaluje się bez utraty jakości. Programy: GIMP, Photoshop (raster), Inkscape, CorelDRAW, Illustrator (wektor).</p>
<h4>Formaty</h4>
<div class="tw"><table><tr><th>Format</th><th>Kompresja</th><th>Przezroczystość</th><th>Zastosowanie</th></tr>
<tr><td>JPG</td><td>stratna</td><td>nie</td><td>zdjęcia</td></tr>
<tr><td>PNG</td><td>bezstratna</td><td>tak, kanał alfa</td><td>grafiki z tekstem, logo</td></tr>
<tr><td>GIF</td><td>bezstratna, 256 kolorów</td><td>tak, 1 kolor</td><td>proste animacje</td></tr>
<tr><td>SVG</td><td>wektor (XML)</td><td>tak</td><td>ikony, logo</td></tr>
<tr><td>WebP</td><td>stratna lub bezstratna</td><td>tak</td><td>nowoczesne strony</td></tr>
<tr><td>BMP, TIFF</td><td>brak lub bezstratna</td><td>różnie</td><td>druk, archiwum</td></tr>
<tr><td>XCF, PSD</td><td>pliki robocze GIMP i Photoshop</td><td>tak, warstwy</td><td>dalsza edycja</td></tr></table></div>
<div class="tip">Obraz z przezroczystym tłem zapisuj jako PNG. Zapis do JPG zamieni przezroczystość na kolor tła.</div>` },
        { tytul: "Kolor, rozdzielczość i rozmiar pliku", tresc: `
<h4>Modele barw</h4>
<ul><li><b>RGB</b>: addytywny, dla ekranów. Każda składowa 0 do 255, w zapisie szesnastkowym #RRGGBB.</li>
<li><b>CMYK</b>: subtraktywny, dla druku (cyjan, magenta, żółty, czarny).</li>
<li><b>HSV / HSL</b>: barwa, nasycenie, jasność, wygodny do dobierania kolorów.</li></ul>
<p>Kolory dopełniające leżą naprzeciw siebie na kole barw (czerwony i cyjan, niebieski i żółty).</p>
<h4>Rozdzielczość</h4>
<p>Na stronę liczy się wymiar w pikselach. DPI/PPI ma znaczenie przy druku: 300 dpi to standard dla zdjęć drukowanych, 72 lub 96 ppi dla ekranu.</p>
<h4>Rozmiar pliku bez kompresji</h4>
<p>szerokość × wysokość × głębia bitowa / 8 = bajty. Obraz 800 × 600 przy 24 bitach: 800 · 600 · 3 = 1 440 000 B, czyli około 1,37 MB.</p>
<p>Głębia 1 bit to 2 kolory, 8 bitów to 256 kolorów, 24 bity to około 16,7 mln kolorów, 32 bity to 24 bity koloru plus 8 bitów przezroczystości.</p>
<div class="tip">Typowe zadanie: zmniejsz zdjęcie tak, by dłuższy bok miał 600 px z zachowaniem proporcji. W GIMP: Obraz, Skaluj obraz, z zamkniętym łańcuszkiem.</div>` },
        { tytul: "Obróbka w GIMP i multimedia na stronie", tresc: `
<h4>Najczęstsze operacje w GIMP</h4>
<ul><li>Kadrowanie: narzędzie Kadrowanie (Shift+C), Obraz, Przytnij do zaznaczenia.</li>
<li>Skalowanie: Obraz, Skaluj obraz. Rozmiar płótna: Obraz, Rozmiar płótna.</li>
<li>Przezroczystość: Warstwa, Przezroczystość, Dodaj kanał alfa; potem Zaznacz według koloru i Delete.</li>
<li>Obrót, odbicie: Obraz, Przekształć.</li>
<li>Kolory: Kolory, Jasność i kontrast; Krzywe; Barwa i nasycenie; Odbarwienie (szarość).</li>
<li>Eksport do PNG lub JPG: Plik, Eksportuj jako (Ctrl+Shift+E). Zapisz jako tworzy plik XCF.</li></ul>
<h4>Dźwięk i wideo</h4>
<pre>&lt;video src="film.mp4" controls width="640" poster="okladka.jpg"&gt;&lt;/video&gt;
&lt;audio controls autoplay muted loop&gt;&lt;source src="muzyka.mp3" type="audio/mpeg"&gt;&lt;/audio&gt;</pre>
<p>Formaty wideo: MP4 (H.264), WebM, OGG. Dźwięk: MP3, OGG, WAV (bez kompresji). Wiele przeglądarek blokuje <code>autoplay</code> z dźwiękiem, dlatego dodaje się <code>muted</code>.</p>
<div class="tip">Przy zdjęciach z internetu pamiętaj o prawie autorskim i licencjach (np. Creative Commons BY wymaga podania autora).</div>` }
      ],
      pytania: [
        Q("Format graficzny z kompresją bezstratną i kanałem alfa to", "PNG", "JPG", "BMP 24-bit", "GIF z pełną paletą 24-bit", ""),
        Q("Grafika wektorowa po powiększeniu", "nie traci jakości", "traci jakość, widać piksele", "zmienia model barw na CMYK", "zawsze zwiększa rozmiar pliku dziesięciokrotnie", ""),
        Q("Model barw stosowany w druku to", "CMYK", "RGB", "HSV", "sRGB", ""),
        Q("Nieskompresowany obraz 1000 × 500 pikseli o głębi 24 bitów zajmuje", "1 500 000 bajtów", "500 000 bajtów", "12 000 000 bajtów", "3 000 000 bajtów", "1000 · 500 · 3 B."),
        Q("Liczba kolorów możliwa do zapisania przy głębi 8 bitów to", "256", "8", "16", "65 536", ""),
        Q("Rodzimy format pliku roboczego programu GIMP z warstwami to", "XCF", "PSD", "CDR", "SVG", ""),
        Q("Atrybut znacznika <video> wyświetlający przyciski sterowania to", "controls", "autoplay", "loop", "poster", ""),
        Q("Format zalecany do zdjęć na stronie, gdy liczy się mały rozmiar pliku, to", "JPG", "BMP", "TIFF", "XCF", "")
      ]
    },
    {
      id: "hosting", tytul: "Serwer WWW, CMS i publikacja", opis: "Poznasz środowisko XAMPP, protokoły, domeny, hosting, systemy CMS, SEO i dostępność stron.",
      lekcje: [
        { tytul: "Jak działa strona: HTTP, serwer, domena", tresc: `
<h4>Klient i serwer</h4>
<p>Przeglądarka (klient) wysyła żądanie HTTP do serwera WWW (Apache, Nginx, IIS). PHP wykonuje się <b>po stronie serwera</b>, do przeglądarki trafia gotowy HTML. JavaScript wykonuje się <b>po stronie klienta</b>.</p>
<h4>Protokoły i porty</h4>
<div class="tw"><table><tr><th>Protokół</th><th>Port</th><th>Do czego</th></tr>
<tr><td>HTTP</td><td>80</td><td>strony WWW</td></tr>
<tr><td>HTTPS</td><td>443</td><td>strony szyfrowane (TLS, certyfikat SSL)</td></tr>
<tr><td>FTP</td><td>21 (20 dane)</td><td>wysyłanie plików na serwer</td></tr>
<tr><td>SFTP / SSH</td><td>22</td><td>bezpieczne połączenie i przesył plików</td></tr>
<tr><td>MySQL</td><td>3306</td><td>serwer bazy danych</td></tr>
<tr><td>DNS</td><td>53</td><td>zamiana nazwy domeny na adres IP</td></tr></table></div>
<h4>Kody odpowiedzi HTTP</h4>
<p>200 OK, 301 przekierowanie stałe, 403 brak dostępu, 404 nie znaleziono, 500 błąd serwera.</p>
<h4>XAMPP</h4>
<p>Pakiet z Apache, MySQL/MariaDB, PHP i phpMyAdmin. Pliki strony w folderze <code>htdocs</code>, adres <code>http://localhost/projekt/</code>. phpMyAdmin: <code>http://localhost/phpmyadmin</code>, domyślny użytkownik <code>root</code> bez hasła.</p>` },
        { tytul: "Systemy CMS i publikacja strony", tresc: `
<h4>CMS</h4>
<p>System zarządzania treścią pozwala dodawać artykuły bez znajomości kodu. Przykłady: <b>WordPress</b>, Joomla, Drupal. Sklepy: PrestaShop, WooCommerce, Magento. WordPress jest napisany w PHP i korzysta z bazy MySQL.</p>
<ul><li>Motyw (szablon) zmienia wygląd, wtyczka (plugin) dodaje funkcje.</li>
<li>Role użytkowników w WordPress: administrator, redaktor, autor, współpracownik, subskrybent.</li>
<li>Aktualizuj rdzeń, motywy i wtyczki, bo stare wersje mają luki bezpieczeństwa.</li></ul>
<h4>Publikacja</h4>
<ol><li>Wykup hosting (miejsce na serwerze) i domenę.</li>
<li>W panelu DNS ustaw rekord <b>A</b> (domena na adres IPv4), <b>AAAA</b> (IPv6), <b>CNAME</b> (alias), <b>MX</b> (poczta).</li>
<li>Prześlij pliki przez FTP/SFTP (np. FileZilla), zaimportuj bazę przez phpMyAdmin.</li>
<li>Włącz HTTPS (certyfikat, np. Let's Encrypt).</li></ul>
<div class="tip">Plik <code>.htaccess</code> w Apache ustawia przekierowania, przyjazne adresy i ochronę katalogów.</div>` },
        { tytul: "SEO, dostępność i testowanie stron", tresc: `
<h4>SEO (pozycjonowanie)</h4>
<ul><li>Unikalny <code>&lt;title&gt;</code> i <code>&lt;meta name="description" content="..."&gt;</code></li>
<li>Jeden <code>&lt;h1&gt;</code>, logiczna hierarchia nagłówków</li>
<li>Opisy <code>alt</code> obrazów, przyjazne adresy URL, mapa strony sitemap.xml, plik robots.txt</li>
<li>Szybkie ładowanie i wersja mobilna</li></ul>
<h4>Dostępność (WCAG)</h4>
<p>Kontrast tekstu do tła co najmniej 4,5:1, teksty alternatywne, etykiety <code>&lt;label&gt;</code> przy polach, obsługa klawiaturą, napisy do filmów, atrybut <code>lang</code>. Od 2019 r. strony instytucji publicznych w Polsce muszą być dostępne.</p>
<h4>Testowanie</h4>
<ul><li>Walidator W3C (HTML i CSS)</li>
<li>Narzędzia deweloperskie przeglądarki, klawisz F12: Elementy, Konsola, Sieć, tryb urządzeń mobilnych</li>
<li>Sprawdzenie w kilku przeglądarkach (Chrome, Firefox, Edge, Safari)</li></ul>
<h4>Prawo</h4>
<p>Pliki cookies wymagają informacji i zgody użytkownika. Dane osobowe chroni RODO. Treści i grafiki chroni prawo autorskie.</p>` }
      ],
      pytania: [
        Q("Domyślny port protokołu HTTPS to", "443", "80", "21", "3306", ""),
        Q("Kod odpowiedzi HTTP oznaczający, że zasób nie został znaleziony, to", "404", "200", "301", "500", ""),
        Q("Kod PHP jest wykonywany", "na serwerze, a do przeglądarki trafia wynik w HTML", "w przeglądarce użytkownika", "w bazie danych", "w systemie DNS", ""),
        Q("Rekord DNS wskazujący adres IPv4 domeny to", "A", "MX", "CNAME", "AAAA", "AAAA dotyczy IPv6."),
        Q("WordPress jest przykładem", "systemu CMS", "serwera WWW", "systemu baz danych", "edytora grafiki wektorowej", ""),
        Q("W pakiecie XAMPP pliki strony umieszcza się domyślnie w folderze", "htdocs", "mysql", "apache/bin", "tmp", ""),
        Q("Opis strony wyświetlany w wynikach wyszukiwania ustawia znacznik", "<meta name=\"description\">", "<meta charset>", "<link rel=\"icon\">", "<h6>", ""),
        Q("Minimalny zalecany przez WCAG kontrast zwykłego tekstu do tła to", "4,5:1", "1:1", "2:1", "10:1", "")
      ]
    }
  ]);
})(window.KURSY);
