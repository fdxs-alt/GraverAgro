import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  margin: 100px auto;
  h2 {
    font-size: 34px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 100px;
    text-align: center;
  }
`

export const ImageWrapper = styled.div`
  margin: auto;
  width: 80%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 350px 350px 350px;
  grid-auto-rows: 300px;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.sizes.phone}) {
    grid-template-columns: 1fr;
  }
`

export const RealisationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
