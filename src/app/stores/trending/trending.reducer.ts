import { createReducer, on } from '@ngrx/store';
import { TrendingMoviesState } from './trending.model';
import { TrendingActions } from './trending.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { MovieWithLink } from '../../shared/interfaces/movies.interface';

export const adapter: EntityAdapter<MovieWithLink> =
    createEntityAdapter<MovieWithLink>();

const initialState: TrendingMoviesState = adapter.getInitialState({
    isLoading: false,
    error: null,
});

export const trendingReducer = createReducer(
    initialState,

    // Handle loading state
    on(TrendingActions.loadMovies, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),

    // Handle successful data loading
    on(TrendingActions.loadMoviesSuccess, (state, { movies }) =>
        adapter.setMany(movies, {
            ...state,
            isLoading: false,
        })
    ),

    // Handle failure
    on(TrendingActions.loadMoviesFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    }))
);
