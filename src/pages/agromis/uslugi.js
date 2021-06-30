import React from 'react'
import { Layout, About, AgroNav, AgroFooter, AgroServices } from '@components'

const Services = () => {
  return (
    <Layout
      title="Agromiś | Usługi"
      favicon="/agro-favicon"
      url="agromis/uslugi"
    >
      <AgroNav />
      <About
        imgSrc="/agro-main.jpg"
        imgSrcLow="/agro-main-low.jpg"
        left
        name="USŁUGI"
      />
      <AgroServices />
      <AgroFooter />
    </Layout>
  )
}

export default Services
