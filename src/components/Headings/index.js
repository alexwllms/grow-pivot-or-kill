import React from 'react';
import styled from 'styled-components';

import { remCalc } from '../../utils/units';

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  line-height: 1.45;
  margin-bottom: ${remCalc(44.8)};
  max-width: 57.5rem;
  text-align: center;

  @media screen and (min-width: 48em) {
    font-size: ${props => props.theme.fontSizes.extraExtraLarge};
  }
`;

const SubTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.45;
  margin-top: -1.4rem;
  margin-bottom: 0;
  max-width: 57.5rem;
  text-align: center;
`;

const HeadingMain = styled.h2`
  font-size: ${props => props.theme.fontSizes.extraLarge};
  line-height: 1.45;
  margin-bottom: 2.8rem;
  text-align: center;
  font-weight: bold;
`;

const HeadingTwo = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 1.45;
  margin-bottom: ${props => props.theme.globalMargin};
  font-weight: bold;
`;

export { Title, HeadingMain, HeadingTwo, SubTitle };
