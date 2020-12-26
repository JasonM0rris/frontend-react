import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption, Caption2 } from "../styles/TextStyles"

export default function SecondaryButton(props) {
  return (
    <Link to="/page-2">
      <Wrapper>
        <Title>{props.title || "Secondary Btn"}</Title>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  height: 48px;
  padding: 10px 20px;
  text-align: center;
  min-width: 80px;
  max-width: 180px;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  border-radius: 24px;
  border: 2px solid #fff;
`

const Title = styled(Caption2)`
  color: white;
`
