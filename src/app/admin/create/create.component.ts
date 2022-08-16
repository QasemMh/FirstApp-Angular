import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { HomeService } from 'src/app/services/home.service';

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
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  matcher = new MyErrorStateMatcher();

  createForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    imageFile: new FormControl('', Validators.required),
  });

  constructor(private service: HomeService) {}

  uploadImage(files: any) {
    if (files.length === 0) return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.service.uploadImage(formData);
  }

  SaveData() {
    this.service.CreateCourse(this.createForm.value);
  }
  
}
