import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Alex Cooper's Gatsby Site</h1>
    <p>Welcome to Alex Cooper's Gatsby site.</p>
    <p>View the <Link to="/umami">Umami Site</Link></p>
    <p>View the <Link to="/drupalcamp">DrupalCamp Presentation</Link></p>
    <p>View the <Link to="/ithacawebpeople">Ithaca Web People Presentation</Link></p>
    <p>View the <a href="https://github.com/JSmurf/drupalcamp-presentation">GitHub Repo</a></p>
  </Layout>
)

export default IndexPage
