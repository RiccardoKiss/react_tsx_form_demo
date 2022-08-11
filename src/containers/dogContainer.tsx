import styled from 'styled-components';
import Dog from './assets/dog.svg';

const DogImage = styled.img`
  position: absolute;
  height: 730px;
  width: 364px;
  left: 60.417vw; /* 870px/1440px = 0.604166 */
  top: 8.996vh; /* 129px/1434px = 0.089958158 */
`;

const DogContainer = () => {
  return (
    <DogImage src={Dog} />
  )
}

export default DogContainer;