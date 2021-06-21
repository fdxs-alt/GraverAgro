/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react'
import Image from 'next/image'
import {
  ServicesHeader,
  ServicesWrapper,
  SingleService,
  Wrapper,
} from './AboutServices.styles'

const services = [
  {
    title: 'PRZYGOTOWUJEMY <br/> I KOPIEMY',
    text: 'Fundament stanowi podstawę każdego budynku - prawidłowo wykonany to gwarancja trwałości i stabilności konstrukcji. Zlecone nam usługi wykonujemy z dokładną precyzją oraz starannością. Przygotowujemy teren pod budowę. Oferujemy również wykopy pod ogrodzenia, sieci wodociągowe, kanalizacyjne, elektryczne, szamba i oczyszczalnie biologiczne.',
    icon: '/drilling-rig.svg',
  },
  {
    title: 'NIWELUJEMY <br/> I RÓWNAMY',
    text: 'Niwelacja terenu czyli jego wyrównanie – to jeden z pierwszych etapów budowlanych i ziemnych. Odpowiednie przygotowanie gruntu pod inwestycję budowlaną przyśpiesza a także ułatwia zrealizowanie zaplanowanego obiektu. Niwelacja terenu jest jedną z podstawowych usług świadczonych przez naszą firmę.',
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
