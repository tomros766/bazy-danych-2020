import { Component, OnInit } from '@angular/core';
import {Genre} from '../models/Genre';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.service.getGenres();
  }

}
