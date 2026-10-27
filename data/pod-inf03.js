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
<div class="tip">Walidator W3C (validator.w3.org) zgłasza błąd, gdy znaczniki są źle zagnieżdżone, np. <code>&lt;b&gt;&lt;i&gt;tekst&lt;/b&gt;&lt;/i&gt;</code>. Zamykaj w odwrotnej kolejności.</div>
<h4>Nagłówki, akapity i wyróżnienia</h4>
<p>Nagłówki od <code>&lt;h1&gt;</code> do <code>&lt;h6&gt;</code> tworzą konspekt dokumentu: <code>&lt;h1&gt;</code> jest najważniejszy i zwykle występuje raz. Akapit to <code>&lt;p&gt;</code>, złamanie wiersza <code>&lt;br&gt;</code>, linia pozioma <code>&lt;hr&gt;</code>. <code>&lt;b&gt;</code> i <code>&lt;strong&gt;</code> pogrubiają (strong dodaje znaczenie „ważne”), <code>&lt;i&gt;</code> i <code>&lt;em&gt;</code> pochylają, <code>&lt;sub&gt;</code> daje indeks dolny (H<sub>2</sub>O), <code>&lt;sup&gt;</code> górny (m<sup>2</sup>).</p>
<h4>Typowy układ z arkusza</h4>
<pre>&lt;body&gt;
  &lt;header&gt;&lt;h1&gt;Biblioteka miejska&lt;/h1&gt;&lt;/header&gt;
  &lt;nav&gt;&lt;a href="index.html"&gt;Start&lt;/a&gt;&lt;/nav&gt;
  &lt;main&gt;
    &lt;section id="lewy"&gt;...&lt;/section&gt;
    &lt;section id="prawy"&gt;...&lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;Stronę wykonał: 00000000000&lt;/footer&gt;
&lt;/body&gt;</pre>
<h4>Pułapki egzaminacyjne</h4>
<ul><li><code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> i <code>&lt;title&gt;</code> należą do <code>&lt;head&gt;</code>, a widoczne treści do <code>&lt;body&gt;</code>.</li>
<li><code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;input&gt;</code> to elementy puste, nie mają znacznika zamykającego.</li>
<li>Komentarz <code>&lt;!-- tekst --&gt;</code> nie jest wyświetlany przez przeglądarkę.</li>
<li>Wartość <code>id</code> musi być unikalna w dokumencie, <code>class</code> można powtarzać w wielu elementach.</li>
<li>Kodowanie UTF-8 w <code>&lt;meta charset&gt;</code> zapewnia poprawne polskie znaki.</li></ul>` },
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
<div class="tip">Typowe pytanie: ile komórek <code>&lt;td&gt;</code> zawiera wiersz, gdy jedna ma <code>colspan="3"</code> w tabeli o 4 kolumnach? Odpowiedź: 2.</div>
<h4>Ścieżki względne i bezwzględne</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Znaczenie</th></tr>
<tr><td><code>foto.jpg</code></td><td>plik w tym samym folderze co strona</td></tr>
<tr><td><code>img/foto.jpg</code></td><td>plik w podfolderze img</td></tr>
<tr><td><code>../foto.jpg</code></td><td>plik w folderze nadrzędnym</td></tr>
<tr><td><code>https://...</code></td><td>adres bezwzględny, pełny URL</td></tr></table></div>
<p>Na serwerze nazwy plików rozróżniają wielkość liter: <code>Kot.JPG</code> i <code>kot.jpg</code> to dwa różne pliki. Arkusz podaje nazwy plików, przepisuj je dokładnie.</p>
<h4>Pełna tabela z nagłówkiem</h4>
<pre>&lt;table&gt;
  &lt;caption&gt;Cennik&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Usługa&lt;/th&gt;&lt;th&gt;Cena&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td rowspan="2"&gt;Strzyżenie&lt;/td&gt;&lt;td&gt;40 zł&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;60 zł&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>
<p>Drugi wiersz ma tylko jedną komórkę, bo pierwszą kolumnę zajmuje komórka z <code>rowspan="2"</code> z wiersza wyżej. <code>&lt;th&gt;</code> to komórka nagłówkowa (domyślnie pogrubiona i wyśrodkowana), <code>&lt;caption&gt;</code> to podpis tabeli.</p>
<h4>Pułapki</h4>
<ul><li>Wewnątrz <code>&lt;ul&gt;</code> i <code>&lt;ol&gt;</code> mogą być tylko elementy <code>&lt;li&gt;</code>; tekst wpisany bezpośrednio w listę to błąd walidacji.</li>
<li>Atrybut <code>title</code> to dymek po najechaniu myszą, a nie tekst zastępczy obrazu.</li>
<li><code>width</code> w <code>&lt;img&gt;</code> podaje się w pikselach bez jednostki: <code>width="200"</code>.</li></ul>
<h4>Odnośnik do miejsca na stronie i do pobrania</h4>
<pre>&lt;h2 id="cennik"&gt;Cennik&lt;/h2&gt;
&lt;a href="index.html#cennik"&gt;Cennik na stronie głównej&lt;/a&gt;
&lt;a href="regulamin.pdf" download&gt;Pobierz regulamin&lt;/a&gt;
&lt;a href="tel:+48500100200"&gt;Zadzwoń&lt;/a&gt;</pre>
<p>Kotwica <code>#cennik</code> przewija stronę do elementu o <code>id="cennik"</code>. Atrybut <code>download</code> każe pobrać plik zamiast go otwierać.</p>` },
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
<div class="tip">Formularz, który w JavaScripcie ma tylko obliczyć wynik bez przeładowania, nie potrzebuje <code>&lt;form&gt;</code>: wystarczy pole i <code>&lt;button onclick="licz()"&gt;</code>.</div>
<h4>Inne przydatne pola</h4>
<div class="tw"><table><tr><th>Typ</th><th>Zastosowanie</th></tr>
<tr><td><code>tel</code></td><td>numer telefonu (na telefonie klawiatura numeryczna)</td></tr>
<tr><td><code>range</code></td><td>suwak z <code>min</code> i <code>max</code></td></tr>
<tr><td><code>color</code></td><td>wybór koloru</td></tr>
<tr><td><code>file</code></td><td>wysyłanie pliku (wymaga <code>enctype="multipart/form-data"</code>)</td></tr>
<tr><td><code>hidden</code></td><td>wartość niewidoczna dla użytkownika</td></tr></table></div>
<h4>Lista rozwijana i grupowanie pól</h4>
<pre>&lt;select name="miasto" size="3" multiple&gt;
  &lt;option value="kr" selected&gt;Kraków&lt;/option&gt;
  &lt;option value="wa"&gt;Warszawa&lt;/option&gt;
&lt;/select&gt;
&lt;fieldset&gt;
  &lt;legend&gt;Dane kontaktowe&lt;/legend&gt;
  &lt;input type="text" name="kod" pattern="[0-9]{2}-[0-9]{3}" title="np. 00-950"&gt;
