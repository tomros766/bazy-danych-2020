import { Injectable } from '@angular/core';
import {Movie} from '../models/Movie';
import {BehaviorSubject} from 'rxjs';
import {DatabaseService} from './database.service';
import {CastMember} from '../models/CastMember';
import {Genre} from '../models/Genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];
  actors: CastMember[];
  genres: Genre[];
  id$ = new BehaviorSubject<number>(null);
  constructor(private db: DatabaseService) {
    this.movies = db.movies;
    this.actors = db.actors;
    this.genres = db.genres;
  }

  getMovies() {
    return this.movies;
  }

  getActors() {
    return this.actors;
  }

  getGenres() {
    return this.genres;
  }

  getSortedMovies() {
    return this.movies.sort((a, b) => b.voteAvg - a.voteAvg);
  }
}
