import {ButtonFilter, ButtonSearch, Container, FilterIcon, Input, InputContainer, SearchIcon} from "./styles.ts";
import searchIcon from '../../assets/search-icon.svg';
import filterIcon from '../../assets/filter-icon.svg';

export const SearchInput = () => {
    return (
        <Container>
            <InputContainer>
                <Input type="text" onChange={(e) => console.log(String(e.target.value))} placeholder="Pesquise por filmes" />
                <ButtonSearch>
                    <SearchIcon src={searchIcon} />
                </ButtonSearch>
            </InputContainer>
            <ButtonFilter>
                <FilterIcon src={filterIcon} />
            </ButtonFilter>
        </Container>
    )
}