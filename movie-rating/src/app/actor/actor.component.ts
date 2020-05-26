import {Component, Input, OnInit} from '@angular/core';
import {CastMember} from '../models/CastMember';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('actor') actor: CastMember;
  constructor() { }

  ngOnInit() {
  }
}
