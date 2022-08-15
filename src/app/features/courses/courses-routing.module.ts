import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from '../course/course-form/course-form.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses.component';
import { AdminGuard } from 'src/app/user/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: ':id', component: CourseCardComponent },
      { path: 'add', component: CourseCardComponent, canActivate: [AdminGuard] },
      { path: 'edit/:id', component: CourseCardComponent, canActivate: [AdminGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
