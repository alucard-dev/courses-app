import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HOST } from 'src/app/app.constants';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { User } from "src/app/models/user";


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  getUser() {
    const headers = new HttpHeaders().set('Authorization',<string>this.sessionStorageService.getToken());
    return this.http
      // .get<{ result: User }>(`${HOST}/users/me`,{headers})
      .get<{ result: User }>(`${HOST}/users/me`,)
      .pipe(map((data) => data.result));
  }
}
