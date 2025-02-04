import {MovieResponse} from "../../types/movie.ts";
import {QueryParams} from "../../types/queryParams.ts";

export interface IMovieFilterService {
    searchMoviesFiltered: (
        query: QueryParams,
        page?: number,
    ) => Promise<MovieResponse>;
}