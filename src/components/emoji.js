import React from "react"

const Emoji = props => (
  <span className="emoji" role="img" aria-hidden="true">
    {props.symbol}
  </span>
)

export default Emoji
