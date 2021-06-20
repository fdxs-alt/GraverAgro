const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegex = /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/

export const validateName = (name) => {
  const [firstName, secondName] = name.split(' ')

  return firstName && secondName
}

export const validateEmail = (email) => {
  return emailRegex.test(String(email).toLowerCase())
}

export const validatePhone = (phone) => {
  return phoneRegex.test(String(phone).toLowerCase())
}
