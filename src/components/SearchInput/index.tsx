import {ButtonFilter, ButtonSearch, Container, FilterIcon, Input, InputContainer, SearchIcon} from "./styles.ts";
import searchIcon from '../../assets/search-icon.svg';
import filterIcon from '../../assets/filter-icon.svg';
import {useState} from "react";
import {Filter} from "../Filter";
import {QueryParams} from "../../types/queryParams.ts";

export interface SearchInputProps {
    handleFilter: (query: QueryParams) => void;
    handleSearch: (query: string) => void;
    isLoading: boolean
}
export const SearchInput = ({ handleFilter, handleSearch, isLoading }: SearchInputProps) => {
    const [filterFieldShow, setFilterFieldShow] = useState(false);

    const handleChangeFieldShow = () => {
        setFilterFieldShow(!filterFieldShow);
    }

    const handleFilterMovie = (query: QueryParams) => {
        handleFilter(query);
    }

    const handleSearchMovie = (query: string) => {
        handleSearch(query)

    }

    return (
        <>
            <Container>
                <InputContainer>
                    <Input type="text" onChange={(e) => handleSearchMovie(e.target.value)} placeholder="Pesquise por filmes" />
                    <ButtonSearch>
                        <SearchIcon src={searchIcon} />
                    </ButtonSearch>
                </InputContainer>
                <ButtonFilter onClick={handleChangeFieldShow} $active={filterFieldShow}>
                    <FilterIcon src={filterIcon} />
                </ButtonFilter>
            </Container>
            {filterFieldShow && <Filter isLoading={isLoading} handleFilter={handleFilterMovie}/>}
        </>
    )
}