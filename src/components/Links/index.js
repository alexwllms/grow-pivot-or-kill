import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const InternalLink = styled(Link)`
  color: #343434;
`;

const ExternalLink = styled.a`
  color: #343434;
`;

export { ExternalLink, InternalLink };
