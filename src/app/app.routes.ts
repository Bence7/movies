import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
    {
        path: AppRouteSegment.Trending,
        loadComponent: () =>
            import('./pages/trending-page/trending-page.component').then(
                (m) => m.TrendingPageComponent
            ),
    },
    {
        path: `${AppRouteSegment.Trending}/${AppRouteSegment.Movie}/:id`,
        redirectTo: `${AppRouteSegment.Movie}/:id`,
        pathMatch: 'prefix',
    },
    { path: '', redirectTo: AppRouteSegment.Trending, pathMatch: 'full' },
    {
        path: `${AppRouteSegment.Movie}/:id/${AppRouteSegment.Recommendations}`,
        loadComponent: () =>
            import(
                './pages/recommendation-page/recommendation-page.component'
            ).then((m) => m.RecommendationPageComponent),
    },
    {
        path: `${AppRouteSegment.Movie}/:id`,
        loadComponent: () =>
            import('./pages/movie-page/movie-page.component').then(
                (m) => m.MoviePageComponent
            ),
    },
    {
        path: `${AppRouteSegment.Search}/${AppRouteSegment.Movie}`,
        loadComponent: () =>
            import('./pages/search-page/search-page.component').then(
                (m) => m.SearchPageComponent
            ),
    },
];
