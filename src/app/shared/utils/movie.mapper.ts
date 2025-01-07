import { AppRouteSegment } from '../../app-route-segment';
import {
    Movie,
    MovieDetailsExtended,
    MovieExtended,
    MovieWithLink,
} from '../interfaces/movies.interface';

export const mapMoviesWithLink = (movies: MovieExtended[]): MovieWithLink[] => {
    return movies.map((item) => {
        return mapMovieWithLink(item);
    });
};
export const mapMovies = (movies: MovieExtended[]): Movie[] => {
    return movies.map((item) => {
        return mapMovie(item);
    });
};

export const mapMovieWithLink = (
    movie: MovieExtended | MovieDetailsExtended
): MovieWithLink => {
    return {
        id: movie.id,
        routerLink: [AppRouteSegment.Movie, movie.id.toString()],
        release_date: movie.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        title: movie.title,
        vote_average: movie.vote_average,
    };
};
export const mapMovie = (
    movie: MovieExtended | MovieDetailsExtended
): Movie => {
    return {
        id: movie.id,
        release_date: movie.release_date,
        poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        title: movie.title,
        vote_average: movie.vote_average,
    };
};
