import { MovieResponse } from "../../types/movie.ts";
import { IMovieFilterService } from "./IMovieFilterService.ts";
import { api } from "../../utils/api.ts";
import { QueryParams } from "../../types/queryParams.ts";

export const movieFilterService: IMovieFilterService = {
    searchMoviesFiltered: async function (query: QueryParams, page = 1): Promise<MovieResponse> {
        const params: Record<string, boolean | string | number> = {
            page,
            include_adult: false,
            language: "pt-BR",
        };

        const {
            genre,
            certification,
            region = "BR",
            certification_country = "BR",
            startYear,
            endYear,
            minRating,
            length,
            originalLanguage,
            popularity,
            director,
            actor,
            streaming,
            country,
            sortBy,
        } = query;

        if (genre) params.with_genres = genre;
        if (certification) {
            params.region = region;
            params.certification_country = certification_country;
            params.certification = certification;
        }
        if (startYear) params["primary_release_date.gte"] = `${startYear}-01-01`;
        if (endYear) params["primary_release_date.lte"] = `${endYear}-12-31`;
        if (minRating) params["vote_average.gte"] = minRating;
        if (length) {
            params["with_runtime.gte"] = length === 1 ? 60 : length === 2 ? 120 : "";
            params["with_runtime.lte"] = length === 2 ? 120 : length === 3 ? 120 : "";
        }
        if (originalLanguage) params.with_original_language = originalLanguage;
        if (popularity) {
            params["vote_average.lte"] = Number(popularity) >= 80 ? popularity : "";
            params["vote_average.gte"] = Number(popularity) < 80 ? popularity : "";
        }
        if (director) params.with_crew = director;
        if (actor) params.with_cast = actor;
        if (streaming) {
            params.with_watch_providers = streaming;
            params.watch_region = "BR";
        }
        if (country) params.with_origin_country = country;
        if (sortBy) params.sort_by = sortBy;

        const response = await api.get<MovieResponse>("/discover/movie", {params});
        return response.data;
    },
};