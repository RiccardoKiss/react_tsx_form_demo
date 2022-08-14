import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formContributionData, formStep } from '../../formSlice';
import { Button, Text } from './styles/continueButton';

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
}

export default function ContinueButton ({ children, ...props }: { 
  formData: ContributionFields,  
  children: any 
  }): JSX.Element {
  
  const dispatch = useDispatch();
  
  const [errors, setErrors] = useState({
    shelterID: false,
    value: false
  });

  const validate = (formData: ContributionFields) => {
    let formErrors= {
      shelterID: false,
      value: false
    };

    // if contributing to specific shelter
    if(!formData.allShelters && (formData.shelterID === 0)) {
      formErrors.shelterID = true;
    }
    
    // choosing value
    if(formData.value === 0) {
      formErrors.value = true;
    }
    return formErrors
  }

  const handleClick = () => {
    setErrors(validate(props.formData)); // check errors
    if(errors.shelterID || errors.value) {
      let errorMessage = "";
      if(errors.shelterID) errorMessage+= "Útulok: Povinné pole\n";
      if(errors.value) errorMessage+= "Suma: Povinné pole\n";
      alert(errorMessage);
    }
    else {
      dispatch(
        formStep(2)
      );
      dispatch(
        formContributionData({
          allShelters: props.formData.allShelters,
          shelterID: props.formData.shelterID,
          value: props.formData.value
        })
      );
    }
  };

  return(<Button onClick={handleClick} { ...props }>{ children }</Button>);
}

ContinueButton.Text =  function ContinueButtonText ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}