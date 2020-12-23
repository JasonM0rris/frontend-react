import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Do your <br />
            bit for a greener globe, while earning rewards
          </Title>
          <Description>
            For people who want to drive change and make a difference with
            helping save the environment.
          </Description>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`

const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`
