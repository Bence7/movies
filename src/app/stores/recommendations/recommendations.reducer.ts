import { createReducer, on } from '@ngrx/store';
import { RecommendedMovieState } from './recommendations.model';
import { RecommendedMoviesActions } from './recommendations.actions';

const initialState: RecommendedMovieState = {
    movies: [],
    error: null,
    loading: false,
};

export const recommendationsReducer = createReducer(
    initialState,
    on(RecommendedMoviesActions.loadRecommendedMovies, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),

    on(
        RecommendedMoviesActions.loadRecommendedMoviesSuccess,
        (state, { movie }) => ({
            ...state,
            loading: false,
            movies: movie,
            error: null,
        })
    ),

    on(
        RecommendedMoviesActions.loadRecommendedMoviesFailure,
        (state, { error }) => ({
            ...state,
            movies: [],
            loading: false,
            error,
        })
    )
);
