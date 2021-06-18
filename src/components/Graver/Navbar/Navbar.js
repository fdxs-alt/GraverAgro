import React, { useState } from 'react'
import Link from 'next/link'
import { useScrollHeight } from '@utils'
import Image from 'next/image'
import MobileMenu from '../Mobile/MobileMenu'
import {
  BackToMainContainer,
  Logo,
  NavContainer,
  NavItem,
  NavLinks,
  SmallMenu,
} from './Navbar.styles'

const Navbar = () => {
  const height = useScrollHeight()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Link href="/">
        <BackToMainContainer>
          <Image
            src="/arrow.svg"
            width={25}
            height={25}
            loading="lazy"
            alt="powrót"
          />
        </BackToMainContainer>
      </Link>
      <NavContainer
        style={{
          position: height > 150 ? 'fixed' : 'absolute',
          backgroundColor: height > 150 && 'rgba(0,0,0,1)',
        }}
      >
        <Link href="/graver">
          <Logo src="/graver.png" loading="lazy" />
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
