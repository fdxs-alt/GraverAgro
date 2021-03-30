import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Main = styled.main`
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
