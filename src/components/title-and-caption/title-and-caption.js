import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-gtag'
import styles from "./title-and-caption.module.scss"

const TitleAndCaption = ({ data }) => {
  const { title, subtitle, website } = data

  return (
    <div className={styles.titleAndCaption}>
      <h1 className={styles.blogTitle}>
        <Link className={styles.titleLink} to={`/`}>
          {title}
        </Link>
      </h1>
      <div className={styles.blogCaption}>
        <p>
          {subtitle}
          <span className={styles.website}>
           Cisco Intern 2019 | Open-Source Contributor at Mozilla | 22 y.o 👩🏻‍💻 <OutboundLink href={website} target="_blank" rel="noopener noreferrer">You can follow me on Twitter. </OutboundLink>
          </span>
        </p>
      </div>
    </div>
  )
}

export default TitleAndCaption
