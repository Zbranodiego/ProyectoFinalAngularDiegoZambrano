import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { Inscription } from '../models';
import { Users } from '../../users/models';
import { Course } from '../../cursos/models/curso-interface';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {

  inscriptions: Inscription[];
  loading: boolean;
  loadingStudents: boolean;
  students: Users[];
  courses: Course[];
  error: unknown;
}

export const initialState: State = {

  inscriptions: [],
  loading: false,
  loadingStudents: false,
  students: [],
  courses: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, (state) => ({ ...state, loading: true })),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, action) => ({ ...state, loading: false, inscriptions: action.data })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),
  on(InscriptionsActions.loadStudent, (state) => {
    return {
      ...state, loadingStudents: true
    }
  }),
  on(InscriptionsActions.loadStudentSuccess,(state, action)=>{
    return{
      ...state,
      loadingStudents:false,
      students: action.data
    }
  }),
  on(InscriptionsActions.loadCoursesSuccess, (state,action)=>({
    ...state,
    courses : action.data
  }))
  
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

