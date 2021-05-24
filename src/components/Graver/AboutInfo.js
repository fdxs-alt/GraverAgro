import React from 'react'
import styled from 'styled-components'

const text =
  'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje i wystarczające doświadczenie potrzebne do realizacji powierzonych zadań. Zajmujemy się przygotowaniem terenu pod wszelkiego rodzaju prace podziemne i naziemne. Wykonujemy wykopy pod fundamenty, sieci wodociągowe, kanalizacyjne, elektryczne, czy też gazowe. Świadczymy usługi utwardzania powierzchni, wymiany gruntu, niwelacji terenu oraz korytowania pod parkingi i drogi. Podejmiemy się także prac wyburzeniowych. Nasze usługi świadczymy w sposób szybki, tani i bezpieczny.'

const Container = styled.section`
  margin: 50px auto;
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 1000px;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    min-height: unset;
  }
`

const Info = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  margin: 70px 0 90px 0;
  text-transform: uppercase;
`

const Divider = styled.img`
  align-self: center;
  margin: 15px 0 100px 0;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`

const AboutText = styled.div`
  max-width: 700px;
  width: 80%;
  padding: 30px;
  z-index: 10;
  box-shadow: 5px 4px 39px 0px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.colors.white};
  p {
    font-size: 20px;
    line-height: 1.5;
    text-align: justify;
    margin: 10px 0;
  }

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    max-width: unset;
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    p {
      font-size: 18px;
      line-height: 1.4;
    }
  }
`

const ExcavatorImage = styled.img`
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  top: 250px;
  left: 60%;
  width: 100%;
  max-width: 1000px;
  z-index: -10;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    display: none;
  }
`

const AboutInfo = () => {
  return (
    <Container id="services">
      <Divider src="/divider.svg" alt="divider" />
      <Info>O nas</Info>
      <AboutText>
        <p>{text}</p>
      </AboutText>
      <ExcavatorImage alt="koparka" src="/excavator.png" loading="lazy" />
    </Container>
  )
}

export default AboutInfo
