import { Injectable } from '@angular/core';
import {DatabaseService} from './database.service';
import {User} from '../models/User';
import {EncryptionService} from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[];
  isLogged = false;
  userName = '';
  constructor(private db: DatabaseService, private enrrypt: EncryptionService) {
    this.users = db.users;
  }

  registerUser(username, email, password) {
    const passwdEnc = this.enrrypt.set(password);
    for (const elem of this.users) {
      if (elem.email === email) { return 2; }
      if (elem.username === username) { return 1; }
    }
    this.db.registerUser(username, email, passwdEnc);
    this.users.push({
      email,
      username,
      password: passwdEnc
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
}
