import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from "../components/layout/form"
import Header from "../components/layout/header"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/hero-section"
import NotFoundPage from "./404"

function IndexPage() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Header} />
      <Route path="/404" component={NotFoundPage} />
      <SEO title="Home" />
      <HeroSection />
    </BrowserRouter>
  )
}

export default IndexPage
