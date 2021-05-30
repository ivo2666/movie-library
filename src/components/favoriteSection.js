import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
text-align: center;
`

const Favorites = () => {
    return (
<StyledSection>
    <h2>Your Favorites</h2>
    <div className="content">
        <p>
        You don't have any favorites yet
        </p>
    </div>
</StyledSection>
    )
}

export default Favorites