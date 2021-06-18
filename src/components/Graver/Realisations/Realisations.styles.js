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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.sizes.phone}) {
    grid-template-columns: 1fr;
  }
`
