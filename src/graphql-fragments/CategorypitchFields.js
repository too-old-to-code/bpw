import { graphql } from "gatsby"

export const categorypitchFields = graphql`
  fragment CategorypitchFields on MarkdownRemark {
    frontmatter {
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
    }
  }
`
