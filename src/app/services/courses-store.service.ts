import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
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

  constructor(private coursesService: CoursesService) {
   }

  public getAll(): void {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe(
      (courses) => {
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      }
    );
  }

  public createCourse(course: Course): void {
     this.coursesService.createCourse(course)
      .subscribe(() => {
        this.courses$$.getValue().push(course);
        let nextValue = this.courses$$.getValue();
        this.courses$$.next(nextValue);
      });
  }

  public editCourse(course: Course, id: string) {
    this.coursesService.editCourse(course, id)
      .subscribe(() => {
        const currentValue = this.courses$$.getValue();
        const index = currentValue.findIndex(course => course.id === id);
        const nextValue = currentValue.splice(index, 1, course);

        this.courses$$.next(nextValue);
      });
  }

  public getCourse(id: string): Observable<Course> {
    return this.coursesService.getCourse(id)
  }

  public deleteCourse(id: string) {
    this.coursesService.deleteCourse(id)
      .subscribe(() => {
        const currentValue = this.courses$$.getValue();
        const index = currentValue.findIndex(course => course.id === id);
        const nextValue = currentValue.splice(index, 1);
        this.courses$$.next(nextValue);
      });
  }
}
