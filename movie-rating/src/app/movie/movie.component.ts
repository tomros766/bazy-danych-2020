import {Component, Input, OnInit} from '@angular/core';
import {AngularNeo4jComponent} from '../angular-neo4j/angular-neo4j.component';
import {AppRoutingModule} from '../app-routing.module';
import {Router} from '@angular/router';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('movie') movie: Movie;
  constructor(private service: AngularNeo4jComponent, private router: Router) { }

  ngOnInit() {
  }

  details(id: number): void {
    this.service.getDetails(id);
    this.router.navigate(['movie-details', id]);
  }

}
