import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/Layout"
// import Img from "../components/image"
import SEO from "../components/Seo"
import PostCard from "../components/PostCard"

import "../style/normalize.css";
import "../style/_all.scss";


const BlogIndex = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  const { description } = data.site.siteMetadata;
  let postCounter = 0;
  
  return (
    <Layout>
      <SEO title="Home" keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`, `Algolia`]} />
      {/* <Bio /> */}
      
      {description && (
        <header className="page-head">
          <h1><span role="img" aria-label="unicorn">🦄</span></h1> 
          <h2 className="page-head-title">
            {description}

          </h2>
          <br></br>
          <p>
            Hello friend! My name is Christina and I am a scientist turned Developer. I have been working as a Software Engineer and teaching myself coding and debugging skills.
            <br/>
            <br/>
            Coding, I run into many challanges on a daily basis so I created this blog to give back to the community. Seriously, if you are just starting out, you are not alone. We are all here to help each other.
            <br/>
            <br/>
            Over time, through lots of trial and error, and learning from others, I have discovered strategies to implement and debug. I want to share them with you.
            <br/>
            <br/>
            Check out my Blog posts below and I would love to hear from you. Let me know what you think, ask me a question or let me know if there is a better way of solving something. Learning together is the best part of the job. 
            <br/>
            <br/>
            Happy Hacking! 
            </p>
        </header>
      )}
      
      <div className="post-feed">
        { posts.map(({ node }) => { 
          postCounter++
          const slug = node.fields.slug;
          return (
            <>
            <div key={Math.random()}>
              <PostCard 
                key={slug}
                count={postCounter}
                node={node}
                postClass={`post`} 
                />
            </div>
            </>
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

export default BlogIndex
