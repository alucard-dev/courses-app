import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export enum UserRequestActionTypes {
  getCurrentUser = '[User] Request Current User',
  getCurrentUserSuccess = '[User] Request Current User Success',
  getCurrentUserFail = '[User] Request Current User Fail',
}

export const requestCurrentUser = createAction(UserRequestActionTypes.getCurrentUser);
export const requestCurrentUserSuccess = createAction(
  UserRequestActionTypes.getCurrentUserSuccess,
  props<{ user: User }>()
);
export const requestCurrentUserFail = createAction(
  UserRequestActionTypes.getCurrentUserFail,
  props<{ message: string }>()
);
