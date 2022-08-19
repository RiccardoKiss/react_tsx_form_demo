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
  background: #9F9F9F;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  
  :hover {
    background: #BB6B3D;
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
  color: #FFFFFF;
`;