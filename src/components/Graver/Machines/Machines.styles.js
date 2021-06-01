import styled from 'styled-components'

export const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  font-size: 34px;
  text-transform: uppercase;
  margin: 100px 0;
`

export const MachinesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`
export const Machine = styled.div`
  padding: 30px;
  border: 1px solid #eeeeee;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 11px 0px #00000026;
  text-transform: uppercase;
  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    justify-content: center;
  }
`
export const MachineContent = styled.div`
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

export const MachineTitle = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 600;
  text-decoration: underline;
`
