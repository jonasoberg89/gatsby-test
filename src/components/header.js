import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: `10px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1 
      style={{ margin: `10px` }}
      >
        <Link 
        style={{
          color: `white`,
          fontSize:`20px`,
          textDecoration: `none`,
        }} 
        to="/about/">Om företaget</Link>
      </h1>
      <h1 
      style={{ margin: `10px` }}
      >
        <Link 
        style={{
          color: `white`,
          fontSize:`20px`,
          textDecoration: `none`,
        }} 
        to="/job/">Lediga jobb</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
