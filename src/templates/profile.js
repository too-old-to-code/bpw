import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import { PreviewSafeImage, Heading } from "@custom-lib"
import styled from "styled-components"
import { PaddedBox, FlexBox } from "@custom-lib"
import { Controller, Scene } from "react-scrollmagic"
import { Hidden, Visible } from "react-grid-system"

const MainArea = styled.main`
  padding-top: ${({ theme }) => theme?.navbar?.height};
`

const ImageContainer = styled.div`
  width: 300px;
  // position: fixed;
  box-shadow: 5px 5px 25px grey;
  @media (max-width: ${({ theme }) => theme?.bpoints[0]}px) {
    // width: 50%;
    max-width: 100%;
    min-width: 100%;
    box-shadow: none;
    position: relative;
  }
`

const ProfilePage = ({ data }) => {
  const [duration, setDuration] = useState(0)

  const textContent = useRef()
  const imageWrap = useRef()

  let test = data.markdownRemark.frontmatter

  useEffect(() => {
    let picSize = imageWrap.current.offsetHeight
    const calculateDuration = () => {
      let duration =
        textContent?.current?.offsetHeight - imageWrap?.current?.offsetHeight
      setDuration(duration > 0 ? duration : 1)
    }

    calculateDuration()

    if (typeof window !== "undefined")
      window.addEventListener("resize", calculateDuration)
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", calculateDuration)
    }
  })

  return (
    <FlexBox
      horizontalPad="40"
      verticalPad="40"
      direction="row"
      align="flex-start"
      justify="flex-start"
    >
      <div>
        <Controller>
          <Scene
            duration={duration}
            triggerHook="0"
            pin
            triggerElement=".main-area"
          >
            <ImageContainer>
              <div ref={imageWrap}>
                <PreviewSafeImage
                  image={test.image}
                  alt={test.name}
                  position={[50, 50]}
                />
              </div>
            </ImageContainer>
          </Scene>
        </Controller>
      </div>
      <PaddedBox
        vertical="40"
        horizontal="40"
        id="mytest"
        ref={textContent}
        maxWidth="600px"
      >
        <div
          css={`
            border-bottom: 4px solid #06426a;
          `}
        >
          <Heading
            as="h1"
            css={`
              color: #06426a;
              text-align: left;
              margin: 0;
            `}
          >
            {data.markdownRemark.frontmatter.name}
          </Heading>
          <Heading
            css={`
              color: #06426a;
              text-align: left;
            `}
          >
            {data.markdownRemark.frontmatter.position}
          </Heading>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </PaddedBox>
    </FlexBox>
  )
}

const ProfilePageMobile = ({ data }) => {
  let test = data.markdownRemark.frontmatter

  return (
    <FlexBox horizontalPad="10" verticalPad="40" justify="flex-start">
      <div>
        <ImageContainer>
          <PreviewSafeImage
            image={test.image}
            alt={test.name}
            position={[50, 50]}
          />
        </ImageContainer>
      </div>
      <PaddedBox
        vertical="40"
        horizontal="40"
        id="mytest"
        maxWidth="600px"
        style={{ textAlign: "justify" }}
      >
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </PaddedBox>
    </FlexBox>
  )
}

export const pageQuery = graphql`
  query ProfileByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        position
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// export default ProfilePage

export default ({ data }) => {
  return (
    <MainArea className="main-area">
      <Visible xs>
        <ProfilePageMobile data={data} />
      </Visible>
      <Hidden xs>
        <ProfilePage data={data} />
      </Hidden>
    </MainArea>
  )
}
// query MyQuery($id: String!) {
//   markdownRemark(id: {eq: $id}) {
//     frontmatter {
//       name
//       profiles {
//         name
//       }
//     }
//   }
//   allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "profile" } } }) {
//     edges {
//       node {
//         fields {
//           slug
//         }
//         frontmatter {
//           blurb
//           name
//           position

//         }
//       }
//     }
//   }
// }
