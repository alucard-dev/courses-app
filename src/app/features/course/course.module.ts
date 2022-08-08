import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CourseComponent, CourseFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports:[CourseFormComponent]
})
export class CourseModule {}
