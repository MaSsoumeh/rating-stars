import Star from "./Star";
import { useState } from "react";

const createArray = (length) => [...Array(length)];
const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        );
      })}
      <p>
        {selectedStars} of {totalStars} Stars
      </p>
    </>
  );
};

export default StarRating;
