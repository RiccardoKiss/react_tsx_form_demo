import { useState } from 'react';
import { Indicator, IndicatorProps } from './styles/stepIndicator';

//const [active, setActive] = useState(false);

const StepIndicator = (props: IndicatorProps) => {
  return (
    <Indicator isActive={props.isActive} ></Indicator>
  )
}

export default StepIndicator;