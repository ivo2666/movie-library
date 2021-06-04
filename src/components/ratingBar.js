import React, { useState } from 'react';
import Rating from 'react-rating';
import { rating as ratingReq } from '../requests';
 
const RatingBar = (props) => {
  const [rating, setRating] = useState(props.rating || props.movie.rating.average)
    const changeRating = ( newRating ) =>  {
      
      ratingReq.post(newRating, props.movie.id, props.user.username, setRating)
    }
 
      // rating = 2;
      return (
        <Rating
        onChange={changeRating}
  placeholderRating={rating}
  emptySymbol={<img alt='star' src="http://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon" />}
  placeholderSymbol={<img alt='star' src="http://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon" />}
  fullSymbol={<img alt='star' src="http://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon" />}
/>
      );
}

export default RatingBar