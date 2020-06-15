import React from 'react'; 
import _ from 'lodash';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

// import '../style/normalize.css';
import '../style/_all.scss';

const TagIndex = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;
	const tags = data.allMarkdownRemark.distinct;

	return (
		<Layout title={siteTitle}>
			<SEO title={"Tags"} keywords={tags}/>
			<header className="tag-page-head">
				
				<h1 className="page-head-title">
					{/* Tags({tags.length}) */}
					Tags Page
				</h1>
			</header>

			<div className="tag-container">
				{tags.map((tag) => {
					return(
						<Link className="tag-item" to={`/tags/${_.kebabCase(tag)}`} key={tag}>
							#{tag}
						</Link>
					)
				})}
			</div>
		</Layout>
	)
}


export const tagQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			distinct(field: frontmatter___tags )
		}
	}
`
export default TagIndex;