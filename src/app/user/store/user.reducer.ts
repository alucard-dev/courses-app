import { Action, createReducer, on } from '@ngrx/store';
import {
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
} from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  isAdmin: boolean;
  name: string;
}

export const initialState: UserState = {
  isAdmin: false,
  name: '',
};

export const reduce = createReducer(
  initialState,
  on(requestCurrentUser, (state) => state),
  on(requestCurrentUserFail, (state, action) => ({
    ...state,
    errorMessage: action.message,
  })),
  on(requestCurrentUserSuccess, (state, { user }) => ({
    ...state,
    name: user.name,
    isAdmin: user.role === 'admin',
  }))
);

export const userReducer = (state: UserState | undefined, action: Action) => reduce(state, action);
