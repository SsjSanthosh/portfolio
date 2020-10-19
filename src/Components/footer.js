import React from "react"
import styles from "./footer.module.scss"
import { SOCIAL_LINKS } from "../utils/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        {SOCIAL_LINKS.map(item => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={item.icon}
                size="2x"
                className={styles.socialLink}
              />
            </a>
          )
        })}
      </div>
      <div className={styles.footerRight}>
        Made with love, powered by gatsby.
      </div>
    </footer>
  )
}
