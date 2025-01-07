import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavouriteMoviesState } from './favourite.model';

export const selectModelState =
    createFeatureSelector<FavouriteMoviesState>('favourite');

export const selectFavouriteMovies = createSelector(
    selectModelState,
    (state) => state.movie
);
