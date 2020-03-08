import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark;
		const siteTitel = this.props.data.markdownRemark.title;
		return(
			<Layout title={siteTitel}>
			<SEO title={"hi"}/>
			<article>
				<h1>This is the first blog post Title: {post.frontmatter.title}</h1>
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
				thumbnail
			}
		}
	}
`