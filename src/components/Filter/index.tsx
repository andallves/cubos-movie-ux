import {genreService} from "../../services/genreService/genreService.ts";
import {FormEvent, useEffect, useState} from "react";
import {Genre} from "../../types/genre.ts";
import {ButtonFilter, Form, FormContainer, Input, Label, Select} from "./styles.ts";
import {MovieLengthEnum} from "../../enums/movieLength.ts";
import {classificationMovies, languagesMovies, ordenacao} from "../../utils/filter-input-values.ts";
import {QueryParams} from "../../types/queryParams.ts";
import {ClassificationMovies, LanguageMovies, SortBy} from "../../types/filter.ts";

interface FilterProps {
    handleFilter: (query: QueryParams) => void;
}

export const Filter = ({ handleFilter }: FilterProps) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [inputGenre, setInputGenre] = useState<number>(0);
    const [inputCertification, setInputCertification] = useState<string>("")
    const [inputStartYear, setInputStartYear] = useState<number>(1900);
    const [inputEndYear, setInputEndYear] = useState<number>(2025);
    const [inputMinRating, setInputMinRating] = useState<number>(0);
    const [inputLength, setInputLength] = useState<MovieLengthEnum>(0);
    const [inputLanguage, setInputLanguage] = useState<string>("");
    const [inputPopularity, setInputPopularity] = useState<number>();
    const [inputDirector, setInputDirector] = useState<string>("");
    const [inputActor, setInputActor] = useState<string>("");
    const [inputStreaming, setInputStreaming] = useState<string>("");
    const [inputSortBy, setInputSortBy] = useState<SortBy>("popularity.asc");
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

    const languagesOptions: LanguageMovies[] = languagesMovies;
    const classificationOptions: ClassificationMovies[] = classificationMovies;

    return(
        <Form onSubmit={handleSubmit}>
            <FormContainer>
                <Label>
                    Gênero:
                    <Select onSelect={(e) => setInputGenre(Number(e.currentTarget.value))}
                            value={inputGenre}
                            onChange={(e) => setInputGenre(Number(e.currentTarget.value))}>
                        {genres && genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </Select>
                </Label>

                <Label>
                    Classificação Etária:
                    <Select
                        value={inputCertification}
                        onChange={(e) => setInputCertification(e.target.value)}
                    >
                        {classificationOptions.map((co) => <option value={co.value} key={co.value}>{co.name}</option>)}
                    </Select>
                </Label>

                <Label>
                    Ano de Lançamento:
                    <Input
                        type="number"
                        value={inputStartYear}
                        onChange={(e) => setInputStartYear(Number(e.target.value))}
                    />
                    a
                    <Input
                        type="number"
                        value={inputEndYear}
                        onChange={(e) => setInputEndYear(Number(e.target.value))}
                    />
                </Label>

                <Label>
                    Avaliação Mínima:
                    <Input
                        type="number"
                        value={inputMinRating}
                        onChange={(e) => setInputMinRating(Number(e.target.value))}
                    />
                </Label>

                <Label>
                    Duração:
                    <Select value={inputLength} onChange={(e) => setInputLength(Number(e.target.value))}>
                        <option value={MovieLengthEnum.todos}>Todos</option>
                        <option value={MovieLengthEnum.curta}>Curta (menos de 60 minutos)</option>
                        <option value={MovieLengthEnum.media}>Média (60-120 minutos)</option>
                        <option value={MovieLengthEnum.longa}>Longa (mais de 120 minutos)</option>
                    </Select>
                </Label>

                <Label>
                    Idioma:
                    <Select value={inputLanguage} onChange={(e) => setInputLanguage(e.target.value)}>
                        <option value="">Todos</option>
                        {languagesOptions.map((language) => <option value={language.code} key={language.code}>{language.name}</option>)}
                    </Select>
                </Label>

                <Label>
                    Popularidade:
                    <Select
                        value={inputPopularity}
                        onChange={(e) => setInputPopularity(Number(e.target.value))}
                    >
                        <option value="">Todos</option>
                        <option value="80">Alta (80+)</option>
                        <option value="79">Baixa (menos de 80)</option>
                    </Select>
                </Label>

                <Label>
                    Diretor:
                    <Input
                        type="text"
                        value={inputDirector}
                        onChange={(e) => setInputDirector(e.target.value)}
                    />
                </Label>

                <Label>
                    Atores:
                    <Input
                        type="text"
                        value={inputActor}
                        onChange={(e) => setInputActor(e.target.value)}
                    />
                </Label>

                <Label>
                    Plataforma de Streaming:
                    <Select
                        value={inputStreaming}
                        onChange={(e) => setInputStreaming(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="Netflix">Netflix</option>
                        <option value="Amazon Prime">Amazon Prime</option>
                        <option value="Disney+">Disney+</option>
                    </Select>
                </Label>

                <Label>
                    País de Origem:
                    <Select value={inputCountry}
                            onChange={(e) => setInputCountry(e.target.value)}>
                        <option value="">Todos</option>
                        {languagesOptions.map(language => <option value={language.code} key={language.code}>{language.name}</option>)}
                    </Select>
                </Label>

                <Label>
                    Ordenar por:
                    <Select value={inputSortBy} onChange={(e) => setInputSortBy(e.target.value as SortBy)}>
                        {ordenacao.map(order => <option value={order.code} key={order.id}>{order.name}</option>)}
                    </Select>
                </Label>
            </FormContainer>
            <ButtonFilter $active={true} type={'submit'}>Filtrar</ButtonFilter>
        </Form>
    )
}