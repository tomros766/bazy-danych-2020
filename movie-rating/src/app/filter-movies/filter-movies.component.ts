import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Genre} from '../models/Genre';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.css']
})
export class FilterMoviesComponent implements OnInit {
  @Input() genres: Array<Genre>;
  @Output() textToSearch = new EventEmitter<string>();
  @Output() rateToSearch = new EventEmitter<number>();
  @Output() genreToSearch = new EventEmitter<string>();
  searchText: string;
  searchRating: number;
  searchGenre: string;
  constructor() { }

  ngOnInit() {
  }

  textSearch() {
    this.textToSearch.emit(this.searchText);
  }

  ratingSearch(rate: number) {
    this.rateToSearch.emit(rate);
  }

  genreSearch(genre: string) {
    this.genreToSearch.emit(genre);
  }
}
