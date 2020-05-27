import React from "react"
import { graphql } from "gatsby"

const ProfilePage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Victorious</h1>
      <h1>Victorious</h1>
      <h1>Victorious</h1>
      <h1>Victorious</h1>
      <h1>Victorious</h1>
      <h1>Victorious</h1>
      <h1>Victorious</h1>
    </div>
  )
}

// export const PageQuery = graphql`
//   query($name: String!) {
//     markdownRemark(frontmatter: { profiles: { name: $name } }) {
//       frontmatter {
//         profiles {
//           name
//         }
//       }
//     }
//   }
// `
export const PageQuery = graphql`
  query ProfilePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-us-page" } }) {
      frontmatter {
        profiles {
          name
          blurb
          position
          image {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default ProfilePage
