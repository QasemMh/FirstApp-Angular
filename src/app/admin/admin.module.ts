import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ManageCourseComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
