import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseModule } from '../course/course.module';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  imports: [CommonModule, SharedModule,CourseModule, CoursesRoutingModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
