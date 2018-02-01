import styled from 'styled-components';
import theme from '../../theme';

const BlogPostPreview = styled.article`
  background-color: ${props => props.theme.colors.blue};
  display: flex;
  flex-direction: column-reverse;

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.white};

    @media screen and (min-width: 48rem) {
      flex-direction: row-reverse;
      text-align: right;

      > div {
        align-items: flex-end;
      }
    }
  }

  &:nth-of-type(3n) {
    background-color: ${props => props.theme.colors.yellow};
  }

  @media screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
  }
`;

const BlogPostPreviewHeading = styled.h2`
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  line-height: 1.2;

  a {
    text-decoration: none;
  }
`;

const BlogPostPreviewImg = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: ${props => props.theme.globalMargin};
  min-height: 15rem;
  margin-bottom: 0;

  @media screen and (min-width: 48rem) {
    min-width: 40%;
    min-height: 30rem;
  }
`;

const BlogPostPreviewContent = styled.div`
  flex-grow: 1;
  padding: 3rem ${props => props.theme.globalMargin};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 48rem) {
    padding: 6.25rem;
  }
`;

const BlogPostPreviewBody = styled.p`
  max-width: 31.25rem;
`;

export {
  BlogPostPreview,
  BlogPostPreviewHeading,
  BlogPostPreviewImg,
  BlogPostPreviewContent,
  BlogPostPreviewBody,
};
