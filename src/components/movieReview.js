import React from 'react';
import styled from 'styled-components';
import { Image, Col, Button } from 'react-bootstrap';
import  { Link }  from 'react-router-dom';
import movieImage from '../images/s.jpg';

const Container = styled.div`

.official-site {
    color: blue;
    text-decoration: underline;

}
display: flex;
flex-wrap: wrap;
padding: 20px;
max-width: 75%;

border-bottom: 1px solid skyblue;
    .details-link {
        color: #4f4f4f;
        text-decoration: none;
        &:hover {
        color: #2752E1;
    }
    }
    
    
    button {
        margin-top: 10px;
    }

h1 {
    margin-right: 20px;
    line-height: 36px;
    font-size: 36px;
    font-weight: 100;
}

.price {
    font-weight: 700;
}

img {
    width: 100%;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
        border: 1px solid skyblue;
    }
}


`

const MovieReview = ({movie}) => {
    return (
        <Container>
                <Col md={5} xs={12}>
                    <Link className="details-link" to={`/details/${movie.id}`}>
            <Image alt='car' src={movie.image ? movie.image.original : movieImage} />
            </Link>
            </Col>
            <Col md={5} xs={12}>
            <Link to={`/details/${movie.id}`} className="details-link">
            <h1>
                {`${movie.name} (${movie.premiered.split('-')[0]})`}
                </h1>
                <div className='genres'>{`${movie.genres ? movie.genres.join(', ') : ''} | ${movie.runtime + ' minutes' || ''}`}</div>
                <div className='summary'dangerouslySetInnerHTML={{ __html: movie.summary || '' }}></div>
                </Link>
                <div className='official-site'><a href={movie.officialSite}>Visit to official site</a></div>
                <Button variant="outline-info">Add to favorites</Button>
            </Col>
        </Container>
    )
}



export default MovieReview