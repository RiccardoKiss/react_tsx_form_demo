import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
}

const labelStyles = () => {
  return {
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#2F2F2F',
    fontWeight: 800,
  };
}

const inputStyles = () => {
  return {
    position: 'flex',
    width: '5.972vw'  // 86px/1440px = 0.05972
  };
}

const PriceInput = ({ ...props } : { 
  formData: ContributionFields, 
  setFormData: React.Dispatch<React.SetStateAction<ContributionFields>>
  }): JSX.Element => {

  const [price, setPrice] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
    const {name, value} = event.target;
    props.setFormData(({
      ...props.formData,
      value: parseInt(value)
    }));
  }

  return(
    <OutlinedInput
      id="outlined-adornment-price"
      sx={inputStyles()}
      value={price}
      onChange={handleChange}
      endAdornment={<InputAdornment position="end"><p style={labelStyles()}>€</p></InputAdornment>}
    />
  )
}

export default PriceInput;