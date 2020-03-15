import React from 'react'; 
import _ from 'lodash';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import '../style/normalize.css';
import '../style/_all.scss';

const TagIndex = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;
	const tags = data.allMarkdownRemark.distinct;

	return (
		<Layout title={siteTitle}>
			{console.log('props in tags', data)}
			<SEO title={"Tags"} />
			<div className="tag-container">
				{tags.map(tag => {
					return(
						<Link to={`/tags/${_.kebabCase(tag)}`} key={tag} style={{textDecoration: "none"}}>
							<div className="tag-item">#{tag}</div>
						</Link>
					)
				})}
			</div>
		</Layout>
	)
}

const tagQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			distinct(field: frontmatter___tags)
		}
	}
`

export default props => (
	<StaticQuery
		query={tagQuery}
		render={data => (
			<TagIndex props data={data} /> 
		)}
	/>
)