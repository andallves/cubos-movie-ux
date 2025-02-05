import {VideoResponse} from "../../types/video.ts";

export interface IVideoQueryService {
    getVideoById(videoId: number): Promise<VideoResponse>;
}