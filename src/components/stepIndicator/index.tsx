import { useState } from 'react';
import { Indicator } from './styles/stepIndicator';

//const [active, setActive] = useState(false);

const StepIndicator = () => {
  return (
    <Indicator isActive={false} ></Indicator>
  )
}

export default StepIndicator;