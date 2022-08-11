import React from 'react';
import HeaderContainer from './containers/headerContainer';
import DogContainer from './containers/dogContainer';
import FooterContainer from './containers/footerContainer';
import StepIndicator from './components/stepIndicator';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <div className='stepIndicators'>
        <StepIndicator />
        <StepIndicator />
        <StepIndicator />
      </div>
      <DogContainer />
      <FooterContainer />
    </>
  );
}

export default App;
