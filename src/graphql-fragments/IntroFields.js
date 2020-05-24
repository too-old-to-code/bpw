import { graphql } from "gatsby"

export const introFields = graphql`
  fragment IntroFields on MarkdownRemark {
    frontmatter {
      introduction {
        heading
        text {
          paragraph
        }
      }
    }
  }
`
