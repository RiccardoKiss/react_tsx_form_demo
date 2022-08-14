import { Button, Check } from './styles/consentButton';

export default function ConsentButton ({ children, ...props }: { 
  isSelected: boolean, 
  setConsent: React.Dispatch<React.SetStateAction<boolean>>, 
  children: any 
  }): JSX.Element {
  
  const handleClick = () => {
    props.setConsent(!props.isSelected);
  };

  return( <Button onClick={handleClick} { ...props }>{ children }</Button>);
}

ConsentButton.Check =  function ConsentButtonCheck ({ ...props }: { src: any }): JSX.Element {
  return(
    <Check { ...props } />
  ) 
}
