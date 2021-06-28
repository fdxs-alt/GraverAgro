/* eslint-disable react/no-array-index-key */
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

const Navbar = ({ logoSrc, link, links, color = 'red' }) => {
  const height = useScrollHeight()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Link href="/">
        <BackToMainContainer color={color}>
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
        <Link href={link}>
          <Logo src={logoSrc} loading="lazy" alt="logo" />
        </Link>
        <SmallMenu onClick={() => setOpen(true)}>
          <Image src="/menu.svg" alt="menu" width="40" height="40" />
        </SmallMenu>
        <NavLinks>
          {links.map((el, i) => (
            <Link href={el.link} key={i}>
              <NavItem>{el.text}</NavItem>
            </Link>
          ))}
        </NavLinks>
      </NavContainer>
      {open && (
        <MobileMenu
          close={() => setOpen(false)}
          link={link}
          links={links}
          logoSrc={logoSrc}
        />
      )}
    </>
  )
}

export default Navbar
