import { WithLink } from './with-link';

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export interface MovieWithLink extends Movie, WithLink {}

export interface MovieExtended extends Movie {
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    overview: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    video: boolean;
    vote_count: number;
}

export interface QueryMoviesExtended {
    page: number;
    results: MovieExtended[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number; // Defaults to 0
    name: string;
}

export interface ProductionCompany {
    id: number; // Defaults to 0
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string; // Country code
    name: string; // Country name
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string; // Language code
    name: string; // Language name
}

export interface MovieDetailsExtended {
    adult: boolean; // Defaults to true
    backdrop_path: string;
    belongs_to_collection: string | null; // Nullable
    budget: number; // Defaults to 0
    genres: Genre[]; // Array of genre objects
    homepage: string;
    id: number; // Defaults to 0
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number; // Defaults to 0
    poster_path: string;
    production_companies: ProductionCompany[]; // Array of production company objects
    production_countries: ProductionCountry[]; // Array of production country objects
    release_date: string;
    revenue: number; // Defaults to 0
    runtime: number; // Defaults to 0
    spoken_languages: SpokenLanguage[]; // Array of spoken language objects
    status: string;
    tagline: string;
    title: string;
    video: boolean; // Defaults to true
    vote_average: number; // Defaults to 0
    vote_count: number; // Defaults to 0
}
