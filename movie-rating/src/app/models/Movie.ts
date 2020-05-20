import {Genre} from './Genre';
import {CastMember} from './CastMember';
import {AngularNeo4jService} from 'angular-neo4j';
import {MovieService} from '../services/movie.service';
import {DatabaseService} from '../services/database.service';

export class Movie {
  budget: bigint;
  revenue: bigint;
  homepage: string;
  movieId: number;
  runtime: number;
  tagLine: string;
  title: string;
  voteCount: number;
  voteAvg: number;
  releaseDate: Date;
  director?: CastMember;
  genres: Array<string> = new Array<string>();
  people: Array<string> = new Array<string>();

  constructor(private neo4j: AngularNeo4jService, private movieService: MovieService) {
  }

  executeQuery(query: string) {
    return this.neo4j.run(query).then(res => {
      for (const elem of res) {
        console.log(elem);
        this.budget = elem[0].properties.budget;
        this.revenue = elem[0].properties.revenue;
        this.homepage = elem[0].properties.homepage;
        this.movieId = elem[0].properties.movieId;
        this.runtime = elem[0].properties.runtime;
        this.tagLine = elem[0].properties.tagline;
        this.title = elem[0].properties.title;
        this.voteCount = elem[0].properties.voteCount;
        this.voteAvg = elem[0].properties.vote_avg;
        this.releaseDate = elem[0].properties.releaseDate;
        this.genres = elem[1];
        this.people = elem[2];
      }
      return this;
    });
  }
}


