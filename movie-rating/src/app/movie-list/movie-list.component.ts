import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {FilterMoviesComponent} from '../filter-movies/filter-movies.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  p = 1;
  rateToSearch = 0;
  titleToSearch = '';
  genreToSearch = '';
  constructor(private service: MovieService) { }

  getMovies() {
    return this.service.getMovies();
  }

  ngOnInit() {
    this.getMovies();
  }

  searchByRating(rate: number) {
    this.rateToSearch = rate;
  }

  searchByTitle(title: string) {
    this.titleToSearch = title;
  }

  searchByGenre(genre: string) {
    this.genreToSearch = genre;
  }

  getGenres() {
    return this.service.getGenres();
  }
}
