import React from 'react'
import { Layout, Navbar, About, AboutInfo } from '../../components'

const Graver = () => {
  return (
    <Layout title="Graver">
      <Navbar />
      <About isMain />
      <AboutInfo />
    </Layout>
  )
}

export default Graver
