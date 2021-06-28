import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'

const links = [
  {
    text: 'O nas',
    link: '/agromis',
  },
  {
    text: 'Usługi',
    link: '/agromis/uslugi',
  },
  {
    text: 'Park maszyn',
    link: '/agromis/park-maszyn',
  },
  {
    text: 'Galeria',
    link: '/agromis/galeria',
  },
]

const AgroNav = () => {
  return (
    <Navbar links={links} link="/agromis" color="green" logoSrc="/agro.png" />
  )
}

export default AgroNav
