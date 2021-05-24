import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  font-size: 34px;
  text-transform: uppercase;
  margin: 100px 0;
`

const MachinesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`
const Machine = styled.div`
  padding: 30px;
  border: 1px solid #eeeeee;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 11px 0px #00000026;

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    justify-content: center;
  }
`
const MachineContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  li {
    font-size: 24px;
    padding: 5px 0;
    list-style: none;
  }

  b {
    font-weight: 600;
  }

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    justify-content: center;
  }
`

const MachineTitle = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 600;
  text-decoration: underline;
`

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
