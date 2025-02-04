import {IGenreResponse} from "../../types/genre.ts";
import {api} from "../../utils/api.ts";
import {IGenreService} from "./IGenreService.ts";

export const genreService: IGenreService = {
    async getGenres(): Promise<IGenreResponse> {
        const response = await api.get<IGenreResponse>("/genre/movie/list");
        return response.data;
    },
}