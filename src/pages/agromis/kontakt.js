import React from 'react'
import { Layout, AgroNav, About, Contact, AgroFooter } from '@components'

const ContactPage = () => {
  return (
    <Layout title="Agromiś | Kontakt" favicon="/agro-favicon">
      <AgroNav />
      <About
        name="Kontakt"
        imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']}
        left
      />
      <Contact color="green" />
      <AgroFooter />
    </Layout>
  )
}

export default ContactPage
