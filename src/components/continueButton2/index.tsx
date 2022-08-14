import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formContactData, formStep } from '../../formSlice';
import { Button, Text } from './styles/continueButton2';

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function ContinueButton2 ({ children, ...props }: { 
  formData: ContactFields,  
  children: any 
  }): JSX.Element {
  
  const dispatch = useDispatch();
  
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false
  });

  const validate = (formData: ContactFields) => {
    let formErrors= {
      firstName: false,
      lastName: false,
      email: false
    };

    // first name is required
    if(formData.firstName === "") {
      formErrors.firstName = true;
    }
    
    // last name is required
    if(formData.lastName === "") {
      formErrors.lastName = true;
    }
    // email is required
    if(formData.email === "") {
      formErrors.email = true;
    }

    return formErrors
  }

  const handleClick = () => {
    setErrors(validate(props.formData)); // check errors
    if(errors.firstName || errors.lastName || errors.email) {
      let errorMessage = "";
      if(errors.firstName) errorMessage+= "Meno: Povinné pole\n";
      if(errors.lastName) errorMessage+= "Priezvisko: Povinné pole\n";
      if(errors.email) errorMessage+= "E-mailová adresa: Povinné pole\n";
      alert(errorMessage);
    }
    else {
      dispatch(
        formStep(3)
      );
      dispatch(
        formContactData({
          firstName: props.formData.firstName,
          lastName: props.formData.lastName,
          email: props.formData.email,
          phone: props.formData.phone
        })
      );
    }
  };

  return(<Button onClick={handleClick} { ...props }>{ children }</Button>);
}

ContinueButton2.Text =  function ContinueButton2Text ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}