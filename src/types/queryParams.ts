import {MovieLengthEnum} from "../enums/movieLength.ts";
import {SortBy} from "../services/movieFilterService/movieFilterService.ts";

export type QueryParams = {
    genre?: number,
    region?: string,
    certification_country?: string,
    certification?: string,
    startYear?: number,
    endYear?: number,
    minRating?: number,
    length?: MovieLengthEnum
    originalLanguage?: string,
    popularity?: number,
    director?: string,
    actor?: string,
    streaming?: string,
    country?: string,
    keyword?: string,
    sortBy?: SortBy
}
