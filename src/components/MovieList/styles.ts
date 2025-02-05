import styled, {css} from "styled-components";

export const ContainerMovieList = styled.div`
    ${({ theme }) => css`
        display: flex;
        min-width: 32rem;
        padding: ${theme.spacings.xsmall};
        justify-content: center;
        align-items: center;
        align-content: flex-start;
        gap: 1.6rem;
        flex-wrap: wrap;

        border-radius: 4px;
        background: rgba(235, 234, 248, 0.08);

        backdrop-filter: blur(2px);

        @media (min-width: 480px) {
            padding: 2.4rem;
            margin: 1.6rem;
            justify-content: space-between;
        }
    `}
`;

export const ContainerLoading = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    margin: 0 auto;
    
    @media (min-width: 48rem) {
        height: 80vh;
    }
`;