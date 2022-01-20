import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState, useReduxDispatch } from '../redux/store';
import {User, Profile} from '../redux/types'
import { getPsotById, getAllProfiles, generate_home } from '../redux/reducers';
import { GetProfileByID, GetAllProfiles, generateHome } from '../services';
import { useNavigate } from "react-router-dom";

function ProfilesPanel() {
    const dispatch = useReduxDispatch();
    const navigate = useNavigate();
    let profiles = useSelector((state: RootState) => state.profiles.profiles);
    const handleProfile = async(profile: Profile | undefined) => {
        try{
            if (!(profile === undefined)) {
                dispatch(getPsotById(await GetProfileByID(profile?.id)));
                await dispatch(generate_home(await generateHome()));
                navigate("/home");
            }
        }catch(e){
            console.log("Error: "+e);
        }
        
        
    }
    dispatch(getAllProfiles(GetAllProfiles()));
    console.log(profiles);
    return(
        <div className='profiles'>
            <Container>
                <Row>
                    {profiles.map((profile) => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Button onClick={() => {handleProfile(profile)}}>{profile?.name}</Button>    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ProfilesPanel;