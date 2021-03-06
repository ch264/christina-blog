import React, { Component } from "react";
import { Link } from "gatsby"
import Tags from "./Tag"

export default props => {
	return (
	<article className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${props.postClass} ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`} 
	>
		{
			props.node.frontmatter.thumbnail ? (<ContentWithImage props={props}/>) : (<ContentNoImage props={props}/>)	
		}
	</article>
)}



class ContentWithImage extends Component {
	render() {
		const { props } = this.props;

		return (
			<>
				
			<div className="post-card-content">
				{/* tags */}
				<div className="post-card-tag">
					<Tags tags={props.node.frontmatter.tags} /> 
				</div>
				<Link to={props.node.fields.slug} className="post-card-link" >
				<div>
					<img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src} alt="Blog Post"/>
				</div>
			
				{/* title */}
				{/* <Link to={props.node.fields.slug} className="post-card-link" > */}
					<h2 className="post-card-title">
						{props.node.frontmatter.title || props.node.fields.slug}
					</h2>
				</Link>

				{/* date */}
				<div className="post-card-date">
					{props.node.frontmatter.date}
				</div>

				{/* body */}
				<div className="post-card-body">
					{props.node.frontmatter.description || props.node.excerpt}
				</div>

					{/* read more */}
					<div>
					<Link to={props.node.fields.slug} className="post-card-link post-card-readmore">
					{
						props.node.frontmatter.description || props.node.excerpt ? ("Read more") : (null)
					}
					</Link>
				</div>
				
			</div>
			</>
		);
	}
}

class ContentNoImage extends Component {
	render() {
		const { props } = this.props;
		return (
			<div className="post-card-content">

				{/* tags */}
				<div>
					<Tags tags={props.node.frontmatter.tags} /> 
				</div>

			{/* title */}
				<div>
					<Link to={props.node.fields.slug} className="post-card-link">
						<h2 className="post-card-title">{props.node.frontmatter.title || props.node.fields.slug}</h2>
					</Link>
				</div>

			{/* date */}
				<div className="post-card-date">
					{props.node.frontmatter.date}
				</div>

			{/* body */}
				<div className="post-card-body">
					{props.node.frontmatter.description || props.node.excerpt}
				</div>

			{/* read more */}
				<div>
					<Link to={props.node.fields.slug} className="post-card-link post-card-readmore">
					{
						props.node.frontmatter.description || props.node.excerpt ? ("Read more") : (null)
					}
					</Link>
				</div>
			</div> // post-card-content end
		);
	}
}