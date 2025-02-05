import styled from "styled-components";

export const MovieDetailsContainer = styled.div<{ $imageUrl: string }>`
    position: relative;
    padding: 1.6rem;
    margin: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    
    @media (min-width: 967px) {
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
            background: linear-gradient(90deg, #121113 0%, rgba(18, 17, 19, 0.80) 50%, rgba(18, 17, 19, 0.00) 100%);
        }
    }
`;

export const MoviePosterContainer = styled.img`
    width: 100%;
    margin: 0 auto;
    max-width: 45.4rem;
    height: 100%;
    z-index: 20;
    
    @media(min-width: 96.7rem) {
        max-width: 35.4rem;
    }
`;

export const MoviesInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    z-index: 20;
`;

export const MovieHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    
    @media (min-width: 1324px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const MoviesInfoDivContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;
    
    @media (min-width: 1324px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const MoviesInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
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
    gap: 1.6rem;
    align-items: center;
`

export const OverviewContainer = styled.div`
    display: flex;
    padding: 16px;
    width: 100%;
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
    color: #EEEEF0;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
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
    gap: 4px;

    border-radius: 2px;
    background: rgba(193, 80, 255, 0.18);
    backdrop-filter: blur(2px);
    transition: all .4s ease;
    
    @media (min-width: 467px) {
        gap: .8rem;
    }
`;

export const GenreText = styled.p`
    color: #ECD9FA;
    font-family:  ${({ theme }) => theme.fonts.family.default};
    font-size: .8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    transition: all .4s ease;

    @media (min-width: 467px) {
        font-size: 1.2rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 1.6rem;
`;

export const InfoBox = styled.div<{ isIcon?: boolean }>`
    display: flex;
    width: 100%;
    padding: ${({ isIcon }) => isIcon ? 0 : '1.6rem'};
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 4px;
    background: ${({ isIcon }) => isIcon ? 'transparent' : 'rgba(35, 34, 37, 0.75)'};
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
    font-weight: 700;
    line-height: normal;
`;

export const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
    gap: 1.6rem;
    
    @media (min-width: 76.8rem) {
        gap: 2.4rem;
        padding: 5rem;
    }
`;