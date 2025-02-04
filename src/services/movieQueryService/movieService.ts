import {MovieDetails, MovieResponse} from "../../types/movie.ts";
import {api} from "../../utils/api.ts";
import {IMovieService} from "./IMovieService.ts";

export const movieService: IMovieService = {

    async getMovies(page = 1): Promise<MovieResponse> {
        const response = await api.get<MovieResponse>(`/movie/popular`, { params: { page } });
        return response.data;
    },

    async searchMovies(query: string, page = 1): Promise<MovieResponse> {
        const response = await api.get<MovieResponse>("/search/movie", {
            params: {query, page},
        });
        return response.data;
    },

    async getMovieDetails(movieId: string): Promise<MovieDetails> {
        const response = await api.get<MovieDetails>(`/movie/${movieId}`);
        return response.data;
    },
};
