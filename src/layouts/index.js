import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../theme.js';
import Header from '../components/Header';
import Footer from '../components/Footer/index';
import Button from '../components/Button/index';
import { MessageBar } from '../components/MessageBar/index';
import { InternalLink } from '../components/Link/index';
import {
  StickyContainer,
  StickyBody,
} from '../components/StickyContainer/index';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StickyContainer>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

      <MessageBar />
      <Header />

      <StickyBody>{children()}</StickyBody>

      {/* <div style={{ textAlign: 'center' }}>
        <Button>Example Button</Button>
      </div> */}
      <Footer />
    </StickyContainer>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
