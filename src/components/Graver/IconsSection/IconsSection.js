import React from 'react'
import {
  IconsWrapper,
  SingleIcon,
  SmallTitle,
  Text,
  TextWrapper,
  Wrapper,
} from './IconsSection.styles'

const IconsSection = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <SingleIcon>
          <img src="/tools.svg" alt="tools" />
          <TextWrapper>
            <SmallTitle>Transport</SmallTitle>
            <Text>
              Realizujemy transport krajowy maszyn budowlanych, rolniczych oraz
              każdego rodzaju materiałów. Posiadamy zezwolenie na wykonywanie
              zawodu przewoźnika drogowego oraz ubezpieczenie OC przewoźnika.
            </Text>
          </TextWrapper>
        </SingleIcon>
        <SingleIcon>
          <img src="/builder.svg" alt="tools" />
          <TextWrapper>
            <SmallTitle>Pomoc drogowa</SmallTitle>
            <Text>
              Oferujemy całodobową i kompleksową pomoc drogową. Działamy głównie
              na terenie województwa małopolskiego, a w razie potrzeb na terenie
              całego kraju. Odznaczamy się dużą mobilnością.
            </Text>
          </TextWrapper>
        </SingleIcon>
        <SingleIcon>
          <img src="/settings.svg" alt="tools" />
          <TextWrapper>
            <SmallTitle>Lorem</SmallTitle>
            <Text>
              Sprawdź podstronę usługi, aby dokładnie zapoznać się z profilem
              naszej firmy. Opis wykonywanych przez nas prac może pomóc w
              sprecyzowaniu Twojej potrzeby.
            </Text>
          </TextWrapper>
        </SingleIcon>
      </IconsWrapper>
    </Wrapper>
  )
}

export default IconsSection
