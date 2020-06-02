import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../models/Movie';
import {AngularNeo4jService} from 'angular-neo4j';
import {MovieService} from '../services/movie.service';
import {AuthenticationService} from '../services/authentication.service';
import {RatingModule} from 'ng-starrating';


const url = 'http://localhost:7474/';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  movies: Movie[];
  constructor(private route: ActivatedRoute, private movieService: MovieService, private neo4j: AngularNeo4jService,
              private userService: AuthenticationService) {
    this.movie = new Movie(this.neo4j);
    this.getMovie();
    console.log(this.route.snapshot.routeConfig.path);
  }


  getMovie() {
    // tslint:disable-next-line:max-line-length
    const query = 'match (g:Genre)-[gr]-(m:Movie {movieId: ' + this.route.snapshot.params.id + '})-[cast]-(p:Person) return m, g, p, gr, cast';
    // console.log(query);
    this.createMovie(query).then(obj => {
      this.movie.genres = obj.genres;
      this.movie.voteAvg = obj.voteAvg;
      this.movie.voteCount = obj.voteCount;
      this.movie.tagLine = obj.tagLine;
      this.movie.title = obj.title;
      this.movie.movieId = obj.movieId;
      this.movie.budget = obj.budget;
      this.movie.directors = obj.directors;
      this.movie.homepage = obj.homepage;
      this.movie.people = obj.people;
      this.movie.releaseDate = obj.releaseDate;
      this.movie.revenue = obj.revenue;
      this.movie.runtime = obj.runtime;
    });
    // console.log(this.movie);
  }



  createMovie(query: string) {
    const movie = new Movie(this.neo4j);
    return movie.executeQuery(query);
  }

  ngOnInit() {
  }

  onRate($event: { oldValue: number; newValue: number; starRating: RatingModule }) {
    const currentSum = this.movie.voteCount * this.movie.voteAvg + $event.newValue;
    this.movie.voteCount = this.movie.voteCount + 1;
    this.movie.voteAvg = currentSum / this.movie.voteCount;
    this.userService.addUserVote(this.movie.title, $event.newValue);
    this.movieService.addVote(this.movie.title, this.movie.voteCount, this.movie.voteAvg);
  }

  isLogged() {
    return this.userService.isLogged;
  }
}
