import { useEffect, useState } from 'react';
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
  const [validated, setValidated] = useState(false);

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
    const emailRegex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if(formData.email === "" || !emailRegex.test(formData.email)) {
      formErrors.email = true;
    }

    return formErrors
  }

  const handleClick = () => {
    setErrors(validate(props.formData)); // check errors
    setValidated(true);
    
  };

  useEffect(() => {
    if(validated) {
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
    }
  }, [errors])

  return(<Button onClick={handleClick} { ...props }>{ children }</Button>);
}

ContinueButton2.Text =  function ContinueButton2Text ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}