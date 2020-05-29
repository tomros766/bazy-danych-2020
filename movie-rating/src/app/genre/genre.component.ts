import {Component, Input, OnInit} from '@angular/core';
import {Genre} from '../models/Genre';
import {CastMember} from '../models/CastMember';
import {ActivatedRoute} from '@angular/router';
import {AngularNeo4jService} from 'angular-neo4j';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genre: Genre = {genreID: -1, name: '', movies: new Array<{title: string, movieID: number}>()};
  p = 1;
  // tslint:disable-next-line:no-input-rename
  constructor(private route: ActivatedRoute, private neo4j: AngularNeo4jService) {
    this.neo4j.connect('http://localhost:7474/', 'neo4j', 'test1234', true).then(driver => {
      if (driver) {
        console.log('Succesfully connected');
      }
    });
    this.executeQuery('match (g: Genre {genreId: ' + this.route.snapshot.params.id + '})--(m:Movie) return g, m');
  }

  ngOnInit() {
  }

  executeQuery(query: string) {
    return this.neo4j.run(query).then(res => {
      for (const elem of res) {
        console.log(elem);
        this.genre.genreID = elem[0].properties.genreId;
        this.genre.name = elem[0].properties.genreName;
        const movieID: number = elem[1].properties.movieId;
        const title: string = elem[1].properties.title;
        if (!this.genre.movies.map(el => el.movieID).includes(movieID)) {
          this.genre.movies.push({title, movieID});
          console.log(this.genre.movies);
        }
      }
      return this;
    });
  }

}
