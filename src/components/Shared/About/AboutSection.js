import React from 'react'
import Link from 'next/link'
import { AboutInfo, CheckUs, Heading, SmallHeading } from './About.styles'

const AboutSection = ({
  smallHeading,
  title,
  buttonTitle,
  bg = 'red',
  link,
}) => {
  return (
    <AboutInfo>
      <SmallHeading>{smallHeading}</SmallHeading>
      <Heading>{title}</Heading>
      <Link href={link}>
        <CheckUs bg={bg}>{buttonTitle}</CheckUs>
      </Link>
    </AboutInfo>
  )
}

export default AboutSection
