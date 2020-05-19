import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularNeo4jModule} from 'angular-neo4j';
import { MovieComponent } from './movie/movie.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MainPageComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularNeo4jModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
