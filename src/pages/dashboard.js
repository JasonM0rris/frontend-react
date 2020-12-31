import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PageSection from "../components/sections/section"
import staticdata from "../../staticdata.json"
import Cell from "../components/common/cell"
import styled from "styled-components"

function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <PageSection />
      <SectionCaption>Leaderboard</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto 24px;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
`
