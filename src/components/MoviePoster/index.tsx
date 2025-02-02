import {ContainerPoster, ContainerTitle, PosterGender, PosterTitle} from "./styles.ts";
import {useState} from "react";
import {PieRating} from "../PieRating";

type MoviePosterProps = {
    title: string;
    nameGenres: Array<string>;
    imageUrl: string;
}

const BASE_URL =  'https://image.tmdb.org/t/p/w500/';

export const MoviePoster = ({ title, nameGenres, imageUrl }: MoviePosterProps) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    return (
        <ContainerPoster
            imageUrl={`${BASE_URL}${imageUrl}`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            {showDetails && (
                <PieRating colour={'#FFE000'} percentage={10}></PieRating>
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