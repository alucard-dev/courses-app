import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/models/course';
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
  requestCreateCourse,
  requestCreateCourseFail,
  requestCreateCourseSuccess,
  requestDeleteCourse,
  requestDeleteCourseFail,
  requestEditCourse,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCourses,
  requestFilteredCoursesSuccess,
  requestSingleCourse,
  requestSingleCourseFail,
  requestSingleCourseSuccess,
} from './courses.actions';

export const authFeatureKey = 'courses';

export interface CoursesState {
  allCourses: Course[];
  courses: Course[];
  course: Course | null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialCoursesState: CoursesState = {
  allCourses: [],
  courses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: '',
};


export const reduce = createReducer(
  initialCoursesState,
  on(requestAllCourses, (state) => ({ ...state, isAllCoursesLoading: true })),
  on(requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
  })),
  on(requestAllCoursesFail, (state, { message }) => ({
    ...state,
    errorMessage: message,
    isAllCoursesLoading: false,
  })),

  on(requestSingleCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isSingleCourseLoading: false,
  })),
  on(requestSingleCourseFail, (state, { message }) => ({
    ...state,
    errorMessage: message,
    isSingleCourseLoading: false,
  })),

  on(requestFilteredCourses, (state) => ({ ...state, isSearchState: true })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses,
    isSearchState: false,
  })),

  on(requestDeleteCourse, (state, { id }) => ({
    ...state,
    allCourses: state.allCourses.filter((course) => course.id !== id),
  })),
  on(requestDeleteCourseFail, (state, { message }) => ({
    ...state,
    errorMessage: message,
  })),

  on(requestEditCourse, (state) => ({ ...state })),
  on(requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    allCourses: state.allCourses.map((x) => (x.id === course.id ? course : x)),
  })),
  on(requestEditCourseFail, (state, { message }) => ({
    ...state,
    errorMessage: message,
  })),

  on(requestCreateCourse, (state) => ({ ...state })),
  on(requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course],
  })),
  on(requestCreateCourseFail, (state, { message }) => ({
    ...state,
    errorMessage: message,
  }))
);

export const coursesReducer = (state: CoursesState | undefined, action: Action): CoursesState => reduce(state, action);
