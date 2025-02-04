import styled from "styled-components";

export const MovieDetailsContainer = styled.div<{ $imageUrl: string }>`
    position: relative;
    padding: 1.6rem;
    margin: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 2.4rem;
        margin:2.4rem;
        background: url(${({ $imageUrl }) => ($imageUrl)}) lightgray 0 0 / 100% 100% no-repeat;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(204, 204, 204, 0.00) 0%, rgba(0, 0, 0, 0.73) 30%, #000 100%);
        }
    }
`;

export const MoviePosterContainer = styled.img`
    width: 100%;
    max-width: 35.4rem;
    height: 100%;
    z-index: 20;
`;

export const MoviesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    z-index: 20;
`;

export const MovieHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    
    @media (min-width: 1124px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const MoviesInfoDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    
    @media (min-width: 1124px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const MoviesInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    height: 98px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;

export const Title = styled.h2`
    color: #EEEEF0;

    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const OriginalTitle = styled.h3`
    color: #B5B2BC;

    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const MovieSlogan = styled.span`
    margin-top: 1.6rem;
    color: #EEEEF0;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const RatingBox = styled.div`
    display: flex;
    height: 70px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    border-radius: 4px;
    background: rgba(35, 34, 37, 0.75);

    backdrop-filter: blur(2px);
`;

export const RatingText = styled.span`
    color: #B5B2BC;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`;
export const RatingNumbers = styled.span`
    align-self: stretch;
    
    color: #FFF;
    font-family:  ${({ theme }) => theme.fonts.family.default};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 14px */
    text-transform: uppercase;
`;

export const OverviewContainer = styled.div`
    display: flex;
    padding: 16px;
    max-width: 44rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    border-radius: 4px;
    background: rgba(35, 34, 37, 0.60);
    backdrop-filter: blur(2px);
`;

export const OverviewText = styled.span`
    color: #B5B2BC;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`;

export const Overview = styled.p`
    align-self: stretch;
    color: #EEEEF0;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const GenreContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    border-radius: 4px;
    background: rgba(35, 34, 37, 0.60);
`;

export const GenreTitle = styled.span`
    color: #B5B2BC;
    font-family:  ${({ theme }) => theme.fonts.family.default};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const GenreTagContainer = styled.div`
    display: flex;
    gap: 1.6rem;
`;

export const GenreTag = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;

    border-radius: 2px;
    background: rgba(193, 80, 255, 0.18);
    backdrop-filter: blur(2px);
`;

export const GenreText = styled.p`
    color: #ECD9FA;
    font-family:  ${({ theme }) => theme.fonts.family.default};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1.6rem;
`;

export const InfoBox = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 4px;
    background: rgba(35, 34, 37, 0.75);
    backdrop-filter: blur(2px);
`;

export const InfoTitle = styled.span`
    color: #B5B2BC;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`;

export const InfoText = styled.p`
    align-items: stretch;
    color: #EEEEF0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;