import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { State } from 'src/app/store';
import {
  requestLogin,
  requestLoginSuccess,
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
} from './auth.actions';
import { getSpecificErrorMessage, getToken, isUserAuthorized } from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthStateFacade {
  public isUserAuthorized$ = this.store.pipe(select(isUserAuthorized));
  public getToken$ = this.store.pipe(select(getToken));
  public getSpecificErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));

  constructor(private store: Store<State>) {
  }

  public login(body: User): void {
    this.store.dispatch(requestLogin(body));
  }

  public register(body: User): void {
    this.store.dispatch(requestRegister(body));
  }

  public logout(): void {
    this.store.dispatch(requestLogout());
  }

  public closeSession(): void {
    this.store.dispatch(requestLogoutSuccess());
  }

  public setAuthorization(): void {
    this.store.dispatch(requestLoginSuccess({ token: sessionStorage.getToken() }));
  }
}