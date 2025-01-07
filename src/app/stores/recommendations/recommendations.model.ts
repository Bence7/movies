import { Movie } from '../../shared/interfaces/movies.interface';

export interface RecommendedMovieState {
    movies: Movie[];
    error: Error | null;
    loading: boolean;
}
