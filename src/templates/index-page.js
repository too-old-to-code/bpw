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

const PaddedBox = styled.div`
  padding: ${({ vertical = 0, horizontal = 0 }) =>
    `${vertical}px ${horizontal}px`};
  margin: 0 auto;
  max-width: ${({ maxWidth = "inherit" }) => maxWidth};
`

const Heading = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme?.textbox?.headingColor};
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme?.textbox?.textColor};
  line-height: ${({ theme }) => theme?.textbox?.lineHeight};
`

const TextBox = () => {
  return (
    <PaddedBox maxWidth="600px">
      <Heading>This is a heading</Heading>
      <Paragraph>
        As one of the most respected and trusted independent insurance brokers
        based in Newport, South Wales we have been providing our clients with
        the highest levels of service and expertise for over 35 years. As
        commercial specialists, whatever your business, our highly trained team
        will get it fully covered. We provide a personal service with the same
        consultant working with you throughout the entire process. We search the
        market for the best premiums to ensure you get the most out of your
        insurance.
      </Paragraph>
      <Paragraph>
        As specialists in commercial insurance we can offer the care and
        technical expertise your business needs to ensure it is always fully
        covered. Our extensive relationships with the major insurers, as well as
        the more specialist providers, means that we can provide you with the
        highest possible levels of cover at the most competitive prices. We also
        provide for the personal insurance needs of our commercial clients.
      </Paragraph>
    </PaddedBox>
  )
}

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

export const IndexPageTemplate = ({ mainImage }) => {
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
            <InnerContainer>
              <button>hello</button>
            </InnerContainer>
          </Container>
        }
      />
      <Container>
        <PaddedBox vertical="40">
          <Row>
            <Col md={8} sm={6} xs={12}>
              <TextBox />
            </Col>
            <Col md={4} sm={6} xs={12}>
              <div
                style={{
                  height: "300px",
                  width: "300px",
                  background: "green",
                }}
              ></div>
            </Col>
          </Row>
        </PaddedBox>
      </Container>
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

  return <IndexPageTemplate mainImage={frontmatter.mainImage} />
}

export default IndexPage

// export const PageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         image
//         mobileImage
//       }
//     }
//     exampleImage: file(relativePath: { eq: "example-image.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export const PageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
