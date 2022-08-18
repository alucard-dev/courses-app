import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HOST } from '../app.constants';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Course[]> {
    return this.http.get<{ result: Course[] }>(`${HOST}/courses/all`)
      .pipe(map(data => data.result));
  }

  public createCourse(course: Course) {
    return this.http.post(`${HOST}/courses/add`, course);
  }

  public editCourse(course: Course, id: string) {
    return this.http.post(`${HOST}/courses/${id}`, course);
  }

  public getCourse(id: string): Observable<Course> {
    return this.http.get<{ result: Course }>(`${HOST}/courses/${id}`)
    .pipe(map(data => data.result));
  }

  public deleteCourse(id: string) {
    return this.http.delete(`${HOST}/courses/${id}`);
  }
}
