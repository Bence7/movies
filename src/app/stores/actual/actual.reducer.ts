import { createReducer, on } from '@ngrx/store';
import { ActualModelState } from './actual.model';
import { ActualMovieActions } from './actual.actions';

const initialState: ActualModelState = {
    movie: null,
    loading: false,
    error: null,
};

export const actualReducer = createReducer(
    initialState,
    on(ActualMovieActions.loadActualMovie, (state) => ({
        ...state,
        loading: true,
    })),
    on(ActualMovieActions.loadActualMovieSuccess, (state, { movie }) => ({
        ...state,
        movie,
        loading: false,
    })),
    on(ActualMovieActions.loadActualMovieFailure, ({ error }) => ({
        movie: null,
        error: error,
        loading: false,
    }))
);
