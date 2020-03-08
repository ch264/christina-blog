import React from "react"
// import { Link, graphql } from "gatsby"
import "../style/_all.scss"

import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/Seo"

const BlogIndex = ({data}) => {
  // console.log(data)
  const posts = data.allMarkdownRemark.edges;
  console.log(data.allMarkdownRemark)
  return (
    <Layout>
      <SEO title="Home" keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]} />
      <h1>Welcome to my Blog</h1>
    </Layout>
  )
};


const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
