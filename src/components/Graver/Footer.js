import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 50px;
  position: relative;
  iframe {
    width: 100%;
    outline: none;
    height: 500px;
  }
`

const Wrapper = styled.div`
  padding: 60px 0;
  width: 100%;
  background-color: #262626;
  display: flex;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 45px 0;
  }
`
const InnerWrapper = styled.ul`
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

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 15px;
    font-size: 20px;
  }
`

const Divider = styled.div`
  width: 3px;
  background-color: white !important;
  color: white;
  height: 25px;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`

const ContactInfo = styled.div`
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

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 100px;
  text-transform: uppercase;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Title>Znajdź nas</Title>
      <iframe
        title="Dobra-mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.4386828430784!2d20.233021315947624!3d49.70254244885071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160f8a9fb06c45%3A0xaae7cb59c7be3122!2s2433%2C%20Dobra%20222%2C%2034-642%20Dobra!5e0!3m2!1spl!2spl!4v1617169011769!5m2!1spl!2spl"
        allowFullScreen=""
        loading="lazy"
      />
      <ContactInfo>
        <p>Firma Graver</p>
        <p>Wojciech Miśkowiec</p>
        <p>Dobra 2433, 34-222 Dobra</p>
        <p>Tel: +48 323 523 524</p>
        <p>Email: email</p>
      </ContactInfo>
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
            <NavItem>FORMULARZ KONTAKTOWY</NavItem>
          </Link>
          <Divider />
          <Link href="/graver/galeria">
            <NavItem>GALERIA</NavItem>
          </Link>
          <Divider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minWidth: '80px',
            }}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <NavItem>
                <Image src="/facebook.svg" width={25} height={25} />
              </NavItem>
            </a>
            <a href="mailto:randommail@mail.com">
              <NavItem>
                <Image src="/mail.svg" width={30} height={30} />
              </NavItem>
            </a>
          </div>
        </InnerWrapper>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
