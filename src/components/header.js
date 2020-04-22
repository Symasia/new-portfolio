// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <nav class="bg-black p-4">
      <div class="container mx-auto ">
        <div class="text-white mr-6">
          <h1 class="my-0">{siteTitle}</h1>
        </div>

        <div></div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
