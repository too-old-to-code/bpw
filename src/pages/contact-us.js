import React from "react"
import styled, { css } from "styled-components"
import { Row, Col } from "react-grid-system"
import { FlexBox } from "@custom-lib"
import { FaPhoneSquareAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { graphql } from "gatsby"

const StyledForm = styled.form`
  max-width: 600px;
  padding: 50px;
  background: blue;
  display: flex;
  width: 100%;
  flex-direction: column;
  // font-size: 1.3em;
  background-color: #06426a;
  // margin: 0 auto;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1em;
    padding: 50px 10px 20px 10px;
  }
`

const formElement = css`
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 1em;
  padding: 5px;
`

const PageFlexBox = styled(FlexBox)`
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

const ActionButton = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  font-size: 1em;
  max-width: 100px;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    font-size: 1em;
    max-width: inherit;
  }
`

const PlainLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  margin-right: 3px;
`

const MainArea = styled.main`
  padding-top: ${({ theme }) => theme?.navbar?.height};
`

const StyledLabel = styled.label`
  color: white;
`

const StyledInput = styled.input`
  ${formElement}
`

const StyledTextArea = styled.textarea.attrs(() => ({
  rows: 5,
}))`
  ${formElement}
  resize: vertical;
`

const ContactUsPageTemplate = ({ data }) => {
  return (
    <MainArea style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={12} md={5} push={{ md: 7 }}>
          <PageFlexBox
            verticalPad="50"
            horizontalPad="50"
            style={{ height: "100%" }}
          >
            <address
              style={{
                fontStyle: "normal",
                color: "#06426A",
                fontSize: "1.1em",
              }}
            >
              {data.addressLine.map(line => {
                return <div key={line}>{line}</div>
              })}
              <br />
              <FlexBox direction="row" fontSize="1em" justify="flex-start">
                <PlainLink href={`mailto:${data.email}`}>
                  <MdEmail size="1.2em" />
                </PlainLink>
                {data.email}
              </FlexBox>
              <FlexBox direction="row" fontSize="1em" justify="flex-start">
                <PlainLink href={`tel:${data.phoneNumber}`}>
                  <FaPhoneSquareAlt size="1.2em" />
                </PlainLink>
                {data.phoneNumber}
              </FlexBox>
            </address>
          </PageFlexBox>
        </Col>
        <Col xs={12} md={7} pull={{ md: 5 }}>
          <PageFlexBox verticalPad="50" horizontalPad="50">
            <StyledForm name="contact" method="POST" data-netlify="true">
              <StyledLabel htmlFor="email">Your email</StyledLabel>
              <StyledInput
                type="text"
                name="email"
                // placeholder="Email"
                id="email"
              />
              <StyledLabel htmlFor="phone">Your phone number</StyledLabel>
              <StyledInput
                type="text"
                name="phone"
                // placeholder="phonenumber"
                id="phone"
              />
              <StyledLabel htmlFor="customer-query">Your query</StyledLabel>
              <StyledTextArea
                name="customerQuery"
                id="customer-query"
                placeholder="Ask for a quote..."
              ></StyledTextArea>
              <ActionButton type="submit">Submit</ActionButton>
            </StyledForm>
          </PageFlexBox>
        </Col>
      </Row>
    </MainArea>
  )
}

const ContactUsPage = ({ data, frontmatter }) => {
  return <ContactUsPageTemplate data={data.sitedata.frontmatter} />
}

export default ContactUsPage

export const pageQuery = graphql`
  query ContactUsPageTemplate {
    sitedata: markdownRemark(
      frontmatter: { templateKey: { eq: "site-data" } }
    ) {
      frontmatter {
        socialmedia
        addressLine
        phoneNumber
        email
      }
    }
  }
`
