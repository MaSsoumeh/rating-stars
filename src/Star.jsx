import { FaStar } from 'react-icons/fa';
const Star = ({ selected = false }) => {
  return (
    <>
      <FaStar color={selected ? 'gold' : 'gray'} />
    </>
  );
};

export default Star;
