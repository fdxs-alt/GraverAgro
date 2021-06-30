import React from 'react'
import { useOffset, useLazyLoadImage } from '@utils'
import { AboutImage, Container, SideHeading } from './About.styles'

const About = ({
  isMain = false,
  name,
  children,
  imgSrcLow,
  imgSrc,
  left = false,
}) => {
  const offset = useOffset()
  const { src, blur } = useLazyLoadImage(imgSrcLow, imgSrc)

  return (
    <Container id="about" isMain={isMain}>
      <AboutImage
        src={src}
        alt="O nas"
        left={left}
        style={{
          transform: `translateY(${offset * 0.35}px)`,
          filter: blur ? 'blur(20px)' : 'none',
          transition: blur ? 'none' : 'all 0.4s ease-out, ',
        }}
      />
      {isMain ? <>{children}</> : <SideHeading>{name}</SideHeading>}
    </Container>
  )
}

export default About
