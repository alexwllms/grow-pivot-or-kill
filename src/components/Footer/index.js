import React from 'react';
import Link from 'gatsby-link';

import { ExternalLink, InternalLink } from '../Link/index';

const Footer = () => (
  <div
    style={{
      background: '#FBFBFB',
      minHeight: '239px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <h2
      style={{
        fontSize: '1.125rem',
        textAlign: 'center',
        marginBottom: '1.25rem',
      }}>
      Grow, Pivot or Kill
    </h2>
    <p style={{ fontSize: '0.75rem', textAlign: 'center', marginBottom: 0 }}>
      Designed and built by{' '}
      <InternalLink to="/about/">Alex Williams</InternalLink>, using{' '}
      <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
    </p>
  </div>
);

export default Footer;
