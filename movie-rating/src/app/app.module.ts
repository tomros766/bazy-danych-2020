import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularNeo4jComponent } from './angular-neo4j/angular-neo4j.component';
import {AngularNeo4jModule} from 'angular-neo4j';

@NgModule({
  declarations: [
    AppComponent,
    AngularNeo4jComponent
  ],
  imports: [
    AngularNeo4jModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
