import {genreService} from "../../services/genreService/genreService.ts";
import {FormEvent, useEffect, useState} from "react";
import {Genre} from "../../types/genre.ts";
import {ButtonFilter, Form, FormContainer} from "./styles.ts";
import {MovieLengthEnum} from "../../enums/movieLength.ts";
import {
    classificationMovies,
    languagesMovies,
    orderingMovies,
    popularityMovies, ratingMovies,
    streamingMovies
} from "../../utils/filter-input-values.ts";
import {QueryParams} from "../../types/queryParams.ts";
import {SortBy} from "../../types/filter.ts";
import {YearRangeSelector} from "./components/YearRangeSelector";
import {GenreSelector} from "./components/GenreSelector";
import {ClassificationSelector} from "./components/ClassificationSelector";
import {RatingSelector} from "./components/RatingSelector";
import {LengthSelector} from "./components/LengthSelector";
import {PopularitySelector} from "./components/PopularitySelector";
import {LanguageSelector} from "./components/LanguageSelector";
import {SortBySelector} from "./components/SortBySelector";
import {CountrySelector} from "./components/CountrySelector";
import {StreamingSelector} from "./components/StreamingSelector";
import {MemberMovieInput} from "./components/MemberMovieInput";

interface FilterProps {
    handleFilter: (query: QueryParams) => void;
}

export const Filter = ({ handleFilter }: FilterProps) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [inputGenre, setInputGenre] = useState<string>("");
    const [inputCertification, setInputCertification] = useState<string>("")
    const [inputStartYear, setInputStartYear] = useState<string>("");
    const [inputEndYear, setInputEndYear] = useState<string>("");
    const [inputMinRating, setInputMinRating] = useState<string>("");
    const [inputLength, setInputLength] = useState<MovieLengthEnum>(MovieLengthEnum.todos);
    const [inputLanguage, setInputLanguage] = useState<string>("");
    const [inputPopularity, setInputPopularity] = useState<string>("");
    const [inputDirector, setInputDirector] = useState<string>("");
    const [inputActor, setInputActor] = useState<string>("");
    const [inputStreaming, setInputStreaming] = useState<string>("");
    const [inputSortBy, setInputSortBy] = useState<SortBy>("popularity.desc");
    const [inputCountry, setInputCountry] = useState<string>("");

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await genreService.getGenres();
            setGenres(data.genres)
        }
        fetchGenres().then();
    }, []);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const query: QueryParams = {
            genre: inputGenre,
            certification: inputCertification,
            startYear: inputStartYear,
            endYear: inputEndYear,
            minRating: inputMinRating,
            length: inputLength,
            originalLanguage: inputLanguage,
            popularity: inputPopularity,
            director: inputDirector,
            actor: inputActor,
            streaming: inputStreaming,
            country: inputCountry,
            sortBy: inputSortBy
        }
        handleFilter(query);
    };

    const handleYearSelectedInput = (startYear: string, endYear: string) => {
        setInputStartYear(startYear);
        setInputEndYear(endYear);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormContainer>
                <GenreSelector
                    label={'Gênero'}
                    defaultValue={inputGenre}
                    options={genres} handleSelectChange={setInputGenre} />

                <ClassificationSelector
                    label={'Classificação Etária'}
                    defaultValue={inputCertification}
                    options={classificationMovies} handleSelectChange={setInputCertification} />

                <YearRangeSelector
                    label={'Ano de Lançamento:'}
                    handleSelectedChange={handleYearSelectedInput} />

                <RatingSelector
                    label={'Avaliação Mínima'}
                    defaultValue={inputMinRating}
                    options={ratingMovies} handleSelectedChange={setInputMinRating} />

                <LengthSelector
                    label={'Duração: '}
                    defaultValue={inputLength}
                    handleSelectedChange={setInputLength} />

                <LanguageSelector
                    label={'Idioma: '}
                    defaultValue={inputLanguage}
                    options={languagesMovies} handleSelectedChange={setInputLanguage} />

                <PopularitySelector
                    label={'Popularidade: '}
                    defaultValue={inputPopularity}
                    options={popularityMovies} handleSelectedChange={setInputPopularity} />

                <MemberMovieInput
                    label={'Diretor'}
                    defaultValue={inputDirector} handleSelectedChange={setInputDirector} />

                <MemberMovieInput
                    label={'Atores'}
                    defaultValue={inputActor} handleSelectedChange={setInputActor} />

                <StreamingSelector
                    label={'Plataforma de Streaming'}
                    defaultValue={inputStreaming}
                    options={streamingMovies} handleSelectedChange={setInputStreaming} />

                <CountrySelector
                    label={'País de Origem'}
                    defaultValue={inputCountry}
                    options={languagesMovies} handleSelectedChange={setInputCountry} />

                <SortBySelector
                    label={'Ordenar por:'}
                    defaultValue={inputSortBy}
                    options={orderingMovies} handleSelectedChange={setInputSortBy} />
            </FormContainer>
            <ButtonFilter $active={true} type={'submit'}>Aplicar Filtro</ButtonFilter>
        </Form>
    )
}