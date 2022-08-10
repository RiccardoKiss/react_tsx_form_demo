import styled from 'styled-components';
import Dog from './icons/dog.svg';

const DogImage = styled.img`
  position: absolute;
  height: 730px;
  width: 364px;
  left: 870px;
  top: 129px;
`;

const DogContainer = () => {
  return (
    <DogImage src={Dog} />
  )
}

export default DogContainer;