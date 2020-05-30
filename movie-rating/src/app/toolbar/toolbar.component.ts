import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {RouterService} from '../services/router.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private service: AuthenticationService, private routerService: RouterService) { }

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

  getPreviousURL() {
      return this.routerService.getPreviousUrl();
    }
}
