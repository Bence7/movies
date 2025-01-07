import { createReducer, on } from '@ngrx/store';
import { SearchMoviesState } from './search.model';
import { SearchMovieActions } from './search.actions';

const initialState: SearchMoviesState = {
    movies: [],
    error: null,
    loading: false,
};

export const searchReducer = createReducer(
    initialState,
    on(SearchMovieActions.searchForMovie, (state) => ({
        ...state,
        movies: [],
        error: null,
        loading: true,
    })),
    on(SearchMovieActions.searchForMovieSuccess, (state, { movies }) => ({
        ...state,
        movies: movies,
        error: null,
        loading: false,
    })),
    on(SearchMovieActions.searchForMovieFailure, (state, { error }) => ({
        ...state,
        movies: [],
        error: error,
        loading: false,
    }))
);
