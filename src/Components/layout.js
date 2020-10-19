import React from "react"
import Footer from "./footer"
import Header from "./header"

import "../styles.scss"
import styles from "./layout.module.scss"
function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
