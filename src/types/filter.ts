import {Genre} from "./genre.ts";

export type OrderingMovies = {
    id: number,
    code: SortBy,
    name: string ,
}

export type SortBy = "title.desc" | "popularity.desc" | "vote_count.desc" | "primary_release_date.desc";

export type SelectorValuesOptions = OrderingMovies | Genre | {
    id: number | string;
    name: string;
    code?: string;
};