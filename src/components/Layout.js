import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Main = styled.main`
  width: 100%;
`

const Layout = ({ children, title = 'Cosmo PK' }) => {
  return (
    <>
      <NextSeo title={title} />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
