import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { Nav, MovieReview } from '../components';
import { movie as getMovie } from '../requests';

const StyledDiv = styled.div`

`

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovie.getOne(id, setMovie)
    }, [id])
    return (
        <>
            <Nav />
            <StyledDiv>
                {movie ? <MovieReview movie={movie} /> : <></>}
            </StyledDiv>
        </>
    )
}

export default Details