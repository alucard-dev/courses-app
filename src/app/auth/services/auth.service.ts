import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { map, tap } from 'rxjs/operators';
import { HOST } from 'src/app/app.constants';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable();

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  login(user: User) {
    return this.http.post<{ result: string }>(`${HOST}/login`, user).pipe(
      map((response) => response.result),
      tap((data) => {
        console.log('LOGIN', data);
        this.sessionStorageService.setToken(data);
        this.isAuthorized$$.next(true);
      })
    );
  }

  logout() {
    return this.http.delete<{ result: string }>(`${HOST}/logout`).pipe(
      tap(() => {
        this.sessionStorageService.deleteToken();
        this.isAuthorized$$.next(false);
      })
    );
  }

  public register(user: User) {
    this.http
      .post<{ result: string }>(`${HOST}/register`, user)
      .pipe(map((data) => data.result));
  }
}
