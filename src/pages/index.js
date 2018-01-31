import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero/index';
import { HeadingMain } from '../components/Headings/index';
import { InternalLink } from '../components/Link/index';
import {
  BlogPostPreview,
  BlogPostPreviewHeading,
  BlogPostPreviewImg,
  BlogPostPreviewContent,
  BlogPostPreviewBody,
} from '../components/BlogPostPreview/index';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <main>
      <Hero>
        <HeadingMain>
          Evening ladies and gents! Welcome to my musings on building and
          managing better products.
        </HeadingMain>
        <InternalLink to="/">Read on good sir/madam</InternalLink>
      </Hero>

      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <BlogPostPreview className="blog-post-preview" key={post.id}>
                <BlogPostPreviewContent>
                  <BlogPostPreviewHeading>
                    <InternalLink to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </InternalLink>
                  </BlogPostPreviewHeading>
                  <p>{post.frontmatter.date}</p>
                  <BlogPostPreviewBody>{post.excerpt}</BlogPostPreviewBody>
                  <InternalLink to={post.frontmatter.path}>
                    Read more
                  </InternalLink>
                </BlogPostPreviewContent>

                <BlogPostPreviewImg
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1489269637500-aa0e75768394?ixlib=rb-0.3.5&s=60778ff3c1536b6401434252284e1427&auto=format&fit=crop&w=2525&q=80')",
                  }}
                  alt=""
                />
              </BlogPostPreview>
            );
          })}
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }

    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
