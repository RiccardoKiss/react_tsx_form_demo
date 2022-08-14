import styled from 'styled-components';

export const Button = styled.button`
  position: flex;
  //display: flex;
  height: 4.114vh;  // 59px/1434px = 0.04114
  width: 8.611vw;      // 124px/1440px = 0.08611
  padding: 20px 24px;
  background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
  border: 0;
  border-radius: 100px;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

  :hover {
    background-color: #BB6B3D;
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
  color: #FFFFFF;
`;