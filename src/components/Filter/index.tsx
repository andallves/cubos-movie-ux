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
import {LengthSelector} from "./components/LengthSelector";
import {Selector} from "./components/Selector";
import {MemberMovieInput} from "./components/MemberMovieInput";
import {Commet} from "react-loading-indicators";
import {SortBySelector} from "./components/SortBySelector";

interface FilterProps {
    handleFilter: (query: QueryParams) => void;
    isLoading: boolean
}

export const Filter = ({ handleFilter, isLoading }: FilterProps) => {
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
                <Selector
                    label={'Gênero'}
                    defaultValue={inputGenre}
                    options={genres}
                    placeholder={'Selecione o gênero'}
                    handleSelectedChange={setInputGenre} />

                <Selector
                    label={'Classificação Etária'}
                    defaultValue={inputCertification}
                    options={classificationMovies}
                    placeholder={'Selecione uma classificação'}
                    handleSelectedChange={setInputCertification} />

                <YearRangeSelector
                    label={'Ano de Lançamento:'}
                    handleSelectedChange={handleYearSelectedInput} />

                <Selector
                    label={'Avaliação Mínima'}
                    defaultValue={inputMinRating}
                    options={ratingMovies}
                    placeholder={'Selecione a avaliação'}
                    handleSelectedChange={setInputMinRating} />

                <LengthSelector
                    label={'Duração: '}
                    defaultValue={inputLength}
                    handleSelectedChange={setInputLength} />

                <Selector
                    label={'Idioma: '}
                    defaultValue={inputLanguage}
                    options={languagesMovies}
                    placeholder={'Todos'}
                    handleSelectedChange={setInputLanguage} />

                <Selector
                    label={'Popularidade: '}
                    defaultValue={inputPopularity}
                    options={popularityMovies}
                    placeholder={'Todos'}
                    handleSelectedChange={setInputPopularity} />

                <MemberMovieInput
                    label={'Diretor'}
                    defaultValue={inputDirector}
                    handleSelectedChange={setInputDirector}
                    placeholder={'Informe um diretor'}
                />

                <MemberMovieInput
                    label={'Atores'}
                    defaultValue={inputActor}
                    handleSelectedChange={setInputActor}
                    placeholder={'Informe um ator'}
                />

                <Selector
                    label={'Plataforma de Streaming'}
                    defaultValue={inputStreaming}
                    options={streamingMovies}
                    placeholder={'Todos'}
                    handleSelectedChange={setInputStreaming} />

                <Selector
                    label={'País de Origem'}
                    defaultValue={inputCountry}
                    options={languagesMovies}
                    placeholder={'Todos'}
                    handleSelectedChange={setInputCountry} />

                <SortBySelector
                    label={'Ordenar por'}
                    defaultValue={inputSortBy}
                    options={orderingMovies} 
                    handleSelectedChange={setInputSortBy} />
            </FormContainer>

            <ButtonFilter
                $isLoading={true}
                disabled={isLoading}
                type={'submit'}
            >
                {isLoading ? (
                    <Commet  color="rgba(183, 68, 247, 0.08)" />
                ) : (
                    <p>Aplicar Filtro</p>
                )}
            </ButtonFilter>
        </Form>
    )
}