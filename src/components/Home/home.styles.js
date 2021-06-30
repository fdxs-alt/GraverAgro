import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Image = styled.div`
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    transition: background-color 400ms ease;
  }

  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`

export const GraverLogo = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 250px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  object-fit: contain;

  @media (max-height: 800px) {
    max-height: 100px;
  }
`

export const AgroLogo = styled.img`
  width: 30%;
  max-width: 450px;
  max-height: 250px;
  position: absolute;
  top: 50px;
  left: 50px;
  object-fit: contain;

  @media (max-height: 800px) {
    max-height: 200px;
  }
`

export const TextInfo = styled.div`
  padding: 20px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  box-shadow: 1px 1px 2px 3px rgba(20, 20, 20);
  color: white;
  background-color: rgba(20, 20, 20);
  z-index: 20;
`
