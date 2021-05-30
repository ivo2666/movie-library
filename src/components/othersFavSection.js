import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
text-align: center;
`

const Others = () => {
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
}

export default Others