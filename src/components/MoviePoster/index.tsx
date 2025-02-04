import {ContainerPoster, ContainerTitle, PosterGender, PosterTitle, RatingContainer} from "./styles.ts";
import {useState} from "react";
import {PieRating} from "../PieRating";
import {useNavigate} from "react-router-dom";

type MoviePosterProps = {
    id: number;
    title: string;
    nameGenres: Array<string>;
    imageUrl: string;
    porcentRating: number;
}

const BASE_URL =  'https://image.tmdb.org/t/p/w500';

export const MoviePoster = ({ id, title, nameGenres, imageUrl, porcentRating }: MoviePosterProps) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const navigate = useNavigate();


    return (
        <ContainerPoster
            $imageUrl={`${BASE_URL}${imageUrl}`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            onClick={() => navigate(`/movie/${id}`)}
        >
            {showDetails && (
                <RatingContainer>
                    <PieRating colour={'#FFE000'} percentage={porcentRating}></PieRating>
                </RatingContainer>
            )}

            <ContainerTitle>
                <PosterTitle>{ title }</PosterTitle>
                <PosterGender>
                    {showDetails && nameGenres.map((nameGenre: string) => `${nameGenre}, `)}
                </PosterGender>
            </ContainerTitle>
        </ContainerPoster>
    )
}