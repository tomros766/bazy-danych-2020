# bazy-danych-2020
#### Skład grupy: Anna Zając, Tomasz Rosiek (ta sama grupa laboratoryjna)
### Technologia:
  bazy grafowe (Neo4j)
## Temat projektu:
  aplikacja webowa do wyszukiwania i oceny filmów.  Filmy wyszukiwać będzie można na podstawie różnych parametrów, np. reżysera,          oceny, gatunku, kraju produkcji.
### Część webowa:
  Część webowa zostanie zrealizowana za pomocą Angulara.
  
---
### Wymagania wstępne:
  * [Node.js](https://nodejs.org/en/)
  * [Angular CLI](https://angular.io/cli)
  * [Neo4j](https://neo4j.com/download/)
### Przygotowanie:
  #### Uzyskanie bazy danych z pliku csv (Pomiń ten krok, jeśli już posiadasz gotową bazę danych).
   1. Stwórz bazę danych w Neo4jDesktop i umieść w jej folderze "import" plik 'movies_py.csv'.
   2. Uruchom swoją bazę w Neo4jBrowser i uruchom po kolei skrypty: 'movies_database.cypher', 'load-csv-with-headers-from-file-movies-py-csv-as-row.cypher', 'poster_load.cypher'.
   3. W przypadku problemów z uruchamianiem pierwszego skryptu może być konieczne wykonywanie go w mniejszych częściach.
    
  #### Przygotowanie projektu Angular.
  
   4. uruchom konsolę w folderze movies-rating i wykonaj polecenie 'npm-install'. Poczekaj na instalację wszystkich niezbędnych zależności (zawartych w pliku package.json).
   5. W pliku movies-rating/services/database.service.ts w funkcji 'constructor' zamień odpowiednio adres, nazwę i hasło utworzonej (lub gotowej) bazy danych.
    
  #### Uruchomienie projektu.
  
   6. w folderze movies-rating wykonaj polecenie 'ng serve'. Projekt domyślnie będzie dostępny na porcie localhost:4200/
   
  ### Schemat bazy danych
  ![Graf reprezentujący bazę](https://github.com/tomros766/bazy-danych-2020/blob/master/img/graph1.png "Graf reprezentujący bazę")
  
   Baza danych obsługiwana przez aplikację składa się z czterech klas obiektów: Movie, Genre, Person, User. 
   Poniżej znajduje się zestawienie atrybutów, które muszą być obecne w bazie, aby aplikacja działała poprawnie.
   #### Movie
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
   #### Genre
   ![Atrybuty gatunków](https://github.com/tomros766/bazy-danych-2020/blob/master/img/genre.png "Atrybuty gatunków")
   * genreId (number)
   * genreName (string)
   #### Person
   ![Atrybuty aktorów](https://github.com/tomros766/bazy-danych-2020/blob/master/img/person.png "Atrybuty aktorów")
   * personId (number)
   * Name (string)
   #### User
   ![Atrybuty użytkowników](https://github.com/tomros766/bazy-danych-2020/blob/master/img/user1.png "Atrybuty użytkowników")
   * email (string)
   * password (string)
   * username (string)
