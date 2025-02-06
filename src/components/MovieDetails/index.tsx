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
import {Commet} from "react-loading-indicators";
import {ContainerLoading} from "../MovieList/styles.ts";

const BASE_URL =  'https://image.tmdb.org/t/p';

export const MovieDetails = () => {
    const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
    const [movie, setMovie] = useState<MovieDetailsFormatted | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const profit = (revenue: number, budget: number): number => revenue - budget;

    useEffect(() => {
        setIsLoading(true);
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
                setIsLoading(false);
            }
        };
        fetchMovieDetails()
            .then();
    }, [id]);

    if (isLoading) return (
        <ContainerLoading>
            <Commet  color="#8E4EC6" size="large" text={"Carregando..."} />
        </ContainerLoading>
    );

    if (!movie) return <p>Filme não encontrado.</p>;

    return (
        <>
            <MovieDetailsContainer
                $imageUrl={`${BASE_URL}/w1280${movie.backdrop_path}`}
                role="main"
                aria-labelledby={'movie-title'}
            >
                <MoviePosterContainer
                    src={`${BASE_URL}/w500${movie.poster_path}`}
                    alt={`Poster do filme ${movie.title}`}/>
                <MoviesInfoContainer>
                    <MovieHeaderContainer>
                        <TitleContainer aria-labelledby={'movie-title movie-original-title'}>
                            <Title id={'movie-title'}>{movie.title}</Title>
                            <OriginalTitle id={'movie-original-title'}>Título original: {movie.original_title}</OriginalTitle>
                            <MovieSlogan>{movie.tagline}</MovieSlogan>
                        </TitleContainer>
                        <RatingContainer>
                            <InfoBox aria-label={'Popularidade'}>
                                <InfoTitle id={'popularity-value'}>Popularidade</InfoTitle>
                                <InfoText aria-labelledby={'popularity-value'}>{movie.popularity}</InfoText>
                            </InfoBox>
                            <InfoBox aria-label={'Números de votos'}>
                                <InfoTitle id={'vote-count-value'}>Votos</InfoTitle>
                                <InfoText aria-labelledby={'vote-count-value'}>{movie.vote_count}</InfoText>
                            </InfoBox>
                            <InfoBox isIcon={true} aria-label={'Avaliação'}>
                                <PieRating colour={'yellow'} percentage={movie.vote_porcent} isSmall={true} />
                            </InfoBox>
                        </RatingContainer>
                    </MovieHeaderContainer>
                    <MoviesInfoDivContainer>
                        <MoviesInfoDiv>
                            <OverviewContainer role={'region'} aria-labelledby={'overview-title'}>
                                <OverviewText id={'overview-title'}>sinopse</OverviewText>
                                <Overview>{movie.overview}</Overview>
                            </OverviewContainer>
                            <GenreContainer role={'region'} aria-labelledby={'genro-title'}>
                                <GenreTitle id={'genre-title'}>Gêneros</GenreTitle>
                                <GenreTagContainer role={'list'}>
                                {movie.genres.map(genre => (
                                    <GenreTag key={genre.id} role={'listitem'}>
                                        <GenreText key={genre.id}>{genre.name}</GenreText>
                                    </GenreTag>
                                ))}
                                </GenreTagContainer>
                            </GenreContainer>
                        </MoviesInfoDiv>
                        <MoviesInfoDiv>
                            <InfoContainer>
                                <InfoBox aria-label="Data de lançamento">
                                    <InfoTitle id={'release-date-value'}>Lançamento</InfoTitle>
                                    <InfoText aria-describedby={'release-date-value'}>{movie.release_date}</InfoText>
                                </InfoBox>
                                <InfoBox aria-label="Duração do filme">
                                    <InfoTitle id={'runtime-value'}>Duração</InfoTitle>
                                    <InfoText aria-describedby={'runtime-value'}>{movie.runtime}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoBox aria-label="Situação do filme">
                                    <InfoTitle id={'status-value'}>Situação</InfoTitle>
                                    <InfoText aria-describedby={'status-value'}>{movie.status}</InfoText>
                                </InfoBox>
                                <InfoBox aria-label="Idioma original">
                                    <InfoTitle id={'language-value'}>Idioma</InfoTitle>
                                    <InfoText aria-describedby={'language-value'}>{movie.original_language}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoBox aria-label={'Orçamento do filme'}>
                                    <InfoTitle>Orçamento</InfoTitle>
                                    <InfoText aria-describedby={''}>{movie.budget}</InfoText>
                                </InfoBox>
                                <InfoBox aria-label={"Receita do filme"}>
                                    <InfoTitle id={'revenue-value'}>Receita</InfoTitle>
                                    <InfoText aria-describedby={'revenue-value'}>{movie.revenue}</InfoText>
                                </InfoBox>
                                <InfoBox aria-label={"Lucro do filme"}>
                                    <InfoTitle id={'profit-value'}>Lucro</InfoTitle>
                                    <InfoText aria-describedby={'profit-value'}>{movie.profit}</InfoText>
                                </InfoBox>
                            </InfoContainer>
                        </MoviesInfoDiv>
                    </MoviesInfoDivContainer>
                </MoviesInfoContainer>
            </MovieDetailsContainer>
            <VideoContainer role="section" aria-labelledby="trailer-title">
                <h2 id="trailer-title">Trailer</h2>
                <YouTubeVideo id={movie.id} />
            </VideoContainer>
        </>
    );
}