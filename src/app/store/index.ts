import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from 'src/app/user/store/user.reducer';
import { AuthEffects } from '../auth/store/auth.effects';
import { authReducer, AuthState } from '../auth/store/auth.reducer';
import { UserEffects } from '../user/store/user.effects';
import { authorsReducer, AuthorsState } from './authors/authors.reducer';
import { CoursesEffects } from './courses/courses.effects';
import { coursesReducer, CoursesState } from './courses/courses.reducer';
import { AuthorsEffects } from './authors/authors.effects';

export interface State {
  userState: UserState;
  authState: AuthState;
  coursesState: CoursesState;
  authorsState: AuthorsState;
}

export const reducers: ActionReducerMap<State> = {
  userState: userReducer,
  authState: authReducer,
  coursesState: coursesReducer,
  authorsState: authorsReducer
  
};

export const effects: any[] = [UserEffects, AuthEffects, CoursesEffects, AuthorsEffects];
