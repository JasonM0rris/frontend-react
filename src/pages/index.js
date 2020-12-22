import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Help save the Environment while earning rewards</h1>
      <p>For people who want to drive change and make a difference with helping save the environment.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
