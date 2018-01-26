import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer/index';
import Button from '../components/Button/index';

const TemplateWrapper = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div style={{ textAlign: 'center' }}>
      <Button>Example Button</Button>
    </div>
    <div
      style={{
        flexGrow: 1,
        margin: '0 auto',
        maxWidth: 700,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
