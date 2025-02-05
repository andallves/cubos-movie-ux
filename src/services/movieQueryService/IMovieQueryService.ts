import {MovieDetails, MovieResponse} from "../../types/movie.ts";

export interface IMovieQueryService {
    getMovies(page?: number): Promise<MovieResponse>;
    searchMovies(query: string, page?: number): Promise<MovieResponse>;
    getMovieDetails(movieId: string): Promise<MovieDetails>;
}