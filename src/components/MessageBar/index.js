import React from 'react';
import styled from 'styled-components';

import { InternalLink } from '../Link/index';
import theme from '../../theme';

class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }

  handleClick = () => {
    this.setState({ status: 'is-hidden' });
  };

  render() {
    return (
      <MessageBarInner className={this.state.status}>
        Fancy a weekly update on Product and Product Management?{' '}
        <InternalLink to="/">Sign up here</InternalLink> and we’ll be sure to
        oblidge or&nbsp;
        <MessageBarCloseButton onClick={this.handleClick}>
          click here
        </MessageBarCloseButton>
        &nbsp;to hide this message.
      </MessageBarInner>
    );
  }
}

const MessageBarInner = styled.section`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  line-height: ${props => props.theme.lineHeight};
  background-color: ${props => props.theme.colors.lightGray};
  padding: 1.25rem;
  text-align: center;

  &.is-hidden {
    display: none;
  }
`;

const MessageBarCloseButton = styled.button`
  font-size: ${props => props.theme.fontSizes.extraSmall};
  line-height: ${props => props.theme.lineHeight};
  background-color: transparent;
  padding: 0;
  text-align: center;
  border: 0;
  text-decoration: underline;
`;

export default { MessageBar };
