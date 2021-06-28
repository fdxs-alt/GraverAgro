import React from 'react'
import request from '@api'
import { AGRO_MACHINES_QUERY } from '@graphql'
import { Layout, About, AgroNav, AgroFooter, Machines } from '@components'

const MachinesPark = ({ machines }) => {
  return (
    <Layout title="Agro | Park maszyn">
      <AgroNav />
      <About
        imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']}
        left
        name="PARK MASZYN"
      />
      <Machines machines={machines} />
      <AgroFooter />
    </Layout>
  )
}

export default MachinesPark

export const getStaticProps = async () => {
  const { allAgromachines } = await request({ query: AGRO_MACHINES_QUERY })

  return { props: { machines: allAgromachines } }
}
