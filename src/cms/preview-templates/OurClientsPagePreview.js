import React from "react"
import PropTypes from "prop-types"
import { OurClientsPageTemplate } from "../../templates/our-clients"

const OurClientsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(entry)
  if (data) {
    console.log(data)
    return (
      <OurClientsPageTemplate
        mainImage={data.mainImage}
        intro={data.introduction}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OurClientsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OurClientsPagePreview
