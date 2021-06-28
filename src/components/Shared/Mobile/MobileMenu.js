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

const MobileMenu = ({ close, links, logoSrc, link }) => {
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
        <Link href={link}>
          <Logo src={logoSrc} />
        </Link>
        {links.map((el, i) => (
          <Link href={el.link} key={i}>
            <NavItem>{el.text}</NavItem>
          </Link>
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default MobileMenu
