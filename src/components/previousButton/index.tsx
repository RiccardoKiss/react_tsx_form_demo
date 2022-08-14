import { useDispatch } from 'react-redux';
import { formStep, useTypedSelector } from '../../formSlice';
import { Button, Text } from './styles/previousButton';

export default function PreviousButton ({ children, ...props }: { children: any }): JSX.Element {
  
  const dispatch = useDispatch();
  const currentStep = useTypedSelector(state => state.FormStep);
  
  const handleClick = () => {
    
    dispatch(
      formStep(currentStep-1)
    );
  };

  return(<Button onClick={handleClick} { ...props }>{ children }</Button>);
}

PreviousButton.Text =  function PreviousButtonText ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}