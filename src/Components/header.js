import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import style from "./header.module.scss"
function Header() {
  const metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <header>
      {/* <Link to="/" className={style.link}>
        <h1 className={style.brand}>{metadata.site.siteMetadata.title}</h1>
      </Link> */}
      <nav>
        <ul className={style.navList}>
          <li>
            <Link
              to="/"
              className={style.link}
              activeClassName={style.activeNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={style.link}
              activeClassName={style.activeNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={style.link}
              activeClassName={style.activeNav}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={style.link}
              activeClassName={style.activeNav}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={style.link}
              activeClassName={style.activeNav}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
