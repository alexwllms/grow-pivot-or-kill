import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero/index';
import Article from '../components/Article/index';
import { Title, SubTitle } from '../components/Headings/index';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />

      <div className="blog-post">
        <Hero>
          <Title>{post.frontmatter.title}</Title>
          <SubTitle>{post.frontmatter.date}</SubTitle>
        </Hero>

        <Article
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
