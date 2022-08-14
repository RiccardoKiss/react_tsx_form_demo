import styled from 'styled-components';

export const Button = styled.button`
  position: flex;
  //display: flex;
  height: 4.114vh;  // 59px/1434px = 0.04114
  //width: 8.611vw;      // 124px/1440px = 0.08611
  padding: 20px 24px;
  border: 0;
  border-radius: 100px;
  background: #F3E2D9;
  
  :hover {
    background: #D3C2B9;
  }
  
`;

export const Text = styled.p`
  position: flex;
  text-align: center;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  margin: 0;
  color: #2F2F2F;
`;