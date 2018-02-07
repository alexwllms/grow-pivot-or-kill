import styled from 'styled-components';
import React from 'react';

import { HeadingMain } from '../Headings/index';
import { remCalc } from '../../utils/units';
import { FormGroup, Label, Input } from '../Forms/index';
import Button from '../Buttons/index';
import Container from '../Container/index';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <NewsletterSignupInner>
        <Container>
          <HeadingMain>Fancy getting new articles every week?</HeadingMain>

          <NewsletterSignupForm>
            <FormGroup>
              <Label>Your email address sir, madam?</Label>
              <Input
                type="email"
                value={this.state.value}
                placeholder="dirk.gently@theholisticdetectiveagency.com"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Sign me up!</Button>
          </NewsletterSignupForm>
        </Container>
      </NewsletterSignupInner>
    );
  }
}

const NewsletterSignupInner = styled.section`
  padding-top: ${remCalc(100)};
  padding-bottom: ${remCalc(80)};
  background-color: ${props => props.theme.colors.blue};
  text-align: center;
`;

const NewsletterSignupForm = styled.form`
  max-width: ${remCalc(500)};
  margin: 0 auto;
`;

export default NewsletterSignup;
