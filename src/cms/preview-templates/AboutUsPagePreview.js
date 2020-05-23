import React from "react"
import PropTypes from "prop-types"
import { AboutUsPageTemplate } from "../../templates/about-us-page"

const AboutUsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(entry)
  if (data) {
    console.log(data)
    return (
      <AboutUsPageTemplate
        mainImage={data.mainImage}
        intro={data.introduction}
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
