import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";
import { State } from '../../store/index';

// export const getUserState = createFeatureSelector<UserState>('user');
export const getUserState = (state: State) => state.userState;

export const isAdmin = createSelector( getUserState, (state: UserState) => state.isAdmin );
export const getName = createSelector( getUserState, (state: UserState) => state.name );