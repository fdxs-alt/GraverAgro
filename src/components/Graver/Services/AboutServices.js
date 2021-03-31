/* eslint-disable react/no-danger */
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const services = [
  {
    title: 'Budujemy <br/> i tworzymy',
    text:
      'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje...',
    icon: '/drill.png',
  },
  {
    title: 'Rozbieramy <br/> i wyburzamy',
    text:
      'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje...',
    icon: '/drill.png',
  },
  {
    title: 'Sprzedajemy <br/> i przewozimy',
    text:
      'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje...',
    icon: '/drill.png',
  },
  {
    title: 'Wycinamy <br/> i wspinamy się',
    text:
      'GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje...',
    icon: '/drill.png',
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
  h3 {
    max-width: 300px;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
  }

  p {
    max-width: 700px;
    font-size: 18px;
    line-height: 1.2;
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
