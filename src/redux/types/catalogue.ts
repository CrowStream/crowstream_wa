/**
 * Catalogue Types
 */

 export interface Video {
    id: number,
    video_name: string,
    released_year: number,
    description: string,
    thumbnail_url: string,
    video_url: string,
    director: string,
    producer: string,
    genre: string
}
export interface VideoSet {
    video_list: Video[]
    description: string
}

export interface Catalogue {
    videos: VideoSet[]
}

export interface ModalData{
    video: Video,
    show: boolean
}

export interface OrderedVideoSet {
    rateVideoList: number[]
}