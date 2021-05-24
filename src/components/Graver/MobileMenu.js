import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const links = [
  { href: '/graver', text: 'O nas' },
  { href: '/graver/uslugi', text: 'Usługi' },
  { href: '/graver/kontakt', text: 'Kontakt' },
  { href: '/graver/park-maszyn', text: 'Park maszyn' },
  { href: '/graver/galeria', text: 'Galeria' },
]

const Logo = styled.img`
  width: 200px;
  height: 62px;
  box-shadow: 1px 1px 5px 1px black;
  margin-bottom: 40px;
  cursor: pointer;
`

const Wrapper = styled.div`
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

const InnerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 28px;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 600;
`

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 40px;
  cursor: pointer;
  right: 20px;
`

const MobileMenu = ({ close }) => {
  const router = useRouter()

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => close())

    return () => {
      router.events.off('routeChangeStart', () => close())
    }
  }, [router, close])

  return (
    <Wrapper>
      <CloseButton type="button" onClick={() => close()}>
        <Image
          alt="close"
          src="/close.svg"
          width="30px"
          height="30px"
          loading="lazy"
        />
      </CloseButton>
      <InnerWrapper>
        <Link href="/graver">
          <Logo src="/graver.png" />
        </Link>
        {links.map((link, i) => (
          <Link href={link.href} key={i}>
            <NavItem>{link.text}</NavItem>
          </Link>
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default MobileMenu
