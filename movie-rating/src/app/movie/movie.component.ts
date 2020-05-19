import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from '../models/Movie';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('movie') movie: Movie;
  constructor(private service: MovieService, private router: Router) { }

  ngOnInit() {
  }

}
