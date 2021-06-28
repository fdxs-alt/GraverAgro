import React from 'react'
import { Layout, About, AgroNav, AgroFooter } from '@components'
import request from '@api'
import { GALLERY_QUERY } from '@graphql'

const Gallery = ({ photos }) => {
  return (
    <Layout title="Agro | Galeria">
      <AgroNav />
      <About
        imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']}
        left
        name="GALERIA"
      />
      <AgroFooter />
    </Layout>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const { gallery } = await request({ query: GALLERY_QUERY })
  return { props: { photos: gallery } }
}
