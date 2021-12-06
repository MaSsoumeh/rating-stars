import Star from './Star';
import { useState } from 'react';

const createArray = (length) => [...Array(length)];
const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(2);

  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return <Star key={i} selected={selectedStars > i} />;
      })}
    </>
  );
};

export default StarRating;
