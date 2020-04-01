import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to the about page</h1>
    <p>This page is under construction</p>
    <div className="row">
      <div className="col-12">
        <a className="button" href="https://github.com/ch264/christina-blog">Check out my GitHub</a>
        
      </div>
      <div className="col-12">
        <Link className="button" to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
