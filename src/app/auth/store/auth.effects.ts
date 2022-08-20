import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

import {
  AuthActionTypes,
  requestLoginFail,
  requestLoginSuccess,
  requestLogoutSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.requestLogin),
      mergeMap((user) =>
        this.authService.login(user).pipe(
          map((token: string) => {
            this.router.navigate(['/courses']);
            return requestLoginSuccess({ token });
          }),
          catchError((err) => {
            return of(requestLoginFail({ message: err }));
          })
        )
      )
    )
  );

  logout$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.requestLogout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.router.navigate(['/login']);
            return requestLogoutSuccess();
          })
        )
      )
    )
  );
}
