import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularNeo4jModule} from 'angular-neo4j';
import {AngularNeo4jComponent} from './angular-neo4j/angular-neo4j.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularNeo4jComponent
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
