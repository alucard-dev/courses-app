import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { State } from 'src/app/store';
import { isAdmin, getName } from './user.selectors';
import { requestCurrentUser } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserStateFacade {
  isAdmin$ = this.store.pipe(select(isAdmin));
  name$ = this.store.pipe(select(getName));

  constructor(private store: Store<State>) {}

  getCurrentUser() {
    this.store.dispatch(requestCurrentUser());
  }
}
