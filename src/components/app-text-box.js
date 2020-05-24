import React from "react"
import { Heading, PaddedBox, Paragraph } from "@custom-lib"

export const AppTextBox = ({ heading, text }) => {
  return (
    <PaddedBox maxWidth="600px">
      <Heading>{heading}</Heading>
      {text.map(({ paragraph }, i) => (
        <Paragraph key={i}>{paragraph}</Paragraph>
      ))}
    </PaddedBox>
  )
}
