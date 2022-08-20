import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { Course } from '../models/course';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private courses$$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public courses$: Observable<Course[]> = this.courses$$.asObservable();
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) {}
  /// TODO REPLACE ALL
  public getAll(): Observable<Course[]> {
    this.isLoading$$.next(true);
    return this.coursesService.getAll().pipe(
      tap((value) => {
        this.courses$$.next(value);
      }),
      switchMap(() => this.courses$),
      tap(() => {
        this.isLoading$$.next(false);
      })
    );
  }

  public createCourse(course: Course): Observable<Course[]> {
    return this.coursesService
      .createCourse(course)
      .pipe(switchMap(() => this.getAll()));
  }

  public editCourse(course: Course, id: string) {
    this.coursesService.editCourse(course, id).subscribe(() => {
      const currentValue = this.courses$$.getValue();
      const index = currentValue.findIndex((course) => course.id === id);
      const nextValue = currentValue.splice(index, 1, course);

      this.courses$$.next(nextValue);
    });
  }

  public getCourse(id: string): Observable<Course> {
    return this.coursesService.getCourse(id);
  }

  public deleteCourse(id: string) {
    this.coursesService.deleteCourse(id).subscribe(() => {
      const currentValue = this.courses$$.getValue();
      const index = currentValue.findIndex((course) => course.id === id);
      const nextValue = currentValue.splice(index, 1);
      this.courses$$.next(nextValue);
    });
  }
}
