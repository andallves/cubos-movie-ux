import {useEffect, useState} from 'react'
import {Navbar} from './templates/layout/Navbar';
import {Movie, tmdbService} from "./shared/services/movies-service.ts";
import {BackgroundContainer, Content} from "./App.ts";
import {SearchInput} from "./components/SearchInput";

function App() {
  
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await tmdbService.getPopularMovies();
        setMovies(data.results)
        console.log(data)
      }catch (err) {
        console.log(err);
      }
    };
    
    fetchMovies().then();
  }, []);

  return (
    <BackgroundContainer>
      <Content>
        <Navbar />
        <SearchInput />
        <ul>
          {movies && movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </Content>
    </BackgroundContainer>
  )
}

export default App
