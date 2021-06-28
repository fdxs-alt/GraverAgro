import React from 'react'
import { Layout, About, AboutSection, AgroNav } from '@components'

const Agro = () => {
  return (
    <Layout title="Agro">
      <AgroNav />
      <About isMain imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']} left>
        <AboutSection
          title="AGROMIŚ"
          smallHeading="PROFESJONALIZM W KAŻDYM DETALU"
          buttonTitle="Sprawdź ofertę"
          link="/agromis/uslugi"
          bg="green"
        />
      </About>
    </Layout>
  )
}

export default Agro
