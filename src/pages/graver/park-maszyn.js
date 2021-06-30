import React from 'react'
import request from '@api'
import { MACHINES_QUERY } from '@graphql'
import { Machines, Layout, GraverNav, About, GraverFooter } from '@components'

const MachinesPark = ({ machines }) => {
  return (
    <Layout
      title="Graver | Park maszyn"
      url="graver/park-maszyn"
      imageUrl="https://www.datocms-assets.com/49933/1625072037-onas.jpg"
      description="GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje i wystarczające doświadczenie potrzebne do realizacji powierzonych zadań. Zajmujemy się przygotowaniem terenu pod wszelkiego rodzaju prace podziemne i naziemne. Wykonujemy wykopy pod fundamenty, sieci wodociągowe, kanalizacyjne, elektryczne, czy też gazowe. Świadczymy usługi utwardzania powierzchni, wymiany gruntu, niwelacji terenu oraz korytowania pod parkingi i drogi. Podejmiemy się także prac wyburzeniowych. Nasze usługi świadczymy w sposób szybki, tani i bezpieczny."
    >
      <GraverNav />
      <About name="Park maszyn" imgSrc="/onas.jpg" imgSrcLow="/onas_low.jpg" />
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
