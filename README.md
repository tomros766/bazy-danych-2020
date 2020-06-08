# bazy-danych-2020
#### Skład grupy: Anna Zając, Tomasz Rosiek (ta sama grupa laboratoryjna)
### Technologia:
  bazy grafowe (Neo4j)
## Temat projektu:
  aplikacja webowa do wyszukiwania i oceny filmów.  Filmy wyszukiwać będzie można na podstawie różnych parametrów, np. oceny, gatunku.
### Projekt został wykonany we frameworku Angular 
  
---
## Opis aplikacji
  Aplikacja pozwala na przeglądanie filmów zgromadzonych w bazie. Listę filmów można filtrować po nazwie, minimalnej ocenie i gatunku. Można również wyświetlić wszystkie gatunki i aktorów. Z tych list można przełączyć się na strony z wylistowanymi filmami dla danego aktora/gatunku. Między podstronami ze szczegółami filmu, aktorami i gatunkami można się swobodnie przełączać. Ponadto, dla zarejestrowanych i zalogowanych użytkowników istnieje możliwość oceniania filmu z poziomu podstrony ze szczegółami danego filmu.
## Wymagania wstępne:
  * [Node.js](https://nodejs.org/en/)
  * [Angular CLI](https://angular.io/cli)
  * [Neo4j](https://neo4j.com/download/)
## Przygotowanie:
  ### Uzyskanie bazy danych z pliku csv (Pomiń ten krok, jeśli już posiadasz gotową bazę danych).
   1. Stwórz bazę danych w Neo4jDesktop i w Neo4jBrowser uruchom skrypt "complete_database.cypher"
   3. W przypadku problemów z uruchamianiem skryptu może być konieczne wykonywanie go w mniejszych częściach.
    
  ### Przygotowanie projektu Angular.
  
   4. uruchom konsolę w folderze movies-rating i wykonaj polecenie 'npm-install'. Poczekaj na instalację wszystkich niezbędnych zależności (zawartych w pliku package.json).
   5. W pliku movies-rating/services/database.service.ts w funkcji 'constructor' zamień odpowiednio adres, nazwę i hasło utworzonej (lub gotowej) bazy danych.
    
  ### Uruchomienie projektu.
  
   6. w folderze movies-rating wykonaj polecenie 'ng serve'. Projekt domyślnie będzie dostępny na porcie localhost:4200/
   
  ## Schemat bazy danych
  
  ![Schemat bazy danych](https://github.com/tomros766/bazy-danych-2020/blob/master/img/arrows.svg "Schemat bazy danych")
  
   Baza danych obsługiwana przez aplikację składa się z czterech klas obiektów: Movie, Genre, Person, User. 
   Poniżej znajduje się zestawienie atrybutów, które muszą być obecne w bazie, aby aplikacja działała poprawnie.
   ### Movie
   ![Atrybuty filmów](https://github.com/tomros766/bazy-danych-2020/blob/master/img/movie.png "Atrybuty filmów")
   * budget (number)
   * movieId (number)
   * poster (string)
   * releaseDate (Date)
   * revenue (number)
   * runtime (number)
   * tagline (string)
   * title (string)
   * voteCount (number)
   * vote_avg (number)
   ### Genre
   ![Atrybuty gatunków](https://github.com/tomros766/bazy-danych-2020/blob/master/img/genre.png "Atrybuty gatunków")
   * genreId (number)
   * genreName (string)
   ### Person
   ![Atrybuty aktorów](https://github.com/tomros766/bazy-danych-2020/blob/master/img/person.png "Atrybuty aktorów")
   * personId (number)
   * Name (string)
   ### User
   ![Atrybuty użytkowników](https://github.com/tomros766/bazy-danych-2020/blob/master/img/user1.png "Atrybuty użytkowników")
   * email (string)
   * password (string)
   * username (string)
   
   Relacje pomiędzy atrybutami:
   ### WRITER
   relacja pomiędzy klasami Movie oraz Person, określa scenarzystę filmu
   ### DIRECTOR
   relacja pomiędzy klasami Movie oraz Person, określa reżysera filmu
   ### CAST_MEMBER
   relacja pomiędzy klasami Movie oraz Person, określa członka obsady, w przypadku tej konkretnej bazy aktora występującego w filmie
   ### HAS_GENRE
   relacja pomiędzy klasami Genre oraz Movie, określa gatunek filmu
   ### VOTED
   relacja pomiędzy klasami User oraz Movie, określa czy użytkownik zagłosował na dany film; posiada atrybut vote, który przechowuję wystawioną ocenę
   ## Przykładowy fragment bazy danych 
   ![Graf reprezentujący bazę](https://github.com/tomros766/bazy-danych-2020/blob/master/img/graph1.png "Graf reprezentujący bazę")
  ## Komponenty
  Aplikacja we frameworku Angular operuje na zbiorze komponentów, z których każdy pełni pewną funkcję w gotowej aplikacji. Poniżej przedstawiono krótki opis każdego komponentu, oraz za co odpowiada w gotowej aplikacji.
  ### actor
  #### Opis
  Komponent dla konkretnego aktora, którego ID jest przekazane przez usługę Routingu, pokazuje filmy, w których brał udział. Umożliwia również filtrowanie filmów po minimalnej ocenie i gatunku. Po kliknięciu na film użytkownik zostaje przeniesiony na stronę filmu. Wszystkie potrzebne dane (oprócz przekazanego ID aktora) komponent pobiera bezpośrednio z bazy.
  #### Za co odpowiada w aplikacji
  Komponent widoczny po wybraniu aktora z listy aktorów, umożliwia podgląd szczegółów dotyczących danej osoby
  ### actor-list
  #### Opis
  Komponent wyświetla listę wszystkich aktorów. Po kliknięciu na aktora użytkownik zostaje przeniesiony na stronę aktora. Wszystkie potrzebne dane komponent pobiera bezpośrednio z bazy.
  #### Za co odpowiada w aplikacji
  Komponent zostaje wyświetlony po wybraniu z menu opcji All Cast Members, wyświetla listę wszytskich aktorów w bazie
  ### filter-movies
  #### Opis
  Komponent zawiera zbiór filtrów dla Listy Filmów. Powstał w celu zmniejszenia objętości komponentu MovieList oraz w myśl zasady Single Responisibility Principle
   #### Za co odpowiada w aplikacji
  Komponent jest widoczny po przejściu do listy filmów jako zbiór filtrów nad listą, umożliwia filtrowanie filmów
  ### genre
  #### Opis
  Komponent dla konkretnego gatunku, którego ID jest przekazane przez usługę Routingu, pokazuje filmy należące do danej kategorii. Po kliknięciu na film użytkownik zostaje przeniesiony na stronę filmu. Wszystkie potrzebne dane komponent pobiera bezpośrednio z bazy.
   #### Za co odpowiada w aplikacji
   Komponent wyświela się po wybraniu gatunku z listy gatunków, umożliwia podgląd filmów związanych z gatunkiem
  ### genre-list
   #### Opis
  Komponent wyświetla listę wszystkich kategorii. Po kliknięciu na gatunek użyutkownik zostaje przeniesiony na stronę gatunku. Wszystkie potrzebne dane komponent pobiera bezpośrednio z bazy.
  #### Za co odpowiada w aplikacji
  Komponent wyświetla się po wybraniu w menu opcji All Genres, umożliwia podgląd wszytskich gatunków filmowych w bazie
  ### login
  #### Opis
  Komponent obsługuje mechanizm logowania. Korzysta z usługi AuthenticationService. Generuje formularz z prostym systemem walidacji wpisywanych wartości. Przesyła żądanie logowania do AuthenticationService
  #### Za co odpowiada w aplikacji
  Komponent wyświetla się po wybraniu opcji Log in w menu, umożliwia wprowadzenie danych potrzebnych do próby logowania
  ### main-page
  #### Opis
  Komponent wyświetla stronę powitalną, której zawartość zależy od tego, czy użytkownik jest zalogowany.
  #### Za co odpowiada w aplikacji
  Komponent jest wyświetlany jako pierwsza strona po starcie aplikacji
  ### models
  #### Opis
 Folder jest zbiorem modeli dla klas CastMember, Genre, Movie, User, które mają zapewnić spójność w reprezentacji tych obiektów w różnych komponentach
  #### Za co odpowiada w aplikacji
  Klasy zdefiniowane w folderze używane są w wielu innych komponentach, takich jak movie, genre, user-profile...
  ### movie
  #### Opis
  Komponent wyświetla podstawowe informacje o filmie. Działa w połączeniu z komponentem MovieList, który przekazuje do komponentu odpowiednie atrybuty filmu. Po kliknięciu na przycisk 'szczegóły' użytkownik zostaje przekierowany na stronę ze szczegółowymi informacjami o danym filmie.
   #### Za co odpowiada w aplikacji
   Komponent wyświetla się jako pojedyncza wartość w liście filmów bądź w rankingu filmów, umożliwia podgląd plakatu oraz tytułu filmu, oraz przejście do szczegółów
  ### movie-details
   #### Opis
  Komponent wyświetla szczegółowe informacje o filmie, którego ID jest przekazane przez usługę Routingu. Po naciśnięciu na gatunek, reżysera lub aktora użytkownik jest przenoszony na odpowiednią stronę. Wszystkie potrzebne dane (oprócz przekazanego ID filmu) komponent pobiera bezpośrednio z bazy.
  #### Za co odpowiada w aplikacji
  Komponent zostaje wyświetlony po kliknięciu opcji Details w komponencie movie, czyli na liście filmów bądź rankingu, umożliwia podgląd szczegółów danej pozycji, takich jak średnia ocena, liczba ocen, budżet filmu, przychód filmu, aktorzy, plakat oraz reżyser. Po zalogowaniu istnieje również możliwość głosowania na dany film 
  ### movie-list
  #### Opis
  Komponent wyświetla listę wszystkich filmów. Obsługuje mechanizm filtrowania, Korzysta z usługi MovieService.
   #### Za co odpowiada w aplikacji
   Komponent wyświetla się po wybraniu opcji lista filmów w menu, umożliwia przeglądanie dostępnych w bazie filmów, filtrowanie ich oraz przejście do widoku szczegółowego
  ### movie-ranking
   #### Opis
  Komponent działa analogicznie do komponentu MovieList, jednak pokazuje 100 najlepszych filmów pod względem średniej ocen oraz widoczną ocenę na każdym panelu.
  #### Za co odpowiada w aplikacji
  Komponent wyświetla się po wybraniu opcji ranking filmów w menu, umożliwia podgląd 100 najlepszych filmów, dodatkowo z ich oceną
  ### register
  #### Opis
  Komponent obsługuje machanizm rejestracji. Korzysta z usługi AuthenticationService. Udostępnia formularz do wpisywania wartości potrzebnych do rejestracji nowego użytkownika, wraz z prostym systemem walidacji. Przesyła żądanie rejestracji do AuthenticationService 
   #### Za co odpowiada w aplikacji
   Koponent wyświetla się po wybraniu opcji Register w menu, umożliwia użytkownikowi wprowadzenie danych potrzebnych do rejestracji 
  ### register
  #### Opis
  W katalogu przechowywane są wszystkie serwisy używane w aplikacji
  #### AuthenticationService
  Serwis służy do rejestrowania nowych użytkowników w bazie oraz logowania już istniejących. Ma również możliwość pobierania bezpośrednio z bazy filmów, które dany użytkownik ocenił. Serwis korzysta z serwisu EncryptionService w celu kodowania haseł przesyłanych do bazy danych
  #### DatabaseService
  Serwis służy do bezpośredniego wykonywania zapytań w języku Cypher na bazie danych. W tym celu korzytsta z gotowego koponentu AngularNeo4jService, który upraszcza przesyłanie zapytań wraz ze zmiennymi. Serwis używany jest we wszytskich komponentach, które pobierają coś z bazy bądź wprowadzają do niej jakieś zmiany i nowe wartości
  
  Link do dokumnetacji AngularNeo4jService: https://github.com/webmaxru/angular-neo4j
  #### EncryptionService
  Serwis służy do kodowania haseł, które następnie są przesyłane do bazy danych w postacji niejawnej. Korzysta z biblioteki CryptoJS w celu kodowania tekstu
  
  Link do dokumentacji CryptoJS: https://www.npmjs.com/package/crypto-j
  #### MovieService
  Serwis służy do obsługi zbioru filmów w bazie danych, jest używany w komponentach takich jak movie-list i movie-ranking. Umożliwia również zwrócenie posortowanego zbioru filmów do wyświetlenia ich w rankingu
  #### Router
  Serwis służy do umożliwienia użytkownikowi powrót do poprzednio wyświetlanego adresu URL. Funkcja getPreviousURL aktywuje się po wybraniu w menu opcji Go back
  ### shared
  #### Opis
  W katalogu przechowywane są pipy, które używane są do filtrowania filmów w komponencie filter-movies. Katalog zawiera takie komponenty jak GenrePipe, RatingPipe oraz TitleSearchPipe, które zawierają logikę filtrowania po danym atrybucie
  ### toolbar
  #### Opis
  Komponent wyświetla pasek Menu. Stanowi nawigację po całej aplikacji.
  #### Za co odpowiada w aplikacji
  Komponent wyświetla się na górze strony niezależnie od tego, w jakiej sekcji aplikacji przebywa użytkownik; umożliwia przejście do innej części aplikacji 
  ### user-profile
  #### Opis
  Komponent odpowiada za wyświetlanie profilu użytkownika. Umożliwia podgląd używanej nazwy użytkownika oraz maila. Udostępnia podgląd na filmy ocenione przez użytkownika wraz z wystawioną oceną.
  #### Za co odpowiada w aplikacji
  Komponent wyświetla się po zalogowaniu oraz wybraniu opcji Your profile w menu; umożliwia podgląd podstawowych danych dotyczących zalogowanego użytkownika
