import React from 'react'
import {
  Layout,
  Navbar,
  About,
  AboutInfo,
  Find,
  Footer,
} from '../../components'

const Graver = () => {
  return (
    <Layout title="Graver">
      <Navbar />
      <About isMain />
      <AboutInfo />
      <Find />
      <Footer />
    </Layout>
  )
}

export default Graver
