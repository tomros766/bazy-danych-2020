import { Component, OnInit } from '@angular/core';
import {AngularNeo4jService} from 'angular-neo4j';
import {BehaviorSubject} from 'rxjs';
import {Movie} from "../models/Movie";
const url = 'http://localhost:7474/';
const username = 'neo4j';
const password = 'test1234';
const encrypted = true;
@Component({
  selector: 'app-angular-neo4j',
  templateUrl: './angular-neo4j.component.html',
  styleUrls: ['./angular-neo4j.component.css']
})


export class AngularNeo4jComponent implements OnInit {
  id$ = new BehaviorSubject<number>(null);
  constructor(private neo4j: AngularNeo4jService) { }

  ngOnInit(): void {
    this.neo4j.connect(url, username, password, encrypted).then(driver => {
      if (driver) {
        console.log('Succesfully connected to ' + url);
      }
    });
  }

  getMovies() {
    let movies = [];
    const query = 'MATCH (m: Movie) RETURN m';
    this.neo4j.run(query).get().subscribe(results => {
      for (const elem of results) {
        movies.push({
          budget: elem.get('budget'),
          revenue: elem.get('revenue'),
          homepage: elem.get('homepage'),
          movieId: elem.get('movieId'),
          runtime: elem.get('runtime'),
          tagLine: elem.get('tagline'),
          title: elem.get('title')
          }
        )
      }
    });
    return movies;
  }

  getDetails(id: number): void {
    const query = 'MATCH (m: Movie {movie_id: id}) RETURN m';
    const params = {movie_id: id};
    console.log(this.neo4j.run(query, params));
    this.id$.next(id);
  }

}
