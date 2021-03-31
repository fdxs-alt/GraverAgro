import React from 'react'
import { Layout, Navbar, About, AboutServices, Footer } from '@components'

const Services = () => {
  return (
    <Layout title="Graver | Usługi">
      <Navbar />
      <About name="Usługi" />
      <AboutServices />
      <Footer />
    </Layout>
  )
}

export default Services
