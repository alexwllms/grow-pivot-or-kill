import styled from 'styled-components';

const Container = styled.div`
  max-width: 87.5em; // 1400px
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.globalMargin};
  padding-right: ${props => props.theme.globalMargin};

  @media screen and (min-width: 37.5em) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Container;
