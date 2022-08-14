import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel } from '@mui/material';

const menuItemStyles = () => {
  return {
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#9F9F9F',
    fontWeight: 400,
  };
}

const placeholderStyles = () => {
  return {
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#9F9F9F',
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 17,
  };
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

type Shelter = {
  id: number;
  name: string;
}

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
}

const ShelterDropdown = ({ ...props } : { 
  formData: ContributionFields, 
  setFormData: React.Dispatch<React.SetStateAction<ContributionFields>>
  }): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shelter, setShelter] = useState<Shelter>({id: 0, name: ''});
  const [shelters, setShelters] = useState<Shelter[]>([]);

  const getShelters = async () => {
    await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setShelters(data.shelters);
      setIsLoaded(true);
    })
    .catch(error => {console.log(error)})
  }

  const handleChange = (event: SelectChangeEvent) => {
    setShelter(shelters[parseInt(event.target.value)-1] as Shelter);
    const {name, value} = event.target;
    props.setFormData(({
      ...props.formData,
      shelterID: parseInt(value)
    }));
  }

  useEffect(() => {
    if(!isLoaded) getShelters();
  }, [shelters]);

  return (
    <div>
      <FormControl sx={{ width: 557, height: 74 }}>
        <InputLabel id='shelter-label' sx={labelStyles()}>Útulok</InputLabel>
        <Select
          displayEmpty
          labelId='shelter-label'
          label='Útulok'
          value={shelter.name}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p style={placeholderStyles()}>Vyberte útulok zo zoznamu</p>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="" style={menuItemStyles()}>
            <p>Vyberte útulok zo zoznamu</p>
          </MenuItem>
          {shelters.map((shelter) => (
            <MenuItem key={shelter.id} value={shelter.id} style={menuItemStyles()}>
              {shelter.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ShelterDropdown;
