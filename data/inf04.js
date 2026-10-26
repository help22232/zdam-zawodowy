window.KURSY = window.KURSY || {};
window.KURSY["INF.04"] = {
  podstawowy: [
    {
      tytul: "Algorytmy i ich zapis",
      tresc: `
<h4>Sposoby zapisu</h4>
<p>Algorytm można zapisać jako <b>listę kroków</b>, <b>schemat blokowy</b> lub <b>pseudokod</b>. W schemacie blokowym: owal — start/stop, prostokąt — operacja, romb — warunek (decyzja), równoległobok — wejście/wyjście danych.</p>
<h4>Złożoność obliczeniowa</h4>
<div class="tw"><table><tr><th>Algorytm</th><th>Złożoność</th></tr>
<tr><td>wyszukiwanie liniowe</td><td>O(n)</td></tr>
<tr><td>wyszukiwanie binarne (w tablicy posortowanej)</td><td>O(log n)</td></tr>
<tr><td>sortowanie bąbelkowe, przez wybór, przez wstawianie</td><td>O(n²)</td></tr>
<tr><td>sortowanie przez scalanie, szybkie (średnio)</td><td>O(n log n)</td></tr></table></div>
<h4>Klasyczne algorytmy</h4>
<ul>
<li><b>NWD</b> — algorytm Euklidesa: dopóki b ≠ 0: (a, b) = (b, a mod b).</li>
<li><b>Liczba pierwsza</b> — sprawdzanie dzielników od 2 do √n.</li>
<li><b>Sito Eratostenesa</b> — wykreślanie wielokrotności kolejnych liczb pierwszych.</li>
<li><b>Ciąg Fibonacciego</b> — iteracyjnie lub rekurencyjnie: F(n) = F(n−1) + F(n−2).</li>
<li><b>Silnia</b> — n! = n · (n−1)!, 0! = 1.</li>
<li><b>Rekurencja</b> — funkcja wywołuje samą siebie; musi mieć warunek zakończenia.</li>
</ul>
<pre>// sortowanie bąbelkowe (C++)
for (int i = 0; i &lt; n - 1; i++)
  for (int j = 0; j &lt; n - 1 - i; j++)
    if (t[j] &gt; t[j + 1]) swap(t[j], t[j + 1]);</pre>`
    },
    {
      tytul: "Podstawy programowania: typy, instrukcje, funkcje",
      tresc: `
<h4>Typy danych (C++ / C#)</h4>
<div class="tw"><table><tr><th>Typ</th><th>Przechowuje</th></tr>
<tr><td><code>int</code></td><td>liczby całkowite (zwykle 4 bajty)</td></tr>
<tr><td><code>float</code>, <code>double</code></td><td>liczby zmiennoprzecinkowe (pojedyncza/podwójna precyzja)</td></tr>
<tr><td><code>char</code></td><td>pojedynczy znak</td></tr>
<tr><td><code>bool</code></td><td>true / false</td></tr>
<tr><td><code>string</code></td><td>napis</td></tr></table></div>
<h4>Operatory</h4>
<p><code>%</code> — reszta z dzielenia (<code>7 % 3 == 1</code>); dzielenie liczb całkowitych odcina część ułamkową (<code>7 / 2 == 3</code>). Logiczne: <code>&amp;&amp;</code> (i), <code>||</code> (lub), <code>!</code> (nie). <code>i++</code> zwiększa po użyciu, <code>++i</code> — przed.</p>
<h4>Instrukcje sterujące</h4>
<pre>if (x &gt; 0) { ... } else if (x == 0) { ... } else { ... }
switch (n) { case 1: ...; break; default: ...; }
for (int i = 0; i &lt; 10; i++) { ... }
while (warunek) { ... }          // może nie wykonać się ani razu
do { ... } while (warunek);      // wykona się co najmniej raz</pre>
<h4>Funkcje i przekazywanie parametrów</h4>
<pre>int suma(int a, int b) { return a + b; }
void zwieksz(int &amp;x) { x++; }  // przez referencję — zmienia oryginał
void pokaz(int x) { x++; }      // przez wartość — działa na kopii</pre>
<p>Tablica jednowymiarowa: <code>int t[5];</code> — indeksy od 0 do 4. Wyjście poza zakres to błąd.</p>`
    },
    {
      tytul: "Programowanie obiektowe",
      tresc: `
<h4>Cztery filary</h4>
<ul>
<li><b>Hermetyzacja</b> (enkapsulacja) — ukrywanie pól (<code>private</code>), dostęp przez metody (gettery, settery).</li>
<li><b>Dziedziczenie</b> — klasa pochodna przejmuje pola i metody klasy bazowej.</li>
<li><b>Polimorfizm</b> — ta sama metoda działa różnie w różnych klasach (metody wirtualne, przesłanianie — <code>override</code>).</li>
<li><b>Abstrakcja</b> — klasy abstrakcyjne i interfejsy opisują, co obiekt robi, bez szczegółów.</li>
</ul>
<h4>Modyfikatory dostępu</h4>
<p><code>public</code> — dostęp z każdego miejsca; <code>private</code> — tylko wewnątrz klasy; <code>protected</code> — w klasie i klasach pochodnych.</p>
<h4>Przykład (C#)</h4>
<pre>class Zwierze {
    protected string imie;
    public Zwierze(string imie) { this.imie = imie; }   // konstruktor
    public virtual string Glos() { return "..."; }
}
class Pies : Zwierze {
    public Pies(string imie) : base(imie) { }
    public override string Glos() { return "Hau"; }
}
Zwierze z = new Pies("Burek");
Console.WriteLine(z.Glos());   // Hau — polimorfizm</pre>
<ul>
<li><b>Konstruktor</b> ma nazwę klasy i nie zwraca wartości; wywołuje się przy tworzeniu obiektu. <b>Destruktor</b> (C++: <code>~Klasa()</code>) — przy usuwaniu.</li>
<li><b>Przeciążanie</b> metod — ta sama nazwa, różne parametry.</li>
<li>Pole <code>static</code> należy do klasy, a nie do obiektu.</li>
</ul>`
    },
    {
      tytul: "Aplikacje desktopowe, mobilne i webowe",
      tresc: `
<h4>Aplikacje desktopowe</h4>
<p>C# z <b>Windows Forms</b> lub <b>WPF</b> (XAML), Java z JavaFX. Programowanie zdarzeniowe: kontrolki (<code>Button</code>, <code>TextBox</code>, <code>Label</code>, <code>CheckBox</code>, <code>ComboBox</code>, <code>ListBox</code>) i metody obsługi zdarzeń, np. <code>button1_Click</code>.</p>
<h4>Aplikacje mobilne</h4>
<ul>
<li><b>Android</b>: Java/Kotlin w Android Studio; ekran to <b>Activity</b>, układ w XML (<code>LinearLayout</code>, <code>ConstraintLayout</code>), plik <code>AndroidManifest.xml</code> zawiera uprawnienia i listę aktywności.</li>
<li><b>Wieloplatformowe</b>: .NET MAUI (C#, XAML), React Native, Flutter (Dart).</li>
<li>Cykl życia aktywności Android: onCreate → onStart → onResume → onPause → onStop → onDestroy.</li>
</ul>
<h4>Aplikacje webowe</h4>
<p>Frontend: HTML, CSS, JavaScript i frameworki (React, Angular, Vue). Backend: np. Node.js, PHP, ASP.NET, Python (Django, Flask). Komunikacja przez <b>REST API</b>: GET (odczyt), POST (utworzenie), PUT (zmiana), DELETE (usunięcie), dane w formacie <b>JSON</b>.</p>
<h4>Kody odpowiedzi HTTP</h4><p>200 OK, 201 Created, 301 przekierowanie trwałe, 400 błędne żądanie, 401 brak autoryzacji, 403 zabronione, 404 nie znaleziono, 500 błąd serwera.</p>`
    },
    {
      tytul: "Testowanie i jakość kodu",
      tresc: `
<h4>Rodzaje testów</h4>
<ul>
<li><b>jednostkowe</b> — pojedyncze funkcje i metody (xUnit, NUnit, JUnit, pytest);</li>
<li><b>integracyjne</b> — współpraca modułów;</li>
<li><b>systemowe</b> — cała aplikacja;</li>
<li><b>akceptacyjne</b> — sprawdzenie z klientem, czy spełnia wymagania;</li>
<li><b>regresyjne</b> — czy zmiana nie zepsuła działających funkcji;</li>
<li><b>wydajnościowe</b> i obciążeniowe.</li>
</ul>
<p><b>Czarna skrzynka</b> — testujemy na podstawie specyfikacji, bez znajomości kodu. <b>Biała skrzynka</b> — na podstawie kodu (pokrycie instrukcji i gałęzi).</p>
<h4>Przykład testu (C#, xUnit)</h4>
<pre>[Fact]
public void Suma_DwieLiczby_ZwracaWynik() {
    Assert.Equal(5, Kalkulator.Suma(2, 3));
}</pre>
<h4>Debugowanie</h4><p>Punkt przerwania (breakpoint), praca krokowa (Step Over — przejdź, Step Into — wejdź do funkcji), podgląd zmiennych (Watch), stos wywołań.</p>
<h4>Kontrola wersji Git</h4>
<pre>git init / git clone adres
git add plik      git commit -m "opis"
git push          git pull
git branch nowa   git checkout nowa   git merge nowa</pre>
<p>Dobre praktyki: czytelne nazwy, komentarze, zasada DRY (nie powtarzaj się), dokumentacja kodu.</p>`
    }
  ],
  rozszerzony: [
    {
      tytul: "Struktury danych",
      tresc: `
<div class="tw"><table><tr><th>Struktura</th><th>Zasada</th><th>Operacje</th></tr>
<tr><td>stos (stack)</td><td>LIFO — ostatni wchodzi, pierwszy wychodzi</td><td>push, pop, top</td></tr>
<tr><td>kolejka (queue)</td><td>FIFO — pierwszy wchodzi, pierwszy wychodzi</td><td>enqueue, dequeue</td></tr>
<tr><td>lista jednokierunkowa / dwukierunkowa</td><td>elementy połączone wskaźnikami</td><td>szybkie wstawianie w środku</td></tr>
<tr><td>drzewo binarne (BST)</td><td>lewe poddrzewo mniejsze, prawe większe</td><td>wyszukiwanie średnio O(log n)</td></tr>
<tr><td>tablica asocjacyjna (słownik, mapa)</td><td>para klucz–wartość</td><td>Dictionary, map, dict</td></tr>
<tr><td>graf</td><td>wierzchołki i krawędzie</td><td>przeszukiwanie BFS (wszerz), DFS (w głąb)</td></tr></table></div>
<h4>Kolekcje w językach</h4>
<p>C#: <code>List&lt;int&gt;</code>, <code>Dictionary&lt;string,int&gt;</code>, <code>Stack&lt;T&gt;</code>, <code>Queue&lt;T&gt;</code>. C++ (STL): <code>vector</code>, <code>map</code>, <code>stack</code>, <code>queue</code>. Python: <code>list</code>, <code>dict</code>, <code>set</code>, <code>tuple</code>.</p>
<h4>Wzorce projektowe</h4>
<p><b>Singleton</b> — jedna instancja klasy; <b>Fabryka</b> — tworzenie obiektów bez wskazania klasy; <b>Obserwator</b> — powiadamianie subskrybentów o zmianach; <b>MVC</b> — model, widok, kontroler.</p>`
    },
    {
      tytul: "Zadanie praktyczne INF.04 — jak je wykonać",
      tresc: `
<p>Zadanie praktyczne (model „wk”, 180 minut) składa się zwykle z trzech części:</p>
<ol>
<li><b>Aplikacja konsolowa</b> z algorytmem i klasą (np. obsługa tablicy, sprawdzanie warunku, klasa z polami i metodami) — w C++, C#, Javie lub Pythonie.</li>
<li><b>Aplikacja z interfejsem graficznym</b> — desktopowa lub mobilna, według zrzutu ekranu: kontrolki, układ, kolory, obsługa przycisku.</li>
<li><b>Testy i dokumentacja</b> — zrzuty ekranu z działania, komentarze dokumentujące funkcje, opis testów.</li>
</ol>
<h4>Komentarz dokumentujący — schemat z kryteriów oceniania</h4>
<pre>/*******************************************
 nazwa funkcji: sortuj
 opis funkcji: sortuje tablicę rosnąco algorytmem bąbelkowym
 parametry: t - tablica liczb całkowitych, n - jej rozmiar
 zwracany typ i opis: brak
 autor: numer zdającego
********************************************/</pre>
<div class="tip">Kryteria często wymagają: zgodnych z treścią nazw klas i metod, hermetyzacji pól (private), konstruktora, komentarza nagłówkowego i czytelnego formatowania. Kompiluj program co kilka minut, by nie zostać z błędami na koniec.</div>`
    },
    {
      tytul: "Bezpieczeństwo i bazy danych w aplikacjach",
      tresc: `
<h4>Bezpieczne programowanie</h4>
<ul>
<li>Walidacja wszystkich danych wejściowych (typ, zakres, długość).</li>
<li>Zapytania parametryzowane zamiast sklejania SQL — ochrona przed SQL injection.</li>
<li>Hasła haszowane z solą (bcrypt, Argon2), nigdy w postaci jawnej.</li>
<li>Obsługa wyjątków: <code>try { ... } catch (Exception e) { ... } finally { ... }</code>.</li>
<li>Uwierzytelnianie (kim jesteś) a autoryzacja (co możesz zrobić).</li>
</ul>
<h4>ORM i bazy</h4>
<p>ORM mapuje tabele na klasy (Entity Framework w C#, Hibernate w Javie). Bazy relacyjne (MySQL, PostgreSQL, SQL Server, SQLite) i nierelacyjne NoSQL (MongoDB — dokumenty JSON).</p>
<h4>Metodyki wytwarzania oprogramowania</h4>
<ul><li><b>Kaskadowa</b> (waterfall) — kolejne etapy: analiza, projekt, implementacja, testy, wdrożenie.</li><li><b>Zwinne (Agile)</b>: Scrum — sprinty 1–4 tygodnie, role: Product Owner, Scrum Master, zespół deweloperski; codzienne spotkanie (daily). Kanban — tablica zadań.</li></ul>`
    }
  ],
  pytania: [
    { p: "Złożoność obliczeniowa wyszukiwania binarnego w tablicy posortowanej wynosi", o: ["O(log n)", "O(n)", "O(n²)", "O(1)"], k: 0, w: "W każdym kroku zakres poszukiwań zmniejsza się o połowę." },
    { p: "Sortowanie bąbelkowe ma pesymistyczną złożoność", o: ["O(n²)", "O(n log n)", "O(log n)", "O(n)"], k: 0, w: "Dwie zagnieżdżone pętle po n elementów." },
    { p: "W schemacie blokowym warunek (decyzję) oznacza się blokiem w kształcie", o: ["rombu", "prostokąta", "owalu", "równoległoboku"], k: 0, w: "Romb ma dwa wyjścia: tak i nie." },
    { p: "Algorytm Euklidesa służy do wyznaczania", o: ["największego wspólnego dzielnika", "liczb pierwszych", "silni", "pierwiastka kwadratowego"], k: 0, w: "NWD(a, b) = NWD(b, a mod b), aż b = 0." },
    { p: "Wynik działania `17 % 5` w języku C++ to", o: ["2", "3", "3,4", "5"], k: 0, w: "% zwraca resztę z dzielenia: 17 = 3·5 + 2." },
    { p: "Wynik działania `7 / 2` dla zmiennych typu int w C++ to", o: ["3", "3,5", "4", "2"], k: 0, w: "Dzielenie całkowite odcina część ułamkową." },
    { p: "Pętla, która zawsze wykona się co najmniej raz, to", o: ["do…while", "while", "for", "foreach"], k: 0, w: "Warunek do…while sprawdzany jest po wykonaniu ciała pętli." },
    { p: "Przekazanie parametru do funkcji przez referencję powoduje, że", o: ["zmiany w funkcji dotyczą oryginalnej zmiennej", "funkcja działa na kopii zmiennej", "zmiennej nie można odczytać", "zmienna staje się stałą"], k: 0, w: "W C++ zapis int &x oznacza referencję." },
    { p: "Tablica `int t[10];` w C++ ma indeksy", o: ["od 0 do 9", "od 1 do 10", "od 0 do 10", "od 1 do 9"], k: 0, w: "Indeksowanie zaczyna się od zera." },
    { p: "Ukrywanie pól klasy i udostępnianie ich przez metody to", o: ["hermetyzacja", "dziedziczenie", "polimorfizm", "przeciążanie"], k: 0, w: "Enkapsulacja chroni stan obiektu przed niekontrolowaną zmianą." },
    { p: "Modyfikator dostępu, który pozwala na dostęp do pola w klasie i jej klasach pochodnych, to", o: ["protected", "private", "public", "static"], k: 0, w: "private — tylko w klasie; public — wszędzie." },
    { p: "Metoda wywoływana automatycznie przy tworzeniu obiektu to", o: ["konstruktor", "destruktor", "getter", "metoda statyczna"], k: 0, w: "Konstruktor ma nazwę klasy i nie zwraca wartości." },
    { p: "Możliwość wywoływania tej samej metody na obiektach różnych klas z różnym skutkiem to", o: ["polimorfizm", "hermetyzacja", "kompozycja", "rekurencja"], k: 0, w: "Np. metoda Glos() zwraca „Hau” dla psa, a „Miau” dla kota." },
    { p: "Kilka metod o tej samej nazwie, ale różnych listach parametrów, w jednej klasie to", o: ["przeciążanie metod", "przesłanianie metod", "dziedziczenie wielokrotne", "hermetyzacja"], k: 0, w: "Overloading — różne parametry; overriding — nowa wersja metody w klasie pochodnej." },
    { p: "Słowo kluczowe C# oznaczające przesłonięcie metody wirtualnej klasy bazowej to", o: ["override", "virtual", "new", "base"], k: 0, w: "Metodę bazową oznacza się virtual, a pochodną override." },
    { p: "Pole klasy oznaczone jako static", o: ["jest wspólne dla wszystkich obiektów klasy", "istnieje osobno w każdym obiekcie", "nie może być zmieniane", "jest prywatne"], k: 0, w: "Pole statyczne należy do klasy." },
    { p: "Struktura danych działająca według zasady LIFO to", o: ["stos", "kolejka", "lista dwukierunkowa", "drzewo binarne"], k: 0, w: "Last In, First Out — ostatni włożony wychodzi pierwszy." },
    { p: "Struktura danych działająca według zasady FIFO to", o: ["kolejka", "stos", "graf", "drzewo"], k: 0, w: "First In, First Out — jak kolejka w sklepie." },
    { p: "Funkcja wywołująca samą siebie to funkcja", o: ["rekurencyjna", "iteracyjna", "wirtualna", "anonimowa"], k: 0, w: "Musi mieć warunek zakończenia, inaczej przepełni stos." },
    { p: "Testowanie aplikacji wyłącznie na podstawie specyfikacji, bez znajomości kodu, to testy metodą", o: ["czarnej skrzynki", "białej skrzynki", "jednostkową", "statyczną"], k: 0, w: "Tester zna tylko wejścia i oczekiwane wyjścia." },
    { p: "Test sprawdzający działanie pojedynczej metody w izolacji to test", o: ["jednostkowy", "akceptacyjny", "systemowy", "obciążeniowy"], k: 0, w: "Testy jednostkowe pisze się np. w xUnit, NUnit, JUnit." },
    { p: "Testy wykonywane po zmianach w kodzie, sprawdzające, czy wcześniej działające funkcje nadal działają, to testy", o: ["regresyjne", "dymne", "akceptacyjne", "penetracyjne"], k: 0, w: "Regresja to pojawienie się błędu w funkcji, która wcześniej działała." },
    { p: "Punkt w kodzie, w którym debugger zatrzymuje wykonanie programu, to", o: ["breakpoint", "watch", "exception", "commit"], k: 0, w: "Punkt przerwania pozwala obejrzeć wartości zmiennych." },
    { p: "Polecenie Git zapisujące zmiany w lokalnym repozytorium to", o: ["git commit", "git push", "git clone", "git status"], k: 0, w: "commit zapisuje lokalnie; push wysyła do repozytorium zdalnego." },
    { p: "Plik aplikacji Android zawierający m.in. listę aktywności i wymagane uprawnienia to", o: ["AndroidManifest.xml", "build.gradle", "MainActivity.java", "strings.xml"], k: 0, w: "W manifeście deklaruje się aktywności i uprawnienia." },
    { p: "Pojedynczy ekran aplikacji w systemie Android to", o: ["Activity", "Intent", "Service", "Fragment Manager"], k: 0, w: "Activity reprezentuje ekran z interfejsem użytkownika." },
    { p: "Metoda cyklu życia aktywności Android wywoływana jako pierwsza to", o: ["onCreate()", "onStart()", "onResume()", "onDestroy()"], k: 0, w: "Kolejność: onCreate, onStart, onResume." },
    { p: "Kod odpowiedzi HTTP oznaczający, że zasób nie został znaleziony, to", o: ["404", "200", "500", "301"], k: 0, w: "404 Not Found; 500 — błąd serwera." },
    { p: "Metoda HTTP w REST API służąca do usunięcia zasobu to", o: ["DELETE", "GET", "POST", "PATCH"], k: 0, w: "GET — odczyt, POST — utworzenie, PUT/PATCH — zmiana, DELETE — usunięcie." },
    { p: "Lekki, tekstowy format wymiany danych w API, oparty na składni obiektów JavaScript, to", o: ["JSON", "CSV", "BMP", "SQL"], k: 0, w: "JSON: {\"imie\": \"Jan\", \"wiek\": 30}." },
    { p: "Technologia firmy Microsoft do budowy wieloplatformowych aplikacji mobilnych i desktopowych w C# i XAML to", o: [".NET MAUI", "Android Studio", "Flutter", "Swift UI"], k: 0, w: ".NET MAUI jest następcą Xamarin.Forms." },
    { p: "Wzorzec projektowy gwarantujący istnienie tylko jednej instancji klasy to", o: ["Singleton", "Fabryka", "Obserwator", "Adapter"], k: 0, w: "Singleton ma prywatny konstruktor i statyczną metodę dostępu." },
    { p: "W metodyce Scrum krótki, stały okres pracy zespołu, kończący się działającym przyrostem produktu, to", o: ["sprint", "kamień milowy", "faza analizy", "release candidate"], k: 0, w: "Sprint trwa zwykle 1–4 tygodnie." },
    { p: "Blok instrukcji wykonywany zawsze, niezależnie od wystąpienia wyjątku, to", o: ["finally", "catch", "throw", "else"], k: 0, w: "try — kod chroniony; catch — obsługa wyjątku; finally — zawsze." },
    { p: "Typ danych przechowujący wartości logiczne true/false to", o: ["bool", "char", "float", "string"], k: 0, w: "W Javie nazywa się boolean." },
    { p: "Wynik wyrażenia logicznego `(5 > 3) && (2 > 4)` to", o: ["false", "true", "2", "błąd kompilacji"], k: 0, w: "&& wymaga prawdziwości obu warunków, a 2 > 4 jest fałszem." }
  ]
};
