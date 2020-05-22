import React from "react"
import PropTypes from "prop-types"
import styled, { withTheme } from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { Overlay } from "../structure"

const ParallaxContainer = styled.div`
  overflow: hidden;
  position: relative;
`

const ParallaxPanel = styled.div.attrs(({ height = "90vh" }) => ({
  style: { height },
}))`
  position: relative;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  height: 100%;

  > div {
    height: 100%;
  }
`
// This will create a vertically parallax-scrolling image
// At mobiles sizes this effect is disabled for performance reasons.
export const Parallax = withTheme(props => (
  <React.Fragment>
    {window.innerWidth > props.theme.bpoints[0] ? (
      <ParallaxContainer>
        <Controller>
          <Scene duration="200%" triggerHook={props.triggerHook}>
            <Timeline wrapper={<ParallaxPanel height={props.height} />}>
              <Tween from={{ yPercent: 0 }} to={{ yPercent: 30 }}>
                <ImageWrapper>{props.image}</ImageWrapper>
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
        <Overlay>{props.content}</Overlay>
      </ParallaxContainer>
    ) : (
      <ParallaxContainer>
        <ParallaxPanel height={props.mobileHeight}>
          <ImageWrapper>{props.mobileImage}</ImageWrapper>
        </ParallaxPanel>
        <Overlay>{props.content}</Overlay>
      </ParallaxContainer>
    )}
  </React.Fragment>
))

Parallax.propTypes = {
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  content: PropTypes.any,
  image: PropTypes.any,
  hideOnMobile: PropTypes.bool,
  triggerHook: PropTypes.string,
}

Parallax.defaultProps = {
  content: "",
  triggerHook: "onLeave",
}
