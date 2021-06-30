import { Layout, HomeStyles } from '@components'
import Link from 'next/link'
import { useLazyLoadImage } from '@utils'

const { AgroLogo, Container, Image, TextInfo, GraverLogo } = HomeStyles

const Home = () => {
  const { src, blur } = useLazyLoadImage('/tractor_low.jpg', '/tractor.jpg')
  const { src: srcTwo, blur: blurTwo } = useLazyLoadImage(
    '/excavator_low.jpg',
    '/excavator.jpg'
  )

  return (
    <Layout
      title="AGROMIŚ i  GRAVER | Wybierz usługę"
      description="Usługi firmy Agromiś oraz Graver"
    >
      <Container>
        <Link href="/agromis">
          <Image
            style={{
              backgroundImage: `url(${src})`,
              filter: blur ? 'blur(20px)' : 'none',
              transition: blur ? 'none' : 'filter 0.3s ease-out',
            }}
          >
            <AgroLogo src="/agro.png" loading="lazy" />
          </Image>
        </Link>
        <TextInfo>Wybierz interesującą Cię usługę:</TextInfo>
        <Link href="/graver">
          <Image
            style={{
              backgroundImage: `url(${srcTwo})`,
              backgroundPosition: 'bottom',
              filter: blurTwo ? 'blur(20px)' : 'none',
              transition: blurTwo ? 'none' : 'filter 0.3s ease-out',
            }}
          >
            <GraverLogo src="/graver.png" alt="graver" loading="lazy" />
          </Image>
        </Link>
      </Container>
    </Layout>
  )
}

export default Home
