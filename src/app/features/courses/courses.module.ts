import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  exports: [CoursesComponent],
})
export class CoursesModule {}
