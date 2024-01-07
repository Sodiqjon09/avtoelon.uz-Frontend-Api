import  {  useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types"
export default function BasicRating(props) {
    let localRatings = localStorage.getItem('item_rating');
  const [value, setValue] = useState(localRatings || 0);


  const itemRatingData = {
    id: props.id,
    rating: null
}


  const onRating = (event, newValue)=>{
    setValue(newValue);
    console.log(newValue);

    itemRatingData.rating = newValue;

    localStorage.setItem("item_rating", JSON.stringify(itemRatingData));
   console.log(props.id);
  }

  return (
    <div className='star' >
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => onRating(event, newValue)}
      />
    </Box>
    </div>
  );
}


BasicRating.propTypes = {
    id: PropTypes.number
}