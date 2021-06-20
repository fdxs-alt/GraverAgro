import React from 'react'
import {
  Layout,
  Navbar,
  About,
  AboutInfo,
  Footer,
  IconsSection,
} from '@components'

const Graver = () => {
  return (
    <Layout title="Graver">
      <Navbar />
      <About isMain />
      <IconsSection />
      <AboutInfo />
      <Footer />
    </Layout>
  )
}

export default Graver
