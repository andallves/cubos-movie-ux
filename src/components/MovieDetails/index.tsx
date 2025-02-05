import {useParams} from "react-router-dom";
import {MovieDetails as MovieDetailsType} from "../../types/movie.ts";
import {useEffect, useState} from "react";
import {movieQueryService} from "../../services/movieQueryService/movieQueryService.ts";
import {
    GenreContainer, GenreTag, GenreTagContainer, GenreText, GenreTitle, InfoBox, InfoContainer, InfoText, InfoTitle,
    MovieDetailsContainer, MovieHeaderContainer,
    MoviePosterContainer,
    MoviesInfoContainer, MoviesInfoDiv, MoviesInfoDivContainer, MovieSlogan,
    OriginalTitle, Overview, OverviewContainer, OverviewText, RatingBox, RatingContainer, RatingNumbers, RatingText,
    Title,
    TitleContainer, VideoContainer
} from "./styles.ts";
import {PieRating} from "../PieRating";
import {languagesMovies} from "../../utils/filter-input-values.ts";
import {YouTubeVideo} from "../Video";


export const MovieDetails = () => {
    const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
    const [movie, setMovie] = useState<MovieDetailsType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchMovieDetails = async () => {
            try {
                if (!id) return;
                const response = await movieQueryService.getMovieDetails(id);
                setMovie(response);
            } catch (error) {
                console.error("Erro ao buscar detalhes do filme:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (!movie) return <p>Filme não encontrado.</p>;

    const profit = movie.revenue - movie.budget;

    const formatarData = (data: string): string => {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    function formatarTempo(minutos: number): string {
        // Calcula as horas e os minutos restantes
        const horas = Math.floor(minutos / 60);
        const minutosRestantes = minutos % 60;

        // Formata a string com horas e minutos
        if (horas > 0) {
            return `${horas}h ${minutosRestantes.toString().padStart(2, '0')}m`;
        } else {
            return `${minutosRestantes}m`;
        }
    }

    const getCountryName = (code: string) => {
        const languageMovie = languagesMovies.find((language) => language.code === code);
        return languageMovie?.name;
    }

    function formatarNumero(numero: number): string {
        if (numero >= 1e6) {
            // Converte para milhões (M)
            return `${(numero / 1e6).toFixed(2)}M`;
        } else if (numero >= 1e3) {
            // Converte para milhares (K)
            return `${(numero / 1e3).toFixed(2)}K`;
        } else {
            // Mantém o número original
            return numero.toString();
        }
    }

    function traduzirStatus(status: string): string {
        const statusTraduzidos: Record<string, string> = {
            "Released": "Lançado",
            "Post Production": "Pós-produção",
            "In Production": "Em produção",
            "Planned": "Planejado",
            "Rumored": "Rumor",
            "Canceled": "Cancelado",
        };

        // Retorna a tradução ou o status original se não for encontrado
        return statusTraduzidos[status] || status;
    }

    const movieRating = (votesAverage: number): number => {
        return  Math.round(votesAverage * 10);
    };

    const BASE_URL =  'https://image.tmdb.org/t/p';

    return (
        <>
            <MovieDetailsContainer $imageUrl={`${BASE_URL}/w1280${movie.backdrop_path}`} className="movie-detail">
                <MoviePosterContainer src={`${BASE_URL}/w500${movie.poster_path}`} alt={movie.title}/>
                <MoviesInfoContainer>
                    <MovieHeaderContainer>
                        <TitleContainer>
                            <Title>{movie.title}</Title>
                            <OriginalTitle>Título original: {movie.original_title}</OriginalTitle>
                            <MovieSlogan>{movie.tagline}</MovieSlogan>
                        </TitleContainer>
                        <RatingContainer>
                            <RatingBox>
                                <RatingText>Popularidade</RatingText>
                                <RatingNumbers>{movie.popularity}</RatingNumbers>
                            </RatingBox>
                            <RatingBox>
                                <RatingText>Votos</RatingText>
                                <RatingNumbers>{movie.vote_count}</RatingNumbers>
                            </RatingBox>
                            <PieRating colour={'yellow'} percentage={movieRating(movie.vote_average)} isSmall={true} />
                        </RatingContainer>
                    </MovieHeaderContainer>
                    <MoviesInfoDivContainer>
                        <MoviesInfoDiv>
                            <OverviewContainer>
                                <OverviewText>sinopse</OverviewText>
                                <Overview>{movie.overview}</Overview>
                            </OverviewContainer>
                            <GenreContainer>
                                <GenreTitle>Gêneros</GenreTitle>
                                <GenreTagContainer>
                                {movie.genres.map(genre => (
                                    <GenreTag key={genre.id}>
                                        <GenreText key={genre.id}>{genre.name}</GenreText>
                                    </GenreTag>
                                ))}
                                </GenreTagContainer>
                            </GenreContainer>
                        </MoviesInfoDiv>
                        <MoviesInfoDiv>
                            <InfoContainer>
                                <InfoBox>
                                    <InfoTitle>Lançamento</InfoTitle>
                                    <InfoText>{formatarData(movie.release_date)}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Duração</InfoTitle>
                                    <InfoText>{formatarTempo(movie.runtime)}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoBox>
                                    <InfoTitle>Situação</InfoTitle>
                                    <InfoText>{traduzirStatus(movie.status)}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Idioma</InfoTitle>
                                    <InfoText>{getCountryName(movie.original_language)}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoBox>
                                    <InfoTitle>Orçamento</InfoTitle>
                                    <InfoText>${formatarNumero(movie.budget)}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Receita</InfoTitle>
                                    <InfoText>${formatarNumero(movie.revenue)}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Lucro</InfoTitle>
                                    <InfoText>${formatarNumero(profit)}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                        </MoviesInfoDiv>
                    </MoviesInfoDivContainer>
                </MoviesInfoContainer>
            </MovieDetailsContainer>
            <VideoContainer>
                <YouTubeVideo id={movie.id} />
            </VideoContainer>
        </>
    );
}