/* eslint-disable react/no-array-index-key */
import React from 'react'
import {
  IconsWrapper,
  SingleIcon,
  SmallTitle,
  Text,
  TextWrapper,
  Wrapper,
} from './IconsSection.styles'

const IconsSection = ({ icons }) => {
  return (
    <Wrapper>
      <IconsWrapper>
        {icons.map((el, i) => (
          <SingleIcon key={i}>
            <img src={el.icon} alt={el.alt} />
            <TextWrapper>
              <SmallTitle>{el.title}</SmallTitle>
              <Text>{el.text}</Text>
            </TextWrapper>
          </SingleIcon>
        ))}
      </IconsWrapper>
    </Wrapper>
  )
}

export default IconsSection
