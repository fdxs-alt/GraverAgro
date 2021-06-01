/* eslint-disable react/no-danger */
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const services = [
  {
    title: 'PRZYGOTOWUJEMY <br/> I KOPIEMY',
    text:
      'Fundament stanowi podstawę każdego budynku - prawidłowo wykonany to gwarancja trwałości i stabilności konstrukcji. Zlecone nam usługi wykonujemy z dokładną precyzją oraz starannością. Przygotowujemy teren pod budowę. Oferujemy również wykopy pod ogrodzenia, sieci wodociągowe, kanalizacyjne, elektryczne, szamba i oczyszczalnie biologiczne.',
    icon: '/drilling-rig.svg',
  },
  {
    title: 'NIWELUJEMY <br/> I RÓWNAMY',
    text:
      'Niwelacja terenu czyli jego wyrównanie – to jeden z pierwszych etapów budowlanych i ziemnych. Odpowiednie przygotowanie gruntu pod inwestycję budowlaną przyśpiesza a także ułatwia zrealizowanie zaplanowanego obiektu. Niwelacja terenu jest jedną z podstawowych usług świadczonych przez naszą firmę.',
    icon: '/drill.png',
  },
  {
    title: 'UTWARDZAMY <br/> I WZMACNIAMY',
    text: `Skutecznym sposobem wzmacniania gruntu, jest jego
      mechaniczne zagęszczenie właściwym sprzętem. Stabilnie utwardzone podłoże pozwala nam
      osiągnąć pożądaną nam nawierzchnię potrzebną do wykonywania dalszych prac
      budowlanych. Dzięki prawidłowemu zagęszczeniu podłoże staje się odporniejsze, gładsze
      oraz wytrzymalsze na odkształcenia.`,
    icon: '/mechanic-digger.svg',
  },
  {
    title: 'WYBURZAMY <br/> I ROZBIERAMY',
    text: `Nasza firma realizuje prace rozbiórkowe i wyburzeniowe
      koparkami kołowymi. Oferujemy swoim klientom kompleksową usługę począwszy od
      zaplanowania prac rozbiórkowych, aż po recykling gruzu i rekultywację terenu. Każda taka
      praca wymaga precyzji, doświadczenia oraz właściwego sprzętu.`,
    icon: '/firewall.svg',
  },
  {
    title: 'TRANPORTUJEMY <br/> I POMAGAMY',
    text: `Świadczymy usługi transportowe lawety na terenie całego
      kraju. Zajmujemy się przewozem maszyn budowlanych, rolniczych oraz materiałów.
      Realizujemy transport dla klientów indywidualnych, komisów, firm spedycyjnych i fabryk.
      Dysponujemy lawetą o ładowności 15 ton. Stuprocentowe zaangażowanie oraz
      profesjonalne podejście do każdego zlecenia, to cechy które charakteryzują naszą pracę.`,
    icon: '/shipment.svg',
  },
]

const Wrapper = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 100px auto;
`

const ServicesHeader = styled.h1`
  font-size: 56px;
  font-weight: 700;
  text-align: center;
`

const ServicesWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`

const SingleService = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 20px;
  background-color: ${(props) => (props.isEven ? '#C4C4C4' : 'white')};
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  h3 {
    width: 20%;
    max-width: 300px;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
  }

  p {
    width: 60%;
    max-width: 700px;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
    padding: 30px 0;

    p {
      width: 100%;
      max-width: unset;
      text-align: center;
      margin-top: 20px;
    }

    h3 {
      width: 100%;
      max-width: unset;
      text-align: center;
      margin-top: 20px;
    }
  }
`

const AboutServices = () => {
  return (
    <Wrapper>
      <ServicesHeader>Nasze usługi:</ServicesHeader>
      <ServicesWrapper>
        {services.map((service, i) => (
          <SingleService key={i} isEven={i % 2 === 0}>
            <Image width={70} height={70} src={service.icon} />
            <h3 dangerouslySetInnerHTML={{ __html: service.title }} />
            <p>{service.text}</p>
          </SingleService>
        ))}
      </ServicesWrapper>
    </Wrapper>
  )
}

export default AboutServices
