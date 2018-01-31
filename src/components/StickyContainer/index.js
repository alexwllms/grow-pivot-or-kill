import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const StickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${props => props.theme.colors.text};
`;

const StickyBody = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
`;

export { StickyContainer, StickyBody };
