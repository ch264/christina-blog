import React, { Component } from "react";
import _ from "lodash"; //Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. Lodash’s modular methods are great for: Iterating arrays, objects, & strings, Manipulating &testing values, Creating composite functions
import { Link } from "gatsby";


class Tags extends Component {
	render() {
		const { tags } = this.props;
		return (
			<div className="post-card-tags">
				{
					tags && tags.map(tag => (
						<span key={tag}>
							{/* _. kebabCase Converts any string to kebab case. */}
							<Link to={`/tags/${_.kebabCase(tag)}`}  key={tag} className="post-card-tag-link">
							#{tag}
							</Link>
							{" "}
						</span>
					))
				}
			</div>
		)
	}
}

export default Tags;