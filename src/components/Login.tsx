import React, { useState } from 'react';
import { Button, Form, Container, Accordion, useAccordionButton, Col, Row, Alert } from 'react-bootstrap';
import { User } from '../redux/types';
import { SignIn, WhoIAm } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import {getAllProfiles, signIn, whoAmI} from '../redux/reducers/user';
import { GetAllProfiles } from '../services';
import store, {RootState} from '../redux/store';
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function Alerta() {
        if (user.token) {
          return <Alert variant='success'> Sesión iniciada</Alert>;
        }else if(user.token == 'Fail'){
            <Alert variant='danger'>Error al iniciar sesión</Alert>;
        }
        return <div/>;
    }
    
    const handleLogin = async () => {
        if (!loginEmailInput || !loginPasswordInput) return;
        try{
            dispatch(signIn(await SignIn(loginEmailInput, loginPasswordInput)));
            dispatch(whoAmI((await WhoIAm())));
            dispatch(getAllProfiles(await GetAllProfiles()));
            if(store.getState().user.token){
                navigate("/profiles");
            }
        }catch(e){
            console.log(e)
            user.token = 'Fail'
            
            alert("Error en el login")
        }
        
    }

    return (
        <div className="Login">
            <Row className="justify-content-md-center">
            <Col md="6">
                    <Alerta/>
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