import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    public home: HomeService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  login(email: any, pass: any) {
    this.spinner.show();

    const body = {
      username: email.value.toString(),
      password: pass.value.toString(),
    };
    const headerRef = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerRef),
    };
    //
    return this.http
      .post('https://localhost:44349/api/Jwt/Authen', body, requestOptions)
      .subscribe(
        (data) => {
          console.log("token:");
          console.log(data);
          this.spinner.hide();
          const respons = {
            token: data.toString(),
          };

          localStorage.setItem('token', respons.token);
          let decoded: any = jwt_decode(respons.token);
          localStorage.setItem('userData', JSON.stringify(decoded));
          //decoded token
          console.log(decoded);

          if (decoded.role == 'admin') {
            this.router.navigate(['/home']);
            this.home.message = 'you are logging in as admin';
          } else {
            this.router.navigate(['/home']);
            this.home.message = 'you are logging in as user';
          }
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error('Invalid Credentials', 'Error');
        }
      );
    //
  }
}
