// CheckboxComponent.js
import { useEffect, useState } from 'react';
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(() => {
    const storedValue = localStorage.getItem('isChecked');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div id="like">
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      
    </div>
  );
};

export default CheckboxComponent;
