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
  margin-bottom: 2.054vh;  /* 28px / 1363px = 0.02054 */
  margin-top: 0px;
  font-family: 'Hind';
  font-style: normal;
  font-weight: 700;
  font-size: 3.375vw;     /* 46px / 1363px = 0.03375 */
  line-height: 3.611vw;   /* 52px / 1440px = 0.03611 */ 
  letter-spacing: 0.01em;
  color: #000000;
`;

export const ContributionChoiceRow = styled.div`
  border: 1px solid #CD8B65;
  border-radius: 24px;
  margin-bottom: 4.109vh;  /* 56px / 1363px = 0.04109 */
`;

export const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.101vh; /* 15px / 1363px = 0.01101 */
`;

export const Label = styled.p`
  position: flex;
  margin: 0;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 1.027vw;         /* 14px / 1363px = 0.01027 */
  line-height: 1.319vh;       /* 19px / 1440px = 0.01319 */
  color: #2F2F2F;
`;

export const PriceRow = styled.div`
  position: flex;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5.282vh;     /* 72px / 1363px = 0.05282 */
`;

export const PriceRowLabel = styled.p`
  position: flex;
  margin-bottom: 1.101vh;     /* 15px / 1363px = 0.01101 */
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 1.027vw;         /* 14px / 1363px = 0.01027 */
  line-height: 1.319vh;       /* 19px / 1440px = 0.01319 */ 
  color: #2F2F2F;
`;

