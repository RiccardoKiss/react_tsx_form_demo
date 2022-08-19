import styled from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: flex;
  height: 53px;             /* 53px / 1434px = 0.03696 */
  width: auto;
  padding-top: 1.116vh;     /* 16px / 1434px = 0.01116 */
  padding-bottom: 1.116vh;  /* 16px / 1434px = 0.01116 */
  padding-left: 1.111vw;    /* 16px / 1440px = 0.01111 */
  padding-right: 1.111vw;   /* 16px / 1440px = 0.01111 */
  margin-right: 0.486vw;    /* 7px / 1440px = 0.00486 */
  background: ${(props) => props.isSelected ? '#CD8A64' : '#FFFFFF'};
  border: ${(props) => props.isSelected ? '1px solid #CD8A64' : '1px solid #DFDFDF'};
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
  font-size: 1.116vw;     /* 16px/1434px = 0.01116 */
  line-height: 1.458vh;   /* 21px/1440px = 0.01458 */   
  margin: 0;
  color: ${(props) => props.isSelected ? '#FFFFFF' : '#2F2F2F'};
`;