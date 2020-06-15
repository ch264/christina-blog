
// import PropTypes from "prop-types"
import React from "react"
import '../style/components/_header.scss'
import { Link } from "gatsby"


const Header = () => (

<nav className="navbar navbar-light header">
  <Link className="header__logo" to="/">Code With Christina</Link>
  <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/tags">Tags</Link>
      </li>
    </ul>
</nav>
)

// class HeaderComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { 
//       isToggledOn: 'unset' 
//     };
//   }


//   // toggles the hamburger menu
//   toggleMenu = () => {
//     console.log('toggleMenu')
//     this.setState((state) => {
//       if (state.isToggledOn === 'unset') {
//         return ({
//           isToggledOn: true,
//         });
//       }
//       return ({
//         isToggledOn: !state.isToggledOn,
//       });
//     });
//   }

//   render() {
//     const {
//       isToggledOn
//     } = this.state;

//     return (
//       <nav className="header navbar navbar-expand-xl navbar-light">
//         {console.log('this state', this.state)}
//         {/* <div className="navbar-brand header__brand">
//           <Link
//             className="header__homelink"
//             to="/"
//           >
//             <span className="header__title">Code with Christina</span>
//           </Link>
//         </div> */}

//         {/* hamburger toggle */}
//         <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div
//           className={`header__right-links justify-content-end navbar-nav mr-auto navbar-collapse collapse show
//             ${(isToggledOn === true) ? 'animate-open' : ''}
//             ${(isToggledOn === false) ? 'animate-close' : ''}
//             ${isToggledOn === 'unset' ? 'closed' : ''}
//             `}
//           id="navbarSupportedContent"
//         >
//         <ul>
//         <li className="nav-item">
//             <Link to="/" className="nav-link">Home</Link>
//           </li>
//         </ul>
          
//         </div>
//           {/* <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/tags" className="nav-link">Tags</Link>
//             </li>
//           </ul> */}
//           {/* <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link br">Code With Christina</Link>
//             </li>
//           </ul> */}

//           {/* <ul className="navbar-nav">
//             <li className="nav-item">
//               <a
//               href="https://www.linkedin.com/in/christinahastenrath/"
//               title="LinkedIn"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="nav-link"
//               >            
//                 LinkedIn
//               </a>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">Twitter</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">GitHub</Link>
//             </li>
//           </ul> */}
          
//         {/* </div> */}
//       </nav>
//     );
//   }
// }

// const Header = () => (
//   <HeaderComponent />
// );


export default Header;





/* old header */
/************************************************************************************* */
// const Header = ({ siteTitle }) => {
//   const [toggleNav, setToggleNav] = React.useState(false);
//   return (
//   <div className={` ${toggleNav ? `header-open` : ``}`}>
//     <header className="header">
//       <div id="menu" className="header-container">
//         <a
//           className="nav-burger"
//           href={`#menu`}
//           onClick={() => setToggleNav(!toggleNav)}
//         >
//           <div
//             className="hamburger hamburger--collapse"
//             aria-label="Menu"
//             role="button"
//             aria-controls="navigation"
//           >
//             <div className="hamburger-box">
//               <div className="hamburger-inner" />
//             </div> 
//             <div className="hamburger-text-menu-text hidden">Menu</div>
//           </div>
//         </a>

//         <nav id="swup" className="header-left">
//           {/* jsx-a11y/no-noninteractive-element-to-interactive-role */}
//           <ul className="nav" role="menu">
//             <li className="nav-link" role="menuitem">
//               <Link to={`/`}>Home</Link>
//             </li>
//             <li className="nav-link" role="menuitem">
//               <Link to={`/about`}>About</Link>
//             </li>
//             <li className="nav-link" role="menuitem">
//               <Link to={`/tags`}>Tags</Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="header-center">
//           <Link className="header-logo"to={`/`}>
//             {siteTitle}
//             </Link>
//         </div>

//         <div className="header-right">
//           <div className="social-link">
//           <a
//             href="https://www.linkedin.com/in/christinahastenrath/"
//             title="LinkedIn"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/etTinchen"
//             title="Twitter"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Twitter
//           </a>
//           {/* <a
//             href="https://stackoverflow.com/users/11683537/c-dev"
//             title="StackOverflow"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             StackOverflow
//           </a> */}
//           {/* <a
//             href="https://www.instagram.com/ta_teki/"
//             title="Twitter"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Instagram
//           </a> */}
//           {/* <Link
//             to={`/rss.xml`}
//             title="RSS"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             RSS
//           </Link> */}
//           <a
//             href="https://github.com/ch264/christina-blog"
//             title="GitHub"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   </div>
// )};

// // Header.propTypes = {
// //   siteTitle: PropTypes.string,
// // }

// // Header.defaultProps = {
// //   siteTitle: ``,
// // }
// Header.defaultProps = {
//   siteTitle: PropTypes.string
// }
// export default Header