&lt;/fieldset&gt;</pre>
<p>Z listy wysyłana jest wartość atrybutu <code>value</code> opcji, a nie widoczny tekst. <code>selected</code> zaznacza opcję domyślną, <code>checked</code> robi to samo dla radio i checkbox. <code>size</code> zamienia listę rozwijaną w listę widoczną, a <code>multiple</code> pozwala wybrać kilka opcji.</p>
<h4>Pułapki</h4>
<ul><li><code>placeholder</code> to tylko podpowiedź w pustym polu, nie jest wysyłany jako wartość.</li>
<li>Pole <code>readonly</code> jest wysyłane, ale nie da się go edytować; pole <code>disabled</code> nie jest wysyłane wcale.</li>
<li>Walidacja w przeglądarce nie zastępuje sprawdzenia danych w PHP, bo można ją łatwo obejść.</li></ul>` }
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
<div class="tip">Kilka selektorów z tą samą regułą rozdzielasz przecinkiem: <code>h1, h2, h3 { color: navy; }</code>. Spacja zamiast przecinka oznacza zagnieżdżenie, to częsty błąd.</div>
<h4>Gdzie umieścić CSS</h4>
<pre>&lt;link rel="stylesheet" href="styl.css"&gt;   &lt;!-- arkusz zewnętrzny --&gt;
&lt;style&gt; p { color: gray; } &lt;/style&gt;       &lt;!-- arkusz wewnętrzny w head --&gt;
&lt;p style="color: red;"&gt;Uwaga&lt;/p&gt;        &lt;!-- styl lokalny --&gt;</pre>
<p>Na egzaminie prawie zawsze wymagany jest zewnętrzny plik <code>styl.css</code> dołączony znacznikiem <code>&lt;link&gt;</code>. Styl lokalny w atrybucie zwykle nie jest punktowany.</p>
<h4>Liczenie specyficzności</h4>
<p>Specyficzność zapisuje się jako trzy liczby: identyfikatory, klasy (z pseudoklasami i atrybutami), znaczniki. Wygrywa selektor o większej pierwszej liczbie, niezależnie od pozostałych.</p>
<div class="tw"><table><tr><th>Selektor</th><th>Wynik</th></tr>
<tr><td><code>p</code></td><td>0, 0, 1</td></tr>
<tr><td><code>nav a:hover</code></td><td>0, 1, 2</td></tr>
<tr><td><code>.menu li.aktywny</code></td><td>0, 2, 1</td></tr>
<tr><td><code>#menu a</code></td><td>1, 0, 1</td></tr></table></div>
<h4>Selektory atrybutów i inne pseudoklasy</h4>
<pre>input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; }   /* adres zaczyna się od https */
li:first-child, li:last-child { font-weight: bold; }
p:not(.wazne) { color: gray; }
h2::before { content: "» "; }</pre>
<p>Pseudoklasy (jeden dwukropek) opisują stan lub pozycję elementu, a pseudoelementy (dwa dwukropki) tworzą jego wirtualną część, np. pierwszą linię albo treść dodaną przed elementem.</p>
<h4>Dziedziczenie właściwości</h4>
<p>Część właściwości przechodzi z rodzica na dzieci: <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>line-height</code>. Inne, jak <code>margin</code>, <code>padding</code>, <code>border</code> i <code>background</code>, nie są dziedziczone. Dlatego <code>body { font-family: Arial; }</code> ustawia czcionkę na całej stronie.</p>` },
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
<p>Jedna wartość: wszystkie boki. Dwie: góra/dół, lewo/prawo. Cztery: góra, prawo, dół, lewo. <code>margin: 0 auto</code> wyśrodkowuje blok o ustalonej szerokości.</p>
<h4>Jednostki</h4>
<div class="tw"><table><tr><th>Jednostka</th><th>Znaczenie</th></tr>
<tr><td><code>px</code></td><td>piksel, wartość bezwzględna</td></tr>
<tr><td><code>%</code></td><td>procent wartości rodzica (szerokości lub czcionki)</td></tr>
<tr><td><code>em</code></td><td>wielokrotność czcionki elementu nadrzędnego</td></tr>
<tr><td><code>rem</code></td><td>wielokrotność czcionki elementu html</td></tr>
<tr><td><code>vw</code>, <code>vh</code></td><td>1% szerokości lub wysokości okna</td></tr></table></div>
<h4>Model pudełkowy</h4>
<p>Każdy element to pudełko: treść, <b>padding</b> (margines wewnętrzny, ma kolor tła), <b>border</b> (ramka) i <b>margin</b> (margines zewnętrzny, zawsze przezroczysty). Przy domyślnym <code>box-sizing: content-box</code> widoczna szerokość to width + 2 × padding + 2 × border.</p>
<pre>#box { width: 200px; padding: 10px; border: 5px solid black; margin: 20px; }
/* widoczna szerokość: 200 + 20 + 10 = 230 px */</pre>
<h4>Listy i tabele</h4>
<pre>ul { list-style-type: square; }      /* circle, disc, none */
ol { list-style-type: upper-roman; }
table { border-collapse: collapse; width: 100%; }
td, th { border: 1px solid #999; padding: 5px; }</pre>
<h4>Pułapki</h4>
<ul><li>Kolor tekstu to <code>color</code>, a nie <code>font-color</code> ani <code>text-color</code>.</li>
<li>Pogrubienie to <code>font-weight: bold</code>, kursywa <code>font-style: italic</code>, rozmiar <code>font-size</code>.</li>
<li>Nazwę czcionki ze spacjami ujmij w cudzysłów: <code>font-family: "Times New Roman", serif;</code>.</li></ul>` },
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
<div class="tip"><code>display: none</code> usuwa element z układu, <code>visibility: hidden</code> ukrywa go, ale zostawia puste miejsce.</div>
<h4>Właściwości flexboxa</h4>
<div class="tw"><table><tr><th>Właściwość</th><th>Działanie</th></tr>
<tr><td><code>flex-direction: column</code></td><td>dzieci jedno pod drugim</td></tr>
<tr><td><code>flex-wrap: wrap</code></td><td>zawijanie do następnej linii</td></tr>
<tr><td><code>justify-content</code></td><td>wyrównanie w osi głównej (<code>center</code>, <code>space-around</code>)</td></tr>
<tr><td><code>align-items</code></td><td>wyrównanie w osi poprzecznej</td></tr></table></div>
<h4>Układ strony gridem</h4>
<pre>body {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-areas: "baner baner" "lewy prawy" "stopka stopka";
}
header { grid-area: baner; }
#lewy  { grid-area: lewy; }
#prawy { grid-area: prawy; }
footer { grid-area: stopka; }</pre>
<p><code>1fr</code> oznacza jedną część wolnego miejsca: <code>1fr 2fr</code> dzieli szerokość w proporcji 1 do 2.</p>
<h4>Wartości display</h4>
<p><code>block</code> zajmuje całą szerokość i zaczyna nową linię (div, p, h1), <code>inline</code> płynie w tekście i ignoruje width i height (a, span, b), <code>inline-block</code> płynie w tekście, ale przyjmuje wymiary. Menu poziome robi się z listy: <code>nav li { display: inline-block; }</code> albo <code>nav ul { display: flex; }</code>.</p>
<h4>Pułapki</h4>
<ul><li>Po blokach z <code>float</code> element, który ma być pod nimi, potrzebuje <code>clear: both</code>.</li>
<li>Bez <code>&lt;meta name="viewport"&gt;</code> reguły <code>@media</code> na telefonie mogą nie zadziałać.</li>
<li><code>z-index</code> działa dla elementów z <code>position</code> innym niż <code>static</code> (oraz dzieci flex i grid).</li></ul>` }
      ],
      pytania: [
        Q("Która reguła ma najwyższą specyficzność (bez !important)?", "#menu", ".menu", "nav", "*", "Identyfikator ma wyższą wagę niż klasa i znacznik."),
        Q("Zapis margin: 10px 20px; ustawia", "10px góra i dół, 20px lewo i prawo", "10px lewo i prawo, 20px góra i dół", "10px góra, 20px dół", "10px wszystkie boki, 20px wewnątrz", ""),
        Q("Aby co drugi wiersz tabeli miał inne tło, użyjesz selektora", "tr:nth-child(even)", "tr:nth-child(2)", "tr:nth-of-type(1)", "tr:last-child + tr", ""),
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
let opis = (n % 2 == 0) ? "parzysta" : "nieparzysta";</pre>
<h4>Wypisywanie wyników</h4>
<pre>console.log("Suma:", 2 + 3);          // konsola F12
document.write("&lt;p&gt;Witaj&lt;/p&gt;");   // wpisanie do dokumentu
alert("Zapisano");                     // okno komunikatu
let imie = prompt("Jak masz na imię?");</pre>
<h4>Pułapki typów</h4>
<div class="tw"><table><tr><th>Wyrażenie</th><th>Wynik</th></tr>
<tr><td><code>"5" + 2</code></td><td><code>"52"</code> (łączenie tekstu)</td></tr>
<tr><td><code>"5" - 2</code></td><td><code>3</code> (odejmowanie wymusza liczbę)</td></tr>
<tr><td><code>"5" * "2"</code></td><td><code>10</code></td></tr>
<tr><td><code>Number("abc")</code></td><td><code>NaN</code> (nie liczba)</td></tr>
<tr><td><code>typeof 3.5</code></td><td><code>"number"</code></td></tr>
<tr><td><code>10 / 0</code></td><td><code>Infinity</code></td></tr></table></div>
<p>Czy wpisano liczbę, sprawdzisz funkcją <code>isNaN(x)</code>: zwraca true, gdy x nie jest liczbą. JavaScript nie ma osobnego typu dla liczb całkowitych, więc <code>7 / 2</code> daje <code>3.5</code>.</p>
<h4>Zasięg zmiennych</h4>
<p><code>let</code> i <code>const</code> działają tylko w bloku <code>{ }</code>, w którym je zadeklarowano, a <code>var</code> jest widoczne w całej funkcji. Do stałej <code>const</code> nie można przypisać nowej wartości, próba kończy się błędem <code>TypeError</code>.</p>
<div class="tip">Częsty błąd to warunek <code>if (x = 5)</code>. Pojedynczy znak <code>=</code> przypisuje wartość, porównanie wymaga <code>==</code> lub <code>===</code>.</div>` },
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
<div class="tip">Losowa liczba całkowita od 1 do 6: <code>Math.floor(Math.random() * 6) + 1</code>.</div>
<h4>Inne metody tablic</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Działanie</th></tr>
<tr><td><code>pop()</code>, <code>shift()</code></td><td>usuwa ostatni lub pierwszy element</td></tr>
<tr><td><code>unshift(x)</code></td><td>dodaje element na początek</td></tr>
<tr><td><code>indexOf(x)</code></td><td>pozycja elementu albo -1</td></tr>
<tr><td><code>join(", ")</code></td><td>łączy elementy w jeden tekst</td></tr>
<tr><td><code>reverse()</code></td><td>odwraca kolejność</td></tr>
<tr><td><code>splice(1, 2)</code></td><td>usuwa 2 elementy od indeksu 1</td></tr></table></div>
<h4>Typowe zadanie: suma i średnia</h4>
<pre>let oceny = [5, 4, 3, 6];
let suma = 0;
for (let i = 0; i &lt; oceny.length; i++) {
  suma += oceny[i];
}
let srednia = suma / oceny.length;   // 4.5
document.getElementById("wynik").innerHTML = "Średnia: " + srednia.toFixed(2);</pre>
<h4>Pętle po elementach</h4>
<pre>for (let x of oceny) { console.log(x); }   // wartości
for (let i in oceny) { console.log(i); }   // indeksy (jako tekst)</pre>
<h4>Pułapki</h4>
<ul><li>Ostatni element ma indeks <code>length - 1</code>; warunek <code>i &lt;= t.length</code> wychodzi poza tablicę i daje <code>undefined</code>.</li>
<li>Funkcja bez <code>return</code> zwraca <code>undefined</code>.</li>
<li><code>break</code> przerywa pętlę, <code>continue</code> przechodzi do kolejnego obrotu.</li></ul>` },
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
<div class="tip"><code>innerHTML</code> interpretuje znaczniki, <code>textContent</code> wstawia czysty tekst. <code>alert()</code> okno komunikatu, <code>prompt()</code> okno do wpisania, <code>console.log()</code> konsola (F12).</div>
<h4>Metody wyszukiwania elementów</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Zwraca</th></tr>
<tr><td><code>getElementById("x")</code></td><td>jeden element o danym id</td></tr>
<tr><td><code>getElementsByClassName("x")</code></td><td>kolekcję elementów z klasą</td></tr>
<tr><td><code>getElementsByTagName("p")</code></td><td>kolekcję znaczników danego typu</td></tr>
<tr><td><code>querySelector(".x")</code></td><td>pierwszy element pasujący do selektora CSS</td></tr>
<tr><td><code>querySelectorAll("li")</code></td><td>wszystkie pasujące elementy (NodeList)</td></tr></table></div>
<p>Kolekcji nie zmienisz jednym przypisaniem, trzeba przejść ją pętlą: <code>for (let e of document.querySelectorAll("li")) e.style.color = "blue";</code>. Właściwości CSS z myślnikiem zapisuje się w JS bez myślnika: <code>background-color</code> to <code>style.backgroundColor</code>.</p>
<h4>Odczyt pól różnego typu</h4>
<pre>let kat = document.getElementById("kat").value;            // wybrana opcja select
let dost = document.querySelector('input[name="dost"]:checked').value;   // radio
document.getElementById("blok").style.display = "none";    // ukrycie bloku
document.getElementById("blok").classList.toggle("ciemny"); // przełączenie klasy</pre>
<h4>Tworzenie elementów</h4>
<pre>let li = document.createElement("li");
li.textContent = "Nowa pozycja";
document.getElementById("lista").appendChild(li);</pre>
<h4>Pułapki</h4>
<ul><li>Skrypt w <code>&lt;head&gt;</code> nie znajdzie elementów, które jeszcze się nie wczytały; umieść go na końcu <code>&lt;body&gt;</code> albo dodaj atrybut <code>defer</code>.</li>
<li>Nazwa metody to <code>getElementById</code>, z końcówką Id, a nie ID.</li>
<li>W <code>addEventListener</code> podajesz nazwę zdarzenia bez „on” i funkcję bez nawiasów.</li></ul>
<h4>Zamiana obrazu po kliknięciu miniatury</h4>
<pre>function pokaz(plik) {
  document.getElementById("duze").src = plik;
}
&lt;img src="m1.jpg" alt="miniatura" onclick="pokaz('d1.jpg')"&gt;</pre>
<p>Takie galerie często pojawiają się w arkuszach. Argument funkcji w atrybucie zapisuj w apostrofach, bo cały atrybut jest już w cudzysłowie.</p>` }
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
<div class="tip">Plik z kodem PHP musi mieć rozszerzenie .php i być uruchomiony przez serwer (XAMPP: folder htdocs, adres localhost/...), a nie otwarty dwuklikiem.</div>
<h4>Operatory porównania i logiczne</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Znaczenie</th></tr>
<tr><td><code>==</code>, <code>===</code></td><td>równe wartością, równe wartością i typem</td></tr>
<tr><td><code>!=</code>, <code>&lt;&gt;</code></td><td>różne</td></tr>
<tr><td><code>&amp;&amp;</code> lub <code>and</code>, <code>||</code> lub <code>or</code></td><td>i, lub</td></tr>
<tr><td><code>.=</code></td><td>dopisanie tekstu do zmiennej</td></tr>
<tr><td><code>%</code></td><td>reszta z dzielenia</td></tr></table></div>
<h4>Przydatne funkcje tablic</h4>
<pre>sort($liczby);                   // rosnąco, rsort() malejąco
in_array("gruszka", $owoce);     // true
array_push($owoce, "wiśnia");
echo implode(", ", $owoce);      // tablica w tekst
$czesci = explode(";", "a;b;c"); // tekst w tablicę
print_r($osoba);                 // podgląd całej tablicy</pre>
<h4>Generowanie HTML pętlą</h4>
<pre>echo "&lt;ul&gt;";
for ($i = 1; $i &lt;= 3; $i++) {
    echo "&lt;li&gt;Pozycja $i&lt;/li&gt;";
}
echo "&lt;/ul&gt;";</pre>
<h4>Pułapki</h4>
<ul><li>Każda instrukcja kończy się średnikiem; jego brak to błąd <code>Parse error</code>.</li>
<li>Nazwy zmiennych rozróżniają wielkość liter: <code>$Imie</code> i <code>$imie</code> to dwie różne zmienne.</li>
<li><code>echo</code> i <code>print</code> wypisują tekst, a <code>var_dump()</code> pokazuje także typ i długość.</li></ul>` },
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
<div class="tip">W kryteriach CKE zwykle jest punkt za zamknięcie połączenia (<code>mysqli_close</code>). Nie zapominaj o nim.</div>
<h4>Wyświetlanie wyników w tabeli</h4>
<pre>$wynik = mysqli_query($polaczenie, "SELECT imie, nazwisko FROM uczniowie;");
echo "&lt;table&gt;";
while ($w = mysqli_fetch_row($wynik)) {
    echo "&lt;tr&gt;&lt;td&gt;$w[0]&lt;/td&gt;&lt;td&gt;$w[1]&lt;/td&gt;&lt;/tr&gt;";
}
echo "&lt;/table&gt;";</pre>
<p>W cudzysłowach można podstawić element tablicy z indeksem liczbowym, np. <code>$w[0]</code>. Element z kluczem tekstowym najbezpieczniej doklejać kropką: <code>"..." . $w["imie"] . "..."</code>.</p>
<h4>Pojedyncza wartość</h4>
<pre>$wynik = mysqli_query($polaczenie, "SELECT COUNT(*) FROM ksiazki;");
$w = mysqli_fetch_row($wynik);
echo "Liczba książek: " . $w[0];</pre>
<h4>Zapis obiektowy</h4>
<div class="tw"><table><tr><th>Proceduralnie</th><th>Obiektowo</th></tr>
<tr><td><code>mysqli_connect(...)</code></td><td><code>new mysqli(...)</code></td></tr>
<tr><td><code>mysqli_query($p, $q)</code></td><td><code>$p-&gt;query($q)</code></td></tr>
<tr><td><code>mysqli_fetch_assoc($w)</code></td><td><code>$w-&gt;fetch_assoc()</code></td></tr>
<tr><td><code>mysqli_close($p)</code></td><td><code>$p-&gt;close()</code></td></tr></table></div>
<p>Sprawdzenie połączenia: <code>if (!$polaczenie) { die("Błąd: " . mysqli_connect_error()); }</code>. Liczbę wierszy zmienionych przez UPDATE lub DELETE podaje <code>mysqli_affected_rows($polaczenie)</code>.</p>
<h4>Pułapki</h4>
<ul><li>Kolejność argumentów <code>mysqli_connect</code>: serwer, użytkownik, hasło, nazwa bazy.</li>
<li><code>mysqli_query</code> przyjmuje najpierw połączenie, a dopiero potem zapytanie.</li>
<li>Tekst w zapytaniu SQL wewnątrz PHP musi być w apostrofach: <code>'$t'</code>.</li></ul>
<h4>Formularz i skrypt w jednym pliku</h4>
<pre>if (!empty($_POST["tytul"])) {
    $t = $_POST["tytul"];
    mysqli_query($polaczenie, "INSERT INTO ksiazki (tytul) VALUES ('$t');");
    echo "Dodano książkę";
}</pre>
<p>Warunek <code>!empty()</code> sprawia, że zapytanie wykona się dopiero po wysłaniu formularza, a nie przy pierwszym wejściu na stronę. Formularz kieruje dane do tego samego pliku przez <code>action="index.php"</code>.</p>` },
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
<li>Hasła zapisuj jako skrót: <code>password_hash()</code>, sprawdzaj <code>password_verify()</code>. Funkcja <code>md5()</code> jest przestarzała.</li></ul>
<h4>Formaty daty</h4>
<div class="tw"><table><tr><th>Znak</th><th>Znaczenie</th><th>Przykład</th></tr>
<tr><td><code>d</code></td><td>dzień z zerem wiodącym</td><td>07</td></tr>
<tr><td><code>m</code></td><td>miesiąc liczbą z zerem</td><td>03</td></tr>
<tr><td><code>Y</code>, <code>y</code></td><td>rok czterocyfrowy, dwucyfrowy</td><td>2026, 26</td></tr>
<tr><td><code>H:i:s</code></td><td>godzina, minuty, sekundy</td><td>14:05:09</td></tr>
<tr><td><code>N</code></td><td>dzień tygodnia od 1 (pon) do 7 (niedz)</td><td>3</td></tr></table></div>
<p><code>date("d.m.Y")</code> daje np. 27.10.2026. Pułapka: <code>i</code> oznacza minuty, a <code>m</code> miesiąc.</p>
<h4>Inne funkcje tekstowe</h4>
<pre>echo substr("Egzamin", 0, 3);            // Egz
echo str_replace("a", "o", "kara");      // koro
echo trim("  tekst  ");                  // usuwa spacje z brzegów
echo ucfirst("anna");                    // Anna
echo number_format(1234.5, 2, ",", " "); // 1 234,50</pre>
<h4>Logowanie z sesją</h4>
<pre>session_start();
if (isset($_SESSION["login"])) {
    echo "Zalogowany: " . $_SESSION["login"];
} else {
    header("Location: logowanie.php");
}
// wylogowanie: session_destroy();</pre>
<p>Sesja przechowuje dane na serwerze (w przeglądarce jest tylko jej identyfikator), a ciasteczko u użytkownika. Ciasteczko usuwa się, ustawiając datę ważności w przeszłości: <code>setcookie("motyw", "", time() - 3600);</code>.</p>
<h4>Pułapki</h4>
<ul><li><code>session_start()</code>, <code>setcookie()</code> i <code>header()</code> muszą być wywołane przed wysłaniem jakiegokolwiek HTML, nawet spacji.</li>
<li>Ciasteczko ustawione przez <code>setcookie</code> jest widoczne w <code>$_COOKIE</code> dopiero przy następnym żądaniu.</li>
<li>Parametr z wartością domyślną, jak <code>$vat = 23</code>, umieszcza się na końcu listy parametrów.</li></ul>` }
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
<div class="tip">Teksty i daty ujmuj w apostrofy: <code>'2024-05-01'</code>. Liczby bez apostrofów.</div>
<h4>Łączenie warunków</h4>
<pre>SELECT * FROM klienci WHERE miasto = 'Kraków' AND wiek &gt;= 18;
SELECT * FROM klienci WHERE miasto = 'Kraków' OR miasto = 'Gdańsk';
SELECT * FROM produkty WHERE NOT kategoria = 3;
SELECT * FROM filmy WHERE (gatunek = 'komedia' OR gatunek = 'dramat') AND rok &gt; 2010;</pre>
<p><code>AND</code> ma pierwszeństwo przed <code>OR</code>, dlatego łącząc oba operatory, używaj nawiasów.</p>
<h4>Wzorce LIKE</h4>
<div class="tw"><table><tr><th>Wzorzec</th><th>Pasuje</th></tr>
<tr><td><code>'%ski'</code></td><td>kończy się na „ski”</td></tr>
<tr><td><code>'%ann%'</code></td><td>zawiera „ann” w dowolnym miejscu</td></tr>
<tr><td><code>'_a%'</code></td><td>druga litera to a</td></tr>
<tr><td><code>'____'</code></td><td>dokładnie cztery znaki</td></tr></table></div>
<h4>Sortowanie po kilku kolumnach i funkcje</h4>
<pre>SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko ASC, imie DESC;
SELECT nazwa, cena * 1.23 AS brutto FROM produkty;
SELECT * FROM wizyty WHERE YEAR(data) = 2024 AND MONTH(data) = 5;
SELECT UPPER(nazwisko), LENGTH(imie) FROM osoby;</pre>
<h4>Pułapki</h4>
<ul><li><code>ORDER BY</code> bez ASC i DESC sortuje rosnąco.</li>
<li><code>BETWEEN</code> zawiera obie granice, a <code>LIMIT 2, 5</code> pomija 2 wiersze i zwraca kolejne 5.</li>
<li>W MySQL operator <code>!=</code> działa tak samo jak <code>&lt;&gt;</code>.</li></ul>` },
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
<div class="tip">Klucz obcy w jednej tabeli (np. <code>autor_id</code>) wskazuje klucz główny w drugiej (<code>autorzy.id</code>). Warunek ON zawsze łączy te dwie kolumny.</div>
<h4>Zasady GROUP BY</h4>
<p>Każda kolumna w SELECT, która nie jest objęta funkcją agregującą, powinna być wymieniona w GROUP BY. <code>COUNT(*)</code> liczy wszystkie wiersze, <code>COUNT(kolumna)</code> tylko te, w których wartość nie jest NULL, a <code>COUNT(DISTINCT kolumna)</code> różne wartości.</p>
<pre>SELECT miasto, COUNT(*) AS ile FROM klienci
GROUP BY miasto ORDER BY ile DESC;
SELECT MAX(cena) - MIN(cena) AS rozpietosc FROM produkty;</pre>
<h4>Złączenie trzech tabel</h4>
<pre>SELECT u.nazwisko, p.nazwa, o.ocena
FROM oceny o
JOIN uczniowie u ON o.uczen_id = u.id
JOIN przedmioty p ON o.przedmiot_id = p.id
WHERE p.nazwa = 'Matematyka';</pre>
<h4>Złączenie z agregacją</h4>
<pre>SELECT a.nazwisko, COUNT(k.id) AS liczba
FROM autorzy a LEFT JOIN ksiazki k ON k.autor_id = a.id
GROUP BY a.nazwisko;</pre>
<p>Dzięki <code>LEFT JOIN</code> autor bez książek też się pojawi, z liczbą 0, bo <code>COUNT(k.id)</code> nie liczy wartości NULL.</p>
<h4>Podzapytanie</h4>
<pre>SELECT nazwa FROM produkty WHERE cena &gt; (SELECT AVG(cena) FROM produkty);</pre>
<p>Pułapka: funkcji agregującej nie wolno użyć w WHERE. Zapis <code>WHERE AVG(cena) &gt; 10</code> to błąd, taki warunek należy do HAVING.</p>` },
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
<div class="tip">Eksport bazy do pliku .sql robisz w phpMyAdmin: zakładka Eksport. W arkuszu trzeba zwykle zrobić zrzut ekranu wyniku każdego zapytania.</div>
<h4>Wiele wierszy i zmiana struktury</h4>
<pre>INSERT INTO klienci (imie, miasto) VALUES ('Ola', 'Łódź'), ('Jan', 'Opole');
ALTER TABLE klienci MODIFY miasto VARCHAR(80) NOT NULL;
ALTER TABLE klienci CHANGE miasto miejscowosc VARCHAR(80);
ALTER TABLE klienci ADD UNIQUE (email);
TRUNCATE TABLE logi;   -- usuwa wszystkie wiersze, zostawia strukturę</pre>
<h4>Podział poleceń SQL</h4>
<div class="tw"><table><tr><th>Grupa</th><th>Polecenia</th></tr>
<tr><td>DDL (definicja)</td><td>CREATE, ALTER, DROP, TRUNCATE</td></tr>
<tr><td>DML (manipulacja)</td><td>INSERT, UPDATE, DELETE</td></tr>
<tr><td>DQL (zapytania)</td><td>SELECT</td></tr>
<tr><td>DCL (kontrola dostępu)</td><td>GRANT, REVOKE</td></tr>
<tr><td>TCL (transakcje)</td><td>COMMIT, ROLLBACK</td></tr></table></div>
<h4>Uprawnienia w praktyce</h4>
<pre>GRANT ALL PRIVILEGES ON sklep.* TO 'admin'@'localhost';
GRANT SELECT ON sklep.produkty TO 'gosc'@'%';   -- % oznacza dowolny host
SHOW GRANTS FOR 'jan'@'localhost';
ALTER USER 'jan'@'localhost' IDENTIFIED BY 'Nowe1!';
DROP USER 'gosc'@'%';</pre>
<p><code>sklep.*</code> oznacza wszystkie tabele bazy sklep, a <code>*.*</code> wszystkie bazy. Dopisek <code>WITH GRANT OPTION</code> pozwala użytkownikowi przekazywać swoje uprawnienia innym.</p>
<h4>Pułapki</h4>
<ul><li><code>DELETE</code> usuwa wiersze, <code>DROP</code> usuwa całą tabelę lub bazę, <code>TRUNCATE</code> czyści tabelę i zeruje licznik AUTO_INCREMENT.</li>
<li>W <code>INSERT</code> liczba wartości musi odpowiadać liczbie wymienionych kolumn.</li>
<li>W <code>GRANT</code> użytkownika podaje się po <code>TO</code>, a w <code>REVOKE</code> po <code>FROM</code>.</li></ul>` }
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
<div class="tip">Na diagramie ERD relacja 1:N jest rysowana jako linia z „kurzą łapką” po stronie wiele. W phpMyAdmin relacje ustawiasz w widoku Struktura, przycisk Widok relacji.</div>
<h4>Przykład relacji 1:N</h4>
<pre>CREATE TABLE klasy (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nazwa CHAR(2) NOT NULL
);
CREATE TABLE uczniowie (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nazwisko VARCHAR(50),
  klasa_id INT,
  FOREIGN KEY (klasa_id) REFERENCES klasy(id)
);</pre>
<p>Jedna klasa ma wielu uczniów, więc klucz obcy <code>klasa_id</code> trafia do tabeli uczniowie. Odwrotne rozwiązanie, czyli kolumna z listą uczniów w tabeli klasy, łamie 1NF.</p>
<h4>Tabela pośrednicząca N:M</h4>
<pre>CREATE TABLE zapisy (
  uczen_id INT,
  przedmiot_id INT,
  PRIMARY KEY (uczen_id, przedmiot_id),
  FOREIGN KEY (uczen_id) REFERENCES uczniowie(id),
  FOREIGN KEY (przedmiot_id) REFERENCES przedmioty(id)
);</pre>
<h4>Słowniczek egzaminacyjny</h4>
<div class="tw"><table><tr><th>Pojęcie</th><th>Inaczej</th></tr>
<tr><td>relacja (w teorii baz)</td><td>tabela</td></tr>
<tr><td>krotka</td><td>wiersz, rekord</td></tr>
<tr><td>atrybut</td><td>kolumna, pole</td></tr>
<tr><td>dziedzina atrybutu</td><td>zbiór dozwolonych wartości</td></tr>
<tr><td>klucz sztuczny</td><td>np. id z AUTO_INCREMENT, bez znaczenia w świecie rzeczywistym</td></tr></table></div>
<p>Pułapka: tabela ma tylko jeden klucz główny (choć może on składać się z kilku kolumn), ale może mieć wiele kluczy obcych i wiele kolumn UNIQUE.</p>
<p>Klucz obcy musi mieć ten sam typ co klucz główny, na który wskazuje (np. oba <code>INT</code>). Może przyjmować NULL, jeśli powiązanie jest opcjonalne, ale nie może zawierać wartości, której nie ma w tabeli nadrzędnej.</p>` },
        { tytul: "Normalizacja: 1NF, 2NF, 3NF", tresc: `
<h4>Po co normalizować</h4>
<p>Celem jest usunięcie powtórzeń (redundancji) i anomalii: aktualizacji (zmiana w jednym miejscu, a stara wartość zostaje w innym), wstawiania i usuwania.</p>
<h4>Postacie normalne</h4>
<ol><li><b>1NF</b>: każda komórka zawiera jedną, niepodzielną wartość, brak powtarzających się grup. Kolumna „telefony: 501..., 602...” łamie 1NF.</li>
<li><b>2NF</b>: 1NF i każdy atrybut niekluczowy zależy od <b>całego</b> klucza głównego (problem dotyczy kluczy złożonych).</li>
<li><b>3NF</b>: 2NF i brak zależności przechodnich: atrybut niekluczowy nie zależy od innego atrybutu niekluczowego. Przykład złamania: tabela Pracownicy z kolumnami dzial_id i nazwa_dzialu (nazwa zależy od dzial_id, a nie od pracownika).</li></ol>
<h4>Przykład</h4>
<p>Tabela Zamówienia(nr, data, klient, adres_klienta, produkt, cena) po normalizacji: Klienci(id, nazwa, adres), Produkty(id, nazwa, cena), Zamowienia(nr, data, klient_id), Pozycje(zamowienie_nr, produkt_id, ilosc).</p>
<div class="tip">Denormalizacja (celowe dopuszczenie powtórzeń) bywa stosowana w hurtowniach danych dla szybkości odczytu.</div>
<h4>Normalizacja do 2NF krok po kroku</h4>
<p>Tabela wyjściowa <code>Oceny(uczen_id, przedmiot_id, nazwisko, nazwa_przedmiotu, ocena)</code> ma klucz złożony (uczen_id, przedmiot_id).</p>
<div class="tw"><table><tr><th>Problem</th><th>Skutek</th><th>Rozwiązanie</th></tr>
<tr><td>nazwisko zależy tylko od uczen_id</td><td>łamie 2NF</td><td>tabela Uczniowie(id, nazwisko)</td></tr>
<tr><td>nazwa_przedmiotu zależy tylko od przedmiot_id</td><td>łamie 2NF</td><td>tabela Przedmioty(id, nazwa)</td></tr></table></div>
<p>Po rozbiciu zostaje <code>Oceny(uczen_id, przedmiot_id, ocena)</code>, bo ocena zależy od całego klucza: od ucznia i przedmiotu razem.</p>
<h4>Zależność przechodnia w praktyce</h4>
<p>W tabeli <code>Uczniowie(id, nazwisko, kod_pocztowy, miasto)</code> miasto zależy od kodu pocztowego, a kod od id. To zależność przechodnia, którą usuwa osobna tabela <code>Kody(kod_pocztowy, miasto)</code>. Dopiero wtedy tabela jest w 3NF.</p>
<h4>Jak rozpoznać problem na egzaminie</h4>
<ul><li>Lista wartości w jednej komórce albo kolumny telefon1, telefon2, telefon3: brak 1NF.</li>
<li>Klucz złożony i kolumna zależna tylko od części klucza: brak 2NF.</li>
<li>Tabela w 1NF z kluczem prostym (jedna kolumna) jest automatycznie w 2NF.</li>
<li>Kolumna wyliczana z innych, np. wartość = cena × ilość, to zbędne powtórzenie danych.</li></ul>
<p>Anomalia usuwania: skasowanie ostatniego zamówienia klienta usuwa przy okazji jego adres, jeśli adres był zapisany tylko w zamówieniach. Anomalia wstawiania: nie da się dodać nowego produktu, dopóki ktoś go nie zamówi.</p>` },
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
<div class="tip">Widok (<code>CREATE VIEW</code>) to zapisane zapytanie, które używasz jak tabeli. Wyzwalacz (TRIGGER) uruchamia się sam przy INSERT, UPDATE lub DELETE.</div>
<h4>Klucz obcy z akcjami</h4>
<pre>CREATE TABLE zamowienia (
  id INT PRIMARY KEY AUTO_INCREMENT,
  klient_id INT,
  kwota DECIMAL(8,2) CHECK (kwota &gt;= 0),
  status VARCHAR(20) DEFAULT 'nowe',
  FOREIGN KEY (klient_id) REFERENCES klienci(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
);</pre>
<p>Próba wstawienia zamówienia z <code>klient_id</code>, którego nie ma w tabeli klienci, kończy się błędem. Tak działa pilnowanie integralności referencyjnej.</p>
<h4>Rodzaje kopii</h4>
<div class="tw"><table><tr><th>Kopia</th><th>Co zawiera</th><th>Co potrzeba do odtworzenia</th></tr>
<tr><td>pełna</td><td>wszystkie dane</td><td>jedna kopia</td></tr>
<tr><td>różnicowa</td><td>zmiany od ostatniej pełnej</td><td>pełna i ostatnia różnicowa</td></tr>
<tr><td>przyrostowa</td><td>zmiany od ostatniej kopii dowolnego typu</td><td>pełna i wszystkie kolejne przyrostowe</td></tr></table></div>
<p>Odtworzenie bazy z pliku: <code>mysql -u root -p sklep &lt; kopia.sql</code> albo zakładka Import w phpMyAdmin.</p>
<h4>Przykład widoku i wyzwalacza</h4>
<pre>CREATE VIEW drogie AS SELECT nazwa, cena FROM produkty WHERE cena &gt; 100;
SELECT * FROM drogie;

CREATE TRIGGER po_sprzedazy AFTER INSERT ON sprzedaz
FOR EACH ROW UPDATE produkty SET stan = stan - NEW.ilosc WHERE id = NEW.produkt_id;</pre>
<p>Pułapka: <code>COMMIT</code> zatwierdza zmiany na stałe i wykonany po nim <code>ROLLBACK</code> już ich nie cofnie.</p>` }
      ],
      pytania: [
        Q("Relację wiele do wielu w bazie relacyjnej realizuje się za pomocą", "tabeli pośredniczącej z dwoma kluczami obcymi", "jednego klucza obcego w dowolnej tabeli", "klucza złożonego w jednej z tabel bez nowej tabeli", "indeksu UNIQUE", ""),
        Q("Kolumna zawierająca kilka numerów telefonu oddzielonych przecinkami narusza", "pierwszą postać normalną", "trzecią postać normalną", "integralność referencyjną", "zasadę izolacji transakcji", ""),
        Q("Zależność przechodnia atrybutu niekluczowego od innego atrybutu niekluczowego narusza", "3NF", "1NF", "2NF wyłącznie przy kluczu prostym", "ACID", ""),
        Q("Opcja klucza obcego, która przy usunięciu rekordu nadrzędnego usuwa rekordy powiązane, to", "ON DELETE CASCADE", "ON DELETE RESTRICT", "ON DELETE SET NULL", "ON UPDATE NO ACTION", ""),
        Q("Polecenie wycofujące zmiany wykonane w transakcji to", "ROLLBACK", "COMMIT", "REVOKE", "TRUNCATE", ""),
        Q("Silnik MySQL obsługujący transakcje i klucze obce to", "InnoDB", "MyISAM", "MEMORY", "CSV", ""),
        Q("Indeks założony na kolumnie", "przyspiesza wyszukiwanie, ale spowalnia zapis", "przyspiesza zarówno wyszukiwanie, jak i zapis", "automatycznie usuwa duplikaty z kolumny", "musi być założony na każdej kolumnie", ""),
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
<div class="tip"><code>i++</code> zwraca starą wartość i zwiększa, <code>++i</code> najpierw zwiększa. Dla <code>int i = 5; int x = i++;</code> x wynosi 5, a i wynosi 6.</div>
<h4>Formatowanie wyjścia i wczytywanie tekstu</h4>
<pre>#include &lt;iomanip&gt;
double x = 3.14159;
cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; x &lt;&lt; endl;   // 3.14
string imie;
cin &gt;&gt; imie;          // jeden wyraz, do pierwszej spacji
getline(cin, imie);   // cały wiersz razem ze spacjami</pre>
<p><code>endl</code> i <code>"\\n"</code> przechodzą do nowej linii. Bez <code>using namespace std;</code> trzeba pisać <code>std::cout</code>, <code>std::cin</code>, <code>std::string</code>.</p>
<h4>Stałe, operatory i rzutowanie</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Znaczenie</th></tr>
<tr><td><code>const double PI = 3.14;</code></td><td>stała, nie można jej zmienić</td></tr>
<tr><td><code>a += 5;</code></td><td>to samo co <code>a = a + 5;</code></td></tr>
<tr><td><code>==</code>, <code>!=</code></td><td>równe, różne</td></tr>
<tr><td><code>&amp;&amp;</code>, <code>||</code>, <code>!</code></td><td>i, lub, nie</td></tr>
<tr><td><code>(int)3.9</code></td><td>3, rzutowanie obcina część ułamkową</td></tr></table></div>
<h4>Komentarze i kompilacja</h4>
<p>Komentarz jednoliniowy to <code>// ...</code>, wieloliniowy <code>/* ... */</code>. C++ jest językiem <b>kompilowanym</b>: kompilator (np. g++) zamienia kod źródłowy .cpp na plik wykonywalny. Błędy składni wykrywa kompilator, zanim program zostanie uruchomiony.</p>
<h4>Pułapki</h4>
<ul><li>Każda instrukcja kończy się średnikiem, ale po <code>#include</code> średnika nie ma.</li>
<li><code>char</code> zapisujesz w apostrofach <code>'A'</code>, a <code>string</code> w cudzysłowach <code>"A"</code>.</li>
<li>Zmienna lokalna bez nadanej wartości ma wartość przypadkową, dlatego inicjuj ją: <code>int suma = 0;</code>.</li></ul>` },
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
<div class="tip">Typowe zadanie: „co wypisze program”. Prześledź pętlę na kartce w tabelce: wartość licznika, warunek, zmienne po każdym obrocie.</div>
<h4>Pętla do-while i break</h4>
<pre>int liczba;
do {
    cout &lt;&lt; "Podaj liczbę dodatnią: ";
    cin &gt;&gt; liczba;
} while (liczba &lt;= 0);

