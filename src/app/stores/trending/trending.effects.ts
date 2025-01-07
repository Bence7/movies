import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TrendingActions } from './trending.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { mapMoviesWithLink } from '../../shared/utils/movie.mapper';

export const loadTrendingMoviesEffect$ = createEffect(
    (actions$ = inject(Actions), moviesService = inject(MoviesService)) =>
        actions$.pipe(
            ofType(TrendingActions.loadMovies),
            switchMap(() => moviesService.getAllTrendingMovies()),
            map((raw) => {
                const movies = mapMoviesWithLink(raw.results);
                return TrendingActions.loadMoviesSuccess({ movies: movies });
            }),
            catchError((error) =>
                of(TrendingActions.loadMoviesFailure({ error }))
            )
        ),
    { functional: true }
);
