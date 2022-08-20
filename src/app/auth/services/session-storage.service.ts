import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  @Inject('Window') window: Window

  constructor() {this.window = window }

  getToken() {
    return sessionStorage.getItem('token');
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  deleteToken() {
    sessionStorage.removeItem('token');
  }
}
