import {Component, Input, OnInit} from '@angular/core';
import {Genre} from '../models/Genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('genre') genre: Genre;
  constructor() { }

  ngOnInit() {
  }

}
