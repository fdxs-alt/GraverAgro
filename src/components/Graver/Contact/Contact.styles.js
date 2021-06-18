import styled from 'styled-components'

export const StyledInput = styled.input`
  margin-top: 10px;
  border: 2px solid #7a7a7a;
  padding: 14px 16px;
  font-size: 16px;
  border-radius: 10px;
  outline: none;

  &:focus {
    border: 2px solid black;
  }

  &::placeholder {
    color: #7a7a7a;
    font-size: 16px;
  }
`

export const StyledTextArea = styled.textarea`
  margin-top: 10px;
  border: 2px solid #7a7a7a;
  padding: 12px 16px;
  font-size: 16px;
  resize: none;
  border-radius: 10px;
  outline: none;
  font-family: inherit;

  &:focus {
    border: 2px solid black;
  }

  &::placeholder {
    font-size: 16px;
    color: #7a7a7a;
  }
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FormWrapper = styled.div`
  width: 60%;
  margin: 70px 0 30px 0;
  min-width: 500px;
  max-width: 600px;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    min-width: unset;
    width: 100%;
    padding: 0 20px;
  }
`

export const FormGroup = styled.div`
  padding: 10px 0;
  display: flex;
  position: relative;
  flex-direction: column;
`

export const Label = styled.label`
  margin: 0 0 -18px 15px;
  z-index: 10;
  background-color: white;
  width: fit-content;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
`

export const Header = styled.h3`
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    font-size: 28px;
    padding: 0 10px;
  }
`

export const Button = styled.button`
  all: unset;
  font-size: 22px;
  font-weight: 600;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.colors.red};
  margin-top: 50px;
  width: fit-content;
  min-width: 150px;
  min-height: 30px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 300ms ease;
  color: white;
  align-self: center;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    margin: 50px auto 0;
  }
`
