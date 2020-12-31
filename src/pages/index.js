import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/hero-section"
import staticdata from "../../staticdata.json"
import PageSection from "../components/sections/section"
import Footer from "../components/layout/footer"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <PageSection title="How it works" text="Step1, Step2, Step3" />
    </Layout>
  )
}

export default IndexPage
