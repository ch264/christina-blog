import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import PostCArd from "../components/PostCard";

class TagPageTemplate extends React.Component {
	render() {
		const props = this.props;
		

		return (
			<Layout >{console.log("tag template props", props)}
				<h1>TAg</h1>
			</Layout>
		)
	}
}