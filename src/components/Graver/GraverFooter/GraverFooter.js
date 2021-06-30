import React from 'react'
import Footer from '../../Shared/Footer/Footer'

const links = [
  {
    text: 'O FIRMIE GRAVER',
    link: '/graver',
  },
  {
    text: 'OFERTA I USŁUGI',
    link: '/graver/uslugi',
  },
  {
    text: 'FORMULARZ KONTAKTOWY',
    link: '/graver/kontakt',
  },
  {
    text: 'Galeria',
    link: '/graver/galeria',
  },
]

const data = [
  'FIRMA GRAVER',
  'WOJCIECH MIŚKOWIEC',
  'Dobra 233, 34-222 Dobra',
  'Tel: +48 669 308 372',
]

const GraverFooter = () => {
  return (
    <Footer links={links} link="/graver" logoSrc="/graver.png" data={data} />
  )
}

export default GraverFooter
