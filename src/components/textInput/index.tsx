import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import { LabelStyles } from './styles/textInput';

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
    <div style={{marginBottom: '1.321vh', height: '5.429vh'}}>
      <TextField
        label={<p style={LabelStyles()}>{label}</p>}
        onChange={handleChange}
        placeholder={placeholder}
        name={props.type}
        value={text}
        sx={{width: '38.681vw'}}
      />
    </div>
  )

}

export default TextInput;