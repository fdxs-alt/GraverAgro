import React from 'react'
import { Layout, Navbar, About, Footer, Realisations } from '@components'
import request from '@api'
import { GALLERY_QUERY } from '@graphql'

const Gallery = ({ photos }) => {
  return (
    <Layout title="Graver | Galeria">
      <Navbar />
      <About name="Galeria" />
      <Realisations photos={photos} />
      <Footer />
    </Layout>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const { gallery } = await request({ query: GALLERY_QUERY })
  return { props: { photos: gallery } }
}
