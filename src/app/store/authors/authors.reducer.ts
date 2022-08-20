import { Action, createReducer, on } from '@ngrx/store';
import { Author } from 'src/app/models/author';
import {
  requestAuthors,
  requestAuthorsSuccess,
  requestAuthorsFail,
  requestAddAuthor,
  requestAddAuthorSuccess,
  requestAddAuthorFail,
  resetAddedAuthor
} from './authors.actions';

export const authorsFeatureKey  = 'authors';

export interface AuthorsState  {
  authors: Author[];
  addedAuthor: Author | null;
}

export const initialAuthorsState: AuthorsState = {
  authors: [],
  addedAuthor: null
};


export const authorsDataReducer = createReducer(
  initialAuthorsState,
  on(requestAuthors, (state) => ({ ...state })),
  on(requestAuthorsSuccess, (state, { authors }) => ({
    ...state,
    authors: authors
  })),
  on(requestAuthorsFail, (state) => ({ ...state })),

  on(requestAddAuthor, (state) => ({ ...state })),
  on(requestAddAuthorSuccess, (state, { author }) => ({
    ...state,
    authors: [...state.authors, author]
  })),
  on(requestAddAuthorFail, (state) => ({
    ...state
  })),

  on(resetAddedAuthor, (state) => ({
    ...state,
    addedAuthor: null
  })),
);

export const authorsReducer = (state: AuthorsState | undefined, action: Action): AuthorsState => authorsDataReducer(state, action);
