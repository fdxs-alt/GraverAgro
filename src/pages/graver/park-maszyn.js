import React from 'react'
import request from '@api'
import { MACHINES_QUERY } from '@graphql'
import { Machines, Layout, Navbar, About, Footer } from '@components'

const MachinesPark = ({ machines }) => {
  return (
    <Layout title="Graver | Park maszyn">
      <Navbar />
      <About name="Park maszyn" />
      <Machines machines={machines} />
      <Footer />
    </Layout>
  )
}

export default MachinesPark

export const getStaticProps = async () => {
  const { allMachines } = await request({ query: MACHINES_QUERY })

  return { props: { machines: allMachines } }
}
