import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
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

const BulletPointsWrapper = styled(FlexBox)`
  flex: 1;
  min-width: 400px;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    padding: ${({ verticalPad = "0" }) => `${verticalPad / 2}px 0px`};
    text-align: justify;
    min-width: inherit;
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

const IntroWithAside = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    flex-direction: column;
  }
`

const ParallaxText = text => {
  const items = [
    {
      string: "Independent",
      animate: true,
      animation: "slide",
      color: "rgb(160, 216, 123)",
    },
    {
      string: "Trusted",
      animate: true,
      animation: "slide",
      color: "rgb(160, 216, 123)",
    },
    {
      string: "Professional",
      animate: true,
      animation: "slide",
      color: "rgb(160, 216, 123)",
    },
    {
      string: "Insurance brokers",
      animate: true,
      animation: "fade",
      color: "white",
    },
  ]
  return (
    <ParallaxImageText>
      <Timeline>
        {items.map(({ string, animate, animation, color }) => {
          return animate ? (
            <Tween
              key={string}
              ease="Power2.easeIn"
              duration="1"
              from={animation === "slide" ? { xPercent: -150 } : { opacity: 0 }}
            >
              <div style={{ color }}>{string}</div>
            </Tween>
          ) : (
            <div style={{ color }}>{string}</div>
          )
        })}
      </Timeline>
    </ParallaxImageText>
  )
}

const List = styled.ul`
  li {
    font-size: 1rem;
    margin: 10px 0;
  }
`

const BulletPointsList = ({ content }) => {
  return (
    <FlexBox
      verticalPad="20"
      horizontalPad="20"
      fontSize="1rem"
      style={{
        backgroundColor: "#06426A",
        width: "100%",
      }}
    >
      {content.title && (
        <Heading style={{ marginBottom: 0, color: "var(--not-quite-white)" }}>
          {content.title}
        </Heading>
      )}
      <List style={{ color: "var(--not-quite-white)" }}>
        {content.list.map(({ item }, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </FlexBox>
  )
}

export const IndexPageTemplate = ({
  mainImage,
  intro,
  categoryPitches,
  bulletPoints,
}) => {
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
            style={{
              height: "100%",
              flexDirection: "column",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <InnerContainer>
              <ParallaxText />
            </InnerContainer>
            <InnerContainer>
              <CallToAction to="/about-us">
                {mainImage.callToAction}
              </CallToAction>
            </InnerContainer>
          </Container>
        }
      />

      <PaddedBox horizontal="40">
        <IntroWithAside>
          <BulletPointsWrapper
            verticalPad="40"
            horizontalPad="20"
            style={{ flex: 2 }}
            fontSize="1rem"
          >
            <TextBox
              heading={intro.heading}
              text={intro.text}
              style={{ flex: 1 }}
            />
          </BulletPointsWrapper>
          <BulletPointsWrapper verticalPad="40" horizontalPad="20">
            <BulletPointsList content={bulletPoints} />
          </BulletPointsWrapper>
        </IntroWithAside>
      </PaddedBox>

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
        introduction {
          heading
          text {
            paragraph
          }
        }
        mainImage {
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
