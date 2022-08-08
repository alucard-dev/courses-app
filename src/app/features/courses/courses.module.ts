import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { CourseModule } from '../course/course.module';


@NgModule({
  imports: [CommonModule, SharedModule, LoginModule, RegistrationModule,CourseModule],
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
