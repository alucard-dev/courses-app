import { Component, OnInit, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { mockedCourseList } from '..//..//../assets/mocks';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public userName$: Observable<string > = this.userStateFacade.name$;
  courses = mockedCourseList;

  constructor(private authService: AuthService, private router: Router,  private courseStoreService: CoursesStoreService,private userStateFacade: UserStateFacade) {
    this.courseStoreService.getAll().subscribe((data) => {
      this.courses = data;
    });
  }

  ngOnInit(): void {
    this.userStateFacade.getCurrentUser()
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
