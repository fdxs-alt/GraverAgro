import React from 'react'
import { Layout, Navbar, About, AboutServices } from '@components'

const Services = () => {
  return (
    <Layout title="Graver | Usługi">
      <Navbar />
      <About name="Usługi" />
      <AboutServices />
    </Layout>
  )
}

export default Services
