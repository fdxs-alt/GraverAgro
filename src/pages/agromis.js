import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  h1 {
    font-size: 44px;
    text-align: center;
    font-weight: 600;
  }

  a {
    font-size: 30px;
    color: red;
    font-weight: 600;
    margin-top: 30px;
    text-align: center;
  }
`

const Agro = () => {
  return (
    <Wrapper>
      <h1>Strona w budowie</h1>
      <Link href="/">Powrót</Link>
    </Wrapper>
  )
}

export default Agro
