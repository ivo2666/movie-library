import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../contexts';
import { SearchBar } from '../components';

const StyledNav = styled(Navbar)`
display: flex;
flex-wrap: wrap;
.form-control {
    width: 310px;
}
`


const MyNav = () => {
    const context = useContext(UserContext);

    const links = () => {
        if (context.user) {
                return (
                    <Link to="#" className="nav-link" onClick={context.logOut}>Logout</Link>
                )
        }else {
            return (
                <>
                <Link className="nav-link" to="/register">Register</Link>
                <Link className="nav-link" to="/login">Login</Link>
                </>
            )
        }
    }
    return (
        <StyledNav bg="dark" variant="dark">
            <Link to="/" className="navbar-brand">My Movie Collection</Link>
            <Nav className="mr-auto">
                {links()}
            </Nav>
            <SearchBar />
        </StyledNav>
    )
}



export default MyNav