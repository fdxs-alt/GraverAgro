/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useReducer } from 'react'
import Input from './Input'
import {
  FormGroup,
  Button,
  FormWrapper,
  Header,
  Label,
  Wrapper,
} from './Contact.styles'

const initialState = {
  email: '',
  name: '',
  message: '',
  phone: '',
}

const Contact = () => {
  const [state, setState] = useReducer(
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    initialState
  )

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <Header>Prześlij nam wiadomość a na pewno się odezwiemy</Header>
      <FormWrapper>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <FormGroup>
            <Label htmlFor="Imię i nazwisko">Imię i nazwisko</Label>
            <Input
              handleChange={handleChange}
              name="name"
              value={state.name}
              required
              type="text"
              placeholder="Twoje imię i nazwisko"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Email">Email</Label>
            <Input
              handleChange={handleChange}
              name="email"
              value={state.email}
              required
              type="email"
              placeholder="Twój email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Numer">Numer telefonu</Label>
            <Input
              handleChange={handleChange}
              name="phone"
              value={state.phone}
              required
              type="text"
              placeholder="Twój numer telefonu"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Wiadomość">Wiadomość</Label>
            <Input
              isTextArea
              handleChange={handleChange}
              name="message"
              value={state.message}
              required
              type="text"
              placeholder="Wiadomość, którą chcesz nam przesłać"
            />
          </FormGroup>
          <Button type="submit">Wyślij</Button>
        </form>
      </FormWrapper>
    </Wrapper>
  )
}

export default Contact
