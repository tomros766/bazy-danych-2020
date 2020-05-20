import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularNeo4jModule} from 'angular-neo4j';
import { MovieComponent } from './movie/movie.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MainPageComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularNeo4jModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
