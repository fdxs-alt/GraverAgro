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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.348084257565!2d20.237180615904215!3d49.723073747386984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160ffda257c469%3A0xec42b28c159146b1!2sDobra%20223%2C%2034-642%20Dobra!5e0!3m2!1spl!2spl!4v1624015576848!5m2!1spl!2spl"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="graver"
          />
          <ContactInfo>
            <p>Firma Graver</p>
            <p>Wojciech Miśkowiec</p>
            <p>Dobra 2433, 34-222 Dobra</p>
            <p>Tel: +48 669 308 372</p>
            <a
              href="mailto:firmagraver@gmail.com"
              style={{ color: 'white' }}
              target="_blank"
              rel="noreferrer"
            >
              <p>Email: firmagraver@gmail.com</p>
            </a>
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
              href="https://www.facebook.com/FirmaGRAVER"
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
            <a href="mailto:firmagraver@gmail.com">
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
