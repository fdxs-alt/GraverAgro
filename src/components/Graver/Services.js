import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const items = [
  { text: 'Usługi ziemne' },
  { text: 'Transport maszyn i materiałów' },
  { text: 'Pomoc drogowa' },
]

const Container = styled.section`
  margin: 50px auto;
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ServiceItem = styled.div`
  width: 350px;
  margin: 25px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 4px;
`

const Inner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;

  p {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.5px;
    max-width: 250px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};

    p {
      color: white;
    }
  }
`

const Info = styled.h2`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 70px;
`

const Divider = styled.img`
  align-self: center;
  margin: 15px 0 100px 0;
`

const Services = () => {
  return (
    <Container id="services">
      <Divider src="/divider.svg" alt="divider" />
      <Info>Many desktop publishing packages and web page</Info>

      <ServicesContainer>
        {items.map((item, i) => (
          <ServiceItem key={item.text}>
            <Image
              src="/excavator_3.jpg"
              width="350px"
              height="360px"
              objectFit="cover"
            />
            <Inner>
              <p>{item.text}</p>
            </Inner>
          </ServiceItem>
        ))}
      </ServicesContainer>
    </Container>
  )
}

export default Services
