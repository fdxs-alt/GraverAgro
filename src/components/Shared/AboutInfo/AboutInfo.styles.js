import styled from 'styled-components'

export const Container = styled.section`
  margin: 50px auto;
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 1000px;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    min-height: unset;
    width: 90%;
  }
`

export const Info = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  margin: 70px 0 90px 0;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    font-size: 42px;
    margin: 30px 0;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 36px;
  }
`

export const Divider = styled.img`
  align-self: center;
  margin: 15px 0 100px 0;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`

export const AboutText = styled.div`
  max-width: 700px;
  width: 80%;
  padding: 30px;
  z-index: 10;
  box-shadow: 5px 4px 39px 0px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.colors.white};
  p {
    font-size: 18px;
    line-height: 1.6;
    text-align: justify;
    margin: 10px 0;
  }

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    max-width: unset;
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 20px;
    p {
      font-size: 18px;
      line-height: 1.4;
    }
  }
`

export const ExcavatorImage = styled.img`
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  top: 250px;
  left: 60%;
  width: 100%;
  max-width: 900px;
  z-index: -10;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    display: none;
  }
`
