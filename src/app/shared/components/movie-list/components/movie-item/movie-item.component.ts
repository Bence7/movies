import { Component, input } from '@angular/core';
import { MovieItemVM } from './movie-item-vm.model';

@Component({
    selector: 'app-movie-item',
    imports: [],
    templateUrl: './movie-item.component.html',
})
export class MovieItemComponent {
    public vm = input.required<MovieItemVM>();
}
