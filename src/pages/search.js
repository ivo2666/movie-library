import React, { useEffect, useState } from 'react';
import { Nav, MovieReview, SearchBar } from '../components';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { movie as getMovies } from '../requests';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1 {
    margin: 20px;
}
`

const Search = () => {
    const [movies, setMovies] = useState([]);
    const query = useLocation().search;
    
    useEffect(() => {
        if (query) {
            getMovies.get(query, setMovies);
        }
        
    }, [query])

    const reviews = movies.map(m => <MovieReview key={m.show.id} movie={m.show} />);
    return (
        <>
        <Nav />
        <StyledDiv>
        <h1>Search</h1>
        <SearchBar />
        <div className="movies">
            {reviews}
        </div>
        </StyledDiv>
        </>
    )
}

export default Search