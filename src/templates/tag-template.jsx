// this is the teamplate to build out page /tags/{tag}
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostCard from "../components/PostCard";

class TagPageTemplate extends React.Component {
	render() {
		const props = this.props;
		const siteTitle = this.props.data.site.siteMetadata.title;
		const posts = this.props.data.allMarkdownRemark.edges; 
		const tag = this.props.pageContext.tag;

		return (
			<Layout title={siteTitle}>
				{console.log("props in tags teamplate ........", props)}
				<SEO title="tags"/>
				<header className="tag-page-head">
					<h1 className="page-head-title">
						#{tag}
					</h1>
				</header>
				<div className="post-feed">
					{posts.map(({node}) => {
						return (
							<PostCard
							key={node.fields.slug}
							node={node}
							postClass={`post`}
							/>
						)
					})}
				</div>
			</Layout>
		)
	}
}

export default TagPageTemplate;

export const tagPageQuery = graphql`
	query PostByTag($tag: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }, sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					excerpt 
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						tags
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
		}
	}
`