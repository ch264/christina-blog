import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to the about page</h1>
    <p>This page is under construction</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
