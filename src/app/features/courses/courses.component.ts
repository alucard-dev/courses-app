import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { mockedCourseList } from '..//..//../assets/mocks';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  @Input() userName = 'Dave';
  courses = mockedCourseList;

  constructor(private authService: AuthService, private router: Router,  private courseStoreService: CoursesStoreService) {
    this.courseStoreService.getAll().subscribe((data) => {
      this.courses = data;
    });
  }
  ngOnInit(): void {}

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
