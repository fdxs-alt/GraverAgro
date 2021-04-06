import React from 'react'
import {
  Layout,
  Navbar,
  About,
  AboutInfo,
  Find,
  Footer,
  Realisations,
  IconsSection,
} from '../../components'

const Graver = () => {
  return (
    <Layout title="Graver">
      <Navbar />
      <About isMain />
      <IconsSection />
      <AboutInfo />
      <Find />
      <Realisations />
      <Footer />
    </Layout>
  )
}

export default Graver
