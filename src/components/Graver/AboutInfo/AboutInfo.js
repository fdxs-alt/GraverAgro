import React from 'react'
import {
  AboutText,
  Container,
  Divider,
  ExcavatorImage,
  Info,
} from './AboutInfo.styles'

const text =
  'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje i wystarczające doświadczenie potrzebne do realizacji powierzonych zadań. Zajmujemy się przygotowaniem terenu pod wszelkiego rodzaju prace podziemne i naziemne. Wykonujemy wykopy pod fundamenty, sieci wodociągowe, kanalizacyjne, elektryczne, czy też gazowe. Świadczymy usługi utwardzania powierzchni, wymiany gruntu, niwelacji terenu oraz korytowania pod parkingi i drogi. Podejmiemy się także prac wyburzeniowych. Nasze usługi świadczymy w sposób szybki, tani i bezpieczny.'

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
