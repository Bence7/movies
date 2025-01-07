import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from './router.state';

export const selectRouterState =
    createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectID = createSelector(
    selectRouterState,
    (router): string | number | null => router?.state.params['id']
);