for (int i = 1; i &lt;= 100; i++) {
    if (i % 7 == 0) { cout &lt;&lt; i; break; }   // pierwsza wielokrotność 7
}</pre>
<h4>Typowe algorytmy</h4>
<pre>// czy liczba jest pierwsza
bool pierwsza(int n) {
    if (n &lt; 2) return false;
    for (int d = 2; d * d &lt;= n; d++)
        if (n % d == 0) return false;
    return true;
}
// sortowanie bąbelkowe tablicy t o n elementach
for (int i = 0; i &lt; n - 1; i++)
    for (int j = 0; j &lt; n - 1 - i; j++)
        if (t[j] &gt; t[j + 1]) swap(t[j], t[j + 1]);</pre>
<h4>Rekurencja</h4>
<pre>int silnia(int n) {
    if (n &lt;= 1) return 1;      // warunek zakończenia
    return n * silnia(n - 1);
}</pre>
<p>Funkcja rekurencyjna wywołuje samą siebie. Bez warunku zakończenia wywołania nie kończą się i dochodzi do przepełnienia stosu.</p>
<p>Pułapka w <code>switch</code>: bez <code>break</code> wykonują się także kolejne przypadki. Pułapka w <code>if</code>: średnik tuż po nawiasie, np. <code>if (x &gt; 0);</code>, kończy instrukcję, więc następny blok wykona się zawsze.</p>` },
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
<div class="tip">Konstruktor ma nazwę klasy i nie ma typu zwracanego. Destruktor ma tyldę: <code>~Nazwa()</code>. Obiekt utworzony przez <code>new</code> usuwasz przez <code>delete</code>.</div>
<h4>Obiekt dynamiczny i wskaźnik this</h4>
<pre>Prostokat *wsk = new Prostokat(2, 5);
cout &lt;&lt; wsk-&gt;pole();     // 10, dostęp przez strzałkę
delete wsk;

class Punkt {
    int x;
public:
    void setX(int x) { this-&gt;x = x; }   // this wskazuje bieżący obiekt
    int getX() const { return x; }      // akcesor
};</pre>
<p>Do składników zwykłego obiektu odwołujesz się kropką (<code>p.pole()</code>), a przez wskaźnik strzałką (<code>wsk-&gt;pole()</code>). Metody typu get i set nazywa się akcesorami.</p>
<h4>Klasa abstrakcyjna i składnik statyczny</h4>
<pre>class Zwierze {
public:
    virtual void glos() = 0;   // metoda czysto wirtualna
    static int licznik;        // wspólny dla wszystkich obiektów
};
int Zwierze::licznik = 0;</pre>
<p>Klasa z co najmniej jedną metodą czysto wirtualną jest abstrakcyjna: nie można utworzyć jej obiektu, można po niej tylko dziedziczyć.</p>
<h4>Rodzaje dziedziczenia</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Składniki public klasy bazowej stają się</th></tr>
<tr><td><code>class B : public A</code></td><td>public</td></tr>
<tr><td><code>class B : protected A</code></td><td>protected</td></tr>
<tr><td><code>class B : private A</code></td><td>private</td></tr></table></div>
<p>C++ pozwala na dziedziczenie wielokrotne (po kilku klasach naraz), w przeciwieństwie do C# i Javy. W <code>struct</code> składniki są domyślnie publiczne, a w <code>class</code> prywatne.</p>` }
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
<div class="tip">C# rozróżnia wielkość liter: <code>Main</code>, <code>Console</code>, <code>WriteLine</code> pisane są wielką literą. <code>main</code> nie zadziała.</div>
<h4>Warunki i switch</h4>
<pre>int ocena = 4;
if (ocena &gt;= 5) Console.WriteLine("bardzo dobry");
else if (ocena &gt;= 3) Console.WriteLine("zaliczone");
else Console.WriteLine("niezaliczone");

