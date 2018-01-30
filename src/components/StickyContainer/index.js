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
  max-width: ${props => props.theme.articleWidth};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

export { StickyContainer, StickyBody };
