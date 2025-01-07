import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MovieWithLink } from '../../shared/interfaces/movies.interface';

export const TrendingActions = createActionGroup({
    source: 'Trending movies actions',
    events: {
        loadMovies: emptyProps(),
        loadMoviesSuccess: props<{ movies: MovieWithLink[] }>(),
        loadMoviesFailure: props<{ error: Error }>(),
    },
});
