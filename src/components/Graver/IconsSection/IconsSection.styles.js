import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lighterGray};
  padding: 80px 0;
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
  height: 280px;
  img {
    width: 60px;
    height: 60px;
  }
`

export const SmallTitle = styled.h5`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`

export const TextWrapper = styled.div`
  margin-left: 20px;
`

export const Text = styled.p`
  font-size: 20px;
  margin-top: 10px;
  text-align: justify;
  line-height: 1.4;
`
