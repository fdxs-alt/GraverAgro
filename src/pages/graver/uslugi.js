import React from 'react'
import { Layout, GraverNav, About, AboutServices, Footer } from '@components'

const Services = () => {
  return (
    <Layout title="Graver | Usługi">
      <GraverNav />
      <About name="Usługi" imgSrc={['/onas_low.jpg', '/onas.jpg']} />
      <AboutServices />
      <Footer />
    </Layout>
  )
}

export default Services
