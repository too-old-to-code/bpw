import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Tween, Timeline } from "react-gsap"
import { ParallaxImageText } from "../components/parallax-image-text"
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

const List = styled.ul`
  li {
    margin: 10px 0;
  }
`

const BulletPointsList = ({ content }) => {
  return (
    <FlexBox
      verticalPad="20"
      horizontalPad="20"
      style={{
        backgroundColor: "#06426A",
        width: "100%",
        fontSize: "1em",
      }}
    >
      {content.title && (
        <Heading style={{ marginBottom: 0, color: "var(--not-quite-white)" }}>
          Why Pick Us?
        </Heading>
      )}
      <List style={{ color: "var(--not-quite-white)" }}>
        {content.list.map(({ item }) => (
          <li>{item}</li>
        ))}
      </List>
    </FlexBox>
  )
}

export const AboutUsPageTemplate = ({ mainImage, intro }) => {
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
              <TextBox heading={intro.heading} text={intro.text} />
            </Col>
            <Col
              md={4}
              sm={6}
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <BulletPointsList content={bulletPoints} />
            </Col>
          </Row>
        </PaddedBox>
      </Container>

      {categoryPitches &&
        categoryPitches.map((pitch, index) => {
          return (
            <CheckerDuo
              key={pitch.title}
              image={
                <PreviewSafeImage
                  image={pitch.image}
                  alt={pitch.title}
                  position={[50, 50]}
                />
              }
              height="350px"
              textPosition={index % 2 === 0 ? "right" : "left"}
              backgroundColor="rgba(50,70,80, .85)"
            >
              <FlexBox
                verticalPad="50"
                horizontalPad="40"
                style={{ color: "var(--not-quite-white)" }}
              >
                <PopIn>
                  <div style={{ maxWidth: "400px" }}>
                    <Heading
                      as="h2"
                      style={{ margin: 0, color: "var(--not-quite-white)" }}
                    >
                      {pitch.title}
                    </Heading>
                    <p>{pitch.text}</p>
                  </div>
                </PopIn>
              </FlexBox>
            </CheckerDuo>
          )
        })}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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

AboutUs.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
