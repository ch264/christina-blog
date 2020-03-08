/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions}) => {
	const { createPages } = actions;

	const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
	// const tagPage = path.resolve(`./src/templates/tag-page.jsx`);
	return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
		`
	).then(result => {
		if (result.errors) {
      throw result.errors
    }
		// create blog post
		const posts = result.data.allMarkdownRemark.edges;
		// const tagSet = new Set();

		createPages({
			path: posts.node.fields.slug,
			component: blogPost,
			context: {
				slug: posts.node.fields.slug,
			}
		})
	})
}


exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name:`slug`,
			node,
			value
		})
	}
}