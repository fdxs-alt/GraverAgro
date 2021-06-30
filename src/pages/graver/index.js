import React from 'react'
import {
  Layout,
  GraverNav,
  About,
  AboutGraver,
  GraverFooter,
  GraverInfo,
  AboutSection,
} from '@components'

const Graver = () => {
  return (
    <Layout title="Graver">
      <GraverNav />
      <About isMain imgSrc="/onas.jpg" imgSrcLow="/onas_low.jpg">
        <AboutSection
          title="GRAVER"
          smallHeading="MASZYNY TO NASZA PASJA!"
          buttonTitle="Sprawdź ofertę"
          link="/graver/uslugi"
        />
      </About>
      <GraverInfo />
      <AboutGraver />
      <GraverFooter />
    </Layout>
  )
}

export default Graver
