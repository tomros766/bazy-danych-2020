import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  currentUser: User;
  votedMovies = new Array<{movieTitle: string, movieId: number, vote: number}>();
  constructor(private service: AuthenticationService) {
    this.currentUser = service.getCurrentUser();
    this.votedMovies = service.getVotedMovies();
  }

}
