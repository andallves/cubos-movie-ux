import {useEffect, useState} from "react";
import {Video} from "../../types/video.ts";
import {videoQueryService} from "../../services/videoQueryService/videoQueryService.ts";

type YouTubeVideoProps = {
    id: number;
}
export const YouTubeVideo = ({ id }: YouTubeVideoProps) => {

    const [video, setVideo] = useState<Video>();

    useEffect(() => {
        const fetchVideo = async () => {
            const data = await videoQueryService.getVideoById(id);
            setVideo(data.results[0]);
        }

        fetchVideo()
    })
    return (
        <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}