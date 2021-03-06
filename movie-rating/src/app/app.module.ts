import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularNeo4jModule } from 'angular-neo4j';
import { MovieComponent } from './movie/movie.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ActorComponent } from './actor/actor.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {IgxCarouselModule, IgxListModule} from 'igniteui-angular';
import { ActorListComponent } from './actor-list/actor-list.component';
import { GenreComponent } from './genre/genre.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { MovieRankingComponent } from './movie-ranking/movie-ranking.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TitleSearchPipe } from './shared/title-search.pipe';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';
import { GenrePipe } from './shared/genre.pipe';
import { RatingPipe } from './shared/rating.pipe';
import {RatingModule} from 'ng-starrating';
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MainPageComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ActorComponent,
    ToolbarComponent,
    ActorListComponent,
    GenreComponent,
    GenreListComponent,
    RegisterComponent,
    LoginComponent,
    TitleSearchPipe,
    FilterMoviesComponent,
    GenrePipe,
    RatingPipe,
    MovieRankingComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularNeo4jModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    IgxListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDividerModule,
    NgxPaginationModule,
    FormsModule,
    MatCardModule,
    RatingModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
