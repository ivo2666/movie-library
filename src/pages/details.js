import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { Nav, MovieReview, RatingBar } from '../components';
import { movie as getMovie, rating as getRating, comentar as getComentars } from '../requests';
import { UserContext } from '../contexts';

const StyledDiv = styled.div`

`

const Details = () => {
    const { id } = useParams();
    const context = useContext(UserContext)
    const [movie, setMovie] = useState({})
    const [comentars, setComentars] = useState({})
    const [rating, setRating] = useState({})

    useEffect(() => {
        getMovie.getOne(id, setMovie)
    }, [id])

    useEffect(() => {
        if (context.user) {
            getRating.get(id, context.user.userName, setRating)
        }
    }, [id, context])

    useEffect(() => {
        if (context.user) {
            getComentars.get(id, context.user.userName, setComentars)
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