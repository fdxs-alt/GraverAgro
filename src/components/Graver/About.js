import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useOffset } from '@utils'

const icons = ['/drill.png', '/excavator_1.png', '/excavator_2.png']

const Container = styled.section`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 700px;
    background-color: rgba(0, 0, 0, 0.65);
  }
`

const AboutImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  z-index: -1;
`

const AboutInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.5;
  color: white;
  text-align: center;
`

const SmallHeading = styled.h4`
  font-size: 24px;
  color: white;
  line-height: 1.3;
  margin-bottom: 30px;
  text-align: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 40px;
`

const About = () => {
  const offset = useOffset()

  return (
    <Container id="about">
      <AboutImage
        src="./onas.jpg"
        alt="O nas"
        style={{ transform: `translateY(${offset * 0.6}px)` }}
      />
      <AboutInfo>
        <IconContainer>
          {icons.map((icon, i) => (
            <Image
              src={icon}
              width="75px"
              height="75px"
              key={i}
              loading="lazy"
            />
          ))}
        </IconContainer>
        <SmallHeading>
          It is a long established fact that a reader will be distracted by the
          readable content
        </SmallHeading>
        <Heading> Lorem Ipsum is simply dummy text of the printing </Heading>
      </AboutInfo>
    </Container>
  )
}

export default About
