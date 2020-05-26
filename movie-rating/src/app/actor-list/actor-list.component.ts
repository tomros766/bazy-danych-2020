import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors() {
    this.service.getActors();
  }
}
