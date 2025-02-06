import styled, {css} from "styled-components";

interface ImageContainerProps {
    $imageUrl: string;
}

export const ContainerPoster = styled.div<ImageContainerProps>`
    position: relative;
    display: flex;
    width: 40vw;
    min-width: 14rem;
    max-width: 25rem;
    height: 65vw;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: .4rem;

    background: url(${({ $imageUrl }) => ($imageUrl)}) lightgray 0 0 / 100% 100% no-repeat;
    box-shadow: 0 .1rem .5rem 0 rgba(0, 0, 0, 0.20);
    
    &:hover {
        justify-content: space-between;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(204, 204, 204, 0.00) 0%, rgba(0, 0, 0, 0.63) 50%, #000 100%);
    }

    @media (min-width: 678px) {
        width: 20vw;
        height: 35vw;
    }
    
    @media (min-width: 1024px) {
        width: 16vw;
        height: 25vw;
        color: rgba(0,0,0, 0.50)
    }

    @media (min-width: 1800px) {
        width: 30vw;
        height: 20vw;
        color: rgba(0,0,0, 0.50)
    }

    @media (min-width: 2300px) {
        width: 40vw;
        height: 16vw;
        color: rgba(0,0,0, 0.50)
    }
`;

export const RatingContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 0 auto;
    z-index: 20;

    @media (min-width: 598px) {
        margin: 2rem auto 0 auto;
    }

    @media (min-width: 678px) {
        margin: 5rem auto 0 auto;
    }
`;

export const ContainerTitle = styled.div`
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 1.6rem 1.6rem 1.6rem;
    gap: .8rem;
    transition: all 5s ease-in-out;
`;

export const PosterTitle = styled.h2`
    ${({ theme }) => css`
        align-self: flex-start;
        color: ${theme.colors.gray10};
        font-family: ${theme.fonts.family.default};
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        z-index: 1;
    `};
`;

export const PosterGender = styled.span`
    ${({ theme }) => css`
        text-align: start;
        color: ${theme.colors.gray20};
        font-family: ${theme.fonts.family.default};
        font-size: 1.28rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `};
`;