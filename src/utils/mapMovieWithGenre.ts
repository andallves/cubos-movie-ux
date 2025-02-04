import {IMovie} from "../types/movie.ts";
import {IGenre} from "../types/genre.ts";

export const mapMovieWithGenre = (movies:IMovie[], genres: IGenre[]): IMovie[] => {
    return movies.map(movie => {
        const genresOfMovie = movie.genre_ids.map(id => {
            const genre = genres.find(g => g.id === id);
            return genre ? genre.name : null;
        }).filter(name => name !== null);

        return {
            ...movie,
            name_genres: genresOfMovie
        };
    });
}
