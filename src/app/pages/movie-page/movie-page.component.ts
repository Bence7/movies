import { Component, effect, ElementRef, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActualMovieActions } from '../../stores/actual/actual.actions';
import { selectActualMovie } from '../../stores/actual/actual.selector';
import { MovieItemComponent } from '../../shared/components/movie-list/components/movie-item/movie-item.component';
import { AsyncPipe } from '@angular/common';
import { fromEvent, map } from 'rxjs';
import { FavouriteMovieActions } from '../../stores/favourite/favourite.actions';
import { RecommendedMoviesActions } from '../../stores/recommendations/recommendations.actions';
import { RouterModule } from '@angular/router';
import { AppRouteSegment } from '../../app-route-segment';
import { ElementRefDirective } from '../../shared/directives/element-ref/element-ref.directive';

@Component({
  selector: 'app-movie-page',
  imports: [AsyncPipe, MovieItemComponent, RouterModule, ElementRefDirective],
  templateUrl: './movie-page.component.html',
})
export class MoviePageComponent {
  private readonly store = inject(Store);
  protected movieButton = signal<ElementRef<HTMLDivElement> | null>(null);
  protected link = signal(AppRouteSegment.Recommendations);
  protected movie$ = this.store.select(selectActualMovie);
  private readonly loadActualMovieEffect$ = this.store.dispatch(
    ActualMovieActions.loadActualMovie()
  );
  private readonly loadRecommendedMoviesEffect$ = this.store.dispatch(
    RecommendedMoviesActions.loadRecommendedMovies()
  );

  private readonly initializeButtonEffect$ = effect(() => {
    const button = this.movieButton();
    return button
      ? fromEvent(button.nativeElement, 'click')
        .pipe(
          map(() =>
            this.store.dispatch(
              FavouriteMovieActions.addMovieToFavourite()
            )
          )
        )
        .subscribe()
      : null;
  });
}
