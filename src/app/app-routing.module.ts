import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
//import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  // default path
  {
    path: '',
    loadChildren: () => AuthModule,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'security',
    loadChildren: () => AuthModule,
  },
   {
    path: 'admin',
    loadChildren: () => AdminModule,
  },
  {
    path: 'course',
    component: CourseComponent,
  },  {
    path: 'profile',
    component: ProfileComponent,
  },
];

//import('./auth/auth.module').then(e=>e.AuthModule)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
