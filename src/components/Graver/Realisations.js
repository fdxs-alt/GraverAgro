import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  margin: 100px auto;
  h2 {
    font-size: 52px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 150px;
    text-align: center;
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 400px 250px;
  gap: 20px;
`

const RealisationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const Realisations = () => {
  return (
    <Wrapper>
      <h2>Galeria zdjęć</h2>
      <ImageWrapper>
        {Array(10)
          .fill(1)
          .map((_, i) => (
            <RealisationImage key={i} src="/onas.jpg" loading="lazy" />
          ))}
      </ImageWrapper>
    </Wrapper>
  )
}

export default Realisations
