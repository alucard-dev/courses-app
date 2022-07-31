import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: any[] = [];
  @Input() isEditable: boolean = false;

  @Output() deleteRequest = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
