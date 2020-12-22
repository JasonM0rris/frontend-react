import React from "react"
import { Link } from "gatsby"

function HeroSection() {
  return (
    <div>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Help save the Environment while earning rewards</h1>
      <p>
        For people who want to drive change and make a difference with helping
        save the environment.
      </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </div>
  )
}

export default HeroSection
