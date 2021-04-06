import React from 'react'
import { Layout, Navbar, About, Footer, Realisations } from '@components'

const Gallery = () => {
  return (
    <Layout title="Graver | Galeria">
      <Navbar />
      <About name="Galeria" />
      <Realisations />
      <Footer />
    </Layout>
  )
}

export default Gallery
