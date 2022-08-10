import Header from '../components/header';
import FB from './assets/facebook-f-brands.svg';
import IG from './assets/instagram-brands.svg';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Title>Nadácia Good Boy</Header.Title>
      <Header.IconFB src={FB} /> 
      <Header.IconIG src={IG} /> 
    </Header>
  )
}

export default HeaderContainer;