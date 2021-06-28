import React from 'react'
import request from '@api'
import { MACHINES_QUERY } from '@graphql'
import { Layout, About, AgroNav } from '@components'

const MachinesPark = ({ machines }) => {
  return (
    <Layout title="Agro | Park maszyn">
      <AgroNav />
      <About
        imgSrc={['/agro-main-low.jpg', '/agro-main.jpg']}
        left
        name="PARK MASZYN"
      />
    </Layout>
  )
}

export default MachinesPark

export const getStaticProps = async () => {
  const { allMachines } = await request({ query: MACHINES_QUERY })

  return { props: { machines: allMachines } }
}
