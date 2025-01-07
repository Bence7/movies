import { Movie } from '../../shared/interfaces/movies.interface';

export interface SearchMoviesState {
    movies: Movie[];
    error: Error | null;
    loading: boolean;
}
