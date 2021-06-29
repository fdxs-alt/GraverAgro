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

const Layout = ({ children, title = 'GraverAgro', favicon = '/favicon' }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${favicon}.ico`} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${favicon}/-32x32.png"`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${favicon}/-96x96.png"`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${favicon}/-16x16.png"`}
        />
      </Head>
      <NextSeo title={title} />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
