import React, { useState } from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { createProfile, getAllProfiles, signUp, whoAmI } from '../redux/reducers';
import { CreateProfile, GetAllProfiles, SignUp, WhoIAm } from '../services';
import { User } from '../redux/types';
import { useNavigate } from 'react-router-dom';



function SignUpCrowStream() {

    const user: User = useSelector((state: RootState) => state.user);

    const [signupEmailInput, setSignUpEmailInput] = useState("");
    const [signupPasswordInput, setSignUpPasswordInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = async () => {
        if (!signupEmailInput || !signupPasswordInput) return;
        dispatch(signUp(await SignUp(signupEmailInput, signupPasswordInput)));
        console.log("id: "+user.id)
        dispatch(whoAmI((await WhoIAm())));
        console.log("Token: "+user.token)
        dispatch(createProfile(await CreateProfile("user"))  )
        dispatch(getAllProfiles(await GetAllProfiles()));
        if(user.token){
            navigate("/profiles");
        }
    }
    return (
        <div className="SignIn">
            <Row className="justify-content-md-center">
            <Col md="6">
                    <Container id="init">
                        <h1>Regístrate</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={signupEmailInput}
                                    onChange={(e) => setSignUpEmailInput(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    No compartiremos tu correo con nadie más.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Password"
                                    value={signupPasswordInput}
                                    onChange={(e) => setSignUpPasswordInput(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={handleSignUp}>
                                    Enviar
                            </Button>
                        </Form>
                    </Container>
            </Col>
            </Row>
        </div>
    );
}

export default SignUpCrowStream;