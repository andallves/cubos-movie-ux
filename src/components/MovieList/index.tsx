import {ContainerLoading, ContainerMovieList} from "./styles.ts";
import {MoviePoster} from "../MoviePoster";
import {Movie} from "../../types/movie.ts";
import {Pagination as PaginationType} from "../../types/pagination.ts";
import {Pagination} from "../Pagination";
import {Commet} from "react-loading-indicators";

type MovieListProps = {
    movies: Movie[];
    pagination: PaginationType;
    isLoading: boolean;
    handlePagination: (page: number) => void;
}

export const MovieList = ({ movies, pagination, isLoading, handlePagination }: MovieListProps) => {

    const handleMoviesPagined = (page: number) => {
       handlePagination(page)
    };

    const movieRating = (votesAverage: number): number => {
        return  Math.round(votesAverage * 10);
    };

    return (
    <>
        <ContainerMovieList>
            {isLoading ? (
                <ContainerLoading>
                    <Commet  color="#8E4EC6" size="medium" text={"Carregando..."} />

                </ContainerLoading>
            ) : (movies.map((movie: Movie) =>
                <MoviePoster
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    nameGenres={movie.name_genres}
                    imageUrl={movie.poster_path}
                    porcentRating={movieRating(movie.vote_average)}
                />
            ))}
        </ContainerMovieList>
        <Pagination
            currentPage={pagination?.page}
            totalPage={pagination?.total_pages}
            handlePageChange={handleMoviesPagined} />
        </>
    )
}