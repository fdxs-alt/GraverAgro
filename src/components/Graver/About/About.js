import React from 'react'
import { useOffset, useLazyLoadImage } from '@utils'
import {
  AboutImage,
  AboutInfo,
  CheckUs,
  Container,
  Heading,
  SideHeading,
  SmallHeading,
} from './About.styles'

const About = ({ isMain = false, name }) => {
  const offset = useOffset()
  const { src, blur } = useLazyLoadImage('/onas_low.jpg', '/onas.jpg')

  return (
    <Container id="about" isMain={isMain}>
      <AboutImage
        src={src}
        alt="O nas"
        style={{
          transform: `translateY(${offset * 0.35}px)`,
          filter: blur ? 'blur(20px)' : 'none',
          transition: blur ? 'none' : 'all 0.4s ease-out, ',
        }}
      />
      {isMain ? (
        <AboutInfo>
          <SmallHeading>MASZYNY TO NASZA PASJA!</SmallHeading>
          <Heading>GRAVER</Heading>
          <CheckUs>Sprawdź ofertę</CheckUs>
        </AboutInfo>
      ) : (
        <SideHeading>{name}</SideHeading>
      )}
    </Container>
  )
}

export default About
