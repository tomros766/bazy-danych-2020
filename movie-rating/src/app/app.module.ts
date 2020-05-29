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
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import {MatDividerModule} from '@angular/material/divider';

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
    LoginComponent
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
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
