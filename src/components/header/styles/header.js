import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  background: #FEFEFE;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.p`
  position: absolute;
  height: 16px;
  left: 184px;

  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #9F9F9F;
`;

export const IconFB = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 182px;
  top: calc(50% - 24px/2);
  filter: invert(66%) sepia(1%) saturate(0%) hue-rotate(25deg) brightness(97%) contrast(89%);
`;

export const IconIG = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 150px;
  top: calc(50% - 24px/2);
  filter: invert(66%) sepia(1%) saturate(0%) hue-rotate(25deg) brightness(97%) contrast(89%);
`;