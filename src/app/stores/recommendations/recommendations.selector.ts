import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecommendedMovieState } from './recommendations.model';

export const selectModelState =
    createFeatureSelector<RecommendedMovieState>('recommendations');

export const selectRecommendedMovies = createSelector(
    selectModelState,
    (state) => state.movies
);
