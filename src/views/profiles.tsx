import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useReduxDispatch } from '../redux/store';
import {User, Profile} from '../redux/types'
import { getProfileById, getAllProfiles, generate_home } from '../redux/reducers';
import { GetProfileByID, GetAllProfiles, generateHome } from '../services';
import { useNavigate } from "react-router-dom";

function ProfilesPanel() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profiles = useSelector((state: RootState) => state.profiles.profiles);
    console.log(profiles);
    return(
        <div className='profiles'>
            <Container>
                <Row>
                    {profiles.map((profile) => {
                        return(
                            <div>
                            <h1>¿Quién está viendo?</h1>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Button id='profile' onClick={async()=>{
                                            dispatch(getProfileById(profile));
                                            dispatch( generate_home(await generateHome() ) );
                                            navigate("/home")
                                        }}>{profile.name}</Button>    
                                    </Card.Body>
                                </Card>
                            </Col>
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default ProfilesPanel;