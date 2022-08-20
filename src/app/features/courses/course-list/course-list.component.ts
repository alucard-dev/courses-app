import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { Course } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy  {
  @Input() courses: Course[] | null = [];
  @Input() isEditable: boolean = false;
  isAdminSubscription: Subscription | undefined;

  @Output() deleteRequest = new EventEmitter<any>();
  constructor(private userStateFacade: UserStateFacade) {}
 
  ngOnInit(): void {
    this.isAdminSubscription = this.userStateFacade.isAdmin$.subscribe((isAdmin) => {
      this.isEditable = isAdmin;
    });
  }

  ngOnDestroy(): void {
    this.isAdminSubscription?.unsubscribe
  }
}
