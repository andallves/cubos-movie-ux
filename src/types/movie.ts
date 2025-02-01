import {Genre} from "./genre.ts";

export interface Movie {
    id: number,
    title: string,
    original_title: string,
    poster_path: string,
    backdrop_path: string,
    overview: string,
    release_date: string,
    vote_average: number,
    genre_ids: number[],

}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface MovieDetails extends Movie {
    budget: number;
    revenue: number;
    runtime: number;
    genres: Genre[];
}