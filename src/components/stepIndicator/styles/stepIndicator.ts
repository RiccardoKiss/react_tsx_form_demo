import React from 'react';
import styled from 'styled-components';

interface IndicatorProps {
  isActive: boolean;
}

export const Indicator = styled.img<IndicatorProps>`
  position: flex;
  margin-right: 5px;
  height: 6px;
  width: ${(props) => props.isActive ? '43.77px' : '20.6px'};
  opacity: ${(props) => props.isActive ? '0.99' : '0.36'};
  background-color: ${(props) => props.isActive ? '#CD8B65' : '#9F9F9F'};
  border-radius: 10px;
`;