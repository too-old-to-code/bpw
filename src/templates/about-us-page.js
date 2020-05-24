import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Tween, Timeline } from "react-gsap"
import {
  ParallaxImageText,
  AppParallaxText,
} from "../components/parallax-image-text"
import { Row, Col, Hidden, Container } from "react-grid-system"
import {
  Parallax,
  PreviewSafeImage,
  CheckerDuo,
  PopIn,
  FlexBox,
  Paragraph,
  Heading,
  PaddedBox,
} from "@custom-lib"
import { AppParallax } from "../components/app-parallax"
import { AppTextBox } from "../components/app-text-box"
import styled from "styled-components"

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    justify-content: center;
  }
`

// const TextBox = ({ heading, text }) => {
//   return (
//     <PaddedBox maxWidth="600px">
//       <Heading>{heading}</Heading>
//       {text.map(({ paragraph }, i) => (
//         <Paragraph key={i}>{paragraph}</Paragraph>
//       ))}
//     </PaddedBox>
//   )
// }

const ParallaxText = () => {
  return (
    <ParallaxImageText>
      <div>Here is the page heading</div>
    </ParallaxImageText>
  )
}

export const AboutUsPageTemplate = ({ mainImage, intro }) => {
  const { mobile, desktop, description } = mainImage
  return (
    <React.Fragment>
      <AppParallax mainImage={mainImage}>
        <Container
          style={{ height: "100%", flexDirection: "column", display: "flex" }}
        >
          <InnerContainer>
            <AppParallaxText text={mainImage?.text} />
          </InnerContainer>
        </Container>
      </AppParallax>
      <PaddedBox horizontal="40" vertical="40">
        <AppTextBox heading={intro.heading} text={intro.text} />
      </PaddedBox>
    </React.Fragment>
  )
}

const AboutUsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <AboutUsPageTemplate
      mainImage={frontmatter.mainImage}
      intro={frontmatter.introduction}
    />
  )
}

export default AboutUsPage

export const PageQuery = graphql`
  query AboutUsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-us-page" } }) {
      frontmatter {
        introduction {
          heading
          text {
            paragraph
          }
        }
        mainImage {
          text {
            words
            animate
            animation
            color
          }
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

AboutUsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
