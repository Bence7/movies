import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../shared/interfaces/movies.interface';

export const RecommendedMoviesActions = createActionGroup({
    source: 'Recommended movies actions',
    events: {
        loadRecommendedMovies: emptyProps(),
        loadRecommendedMoviesSuccess: props<{ movie: Movie[] }>(),
        loadRecommendedMoviesFailure: props<{ error: Error }>(),
    },
});
