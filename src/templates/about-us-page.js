import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { AppParallaxText } from "../components/parallax-image-text"
import { Container } from "react-grid-system"
import { PaddedBox, Heading } from "@custom-lib"
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

export const AboutUsPageTemplate = ({ mainImage, intro, ourTeam }) => {
  return (
    <React.Fragment>
      <AppParallax mainImage={mainImage}>
        <InnerContainer>
          <AppParallaxText text={mainImage?.text} />
        </InnerContainer>
      </AppParallax>
      <PaddedBox horizontal="40" vertical="40">
        <AppTextBox heading={intro.heading} text={intro.text} />
      </PaddedBox>
      <PaddedBox
        horizontal="40"
        vertical="40"
        style={{ background: "#06426a" }}
      >
        <Heading as="h2" color="white">
          Our people offer unrivalled service and knowledge
        </Heading>
      </PaddedBox>
      <PaddedBox horizontal="40" vertical="40">
        <AppTextBox heading={ourTeam.heading} text={ourTeam.text} />
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
      ourTeam={frontmatter.ourTeam}
    />
  )
}

export default AboutUsPage

export const PageQuery = graphql`
  query AboutUsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-us-page" } }) {
      ...IntroFields
      ...MainImageFields
      ...OurTeamFields
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
