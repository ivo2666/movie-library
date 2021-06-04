import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts';
import { FavCard } from '../components';

const StyledSection = styled.section`
text-align: center;
`

const Favorites = () => {
    const context = useContext(UserContext);
    const favorites = context.user.Favorites;

    const renderFav = () => {
        if (favorites) {
            favorites.map(f => <FavCard fav={f}/>)
        }else {
            return (
                <p>
        You don't have any favorites yet
        </p>
            )
        }
    }
    return (
<StyledSection>
    <h2>Your Favorites</h2>
    <div className="content">
        {renderFav()}
    </div>
</StyledSection>
    )
}

export default Favorites