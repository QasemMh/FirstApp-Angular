import {Router} from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class RegisterErrorStateMatcher implements ErrorStateMatcher {
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  matcher = new RegisterErrorStateMatcher();

  registerForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    }
    // [CustomValidators.MatchValidator('password', 'confirmPassword')]
    // CustomValidators.mustMatch('password', 'confirmPassword') // insert here
  );
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  passwordMatchError() {
    this.registerForm.get('password')?.value ===
    this.registerForm.get('confirmPassword')?.value
      ? this.registerForm.get('confirmPassword')?.setErrors({ mismatch: false })
      : this.registerForm.get('confirmPassword')?.setErrors({ mismatch: true });
  }
  //rout to login
  goToLogin(){
    this._router.navigate(['/login']);
  }

 
  
}
