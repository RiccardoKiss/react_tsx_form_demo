import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 56.787vh;   /* 774px / 1363px = 0.56787 */
  width: 38.75vw;     /* 558px / 1440px = 0.3875 */
  left: 17.361vw;     /* 250px / 1440px = 0.17361 */
  top: 11.959vh;      /* 163px / 1363px = 0.11959 */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.p`
  position: flex;
  margin-bottom: 3.081vh;  /* 42px / 1363px = 0.03081 */
  margin-top: 0px;
  font-family: 'Hind';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const Label = styled.p`
  position: flex;
  margin: 0;
  margin-bottom: 0.587vh; /* 8px / 1363px = 0.00587 */
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #2F2F2F;
`;

export const Text = styled.p`
  position: flex;
  margin: 0;
  margin-bottom: 1.614vh;  /* 22px / 1363px = 0.01614 */
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2F2F2F;
`;

