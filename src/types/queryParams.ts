import {MovieLengthEnum} from "../enums/movieLength.ts";
import {SortBy} from "./filter.ts";


export type QueryParams = {
    genre?: string,
    region?: string,
    certification_country?: string,
    certification?: string,
    startYear?: string,
    endYear?: string,
    minRating?: string,
    length?: MovieLengthEnum
    originalLanguage?: string,
    popularity?: string,
    director?: string,
    actor?: string,
    streaming?: string,
    country?: string,
    keyword?: string,
    sortBy?: SortBy
}
