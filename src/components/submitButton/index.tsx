import { useEffect, useState } from 'react';
import { Button, Text } from './styles/submitButton';

type SubmitFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  value: number;
  shelterID: number;
}

export default function SubmitButton ({ children, ...props }: { 
  formData: SubmitFields,  
  consent: boolean,
  children: any 
  }): JSX.Element {
  
  const [errors, setErrors] = useState(false);
  const [validated, setValidated] = useState(false);

  const postData = async (values: SubmitFields) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "firstName": values.firstName,
        "lastName": values.lastName,
        "email": values.email,
        "value": values.value,
        "phone": values.phone,
        "shelterID": values.shelterID
      })
    };
    await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute", requestOptions) // POST for List
    .then((response) => {
      if(response.status === 200) {
        alert("Formulár bol úspešne odoslaný.")
      }
    })
    .catch(error => {console.log(error)})
  };

  const handleClick = () => {
    setErrors(!props.consent); // check errors
    setValidated(true);
    
  };

  useEffect(() => {
    if(validated) {
      if(errors) {
        alert("Je potrebné potvrdiť súhlas so spracovaním osobných údajov.");
      }
      else {
        postData(props.formData);
      }
    }
  }, [errors])

  return(<Button onClick={handleClick} { ...props }>{ children }</Button>);
}

SubmitButton.Text =  function SubmitButtonText ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}