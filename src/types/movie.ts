import {Genre} from "./genre.ts";

export type Movie = {
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    name_genres: string[];
    vote_count: number;
    popularity: number;
    profit: number
}

export type MovieResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export type MovieDetails = Movie & {
    budget: number;
    revenue: number;
    genres: Genre[];
    status: string;
    tagline: string;
    runtime: number;
}

export type MovieDetailsFormatted = Omit<
    MovieDetails,
    'runtime' | 'status' | 'budget' | 'revenue' | 'profit'
> & {
    vote_porcent: number;
    runtime: string;
    status: string;
    budget: string;
    revenue: string;
    profit: string;
};