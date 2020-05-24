import React from "react"
import styled from "styled-components"
import { FlexBox, Heading, PaddedBox } from "@custom-lib"
import { AppTextBox } from "./app-text-box"

const List = styled.ul`
  li {
    font-size: 1rem;
    margin: 10px 0;
  }
`

const BulletPointsWrapper = styled(FlexBox)`
  flex: 1;
  min-width: 400px;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    padding: ${({ verticalPad = "0" }) => `${verticalPad / 2}px 0px`};
    text-align: justify;
    min-width: inherit;
  }
`

const IntroWithAside = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    flex-direction: column;
  }
`

const BulletPointsList = ({ content }) => {
  return (
    <FlexBox
      verticalPad="20"
      horizontalPad="20"
      fontSize="1rem"
      style={{
        backgroundColor: "#06426A",
        width: "100%",
      }}
    >
      {content.title && (
        <Heading style={{ marginBottom: 0, color: "var(--not-quite-white)" }}>
          {content.title}
        </Heading>
      )}
      <List style={{ color: "var(--not-quite-white)" }}>
        {content.list.map(({ item }, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </FlexBox>
  )
}

export const AppTextWithBullets = ({ intro, bulletPoints }) => (
  <PaddedBox horizontal="40">
    <IntroWithAside>
      <BulletPointsWrapper
        verticalPad="40"
        horizontalPad="20"
        style={{ flex: 2 }}
        fontSize="1rem"
      >
        <AppTextBox
          heading={intro.heading}
          text={intro.text}
          style={{ flex: 1 }}
        />
      </BulletPointsWrapper>
      <BulletPointsWrapper verticalPad="40" horizontalPad="20">
        <BulletPointsList content={bulletPoints} />
      </BulletPointsWrapper>
    </IntroWithAside>
  </PaddedBox>
)
