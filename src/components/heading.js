import React, { useContext } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { UserContext } from '../contexts';
import movieImage from '../images/s.jpg';
import { Link } from 'react-router-dom';

const StyledSection = styled.section`
    background-image: url(${`${movieImage}`});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
.jumbotron {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    
    color: yellow;
    h1, p {
        margin-left: 13%;
    }
    p {
        font-size: 2rem;
    }
}
`
const Heading = () => {
    const context = useContext(UserContext);

    const title = () => {
        if (context.user) {
            return <h1>{`Welcome dear ${context.user.username}`}</h1>
        }else {
            return <h1>Мake your collection!</h1>
        }
    };


    return (
        <StyledSection>
            <Jumbotron>
                {title()}
                <p>
                    Search
                    for movies, add or remove
                    in favorites, rate
                    and add notes to each movie.
                    Make things easy!
  </p>
                <p>
                    <Link to="/search">
                <Button variant="info">Search for your Favorite movie</Button>
                </Link>
                </p>
            </Jumbotron>
        </StyledSection>
    )
}

export default Heading