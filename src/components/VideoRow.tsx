import React from "react";
import { ListGroup, Image, Carousel } from "react-bootstrap";
import { VideoSet } from "../redux/types";
import { fill_genre_list } from "../services";
import { orderVideoListByGenre } from "../services/recommendation.services/recommendationService";


function VideoRow(props: VideoSet){
    return (
        <div className="videoRow" style={{color: "#FFFFFF", backgroundColor: "#000000"}}>
            <h5>{props.description}</h5>
            <div style={{overflow: "auto"}}>
            <ListGroup horizontal >
            {props.video_list.map( (video) =>{
                return (<ListGroup.Item style={{backgroundColor: "#000000", color: "#FFFFFF"}}>
                        <Image rounded width={300} height={180} src={video.thumbnail_url}></Image>
                        <h5>{video.video_name}</h5>
                    </ListGroup.Item>)
            } )}   
            </ListGroup>
            </div>
        </div>
    );
}

export default VideoRow;