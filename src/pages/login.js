import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { Nav } from '../components';
import { user as userRequest } from '../requests';
import { UserContext } from '../contexts';
import  { useHistory } from 'react-router-dom';

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;

    input {
        width: 300px;
    }
`

const Login = () => {
    const [user, setUser] = useState({
        username: '', 
        password: ''
    });
    const [validation, setValidation] = useState(<></>);

    const history = useHistory();
    const context = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        userRequest.post(user, '/login', (user) => {
            context.logIn(user)
            history.push('/')
          }, (e) => {
            if (e.message === 'Failed to fetch') {
              setValidation(<Alert variant='danger'>No connection to internet</Alert>)
            }else{
                throw new Error(e.message)
            }
          } )

    }

    return (
        <>
        <Nav />
        <StyledForm onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder="Username" value={user.username} onChange={e => setUser({...user, 'username': e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.password} onChange={e => setUser({...user, 'password': e.target.value})} />
                </Form.Group>
                {validation}
                <Button variant="primary" type="submit">
                    Login
                    </Button>
        </StyledForm>
        </>
    )
}

export default Login