import { ListGroup, Image } from "react-bootstrap";
import { VideoSet } from "../redux/types";
import { CreateClickCountMetadata, retrieve_actualLike } from "../services";
import { changeModalData, RootState, useReduxDispatch } from "../redux";
import { retrieve_actual } from "../redux/reducers/rating";
import { useSelector } from "react-redux";

interface VideoRowProps{
    videoSet: VideoSet
}


function VideoRow(props: VideoRowProps){
    
    const dispatch = useReduxDispatch();
    const profile: string = useSelector((state: RootState) => state.currentProfile.id);
    
    return (
        <div className="videoRow" style={{color: "#FFFFFF", backgroundColor: "#1b1c1f"}}>
            <h5>{props.videoSet.description}</h5>
            <div style={{overflow: "auto"}}>
            <ListGroup horizontal className="justify-content-md-center">
            {props.videoSet.video_list.map( (video) =>{
                return (
                <div>
                <ListGroup.Item style={{backgroundColor: "#1b1c1f", color: "#FFFFFF"}}>
                    <div onClick={async() => {
                        dispatch(changeModalData({video: video, show: true,}));
                        CreateClickCountMetadata(video.id);
                        dispatch(retrieve_actual({user_id: profile, video_id: video.id ,like: await retrieve_actualLike(profile,  video.id)}));
                    }}>
                    <Image id='poster' rounded width={250} height={390} src={video.thumbnail_url} ></Image>
                    <h5>{video.video_name}</h5>
                    </div>
                </ListGroup.Item>
                </div>)}
            )}   
            </ListGroup>
            </div>
        </div>
    );
}

export default VideoRow;

function create_click_count_metadata() {
    throw new Error("Function not implemented.");
}
