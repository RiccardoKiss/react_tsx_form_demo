import styled from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: flex;
  width: 34px;
  height: 34px;
  padding: 5px;
  margin-right: 16px;
  background: #FFFFFF;
  border: 1px solid #F3E2D9;
  border-radius: 8px;
`;

export const Check = styled.img`
  position: flex;
  width: 24px;
  height: 24px;
`;