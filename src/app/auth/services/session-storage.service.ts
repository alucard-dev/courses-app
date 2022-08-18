import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private window: Window

  constructor() {this.window = window }

  getToken() {
    return this.window.sessionStorage.getItem('token');
  }

  setToken(token: string) {
    this.window.sessionStorage.setItem('token', token);
  }

  deleteToken() {
    this.window.sessionStorage.removeItem('token');
  }
}
