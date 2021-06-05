import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { user as userReg } from '../requests';
import { LoadingSpinner, FavoriteSection } from '../components';
const StyledSection = styled.section`
text-align: center;
`

const Others = () => {
    const [users, setUsers] = useState(null)
    const [userOnFocus, setUserOnFocus] = useState(null);

    useEffect(() => {
        userReg.getAll(setUsers)
    }, [])

    const userRend = (u, index) => {
        return (
            <a key={u.id} onClick={clickHandler} href="#user-fav"><h3 key={u.id} id={index}>{u.username}</h3></a>
        )
    }

    const clickHandler = (e) => {
        setUserOnFocus(users[e.target.id])
    }

    if (users === null) {
        return <LoadingSpinner />      
    }else if (users.lenght < 1) {
        return (
            <StyledSection>
                <h2>
                    Favorite movies of other users
                </h2>
                <div>
                    <p>
                        No others users
                    </p>
                </div>
            </StyledSection>
        )
    }else {
        return (
            <StyledSection>
                <h2>
                    Favorite movies of other users
                </h2>
                <div className="users">
                    {users.map(userRend)}
                </div>
                <div id="user-fav">
                    {userOnFocus ? <FavoriteSection favorites={userOnFocus.favorites} username={userOnFocus.username}/> : <></>}
                </div>
            </StyledSection>
        )
    }
    
}

export default Others