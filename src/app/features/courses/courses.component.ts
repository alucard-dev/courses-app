import { Component, OnInit, Input } from '@angular/core';
import { mockedCourseList } from '..//..//../assets/mocks';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  @Input() userName = 'Dave';
  courses = mockedCourseList;

  ngOnInit(): void {}
}
