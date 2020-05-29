import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  ifLogged() {
    return !this.service.isLogged;
  }

  getCurrentUsername() {
    if (this.service.isLogged) {
      return this.service.userName;
    }
  }

  logOut() {
    this.service.logOut();
  }
}
