import React from 'react'
import Image from 'next/image'
import {
  Machine,
  MachineContent,
  MachineTitle,
  MachinesWrapper,
  Title,
} from './Machines.styles'

const Machines = () => {
  return (
    <>
      <Title>Nasze maszyny:</Title>
      <MachinesWrapper>
        {Array(10)
          .fill(1)
          .map((_, i) => (
            <Machine key={Math.random()} isEven={i % 2 === 0}>
              <Image
                layout="intrinsic"
                src="/tra.jpg"
                alt="traktor"
                loading="lazy"
                width={500}
                height={400}
                objectFit="contain"
              />
              <MachineContent>
                <MachineTitle>Koparka</MachineTitle>
                <li>Moc : 90KM</li>
                <li>Waga : 4000kg</li>
                <li>Napęd: 4x4 Max</li>
                <li>Prędkość: 40km/h</li>
              </MachineContent>
            </Machine>
          ))}
      </MachinesWrapper>
    </>
  )
}

export default Machines
