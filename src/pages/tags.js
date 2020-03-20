import React from 'react'; 
import _ from 'lodash';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

// import '../style/normalize.css';
import '../style/_all.scss';

const TagIndex = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;
	const tags = data.allMarkdownRemark.distinct;

	return (
		<Layout title={siteTitle}>
			{console.log('props in tags page ............', data)}
			<SEO title={"Tags"} />
			<header className="tag-page-head">
				
				<h1 className="page-head-title">
					{/* Tags({tags.length}) */}
					Tags Page
				</h1>
			</header>
			<h1>HI this is the tags page</h1>

			<div className="tag-container">
				{tags.map((tag) => {
					return(
						<Link to={`/tags/${_.kebabCase(tag)}`} key={tag}>
							<div className="tag-item">#{tag}</div>
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