import { Link } from "gatsby"
import gsap from "gsap"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const Header = ({ siteTitle }) => {
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleMenu = () => {
    const xBefore = CSSRulePlugin.getRule(".nav-toggle--close::before")
    const xAfter = CSSRulePlugin.getRule(".nav-toggle--close::after")
    if (isNavOpen) {
      //Close navbar
      gsap
        .timeline()
        .to(".nav-links ul", { opacity: 0, duration: 0.4 })
        .fromTo(".nav-links", { scaleY: 1, duration: 1.5 }, { scaleY: 0, zIndex: 0 })

      gsap
        .timeline()
        .to([xBefore, xAfter], {
          stagger: 0.2,
          duration: 0.3,
          cssRule: { scaleX: 0 },
        })
        .to(".nav-toggle--line", {
          transformOrigin: "left",
          scaleX: 1,
          stagger: 0.2,
        })
    } else {
      //Open navbar
      gsap
        .timeline()
        .fromTo(".nav-links", { scaleY: 0, duration: 1.5, zIndex: 4 }, { scaleY: 1 })
        .to(".nav-links ul", { opacity: 1, duration: 1 })

      gsap
        .timeline()
        .to(".nav-toggle--line", {
          transformOrigin: "left",
          scaleX: 0,
          stagger: 0.2,
        })
        .to([xBefore, xAfter], {
          stagger: 0.2,
          duration: 0.3,
          cssRule: { scaleX: 1 },
        })
    }
    setNavOpen(!isNavOpen)
  }

  useEffect(() => {
    gsap.set(".nav-links", { scaleY: 0, transformOrigin: "top" })
    gsap.set(CSSRulePlugin.getRule(".nav-toggle--close::before"), {
      cssRule: { scaleX: 0 },
    })
    gsap.set(CSSRulePlugin.getRule(".nav-toggle--close::after"), {
      cssRule: { scaleX: 0 },
    })
  }, [])

  return (
    <header>
      <nav>
        <div className="container lg:mx-auto overflow-hidden flex items-center justify-between">
          <div>
            <h1 className="site-name md:ml-5 ml-4">
              <span>{siteTitle}</span>
              <span>Dev</span>
            </h1>
          </div>

          <button className="nav-toggle lg:ml-0 md:mr-6 mr-6" onClick={toggleMenu}>
            <span className="nav-toggle--line"></span>
            <span className="nav-toggle--line"></span>
            <span className="nav-toggle--line"></span>
            <span className="nav-toggle--close"></span>
          </button>

          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home.</Link>
              </li>
              <li>
                <Link to="/">About.</Link>
              </li>
              <li>
                <Link to="/">Blog.</Link>
              </li>
              <li>
                <Link to="/">Contact.</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
