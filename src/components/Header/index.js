import React from 'react';
import styled from 'styled-components';

import { remCalc } from '../../utils/units';
import Container from '../Container/index';
import { InternalLink } from '../Links/index';

const Header = () => (
  <HeaderInner>
    <Container>
      <PageTitle>
        <InternalLink to="/">Grow, Pivot or Kill</InternalLink>
      </PageTitle>
    </Container>
  </HeaderInner>
);

const HeaderInner = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin-bottom: ${remCalc(24)};
  padding: ${remCalc(40)} ${remCalc(18)} ${remCalc(24)} ${remCalc(18)};
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.medium};
  margin: 0;
  text-align: center;

  a {
    text-decoration: none;
  }
`;

export default Header;
