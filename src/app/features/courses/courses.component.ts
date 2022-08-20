import { Component, OnInit, Input, Optional } from '@angular/core';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { Observable } from 'rxjs';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';
import { Course } from 'src/app/models/course';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public userName$: Observable<string> = this.userStateFacade.name$;
  public courses$: Observable<Course[]> | null =this.coursesStateFacade.allCourses$;
  public authors$: Observable<Author[]> | null =this.auhtorsStateFacade.authors$;

  constructor(
    private authFacade: AuthStateFacade,
    private coursesStateFacade: CoursesStateFacade,
    private userStateFacade: UserStateFacade,
    private auhtorsStateFacade: AuthorsStateFacade
  ) {}

  ngOnInit(): void {
    this.userStateFacade.getCurrentUser();
    this.coursesStateFacade.getAllCourses();
    this.auhtorsStateFacade.getAuthors();
  }

  onLogoutClick() {
    this.authFacade.logout();
  }
}
