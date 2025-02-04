import styled, {css} from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        padding: ${theme.spacings.xsmall};
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-self: stretch;
  `}
`;

export const InputContainer = styled.div`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        max-width: 48.8rem;
        padding: ${theme.spacings.xsmall};
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;

        border-radius: 4px;
        border: 1px solid #49474E;
        background: ${theme.colors.gray50};
  `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        display: flex;
        max-width: 48.8rem;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        outline: none;
        border: none;
        background: ${theme.colors.gray60};

        color: ${theme.colors.gray30};
        text-align: start;
        font-family: ${theme.fonts.family.secondary};;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
  `}
`;

export const ButtonSearch = styled.button`  
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
`;

export const SearchIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;

interface ButtonFilterProps {
    $active?: boolean;
}

export const ButtonFilter = styled.button<ButtonFilterProps>`
    display: flex;
    width: 5.5rem;
    min-height: 4.4rem;
    padding: 1.2rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    align-self: stretch;

    border-radius: .2rem;
    background: ${({ $active }) => ($active ? '#8E4EC6' : 'rgba(183, 68, 247, 0.08)')};
    backdrop-filter: blur(.2rem);
    cursor: pointer;
`;

export const FilterIcon = styled.img`  
    width: 1.8rem;
    height: 1.6rem;
`;