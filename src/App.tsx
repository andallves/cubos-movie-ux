import {SearchInput} from "./components/SearchInput";
import {MovieList} from "./components/MovieList";
import {useEffect, useState} from "react";
import {Movie} from "./types/movie.ts";
import {Genre} from "./types/genre.ts";
import {movieService} from "./services/movieQueryService/movieService.ts";
import {genreService} from "./services/genreService/genreService.ts";
import {mapMovieWithGenre} from "./utils/mapMovieWithGenre.ts";
import {movieFilterService} from "./services/movieFilterService/movieFilterService.ts";
import {Pagination} from "./types/pagination.ts";
import {QueryParams} from "./types/queryParams.ts";

function App() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [pagination, setPagination] = useState<Pagination>({ page: 1, total_pages: 100 });
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const movies = await movieService.getMovies(pagination.page);
            setMovies(movies.results);

            const genres = await genreService.getGenres();
            setGenres(genres.genres)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData().then();
    }, [pagination.page]);

    const handleFiltedSearch = async (query: QueryParams) => {
        setIsLoading(true)
        try {
            const movies = await movieFilterService.searchMoviesFiltered(query, 1)
            setMovies(movies.results);
            setPagination({ total_pages: movies.total_pages, page: movies.page });
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false);
        }

    }

    const handlePagination = (page: number) => {
        setPagination((prevState) => { return { ...prevState, page }});
    }

    const moviesWithGenres = mapMovieWithGenre(movies, genres);

  return (
      <>
        <SearchInput
            isLoading={isLoading}
            handleFilter={handleFiltedSearch} />
        <MovieList
            movies={moviesWithGenres}
            pagination={pagination}
            handlePagination={handlePagination}
            isLoading={isLoading} />
        </>
  )
}

export default App
