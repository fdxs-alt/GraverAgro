import React from 'react'
import {
  Layout,
  GraverNav,
  About,
  GraverServices,
  GraverFooter,
} from '@components'

const Services = () => {
  return (
    <Layout title="Graver | Usługi">
      <GraverNav />
      <About name="Usługi" imgSrc="/onas.jpg" imgSrcLow="/onas_low.jpg" />
      <GraverServices />
      <GraverFooter />
    </Layout>
  )
}

export default Services
