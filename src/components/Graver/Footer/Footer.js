import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ContactInfo,
  Divider,
  FooterContainer,
  InnerWrapper,
  NavItem,
  Title,
  Wrapper,
} from './Footer.styles'

const Footer = ({ noMap = false }) => {
  return (
    <FooterContainer>
      {!noMap && (
        <>
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
        </>
      )}

      <Wrapper>
        <InnerWrapper>
          <Link href="/graver">
            <Image src="/graver.png" width={200} height={62} loading="lazy" />
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
                <Image
                  src="/facebook.svg"
                  width={25}
                  height={25}
                  loading="lazy"
                />
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
