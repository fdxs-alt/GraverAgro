import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lighterGray};
  padding: 120px 0;
`
const IconsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  place-items: center;
`
const SingleIcon = styled.div`
  display: flex;

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
            <SmallTitle>Lorem</SmallTitle>
            <Text>
              Sprawdź podstronę usługi, aby dokładnie zapoznać się z profilem
              naszej firmy. Opis wykonywanych przez nas prac może pomóc w
              sprecyzowaniu Twojej potrzeby.
            </Text>
          </TextWrapper>
        </SingleIcon>
        <SingleIcon>
          <img src="/builder.svg" alt="tools" />
          <TextWrapper>
            <SmallTitle>Lorem</SmallTitle>
            <Text>
              Sprawdź podstronę usługi, aby dokładnie zapoznać się z profilem
              naszej firmy. Opis wykonywanych przez nas prac może pomóc w
              sprecyzowaniu Twojej potrzeby.
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
