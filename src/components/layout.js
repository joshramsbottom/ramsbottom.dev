import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

import "sanitize.css"
import "./layout.css"

// See https://github.com/FortAwesome/react-fontawesome/issues/234
config.autoAddCss = false

const Layout = ({ children }) => (
  <div className="container">
    <div>
      <main>{children}</main>
      <footer>
        <a href="https://github.com/joshramsbottom">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://twitter.com/followgryph">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </footer>
    </div>
  </div>
)

export default Layout
