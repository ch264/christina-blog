import React from "react"
// import { Link, graphql } from "gatsby"
import "../style/_all.scss"

import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/Seo"

const BlogIndex = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitel = data.site.siteMetadata.title
  return (
    <Layout>
      <SEO title={siteTitel} keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]} />
      <h1>Welcome to my Blog</h1>
      <div>
        {posts.map(({node}) => { 
          return(
            <a href={node.fields.slug}>{node.fields.slug}</a>
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
            thumbnail 
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
