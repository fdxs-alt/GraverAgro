import React from 'react'
import request from '@api'
import { AGRO_MACHINES_QUERY } from '@graphql'
import { Layout, About, AgroNav, AgroFooter, Machines } from '@components'

const MachinesPark = ({ machines }) => {
  return (
    <Layout
      title="Agromiś | Park maszyn"
      favicon="/agro-favicon"
      url="agromis/park-maszyn"
    >
      <AgroNav />
      <About
        imgSrc="/agro-main.jpg"
        imgSrcLow="/agro-main-low.jpg"
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
