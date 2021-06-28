import React from 'react'
import {
  Layout,
  GraverNav,
  About,
  AboutServices,
  GraverFooter,
} from '@components'

const Services = () => {
  return (
    <Layout title="Graver | Usługi">
      <GraverNav />
      <About name="Usługi" imgSrc={['/onas_low.jpg', '/onas.jpg']} />
      <AboutServices />
      <GraverFooter />
    </Layout>
  )
}

export default Services
