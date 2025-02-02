import {ContainerMovieList} from "./styles.ts";
import {MoviePoster} from "../MoviePoster";
import {Movie} from "../../types/movie.ts";

type MovieListProps = {
    movies?: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
    return (
        <ContainerMovieList>
            {movies?.map((movie: Movie) => (
                <MoviePoster
                    key={movie.id}
                    title={movie.title}
                    nameGenres={movie.name_genres}
                    imageUrl={movie.poster_path}/>
            ))}
        </ContainerMovieList>
    )
}