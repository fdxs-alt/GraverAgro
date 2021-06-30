import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 50px;
  position: relative;
  iframe {
    width: 100%;
    outline: none;
    height: 500px;
  }

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    margin-top: 20px;
    iframe {
      width: 100%;
      outline: none;
      height: 400px;
    }
  }
`

export const Wrapper = styled.div`
  padding: 60px 0;
  width: 100%;
  background-color: #262626;
  display: flex;
  border-top: 12px solid ${(props) => props.theme.colors[props.color]};

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 45px 0;
  }
`
export const InnerWrapper = styled.ul`
  width: 95%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const NavItem = styled.li`
  text-align: center;
  list-style: none;
  font-weight: 600;
  font-size: 18px;
  transition: transform 300ms ease;
  cursor: pointer;
  color: white !important;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 15px;
  }
`

export const Divider = styled.div`
  width: 3px;
  background-color: white !important;
  color: white;
  height: 25px;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`

export const ContactInfo = styled.div`
  position: absolute;
  z-index: 10;
  top: 148px;
  min-width: 500px;
  right: 0;
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px;
  box-shadow: 5px 4px 39px 0px rgba(0, 0, 0, 0.08);
  p {
    padding: 5px;
    font-size: 21px;
  }
  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    p {
      font-size: 18px;
    }
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    position: static;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: unset;
    p {
      padding: 10px;
    }
  }
`

export const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 100px;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.laptop}) {
    font-size: 42px;
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 36px;
  }
`
