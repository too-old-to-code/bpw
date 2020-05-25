import React from "react"
import PropTypes from "prop-types"
import { OurServicesPageTemplate } from "../../templates/our-services"

const OurServicesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(entry)
  if (data) {
    console.log(data)
    return (
      <OurServicesPageTemplate
        mainImage={data.mainImage}
        intro={data.introduction}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OurServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OurServicesPagePreview
