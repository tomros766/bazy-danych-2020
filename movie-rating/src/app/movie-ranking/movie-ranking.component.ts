import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-movie-ranking',
  templateUrl: './movie-ranking.component.html',
  styleUrls: ['./movie-ranking.component.css']
})
export class MovieRankingComponent implements OnInit {

  rankedMovies: Movie[];
  constructor(private service: MovieService) {
    this.rankedMovies = service.getSortedMovies().slice(0, 100);
  }

  ngOnInit() {
  }

}
