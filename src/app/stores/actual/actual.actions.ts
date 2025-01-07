import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../shared/interfaces/movies.interface';

export const ActualMovieActions = createActionGroup({
    source: 'Actual movie actions',
    events: {
        loadActualMovie: emptyProps(),
        loadActualMovieSuccess: props<{ movie: Movie | null }>(),
        loadActualMovieFailure: props<{ error: Error }>(),
    },
});
