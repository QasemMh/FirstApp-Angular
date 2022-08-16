import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  CreateNew(){
     const dialogRef =  this.dialog.open(CreateComponent);
  }
}
