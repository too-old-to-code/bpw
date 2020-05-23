import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(entry)
  if (data) {
    console.log(data)
    return (
      <IndexPageTemplate
        mainImage={data.mainImage}
        intro={data.introduction}
        categoryPitches={data.categorypitch}
        bulletPoints={data.bulletPoints}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
