import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  CloseButton,
  InnerWrapper,
  Logo,
  NavItem,
  Wrapper,
} from './MobileMenu.styles'

const links = [
  { href: '/graver', text: 'O nas' },
  { href: '/graver/uslugi', text: 'Usługi' },
  { href: '/graver/kontakt', text: 'Kontakt' },
  { href: '/graver/park-maszyn', text: 'Park maszyn' },
  { href: '/graver/galeria', text: 'Galeria' },
]

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
