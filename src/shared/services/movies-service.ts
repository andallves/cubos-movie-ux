import axios from "axios";

/**
 * Tipos para os dados retornados pela API do TMDB
 */
export interface Movie {
	id: number;
	title: string;
	original_title: string;
	poster_path: string;
	backdrop_path: string;
	overview: string;
	release_date: string;
	vote_average: number;
	genre_ids: number[];
}

interface MovieResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

interface Genre {
	id: number;
	name: string;
}

interface GenreResponse {
	genres: Genre[];
}

interface MovieDetails extends Movie {
	budget: number;
	revenue: number;
	runtime: number;
	genres: Genre[];
}

const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
	baseURL: BASE_URL,
	params: {
		api_key: API_KEY,
		language: "pt-BR",
	},
});

/**
 * Serviço para consumir a API do TMDB
 */
export const tmdbService = {
	/**
	 * Obtém filmes populares
	 */
	async getPopularMovies(page = 1): Promise<MovieResponse> {
		const response = await axios.get<MovieResponse>(`${BASE_URL}/movie/popular`, {
			params: {
				api_key: API_KEY,
				language: "pt-BR",
				page,
			},
		});
		
		return response.data;
	},

	
	/**
	 * Pesquisa filmes pelo nome
	 */
	async searchMovies(query: string, page = 1): Promise<MovieResponse> {
		const response = await api.get<MovieResponse>("/search/movie", {
			params: { query, page },
		});
		return response.data;
	},
	
	/**
	 * Obtém detalhes de um filme pelo ID
	 */
	async getMovieDetails(movieId: number): Promise<MovieDetails> {
		const response = await api.get<MovieDetails>(`/movie/${movieId}`);
		return response.data;
	},
	
	/**
	 * Obtém lista de gêneros de filmes
	 */
	async getGenres(): Promise<GenreResponse> {
		const response = await api.get<GenreResponse>("/genre/movie/list");
		return response.data;
	},
};
