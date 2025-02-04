import {ButtonFilter, ButtonSearch, Container, FilterIcon, Input, InputContainer, SearchIcon} from "./styles.ts";
import searchIcon from '../../assets/search-icon.svg';
import filterIcon from '../../assets/filter-icon.svg';
import {useState} from "react";
import {Filter} from "../Filter";
import {IQueryParams} from "../../services/movieFilterService/movieFilterService.ts";

export interface SearchInputProps {
    handleFilter: (query: IQueryParams) => void;
}
export const SearchInput = ({ handleFilter }: SearchInputProps) => {
    const [filterFieldShow, setFilterFieldShow] = useState(true);

    const handleChangeFieldShow = () => {
        setFilterFieldShow(!filterFieldShow);
    }

    const handleFiltert = (query: IQueryParams) => {
        handleFilter(query)
    }
    return (
        <>
            <Container>
                <InputContainer>
                    <Input type="text" onChange={(e) => console.log(String(e.target.value))} placeholder="Pesquise por filmes" />
                    <ButtonSearch>
                        <SearchIcon src={searchIcon} />
                    </ButtonSearch>
                </InputContainer>
                <ButtonFilter onClick={handleChangeFieldShow} $active={filterFieldShow}>
                    <FilterIcon src={filterIcon} />
                </ButtonFilter>
            </Container>
            {filterFieldShow && <Filter handleFilter={handleFiltert}/>}
        </>
    )
}