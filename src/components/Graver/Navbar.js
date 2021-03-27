import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useScrollHeight } from '@utils'

const NavContainer = styled.nav`
  width: 100%;
  height: 120px;
  padding: 10px;
  border-bottom: 3px solid #900000;
  display: flex;
  align-self: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  transition: all 400ms ease;
`

const Logo = styled.img`
  width: 200px;
  height: 62px;
  box-shadow: 1px 1px 5px 1px black;
`

const NavLinks = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

const NavItem = styled.li`
  width: 150px;
  text-align: center;
  list-style: none;
  font-weight: 600;
  font-size: 20px;
  transition: transform 300ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  a {
    text-decoration: none;
    color: black;
  }
`

const Navbar = () => {
  const height = useScrollHeight()

  return (
    <NavContainer style={{ height: height > 150 ? '85px' : '150px' }}>
      <NavLinks>
        <Link href="/graver/#about">
          <NavItem>O nas</NavItem>
        </Link>

        <Link href="/graver/#services">
          <NavItem>Usługi</NavItem>
        </Link>

        <Link href="/graver">
          <Logo src="/graver.png" />
        </Link>

        <Link href="/graver/#contact">
          <NavItem>Kontakt</NavItem>
        </Link>

        <Link href="/graver/#gallery">
          <NavItem>Galeria</NavItem>
        </Link>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar
