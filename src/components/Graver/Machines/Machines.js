import React from 'react'
import { Image } from 'react-datocms'
import ReactMarkdown from 'react-markdown'
import {
  Machine,
  MachineContent,
  MachineTitle,
  MachinesWrapper,
  Title,
} from './Machines.styles'

const Machines = ({ machines }) => {
  return (
    <>
      <Title>Nasze maszyny:</Title>
      <MachinesWrapper>
        {machines.map((machine, i) => (
          <Machine key={machine.id} isEven={i % 2 === 0}>
            <Image data={machine.zdjecie.responsiveImage} />
            <MachineContent isEven={i % 2 === 0}>
              <MachineTitle>{machine.nazwa}</MachineTitle>
              <ReactMarkdown>{machine.opis}</ReactMarkdown>
            </MachineContent>
          </Machine>
        ))}
      </MachinesWrapper>
    </>
  )
}

export default Machines
