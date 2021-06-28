import React from 'react'
import { Layout, GraverNav, About, Footer, Contact } from '@components'

const ContactPage = () => {
  return (
    <Layout title="Graver | Kontakt">
      <GraverNav />
      <About name="Kontakt" imgSrc={['/onas_low.jpg', '/onas.jpg']} />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default ContactPage
