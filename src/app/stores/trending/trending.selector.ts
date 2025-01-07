import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TrendingMoviesState } from './trending.model';
import { adapter } from './trending.reducer';

export const selectTrendingState =
    createFeatureSelector<TrendingMoviesState>('trending');

export const selectTrendingMovies = createSelector(
    selectTrendingState,
    adapter.getSelectors().selectAll
);
