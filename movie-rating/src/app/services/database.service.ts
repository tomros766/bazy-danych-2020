import {Injectable} from '@angular/core';
import {AngularNeo4jService} from 'angular-neo4j';
import {Movie} from '../models/Movie';
import {CastMember} from '../models/CastMember';
import {Genre} from '../models/Genre';
import {User} from '../models/User';

const url = 'http://localhost:7474/';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  movies: Movie[];
  actors: CastMember[];
  genres: Genre[];
  users: User[];
  loggedUser = false;
  userName = '';
  constructor(private neo4j: AngularNeo4jService) {
    this.neo4j.connect('http://localhost:7474/', 'neo4j', 'test1234', true).then(driver => {
      if (driver) {
        console.log('Succesfully connected to ' + url);
      }
    });
    this.movies = this.getMovies();
    this.actors = this.getActors();
    this.genres = this.getGenres();
    this.users = this.getUsers();
  }

  getGenres() {
    const genres = [];
    const query = 'match (m:Movie)-[:HAS_GENRE]-(g:Genre) return g,' +
      'collect(distinct m.title) as movies';
    this.neo4j.run(query).then(res => {
      for (const elem of res) {
        genres.push({
          name: elem[0].properties.genreName,
          movies: elem[1]
        });
      }
    });
    return genres;
  }

  getActors() {
    const actors = [];
    const query = 'match (m:Movie)-[:CAST_MEMBER]-(p:Person) return p,' +
      'collect(distinct m.title) as movies';
    this.neo4j.run(query).then(res => {
      for (const elem of res) {
        actors.push({
          name: elem[0].properties.Name,
          movies: elem[1]
        });
      }
    });
    return actors;
  }

  getMovies() {
    const movies = [];
    const query = 'match (g:Genre)--(m:Movie)--(p:Person) return m,' +
      'collect(distinct g.genreName) as genres,collect(distinct p.Name) as people';
    this.neo4j.run(query).then(res => {
      for (const elem of res) {
        const size = movies.push({
          budget: elem[0].properties.budget,
          revenue: elem[0].properties.revenue,
          homepage: elem[0].properties.homepage,
          movieId: elem[0].properties.movieId,
          runtime: elem[0].properties.runtime,
          tagLine: elem[0].properties.tagline,
          title: elem[0].properties.title,
          voteCount: elem[0].properties.voteCount,
          voteAvg: elem[0].properties.vote_avg,
          releaseDate: elem[0].properties.releaseDate,
          genres: elem[1],
          people: elem[2]
        });
        // const queryInner = 'match (p:Person)-[r:Director]-(m:Movie {title: "' + elem[0].properties.title + '"}) return p';
        // this.neo4j.run(queryInner).then(resIn => {
        //   movies[size - 1].director = resIn;
        // });
      }
    });
    return movies;
    }

  registerUser(username, password, email) {
    const query = 'create (u: User {username: $username, password: $password, email: $email}) return count(u)';
    const params = {username, password, email};
    this.neo4j.run(query, params);
  }

  getUsers() {
    const users = [];
    const query = 'match (u: User) return u';
    this.neo4j.run(query).then(res => {
      for (const elem of res) {
        users.push({
          email: elem[0].properties.email,
          password: elem[0].properties.password,
          username: elem[0].properties.username
        });
      }
    });
    return users;
  }
}
