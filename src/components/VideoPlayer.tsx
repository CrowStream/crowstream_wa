import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { UpdateClickCountMetadata } from '../services';

export interface VideoPlayerProps {
    episode: {
        id: number,
        poster: string,
        video: string,
    }
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    console.log(episode.id);
    console.log(episode.poster);
    console.log(episode.video);
    const profile_id: string = useSelector((state: RootState) => state.currentProfile.id)
    async function updateClickCount() {
        const res = await UpdateClickCountMetadata(profile_id, episode.id);
    }

    return <ReactPlayer
        url={episode.video}
        width='100%'
        height='100%'
        controls = {true}
        onStart={updateClickCount}
    />
}

export default VideoPlayer;