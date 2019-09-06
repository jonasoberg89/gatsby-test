import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JobPage = () => (
  <Layout>
    <SEO title="Lediga jobb" />
    <h1>Lediga Jobb!!</h1>
    <p>we need you!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JobPage
