import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { AuthorsState } from './authors.reducer';

export const getAuthorsState = (state: State) => state.authorsState;

export const getAddedAuthors = createSelector( getAuthorsState, (state: AuthorsState) => state.addedAuthor);
export const getAuthors = createSelector( getAuthorsState, (state: AuthorsState) => state.authors);