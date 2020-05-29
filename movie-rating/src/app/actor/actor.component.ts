import {Component, Input, OnInit} from '@angular/core';
import {CastMember} from '../models/CastMember';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../models/Movie';
import {AngularNeo4jService} from 'angular-neo4j';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: CastMember = {personID: -1, name: '', movies: new Array<{title: string, movieID: number}>()};
  // tslint:disable-next-line:no-input-rename
  constructor(private route: ActivatedRoute, private neo4j: AngularNeo4jService) {
    this.neo4j.connect('http://localhost:7474/', 'neo4j', 'test1234', true).then(driver => {
      if (driver) {
        console.log('Succesfully connected');
      }
    });
    this.executeQuery('match (p: Person {personId: ' + this.route.snapshot.params.id + '})--(m:Movie) return p, m');
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
          console.log(this.actor.movies);
        }
      }
      return this;
    });
  }
}
