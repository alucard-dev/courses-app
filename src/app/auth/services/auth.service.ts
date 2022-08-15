import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { map, tap } from 'rxjs/operators';
import { HOST } from 'src/app/app.constants';

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

  login(email: string, password: string) {
    return this.http
      .post<{ result: string }>(`${HOST}/login`, {
        email,
        password,
      })
      .pipe(
        map((data) => {
          console.log('LOGIN');
          this.sessionStorageService.setToken(data.result);
          this.isAuthorized$$.next(true);
        })
      );
  }
  logout() {
    const headers = new HttpHeaders().set('Authorization',<string>this.sessionStorageService.getToken());
    this.http
      .delete<{ result: string }>(`${HOST}/logout`,)
      .subscribe(() => {
        this.sessionStorageService.deleteToken();
        this.isAuthorized$$.next(false);
      });
  }

  register() {}
}
