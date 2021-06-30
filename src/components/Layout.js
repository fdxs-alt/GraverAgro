import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Main = styled.main`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Layout = ({
  children,
  title = 'Graver',
  favicon = '/favicon',
  description = 'AgroMiś znajduje się w malowniczej miejscowości - Dobra. Na rynku prosperujemy od 2020 roku. Jesteśmy firmą rodzinną, działającą w branży związanej z pielęgnacją i utrzymaniem terenów zielonych. Specjalizujemy się w wycince drzew i krzewów oraz ich formowaniem. Przygotowujemy teren pod trawnik: zakładamy, a także dbamy o jego piękny wygląd. Zajmujemy się również karczowaniem działek, jak też koszeniem łąk i nieużytków kosiarką bijakową. Dysponujemy mulczerem typu ciężkiego. Świadczymy usługi glebogryzarką służącą do mechanicznego przekopywania, rozdrabniania i spulchniania podłoża. Dodatkowo posiadamy rębak do drewna, którym to zrębkujemy oraz rozdrabniamy odpady drzewne, drewnopochodne, a także drewno pochodzenia leśnego. Zachęcamy do skorzystania z naszych usług!',
  url = '',
  imageUrl = 'https://www.datocms-assets.com/49933/1625072031-agro-main.jpg',
}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${favicon}.ico`} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${favicon}-32x32.png"`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${favicon}-96x96.png"`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${favicon}-16x16.png"`}
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical="https://xn--mikowiec-nvb.pl/"
        openGraph={{
          url: `https://xn--mikowiec-nvb.pl/${url}`,
          title,
          type: 'website',
          description,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: 'Nasze logo',
            },
            {
              url: imageUrl,
              width: 900,
              height: 800,
              alt: 'Nasze logo',
            },
          ],
          site_name: 'Firma Graver i Agromiś',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
