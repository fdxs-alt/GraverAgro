import React from 'react'
import { StyledInput, StyledTextArea } from './Contact.styles'

const Input = ({ handleChange, isTextArea = false, ...rest }) => {
  return isTextArea ? (
    <StyledTextArea onChange={handleChange} rows={8} {...rest} />
  ) : (
    <StyledInput onChange={handleChange} {...rest} />
  )
}

export default Input
