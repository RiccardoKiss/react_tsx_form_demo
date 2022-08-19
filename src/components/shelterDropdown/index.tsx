import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import { MenuItemStyles, PlaceholderStyles, LabelStyles } from './styles/shelterDropdown';


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
    <FormControl sx={{ width: '38.681vw', height: '5.429vh', paddingBottom: '2.935vh' }}>
      <InputLabel id='shelter-label' sx={LabelStyles}>Útulok</InputLabel>
      <Select
        displayEmpty
        labelId='shelter-label'
        label='Útulok'
        value={shelter.name}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p style={PlaceholderStyles()}>Vyberte útulok zo zoznamu</p>;
          }
          return selected;
        }}
      >
        <MenuItem disabled value="" style={MenuItemStyles()}>
          <p>Vyberte útulok zo zoznamu</p>
        </MenuItem>
        {shelters.map((shelter) => (
          <MenuItem key={shelter.id} value={shelter.id} style={MenuItemStyles()}>
            {shelter.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ShelterDropdown;
