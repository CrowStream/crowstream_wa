import { ListGroup, Image } from "react-bootstrap";
import { VideoSet } from "../redux/types";
import { retrieve_actualLike } from "../services";
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
        <div className="videoRow" style={{color: "#FFFFFF", backgroundColor: "#000000"}}>
            <h5>{props.videoSet.description}</h5>
            <div style={{overflow: "auto"}}>
            <ListGroup horizontal >
            {props.videoSet.video_list.map( (video) =>{
                return (
                <div>
                <ListGroup.Item style={{backgroundColor: "#000000", color: "#FFFFFF"}}>
                    <div onClick={() => {
                        dispatch(changeModalData({video: video, show: true,}));
                        dispatch(retrieve_actual(retrieve_actualLike(profile,  video.id)));
                    }}>
                    <Image rounded width={300} height={180} src={video.thumbnail_url} ></Image>
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