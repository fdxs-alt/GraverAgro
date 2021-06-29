import React from 'react'
import IconsSection from '../../Shared/IconsSection/IconsSection'

const icons = [
  {
    icon: '/worker.svg',
    alt: 'worker',
    title: 'PROFESJONALIZM',
    text: `Posiadamy niezawodny sprzęt, co daje możliwość sprawnej pracy w ciężkim terenie, gdzie dostęp jest ograniczony. `,
  },
  {
    icon: '/truck.svg',
    alt: 'truck',
    title: 'Pomoc drogowa',
    text: ` Naszym atutem jest posiadanie własnego transportu w postaci autolawety. Dzięki temu jesteśmy w stanie dowieźć nasze maszyny we wskazane miejsce pracy.`,
  },
  {
    icon: '/handshake.svg',
    alt: 'handshake',
    title: 'PODEJŚCIE DO KLIENTA',
    text: `Podczas realizacji usług służymy fachowym doradztwem i pomocą.`,
  },
]

const AgroInfo = () => {
  return <IconsSection icons={icons} />
}

export default AgroInfo
