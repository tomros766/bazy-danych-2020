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
  voteAvg?: number;
  releaseDate: Date;
  directors?: Array<{name: string, personID: number}> = new Array<{name: string, personID: number}>();
  genres?: Array<{name: string, genreID: number}> = new Array<{name: string, genreID: number}>();
  people?: Array<{name: string, personID: number}> = new Array<{name: string, personID: number}>();

  constructor(private neo4j: AngularNeo4jService) {
  }

  executeQuery(query: string) {
    return this.neo4j.run(query).then(res => {
      for (const elem of res) {
        // console.log(elem);
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
        const genre = {name: elem[1].properties.genreName, genreID: elem[1].properties.genreId};
        const member = {name: elem[2].properties.Name, personID: elem[2].properties.personId};
        if (!this.genres.map(el => el.genreID).includes(genre.genreID)) {
          this.genres.push(genre);
        }
        if (!this.people.map(el => el.personID).includes(member.personID)) {
          // console.log(this.people);
          this.people.push(member);
        }
        if (elem[4].type === 'DIRECTOR') {
          if (!this.directors.map(el => el.personID).includes(member.personID)) {
            this.directors.push(member);
          }
        }
      }
      return this;
    });
  }

  createMovie(budget, homepage, movieId, releaseDate, revenue, runtime, tagline, title, voteCount) {
    this.budget = budget;
    this.homepage = homepage;
    this.movieId = movieId;
    this.releaseDate = releaseDate;
    this.revenue = revenue;
    this.runtime = runtime;
    this.tagLine = tagline;
    this.title = title;
    this.voteCount = voteCount;
  }
}


