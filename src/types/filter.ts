import {SortBy} from "../services/movieFilterService/movieFilterService.ts";

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