import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecommendedMoviesActions } from '../../stores/recommendations/recommendations.actions';
import { selectRecommendedMovies } from '../../stores/recommendations/recommendations.selector';
import { AsyncPipe } from '@angular/common';
import { MovieItemComponent } from '../../shared/components/movie-list/components/movie-item/movie-item.component';
import { MovieListComponent } from '../../shared/components/movie-list/movie-list.component';

@Component({
    selector: 'app-recommendation-page',
    imports: [AsyncPipe, MovieItemComponent, MovieListComponent],
    templateUrl: './recommendation-page.component.html',
})
export class RecommendationPageComponent {
    private readonly store = inject(Store);
    private readonly loadEffect$ = this.store.dispatch(
        RecommendedMoviesActions.loadRecommendedMovies()
    );
    protected movies$ = this.store.select(selectRecommendedMovies);
}
