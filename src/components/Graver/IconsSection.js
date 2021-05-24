import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lighterGray};
  padding: 80px 0;
`
const IconsWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const SingleIcon = styled.div`
  display: flex;
  width: 400px;
  margin: 30px;
  height: 280px;
  img {
    width: 60px;
    height: 60px;
  }
`

const SmallTitle = styled.h5`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`

const TextWrapper = styled.div`
  margin-left: 20px;
`

const Text = styled.p`
  font-size: 20px;
  margin-top: 10px;
  text-align: justify;
  line-height: 1.4;
`

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
