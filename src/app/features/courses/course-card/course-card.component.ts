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
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  constructor() { }

  ngOnInit(): void {
  }
  transformMinutes(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    let postfix=''
    if(hours>1){
      postfix =' hrs'
    }
    else{
      postfix=' hr'
    }
    return hours + ':' + minutes + postfix;
  }

}
