import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscriptions from './inscriptions.reducer';
import { state } from '@angular/animations';

export const selectInscriptionsState = createFeatureSelector<fromInscriptions.State>(
  fromInscriptions.inscriptionsFeatureKey
);

export const selectInscription = createSelector(
  selectInscriptionsState,
  (state)=>state.inscriptions)

export const selectinscriptionsIsloading = createSelector(
  selectInscriptionsState,
  (state)=>state.loading
)

export const selectinscriptionsStudents = createSelector(
  selectInscriptionsState,
  (state)=>state.students
)

export const selectinscriptionsCourses = createSelector(
  selectInscriptionsState,
  (state)=>state.courses
)