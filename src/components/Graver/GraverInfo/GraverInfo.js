import React from 'react'
import IconsSection from '../../Shared/IconsSection/IconsSection'

const icons = [
  {
    icon: '/tools.svg',
    alt: 'tools',
    title: 'Transport',
    text: `Realizujemy transport krajowy maszyn budowlanych, rolniczych oraz
    każdego rodzaju materiałów. Posiadamy zezwolenie na wykonywanie
    zawodu przewoźnika drogowego oraz ubezpieczenie OC przewoźnika.`,
  },
  {
    icon: '/builder.svg',
    alt: 'tools',
    title: 'Pomoc drogowa',
    text: ` Oferujemy całodobową i kompleksową pomoc drogową. Działamy głównie
  na terenie województwa małopolskiego, a w razie potrzeb na terenie
  całego kraju. Odznaczamy się dużą mobilnością.`,
  },
  {
    icon: '/settings.svg',
    alt: 'tools',
    title: 'Szeroki wachlarz usług',
    text: `Sprawdź podstronę usługi, aby dokładnie zapoznać się z profilem
    naszej firmy. Opis wykonywanych przez nas prac może pomóc w
    sprecyzowaniu Twojej potrzeby.`,
  },
]

const GraverInfo = () => {
  return <IconsSection icons={icons} />
}

export default GraverInfo
