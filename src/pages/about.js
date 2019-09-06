import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="omforetaget" />
    <h1>Om företaget</h1>
    <p>Vi dricker öl och äter vulkangrillad korv!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
