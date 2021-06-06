import React, { useState } from 'react';
import Rating from 'react-rating';
import { rating as ratingReq } from '../requests';
import styled from 'styled-components';
import yellowStar from '../images/yellow-star.png';
import transparentStar from '../images/transparent-star.png';

const StyledDiv = styled.div`
h3 {
  text-align: center;
  margin: 20px;
}
.icon {
  width: 60px;
}
`
 
const RatingBar = (props) => {
  const [rating, setRating] = useState(props.rating || Math.round(props.movie.rating.average) / 2 )
    const changeRating = ( newRating ) =>  {
      
      ratingReq.post(newRating, props.movie.id, props.user.username, setRating)
    }
 
      // rating = 2;
      return (
        <StyledDiv>
          <h3>Your Review</h3>
        <Rating
        onChange={changeRating}
        start={0}
        stop={5}
        placeholderRating={rating}
  emptySymbol={<img alt='star' src={transparentStar} className="icon" />}
  placeholderSymbol={<img alt='star' src={yellowStar} className="icon" />}
  fullSymbol={<img alt='star' src={yellowStar} className="icon" />}
/>
</StyledDiv>
      );
}

export default RatingBar