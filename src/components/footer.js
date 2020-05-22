import React from "react"
import { SocialIcon } from "react-social-icons"
import Img from "gatsby-image"
import { Row, Col, Hidden } from "react-grid-system"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 40px;
  background-color: #06426a;
`

const PlainLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`

const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    align-items: flex-start;
  }
`

export const Footer = ({ image, siteData }) => {
  return (
    <StyledFooter>
      <Row>
        <Col xs={12} sm={6}>
          <FooterBlock>
            <div>
              <div style={{ fontWeight: "bold" }}>Contact us:</div>
              <address>
                {siteData.addressLine.map(line => {
                  return <div key={line}>{line}</div>
                })}
                <br />
                <PlainLink href={`tel:${siteData.phoneNumber}`}>
                  {siteData.phoneNumber}
                </PlainLink>
                <PlainLink href={`mailto:${siteData.email}`}>
                  {siteData.email}
                </PlainLink>
              </address>
            </div>
          </FooterBlock>
        </Col>
        <Hidden xs>
          <Col sm={6}>
            <FooterBlock>
              <div style={{ width: "150px" }}>
                <Img fluid={image.childImageSharp.fluid} />
              </div>
            </FooterBlock>
          </Col>
        </Hidden>
      </Row>
      <hr style={{ margin: "40px 30px", borderTop: 0 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {siteData.socialmedia.map(sm => {
          return (
            <SocialIcon
              key={sm}
              fgColor="white"
              url={sm}
              style={{ margin: "10px" }}
            />
          )
        })}
      </div>
    </StyledFooter>
  )
}
