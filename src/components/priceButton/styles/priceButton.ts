import styled from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: flex;
  height: 3.696vh; // 53px / 1434px = 0.03696
  width: auto;
  padding: 16px;
  margin-right: 7px;
  background: ${(props) => props.isSelected ? '#CD8A64' : '#FFFFFF'};
  border: ${(props) => props.isSelected ? '0' : '1px solid #DFDFDF'};
  border-radius: 8px;

  :active {
    background-color: #BB6B3D;
  }
`;

export const Text = styled.p<ButtonProps>`
  position: flex;
  text-align: center;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin: 0;
  color: ${(props) => props.isSelected ? '#FFFFFF' : '#2F2F2F'};
`;