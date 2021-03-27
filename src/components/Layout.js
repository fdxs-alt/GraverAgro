import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Main = styled.main``

const Layout = ({ children, title = 'GraverAgro' }) => {
  return (
    <>
      <NextSeo title={title} />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
