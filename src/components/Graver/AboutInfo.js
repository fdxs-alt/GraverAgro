import React from 'react'
import styled from 'styled-components'

const text =
  'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje i wystarczające doświadczenie potrzebne do realizacji powierzonych zadań. Zajmujemy się przygotowaniem terenu pod wszelkiego rodzaju prace podziemne i naziemne. Wykonujemy wykopy pod fundamenty, sieci wodociągowe, kanalizacyjne, elektryczne, czy też gazowe. Świadczymy usługi utwardzania powierzchni, wymiany gruntu, niwelacji terenu oraz korytowania pod parkingi i drogi. Podejmiemy się także prac wyburzeniowych.'

const text2 =
  'Ponadto nasza firma dysponuje autolawetą o ładowności 15T. Realizujemy transport krajowy maszyn budowlanych, rolniczych oraz każdego rodzaju materiałów. Posiadamy zezwolenie na wykonywanie zawodu przewoźnika drogowego oraz ubezpieczenie OC przewoźnika. Oferujemy całodobową i kompleksową pomoc drogową. Działamy głównie na terenie województwa małopolskiego, a w razie potrzeb na terenie całego kraju.  Nasze usługi świadczymy w sposób szybki, tani i bezpieczny.  Odznaczamy się dużą mobilnością. Dzięki własnemu transportowi realizujemy usługi na szerokim obszarze.'

const Container = styled.section`
  margin: 50px auto;
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Info = styled.h2`
  font-size: 56px;
  font-weight: 700;
  margin: 70px 0;
`

const Divider = styled.img`
  align-self: center;
  margin: 15px 0 100px 0;
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
`

const ExcavatorImage = styled.img`
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  top: 250px;
  left: 50%;
  width: 100%;
  max-width: 1400px;
  z-index: -10;
`

const AboutInfo = () => {
  return (
    <Container id="services">
      <Divider src="/divider.svg" alt="divider" />
      <Info>O nas</Info>
      <AboutText>
        <p>{text}</p>
        <p>{text2}</p>
      </AboutText>
      <ExcavatorImage alt="koparka" src="/excavator.png" />
      <Divider
        src="/divider.svg"
        alt="divider"
        style={{ marginTop: '250px' }}
      />
    </Container>
  )
}

export default AboutInfo
