import React from 'react'
import { Layout, About, AgroNav, AgroFooter, Realisations } from '@components'
import request from '@api'
import { GALLERY_AGRO_QUERY } from '@graphql'

const Gallery = ({ photos }) => {
  return (
    <Layout title="Agromiś | Galeria" favicon="/agro-favicon">
      <AgroNav />
      <About
        imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']}
        left
        name="GALERIA"
      />
      <Realisations photos={photos} />
      <AgroFooter />
    </Layout>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const { galleryagro } = await request({ query: GALLERY_AGRO_QUERY })

  return { props: { photos: galleryagro } }
}
