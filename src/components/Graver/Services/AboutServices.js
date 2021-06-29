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

const AboutServices = ({ services }) => {
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
