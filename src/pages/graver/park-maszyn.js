import React from 'react'
import request from '@api'
import { MACHINES_QUERY } from '@graphql'
import { Machines, Layout, GraverNav, About, GraverFooter } from '@components'

const MachinesPark = ({ machines }) => {
  return (
    <Layout title="Graver | Park maszyn">
      <GraverNav />
      <About name="Park maszyn" imgSrc={['/onas_low.jpg', '/onas.jpg']} />
      <Machines machines={machines} />
      <GraverFooter />
    </Layout>
  )
}

export default MachinesPark

export const getStaticProps = async () => {
  const { allMachines } = await request({ query: MACHINES_QUERY })

  return { props: { machines: allMachines } }
}
