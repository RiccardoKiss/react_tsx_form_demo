import { Button, Text, Circle, Icon } from './styles/contributionChoice';

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
}

export default function ContributionChoice ({ children, ...props }: { 
  formData: ContributionFields, 
  setFormData: React.Dispatch<React.SetStateAction<ContributionFields>>, 
  isSelected: boolean, 
  left?: boolean, 
  right?: boolean, 
  children: any 
  }): JSX.Element {
  
  const handleClick = () => {
    if(props.left === true) {
      props.setFormData(({
        ...props.formData,
        allShelters: false
      }));
    }
    if(props.right === true) {
      props.setFormData(({
        ...props.formData,
        allShelters: true
      }));
    }
  };

  return( <Button onClick={handleClick} { ...props }>{ children }</Button>);
}

ContributionChoice.Text =  function ContributionChoiceText ({ children, ...props }: { isSelected: boolean, children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}

ContributionChoice.Circle =  function ContributionChoiceCircle ({ children, ...props }: { children: any }): JSX.Element {
  return <Circle { ...props }>{ children }</Circle>;
}

ContributionChoice.Icon =  function ContributionChoiceIcon({ ...props } : { isSelected: boolean, src: any }): JSX.Element {
  return <Icon { ...props } />;
}
