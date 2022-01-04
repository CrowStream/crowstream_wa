import React, {MouseEventHandler, useState} from 'react';
import { Button, Form, Container, Accordion, useAccordionButton, Card } from 'react-bootstrap';
import { AnyAction } from 'redux';
import  sign_in  from '../redux/reducers';
import { User } from '../redux/types';
import { store, RootState} from '../redux/store';
import { SignIn } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { PayloadAction } from '@reduxjs/toolkit';

function CustomToggle(props: any) {
    const {children, eventKey} = props;
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
    
    const user: RootState = useSelector((state: RootState) => state);

    const [loginEmailInput, setLoginEmailInput] = useState("");
    const [loginPasswordInput, setLoginPasswordInput] =  useState("");

    const dispatch = useDispatch();

    const handleLogin = async() => {
        if(!loginEmailInput || !loginPasswordInput) return;
        console.log("ANTES:" + JSON.stringify(store.getState()))
        const authenticatedUser: PayloadAction<User> = {payload: await SignIn(loginEmailInput, loginPasswordInput), type: sign_in.name}
        dispatch(sign_in(user, authenticatedUser));
        console.log("DESPUES:" + JSON.stringify(store.getState()))
    }

    return (
    <div className="Login">
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0">Login</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value={loginEmailInput} 
                                    onChange={(e) => setLoginEmailInput(e.target.value)} 
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Password" 
                                    value={loginPasswordInput}
                                    onChange={(e) => setLoginPasswordInput(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleLogin}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">Sing Up</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
    );
}

export default LoginCrowStream;