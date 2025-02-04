import {GenreResponse} from "../../types/genre.ts";

export interface IGenreService {
    getGenres: () => Promise<GenreResponse>;
}