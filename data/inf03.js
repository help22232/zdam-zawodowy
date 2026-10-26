window.KURSY = window.KURSY || {};
window.KURSY["INF.03"] = {
  podstawowy: [
    {
      tytul: "HTML — struktura dokumentu i znaczniki",
      tresc: `
<h4>Szkielet strony</h4>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="pl"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Moja strona&lt;/title&gt;
  &lt;link rel="stylesheet" href="styl.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;nav&gt;...&lt;/nav&gt;
  &lt;main&gt;&lt;section&gt;&lt;article&gt;...&lt;/article&gt;&lt;/section&gt;&lt;/main&gt;
  &lt;aside&gt;...&lt;/aside&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<h4>Najważniejsze znaczniki</h4>
<div class="tw"><table><tr><th>Znacznik</th><th>Znaczenie</th></tr>
<tr><td><code>&lt;h1&gt;</code>…<code>&lt;h6&gt;</code></td><td>nagłówki</td></tr>
<tr><td><code>&lt;p&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code></td><td>akapit, złamanie wiersza, linia pozioma</td></tr>
<tr><td><code>&lt;b&gt;</code>/<code>&lt;strong&gt;</code>, <code>&lt;i&gt;</code>/<code>&lt;em&gt;</code>, <code>&lt;sub&gt;</code>, <code>&lt;sup&gt;</code></td><td>pogrubienie, kursywa, indeks dolny i górny</td></tr>
<tr><td><code>&lt;a href="..."&gt;</code></td><td>odnośnik; <code>target="_blank"</code> — nowa karta; <code>href="mailto:..."</code> — e-mail</td></tr>
<tr><td><code>&lt;img src="..." alt="..."&gt;</code></td><td>obraz; <code>alt</code> — tekst alternatywny</td></tr>
<tr><td><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></td><td>lista punktowana, numerowana, element listy; <code>&lt;ol type="A" start="3"&gt;</code></td></tr>
<tr><td><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code></td><td>tabela, wiersz, komórka nagłówkowa, komórka; <code>colspan</code>, <code>rowspan</code> — scalanie</td></tr>
<tr><td><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code></td><td>kontener blokowy, liniowy</td></tr>
<tr><td><code>&lt;audio&gt;</code>, <code>&lt;video controls&gt;</code></td><td>multimedia</td></tr></table></div>
<h4>Formularze</h4>
<pre>&lt;form action="zapisz.php" method="post"&gt;
  &lt;input type="text" name="imie" required&gt;
  &lt;input type="number" name="wiek" min="1" max="120"&gt;
  &lt;input type="radio" name="plec" value="k"&gt; &lt;input type="checkbox" name="zgoda"&gt;
  &lt;select name="miasto"&gt;&lt;option&gt;Kraków&lt;/option&gt;&lt;/select&gt;
  &lt;textarea name="opis"&gt;&lt;/textarea&gt;
  &lt;button type="submit"&gt;Wyślij&lt;/button&gt; &lt;input type="reset"&gt;
&lt;/form&gt;</pre>
<p>Metoda <b>GET</b> przekazuje dane w adresie URL, <b>POST</b> — w treści żądania (dla haseł i większych danych).</p>`
    },
    {
      tytul: "CSS — selektory, model pudełkowy, układ",
      tresc: `
<h4>Sposoby dołączania</h4>
<p>Styl zewnętrzny (<code>&lt;link&gt;</code>), wewnętrzny (<code>&lt;style&gt;</code> w nagłówku), lokalny (atrybut <code>style</code>). Najwyższy priorytet ma styl lokalny, potem identyfikator, klasa, znacznik.</p>
<h4>Selektory</h4>
<div class="tw"><table><tr><th>Selektor</th><th>Wybiera</th></tr>
<tr><td><code>p</code></td><td>wszystkie akapity</td></tr><tr><td><code>.menu</code></td><td>elementy z klasą menu</td></tr><tr><td><code>#logo</code></td><td>element o id="logo"</td></tr>
<tr><td><code>div p</code></td><td>akapity wewnątrz div (potomkowie)</td></tr><tr><td><code>div &gt; p</code></td><td>akapity będące bezpośrednimi dziećmi div</td></tr>
<tr><td><code>h1, h2</code></td><td>nagłówki h1 i h2</td></tr><tr><td><code>a:hover</code></td><td>odnośnik wskazany kursorem</td></tr>
<tr><td><code>li:nth-child(2)</code></td><td>drugi element listy</td></tr><tr><td><code>input[type="text"]</code></td><td>pola tekstowe</td></tr></table></div>
<h4>Model pudełkowy</h4>
<p>Od środka: <b>content → padding → border → margin</b>. <code>padding: 10px 20px</code> — góra/dół 10px, lewo/prawo 20px. <code>margin: 5px 10px 15px 20px</code> — kolejno góra, prawo, dół, lewo (zgodnie z ruchem wskazówek zegara).</p>
<h4>Najczęstsze właściwości</h4>
<ul>
<li>tekst: <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>font-weight: bold</code>, <code>font-style: italic</code>, <code>text-align: center</code>, <code>text-decoration: underline</code>, <code>text-transform: uppercase</code>, <code>letter-spacing</code>, <code>line-height</code></li>
<li>tło i obramowanie: <code>background-color</code>, <code>background-image</code>, <code>border: 1px solid black</code>, <code>border-radius</code>, <code>box-shadow</code></li>
<li>układ: <code>float: left</code> + <code>clear: both</code>; <code>display: flex</code>; <code>display: grid</code>; <code>width</code>, <code>height</code></li>
<li>listy: <code>list-style-type: square</code>; tabela: <code>border-collapse: collapse</code></li>
</ul>
<p>Kolory: nazwy (<code>red</code>), <code>#FF0000</code>, <code>rgb(255,0,0)</code>, <code>rgba(…, 0.5)</code> — z przezroczystością.</p>`
    },
    {
      tytul: "JavaScript — podstawy",
      tresc: `
<h4>Zmienne i typy</h4>
<pre>let a = 5;          // zmienna
const PI = 3.14;    // stała
var x = "tekst";    // starszy sposób
let t = [1, 2, 3];  // tablica, t.length == 3, t[0] == 1</pre>
<h4>Instrukcje</h4>
<pre>if (a &gt; 3) { ... } else { ... }
for (let i = 0; i &lt; 10; i++) { ... }
while (warunek) { ... }
switch (dzien) { case 1: ...; break; default: ... }
function suma(x, y) { return x + y; }</pre>
<p>Operator <code>==</code> porównuje wartości z konwersją typów, <code>===</code> — wartość i typ. <code>"5" == 5</code> to true, <code>"5" === 5</code> to false.</p>
<h4>DOM — praca z dokumentem</h4>
<pre>let el = document.getElementById("wynik");
el.innerHTML = "Witaj";
let v = document.getElementById("pole").value;
document.querySelector(".klasa").style.color = "red";
przycisk.addEventListener("click", oblicz);</pre>
<p>Zdarzenia: <code>onclick</code>, <code>onload</code>, <code>onchange</code>, <code>onmouseover</code>, <code>onsubmit</code>, <code>onkeyup</code>.</p>
<h4>Przydatne funkcje</h4>
<p><code>parseInt()</code>, <code>parseFloat()</code>, <code>Number()</code>, <code>Math.round()</code>, <code>Math.random()</code>, <code>toFixed(2)</code>, <code>alert()</code>, <code>console.log()</code>, <code>prompt()</code>.</p>`
    },
    {
      tytul: "Bazy danych i język SQL",
      tresc: `
<h4>Pojęcia</h4>
<ul>
<li><b>Klucz główny</b> (PRIMARY KEY) — jednoznacznie identyfikuje wiersz, unikalny i niepusty.</li>
<li><b>Klucz obcy</b> (FOREIGN KEY) — odwołuje się do klucza głównego innej tabeli; tworzy relację.</li>
<li>Relacje: jeden do jednego, <b>jeden do wielu</b>, wiele do wielu (wymaga tabeli pośredniej).</li>
<li>Normalizacja: 1NF — wartości atomowe; 2NF — pełna zależność od klucza; 3NF — brak zależności przechodnich.</li>
<li>Typy danych MySQL: <code>INT</code>, <code>DECIMAL(10,2)</code>, <code>VARCHAR(50)</code>, <code>TEXT</code>, <code>DATE</code>, <code>DATETIME</code>, <code>BOOLEAN</code>.</li>
</ul>
<h4>Zapytania</h4>
<pre>SELECT imie, nazwisko FROM klienci WHERE miasto = 'Kraków' ORDER BY nazwisko DESC;
SELECT COUNT(*), AVG(cena), MAX(cena), MIN(cena), SUM(ilosc) FROM produkty;
SELECT kategoria, COUNT(*) FROM produkty GROUP BY kategoria HAVING COUNT(*) &gt; 5;
SELECT * FROM produkty WHERE nazwa LIKE 'A%' AND cena BETWEEN 10 AND 50;
SELECT k.nazwisko, z.data FROM klienci k JOIN zamowienia z ON k.id = z.klient_id;
SELECT DISTINCT miasto FROM klienci LIMIT 5;</pre>
<pre>INSERT INTO klienci (imie, nazwisko) VALUES ('Anna', 'Nowak');
UPDATE produkty SET cena = cena * 1.1 WHERE kategoria = 'AGD';
DELETE FROM klienci WHERE id = 7;</pre>
<pre>CREATE TABLE klienci (id INT PRIMARY KEY AUTO_INCREMENT, imie VARCHAR(30) NOT NULL);
ALTER TABLE klienci ADD email VARCHAR(50);
DROP TABLE klienci;</pre>
<h4>Uprawnienia</h4>
<pre>CREATE USER 'jan'@'localhost' IDENTIFIED BY 'Haslo1!';
GRANT SELECT, INSERT ON sklep.* TO 'jan'@'localhost';
REVOKE INSERT ON sklep.* FROM 'jan'@'localhost';</pre>
<p>Grupy poleceń: <b>DDL</b> (CREATE, ALTER, DROP), <b>DML</b> (SELECT, INSERT, UPDATE, DELETE), <b>DCL</b> (GRANT, REVOKE).</p>
<div class="tip"><code>LIKE 'A%'</code> — zaczyna się na A; <code>'%a'</code> — kończy się na a; <code>'_a%'</code> — druga litera to a.</div>`
    },
    {
      tytul: "PHP i połączenie z bazą MySQL",
      tresc: `
<h4>Składnia</h4>
<pre>&lt;?php
$imie = "Ola";               // zmienne zaczynają się od $
echo "Witaj, " . $imie;      // kropka łączy napisy
$tab = array(3, 5, 8);       // count($tab) == 3
for ($i = 0; $i &lt; count($tab); $i++) { echo $tab[$i]; }
foreach ($tab as $x) { echo $x; }
?&gt;</pre>
<p>Dane z formularza: <code>$_POST['imie']</code>, <code>$_GET['id']</code>. Sprawdzenie: <code>isset($_POST['imie'])</code>, <code>!empty(...)</code>.</p>
<h4>MySQLi — schemat pracy</h4>
<pre>&lt;?php
$polaczenie = mysqli_connect("localhost", "root", "", "sklep");
$wynik = mysqli_query($polaczenie, "SELECT nazwa, cena FROM produkty");
while ($w = mysqli_fetch_array($wynik)) {
    echo "&lt;li&gt;" . $w['nazwa'] . " - " . $w['cena'] . "&lt;/li&gt;";
}
mysqli_close($polaczenie);
?&gt;</pre>
<p>Inne funkcje: <code>mysqli_fetch_row()</code> (tablica numeryczna), <code>mysqli_fetch_assoc()</code> (asocjacyjna), <code>mysqli_num_rows()</code>, <code>mysqli_error()</code>.</p>
<h4>Bezpieczeństwo</h4>
<ul><li><b>SQL injection</b> — wstrzyknięcie kodu SQL przez pole formularza. Ochrona: zapytania przygotowane (<code>mysqli_prepare</code>, PDO), <code>mysqli_real_escape_string()</code>.</li><li>Hasła przechowuje się jako skrót: <code>password_hash()</code>, weryfikacja <code>password_verify()</code>.</li><li><code>htmlspecialchars()</code> chroni przed XSS przy wyświetlaniu danych od użytkownika.</li></ul>`
    },
    {
      tytul: "Grafika i multimedia na stronach",
      tresc: `
<h4>Formaty grafiki</h4>
<div class="tw"><table><tr><th>Format</th><th>Cechy</th></tr>
<tr><td>JPEG</td><td>kompresja stratna, fotografie, brak przezroczystości</td></tr>
<tr><td>PNG</td><td>kompresja bezstratna, kanał alfa (przezroczystość)</td></tr>
<tr><td>GIF</td><td>do 256 kolorów, animacje, przezroczystość jednego koloru</td></tr>
<tr><td>SVG</td><td>grafika wektorowa (XML), skalowanie bez utraty jakości</td></tr>
<tr><td>WebP</td><td>nowoczesny, stratny i bezstratny, przezroczystość</td></tr></table></div>
<h4>Pojęcia</h4>
<ul>
<li><b>Grafika rastrowa</b> — siatka pikseli; <b>wektorowa</b> — obiekty opisane matematycznie.</li>
<li>Modele barw: <b>RGB</b> (addytywny, ekrany), <b>CMYK</b> (subtraktywny, druk), HSV/HSL.</li>
<li>Rozdzielczość do druku — 300 dpi, na ekran — wystarczy wymiar w pikselach.</li>
<li>Kanał alfa — informacja o przezroczystości piksela.</li>
<li>Formaty dźwięku: WAV (bez kompresji), MP3 i OGG (stratne), FLAC (bezstratny). Wideo: MP4 (H.264), WebM.</li>
</ul>
<h4>Walidacja i dostępność</h4>
<p>Kod sprawdza się walidatorem W3C. Dla dostępności (WCAG): atrybut <code>alt</code>, odpowiedni kontrast, logiczne nagłówki, etykiety <code>&lt;label&gt;</code> przy polach formularza.</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Zadanie praktyczne INF.03 krok po kroku",
      tresc: `
<p>Typowe zadanie praktyczne (model „wk”, 150 minut) składa się z czterech części: <b>baza danych</b>, <b>grafika</b>, <b>strona HTML + CSS</b>, <b>skrypt</b> (PHP z bazą lub JavaScript).</p>
<h4>1. Baza danych (phpMyAdmin)</h4>
<ol><li>Utwórz bazę o podanej nazwie i zaimportuj plik .sql.</li><li>Napisz zapytania z treści zadania i sprawdź je w zakładce SQL.</li><li>Zrób zrzuty ekranu wyników — nazwy plików <b>dokładnie</b> jak w poleceniu (np. <code>kw1.png</code>).</li><li>Zapisz zapytania w pliku tekstowym <code>kwerendy.txt</code>.</li></ol>
<h4>2. Grafika</h4><p>Przeskaluj obraz do wymaganych wymiarów (zachowując proporcje), zmień format (np. na PNG z przezroczystością) w programie graficznym.</p>
<h4>3. Strona</h4><p>Zbuduj układ bloków dokładnie wg rysunku (np. baner, panel lewy, panel prawy, stopka). Ustaw kolory, czcionki i wymiary z treści. Plik stylu ma podaną nazwę i jest dołączony przez <code>&lt;link&gt;</code>.</p>
<h4>4. Skrypt</h4>
<pre>&lt;?php
$db = mysqli_connect("localhost", "root", "", "baza");
$q = "SELECT ...";
$r = mysqli_query($db, $q);
while ($w = mysqli_fetch_row($r)) {
    echo "&lt;p&gt;$w[0] $w[1]&lt;/p&gt;";
}
mysqli_close($db);
?&gt;</pre>
<div class="tip">Zostaw 15 minut na sprawdzenie: nazwy plików, folder z numerem PESEL, poprawność kodu w walidatorze, działanie w przeglądarce. Brak zamknięcia połączenia z bazą to utracony punkt.</div>`
    },
    {
      tytul: "Zaawansowany SQL i projektowanie bazy",
      tresc: `
<h4>Złączenia</h4>
<ul>
<li><code>INNER JOIN</code> — tylko wiersze z dopasowaniem w obu tabelach.</li>
<li><code>LEFT JOIN</code> — wszystkie wiersze z lewej tabeli, z prawej — gdy pasują (inaczej NULL).</li>
<li><code>RIGHT JOIN</code> — odwrotnie.</li>
</ul>
<h4>Podzapytania i funkcje</h4>
<pre>SELECT nazwa FROM produkty WHERE cena &gt; (SELECT AVG(cena) FROM produkty);
SELECT UPPER(nazwisko), LENGTH(imie), YEAR(data_ur), NOW(), CONCAT(imie,' ',nazwisko) FROM osoby;
SELECT * FROM klienci WHERE email IS NULL;</pre>
<h4>Więzy integralności</h4>
<pre>CREATE TABLE zamowienia (
  id INT PRIMARY KEY AUTO_INCREMENT,
  klient_id INT,
  kwota DECIMAL(8,2) DEFAULT 0 CHECK (kwota &gt;= 0),
  FOREIGN KEY (klient_id) REFERENCES klienci(id) ON DELETE CASCADE
);</pre>
<p><code>ON DELETE CASCADE</code> usuwa zamówienia razem z klientem. <code>UNIQUE</code> zapewnia unikalność, <code>NOT NULL</code> wymusza wartość.</p>
<h4>Transakcje i kopie</h4>
<p>Transakcja (<code>START TRANSACTION … COMMIT</code> lub <code>ROLLBACK</code>) spełnia zasady <b>ACID</b>: niepodzielność, spójność, izolacja, trwałość. Kopię bazy tworzy się eksportem do pliku .sql (phpMyAdmin) lub poleceniem <code>mysqldump</code>.</p>`
    },
    {
      tytul: "JavaScript zaawansowany i responsywność",
      tresc: `
<h4>Obiekty i tablice</h4>
<pre>let osoba = { imie: "Jan", wiek: 30 };
osoba.wiek++;
let liczby = [4, 9, 2];
liczby.push(7);              // dodaj na koniec
liczby.sort((a, b) =&gt; a - b); // sortuj rosnąco
let suma = liczby.reduce((s, x) =&gt; s + x, 0);</pre>
<h4>Manipulowanie stroną</h4>
<pre>let li = document.createElement("li");
li.textContent = "Nowy";
document.getElementById("lista").appendChild(li);
element.classList.toggle("ukryty");
element.style.display = "none";</pre>
<h4>Responsive Web Design</h4>
<pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
@media (max-width: 600px) {
  nav { width: 100%; float: none; }
}</pre>
<p>Jednostki względne: <code>%</code>, <code>em</code> (względem czcionki rodzica), <code>rem</code> (względem korzenia), <code>vw</code>/<code>vh</code> (szerokość/wysokość okna).</p>
<h4>Systemy CMS</h4><p>WordPress, Joomla, Drupal — strona zarządzana przez panel administracyjny, wygląd zmienia się motywem (szablonem), funkcje — wtyczkami.</p>`
    }
  ],
  pytania: [
    { p: "Znacznik HTML służący do utworzenia listy numerowanej to", o: ["`<ol>`", "`<ul>`", "`<dl>`", "`<li>`"], k: 0, w: "ol — ordered list; ul — lista punktowana; li — element listy." },
    { p: "Atrybut znacznika `<img>`, który określa tekst wyświetlany, gdy obraz się nie załaduje, to", o: ["alt", "title", "src", "name"], k: 0, w: "alt to tekst alternatywny, ważny też dla czytników ekranu." },
    { p: "Aby scalić dwie komórki tabeli w poziomie, należy użyć atrybutu", o: ["colspan=\"2\"", "rowspan=\"2\"", "merge=\"2\"", "cellspacing=\"2\""], k: 0, w: "colspan scala kolumny, rowspan — wiersze." },
    { p: "Atrybut `target=\"_blank\"` w odnośniku powoduje", o: ["otwarcie strony w nowej karcie lub oknie", "pogrubienie odnośnika", "zablokowanie odnośnika", "otwarcie strony w tej samej karcie"], k: 0, w: "_blank otwiera dokument w nowym kontekście przeglądania." },
    { p: "Metoda przesyłania danych formularza, w której dane widoczne są w adresie URL, to", o: ["GET", "POST", "PUT", "SEND"], k: 0, w: "GET dodaje parametry do adresu, np. strona.php?id=5." },
    { p: "Selektor CSS `#menu` odnosi się do elementu", o: ["o identyfikatorze menu", "z klasą menu", "o nazwie znacznika menu", "wszystkich elementów w menu"], k: 0, w: "# — identyfikator, kropka — klasa." },
    { p: "Zapis CSS `margin: 10px 20px 30px 40px;` ustawia margines lewy na", o: ["40px", "10px", "20px", "30px"], k: 0, w: "Kolejność: góra, prawo, dół, lewo." },
    { p: "W modelu pudełkowym CSS odstęp między zawartością elementu a jego obramowaniem to", o: ["padding", "margin", "border", "outline"], k: 0, w: "padding — wewnętrzny odstęp; margin — zewnętrzny." },
    { p: "Która właściwość CSS zmienia krój czcionki?", o: ["font-family", "font-style", "font-weight", "text-transform"], k: 0, w: "font-style — kursywa, font-weight — grubość, text-transform — wielkość liter." },
    { p: "Aby tekst był wyświetlany wielkimi literami, należy w CSS użyć", o: ["text-transform: uppercase", "font-variant: bold", "text-decoration: capital", "font-size: large"], k: 0, w: "uppercase zamienia wszystkie litery na wielkie." },
    { p: "Selektor `div > p` wybiera", o: ["akapity będące bezpośrednimi dziećmi elementu div", "wszystkie akapity w dokumencie", "elementy div wewnątrz akapitów", "akapit występujący bezpośrednio po div"], k: 0, w: "> oznacza bezpośredniego potomka; spacja — dowolnego." },
    { p: "Kolor zapisany w CSS jako `#00FF00` to", o: ["zielony", "czerwony", "niebieski", "żółty"], k: 0, w: "Format #RRGGBB: tylko składowa G ma wartość maksymalną." },
    { p: "W JavaScript wynik porównania `\"5\" === 5` to", o: ["false", "true", "undefined", "NaN"], k: 0, w: "=== porównuje także typ: napis i liczba to różne typy." },
    { p: "Metoda JavaScript zwracająca element o podanym identyfikatorze to", o: ["document.getElementById()", "document.getElementByName()", "window.findId()", "document.id()"], k: 0, w: "getElementById zwraca jeden element o danym id." },
    { p: "Właściwość pozwalająca odczytać tekst wpisany w pole `<input>` w JavaScript to", o: ["value", "innerHTML", "text", "content"], k: 0, w: "Wartość pola formularza odczytuje się przez .value." },
    { p: "Funkcja JavaScript zamieniająca napis \"12.5\" na liczbę zmiennoprzecinkową to", o: ["parseFloat()", "parseInt()", "toString()", "Math.round()"], k: 0, w: "parseInt zwróciłby 12, odcinając część ułamkową." },
    { p: "Pętla `for (let i = 0; i < 5; i++)` wykona się", o: ["5 razy", "4 razy", "6 razy", "nieskończenie wiele razy"], k: 0, w: "i przyjmuje wartości 0, 1, 2, 3, 4." },
    { p: "W PHP nazwy zmiennych poprzedza się znakiem", o: ["$", "#", "@", "&"], k: 0, w: "Np. $imie, $wynik." },
    { p: "Operator łączenia napisów w PHP to", o: ["kropka (.)", "plus (+)", "ampersand (&)", "przecinek (,)"], k: 0, w: "echo \"Witaj \" . $imie;" },
    { p: "Funkcja PHP nawiązująca połączenie z bazą MySQL to", o: ["mysqli_connect()", "mysqli_query()", "mysqli_fetch_row()", "mysql_open()"], k: 0, w: "mysqli_connect(host, użytkownik, hasło, baza)." },
    { p: "Funkcja PHP zwracająca kolejny wiersz wyniku zapytania jako tablicę indeksowaną numerycznie to", o: ["mysqli_fetch_row()", "mysqli_fetch_assoc()", "mysqli_num_rows()", "mysqli_close()"], k: 0, w: "fetch_row — indeksy 0, 1, 2…; fetch_assoc — nazwy kolumn." },
    { p: "Funkcja PHP zwracająca liczbę wierszy w wyniku zapytania to", o: ["mysqli_num_rows()", "mysqli_fetch_array()", "count_rows()", "mysqli_affected()"], k: 0, w: "mysqli_num_rows($wynik) podaje liczbę zwróconych rekordów." },
    { p: "Dane z formularza wysłanego metodą POST odczytuje się w PHP z tablicy", o: ["$_POST", "$_GET", "$_SESSION", "$_COOKIE"], k: 0, w: "$_POST['nazwa_pola']." },
    { p: "Atak polegający na wstrzyknięciu fragmentu zapytania do bazy przez pole formularza to", o: ["SQL injection", "phishing", "DDoS", "spoofing"], k: 0, w: "Chronią przed nim zapytania przygotowane i filtrowanie danych." },
    { p: "Klucz główny tabeli", o: ["jednoznacznie identyfikuje każdy rekord", "może zawierać wartości powtarzające się", "musi być typu tekstowego", "łączy zawsze trzy tabele"], k: 0, w: "PRIMARY KEY jest unikalny i nie może mieć wartości NULL." },
    { p: "Pole tabeli odwołujące się do klucza głównego innej tabeli to", o: ["klucz obcy", "indeks pełnotekstowy", "klucz kandydujący", "pole obliczeniowe"], k: 0, w: "FOREIGN KEY tworzy relację między tabelami." },
    { p: "Zapytanie `SELECT * FROM klienci WHERE nazwisko LIKE 'K%';` wybierze klientów, których nazwisko", o: ["zaczyna się na literę K", "kończy się na literę K", "zawiera literę K w dowolnym miejscu", "ma dokładnie jedną literę K"], k: 0, w: "% zastępuje dowolny ciąg znaków." },
    { p: "Która klauzula SQL sortuje wyniki malejąco?", o: ["ORDER BY ... DESC", "ORDER BY ... ASC", "GROUP BY ... DESC", "SORT ... DOWN"], k: 0, w: "ASC — rosnąco (domyślnie), DESC — malejąco." },
    { p: "Funkcja agregująca SQL obliczająca średnią to", o: ["AVG()", "SUM()", "COUNT()", "MEAN()"], k: 0, w: "AVG — średnia, SUM — suma, COUNT — liczba wierszy." },
    { p: "Klauzula filtrująca grupy utworzone przez GROUP BY to", o: ["HAVING", "WHERE", "LIMIT", "DISTINCT"], k: 0, w: "WHERE filtruje wiersze przed grupowaniem, HAVING — grupy po nim." },
    { p: "Polecenie SQL zmieniające dane istniejących rekordów to", o: ["UPDATE", "ALTER", "INSERT", "MODIFY"], k: 0, w: "UPDATE zmienia dane; ALTER zmienia strukturę tabeli." },
    { p: "Polecenie dodające kolumnę do istniejącej tabeli to", o: ["ALTER TABLE ... ADD", "UPDATE TABLE ... ADD", "INSERT INTO ... COLUMN", "CREATE COLUMN"], k: 0, w: "ALTER TABLE klienci ADD email VARCHAR(50);" },
    { p: "Polecenie nadające użytkownikowi uprawnienia w MySQL to", o: ["GRANT", "REVOKE", "ALLOW", "PERMIT"], k: 0, w: "GRANT nadaje, REVOKE odbiera uprawnienia (DCL)." },
    { p: "Polecenia CREATE, ALTER i DROP należą do grupy", o: ["DDL", "DML", "DCL", "TCL"], k: 0, w: "DDL — Data Definition Language, definiowanie struktury." },
    { p: "Słowo kluczowe SQL eliminujące powtarzające się wiersze wyniku to", o: ["DISTINCT", "UNIQUE", "LIMIT", "ONLY"], k: 0, w: "SELECT DISTINCT miasto FROM klienci;" },
    { p: "Złączenie zwracające wszystkie wiersze tabeli lewej, nawet bez dopasowania w tabeli prawej, to", o: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SELF JOIN"], k: 0, w: "Brakujące dane z prawej tabeli przyjmują wartość NULL." },
    { p: "Format graficzny z kompresją bezstratną, obsługujący kanał alfa, to", o: ["PNG", "JPEG", "BMP", "GIF z 16 mln kolorów"], k: 0, w: "PNG zapewnia pełną przezroczystość i bezstratną kompresję." },
    { p: "Model barw stosowany w druku to", o: ["CMYK", "RGB", "HSV", "sRGB"], k: 0, w: "CMYK — cyan, magenta, yellow, key (czarny), model subtraktywny." },
    { p: "Grafika wektorowa przeznaczona do publikacji w internecie, zapisywana w formacie XML, to", o: ["SVG", "PNG", "TIFF", "PSD"], k: 0, w: "SVG skaluje się bez utraty jakości." },
    { p: "Reguła `@media (max-width: 600px)` w CSS służy do", o: ["zastosowania stylów na ekranach o szerokości do 600 px", "ustawienia szerokości strony na 600 px", "ukrycia strony na dużych ekranach", "wydruku strony"], k: 0, w: "Zapytania o media to podstawa projektowania responsywnego." }
  ]
};
