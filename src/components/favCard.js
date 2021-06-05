import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import movieImage from '../images/s.jpg';
import { movie as getMovie } from '../requests';
import { LoadingSpinner } from '../components';
import { Link } from 'react-router-dom';
 
const FavCard = ({favId}) => {
    const [fav, setFav] = useState({})

    useEffect(() => {
        getMovie.getOne(favId, setFav)
    }, [favId])
    
    if (!fav) {
        return <LoadingSpinner />
    }else {
        return (
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src={fav.image ? fav.image.original : movieImage} />
              <Card.Body>
                <Card.Title>
                    {`${fav.name} (${fav.premiered ? fav.premiered.split('-')[0] : '----'})`}
                    </Card.Title>
                <Card.Text>
                  {fav.runtime}m
                </Card.Text>
                <Link to={`/details/${fav.id}`}>
                <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
                )
    }
}


export default FavCard