import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActualMovieActions } from './actual.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { MoviesService } from '../../shared/services/movies/movies.service';
import { Store } from '@ngrx/store';
import { selectID } from '../router/router.selector';
import { mapMovie } from '../../shared/utils/movie.mapper';

export const loadActualMovieEffect$ = createEffect(
    (
        actions$ = inject(Actions),
        service = inject(MoviesService),
        store = inject(Store)
    ) =>
        actions$.pipe(
            ofType(ActualMovieActions.loadActualMovie),
            switchMap(() =>
                store.select(selectID).pipe(
                    switchMap((id) => {
                        if (typeof id === 'string') {
                            return service.getMovieById(id).pipe(
                                map((raw) => {
                                    const movie = mapMovie(raw);
                                    return ActualMovieActions.loadActualMovieSuccess(
                                        { movie }
                                    );
                                }),
                                catchError((error) =>
                                    of(
                                        ActualMovieActions.loadActualMovieFailure(
                                            { error }
                                        )
                                    )
                                )
                            );
                        }
                        return of(
                            ActualMovieActions.loadActualMovieFailure({
                                error: new Error('Invalid ID'),
                            })
                        );
                    })
                )
            )
        ),
    { functional: true }
);
