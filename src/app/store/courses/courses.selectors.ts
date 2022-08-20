import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { CoursesState } from './courses.reducer';

export const getCoursesState = (state: State) => state.coursesState;

export const isAllCoursesLoading = createSelector(getCoursesState,(state: CoursesState) => state.isAllCoursesLoading);
export const isSearchingStateSelector = createSelector(getCoursesState, (state: CoursesState) => state.isSearchState);
export const isSingleCourseLoading = createSelector(getCoursesState,(state: CoursesState) => state.isSingleCourseLoading);
export const getCourses = createSelector(getCoursesState, (state: CoursesState) => state.courses);
export const getAllCourses = createSelector(getCoursesState, (state: CoursesState) => state.allCourses);
export const getCourse = createSelector(getCoursesState, (state: CoursesState) => state.course);
export const getErrorMessage = createSelector(getCoursesState, (state: CoursesState) => state.errorMessage);