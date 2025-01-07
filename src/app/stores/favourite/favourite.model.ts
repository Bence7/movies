import { Movie } from '../../shared/interfaces/movies.interface';

export interface FavouriteMoviesState {
    movie: Movie[];
    error: Error | null;
}
