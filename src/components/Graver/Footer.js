import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.footer`
  padding: 60px;
  width: 100%;
  background-color: #262626;
  margin-top: 200px;
  display: flex;
`
const InnerWrapper = styled.ul`
  width: 80%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavItem = styled.li`
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
`

const Divider = styled.div`
  width: 3px;
  background-color: white !important;
  color: white;
  height: 25px;
`

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Link href="/graver">
          <Image src="/graver.png" width={200} height={62} />
        </Link>
        <Link href="/graver">
          <NavItem>O FIRMIE GRAVER</NavItem>
        </Link>
        <Divider />
        <Link href="/graver/uslugi">
          <NavItem>OFERTA I USŁUGI</NavItem>
        </Link>
        <Divider />
        <Link href="/graver/kontakt">
          <NavItem>KONTAKT</NavItem>
        </Link>
        <Divider />
        <Link href="/graver/galeria">
          <NavItem>GALERIA</NavItem>
        </Link>
        <Divider />
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <NavItem>
            <Image src="/facebook.svg" width={25} height={25} />
          </NavItem>
        </a>
        <Divider />
        <a href="mailto:randommail@mail.com">
          <NavItem>
            <Image src="/mail.svg" width={30} height={30} />
          </NavItem>
        </a>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Footer
