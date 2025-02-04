import {MovieResponse} from "../../types/movie.ts";
import {IMovieFilterService} from "./IMovieFilterService.ts";
import {api} from "../../utils/api.ts";
import {QueryParams} from "../../types/queryParams.ts";

export type SortBy = "title.asc" | "popularity.asc" | "vote_count.asc" | "primary_release_date.asc";

export const movieFilterService: IMovieFilterService = {
    async searchMoviesFiltered(query: QueryParams, page = 1): Promise<MovieResponse> {
        const params: Record<string, boolean | string | number> = {
            page,
            include_adult: false,
            language: "pt-BR",
        };

        if (query.genre) params.with_genres =  query.genre;
        if (query.certification) {
            params.region = query.region ?? "BR";
            params.certification_country = query.certification_country ?? "BR";
            params.certification = query.certification ?? "L";
        }
        if (query.startYear) params["primary_release_date.gte"] = `${query.startYear}-01-01`;
        if (query.endYear) params["primary_release_date.lte"] = `${query.endYear}-12-31`;
        if (query.minRating) params["vote_average.gte"] =  query.minRating;
        switch (query.length) {
            case 1:
                params["with_runtime.gte"] = 60;
                break;
            case 2:
                params["with_runtime.lte"] = 60;
                params["with_runtime.gte"] = 120;
                break;
            case 3:
                params["with_runtime.lte"] = 120;
                break;
            default:
                break;
        }
        if (query.originalLanguage) params.with_original_language = query.originalLanguage;
        if (query.popularity) {
            if (query.popularity >= 80) params["vote_average.lte"] = query.popularity;
            if (query.popularity < 80) params["vote_average.gte"] = query.popularity;
        }
        if (query.director) params.with_crew = query.director;
        if (query.actor) params.with_cast = query.actor;
        if (query.streaming) {
            params.with_watch_providers = query.streaming;
            params.watch_region = "BR";
        }
        if (query.country) params.with_origin_country = query.country;
        if (query.sortBy) params.sort_by =  query.sortBy;

        const response = await api.get<MovieResponse>("/discover/movie", { params });
        return response.data;
    },
}