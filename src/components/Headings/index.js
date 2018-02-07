import React from 'react';
import styled from 'styled-components';

import { remCalc } from '../../utils/units';

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  line-height: 1.45;
  margin-bottom: 2.8rem;
  max-width: 57.5rem;
  text-align: center;

  @media screen and (min-width: 48em) {
    font-size: ${props => props.theme.fontSizes.extraExtraLarge};
  }
`;

const HeadingMain = styled.h2`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  line-height: 1.45;
  margin-bottom: 2.8rem;
  text-align: center;
  font-weight: bold;
`;

const SubHeading = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.45;
  margin-top: -1.4rem;
  margin-bottom: 0;
  max-width: 57.5rem;
  text-align: center;
`;

export { Title, HeadingMain, SubHeading };
