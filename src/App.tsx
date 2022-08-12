import React from 'react';
import HeaderContainer from './containers/headerContainer';
import DogContainer from './containers/dogContainer';
import FooterContainer from './containers/footerContainer';
import ContributionFormContainer from './containers/contributionFormContainer';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <ContributionFormContainer />
      <DogContainer />
      <FooterContainer />
    </>
  );
}

export default App;
