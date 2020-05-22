import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Tween, Timeline } from "react-gsap"
import { ParallaxImageText } from "../components/parallax-image-text"
import { Row, Col, Hidden, Container } from "react-grid-system"
import { Parallax, PreviewSafeImage } from "@custom-lib"
import styled from "styled-components"

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    justify-content: center;
  }
`

const ParallaxText = () => {
  return (
    <ParallaxImageText>
      <Timeline>
        {["Independent", "Trusted", "Professional"].map(word => {
          return (
            <Tween
              key={word}
              ease="Power2.easeIn"
              duration="1"
              from={{
                xPercent: -150,
              }}
            >
              <div>{word}</div>
            </Tween>
          )
        })}
        <Tween
          ease="Power2.easeIn"
          duration="1"
          from={{
            opacity: 0,
          }}
        >
          <div style={{ color: "white" }}>Insurance brokers</div>
        </Tween>
      </Timeline>
    </ParallaxImageText>
  )
}

export const IndexPageTemplate = ({ image, mobileImage, exampleImage }) => {
  return (
    <React.Fragment>
      <Parallax
        image={<PreviewSafeImage image={exampleImage} />}
        mobileImage={<PreviewSafeImage image={exampleImage} />}
        height="90vh"
        mobileHeight="90vh"
        content={
          <Container
            style={{ height: "100%", flexDirection: "column", display: "flex" }}
          >
            <InnerContainer>
              <ParallaxText />
            </InnerContainer>
            <InnerContainer>
              <button>hello</button>
            </InnerContainer>
          </Container>
        }
      />
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>

      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </React.Fragment>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      exampleImage={data.exampleImage}
      mobileImage={frontmatter.mobileImage}
      image={frontmatter.image}
    />
  )
}

export default IndexPage

export const PageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image
        mobileImage
      }
    }
    exampleImage: file(relativePath: { eq: "example-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const PageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         image {
//           childImageSharp {
//             fluid(maxWidth: 1500) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         mobileImage {
//           childImageSharp {
//             fluid(maxWidth: 500) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

IndexPage.propTypes = {
  data: PropTypes.shape({
    exampleImage: PropTypes.any,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
