import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Tween, Timeline } from "react-gsap"
import {
  ParallaxImageText,
  AppParallaxText,
} from "../components/parallax-image-text"
import { Row, Col, Hidden, Container } from "react-grid-system"
import {
  Parallax,
  CheckerDuo,
  PopIn,
  FlexBox,
  Paragraph,
  Heading,
  PaddedBox,
  PreviewSafeImage,
} from "@custom-lib"
import styled from "styled-components"
import { AppParallax } from "../components/app-parallax"
import { AppTextWithBullets } from "../components/app-text-with-bullets"

const MarginOnMobile = styled.div`
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    margin: 20px 5px;
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 50px;
  }
`

const CallToAction = styled(Link)`
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 0;
  border: none;
  // background-color: #0a98d8;
  background-color: rgb(6, 66, 106);
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    width: 150px;
    // height: 60px;
    // font-size: 1.5em;
  }
`

export const IndexPageTemplate = ({
  mainImage,
  intro,
  categoryPitches,
  bulletPoints,
}) => {
  const { mobile, desktop, description } = mainImage
  return (
    <React.Fragment>
      <AppParallax mainImage={mainImage}>
        <Container
          style={{
            height: "100%",
            flexDirection: "column",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <InnerContainer>
            <AppParallaxText text={mainImage?.text} />
          </InnerContainer>
          <InnerContainer>
            <CallToAction to="/about-us">{mainImage.callToAction}</CallToAction>
          </InnerContainer>
        </Container>
      </AppParallax>
      <AppTextWithBullets intro={intro} bulletPoints={bulletPoints} />

      {categoryPitches &&
        categoryPitches.map((pitch, index) => {
          return (
            <MarginOnMobile>
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
            </MarginOnMobile>
          )
        })}
    </React.Fragment>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      mainImage={frontmatter.mainImage}
      intro={frontmatter.introduction}
      categoryPitches={frontmatter.categorypitch}
      bulletPoints={frontmatter.bulletPoints}
    />
  )
}

export default IndexPage

export const PageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
          callToAction
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
        categorypitch {
          text
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        bulletPoints {
          title
          list {
            item
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
