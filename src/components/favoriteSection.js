import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts';
import { FavCard, LoadingSpinner } from '../components';
import { user as userReq } from '../requests';

const StyledSection = styled.section`
text-align: center;
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`

const Favorites = (props) => {
    const context = useContext(UserContext);
    const [favorites, setFavorites] = useState(props.username ? props.favorites : context.user && context.user.favorites)

    if (props.username && props.favorites !== favorites) {
        setFavorites(props.favorites)
    }

    useEffect(
        () => {
            if (!props.username && context.user) {
                userReq.get(context.user.username, setFavorites)
            }
        }, [context.user, props.username])

    const renderFav = () => {
        if (favorites && favorites.length > 0) {
            return favorites.map(f => <FavCard key={f} favId={f} />)
        } else if (favorites === null) {
            return <LoadingSpinner />
        }else {
            return (
                <p>
                    {`${props.username || 'You'} don't have any favorites yet`}
                </p>
            )
        }
    }



    return (
        <StyledSection>
            <h2>{props.username ? `Favorites of ${props.username} are:` : 'Your Favorites'}</h2>
            <div className="content">
                {renderFav()}
            </div>
        </StyledSection>
    )
}

export default Favorites