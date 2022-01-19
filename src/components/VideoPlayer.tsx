import ReactPlayer from 'react-player';
import { UpdateClickCountMetadata } from '../services';

interface VideoPlayerProps {
    episode: {
        id: number,
        poster: string,
        video: string,
    }
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;

    async function updateClickCount() {
        const res = await UpdateClickCountMetadata("c1539cc6-3cc5-4087-ab40-b73b8f579236", episode.id);
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