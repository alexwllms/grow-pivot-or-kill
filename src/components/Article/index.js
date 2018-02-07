import styled from 'styled-components';

const Article = styled.article`
  max-width: 600px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 100px;

  @media screen and (min-width: 48em) {
    margin-left: auto;
    margin-right: auto;
  }

  .gatsby-resp-image-wrapper {
    margin-top: 50px;
    margin-bottom: 70px;
    margin-left: -20px !important;
    margin-right: -20px !important;

    @media screen and (min-width: 48em) {
      margin-left: -40px !important;
      margin-right: -40px !important;
    }
  }

  blockquote {
    font-style: italic;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen and (min-width: 48em) {
      transition: all 0.5s ease;
      font-size: ${props => props.theme.fontSizes.medium};
      max-width: 600px;
      margin-left: -70px;
    }

    @media screen and (min-width: 54em) {
      transition: all 0.5s ease;
      margin-left: -120px;
    }
  }
`;

export default Article;
