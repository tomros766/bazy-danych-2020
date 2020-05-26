import { Injectable } from '@angular/core';
import {DatabaseService} from './database.service';
import {EncryptionService} from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private db: DatabaseService, private encryption: EncryptionService) { }

  registerUser(username, password, email) {
    if (this.checkUsername(username) && this.checkEmail(email)) {
    const passwordEnc = this.encryption.set(password);
    let res = this.db.registerUser(username, passwordEnc, email);
    for (const elem of res) {
      return elem === 1;
    }} else { return false; }
  }

  checkUsername(username) {
    const res = this.db.checkUsername(username);
    for (const elem of res) {
      return elem == null;
    }
  }

  private checkEmail(email) {
    const res = this.db.checkEmail(email);
    for (const elem of res) {
      return elem == null;
    }
  }
}
