import { createActionGroup, props } from '@ngrx/store';
import { Movie } from '../../shared/interfaces/movies.interface';

export const SearchMovieActions = createActionGroup({
    source: 'Search movie actions',
    events: {
        searchForMovie: props<{ movieName: string }>(),
        searchForMovieSuccess: props<{ movies: Movie[] }>(),
        searchForMovieFailure: props<{ error: Error }>(),
    },
});
