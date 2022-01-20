import { useSelector } from "react-redux"
import {ModalData} from "../redux/types";
import VideoPlayer, { VideoPlayerProps } from "../components/VideoPlayer";
import { RootState } from "../redux"

export const Reproduction = () => {
    const description : ModalData = useSelector((state: RootState) =>  state.description);
    return(
        <div>
        <VideoPlayer episode={{id: description.video.id, poster: description.video.thumbnail_url, video: description.video.video_url}}/>
        </div>
    )
}