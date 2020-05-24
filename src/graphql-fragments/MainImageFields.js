import { graphql } from "gatsby"

export const mainImageFields = graphql`
  fragment MainImageFields on MarkdownRemark {
    frontmatter {
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
    }
  }
`
