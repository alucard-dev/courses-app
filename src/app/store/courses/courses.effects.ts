import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError ,tap} from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';

import {
  CoursesActionTypes,
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
  requestCreateCourseFail,
  requestDeleteCourseFail,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCoursesSuccess,
  requestSingleCourseFail,
  requestSingleCourseSuccess,
  requestCreateCourseSuccess,
} from './courses.actions';

@Injectable()
export class CoursesEffects {

  getAll$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestAllCourses),
      mergeMap(() =>
        this.coursesService.getAll().pipe(
         map((courses) => requestAllCoursesSuccess({ courses })),
         catchError(() => of(requestAllCoursesFail))
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestFilteredCourses),
      mergeMap((filterStr) =>
        this.coursesService.filterCourses(filterStr).pipe(map((courses) => requestFilteredCoursesSuccess({ courses })))
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestSingleCourse),
      mergeMap((id) =>
        this.coursesService.getCourse(id).pipe(
          map((course) => requestSingleCourseSuccess({ course })),
          catchError(() => of(requestSingleCourseFail))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestDeleteCourse),
      mergeMap((id) =>
        this.coursesService.deleteCourse(id).pipe(
          map(() => requestAllCourses()),
          catchError(() => of(requestDeleteCourseFail))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestEditCourse),
      mergeMap(({ id, course }) =>
        this.coursesService.editCourse(id, course).pipe(
          map(() =>requestEditCourseSuccess({ course })),
          catchError(() => of(requestEditCourseFail))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestCreateCourse),
      mergeMap(({ course }) =>
        this.coursesService.createCourse(course).pipe(
          map(() => requestCreateCourseSuccess(course)),
          catchError(() => of(requestCreateCourseFail))
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(() =>
      this.actions$.pipe(
        ofType(
          CoursesActionTypes.requestCreateCourseSuccess,
          CoursesActionTypes.requestEditCourseSuccess,
          CoursesActionTypes.requestSingleCourseFail
        ),
        mergeMap(() => this.router.navigate(['/courses']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private coursesService: CoursesService, private router: Router) {}
}