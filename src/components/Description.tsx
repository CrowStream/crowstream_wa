import { useState } from "react";
import { Image, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeModalShow } from "../redux";
import { RootState } from "../redux/store";
import { Video } from "../redux/types/catalogue";

interface DescriptionProps{
    video: Video,
    show: boolean
}


function Description(props: DescriptionProps){
    const show = useSelector((state: RootState) => state.description.show)
    const video = useSelector((state: RootState) => state.description.video)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(changeModalShow({show: false}));
    }
    
    return (
        <Modal
            show={show}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            onHide={handleClose}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Image src={video.thumbnail_url} height={300} width={470}/>
                <h1>{video.video_name}      <Button>👍</Button><Button>👎</Button></h1><p></p>
                <h2>{video.released_year}</h2><p></p>
                <Button size={"lg"}>Play</Button>
                <strong>{video.description}</strong><p></p>
                Productor: {video.producer}<br></br>
                Director: {video.director}<br></br>
                Genero: {video.genre} <br></br>
            </Modal.Body>
      </Modal>
    );
}

export default Description;