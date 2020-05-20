import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../models/Movie';
import {AngularNeo4jService} from 'angular-neo4j';
import {MovieService} from '../services/movie.service';
import {isUndefined} from 'util';
import {DatabaseService} from '../services/database.service';
import {Observable} from 'rxjs';
import {Genre} from '../models/Genre';

const url = 'http://localhost:7474/';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  movies: Movie[];

  constructor(private route: ActivatedRoute, private movieService: MovieService, private neo4j: AngularNeo4jService) {
    this.movie = new Movie(this.neo4j, this.movieService);
    this.getMovie();

  }


  getMovie() {
    const query = 'match (g:Genre)--(m:Movie {movieId: ' + this.route.snapshot.params.id + '})--(p:Person) return m, ' +
      'collect(distinct g.genreName) as genres,collect(distinct p.Name) as people';
    console.log(query);
    this.createMovie(query).then(obj => {
      this.movie.genres = obj.genres;
      this.movie.voteAvg = obj.voteAvg;
      this.movie.voteCount = obj.voteCount;
      this.movie.tagLine = obj.tagLine;
      this.movie.title = obj.title;
      this.movie.movieId = obj.movieId;
      this.movie.budget = obj.budget;
      this.movie.director = obj.director;
      this.movie.homepage = obj.homepage;
      this.movie.people = obj.people;
      this.movie.releaseDate = obj.releaseDate;
      this.movie.revenue = obj.revenue;
      this.movie.runtime = obj.runtime;
    });
    console.log(this.movie);
  }



  createMovie(query: string) {
    let movie = new Movie(this.neo4j, this.movieService);
    return movie.executeQuery(query);
  }

  ngOnInit() {
  }
}
