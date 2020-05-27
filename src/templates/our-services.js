import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { PaddedBox } from "@custom-lib"
import { AppParallaxText } from "../components/parallax-image-text"
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

export const OurServicesPageTemplate = ({ mainImage, intro }) => {
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
      ...IntroFields
      ...MainImageFields
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
