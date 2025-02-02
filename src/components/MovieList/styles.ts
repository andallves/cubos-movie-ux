import styled, {css} from "styled-components";

export const ContainerMovieList = styled.div`
    ${({ theme }) => css`
        display: flex;
        width: 100%;
        min-width: 37.3rem;
        padding: ${theme.spacings.xsmall};
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1.6rem;
        flex-wrap: wrap;
        
        border-radius: .4rem;
        background: #232225;

        @media (min-width: 48rem) {
            padding: 2.4rem;
        }
    `}

    
`;