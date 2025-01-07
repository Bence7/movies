import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { SearchMovieActions } from './search.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { mapMovies } from '../../shared/utils/movie.mapper';

export const searchMovieEffect$ = createEffect(
    (actions$ = inject(Actions), service = inject(MoviesService)) =>
        actions$.pipe(
            ofType(SearchMovieActions.searchForMovie),
            switchMap(({ movieName }) => {
                return service.getSearchedMovies(movieName);
            }),
            map((data) => {
                const movies = mapMovies(data.results);
                return SearchMovieActions.searchForMovieSuccess({
                    movies: movies,
                });
            }),
            catchError((error) =>
                of(SearchMovieActions.searchForMovieFailure({ error: error }))
            )
        ),
    { functional: true }
);
