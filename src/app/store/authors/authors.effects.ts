import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors.service';
import {
  AuthorsActionTypes,
  requestAddAuthorFail,
  requestAddAuthorSuccess,
  requestAuthorsFail,
  requestAuthorsSuccess,
} from './authors.actions';
@Injectable()
export class AuthorsEffects {
  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActionTypes.requestAuthors),
      mergeMap(() =>
        this.authorsService.getAll().pipe(
          map((authors) => requestAuthorsSuccess({ authors })),
          catchError(() => of(requestAuthorsFail))
        )
      )
    )
  );
  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActionTypes.requestAddAuthor),
      mergeMap(({ author }) =>
        this.authorsService.addAuthor(author).pipe(
          map(() => requestAddAuthorSuccess({ author })),
          catchError(() => of(requestAddAuthorFail))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}
