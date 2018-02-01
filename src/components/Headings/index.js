import React from 'react';
import styled from 'styled-components';

const HeadingMain = styled.h2`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  line-height: 1.45;
  margin-bottom: 2.8rem;
  max-width: 57.5rem;
  text-align: center;

  @media screen and (min-width: 48em) {
    font-size: ${props => props.theme.fontSizes.extraExtraLarge};
  }
`;

const SubHeading = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.45;
  margin-top: -1.4rem;
  margin-bottom: 0;
  max-width: 57.5rem;
  text-align: center;
`;

export { HeadingMain, SubHeading };
