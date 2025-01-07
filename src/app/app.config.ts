import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { trendingReducer } from './stores/trending/trending.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as TrendingEffects from './stores/trending/trending.effects';
import * as ActualEffects from './stores/actual/actual.effects';
import * as SearchEffects from './stores/search/search.effects';
import * as FavouriteEffects from './stores/favourite/favourite.effects';
import * as RecommendedEffects from './stores/recommendations/recommendations.effects';
import { provideHttpClient } from '@angular/common/http';
import { actualReducer } from './stores/actual/actual.reducer';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { CustomSerializer } from './stores/router/custom-route-serializer';
import { searchReducer } from './stores/search/search.reducer';
import { favouriteReducer } from './stores/favourite/favourite.reducer';
import { recommendationsReducer } from './stores/recommendations/recommendations.reducer';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
        provideStore({
            router: routerReducer,
            recommendations: recommendationsReducer,
            favourite: favouriteReducer,
            actual: actualReducer,
            trending: trendingReducer,
            search: searchReducer,
        }),
        provideEffects(
            TrendingEffects,
            ActualEffects,
            SearchEffects,
            FavouriteEffects,
            RecommendedEffects
        ),
        provideStoreDevtools(),
        provideRouterStore({ serializer: CustomSerializer }),
    ],
};
