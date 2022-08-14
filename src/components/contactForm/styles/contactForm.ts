import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 53.975vh; /* 774px/1434px = 0.5397489 */
  width: 38.75vw;   /* 558px/1440px = 0.3875 */
  left: 17.361vw;   /* 250px/1440px = 0.17361 */
  top: 11.3667vh;     /* 163px/1434px = 0.11367 */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  //justify-content: space-between;
`;

export const Title = styled.p`
  position: flex;
  margin-bottom: 42px;
  margin-top: 0px;
  font-family: 'Hind';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const Label = styled.p`
  position: flex;
  margin: 0;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2F2F2F;
`;


