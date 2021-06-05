import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Nav } from '../components'
import styled from 'styled-components';
import { user as userRequest} from '../requests';
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

const Register = () => {
    const [user, setUser] = useState({
        username: '', 
        password: ''
    });
    const [repassword, setRepasssword] = useState("");
    const [validation, setValidation] = useState(false);

    const history = useHistory();
    const context = useContext(UserContext)

    const registerValidation = (username, password, repassword) => {
        let validation = ''
        if (username.length < 6) {
            validation = 'username must be at least 6 characters'
        } else if (password.length < 6) {
            validation = "password must be at least 6 characters"
        } else if (password !== repassword) {
            validation = "passwords not match"
        } else {
            validation = false;
        }
        return validation
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const validationChek = registerValidation(user.username, user.password, repassword);
        if (validationChek) {
            setValidation(<Alert variant='danger'>{validationChek}</Alert>)
        }else {
            userRequest.post(user, '/register',
                (user) => {
                    context.logIn(user);
                    history.push('/')
                }, (e) => {
                    if (e.message === 'Username exist') {
                        setValidation(e.message)
                    }else {
                        console.log('Error', e)
                    }
                })
        }
    }

    return (
        <>
            <Nav />
            <StyledForm onSubmit={handleSubmit}>
                <h1>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder="Username" value={user.username} onChange={e => setUser({...user, 'username': e.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.password} onChange={e => setUser({...user, 'password': e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="RepeatPassword" value={repassword} onChange={e => setRepasssword(e.target.value)} />
                </Form.Group>

                {validation}

                <Button variant="primary" type="submit">
                    Send
                    </Button>
                   
            </StyledForm>
        </>
    )
}

export default Register