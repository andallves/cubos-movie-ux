import {Movie} from "../types/movie.ts";
import {Genre} from "../types/genre.ts";

export const mapMovieWithGenre = (movies: Movie[], genres: Genre[]): Movie[] => {
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
