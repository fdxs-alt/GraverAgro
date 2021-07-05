import React from 'react'
import Footer from '../../Shared/Footer/Footer'

const links = [
  {
    text: 'O FIRMIE AGROMIŚ',
    link: '/agromis',
  },
  {
    text: 'OFERTA I USŁUGI',
    link: '/agromis/uslugi',
  },
  {
    text: 'FORMULARZ KONTAKTOWY',
    link: '/agromis/kontakt',
  },
  {
    text: 'Galeria',
    link: '/agromis/galeria',
  },
]

const data = [
  'FIRMA AGROMIŚ',
  'WALDERMAR MIŚKOWIEC',
  'Dobra 233, 34-222 Dobra',
  'Tel: +48 728 358 187',
]

const AgroFooter = () => {
  return (
    <Footer
      links={links}
      link="/agromis"
      logoSrc="/agro.png"
      mediaLinks={false}
      width={150}
      height={100}
      data={data}
      color="green"
    />
  )
}

export default AgroFooter
