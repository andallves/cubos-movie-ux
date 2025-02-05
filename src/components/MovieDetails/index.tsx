import {useParams} from "react-router-dom";
import {MovieDetailsFormatted} from "../../types/movie.ts";
import {useEffect, useState} from "react";
import {movieQueryService} from "../../services/movieQueryService/movieQueryService.ts";
import {
    GenreContainer, GenreTag, GenreTagContainer, GenreText, GenreTitle, InfoBox, InfoContainer, InfoText, InfoTitle,
    MovieDetailsContainer, MovieHeaderContainer,
    MoviePosterContainer,
    MoviesInfoContainer, MoviesInfoDiv, MoviesInfoDivContainer, MovieSlogan,
    OriginalTitle, Overview, OverviewContainer, OverviewText, RatingContainer,
    Title,
    TitleContainer, VideoContainer
} from "./styles.ts";
import {PieRating} from "../PieRating";
import {YouTubeVideo} from "../Video";
import {movieCustomDataService} from "../../services/movieCustomDataService/movieCustomDataService.ts";

const BASE_URL =  'https://image.tmdb.org/t/p';

export const MovieDetails = () => {
    const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
    const [movie, setMovie] = useState<MovieDetailsFormatted | null>(null);
    const [loading, setLoading] = useState(true);

    const profit = (revenue: number, budget: number): number => revenue - budget;

    useEffect(() => {
        setLoading(true);
        const fetchMovieDetails = async () => {
            try {
                if (!id) return;
                const response = await movieQueryService.getMovieDetails(id);

                if (!response) return;
                const movieData: MovieDetailsFormatted = {
                    ...response,
                    vote_porcent: movieCustomDataService.formatPorcentageMovieRating(response.vote_average),
                    release_date: movieCustomDataService.formatData(response.release_date),
                    runtime: movieCustomDataService.formatTime(response.runtime),
                    original_language: movieCustomDataService.formatCountryCodeToName(response.original_language),
                    status: movieCustomDataService.formatStatusToPortugues(response.status),
                    budget: movieCustomDataService.formatNumber(response.budget),
                    revenue: movieCustomDataService.formatNumber(response.revenue),
                    profit: movieCustomDataService.formatNumber(profit(response.revenue, response.budget))};

                setMovie(movieData);
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
                            <InfoBox>
                                <InfoTitle>Popularidade</InfoTitle>
                                <InfoText>{movie.popularity}</InfoText>
                            </InfoBox>
                            <InfoBox>
                                <InfoTitle>Votos</InfoTitle>
                                <InfoText>{movie.vote_count}</InfoText>
                            </InfoBox>
                            <PieRating colour={'yellow'} percentage={movie.vote_porcent} isSmall={true} />
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
                                    <InfoText>{movie.release_date}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Duração</InfoTitle>
                                    <InfoText>{movie.runtime}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoBox>
                                    <InfoTitle>Situação</InfoTitle>
                                    <InfoText>{movie.status}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Idioma</InfoTitle>
                                    <InfoText>{movie.original_language}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoBox>
                                    <InfoTitle>Orçamento</InfoTitle>
                                    <InfoText>{movie.budget}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Receita</InfoTitle>
                                    <InfoText>{movie.revenue}</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoTitle>Lucro</InfoTitle>
                                    <InfoText>{movie.profit}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                        </MoviesInfoDiv>
                    </MoviesInfoDivContainer>
                </MoviesInfoContainer>
            </MovieDetailsContainer>
            <VideoContainer>

                <h2>Trailer</h2>
                <YouTubeVideo id={movie.id} />
            </VideoContainer>
        </>
    );
}