string opis = ocena % 2 == 0 ? "parzysta" : "nieparzysta";
switch (ocena) {
    case 6: Console.WriteLine("celujący"); break;
    default: Console.WriteLine("inna"); break;
}</pre>
<p>W C# każda sekcja <code>case</code> musi kończyć się <code>break</code> (lub <code>return</code>). Kompilator nie pozwala przejść do kolejnego przypadku, jak to bywa w C++.</p>
<h4>Rozmiary typów</h4>
<div class="tw"><table><tr><th>Typ</th><th>Rozmiar</th><th>Uwagi</th></tr>
<tr><td><code>byte</code></td><td>1 bajt</td><td>od 0 do 255</td></tr>
<tr><td><code>int</code></td><td>4 bajty</td><td>około ±2,1 mld</td></tr>
<tr><td><code>long</code></td><td>8 bajtów</td><td>duże liczby całkowite</td></tr>
<tr><td><code>double</code></td><td>8 bajtów</td><td>wartości przybliżone</td></tr>
<tr><td><code>decimal</code></td><td>16 bajtów</td><td>dokładne kwoty, literał <code>9.99m</code></td></tr>
<tr><td><code>char</code></td><td>2 bajty</td><td>znak Unicode w apostrofach</td></tr></table></div>
<h4>Pułapki</h4>
<ul><li>Dzielenie dwóch <code>int</code> daje wynik całkowity: <code>7 / 2</code> to 3, tak jak w C++.</li>
<li><code>int.Parse("abc")</code> rzuca wyjątek <code>FormatException</code>.</li>
<li><code>string</code> jest niezmienny: <code>ToUpper()</code> zwraca nowy tekst, a nie zmienia oryginału.</li>
<li>Stałą deklaruje się słowem <code>const</code>: <code>const double VAT = 0.23;</code>.</li></ul>
<p>Formatowanie liczb: <code>x.ToString("F2")</code> lub <code>Math.Round(x, 2)</code> daje dwa miejsca po przecinku. Pierwiastek to <code>Math.Sqrt(x)</code>, potęga <code>Math.Pow(2, 3)</code>, a liczbę losową zwraca <code>new Random().Next(1, 7)</code> (od 1 do 6, górna granica nie wchodzi).</p>` },
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
<div class="tip">Tablica ma właściwość <code>Length</code>, a lista <code>Count</code>. Rozmiar tablicy jest stały, lista rośnie przy <code>Add</code>.</div>
<h4>Tablice wielowymiarowe i metody</h4>
<pre>int[,] macierz = new int[3, 4];   // 3 wiersze, 4 kolumny
macierz[0, 1] = 7;
int[] liczby = { 4, 1, 3 };
Array.Sort(liczby);               // 1, 3, 4
Console.WriteLine(liczby.Max() + " " + liczby.Sum());   // wymaga using System.Linq;</pre>
<p>Nowa tablica <code>new int[5]</code> jest wypełniona zerami, a tablica <code>string</code> wartościami <code>null</code>. Indeksy zaczynają się od 0; odwołanie do <code>t[t.Length]</code> rzuca <code>IndexOutOfRangeException</code>.</p>
<h4>Metody listy</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Działanie</th></tr>
<tr><td><code>Add(x)</code></td><td>dodaje na koniec</td></tr>
<tr><td><code>Insert(0, x)</code></td><td>wstawia na podaną pozycję</td></tr>
<tr><td><code>RemoveAt(i)</code></td><td>usuwa element o indeksie i</td></tr>
<tr><td><code>Contains(x)</code></td><td>true, gdy element istnieje</td></tr>
<tr><td><code>Sort()</code>, <code>Clear()</code></td><td>sortuje, czyści listę</td></tr></table></div>
<h4>Pętla while i przegląd słownika</h4>
<pre>int k = 10;
while (k &gt; 0) { k -= 3; }   // k kończy z wartością -2
foreach (var para in wiek)
    Console.WriteLine(para.Key + ": " + para.Value);</pre>
<p>W pętli <code>foreach</code> nie wolno dodawać ani usuwać elementów przeglądanej kolekcji, do tego służy zwykła pętla <code>for</code>.</p>
<p>Własny wyjątek zgłasza się instrukcją <code>throw new ArgumentException("Zła wartość");</code>. Ogólny blok <code>catch (Exception ex)</code> łapie każdy wyjątek, a <code>ex.Message</code> zawiera jego opis.</p>` },
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
<p>Kontrolki: <code>TextBox</code> (tekst, właściwość <code>Text</code>), <code>Label</code>, <code>Button</code> (zdarzenie <code>Click</code>), <code>CheckBox</code> (<code>Checked</code>), <code>ComboBox</code>, <code>MessageBox.Show("...")</code>.</p>
<h4>Modyfikatory dostępu w C#</h4>
<div class="tw"><table><tr><th>Modyfikator</th><th>Dostęp</th></tr>
<tr><td><code>public</code></td><td>wszędzie</td></tr>
<tr><td><code>private</code></td><td>tylko w klasie (domyślny dla pól i metod)</td></tr>
<tr><td><code>protected</code></td><td>w klasie i klasach pochodnych</td></tr>
<tr><td><code>internal</code></td><td>w obrębie tego samego projektu (zestawu)</td></tr></table></div>
<h4>Metody wirtualne i abstrakcyjne</h4>
<pre>public abstract class Figura {
    public abstract double Pole();
    public virtual string Opis() { return "figura"; }
}
public class Kolo : Figura {
    public double R { get; set; }
    public override double Pole() { return Math.PI * R * R; }
    public override string Opis() { return "koło"; }
}</pre>
<p>Metodę <code>virtual</code> można nadpisać w klasie pochodnej słowem <code>override</code>. Metoda <code>abstract</code> nie ma ciała i musi zostać nadpisana, a słowo <code>sealed</code> blokuje dalsze dziedziczenie.</p>
<div class="tip">Konstruktor nie ma typu zwracanego, nawet <code>void</code>. Klasa pochodna wywołuje konstruktor bazowy przez <code>: base(...)</code>.</div>` }
      ],
      pytania: [
        Q("Metoda wczytująca wiersz tekstu z konsoli w C# to", "Console.ReadLine()", "Console.WriteLine()", "cin >>", "Console.Input()", ""),
        Q("Zamianę tekstu na liczbę bez zgłaszania wyjątku przy błędnych danych zapewnia", "int.TryParse", "int.Parse", "Convert.ToInt32 zawsze", "ToString()", ""),
        Q("Liczbę elementów listy List<int> w C# podaje właściwość", "Count", "Length", "Size", "Capacity zawsze równa liczbie elementów", ""),
        Q("Blok finally w instrukcji try wykonuje się", "zawsze, niezależnie od wystąpienia wyjątku", "tylko wtedy, gdy w bloku try wystąpi wyjątek", "tylko wtedy, gdy blok try skończy się bez błędu", "tylko w trybie Debug, w Release jest pomijany", ""),
        Q("Klasa w C# może dziedziczyć bezpośrednio", "po jednej klasie i implementować wiele interfejsów", "po wielu klasach naraz, tak samo jak w języku C++", "wyłącznie po interfejsach, nigdy po innej klasie", "po dwóch klasach i najwyżej jednym interfejsie", ""),
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
<div class="tip">Komentarz w Pythonie zaczyna się od <code>#</code>. W PHP i JavaScript jest to <code>//</code>.</div>
<h4>Typy danych i konwersje</h4>
<div class="tw"><table><tr><th>Typ</th><th>Przykład</th><th>Konwersja</th></tr>
<tr><td><code>int</code></td><td><code>42</code></td><td><code>int("42")</code></td></tr>
<tr><td><code>float</code></td><td><code>3.5</code></td><td><code>float("3.5")</code></td></tr>
<tr><td><code>str</code></td><td><code>"ala"</code> lub <code>'ala'</code></td><td><code>str(42)</code></td></tr>
<tr><td><code>bool</code></td><td><code>True</code>, <code>False</code></td><td><code>bool(0)</code> to False</td></tr></table></div>
<p>Typ sprawdzisz funkcją <code>type(x)</code>. Wartości logiczne piszemy wielką literą (<code>True</code>, <code>False</code>), a brak wartości oznacza <code>None</code>.</p>
<h4>Operacje na tekstach</h4>
<pre>s = "Egzamin"
len(s)          # 7
s.upper()       # 'EGZAMIN'
s[0], s[-1]     # 'E' i 'n'
s[0:3]          # 'Egz'
"ab" * 3        # 'ababab'
"2" + "3"       # '23', natomiast "2" + 3 to błąd TypeError</pre>
<h4>Przykład: parzystość i porównania</h4>
<pre>n = int(input("Liczba: "))
if n % 2 == 0 and n &gt; 0:
    print("dodatnia parzysta")
print(1 &lt; n &lt; 10)    # porównanie łańcuchowe, True dla n od 2 do 9</pre>
<h4>Pułapki</h4>
<ul><li>Brak dwukropka po <code>if</code>, <code>for</code>, <code>def</code> to <code>SyntaxError</code>.</li>
<li>Przypisanie to <code>=</code>, porównanie <code>==</code>.</li>
<li>Python nie ma operatora <code>++</code>; zwiększenie zapisujesz jako <code>i += 1</code>.</li>
<li><code>print()</code> domyślnie rozdziela argumenty spacją i kończy wypisywanie nową linią.</li></ul>
<p>Formatowanie wyniku: <code>round(3.14159, 2)</code> daje 3.14, a f-string <code>f"{x:.2f}"</code> zawsze pokazuje dwa miejsca po przecinku. Zmiennych nie deklaruje się typem, wystarczy przypisanie, a ta sama zmienna może później przechowywać wartość innego typu.</p>` },
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
<div class="tip"><code>range(a, b)</code> nie zawiera liczby b. <code>range(1, 5)</code> to 1, 2, 3, 4.</div>
<h4>Kolejne metody list</h4>
<div class="tw"><table><tr><th>Zapis</th><th>Działanie</th></tr>
<tr><td><code>t.insert(0, x)</code></td><td>wstawia x na początek</td></tr>
<tr><td><code>t.remove(x)</code></td><td>usuwa pierwsze wystąpienie wartości x</td></tr>
<tr><td><code>t.pop()</code></td><td>usuwa i zwraca ostatni element</td></tr>
<tr><td><code>t.sort()</code></td><td>sortuje listę w miejscu, zwraca None</td></tr>
<tr><td><code>t.index(x)</code>, <code>t.count(x)</code></td><td>pozycja, liczba wystąpień</td></tr>
<tr><td><code>x in t</code></td><td>True, gdy element jest na liście</td></tr></table></div>
<p>Różnica: <code>sorted(t)</code> zwraca nową listę i nie zmienia t, a <code>t.sort()</code> zmienia samą listę. Sortowanie malejące: <code>t.sort(reverse=True)</code>.</p>
<h4>Typowe zadanie: średnia i maksimum</h4>
<pre>oceny = [4, 5, 3, 6, 5]
suma = 0
for o in oceny:
    suma += o
