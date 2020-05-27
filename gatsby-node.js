const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              profiles {
                name
                position
                blurb
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // const people = result.data.allMarkdownRemark.edges
    //   .map(edge => edge.node.frontmatter.profiles)
    //   .filter(a => a)

    // people[0].forEach(person => {
    //   const slug = person.name.split(" ")[0].toLowerCase()

    //   createPage({
    //     path: slug,
    //     component: path.resolve(`src/templates/profile.js`),
    //     context: {
    //       slug: person.name,
    //     },
    //   })
    // })

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(edge => {
      if (edge.node.frontmatter.templateKey === "site-data") return
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        // tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

// This will create the routes for the templates
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    // console.log(getNode(node.parent))
    // console.log(value, " <-----------------------------")
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
