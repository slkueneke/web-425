import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="signin-form-container">
      <form [formGroup]="signinForm" (ngSubmit)="signin()" class="signinform">
        <h1 class="font3">Complete the form below to sign in.</h1>
        <fieldset>
          <legend class="font2">User Sign In</legend>
          <label class="font2" for="email">Email</label>
          <input formControlName="email" type="email" id="email" name="email" />
          @if (
            signinForm.controls['email'].touched &&
            signinForm.controls['email'].hasError('required')
          ) {
            <small class="error">Email is required.</small>
          }
          @if (
            signinForm.controls['email'].touched &&
            signinForm.controls['email'].hasError('email')
          ) {
            <small class="error">Invalid email address.</small>
          }
          <label class="font2" for="password">Password</label>
          <input formControlName="password" id="password" type="password" />
          @if (
            signinForm.controls['password'].touched &&
            signinForm.controls['password'].hasError('required')
          ) {
            <small class="error">Password is required.</small>
          }
          @if (
            signinForm.controls['password'].touched &&
            signinForm.controls['password'].hasError('pattern')
          ) {
            <small class="error"
              >Password must be at least 8 characters long and contain at least
              one uppercase letter and one number.</small
            >
          }
          <input
            class="font2"
            type="submit"
            [disabled]="!signinForm.valid"
            value="Sign In"
          />
        </fieldset>
      </form>
    </div>
  `,
  styles: `
    .signin-form-container {
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
    .signin-form {
      flex: 1;
      margin-right: 20px;
    }
    label,
    input {
      display: block;
      margin-bottom: 5px;
    }
    input,
    input[type='submit'] {
      padding: 8px;
      box-sizing: border-box;
    }
    input[type='email'],
    input[type='password'] {
      width: 100%;
    }
    input[type='submit'] {
      margin-top: 10px;
      float: right;
    }
    .error {
      color: red;
      padding: 5px;
      font-family: Arial, sans-serif;
    }
    .font2 {
      font-family: 'Unica One', sans-serif;
    }
    .font3 {
      font-family: 'Bitcount Grid Single Ink', system-ui;
    }
    h1 {
      font-size: 1.5em;
    }
    fieldset {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-top: 10px;
    }
    input,
    select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      box-sizing: border-box;
    }
    input[type='submit'] {
      margin-top: 15px;
      width: auto;
      float: right;
      background-color: #974a97;
      border: none;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      color: #fff;
      font-size: 1.2rem;
      display: inline-block;
      text-decoration: none;
    }
    input[type='submit']:hover {
      cursor: pointer;
      background-color: #000;
    }
    input[type='submit']:disabled {
      cursor: not-allowed;
      background-color: #ccc;
    }
  `,
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/),
      ]),
    ],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}
  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;
    if (this.authService.signin(email, password)) {
      const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
