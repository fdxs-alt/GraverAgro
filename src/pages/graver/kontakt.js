import React from 'react'
import { Layout, Navbar, About, Footer, Contact } from '@components'

const ContactPage = () => {
  return (
    <Layout title="Graver | Kontakt">
      <Navbar />
      <About name="Kontakt" />
      <Contact />
      <Footer noMap />
    </Layout>
  )
}

export default ContactPage
