import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  message: string = 'Hello World, From Service';
  selectedCourse: any = {};
  numberOfActiveCourse: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  dataAPI: any = [{}];
  singleDataApi: any = {};
  displayImage: any;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  GetAll() {
    this.spinner.show();

    this.http
      .get(
        'https://raw.githubusercontent.com/QasemMh/telegram-procedures/master/test.json'
      )
      .subscribe(
        (result) => {
          this.dataAPI = result;
          this.spinner.hide();
          this.toastr.success('Data Retrive From API...');
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error(
            'error when fetch api...' + error.message,
            error.status
          );
        }
      );
  }

  CreateCourse(body: any) {
    this.http.post('', body).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        new Error(err.message);
      }
    );
  }

  uploadImage(file: FormData) {
    this.spinner.show();
    this.http.post('', file).subscribe(
      (result: any) => {
        this.displayImage = result.imageFile; //*
        if (result) {
          this.toastr.success('Image Uploaded Successfully...');
        }
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        new Error(err.message);
      }
    );
  }
}
