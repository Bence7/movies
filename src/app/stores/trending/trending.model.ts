import { MovieWithLink } from '../../shared/interfaces/movies.interface';
import { EntityState } from '@ngrx/entity';

export interface TrendingMoviesState extends EntityState<MovieWithLink> {
    isLoading: boolean;
    error: Error | null;
}
