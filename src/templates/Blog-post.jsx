import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Img from "gatsby-image"


class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark;
		const siteTitel = this.props.data.markdownRemark.title;
		const { title, thumbnail, description } = post.frontmatter;


		return (
			<Layout title={siteTitel}>
				<SEO 
					title={"hi"} 
					description={post.frontmatter.description || post.excerpt}
				/>
				<article
					className={`post-content ${thumbnail || `no-image`}`}
				>
					<header className="post-content-header">
            <h1 className="post-content-title">{title}</h1>
          </header>

					{description && (
            <p className="post-content-excerpt">{description}</p>
          )}

					{thumbnail && (
            <div className="post-content-image">
              <Img
								className="kg-image"
                alt={title}
								fluid={thumbnail.childImageSharp.fluid}
              />
            </div>
          )}

					<div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

					<footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
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