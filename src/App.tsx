import React from 'react';
import HeaderContainer from './containers/headerContainer';
import DogContainer from './containers/dogContainer';
import FooterContainer from './containers/footerContainer';
import FormView from './formView';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <FormView />
      <DogContainer />
      <FooterContainer />
    </>
  );
}

export default App;
