import { Injectable } from '@angular/core';
import {DatabaseService} from './database.service';
import {User} from '../models/User';
import {EncryptionService} from './encryption.service';
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[];
  isLogged = false;
  userName = '';
  userMovies = new Array<{movieTitle: string, movieId: number, vote: number}>();
  constructor(private db: DatabaseService, private enrrypt: EncryptionService) {
    this.users = db.users;
    if (this.isLogged) {
      this.getUserMovies();
    }
  }

  registerUser(username, password, email) {
    const passwdEnc = this.enrrypt.set(password);
    for (const elem of this.users) {
      if (elem.email === email) { return 2; }
      if (elem.username === username) { return 1; }
    }
    this.db.registerUser(username, passwdEnc, email);
    this.users.push({
      email,
      password: passwdEnc,
      username
    });
    return 0;
  }

  logUser(email, password) {
    const passwdEnc = this.enrrypt.set(password);
    for (const elem of this.users) {
      if (elem.email === email) {
        if (elem.password === passwdEnc) {
          this.userName = elem.username;
          this.isLogged = true;
          this.getUserMovies();
          return true;
        }
      }
    }
    return false;
  }

  logOut() {
    this.isLogged = false;
    this.userName = '';
  }

  getCurrentUser() {
    if (this.isLogged) {
      for (const elem of this.users) {
        if (elem.username === this.userName) { return elem; }
      }
    }
    return null;
  }

  getUserMovies() {
    const query = 'match (u: User {username: $username})-[r: VOTED]-(m:Movie) return m, r';
    const params = {username: this.userName};
    this.db.neo4j.run(query, params).then(res => {
      for (const elem of res) {
        console.log(elem);
        const movieTitle = elem[0].properties.title;
        const movieId = elem[0].properties.movieId;
        const vote = elem[1].properties.vote;
        if (!this.userMovies.map(el => el.movieId).includes(movieId)) {
          this.userMovies.push({movieTitle, movieId, vote});
        }
      }
    });
  }

  getVotedMovies() {
    if (this.isLogged) {
      return this.userMovies;
    }
    return [];
  }

  addUserVote(title, vote) {
    if (this.isLogged) {
    this.db.addUserVote(this.userName, title, vote); }
  }
}
