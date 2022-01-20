import { Image, Button, Modal, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeModalShow } from "../redux";
import { RootState } from "../redux/store";
import { Video } from "../redux/types/catalogue";
import { LikeVideo, UpdateClickCountMetadata } from "../services";
import { useNavigate } from "react-router-dom";
import { AiFillLike, AiFillDislike  } from "react-icons/ai";

interface DescriptionProps{
    video: Video,
    show: boolean
}


function Description(props: DescriptionProps){
    const show = useSelector((state: RootState) => state.description.show);
    const video = useSelector((state: RootState) => state.description.video);
    const profile_id = useSelector((state: RootState) => state.currentProfile.id);
    var like = useSelector((state: RootState) => state.rating.like);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(changeModalShow({show: false}));
    }
    const navigate = useNavigate();
    const handlePlay = () => {
        //Llamar apollo Juan Pablo
        UpdateClickCountMetadata(profile_id, video.id);
        navigate("/video");
    }
    const handleLike = async()  => {
        like =  (await LikeVideo(profile_id, video.id, 1)).like;
    }
    const handleDislike = async() => {
        like =  (await LikeVideo(profile_id, video.id, 0)).like;
    }
    return (
        <Modal
            show={show}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            onHide={handleClose}
            id='modal'
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Row>
                        <Image src={video.thumbnail_url} height={300} width={470}/>
                    </Row>
                    <Row>
                        <h1>{video.video_name}</h1>
                    </Row>
                    <Row>
                        <Col md='12'>
                            <Button disabled={like==1} onClick={handleLike}><AiFillLike/></Button>
                            <Button disabled={like==2} onClick={handleDislike}><AiFillDislike/></Button>
                        </Col>
                    </Row>
                    <Row>
                        <h2>{video.released_year}</h2><p></p>
                    </Row>
                    <Row>
                        <Button onClick={handlePlay}>Play</Button>
                    </Row>
                    <Row>
                        <strong>{video.description}</strong><p></p>
                    </Row>
                    <Row>
                        <Col>
                            Productor: {video.producer}<br></br>
                            Director: {video.director}<br></br>
                            Genero: {video.genre} <br></br>
                        </Col>
                    </Row>
                </Col>
            </Modal.Body>
      </Modal>
    );
}

export default Description;