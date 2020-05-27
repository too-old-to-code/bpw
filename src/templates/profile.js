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
// export const PageQuery = graphql`
//   query ProfilePageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "about-us-page" } }) {
//       frontmatter {
//         profiles {
//           name
//           blurb
//           position
//           image {
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query ProfileByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        blurb
        name
        position
      }
    }
  }
`

export default ProfilePage

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
