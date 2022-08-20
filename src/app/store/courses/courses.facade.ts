import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Course } from 'src/app/models/course';

import { State } from 'src/app/store';
import {
  requestAllCourses,
  requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
  requestFilteredCourses,
  requestSingleCourse,
} from './courses.actions';
import {
  getAllCourses,
  getCourse,
  getCourses,
  getErrorMessage,
  isAllCoursesLoading,
  isSearchingStateSelector,
  isSingleCourseLoading,
} from './courses.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoursesStateFacade {
  public isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoading));
  public isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoading));
  public isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
  public courses$ = this.store.pipe(select(getCourses));
  public allCourses$ = this.store.pipe(select(getAllCourses));
  public course$ = this.store.pipe(select(getCourse));
  public errorMessage$ = this.store.pipe(select(getErrorMessage));

  constructor(private store: Store<State>) {}

  public getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  public getSingleCourse(id: string) {
    this.store.dispatch(requestSingleCourse({ id }));
  }

  public getFilteredCourses(searchValue : string) {
    this.store.dispatch(requestFilteredCourses({ searchValue }));
  }

  public editCourse(course: Course, id: string) {
    this.store.dispatch(requestEditCourse({ course, id }));
  }

  public createCourse(course: Course) {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  public deleteCourse(id: string) {
    this.store.dispatch(requestDeleteCourse({ id }));
  }
}
