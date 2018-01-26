import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      background: '#FFF',
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '2.5rem 1.0875rem 1.45rem 1.0875rem',
      }}>
      <h1 style={{ fontSize: '1.125rem', margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: '#363636',
            textDecoration: 'none',
          }}>
          Grow, Pivot or Kill
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
