import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private toastr: ToastrService,public home: HomeService) {}

  ngOnInit(): void {

    this.toastr.success('Hello world!', 'Toastr fun!');


    this.home.message="Welcome to Home";

  setInterval(() => {
    this.home.numberOfActiveCourse
    .next(this.home.numberOfActiveCourse.value+1);
    //console.log( this.home.numberOfActiveCourse.value);
    this.AlterCourse();
  }, 2000);

  }

  numOfCourse:number = 0;

  AlterCourse() {
    this.home.numberOfActiveCourse.subscribe((data) => {
      this.numOfCourse = data;
    });
  }

 
}
