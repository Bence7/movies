import { Movie } from '../../shared/interfaces/movies.interface';

export interface ActualModelState {
    movie: Movie | null;
    loading: boolean;
    error: Error | null;
}
