import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useScrollHeight } from '@utils'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  padding: 10px 50px;
  display: flex;
  align-self: center;
  position: absolute;
  top: 0;
  z-index: 999;
  transition: all 400ms ease;
  align-items: center;
  justify-content: space-between;
  display: flex;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    padding: 10px 20px;
  }
`

const Logo = styled.img`
  width: 200px;
  height: 62px;
  box-shadow: 1px 1px 5px 1px black;
`

const NavLinks = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1500px;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    display: none;
  }
`

const NavItem = styled.li`
  width: 150px;
  text-align: center;
  list-style: none;
  font-weight: 600;
  font-size: 22px;
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
`

const SmallMenu = styled.li`
  width: 150px;
  justify-content: flex-end;
  align-items: center;
  display: none;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    display: flex;
  }
`

const Navbar = () => {
  const height = useScrollHeight()
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavContainer
        style={{
          position: height > 150 ? 'fixed' : 'absolute',
          backgroundColor: height > 150 && 'rgba(0,0,0,0.75)',
        }}
      >
        <Link href="/graver">
          <Logo src="/graver.png" />
        </Link>
        <SmallMenu onClick={() => setOpen(true)}>
          <Image src="/menu.svg" alt="menu" width="40" height="40" />
        </SmallMenu>
        <NavLinks>
          <Link href="/graver">
            <NavItem>O nas</NavItem>
          </Link>
          <Link href="/graver/uslugi">
            <NavItem>Usługi</NavItem>
          </Link>
          <Link href="/graver/kontakt">
            <NavItem>Kontakt</NavItem>
          </Link>
          <Link href="/graver/park-maszyn">
            <NavItem>Park maszyn</NavItem>
          </Link>
          <Link href="/graver/galeria">
            <NavItem>Galeria</NavItem>
          </Link>
        </NavLinks>
      </NavContainer>
      {open && <MobileMenu close={() => setOpen(false)} />}
    </>
  )
}

export default Navbar
