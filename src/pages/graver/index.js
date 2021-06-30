import React from 'react'
import {
  Layout,
  GraverNav,
  About,
  AboutGraver,
  GraverFooter,
  GraverInfo,
  AboutSection,
} from '@components'

const Graver = () => {
  return (
    <Layout
      title="Graver"
      url="graver"
      imageUrl="https://www.datocms-assets.com/49933/1625072037-onas.jpg"
      description="GRAVER to firma z siedzibą w Dobrej koło Limanowej, która swoją działalność rozpoczęła w 2021 roku. Mimo krótkiego stażu na rynku, posiadamy odpowiednie kwalifikacje i wystarczające doświadczenie potrzebne do realizacji powierzonych zadań. Zajmujemy się przygotowaniem terenu pod wszelkiego rodzaju prace podziemne i naziemne. Wykonujemy wykopy pod fundamenty, sieci wodociągowe, kanalizacyjne, elektryczne, czy też gazowe. Świadczymy usługi utwardzania powierzchni, wymiany gruntu, niwelacji terenu oraz korytowania pod parkingi i drogi. Podejmiemy się także prac wyburzeniowych. Nasze usługi świadczymy w sposób szybki, tani i bezpieczny."
    >
      <GraverNav />
      <About isMain imgSrc="/onas.jpg" imgSrcLow="/onas_low.jpg">
        <AboutSection
          title="GRAVER"
          smallHeading="MASZYNY TO NASZA PASJA!"
          buttonTitle="Sprawdź ofertę"
          link="/graver/uslugi"
        />
      </About>
      <GraverInfo />
      <AboutGraver />
      <GraverFooter />
    </Layout>
  )
}

export default Graver
