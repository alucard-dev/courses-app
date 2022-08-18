import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from "../services/user.service";
import {
    requestCurrentUser,
    requestCurrentUserFail,
    requestCurrentUserSuccess,
  } from './user.actions';

@Injectable()
export class UserEffects {
    getCurrentUser = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCurrentUser),
      mergeMap(() => this.userService.getUser()
        .pipe(
          map(user => (requestCurrentUserSuccess({user}) )),
          catchError(() => of(requestCurrentUserFail))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}