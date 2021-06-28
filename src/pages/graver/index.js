import React from 'react'
import {
  Layout,
  GraverNav,
  About,
  AboutInfo,
  GraverFooter,
  IconsSection,
  AboutSection,
} from '@components'

const Graver = () => {
  return (
    <Layout title="Graver">
      <GraverNav />
      <About isMain imgSrc={['/onas_low.jpg', '/onas.jpg']}>
        <AboutSection
          title="GRAVER"
          smallHeading="MASZYNY TO NASZA PASJA!"
          buttonTitle="Sprawdź ofertę"
          link="/graver/uslugi"
        />
      </About>
      <IconsSection />
      <AboutInfo />
      <GraverFooter />
    </Layout>
  )
}

export default Graver
