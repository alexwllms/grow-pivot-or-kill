import React from 'react';
import styled from 'styled-components';

import { ExternalLink, InternalLink } from '../Links/index';
import { remCalc } from '../../utils/units';

const Footer = () => (
  <FooterInner>
    <FooterTitle>Grow, Pivot or Kill</FooterTitle>

    <FooterText>
      Designed and built by{' '}
      <InternalLink to="/about/">Alex Williams</InternalLink>, using{' '}
      <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>.
    </FooterText>
  </FooterInner>
);

const FooterInner = styled.div`
  background: ${props => props.theme.colors.lightGray};
  min-height: ${remCalc(240)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  margin: ${remCalc(24)};
  text-align: center;
`;

const FooterText = styled.p`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  margin-bottom: 0;
`;

export default Footer;
