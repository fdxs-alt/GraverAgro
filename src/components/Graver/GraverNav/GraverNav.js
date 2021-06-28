import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'

const links = [
  {
    text: 'O nas',
    link: '/graver',
  },
  {
    text: 'Usługi',
    link: '/graver/uslugi',
  },
  {
    text: 'Kontakt',
    link: '/graver/kontakt',
  },
  {
    text: 'Park maszyn',
    link: '/graver/park-maszyn',
  },
  {
    text: 'Galeria',
    link: '/graver/galeria',
  },
]

const GraverNav = () => {
  return (
    <Navbar links={links} link="/graver" color="red" logoSrc="/graver.png" />
  )
}

export default GraverNav
