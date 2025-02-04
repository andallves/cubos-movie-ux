export type LanguageMovies = {
    code: string;
    name: string;
}

export type ClassificationMovies = {
    value: string;
    name: string;
}

export type OrderingMovies = {
    id: number,
    code: SortBy,
    name: string ,
}

export type SortBy = "title.desc" | "popularity.desc" | "vote_count.desc" | "primary_release_date.desc";

export type StreamingMovies = {
    id: string,
    name: string,
}

export type PopularityMovies = {
    value: string;
    name: string;
}

export type RatingMovies = {
    value: string;
}