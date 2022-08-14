import React, { useState } from 'react';
import TextField from "@mui/material/TextField";


type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const labelStyles = () => {
  return {
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#2F2F2F',
    fontWeight: 800,
    margin: 0
  };
}

const helperStyles = () => {
  return {
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#9F9F9F',
    fontWeight: 400
  };
}

const inputStyles = () => {
  return {
    position: 'flex',
    height: '5.139vh',  // 74px/1440px = 0.05139
    marginBottom: '18px'
  };
}

const TextInput = ({ ...props } : { 
  formData: ContactFields, 
  setFormData: React.Dispatch<React.SetStateAction<ContactFields>>,
  type: string
  }): JSX.Element => {
  
  const [text, setText] = useState("");
  var label = "";
  var placeholder = "";
  switch (props.type) {
    case "firstName":
      label = "Meno";
      placeholder = "Zadajte Vaše meno";
      break;
    case "lastName":
      label = "Priezvisko";
      placeholder = "Zadajte Vaše priezvisko";
      break;
    case "email":
      label = "E-mailová adresa";
      placeholder = "Zadajte Váš e-mail";
      break;
    case "phone":
      label = "Telefónne číslo";
      placeholder = "";
      break;
    default:
      break;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    const {name, value} = event.target;
    props.setFormData(({
      ...props.formData,
      [name]: value
    }));
  }
  
  return(
    <TextField
      label={<p style={labelStyles()}>{label}</p>}
      onChange={handleChange}
      placeholder={placeholder}
      name={props.type}
      value={text}
      sx={inputStyles()}
    />
  )

}

export default TextInput;