import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNav = styled(Navbar)`
display: flex;
flex-wrap: wrap;
`


const MyNav = () => {
    return (
        <StyledNav bg="dark" variant="dark">
            <Navbar.Brand href="/home">My Movie Collection</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#/register">Register</Nav.Link>
                <Nav.Link href="#/login">Login</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </StyledNav>
    )
}



export default MyNav