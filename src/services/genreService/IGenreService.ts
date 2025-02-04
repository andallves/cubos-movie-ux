import {IGenreResponse} from "../../types/genre.ts";

export interface IGenreService {
    getGenres: () => Promise<IGenreResponse>;
}