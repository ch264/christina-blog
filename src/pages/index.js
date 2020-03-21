import React from "react"
import { graphql } from "gatsby"
import "../style/_all.scss"

import Layout from "../components/Layout"
// import Img from "../components/image"
import SEO from "../components/SEO"
import PostCard from "../components/PostCard"

import "../style/normalize.css"
import "../style/_all.scss"

const BlogIndex = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  const { description } = data.site.siteMetadata;
  let postCounter = 0;
  
  return (
    <Layout>
      <SEO title="site-Title {siteTitle}" keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]} />
      {/* <Bio /> */}

      {description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {description}
          </h2>
        </header>
      )}

      <div className="post-feed">
        { posts.map(({ node }) => { 
          postCounter++
          const slug = node.fields.slug;
          return (
            <div>
              <PostCard 
                key={slug}
                count={postCounter}
                node={node}
                postClass={`post`} 
                />
            </div>
            )
          })
        }
        </div>
    </Layout>
  )
};

// export query for BlogIndex to see it
export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
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


// query {
//   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//     edges {
//       node {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           description
//           tags
//           thumbnail 
//         }
//       }
//     }
//   }
// }
export default BlogIndex
