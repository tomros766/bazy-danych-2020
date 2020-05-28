import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private fb: FormBuilder, private service: AuthenticationService) {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  tryRegister(value) {
    const res = this.service.registerUser(value.username, value.password, value.email);
    if (res === 0) {
      this.errorMessage = '';
      this.successMessage = 'Twoje konto zostało pomyślnie zarejestrowane';
    } else if (res === 1) {
      this.errorMessage = 'Nazwa użytkownika już istnieje';
      this.successMessage = '';
    } else {this.errorMessage = 'Podany email już istnieje';
            this.successMessage = ''; }
  }
}
