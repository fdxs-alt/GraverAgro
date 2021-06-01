import React from 'react'
import { ImageWrapper, RealisationImage, Wrapper } from './Realisations.styles'

const Realisations = () => {
  return (
    <Wrapper>
      <h2>Sprawdź jak realizowaliśmy nasze usługi</h2>
      <ImageWrapper>
        {Array(9)
          .fill(1)
          .map((_, i) => (
            <RealisationImage key={i} src="/onas.jpg" loading="lazy" />
          ))}
      </ImageWrapper>
    </Wrapper>
  )
}

export default Realisations
