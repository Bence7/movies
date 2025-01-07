import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FavouriteMovieActions } from './favourite.actions';
import { catchError, forkJoin, map, of, switchMap, take } from 'rxjs';
import { selectActualMovie } from '../actual/actual.selector';
import { selectFavouriteMovies } from './favourite.selector';

export const addMovieToFavouriteEffect$ = createEffect(
    (actions$ = inject(Actions), store$ = inject(Store)) =>
        actions$.pipe(
            ofType(FavouriteMovieActions.addMovieToFavourite),
            switchMap(() =>
                forkJoin({
                    movie: store$.select(selectActualMovie).pipe(take(1)),
                    favouriteMovies: store$
                        .select(selectFavouriteMovies)
                        .pipe(take(1)),
                })
            ),
            map(({ movie, favouriteMovies }) => {
                if (movie && favouriteMovies) {
                    const isAlreadyFavourite = favouriteMovies.some(
                        (fav) => fav.id === movie.id
                    );
                    if (isAlreadyFavourite) {
                        return FavouriteMovieActions.addMovieToFavouriteFailure(
                            { error: Error('Error') }
                        );
                    }
                    return FavouriteMovieActions.addMovieToFavouriteSuccess({
                        movie: movie,
                    });
                }
                return FavouriteMovieActions.addMovieToFavouriteFailure({
                    error: Error('Error'),
                });
            }),
            catchError(() =>
                of(
                    FavouriteMovieActions.addMovieToFavouriteFailure({
                        error: Error('Error'),
                    })
                )
            )
        ),
    { functional: true }
);
