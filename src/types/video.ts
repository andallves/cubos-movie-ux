export type VideoResponse = {
    id: number;
    results: Video[];
}

export type Video = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: number;
    type: string;
    official: boolean,
    id: string;
}