import { Indicator, IndicatorProps } from './styles/stepIndicator';

const StepIndicator = (props: IndicatorProps) => {
  return (
    <Indicator isActive={props.isActive} ></Indicator>
  )
}

export default StepIndicator;