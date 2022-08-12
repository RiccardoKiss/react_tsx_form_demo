import styled from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
  left?: boolean;
  right?: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: flex;
  flex-direction: column;
  height: 186px;
  width: 278px;
  border: 0;
  border-radius: ${(props) => props.left ? '24px 0px 0px 24px' : (props.right ? '0px 24px 24px 0px' : '0')};
  //background-color: ${(props) => props.isSelected ? 'linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%)' : '#FAF9F9'};
  background-color: ${(props) => props.isSelected ? ' #CD8B65' : '#FAF9F9'};

  :active {
    //background-color: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);
    background-color: #BB6B3D;
    box-shadow: 
      0px 100px 80px rgba(0, 0, 0, 0.07), 
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  }
`;

export const Text = styled.p<ButtonProps>`
  position: flex;
  text-align: left;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin-left: 24px;
  color: ${(props) => props.isSelected ? '#FFFFFF' : '#585757'};
`;

export const Circle = styled.div`
  position: flex;
  width: 80px;
  height: 80px;
  margin-top: 24px;
  margin-left: 24px;
  background-color: #2F2F2F;
  opacity: 0.16;
  border-radius: 50%;
`;

export const Icon = styled.img<ButtonProps>`
  position: flex;
  width: 32px;
  height: 32px;
  margin: 24px;
  color: ${(props) => props.isSelected ? '#FFFFFF' : '#9F9F9F'};
`;