import { Button, Text } from './styles/priceButton';

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
}

export default function PriceButton ({ children, ...props }: { 
  formData: ContributionFields, 
  setFormData: React.Dispatch<React.SetStateAction<ContributionFields>>, 
  isSelected: boolean, 
  value: number,
  children: any 
  }): JSX.Element {
  
  const handleClick = () => {
    if(props.isSelected === false) {
      props.setFormData(({
        ...props.formData,
        value: props.value
      }));
    }
  };

  return( <Button onClick={handleClick} { ...props }>{ children }</Button>);
}

PriceButton.Text =  function PriceButtonText ({ children, ...props }: { isSelected: boolean, children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}
