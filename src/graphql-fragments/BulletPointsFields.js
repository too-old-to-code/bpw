import { graphql } from "gatsby"

export const bulletPointsFields = graphql`
  fragment BulletPointsFields on MarkdownRemark {
    frontmatter {
      bulletPoints {
        title
        list {
          item
        }
      }
    }
  }
`
