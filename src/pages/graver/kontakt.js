import React from 'react'
import { Layout, Navbar, About, Footer, Contact } from '@components'

const ContactPage = () => {
  return (
    <Layout title="Graver | Kontakt">
      <Navbar />
      <About name="Kontakt" />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default ContactPage
