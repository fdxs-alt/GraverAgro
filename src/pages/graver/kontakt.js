import React from 'react'
import { Layout, GraverNav, About, GraverFooter, Contact } from '@components'

const ContactPage = () => {
  return (
    <Layout title="Graver | Kontakt">
      <GraverNav />
      <About name="Kontakt" imgSrc={['/onas_low.jpg', '/onas.jpg']} />
      <Contact />
      <GraverFooter />
    </Layout>
  )
}

export default ContactPage
