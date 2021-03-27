import { Layout, HomeStyles } from '@components'
import Link from 'next/link'

const { AgroLogo, Container, Image, TextInfo, GraverLogo } = HomeStyles

const Home = () => {
  return (
    <Layout title="AGROMIŚ GRAVER | Wybierz usługę">
      <Container>
        <Link href="/agromis">
          <Image style={{ backgroundImage: `url('/tractor.jpg')` }}>
            <AgroLogo src="/agro.png" width="500px" height="300px" />
          </Image>
        </Link>
        <TextInfo>Wybierz interesującą Cię usługę:</TextInfo>
        <Link href="/graver">
          <Image
            style={{
              backgroundImage: `url('/excavator.jpg')`,
              backgroundPosition: 'bottom',
            }}
          >
            <GraverLogo src="/graver.png" alt="graver" />
          </Image>
        </Link>
      </Container>
    </Layout>
  )
}

export default Home
