import React from 'react'
import {
  Layout,
  About,
  AboutSection,
  AgroNav,
  AgroFooter,
  AboutAgro,
  AgroInfo,
} from '@components'

const Agro = () => {
  return (
    <Layout title="Agromiś" favicon="/agro-favicon" url="agromis/">
      <AgroNav />
      <About isMain imgSrc="/agro-main.jpg" imgSrcLow="/agro-main-low.jpg" left>
        <AboutSection
          title="AGROMIŚ"
          smallHeading="PROFESJONALIZM W KAŻDYM DETALU"
          buttonTitle="Sprawdź ofertę"
          link="/agromis/uslugi"
          bg="green"
        />
      </About>
      <AgroInfo />
      <AboutAgro />
      <AgroFooter />
    </Layout>
  )
}

export default Agro
