import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RecommendedMoviesActions } from './recommendations.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { selectID } from '../router/router.selector';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { mapMoviesWithLink } from '../../shared/utils/movie.mapper';

export const loadRecommendedMoviesEffect$ = createEffect(
    (
        actions$ = inject(Actions),
        store$ = inject(Store),
        service$ = inject(MoviesService)
    ) =>
        actions$.pipe(
            ofType(RecommendedMoviesActions.loadRecommendedMovies),
            switchMap(() => {
                return store$.select(selectID).pipe(
                    switchMap((id) => {
                        if (typeof id === 'string') {
                            return service$.getRecommendedMovies(id).pipe(
                                map((raw) => {
                                    const movies = mapMoviesWithLink(
                                        raw.results
                                    );
                                    return RecommendedMoviesActions.loadRecommendedMoviesSuccess(
                                        { movie: movies }
                                    );
                                }),
                                catchError((error) =>
                                    of(
                                        RecommendedMoviesActions.loadRecommendedMoviesFailure(
                                            { error }
                                        )
                                    )
                                )
                            );
                        }
                        return of(
                            RecommendedMoviesActions.loadRecommendedMoviesFailure(
                                {
                                    error: new Error('Invalid ID'),
                                }
                            )
                        );
                    })
                );
            }),
            catchError(() =>
                of(
                    RecommendedMoviesActions.loadRecommendedMoviesFailure({
                        error: new Error('Unexpected error'),
                    })
                )
            )
        ),
    { functional: true }
);
