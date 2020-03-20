const path = require(`path`)
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions}) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/Blog-post.jsx`);
	const tagPage = path.resolve(`./src/templates/tag-template.jsx`);
	
	return graphql(`
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
								tags
              }
            }
          }
        }
      }
		`).then(result => {
		if (result.errors) {
      throw result.errors
    }
		// create blog post
		const posts = result.data.allMarkdownRemark.edges;
		// create tags
		const tagSet = new Set();


		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node; 

			// Get tags for tags pages
			if (post.node.frontmatter.tags) {
				post.node.frontmatter.tags.forEach(tag => {
					tagSet.add(tag);
				});
			}

			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next
				}
			})
		})

		// Create Tag pages
		tagSet.forEach(tag => {
			createPage({
				path: `/tags/${_.kebabCase(tag)}/`,
				component: tagPage,
				context: {
					tag
				}
			});
		});

		return null;
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