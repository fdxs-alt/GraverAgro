import React from 'react'
import {
  AboutText,
  Container,
  Divider,
  ExcavatorImage,
  Info,
} from './AboutInfo.styles'

const AboutInfo = ({ src, dividerSrc, text }) => {
  return (
    <Container>
      <Divider src={dividerSrc} alt="divider" loading="lazy" />
      <Info>O nas</Info>
      <AboutText>
        <p>{text}</p>
      </AboutText>
      <ExcavatorImage alt="machine" src={src} loading="lazy" />
    </Container>
  )
}

export default AboutInfo
