import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import NotFound from "../images/notfound.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>whoops, you just hit a route that doesn&#39;t exist... You can tell me what you were looking for 
      <a href="https://twitter.com/etTinchen" className="tag-item">here</a></p>
    <img src={NotFound} alt="keyboard with pens, notepad, specs"/>
  </Layout>
)

export default NotFoundPage
