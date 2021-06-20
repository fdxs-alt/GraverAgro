/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useReducer } from 'react'
import { validatePhone, validateEmail, validateName } from '@utils'
import Input from './Input'
import {
  FormGroup,
  Button,
  FormWrapper,
  Header,
  Label,
  Wrapper,
  ErrorMessage,
} from './Contact.styles'
import Loader from '../../Shared/Loader'

const initialState = {
  email: '',
  name: '',
  message: '',
  phone: '',
  error: '',
  loading: false,
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

    if (state.loading) {
      return
    }

    setState({ error: '' })

    const { email, name, message, phone } = state

    if (!validateName(name)) {
      setState({ error: 'Podaj poprawne imię i nazwisko' })
      return
    }

    if (!validateEmail(email)) {
      setState({ error: 'Podaj poprawny adres email' })
      return
    }

    if (!validatePhone(phone)) {
      setState({ error: 'Podaj poprawny numer telefonu' })
      return
    }

    if (!message) {
      setState({ error: 'Podaj wiadomość jaką chcesz nam przesłać' })
      return
    }

    setState({ loading: true })
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
          <ErrorMessage>{state.error}</ErrorMessage>
          <Button type="submit" loading={state.loading}>
            {state.loading ? <Loader /> : 'Wyślij'}
          </Button>
        </form>
      </FormWrapper>
    </Wrapper>
  )
}

export default Contact
