import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 774px;
  width: 558px;
  left: 17.361vw; /* 250px/1440px = 0.17361 */
  top: 8.996vh; /* 129px/1434px = 0.089958158 */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  //justify-content: space-between;
`;

export const StepIndicatorsRow = styled.div`
  margin-bottom: 28px;
`;

export const Title = styled.p`
  position: flex;
  margin-bottom: 28px;
  margin-top: 0px;
  font-family: 'Hind';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 52px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const ContributionChoiceRow = styled.div`
  //box-sizing: border-box;
  border: 1px solid #CD8B65;
  border-radius: 24px;
  margin-bottom: 56px;
`;