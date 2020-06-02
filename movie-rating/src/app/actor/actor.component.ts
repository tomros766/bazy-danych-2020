import {Component, Input, OnInit} from '@angular/core';
import {CastMember} from '../models/CastMember';
import {ActivatedRoute} from '@angular/router';
import {AngularNeo4jService} from 'angular-neo4j';
import {Genre} from '../models/Genre';
import {MovieService} from '../services/movie.service';
import {Movie} from '../models/Movie';
import {isUndefined} from 'util';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: CastMember = {personID: -1, name: '', movies: new Array<{title: string, movieID: number}>()};
  genres: Array<Genre> = new Array<Genre>();
  genreFilter = '';
  rateFilter = 0;
  // tslint:disable-next-line:max-line-length
  movies: Array<{movieId: number, title: string, genres: Array<string>, voteAvg: number}> = new Array<{movieId: number, title: string, genres: Array<string>, voteAvg: number}>();
  // tslint:disable-next-line:no-input-rename
  constructor(private route: ActivatedRoute, private neo4j: AngularNeo4jService, private movieService: MovieService) {
    this.neo4j.connect('http://localhost:7474/', 'neo4j', 'test1234', true).then(driver => {
      if (driver) {
        console.log('Succesfully connected');
      }
    });
    this.executeQuery('match (p: Person {personId: ' + this.route.snapshot.params.id + '})--(m:Movie)-[HASGENRE]-(g:Genre) return p, m, ' +
      'collect(distinct g.genreName) as genres');
    this.genres = this.movieService.getGenres();
  }

  ngOnInit() {
  }

  executeQuery(query: string) {
    return this.neo4j.run(query).then(res => {
      for (const elem of res) {
        // console.log(elem);
        this.actor.personID = elem[0].properties.personId;
        this.actor.name = elem[0].properties.Name;
        const movieID: number = elem[1].properties.movieId;
        const title: string = elem[1].properties.title;
        if (!this.actor.movies.map(el => el.movieID).includes(movieID)) {
          this.actor.movies.push({title, movieID});
          this.movies.push({movieId : movieID, title, genres: elem[2], voteAvg: elem[1].properties.vote_avg});
        }
      }
      return this;
    });
  }

  genreSearch(genre: string) {
    this.genreFilter = genre;
  }

  rateSearch(rate: number) {
    this.rateFilter = rate;
  }
}
