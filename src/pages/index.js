import React from "react"
import { graphql } from "gatsby"
import "../style/_all.scss"

import Layout from "../components/Layout"
// import Img from "../components/image"
import SEO from "../components/Seo"
import "../style/_all.scss"

const BlogIndex = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  const { siteTitel, description } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title={siteTitel} keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]} />
      {/* <Bio /> */}

      {description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {description}
          </h2>
        </header>
      )}

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
