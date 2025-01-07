import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Movie } from '../../shared/interfaces/movies.interface';

export const FavouriteMovieActions = createActionGroup({
    source: 'Favourite movie actions',
    events: {
        addMovieToFavourite: emptyProps(),
        addMovieToFavouriteSuccess: props<{ movie: Movie }>(),
        addMovieToFavouriteFailure: props<{ error: Error }>(),
    },
});
