import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  constructor(private route: Router) {}


  ngOnInit() {
  }

  isMainPage() {
    return this.route.url === '/main-page';
  }

}
