import {
  Component,
  effect,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchMovieActions } from '../../stores/search/search.actions';
import { selectSearchMovie } from '../../stores/search/search.selector';
import { MovieListComponent } from '../../shared/components/movie-list/movie-list.component';
import { AsyncPipe } from '@angular/common';
import { MovieItemComponent } from '../../shared/components/movie-list/components/movie-item/movie-item.component';
import { ElementRefDirective } from '../../shared/directives/element-ref/element-ref.directive';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MovieListComponent,
    AsyncPipe,
    MovieItemComponent,
    ElementRefDirective
  ],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  protected searchInput = signal<ElementRef<HTMLDivElement> | null>(null);
  private readonly store = inject(Store);
  protected searchBar = new FormControl<string>('');
  protected movies$ = this.store.select(selectSearchMovie);
  private readonly searchBar$ = effect(() => {
    const search = this.searchInput()
    return search ? fromEvent(
      search.nativeElement,
      'input'
    ).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(() => {
        const value = this.searchBar.value;
        return value
          ? this.store.dispatch(
            SearchMovieActions.searchForMovie({
              movieName: value,
            })
          )
          : this.store.dispatch(
            SearchMovieActions.searchForMovie({ movieName: '' })
          );
      })
    ).subscribe() : null
  })
}
