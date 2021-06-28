import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  div {
    margin-top: 3px;
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`

const Loader = () => {
  return (
    <StyledLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  )
}

export default Loader
