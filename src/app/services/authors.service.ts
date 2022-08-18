import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HOST } from '../app.constants';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http
      .get<{ result: Author[] }>(`${HOST}/authors/all`)
      .pipe(map((data) => data.result));
  }

  public addAuthor(authorName: string) {
    return this.http.post(`${HOST}/authors/add`, authorName);
  }
}
