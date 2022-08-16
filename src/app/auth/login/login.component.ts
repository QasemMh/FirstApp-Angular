import { AuthService } from './../../Services/auth.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [
    Validators.required,
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private auth:AuthService) {}

  HandleLogin(evt: any) {
    evt.preventDefault();
    this.auth.login(this.email,this.password);
  }

  ngOnInit() {
    /** spinner starts on init */

  }
}
