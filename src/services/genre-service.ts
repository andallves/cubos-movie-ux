import {GenreResponse} from "../types/genre.ts";
import {api} from "../utils/api.ts";

export const genreService = {

    async getGenres(): Promise<GenreResponse> {
        const response = await api.get<GenreResponse>("/genre/movie/list");
        console.log(response);
        return response.data;
    },
}