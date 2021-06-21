/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useReducer, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
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
  ReCaptchaWrapper,
} from './Contact.styles'
import Loader from '../../Shared/Loader'

const initialState = {
  email: '',
  name: '',
  message: '',
  phone: '',
  error: '',
  loading: false,
  success: false,
}

const sendEmail = async (data) => {
  const response = await fetch(
    'https://formsubmit.co/ajax/firmagraver@gmail.com',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) {
    throw new Error('Error occured')
  }

  const responseData = await response.json()

  return responseData
}

const Contact = () => {
  const [state, setState] = useReducer(
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    initialState
  )

  const recaptchaRef = useRef()

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
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

    if (!recaptchaRef.current.getValue()) {
      setState({ error: 'Potwierdź, że nie jesteś robotem' })
      return
    }

    setState({ loading: true })

    try {
      const data = await sendEmail({ email, phone, name, message })
      if (data.success === 'true') {
        setState({ success: true, email: '', name: '', message: '', phone: '' })
      } else {
        setState({
          error:
            'Wystąpił błąd poczas wysyłania wiadomości, spróbuj jeszcze raz',
        })
      }
    } catch (error) {
      setState({
        error: 'Wystąpił błąd poczas wysyłania wiadomości, spróbuj jeszcze raz',
      })
    } finally {
      setState({ loading: false })
    }

    setTimeout(() => {
      setState({ success: false })
    }, 5000)
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
          <ReCaptchaWrapper>
            <ReCAPTCHA
              sitekey="6Lf-0EkbAAAAAB39EJYCEdvRf8mfguXVy5lXdOBa"
              ref={recaptchaRef}
            />
          </ReCaptchaWrapper>

          <ErrorMessage isError={!state.success}>
            {state.success
              ? 'Wiadomość przesłana pomyślnie'
              : state.error ?? ''}
          </ErrorMessage>

          <Button type="submit" isLoading={state.loading}>
            {state.loading ? <Loader /> : 'Wyślij'}
          </Button>
        </form>
      </FormWrapper>
    </Wrapper>
  )
}

export default Contact
