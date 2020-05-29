import React from "react"
import PropTypes from "prop-types"
import { AboutUsPageTemplate } from "../../templates/about-us-page"

const AboutUsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(data)
  const { edges } = data.allMarkdownRemark
  const employees = edges.map(edge => ({
    slug: edge.node.fields.slug,
    employee: edge.node.frontmatter,
  }))

  if (data) {
    return (
      <AboutUsPageTemplate
        mainImage={data.mainImage}
        intro={data.introduction}
        ourTeam={data.ourTeam}
        employees={employees}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutUsPagePreview
