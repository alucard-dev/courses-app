import { Component, Input, OnInit } from '@angular/core';

export interface Course {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  
  ngOnInit(): void {}

  transformMinutes(value: number): string {
    var hours = Math.floor(value / 60);
    var minutes = Math.floor(value % 60);
    const postfix = hours > 1 ? ' hrs' : ' hr';

    return `${hours}:${minutes} ${postfix}`;
  }
}
