import { Injectable } from '@angular/core';
import {Movie} from '../models/Movie';
import {BehaviorSubject} from 'rxjs';
import {DatabaseService} from './database.service';
import {AngularNeo4jService} from 'angular-neo4j';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];
  id$ = new BehaviorSubject<number>(null);
  constructor(private db: DatabaseService) {
    this.movies = db.movies;
  }

  getMovies() {
    return this.movies;
  }


}
