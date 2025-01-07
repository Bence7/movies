import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import {
    MovieDetailsExtended,
    QueryMoviesExtended,
} from '../../interfaces/movies.interface';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'https://api.themoviedb.org/3';
    private readonly header = new HttpHeaders({
        accept: 'application/json',
        Authorization: `Bearer ${environment.auth}`,
    });

    public getAllTrendingMovies = () => {
        const url = `${this.baseUrl}/trending/movie/day`;
        return this.http.get<QueryMoviesExtended>(url, {
            headers: this.header,
        });
    };

    public getMovieById = (id: string) => {
        const url = `${this.baseUrl}/movie/${id}?language=en-US`;
        return this.http.get<MovieDetailsExtended>(url, {
            headers: this.header,
        });
    };

    public getSearchedMovies = (value: string) => {
        const url = `${this.baseUrl}/search/movie?query=${value}`;
        return this.http.get<QueryMoviesExtended>(url, {
            headers: this.header,
        });
    };

    public getRecommendedMovies = (value: string) => {
        const url = `${this.baseUrl}/movie/${value}/recommendations`;
        return this.http.get<QueryMoviesExtended>(url, {
            headers: this.header,
        });
    };
}
