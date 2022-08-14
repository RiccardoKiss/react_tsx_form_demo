import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from 'react-redux';
import { formContributionData, useTypedSelector } from '../../formSlice';

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
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
      value={price}
      onChange={handleChange}
      endAdornment={<InputAdornment position="end">€</InputAdornment>}
    />
  )
}

export default PriceInput;