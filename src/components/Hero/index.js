import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 6.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  flex-shrink: 0;

  @media screen and (min-width: 48rem) {
    padding-top: 4.37rem;
  }
`;

export default Hero;
