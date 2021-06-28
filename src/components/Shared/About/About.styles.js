import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: ${(props) => (props.isMain ? '800px' : '500px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  object-position: ${(props) => (props.left ? 'bottom' : 'center')};

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    object-position: ${(props) => (props.left ? 'left' : 'right')};
  }
`

export const AboutInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 80%;
  max-width: 1200px;
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
  color: white;
  max-width: 750px;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 42px;
    text-align: center;
  }
`

export const SmallHeading = styled.h4`
  font-size: 32px;
  color: white;
  line-height: 1.3;
  margin-bottom: 20px;
  max-width: 600px;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 24px;
    text-align: center;
  }
`

export const CheckUs = styled.button`
  all: unset;
  font-size: 26px;
  font-weight: 600;
  background-color: #9fa08b;
  padding: 16px 26px;
  background-color: ${({ theme, bg }) => theme.colors[bg]};
  margin-top: 50px;
  width: fit-content;
  min-width: 150px;
  min-height: 30px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin: 50px auto 0;
  }
`

export const SideHeading = styled.h1`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  text-transform: uppercase;
  z-index: 10;
  text-align: center;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 44px;
  }
`
