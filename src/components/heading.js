import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import styled from 'styled-components';
import movieImage from '../images/s.jpg';

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
    return (
        <StyledSection>
            <Jumbotron>
                <h1>Мake your collection!</h1>
                <p>
                    Search
                    for movies, add or remove
                    in favorites, rate
                    and add notes to each movie.
                    Make things easy!
  </p>
                <p>
                <Button variant="info">Search for your Favorite movie</Button>
                </p>
            </Jumbotron>
        </StyledSection>
    )
}

export default Heading