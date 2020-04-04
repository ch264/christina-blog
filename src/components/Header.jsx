import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../style/components/_header.scss'

const Header = ({ siteTitle }) => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
  <div className={` ${toggleNav ? `header-open` : ``}`}>
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
            <li className="nav-link" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-link" role="menuitem">
              <Link to={`/about`}>About</Link>
            </li>
            <li className="nav-link" role="menuitem">
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
            href="https://www.linkedin.com/in/christinahastenrath/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/etTinchen"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {/* <a
            href="https://stackoverflow.com/users/11683537/c-dev"
            title="StackOverflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            StackOverflow
          </a> */}
          {/* <a
            href="https://www.instagram.com/ta_teki/"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a> */}
          {/* <Link
            to={`/rss.xml`}
            title="RSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSS
          </Link> */}
          <a
            href="https://github.com/ch264/christina-blog"
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

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }
Header.defaultProps = {
  siteTitle: PropTypes.string
}
export default Header
