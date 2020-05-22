import React from "react"
import Img from "gatsby-image"

export const PreviewSafeImage = ({ image }) => {
  return image.childImageSharp ? (
    <Img
      fluid={image.childImageSharp.fluid}
      style={{ objectFit: "cover", objectPosition: "70% 100%" }}
    />
  ) : (
    <img
      src={image}
      alt=""
      style={{ objectFit: "cover", objectPosition: "70% 100%" }}
    />
  )
}