print("Średnia:", suma / len(oceny))   # 4.6
najw = oceny[0]
for o in oceny:
    if o &gt; najw:
        najw = o</pre>
<h4>Słownik i krotka</h4>
<pre>ceny.get("ser", 0)     # 0, gdy klucza brak (bez błędu)
del ceny["mleko"]
"chleb" in ceny        # sprawdza klucze
punkt = (3, 4)         # krotka, niezmienna</pre>
<p>Odwołanie do nieistniejącego klucza <code>ceny["ser"]</code> zgłasza <code>KeyError</code>, a do zbyt dużego indeksu listy <code>IndexError</code>.</p>
<div class="tip">Wyrażenie listowe <code>[x * x for x in range(5)]</code> daje <code>[0, 1, 4, 9, 16]</code>.</div>
<p>Pułapka: <code>b = t</code> nie kopiuje listy, tylko tworzy drugą nazwę dla tej samej listy, więc zmiana b zmienia też t. Kopię robi się przez <code>b = t.copy()</code> albo <code>b = t[:]</code>. Pętla <code>for i in range(len(t))</code> daje indeksy, a <code>for x in t</code> same wartości.</p>` },
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
<p><code>self</code> odpowiada <code>this</code> w C++ i C#. Python jest językiem interpretowanym z dynamicznym typowaniem: typ zmiennej ustala się podczas działania programu.</p>
<h4>Parametry i zwracanie wielu wartości</h4>
<pre>def przywitaj(imie, powitanie="Cześć"):
    print(powitanie, imie)

przywitaj("Ola")                    # Cześć Ola
przywitaj("Jan", powitanie="Witaj") # Witaj Jan

def min_max(t):
    return min(t), max(t)          # zwraca krotkę

a, b = min_max([3, 9, 1])          # a = 1, b = 9</pre>
<p>Funkcja bez <code>return</code> zwraca <code>None</code>. Zmienna utworzona wewnątrz funkcji jest lokalna i nie istnieje poza nią.</p>
<h4>Tryby otwarcia pliku</h4>
<div class="tw"><table><tr><th>Tryb</th><th>Znaczenie</th></tr>
<tr><td><code>"r"</code></td><td>odczyt (domyślny), błąd, gdy pliku nie ma</td></tr>
<tr><td><code>"w"</code></td><td>zapis, nadpisuje całą zawartość</td></tr>
<tr><td><code>"a"</code></td><td>dopisywanie na końcu pliku</td></tr></table></div>
<pre>with open("wynik.txt", "w", encoding="utf-8") as f:
    f.write("Suma: " + str(150) + "\\n")</pre>
<p>Blok <code>with</code> sam zamyka plik. Metoda <code>write()</code> przyjmuje tylko tekst, dlatego liczbę zamieniamy przez <code>str()</code>.</p>
<h4>Dziedziczenie i wyjątki</h4>
<pre>class KontoOszczednosciowe(Konto):
    def odsetki(self):
        self.saldo *= 1.05

try:
    x = int(input("Liczba: "))
    print(10 / x)
except ValueError:
    print("To nie jest liczba")
except ZeroDivisionError:
    print("Dzielenie przez zero")</pre>
<p>Moduły dołącza się przez <code>import</code>: po <code>import math</code> wywołanie <code>math.sqrt(16)</code> daje <code>4.0</code>. Losowanie: <code>import random</code>, potem <code>random.randint(1, 6)</code> (obie granice włącznie).</p>
<h4>Pułapki</h4>
<ul><li>Metoda klasy zawsze ma <code>self</code> jako pierwszy parametr, ale przy wywołaniu go nie podajesz: <code>k.wplata(50)</code>.</li>
<li>Funkcję trzeba zdefiniować przez <code>def</code>, zanim zostanie wywołana.</li>
<li>Odczyt pliku zwraca tekst; liczby z pliku zamieniasz przez <code>int()</code> lub <code>float()</code>.</li></ul>` }
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
<div class="tip">Obraz z przezroczystym tłem zapisuj jako PNG. Zapis do JPG zamieni przezroczystość na kolor tła.</div>
<h4>Kompresja stratna i bezstratna</h4>
<p>Kompresja <b>bezstratna</b> (PNG, GIF, ZIP) pozwala odtworzyć obraz co do piksela. Kompresja <b>stratna</b> (JPG) usuwa szczegóły mało widoczne dla oka, dzięki czemu plik jest dużo mniejszy. Każdy ponowny zapis JPG pogarsza jakość, dlatego pracuje się na pliku roboczym (XCF, PSD), a JPG eksportuje na końcu, ustawiając jakość, np. 80%.</p>
<h4>Który format wybrać</h4>
<div class="tw"><table><tr><th>Sytuacja</th><th>Format</th></tr>
<tr><td>zdjęcie krajobrazu na stronę</td><td>JPG lub WebP</td></tr>
<tr><td>logo z przezroczystym tłem</td><td>PNG lub SVG</td></tr>
<tr><td>prosta animowana ikona</td><td>GIF</td></tr>
<tr><td>zrzut ekranu z tekstem</td><td>PNG (ostre krawędzie liter)</td></tr>
<tr><td>ikona karty przeglądarki (favicon)</td><td>ICO lub PNG</td></tr></table></div>
<h4>SVG na stronie</h4>
<pre>&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="orange" /&gt;
&lt;/svg&gt;
&lt;img src="logo.svg" alt="logo firmy"&gt;</pre>
<p>Plik SVG to tekst w formacie XML, więc można go edytować nawet w notatniku. Grafika wektorowa nie nadaje się do zdjęć, bo opis milionów różnokolorowych punktów byłby ogromny.</p>
<h4>Pułapki</h4>
<ul><li>Zmiana rozszerzenia z .jpg na .png nie zmienia formatu pliku, trzeba go wyeksportować.</li>
<li>GIF ma najwyżej 256 kolorów, więc zdjęcia wyglądają w nim źle.</li>
<li>Zamiana rastra na wektor to wektoryzacja, np. funkcja Wektoryzuj bitmapę w Inkscape.</li></ul>` },
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
<div class="tip">Typowe zadanie: zmniejsz zdjęcie tak, by dłuższy bok miał 600 px z zachowaniem proporcji. W GIMP: Obraz, Skaluj obraz, z zamkniętym łańcuszkiem.</div>
<h4>Zapis koloru w praktyce</h4>
<div class="tw"><table><tr><th>Kolor</th><th>RGB</th><th>HEX</th></tr>
<tr><td>czerwony</td><td>255, 0, 0</td><td>#FF0000</td></tr>
<tr><td>zielony</td><td>0, 255, 0</td><td>#00FF00</td></tr>
<tr><td>niebieski</td><td>0, 0, 255</td><td>#0000FF</td></tr>
<tr><td>żółty</td><td>255, 255, 0</td><td>#FFFF00</td></tr>
<tr><td>szary</td><td>128, 128, 128</td><td>#808080</td></tr></table></div>
<p>Trzy jednakowe składowe dają odcień szarości. W RGB suma wszystkich barw daje biel, a w CMYK zmieszanie farb daje kolor ciemny, stąd osobny kanał K (czarny).</p>
<h4>Przeliczanie dla druku</h4>
<pre>piksele = cale × dpi   (1 cal = 2,54 cm)
zdjęcie 10 × 15 cm przy 300 dpi:
10 cm = 3,937 cala, 3,937 × 300 ≈ 1181 px
15 cm = 5,906 cala, 5,906 × 300 ≈ 1772 px</pre>
<p>Zmiana samego parametru DPI bez zmiany liczby pikseli nie zmienia wyglądu obrazu na ekranie.</p>
<h4>Przykład rozmiaru pliku</h4>
<p>Obraz 1024 × 768 w 8-bitowej skali szarości: 1024 · 768 · 1 = 786 432 B, czyli 768 KB. Ten sam obraz w 24 bitach zajmuje trzy razy więcej: 2 359 296 B, czyli 2,25 MB. Przy przeliczeniach 1 KB = 1024 B, a 1 MB = 1024 KB.</p>
<h4>Pułapki</h4>
<ul><li>Głębia 16 bitów to 65 536 kolorów (2 do potęgi 16).</li>
<li>Gamut CMYK jest mniejszy niż RGB: jaskrawe kolory z ekranu w druku mogą wyjść bledsze.</li>
<li>Powiększenie zdjęcia rastrowego (interpolacja) nie dodaje szczegółów, obraz staje się rozmyty.</li></ul>` },
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
<div class="tip">Przy zdjęciach z internetu pamiętaj o prawie autorskim i licencjach (np. Creative Commons BY wymaga podania autora).</div>
<h4>Warstwy i zaznaczenia</h4>
<ul><li>Okno Warstwy (Ctrl+L) pokazuje stos warstw: górna zasłania dolne, a suwak Krycie ustawia przezroczystość warstwy.</li>
<li>Zaznaczenie prostokątne (R), eliptyczne (E), odręczne (F), rozmyte, czyli różdżka (U).</li>
<li>Narzędzie Tekst (T) tworzy osobną warstwę tekstową.</li>
<li>Filtry: Rozmycie gaussowskie, Wyostrzanie, Cień rzucany.</li></ul>
<h4>Wideo z kilkoma źródłami i napisami</h4>
<pre>&lt;video controls width="640"&gt;
  &lt;source src="film.webm" type="video/webm"&gt;
  &lt;source src="film.mp4" type="video/mp4"&gt;
  &lt;track src="napisy.vtt" kind="subtitles" srclang="pl" label="Polski"&gt;
  Twoja przeglądarka nie obsługuje wideo.
