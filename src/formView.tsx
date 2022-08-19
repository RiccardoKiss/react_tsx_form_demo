import React from 'react';
import ContributionFormContainer from './containers/contributionFormContainer';
import ContactFormContainer from './containers/contactFormContainer';
import RevisionContainer from './containers/revisionContainer';
import StepIndicator from './components/stepIndicator';
import { useTypedSelector } from './formSlice';


const FormView = () => {
  const pageStep = useTypedSelector((state) => state.FormStep);

  return (
    <>
      <div style={{ 
        display: 'flex',
        position: 'absolute',
        left: '17.361vw',       /* 250px / 1440px = 0.17361 */
        top: '9.464vh',         /* 129px / 1363px = 0.09464 */
        marginBottom: '2.054vh' /* 28px / 1363px = 0.02054 */
      }}>
        <StepIndicator isActive={(pageStep === 1)} />
        <StepIndicator isActive={(pageStep === 2)} />
        <StepIndicator isActive={(pageStep === 3)} />
      </div>
      {(pageStep === 1) && <ContributionFormContainer />}
      {(pageStep === 2) && <ContactFormContainer />}
      {(pageStep === 3) && <RevisionContainer />}
      
      
      
    </>
  )
}

export default FormView;