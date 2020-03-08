import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../style/components/_header.scss'

const Header = ({ siteTitle }) => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
  <div className={`site-wrapper ${toggleNav ? `header-open` : ``}`}>
    <header className="header">
      <div id="menu" className="header-container">
        <a
          className="nav-burger"
          href={`#menu`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div> 
            <div className="hamburger-text-menu-text hidden">Menu</div>
          </div>
        </a>

        <nav id="swup" className="header-left">
          <ul className="nav" role="menu">
            <li className="nav-home" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-about" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="nav-tags" role="menuitem">
              <Link to={`/tags`}>Tags</Link>
            </li>
          </ul>
        </nav>

        <div className="header-center">
          <Link className="header-logo"to={`/`}>
            {siteTitle}
            </Link>
        </div>

        <div className="header-right">
          <div className="social-link">
          <a
            href="https://www.facebook.com"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <Link
            to={`/rss.xml`}
            title="RSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSS
          </Link>
          <a
            href="https://github.com/jooplaan/gatsby-london-night-and-day"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
