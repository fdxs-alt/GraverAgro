import React from 'react'
import { Machines, Layout, Navbar, About, Footer } from '@components'

const MachinesPark = () => {
  return (
    <Layout title="Graver | Park maszyn">
      <Navbar />
      <About name="Park maszyn" />
      <Machines />
      <Footer />
    </Layout>
  )
}

export default MachinesPark
