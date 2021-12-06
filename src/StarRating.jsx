import Star from './Star';
const createArray = (length) => [...Array(length)];
const StarRating = ({ totalStars = 5 }) => {
  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return <Star key={i} />;
      })}
    </>
  );
};

export default StarRating;
