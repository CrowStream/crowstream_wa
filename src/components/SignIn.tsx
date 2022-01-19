import React, { MouseEventHandler, useState } from 'react';
import { Button, Form, Container, Accordion, useAccordionButton, Col, Row } from 'react-bootstrap';
import { AnyAction } from 'redux';
import sign_in from '../redux/reducers';
import { User } from '../redux/types';
import { store, RootState } from '../redux/store';
import { SignIn } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { PayloadAction } from '@reduxjs/toolkit';
import { Link } from "react-router-dom";


function SignInCrowStream() {

    const user: RootState = useSelector((state: RootState) => state);

    const [signinEmailInput, setSignInEmailInput] = useState("");
    const [signinPasswordInput, setSignInPasswordInput] = useState("");

    const dispatch = useDispatch();

    const handleSignIn = async () => {
        if (!signinEmailInput || !signinPasswordInput) return;
        console.log("ANTES:" + JSON.stringify(store.getState()))
        const authenticatedUser: PayloadAction<User> = { payload: await SignIn(signinEmailInput, signinPasswordInput), type: sign_in.name }
        dispatch(sign_in(user, authenticatedUser));
        console.log("DESPUES:" + JSON.stringify(store.getState()))
    }
    return (
        <div className="Login">
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
                                    value={signinEmailInput}
                                    onChange={(e) => setSignInEmailInput(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    No compartiremos tu correo con nadie más.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Password"
                                    value={signinPasswordInput}
                                    onChange={(e) => setSignInPasswordInput(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleSignIn}>
                                    Enviar
                            </Button>
                        </Form>
                    </Container>
            </Col>
            </Row>
        </div>
    );
}

export default SignInCrowStream;