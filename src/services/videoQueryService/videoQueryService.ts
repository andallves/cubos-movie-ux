import {IVideoQueryService} from "./IVideoQueryService.ts";
import {api} from "../../utils/api.ts";
import {VideoResponse} from "../../types/video.ts";

export const videoQueryService: IVideoQueryService = {
    async getVideoById(videoId: number): Promise<VideoResponse> {
        const response = await api.get<VideoResponse>(`/movie/${videoId}/videos`);
        return response.data;
    }
}