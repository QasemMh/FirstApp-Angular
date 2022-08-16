import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() courseName: string = '';
  @Input() courseDate: string = '';

  @Input() id: number = -1;
  @Input() fullName: string = '';
  @Input() gender: string = '';
  @Input() email: string = '';
  @Input() ipAddress: string = '';

  @Output() opneProfile = new EventEmitter();

  constructor(private router: Router, public homeService: HomeService) {}

  numOfCourse: number = 0;
  ngOnInit(): void {
    this.homeService.numberOfActiveCourse.subscribe((data) => {
      this.numOfCourse = data;
    });
  }

  showPorfile() {
    //  this.opneProfile.emit();
    this.homeService.selectedCourse = {
      name: this.courseName,
      date: this.courseDate,
    };

    this.homeService.singleDataApi = {
      id:this.id,
      fullName : this.fullName,
      gender:this.gender,
      email:this.email,
      ipAddress:this.ipAddress

    }

    this.router.navigate(['profile']); //profile
  }
}
