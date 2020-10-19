import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import style from "./header.module.scss"
function Header() {
  return (
    <header>
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
          {/* TBA */}
          {/* <li>
            <Link
              to="/blog"
              className={style.link}
              activeClassName={style.activeNav}
            >
              Blog
            </Link>
          </li> */}
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
