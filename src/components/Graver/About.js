import React from 'react'
import styled from 'styled-components'
import { useOffset, useLazyLoadImage } from '@utils'

const Container = styled.section`
  width: 100%;
  height: ${(props) => (props.isMain ? '800px' : '500px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  z-index: -1;
`

const AboutInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 80%;
  max-width: 1200px;
  margin: auto;
`

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
  color: white;
  max-width: 750px;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 42px;
    text-align: center;
  }
`

const SmallHeading = styled.h4`
  font-size: 32px;
  color: white;
  line-height: 1.3;
  margin-bottom: 20px;
  max-width: 600px;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 24px;
    text-align: center;
  }
`

const CheckUs = styled.button`
  all: unset;
  font-size: 26px;
  font-weight: 600;
  background-color: #9fa08b;
  padding: 16px 26px;
  background-color: ${(props) => props.theme.colors.red};
  margin-top: 50px;
  width: fit-content;
  min-width: 150px;
  min-height: 30px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin: 50px auto 0;
  }
`

const SideHeading = styled.h1`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  text-transform: uppercase;
  z-index: 10;
  text-align: center;
`

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
          transition: blur ? 'none' : 'filter 0.4s ease-out',
        }}
      />
      {isMain ? (
        <AboutInfo>
          <SmallHeading>
            It is a long established fact that a reader will be distracted by
            the readable content
          </SmallHeading>
          <Heading> Lorem Ipsum is simply dummy text of the printing </Heading>
          <CheckUs>Sprawdź ofertę</CheckUs>
        </AboutInfo>
      ) : (
        <SideHeading>{name}</SideHeading>
      )}
    </Container>
  )
}

export default About
