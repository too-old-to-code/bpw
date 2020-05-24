import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Tween, Timeline } from "react-gsap"
import { ParallaxImageText } from "../components/parallax-image-text"
import { Row, Col, Hidden, Container } from "react-grid-system"
import {
  Parallax,
  PreviewSafeImage,
  FlexBox,
  Paragraph,
  Heading,
  PaddedBox,
} from "@custom-lib"
import styled from "styled-components"

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    justify-content: center;
  }
`

const TextBox = ({ heading, text }) => {
  return (
    <PaddedBox maxWidth="600px">
      <Heading>{heading}</Heading>
      {text.map(({ paragraph }, i) => (
        <Paragraph key={i}>{paragraph}</Paragraph>
      ))}
    </PaddedBox>
  )
}

const ParallaxText = () => {
  return (
    <ParallaxImageText>
      <div>Here is the page heading</div>
    </ParallaxImageText>
  )
}

export const OurServicesPageTemplate = ({ mainImage, intro }) => {
  const { mobile, desktop, description } = mainImage
  return (
    <React.Fragment>
      <Parallax
        image={
          <PreviewSafeImage
            position={[desktop.xPos, desktop.yPos]}
            alt={description}
            image={desktop.image}
          />
        }
        mobileImage={
          <PreviewSafeImage
            image={mobile.image}
            position={[mobile.xPos, mobile.yPos]}
            alt={description}
          />
        }
        height="90vh"
        mobileHeight="90vh"
        content={
          <Container
            style={{ height: "100%", flexDirection: "column", display: "flex" }}
          >
            <InnerContainer>
              <ParallaxText />
            </InnerContainer>
          </Container>
        }
      />
      <PaddedBox horizontal="40" vertical="40">
        <TextBox heading={intro.heading} text={intro.text} />
      </PaddedBox>
    </React.Fragment>
  )
}

const OurServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <OurServicesPageTemplate
      mainImage={frontmatter.mainImage}
      intro={frontmatter.introduction}
    />
  )
}

export default OurServicesPage

export const PageQuery = graphql`
  query OurServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "our-services" } }) {
      frontmatter {
        introduction {
          heading
          text {
            paragraph
          }
        }
        mainImage {
          description
          desktop {
            xPos
            yPos
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          mobile {
            xPos
            yPos
            image {
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

OurServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
