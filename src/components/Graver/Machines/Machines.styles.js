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
  width: 90%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 95%;
    padding: 20px;
  }
`
export const Machine = styled.div`
  padding: 30px;
  border: 1px solid #eeeeee;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 11px 0px #00000026;
  text-transform: uppercase;
  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const MachineContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: ${(props) => (props.isEven ? 'flex-start' : 'flex-end')};
  p {
    font-size: 22px;
    padding: 5px 0;
    list-style: none;
    max-width: 450px;
    line-height: 1.5;
    text-align: ${(props) => (props.isEven ? 'left' : 'right')};
    strong {
      font-weight: 600;
    }
  }

  @media (max-width: ${(props) => props.theme.sizes.smLaptop}) {
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      text-align: center;
    }
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 100%;
    p {
      font-size: 18px;
      line-height: 1.2;
    }
  }
`

export const MachineTitle = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 600;
  text-decoration: underline;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin-top: 20px;
    font-size: 28px;
  }
`
