import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActualModelState } from './actual.model';

export const selectModelState =
    createFeatureSelector<ActualModelState>('actual');

export const selectActualMovie = createSelector(
    selectModelState,
    (state) => state.movie
);
