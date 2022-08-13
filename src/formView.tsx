import React from 'react';
import { useSelector } from 'react-redux';
import ContributionFormContainer from './containers/contributionFormContainer';
import StepIndicator from './components/stepIndicator';
import { RootState, useTypedSelector } from './formSlice';


const FormView = () => {
  const pageStep = useTypedSelector((state) => state.FormStep);

  return (
    <>
      <div style={{ 
        position: 'absolute',
        left: '17.361vw',   /* 250px/1440px = 0.17361 */
        top: '8.996vh',     /* 129px/1434px = 0.089958158 */
      }}>
        <StepIndicator isActive={(pageStep === 1)} />
        <StepIndicator isActive={(pageStep === 2)} />
        <StepIndicator isActive={(pageStep === 3)} />
      </div>
      {(pageStep === 1) && <ContributionFormContainer />}
      
      
      
    </>
  )
}

export default FormView;