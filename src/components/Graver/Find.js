import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.section`
  margin: 50px auto;
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  iframe {
    width: 50%;
    max-width: 800px;
    height: 500px;
    border: 0;
  }
`

const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: ${(props) => props.theme.colors.white};
    font-size: 48px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const ColumnWrapper = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  color: white;
  justify-content: space-between;
  margin: 50px auto 0 auto;

  li {
    list-style: none;
    font-size: 24px;
    margin-top: 15px;
    font-weight: 500;
    padding: 5px 0;
  }
  h4 {
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: 600;
  }
`

const Button = styled.button`
  all: unset;
  font-size: 22px;
  font-weight: 600;
  color: black;
  padding: 16px 26px;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 50px;
  width: fit-content;
  min-width: 150px;
  min-height: 30px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 300ms ease;
  &:hover {
    transform: scale(1.05);
  }
`

const Find = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <h2>Znajdź nas!</h2>
        <ColumnWrapper>
          <div>
            <h4>ADRES</h4>
            <li>Firma Graver</li>
            <li>Wojciech Miśkowiec</li>
            <li>Dobra 2433, 34-222 Dobra</li>
          </div>
          <div>
            <h4>TELEFON I EMAIL</h4>
            <li>Email: randomemail</li>
            <li>Telefon: +48 424 424 424</li>
          </div>
        </ColumnWrapper>
        <Link href="/graver/kontakt">
          <Button>Formularz kontaktowy</Button>
        </Link>
      </InfoWrapper>
      <iframe
        title="dobra-mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.4386828430784!2d20.233021315947624!3d49.70254244885071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160f8a9fb06c45%3A0xaae7cb59c7be3122!2s2433%2C%20Dobra%20222%2C%2034-642%20Dobra!5e0!3m2!1spl!2spl!4v1617169011769!5m2!1spl!2spl"
        allowFullScreen=""
        loading="lazy"
      />
    </Wrapper>
  )
}

export default Find
