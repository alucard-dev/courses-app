import { createSelector } from '@ngrx/store';
import { State } from '../../store/index';
import { AuthState } from './auth.reducer';

export const getAuthState = (state: State) => state.authState;

export const isUserAuthorized = createSelector(getAuthState, (state: AuthState) => state.isAuthorized);
export const getToken = createSelector(getAuthState, (state: AuthState) => state.token);
export const getSpecificErrorMessage  = createSelector(getAuthState, (state: AuthState) => state.errorMessage);
