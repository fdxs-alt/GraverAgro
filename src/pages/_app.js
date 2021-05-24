import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import { GlobalStyles, theme } from '@styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo({ behavior: 'smooth', top: 1 })
    })
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color="#FFF"
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
