import {Injectable} from '@angular/core';
import {AngularNeo4jService} from 'angular-neo4j';
import {Movie} from '../models/Movie';

const url = 'http://localhost:7474/';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  movies: Movie[];
  constructor(private neo4j: AngularNeo4jService) {
    this.neo4j.connect('http://localhost:7474/', 'neo4j', 'test1234', true).then(driver => {
      if (driver) {
        console.log('Succesfully connected to ' + url);
      }
    });
    this.movies = this.getMovies();
  }

  getMovieId(title: string): number {
    const query = 'match (m:Movie {title: title}) return m.movieId';
    const params = {title};
    return this.neo4j.run(query, params).toArray.get('movieId');
  }

  getMovies() {
    let movies = [];
    const query = 'match (g:Genre)--(m:Movie)--(p:Person) return m,' +
      'collect(distinct g.genreName) as genres,collect(distinct p.Name) as people';
    this.neo4j.run(query).then(res => {
      for (let elem of res) {
        let size = movies.push({
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
}
