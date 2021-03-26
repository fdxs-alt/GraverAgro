import { Layout } from '@components'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const RightImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url('/excavator.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`

const LeftImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url('/tractor.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`

const Home = () => {
  return (
    <Layout title="AGROMIŚ GRAVER | Wybierz usługę">
      <Container>
        <Link href="/agromis">
          <LeftImage />
        </Link>
        <Link href="/graver">
          <RightImage />
        </Link>
      </Container>
    </Layout>
  )
}

export default Home
