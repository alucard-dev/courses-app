import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';
import { User } from "src/app/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private isAdmin$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private name$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();
  public name$: Observable<string> = this.name$$.asObservable();

  constructor(private userService: UserService) { }

  public getUser() {
    this.userService.getUser()
      .subscribe((user: User) => {
        this.name$$.next(user.name);
        console.log("role", user.role)
        this.isAdmin$$.next(user.role === 'admin');
      },
      (err) => {
        console.log("Error user is not admin")
        this.isAdmin$$.next(false);
      }
      );
  }
}
