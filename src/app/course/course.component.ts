import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: any = [
    {
      id: 1,
      name: 'Angular',
      image: '',
      price: 99.99,
      code: 'ABC123',
      duration: '5 days',
      rating: 4.3,
      releaseDate: 'Nov 2, 2019',
    },
    {
      id: 12,
      name: 'Asp Core 3.1',
      image: '',
      price: 99.99,
      code: 'ABC123',
      duration: '15 days',
      rating: 4.8,
      releaseDate: 'Nov 25, 2019',
    },
  ];

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.GetAll();
  }
}
