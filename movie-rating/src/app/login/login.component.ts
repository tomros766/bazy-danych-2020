import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatabaseService} from '../services/database.service';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private service: AuthenticationService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required]]
    });
  }

  tryLogin(value) {
    const res = this.service.logUser(value.email, value.password);
    if (!res) {
      this.errorMessage = 'Niepoprawne dane logowania';
    }
  }
}
