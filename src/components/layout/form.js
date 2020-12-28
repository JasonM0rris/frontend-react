import React from "react"
import styled from "styled-components"

export default function Login(props) {
  return (
    <Wrapper>
      <Title>Form</Title>
      <hr />
      <FormWrapper>
        <form>
          Username: <br />
          <input className="form-control" type="text" name="username" />
          <br />
          Password:
          <br />
          <input className="form-control" type="text" name="password" />
          <br />
          <br />
          <input className="btn btn-info" type="submit" value="Submit" />
        </form>
      </FormWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    position: relative;
  }
`
const Title = styled.div``
const FormWrapper = styled.div``
