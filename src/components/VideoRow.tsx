import React from "react";
import { ListGroup, Image, Carousel, OverlayTrigger } from "react-bootstrap";
import { Video, VideoSet } from "../redux/types";
import { fill_genre_list } from "../services";
import { orderVideoListByGenre } from "../services/recommendation.services/recommendationService";
import Description from "./Description";
import { changeModalData, store, useReduxDispatch } from "../redux";

interface VideoRowProps{
    videoSet: VideoSet
}


function VideoRow(props: VideoRowProps){
    const dispatch = useReduxDispatch();
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
                        console.log("ANTES: " + JSON.stringify(store.getState()))
                        dispatch(changeModalData({video: video, show: true}));
                        console.log("DESPUES: " + JSON.stringify(store.getState()))

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