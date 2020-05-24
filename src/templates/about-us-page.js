import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { AppParallaxText } from "../components/parallax-image-text"
import { Container } from "react-grid-system"
import { PaddedBox } from "@custom-lib"
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

export const AboutUsPageTemplate = ({ mainImage, intro }) => {
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
      ...IntroFields
      ...MainImageFields
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
