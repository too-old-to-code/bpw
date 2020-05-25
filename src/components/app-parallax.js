import React from "react"
import { Parallax, PreviewSafeImage } from "@custom-lib"
import { Container } from "react-grid-system"
export const AppParallax = ({ mainImage, children }) => {
  const { mobile, desktop, description } = mainImage
  return (
    <Parallax
      image={
        <PreviewSafeImage
          position={[desktop.xPos, desktop.yPos]}
          alt={description}
          image={desktop.image}
        />
      }
      mobileImage={
        <PreviewSafeImage
          image={mobile.image}
          position={[mobile.xPos, mobile.yPos]}
          alt={description}
        />
      }
      height="90vh"
      mobileHeight="90vh"
      content={
        <Container
          style={{
            height: "100%",
            flexDirection: "column",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {children}
        </Container>
      }
    />
  )
}
