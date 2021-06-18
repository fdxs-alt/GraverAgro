import React from 'react'
import { Image } from 'react-datocms'
import { ImageWrapper, Wrapper } from './Realisations.styles'

const Realisations = ({ photos }) => {
  return (
    <Wrapper>
      <h2>Sprawdź jak realizowaliśmy nasze usługi</h2>
      <ImageWrapper>
        {photos.zdjecie.map((photo) => (
          <Image data={photo.responsiveImage} key={photo.id} alt={photo.alt} />
        ))}
      </ImageWrapper>
    </Wrapper>
  )
}

export default Realisations
