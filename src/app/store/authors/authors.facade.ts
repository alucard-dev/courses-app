import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Author } from 'src/app/models/author';
import { State } from 'src/app/store';
import { requestAddAuthor, requestAuthors } from './authors.actions';
import { getAddedAuthors, getAuthors } from './authors.selectors';

@Injectable({
    providedIn: 'root',
  })
export class AuthorsStateFacade {
  addedAuthor$ = this.store.pipe(select(getAddedAuthors));
  authors$ = this.store.pipe(select(getAuthors));

  constructor(private store: Store<State>) {}

  getAuthors() {
    this.store.dispatch(requestAuthors());
  }
  addAuthor(author: Author) {
    this.store.dispatch(requestAddAuthor({ author }));
  }
}
