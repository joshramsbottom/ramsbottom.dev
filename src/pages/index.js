import React from "react"
import Layout from "../components/layout"
import Emoji from "../components/emoji"

export default () => (
  <Layout>
    <h1>Hi, I'm Josh <Emoji symbol="👋"/></h1>
    <h2>I love solving problems and playing games.</h2>
    <p>
      Currently building cool products with the great people at <a href="https://electrum.co.za">Electrum Payments</a> using React and Java.
      When I'm not coding you'll find me playing games with friends, watching esports, or riding my bike.
    </p>
  </Layout>
)
