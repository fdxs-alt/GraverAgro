import React from 'react'
import {
  Layout,
  GraverNav,
  About,
  GraverFooter,
  Realisations,
} from '@components'
import request from '@api'
import { GALLERY_QUERY } from '@graphql'

const Gallery = ({ photos }) => {
  return (
    <Layout title="Graver | Galeria">
      <GraverNav />
      <About name="Galeria" imgSrc={['/onas_low.jpg', '/onas.jpg']} />
      <Realisations photos={photos} />
      <GraverFooter />
    </Layout>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const { gallery } = await request({ query: GALLERY_QUERY })
  return { props: { photos: gallery } }
}
