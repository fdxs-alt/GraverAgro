import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Main = styled.main`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
