import { Component, OnInit,Input } from '@angular/core';
import { mockedCourseList } from '..//..//../assets/mocks';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = mockedCourseList;
  @Input() userName = 'Dave';
  constructor() { }

  ngOnInit(): void {
  }

}
