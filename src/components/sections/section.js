import React from "react"
import styled from "styled-components"

export default function PageSection(props) {
  return (
    <SectionGroup>
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

const SectionGroup = styled.div`
  margin: 0px 0px 300px;
  height: 400px;
  background: url("/images/waves/hero-wave01.svg");
  background-size: cover;
  display: grid;
  grid-template-rows: 200px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 200px;
  }
`
const SectionLogo = styled.img``

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  font-size: 60px;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p``
