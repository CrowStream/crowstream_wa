/**
 * Catalogue Types
 */

 export interface Video {
    id: number,
    video_name: string,
    released_year: number,
    description: string,
    thumbnail_url: string,
    video_url: string
}
export interface VideoSet {
    video_list: Video[]
    description: string
}

export interface Catalogue {
    videos: VideoSet[]
}

export interface OrderedVideoSet {
    rateVideoList: number[]
}