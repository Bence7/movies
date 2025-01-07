import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrendingActions } from '../../stores/trending/trending.actions';
import { selectTrendingMovies } from '../../stores/trending/trending.selector';
import { AsyncPipe } from '@angular/common';
import { MovieListComponent } from '../../shared/components/movie-list/movie-list.component';
import { MovieItemComponent } from '../../shared/components/movie-list/components/movie-item/movie-item.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-trending-page',
    imports: [AsyncPipe, MovieListComponent, MovieItemComponent, RouterModule],
    templateUrl: './trending-page.component.html',
})
export class TrendingPageComponent {
    private readonly store = inject(Store);
    private readonly loadMoviesEffect$ = this.store.dispatch(
        TrendingActions.loadMovies()
    );
    protected movies$ = this.store.select(selectTrendingMovies);
}
