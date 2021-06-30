import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lighterGray};
  padding: 40px 0;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 20px 0;
  }
`
export const IconsWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const SingleIcon = styled.div`
  display: flex;
  width: 400px;
  margin: 30px;
  height: 200px;
  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    height: auto;
    min-height: unset;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SmallTitle = styled.h5`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 22px;
    text-align: center;
    margin-top: 20px;
  }
`

export const TextWrapper = styled.div`
  margin-left: 20px;
`

export const Text = styled.p`
  font-size: 20px;
  margin-top: 10px;
  text-align: justify;
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }
`
