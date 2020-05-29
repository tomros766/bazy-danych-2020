import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {ActorListComponent} from './actor-list/actor-list.component';
import {GenreListComponent} from './genre-list/genre-list.component';
import {RegisterComponent} from './register/register.component';
import {ActorComponent} from './actor/actor.component';


const routes: Routes = [
  {path: '', redirectTo: 'main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'ranking', component: MovieListComponent},
  {path: 'all', component: MovieListComponent},
  {path: 'actors', component: ActorListComponent},
  {path: 'actor/:id', component: ActorComponent},
  {path: 'genres', component: GenreListComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