&lt;/video&gt;</pre>
<p>Przeglądarka odtwarza pierwsze źródło, które obsługuje. Tekst wewnątrz znacznika pojawi się tylko w przeglądarkach bez obsługi <code>&lt;video&gt;</code>. Napisy zapisuje się w formacie WebVTT (.vtt).</p>
<h4>Atrybuty multimediów</h4>
<div class="tw"><table><tr><th>Atrybut</th><th>Działanie</th></tr>
<tr><td><code>controls</code></td><td>przyciski odtwarzania</td></tr>
<tr><td><code>autoplay</code></td><td>start po wczytaniu strony</td></tr>
<tr><td><code>loop</code></td><td>odtwarzanie w pętli</td></tr>
<tr><td><code>muted</code></td><td>wyciszenie</td></tr>
<tr><td><code>poster</code></td><td>obraz przed startem filmu (tylko video)</td></tr></table></div>
<p>Pułapka: film bez <code>controls</code> i bez <code>autoplay</code> wyświetli się jako nieruchomy kadr, którego użytkownik nie uruchomi.</p>
<h4>Przygotowanie zdjęcia według arkusza</h4>
<ol><li>Otwórz plik, wykadruj potrzebny fragment.</li>
<li>Obraz, Skaluj obraz: ustaw wymiar podany w poleceniu, np. szerokość 400 px, przy połączonym łańcuszku.</li>
<li>Jeśli tło ma być przezroczyste, dodaj kanał alfa i usuń tło.</li>
<li>Plik, Eksportuj jako: wpisz nazwę z arkusza, np. <code>baner.png</code>, i wybierz format.</li></ol>` }
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
<p>Pakiet z Apache, MySQL/MariaDB, PHP i phpMyAdmin. Pliki strony w folderze <code>htdocs</code>, adres <code>http://localhost/projekt/</code>. phpMyAdmin: <code>http://localhost/phpmyadmin</code>, domyślny użytkownik <code>root</code> bez hasła.</p>
<h4>Metody HTTP</h4>
<div class="tw"><table><tr><th>Metoda</th><th>Zastosowanie</th></tr>
<tr><td>GET</td><td>pobranie zasobu, dane w adresie URL</td></tr>
<tr><td>POST</td><td>wysłanie danych w treści żądania (formularze)</td></tr>
<tr><td>PUT, DELETE</td><td>zmiana i usunięcie zasobu (API)</td></tr></table></div>
<h4>Budowa adresu URL</h4>
<pre>https://www.sklep.pl:443/produkty/lista.php?kat=2&amp;s=cena#opinie</pre>
<p>Kolejno: protokół <code>https</code>, domena <code>www.sklep.pl</code>, port <code>443</code>, ścieżka <code>/produkty/lista.php</code>, parametry po znaku <code>?</code> rozdzielone <code>&amp;</code> oraz kotwica po <code>#</code>. W domenie <code>.pl</code> to domena najwyższego poziomu (TLD), <code>sklep</code> domena drugiego poziomu, a <code>www</code> subdomena.</p>
<h4>Grupy kodów odpowiedzi</h4>
<p>1xx informacyjne, 2xx sukces, 3xx przekierowania (302 tymczasowe, 304 brak zmian), 4xx błąd klienta (400 złe żądanie, 401 wymagane uwierzytelnienie), 5xx błąd serwera (503 usługa niedostępna).</p>
<h4>Strona statyczna i dynamiczna</h4>
<p>Strona statyczna to gotowe pliki HTML, CSS i obrazy wysyłane bez zmian. Strona dynamiczna jest generowana przy każdym żądaniu przez skrypt (PHP, Python, Node.js), zwykle z danymi z bazy.</p>
<h4>Pułapki</h4>
<ul><li>Pliku .php otwartego z dysku (adres file://) przeglądarka nie wykona, potrzebny jest działający Apache.</li>
<li>Gdy w XAMPP nie startuje Apache, port 80 lub 443 zajmuje zwykle inny program.</li>
<li>Adres 127.0.0.1 oznacza to samo co localhost, czyli własny komputer.</li></ul>` },
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
<li>Włącz HTTPS (certyfikat, np. Let's Encrypt).</li></ol>
<div class="tip">Plik <code>.htaccess</code> w Apache ustawia przekierowania, przyjazne adresy i ochronę katalogów.</div>
<h4>Instalacja WordPressa lokalnie</h4>
<ol><li>Pobierz WordPress i rozpakuj go do <code>htdocs/blog</code>.</li>
<li>W phpMyAdmin utwórz pustą bazę, np. <code>blog</code>, z kodowaniem utf8mb4.</li>
<li>Wejdź na <code>http://localhost/blog</code> i podaj nazwę bazy, użytkownika <code>root</code>, puste hasło i serwer <code>localhost</code>.</li>
<li>Dane połączenia trafią do pliku <code>wp-config.php</code>.</li>
<li>Panel administracyjny jest pod adresem <code>/wp-admin</code>.</li></ol>
<h4>Elementy WordPressa</h4>
<div class="tw"><table><tr><th>Pojęcie</th><th>Znaczenie</th></tr>
<tr><td>wpis</td><td>treść z datą, kategoriami i tagami, np. aktualność na blogu</td></tr>
<tr><td>strona</td><td>treść stała bez daty, np. Kontakt, O nas</td></tr>
<tr><td>widżet</td><td>blok w panelu bocznym lub stopce</td></tr>
<tr><td>bezpośredni odnośnik (permalink)</td><td>przyjazny, stały adres wpisu</td></tr>
<tr><td>biblioteka mediów</td><td>wgrane obrazy i pliki</td></tr></table></div>
<h4>Hosting i bezpieczeństwo</h4>
<ul><li>Hosting współdzielony: wiele stron na jednym serwerze, najtańszy. VPS: wydzielona maszyna wirtualna. Serwer dedykowany: cały fizyczny serwer dla jednego klienta.</li>
<li>Rejestracja domeny i hosting to dwie osobne usługi, mogą być w różnych firmach.</li>
<li>Rozpropagowanie zmian DNS może trwać nawet do 48 godzin.</li>
<li>Przed aktualizacją zrób kopię plików i bazy, a dla administratora ustaw silne hasło.</li></ul>
<p>Pułapka: CMS to nie serwer WWW ani baza danych, tylko aplikacja działająca na serwerze. WordPress do działania potrzebuje serwera z PHP (np. Apache) i bazy MySQL lub MariaDB. Przeniesienie strony na hosting wymaga skopiowania plików i bazy oraz poprawienia danych w <code>wp-config.php</code>.</p>` },
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
<p>Pliki cookies wymagają informacji i zgody użytkownika. Dane osobowe chroni RODO. Treści i grafiki chroni prawo autorskie.</p>
<h4>Sekcja head przygotowana pod SEO</h4>
<pre>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Pizzeria Roma Kraków - menu i dowóz&lt;/title&gt;
  &lt;meta name="description" content="Pizza z pieca opalanego drewnem. Dowóz w Krakowie."&gt;
  &lt;meta name="keywords" content="pizza, Kraków, dowóz"&gt;
  &lt;meta name="robots" content="index, follow"&gt;
&lt;/head&gt;</pre>
<p>Meta keywords jest dziś ignorowane przez Google, ale wciąż pojawia się w pytaniach testowych. Wartość <code>noindex</code> w meta robots prosi wyszukiwarkę, by nie dodawała strony do wyników.</p>
<h4>Plik robots.txt</h4>
<pre>User-agent: *
Disallow: /admin/
Sitemap: https://www.pizzeria.pl/sitemap.xml</pre>
<h4>Dostępność w kodzie</h4>
<ul><li><code>&lt;html lang="pl"&gt;</code>, aby czytnik ekranu użył polskiej wymowy.</li>
<li>Obraz dekoracyjny dostaje pusty opis <code>alt=""</code>, obraz z treścią rzeczowy opis.</li>
<li>Atrybut <code>aria-label</code> opisuje przycisk bez tekstu, np. ikonę lupy.</li>
<li>Informacji nie można przekazywać wyłącznie kolorem.</li></ul>
<h4>Narzędzia</h4>
<p>Lighthouse w narzędziach F12 ocenia wydajność, dostępność, SEO i dobre praktyki. Google Search Console pokazuje, jak strona jest indeksowana. Walidator CSS działa pod adresem jigsaw.w3.org/css-validator.</p>
<h4>Pułapki</h4>
<ul><li>Pozycjonowanie (SEO) to działania na stronie i poza nią, a płatne reklamy w wyszukiwarce to SEM.</li>
<li>Ukrywanie słów kluczowych, np. białym tekstem na białym tle, wyszukiwarki karzą obniżeniem pozycji.</li>
<li>Plik robots.txt nie chroni danych, tylko prosi roboty o pomijanie katalogów; prywatne zasoby zabezpiecza się hasłem.</li>
<li>Tytuł strony powinien mieć do około 60 znaków, a opis description do około 160.</li></ul>` }
      ],
      pytania: [
        Q("Domyślny port protokołu HTTPS to", "443", "80", "21", "3306", ""),
        Q("Kod odpowiedzi HTTP oznaczający, że zasób nie został znaleziony, to", "404", "200", "301", "500", ""),
        Q("Kod PHP jest wykonywany", "na serwerze, a do przeglądarki trafia wynik w HTML", "w przeglądarce, tak samo jak kod JavaScript", "przez serwer bazy danych MySQL przy zapytaniu", "na komputerze użytkownika po pobraniu pliku .php", ""),
        Q("Rekord DNS wskazujący adres IPv4 domeny to", "A", "MX", "CNAME", "AAAA", "AAAA dotyczy IPv6."),
        Q("WordPress jest przykładem", "systemu CMS", "serwera WWW", "systemu baz danych", "edytora grafiki wektorowej", ""),
        Q("W pakiecie XAMPP pliki strony umieszcza się domyślnie w folderze", "htdocs", "mysql", "apache/bin", "tmp", ""),
        Q("Opis strony wyświetlany w wynikach wyszukiwania ustawia znacznik", "<meta name=\"description\">", "<meta name=\"keywords\">", "<meta name=\"author\">", "<link rel=\"canonical\">", ""),
        Q("Minimalny zalecany przez WCAG kontrast zwykłego tekstu do tła to", "4,5:1", "1:1", "2:1", "10:1", "")
      ]
    }
  ]);
})(window.KURSY);
