import { Action, createReducer, on } from '@ngrx/store';
import {
    requestLogin,
    requestLoginFail,
    requestLoginSuccess,
    requestLogout,
    requestLogoutSuccess,
    requestRegister,
    requestRegisterFail,
    requestRegisterSuccess,
  } from './auth.actions';
  
  export const authFeatureKey = 'auth';

  export type AuthState  = {
    isAuthorized: boolean;
    token?: string;
    errorMessage?: string;
  };

  const initialState: AuthState = {
    isAuthorized: false,
  };
  

  export const reduce = createReducer(
    initialState,
    on(requestLogin, (state) => state),
    on(requestLoginSuccess, (state, { token }) => ({
      ...state,
      token: token,
      isAuthorized: true,
    })),
    on(requestLoginFail, (state, { message }) => ({ ...state, errorMessage: message })),
    on(requestRegister, (state) => state),
    on(requestRegisterSuccess, (state) => state),
    on(requestRegisterFail, (state, { message }) => ({ ...state, errorMessage: message })),
    on(requestLogout, (state) => state),
    on(requestLogoutSuccess, (state) => ({ ...state, token: undefined, isAuthorized: false }))
  );


export const authReducer = (state: AuthState | undefined, action: Action) => reduce(state, action);