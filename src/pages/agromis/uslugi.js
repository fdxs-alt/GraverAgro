import React from 'react'
import { Layout, About, AgroNav, AgroFooter } from '@components'

const Services = () => {
  return (
    <Layout title="Agro | Usługi">
      <AgroNav />
      <About
        imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']}
        left
        name="USŁUGI"
      />
      <AgroFooter />
    </Layout>
  )
}

export default Services
