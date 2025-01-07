import { createReducer, on } from '@ngrx/store';
import { FavouriteMoviesState } from './favourite.model';
import { FavouriteMovieActions } from './favourite.actions';

const initialState: FavouriteMoviesState = {
    movie: [],
    error: null,
};

export const favouriteReducer = createReducer(
    initialState,
    on(FavouriteMovieActions.addMovieToFavourite, (state) => ({
        ...state,
        error: null,
    })),
    on(
        FavouriteMovieActions.addMovieToFavouriteSuccess,
        (state, { movie }) => ({
            ...state,
            movie: state.movie.concat(movie),
            error: null,
        })
    ),
    on(
        FavouriteMovieActions.addMovieToFavouriteFailure,
        (state, { error }) => ({
            ...state,
            error: error,
        })
    )
);
