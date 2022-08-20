import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/models/author';

export enum AuthorsActionTypes {
  requestAuthors = '[Authors] requestAuthors',
  requestAuthorsSuccess = '[Authors] requestAuthorsSuccess',
  requestAuthorsFail = '[Authors] requestAuthorsFail',
  requestAddAuthor = '[Authors] requestAddAuthor',
  requestAddAuthorSuccess = '[Authors] requestAddAuthorSuccess',
  requestAddAuthorFail = '[Authors] requestAddAuthorFail',
  resetAddedAuthor = '[Authors] resetAddedAuthor',
}

export const requestAuthors = createAction(AuthorsActionTypes.requestAuthors);
export const requestAuthorsSuccess = createAction(
  AuthorsActionTypes.requestAuthorsSuccess,
  props<{ authors: Author[] }>()
);
export const requestAuthorsFail = createAction(
  AuthorsActionTypes.requestAuthorsFail,
  props<{ message: string }>()
);

export const requestAddAuthor = createAction(
  AuthorsActionTypes.requestAddAuthor,
  props<{ author: Author }>()
);
export const requestAddAuthorSuccess = createAction(
  AuthorsActionTypes.requestAddAuthorSuccess,
  props<{ author: Author }>()
);
export const requestAddAuthorFail = createAction(AuthorsActionTypes.requestAddAuthorFail);

export const resetAddedAuthor = createAction(AuthorsActionTypes.resetAddedAuthor);
