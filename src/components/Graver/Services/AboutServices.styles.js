import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 100px auto;
`

export const ServicesHeader = styled.h1`
  font-size: 56px;
  font-weight: 700;
  text-align: center;
`

export const ServicesWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`

export const SingleService = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 20px;
  background-color: ${(props) => (props.isEven ? '#C4C4C4' : 'white')};
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  h3 {
    width: 20%;
    max-width: 300px;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
  }

  p {
    width: 60%;
    max-width: 700px;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
    padding: 30px 0;

    p {
      width: 100%;
      max-width: unset;
      text-align: center;
      margin-top: 20px;
    }

    h3 {
      width: 100%;
      max-width: unset;
      text-align: center;
      margin-top: 20px;
    }
  }
`
