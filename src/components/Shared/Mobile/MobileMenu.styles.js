import styled from 'styled-components'

export const Logo = styled.img`
  max-width: 200px;
  min-height: 62px;
  box-shadow: 1px 1px 5px 1px black;
  margin-bottom: 40px;
  cursor: pointer;
  object-fit: contain;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  display: none;
  background-color: white;
  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    display: flex;
  }
  z-index: 5000;
`

export const InnerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 24px;
  text-transform: uppercase;
  padding: 18px;
  font-weight: 600;
`

export const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 40px;
  cursor: pointer;
  right: 20px;
`
