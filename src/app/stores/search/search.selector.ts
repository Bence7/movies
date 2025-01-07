import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchMoviesState } from './search.model';

export const selectModelState =
    createFeatureSelector<SearchMoviesState>('search');

export const selectSearchMovie = createSelector(
    selectModelState,
    (state) => state.movies
);
