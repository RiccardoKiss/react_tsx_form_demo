import styled from 'styled-components';

export const Button = styled.button`
  position: flex;
  height: 4.329vh;          /* 59px / 1363px = 0.04329 */
  padding-top: 1.467vh;     /* 20px / 1363px = 0.01467 */
  padding-bottom: 1.467vh;  /* 20px / 1363px = 0.01467 */
  padding-left: 1.667vw;    /* 24px / 1440px = 0.01667 */
  padding-right: 1.667vw;   /* 24px / 1440px = 0.01667 */
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
  font-size: 14px;        /* 14px / 1363px = 0.01027 */
  line-height: 1.319vh;   /* 19px / 1440px = 0.01319 */ 
  margin: 0;
  color: #2F2F2F;
`;