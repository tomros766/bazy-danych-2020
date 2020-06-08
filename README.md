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
  ![Graf reprezentujący bazę](https://github.com/tomros766/bazy-danych-2020/blob/master/img/graph1.png "Graf reprezentujący bazę")
  
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
  ## Komponenty
  ### Actor
  Komponent dla konkretnego aktora, którego ID jest przekazane przez usługę Routingu, pokazuje filmy, w których brał udział. Filmy można filtrować po minimalnej ocenie i gatunku. Po kliknięciu na film użytkownik zostaje przeniesiony na stronę filmu. Wszystkie potrzebne dane (oprócz przekazanego ID aktora) komponent pobiera bezpośrednio z bazy.
  ### ActorList
  Komponent wyświetla listę wszystkich aktorów. Po kliknięciu na aktora użytkownik zostaje przeniesiony na stronę aktora. Wszystkie potrzebne dane komponent pobiera bezpośrednio z bazy.
  ### FilterMovies
  Komponent zawiera zbiór filtrów dla Listy Filmów. Powstał w celu zmniejszenia objętości komponentu MovieList.
  ### Genre
  Komponent dla konkretnego gatunku, którego ID jest przekazane przez usługę Routingu, pokazuje filmy należące do danej kategorii. Po kliknięciu na film użytkownik zostaje przeniesiony na stronę filmu. Wszystkie potrzebne dane komponent pobiera bezpośrednio z bazy.
  ### GenreList
  Komponent wyświetla listę wszystkich kategorii. Po kliknięciu na gatunek użyutkownik zostaje przeniesiony na stronę gatunku. Wszystkie potrzebne dane komponent pobiera bezpośrednio z bazy.
  ### login
  Komponent obsługuje mechanizm logowania. Korzysta z usługi AuthenticationService.
  ### MainPage
  Komponent wyświetla karuzelę z kilkoma filmami. Przy pobieraniu filmów wykorzystuje usługę MovieService.
  ### Movie
  Komponent wyświetla podstawowe informacje o filmie. Działa w połączeniu z komponentem MovieList, który przekazuje do komponentu odpowiednie atrybuty filmu. Po kliknięciu na przycisk 'szczegóły' użytkownik zostaje przekierowany na stronę ze szczegółowymi informacjami o danym filmie.
  ### MovieDetails
  Komponent wyświetla szczegółowe informacje o filmie, którego ID jest przekazane przez usługę Routingu. Po naciśnięciu na gatunek, reżysera lub aktora użytkownik jest przenoszony na odpowiednią stronę. Wszystkie potrzebne dane (oprócz przekazanego ID filmu) komponent pobiera bezpośrednio z bazy.
  ### MovieList
  Komponent wyświetla listę wszystkich filmów. Obsługuje mechanizm filtrowania, Korzysta z usługi MovieService.
  ### MovieRanking
  Komponent działa analogicznie do komponentu MovieList, jednak pokazuje 100 najlepszych filmów pod względem średniej ocen oraz widoczną ocenę na każdym panelu.
  ### Register
  Komponent obsługuje machanizm rejestracji. Korzysta z usługi AuthenticationService
  ### Toolbar
  Komponent wyświetla pasek Menu. Stanowi nawigację po całej aplikacji.
