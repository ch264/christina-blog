import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Img from "gatsby-image"


class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark;
		const siteTitel = this.props.data.markdownRemark.title;
		const title = post.frontmatter.title

		return (
			<Layout title={siteTitel}>
				<SEO title={"hi"}/>
				<article>
					<h1>This is the first blog post Title: {title}</h1>

					{post.frontmatter.description && (
            <p className="post-content-excerpt">{post.frontmatter.description}</p>
          )}

					{post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                alt={post.frontmatter.title}
								fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
              />
            </div>
          )}

					<div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />


				</article>
			</Layout>
		)
	}
}

export default BlogPostTemplate;

export const blogPageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug} }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				thumbnail {
					childImageSharp {
						fluid(maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`