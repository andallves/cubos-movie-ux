import {MovieResponse} from "../../types/movie.ts";
import {IMovieFilterService} from "./IMovieFilterService.ts";
import {api} from "../../utils/api.ts";
import {QueryParams} from "../../types/queryParams.ts";

export const movieFilterService: IMovieFilterService = {
    async searchMoviesFiltered(query: QueryParams, page = 1): Promise<MovieResponse> {
        const params: Record<string, boolean | string | number> = {
            page,
            include_adult: false,
            language: "pt-BR",
        };

        const {
            genre,
            certification,
            region,
            certification_country,
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

        Object.assign(params, {
            ...(genre && { with_genres: genre }),
            ...(certification && {
                region: region ?? "BR",
                certification_country: certification_country ?? "BR",
                certification: certification ?? "L",
            }),
            ...(startYear && { "primary_release_date.gte": `${startYear}-01-01` }),
            ...(endYear && { "primary_release_date.lte": `${endYear}-12-31` }),
            ...(minRating && { "vote_average.gte": minRating }),
            ...(length && {
                "with_runtime.gte": length === 1 ? 60 : length === 2 ? 120 : undefined,
                "with_runtime.lte": length === 2 ? 120 : length === 3 ? 120 : undefined,
            }),
            ...(originalLanguage && { with_original_language: originalLanguage }),
            ...(popularity && {
                "vote_average.lte": popularity >= 80 ? popularity : undefined,
                "vote_average.gte": popularity < 80 ? popularity : undefined,
            }),
            ...(director && { with_crew: director }),
            ...(actor && { with_cast: actor }),
            ...(streaming && { with_watch_providers: streaming, watch_region: "BR" }),
            ...(country && { with_origin_country: country }),
            ...(sortBy && { sort_by: sortBy }),
        });


        const response = await api.get<MovieResponse>("/discover/movie", { params });
        return response.data;
    },
}