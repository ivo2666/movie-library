import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { Nav, MovieReview, RatingBar } from '../components';
import { movie as getMovie, rating as getRating, comentar as getComentars } from '../requests';
import { UserContext } from '../contexts';

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
`

const Details = () => {
    const { id } = useParams();
    const context = useContext(UserContext)
    const [movie, setMovie] = useState(null)
    const [comentars, setComentars] = useState(null)
    const [rating, setRating] = useState(null)

    useEffect(() => {
        getMovie.getOne(id, setMovie)
    }, [id])

    useEffect(() => {
        if (context.user) {
            getRating.get(id, context.user.username, setRating)
        }
    }, [id, context])

    useEffect(() => {
        if (context.user) {
            getComentars.get(id, context.user.username, setComentars)
        }
    }, [id, context])

    return (
        <>
            <Nav />
            <StyledDiv>
                
                {movie ? <MovieReview movie={movie} /> : <></>}
                {movie ? <RatingBar movie={movie} user={context.user} rating={rating} com={comentars} /> : <></>}
            </StyledDiv>
        </>
    )
}

export default Details