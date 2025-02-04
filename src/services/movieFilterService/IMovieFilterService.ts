import {IMovieResponse} from "../../types/movie.ts";
import {IQueryParams} from "../../types/queryParams.ts";

export interface IMovieFilterService {
    searchMoviesFiltered: (
        query: IQueryParams,
        page?: number,
    ) => Promise<IMovieResponse>;
}