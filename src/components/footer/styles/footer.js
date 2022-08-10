import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: auto;
  height: 323px;
  top: 982px;
  left: 150px;
  right: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 118px;
  width: 170px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr 1fr 1fr;
  grid-gap: 121px;
`;

export const Title = styled.p`
  position: flex;
  margin-bottom: 24px;
  margin-top: 0px;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;

  color: #2F2F2F;
`;

export const Link = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #585757;

  &:hover {
      color: #bd6e40;
      transition: 200ms ease-in;
  }
`;

export const Text = styled.p`
  
  height: 105px;
  margin-top: 0px;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #585757;
`;

export const Logo = styled.img`
  position: flex;
  width: 220px;
  height: 56px;
  margin-top: 112px;
`;

export const Separator = styled.img`
  position: absolute;
  width: 100%;
  height: 1px;
  background: rgba(47, 47, 47, 0.16);
  transform: matrix(1, 0, 0, -1, 0, 0);
  top: 1px;
`;