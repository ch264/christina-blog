import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (

	<footer className="site-foot">
			&copy; {new Date().getFullYear()} <Link to={`/`}>Christina's Blog</Link> &mdash;
			Built with{" "}
		<a
			href="https://gatsbyjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Gatsby
		</a>
	</footer>
)

export default Footer;