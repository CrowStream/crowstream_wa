import React, { MouseEventHandler, useState } from 'react';
import { Button, Form, Container, Accordion, useAccordionButton, Col, Row } from 'react-bootstrap';
import { User } from '../redux/types';
import { SignIn } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import {sign_in} from '../redux/reducers/user';
import {RootState, store, useReduxDispatch} from '../redux/store';


function CustomToggle(props: any) {
    const { children, eventKey } = props;
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: '#222255', color: 'white' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function LoginCrowStream() {

    const user: User = useSelector((state: RootState) => state.user);
    const [loginEmailInput, setLoginEmailInput] = useState("");
    const [loginPasswordInput, setLoginPasswordInput] = useState("");

    const dispatch = useReduxDispatch();

    const handleLogin = async () => {
        if (!loginEmailInput || !loginPasswordInput) return;
        dispatch(sign_in({state: user, payload: await SignIn(loginEmailInput, loginPasswordInput)}));
    }

    return (
        <div className="Login">
            {user.token}
            <Row className="justify-content-md-center">
            <Col md="6">
                    <Container id="init">
                        <h1>Inicia sesión</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={loginEmailInput}
                                    onChange={(e) => setLoginEmailInput(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    No compartiremos tu correo con nadie más.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Password"
                                    value={loginPasswordInput}
                                    onChange={(e) => setLoginPasswordInput(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={handleLogin}>
                                    Enviar
                            </Button>
                        </Form>
                    </Container>
            </Col>
            </Row>
        </div>
    );
}

export default LoginCrowStream;