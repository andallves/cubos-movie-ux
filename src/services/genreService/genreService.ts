import {GenreResponse} from "../../types/genre.ts";
import {api} from "../../utils/api.ts";
import {IGenreService} from "./IGenreService.ts";

export const genreService: IGenreService = {
    async getGenres(): Promise<GenreResponse> {
        const response = await api.get<GenreResponse>("/genre/movie/list");
        return response.data;
    },
}