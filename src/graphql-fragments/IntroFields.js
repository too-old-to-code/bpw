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

export const ourTeamFields = graphql`
  fragment OurTeamFields on MarkdownRemark {
    frontmatter {
      ourTeam {
        heading
        text {
          paragraph
        }
      }
    }
  }
`
