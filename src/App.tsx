import {useEffect, useState} from 'react'
import {Navbar} from './templates/layout/Navbar';
import {movieService} from "./services/movies-service.ts";
import {BackgroundContainer, Content} from "./App.ts";
import {SearchInput} from "./components/SearchInput";
import {MovieList} from "./components/MovieList";
import {Movie} from "./types/movie.ts";
import {Genre} from "./types/genre.ts";
import {genreService} from "./services/genre-service.ts";
import {mapMovieWithGenre} from "./utils/mapMovieWithGenre.ts";

const FILMES_POR_PAGINA = 10;

function App() {
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [moviesWithGenres, setMoviesWithGenres] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula o índice inicial e final dos filmes da página atual
  const indexInitial = (currentPage - 1) * FILMES_POR_PAGINA;
  const indexFinal = indexInitial + FILMES_POR_PAGINA;
  const pageMovies = moviesWithGenres.slice(indexInitial, indexFinal);

  // Calcula o número total de páginas
  const pageTotal = Math.ceil(movies.length / FILMES_POR_PAGINA);

  // Função para mudar de página
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieService.getPopularMovies();
        setMovies(data.results)
        console.log(data)
      }catch (err) {
        console.log(err);
      }
    };

    const fetchGenres = async () => {
      try {
        const data = await genreService.getGenres();
        setGenres(data.genres);
      } catch (err) {
        console.log(err)
      }
    }

    fetchMovies().then();
    fetchGenres().then();
  }, []);

  useEffect(() => {
    setMoviesWithGenres(() => mapMovieWithGenre(movies, genres));
  }, [movies, genres]);


  return (
    <BackgroundContainer>
      <Content>
        <Navbar />
        <SearchInput />
        <MovieList movies={pageMovies} />
        {/* Controles de paginação */}
        <div>
          <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
          >
            Anterior
          </button>

          {/* Exibe os números das páginas */}
          {Array.from({ length: pageTotal }, (_, index) => (
              <button
                  key={index + 1}
                  onClick={() => changePage(index + 1)}
                  style={{
                    fontWeight: currentPage === index + 1 ? "bold" : "normal",
                  }}
              >
                {index + 1}
              </button>
          ))}

          <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === pageTotal}
          >
            Próxima
          </button>
        </div>
      </Content>
    </BackgroundContainer>
  )
}

export default App
