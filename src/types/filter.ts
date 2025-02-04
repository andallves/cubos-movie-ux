export type LanguageMovies = {
    code: string;
    name: string;
}

export type ClassificationMovies = {
    value: string;
    name: string;
}

export type OrdenacaoMovies = {
    id: number,
    code: SortBy,
    name: string ,
}

export type SortBy = "title.asc" | "popularity.asc" | "vote_count.asc" | "primary_release_date.asc";