import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Layout = ({ children, title = 'GraverAgro' }) => {
  return (
    <>
      <NextSeo title={title} />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
